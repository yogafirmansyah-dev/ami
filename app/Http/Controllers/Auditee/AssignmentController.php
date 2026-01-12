<?php

namespace App\Http\Controllers\Auditee;

use App\Http\Controllers\Controller;
use App\Models\{Assignment, Prodi, Faculty};
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Gate;

class AssignmentController extends Controller
{
    public function index(Request $request)
    {
        $user = auth()->user();

        // 1. Tentukan Identitas Unit secara Dinamis
        $assignableType = $user->prodi_id ? Prodi::class : Faculty::class;
        $assignableId = $user->prodi_id ?? $user->faculty_id;

        // 2. Tangkap filter dari request
        $filters = $request->only(['search', 'status', 'per_page']);

        $assignments = Assignment::with(['period', 'standard', 'auditor'])
            // Menghitung total indikator dalam penugasan ini
            ->withCount('indicators')
            // Menghitung indikator yang sudah diisi buktinya oleh Auditee
            ->withCount([
                'indicators as evidence_count' => function ($query) {
                    $query->where(function ($q) {
                        $q->whereNotNull('evidence_path')
                            ->orWhereNotNull('evidence_url');
                    });
                }
            ])
            // Filter berdasarkan Unit Kerja User
            ->where('assignable_type', $assignableType)
            ->where('assignable_id', $assignableId)

            // --- TAMBAHAN: Logika Filter Status agar tombol di Vue berfungsi ---
            ->when($request->status === 'on_going', function ($query) {
                $query->whereNull('completed_at');
            })
            ->when($request->status === 'completed', function ($query) {
                $query->whereNotNull('completed_at');
            })

            // Pencarian & Urutan
            ->search($request->search)
            ->latest()
            ->paginate($request->input('per_page', 10))
            ->withQueryString();

        return inertia('Auditee/Assignment/Index', [
            'assignments' => $assignments,
            'filters' => $filters // Kirim balik ke Vue agar state tombol & input tetap terjaga
        ]);
    }

    public function show(Request $request, Assignment $assignment)
    {
        // 3. Otorisasi via Policy (Sudah mencakup pengecekan kepemilikan unit)
        // Gate::authorize('view', $assignment);

        $filters = $request->only(['search', 'sort_field', 'direction', 'per_page']);
        $perPage = $request->input('per_page', 25);

        // Load 'assignable' agar nama unit muncul di header UI
        $assignment->load(['period', 'standard', 'auditor', 'assignable', 'documents']);

        $indicators = $assignment->indicators()
            // Menggunakan scope search dari Trait Filterable agar konsisten
            ->search($request->search, ['snapshot_code', 'snapshot_requirement'])
            ->sort($request->sort_field ?? 'snapshot_code', $request->direction ?? 'asc')
            ->paginate($perPage)
            ->withQueryString();

        return inertia('Auditee/Assignment/Show', [
            'assignment' => $assignment,
            'indicators' => $indicators,
            'filters' => $filters,
            'currentStage' => $assignment->current_stage
        ]);
    }
}

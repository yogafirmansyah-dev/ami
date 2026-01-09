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
        $filters = $request->only(['search', 'sort_field', 'direction', 'per_page']);
        $perPage = $request->input('per_page', 10);

        // 1. Tentukan Identitas Unit User secara Dinamis
        $assignableType = $user->prodi_id ? Prodi::class : Faculty::class;
        $assignableId = $user->prodi_id ?? $user->faculty_id;

        $assignments = Assignment::with(['assignable', 'period', 'standard'])
            // 2. Query berdasarkan struktur polimorfik
            ->where('assignable_type', $assignableType)
            ->where('assignable_id', $assignableId)
            ->search($request->search)
            ->sort($request->sort_field, $request->direction)
            ->paginate($perPage)
            ->withQueryString();

        return inertia('Auditee/Assignments/Index', [
            'assignments' => $assignments,
            'filters' => $filters
        ]);
    }

    public function show(Request $request, Assignment $assignment)
    {
        // 3. Otorisasi via Policy (Sudah mencakup pengecekan kepemilikan unit)
        Gate::authorize('view', $assignment);

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

        return inertia('Auditee/Assignments/Show', [
            'assignment' => $assignment,
            'indicators' => $indicators,
            'filters' => $filters,
            'currentStage' => $assignment->current_stage
        ]);
    }
}

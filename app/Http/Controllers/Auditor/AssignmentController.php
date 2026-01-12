<?php

namespace App\Http\Controllers\Auditor;

use App\Enums\AssignmentDocType;
use App\Http\Controllers\Controller;
use App\Models\Assignment;
use App\Services\AssignmentService;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\{Session, Gate};
use Illuminate\Validation\Rule;

class AssignmentController extends Controller
{
    protected $assignmentService;

    public function __construct(AssignmentService $assignmentService)
    {
        $this->assignmentService = $assignmentService;
    }

    public function index(Request $request)
    {
        // 1. Tangkap parameter filter (search dan status)
        $filters = $request->only(['search', 'status', 'sort_field', 'direction', 'per_page']);
        $perPage = $request->input('per_page', 10);

        // 2. Query dasar: Hanya milik auditor yang sedang login
        $assignments = Assignment::with(['assignable', 'period', 'standard'])
            ->where('auditor_id', auth()->id())

            // 3. Logika Filter Status (Berdasarkan tombol di Vue)
            ->when($request->status === 'on_going', function ($query) {
                $query->whereNull('completed_at');
            })
            ->when($request->status === 'completed', function ($query) {
                $query->whereNotNull('completed_at');
            })

            // 4. Logika Perhitungan Progres (Penting untuk persentase di Vue)
            ->withCount([
                'indicators', // indicators_count
                'indicators as scored_indicators_count' => function ($query) {
                    $query->whereNotNull('score'); // Menghitung yang sudah dinilai
                }
            ])

            // 5. Search & Sort (Gunakan Scope yang ada di model)
            ->search($request->search)
            ->sort($request->sort_field ?? 'created_at', $request->direction ?? 'desc')

            // 6. Pagination
            ->paginate($perPage)
            ->withQueryString();

        return inertia('Auditor/Assignment/Index', [
            'assignments' => $assignments,
            'filters' => $filters
        ]);
    }

    public function show(Request $request, Assignment $assignment)
    {
        // Gate::authorize('view', $assignment);

        $assignment->load(['period', 'standard', 'assignable', 'auditor', 'documents', 'histories.user']);

        // Grouping dokumen resmi untuk sidebar/header
        $groupedDocuments = collect(AssignmentDocType::cases())->map(function ($type) use ($assignment) {
            return [
                'type' => $type->value,
                'label' => $type->label(),
                'file' => $assignment->documents->where('type', $type->value)->first()
            ];
        });

        $indicators = $assignment->indicators()
            ->search($request->search, ['snapshot_code', 'snapshot_requirement'])
            ->sort($request->sort_field ?? 'snapshot_code', $request->direction ?? 'asc')
            ->paginate($request->input('per_page', 10))
            ->withQueryString();

        return inertia('Auditor/Assignment/Show', [
            'assignment' => $assignment,
            'groupedDocuments' => $groupedDocuments,
            'indicators' => $indicators,
            'filters' => $request->only(['search']),
            'currentStage' => $assignment->current_stage
        ]);
    }

    public function uploadDocument(Request $request, Assignment $assignment)
    {
        // Gate::authorize('update', $assignment);

        $request->validate([
            'type' => ['required', Rule::enum(AssignmentDocType::class)],
            'file' => 'required|file|mimes:pdf|max:5120',
        ]);

        $stage = $assignment->current_stage;

        // Stage-Gate Validation menggunakan metode pembantu di Enum AuditStage
        if ($request->type === AssignmentDocType::FIELD_REPORT->value && !$stage->fieldReport()) {
            return back()->withErrors(['message' => 'BA Lapangan hanya diunggah pada tahap Lapangan.']);
        }

        if ($request->type === AssignmentDocType::FINAL_REPORT->value && !$stage->finalReport()) {
            return back()->withErrors(['message' => 'BA Final hanya diunggah pada tahap Pelaporan.']);
        }

        if ($request->type === AssignmentDocType::END_REPORT->value && !$stage->endReport()) {
            return back()->withErrors(['message' => 'Laporan Akhir hanya diunggah pada tahap Selesai.']);
        }

        DB::transaction(function () use ($assignment, $request) {
            $this->assignmentService->uploadAssignmentDocument(
                $assignment,
                $request->only('type'),
                $request->file('file'),
                auth()->id()
            );
        });

        Session::flash('toastr', ['type' => 'gradient-primary', 'content' => 'Dokumen resmi berhasil diunggah.']);
        return back();
    }

    public function finalize(Request $request, Assignment $assignment)
    {
        // Gate::authorize('finalize', $assignment);

        $validated = $request->validate([
            'summary_note' => 'required|string|min:10',
            'overall_rating' => 'required|integer|min:1|max:4',
        ]);

        DB::transaction(function () use ($assignment, $validated) {
            $this->assignmentService->finalizeAssignment($assignment, $validated, auth()->id());
        });

        Session::flash('toastr', ['type' => 'gradient-green-to-emerald', 'content' => 'Audit telah difinalisasi.']);
        return back();
    }
}

<?php

namespace App\Http\Controllers\Auditor;

use App\Enums\AssignmentDocType;
use App\Enums\AuditStage;
use App\Enums\FindingType;
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
            ->when($request->status === 'on_going', fn($q) => $q->where('current_stage', '!=', 'finished'))
            ->when($request->status === 'completed', fn($q) => $q->where('current_stage', 'finished'))

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

        // Grouping dokumen resmi
        $groupedDocuments = collect(AssignmentDocType::cases())->map(function ($type) use ($assignment) {
            return [
                'type' => $type->value,
                'label' => $type->label(),
                'file' => $assignment->documents->where('type', $type->value)->first()
            ];
        });

        // --- LOGIKA DINAMIS INDIKATOR ---
        $query = $assignment->indicators();

        // Jika tahap RTM_RTL, tampilkan HANYA temuan dan sertakan data RTL
        if ($assignment->current_stage === AuditStage::RTM_RTL) {
            $query->whereIn('finding_type', [FindingType::KTS, FindingType::OB])
                ->with('rtl');
        }

        $indicators = $query->search($request->search, ['snapshot_code', 'snapshot_requirement'])
            ->sort($request->sort_field ?? 'snapshot_requirement', $request->direction ?? 'asc')
            ->paginate($request->input('per_page', 10))
            ->withQueryString();

        return inertia('Auditor/Assignment/Show', [
            'assignment' => $assignment,
            'groupedDocuments' => $groupedDocuments,
            'indicators' => $indicators,
            'filters' => $request->only(['search', 'sort_field', 'direction']),
            // Kirim stage stats untuk Stepper di UI
            'stageStats' => Assignment::stageBreakdown(),
            'findingStats' => [
                'kts' => $assignment->indicators()->where('finding_type', 'KTS')->count(),
                'ob' => $assignment->indicators()->where('finding_type', 'OB')->count(),
                'unassessed' => $assignment->indicators()->whereNull('score')->count(),
                'total_indicators' => $assignment->indicators()->count(),
            ]
        ]);
    }

    public function uploadDocument(Request $request, Assignment $assignment)
    {
        $request->validate([
            'type' => ['required', Rule::enum(AssignmentDocType::class)],
            'file' => 'required|file|mimes:pdf|max:5120',
        ]);

        $stage = $assignment->current_stage;

        // Logika Validasi Stage-Gate
        $isValidStage = true;
        $errorMessage = "";

        if ($request->type === AssignmentDocType::FIELD_REPORT->value && !$stage->fieldReport()) {
            $isValidStage = false;
            $errorMessage = 'BA Lapangan hanya dapat diunggah pada tahap Audit Lapangan.';
        } elseif ($request->type === AssignmentDocType::FINAL_REPORT->value && !$stage->finalReport()) {
            $isValidStage = false;
            $errorMessage = 'BA Final hanya dapat diunggah pada tahap Pelaporan.';
        } elseif ($request->type === AssignmentDocType::END_REPORT->value && !$stage->endReport()) {
            $isValidStage = false;
            $errorMessage = 'Laporan Akhir hanya dapat diunggah pada tahap Selesai.';
        }

        if (!$isValidStage) {
            // Mengirim error kembali ke Inertia form.errors.message
            return back()->withErrors(['message' => $errorMessage]);
        }

        DB::transaction(function () use ($assignment, $request) {
            $this->assignmentService->uploadAssignmentDocument(
                $assignment,
                $request->only('type'),
                $request->file('file'),
                auth()->id()
            );
        });

        return back();
    }

    public function finalize(Request $request, Assignment $assignment)
    {
        // Gate::authorize('finalize', $assignment);
        if (!in_array($assignment->current_stage, [AuditStage::REPORTING, AuditStage::RTM_RTL])) {
            return back()->withErrors(['message' => 'Audit hanya bisa difinalisasi pada tahap Pelaporan atau RTM.']);
        }

        // Cek jika ada RTL yang belum CLOSED
        $hasIncompleteRtl = $assignment->rtl()->where('status', '!=', \App\Enums\RtlStatus::CLOSED)->exists();
        $hasMissingRtl = $assignment->indicators()
            ->whereIn('finding_type', [FindingType::KTS, FindingType::OB])
            ->doesntHave('rtl')
            ->exists();

        if ($hasIncompleteRtl || $hasMissingRtl) {
            return back()->withErrors(['message' => 'Masih terdapat Rencana Tindak Lanjut (RTL) yang belum lengkap atau belum ditutup (Closed). Harap selesaikan semua RTL sebelum finalisasi.']);
        }

        $validated = $request->validate([
            'summary_note' => 'required|string|min:10',
            'overall_rating' => 'required|integer|min:1|max:4',
        ]);

        DB::transaction(function () use ($assignment, $validated) {
            $this->assignmentService->finalizeAssignment($assignment, $validated, auth()->id());
        });

        Session::flash('toastr', ['type' => 'gradient-green-to-emerald', 'content' => 'Siklus AMI telah resmi diselesaikan dan dikunci.']);
        return back();
    }
}

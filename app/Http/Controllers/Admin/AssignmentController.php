<?php

namespace App\Http\Controllers\Admin;

use App\Enums\AssignmentDocType;
use App\Enums\AuditStage;
use App\Http\Controllers\Controller;
use App\Models\{Assignment, AssignmentIndicator, AuditHistory, Faculty, Prodi, Period, MasterStandard, User};
use App\Services\AssignmentService;
use Carbon\Carbon;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AssignmentController extends Controller
{
    protected $assignmentService;

    public function __construct(AssignmentService $assignmentService)
    {
        $this->assignmentService = $assignmentService;
    }

    /**
     * Menampilkan daftar penugasan berdasarkan Role
     */
    public function index(Request $request)
    {
        // 1. Ambil input filter & sort
        $filters = $request->only(['search', 'sort_field', 'direction', 'per_page']);
        $perPage = $request->input('per_page', 10);

        $assignments = Assignment::with(['assignable', 'period', 'standard', 'auditor'])
            ->search($request->search) // Memanggil scope kustom di model
            ->sort($request->sort_field, $request->direction) // Memanggil scope dari trait
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('Admin/Assignment/Index', [
            'assignments' => $assignments,
            'filters' => $filters,
            'stageBreakdown' => Assignment::stageBreakdown(),
            'prodis' => Prodi::all(['id', 'name']),
            'faculties' => Faculty::all(['id', 'name']),
            'periods' => Period::where('is_active', true)->get(['id', 'name']),
            'standards' => MasterStandard::all(['id', 'name']),
            'auditors' => User::where('role', 'auditor')->get(['id', 'name'])
        ]);
    }

    /**
     * Membuat penugasan & Snapshot Indikator via Service
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'period_id' => 'required|exists:periods,id',
            'master_standard_id' => 'required|exists:master_standards,id',
            'assignable_type' => 'required|in:prodi,faculty', // Alias untuk mempermudah UI
            'assignable_id' => [
                'required',
                'integer',
                // Validasi apakah ID ada di tabel yang benar
                function ($attribute, $value, $fail) use ($request) {
                    $table = $request->assignable_type === 'prodi' ? 'prodis' : 'faculties';
                    if (!\DB::table($table)->where('id', $value)->exists()) {
                        $fail("Unit yang dipilih tidak valid.");
                    }
                },
                // Validasi Unik
                Rule::unique('assignments')->where(function ($q) use ($request) {
                    return $q->where('period_id', $request->period_id)
                        ->where('assignable_type', $request->assignable_type === 'prodi'
                            ? Prodi::class
                            : Faculty::class)
                        ->where('assignable_id', $request->assignable_id)
                        ->where('auditor_id', $request->auditor_id)
                        ->where('master_standard_id', $request->master_standard_id);
                })
            ],
            'auditor_id' => 'required|exists:users,id',
        ]);

        // Cek apakah Standar cocok dengan Target Unit
        $standard = MasterStandard::findOrFail($validated['master_standard_id']);
        if ($standard->target_type->value !== $validated['assignable_type']) {
            session()->flash('error', 'Standar ini tidak cocok untuk tipe unit yang dipilih.');
            return back();
        }

        $assignableTypeMap = [
            'prodi' => Prodi::class,
            'faculty' => Faculty::class,
        ];

        $validated['assignable_type'] = $assignableTypeMap[$validated['assignable_type']];


        $assignment = DB::transaction(function () use ($validated) {
            return $this->assignmentService->createAssignment($validated);
        });


        Session::flash('toastr', [
            'type' => 'gradient-green-to-emerald',
            'content' => 'Penugasan AMI berhasil dibuat.'
        ]);
        return redirect()->route('admin.assignments.show', $assignment->id);
    }

    /**
     * Menampilkan detail penugasan dengan Fitur Search Indikator
     */
    public function show(Request $request, Assignment $assignment)
    {
        $filters = $request->only(['search', 'sort_field', 'direction', 'per_page']);
        $perPage = $request->input('per_page', 10);

        // Eager load relasi dasar
        $assignment->load(['period', 'standard', 'assignable', 'auditor', 'documents', 'histories.user']);

        // LOGIKA DINAMIS: Filter Indikator berdasarkan Stage
        $query = $assignment->indicators();

        if ($assignment->current_stage->value === AuditStage::RTM_RTL->value) {
            // Di tahap RTM, hanya tampilkan yang ada temuan (KTS/OB) dan muat relasi RTL
            $query->whereIn('finding_type', ['KTS', 'OB'])->with('rtl');
        }

        $indicators = $query->search($filters['search'] ?? null, ['snapshot_code', 'snapshot_requirement'])
            ->sort($filters['sort_field'] ?? 'snapshot_code', $filters['direction'] ?? 'asc')
            ->paginate($perPage)
            ->withQueryString();

        // Data Dokumen Tetap Sama
        $groupedDocuments = collect(AssignmentDocType::cases())->map(function ($type) use ($assignment) {
            return [
                'type' => $type->value,
                'label' => $type->label(),
                'files' => $assignment->documents->where('type', $type->value)->values()
            ];
        });

        return Inertia::render('Admin/Assignment/Show', [
            'assignment' => $assignment,
            'groupedDocuments' => $groupedDocuments,
            'indicators' => $indicators,
            'filters' => $filters,
            // Tambahkan statistik untuk progress bar di UI
            'stageStats' => Assignment::stageBreakdown(),
            'findingStats' => [
                'ks' => $assignment->indicators()->where('finding_type', 'KS')->count(),
                'kts' => $assignment->indicators()->where('finding_type', 'KTS')->count(),
                'ob' => $assignment->indicators()->where('finding_type', 'OB')->count(),
                'unassessed' => $assignment->indicators()->whereNull('finding_type')->count(),
                'total_indicators' => $assignment->indicators()->count(),
            ]
        ]);
    }

    /**
     * Mengunggah Berita Acara atau Laporan Akhir dengan validasi tahap
     */
    public function uploadDocument(Request $request, Assignment $assignment)
    {

        $request->validate([
            'type' => ['required', Rule::enum(AssignmentDocType::class)],
            'file' => 'required|file|mimes:pdf|max:5120',
        ]);

        $stage = $assignment->current_stage;

        // Validasi Tahap (Stage-Gate) agar auditor tidak salah unggah
        if ($request->type === AssignmentDocType::FIELD_REPORT->value && !$stage->fieldReport()) {
            return back()->withErrors(['message' => 'BA Lapangan hanya diunggah pada tahap ' . AuditStage::FIELD_AUDIT->label() . '.']);
        }

        if ($request->type === AssignmentDocType::FINAL_REPORT->value && !$stage->finalReport()) {
            return back()->withErrors(['message' => 'BA Final hanya diunggah pada tahap ' . AuditStage::REPORTING->label() . '.']);
        }

        if ($request->type === AssignmentDocType::END_REPORT->value && !$stage->endReport()) {
            return back()->withErrors(['message' => 'Laporan Akhir hanya diunggah pada tahap Audit Selesai.']);
        }

        DB::transaction(function () use ($assignment, $request) {
            $this->assignmentService->uploadAssignmentDocument(
                $assignment,
                $request->only('type'),
                $request->file('file'),
                auth()->id()
            );
        });

        Session::flash('toastr', ['type' => 'solid-blue', 'content' => 'Dokumen resmi berhasil diunggah.']);
        return back();
    }

    /**
     * Menghapus penugasan (Soft Delete)
     */
    public function destroy(Assignment $assignment)
    {
        // Prosedur Penghapusan Permanen
        DB::transaction(function () use ($assignment) {
            // Catat history sebelum data benar-benar hilang
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => Assignment::class,
                'historable_id' => $assignment->id,
                'stage' => $assignment->current_stage,
                'action' => 'delete_assignment',
                'old_values' => $assignment->toArray(),
            ]);

            // Hapus file fisik (evidence/dokumen) melalui Service
            $this->assignmentService->deleteAssignmentFiles($assignment);

            // Hapus data (Hard Delete karena trait SoftDeletes sudah dibuang)
            // Ini juga akan menghapus indicators karena cascading atau manual delete di service
            $assignment->delete();
        });

        Session::flash('toastr', [
            'type' => 'gradient-green-to-emerald',
            'content' => 'Penugasan dan seluruh snapshot indikator berhasil dihapus permanen.'
        ]);

        return redirect()->route('admin.assignments.index');
    }

    /**
     * Auditor memberikan simpulan akhir dan rating (Finalisasi Audit)
     */
    public function finalize(Request $request, Assignment $assignment)
    {
        // Gate::authorize('finalize', $assignment);
        // Pastikan hanya bisa difinalisasi jika sudah di tahap akhir (Reporting atau RTM)
        if (
            $assignment->current_stage->value !== AuditStage::REPORTING->value &&
            $assignment->current_stage->value !== AuditStage::RTM_RTL->value
        ) {
            return back()->withErrors(['message' => 'Finalisasi hanya dapat dilakukan pada tahap Pelaporan atau RTM.']);
        }

        // Pastikan audit belum selesai
        if ($assignment->completed_at) {
            return back()->withErrors(['message' => 'Audit ini sudah difinalisasi sebelumnya.']);
        }

        // Cek jika ada RTL yang belum CLOSED
        $hasIncompleteRtl = $assignment->rtl()->where('status', '!=', \App\Enums\RtlStatus::CLOSED)->exists();
        $hasMissingRtl = $assignment->indicators()
            ->whereIn('finding_type', [\App\Enums\FindingType::KTS, \App\Enums\FindingType::OB])
            ->doesntHave('rtl')
            ->exists();

        if ($hasIncompleteRtl || $hasMissingRtl) {
            return back()->withErrors(['message' => 'Masih terdapat Rencana Tindak Lanjut (RTL) yang belum lengkap atau belum ditutup (Closed). Harap selesaikan semua RTL sebelum finalisasi.']);
        }

        // Validasi input
        $validated = $request->validate([
            'summary_note' => 'required|string|min:10',
            'overall_rating' => 'required|integer|min:1|max:4',
        ]);

        DB::transaction(function () use ($assignment, $validated) {
            $this->assignmentService->finalizeAssignment($assignment, $validated, auth()->id());
        });

        Session::flash('toastr', [
            'type' => 'gradient-green-to-emerald',
            'content' => 'Audit berhasil difinalisasi dengan rating <b>' . $validated['overall_rating'] . '</b>.'
        ]);

        return back();
    }

    /**
     * Memajukan Tahapan Audit ke tahap selanjutnya
     */
    public function nextStage(Assignment $assignment)
    {
        $nextStage = $assignment->current_stage->next();

        if (!$nextStage) {
            Session::flash('toastr', ['type' => 'gradient-red-to-rose', 'content' => 'Sudah mencapai tahap akhir.']);
            return back();
        }

        try {
            $this->assignmentService->transitionToStage($assignment, $nextStage);
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }

        Session::flash('toastr', [
            'type' => 'solid-blue',
            'content' => "Audit berpindah ke tahap: <b>{$nextStage->label()}</b>"
        ]);

        return back();
    }

    /**
     * Mengembalikan Tahapan Audit ke tahap sebelumnya
     */
    public function previousStage(Assignment $assignment)
    {
        $prevStage = $assignment->current_stage->previous();

        if (!$prevStage) {
            Session::flash('toastr', ['type' => 'gradient-red-to-rose', 'content' => 'Sudah berada di tahap awal.']);
            return back();
        }

        $this->assignmentService->transitionToStage($assignment, $prevStage);

        Session::flash('toastr', [
            'type' => 'gradient-warning',
            'content' => "Audit dikembalikan ke tahap: <b>{$prevStage->label()}</b>"
        ]);

        return back();
    }

    public function history(AssignmentIndicator $indicator)
    {
        // Polymorphic relation: hanya mengambil log milik model AssignmentIndicator ini
        $history = $indicator->histories()
            ->with('user:id,name,role')
            ->latest()
            ->get();

        return response()->json($history);
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Enums\AssignmentDocType;
use App\Http\Controllers\Controller;
use App\Models\{Assignment, AuditHistory, Faculty, Prodi, Period, MasterStandard, User};
use App\Services\AssignmentService;
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

        return Inertia::render('Assignments/Index', [
            'assignments' => $assignments,
            'filters' => $filters,
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
                            ? \App\Models\Prodi::class
                            : \App\Models\Faculty::class);
                })
            ],
            'auditor_id' => 'required|exists:users,id',
        ]);

        // Cek apakah Standar cocok dengan Target Unit
        $standard = MasterStandard::findOrFail($validated['master_standard_id']);
        if ($standard->target_type->value !== $validated['assignable_type']) {
            return back()->withErrors(['master_standard_id' => 'Standar ini tidak cocok untuk tipe unit yang dipilih.']);
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

        $assignment->load(['period', 'standard', 'assignable', 'auditor', 'documents', 'histories.user']);

        // Memuat indikator dengan filter search jika ada
        $indicators = $assignment->indicators()
            ->search($filters['search'] ?? null)
            ->sort($filters['sort_field'] ?? 'snapshot_code', $filters['direction'] ?? 'asc')
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('Assignments/Show', [
            'assignment' => $assignment,
            'indicators' => $indicators, // Mengirim indikator yang sudah difilter
            'currentStage' => $assignment->current_stage,
            'filters' => $filters
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

    /**
     * Menghapus penugasan (Soft Delete)
     */
    public function destroy(Assignment $assignment)
    {
        DB::transaction(function () use ($assignment) {
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => Assignment::class,
                'historable_id' => $assignment->id,
                'stage' => $assignment->current_stage,
                'action' => 'delete_assignment',
                'old_values' => $assignment->toArray(),
            ]);
            $this->assignmentService->deleteAssignmentFiles($assignment);
            $assignment->delete();
        });

        Session::flash('toastr', [
            'type' => 'gradient-green-to-emerald',
            'content' => 'Penugasan berhasil dihapus.'
        ]);
        return redirect()->route('admin.assignments.index'); // Sesuaikan name route admin
    }

    /**
     * Auditor memberikan simpulan akhir dan rating (Finalisasi Audit)
     */
    public function finalize(Request $request, Assignment $assignment)
    {
        Gate::authorize('finalize', $assignment);

        // Pastikan audit belum selesai
        if ($assignment->completed_at) {
            return back()->withErrors(['message' => 'Audit ini sudah difinalisasi sebelumnya.']);
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
}

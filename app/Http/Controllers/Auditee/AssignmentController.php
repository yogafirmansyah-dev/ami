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
        $filters = $request->only(['search', 'status', 'per_page', 'sort_field', 'direction']);

        $assignments = $user->relatedAssignments()
            ->with(['period', 'standard', 'auditor'])
            ->withCount([
                'indicators',
                'scoredIndicators',
                'filledIndicators'
            ])
            ->when($request->status === 'on_going', fn($q) => $q->where('current_stage', '!=', 'finished'))
            ->when($request->status === 'completed', fn($q) => $q->where('current_stage', 'finished'))
            ->search($request->search)
            ->sort($request->sort_field ?? 'created_at', $request->direction ?? 'desc')
            ->paginate($request->input('per_page', 10))
            ->withQueryString();

        return inertia('Auditee/Assignment/Index', [
            'assignments' => $assignments,
            'filters' => $filters,
            // Tambahkan stage breakdown khusus unit ini untuk dashboard info
            'stageStats' => Assignment::stageBreakdown()
        ]);
    }

    public function show(Request $request, Assignment $assignment)
    {
        // Otorisasi: Pastikan auditee hanya melihat milik unitnya sendiri
        // Gate::authorize('view', $assignment);

        $filters = $request->only(['search', 'sort_field', 'direction', 'per_page']);
        $perPage = $request->input('per_page', 25);

        $assignment->load(['period', 'standard', 'auditor', 'assignable', 'documents']);

        // --- LOGIKA DINAMIS DATA INDIKATOR ---
        $query = $assignment->indicators();

        // Jika tahap RTM_RTL, Auditee hanya fokus pada temuan untuk diisi solusinya
        if ($assignment->current_stage === \App\Enums\AuditStage::RTM_RTL) {
            $query->whereIn('finding_type', [\App\Enums\FindingType::KTS, \App\Enums\FindingType::OB])
                ->with('rtl');
        }

        $indicators = $query->search($request->search, ['snapshot_code', 'snapshot_requirement'])
            ->sort($request->sort_field ?? 'snapshot_requirement', $request->direction ?? 'asc')
            ->paginate($perPage)
            ->withQueryString();

        return inertia('Auditee/Assignment/Show', [
            'assignment' => $assignment,
            'indicators' => $indicators,
            'filters' => $filters,
            'stageStats' => Assignment::stageBreakdown(), // Untuk Stepper
            'currentStage' => $assignment->current_stage,
            'findingStats' => [
                'kts' => $assignment->indicators()->where('finding_type', 'KTS')->count(),
                'ob' => $assignment->indicators()->where('finding_type', 'OB')->count(),
                'unassessed' => $assignment->indicators()->whereNull('score')->count(),
                'total_indicators' => $assignment->indicators()->count(),
            ]
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Enums\AuditStage;
use App\Enums\UserRole;
use App\Models\{Assignment, AssignmentIndicator, AuditHistory, Period, Prodi, Faculty, User};
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        return match ($user->role) {
            UserRole::ADMIN => $this->adminDashboard(),
            UserRole::AUDITOR => $this->auditorDashboard($user),
            UserRole::AUDITEE => $this->auditeeDashboard($user),
            default => abort(403),
        };
    }

    private function adminDashboard()
    {
        $totalProdi = Prodi::count();
        $totalFaculty = Faculty::count();
        $activePeriods = Period::where('is_active', true)->count();
        $totalAuditors = User::where('role', UserRole::AUDITOR)->count();
        $totalAssignments = Assignment::count();
        $activeAssignments = Assignment::where('current_stage', '!=', AuditStage::FINISHED)->count();
        $completedAssignments = Assignment::where('current_stage', AuditStage::FINISHED)->count();

        return Inertia::render('Dashboard/Index', [
            'stats' => [
                'total_prodi' => $totalProdi,
                'total_faculty' => $totalFaculty,
                'active_periods' => $activePeriods,
                'total_auditors' => $totalAuditors,
                'total_assignments' => $totalAssignments,
                'active_assignments' => $activeAssignments,
                'completed_assignments' => $completedAssignments,
                'findings_distribution' => [
                    'ks' => AssignmentIndicator::where('finding_type', 'KS')->count(),
                    'kts' => AssignmentIndicator::where('finding_type', 'KTS')->count(),
                    'ob' => AssignmentIndicator::where('finding_type', 'OB')->count(),
                ],
                'stage_breakdown' => Assignment::stageBreakdown(),
            ],
            'activities' => AuditHistory::with('user')->latest()->take(5)->get()
        ]);
    }

    private function auditorDashboard($user)
    {
        $baseQuery = Assignment::where('auditor_id', $user->id);

        return Inertia::render('Dashboard/Index', [
            'stats' => [
                'my_assignments' => (clone $baseQuery)->count(),
                'pending_reviews' => (clone $baseQuery)->where('current_stage', '!=', AuditStage::FINISHED)->count(),
                'completed_reviews' => (clone $baseQuery)->where('current_stage', AuditStage::FINISHED)->count(),
            ],
            // Kita ambil data penugasan dengan hitungan indikator
            'myAssignments' => Assignment::with(['assignable', 'period', 'standard'])
                ->where('auditor_id', $user->id)
                ->withCount([
                    'indicators',
                    'scoredIndicators',
                    'filledIndicators'
                ])
                ->latest()
                ->get()
                ->map(function ($item) {
                    return [
                        'id' => $item->id,
                        'target_name' => $item->assignable?->name ?? 'Unit Terhapus',
                        'target_type' => str_contains($item->assignable_type, 'Prodi') ? 'Prodi' : 'Fakultas',
                        'standard_name' => $item->standard->name,
                        'period_name' => $item->period->name,
                        'current_stage' => $item->current_stage,
                        'indicators_count' => $item->indicators_count,
                        'scored_indicators_count' => $item->scored_indicators_count,
                        'filled_indicators_count' => $item->filled_indicators_count,
                        'progress' => $item->indicators_count > 0
                            ? round(($item->scored_indicators_count / $item->indicators_count) * 100)
                            : 0,
                        'auditee_progress' => $item->indicators_count > 0
                            ? round(($item->filled_indicators_count / $item->indicators_count) * 100)
                            : 0
                    ];
                })
        ]);
    }

    private function auditeeDashboard($user)
    {
        $myAssignments = Assignment::with(['assignable', 'period', 'standard', 'auditor'])
            ->where(function ($query) use ($user) {
                if ($user->prodi_id) {
                    $query->where(function ($q) use ($user) {
                        $q->where('assignable_id', $user->prodi_id)
                            ->where('assignable_type', Prodi::class);
                    });
                }
                if ($user->faculty_id) {
                    $query->orWhere(function ($q) use ($user) {
                        $q->where('assignable_id', $user->faculty_id)
                            ->where('assignable_type', Faculty::class);
                    });
                }
            })
            ->withCount([
                'indicators',
                'filledIndicators',
                'scoredIndicators'
            ])
            ->latest()
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'target_name' => $item->assignable?->name ?? 'Unit Terhapus',
                    'target_type' => str_contains($item->assignable_type, 'Prodi') ? 'Prodi' : 'Fakultas',
                    'standard_name' => $item->standard->name,
                    'period_name' => $item->period->name,
                    'current_stage' => $item->current_stage,
                    'auditor_name' => $item->auditor?->name ?? 'Belum Ditentukan',
                    'total_indicators' => $item->indicators_count,
                    'uploaded_indicators' => $item->filled_indicators_count,
                    // Progres di sisi Auditee fokus pada dua hal: Upload & Penilaian
                    'upload_progress' => $item->indicators_count > 0 ? round(($item->filled_indicators_count / $item->indicators_count) * 100) : 0,
                    'score_progress' => $item->indicators_count > 0 ? round(($item->scored_indicators_count / $item->indicators_count) * 100) : 0,
                ];
            });

        return Inertia::render('Dashboard/Index', [
            'myAssignments' => $myAssignments,
            'stats' => [
                'active_assignments' => $myAssignments->count(),
                'total_indicators' => $myAssignments->sum('total_indicators'),
                'completed_evidence' => $myAssignments->sum('uploaded_indicators'), // Sum field 'uploaded_indicators' computed in map
            ]
        ]);
    }
}

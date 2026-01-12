<?php

namespace App\Http\Controllers;

use App\Enums\UserRole;
use App\Models\{Assignment, Period, Prodi, Faculty, User};
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
        $activeAssignments = Assignment::whereNull('completed_at')->count();
        $completedAssignments = Assignment::whereNotNull('completed_at')->count();

        return Inertia::render('Dashboard/Index', [
            'stats' => [
                'total_prodi' => $totalProdi,
                'total_faculty' => $totalFaculty, // Tambahkan ini
                'active_periods' => $activePeriods,
                'total_auditors' => $totalAuditors,
                'total_assignments' => $totalAssignments,
                'active_assignments' => $activeAssignments,
                'completed_assignments' => $completedAssignments,
            ],
            'stage_breakdown' => Assignment::stageBreakdown(),
        ]);
    }

    private function auditorDashboard($user)
    {
        $baseQuery = Assignment::where('auditor_id', $user->id);

        return Inertia::render('Dashboard/Index', [
            'stats' => [
                'my_assignments' => (clone $baseQuery)->count(),
                'pending_reviews' => (clone $baseQuery)->whereNull('completed_at')->count(),
                'completed_reviews' => (clone $baseQuery)->whereNotNull('completed_at')->count(),
            ],
            // Kita ambil data penugasan dengan hitungan indikator
            'myAssignments' => Assignment::with(['assignable', 'period', 'standard'])
                ->where('auditor_id', $user->id)
                ->withCount([
                    'indicators',
                    'indicators as scored_indicators_count' => function ($query) {
                        $query->whereNotNull('score');
                    }
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
                        'progress' => $item->indicators_count > 0
                            ? round(($item->scored_indicators_count / $item->indicators_count) * 100)
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
                            ->where('assignable_type', \App\Models\Prodi::class);
                    });
                }
                if ($user->faculty_id) {
                    $query->orWhere(function ($q) use ($user) {
                        $q->where('assignable_id', $user->faculty_id)
                            ->where('assignable_type', \App\Models\Faculty::class);
                    });
                }
            })
            ->withCount([
                'indicators',
                'indicators as uploaded_count' => fn($q) => $q->whereNotNull('evidence_path'),
                'indicators as scored_count' => fn($q) => $q->whereNotNull('score')
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
                    'uploaded_indicators' => $item->uploaded_count,
                    // Progres di sisi Auditee fokus pada dua hal: Upload & Penilaian
                    'upload_progress' => $item->indicators_count > 0 ? round(($item->uploaded_count / $item->indicators_count) * 100) : 0,
                    'score_progress' => $item->indicators_count > 0 ? round(($item->scored_count / $item->indicators_count) * 100) : 0,
                ];
            });

        return Inertia::render('Dashboard/Index', [
            'myAssignments' => $myAssignments,
            'stats' => [
                'active_assignments' => $myAssignments->count(),
                'total_indicators' => $myAssignments->sum('total_indicators'),
            ]
        ]);
    }
}

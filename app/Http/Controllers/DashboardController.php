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
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'total_prodi' => Prodi::count(),
                'total_faculty' => Faculty::count(), // Tambahkan ini
                'active_periods' => Period::where('is_active', true)->count(),
                'total_auditors' => User::where('role', UserRole::AUDITOR)->count(),
                'total_assignments' => Assignment::count(),
            ],
            'stage_breakdown' => Assignment::stageBreakdown(),
        ]);
    }

    private function auditorDashboard($user)
    {
        return Inertia::render('Auditor/Dashboard', [
            'stats' => [
                'my_assignments' => Assignment::where('auditor_id', $user->id)->count(),
                'pending_reviews' => Assignment::where('auditor_id', $user->id)->whereNull('completed_at')->count(),
                'completed_reviews' => Assignment::where('auditor_id', $user->id)->whereNotNull('completed_at')->count(),
            ],
            // Gunakan assignable bukan prodi agar mendukung Fakultas
            'recent_tasks' => Assignment::with(['assignable', 'period'])
                ->where('auditor_id', $user->id)
                ->latest()
                ->take(5)
                ->get()
        ]);
    }

    private function auditeeDashboard($user)
    {
        // Tentukan identitas auditee (apakah mewakili prodi atau fakultas)
        $type = $user->prodi_id ? Prodi::class : Faculty::class;
        $id = $user->prodi_id ?? $user->faculty_id;

        return Inertia::render('Auditee/Dashboard', [
            'unit_name' => $user->prodi?->name ?? $user->faculty?->name ?? 'Unit Belum Diatur',
            'stats' => [
                // Gunakan query polimorfik
                'total_audit' => Assignment::where('assignable_type', $type)
                    ->where('assignable_id', $id)
                    ->count(),
                'latest_assignment' => Assignment::with('period')
                    ->where('assignable_type', $type)
                    ->where('assignable_id', $id)
                    ->latest()
                    ->first() // Ambil yang paling baru saja
            ],
        ]);
    }
}

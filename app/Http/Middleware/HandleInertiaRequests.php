<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use App\Enums\UserRole;
use App\Models\Assignment;
use App\Models\Prodi;
use App\Models\Faculty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

final class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    // Durasi cache diturunkan karena data role kini sangat ringan (hanya string di kolom users)
    private const CACHE_DURATION = 60;

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'user_extra' => $this->getAuthenticatedUserData($request),
            'ziggy' => $this->getZiggyData($request),
            'flash' => $this->getFlashMessages(),
            'constants' => [
                'score_map' => [
                    4 => ['label' => 'Sangat Baik', 'color' => 'text-emerald-600', 'bg' => 'bg-emerald-100'],
                    3 => ['label' => 'Baik', 'color' => 'text-blue-600', 'bg' => 'bg-blue-100'],
                    2 => ['label' => 'Cukup', 'color' => 'text-amber-600', 'bg' => 'bg-amber-100'],
                    1 => ['label' => 'Kurang', 'color' => 'text-rose-600', 'bg' => 'bg-rose-100'],
                ]
            ],
        ];
    }

    private function getZiggyData(Request $request)
    {
        return fn() => [
            ...(new Ziggy)->toArray(),
            'location' => $request->url(),
        ];
    }

    private function getFlashMessages(): array
    {
        return [
            'message' => fn() => Session::get('message'),
            'toastr' => fn() => Session::get('toastr'),
            'import_errors' => fn() => Session::get('import_errors'),
        ];
    }

    /**
     * Mengambil data user esensial tanpa Spatie & Teams.
     * Menggunakan Match Expression untuk unit_name.
     */
    private function getAuthenticatedUserData(Request $request)
    {
        $user = $request->user();
        if (!$user)
            return [];

        $cacheKey = "user_extra_data_{$user->id}";

        return Cache::remember($cacheKey, self::CACHE_DURATION, function () use ($user) {
            // Eager load relasi unit kerja
            $user->loadMissing(['faculty', 'prodi']);

            return [
                'id' => $user->id,
                'name' => $user->name,
                'role' => $user->role,
                'is_admin' => $user->is_admin,
                'is_auditor' => $user->is_auditor,
                'is_auditee' => $user->is_auditee,

                // Gabungkan nama unit jika ada dua (misal: "Fakultas Teknik & Informatika")
                'unit_name' => match (true) {
                    $user->is_admin => 'Administrator',
                    $user->is_auditor => 'Auditor Internal',
                    default => collect([$user->faculty?->name, $user->prodi?->name])
                        ->filter()
                        ->implode(' & ') ?: 'Auditee',
                },

                // Mencari tahapan aktif dari penugasan terkait (Prodi ATAU Fakultas)
                'active_stage' => $user->is_auditee
                    ? Assignment::where(function ($q) use ($user) {
                        if ($user->prodi_id) {
                            $q->where('assignable_id', $user->prodi_id)
                                ->where('assignable_type', Prodi::class);
                        }
                        if ($user->faculty_id) {
                            $q->orWhere(function ($sq) use ($user) {
                                $sq->where('assignable_id', $user->faculty_id)
                                    ->where('assignable_type', Faculty::class);
                            });
                        }
                    })
                        ->latest()
                        ->first()?->current_stage
                    : null,

                'cached_at' => now()->toISOString(),
            ];
        });
    }

    /**
     * Bersihkan cache user (panggil saat update profile atau ganti role)
     */
    public static function clearUserCache(int $userId): void
    {
        Cache::forget("user_extra_data_{$userId}");
    }
}

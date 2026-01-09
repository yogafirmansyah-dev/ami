<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Enums\UserRole;
use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Jetstream\HasTeams;
use Laravel\Sanctum\HasApiTokens;
/*Spatie Permissions Package*/
use Spatie\Permission\Traits\HasRoles;


class User extends Authenticatable
{
    use HasApiTokens;

    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory;
    use HasProfilePhoto;
    use HasTeams;
    use Notifiable;
    use TwoFactorAuthenticatable;
    /*Spatie Permissions Package*/
    use HasRoles;
    use Filterable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'prodi_id',
        'faculty_id',
        'language',
        'dark_mode',
        'theme',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'role' => UserRole::class,
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function prodi()
    {
        return $this->belongsTo(Prodi::class);
    }

    public function audits()
    {
        return $this->hasMany(Assignment::class, 'auditor_id');
    }

    public function auditHistories()
    {
        return $this->hasMany(AuditHistory::class, 'user_id');
    }

    public function isAdmin(): bool
    {
        return $this->role === UserRole::ADMIN;
    }
    public function isAuditor(): bool
    {
        return $this->role === UserRole::AUDITOR;
    }
    public function isAuditee(): bool
    {
        return $this->role === UserRole::AUDITEE;
    }

    /**
     * Mendapatkan semua penugasan (audit) yang terkait dengan user ini
     * Jika Auditor -> Audit yang dia nilai
     * Jika Auditee -> Audit milik Prodinya
     */
    public function relatedAssignments()
    {
        // 1. Jika Auditor: Lihat audit yang ditugaskan kepadanya
        if ($this->isAuditor()) {
            return Assignment::where('auditor_id', $this->id);
        }

        // 2. Jika Auditee: Lihat audit milik Prodi ATAU Fakultasnya
        if ($this->isAuditee()) {
            return Assignment::where(function ($query) {
                // Cek jika ada audit level Prodi
                if ($this->prodi_id) {
                    $query->where(function ($q) {
                        $q->where('assignable_type', \App\Models\Prodi::class)
                            ->where('assignable_id', $this->prodi_id);
                    });
                }

                // Cek jika ada audit level Fakultas
                if ($this->faculty_id) {
                    $query->orWhere(function ($q) {
                        $q->where('assignable_type', \App\Models\Faculty::class)
                            ->where('assignable_id', $this->faculty_id);
                    });
                }
            });
        }

        // 3. Admin: Bisa melihat semua data
        return Assignment::query();
    }

    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }

}

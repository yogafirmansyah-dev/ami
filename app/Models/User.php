<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Enums\UserRole;
use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;


class User extends Authenticatable
{
    use HasApiTokens;

    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;
    use Filterable;
    use SoftDeletes;

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
        'is_admin',   // Gunakan snake_case di sini
        'is_auditor', // Gunakan snake_case di sini
        'is_auditee', // Gunakan snake_case di sini
        'unit_name',
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

    protected function isAdmin(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->role === UserRole::ADMIN,
        );
    }

    protected function isAuditor(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->role === UserRole::AUDITOR,
        );
    }

    protected function isAuditee(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->role === UserRole::AUDITEE,
        );
    }

    /**
     * Mendapatkan semua penugasan (audit) yang terkait dengan user ini
     * Jika Auditor -> Audit yang dia nilai
     * Jika Auditee -> Audit milik Prodinya
     */
    public function relatedAssignments()
    {
        // Gunakan properti (snake_case sesuai $appends), bukan method ()
        if ($this->is_auditor) {
            return Assignment::where('auditor_id', $this->id);
        }

        if ($this->is_auditee) {
            return Assignment::where(function ($query) {
                // Cek jika ada audit level Prodi
                if ($this->prodi_id) {
                    $query->where(function ($q) {
                        $q->where('assignable_type', Prodi::class)
                            ->where('assignable_id', $this->prodi_id);
                    });
                }

                // Cek jika ada audit level Fakultas
                if ($this->faculty_id) {
                    $query->orWhere(function ($q) {
                        $q->where('assignable_type', Faculty::class)
                            ->where('assignable_id', $this->faculty_id);
                    });
                }
            });
        }

        // Admin: Bisa melihat semua data
        return Assignment::query();
    }
    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }

    protected function unitName(): Attribute
    {
        return Attribute::make(
            get: fn() => match (true) {
                $this->is_admin => 'Administrator',
                $this->is_auditor => 'Auditor Internal',
                default => collect([
                    $this->prodi?->name,
                    $this->faculty?->name
                ])->filter()->implode(' & ') ?: 'Auditee',
            },
        );
    }

}

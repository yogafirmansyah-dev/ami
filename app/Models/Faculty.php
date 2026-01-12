<?php

namespace App\Models;

use App\Traits\Filterable;
use App\Traits\HasAuditHistory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Faculty extends Model
{
    use SoftDeletes, Filterable, HasAuditHistory;
    protected $fillable = ['name'];

    protected static function booted()
    {
        // Event saat data akan dibuat (Create)
        static::creating(function ($faculty) {
            // Logika pembuatan kode otomatis (Contoh: FA-XXX)
            // Anda bisa menyesuaikan formatnya di sini
            $faculty->code = 'FA-' . strtoupper(Str::random(3));

            // Pastikan kode unik (opsional jika ingin sangat aman)
            while (static::where('code', $faculty->code)->exists()) {
                $faculty->code = 'FA-' . strtoupper(Str::random(3));
            }
        });

        // Event saat data akan diupdate
        static::updating(function ($faculty) {
            // Mencegah perubahan pada kolom 'code'
            if ($faculty->isDirty('code')) {
                $faculty->code = $faculty->getOriginal('code');
            }
        });
    }

    public function periods()
    {
        return $this->hasMany(Period::class);
    }

    public function prodis()
    {
        return $this->hasMany(Prodi::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function assignments()
    {
        return $this->morphMany(Assignment::class, 'assignable');
    }
}

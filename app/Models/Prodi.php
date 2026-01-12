<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Filterable;
use App\Traits\HasAuditHistory;
use Illuminate\Support\Str;

class Prodi extends Model
{
    use SoftDeletes, Filterable, HasAuditHistory;
    protected $fillable = ['name', 'faculty_id'];

    protected static function booted()
    {
        // Event saat data akan dibuat (Create)
        static::creating(function ($prodi) {
            // Logika pembuatan kode otomatis (Contoh: PRD-XXXXX)
            // Anda bisa menyesuaikan formatnya di sini
            $prodi->code = 'PRD-' . strtoupper(Str::random(6));

            // Pastikan kode unik (opsional jika ingin sangat aman)
            while (static::where('code', $prodi->code)->exists()) {
                $prodi->code = 'PRD-' . strtoupper(Str::random(6));
            }
        });

        // Event saat data akan diupdate
        static::updating(function ($prodi) {
            // Mencegah perubahan pada kolom 'code'
            if ($prodi->isDirty('code')) {
                $prodi->code = $prodi->getOriginal('code');
            }
        });
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function assignments()
    {
        return $this->morphMany(Assignment::class, 'assignable');
    }
    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }

}

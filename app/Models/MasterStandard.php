<?php

namespace App\Models;

use App\Enums\TargetType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Filterable;
use App\Traits\HasAuditHistory;
use Illuminate\Support\Str;

class MasterStandard extends Model
{
    use SoftDeletes, Filterable, HasAuditHistory;
    protected $fillable = ['code', 'name', 'description', 'target_type'];

    protected static function booted()
    {
        // Event saat data akan dibuat (Create)
        static::creating(function ($standard) {
            // Logika pembuatan kode otomatis (Contoh: PRD-XXXXX)
            // Anda bisa menyesuaikan formatnya di sini
            $standard->code = 'ST-' . strtoupper(Str::random(3));

            // Pastikan kode unik (opsional jika ingin sangat aman)
            while (static::where('code', $standard->code)->exists()) {
                $standard->code = 'ST-' . strtoupper(Str::random(3));
            }
        });

        // Event saat data akan diupdate
        static::updating(function ($standard) {
            // Mencegah perubahan pada kolom 'code'
            if ($standard->isDirty('code')) {
                $standard->code = $standard->getOriginal('code');
            }
        });
    }

    public function indicators()
    {
        return $this->hasMany(MasterIndicator::class);
    }

    protected $casts = [
        'target_type' => TargetType::class, // 'prodi' atau 'faculty'
    ];
}

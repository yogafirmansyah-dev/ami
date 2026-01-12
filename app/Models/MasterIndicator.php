<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Filterable;
use App\Traits\HasAuditHistory;
use Illuminate\Support\Str;

class MasterIndicator extends Model
{
    use SoftDeletes, Filterable, HasAuditHistory;
    protected $fillable = [
        'master_standard_id',
        'code',
        'requirement',
        'template_path',
        'target',
        'evidence_needed',
        'is_evidence_required'
    ];

    protected static function booted()
    {
        // Event saat data akan dibuat (Create)
        static::creating(function ($indicator) {
            // Logika pembuatan kode otomatis (Contoh: PRD-XXXXX)
            // Anda bisa menyesuaikan formatnya di sini
            $indicator->code = 'IND-' . strtoupper(Str::random(6));

            // Pastikan kode unik (opsional jika ingin sangat aman)
            while (static::where('code', $indicator->code)->exists()) {
                $indicator->code = 'IND-' . strtoupper(Str::random(6));
            }
        });

        // Event saat data akan diupdate
        static::updating(function ($indicator) {
            // Mencegah perubahan pada kolom 'code'
            if ($indicator->isDirty('code')) {
                $indicator->code = $indicator->getOriginal('code');
            }
        });
    }

    public function standard()
    {
        return $this->belongsTo(MasterStandard::class, 'master_standard_id');
    }

}

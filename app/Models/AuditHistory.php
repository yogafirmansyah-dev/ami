<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Model;

class AuditHistory extends Model
{
    use Filterable;
    protected $fillable = [
        'user_id',
        'historable_type',
        'historable_id',
        'stage',
        'old_values',
        'new_values',
        'action',
        'reason'
    ];

    protected $casts = [
        'old_values' => 'json',
        'new_values' => 'json',
        'created_at' => 'datetime:Y-m-d H:i:s',
    ];

    protected $appends = ['formatted_changes']; // Agar otomatis muncul di JSON Axios

    public function getFormattedChangesAttribute()
    {
        $old = $this->old_values ?? [];
        $new = $this->new_values ?? [];
        $lines = [];

        // Jika ini adalah upload dokumen resmi
        if ($this->action === 'upload_official_document') {
            return "📄 Mengunggah dokumen: <strong>" . ($new['file_name'] ?? 'Berkas') . "</strong>";
        }

        // Bandingkan perubahan field
        foreach ($new as $key => $value) {
            $oldVal = $old[$key] ?? '-';
            if ($oldVal == $value)
                continue;

            $label = str_replace('_', ' ', ucfirst($key));
            $lines[] = "<div><strong>{$label}</strong>: <span class='text-rose-400'>{$oldVal}</span> → <span class='text-emerald-500'>{$value}</span></div>";
        }

        return count($lines) ? implode('', $lines) : 'Perubahan data internal.';
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Mengambil parent (Bisa MasterIndicator atau AssignmentIndicator)
    public function historable()
    {
        return $this->morphTo();
    }
}

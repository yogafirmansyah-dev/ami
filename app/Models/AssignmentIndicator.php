<?php

namespace App\Models;

use App\Traits\Filterable;
use App\Traits\HasAuditHistory;
use Attribute;
use Illuminate\Database\Eloquent\Model;

class AssignmentIndicator extends Model
{
    use Filterable, HasAuditHistory;
    protected $fillable = [
        'assignment_id',

        'snapshot_code',
        'snapshot_requirement',
        'snapshot_template_path',
        'score',
        'auditor_note',
        'evidence_path',
        'evidence_url',
        'recommendation'
    ];

    public function assignment()
    {
        return $this->belongsTo(Assignment::class);
    }

    protected function scoreLabel(): Attribute
    {
        return Attribute::get(function () {
            return match ($this->score) {
                4 => 'Sangat Baik',
                3 => 'Baik',
                2 => 'Cukup',
                1 => 'Kurang',
                default => 'Belum Dinilai',
            };
        });
    }

    // Tambahkan ke $appends agar otomatis muncul di JSON/Inertia
    protected $appends = ['score_label'];

}

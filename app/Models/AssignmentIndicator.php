<?php

namespace App\Models;

use App\Enums\FindingType;
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
        'snapshot_target',
        'snapshot_evidence_needed',
        'is_evidence_required',
        'score',
        'auditor_note',
        'evidence_path',
        'evidence_url',
        'recommendation',
        'finding_type',
    ];

    public function assignment()
    {
        return $this->belongsTo(Assignment::class);
    }

    protected $casts = [
        // 2. Pastikan penulisan :class benar
        'finding_type' => FindingType::class,
    ];

    public function rtl()
    {
        return $this->hasOne(AssignmentRtl::class, 'assignment_indicator_id');
    }

    /**
     * Cek apakah indikator ini memiliki temuan (KTS atau OB)
     */
    public function isFinding(): bool
    {
        // Pastikan Enum FindingType Anda memiliki value ini
        return in_array($this->finding_type, [
            FindingType::KTS,
            FindingType::OB
        ]);
    }

}

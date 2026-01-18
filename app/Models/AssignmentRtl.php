<?php

namespace App\Models;

use App\Enums\RtlStatus;
use Illuminate\Database\Eloquent\Model;

class AssignmentRtl extends Model
{
    protected $fillable = [
        'assignment_indicator_id',
        'root_cause',
        'action_plan',
        'pic',
        'deadline',
        'success_indicator',
        'evidence_path',
        'auditor_feedback',
        'status',
    ];

    protected $casts = [
        // 2. Pastikan penulisan :class benar
        'status' => RtlStatus::class,
    ];

    /**
     * Relasi balik ke AssignmentIndicator.
     */
    public function indicator()
    {
        return $this->belongsTo(AssignmentIndicator::class, 'assignment_indicator_id');
    }

    /**
     * Helper untuk mengecek status
     */
    public function isClosed()
    {
        return $this->status === RtlStatus::CLOSED;
    }
}

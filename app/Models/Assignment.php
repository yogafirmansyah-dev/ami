<?php

namespace App\Models;

use App\Enums\AuditStage;
use App\Traits\Filterable;
use App\Traits\HasAuditHistory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Assignment extends Model
{
    use Filterable, HasAuditHistory {
        Filterable::scopeSort as traitSort;
    }
    protected $fillable = [
        'period_id',
        'master_standard_id',
        'auditor_id',
        'current_stage',
        'summary_note',
        'overall_rating',
        'completed_at',
        'assignable_id',
        'assignable_type'
    ];

    protected $casts = [
        'current_stage' => AuditStage::class,
        'completed_at' => 'datetime',
    ];

    protected $appends = ['target_name'];

    public function getTargetNameAttribute()
    {
        return $this->assignable->name ?? '-';
    }

    public function period()
    {
        return $this->belongsTo(Period::class);
    }

    public function standard()
    {
        return $this->belongsTo(MasterStandard::class, 'master_standard_id')->withTrashed();
    }

    public function assignable()
    {
        // Relasi ini bisa mengarah ke Prodi atau Fakultas secara dinamis
        return $this->morphTo();
    }

    public function auditor()
    {
        return $this->belongsTo(User::class, 'auditor_id');
    }

    public function scoredIndicators()
    {
        return $this->hasMany(AssignmentIndicator::class)->whereNotNull('finding_type');
    }

    public function filledIndicators()
    {
        return $this->hasMany(AssignmentIndicator::class)
            ->where(function ($query) {
                $query->whereNotNull('evidence_path')
                    ->orWhereNotNull('evidence_url');
            });
    }

    public function indicators()
    {
        return $this->hasMany(AssignmentIndicator::class);
    }

    public function documents()
    {
        return $this->hasMany(AssignmentDocument::class);
    }

    public function rtls()
    {
        return $this->hasManyThrough(AssignmentRtl::class, AssignmentIndicator::class);
    }

    /**
     * Override scopeSearch dari Filterable Trait khusus untuk relasi
     */
    public function scopeSearch($query, $search, $columns = [])
    {
        if (!$search)
            return $query;

        return $query->where(function ($q) use ($search) {
            $q->whereHasMorph('assignable', [Prodi::class, Faculty::class], function ($morphQ) use ($search) {
                $morphQ->where('name', 'like', "%{$search}%");
            })
                ->orWhereHas('auditor', fn($a) => $a->where('name', 'like', "%{$search}%"))
                ->orWhereHas('period', fn($per) => $per->where('name', 'like', "%{$search}%"))
                ->orWhere('current_stage', 'like', "%{$search}%");
        });
    }

    public function scopeSort($query, $field, $direction)
    {
        if ($field === 'standard_name') {
            return $query->join('master_standards', 'assignments.master_standard_id', '=', 'master_standards.id')
                ->select('assignments.*')
                ->orderBy('master_standards.name', $direction);
        }

        if ($field === 'auditor_name') {
            return $query->join('users', 'assignments.auditor_id', '=', 'users.id')
                ->select('assignments.*')
                ->orderBy('users.name', $direction);
        }

        if ($field === 'assignable_name') {
            return $query
                ->leftJoin('prodis', function ($join) {
                    $join->on('assignments.assignable_id', '=', 'prodis.id')
                        ->where('assignments.assignable_type', '=', Prodi::class);
                })
                ->leftJoin('faculties', function ($join) {
                    $join->on('assignments.assignable_id', '=', 'faculties.id')
                        ->where('assignments.assignable_type', '=', Faculty::class);
                })
                ->select('assignments.*')
                ->orderByRaw('COALESCE(prodis.name, faculties.name) ' . $direction);
        }

        // Jika bukan standard_name, gunakan logika default dari Trait
        return $this->traitSort($query, $field, $direction);
    }

    public static function stageBreakdown(?Period $period = null)
    {
        $counts = self::query()
            ->select('current_stage')
            ->selectRaw('count(*) as total')
            ->groupBy('current_stage')
            ->pluck('total', 'current_stage');

        return collect(AuditStage::cases())
            ->map(function (AuditStage $stage) use ($counts, $period) {
                $startField = $stage->value . '_start';
                $endField = $stage->value . '_end';

                $startDate = $period && isset($period->$startField) ? \Carbon\Carbon::parse($period->$startField) : null;
                $endDate = $period && isset($period->$endField) ? \Carbon\Carbon::parse($period->$endField) : null;

                return [
                    'stage' => $stage->value,
                    'label' => $stage->label(),
                    'total' => $counts[$stage->value] ?? 0,
                    'start_date' => $startDate ? $startDate->translatedFormat('d M Y') : null,
                    'end_date' => $endDate ? $endDate->translatedFormat('d M Y') : null,
                    'is_past' => $endDate ? $endDate->isPast() : false,
                ];
            });
    }
}

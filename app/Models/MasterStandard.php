<?php

namespace App\Models;

use App\Enums\TargetType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Filterable;
use App\Traits\HasAuditHistory;

class MasterStandard extends Model
{
    use SoftDeletes, Filterable, HasAuditHistory;
    protected $fillable = ['code', 'name', 'description', 'target_type'];

    public function indicators()
    {
        return $this->hasMany(MasterIndicator::class);
    }

    protected $casts = [
        'target_type' => TargetType::class, // 'prodi' atau 'faculty'
    ];
}

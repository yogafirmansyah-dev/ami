<?php

namespace App\Models;

use App\Traits\Filterable;
use App\Traits\HasAuditHistory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Faculty extends Model
{
    use SoftDeletes, Filterable, HasAuditHistory;
    protected $fillable = ['name', 'code'];

    public function periods()
    {
        return $this->hasMany(Period::class);
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

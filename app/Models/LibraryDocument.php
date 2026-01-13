<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class LibraryDocument extends Model
{

    protected $fillable = ['name', 'file_path', 'type', 'extension', 'uploaded_by'];

    public function uploader()
    {
        return $this->belongsTo(User::class, 'uploaded_by');
    }

    /**
     * Scope untuk memfilter dokumen berdasarkan role user.
     */
    public function scopeVisibleToUser(Builder $query, User $user)
    {
        if ($user->is_admin) {
            return $query; // Admin bisa lihat semua
        }

        if ($user->is_auditor) {
            // Auditor bisa lihat dokumen Public dan khusus Auditor
            return $query->whereIn('type', ['public', 'auditor']);
        }

        // Auditee hanya bisa lihat yang Public
        return $query->where('type', 'public');
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Assignment;
use App\Models\AuditHistory;
use App\Models\Faculty;
use App\Models\Prodi;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AuditHistoryController extends Controller
{
    public function index(Request $request)
    {
        // Mengambil filter untuk dikembalikan ke UI agar state input terjaga
        $filters = $request->only(['search', 'user_id', 'action', 'sort_field', 'direction', 'per_page']);
        $perPage = $request->input('per_page', 10);

        $histories = AuditHistory::with(['user:id,name,role', 'historable'])
            ->where(function ($query) use ($request) {
                $search = $request->search;
                if (!$search)
                    return;

                $query->where('action', 'like', "%{$search}%")
                    ->orWhere('reason', 'like', "%{$search}%")
                    // Mencari berdasarkan nama User yang melakukan aksi
                    ->orWhereHas('user', fn($u) => $u->where('name', 'like', "%{$search}%"))
                    // Mencari jika historable-nya adalah Assignment (berdasarkan nama unit)
                    ->orWhereHasMorph('historable', [Assignment::class], function ($q) use ($search) {
                        $q->whereHasMorph('assignable', [Prodi::class, Faculty::class], function ($unitQ) use ($search) {
                            $unitQ->where('name', 'like', "%{$search}%");
                        });
                    });
            })
            ->when($request->user_id, fn($q, $id) => $q->where('user_id', $id))
            ->sort($request->sort_field, $request->direction)
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('Admin/History/Index', [
            'histories' => $histories,
            'users' => User::all(['id', 'name']),
            'filters' => $filters
        ]);
    }
}

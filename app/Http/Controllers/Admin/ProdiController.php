<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\{Assignment, AuditHistory, Faculty, Prodi};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\{DB, Session};
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProdiController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->only(['search', 'sort_field', 'direction', 'per_page']);
        $perPage = $request->input('per_page', 10);

        $prodis = Prodi::with('faculty')
            ->search($request->search, ['name']) // Cari di kolom name
            ->sort($request->sort_field, $request->direction)    // Urutkan ASC/DESC
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('Admin/Prodi/Index', [
            'prodis' => $prodis,
            'faculties' => Faculty::all(['id', 'name']), // Untuk dropdown
            'filters' => $filters,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'faculty_id' => 'required|exists:faculties,id'
        ]);

        DB::transaction(function () use ($validated) {
            $prodi = Prodi::create($validated);
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => Prodi::class,
                'historable_id' => $prodi->id,
                'stage' => 'master_setup',
                'action' => 'create_prodi',
                'new_values' => $prodi->toArray(),
            ]);
        });

        Session::flash('toastr', ['type' => 'gradient-primary', 'content' => 'Prodi berhasil ditambahkan.']);
        return back();
    }

    public function update(Request $request, Prodi $prodi)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'faculty_id' => 'required|exists:faculties,id'
        ]);

        $oldValues = $prodi->toArray();

        DB::transaction(function () use ($prodi, $validated, $oldValues) {
            $prodi->update($validated);
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => Prodi::class,
                'historable_id' => $prodi->id,
                'stage' => 'master_setup',
                'action' => 'update_prodi',
                'old_values' => $oldValues,
                'new_values' => $prodi->getChanges(),
            ]);
        });

        Session::flash('toastr', ['type' => 'gradient-info', 'content' => 'Data prodi diperbarui.']);
        return back();
    }

    public function destroy(Prodi $prodi)
    {
        // 1. Cek User
        $hasUsers = $prodi->users()->exists();

        // 2. Cek Assignment (Polimorfik)
        $hasAssignments = Assignment::where('assignable_type', Prodi::class)
            ->where('assignable_id', $prodi->id)
            ->exists();

        if ($hasUsers || $hasAssignments) {
            return back()->with('toastr', [
                'type' => 'gradient-red-to-pink',
                'content' => 'Gagal: Prodi masih memiliki User atau Penugasan aktif.'
            ]);
        }

        DB::transaction(function () use ($prodi) {
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => Prodi::class,
                'historable_id' => $prodi->id,
                'stage' => 'master_setup',
                'action' => 'delete_prodi',
                'old_values' => $prodi->toArray(),
            ]);
            $prodi->delete();
        });

        Session::flash('toastr', ['type' => 'gradient-red-to-pink', 'content' => 'Prodi dihapus.']);
        return back();
    }
}

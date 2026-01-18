<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\{Assignment, AuditHistory, Faculty, Prodi};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\{DB, Session};
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class FacultyController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->only(['search', 'sort_field', 'direction', 'per_page']);
        $perPage = $request->input('per_page', 10);

        $faculties = Faculty::withCount('prodis')
            ->search($request->search, ['name']) // Cari di kolom name
            ->sort($request->sort_field, $request->direction)    // Urutkan ASC/DESC
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('Admin/Faculty/Index', [
            'faculties' => $faculties,
            'filters' => $filters,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        DB::transaction(function () use ($validated) {
            $faculty = Faculty::create($validated);
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => Faculty::class,
                'historable_id' => $faculty->id,
                'stage' => 'master_setup',
                'action' => 'create_faculty',
                'new_values' => $faculty->toArray(),
            ]);
        });

        Session::flash('toastr', ['type' => 'solid-blue', 'content' => 'Fakultas berhasil ditambahkan.']);
        return back();
    }

    public function update(Request $request, Faculty $faculty)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $oldValues = $faculty->toArray();

        DB::transaction(function () use ($faculty, $validated, $oldValues) {
            $faculty->update($validated);
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => Faculty::class,
                'historable_id' => $faculty->id,
                'stage' => 'master_setup',
                'action' => 'update_faculty',
                'old_values' => $oldValues,
                'new_values' => $faculty->getChanges(),
            ]);
        });

        Session::flash('toastr', ['type' => 'solid-yellow', 'content' => 'Data fakultas diperbarui.']);
        return back();
    }

    public function destroy(Faculty $faculty)
    {
        // 1. Cek User
        $hasUsers = $faculty->users()->exists();

        // 2. Cek Prodi (PENTING!)
        $hasProdis = Prodi::where('faculty_id', $faculty->id)->exists();

        // 3. Cek Assignment (Polimorfik)
        $hasAssignments = Assignment::where('assignable_type', Faculty::class)
            ->where('assignable_id', $faculty->id)
            ->exists();

        if ($hasUsers || $hasProdis || $hasAssignments) {
            Session::flash('toastr', [
                'type' => 'gradient-red-to-pink',
                'content' => 'Gagal: Fakultas masih memiliki User, Prodi, atau Penugasan aktif.'
            ]);
            return back();
        }

        DB::transaction(function () use ($faculty) {
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => Faculty::class,
                'historable_id' => $faculty->id,
                'stage' => 'master_setup',
                'action' => 'delete_faculty',
                'old_values' => $faculty->toArray(),
            ]);
            $faculty->delete();
        });

        Session::flash('toastr', ['type' => 'gradient-red-to-pink', 'content' => 'Fakultas dihapus.']);
        return back();
    }
}

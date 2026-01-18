<?php

namespace App\Http\Controllers;

use App\Models\LibraryDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LibraryController extends Controller
{
    public function index(Request $request)
    {
        $documents = LibraryDocument::with('uploader:id,name')
            ->visibleToUser(auth()->user()) // Filter otomatis berdasarkan role
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })
            ->sort($request->sort_field ?? 'name', $request->direction ?? 'asc')
            ->paginate(12)
            ->withQueryString();

        return inertia('Library/Index', [
            'documents' => $documents,
            'filters' => $request->only(['search', 'sort_field', 'direction'])
        ]);
    }

    public function download(LibraryDocument $libraryDocument)
    {
        // Double Check Security: Mencegah akses via URL ID langsung
        $user = auth()->user();
        if (!$user->is_admin && $libraryDocument->type === 'auditor' && !$user->is_auditor) {
            abort(403, 'Anda tidak memiliki akses ke dokumen internal auditor.');
        }

        if (!Storage::disk('local')->exists($libraryDocument->file_path)) {
            abort(404, 'Berkas tidak ditemukan.');
        }

        $fullPath = Storage::disk('local')->path($libraryDocument->file_path);
        $displayFileName = str_replace(' ', '_', strtoupper($libraryDocument->name)) . '.' . $libraryDocument->extension;

        // Jika PDF tampilkan inline, lainnya download
        if (strtolower($libraryDocument->extension) === 'pdf') {
            return response()->file($fullPath, [
                'Content-Disposition' => 'inline; filename="' . $displayFileName . '"'
            ]);
        }

        return response()->download($fullPath, $displayFileName);
    }
}

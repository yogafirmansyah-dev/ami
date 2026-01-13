<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LibraryDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LibraryDocumentController extends Controller
{
    public function index()
    {
        // Admin bisa melihat semua, user lain (jika rute dibuka nanti) pakai scope
        $documents = LibraryDocument::with('uploader:id,name')
            ->latest()
            ->paginate(10);

        return inertia('Admin/Library/Index', [
            'documents' => $documents
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|in:public,auditor',
            'file' => 'required|file|mimes:pdf,docx,xlsx,zip|max:10240',
        ]);

        $file = $request->file('file');
        $path = $file->store('library_docs', 'local');

        LibraryDocument::create([
            'name' => $request->name,
            'type' => $request->type,
            'file_path' => $path,
            'extension' => $file->getClientOriginalExtension(),
            'uploaded_by' => auth()->id()
        ]);

        return back()->with('toastr', ['type' => 'success', 'content' => 'Dokumen berhasil ditambahkan.']);
    }

    public function update(Request $request, LibraryDocument $library)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|in:public,auditor',
            'file' => 'nullable|file|mimes:pdf,docx,xlsx,zip|max:10240',
        ]);

        $data = [
            'name' => $request->name,
            'type' => $request->type,
        ];

        if ($request->hasFile('file')) {
            // Hapus file lama
            Storage::disk('local')->delete($library->file_path);

            $file = $request->file('file');
            $data['file_path'] = $file->store('library_docs', 'local');
            $data['extension'] = $file->getClientOriginalExtension();
        }

        $library->update($data);

        return back()->with('toastr', ['type' => 'success', 'content' => 'Dokumen berhasil diperbarui.']);
    }

    public function destroy(LibraryDocument $library)
    {
        Storage::disk('local')->delete($library->file_path);
        $library->delete();

        return back()->with('toastr', ['type' => 'success', 'content' => 'Dokumen berhasil dihapus.']);
    }
}

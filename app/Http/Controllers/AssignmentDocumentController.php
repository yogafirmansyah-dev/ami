<?php

namespace App\Http\Controllers;

use App\Models\AssignmentDocument;
use App\Models\AuditHistory;
use App\Models\Assignment;
use Illuminate\Support\Facades\{DB, Gate, Storage, Session};

class AssignmentDocumentController extends Controller
{
    /**
     * Mengunduh dokumen BA atau Laporan Akhir
     */
    public function download(AssignmentDocument $document)
    {
        // 1. Otorisasi: Hanya yang berhak melihat assignment ini yang boleh download
        Gate::authorize('view', $document->assignment);

        // 2. Pastikan file fisik ada
        if (!Storage::exists($document->file_path)) {
            return back()->withErrors(['message' => 'File tidak ditemukan di server.']);
        }

        // 3. Nama file dinamis agar lebih informatif saat diunduh
        $fileName = str_replace('_', '-', $document->type->value) . '-' . $document->assignment_id . '.pdf';

        return Storage::download($document->file_path, $fileName);
    }

    /**
     * Menghapus dokumen (Hanya jika tahap audit belum berpindah)
     */
    public function destroy(AssignmentDocument $document)
    {
        $assignment = $document->assignment;

        // 1. Otorisasi via Policy
        Gate::authorize('deleteDocument', $assignment);

        // 2. Validasi Stage-Gate (Logika di Model)
        if ($document->isLockedForReportChange()) {
            return back()->withErrors([
                'message' => 'Dokumen sudah dikunci dan tidak dapat dihapus karena tahap audit sudah berpindah.',
            ]);
        }

        DB::transaction(function () use ($document, $assignment) {
            // 3. Catat ke AuditHistory sebelum dihapus (untuk akuntabilitas)
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => Assignment::class,
                'historable_id' => $assignment->id,
                'stage' => $assignment->current_stage,
                'action' => 'delete_document',
                'old_values' => [
                    'type' => $document->type->value,
                    'file_path' => $document->file_path
                ],
                'reason' => 'Penghapusan dokumen resmi oleh user terkait.'
            ]);

            // 4. Hapus File Fisik & Record Database
            Storage::delete($document->file_path);
            $document->delete();
        });

        Session::flash('toastr', [
            'type' => 'gradient-red-to-pink',
            'content' => 'Dokumen berhasil dihapus.',
        ]);

        return back();
    }
}

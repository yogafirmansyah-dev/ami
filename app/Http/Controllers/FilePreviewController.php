<?php

namespace App\Http\Controllers;

use App\Models\AssignmentIndicator;
use App\Models\AssignmentDocument;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\StreamedResponse;

class FilePreviewController extends Controller
{
    /**
     * Preview bukti audit dari indikator
     */
    public function previewEvidence(AssignmentIndicator $indicator)
    {
        // 1. Otorisasi: Gunakan policy view pada assignment terkait
        Gate::authorize('view', $indicator->assignment);

        if (!$indicator->evidence_path || !Storage::exists($indicator->evidence_path)) {
            abort(404, 'File bukti tidak ditemukan.');
        }

        return $this->serveFile($indicator->evidence_path);
    }

    /**
     * Preview dokumen resmi (BA/Laporan)
     */
    public function previewDocument(AssignmentDocument $document)
    {
        Gate::authorize('view', $document->assignment);

        if (!Storage::exists($document->file_path)) {
            abort(404, 'Dokumen tidak ditemukan.');
        }

        return $this->serveFile($document->file_path);
    }

    /**
     * Helper untuk mengirim file ke browser dengan MIME type yang tepat
     */
    private function serveFile(string $path)
    {
        $mimeType = Storage::mimeType($path);

        // Memungkinkan preview di browser (inline) bukan download paksa
        return response()->file(storage_path('app/' . $path), [
            'Content-Type' => $mimeType,
            'Content-Disposition' => 'inline',
        ]);
    }
}

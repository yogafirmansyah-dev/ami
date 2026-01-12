<?php

namespace App\Http\Controllers;

use App\Models\AssignmentIndicator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function showEvidence(AssignmentIndicator $indicator)
    {
        // 1. Validasi keberadaan data & file fisik di disk internal (local)
        if (!$indicator->evidence_path || !Storage::disk('local')->exists($indicator->evidence_path)) {
            abort(404, 'Berkas bukti tidak ditemukan di server.');
        }

        // 2. Ambil path absolut di server
        $path = Storage::disk('local')->path($indicator->evidence_path);

        // 3. Deteksi Ekstensi File
        $extension = strtolower(pathinfo($path, PATHINFO_EXTENSION));

        // 4. Buat nama file yang bersih untuk sisi user (User-Friendly Name)
        // Menghilangkan karakter ilegal agar tidak error saat diunduh
        $safeCode = str_replace(['/', '\\', '.', ' '], '_', $indicator->snapshot_code);
        $displayFileName = "Bukti-" . $safeCode . "." . $extension;

        // 5. Logika Response Berdasarkan Tipe File
        if ($extension === 'pdf') {
            /** * Jika PDF: Tampilkan di tab browser (Preview)
             * Menggunakan response()->file() agar browser mencoba me-render PDF tersebut
             */
            return response()->file($path, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'inline; filename="' . $displayFileName . '"'
            ]);
        }

        /** * Jika Non-PDF (DOCX, XLSX, ZIP, JPG): Paksa Unduh
         * response()->download() memastikan nama file di komputer user rapi (displayFileName)
         */
        return response()->download($path, $displayFileName);
    }

    public function showOfficialDocument(AssignmentDocument $document)
    {
        // Otorisasi: Pastikan user berhak melihat assignment terkait
        // $this->authorize('view', $document->assignment);

        if (!Storage::disk('local')->exists($document->path)) {
            abort(404, 'File dokumen tidak ditemukan.');
        }

        $path = Storage::disk('local')->path($document->path);
        $extension = strtolower(pathinfo($path, PATHINFO_EXTENSION));

        // Nama file saat didownload: misal BA_Lapangan_Unit_Teknik.pdf
        $displayFileName = strtoupper($document->type) . "_" . str_replace(' ', '_', $document->assignment->target_name) . "." . $extension;

        if ($extension === 'pdf') {
            return response()->file($path, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'inline; filename="' . $displayFileName . '"'
            ]);
        }

        return response()->download($path, $displayFileName);
    }
}

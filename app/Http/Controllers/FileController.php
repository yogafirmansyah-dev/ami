<?php

namespace App\Http\Controllers;

use App\Models\AssignmentDocument;
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
        // 1. Otorisasi (Sangat disarankan untuk dokumen internal)
        // $this->authorize('view', $document->assignment);

        // 2. Gunakan file_path (sesuai Model) dan tambahkan pengecekan null
        if (!$document->file_path || !Storage::disk('local')->exists($document->file_path)) {
            abort(404, 'Berkas fisik tidak ditemukan di server.');
        }

        // 3. Dapatkan path lengkap secara aman
        $fullPath = Storage::disk('local')->path($document->file_path);
        $extension = strtolower(pathinfo($fullPath, PATHINFO_EXTENSION));

        // 4. Generate Nama File yang Profesional
        // Contoh: BA_LAPANGAN_PRODI_TEKNIK_INFORMATIKA.pdf
        $cleanUnitName = str_replace([' ', '/', '\\'], '_', strtoupper($document->assignment->target_name));
        $cleanTypeName = str_replace(' ', '_', strtoupper($document->type->value));
        $displayFileName = "{$cleanTypeName}_{$cleanUnitName}.{$extension}";

        // 5. Response berdasarkan tipe file
        if ($extension === 'pdf') {
            return response()->file($fullPath, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'inline; filename="' . $displayFileName . '"'
            ]);
        }

        // Untuk file selain PDF (zip, docx, dll) otomatis download
        return response()->download($fullPath, $displayFileName);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Gate;

class ReportExportController extends Controller
{
    /**
     * Export Laporan Hasil Audit (AMI) ke PDF
     */
    public function exportPdf($id)
    {
        // 1. Ambil data penugasan beserta indikator snapshot-nya
        $assignment = Assignment::with([
            'period',
            'standard',
            'auditor',
            'indicators' => function ($query) {
                $query->orderBy('snapshot_code', 'asc');
            },
            'assignable' // Prodi atau Faculty
        ])->findOrFail($id);

        // 2. Data untuk View PDF
        $data = [
            'title' => 'Laporan Audit Mutu Internal',
            'date' => date('d/m/Y'),
            'assignment' => $assignment,
            'indicators' => $assignment->indicators,
        ];

        // 3. Load view khusus PDF (kita buat di langkah selanjutnya)
        $pdf = Pdf::loadView('reports.assignment_report', $data)
            ->setPaper('a4', 'landscape'); // Landscape karena tabelnya lebar (10 kolom)

        // 4. Download file dengan nama yang dinamis
        $fileName = 'Laporan_AMI_' . str_replace(' ', '_', $assignment->target_name) . '.pdf';
        return $pdf->download($fileName);
    }

    /**
     * Export Daftar Tilik (Checklist AMI) ke DOCX
     */
    public function exportDocx($id, \App\Services\ChecklistExportService $exportService)
    {
        $assignment = Assignment::with([
            'standard',
            'auditor',
            'assignable',
            'indicators'
        ])->findOrFail($id);

        $filePath = $exportService->generateDocx($assignment);

        $fileName = 'Daftar_Tilik_' . str_replace(' ', '_', $assignment->target_name) . '.docx';

        return response()->download($filePath, $fileName)->deleteFileAfterSend(true);
    }

    /**
     * Export Temuan Audit AMI (Form AMI-02) ke DOCX
     */
    public function exportFindingDocx($id, \App\Services\FindingExportService $exportService)
    {
        $assignment = Assignment::with([
            'standard',
            'auditor',
            'assignable',
        ])->findOrFail($id);

        // Generate temuan audit
        $filePath = $exportService->generateDocx($assignment);

        // Download docx dan pastikan terhapus otomatis setelah di-send
        $fileName = 'Temuan_Audit_' . str_replace(' ', '_', $assignment->target_name) . '.docx';
        return response()->download($filePath, $fileName)->deleteFileAfterSend(true);
    }
}

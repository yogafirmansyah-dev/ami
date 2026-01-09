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
    public function exportPdf(Assignment $assignment)
    {
        // 1. Otorisasi: Pastikan hanya pihak terkait yang bisa akses
        Gate::authorize('view', $assignment);

        // 2. Load data lengkap dengan relasi polimorfik
        $assignment->load([
            'assignable', // Relasi ke Prodi atau Fakultas
            'period',
            'standard',
            'auditor',
            'indicators' => function ($query) {
                $query->orderBy('snapshot_code', 'asc');
            }
        ]);

        // 3. Hitung statistik untuk Executive Summary
        $stats = $this->calculateStats($assignment);

        // 4. Generate PDF menggunakan view blade
        $pdf = Pdf::loadView('reports.assignment-report', compact('assignment', 'stats'))
            ->setPaper('a4', 'portrait')
            ->setOption(['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true]);

        // 5. Nama file dinamis
        $fileName = 'Laporan_AMI_' . str_replace(' ', '_', $assignment->target_name) . '_' . now()->format('Ymd') . '.pdf';

        // Tampilkan di browser (stream) atau download paksa (download)
        return $pdf->stream($fileName);
    }

    /**
     * Helper untuk menghitung statistik laporan
     */
    private function calculateStats($assignment)
    {
        $total = $assignment->indicators->count();
        $avg = $assignment->indicators->avg('score') ?? 0;

        return [
            'total_indicators' => $total,
            'scored_indicators' => $assignment->indicators->whereNotNull('score')->count(),
            'average_score' => round($avg, 2),
            'average_label' => $this->getAverageLabel($avg),
            'kts_count' => $assignment->indicators->where('score', '<=', 2)->whereNotNull('score')->count(),
            'baik_count' => $assignment->indicators->where('score', '>=', 3)->count(),
        ];
    }

    private function getAverageLabel($avg)
    {
        if ($avg >= 3.51)
            return 'Sangat Baik';
        if ($avg >= 2.51)
            return 'Baik';
        if ($avg >= 1.51)
            return 'Cukup';
        if ($avg >= 1.00)
            return 'Kurang';
        return 'N/A';
    }
}

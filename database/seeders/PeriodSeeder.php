<?php

namespace Database\Seeders;

use App\Models\Period;
use Illuminate\Database\Seeder;

class PeriodSeeder extends Seeder
{
    public function run(): void
    {
        Period::create([
            'name' => 'Siklus AMI 2026 (Utama)',

            // 1. Audit Dokumen (2 Bulan: Jan - Feb)
            'doc_audit_start' => '2026-01-01',
            'doc_audit_end' => '2026-02-28',

            // 2. Audit Lapangan (2 Bulan: Mar - Apr)
            'field_audit_start' => '2026-03-01',
            'field_audit_end' => '2026-04-30',

            // 3. Verifikasi Temuan (1 Bulan: Mei)
            'finding_start' => '2026-05-01',
            'finding_end' => '2026-05-31',

            // 4. Pelaporan (1 Bulan: Juni)
            'reporting_start' => '2026-06-01',
            'reporting_end' => '2026-06-30',

            // 5. RTM & RTL (2 Bulan: Juli - Agustus)
            'rtm_rtl_start' => '2026-07-01',
            'rtm_rtl_end' => '2026-08-31',

            'is_active' => true,
        ]);

        // Opsional: Buat periode tahun sebelumnya untuk data history
        Period::create([
            'name' => 'Siklus AMI 2025 (Arsip)',
            'doc_audit_start' => '2025-01-01',
            'doc_audit_end' => '2025-02-28',
            'field_audit_start' => '2025-03-01',
            'field_audit_end' => '2025-04-30',
            'finding_start' => '2025-05-01',
            'finding_end' => '2025-05-31',
            'reporting_start' => '2025-06-01',
            'reporting_end' => '2025-06-30',
            'rtm_rtl_start' => '2025-07-01',
            'rtm_rtl_end' => '2025-08-31',
            'is_active' => false,
        ]);
    }
}

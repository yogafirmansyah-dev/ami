<?php

namespace App\Services;

use App\Models\Assignment;
use App\Enums\FindingType;
use PhpOffice\PhpWord\PhpWord;
use PhpOffice\PhpWord\Settings;
use PhpOffice\PhpWord\Style\Table as TableStyle;
use PhpOffice\PhpWord\Style\Cell as CellStyle;
use PhpOffice\PhpWord\Style\Font as FontStyle;
use PhpOffice\PhpWord\SimpleType\Jc;
use PhpOffice\PhpWord\SimpleType\JcTable;
use PhpOffice\PhpWord\SimpleType\VerticalJc;

class ChecklistExportService
{
    /**
     * Generate AMI Checklist (Form AMI-01) in DOCX format
     *
     * @param Assignment $assignment
     * @return string $tempFilePath Path to the generated docx file
     */
    public function generateDocx(Assignment $assignment): string
    {
        // PENTING: Mengaktifkan output escaping untuk mencegah XML rusak
        Settings::setOutputEscapingEnabled(true);

        $phpWord = new PhpWord();

        // Mengatur properti dokumen
        $properties = $phpWord->getDocInfo();
        $properties->setCreator('AMI App');
        $properties->setCompany('Universitas');
        $properties->setTitle('Daftar Tilik AMI');
        $properties->setDescription('Formulario AMI-01 Checklist');

        // Menambahkan Section (Portrait A4)
        $section = $phpWord->addSection([
            'orientation' => 'portrait',
            'paperSize' => 'A4',
            'marginLeft' => 1134,
            'marginRight' => 850,
            'marginTop' => 850,
            'marginBottom' => 850,
        ]);

        // Style Font Utama
        $phpWord->addFontStyle('TitleStyle', ['bold' => true, 'color' => '4F81BD', 'size' => 14, 'name' => 'Arial']);
        $phpWord->addParagraphStyle('TitlePara', ['alignment' => Jc::CENTER, 'spaceAfter' => 200]);

        $section->addText('Formulir Daftar Tilik/Checklist Audit Mutu Internal (Form AMI-01)', 'TitleStyle', 'TitlePara');
        $section->addTextBreak(1);

        // --- TABEL 1: Header Dokumen (Kop Identitas) ---
        $headerTableStyleName = 'Header Table';
        $phpWord->addTableStyle($headerTableStyleName, [
            'borderSize' => 6,
            'borderColor' => '000000',
            'cellMargin' => 100,
            'alignment' => JcTable::CENTER
        ]);
        $tableHeader = $section->addTable($headerTableStyleName);

        // Baris 1
        $tableHeader->addRow(400);
        $tableHeader->addCell(1700, ['vMerge' => 'restart', 'valign' => 'center'])->addText('', null, ['alignment' => Jc::CENTER]);
        $tableHeader->addCell(3700, ['vMerge' => 'restart', 'valign' => 'center'])->addText('SPMI', ['bold' => true], ['alignment' => Jc::CENTER]);
        $tableHeader->addCell(1700)->addText('No. Dokumen');
        $tableHeader->addCell(2800)->addText('');

        // Baris 2
        $tableHeader->addRow(400);
        $tableHeader->addCell(null, ['vMerge' => 'continue']);
        $tableHeader->addCell(null, ['vMerge' => 'continue']);
        $tableHeader->addCell(1700)->addText('Berlaku Sejak');
        $tableHeader->addCell(2800)->addText('');

        // Baris 3
        $tableHeader->addRow(400);
        $tableHeader->addCell(null, ['vMerge' => 'continue']);
        $tableHeader->addCell(3700, ['vMerge' => 'restart', 'valign' => 'center'])->addText('DAFTAR TILIK', ['bold' => true], ['alignment' => Jc::CENTER]);
        $tableHeader->addCell(1700)->addText('Revisi');
        $tableHeader->addCell(2800)->addText('');

        // Baris 4
        $tableHeader->addRow(400);
        $tableHeader->addCell(null, ['vMerge' => 'continue']);
        $tableHeader->addCell(null, ['vMerge' => 'continue']);
        $tableHeader->addCell(1700)->addText('Halaman');
        $tableHeader->addCell(2800)->addText('');

        $section->addTextBreak(1);

        // --- TABEL 2: Identitas Pelaksanaan ---
        $infoTableStyleName = 'Info Table';
        $phpWord->addTableStyle($infoTableStyleName, [
            'borderSize' => 6,
            'borderColor' => '000000',
            'cellMargin' => 100
        ]);

        $tableInfo = $section->addTable($infoTableStyleName);

        // REVISI STRUKTUR KOLOM: Menggunakan 4 Kolom agar titik dua sejajar
        // Total = 9900 twips (1600 + 3350 + 1600 + 3350)

        // Baris 1
        $tableInfo->addRow();
        $tableInfo->addCell(1600)->addText('Hari/tanggal');
        $tableInfo->addCell(3350)->addText(': '); // Isi manual jika ada
        $tableInfo->addCell(1600)->addText('Auditee');
        $tableInfo->addCell(3350)->addText(': Prodi Apoteker dan S1 Farmasi');

        // Baris 2
        $tableInfo->addRow();
        $tableInfo->addCell(1600)->addText('Jam');
        $tableInfo->addCell(3350)->addText(': '); // Isi manual jika ada
        $tableInfo->addCell(1600)->addText('Ketua Tim Auditor');
        $tableInfo->addCell(3350)->addText(': Riska Ratnawati, S.KM.,M.Kes');

        // Baris 3
        $tableInfo->addRow();
        $tableInfo->addCell(1600)->addText('Prodi/ Unit Kerja');
        $tableInfo->addCell(3350)->addText(': ' . (string) ($assignment->assignable->name ?? '-'));
        $tableInfo->addCell(1600)->addText('Anggota Auditor');
        $tableInfo->addCell(3350)->addText(': ' . (string) ($assignment->auditor->name ?? '-'));

        // Baris 4
        $tableInfo->addRow();
        $tableInfo->addCell(1600)->addText('Nama Dokumen');
        $tableInfo->addCell(3350)->addText(': ');
        $tableInfo->addCell(1600)->addText('');
        $tableInfo->addCell(3350)->addText('');

        // Baris 5
        $tableInfo->addRow();
        $tableInfo->addCell(1600)->addText('Halaman');
        $tableInfo->addCell(3350)->addText(': ');
        $tableInfo->addCell(1600)->addText('');
        $tableInfo->addCell(3350)->addText('');

        $section->addTextBreak(1);

        // --- TABEL 3: Checklist Utama ---
        $checklistTableStyleName = 'Checklist Table';
        $phpWord->addTableStyle($checklistTableStyleName, [
            'borderSize' => 6,
            'borderColor' => '000000',
            'cellMargin' => 100,
            'alignment' => JcTable::CENTER
        ]);

        $tableChecklist = $section->addTable($checklistTableStyleName);

        // Header Table Checklist
        $headerBgGreen = ['bgColor' => '92D050', 'valign' => 'center'];
        $headerBgOrange = ['bgColor' => 'FFC000', 'valign' => 'center'];
        $boldCenter = ['bold' => true];
        $paraCenter = ['alignment' => Jc::CENTER, 'spaceAfter' => 0, 'spaceBefore' => 0, 'spacing' => 0, 'lineHeight' => 1.0];
        $paraLeft = ['alignment' => Jc::LEFT, 'spaceAfter' => 0, 'spaceBefore' => 0, 'spacing' => 0, 'lineHeight' => 1.0];

        $tableChecklist->addRow();
        $tableChecklist->addCell(500, $headerBgGreen)->addText('No', $boldCenter, $paraCenter);
        $tableChecklist->addCell(1200, $headerBgGreen)->addText('Referensi (Butir Mutu)', $boldCenter, $paraCenter);
        $tableChecklist->addCell(3200, $headerBgGreen)->addText('Pertanyaan', $boldCenter, $paraCenter);
        $tableChecklist->addCell(2000, $headerBgOrange)->addText('Hasil Observasi/Audit Visitasi', $boldCenter, $paraCenter);
        $tableChecklist->addCell(500, $headerBgOrange)->addText('S', $boldCenter, $paraCenter);
        $tableChecklist->addCell(500, $headerBgOrange)->addText('TS', $boldCenter, $paraCenter);
        $tableChecklist->addCell(2000, $headerBgOrange)->addText('Catatan Khusus', $boldCenter, $paraCenter);

        // Isi Tabel
        $standardName = (string) ($assignment->standard->name ?? '-');

        // Print Group Standar Header
        $tableChecklist->addRow();
        $tableChecklist->addCell(9900, ['gridSpan' => 7, 'bgColor' => '92D050', 'valign' => 'center'])
            ->addText('STANDAR ' . strtoupper($standardName), ['bold' => true], $paraLeft);

        // Looping Indicators
        $indicators = $assignment->indicators()->orderBy('snapshot_code')->get();
        $no = 1;

        foreach ($indicators as $indicator) {
            $tableChecklist->addRow();

            // Konversi aman ke string
            $evidenceText = (string) ($indicator->snapshot_evidence_needed ?? '');
            $reqText = (string) ($indicator->snapshot_requirement ?? '');

            // Kolom Hijau Muda untuk pertanyaan
            $cellBgGreenLight = ['bgColor' => '92D050', 'valign' => 'center'];
            $tableChecklist->addCell(500, $cellBgGreenLight)->addText((string) $no++, null, $paraCenter);
            $tableChecklist->addCell(1200, $cellBgGreenLight)->addText($evidenceText, null, $paraLeft);
            $tableChecklist->addCell(3200, $cellBgGreenLight)->addText($reqText, null, $paraLeft);

            // Logika Penentuan S atau TS
            $sValue = '';
            $tsValue = '';
            $catatan = '';
            $hasilObservasi = '';

            if (empty($indicator->finding_type) || empty($indicator->score)) {
                $tsValue = '√';
                $catatan = 'Belum dinilai';
            } else {
                $enumVal = $indicator->finding_type instanceof FindingType ? $indicator->finding_type->value : $indicator->finding_type;
                $label = $indicator->finding_type instanceof FindingType ? $indicator->finding_type->label() : (string) $enumVal;
                $hasilObservasi = "[" . $label . " (" . (string) $indicator->score . ")]";

                if ($enumVal === FindingType::KS->value) {
                    $sValue = '√';
                    $catatan = '';
                } else {
                    $tsValue = '√';
                    $catatan = (string) ($indicator->auditor_note ?? 'Temuan Tidak Sesuai');
                }
            }

            // Kolom Oranye Muda untuk hasil
            $cellBgOrangeLight = ['bgColor' => 'FFC000', 'valign' => 'center'];
            $tableChecklist->addCell(2000, $cellBgOrangeLight)->addText($hasilObservasi, null, $paraCenter);
            $tableChecklist->addCell(500, $cellBgOrangeLight)->addText($sValue, ['bold' => true], $paraCenter);
            $tableChecklist->addCell(500, $cellBgOrangeLight)->addText($tsValue, ['bold' => true], $paraCenter);
            $tableChecklist->addCell(2000, $cellBgOrangeLight)->addText($catatan, null, $paraLeft);
        }

        $section->addTextBreak(2);

        // --- Tanda Tangan Auditor ---
        $signatureTable = $section->addTable(['alignment' => JcTable::END]);
        $signatureTable->addRow();
        $signatureTable->addCell(5000)->addText('Auditor,', null, ['alignment' => Jc::CENTER]);
        $signatureTable->addRow(1000); // Space untuk ttd
        $signatureTable->addCell(5000)->addText('');
        $signatureTable->addRow();
        $signatureTable->addRow();
        $signatureTable->addCell(5000)->addText((string) ($assignment->auditor->name ?? '-'), ['bold' => true, 'underline' => 'single'], ['alignment' => Jc::CENTER]);

        // --- Keterangan Bawah ---
        $section->addTextBreak(1);
        $section->addText('KETERANGAN:', ['bold' => true]);

        $ketTable = $section->addTable();
        $ketTable->addRow();
        $ketTable->addCell(1000)->addText('S', ['bold' => true]);
        $ketTable->addCell(5000)->addText(': Sesuai');

        $ketTable->addRow();
        $ketTable->addCell(1000)->addText('TS', ['bold' => true]);
        $ketTable->addCell(5000)->addText(': Tidak Sesuai');

        $ketTable->addRow();
        $ketTable->addCell(1000, ['bgColor' => '92D050']);
        $ketTable->addCell(5000)->addText(': Diisi saat audit dokumen');

        $ketTable->addRow();
        $ketTable->addRow(); // Baris kosong kecil sebagai spasi
        $ketTable->addCell(1000, ['bgColor' => 'FFC000']);
        $ketTable->addCell(5000)->addText(': Diisi saat audit lapangan');

        // Simpan dokumen ke file sementara
        $tempFile = tempnam(sys_get_temp_dir(), 'ami_checklist_');
        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        $objWriter->save($tempFile);

        // PENTING: Membersihkan buffer agar file tidak corrupt
        while (ob_get_level() > 0) {
            ob_end_clean();
        }

        return $tempFile;
    }
}
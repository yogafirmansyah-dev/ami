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

class FindingExportService
{
    /**
     * Generate AMI Findings (Form AMI-02) in DOCX format
     *
     * @param Assignment $assignment
     * @return string $tempFilePath Path to the generated docx file
     */
    public function generateDocx(Assignment $assignment): string
    {
        // PENTING: Mengaktifkan output escaping untuk mencegah XML rusak
        // jika ada karakter spesial seperti &, <, >, atau " di dalam database.
        Settings::setOutputEscapingEnabled(true);

        $phpWord = new PhpWord();

        // Mengatur properti dokumen
        $properties = $phpWord->getDocInfo();
        $properties->setCreator('AMI App');
        $properties->setCompany('Universitas');
        $properties->setTitle('Formulir Temuan Audit AMI');
        $properties->setDescription('Formulario AMI-02 Temuan');

        // Menambahkan Section (Portrait A4 dengan Margin Surat Resmi tapi dioptimalkan untuk tabel)
        // Kertas A4 Portrait: 210mm x 297mm.
        // Margin proporsional (kiri 2cm=1134 twips, kanan/atas/bawah 1.5cm=850 twips).
        // Lebar efektif dokumen: 11906 (A4 width) - 1134 (L) - 850 (R) = ~9900 twips.
        $section = $phpWord->addSection([
            'orientation' => 'portrait',
            'paperSize' => 'A4',
            'marginLeft' => 1134,
            'marginRight' => 850,
            'marginTop' => 850,
            'marginBottom' => 850,
        ]);

        // Style Font Utama
        $phpWord->addFontStyle('TitleStyle', ['color' => '4F81BD', 'size' => 12, 'name' => 'Times New Roman']);
        $phpWord->addParagraphStyle('TitlePara', ['alignment' => Jc::LEFT, 'spaceAfter' => 200]);

        $section->addText('Formulir Temuan Audit Mutu Internal (Form AMI-02)', 'TitleStyle', 'TitlePara');

        // Kotak Teks "TEMUAN AUDIT"
        $boxTable = $section->addTable([
            'borderSize' => 6,
            'borderColor' => '000000',
            'cellMargin' => 50,
            'alignment' => JcTable::END // Di kanan
        ]);
        $boxTable->addRow();
        $boxTable->addCell(4000)->addText('TEMUAN AUDIT', ['name' => 'Times New Roman', 'size' => 11], ['alignment' => Jc::CENTER]);

        $section->addTextBreak(1);

        // --- TABEL 1: Identitas Pelaksanaan (Tanpa Border) ---
        $infoTableStyleName = 'Info Table';
        $phpWord->addTableStyle($infoTableStyleName, [
            'borderSize' => 0, // Tanpa border
            'borderColor' => 'FFFFFF',
            'cellMargin' => 50
        ]);

        $tableInfo = $section->addTable($infoTableStyleName);
        $fontNormal = ['name' => 'Times New Roman', 'size' => 11];

        // Ambil data anggota tim
        $members = $assignment->auditor->members ?? [];

        $anggotaList = [
            'Cintika Yorinda Sebtalesy, S.ST.,M.Kes',
            'Dr. Retno Widiarini, S.KM.,M.Kes',
            'Heru Widianto, S.ST.,M.Kom',
            'Agustinus Kusdwiadji, S.E.,M.M.',
            ''
        ];

        // REVISI STRUKTUR KOLOM: Menggunakan 4 Kolom agar titik dua (:) sejajar sempurna
        // Total lebar = 9900 twips (disesuaikan dengan lebar A4 margin Anda)
        // Col 1: Label Kiri (1600)
        // Col 2: Titik Dua & Isi Kiri (2400)
        // Col 3: Label Kanan (1500)
        // Col 4: Titik Dua & Isi Kanan (4400)

        // Baris 1: Hari/Tanggal & Auditee
        $tableInfo->addRow();
        $tableInfo->addCell(1400)->addText('Hari/Tanggal', $fontNormal);
        $tableInfo->addCell(2800)->addText(':', $fontNormal);
        $tableInfo->addCell(1100)->addText('Auditee', $fontNormal);
        $tableInfo->addCell(4400)->addText(': Prodi Apoteker dan S1 Farmasi', $fontNormal);

        // Baris 2: Jam & Auditor 
        $tableInfo->addRow();
        $tableInfo->addCell(1400)->addText('Jam', $fontNormal);
        $tableInfo->addCell(2800)->addText(':', $fontNormal);
        $tableInfo->addCell(1100)->addText('Auditor', $fontNormal);
        $tableInfo->addCell(4400)->addText(': ' . (string) ($assignment->auditor->name ?? ''), $fontNormal);

        // Baris 3: Fak/Prodi & Ketua Auditor
        $tableInfo->addRow();
        $tableInfo->addCell(1400)->addText('Fak/Prodi', $fontNormal);
        $tableInfo->addCell(2800)->addText(': ' . (string) ($assignment->assignable->name ?? ''), $fontNormal);
        $tableInfo->addCell(1100)->addText('a. Ketua', $fontNormal);
        $tableInfo->addCell(4400)->addText(': Riska Ratnawati, S.KM.,M.Kes', $fontNormal);

        // Baris Anggota Lanjutan
        $hurufAbjad = 'b';
        foreach ($anggotaList as $anggota) {
            // Abaikan jika string kosong agar baris tidak tercetak
            if (empty(trim((string) $anggota))) {
                continue;
            }

            $tableInfo->addRow();
            $tableInfo->addCell(1400)->addText('', $fontNormal); // Sel kosong bawah Label Kiri
            $tableInfo->addCell(2800)->addText('', $fontNormal); // Sel kosong bawah Isi Kiri
            $tableInfo->addCell(1100)->addText($hurufAbjad . '. Anggota', $fontNormal);
            $tableInfo->addCell(4400)->addText(': ' . (string) $anggota, $fontNormal);

            $hurufAbjad++;
        }

        $section->addTextBreak(1);

        // --- TABEL 2: Temuan Audit ---
        $findingTableStyleName = 'Finding Table';
        $phpWord->addTableStyle($findingTableStyleName, [
            'borderSize' => 6,
            'borderColor' => '000000',
            'cellMargin' => 100, // padding agar rapi
            'alignment' => JcTable::CENTER
        ]);

        $tableFinding = $section->addTable($findingTableStyleName);

        // Header Table Temuan
        $boldCenter = ['bold' => true];
        $paraCenter = ['alignment' => Jc::CENTER, 'spaceAfter' => 0, 'spaceBefore' => 0, 'spacing' => 0, 'lineHeight' => 1.0];
        $paraLeft = ['alignment' => Jc::LEFT, 'spaceAfter' => 0, 'spaceBefore' => 0, 'spacing' => 0, 'lineHeight' => 1.0];
        $paraJustify = ['alignment' => Jc::BOTH, 'spaceAfter' => 0, 'spaceBefore' => 0, 'spacing' => 0, 'lineHeight' => 1.0];

        // Total twips = 9900 (Portrait A4)
        $tableFinding->addRow();
        $tableFinding->addCell(500, ['vMerge' => 'restart', 'valign' => 'center'])->addText('No.', $boldCenter, $paraCenter);
        // Baris Header Terbagi 2 (Atas)
        $tableFinding->addCell(1500, ['valign' => 'top', 'borderBottomSize' => 0, 'borderBottomColor' => 'FFFFFF'])->addText('KTS/OB', $boldCenter, $paraCenter);
        $tableFinding->addCell(2000, ['valign' => 'top', 'borderBottomSize' => 0, 'borderBottomColor' => 'FFFFFF'])->addText('Referensi', $boldCenter, $paraCenter);
        $tableFinding->addCell(2900, ['vMerge' => 'restart', 'valign' => 'top'])->addText('Temuan Audit', $boldCenter, $paraCenter);
        $tableFinding->addCell(1500, ['vMerge' => 'restart', 'valign' => 'top'])->addText('Rencana Tindak Lanjut', $boldCenter, $paraCenter);
        $tableFinding->addCell(1500, ['vMerge' => 'restart', 'valign' => 'top'])->addText('Target Tanggal Penyelesaian', $boldCenter, $paraCenter);

        // Baris Header Terbagi 2 (Bawah)
        $tableFinding->addRow();
        $tableFinding->addCell(null, ['vMerge' => 'continue']);
        $tableFinding->addCell(1500, ['valign' => 'center', 'borderTopSize' => 0, 'borderTopColor' => 'FFFFFF'])->addText('(Initial Auditor)', $boldCenter, $paraCenter);
        $tableFinding->addCell(2000, ['valign' => 'center', 'borderTopSize' => 0, 'borderTopColor' => 'FFFFFF'])->addText('(butir mutu)', $boldCenter, $paraCenter);
        $tableFinding->addCell(null, ['vMerge' => 'continue']);
        $tableFinding->addCell(null, ['vMerge' => 'continue']);
        $tableFinding->addCell(null, ['vMerge' => 'continue']);

        // Looping Indicators (Hanya KTS dan OB)
        $indicators = $assignment->indicators()
            ->whereIn('finding_type', [FindingType::KTS->value, FindingType::OB->value])
            ->orderBy('snapshot_code')
            ->get();

        $no = 1;

        if ($indicators->isEmpty()) {
            $tableFinding->addRow();
            $tableFinding->addCell(9900, ['gridSpan' => 6])->addText('Tidak ada temuan (KTS / OB).', ['italic' => true], $paraCenter);
        } else {
            foreach ($indicators as $indicator) {
                $tableFinding->addRow();

                // Resolusi Label KTS / OB
                $enumVal = $indicator->finding_type instanceof FindingType ? $indicator->finding_type->value : $indicator->finding_type;
                $ktsObLabel = ($enumVal === FindingType::KTS->value) ? 'KTS' : 'OB';

                $auditorInitials = '';
                if ($assignment->auditor) {
                    $words = explode(' ', $assignment->auditor->name);
                    foreach ($words as $w) {
                        if (!empty($w)) { // Memastikan tidak ada string kosong
                            $auditorInitials .= strtoupper($w[0]);
                        }
                    }
                }

                $initialAuditorInfo = $ktsObLabel;

                // Pastikan nilai selalu berwujud string untuk menghindari pesan error corrupt
                $reqText = (string) ($indicator->snapshot_requirement ?? '');
                $noteText = (string) ($indicator->auditor_note ?? 'Tidak ada catatan.');

                $tableFinding->addCell(500, ['valign' => 'center'])->addText((string) $no++, null, $paraCenter);
                $tableFinding->addCell(1500, ['valign' => 'center'])->addText($initialAuditorInfo, null, $paraCenter);
                $tableFinding->addCell(2000, ['valign' => 'center'])->addText($reqText, null, $paraJustify);
                $tableFinding->addCell(2900, ['valign' => 'center'])->addText($noteText, null, $paraJustify);
                $tableFinding->addCell(1500, ['valign' => 'center'])->addText(''); // RTL Kosong
                $tableFinding->addCell(1500, ['valign' => 'center'])->addText(''); // Target Kosong
            }
        }

        $section->addTextBreak(2);

        // --- Tanda Tangan ---
        $signatureTableStyleName = 'Signature Table';
        $phpWord->addTableStyle($signatureTableStyleName, [
            'borderSize' => 0,
            'borderColor' => 'FFFFFF',
            'borderBottomSize' => 0,
            'borderTopSize' => 0,
            'borderLeftSize' => 0,
            'borderRightSize' => 0,
            'borderInsideHSize' => 0,
            'borderInsideVSize' => 0,
            'cellMargin' => 50,
            'alignment' => JcTable::CENTER
        ]);
        $signatureTable = $section->addTable($signatureTableStyleName);

        $signatureTable->addRow();
        $signatureTable->addCell(4950)->addText('Menyetujui,', null, ['alignment' => Jc::LEFT]);
        $signatureTable->addCell(4950)->addText('');

        $signatureTable->addRow();
        $signatureTable->addCell(4950)->addText('Auditee', null, ['alignment' => Jc::LEFT]);
        $signatureTable->addCell(4950)->addText('Auditor', null, ['alignment' => Jc::LEFT]);

        $signatureTable->addRow(1500); // Space untuk ttd
        $signatureTable->addCell(4950)->addText('');
        $signatureTable->addCell(4950)->addText('');

        $signatureTable->addRow();
        $signatureTable->addCell(4950)->addText('Prodi Apoteker dan S1 Farmasi', null, ['alignment' => Jc::LEFT]);
        $signatureTable->addCell(4950)->addText((string) ($assignment->auditor->name ?? ''), null, ['alignment' => Jc::LEFT]);

        // --- Keterangan Bawah ---
        $section->addTextBreak(1);
        $section->addText('Keterangan:', $fontNormal);
        $section->addText('- OB: Observasi, jika ada peluang perbaikan', $fontNormal);
        $section->addText('- KTS: Ketidaksesuaian (Minor/Major) jika tidak memenuhi standar', $fontNormal);

        // Simpan dokumen ke file sementara
        $tempFile = tempnam(sys_get_temp_dir(), 'ami_checklist_');
        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        $objWriter->save($tempFile);

        // Membersihkan buffer spasi yang tercetak tidak sengaja dari file lain.
        // PENTING: Gunakan ob_get_level() agar lebih aman dari pada ob_get_length()
        while (ob_get_level() > 0) {
            ob_end_clean();
        }

        return $tempFile;
    }
}
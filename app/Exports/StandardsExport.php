<?php

namespace App\Exports;

use App\Models\MasterStandard;
use App\Models\MasterIndicator;
use App\Enums\TargetType;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Cell\DataValidation;
use PhpOffice\PhpSpreadsheet\Style\Color;
use PhpOffice\PhpSpreadsheet\Style\Fill;

class StandardsExport implements FromCollection, WithHeadings, WithMapping, WithStyles, ShouldAutoSize, WithEvents
{
    protected $isTemplate;

    public function __construct(bool $isTemplate = false)
    {
        $this->isTemplate = $isTemplate;
    }

    public function collection()
    {
        if ($this->isTemplate) {
            // Panduan sampel data. 1 Standar dengan 2 Indikator
            return new Collection([
                (object) [
                    'std_name' => 'Standar Pendidikan',
                    'std_target' => 'prodi',
                    'std_desc' => 'Deskripsi Standar Pendidikan',
                    'ind_req' => 'Tersedia dokumen Kurikulum (RPS) yang sesuai',
                    'ind_evidence' => 'Ya',
                    'ind_target' => '100% Mata Kuliah',
                    'ind_doc' => 'Dokumen RPS, SK Kurikulum'
                ],
                (object) [
                    'std_name' => 'Standar Pendidikan',
                    'std_target' => 'prodi',
                    'std_desc' => 'Deskripsi Standar Pendidikan',
                    'ind_req' => 'Tingkat kehadiran dosen mengajar minimal 14 pertemuan',
                    'ind_evidence' => 'Ya',
                    'ind_target' => '>= 90%',
                    'ind_doc' => 'Daftar Hadir Dosen, Berita Acara Kuliah'
                ],
                (object) [
                    'std_name' => 'Standar Penelitian',
                    'std_target' => 'faculty',
                    'std_desc' => 'Fokus penelitian dosen tingkat Fakultas',
                    'ind_req' => 'Publikasi internasional terindeks Scopus minimal 5 per tahun',
                    'ind_evidence' => 'Ya',
                    'ind_target' => '5 Jurnal',
                    'ind_doc' => 'Tautan Jurnal, LoA'
                ],
            ]);
        }

        // Jika export asli, gabungkan Standar dan Indikator menjadi baris flat (mendatar)
        $standards = MasterStandard::with('indicators')->get();

        $flatData = [];
        foreach ($standards as $standard) {
            if ($standard->indicators->isEmpty()) {
                // Standar yang belum punya indikator
                $flatData[] = (object) [
                    'std_name' => $standard->name,
                    'std_target' => $standard->target_type->value ?? clone $standard->target_type,
                    'std_desc' => $standard->description,
                    'ind_req' => '',
                    'ind_evidence' => '',
                    'ind_target' => '',
                    'ind_doc' => ''
                ];
            } else {
                // Tiap indikator menjadi baris baru, namun nama standar tetap dibawa (diulang)
                foreach ($standard->indicators as $indicator) {
                    $flatData[] = (object) [
                        'std_name' => $standard->name,
                        'std_target' => $standard->target_type->value ?? clone $standard->target_type, // Ambil value jika Enum
                        'std_desc' => $standard->description,
                        'ind_req' => $indicator->requirement,
                        'ind_evidence' => $indicator->is_evidence_required ? 'Ya' : 'Tidak',
                        'ind_target' => $indicator->target,
                        'ind_doc' => $indicator->evidence_needed
                    ];
                }
            }
        }

        return new Collection($flatData);
    }

    public function map($row): array
    {
        // Pastikan std_target sudah jadi string dari Enum
        $targetType = $row->std_target;
        if ($targetType instanceof TargetType) {
            $targetType = $targetType->value;
        } elseif (is_object($targetType) && property_exists($targetType, 'value')) {
            $targetType = $targetType->value;
        }

        return [
            $row->std_name,
            $targetType,
            $row->std_desc,
            $row->ind_req,
            $row->ind_evidence,
            $row->ind_target,
            $row->ind_doc
        ];
    }

    public function headings(): array
    {
        return [
            'Nama Standar',
            'Target Level',
            'Deskripsi Standar',
            'Persyaratan (Indikator)',
            'Bukti Fisik Wajib?',
            'Target Capaian',
            'Dokumen yg Diminta'
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => ['font' => ['bold' => true]],
        ];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                if ($this->isTemplate) {
                    $sheet = $event->sheet->getDelegate();

                    // Validation for Column B (Target Level)
                    for ($i = 2; $i <= 1000; $i++) {
                        $validation = $sheet->getCell('B' . $i)->getDataValidation();
                        $validation->setType(DataValidation::TYPE_LIST);
                        $validation->setErrorStyle(DataValidation::STYLE_INFORMATION);
                        $validation->setAllowBlank(false);
                        $validation->setShowInputMessage(true);
                        $validation->setShowErrorMessage(true);
                        $validation->setShowDropDown(true);
                        $validation->setErrorTitle('Input tidak valid');
                        $validation->setError('Harap pilih dari daftar.');
                        $validation->setPromptTitle('Pilih Target Level');
                        $validation->setPrompt('Pilih prodi atau faculty.');
                        $validation->setFormula1('"prodi,faculty"');
                    }

                    // Validation for Column E (Bukti Fisik Wajib?)
                    for ($i = 2; $i <= 1000; $i++) {
                        $validation = $sheet->getCell('E' . $i)->getDataValidation();
                        $validation->setType(DataValidation::TYPE_LIST);
                        $validation->setErrorStyle(DataValidation::STYLE_INFORMATION);
                        $validation->setAllowBlank(false);
                        $validation->setShowInputMessage(true);
                        $validation->setShowErrorMessage(true);
                        $validation->setShowDropDown(true);
                        $validation->setErrorTitle('Input tidak valid');
                        $validation->setError('Pilih Ya atau Tidak.');
                        $validation->setPromptTitle('Bukti Fisik Minta?');
                        $validation->setPrompt('Pilih Ya atau Tidak.');
                        $validation->setFormula1('"Ya,Tidak"');
                    }
                }
            }
        ];
    }
}

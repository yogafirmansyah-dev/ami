<?php

namespace App\Exports;

use App\Models\User;
use App\Models\Faculty;
use App\Models\Prodi;
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
use PhpOffice\PhpSpreadsheet\Style\Conditional;
use PhpOffice\PhpSpreadsheet\Style\Color;
use PhpOffice\PhpSpreadsheet\Style\Fill;

class UsersExport implements FromCollection, WithHeadings, WithMapping, WithStyles, ShouldAutoSize, WithEvents
{
    protected $isTemplate;

    public function __construct(bool $isTemplate = false)
    {
        $this->isTemplate = $isTemplate;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        if ($this->isTemplate) {
            // Jika untuk template, kembalikan baris panduan kosong
            return new Collection([
                new User([
                    'name' => 'John Doe',
                    'email' => 'john@example.com',
                    'role' => 'auditor',
                    'password' => 'password123',
                    // Dummy relasi agar bisa di map
                ])
            ]);
        }

        return User::with(['prodi', 'faculty'])->get();
    }

    public function map($user): array
    {
        if ($this->isTemplate) {
            return [
                'John Doe',
                'john@example.com',
                'auditor',
                '',
                '',
                'password123'
            ];
        }

        return [
            $user->name,
            $user->email,
            $user->role->value ?? $user->role,
            $user->faculty_id ? $user->faculty_id . ' - ' . $user->faculty?->name : null,
            $user->prodi_id ? $user->prodi_id . ' - ' . $user->prodi?->name : null,
        ];
    }

    public function headings(): array
    {
        if ($this->isTemplate) {
            return [
                'name',
                'email',
                'role',
                'faculty_id',
                'prodi_id',
                'password'
            ];
        }

        return [
            'Name',
            'Email',
            'Role',
            'Faculty ID',
            'Prodi ID'
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            // Baris 1 dibold (Headings)
            1 => ['font' => ['bold' => true]],
        ];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                if ($this->isTemplate) {
                    $sheet = $event->sheet->getDelegate();

                    // 1. Ambil data dari tabel Faculty dan Prodi
                    $faculties = Faculty::all();
                    $prodis = Prodi::all();

                    // 2. Simpan list referensi di kolom tersembunyi (Misal Y untuk Fakultas)
                    $rowIndex = 2;
                    foreach ($faculties as $faculty) {
                        $sheet->setCellValue('Y' . $rowIndex, $faculty->id . ' - ' . $faculty->name);
                        $rowIndex++;
                    }
                    $facultyMaxRow = $rowIndex > 2 ? $rowIndex - 1 : 2;
                    $sheet->getColumnDimension('Y')->setVisible(false);

                    // 3. Simpan All Prodis ke kolom Z
                    $colIndex = 'Z';
                    $prodiRowIndex = 2;
                    foreach ($prodis as $prodi) {
                        $sheet->setCellValue($colIndex . $prodiRowIndex, $prodi->id . ' - ' . $prodi->name);
                        $prodiRowIndex++;
                    }
                    if ($prodiRowIndex > 2) {
                        $formulaAll = $sheet->getTitle() . '!$' . $colIndex . '$2:$' . $colIndex . '$' . ($prodiRowIndex - 1);
                        $sheet->getParent()->addNamedRange(
                            new \PhpOffice\PhpSpreadsheet\NamedRange('ALL_PRODIS', $sheet->getParent()->getActiveSheet(), $formulaAll)
                        );
                    }
                    $sheet->getColumnDimension($colIndex)->setVisible(false);
                    $colIndex++; // Pindah ke AA
    
                    // 4. Simpan daftar Prodi per Fakultas ke kolom AA, AB, dst
                    // dan jadikan Named Range di Excel untuk INDIRECT lookup
                    foreach ($faculties as $faculty) {
                        $facultyProdis = $prodis->where('faculty_id', $faculty->id);
                        if ($facultyProdis->count() > 0) {
                            $prodiRowIndex = 2;
                            foreach ($facultyProdis as $prodi) {
                                $sheet->setCellValue($colIndex . $prodiRowIndex, $prodi->id . ' - ' . $prodi->name);
                                $prodiRowIndex++;
                            }

                            $rangeName = 'FAC_' . $faculty->id;
                            $formula = $sheet->getTitle() . '!$' . $colIndex . '$2:$' . $colIndex . '$' . ($prodiRowIndex - 1);
                            $sheet->getParent()->addNamedRange(
                                new \PhpOffice\PhpSpreadsheet\NamedRange($rangeName, $sheet->getParent()->getActiveSheet(), $formula)
                            );

                            $sheet->getColumnDimension($colIndex)->setVisible(false);
                            $colIndex++;
                        }
                    }

                    // 4. Set Validasi Dropdown untuk Role (Kolom C)
                    for ($i = 2; $i <= 500; $i++) {
                        $roleValidation = $sheet->getCell('C' . $i)->getDataValidation();
                        $roleValidation->setType(DataValidation::TYPE_LIST);
                        $roleValidation->setErrorStyle(DataValidation::STYLE_INFORMATION);
                        $roleValidation->setAllowBlank(false);
                        $roleValidation->setShowInputMessage(true);
                        $roleValidation->setShowErrorMessage(true);
                        $roleValidation->setShowDropDown(true);
                        $roleValidation->setErrorTitle('Input tidak valid');
                        $roleValidation->setError('Nilai harus dipilih dari daftar.');
                        $roleValidation->setPromptTitle('Pilih Role');
                        $roleValidation->setPrompt('Pilih role akses dari daftar.');
                        $roleValidation->setFormula1('"admin,auditor,auditee"');
                    }

                    // 5. Set Validasi Dropdown untuk Faculty (Kolom D)
                    if ($faculties->count() > 0) {
                        for ($i = 2; $i <= 500; $i++) {
                            $facValidation = $sheet->getCell('D' . $i)->getDataValidation();
                            $facValidation->setType(DataValidation::TYPE_LIST);
                            $facValidation->setErrorStyle(DataValidation::STYLE_INFORMATION);
                            $facValidation->setAllowBlank(true);
                            $facValidation->setShowInputMessage(true);
                            $facValidation->setShowErrorMessage(true);
                            $facValidation->setShowDropDown(true);
                            $facValidation->setErrorTitle('Input tidak valid');
                            $facValidation->setError('Fakultas harus dipilih dari daftar.');
                            $facValidation->setPromptTitle('Pilih Fakultas');
                            $facValidation->setPrompt('Pilih fakultas dari daftar (jika auditee Fakultas).');
                            $facValidation->setFormula1('=$Y$2:$Y$' . $facultyMaxRow);
                        }
                    }

                    // 6. Set Validasi Dropdown untuk Prodi (Kolom E) menggunakan INDIRECT
                    if ($prodis->count() > 0) {
                        for ($i = 2; $i <= 500; $i++) {
                            $prodiValidation = $sheet->getCell('E' . $i)->getDataValidation();
                            $prodiValidation->setType(DataValidation::TYPE_LIST);
                            $prodiValidation->setErrorStyle(DataValidation::STYLE_INFORMATION);
                            $prodiValidation->setAllowBlank(true);
                            $prodiValidation->setShowInputMessage(true);
                            $prodiValidation->setShowErrorMessage(true);
                            $prodiValidation->setShowDropDown(true);
                            $prodiValidation->setErrorTitle('Input tidak valid');
                            $prodiValidation->setError('Pilih Fakultas terlebih dahulu, lalu pilih Prodi yang sesuai.');
                            $prodiValidation->setPromptTitle('Pilih Prodi');
                            $prodiValidation->setPrompt('Prodi dapat dipilih dulua, atau akan menyesuaikan dengan Fakultas.');

                            // Gunakan IF() agar jika kolom Fakultas masih kosong, semua Prodi bisa dipilih.
                            // Catatan: Jika panjang rumus ini lebih dari batas karakter (255), Excel bisa error. Rumus kita panjangnya sekitar 75 karakter.
                            $formulaIndirect = '=IF(ISBLANK($D' . $i . '), ALL_PRODIS, INDIRECT("FAC_" & LEFT($D' . $i . ', FIND(" -", $D' . $i . ')-1)))';
                            $prodiValidation->setFormula1($formulaIndirect);
                        }
                    }

                    // 7. Conditional Formatting: Highlight Fakultas / Prodi jika role auditee tapi kosong
                    $conditionalStyles = [];
                    $conditional = new Conditional();
                    $conditional->setConditionType(Conditional::CONDITION_EXPRESSION);
                    // Jika C2 = "auditee" DAN D2 kosong DAN E2 kosong
                    $conditional->addCondition('=AND($C2="auditee", ISBLANK($D2), ISBLANK($E2))');
                    $conditional->getStyle()->getFill()->setFillType(Fill::FILL_SOLID)->getEndColor()->setARGB('FFFFCCCC');
                    $conditionalStyles[] = $conditional;

                    $sheet->getStyle('D2:E500')->setConditionalStyles($conditionalStyles);
                }
            }
        ];
    }
}

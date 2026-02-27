<?php

namespace App\Imports;

use App\Models\MasterStandard;
use App\Models\MasterIndicator;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class StandardsImport implements ToCollection, WithHeadingRow, SkipsEmptyRows
{
    public $failures = [];

    /**
     * Pastikan baris yang benar-benar kosong diabaikan sepenuhnya
     */
    public function isEmpty(array $row): bool
    {
        foreach ($row as $value) {
            if (trim((string) $value) !== '') {
                return false;
            }
        }
        return true;
    }

    public function collection(Collection $rows)
    {
        DB::transaction(function () use ($rows) {
            $rowIndex = 1; // Header dianggap baris 1

            foreach ($rows as $row) {
                $rowIndex++;

                // Validasi tiap baris dengan Laravel Validator
                $validator = Validator::make($row->toArray(), [
                    'nama_standar' => 'required|string|max:255',
                    'target_level' => ['required', 'string', Rule::in(['prodi', 'faculty'])],
                    'deskripsi_standar' => 'nullable|string',
                    'persyaratan_indikator' => 'nullable|string',
                    'bukti_fisik_wajib' => ['nullable', 'string', Rule::in(['Ya', 'Tidak', 'ya', 'tidak'])],
                    'target_capaian' => 'nullable|string',
                    'dokumen_yg_diminta' => 'nullable|string',
                ], [
                    'nama_standar.required' => 'Nama Standar wajib diisi.',
                    'target_level.required' => 'Target Level wajib diisi.',
                    'target_level.in' => 'Target Level harus berupa "prodi" atau "faculty".',
                    'bukti_fisik_wajib.in' => 'Bukti Fisik Wajib harus berupa "Ya" atau "Tidak".'
                ]);

                if ($validator->fails()) {
                    foreach ($validator->errors()->all() as $error) {
                        $this->failures[] = "Baris {$rowIndex}: {$error}";
                    }
                    continue; // Lanjut ke baris berikutnya
                }

                $targetLevel = strtolower(trim($row['target_level']));
                $standardName = trim($row['nama_standar']);

                // Cari atau buat MasterStandard berdasarkan namanya (Kondisi normal karena multiple indikator bisa ada di 1 standar)
                $standard = MasterStandard::firstOrCreate(
                    ['name' => $standardName],
                    [
                        'target_type' => $targetLevel,
                        'description' => trim($row['deskripsi_standar'] ?? '')
                    ]
                );

                // Buat Indikator jika ada isian persyaratan
                $requirement = trim($row['persyaratan_indikator'] ?? '');

                if (!empty($requirement)) {
                    // Cek duplikasi indikator secara eksplisit untuk memberi tahu user
                    $indicatorExists = MasterIndicator::where('master_standard_id', $standard->id)
                        ->where('requirement', $requirement)
                        ->exists();

                    if ($indicatorExists) {
                        $this->failures[] = "Baris {$rowIndex}: Indikator '{$requirement}' sudah ada di dalam Standar '{$standardName}'.";
                        continue;
                    }

                    $isEvidence = strtolower(trim($row['bukti_fisik_wajib'] ?? 'tidak')) === 'ya' ? 1 : 0;

                    MasterIndicator::create([
                        'master_standard_id' => $standard->id,
                        'requirement' => $requirement,
                        'is_evidence_required' => $isEvidence,
                        'target' => trim($row['target_capaian'] ?? ''),
                        'evidence_needed' => trim($row['dokumen_yg_diminta'] ?? '')
                    ]);
                }
            }
        });
    }

    public function getFailures(): array
    {
        return $this->failures;
    }
}

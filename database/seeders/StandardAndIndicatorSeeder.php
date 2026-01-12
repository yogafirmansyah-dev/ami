<?php

namespace Database\Seeders;

use App\Models\MasterStandard;
use App\Models\MasterIndicator;
use Illuminate\Database\Seeder;

class StandardAndIndicatorSeeder extends Seeder
{
    public function run(): void
    {
        // Standar untuk Prodi
        $stdProdi = MasterStandard::create([
            'code' => 'MST.01',
            'name' => 'Standar Pendidikan Program Studi v1.0',
            'target_type' => 'prodi',
        ]);

        $stdProdi->indicators()->createMany([
            [
                'code' => 'C.1.1',
                'requirement' => 'Kesesuaian Kurikulum dengan profil lulusan.',
                'target' => '100%',
                'is_evidence_required' => true
            ],
            [
                'code' => 'C.1.2',
                'requirement' => 'Ketersediaan RPS untuk setiap mata kuliah.',
                'target' => '100%',
                'is_evidence_required' => false
            ],
            [
                'code' => 'C.1.3',
                'requirement' => 'Rasio dosen dan mahasiswa maksimal 1:30.',
                'target' => '100%',
                'is_evidence_required' => true
            ],
        ]);

        // Standar untuk Fakultas
        $stdFaculty = MasterStandard::create([
            'code' => 'MST.02',
            'name' => 'Standar Tata Kelola Fakultas v1.0',
            'target_type' => 'faculty',
        ]);

        $stdFaculty->indicators()->createMany([
            [
                'code' => 'F.1.1',
                'requirement' => 'Ketersediaan Renstra Fakultas.',
                'target' => '100%',
                'is_evidence_required' => true
            ],
            [
                'code' => 'F.1.2',
                'requirement' => 'Sistem penjaminan mutu internal tingkat fakultas berjalan.',
                'target' => '100%',
                'is_evidence_required' => true
            ],
        ]);
    }
}

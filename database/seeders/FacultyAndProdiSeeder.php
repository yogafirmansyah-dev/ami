<?php

namespace Database\Seeders;

use App\Models\Faculty;
use App\Models\Prodi;
use Illuminate\Database\Seeder;

class FacultyAndProdiSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Buat Fakultas
        $farmasi = Faculty::create(['code' => 'FKFARM', 'name' => 'Fakultas Farmasi']);
        $perawatBidan = Faculty::create(['code' => 'FKPERB', 'name' => 'Fakultas Keperawatan Kebidanan  ']);

        // 2. Buat Prodi di bawah Fakultas
        Prodi::create([
            'code' => 'S1FARM',
            'name' => 'S1 Farmasi',
            'faculty_id' => $farmasi->id
        ]);

        Prodi::create([
            'code' => 'S1PER',
            'name' => 'S1 Keperawatan',
            'faculty_id' => $perawatBidan->id
        ]);

        Prodi::create([
            'code' => 'S1KBDN',
            'name' => 'S1 Kebidanan',
            'faculty_id' => $perawatBidan->id
        ]);
    }
}

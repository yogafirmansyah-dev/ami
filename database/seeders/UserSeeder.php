<?php

namespace Database\Seeders;

use App\Models\Faculty;
use App\Models\Prodi;
use Hash;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Actions\Fortify\CreateNewUser;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Admin Pusat
        User::create([
            'name' => 'Administrator AMI',
            'email' => 'admin@ami.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'email_verified_at' => now(),
        ]);

        // Auditor
        User::create([
            'name' => 'Auditor',
            'email' => 'auditor1@ami.com',
            'password' => Hash::make('password'),
            'role' => 'auditor',
            'email_verified_at' => now(),
        ]);

        // Auditee Level Prodi
        $prodiFarmasi = Prodi::where('name', 'S1 Farmasi')->first();
        User::create([
            'name' => 'Auditee Prodi Farmasi',
            'email' => 'auditee.farmasi@ami.com',
            'password' => Hash::make('password'),
            'role' => 'auditee',
            'prodi_id' => $prodiFarmasi->id,
            'email_verified_at' => now(),
        ]);

        // Auditee Level Fakultas
        $fakFarmasi = Faculty::where('name', 'Fakultas Farmasi')->first();
        User::create([
            'name' => 'Auditee Fakultas Farmasi',
            'email' => 'auditee.faculty.farmasi@ami.com',
            'password' => Hash::make('password'),
            'role' => 'auditee',
            'faculty_id' => $fakFarmasi->id,
            'email_verified_at' => now(),
        ]);
    }
}

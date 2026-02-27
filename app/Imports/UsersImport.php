<?php

namespace App\Imports;

use App\Models\User;
use App\Models\Faculty;
use App\Models\Prodi;
use App\Models\AuditHistory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;
use App\Enums\UserRole;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\SkipsFailures;

class UsersImport implements ToModel, WithHeadingRow, WithValidation, SkipsEmptyRows, SkipsOnFailure
{
    use SkipsFailures;

    /**
     * Memastikan baris yang benar-benar kosong tidak ikut divalidasi oleh rules()
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

    public function prepareForValidation($data, $index)
    {
        // Cek jika seluruh baris benar-benar kosong (hanya berisi null atau spasi)
        $isEmpty = true;
        foreach ($data as $value) {
            if (trim((string) $value) !== '') {
                $isEmpty = false;
                break;
            }
        }
        if ($isEmpty) {
            return []; // Skip baris kosong
        }

        if (!empty($data['faculty_id'])) {
            $facStr = trim($data['faculty_id']);
            $data['faculty_id'] = preg_match('/^(\d+)/', $facStr, $matches) ? $matches[1] : $facStr;
        }

        if (!empty($data['prodi_id'])) {
            $proStr = trim($data['prodi_id']);
            $data['prodi_id'] = preg_match('/^(\d+)/', $proStr, $matches) ? $matches[1] : $proStr;
        }

        return $data;
    }

    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        // Pengecekan ekstra untuk baris kosong
        if (!isset($row['name']) || trim($row['name']) === '' || !isset($row['email']) || trim($row['email']) === '') {
            return null; // Skip baris yang nama atau email-nya kosong
        }

        $role = strtolower(trim($row['role'] ?? ''));

        $facultyId = null;
        $prodiId = null;

        if ($role === UserRole::AUDITEE->value) {
            $facultyId = !empty($row['faculty_id']) ? $row['faculty_id'] : null;
            $prodiId = !empty($row['prodi_id']) ? $row['prodi_id'] : null;

            // Auto-fill Faculty jika hanya Prodi yang diisi (kemudahan dari sisi backend Excel)
            if ($prodiId && !$facultyId) {
                $prodi = Prodi::find($prodiId);
                if ($prodi) {
                    $facultyId = $prodi->faculty_id;
                }
            }

            // Cross Validation: Jika prodi dan fakultas diisi, prodi harus milik fakultas tersebut
            if ($facultyId && $prodiId) {
                $prodi = Prodi::find($prodiId);
                if ($prodi && $prodi->faculty_id != $facultyId) {
                    $failure = new \Maatwebsite\Excel\Validators\Failure(
                        0, // row (maatwebsite handles this implicitly if thrown in custom rule, tetapi di dalam model, row index susah di-trace, jadi 0)
                        'prodi_id',
                        ['Prodi yang dipilih tidak berada di bawah Fakultas tersebut.'],
                        $row
                    );
                    throw new \Maatwebsite\Excel\Validators\ValidationException(
                        \Illuminate\Validation\ValidationException::withMessages(['prodi_id' => 'Prodi yang dipilih tidak berada di bawah Fakultas tersebut.']),
                        [$failure]
                    );
                }
            }
        }

        $user = User::create([
            'name' => trim($row['name']),
            'email' => trim($row['email']),
            'password' => Hash::make(trim($row['password'] ?? 'password')),
            'role' => $role,
            'faculty_id' => $facultyId,
            'prodi_id' => $prodiId,
        ]);

        // Catat History Create
        AuditHistory::create([
            'user_id' => auth()->id() ?? 1,
            'historable_type' => User::class,
            'historable_id' => $user->id,
            'stage' => 'master_setup',
            'action' => 'import_create_user',
            'new_values' => $user->toArray(),
        ]);

        return $user;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'role' => ['required', Rule::enum(UserRole::class)],
            'password' => 'nullable|string|min:8',
            'faculty_id' => [
                'nullable',
                'exists:faculties,id'
            ],
            'prodi_id' => [
                'nullable',
                'exists:prodis,id'
            ],
        ];
    }
}

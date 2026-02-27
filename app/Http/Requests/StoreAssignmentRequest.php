<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAssignmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // We authorize standard authenticated users handled by middleware 
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'period_id' => 'required|exists:periods,id',
            'master_standard_id' => [
                'required',
                'exists:master_standards,id',
                function ($attribute, $value, $fail) {
                    $standard = \App\Models\MasterStandard::find($value);
                    if ($standard && $standard->target_type->value !== $this->assignable_type) {
                        $fail('Standar mutu ini tidak diperuntukkan bagi tipe unit (Fakultas/Prodi) yang dipilih.');
                    }
                }
            ],
            'assignable_type' => 'required|in:prodi,faculty',
            'assignable_id' => [
                'required',
                'integer',
                // Validasi apakah ID ada di tabel yang benar (Fakultas / Prodi)
                function ($attribute, $value, $fail) {
                    $table = $this->assignable_type === 'prodi' ? 'prodis' : 'faculties';
                    if (!\Illuminate\Support\Facades\DB::table($table)->where('id', $value)->exists()) {
                        $fail("Unit yang dipilih tidak valid.");
                    }
                },
                // Validasi Unik: Mencegah duplikasi auditor yang sama pada instansi, periode, dan standar yang sama
                \Illuminate\Validation\Rule::unique('assignments')->where(function ($q) {
                    return $q->where('period_id', $this->period_id)
                        ->where('assignable_type', $this->assignable_type === 'prodi'
                            ? \App\Models\Prodi::class
                            : \App\Models\Faculty::class)
                        ->where('assignable_id', $this->assignable_id)
                        ->where('auditor_id', $this->auditor_id)
                        ->where('master_standard_id', $this->master_standard_id);
                })
            ],
            'auditor_id' => 'required|exists:users,id',
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation()
    {
        // No modification needed here, but you can hook here if you want to alter request inputs.
    }

    /**
     * Get validated data with mapped morphed class (prodi -> Prodi::class)
     */
    public function mappedData(): array
    {
        $validated = $this->validated();

        $assignableTypeMap = [
            'prodi' => \App\Models\Prodi::class,
            'faculty' => \App\Models\Faculty::class,
        ];

        $validated['assignable_type'] = $assignableTypeMap[$validated['assignable_type']];

        return $validated;
    }
}

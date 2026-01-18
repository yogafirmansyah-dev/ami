<?php

namespace App\Services;

use App\Enums\AuditStage;
use App\Enums\FindingType;
use App\Enums\RtlStatus;
use App\Models\{Assignment, AssignmentDocument, MasterIndicator, AssignmentIndicator, AuditHistory};
use Carbon\Carbon;
use Illuminate\Support\Facades\{DB, Storage};

class AssignmentService
{
    /**
     * Inisialisasi Penugasan & Snapshot Indikator
     */
    public function createAssignment(array $data): Assignment
    {
        return DB::transaction(function () use ($data) {
            // 1. Buat Header Penugasan
            // Data sekarang berisi 'assignable_id' dan 'assignable_type' (Prodi atau Faculty)
            $assignment = Assignment::create($data);

            // 2. Ambil Master Indikator berdasarkan Standar yang dipilih
            $masterIndicators = MasterIndicator::where('master_standard_id', $data['master_standard_id'])->get();

            // 3. Duplikasi Indikator ke Transaksi (Snapshot)
            foreach ($masterIndicators as $master) {
                $indicator = $assignment->indicators()->create([
                    'snapshot_code' => $master->code,
                    'snapshot_requirement' => $master->requirement,
                    'snapshot_target' => $master->target,
                    'snapshot_evidence_needed' => $master->evidence_needed,
                    'is_evidence_required' => $master->is_evidence_required,
                ]);

                // 4. Salin template dokumen jika ada
                if ($master->template_path && Storage::exists($master->template_path)) {
                    $newPath = 'assignments/' . $assignment->id . '/templates/' . basename($master->template_path);
                    Storage::makeDirectory(dirname($newPath));
                    Storage::copy($master->template_path, $newPath);
                    $indicator->update(['snapshot_template_path' => $newPath]);
                }
            }

            // 5. Catat Histori Pembuatan
            $this->recordHistory($assignment, [], $data, AuditStage::DOC_AUDIT, auth()->id(), 'create_assignment');

            return $assignment;
        });
    }


    public function updateIndicator(AssignmentIndicator $indicator, array $newData, int $userId): bool
    {
        return DB::transaction(function () use ($indicator, $newData, $userId) {
            $assignment = $indicator->assignment;
            $currentStage = $assignment->current_stage;

            // 1. Ambil data saat ini (sebelum diupdate)
            $oldData = $indicator->only([
                'score',
                'finding_type',
                'auditor_note',
                'evidence_path',
                'evidence_url',
                'recommendation'
            ]);

            // 2. Handle File Upload (Internal Storage)
            if (isset($newData['evidence_file']) && $newData['evidence_file'] instanceof \Illuminate\Http\UploadedFile) {
                $folderName = strtolower(class_basename($assignment->assignable_type));

                $path = $newData['evidence_file']->store(
                    "evidence/{$folderName}/{$assignment->assignable_id}",
                    'local'
                );

                // Hapus file fisik LAMA jika ada (Smart File)
                if ($indicator->evidence_path) {
                    Storage::disk('local')->delete($indicator->evidence_path);
                }

                $newData['evidence_path'] = $path;
                unset($newData['evidence_file']);
            }

            /**
             * 3. Logika History Baru:
             * Bandingkan data lama dengan data baru yang akan dimasukkan.
             * Kita gunakan array_diff_assoc atau perbandingan manual sederhana.
             */

            // Buat temporary array untuk perbandingan (karena newData mungkin tidak berisi semua field)
            $comparisonData = array_merge($oldData, $newData);

            // Jika data yang akan disimpan berbeda dengan data lama, maka catat history
            if ($oldData != $comparisonData) {
                $this->recordHistory(
                    $indicator,
                    $oldData,
                    $newData, // Hanya simpan perubahan di new_values agar log bersih
                    $currentStage,
                    $userId,
                    'stage_snapshot' // Gunakan action yang lebih umum
                );
            }

            // 4. Lakukan update ke database
            return $indicator->update($newData);
        });
    }

    /**
     * Sinkronisasi Tahap AMI (Perbaikan Logika Enum & RTL)
     */
    public function syncCurrentStage(Assignment $assignment): void
    {
        $now = now()->startOfDay();
        $period = $assignment->period;
        $oldStage = $assignment->current_stage;
        $newStage = $this->calculateStage($period, $now);

        if ($newStage !== $oldStage) {
            // SAFEGUARD 1: Jangan biarkan masuk ke tahap FINDING jika ada indikator belum dinilai
            if ($newStage === AuditStage::FINDING) {
                $hasUnassessed = $assignment->indicators()->whereNull('score')->exists();
                if ($hasUnassessed) {
                    return; // Block transition
                }
            }

            // SAFEGUARD 2: Jangan biarkan masuk ke tahap FINISHED jika ada RTL yang belum CLOSED
            if ($newStage === AuditStage::FINISHED) {
                $incompleteRtl = $assignment->rtls()->where('status', '!=', RtlStatus::CLOSED)->exists();
                // Opsional: Cek juga jika ada temuan tapi belum ada record RTL-nya sama sekali
                $noRtlForFindings = $assignment->indicators()
                    ->whereIn('finding_type', [\App\Enums\FindingType::KTS, FindingType::OB])
                    ->doesntHave('rtl')
                    ->exists();

                if ($incompleteRtl || $noRtlForFindings) {
                    return; // Block transition
                }
            }

            DB::transaction(function () use ($assignment, $oldStage, $newStage) {
                $assignment->update([
                    'current_stage' => $newStage,
                    // PERBAIKAN: Gunakan Enum untuk perbandingan, bukan string
                    'completed_at' => ($newStage === AuditStage::FINISHED) ? now() : $assignment->completed_at
                ]);

                // OTOMATISASI RTL: Panggil logika generate RTL jika tahap berubah ke RTM_RTL
                if ($newStage === AuditStage::RTM_RTL) {
                    $this->generateRtlRecords($assignment);
                }

                $this->recordHistory(
                    $assignment,
                    ['stage' => $oldStage->value],
                    ['stage' => $newStage->value],
                    $newStage,
                    null,
                    'system_auto_sync'
                );
            });
        }
    }

    private function calculateStage($period, Carbon $now): AuditStage
    {
        if ($now->between($period->doc_audit_start, $period->doc_audit_end))
            return AuditStage::DOC_AUDIT;
        if ($now->between($period->field_audit_start, $period->field_audit_end))
            return AuditStage::FIELD_AUDIT;
        if ($now->between($period->finding_start, $period->finding_end))
            return AuditStage::FINDING;
        if ($now->between($period->reporting_start, $period->reporting_end))
            return AuditStage::REPORTING;
        if ($now->between($period->rtm_rtl_start, $period->rtm_rtl_end))
            return AuditStage::RTM_RTL;
        return $now->gt($period->rtm_rtl_end) ? AuditStage::FINISHED : AuditStage::DOC_AUDIT;
    }

    private function recordHistory($model, $old, $new, $stage, $userId, $action = 'update_audit_trail'): AuditHistory
    {
        $finalUserId = ($userId && $userId != 0) ? $userId : auth()->id();
        return AuditHistory::create([
            'user_id' => $finalUserId,
            'historable_type' => get_class($model),
            'historable_id' => $model->id,
            'stage' => $stage,
            'old_values' => $old,
            'new_values' => $new,
            'action' => $action,
        ]);
    }

    public function uploadAssignmentDocument(Assignment $assignment, array $data, $file, $userId): AssignmentDocument
    {
        return DB::transaction(function () use ($assignment, $data, $file, $userId) {
            $type = $data['type'];

            // 1. Logika Smart Cleanup
            $existingDoc = $assignment->documents()->where('type', $type)->first();
            if ($existingDoc) {
                // Gunakan 'file_path' sesuai property model Anda
                if ($existingDoc->file_path && Storage::disk('local')->exists($existingDoc->file_path)) {
                    Storage::disk('local')->delete($existingDoc->file_path);
                }
            }

            // 2. Simpan File Fisik
            $path = $file->store("assignments/{$assignment->id}/official_docs", 'local');

            AuditHistory::create([
                'user_id' => $userId,
                'historable_type' => Assignment::class,
                'historable_id' => $assignment->id,
                'stage' => $assignment->current_stage,
                'action' => 'upload_official_document',
                'old_values' => $existingDoc ? ['file_path' => $existingDoc->file_path] : [],
                'new_values' => [
                    'document_type' => $type,
                    'file_path' => $path
                ],
            ]);

            // 3. Simpan atau Update Record Dokumen
            // SESUAIKAN DENGAN $fillable: ['assignment_id', 'type', 'file_path', 'uploaded_by']
            return $assignment->documents()->updateOrCreate(
                ['type' => $type],
                [
                    'file_path' => $path,       // GUNAKAN file_path, BUKAN path
                    'uploaded_by' => $userId,     // GUNAKAN uploaded_by, BUKAN user_id
                    // Note: 'original_name' tidak ada di $fillable model Anda,
                    // jadi saya hapus agar tidak menyebabkan error baru.
                ]
            );
        });
    }

    /**
     * Hapus folder fisik terkait assignment
     */
    public function deleteAssignmentFiles(Assignment $assignment): void
    {
        $path = "assignments/{$assignment->id}";
        if (Storage::exists($path)) {
            Storage::deleteDirectory($path); // Menghapus semua template & dokumen terkait
        }
    }

    /**
     * Finalisasi (Perbaikan Enum)
     */
    public function finalizeAssignment(Assignment $assignment, array $data, int $userId): void
    {
        DB::transaction(function () use ($assignment, $data, $userId) {
            $assignment->update([
                'summary_note' => $data['summary_note'],
                'overall_rating' => $data['overall_rating'],
                'completed_at' => now(),
                'current_stage' => AuditStage::FINISHED // Gunakan Enum, jangan string 'finished'
            ]);

            $this->recordHistory($assignment, [], $data, $assignment->current_stage, $userId, 'finalize_assignment');
        });
    }

    /**
     * Memindahkan Tahapan Audit Secara Manual (Oleh Admin)
     */
    /**
     * Memindahkan Tahapan Secara Manual (Perbaikan Reusability)
     */
    public function transitionToStage(Assignment $assignment, AuditStage $nextStage): void
    {
        // SAFEGUARD 1: Jangan biarkan masuk ke tahap FINDING jika ada indikator belum dinilai
        // if ($nextStage === AuditStage::FINDING) {
        //     $hasUnassessed = $assignment->indicators()->whereNull('score')->exists();
        //     if ($hasUnassessed) {
        //         // Untuk manual transition, kita mungkin ingin melempar exception agar Controller bisa menangkapnya
        //         // atau return false. Karena return void, kita throw exception saja.
        //         throw new \Exception('Tidak dapat lanjut ke tahap Temuan karena masih ada indikator yang belum dinilai.');
        //     }
        // }

        // SAFEGUARD 2: Jangan biarkan masuk ke tahap FINISHED jika ada RTL yang belum CLOSED
        if ($nextStage === AuditStage::FINISHED) {
            $incompleteRtl = $assignment->rtls()->where('status', '!=', RtlStatus::CLOSED)->exists();
            $noRtlForFindings = $assignment->indicators()
                ->whereIn('finding_type', [FindingType::KTS, FindingType::OB])
                ->doesntHave('rtl')
                ->exists();

            if ($incompleteRtl || $noRtlForFindings) {
                throw new \Exception('Tidak dapat menyelesaikan audit karena masih ada RTL yang belum lengkap/closed.');
            }
        }

        DB::transaction(function () use ($assignment, $nextStage) {
            $oldStage = $assignment->current_stage;

            $assignment->update([
                'current_stage' => $nextStage,
                'completed_at' => ($nextStage === AuditStage::FINISHED) ? now() : $assignment->completed_at
            ]);

            // OTOMATISASI RTL: Panggil logika yang sama
            if ($nextStage === AuditStage::RTM_RTL) {
                $this->generateRtlRecords($assignment);
            }

            $this->recordHistory(
                $assignment,
                ['stage' => $oldStage->value],
                ['stage' => $nextStage->value],
                $nextStage,
                auth()->id(),
                'manual_stage_transition'
            );
        });
    }
    /**
     * Private Helper: Logic pembuatan baris RTL agar tidak duplikasi kode
     */
    private function generateRtlRecords(Assignment $assignment): void
    {
        $findings = $assignment->indicators()
            ->whereIn('finding_type', ['KTS', 'OB'])
            ->get();

        foreach ($findings as $indicator) {
            \App\Models\AssignmentRtl::firstOrCreate(
                ['assignment_indicator_id' => $indicator->id],
                ['status' => RtlStatus::OPEN] // Pastikan menggunakan Enum status Anda
            );
        }
    }
}

<?php

namespace App\Services;

use App\Enums\AuditStage;
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

    /**
     * Versi Sempurna: Satu metode untuk semua update (Data & File)
     * Mengotomatisasi Smart File Versioning & History
     */
    public function updateIndicator(AssignmentIndicator $indicator, array $newData, int $userId): bool
    {
        return DB::transaction(function () use ($indicator, $newData, $userId) {
            $assignment = $indicator->assignment;

            // 1. Ambil data lama untuk history
            $oldData = $indicator->only(['score', 'auditor_note', 'evidence_path', 'evidence_url', 'recommendation']);

            // 2. Cek apakah sudah ada history untuk indikator ini di TAHAP yang sama
            $hasHistoryAtThisStage = $indicator->histories()
                ->where('stage', $assignment->current_stage)
                ->exists();

            // 3. Handle File Upload & Polymorphic Path
            // Pastikan file disimpan di folder sesuai tipe: evidence/prodi/ID atau evidence/faculty/ID
            if (isset($newData['evidence_file']) && $newData['evidence_file'] instanceof \Illuminate\Http\UploadedFile) {
                $folder = strtolower(class_basename($assignment->assignable_type)); // 'prodi' atau 'faculty'
                $path = $newData['evidence_file']->store("evidence/{$folder}/{$assignment->assignable_id}");

                $newData['evidence_path'] = $path;
                unset($newData['evidence_file']); // Hapus objek file agar tidak error saat update()
            }

            // 4. Logika Smart File: Hapus file fisik jika update dilakukan berkali-kali di TAHAP yang sama
            // Kita hanya menghapus jika: Ada file baru, ada file lama, dan ini BUKAN perubahan pertama di tahap ini
            if (isset($newData['evidence_path']) && $indicator->evidence_path && $hasHistoryAtThisStage) {
                Storage::delete($indicator->evidence_path);
            }

            // 5. Logika History: Hanya catat snapshot awal saat pertama kali data diubah di tahap baru
            // Ini akan menyimpan data "sebelum diapa-apakan" di tahap tersebut sebagai arsip
            if (!$hasHistoryAtThisStage) {
                // Pastikan newData memiliki perbedaan dengan oldData agar tidak mencatat histori kosong
                $this->recordHistory($indicator, $oldData, $newData, $assignment->current_stage, $userId);
            }

            return $indicator->update($newData);
        });
    }

    /**
     * Sinkronisasi Tahap AMI (Middleware & Scheduler)
     */
    public function syncCurrentStage(Assignment $assignment): void
    {
        $now = now()->startOfDay();
        $period = $assignment->period;
        $oldStage = $assignment->current_stage;
        $newStage = $this->calculateStage($period, $now);

        if ($newStage !== $oldStage) {
            DB::transaction(function () use ($assignment, $oldStage, $newStage) {
                $assignment->update([
                    'current_stage' => $newStage,
                    'completed_at' => ($newStage === 'finished') ? now() : $assignment->completed_at
                ]);

                $this->recordHistory($assignment, ['stage' => $oldStage], ['stage' => $newStage], $newStage, 0);
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
        return AuditHistory::create([
            'user_id' => $userId,
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
            // 1. Simpan File Fisik
            $path = $file->store("documents/{$assignment->id}");

            // 2. Buat Record Dokumen
            $document = AssignmentDocument::create([
                'assignment_id' => $assignment->id,
                'type' => $data['type'],
                'file_path' => $path,
                'uploaded_by' => $userId,
            ]);

            // 3. Catat ke AuditHistory sebagai Milestone Legal
            AuditHistory::create([
                'user_id' => $userId,
                'historable_type' => Assignment::class,
                'historable_id' => $assignment->id,
                'stage' => $assignment->current_stage,
                'action' => 'upload_document',
                'new_values' => [
                    'document_type' => $data['type'],
                    'file_path' => $path
                ],
                'reason' => "Unggah dokumen resmi: " . strtoupper(str_replace('_', ' ', $data['type']))
            ]);

            return $document;
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

    public function finalizeAssignment(Assignment $assignment, array $data, int $userId): void
    {
        DB::transaction(function () use ($assignment, $data, $userId) {
            $assignment->update([
                'summary_note' => $data['summary_note'],
                'overall_rating' => $data['overall_rating'],
                'completed_at' => now(),
                'current_stage' => 'finished' // Otomatis set ke selesai
            ]);

            $this->recordHistory($assignment, [], $data, $assignment->current_stage, $userId, 'finalize_assignment');
        });
    }
}

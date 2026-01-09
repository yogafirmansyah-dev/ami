<?php

namespace App\Policies;

use App\Models\Faculty;
use App\Models\Prodi;
use App\Models\User;
use App\Models\Assignment;
use App\Enums\UserRole;
use App\Enums\AuditStage;

class AssignmentPolicy
{
    /**
     * Fitur 'before' untuk memberikan akses penuh kepada Admin
     * tanpa perlu mengecek metode lain satu per satu.
     */
    public function before(User $user, string $ability): ?bool
    {
        if ($user->isAdmin()) {
            return true;
        }

        return null;
    }

    /**
     * Cek apakah user memiliki akses ke unit yang sedang diaudit (Polimorfik).
     * Digunakan secara internal oleh metode view, updateEvidence, dll.
     */
    private function isUnitOwner(User $user, Assignment $assignment): bool
    {
        // Jika target audit adalah PRODI
        if ($assignment->assignable_type === Prodi::class) {
            return $user->prodi_id === $assignment->assignable_id;
        }

        // Jika target audit adalah FAKULTAS
        if ($assignment->assignable_type === Faculty::class) {
            return $user->faculty_id === $assignment->assignable_id;
        }

        return false;
    }

    /**
     * Digunakan di AssignmentController@index dan @show
     * Siapa yang boleh melihat detail penugasan?
     */
    public function view(User $user, Assignment $assignment): bool
    {
        // Auditor yang ditugaskan boleh melihat
        if ($user->isAuditor() && $assignment->auditor_id === $user->id) {
            return true;
        }

        // Auditee yang memiliki akses ke unit terkait boleh melihat
        return $user->isAuditee() && $this->isUnitOwner($user, $assignment);
    }

    /**
     * Digunakan di Auditee/AssignmentIndicatorController@update
     * Bolehkah user mengunggah bukti/evidence?
     */
    public function updateEvidence(User $user, Assignment $assignment): bool
    {
        // Wajib: Role Auditee, Unit sesuai, dan Periode aktif
        return $user->isAuditee() &&
            $this->isUnitOwner($user, $assignment) &&
            $assignment->period->is_active;
    }

    /**
     * Digunakan di Auditee/AssignmentIndicatorController@history
     * Bolehkah user melihat riwayat?
     */
    public function auditeeAssignment(User $user, Assignment $assignment): bool
    {
        // 1. User harus Auditee
        return $user->isAuditee() && $this->isUnitOwner($user, $assignment);
    }

    /**
     * Digunakan di Auditor/AssignmentIndicatorController@update
     * Bolehkah user mengisi skor dan catatan auditor?
     */
    public function updateScore(User $user, Assignment $assignment): bool
    {
        // Wajib: Auditor yang ditugaskan dan tahap belum Selesai
        return $user->isAuditor() &&
            $assignment->auditor_id === $user->id &&
            $assignment->current_stage !== AuditStage::FINISHED;
    }

    /**
     * Digunakan di Auditor/AssignmentController@finalize
     * Bolehkah user menutup/finalisasi audit ini?
     */
    public function finalize(User $user, Assignment $assignment): bool
    {
        // Wajib: Auditor yang ditugaskan dan sudah di tahap pelaporan/RTM
        return $user->isAuditor() &&
            $assignment->auditor_id === $user->id &&
            in_array($assignment->current_stage, [
                AuditStage::REPORTING,
                AuditStage::RTM_RTL
            ]);
    }

    /**
     * Digunakan di AssignmentDocumentController@destroy
     * Bolehkah menghapus dokumen? (Logika tambahan selain pengecekan stage)
     */
    public function deleteDocument(User $user, Assignment $assignment): bool
    {
        // Hanya Auditor yang ditugaskan atau perwakilan Unit Auditee
        $isAuditor = $user->isAuditor() && $assignment->auditor_id === $user->id;
        $isAuditeeOwner = $user->isAuditee() && $this->isUnitOwner($user, $assignment);

        return $isAuditor || $isAuditeeOwner;
    }
    /**
     * Menentukan apakah user boleh mengupdate/mengunggah dokumen penugasan.
     * Dipanggil oleh Gate::authorize('update', $assignment)
     */
    public function update(User $user, Assignment $assignment): bool
    {
        // Cukup cek identitas: Apakah dia Auditor yang ditugaskan?
        return $user->isAuditor() &&
            $assignment->auditor_id === $user->id;
    }
}

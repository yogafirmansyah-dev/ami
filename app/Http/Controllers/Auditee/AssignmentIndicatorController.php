<?php

namespace App\Http\Controllers\Auditee;

use App\Enums\AuditStage;
use App\Enums\RtlStatus;
use App\Http\Controllers\Controller;
use App\Models\AssignmentIndicator;
use App\Models\AssignmentRtl;
use App\Services\AssignmentService;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class AssignmentIndicatorController extends Controller
{
    protected $service;

    public function __construct(AssignmentService $service)
    {
        $this->service = $service;
    }

    public function update(Request $request, AssignmentIndicator $indicator)
    {
        // 1. Otorisasi via Policy (Hanya saat tahap Doc Audit & milik unit terkait)
        // Gate::authorize('updateEvidence', $indicator->assignment);

        // 2. Validasi: Kunci hanya pada Evidence (Skor & Catatan Auditor tetap aman)
        $validated = $request->validate([
            'evidence_url' => 'nullable|url',
            'evidence_file' => 'nullable|file|mimes:pdf,jpg,png,zip|max:10240',
        ]);

        // 3. Simpan via Service
        // JANGAN gunakan ->store() di sini. Service akan mendeteksi 'evidence_file'
        // dan mengurus penempatan folder Prodi/Faculty secara otomatis.
        DB::transaction(function () use ($indicator, $validated) {
            $this->service->updateIndicator($indicator, $validated, auth()->id());
        });

        return back()->with('success', 'Bukti audit berhasil diperbarui dan terekam di riwayat.');
    }

    /**
     * FITUR TAMBAHAN: Transparansi perbaikan bagi Auditee
     */
    public function history(AssignmentIndicator $indicator)
    {
        // Menggunakan policy view yang sudah ada
        // Gate::authorize('view', $indicator->assignment);

        $history = $indicator->histories()
            ->with('user:id,name,role')
            ->latest()
            ->get();

        return response()->json($history);
    }

    /**
     * Mengisi Rencana Tindak Lanjut (Matriks RTL)
     */
    public function updateRtl(Request $request, AssignmentRtl $rtl)
    {
        // Pastikan audit sedang di tahap RTM_RTL
        if ($rtl->indicator->assignment->current_stage !== AuditStage::RTM_RTL) {
            return back()->withErrors(['message' => 'Rencana perbaikan hanya dapat diisi pada tahap RTM / RTL.']);
        }

        $validated = $request->validate([
            'root_cause' => 'required|string|min:10',
            'action_plan' => 'required|string|min:10',
            'pic' => 'required|string',
            'deadline' => 'required|string',
            'success_indicator' => 'required|string',
        ]);

        // Set status ke in_progress karena sedang ditindaklanjuti oleh Auditee
        $validated['status'] = RtlStatus::IN_PROGRESS;

        $rtl->update($validated);

        return back()->with('toastr', [
            'type' => 'solid-blue',
            'content' => 'Rencana perbaikan berhasil disimpan.'
        ]);
    }
}

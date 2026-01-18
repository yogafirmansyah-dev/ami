<?php

namespace App\Http\Controllers\Auditor;

use App\Enums\FindingType;
use App\Enums\RtlStatus;
use App\Http\Controllers\Controller;
use App\Models\AssignmentIndicator;
use App\Models\AssignmentRtl;
use App\Services\AssignmentService;
use DB;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;

class AssignmentIndicatorController extends Controller
{
    protected $service;

    public function __construct(AssignmentService $service)
    {
        $this->service = $service;
    }

    /**
     * Update skor, catatan, dan bukti (Smart History via Service)
     */
    public function update(Request $request, AssignmentIndicator $indicator)
    {
        // Gate::authorize('updateScore', $indicator->assignment);

        $validated = $request->validate([
            'score' => 'nullable|integer|min:1|max:4',
            'finding_type' => ['nullable', Rule::enum(FindingType::class)],
            'auditor_note' => 'nullable|string',
            'recommendation' => 'nullable|string',
            'evidence_url' => 'nullable|url',
            'evidence_file' => 'nullable|file|mimes:pdf,jpg,docx,png,zip|max:10240',
        ]);

        // JANGAN simpan file di sini.
        // Biarkan Service yang menangani folder polimorfik dan penghapusan file lama.
        DB::transaction(function () use ($indicator, $validated) {
            // Cukup kirim data hasil validasi.
            // Service akan mendeteksi jika ada 'evidence_file' di dalam array.
            $this->service->updateIndicator($indicator, $validated, auth()->id());
        });

        Session::flash('toastr', [
            'type' => 'gradient-green-to-emerald',
            'content' => 'Data indikator diperbarui.'
        ]);

        return back();
    }

    /**
     * Mengambil riwayat khusus untuk indikator ini (On-Click History)
     */
    public function history(AssignmentIndicator $indicator)
    {
        // Polymorphic relation: hanya mengambil log milik model AssignmentIndicator ini
        $history = $indicator->histories()
            ->with('user:id,name,role')
            ->latest()
            ->get();

        return response()->json($history);
    }

    /**
     * Verifikasi & Closing Temuan di Matriks RTL
     */
    public function verifyRtl(Request $request, AssignmentRtl $rtl)
    {
        $validated = $request->validate([
            'status' => ['required', Rule::enum(RtlStatus::class)],
            'auditor_feedback' => 'nullable|string|min:5',
        ]);

        $rtl->update($validated);

        Session::flash('toastr', [
            'type' => $validated['status'] === RtlStatus::CLOSED->value
                ? 'gradient-green-to-emerald'
                : 'gradient-amber-to-orange',
            'content' => 'Status verifikasi rencana perbaikan diperbarui.'
        ]);

        return back();
    }
}

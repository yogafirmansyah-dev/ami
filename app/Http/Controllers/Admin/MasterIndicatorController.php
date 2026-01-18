<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\{AssignmentIndicator, MasterStandard, MasterIndicator, AuditHistory};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\{Storage, Session, DB};
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class MasterIndicatorController extends Controller
{
    public function index(Request $request, MasterStandard $standard)
    {
        $filters = $request->only(['search', 'sort_field', 'direction', 'per_page']);
        $perPage = $request->input('per_page', 10);

        $indicators = $standard->indicators()
            ->search($request->search, ['requirement', 'code'])
            ->sort($request->sort_field ?? 'code', $request->direction ?? 'asc')
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('Admin/Indicator/Index', [
            'standard' => $standard,
            'indicators' => $indicators,
            'filters' => $filters
        ]);
    }

    public function store(Request $request, MasterStandard $standard)
    {
        $validated = $request->validate([
            'requirement' => 'required|string',
            'is_evidence_required' => 'required|boolean',
            'template' => 'nullable|file|mimes:pdf,docx,xlsx|max:5120',
            'target' => 'nullable|string',
            'evidence_needed' => 'nullable|string',
        ]);

        if ($request->hasFile('template')) {
            $validated['template_path'] = $request->file('template')->store('templates');
        }

        DB::transaction(function () use ($request, $standard, $validated) {
            $indicator = $standard->indicators()->create($validated);

            // Catat History Create
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => MasterIndicator::class,
                'historable_id' => $indicator->id,
                'stage' => 'master_setup',
                'action' => 'create_master_indicator',
                'new_values' => $indicator->toArray(),
            ]);
        });

        Session::flash('toastr', ['type' => 'solid-blue', 'content' => 'Indikator berhasil ditambahkan.']);
        return back();
    }

    /**
     * Update dengan Pencatatan History Otomatis
     */
    public function update(Request $request, MasterStandard $standard, MasterIndicator $indicator)
    {
        $validated = $request->validate([
            'requirement' => 'required|string',
            'is_evidence_required' => 'required|boolean',
            'template' => 'nullable|file|mimes:pdf,docx,xlsx|max:5120',
            'target' => 'nullable|string',
            'evidence_needed' => 'nullable|string',
        ]);

        // 1. Ambil data lama sebelum diupdate untuk history
        $oldValues = $indicator->only(['requirement', 'is_evidence_required', 'template_path', 'target', 'evidence_needed']);

        DB::transaction(function () use ($request, $indicator, $validated, $oldValues) {
            // 2. Kelola file template
            if ($request->hasFile('template')) {
                if ($indicator->template_path) {
                    Storage::delete($indicator->template_path);
                }
                $validated['template_path'] = $request->file('template')->store('templates');
            }

            // 3. Update data indikator
            $indicator->update($validated);

            // 4. Catat perubahan ke AuditHistory
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => MasterIndicator::class,
                'historable_id' => $indicator->id,
                'stage' => 'master_setup', // Label khusus untuk perubahan data master
                'old_values' => $oldValues,
                'new_values' => $indicator->only(['requirement', 'is_evidence_required', 'template_path', 'target', 'evidence_needed']),
                'action' => 'update_master_indicator',
                'reason' => 'Perubahan pada instrumen master oleh Admin'
            ]);
        });

        Session::flash('toastr', ['type' => 'solid-yellow', 'content' => 'Indikator dan riwayat perubahan berhasil diperbarui.']);
        return back();
    }

    public function destroy(MasterStandard $standard, MasterIndicator $indicator)
    {
        DB::transaction(function () use ($indicator) {
            // Catat History sebelum hapus
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => MasterIndicator::class,
                'historable_id' => $indicator->id,
                'stage' => 'master_setup',
                'action' => 'delete_master_indicator',
                'old_values' => $indicator->toArray(),
            ]);
            $indicator->delete();
        });

        Session::flash('toastr', ['type' => 'gradient-red-to-pink', 'content' => 'Indikator berhasil dihapus.']);
        return back();
    }

    /**
     * Endpoint History Master Indicator (AJAX)
     */
    public function history(MasterIndicator $indicator)
    {
        return response()->json($indicator->histories()->with('user:id,name')->latest()->get());
    }

    public function showTemplate(MasterIndicator $indicator)
    {
        // 1. Pastikan data ada dan file fisik tersedia
        if (!$indicator->template_path || !Storage::disk('local')->exists($indicator->template_path)) {
            abort(404, 'Maaf, file template tidak ditemukan di server.');
        }

        // 2. Ambil Absolute Path (Alamat Lengkap File di Windows/Linux)
        $fullPath = Storage::disk('local')->path($indicator->template_path);

        // 3. Ambil Ekstensi untuk menentukan nama file
        $extension = pathinfo($fullPath, PATHINFO_EXTENSION);
        $cleanFileName = str_replace(['/', '\\', '.'], '_', $indicator->code) . "-template." . $extension;

        // 4. Logika Tampilan
        if (strtolower($extension) === 'pdf') {
            // Jika PDF, tampilkan di browser (Inline)
            return response()->file($fullPath, [
                'Content-Disposition' => 'inline; filename="' . $cleanFileName . '"'
            ]);
        }

        // 5. Jika Word/Excel/Lainnya, paksa unduh (Download)
        // Gunakan helper response() untuk menghindari "Unknown Method" pada Storage
        return response()->download($fullPath, $cleanFileName);
    }

    public function showAssignmentTemplate(AssignmentIndicator $indicator)
    {
        // 1. Validasi keberadaan data & file fisik
        if (!$indicator->snapshot_template_path || !Storage::disk('local')->exists($indicator->snapshot_template_path)) {
            abort(404, 'File template tidak ditemukan di server.');
        }

        // 2. Ambil path absolut
        $path = Storage::disk('local')->path($indicator->snapshot_template_path);

        // 3. Deteksi Ekstensi File
        $extension = strtolower(pathinfo($path, PATHINFO_EXTENSION));

        // 4. Buat nama file yang bersih untuk user
        $safeCode = str_replace(['/', '\\', '.'], '_', $indicator->snapshot_code);
        $displayFileName = $safeCode . "-template." . $extension;

        // 5. Logika Response Berdasarkan Tipe File
        if ($extension === 'pdf') {
            // Jika PDF: Buka di tab browser (Preview)
            return response()->file($path, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'inline; filename="' . $displayFileName . '"'
            ]);
        }

        // Jika Word (doc/docx), Excel (xls/xlsx), dll: Paksa Unduh
        // response()->download() jauh lebih aman untuk file non-PDF
        return response()->download($path, $displayFileName);
    }
}

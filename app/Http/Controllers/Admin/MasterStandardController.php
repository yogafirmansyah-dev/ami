<?php

namespace App\Http\Controllers\Admin;

use App\Enums\TargetType;
use App\Http\Controllers\Controller;
use App\Models\{AuditHistory, MasterStandard};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\{DB, Session};
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class MasterStandardController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->only(['search', 'sort_field', 'direction', 'per_page']);
        $perPage = $request->input('per_page', 10);

        $standards = MasterStandard::withCount('indicators')
            ->latest()
            ->search($request->search, ['name', 'code'])
            ->sort($request->sort_field ?? 'code', $request->direction ?? 'asc')
            ->paginate($perPage)
            ->withQueryString();

        $targetTypes = collect(TargetType::cases())->map(fn($type) => [
            'value' => $type->value,
            'label' => $type->label(),
        ]);

        return Inertia::render('Admin/Standard/Index', [
            'standards' => $standards,
            'filters' => $filters,
            'targetTypes' => $targetTypes
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'target_type' => ['required', Rule::enum(TargetType::class)],
        ]);

        DB::transaction(function () use ($validated) {
            $standard = MasterStandard::create($validated);
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => MasterStandard::class,
                'historable_id' => $standard->id,
                'stage' => 'master_setup',
                'action' => 'create_standard',
                'new_values' => $standard->toArray(),
            ]);
        });

        Session::flash('toastr', ['type' => 'gradient-primary', 'content' => 'Standar Mutu berhasil dibuat.']);
        return back();
    }

    public function update(Request $request, MasterStandard $standard)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'target_type' => ['required', Rule::enum(TargetType::class)],
        ]);

        $oldValues = $standard->toArray();

        DB::transaction(function () use ($standard, $validated, $oldValues) {
            $standard->update($validated);
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => MasterStandard::class,
                'historable_id' => $standard->id,
                'stage' => 'master_setup',
                'action' => 'update_standard',
                'old_values' => $oldValues,
                'new_values' => $standard->getChanges(),
            ]);
        });

        Session::flash('toastr', ['type' => 'gradient-info', 'content' => 'Standar diperbarui.']);
        return back();
    }

    public function destroy(MasterStandard $standard)
    {
        DB::transaction(function () use ($standard) {
            AuditHistory::create([
                'user_id' => auth()->id(),
                'historable_type' => MasterStandard::class,
                'historable_id' => $standard->id,
                'stage' => 'master_setup',
                'action' => 'delete_standard',
                'old_values' => $standard->toArray(),
            ]);
            $standard->delete();
        });

        Session::flash('toastr', ['type' => 'gradient-red-to-pink', 'content' => 'Standar dihapus.']);
        return back();
    }
}

<script setup>
import { ref, watch } from 'vue';
import { router, useForm, Link, Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    standard: Object,   // Master Standard Parent
    indicators: Object, // Paginated indicators
    filters: Object,
});

/* --- LOGIKA PENCARIAN --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.standards.indicators.index', props.standard.id), { search: value }, {
        preserveState: true,
        replace: true
    });
}, 500));

/* --- LOGIKA MODAL & FORM --- */
const showModal = ref(false);
const editMode = ref(false);

const form = useForm({
    id: null,
    requirement: '',
    target: '',
    evidence_needed: '',
    is_evidence_required: 1,
    template: null,
});

const openCreateModal = () => {
    editMode.value = false;
    form.reset();
    showModal.value = true;
};

const openEditModal = (indicator) => {
    editMode.value = true;
    form.id = indicator.id;
    form.requirement = indicator.requirement;
    form.target = indicator.target;
    form.evidence_needed = indicator.evidence_needed;
    form.is_evidence_required = indicator.is_evidence_required ? 1 : 0;
    form.template = null;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
};

const submit = () => {
    if (editMode.value) {
        // 1. Tambahkan _method PATCH ke dalam objek form secara manual sebelum kirim
        // Ini adalah cara paling aman untuk file upload di Laravel + Inertia
        form.transform((data) => ({
            ...data,
            _method: 'PATCH',
        })).post(route('admin.standards.indicators.update', {
            standard: props.standard.id,
            indicator: form.id
        }), {
            forceFormData: true, // Wajib untuk upload file
            onSuccess: () => closeModal(),
            preserveScroll: true,
        });
    } else {
        form.post(route('admin.standards.indicators.store', props.standard.id), {
            onSuccess: () => closeModal(),
        });
    }
};

const deleteData = (id) => {
    if (confirm('Hapus indikator master ini? Perubahan ini tidak akan mempengaruhi penugasan yang sudah berjalan (snapshot).')) {
        router.delete(route('admin.standards.indicators.destroy', {
            standard: props.standard.id,
            indicator: id
        }));
    }
};
</script>

<template>
    <AppLayout :title="'Master Indikator: ' + standard.name">
        <template #header>Pengaturan Master Indikator</template>
        <template #subHeader>
            Standar: <span class="font-bold text-rose-600">{{ standard.name }}</span> |
            Target Unit: <span class="uppercase font-semibold">{{ standard.target_type }}</span>
        </template>

        <template #action-buttons>
            <div class="flex gap-2">
                <Link :href="route('admin.standards.index')"
                    class="inline-flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors">
                    ← Kembali
                </Link>
                <button @click="openCreateModal"
                    class="inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg shadow-sm transition-all active:scale-95">
                    + Tambah Indikator
                </button>
            </div>
        </template>

        <div class="space-y-4">
            <div class="flex justify-end">
                <div class="relative w-full max-w-sm">
                    <input v-model="search" type="text" placeholder="Cari kode atau pernyataan..."
                        class="w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 outline-none transition-all" />
                </div>
            </div>

            <div
                class="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <table class="w-full text-sm text-left">
                    <thead
                        class="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 uppercase text-[11px] font-bold tracking-wider">
                        <tr>
                            <th class="p-4 w-20">Kode</th>
                            <th class="p-4">Pernyataan Standar / Indikator</th>
                            <th class="p-4 text-center w-28">Target</th>
                            <th class="p-4 text-center w-32">Bukti Dibutuhkan</th>
                            <th class="p-4 text-center w-24">Template</th>
                            <th class="p-4 text-center w-24">Wajib Bukti</th>
                            <th class="p-4 text-center w-24">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                        <tr v-for="item in indicators.data" :key="item.id"
                            class="align-top hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td class="p-4 font-bold text-rose-600 font-mono">{{ item.code }}</td>
                            <td class="p-4 leading-relaxed text-slate-700 dark:text-slate-300">{{ item.requirement }}
                            </td>
                            <td class="p-4 text-center text-[11px] font-semibold text-slate-600 dark:text-slate-400">{{
                                item.target || '-' }}</td>
                            <td class="p-4 text-center text-[11px] italic text-slate-500">{{ item.evidence_needed || '-'
                            }}</td>
                            <td class="p-4 text-center">
                                <a v-if="item.template_path" :href="route('admin.indicators.show-template', item.id)"
                                    target="_blank" class="text-blue-500 hover:underline font-bold">
                                    Buka Template
                                </a>
                                <span v-else class="text-slate-300">-</span>
                            </td>
                            <td class="p-4 text-center">
                                <span :class="[
                                    'px-2 py-0.5 rounded text-[10px] font-bold uppercase border',
                                    item.is_evidence_required ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-slate-50 text-slate-400 border-slate-200'
                                ]">
                                    {{ item.is_evidence_required ? 'Ya' : 'Tidak' }}
                                </span>
                            </td>
                            <td class="p-4">
                                <div class="flex justify-center gap-1">
                                    <button @click="openEditModal(item)"
                                        class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        title="Edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button @click="deleteData(item.id)"
                                        class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Hapus">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="indicators.data.length === 0">
                            <td colspan="7" class="p-10 text-center text-slate-400 italic font-medium">Data indikator
                                belum
                                tersedia.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex items-center justify-between py-2">
                <div class="text-xs text-slate-500">
                    Menampilkan {{ indicators.from }} - {{ indicators.to }} dari {{ indicators.total }} indikator
                </div>
                <div class="flex gap-1">
                    <button v-for="link in indicators.links" :key="link.label" v-html="link.label"
                        @click="link.url ? $inertia.visit(link.url) : null" :disabled="!link.url"
                        class="px-3 py-1 text-xs rounded-md border transition-all" :class="[
                            link.active ? 'bg-rose-600 text-white border-rose-600' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50',
                            !link.url ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                        ]" />
                </div>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" @click="closeModal"></div>

            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <h3 class="text-lg font-bold text-slate-800 dark:text-white">
                        {{ editMode ? 'Edit Master Indikator' : 'Tambah Master Indikator' }}
                    </h3>
                    <button @click="closeModal"
                        class="text-slate-400 hover:text-slate-600 text-2xl transition-colors">&times;</button>
                </div>

                <form @submit.prevent="submit" class="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
                    <div class="space-y-1.5">
                        <label class="text-xs font-bold text-slate-500 uppercase">Pernyataan Standar / Indikator</label>
                        <textarea v-model="form.requirement" rows="3" placeholder="Masukkan standar atau indikator mutu"
                            class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-white dark:bg-slate-900"
                            required></textarea>
                    </div>
                    <div class="space-y-1.5">
                        <label class="text-xs font-bold text-slate-500 uppercase">Target Kinerja</label>
                        <input v-model="form.target" type="text" placeholder=""
                            class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-white dark:bg-slate-900" />
                    </div>
                    <div class="space-y-1.5">
                        <label class="text-xs font-bold text-slate-500 uppercase">Bukti yang Diperiksa</label>
                        <textarea v-model="form.evidence_needed" rows="2"
                            placeholder="Contoh: Dokumen kurikulum, SK Kaprodi, dll"
                            class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-white dark:bg-slate-900"></textarea>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="space-y-1.5">
                            <label class="text-xs font-bold text-slate-500 uppercase">Wajib Bukti?</label>
                            <select v-model="form.is_evidence_required"
                                class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-white dark:bg-slate-900">
                                <option :value="1">Ya (Wajib)</option>
                                <option :value="0">Tidak (Opsional)</option>
                            </select>
                        </div>
                        <div class="space-y-1.5">
                            <label class="text-xs font-bold text-slate-500 uppercase">Upload Template Dokumen
                                (Opsional)</label>
                            <input type="file" @input="form.template = $event.target.files[0]" accept=".pdf,.docx,.xlsx"
                                class="block w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100 cursor-pointer border border-slate-100 rounded-lg p-1" />
                            <p v-if="form.errors.template" class="text-xs text-red-500">{{ form.errors.template }}</p>
                        </div>
                    </div>

                    <div class="flex justify-end gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <button type="button" @click="closeModal"
                            class="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Batal</button>
                        <button type="submit" :disabled="form.processing"
                            class="px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-rose-500/20 disabled:opacity-50 transition-all active:scale-95">
                            <span v-if="form.processing">Memproses...</span>
                            <span v-else>{{ editMode ? 'Simpan Perubahan' : 'Tambah Indikator' }}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>

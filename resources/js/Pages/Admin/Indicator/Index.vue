<script setup>
import { ref, watch } from 'vue';
import { router, useForm, Link, Head, usePage } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    standard: Object,   // Master Standard Parent
    indicators: Object, // Paginated indicators
    filters: Object,
});

/* --- LOGIKA PENCARIAN --- */
const search = ref(props.filters.search);
const perPage = ref(props.filters.per_page || 10);

watch(search, debounce((value) => {
    router.get(route('admin.standards.indicators.index', props.standard.id), { search: value, per_page: perPage.value }, {
        preserveState: true,
        replace: true
    });
}, 500));

watch(perPage, (value) => {
    router.get(route('admin.standards.indicators.index', props.standard.id), { search: search.value, per_page: value }, {
        preserveState: true,
        replace: true
    });
});

/* --- SORTING --- */
const handleSort = (field) => {
    const currentSort = props.filters.sort_field;
    const currentDir = props.filters.direction || 'asc';
    const nextDir = currentSort === field && currentDir === 'asc' ? 'desc' : 'asc';
    router.get(window.location.href, { ...props.filters, sort_field: field, direction: nextDir }, { preserveState: true, replace: true });
};

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
            onError: () => {
                usePage().props.flash.toastr = {
                    type: 'error',
                    content: 'Terdapat kesalahan validasi, mohon cek kembali form anda.',
                    position: 'top-right'
                };
            }
        });
    } else {
        form.post(route('admin.standards.indicators.store', props.standard.id), {
            onSuccess: () => closeModal(),
            onError: () => {
                usePage().props.flash.toastr = {
                    type: 'error',
                    content: 'Terdapat kesalahan validasi, mohon cek kembali form anda.',
                    position: 'top-right'
                };
            }
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
            <div class="flex items-center gap-2 mt-1">
                <span
                    class="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider">Standar:</span>
                <span class="font-black text-rose-600 dark:text-rose-500 text-sm uppercase tracking-tight">{{
                    standard.name }}</span>
                <span class="text-slate-300 dark:text-slate-600 mx-1">|</span>
                <span :class="[
                    'px-2 py-0.5 rounded text-[9px] font-black uppercase border',
                    standard.target_type === 'prodi'
                        ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 border-indigo-100 dark:border-indigo-500/20'
                        : 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20'
                ]">
                    {{ standard.target_type === 'prodi' ? 'Program Studi' : 'Fakultas' }}
                </span>
            </div>
        </template>

        <template #action-buttons>
            <div class="flex gap-3">
                <Link :href="route('admin.standards.index')"
                    class="inline-flex items-center px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all active:scale-95 shadow-sm">
                    <icon icon="fa-solid fa-chevron-left" class="mr-2" /> Kembali
                </Link>
                <button @click="openCreateModal"
                    class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10">
                    <span
                        class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none">+</span>
                    Tambah Indikator
                </button>
            </div>
        </template>

        <div class="space-y-6">
            <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div class="flex items-stretch gap-3 w-full max-w-2xl">
                    <div class="relative flex-1 group">
                        <span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <icon icon="fa-solid fa-magnifying-glass"
                                class="text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors" />
                        </span>
                        <input v-model="search" type="text" placeholder="Cari kode atau pernyataan..."
                            class="w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" />
                    </div>

                    <div
                        class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300">
                        <span
                            class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2">Tampilkan</span>
                        <select v-model="perPage"
                            class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none">
                            <option :value="10">10</option>
                            <option :value="25">25</option>
                            <option :value="50">50</option>
                            <option :value="100">100</option>
                        </select>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <!-- Slot action -->
                </div>
            </div>

            <div
                class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden">
                <div class="overflow-x-auto custom-scrollbar">
                    <table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full">
                        <thead>
                            <tr
                                class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50">
                                <th class="p-6 md:p-8 pl-8 min-w-24">No</th>
                                <th @click="handleSort('code')"
                                    class="p-6 md:p-8 pl-8 min-w-24 cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center gap-2">
                                        Kode
                                        <div
                                            class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">
                                            <icon icon="fa-solid fa-caret-up"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'code' && filters.direction === 'asc' }"
                                                class="-mb-1" />
                                            <icon icon="fa-solid fa-caret-down"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'code' && filters.direction === 'desc' }" />
                                        </div>
                                    </div>
                                </th>
                                <th @click="handleSort('requirement')"
                                    class="p-6 md:p-8 cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center gap-2">
                                        Pernyataan Standar / Indikator
                                        <div
                                            class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">
                                            <icon icon="fa-solid fa-caret-up"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'requirement' && filters.direction === 'asc' }"
                                                class="-mb-1" />
                                            <icon icon="fa-solid fa-caret-down"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'requirement' && filters.direction === 'desc' }" />
                                        </div>
                                    </div>
                                </th>
                                <th class="p-6 md:p-8 text-center min-w-28">Target</th>
                                <th class="p-6 md:p-8 min-w-32">Bukti</th>
                                <th class="p-6 md:p-8 text-center min-w-24">Template</th>
                                <th class="p-6 md:p-8 text-center min-w-24">Wajib</th>
                                <th class="p-6 md:p-8 pr-8 text-center min-w-24">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <tr v-for="item in indicators.data" :key="item.id"
                                class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300 align-top">
                                <td class="p-6 md:p-8 pl-8">
                                    <span
                                        class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20">
                                        {{ indicators.from + indicators.data.indexOf(item) }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8 pl-8">
                                    <span
                                        class="font-mono text-[10px] font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20">
                                        {{ item.code }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div
                                        class="text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed max-w-3xl">
                                        {{ item.requirement }}
                                    </div>
                                </td>
                                <td class="p-6 md:p-8 text-center">
                                    <span
                                        class="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tight">
                                        {{ item.target || '-' }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div
                                        class="text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed max-w-3xl">
                                        {{ item.evidence_needed || '-' }}
                                    </div>
                                </td>
                                <td class="p-6 md:p-8 text-center">
                                    <a v-if="item.template_path"
                                        :href="route('admin.indicators.show-template', item.id)" target="_blank"
                                        class="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-blue-600 hover:text-blue-700 hover:underline">
                                        <icon icon="fa-solid fa-file-arrow-down" /> Template
                                    </a>
                                    <span v-else class="text-slate-300 text-xs">-</span>
                                </td>
                                <td class="p-6 md:p-8 text-center">
                                    <span :class="[
                                        'px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest border shadow-sm',
                                        item.is_evidence_required
                                            ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20'
                                            : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700'
                                    ]">
                                        {{ item.is_evidence_required ? 'Ya' : 'Opsional' }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8 pr-8">
                                    <div class="flex justify-center gap-2">
                                        <button @click="openEditModal(item)"
                                            class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95">
                                            <icon icon="fa-solid fa-pencil" class="text-[10px]" />
                                        </button>
                                        <button @click="deleteData(item.id)"
                                            class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95">
                                            <icon icon="fa-solid fa-trash" class="text-[10px]" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="indicators.data.length === 0">
                                <td colspan="8" class="p-12 text-center">
                                    <div class="flex flex-col items-center justify-center opacity-50">
                                        <icon icon="fa-solid fa-clipboard-list"
                                            class="text-4xl text-slate-300 dark:text-slate-600 mb-4" />
                                        <p class="text-xs font-black text-slate-400 uppercase tracking-widest italic">
                                            Belum ada
                                            indikator mutu</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- PAGINATION -->
                <div
                    class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm">
                    <div
                        class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left">
                        Menampilkan {{ indicators.from }} - {{ indicators.to }} dari {{ indicators.total }} indikator
                    </div>
                    <div class="flex flex-wrap justify-center gap-1.5">
                        <template v-for="(link, k) in indicators.links" :key="k">
                            <Link v-if="link.url" :href="link.url" :class="[
                                'px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all cursor-pointer',
                                link.active
                                    ? 'bg-slate-900 dark:bg-rose-600 text-white border-slate-900 dark:border-rose-600 shadow-lg shadow-slate-900/20'
                                    : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:text-rose-500'
                            ]" v-html="link.label" />

                            <span v-else :class="[
                                'px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all opacity-30 cursor-not-allowed',
                                'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800'
                            ]" v-html="link.label" />
                        </template>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" @click="closeModal"></div>

            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10 flex flex-col max-h-[85vh]">
                <div
                    class="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center shrink-0">
                    <div>
                        <h3
                            class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
                            {{ editMode ? 'Edit Indikator' : 'Indikator Baru' }}
                        </h3>
                        <p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1">
                            {{ standard.name }}
                        </p>
                    </div>
                    <button @click="closeModal"
                        class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg">&times;</button>
                </div>

                <form @submit.prevent="submit" class="p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Pernyataan
                            Standar / Indikator</label>
                        <textarea name="requirement" v-model="form.requirement" rows="3"
                            placeholder="Masukkan standar atau indikator mutu"
                            class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
                            required></textarea>
                        <p v-if="form.errors.requirement" class="text-xs text-rose-500 font-bold ml-1">{{
                            form.errors.requirement }}</p>
                    </div>
                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Target
                            Kinerja</label>
                        <input name="target" v-model="form.target" type="text"
                            placeholder="Contoh: 100%, Ada, 3 Dokumen"
                            class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" />
                        <p v-if="form.errors.target" class="text-xs text-rose-500 font-bold ml-1">{{ form.errors.target
                            }}</p>
                    </div>
                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Bukti
                            yang Diperiksa</label>
                        <textarea name="evidence_needed" v-model="form.evidence_needed" rows="2"
                            placeholder="Contoh: Dokumen kurikulum, SK Kaprodi, dll"
                            class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"></textarea>
                        <p v-if="form.errors.evidence_needed" class="text-xs text-rose-500 font-bold ml-1">{{
                            form.errors.evidence_needed }}</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Wajib
                                Bukti?</label>
                            <select name="is_evidence_required" v-model="form.is_evidence_required"
                                class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm">
                                <option :value="1">Ya (Wajib Upload)</option>
                                <option :value="0">Tidak (Opsional)</option>
                            </select>
                            <p v-if="form.errors.is_evidence_required" class="text-xs text-rose-500 font-bold ml-1">{{
                                form.errors.is_evidence_required }}</p>
                        </div>
                        <div class="space-y-2">
                            <label
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Upload
                                Template (Opsional)</label>
                            <input name="template" type="file" @input="form.template = $event.target.files[0]"
                                accept=".pdf,.docx,.xlsx"
                                class="block w-full text-[10px] text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-wider file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 cursor-pointer border border-slate-200 dark:border-slate-700 rounded-2xl p-1.5" />
                            <p v-if="form.errors.template" class="text-xs text-rose-500 font-bold ml-1">{{
                                form.errors.template }}</p>
                        </div>
                    </div>

                    <div class="pt-4">
                        <button type="submit" :disabled="form.processing"
                            class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50">
                            {{ form.processing ? 'Menyimpan...' : (editMode ? 'Simpan Perubahan' : 'Simpan Indikator')
                            }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>
<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    height: 6px;
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #e2e8f0;
    border-radius: 10px;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
}
</style>

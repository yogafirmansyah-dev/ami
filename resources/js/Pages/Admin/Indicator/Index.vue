<script setup>
import { ref, watch } from 'vue';
import { router, useForm, Link, Head, usePage } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';
import TModal from '@/Components/Modal/TModal.vue';
import TInputSelect from '@/Components/Form/Inputs/TInputSelect.vue';

const props = defineProps({
    standard: Object,   // Master Standard Parent
    indicators: Object, // Paginated indicators
    filters: Object,
});

/* --- LOGIKA PENCARIAN --- */
const isSearching = ref(false);
const search = ref(props.filters.search);
const perPage = ref(props.filters.per_page || 10);

watch(search, debounce((value) => {
    isSearching.value = true;
    router.get(route('admin.standards.indicators.index', props.standard.id), { search: value, per_page: perPage.value }, {
        preserveState: true,
        replace: true,
        onFinish: () => isSearching.value = false
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

/* --- DELETE KUSTOM MODAL --- */
const showDeleteModal = ref(false);
const itemToDelete = ref(null);

const confirmDeleteAction = (id) => {
    itemToDelete.value = id;
    showDeleteModal.value = true;
};

const executeDelete = () => {
    if (itemToDelete.value) {
        router.delete(route('admin.standards.indicators.destroy', {
            standard: props.standard.id,
            indicator: itemToDelete.value
        }), {
            preserveScroll: true,
            onSuccess: () => {
                showDeleteModal.value = false;
                itemToDelete.value = null;
            }
        });
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
                            <icon v-if="!isSearching" icon="fa-solid fa-magnifying-glass"
                                class="text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors" />
                            <div v-else
                                class="h-4 w-4 border-2 border-rose-500 border-t-transparent rounded-full animate-spin">
                            </div>
                        </span>
                        <input v-model="search" type="text" placeholder="Cari kode atau pernyataan..."
                            class="w-full pl-11 pr-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" />

                        <!-- Clear Search Button -->
                        <button v-if="search" @click="search = ''"
                            class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-rose-500 transition-colors">
                            <icon icon="fa-solid fa-times-circle" class="w-4 h-4"></icon>
                        </button>
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
                        <tbody v-if="isSearching" class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <!-- SKELETON LOADER -->
                            <tr v-for="i in 5" :key="'skeleton-' + i"
                                class="animate-pulse bg-white/30 dark:bg-slate-900/10">
                                <td class="p-6 md:p-8 pl-8">
                                    <div class="h-6 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-md"></div>
                                </td>
                                <td class="p-6 md:p-8 pl-8">
                                    <div class="h-6 w-16 bg-slate-200 dark:bg-slate-700/50 rounded-md"></div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="h-4 w-full max-w-sm bg-slate-200 dark:bg-slate-700/50 rounded mb-2">
                                    </div>
                                    <div class="h-4 w-3/4 max-w-sm bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                </td>
                                <td class="p-6 md:p-8 text-center">
                                    <div class="h-4 w-20 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="h-4 w-full max-w-xs bg-slate-200 dark:bg-slate-700/50 rounded mb-2">
                                    </div>
                                    <div class="h-4 w-2/3 max-w-xs bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                </td>
                                <td class="p-6 md:p-8 text-center">
                                    <div class="h-4 w-16 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                </td>
                                <td class="p-6 md:p-8 text-center">
                                    <div class="h-6 w-12 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-md"></div>
                                </td>
                                <td class="p-6 md:p-8 pr-8 text-center">
                                    <div class="flex justify-center gap-2">
                                        <div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl"></div>
                                        <div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else-if="indicators.data.length === 0"
                            class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <!-- EMPTY STATE -->
                            <tr>
                                <td colspan="8" class="p-16 text-center">
                                    <div
                                        class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                                        <div
                                            class="w-24 h-24 mb-6 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner">
                                            <icon icon="fa-solid fa-clipboard-list"
                                                class="text-4xl text-slate-300 dark:text-slate-600" />
                                        </div>
                                        <h3
                                            class="text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">
                                            Belum Ada Indikator</h3>
                                        <p class="text-xs max-w-sm text-center leading-relaxed font-bold">
                                            Standar ini belum memiliki indikator mutu atau pencarian Anda tidak memiliki
                                            kecocokan data.
                                        </p>
                                        <button v-if="search" @click="search = ''"
                                            class="mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm">
                                            Bersihkan Pencarian
                                        </button>
                                        <button v-else @click="openCreateModal"
                                            class="mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500">
                                            Tambahkan Indikator Mutu
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else class="divide-y divide-slate-50 dark:divide-slate-800/20">
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
                                        <button @click="confirmDeleteAction(item.id)"
                                            class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95">
                                            <icon icon="fa-solid fa-trash" class="text-[10px]" />
                                        </button>
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
                            <TInputSelect v-model="form.is_evidence_required" :options="[
                                { value: 1, label: 'Ya (Wajib Upload)' },
                                { value: 0, label: 'Tidak (Opsional)' }
                            ]" options-value-key="value" options-label-key="label" :radius="5" class="w-full"
                                :class="form.errors.is_evidence_required ? 'ring-2 ring-rose-500 rounded-xl' : ''" />
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

        <!-- Delete Confirmation Modal -->
        <TModal v-model="showDeleteModal" :radius="5" :closeButton="false">
            <template #content>
                <div class="text-center p-4">
                    <div
                        class="w-20 h-20 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-500 mx-auto flex items-center justify-center mb-6 shadow-inner">
                        <icon icon="fa-solid fa-trash-can" class="text-3xl animate-bounce" />
                    </div>
                    <h3 class="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter italic">
                        Konfirmasi Hapus</h3>
                    <p class="text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto">
                        Tindakan ini akan menghapus indikator master ini. Perubahan ini tidak akan mempengaruhi
                        penugasan yang sudah berjalan (snapshot). Lanjutkan?
                    </p>
                    <div class="flex justify-center gap-3">
                        <button @click="showDeleteModal = false"
                            class="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 rounded-xl transition active:scale-95">
                            Batal
                        </button>
                        <button @click="executeDelete"
                            class="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition shadow-lg shadow-rose-500/30 active:scale-95">
                            Ya, Hapus
                        </button>
                    </div>
                </div>
            </template>
        </TModal>

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

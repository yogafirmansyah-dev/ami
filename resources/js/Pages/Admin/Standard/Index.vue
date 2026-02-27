<script setup>
import { ref, watch } from 'vue';
import { router, useForm, Link, Head, usePage } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';
import TModal from '@/Components/Modal/TModal.vue';
import TAlert from '@/Components/Alert/TAlert.vue';
import TInputSelect from '@/Components/Form/Inputs/TInputSelect.vue';

const props = defineProps({
    standards: Object,
    filters: Object,
    targetTypes: Array, // [ {value: 'prodi', label: 'Program Studi'}, ... ]
});

/* --- LOGIKA PENCARIAN --- */
const isSearching = ref(false);
const search = ref(props.filters.search);
const perPage = ref(props.filters.per_page || 10);

watch(search, debounce((value) => {
    isSearching.value = true;
    router.get(route('admin.standards.index'), { search: value, per_page: perPage.value }, {
        preserveState: true,
        replace: true,
        onFinish: () => isSearching.value = false
    });
}, 500));

watch(perPage, (value) => {
    router.get(route('admin.standards.index'), { search: search.value, per_page: value }, {
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
    name: '',
    target_type: '',
    description: '',
});

const openCreateModal = () => {
    editMode.value = false;
    form.reset();
    showModal.value = true;
};

const openEditModal = (standard) => {
    editMode.value = true;
    form.id = standard.id;
    form.name = standard.name;
    form.target_type = standard.target_type;
    form.description = standard.description;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
};

const submit = () => {
    if (editMode.value) {
        form.put(route('admin.standards.update', form.id), {
            onSuccess: () => closeModal(),
            onError: () => {
                usePage().props.flash.toastr = {
                    type: 'error',
                    content: 'Terdapat kesalahan validasi, mohon cek kembali form anda.',
                    position: 'top-right'
                };
            }
        });
    } else {
        form.post(route('admin.standards.store'), {
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

/* --- LOGIKA IMPORT --- */
const showImportModal = ref(false);
const importForm = useForm({
    file: null,
});

const openImportModal = () => {
    importForm.reset();
    showImportModal.value = true;
};

const closeImportModal = () => {
    showImportModal.value = false;
    importForm.reset();
};

const handleFileUpload = (e) => {
    importForm.file = e.target.files[0];
};

const submitImport = () => {
    importForm.post(route('admin.standards.import'), {
        onSuccess: () => {
            closeImportModal();
        },
    });
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
        router.delete(route('admin.standards.destroy', itemToDelete.value), {
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
    <AppLayout title="Master Standar Mutu">
        <template #header>Master Standar Mutu</template>
        <template #subHeader>Kelola instrumen dan kriteria penilaian AMI</template>

        <template #action-buttons>
            <div class="flex gap-2">
                <a :href="route('admin.standards.export')"
                    class="group inline-flex items-center px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 active:scale-95">
                    <icon icon="fa-solid fa-file-excel" class="mr-2 text-emerald-500 text-sm" />
                    Export
                </a>
                <button @click="openImportModal"
                    class="group inline-flex items-center px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95">
                    <icon icon="fa-solid fa-cloud-arrow-up" class="mr-2 text-blue-500 text-sm" />
                    Import
                </button>
                <button @click="openCreateModal"
                    class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10">
                    <span
                        class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none">+</span>
                    Tambah Standar
                </button>
            </div>
        </template>

        <!-- Peringatan Error Import -->
        <TAlert v-if="$page.props.flash.import_errors && $page.props.flash.import_errors.length > 0" type="error"
            design="filled" :closeable="true" class="mb-6">
            <template #icon>
                <icon icon="fa-solid fa-triangle-exclamation" class="text-lg mt-0.5" />
            </template>
            <div class="space-y-3">
                <p class="font-bold text-sm">Validasi Impor Gagal pada Beberapa Baris</p>
                <ul
                    class="list-disc list-inside text-xs font-medium space-y-1 opacity-90 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                    <li v-for="(err, i) in $page.props.flash.import_errors" :key="i">{{ err }}</li>
                </ul>
                <p v-if="$page.props.flash.import_errors.length >= 50" class="text-[10px] italic opacity-80">
                    * Menampilkan 50 peringatan pertama. Silakan periksa sisa file Anda secara teliti.
                </p>
            </div>
        </TAlert>

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
                        <input v-model="search" type="text" placeholder="Cari nama standar..."
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
                    <!-- Action buttons slot if needed in future, currently main action is below -->
                </div>
            </div>

            <div
                class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden">
                <div class="overflow-x-auto custom-scrollbar">
                    <table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full">
                        <thead>
                            <tr
                                class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50">
                                <th class="p-6 md:p-8 w-24">No</th>
                                <th @click="handleSort('name')"
                                    class="p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center gap-2">
                                        Nama Standar Mutu
                                        <div
                                            class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">
                                            <icon icon="fa-solid fa-caret-up"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'name' && filters.direction === 'asc' }"
                                                class="-mb-1" />
                                            <icon icon="fa-solid fa-caret-down"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'name' && filters.direction === 'desc' }" />
                                        </div>
                                    </div>
                                </th>
                                <th @click="handleSort('target_type')"
                                    class="p-6 md:p-8 cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center gap-2">
                                        Target Unit
                                        <div
                                            class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">
                                            <icon icon="fa-solid fa-caret-up"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'target_type' && filters.direction === 'asc' }"
                                                class="-mb-1" />
                                            <icon icon="fa-solid fa-caret-down"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'target_type' && filters.direction === 'desc' }" />
                                        </div>
                                    </div>
                                </th>
                                <th @click="handleSort('indicators_count')"
                                    class="p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center justify-center gap-2">
                                        Jumlah Indikator
                                        <div
                                            class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">
                                            <icon icon="fa-solid fa-caret-up"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'indicators_count' && filters.direction === 'asc' }"
                                                class="-mb-1" />
                                            <icon icon="fa-solid fa-caret-down"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'indicators_count' && filters.direction === 'desc' }" />
                                        </div>
                                    </div>
                                </th>
                                <th class="p-6 md:p-8 pr-8 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody v-if="isSearching" class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <!-- SKELETON LOADER -->
                            <tr v-for="i in 5" :key="'skeleton-' + i"
                                class="animate-pulse bg-white/30 dark:bg-slate-900/10">
                                <td class="p-6 md:p-8">
                                    <div class="h-6 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-md"></div>
                                </td>
                                <td class="p-6 md:p-8 pl-8">
                                    <div class="h-5 w-64 bg-slate-200 dark:bg-slate-700/50 rounded mb-2"></div>
                                    <div class="h-3 w-16 bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="h-6 w-24 bg-slate-200 dark:bg-slate-700/50 rounded-lg"></div>
                                </td>
                                <td class="p-6 md:p-8 text-center">
                                    <div class="h-8 w-8 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-lg"></div>
                                </td>
                                <td class="p-6 md:p-8 pr-8">
                                    <div class="flex justify-end items-center gap-2">
                                        <div class="h-8 w-24 bg-slate-200 dark:bg-slate-700/50 rounded-xl"></div>
                                        <div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl"></div>
                                        <div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else-if="standards.data.length === 0"
                            class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <!-- EMPTY STATE -->
                            <tr>
                                <td colspan="5" class="p-16 text-center">
                                    <div
                                        class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                                        <div
                                            class="w-24 h-24 mb-6 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner">
                                            <icon icon="fa-solid fa-folder-open"
                                                class="text-4xl text-slate-300 dark:text-slate-600" />
                                        </div>
                                        <h3
                                            class="text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">
                                            Belum Ada Standar Mutu</h3>
                                        <p class="text-xs max-w-sm text-center leading-relaxed font-bold">
                                            Sistem belum mencatat data standar mutu apa pun atau pencarian Anda tidak
                                            memiliki
                                            kecocokan data.
                                        </p>
                                        <button v-if="search" @click="search = ''"
                                            class="mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm">
                                            Bersihkan Pencarian
                                        </button>
                                        <button v-else @click="openCreateModal"
                                            class="mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500">
                                            Tambahkan Standar Mutu
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <tr v-for="item in standards.data" :key="item.id"
                                class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300">
                                <td class="p-6 md:p-8">
                                    <span
                                        class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20">
                                        {{ standards.from + standards.data.indexOf(item) }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8 pl-8">
                                    <div class="font-black text-slate-800 dark:text-slate-200 text-sm mb-1">
                                        {{ item.name }}
                                    </div>
                                    <div
                                        class="text-[10px] font-bold text-rose-500/80 uppercase italic tracking-tighter flex items-center gap-1">
                                        ID: #{{ item.code }}
                                    </div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <span :class="[
                                        'text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border shadow-sm',
                                        item.target_type === 'prodi'
                                            ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 border-indigo-100 dark:border-indigo-500/20'
                                            : 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20'
                                    ]">
                                        {{ item.target_type === 'prodi' ? 'Program Studi' : 'Fakultas' }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8 text-center">
                                    <div
                                        class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 font-black text-rose-500 shadow-inner border border-slate-200 dark:border-slate-700 text-xs">
                                        {{ item.indicators_count || 0 }}
                                    </div>
                                </td>
                                <td class="p-6 md:p-8 pr-8">
                                    <div class="flex justify-end items-center gap-2">
                                        <Link :href="route('admin.standards.indicators.index', item.id)"
                                            class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95 border border-emerald-500/20 hover:border-emerald-500">
                                            <icon icon="fa-solid fa-list-check" /> Indikator
                                        </Link>

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
                        Data {{ standards.from }} - {{ standards.to }} dari total {{ standards.total }}
                    </div>
                    <div class="flex flex-wrap justify-center gap-1.5">
                        <template v-for="(link, k) in standards.links" :key="k">
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
                class="relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10">
                <div
                    class="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center">
                    <div>
                        <h3
                            class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
                            {{ editMode ? 'Edit Standar' : 'Standar Baru' }}
                        </h3>
                        <p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1">
                            Manajemen Instrumen Mutu
                        </p>
                    </div>
                    <button @click="closeModal"
                        class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg">&times;</button>
                </div>

                <form @submit.prevent="submit" class="p-8 space-y-6">
                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Nama
                            Standar</label>
                        <input name="name" v-model="form.name" type="text" required
                            placeholder="Contoh: Standar Pendidikan Tinggi 2026"
                            class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm focus:shadow-md" />
                        <p v-if="form.errors.name" class="text-xs text-rose-500 font-bold ml-1">{{ form.errors.name }}
                        </p>
                    </div>

                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Target
                            Unit</label>
                        <TInputSelect v-model="form.target_type" :options="targetTypes" options-value-key="value"
                            options-label-key="label" place-holder="Pilih Level Unit Kerja" :radius="5" class="w-full"
                            :class="form.errors.target_type ? 'ring-2 ring-rose-500 rounded-xl' : ''" />
                        <p v-if="form.errors.target_type" class="text-xs text-rose-500 font-bold ml-1">{{
                            form.errors.target_type
                            }}</p>
                    </div>

                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Deskripsi</label>
                        <textarea name="description" v-model="form.description" required
                            placeholder="Deskripsi singkat standar..."
                            class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm min-h-[100px]" />
                        <p v-if="form.errors.description" class="text-xs text-rose-500 font-bold ml-1">{{
                            form.errors.description
                            }}</p>
                    </div>

                    <div class="pt-4">
                        <button type="submit" :disabled="form.processing"
                            class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50">
                            {{ form.processing ? 'Menyimpan...' : (editMode ? 'Simpan Perubahan' : 'Buat Standar Baru')
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
                        Tindakan ini akan menghapus standar mutu ini secara permanen. Menghapus standar akan menghapus
                        seluruh indikator di dalamnya. Lanjutkan?
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

        <!-- Modal Import Standar Mutu -->
        <TModal v-model="showImportModal" :radius="5" :closeButton="false">
            <template #content>
                <div class="flex items-center justify-between p-8 pb-0">
                    <div>
                        <h3
                            class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
                            Import Data Master
                        </h3>
                        <p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1">
                            Unggah File Excel (.xlsx)
                        </p>
                    </div>
                </div>

                <form @submit.prevent="submitImport" class="p-8 space-y-6">
                    <div
                        class="bg-blue-50 dark:bg-blue-500/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-500/20">
                        <div class="flex gap-4">
                            <icon icon="fa-solid fa-circle-info" class="text-blue-500 text-xl mt-0.5 shrink-0" />
                            <div class="space-y-2">
                                <p class="text-xs text-blue-700 dark:text-blue-300 font-medium leading-relaxed">
                                    Pastikan data yang diunggah mengikuti format template yang disediakan.
                                    1 baris mewakili 1 indikator. Standar yang sama akan digabungkan menjadi 1 target.
                                    Target Level (Target Unit) harus dipilih apakah fakultas atau prodi.
                                </p>
                                <a :href="route('admin.standards.template')"
                                    class="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                                    <icon icon="fa-solid fa-download" />
                                    Unduh Template Master
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">File
                            Excel</label>
                        <div class="relative">
                            <input type="file" required accept=".xlsx,.xls,.csv" @change="handleFileUpload"
                                class="w-full px-5 py-4 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-500 dark:text-slate-400 ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-blue-500 transition-all shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-500/10 dark:file:text-blue-400" />
                        </div>
                        <p v-if="importForm.errors.file" class="text-xs text-rose-500 font-bold ml-1">{{
                            importForm.errors.file }}</p>
                    </div>

                    <div class="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <button type="button" @click="closeImportModal"
                            class="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors">
                            Batal
                        </button>
                        <button type="submit" :disabled="importForm.processing"
                            class="px-8 py-3 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2">
                            <icon v-if="importForm.processing" icon="fa-solid fa-circle-notch" class="animate-spin" />
                            <icon v-else icon="fa-solid fa-cloud-arrow-up" />
                            {{ importForm.processing ? 'Mengimpor...' : 'Mulai Import' }}
                        </button>
                    </div>
                </form>
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

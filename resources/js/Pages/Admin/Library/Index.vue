<script setup>
import { ref, computed, watch } from 'vue';
import { useForm, router, Head, usePage, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';
import TModal from '@/Components/Modal/TModal.vue';
import TInputSelect from '@/Components/Form/Inputs/TInputSelect.vue';

const props = defineProps({
    documents: Object,
    filters: Object // Adding filters prop
});

/* --- LOGIKA PENCARIAN & PAGINATION --- */
const isSearching = ref(false);
const search = ref(props.filters?.search || '');
const perPage = ref(props.filters?.per_page || 10);

watch(search, debounce((value) => {
    isSearching.value = true;
    router.get(route('admin.library.index'), { search: value, per_page: perPage.value }, {
        preserveState: true,
        replace: true,
        onFinish: () => isSearching.value = false
    });
}, 500));

watch(perPage, (value) => {
    router.get(route('admin.library.index'), { search: search.value, per_page: value }, { preserveState: true, replace: true });
});

/* --- SORTING --- */
const handleSort = (field) => {
    const currentSort = props.filters.sort_field;
    const currentDir = props.filters.direction || 'asc';
    const nextDir = currentSort === field && currentDir === 'asc' ? 'desc' : 'asc';
    router.get(window.location.href, { ...props.filters, sort_field: field, direction: nextDir }, { preserveState: true, replace: true });
};

/* --- LOGIKA CRUD --- */
const showModal = ref(false);
const isEditing = ref(false);
const editId = ref(null);

const form = useForm({
    name: '',
    type: 'public',
    file: null,
});

const openCreate = () => {
    isEditing.value = false;
    editId.value = null;
    form.reset();
    form.clearErrors();
    showModal.value = true;
};

const openEdit = (doc) => {
    isEditing.value = true;
    editId.value = doc.id;
    form.name = doc.name;
    form.type = doc.type;
    form.file = null;
    form.clearErrors();
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
    form.clearErrors();
};

const submit = () => {
    form.transform((data) => data);

    if (isEditing.value) {
        form.transform((data) => ({
            ...data,
            _method: 'PATCH'
        })).post(route('admin.library.update', editId.value), {
            forceFormData: true,
            onSuccess: () => closeModal(),
            onError: () => {
                usePage().props.flash.toastr = {
                    type: 'error',
                    content: 'Gagal menyimpan dokumen. Mohon cek kembali inputan anda.',
                    position: 'top-right'
                };
            }
        });
    } else {
        form.post(route('admin.library.store'), {
            forceFormData: true,
            onSuccess: () => closeModal(),
            onError: () => {
                usePage().props.flash.toastr = {
                    type: 'error',
                    content: 'Gagal mengupload dokumen. Mohon cek kembali inputan anda.',
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
        router.delete(route('admin.library.destroy', itemToDelete.value), {
            preserveScroll: true,
            onSuccess: () => {
                showDeleteModal.value = false;
                itemToDelete.value = null;
            }
        });
    }
};

const buttonLabel = computed(() => {
    if (form.processing) return 'Sedang Memproses...';
    return isEditing.value ? 'Simpan Perubahan' : 'Upload Dokumen';
});
</script>

<template>
    <AppLayout title="Kelola Library">
        <template #header>Manajemen Pusat Dokumen</template>
        <template #subHeader>Repository dokumen standar dan referensi audit</template>

        <template #action-buttons>
            <button @click="openCreate"
                class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10">
                <span
                    class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none">+</span>
                Tambah Dokumen
            </button>
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
                        <input v-model="search" type="text" placeholder="Cari nama dokumen..."
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
                                <th class="p-6 md:p-8 pl-8 text-center">No</th>
                                <th @click="handleSort('name')"
                                    class="p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center gap-2">
                                        Nama Dokumen
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
                                <th @click="handleSort('type')"
                                    class="p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center justify-center gap-2">
                                        Tipe Akses
                                        <div
                                            class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">
                                            <icon icon="fa-solid fa-caret-up"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'type' && filters.direction === 'asc' }"
                                                class="-mb-1" />
                                            <icon icon="fa-solid fa-caret-down"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'type' && filters.direction === 'desc' }" />
                                        </div>
                                    </div>
                                </th>
                                <th class="p-6 md:p-8">Diupload Oleh</th>
                                <th class="p-6 md:p-8 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody v-if="isSearching" class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <!-- SKELETON LOADER -->
                            <tr v-for="i in 5" :key="'skeleton-' + i"
                                class="animate-pulse bg-white/30 dark:bg-slate-900/10">
                                <td class="p-6 md:p-8 pl-8 text-center">
                                    <div class="h-6 w-8 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-md"></div>
                                </td>
                                <td class="p-6 md:p-8 pl-8">
                                    <div class="h-4 w-48 bg-slate-200 dark:bg-slate-700/50 rounded mb-2"></div>
                                    <div class="flex gap-2">
                                        <div class="h-3 w-8 bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                        <div class="h-3 w-12 bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                    </div>
                                </td>
                                <td class="p-6 md:p-8 text-center">
                                    <div class="h-6 w-20 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-lg"></div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="flex items-center gap-2">
                                        <div class="h-6 w-6 bg-slate-200 dark:bg-slate-700/50 rounded-full"></div>
                                        <div class="h-4 w-32 bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                    </div>
                                </td>
                                <td class="p-6 md:p-8 text-center">
                                    <div class="flex justify-center gap-2">
                                        <div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl"></div>
                                        <div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl"></div>
                                        <div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else-if="documents.data.length === 0"
                            class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <!-- EMPTY STATE -->
                            <tr>
                                <td colspan="5" class="p-16 text-center">
                                    <div
                                        class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                                        <div
                                            class="w-24 h-24 mb-6 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner">
                                            <icon icon="fa-solid fa-box-open"
                                                class="text-4xl text-slate-300 dark:text-slate-600" />
                                        </div>
                                        <h3
                                            class="text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">
                                            Belum Ada Dokumen</h3>
                                        <p class="text-xs max-w-sm text-center leading-relaxed font-bold">
                                            Library masih kosong atau pencarian Anda tidak memiliki kecocokan data
                                            dokumen.
                                        </p>
                                        <button v-if="search" @click="search = ''"
                                            class="mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm">
                                            Bersihkan Pencarian
                                        </button>
                                        <button v-else @click="openCreate"
                                            class="mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500">
                                            Upload Dokumen Baru
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <tr v-for="doc in documents.data" :key="doc.id"
                                class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300">
                                <td class="p-6 md:p-8 pl-8 text-center">
                                    <span
                                        class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20">
                                        {{ documents.from + documents.data.indexOf(doc) }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8 pl-8">
                                    <div class="flex flex-col">
                                        <div
                                            class="font-black text-slate-800 dark:text-slate-200 uppercase text-xs leading-none">
                                            {{ doc.name }}
                                        </div>
                                        <div class="flex items-center gap-2 mt-2">
                                            <span
                                                class="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[8px] font-bold text-slate-500 uppercase tracking-tighter">
                                                {{ doc.extension }}
                                            </span>
                                            <span class="text-[9px] text-slate-400 font-medium">
                                                {{ (doc.size_kb || 0) }} KB
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-6 md:p-8 text-center">
                                    <span :class="[
                                        'px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border shadow-sm',
                                        doc.type === 'public'
                                            ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20'
                                            : 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 border-rose-100 dark:border-rose-500/20'
                                    ]">
                                        {{ doc.type === 'public' ? 'Publik' : 'Terbatas' }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="flex items-center gap-2">
                                        <div
                                            class="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-[9px] font-black text-indigo-500">
                                            {{ doc.uploader?.name?.[0] || '?' }}
                                        </div>
                                        <span class="text-xs font-bold text-slate-600 dark:text-slate-400">{{
                                            doc.uploader?.name }}</span>
                                    </div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="flex justify-center gap-2">
                                        <a :href="route('library.download', doc.id)"
                                            class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-emerald-500 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-emerald-200 active:scale-95"
                                            title="Download">
                                            <icon icon="fa-solid fa-download" class="text-[10px]" />
                                        </a>
                                        <button @click="openEdit(doc)"
                                            class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95">
                                            <icon icon="fa-solid fa-pencil" class="text-[10px]" />
                                        </button>
                                        <button @click="confirmDeleteAction(doc.id)"
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
                        Data {{ documents.from }} - {{ documents.to }} dari total {{ documents.total }}
                    </div>
                    <div class="flex flex-wrap justify-center gap-1.5">
                        <template v-for="(link, k) in documents.links" :key="k">
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
                            {{ isEditing ? 'Edit Dokumen' : 'Upload Dokumen' }}
                        </h3>
                        <p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1">
                            Manajemen File Library
                        </p>
                    </div>
                    <button @click="closeModal"
                        class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg">&times;</button>
                </div>

                <form @submit.prevent="submit" class="p-8 space-y-6">
                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Nama
                            Dokumen</label>
                        <input v-model="form.name" type="text" placeholder="Misal: Standar SPMI 2024"
                            class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
                            required />
                        <p v-if="form.errors.name" class="text-xs text-rose-500 font-bold ml-1">{{ form.errors.name }}
                        </p>
                    </div>

                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Tipe
                            Akses</label>
                        <TInputSelect v-model="form.type" :options="[
                            { value: 'public', label: 'Semua User (Public)' },
                            { value: 'auditor', label: 'Khusus Auditor & Admin' }
                        ]" options-value-key="value" options-label-key="label" :radius="5" class="w-full"
                            :class="form.errors.type ? 'ring-2 ring-rose-500 rounded-xl' : ''" />
                        <p v-if="form.errors.type" class="text-xs text-rose-500 font-bold ml-1">{{ form.errors.type }}
                        </p>
                    </div>

                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">File
                            Dokumen {{ isEditing ? '(Opsional)' : '' }}</label>
                        <input type="file" @input="form.file = $event.target.files[0]" :required="!isEditing"
                            class="block w-full text-[10px] text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-wider file:bg-slate-100 dark:file:bg-slate-800 file:text-slate-700 dark:file:text-slate-300 hover:file:bg-rose-50 dark:hover:file:bg-rose-900/30 hover:file:text-rose-600 cursor-pointer border border-slate-200 dark:border-slate-800 rounded-2xl p-2 bg-white dark:bg-slate-900/50" />
                        <p v-if="form.errors.file" class="text-xs text-rose-500 font-bold ml-1">{{ form.errors.file }}
                        </p>
                    </div>

                    <div v-if="form.progress"
                        class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div class="bg-rose-500 h-full transition-all duration-300 ease-out"
                            :style="{ width: form.progress.percentage + '%' }"></div>
                    </div>

                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <button type="submit" :disabled="form.processing"
                            class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50">
                            {{ buttonLabel }}
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
                        Tindakan ini akan menghapus dokumen library ini secara permanen. Lanjutkan penghapusan data ini?
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

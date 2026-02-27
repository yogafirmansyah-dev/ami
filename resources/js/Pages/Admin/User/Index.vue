<script setup>
import { ref, watch, computed } from 'vue';
import { router, useForm, Head, usePage, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';
import TModal from '@/Components/Modal/TModal.vue';
import TAlert from '@/Components/Alert/TAlert.vue';
import TInputSelect from '@/Components/Form/Inputs/TInputSelect.vue';

const props = defineProps({
    users: Object, // Paginated data
    filters: Object,
    roles: Array,
    prodis: Array,
    faculties: Array
});

/* --- LOGIKA PENCARIAN & PAGINATION --- */
const isSearching = ref(false);
const search = ref(props.filters.search);
const perPage = ref(props.filters.per_page || 10);

watch(search, debounce((value) => {
    isSearching.value = true;
    router.get(route('admin.users.index'), { search: value, per_page: perPage.value }, { preserveState: true, replace: true, onFinish: () => isSearching.value = false });
}, 500));

watch(perPage, (value) => {
    router.get(route('admin.users.index'), { search: search.value, per_page: value }, { preserveState: true, replace: true });
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

const filteredProdis = computed(() => {
    if (form.faculty_id) {
        return props.prodis.filter(p => p.faculty_id === form.faculty_id);
    }
    return props.prodis;
});

const filteredFaculties = computed(() => {
    if (form.prodi_id) {
        const selectedProdi = props.prodis.find(p => p.id === form.prodi_id);
        if (selectedProdi) {
            return props.faculties.filter(f => f.id === selectedProdi.faculty_id);
        }
    }
    return props.faculties;
});

const form = useForm({
    id: null,
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: '',
    prodi_id: null,
    faculty_id: null,
});

watch(() => form.faculty_id, (newVal) => {
    if (newVal && form.prodi_id) {
        const selectedProdi = props.prodis.find(p => p.id === form.prodi_id);
        if (selectedProdi && selectedProdi.faculty_id !== newVal) {
            form.prodi_id = null; // Reset prodi if it doesn't belong to the new faculty
        }
    }
});

watch(() => form.prodi_id, (newVal) => {
    if (newVal && form.faculty_id) {
        const selectedProdi = props.prodis.find(p => p.id === newVal);
        if (selectedProdi && selectedProdi.faculty_id !== form.faculty_id) {
            form.faculty_id = null; // Reset faculty if it doesn't match the new prodi
        }
    }
});

const openCreateModal = () => {
    editMode.value = false;
    form.reset();
    showModal.value = true;
};

const openEditModal = (user) => {
    editMode.value = true;
    form.id = user.id;
    form.name = user.name;
    form.email = user.email;
    form.role = user.role;
    form.prodi_id = user.prodi_id;
    form.faculty_id = user.faculty_id;
    form.password = '';
    form.password_confirmation = '';
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
};

const submit = () => {
    if (editMode.value) {
        form.put(route('admin.users.update', form.id), {
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
        form.post(route('admin.users.store'), {
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

const reset2FA = (id) => {
    if (confirm('Reset Two Factor Authentication untuk user ini?')) {
        router.post(route('admin.users.reset-2fa', id));
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
    importForm.post(route('settings-user.import'), {
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
        router.delete(route('admin.users.destroy', itemToDelete.value), {
            preserveScroll: true,
            onSuccess: () => {
                showDeleteModal.value = false;
                itemToDelete.value = null;
            }
        });
    }
};

const getUnitName = (user) => {
    if (user.role !== 'auditee') return '-';
    return user.prodi?.name || user.faculty?.name || 'Unit Belum Set';
};
</script>

<template>
    <AppLayout title="Manajemen User">
        <template #header>Manajemen Pengguna</template>
        <template #subHeader>Kelola hak akses Admin, Auditor, dan Auditee Unit Kerja</template>

        <template #action-buttons>
            <div class="flex gap-2">
                <a :href="route('settings-user.export')"
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
                    Tambah User
                </button>
            </div>
        </template>

        <!-- Peringatan Error Import -->
        <TAlert v-if="$page.props.flash.import_errors && $page.props.flash.import_errors.length > 0"
            type="error" design="filled" :closeable="true" class="mb-6">
            <template #icon>
                <icon icon="fa-solid fa-triangle-exclamation" class="text-lg mt-0.5" />
            </template>
            <div class="space-y-3">
                <p class="font-bold text-sm">Validasi Impor Gagal pada Beberapa Baris</p>
                <ul class="list-disc list-inside text-xs font-medium space-y-1 opacity-90 max-h-48 overflow-y-auto custom-scrollbar pr-2">
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
                        <input v-model="search" type="text" placeholder="Cari nama atau email..."
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
                                        Pengguna
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
                                <th @click="handleSort('role')"
                                    class="p-6 md:p-8 cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center gap-2">
                                        Role
                                        <div
                                            class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">
                                            <icon icon="fa-solid fa-caret-up"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'role' && filters.direction === 'asc' }"
                                                class="-mb-1" />
                                            <icon icon="fa-solid fa-caret-down"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'role' && filters.direction === 'desc' }" />
                                        </div>
                                    </div>
                                </th>
                                <th class="p-6 md:p-8">Unit Kerja</th>
                                <th @click="handleSort('two_factor_confirmed_at')"
                                    class="p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center justify-center gap-2">
                                        2FA
                                        <div
                                            class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">
                                            <icon icon="fa-solid fa-caret-up"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'two_factor_confirmed_at' && filters.direction === 'asc' }"
                                                class="-mb-1" />
                                            <icon icon="fa-solid fa-caret-down"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'two_factor_confirmed_at' && filters.direction === 'desc' }" />
                                        </div>
                                    </div>
                                </th>
                                <th class="p-6 md:p-8 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody v-if="isSearching" class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <!-- SKELETON LOADER -->
                            <tr v-for="i in 5" :key="'skeleton-' + i"
                                class="animate-pulse bg-white/30 dark:bg-slate-900/10">
                                <td class="p-6 md:p-8">
                                    <div class="h-6 w-8 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-md"></div>
                                </td>
                                <td class="p-6 md:p-8 pl-8">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 bg-slate-200 dark:bg-slate-700/50 rounded-full"></div>
                                        <div class="space-y-2">
                                            <div class="h-4 w-32 bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                            <div class="h-3 w-48 bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="h-6 w-20 bg-slate-200 dark:bg-slate-700/50 rounded-md"></div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="h-4 w-32 bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                </td>
                                <td class="p-6 md:p-8 flex justify-center">
                                    <div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-full"></div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="h-8 w-24 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-lg"></div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else-if="users.data.length === 0"
                            class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <!-- EMPTY STATE -->
                            <tr>
                                <td colspan="6" class="p-16 text-center">
                                    <div
                                        class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                                        <div
                                            class="w-24 h-24 mb-6 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner">
                                            <icon icon="fa-solid fa-users-slash"
                                                class="text-4xl text-slate-300 dark:text-slate-600" />
                                        </div>
                                        <h3
                                            class="text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">
                                            Belum Ada Pengguna</h3>
                                        <p class="text-xs max-w-sm text-center leading-relaxed font-bold">
                                            Sistem belum mencatat data pengguna apa pun atau pencarian Anda tidak
                                            memiliki
                                            kecocokan data.
                                        </p>
                                        <button v-if="search" @click="search = ''"
                                            class="mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm">
                                            Bersihkan Pencarian
                                        </button>
                                        <button v-else @click="openCreateModal"
                                            class="mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500">
                                            Tambahkan Pengguna Baru
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <tr v-for="item in users.data" :key="item.id"
                                class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300">
                                <td class="p-6 md:p-8 text-center">
                                    <span
                                        class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20">
                                        {{ users.from + users.data.indexOf(item) }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8 pl-8">
                                    <div class="flex items-center gap-4">
                                        <img :src="item.profile_photo_url"
                                            class="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-sm" />
                                        <div>
                                            <div class="font-bold text-slate-800 dark:text-slate-200 text-sm mb-0.5">
                                                {{ item.name }}</div>
                                            <div class="text-[10px] font-medium text-slate-400 tracking-tight">{{
                                                item.email }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <span :class="[
                                        'px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border shadow-sm',
                                        item.role === 'admin' ? 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 border-rose-100 dark:border-rose-500/20' :
                                            item.role === 'auditor' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 border-amber-100 dark:border-amber-500/20' :
                                                'bg-blue-50 dark:bg-blue-500/10 text-blue-600 border-blue-100 dark:border-blue-500/20'
                                    ]">
                                        {{ item.role }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8">
                                    <span class="text-xs font-bold text-slate-600 dark:text-slate-400">
                                        {{ getUnitName(item) }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8 text-center">
                                    <div v-if="item.two_factor_confirmed_at"
                                        class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 border border-emerald-100 dark:border-emerald-500/20"
                                        title="2FA Aktif">
                                        <icon icon="fa-solid fa-shield-halved" class="text-xs" />
                                    </div>
                                    <div v-else
                                        class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-300 border border-slate-100 dark:border-slate-700">
                                        <icon icon="fa-solid fa-lock-open" class="text-xs" />
                                    </div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="flex justify-center gap-2">
                                        <button v-if="item.two_factor_confirmed_at" @click="reset2FA(item.id)"
                                            class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-amber-200 active:scale-95"
                                            title="Reset 2FA">
                                            <icon icon="fa-solid fa-key" class="text-[10px]" />
                                        </button>
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
                        Data {{ users.from }} - {{ users.to }} dari total {{ users.total }}
                    </div>
                    <div class="flex flex-wrap justify-center gap-1.5">
                        <template v-for="(link, k) in users.links" :key="k">
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
                            {{ editMode ? 'Edit User' : 'User Baru' }}
                        </h3>
                        <p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1">
                            Manajemen Hak Akses
                        </p>
                    </div>
                    <button @click="closeModal"
                        class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg">&times;</button>
                </div>

                <form @submit.prevent="submit" class="p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Nama
                                Lengkap</label>
                            <input v-model="form.name" type="text" required
                                class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" />
                            <p v-if="form.errors.name" class="text-xs text-rose-500 font-bold ml-1">{{ form.errors.name
                            }}</p>
                        </div>
                        <div class="space-y-2">
                            <label
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Email</label>
                            <input v-model="form.email" type="email" required
                                class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" />
                            <p v-if="form.errors.email" class="text-xs text-rose-500 font-bold ml-1">{{
                                form.errors.email }}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Password</label>
                            <input v-model="form.password" type="password" :required="!editMode"
                                class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" />
                            <p v-if="editMode" class="text-[10px] text-slate-400 font-bold italic ml-1">* Kosongkan jika
                                tidak ganti</p>
                            <p v-if="form.errors.password" class="text-xs text-rose-500 font-bold ml-1">{{
                                form.errors.password }}</p>
                        </div>
                        <div class="space-y-2">
                            <label
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Konfirmasi
                                Password</label>
                            <input v-model="form.password_confirmation" type="password" :required="!editMode"
                                class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" />
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Role
                            / Hak Akses</label>
                        <TInputSelect v-model="form.role" :options="roles.map(r => ({ id: r, name: r.toUpperCase() }))"
                            options-value-key="id" options-label-key="name" place-holder="Pilih Role" :radius="5"
                            class="w-full" :class="form.errors.role ? 'ring-2 ring-rose-500 rounded-xl' : ''" />
                        <p v-if="form.errors.role" class="text-xs text-rose-500 font-bold ml-1">{{ form.errors.role }}
                        </p>
                    </div>

                    <transition enter-active-class="transition ease-out duration-300"
                        enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0">
                        <div v-if="form.role === 'auditee'"
                            class="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-4">
                            <div class="flex items-center gap-2">
                                <icon icon="fa-solid fa-building-user" class="text-rose-500" />
                                <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Penempatan
                                    Unit Kerja</span>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label class="text-[10px] font-bold text-slate-500 uppercase">Program Studi</label>
                                    <TInputSelect v-model="form.prodi_id" :options="filteredProdis"
                                        options-value-key="id" options-label-key="name"
                                        place-holder="Pilih Program Studi" :search="true"
                                        search-place-holder="Cari prodi..." :clear-button="true" :radius="5"
                                        class="w-full ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500" />
                                    <p v-if="form.errors.prodi_id" class="text-xs text-rose-500 font-bold ml-1">{{
                                        form.errors.prodi_id }}</p>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-[10px] font-bold text-slate-500 uppercase">Fakultas</label>
                                    <TInputSelect v-model="form.faculty_id" :options="filteredFaculties"
                                        options-value-key="id" options-label-key="name" place-holder="Pilih Fakultas"
                                        :search="true" search-place-holder="Cari fakultas..." :clear-button="true"
                                        :radius="5"
                                        class="w-full ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500" />
                                    <p v-if="form.errors.faculty_id" class="text-xs text-rose-500 font-bold ml-1">{{
                                        form.errors.faculty_id }}</p>
                                </div>
                            </div>
                            <p class="text-[10px] text-rose-500 font-bold italic leading-tight">* Pilih unit yang sesuai
                                dengan cakupan audit pengguna ini.</p>
                        </div>
                    </transition>

                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <button type="submit" :disabled="form.processing"
                            class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50">
                            {{ form.processing ? 'Menyimpan...' : (editMode ? 'Simpan Perubahan' : 'Buat User Baru') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <!-- Delete Confirmation Modal -->
        <TModal v-model="showDeleteModal" :radius="5" :closeButton="false">
            <template #title>
                Konfirmasi Hapus
            </template>
            <template #content>
                <div class="flex items-center gap-4 py-2">
                    <div
                        class="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-500/20 flex flex-shrink-0 items-center justify-center">
                        <icon icon="fa-solid fa-triangle-exclamation" class="text-rose-500 text-xl" />
                    </div>
                    <div>
                        <h4 class="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">Hapus Data Pengguna?
                        </h4>
                        <p class="text-xs text-slate-500 dark:text-slate-400">
                            Tindakan ini akan memindahkan pengguna ke dalam tong sampah (Soft Delete) dan dapat
                            menghilangkan aksesnya dari sistem. Lanjutkan?
                        </p>
                    </div>
                </div>
            </template>
            <template #footer-right>
                <div class="flex justify-end gap-3 rounded-b-3xl">
                    <button @click="showDeleteModal = false"
                        class="px-5 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        Batal
                    </button>
                    <button @click="executeDelete"
                        class="px-5 py-2.5 text-xs font-bold text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition-colors shadow-sm shadow-rose-500/30">
                        Ya, Hapus
                    </button>
                </div>
            </template>
        </TModal>
        <!-- Modal Import User -->
        <TModal v-model="showImportModal" :radius="5" :closeButton="false">
            <template #title>
                Import Pengguna Baru
            </template>
            <template #content>
                <form @submit.prevent="submitImport">
                    <div class="space-y-6">
                        <div
                            class="bg-blue-50 dark:bg-blue-500/10 p-4 rounded-xl border border-blue-100 dark:border-blue-500/20">
                            <h4 class="text-blue-800 dark:text-blue-300 font-bold text-sm mb-2 flex items-center">
                                <icon icon="fa-solid fa-circle-info" class="mr-2" />
                                Panduan Import
                            </h4>
                            <p class="text-xs text-blue-600 dark:text-blue-400 leading-relaxed">
                                Pastikan format kolom file Excel/CSV sesuai dengan template standar sistem AMI.
                                Anda wajib menyediakan kolom <b>Name, Email, dan Role (admin/auditor/auditee)</b>.
                            </p>
                            <a :href="route('settings-user.template')"
                                class="mt-3 inline-flex items-center text-xs font-bold text-blue-700 dark:text-blue-300 hover:underline">
                                <icon icon="fa-solid fa-download" class="mr-1.5" />
                                Unduh Template Excel
                            </a>
                        </div>

                        <div>
                            <label
                                class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-2">
                                File Excel / CSV
                            </label>
                            <input type="file" @change="handleFileUpload" accept=".xlsx, .xls, .csv" required
                                class="w-full text-sm text-slate-500 dark:text-slate-400
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-xl file:border-0
                                file:text-xs file:font-semibold
                                file:bg-blue-50 file:text-blue-700
                                hover:file:bg-blue-100
                                dark:file:bg-slate-800 dark:file:text-slate-300
                                transition-all cursor-pointer border border-slate-200 dark:border-slate-700 rounded-xl p-2" />
                            <div v-if="importForm.errors.file" class="text-rose-500 text-xs mt-1 font-medium">{{
                                importForm.errors.file }}</div>
                        </div>
                    </div>
                </form>
            </template>
            <template #footer-right>
                <div class="flex flex-col sm:flex-row justify-end items-center gap-3">
                    <button type="button" @click="closeImportModal"
                        class="w-full sm:w-auto px-6 py-3 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all h-11 flex items-center justify-center">
                        Batal
                    </button>
                    <button type="button" @click="submitImport" :disabled="importForm.processing"
                        class="w-full sm:w-auto px-6 py-3 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-br from-blue-500 to-blue-600 h-11 flex items-center justify-center">
                        <span v-if="importForm.processing" class="flex items-center">
                            <icon icon="fa-solid fa-circle-notch" class="animate-spin mr-2" />
                            Mengunggah...
                        </span>
                        <span v-else class="flex items-center">
                            <icon icon="fa-solid fa-upload" class="mr-2" />
                            Mulai Import
                        </span>
                    </button>
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

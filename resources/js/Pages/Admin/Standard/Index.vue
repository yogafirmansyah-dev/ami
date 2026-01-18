<script setup>
import { ref, watch } from 'vue';
import { router, useForm, Link, Head, usePage } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    standards: Object,
    filters: Object,
    targetTypes: Array, // [ {value: 'prodi', label: 'Program Studi'}, ... ]
});

/* --- LOGIKA PENCARIAN --- */
const search = ref(props.filters.search);
const perPage = ref(props.filters.per_page || 10);

watch(search, debounce((value) => {
    router.get(route('admin.standards.index'), { search: value, per_page: perPage.value }, {
        preserveState: true,
        replace: true
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

const deleteData = (id) => {
    if (confirm('Menghapus standar akan menghapus seluruh indikator di dalamnya. Lanjutkan?')) {
        router.delete(route('admin.standards.destroy', id));
    }
};
</script>

<template>
    <AppLayout title="Master Standar Mutu">
        <template #header>Master Standar Mutu</template>
        <template #subHeader>Kelola instrumen dan kriteria penilaian AMI</template>

        <template #action-buttons>
            <button @click="openCreateModal"
                class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10">
                <span
                    class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none">+</span>
                Tambah Standar
            </button>
        </template>

        <div class="space-y-6">
            <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div class="flex items-stretch gap-3 w-full max-w-2xl">
                    <div class="relative flex-1 group">
                        <span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <icon icon="fa-solid fa-magnifying-glass"
                                class="text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors" />
                        </span>
                        <input v-model="search" type="text" placeholder="Cari nama standar..."
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
                        <tbody class="divide-y divide-slate-50 dark:divide-slate-800/20">
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

                                        <button @click="deleteData(item.id)"
                                            class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95">
                                            <icon icon="fa-solid fa-trash" class="text-[10px]" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="standards.data.length === 0">
                                <td colspan="4" class="p-12 text-center">
                                    <div class="flex flex-col items-center justify-center opacity-50">
                                        <icon icon="fa-solid fa-folder-open"
                                            class="text-4xl text-slate-300 dark:text-slate-600 mb-4" />
                                        <p class="text-xs font-black text-slate-400 uppercase tracking-widest italic">
                                            Belum ada
                                            standar mutu yang dibuat</p>
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
                        <select name="target_type" v-model="form.target_type" required
                            class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm">
                            <option value="" disabled>Pilih Level Unit Kerja</option>
                            <option v-for="type, index in targetTypes" :key="index" :value="type.value">{{ type.label
                                }}</option>
                        </select>
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

<script setup>
import { ref, computed, watch } from 'vue';
import { useForm, router, Head, usePage, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    documents: Object,
    filters: Object // Adding filters prop
});

/* --- LOGIKA PENCARIAN & PAGINATION --- */
const search = ref(props.filters?.search || '');
const perPage = ref(props.filters?.per_page || 10);

watch(search, debounce((value) => {
    router.get(route('admin.library.index'), { search: value, per_page: perPage.value }, { preserveState: true, replace: true });
}, 500));

watch(perPage, (value) => {
    router.get(route('admin.library.index'), { search: search.value, per_page: value }, { preserveState: true, replace: true });
});

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

const deleteDoc = (id) => {
    if (confirm('Hapus dokumen ini secara permanen?')) {
        router.delete(route('admin.library.destroy', id));
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
                            <icon icon="fa-solid fa-magnifying-glass"
                                class="text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors" />
                        </span>
                        <input v-model="search" type="text" placeholder="Cari nama dokumen..."
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
                                <th class="p-6 md:p-8 pl-8">Nama Dokumen</th>
                                <th class="p-6 md:p-8 text-center">Tipe Akses</th>
                                <th class="p-6 md:p-8">Diupload Oleh</th>
                                <th class="p-6 md:p-8 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <tr v-for="doc in documents.data" :key="doc.id"
                                class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300">
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
                                        <button @click="deleteDoc(doc.id)"
                                            class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95">
                                            <icon icon="fa-solid fa-trash" class="text-[10px]" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="documents.data.length === 0">
                                <td colspan="4" class="p-12 text-center">
                                    <div class="flex flex-col items-center justify-center opacity-50">
                                        <icon icon="fa-solid fa-box-open"
                                            class="text-4xl text-slate-300 dark:text-slate-600 mb-4" />
                                        <p class="text-xs font-black text-slate-400 uppercase tracking-widest italic">
                                            Tidak ada dokumen tersedia</p>
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
                        <Link v-for="(link, k) in documents.links" :key="k" :href="link.url || '#'" :class="[
                            'px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all',
                            link.active
                                ? 'bg-slate-900 dark:bg-rose-600 text-white border-slate-900 dark:border-rose-600 shadow-lg shadow-slate-900/20'
                                : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:text-rose-500',
                            !link.url ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
                        ]" v-html="link.label" />
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
                        <select v-model="form.type"
                            class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm">
                            <option value="public">Semua User (Public)</option>
                            <option value="auditor">Khusus Auditor & Admin</option>
                        </select>
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

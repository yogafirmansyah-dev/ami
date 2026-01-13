<script setup>
import { ref, computed } from 'vue'; // PASTIKAN computed DIIMPORT
import { useForm, router } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';

const props = defineProps({ documents: Object });

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
    form.clearErrors(); // Bersihkan error lama
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
    // PERBAIKAN UTAMA: Reset transformer setiap kali submit dijalankan
    // Ini agar _method: PATCH tidak bocor ke request berikutnya
    form.transform((data) => data);

    if (isEditing.value) {
        // Mode Edit: Tambahkan _method PATCH untuk upload file
        form.transform((data) => ({
            ...data,
            _method: 'PATCH'
        })).post(route('admin.library.update', editId.value), {
            forceFormData: true, // Wajib untuk upload file
            onSuccess: () => closeModal(),
        });
    } else {
        // Mode Tambah: Gunakan POST murni (transformer sudah di-reset di atas)
        form.post(route('admin.library.store'), {
            forceFormData: true, // Wajib untuk upload file
            onSuccess: () => closeModal(),
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

        <div class="space-y-6">
            <div class="flex justify-between items-center">
                <h2 class="text-xs font-black uppercase tracking-[0.3em] text-slate-400 italic">Daftar Dokumen Pendukung
                </h2>
                <button @click="openCreate"
                    class="px-8 py-3 bg-slate-900 text-white rounded-[1.5rem] font-black text-[10px] uppercase shadow-2xl hover:bg-rose-600 transition-all active:scale-95">
                    Tambah Dokumen Baru
                </button>
            </div>

            <div
                class="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <table class="w-full text-left text-xs border-collapse">
                    <thead
                        class="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800">
                        <tr>
                            <th class="p-6">Nama Dokumen</th>
                            <th class="p-6 text-center">Tipe Akses</th>
                            <th class="p-6">Diupload Oleh</th>
                            <th class="p-6 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr v-for="doc in documents.data" :key="doc.id"
                            class="group hover:bg-slate-50/50 transition-colors">
                            <td class="p-6">
                                <div class="font-black text-slate-800 dark:text-white uppercase text-sm leading-none">{{
                                    doc.name }}</div>
                                <div class="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-tighter">Format:
                                    {{
                                        doc.extension }}</div>
                            </td>
                            <td class="p-6 text-center">
                                <span
                                    :class="['px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border shadow-sm',
                                        doc.type === 'public' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-600 border-rose-100']">
                                    {{ doc.type }}
                                </span>
                            </td>
                            <td class="p-6 text-slate-500 font-medium italic">{{ doc.uploader.name }}</td>
                            <td class="p-6">
                                <div class="flex justify-center gap-2">
                                    <a :href="route('library.download', doc.id)"
                                        class="p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-emerald-600 rounded-2xl transition-all shadow-sm">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                    <button @click="openEdit(doc)"
                                        class="p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-blue-600 rounded-2xl transition-all shadow-sm">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button @click="deleteDoc(doc.id)"
                                        class="p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 rounded-2xl transition-all shadow-sm">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" @click="closeModal"></div>
            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
                <div
                    class="p-8 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
                    <h3 class="text-xl font-black uppercase text-slate-800 dark:text-white tracking-tighter">{{
                        isEditing ?
                            'Edit Dokumen' : 'Dokumen Baru' }}</h3>
                    <button @click="closeModal" class="text-4xl text-slate-300 hover:text-rose-600">&times;</button>
                </div>

                <form @submit.prevent="submit" class="p-10 space-y-8">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nama
                            Dokumen</label>
                        <input v-model="form.name" type="text" placeholder="Misal: Standar SPMI 2024"
                            class="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none"
                            required />
                    </div>

                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tipe Akses
                            Dokumen</label>
                        <select v-model="form.type"
                            class="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none">
                            <option value="public">Semua User (Public)</option>
                            <option value="auditor">Khusus Auditor & Admin</option>
                        </select>
                    </div>

                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pilih Berkas {{
                            isEditing
                                ? '(Opsional)' : '' }}</label>
                        <input type="file" @input="form.file = $event.target.files[0]" :required="!isEditing"
                            class="w-full text-[10px] text-slate-400 file:mr-4 file:py-2.5 file:px-8 file:rounded-xl file:border-0 file:bg-slate-900 file:text-white file:font-black hover:file:bg-rose-600 transition-all cursor-pointer shadow-sm" />
                    </div>

                    <div v-if="form.progress" class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div class="bg-rose-600 h-full transition-all"
                            :style="{ width: form.progress.percentage + '%' }"></div>
                    </div>

                    <div class="flex justify-end gap-3 pt-4">
                        <button type="button" @click="closeModal"
                            class="px-8 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors">Batal</button>
                        <button type="submit" :disabled="form.processing"
                            class="px-12 py-3 bg-rose-600 text-white rounded-2xl font-black uppercase text-[10px] shadow-xl shadow-rose-500/30 hover:bg-rose-700 transition-all active:scale-95 disabled:opacity-50">
                            {{ buttonLabel }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import { ref, watch } from 'vue';
import { router, useForm, Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    prodis: Object,
    faculties: Array,
    filters: Object,
});

/* --- LOGIKA PENCARIAN --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.prodis.index'), { search: value }, {
        preserveState: true,
        replace: true
    });
}, 500));

/* --- LOGIKA MODAL & FORM --- */
const showModal = ref(false);
const editMode = ref(false);

const form = useForm({
    id: null,
    name: '',
    faculty_id: '',
});

const openCreateModal = () => {
    editMode.value = false;
    form.reset();
    showModal.value = true;
};

const openEditModal = (prodi) => {
    editMode.value = true;
    form.id = prodi.id;
    form.name = prodi.name;
    form.faculty_id = prodi.faculty_id;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
};

const submit = () => {
    if (editMode.value) {
        form.put(route('admin.prodis.update', form.id), {
            onSuccess: () => closeModal(),
        });
    } else {
        form.post(route('admin.prodis.store'), {
            onSuccess: () => closeModal(),
        });
    }
};

const deleteData = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        router.delete(route('admin.prodis.destroy', id));
    }
};
</script>

<template>
    <AppLayout title="Master Program Studi">
        <template #header>Master Program Studi</template>
        <template #subHeader>Manajemen data unit kerja tingkat Program Studi</template>

        <template #action-buttons>
            <button @click="openCreateModal"
                class="inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors">
                <span class="mr-2">+</span> Tambah Prodi
            </button>
        </template>

        <div class="space-y-4">
            <div class="flex justify-end">
                <div class="relative w-full max-w-sm">
                    <input v-model="search" type="text" placeholder="Cari nama prodi..."
                        class="w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" />
                </div>
            </div>

            <div
                class="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <table class="w-full text-sm text-left">
                    <thead
                        class="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 uppercase text-xs font-bold">
                        <tr>
                            <th class="p-4">Nama Program Studi</th>
                            <th class="p-4">Fakultas</th>
                            <th class="p-4 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                        <tr v-for="item in prodis.data" :key="item.id"
                            class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td class="p-4 font-medium text-slate-700 dark:text-slate-200">{{ item.name }}</td>
                            <td class="p-4">
                                <span
                                    class="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-xs font-semibold">
                                    {{ item.faculty?.name || 'N/A' }}
                                </span>
                            </td>
                            <td class="p-4">
                                <div class="flex justify-center gap-2">
                                    <button @click="openEditModal(item)"
                                        class="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button @click="deleteData(item.id)"
                                        class="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="prodis.data.length === 0">
                            <td colspan="3" class="p-8 text-center text-slate-500 italic">Data tidak ditemukan.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex items-center justify-between py-2">
                <div class="text-xs text-slate-500">
                    Menampilkan {{ prodis.from }} sampai {{ prodis.to }} dari {{ prodis.total }} data
                </div>
                <div class="flex gap-1">
                    <button v-for="link in prodis.links" :key="link.label" v-html="link.label"
                        @click="link.url ? $inertia.visit(link.url) : null" :disabled="!link.url"
                        class="px-3 py-1 text-xs rounded-md border transition-all" :class="[
                            link.active ? 'bg-rose-600 text-white border-rose-600' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50',
                            !link.url ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                        ]" />
                </div>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" @click="closeModal"></div>

            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <h3 class="text-lg font-bold text-slate-800 dark:text-white">
                        {{ editMode ? 'Edit Program Studi' : 'Tambah Program Studi' }}
                    </h3>
                    <button @click="closeModal" class="text-slate-400 hover:text-slate-600">&times;</button>
                </div>

                <form @submit.prevent="submit" class="p-6 space-y-5">
                    <div class="space-y-1.5">
                        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Nama Program
                            Studi</label>
                        <input v-model="form.name" type="text" required placeholder="Contoh: S1 Informatika"
                            class="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 transition-all"
                            :class="form.errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-rose-200 focus:border-rose-500'" />
                        <p v-if="form.errors.name" class="text-xs text-red-500 mt-1">{{ form.errors.name }}</p>
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Fakultas</label>
                        <select v-model="form.faculty_id" required
                            class="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 transition-all bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200">
                            <option value="" disabled>Pilih Fakultas</option>
                            <option v-for="fac in faculties" :key="fac.id" :value="fac.id">{{ fac.name }}</option>
                        </select>
                        <p v-if="form.errors.faculty_id" class="text-xs text-red-500 mt-1">{{ form.errors.faculty_id }}
                        </p>
                    </div>

                    <div class="flex justify-end gap-3 mt-8">
                        <button type="button" @click="closeModal"
                            class="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                            Batal
                        </button>
                        <button type="submit" :disabled="form.processing"
                            class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg shadow-sm disabled:opacity-50 transition-colors">
                            <span v-if="form.processing">Memproses...</span>
                            <span v-else>{{ editMode ? 'Simpan Perubahan' : 'Tambah Data' }}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import { ref, watch } from 'vue';
import { router, useForm, Link, Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    standards: Object,
    filters: Object,
    targetTypes: Array, // [ {value: 'prodi', label: 'Program Studi'}, ... ]
});

/* --- LOGIKA PENCARIAN --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.standards.index'), { search: value }, {
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
        });
    } else {
        form.post(route('admin.standards.store'), {
            onSuccess: () => closeModal(),
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
                class="inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-rose-500/20 transition-all active:scale-95">
                <span class="mr-2">+</span> Tambah Standar
            </button>
        </template>

        <div class="space-y-4">
            <div class="flex justify-end">
                <div class="relative w-full max-w-sm">
                    <input v-model="search" type="text" placeholder="Cari nama standar..."
                        class="w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" />
                </div>
            </div>

            <div
                class="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <table class="w-full text-sm text-left">
                    <thead
                        class="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 uppercase text-xs font-bold">
                        <tr>
                            <th class="p-4">Nama Standar Mutu</th>
                            <th class="p-4">Target Unit</th>
                            <th class="p-4 text-center">Jumlah Indikator</th>
                            <th class="p-4 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                        <tr v-for="item in standards.data" :key="item.id"
                            class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td class="p-4">
                                <div class="font-bold text-slate-700 dark:text-slate-200">{{ item.name }}</div>
                                <div class="text-[10px] text-slate-400 mt-1 uppercase tracking-tight">ID: #{{ item.id }}
                                </div>
                            </td>
                            <td class="p-4">
                                <span :class="[
                                    'px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border',
                                    item.target_type === 'prodi'
                                        ? 'bg-blue-50 text-blue-700 border-blue-100'
                                        : 'bg-purple-50 text-purple-700 border-purple-100'
                                ]">
                                    {{ item.target_type }}
                                </span>
                            </td>
                            <td class="p-4 text-center">
                                <div
                                    class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 font-bold text-slate-600 dark:text-slate-400">
                                    {{ item.indicators_count || 0 }}
                                </div>
                            </td>
                            <td class="p-4">
                                <div class="flex justify-center gap-2">
                                    <Link :href="route('admin.standards.indicators.index', item.id)"
                                        class="inline-flex items-center px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-100 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1.5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                        </svg>
                                        Indikator
                                    </Link>

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
                        <tr v-if="standards.data.length === 0">
                            <td colspan="4" class="p-10 text-center text-slate-400 italic">Belum ada standar mutu yang
                                dibuat.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex items-center justify-between py-2">
                <div class="text-xs text-slate-500 italic">
                    Data {{ standards.from }} - {{ standards.to }} dari total {{ standards.total }}
                </div>
                <div class="flex gap-1">
                    <button v-for="link in standards.links" :key="link.label" v-html="link.label"
                        @click="link.url ? $inertia.visit(link.url) : null" :disabled="!link.url"
                        class="px-3 py-1 text-xs rounded-md border transition-all" :class="[
                            link.active ? 'bg-rose-600 text-white border-rose-600 shadow-md' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50',
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
                        {{ editMode ? 'Edit Standar Mutu' : 'Tambah Standar Mutu' }}
                    </h3>
                    <button @click="closeModal"
                        class="text-slate-400 hover:text-slate-600 text-2xl transition-colors">&times;</button>
                </div>

                <form @submit.prevent="submit" class="p-6 space-y-5">
                    <div class="space-y-1.5">
                        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Nama Standar
                            Mutu</label>
                        <input v-model="form.name" type="text" required
                            placeholder="Contoh: Standar Pendidikan Tinggi 2026"
                            class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 transition-all bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200" />
                        <p v-if="form.errors.name" class="text-xs text-red-500 mt-1">{{ form.errors.name }}</p>
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Target Audit
                            (Level)</label>
                        <select v-model="form.target_type" required
                            class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 transition-all bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200">
                            <option value="" disabled>Pilih Level Unit Kerja</option>
                            <option v-for="type, index in targetTypes" :key="index" :value="type.value">{{ type.label
                                }}</option>
                        </select>
                        <p v-if="form.errors.target_type" class="text-xs text-red-500 mt-1">{{ form.errors.target_type
                            }}</p>
                        <p class="text-[10px] text-slate-500 italic leading-tight mt-2">
                            * Penting: Standar yang diset untuk 'prodi' tidak bisa digunakan untuk audit tingkat
                            'faculty', dan
                            sebaliknya.
                        </p>
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Deskripsi</label>
                        <textarea v-model="form.description" type="text" required
                            placeholder="Contoh: Standar Pendidikan Tinggi 2026"
                            class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 transition-all bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200" />
                        <p v-if="form.errors.description" class="text-xs text-red-500 mt-1">{{ form.errors.description
                        }}</p>
                    </div>

                    <div class="flex justify-end gap-3 mt-8">
                        <button type="button" @click="closeModal"
                            class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                            Batal
                        </button>
                        <button type="submit" :disabled="form.processing"
                            class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-sm disabled:opacity-50 transition-colors">
                            <span v-if="form.processing">Memproses...</span>
                            <span v-else>{{ editMode ? 'Simpan Perubahan' : 'Buat Standar' }}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>

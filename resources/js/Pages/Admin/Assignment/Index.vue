<script setup>
import { ref, watch, computed } from 'vue';
import { router, useForm, Link, Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    assignments: Object,
    periods: Array,
    standards: Array,
    auditors: Array,
    prodis: Array,
    faculties: Array,
    filters: Object
});

/* --- LOGIKA PENCARIAN & FILTER --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.assignments.index'), { search: value }, { preserveState: true, replace: true });
}, 500));

/* --- LOGIKA MODAL & FORM --- */
const showModal = ref(false);

const form = useForm({
    period_id: '',
    master_standard_id: '',
    auditor_id: '',
    assignable_type: 'prodi', // prodi atau faculty
    assignable_id: '',
});

const submit = () => {
    form.post(route('admin.assignments.store'), {
        onSuccess: () => {
            showModal.value = false;
            form.reset();
        },
    });
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
};

/* --- HELPER: HITUNG PROGRESS --- */
const getProgress = (item) => {
    if (!item.indicators_count) return 0;
    const percentage = (item.scored_indicators_count / item.indicators_count) * 100;
    return Math.round(percentage);
};

const deleteData = (id) => {
    if (confirm('Menghapus penugasan akan menghapus seluruh data snapshot indikator di dalamnya. Lanjutkan?')) {
        router.delete(route('admin.assignments.destroy', id));
    }
};
</script>

<template>
    <AppLayout title="Penugasan Audit">
        <template #header>Penugasan Audit</template>
        <template #subHeader>Manajemen dan monitoring progres audit seluruh unit kerja</template>

        <template #action-buttons>
            <button @click="showModal = true"
                class="inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-rose-500/20 transition-all active:scale-95">
                + Buat Penugasan Baru
            </button>
        </template>

        <div class="space-y-4">
            <div class="flex justify-end">
                <div class="relative w-full max-w-sm">
                    <input v-model="search" type="text" placeholder="Cari unit atau auditor..."
                        class="w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 outline-none transition-all" />
                </div>
            </div>

            <div
                class="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <table class="w-full text-sm text-left">
                    <thead
                        class="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 uppercase text-[11px] font-bold tracking-wider">
                        <tr>
                            <th class="p-4">Unit Kerja</th>
                            <th class="p-4">Periode & Standar</th>
                            <th class="p-4">Auditor</th>
                            <th class="p-4 text-center">Tahapan / Progress</th>
                            <th class="p-4 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                        <tr v-for="item in assignments.data" :key="item.id"
                            class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td class="p-4">
                                <div class="font-bold text-slate-800 dark:text-white leading-tight">{{
                                    item.assignable?.name }}
                                </div>
                                <span :class="[
                                    'text-[9px] px-1.5 py-0.5 rounded font-bold uppercase mt-1 inline-block border',
                                    item.assignable_type.includes('Prodi')
                                        ? 'bg-blue-50 text-blue-600 border-blue-100'
                                        : 'bg-purple-50 text-purple-600 border-purple-100'
                                ]">
                                    {{ item.assignable_type.includes('Prodi') ? 'Program Studi' : 'Fakultas' }}
                                </span>
                            </td>

                            <td class="p-4">
                                <div class="text-xs font-semibold text-slate-700 dark:text-slate-200">{{
                                    item.period?.name }}
                                </div>
                                <div class="text-[10px] text-slate-400 mt-0.5">{{ item.standard?.name }}</div>
                            </td>

                            <td class="p-4">
                                <div class="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                    <div
                                        class="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <span class="text-xs font-medium">{{ item.auditor?.name }}</span>
                                </div>
                            </td>

                            <td class="p-4">
                                <div class="max-w-[150px] mx-auto">
                                    <div
                                        class="flex justify-between items-center text-[9px] font-black uppercase mb-1.5">
                                        <span class="text-rose-600 tracking-tighter">{{ item.current_stage }}</span>
                                        <span class="text-slate-600">{{ getProgress(item) }}%</span>
                                    </div>
                                    <div
                                        class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                        <div class="bg-rose-500 h-full rounded-full transition-all duration-700"
                                            :style="{ width: getProgress(item) + '%' }"></div>
                                    </div>
                                </div>
                            </td>

                            <td class="p-4">
                                <div class="flex justify-center gap-2">
                                    <Link :href="route('admin.assignments.show', item.id)"
                                        class="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                                        title="Buka Detail">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </Link>
                                    <button @click="deleteData(item.id)"
                                        class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Hapus">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="assignments.data.length === 0">
                            <td colspan="5" class="p-12 text-center text-slate-400 italic font-medium">Belum ada
                                penugasan audit
                                yang dibuat.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex items-center justify-between py-2">
                <div class="text-xs text-slate-500">
                    Menampilkan {{ assignments.from }} - {{ assignments.to }} dari {{ assignments.total }} penugasan
                </div>
                <div class="flex gap-1">
                    <button v-for="link in assignments.links" :key="link.label" v-html="link.label"
                        @click="link.url ? $inertia.visit(link.url) : null" :disabled="!link.url"
                        class="px-3 py-1 text-xs rounded-md border transition-all" :class="[
                            link.active ? 'bg-rose-600 text-white border-rose-600' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50',
                            !link.url ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                        ]" />
                </div>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" @click="closeModal"></div>

            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <h3 class="text-lg font-bold text-slate-800 dark:text-white">Buat Penugasan Audit Baru</h3>
                    <button @click="closeModal"
                        class="text-slate-400 hover:text-slate-600 text-2xl transition-colors">&times;</button>
                </div>

                <form @submit.prevent="submit" class="p-6 space-y-5">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="text-xs font-bold text-slate-500 uppercase">Periode AMI</label>
                            <select v-model="form.period_id"
                                class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-sm"
                                required>
                                <option value="" disabled>Pilih Periode</option>
                                <option v-for="p in periods" :key="p.id" :value="p.id">{{ p.name }}</option>
                            </select>
                            <p v-if="form.errors.period_id" class="text-xs text-red-500">{{ form.errors.period_id }}</p>
                        </div>
                        <div class="space-y-1.5">
                            <label class="text-xs font-bold text-slate-500 uppercase">Standar Mutu</label>
                            <select v-model="form.master_standard_id"
                                class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-sm"
                                required>
                                <option value="" disabled>Pilih Instrumen</option>
                                <option v-for="s in standards" :key="s.id" :value="s.id">{{ s.name }}</option>
                            </select>
                        </div>
                    </div>

                    <div
                        class="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4">
                        <div class="space-y-1.5">
                            <label class="text-xs font-bold text-slate-500 uppercase tracking-tight">Tipe Unit
                                Target</label>
                            <div class="flex gap-2">
                                <button type="button" @click="form.assignable_type = 'prodi'"
                                    :class="form.assignable_type === 'prodi' ? 'bg-rose-600 text-white shadow-rose-200' : 'bg-white text-slate-600 border border-slate-200'"
                                    class="flex-1 py-2 text-xs font-bold rounded-lg transition-all shadow-sm">
                                    Program Studi
                                </button>
                                <button type="button" @click="form.assignable_type = 'faculty'"
                                    :class="form.assignable_type === 'faculty' ? 'bg-rose-600 text-white shadow-rose-200' : 'bg-white text-slate-600 border border-slate-200'"
                                    class="flex-1 py-2 text-xs font-bold rounded-lg transition-all shadow-sm">
                                    Fakultas
                                </button>
                            </div>
                        </div>

                        <div class="space-y-1.5">
                            <label class="text-xs font-bold text-slate-500 uppercase tracking-tight">Pilih Unit
                                Kerja</label>
                            <select v-model="form.assignable_id"
                                class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-sm"
                                required>
                                <template v-if="form.assignable_type === 'prodi'">
                                    <option value="" disabled>Pilih Program Studi</option>
                                    <option v-for="item in prodis" :key="item.id" :value="item.id">{{ item.name }}
                                    </option>
                                </template>
                                <template v-else>
                                    <option value="" disabled>Pilih Fakultas</option>
                                    <option v-for="item in faculties" :key="item.id" :value="item.id">{{ item.name }}
                                    </option>
                                </template>
                            </select>
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-xs font-bold text-slate-500 uppercase">Auditor Penilai</label>
                        <select v-model="form.auditor_id"
                            class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-sm"
                            required>
                            <option value="" disabled>Pilih Auditor</option>
                            <option v-for="a in auditors" :key="a.id" :value="a.id">{{ a.name }}</option>
                        </select>
                    </div>

                    <div class="flex justify-end gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <button type="button" @click="closeModal"
                            class="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Batal</button>
                        <button type="submit" :disabled="form.processing"
                            class="px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-black uppercase rounded-lg shadow-lg shadow-rose-500/20 disabled:opacity-50 transition-all active:scale-95">
                            <span v-if="form.processing">Memproses...</span>
                            <span v-else>Buat & Snapshot Indikator</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>

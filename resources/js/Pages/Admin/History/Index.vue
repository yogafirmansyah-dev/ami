<script setup>
import { ref, watch } from 'vue';
import { router, Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    histories: Object, // Paginated data
    filters: Object,
});

/* --- SEARCH & FILTER LOGIC --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.histories.index'), { search: value }, { preserveState: true, replace: true });
}, 500));

/* --- MODAL DETAIL LOGIC --- */
const showModal = ref(false);
const selectedLog = ref(null);

const openDetail = (log) => {
    selectedLog.value = log;
    showModal.value = true;
};

/* --- HELPERS --- */
const formatDate = (dateString) => {
    return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    }).format(new Date(dateString));
};

const getActionBadge = (action) => {
    if (action.includes('create')) return 'bg-emerald-50 text-emerald-700 border-emerald-100';
    if (action.includes('delete')) return 'bg-rose-50 text-rose-700 border-rose-100';
    return 'bg-blue-50 text-blue-700 border-blue-100'; // Update/Edit
};

const formatEntityName = (type) => {
    if (!type) return '-';
    // Menghapus namespace 'App\Models\' agar lebih bersih
    return type.replace('App\\Models\\', '');
};
</script>

<template>
    <AppLayout title="Audit Trail">
        <template #header>Audit Trail & History</template>
        <template #subHeader>Log aktivitas sistem untuk melacak setiap perubahan data Master dan Transaksi</template>

        <div class="space-y-4">
            <div class="flex justify-between items-center gap-4">
                <div class="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Menampilkan {{ histories.total }} Aktivitas Terakhir
                </div>
                <div class="relative w-full max-w-sm">
                    <input v-model="search" type="text" placeholder="Cari aktor, aksi, atau entitas..."
                        class="w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 outline-none transition-all text-sm" />
                </div>
            </div>

            <div
                class="overflow-x-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                <table class="w-full text-sm text-left">
                    <thead
                        class="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[10px] font-black tracking-widest border-b dark:border-slate-800">
                        <tr>
                            <th class="p-4">Waktu</th>
                            <th class="p-4">Aktor (User)</th>
                            <th class="p-4">Aksi</th>
                            <th class="p-4">Entitas Terkait</th>
                            <th class="p-4 text-center">Detail</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr v-for="log in histories.data" :key="log.id" class="hover:bg-slate-50/50 transition-colors">
                            <td class="p-4 text-[11px] font-bold text-slate-500 whitespace-nowrap">
                                {{ formatDate(log.created_at) }}
                            </td>
                            <td class="p-4">
                                <div class="flex items-center gap-2">
                                    <div
                                        class="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px] text-slate-400 border">
                                        {{ log.user?.name?.substring(0, 2).toUpperCase() }}
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="font-bold text-slate-700 dark:text-slate-200 leading-tight">{{
                                            log.user?.name }}</span>
                                        <span class="text-[9px] text-slate-400 uppercase tracking-tighter">{{
                                            log.user?.role
                                        }}</span>
                                    </div>
                                </div>
                            </td>
                            <td class="p-4">
                                <span
                                    :class="['px-2 py-0.5 rounded text-[9px] font-black uppercase border', getActionBadge(log.action)]">
                                    {{ log.action.replace('_', ' ') }}
                                </span>
                            </td>
                            <td class="p-4">
                                <div class="text-xs font-bold text-slate-600 dark:text-slate-400">{{
                                    formatEntityName(log.historable_type) }}</div>
                                <div class="text-[10px] text-slate-400 tracking-tighter">ID: #{{ log.historable_id }} |
                                    Stage:
                                    {{ log.stage }}</div>
                            </td>
                            <td class="p-4 text-center">
                                <button @click="openDetail(log)"
                                    class="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr v-if="histories.data.length === 0">
                            <td colspan="5" class="p-12 text-center text-slate-400 italic font-medium">Belum ada
                                aktivitas
                                terekam.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex items-center justify-between py-2">
                <div class="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Data {{ histories.from }} - {{ histories.to }} dari {{ histories.total }}
                </div>
                <div class="flex gap-1">
                    <button v-for="link in histories.links" :key="link.label" v-html="link.label"
                        @click="link.url ? $inertia.visit(link.url) : null"
                        class="px-3 py-1 text-[10px] font-bold rounded-lg border transition-all"
                        :class="[link.active ? 'bg-rose-600 text-white border-rose-600 shadow-lg shadow-rose-200' : 'bg-white border-slate-200 text-slate-400 hover:border-rose-500', !link.url ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer']" />
                </div>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" @click="showModal = false">
            </div>

            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
                <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <div>
                        <h3 class="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight">Detail
                            Perubahan
                            Data</h3>
                        <p class="text-[10px] text-slate-400 font-bold uppercase">{{ selectedLog.action }} - {{
                            formatDate(selectedLog.created_at) }}</p>
                    </div>
                    <button @click="showModal = false"
                        class="text-3xl text-slate-300 hover:text-rose-500">&times;</button>
                </div>

                <div class="p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 dark:bg-slate-900">
                    <div class="space-y-4">
                        <div class="flex items-center gap-2 text-rose-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 class="text-xs font-black uppercase tracking-widest">Data Sebelumnya (Old)</h4>
                        </div>
                        <div
                            class="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 font-mono text-[11px] overflow-x-auto shadow-sm">
                            <pre v-if="selectedLog.old_values" class="text-slate-600 dark:text-slate-400">{{
                                JSON.stringify(selectedLog.old_values, null, 2) }}</pre>
                            <div v-else class="text-slate-400 italic">Tidak ada data sebelumnya (Record Baru).</div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div class="flex items-center gap-2 text-emerald-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 class="text-xs font-black uppercase tracking-widest">Data Sesudahnya (New)</h4>
                        </div>
                        <div
                            class="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-emerald-100 dark:border-emerald-900/30 font-mono text-[11px] overflow-x-auto shadow-sm ring-4 ring-emerald-500/5">
                            <pre v-if="selectedLog.new_values" class="text-slate-700 dark:text-slate-200 font-bold">{{
                                JSON.stringify(selectedLog.new_values, null, 2) }}</pre>
                            <div v-else class="text-slate-400 italic text-rose-500 font-bold">Data Telah Dihapus
                                Permanen.</div>
                        </div>
                    </div>
                </div>

                <div class="p-6 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 text-right">
                    <button @click="showModal = false"
                        class="px-8 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-black uppercase rounded-xl transition-all">Tutup
                        Detail</button>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

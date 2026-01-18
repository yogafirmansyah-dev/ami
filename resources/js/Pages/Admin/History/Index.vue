<script setup>
import { ref, watch } from 'vue';
import { router, Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    histories: Object, // Paginated data
    filters: Object,
});

/* --- SEARCH & FILTER LOGIC --- */
const search = ref(props.filters.search);
const perPage = ref(props.filters.per_page || 10);

watch(search, debounce((value) => {
    router.get(route('admin.history.index'), { search: value, per_page: perPage.value }, { preserveState: true, replace: true });
}, 500));

watch(perPage, (value) => {
    router.get(route('admin.history.index'), { search: search.value, per_page: value }, { preserveState: true, replace: true });
});

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
    if (action.includes('create')) return 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20';
    if (action.includes('delete')) return 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 border-rose-100 dark:border-rose-500/20';
    return 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 border-blue-100 dark:border-blue-500/20'; // Update/Edit
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

        <div class="space-y-6">
            <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
                <!-- Search & PerPage -->
                <div class="flex items-stretch gap-3 w-full max-w-2xl">
                    <div class="relative flex-1 group">
                        <span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <icon icon="fa-solid fa-magnifying-glass"
                                class="text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors" />
                        </span>
                        <input v-model="search" type="text" placeholder="Cari aktor, aksi, atau entitas..."
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

                <!-- Total Count Badge -->
                <div
                    class="px-6 py-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Total Aktivitas: <span class="text-rose-500 ml-1">{{ histories.total }}</span>
                    </span>
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
                                <th class="p-6 md:p-8 pl-8">Waktu</th>
                                <th class="p-6 md:p-8">Aktor (User)</th>
                                <th class="p-6 md:p-8">Aksi</th>
                                <th class="p-6 md:p-8">Entitas Terkait</th>
                                <th class="p-6 md:p-8 text-center">Detail</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <tr v-for="log in histories.data" :key="log.id"
                                class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300">
                                <td class="p-6 md:p-8 text-center">
                                    <span
                                        class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20">
                                        {{ histories.from + histories.data.indexOf(log) }}
                                    </span>
                                </td>
                                <td
                                    class="p-6 md:p-8 pl-8 text-[10px] font-bold text-slate-400 font-mono whitespace-nowrap">
                                    {{ formatDate(log.created_at) }}
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-[10px] text-slate-400 border border-slate-200 dark:border-slate-700">
                                            {{ log.user?.name?.substring(0, 2).toUpperCase() || '?' }}
                                        </div>
                                        <div class="flex flex-col">
                                            <span
                                                class="font-bold text-slate-700 dark:text-slate-200 text-xs leading-tight">{{
                                                    log.user?.name || 'Unknown' }}</span>
                                            <span class="text-[9px] text-slate-400 uppercase tracking-tighter">{{
                                                log.user?.role || '-'
                                            }}</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <span
                                        :class="['px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border shadow-sm', getActionBadge(log.action)]">
                                        {{ log.action.replace('_', ' ') }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="text-xs font-bold text-slate-600 dark:text-slate-400">{{
                                        formatEntityName(log.historable_type) }}</div>
                                    <div class="text-[9px] text-slate-400 tracking-tighter mt-0.5">
                                        ID: <span class="font-mono text-rose-500">#{{ log.historable_id }}</span>
                                        <span v-if="log.stage" class="mx-1">•</span>
                                        <span v-if="log.stage">{{ log.stage }}</span>
                                    </div>
                                </td>
                                <td class="flex items-center justify-center p-6 md:p-8 text-center">
                                    <button @click="openDetail(log)"
                                        class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95">
                                        <icon icon="fa-solid fa-eye" class="text-[10px]" />
                                    </button>
                                </td>
                            </tr>
                            <tr v-if="histories.data.length === 0">
                                <td colspan="5" class="p-12 text-center">
                                    <div class="flex flex-col items-center justify-center opacity-50">
                                        <icon icon="fa-solid fa-clock-rotate-left"
                                            class="text-4xl text-slate-300 dark:text-slate-600 mb-4" />
                                        <p class="text-xs font-black text-slate-400 uppercase tracking-widest italic">
                                            Belum ada log aktivitas terekam</p>
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
                        Data {{ histories.from }} - {{ histories.to }} dari total {{ histories.total }}
                    </div>
                    <div class="flex flex-wrap justify-center gap-1.5">
                        <template v-for="(link, k) in histories.links" :key="k">
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
            <div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" @click="showModal = false">
            </div>

            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[85vh] border border-white/10">
                <div
                    class="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                    <div>
                        <h3 class="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
                            Detail
                            Perubahan Data</h3>
                        <p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1">
                            {{ selectedLog.action }} • {{ formatDate(selectedLog.created_at) }}
                        </p>
                    </div>
                    <button @click="showModal = false"
                        class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg">&times;</button>
                </div>

                <div
                    class="p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-slate-900 custom-scrollbar">
                    <!-- OLD DATA -->
                    <div class="space-y-4">
                        <div class="flex items-center gap-2 text-rose-600 dark:text-rose-500">
                            <icon icon="fa-solid fa-file-circle-minus" />
                            <h4 class="text-[10px] font-black uppercase tracking-widest">Data Sebelumnya (Old)</h4>
                        </div>
                        <div
                            class="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 font-mono text-[11px] overflow-x-auto shadow-inner h-full max-h-[400px] custom-scrollbar">
                            <pre v-if="selectedLog.old_values" class="text-slate-600 dark:text-slate-400">{{
                                JSON.stringify(selectedLog.old_values, null, 2) }}</pre>
                            <div v-else
                                class="text-slate-400 italic text-[10px] font-bold uppercase tracking-wider py-10 text-center">
                                Tidak ada data sebelumnya (Record Baru)</div>
                        </div>
                    </div>

                    <!-- NEW DATA -->
                    <div class="space-y-4">
                        <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-500">
                            <icon icon="fa-solid fa-file-circle-plus" />
                            <h4 class="text-[10px] font-black uppercase tracking-widest">Data Sesudahnya (New)</h4>
                        </div>
                        <div
                            class="bg-emerald-50/30 dark:bg-emerald-900/10 rounded-2xl p-4 border border-emerald-100 dark:border-emerald-500/20 font-mono text-[11px] overflow-x-auto shadow-inner h-full max-h-[400px] custom-scrollbar ring-2 ring-emerald-500/10">
                            <pre v-if="selectedLog.new_values" class="text-slate-700 dark:text-slate-200 font-bold">{{
                                JSON.stringify(selectedLog.new_values, null, 2) }}</pre>
                            <div v-else
                                class="text-rose-500 italic text-[10px] font-bold uppercase tracking-wider py-10 text-center">
                                Data Telah Dihapus Permanen</div>
                        </div>
                    </div>
                </div>

                <div
                    class="p-6 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 text-right">
                    <button @click="showModal = false"
                        class="px-8 py-3 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                        Tutup Detail
                    </button>
                </div>
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

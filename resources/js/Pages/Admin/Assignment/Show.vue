<script setup>
import { ref, watch, computed } from 'vue';
import { router, Link, Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';
import axios from 'axios';

const props = defineProps({
    assignment: Object,
    groupedDocuments: Array,
    indicators: Object,
    filters: Object
});

/* --- SEARCH LOGIC --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.assignments.show', props.assignment.id), { search: value }, {
        preserveState: true,
        replace: true
    });
}, 500));

/* --- LOGIKA MODAL RIWAYAT --- */
const showHistoryModal = ref(false);
const activeHistory = ref([]);
const loadingHistory = ref(false);
const activeIndicatorCode = ref('');

const openHistory = async (item) => {
    activeIndicatorCode.value = item.snapshot_code;
    loadingHistory.value = true;
    showHistoryModal.value = true;
    try {
        const response = await axios.get(route('admin.indicators.history', item.id));
        activeHistory.value = response.data;
    } catch (error) {
        console.error("Gagal memuat riwayat");
    } finally {
        loadingHistory.value = false;
    }
};

const closeHistoryModal = () => {
    showHistoryModal.value = false;
    activeHistory.value = [];
};

/* --- HELPER WARNA SKOR --- */
const getScoreClass = (score) => {
    if (!score) return 'bg-slate-100 text-slate-400 dark:bg-slate-800';
    if (score >= 3) return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
    if (score === 2) return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
    return 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400';
};
</script>

<template>
    <AppLayout :title="'Detail Audit: ' + assignment.target_name">
        <template #header>Detail Penugasan Audit</template>
        <template #subHeader>
            Monitoring instrumen standar untuk unit <span class="font-bold text-rose-600">{{ assignment.target_name
                }}</span>
        </template>

        <template #action-buttons>
            <div class="flex gap-2">
                <a :href="route('shared.export.pdf', assignment.id)" target="_blank"
                    class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Cetak Laporan
                </a>
                <Link :href="route('admin.assignments.index')"
                    class="inline-flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-xl transition-all">
                    Kembali
                </Link>
            </div>
        </template>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div class="lg:col-span-1 space-y-6">
                <div
                    class="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h3
                        class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-50 dark:border-slate-800 pb-3">
                        Status Audit</h3>
                    <div class="space-y-5">
                        <div class="flex flex-col">
                            <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Auditor
                                Ketua</label>
                            <span class="font-bold text-slate-700 dark:text-slate-200">{{ assignment.auditor?.name ||
                                'N/A'
                                }}</span>
                        </div>
                        <div class="flex flex-col">
                            <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Tahap
                                Berjalan</label>
                            <div class="mt-1">
                                <span
                                    class="px-2 py-0.5 rounded-lg bg-rose-50 text-rose-600 border border-rose-100 font-black text-[9px] uppercase tracking-tighter">
                                    {{ assignment.current_stage?.replace('_', ' ') }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h3
                        class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-50 dark:border-slate-800 pb-3">
                        Arsip Dokumen</h3>
                    <div class="space-y-8">
                        <div v-for="group in groupedDocuments" :key="group.type">
                            <p
                                class="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest mb-3 flex items-center">
                                <span class="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span>
                                {{ group.label }}
                            </p>
                            <div v-if="group.files.length"
                                class="space-y-2 pl-3 border-l-2 border-slate-50 dark:border-slate-800">
                                <div v-for="doc in group.files" :key="doc.id"
                                    class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl group transition-all hover:ring-2 hover:ring-rose-500/20">
                                    <div class="flex flex-col min-w-0">
                                        <span
                                            class="text-[10px] font-bold text-slate-600 dark:text-slate-300 truncate pr-2">{{
                                                doc.original_name || 'Dokumen' }}</span>
                                        <span class="text-[8px] text-slate-400 font-bold uppercase tracking-tighter">{{
                                            new
                                                Date(doc.created_at).toLocaleDateString() }}</span>
                                    </div>
                                    <a :href="'/storage/' + doc.path" target="_blank"
                                        class="p-1.5 bg-white dark:bg-slate-700 rounded-lg text-rose-500 shadow-sm hover:bg-rose-500 hover:text-white transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                                d="M12 4v16m8-8H4" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div v-else class="pl-3 py-2 text-[10px] text-slate-300 italic">Belum diunggah.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-3 space-y-4">
                <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h3 class="font-black text-slate-800 dark:text-white tracking-tight uppercase italic text-sm">
                        Instrumen
                        Monitoring AMI</h3>
                    <div class="relative w-full sm:w-64">
                        <input v-model="search" type="text" placeholder="Cari kode/indikator..."
                            class="w-full pl-3 pr-10 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all" />
                    </div>
                </div>

                <div
                    class="bg-white dark:bg-slate-900 rounded-[1rem] shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs border-collapse min-w-[1000px]">
                            <thead
                                class="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800">
                                <tr>
                                    <th class="p-5 w-20">Kode</th>
                                    <th class="p-5">Kriteria & Bukti</th>
                                    <th class="p-5 text-center w-32">Skor Akhir</th>
                                    <th class="p-5 text-center w-24">Aksi</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr v-for="item in indicators.data" :key="item.id"
                                    class="align-top hover:bg-slate-50/30 transition-colors">
                                    <td class="p-5 font-mono font-black text-rose-600 tracking-tighter">{{
                                        item.snapshot_code }}
                                    </td>
                                    <td class="p-5">
                                        <p
                                            class="text-xs font-bold text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                                            {{
                                                item.snapshot_requirement }}</p>
                                        <div class="flex flex-wrap gap-2">
                                            <a v-if="item.evidence_url" :href="item.evidence_url" target="_blank"
                                                class="inline-flex items-center text-[9px] font-black bg-blue-50 text-blue-600 px-2.5 py-1 rounded-lg border border-blue-100 uppercase hover:bg-blue-100">
                                                Tautan URL
                                            </a>
                                            <a v-if="item.evidence_path" :href="'/storage/' + item.evidence_path"
                                                target="_blank"
                                                class="inline-flex items-center text-[9px] font-black bg-purple-50 text-purple-600 px-2.5 py-1 rounded-lg border border-purple-100 uppercase hover:bg-purple-100">
                                                Berkas PDF
                                            </a>
                                        </div>
                                    </td>
                                    <td class="p-5 text-center">
                                        <div
                                            :class="['inline-block w-12 h-12 leading-[48px] rounded-2xl font-black text-lg shadow-sm border-2 transition-all', getScoreClass(item.score)]">
                                            {{ item.score ?? '-' }}
                                        </div>
                                        <div
                                            class="text-[8px] font-black uppercase text-slate-400 mt-2 tracking-widest">
                                            {{
                                                item.finding_type || 'Belum Dinilai' }}</div>
                                    </td>
                                    <td class="p-5 text-center">
                                        <button @click="openHistory(item)"
                                            class="p-2 text-slate-300 hover:text-rose-600 transition-all"
                                            title="Lihat Audit Trail">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div
                        class="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                        <div class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Menampilkan {{
                            indicators.from }}-{{ indicators.to }} dari {{ indicators.total }} data</div>
                        <div class="flex gap-1">
                            <Link v-for="link in indicators.links" :key="link.label" :href="link.url || '#'"
                                v-html="link.label"
                                class="px-3 py-1 rounded-lg text-[10px] font-black border transition-all"
                                :class="[link.active ? 'bg-rose-600 text-white border-rose-600 shadow-lg shadow-rose-200' : 'bg-white border-slate-200 text-slate-400', !link.url ? 'opacity-30' : 'cursor-pointer']" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showHistoryModal" class="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" @click="closeHistoryModal">
            </div>

            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[1rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                <div class="p-7 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <div>
                        <h3 class="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight">Audit
                            Trail</h3>
                        <p class="text-[10px] font-bold text-rose-600 font-mono">{{ activeIndicatorCode }}</p>
                    </div>
                    <button @click="closeHistoryModal"
                        class="text-slate-400 hover:text-rose-600 text-3xl transition-colors">&times;</button>
                </div>

                <div class="p-7 max-h-[60vh] overflow-y-auto bg-white dark:bg-slate-900">
                    <div v-if="loadingHistory" class="text-center py-10">
                        <div
                            class="animate-spin inline-block w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full">
                        </div>
                        <p class="text-[10px] font-black text-slate-400 mt-4 uppercase tracking-widest">Sinkronisasi
                            Data...</p>
                    </div>

                    <div v-else class="space-y-8">
                        <div v-for="(log, i) in activeHistory" :key="i"
                            class="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800">
                            <div
                                class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-rose-500 shadow-sm">
                            </div>

                            <div class="text-[9px] font-black text-rose-500 uppercase tracking-widest mb-1">{{
                                log.created_at }}
                            </div>
                            <div class="text-sm font-black text-slate-800 dark:text-white leading-none">{{
                                log.user?.name ||
                                'System' }}</div>
                            <div class="text-[9px] font-bold text-slate-400 uppercase mt-1 mb-4">{{ log.user?.role }}
                            </div>

                            <div
                                class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <p
                                    class="text-[10px] font-black text-slate-700 dark:text-slate-200 mb-2 uppercase tracking-tighter">
                                    Aksi: <span class="text-rose-600">{{ log.action }}</span>
                                </p>
                                <div class="text-[11px] text-slate-500 leading-relaxed italic"
                                    v-html="log.formatted_changes">
                                </div>
                            </div>
                        </div>

                        <div v-if="!activeHistory.length"
                            class="text-center py-10 text-slate-400 italic text-sm font-medium">
                            Belum ada riwayat aktivitas pada indikator ini.
                        </div>
                    </div>
                </div>

                <div
                    class="p-7 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-right">
                    <button @click="closeHistoryModal"
                        class="px-8 py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all hover:bg-rose-600">Tutup
                        Panel</button>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<style scoped>
/* Scrollbar Custom */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: #e2e8f0;
    border-radius: 10px;
}

.dark ::-webkit-scrollbar-thumb {
    background: #334155;
}
</style>

<script setup>
import { ref, watch } from 'vue';
import { router, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    assignments: Object, // Data paginasi dari server
    filters: Object,
});

/* --- LOGIKA FILTER & PENCARIAN --- */
const search = ref(props.filters.search || '');
const status = ref(props.filters.status || 'all');

// Fungsi tunggal untuk memperbarui data via URL
const updateFilters = () => {
    router.get(route('auditee.assignments.index'), {
        search: search.value,
        status: status.value
    }, {
        preserveState: true,
        replace: true,
        preserveScroll: true
    });
};

watch(search, debounce(() => {
    updateFilters();
}, 500));

const changeStatus = (newStatus) => {
    status.value = newStatus;
    updateFilters();
};

/* --- HELPERS --- */
const getProgress = (item) => {
    const total = parseInt(item.indicators_count) || 0;
    const uploaded = parseInt(item.evidence_count) || 0;

    if (total === 0) return 0;
    const percentage = Math.round((uploaded / total) * 100);
    return percentage > 100 ? 100 : percentage;
};

const getStageBadge = (stage) => {
    const map = {
        'doc_audit': 'bg-blue-50 text-blue-600 border-blue-100',
        'field_audit': 'bg-purple-50 text-purple-600 border-purple-100',
        'finding': 'bg-amber-50 text-amber-600 border-amber-100',
        'reporting': 'bg-emerald-50 text-emerald-600 border-emerald-100',
        'finished': 'bg-slate-900 text-white border-slate-900',
    };
    return map[stage] || 'bg-slate-50 text-slate-400 border-slate-100';
};
</script>

<template>
    <AppLayout title="Monitoring Audit Unit">
        <template #header>Daftar Audit Unit Saya</template>
        <template #subHeader>Pantau progres pemenuhan bukti dan hasil audit untuk unit Anda</template>

        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-2">
                    <span class="text-[10px] font-black uppercase text-slate-400 tracking-widest">Tampilkan:</span>
                    <div class="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                        <button @click="changeStatus('all')"
                            :class="['px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all',
                                status === 'all' ? 'bg-white dark:bg-slate-700 text-rose-600 shadow-sm' : 'text-slate-400 hover:text-slate-600']">
                            Semua
                        </button>
                        <button @click="changeStatus('on_going')"
                            :class="['px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all',
                                status === 'on_going' ? 'bg-white dark:bg-slate-700 text-rose-600 shadow-sm' : 'text-slate-400 hover:text-slate-600']">
                            Berjalan
                        </button>
                    </div>
                </div>
                <div class="relative w-full sm:w-80">
                    <input v-model="search" type="text" placeholder="Cari standar..."
                        class="w-full pl-4 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all shadow-sm" />
                </div>
            </div>

            <div
                class="bg-white dark:bg-slate-900 rounded-[1rem] shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-sm border-collapse">
                        <thead
                            class="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800">
                            <tr>
                                <th class="p-5">Standar & Instrumen</th>
                                <th class="p-5">Auditor Penilai</th>
                                <th class="p-5 text-center">Tahapan</th>
                                <th class="p-5">Progres Bukti</th>
                                <th class="p-5 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr v-for="item in assignments.data" :key="item.id"
                                class="hover:bg-slate-50/50 transition-colors group">
                                <td class="p-5">
                                    <div
                                        class="font-black text-slate-800 dark:text-white group-hover:text-rose-600 transition-colors uppercase tracking-tight leading-tight">
                                        {{ item.standard?.name }}
                                    </div>
                                    <div class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-0.5">
                                        Periode: {{ item.period?.name }}
                                    </div>
                                </td>

                                <td class="p-5">
                                    <div v-if="item.auditor" class="flex items-center gap-3">
                                        <div
                                            class="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-black text-[10px]">
                                            {{ item.auditor.name.charAt(0) }}
                                        </div>
                                        <div class="flex flex-col min-w-0">
                                            <span
                                                class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">{{
                                                    item.auditor.name }}</span>
                                            <span
                                                class="text-[9px] text-slate-400 font-black uppercase tracking-tighter">Ketua
                                                Auditor</span>
                                        </div>
                                    </div>
                                    <span v-else class="text-[10px] italic text-slate-300 font-bold uppercase">Belum
                                        Diplot</span>
                                </td>

                                <td class="p-5 text-center">
                                    <span
                                        :class="['px-3 py-1 rounded-xl text-[9px] font-black uppercase border tracking-widest inline-block whitespace-nowrap', getStageBadge(item.current_stage)]">
                                        {{ item.current_stage.replace('_', ' ') }}
                                    </span>
                                </td>

                                <td class="p-5">
                                    <div class="flex flex-col gap-1.5 w-full max-w-[160px]">
                                        <div class="flex justify-between text-[9px] font-black uppercase">
                                            <span class="text-slate-400">Bukti</span>
                                            <span class="text-rose-600">{{ getProgress(item) }}%</span>
                                        </div>
                                        <div
                                            class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-50 dark:border-slate-800">
                                            <div class="bg-rose-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(244,63,94,0.3)]"
                                                :style="{ width: getProgress(item) + '%' }"></div>
                                        </div>
                                        <div class="text-[8px] text-slate-400 font-bold uppercase tracking-tighter">
                                            {{ item.evidence_count || 0 }} / {{ item.indicators_count || 0 }} Butir
                                        </div>
                                    </div>
                                </td>

                                <td class="p-5 text-center">
                                    <Link :href="route('auditee.assignments.show', item.id)"
                                        class="inline-flex items-center px-5 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-black uppercase rounded-xl hover:bg-rose-600 dark:hover:bg-rose-600 hover:text-white transition-all shadow-md active:scale-95 whitespace-nowrap">
                                        Lihat Penilaian
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="flex items-center justify-between py-2 px-6">
                <div class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    Menampilkan {{ assignments.data.length }} Audit aktif
                </div>
                <div class="flex gap-1">
                    <button v-for="link in assignments.links" :key="link.label" v-html="link.label"
                        @click="link.url ? $inertia.visit(link.url) : null"
                        class="px-4 py-1.5 text-[10px] font-black rounded-xl border transition-all"
                        :class="[link.active ? 'bg-rose-600 text-white border-rose-600 shadow-lg shadow-rose-200' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:border-rose-500', !link.url ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer']" />
                </div>
            </div>

            <div v-if="assignments.data.length === 0"
                class="bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[3rem] p-20 text-center">
                <div
                    class="w-24 h-24 bg-rose-50 dark:bg-rose-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-rose-300" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h3 class="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Tidak Ada Jadwal
                    Audit
                </h3>
                <p class="text-slate-400 mt-2 font-medium">Data tidak ditemukan untuk kriteria filter ini.</p>
            </div>
        </div>
    </AppLayout>
</template>

<style scoped>
.transition-all {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

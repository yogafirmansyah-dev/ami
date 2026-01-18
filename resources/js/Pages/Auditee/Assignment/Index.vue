<script setup>
import { ref, watch, computed } from 'vue';
import { router, Link, Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    assignments: Object,
    filters: Object,
});

/* --- LOGIKA FILTER & PENCARIAN (High-Performance) --- */
const isSearching = ref(false);
const search = ref(props.filters.search || '');
const status = ref(props.filters.status || 'all');

const updateFilters = () => {
    isSearching.value = true;
    router.get(route('auditee.assignments.index'), {
        search: search.value,
        status: status.value,
        sort_field: props.filters.sort_field,
        direction: props.filters.direction
    }, {
        preserveState: true,
        replace: true,
        preserveScroll: true,
        onFinish: () => isSearching.value = false
    });
};

/* --- SORTING --- */
const handleSort = (field) => {
    const currentSort = props.filters.sort_field;
    const currentDir = props.filters.direction || 'asc';
    const nextDir = currentSort === field && currentDir === 'asc' ? 'desc' : 'asc';

    router.get(route('auditee.assignments.index'), {
        search: search.value,
        status: status.value,
        sort_field: field,
        direction: nextDir
    }, {
        preserveState: true,
        preserveScroll: true,
    });
};

watch(search, debounce(() => updateFilters(), 500));

const changeStatus = (newStatus) => {
    status.value = newStatus;
    updateFilters();
};

/* --- STATS SUMMARY (UX Insight) --- */
const globalStats = computed(() => {
    const data = props.assignments.data || [];
    const total = props.assignments.total || 0;
    const avgProgress = data.length > 0
        ? Math.round(data.reduce((acc, curr) => acc + getProgress(curr), 0) / data.length)
        : 0;
    const completed = data.filter(i => i.current_stage === 'finished').length;

    return { total, avgProgress, completed };
});

/* --- HELPERS --- */
const getProgress = (item) => {
    const total = parseInt(item.indicators_count) || 0;
    const uploaded = parseInt(item.evidence_count) || 0;
    if (total === 0) return 0;
    return Math.min(Math.round((uploaded / total) * 100), 100);
};

const getStageBadge = (stage) => {
    const map = {
        'doc_audit': 'bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20',
        'field_audit': 'bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20',
        'finding': 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20',
        'reporting': 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20',
        'rtm_rtl': 'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20',
        'finished': 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900',
    };
    return map[stage] || 'bg-slate-50 text-slate-400 border-slate-100';
};
const stats = computed(() => {
    const gs = globalStats.value;
    return [
        {
            label: 'Agenda Aktif',
            value: gs.total,
            icon: 'fa-briefcase',
            color: 'text-rose-600 dark:text-rose-400',
            bg: 'bg-rose-50 dark:bg-rose-900/10 border-rose-100 dark:border-rose-500/20'
        },
        {
            label: 'Progres Global',
            value: gs.avgProgress + '%',
            icon: 'fa-chart-pie',
            color: 'text-indigo-600 dark:text-indigo-400',
            bg: 'bg-indigo-50 dark:bg-indigo-900/10 border-indigo-100 dark:border-indigo-500/20'
        },
        {
            label: 'Riwayat Arsip',
            value: gs.completed,
            icon: 'fa-archive',
            color: 'text-slate-600 dark:text-slate-400',
            bg: 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800'
        }
    ];
});
</script>

<template>
    <AppLayout title="Portal Auditee">
        <template #header>
            <div class="flex items-center gap-4">
                <div class="relative flex h-3 w-3">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                </div>
                <h2
                    class="font-black text-xl text-slate-800 dark:text-white leading-tight uppercase tracking-tighter italic">
                    Portal Auditee
                </h2>
            </div>
        </template>
        <template #subHeader>
            Pantau dan kelola pemenuhan standar mutu unit kerja Anda secara real-time.
        </template>

        <div class="space-y-12">
            <!-- Hero Stats Section (Premium & Exclusive) -->
            <!-- Hero Stats Section (Premium & Exclusive | Auditor Style) -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="(stat, idx) in stats" :key="idx"
                    :class="['p-8 rounded-[2.5rem] border shadow-sm relative overflow-hidden group transition-all duration-300 hover:-translate-y-1', stat.bg]">
                    <div class="flex justify-between items-start relative z-10">
                        <p :class="['text-[10px] font-black uppercase tracking-[0.2em]', stat.color]">
                            {{ stat.label }}
                        </p>
                        <icon :icon="`fa-solid ${stat.icon}`" :class="['text-lg opacity-80', stat.color]" />
                    </div>
                    <p
                        :class="['text-4xl font-black mt-4 tracking-tighter italic text-slate-900 dark:text-white', stat.color]">
                        {{ stat.value }}
                    </p>
                    <!-- Decor -->
                    <icon :icon="`fa-solid ${stat.icon}`"
                        class="absolute -right-6 -bottom-6 text-9xl opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-700"
                        :class="stat.color" />
                </div>
            </div>

            <!-- Filter & Search Bar -->
            <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
                <!-- Status Toggle -->
                <div
                    class="flex items-center gap-2 p-1.5 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
                    <button v-for="s in ['all', 'on_going', 'completed']" :key="s" @click="changeStatus(s)"
                        class="px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300"
                        :class="status === s
                            ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                            : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800'">
                        {{ s === 'all' ? 'Semua Audit' : s === 'on_going' ? 'Proses Berjalan' : 'Selesai' }}
                    </button>
                </div>

                <!-- Search Input -->
                <div class="relative w-full lg:w-96 group">
                    <div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <svg class="w-4 h-4 text-slate-400 group-focus-within:text-rose-500 transition-colors"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input v-model="search" type="text"
                        class="w-full pl-12 pr-6 py-4 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-700 dark:text-white placeholder:text-slate-400 shadow-sm ring-1 ring-slate-100 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500/20 transition-all"
                        placeholder="Cari Standar Mutu...">
                    <div v-if="isSearching" class="absolute inset-y-0 right-0 pr-5 flex items-center">
                        <div class="w-3 h-3 border-2 border-rose-500 border-t-transparent rounded-full animate-spin">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Premium Data Grid -->
            <div
                class="bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div v-if="assignments.data.length > 0" class="overflow-x-auto">
                    <table class="w-full min-w-[1000px]">
                        <thead>
                            <tr
                                class="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                                <th
                                    class="px-10 py-8 text-center text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                    No</th>
                                <th @click="handleSort('standard_name')"
                                    class="px-10 py-8 text-left text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center justify-between gap-2">
                                        Standar Mutu & Periode
                                        <div
                                            class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">
                                            <icon icon="fa-solid fa-caret-up"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'standard_name' && filters.direction === 'asc' }"
                                                class="-mb-1" />
                                            <icon icon="fa-solid fa-caret-down"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'standard_name' && filters.direction === 'desc' }" />
                                        </div>
                                    </div>
                                </th>
                                <th @click="handleSort('assignable_name')"
                                    class="px-10 py-8 text-left text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center justify-between gap-2">
                                        Unit Kerja & Kategori
                                        <div
                                            class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">
                                            <icon icon="fa-solid fa-caret-up"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'assignable_name' && filters.direction === 'asc' }"
                                                class="-mb-1" />
                                            <icon icon="fa-solid fa-caret-down"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'assignable_name' && filters.direction === 'desc' }" />
                                        </div>
                                    </div>
                                </th>
                                <th @click="handleSort('auditor_name')"
                                    class="px-10 py-8 text-left text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center justify-between gap-2">
                                        Auditor
                                        <div
                                            class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">
                                            <icon icon="fa-solid fa-caret-up"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'auditor_name' && filters.direction === 'asc' }"
                                                class="-mb-1" />
                                            <icon icon="fa-solid fa-caret-down"
                                                :class="{ 'text-rose-500 opacity-100': filters.sort_field === 'auditor_name' && filters.direction === 'desc' }" />
                                        </div>
                                    </div>
                                </th>
                                <th
                                    class="px-10 py-8 text-center text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                    Status Tahapan</th>
                                <th
                                    class="px-10 py-8 text-left text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                    Kepatuhan Unit</th>
                                <th
                                    class="px-10 py-8 text-right text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                    Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-50 dark:divide-slate-800">
                            <tr v-for="item in assignments.data" :key="item.id"
                                class="group hover:bg-rose-50/30 dark:hover:bg-rose-900/10 transition-colors duration-300">
                                <td class="px-10 py-8">
                                    <span
                                        class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20">
                                        {{ assignments.from + assignments.data.indexOf(item) }}
                                    </span>
                                </td>
                                <td class="px-10 py-8">
                                    <h4
                                        class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tighter italic mb-2 group-hover:text-rose-600 transition-colors">
                                        {{ item.standard?.name }}
                                    </h4>
                                    <span
                                        class="inline-flex items-center px-2.5 py-1 rounded-md bg-rose-400 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-[8px] font-black text-slate-500 uppercase tracking-widest shadow-sm">
                                        {{ item.period?.name }}
                                    </span>
                                </td>
                                <td class="px-10 py-8">
                                    <div class="flex items-center gap-4">
                                        <div :class="[
                                            'w-12 h-12 rounded-xl flex items-center justify-center font-black text-base shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] border border-white/20 dark:border-white/5 transition-transform group-hover:scale-105 duration-500',
                                            item.assignable_type.includes('Prodi') ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600' : 'bg-rose-50 dark:bg-rose-500/10 text-rose-600'
                                        ]">
                                            {{ item.assignable?.name?.charAt(0) }}
                                        </div>
                                        <div>
                                            <div
                                                class="font-black text-slate-800 dark:text-slate-200 uppercase text-xs tracking-tight italic leading-none mb-1.5">
                                                {{ item.assignable?.name }}</div>
                                            <div class="flex items-center gap-2">
                                                <span :class="[
                                                    'text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border shadow-sm',
                                                    item.assignable_type.includes('Prodi')
                                                        ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 border-indigo-100 dark:border-indigo-500/20'
                                                        : 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20'
                                                ]">
                                                    {{ item.assignable_type.includes('Prodi') ? 'Program Studi' :
                                                        'Fakultas' }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-10 py-8">
                                    <div v-if="item.auditor" class="flex items-center gap-4">
                                        <div
                                            class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-600 dark:text-slate-300 border-2 border-white dark:border-slate-700 shadow-lg group-hover:scale-110 transition-transform">
                                            {{ item.auditor.name.substring(0, 2).toUpperCase() }}
                                        </div>
                                        <div>
                                            <p class="text-xs font-bold text-slate-700 dark:text-slate-200">{{
                                                item.auditor.name
                                                }}</p>
                                            <p class="text-[9px] text-slate-400 font-medium">Penilai Utama</p>
                                        </div>
                                    </div>
                                    <span v-else
                                        class="text-[9px] font-black italic text-slate-300 uppercase tracking-widest">Belum
                                        Ditentukan</span>
                                </td>
                                <td class="px-10 py-8 text-center">
                                    <span
                                        :class="['inline-flex items-center px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm', getStageBadge(item.current_stage)]">
                                        {{ item.current_stage.replace('_', ' ') }}
                                    </span>
                                </td>
                                <td class="px-10 py-8">
                                    <div class="w-full max-w-[150px]">
                                        <div class="flex justify-between items-end mb-2">
                                            <span class="text-[9px] font-bold text-slate-400">Terisi</span>
                                            <span class="text-xs font-black text-rose-600">{{ getProgress(item)
                                                }}%</span>
                                        </div>
                                        <div
                                            class="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div class="h-full bg-gradient-to-r from-rose-400 to-rose-600 rounded-full"
                                                :style="{ width: getProgress(item) + '%' }"></div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-10 py-8 text-right">
                                    <Link :href="route('auditee.assignments.show', item.id)"
                                        class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 text-slate-400 hover:text-white hover:bg-rose-600 border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-rose-500/30 transition-all duration-300 group-hover:scale-110">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Empty State -->
                <div v-else class="py-32 flex flex-col items-center justify-center text-center">
                    <div
                        class="w-24 h-24 bg-rose-50 dark:bg-rose-900/10 rounded-full flex items-center justify-center mb-6">
                        <svg class="w-10 h-10 text-rose-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-black text-slate-800 dark:text-white italic tracking-tighter mb-2">Belum
                        Ada Agenda
                    </h3>
                    <p class="text-slate-400 text-sm max-w-sm leading-relaxed">Saat ini unit kerja Anda belum memiliki
                        jadwal
                        audit yang aktif atau arsip tersimpan.</p>
                </div>

                <!-- Pagination -->
                <div v-if="assignments.data.length > 0"
                    class="px-10 py-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/30 dark:bg-slate-800/20">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Menampilkan <span class="text-slate-900 dark:text-white">{{ assignments.from }}-{{
                            assignments.to
                            }}</span> dari {{ assignments.total }}
                    </p>
                    <div class="flex gap-2">
                        <template v-for="(link, k) in assignments.links" :key="k">
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
    </AppLayout>
</template>

<style scoped>
/* Custom Scrollbar for Table */
.overflow-x-auto::-webkit-scrollbar {
    height: 6px;
}

.overflow-x-auto::-webkit-scrollbar-track {
    background: transparent;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
    background-color: #f1f5f9;
    border-radius: 20px;
}

.dark .overflow-x-auto::-webkit-scrollbar-thumb {
    background-color: #334155;
}
</style>

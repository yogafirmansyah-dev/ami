<script setup>
import { ref, watch, computed } from 'vue';
import { router, Link, Head, usePage } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import AssignmentFormModal from './AssignmentFormModal.vue';
import debounce from 'lodash/debounce';
import TModal from '@/Components/Modal/TModal.vue';

const props = defineProps({
    assignments: Object,
    periods: Array,
    standards: Array,
    auditors: Array,
    prodis: Array,
    faculties: Array,
    filters: Object,
    stageBreakdown: Array,
});

/* --- STATE & LOGIKA PENCARIAN & SORTING --- */
const isSearching = ref(false);
const search = ref(props.filters.search || '');
const perPage = ref(props.filters.per_page || 10);
const sortField = ref(props.filters.sort_field || 'created_at');
const sortDirection = ref(props.filters.direction || 'desc');

const reloadData = debounce(() => {
    isSearching.value = true;
    router.get(route('admin.assignments.index'),
        {
            search: search.value,
            per_page: perPage.value,
            sort_field: sortField.value,
            direction: sortDirection.value
        },
        {
            preserveState: true,
            replace: true,
            onFinish: () => isSearching.value = false
        }
    );
}, 500);

const handleSort = (field) => {
    if (sortField.value === field) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortField.value = field;
        sortDirection.value = 'asc';
    }
    reloadData();
};

watch(perPage, () => reloadData());
watch(search, () => reloadData());

/* --- FORM PENUGASAN --- */
const showModal = ref(false);

const closeModal = () => {
    showModal.value = false;
};

/* --- UI HELPERS --- */
const getAuditorProgress = (item) => {
    if (!item.indicators_count || item.indicators_count === 0) return 0;
    return Math.round(((item.scored_indicators_count || 0) / item.indicators_count) * 100);
};

const getAuditeeProgress = (item) => {
    if (!item.indicators_count || item.indicators_count === 0) return 0;
    return Math.round(((item.filled_indicators_count || 0) / item.indicators_count) * 100);
};

const getStageConfig = (stage) => {
    const configs = {
        'doc_audit': { label: 'Audit Dokumen', color: 'text-blue-600 bg-blue-50 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20' },
        'field_audit': { label: 'Audit Lapangan', color: 'text-purple-600 bg-purple-50 dark:bg-purple-500/10 border-purple-100 dark:border-purple-500/20' },
        'finding': { label: 'Temuan', color: 'text-amber-600 bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20' },
        'reporting': { label: 'Pelaporan', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20' },
        'rtm_rtl': { label: 'RTM & RTL', color: 'text-rose-600 bg-rose-50 dark:bg-rose-500/10 border-rose-100 dark:border-rose-500/20' },
        'finished': { label: 'Selesai', color: 'text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700' },
    };
    return configs[stage] || { label: stage.toUpperCase(), color: 'text-slate-400 bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700' };
};

/* --- DELETE KUSTOM MODAL --- */
const showDeleteModal = ref(false);
const itemToDelete = ref(null);

const confirmDeleteAction = (id) => {
    itemToDelete.value = id;
    showDeleteModal.value = true;
};

const executeDelete = () => {
    if (itemToDelete.value) {
        router.delete(route('admin.assignments.destroy', itemToDelete.value), {
            preserveScroll: true,
            onSuccess: () => {
                showDeleteModal.value = false;
                itemToDelete.value = null;
            }
        });
    }
};
</script>

<template>
    <AppLayout title="Penugasan Audit">
        <template #header>Dashboard Penugasan</template>
        <template #subHeader>Manajemen pusat siklus AMI dan pemantauan real-time unit kerja</template>

        <div v-if="stageBreakdown" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            <div v-for="stat in stageBreakdown" :key="stat.stage"
                class="bg-white dark:bg-slate-900 backdrop-blur-3xl p-5 rounded-[2rem] border border-white/40 dark:border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 group relative overflow-hidden">
                <p
                    class="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] leading-none mb-3 group-hover:text-rose-500 transition-colors">
                    {{ stat.label }}
                </p>
                <div class="flex items-end justify-between relative z-10">
                    <p class="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tighter italic">
                        {{ stat.total }}
                    </p>
                    <div
                        class="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)] animate-pulse mb-1.5">
                    </div>
                </div>
            </div>
        </div>

        <div class="space-y-6">
            <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div class="flex items-stretch gap-3 w-full max-w-2xl">
                    <div class="relative flex-1 group">
                        <span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <svg v-if="!isSearching"
                                class="h-4 w-4 text-slate-400 group-focus-within:text-rose-500 transition-colors"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <div v-else
                                class="h-4 w-4 border-2 border-rose-500 border-t-transparent rounded-full animate-spin">
                            </div>
                        </span>
                        <input v-model="search" type="text" placeholder="Cari unit, auditor, atau standar..."
                            class="w-full pl-11 pr-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" />

                        <!-- Clear Search Button -->
                        <button v-if="search" @click="search = ''"
                            class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-rose-500 transition-colors">
                            <icon icon="fa-solid fa-times-circle" class="w-4 h-4"></icon>
                        </button>
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

                <button @click="showModal = true"
                    class="group w-full lg:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-2xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10">
                    <span
                        class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none">+</span>
                    Inisialisasi AMI Baru
                </button>
            </div>

            <div
                class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden">
                <div class="overflow-x-auto custom-scrollbar">
                    <table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full">
                        <thead>
                            <tr
                                class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50">
                                <th @click="handleSort('created_at')" class="p-6 md:p-8">
                                    No
                                </th>
                                <th @click="handleSort('assignable_name')"
                                    class="p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center gap-2">
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
                                <th @click="handleSort('standard_name')"
                                    class="p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center justify-center gap-2">
                                        Metadata AMI
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
                                <th @click="handleSort('auditor_name')"
                                    class="p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none">
                                    <div class="flex items-center justify-center gap-2">
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
                                <th class="p-6 md:p-8 text-center">
                                    Progres Saat Ini
                                </th>
                                <th class="p-6 md:p-8 pr-8 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody v-if="isSearching" class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <!-- SKELETON LOADER -->
                            <tr v-for="i in 5" :key="'skeleton-' + i"
                                class="animate-pulse bg-white/30 dark:bg-slate-900/10">
                                <td class="p-6 md:p-8">
                                    <div class="h-6 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-md"></div>
                                </td>
                                <td class="p-6 md:p-8 pl-8">
                                    <div class="flex items-center gap-4">
                                        <div class="w-12 h-12 bg-slate-200 dark:bg-slate-700/50 rounded-xl"></div>
                                        <div class="space-y-2">
                                            <div class="h-4 w-32 bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                            <div class="h-3 w-16 bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="h-4 w-24 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                </td>
                                <td class="p-6 md:p-8 flex justify-center items-center">
                                    <div class="h-8 w-24 bg-slate-200 dark:bg-slate-700/50 rounded-lg"></div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="h-4 w-32 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="h-8 w-16 ml-auto bg-slate-200 dark:bg-slate-700/50 rounded-lg"></div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else-if="assignments.data.length === 0"
                            class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <!-- EMPTY STATE -->
                            <tr>
                                <td colspan="6" class="p-16 text-center">
                                    <div
                                        class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                                        <div
                                            class="w-24 h-24 mb-6 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner">
                                            <icon icon="fa-solid fa-folder-open"
                                                class="text-4xl text-slate-300 dark:text-slate-600" />
                                        </div>
                                        <h3
                                            class="text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">
                                            Belum Ada Penugasan</h3>
                                        <p class="text-xs max-w-sm text-center leading-relaxed font-bold">
                                            Data penugasan belum dibuat atau pencarian Anda tidak cocok dengan data
                                            manapun.
                                        </p>
                                        <button v-if="search" @click="search = ''"
                                            class="mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm">
                                            Bersihkan Pencarian
                                        </button>
                                        <button v-else @click="showModal = true"
                                            class="mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500">
                                            Buat Penugasan Baru
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <tr v-for="item in assignments.data" :key="item.id"
                                class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300">
                                <td class="p-6 md:p-8">
                                    <span
                                        class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20">
                                        {{ assignments.from + assignments.data.indexOf(item) }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8 pl-8">
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

                                <td class="p-6 md:p-8">
                                    <div class="text-[11px] font-bold text-slate-600 dark:text-slate-300 leading-snug">
                                        {{
                                            item.standard?.name }}</div>
                                    <div
                                        class="text-[9px] font-black text-slate-400 dark:text-slate-600 mt-1.5 uppercase tracking-tighter italic flex items-center gap-1">
                                        <icon icon="fa-regular fa-calendar" class="text-[8px]" />
                                        {{ item.period?.name }}
                                    </div>
                                </td>

                                <td class="p-6 md:p-8 text-slate-600 dark:text-slate-400 font-bold text-[10px]">
                                    <div v-if="item.auditor" class="flex items-center gap-2.5">
                                        <div
                                            class="w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center font-black text-[9px] shadow-lg shadow-slate-900/10 uppercase italic border border-white/10">
                                            {{ item.auditor.name.substring(0, 2) }}
                                        </div>
                                        <span class="tracking-tight">{{ item.auditor.name }}</span>
                                    </div>
                                    <div v-else
                                        class="inline-flex items-center gap-1 text-[9px] font-black text-amber-500 bg-amber-50 dark:bg-amber-500/10 px-2 py-1 rounded-md border border-amber-200 dark:border-amber-500/20 uppercase tracking-widest animate-pulse">
                                        <icon icon="fa-solid fa-exclamation-triangle" class="text-[8px]"></icon>
                                        Belum Diplot
                                    </div>
                                </td>

                                <td class="p-6 md:p-8">
                                    <div class="max-w-[140px] mx-auto space-y-3">
                                        <!-- Stage Indicator -->
                                        <div class="flex justify-center text-[8px] font-black uppercase mb-2">
                                            <span
                                                :class="['px-3 py-1 rounded-md border border-transparent italic shadow-sm transition-all', getStageConfig(item.current_stage).color]">
                                                {{ getStageConfig(item.current_stage).label }}
                                            </span>
                                        </div>

                                        <!-- Auditee Progress -->
                                        <div class="space-y-1">
                                            <div
                                                class="flex justify-between items-center text-[8px] font-black uppercase text-slate-500">
                                                <span>Pengisian</span>
                                                <span class="text-indigo-600 dark:text-indigo-400">{{
                                                    getAuditeeProgress(item)
                                                }}%</span>
                                            </div>
                                            <div
                                                class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden p-[1px]">
                                                <div class="bg-indigo-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(99,102,241,0.4)]"
                                                    :style="{ width: getAuditeeProgress(item) + '%' }"></div>
                                            </div>
                                        </div>

                                        <!-- Auditor Progress -->
                                        <div class="space-y-1">
                                            <div
                                                class="flex justify-between items-center text-[8px] font-black uppercase text-slate-500">
                                                <span>Penilaian</span>
                                                <span class="text-rose-600 dark:text-rose-400">{{
                                                    getAuditorProgress(item)
                                                }}%</span>
                                            </div>
                                            <div
                                                class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden p-[1px]">
                                                <div class="bg-rose-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(244,63,94,0.4)]"
                                                    :style="{ width: getAuditorProgress(item) + '%' }"></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td class="p-6 md:p-8 pr-8 text-right">
                                    <div class="flex justify-end items-center gap-2">
                                        <Link :href="route('admin.assignments.show', item.id)" title="Detail Penugasan"
                                            class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 dark:hover:text-rose-500 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 dark:hover:border-rose-900/50 active:scale-95">
                                            <icon icon="fa-solid fa-arrow-right" class="text-[10px]" />
                                        </Link>
                                        <button @click="confirmDeleteAction(item.id)" title="Hapus Penugasan"
                                            class="w-8 h-8 flex items-center justify-center text-slate-300 dark:text-slate-700 hover:text-rose-600 dark:hover:text-rose-500 transition-all hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl active:scale-95">
                                            <icon icon="fa-solid fa-trash" class="text-[10px]" />
                                        </button>
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
                        Data {{ assignments.from }} - {{ assignments.to }} dari total {{ assignments.total }}
                    </div>
                    <div class="flex flex-wrap justify-center gap-1.5">
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

        <AssignmentFormModal v-model:show="showModal" @closed="closeModal" :periods="periods" :standards="standards"
            :auditors="auditors" :prodis="prodis" :faculties="faculties" />

        <!-- Delete Confirmation Modal -->
        <TModal v-model="showDeleteModal" :radius="5" :closeButton="false">
            <template #content>
                <div class="text-center p-4">
                    <div
                        class="w-20 h-20 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-500 mx-auto flex items-center justify-center mb-6 shadow-inner">
                        <icon icon="fa-solid fa-trash-can" class="text-3xl animate-bounce" />
                    </div>
                    <h3 class="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter italic">
                        Konfirmasi Hapus</h3>
                    <p class="text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto">
                        Menghapus penugasan akan menghapus seluruh data snapshot indikator di dalamnya secara permanen.
                        Apakah Anda yakin?
                    </p>
                    <div class="flex justify-center gap-3">
                        <button @click="showDeleteModal = false"
                            class="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 rounded-xl transition active:scale-95">
                            Batal
                        </button>
                        <button @click="executeDelete"
                            class="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition shadow-lg shadow-rose-500/30 active:scale-95">
                            Ya, Hapus
                        </button>
                    </div>
                </div>
            </template>
        </TModal>
    </AppLayout>
</template>

<style scoped>
/* High-Performance Transitions */
.modal-enter-active,
.modal-leave-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.9) translateY(40px);
    filter: blur(4px);
}

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

/* Micro-interaction for rows */
tr:hover .w-14 {
    transform: rotate(-3deg) scale(1.1);
}

/* Accent Glow for Dark Mode Progress Bar */
.dark .bg-rose-600 {
    box-shadow: 0 0 15px rgba(244, 63, 94, 0.2);
}
</style>

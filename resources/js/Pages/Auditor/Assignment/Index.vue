<script setup>
import { ref, watch, computed } from 'vue';
import { router, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    assignments: Object,
    filters: Object,
});

/* --- STATE & LOGIKA FILTER --- */
const isSearching = ref(false);
const search = ref(props.filters.search || '');
const status = ref(props.filters.status || 'all');

const updateSearch = debounce((value) => {
    isSearching.value = true;
    router.get(route('auditor.assignments.index'), {
        search: value,
        status: status.value
    }, {
        preserveState: true,
        replace: true,
        preserveScroll: true,
        onFinish: () => isSearching.value = false
    });
}, 500);

watch(search, (val) => updateSearch(val));

const changeStatus = (newStatus) => {
    status.value = newStatus;
    router.get(route('auditor.assignments.index'), {
        search: search.value,
        status: newStatus
    }, {
        preserveState: true,
        preserveScroll: true,
    });
};

/* --- STATS SUMMARY (Auditor Focused) --- */
const stats = computed(() => {
    const data = props.assignments.data || [];
    // Note: This calculates based on current page data as per original implementation
    const ongoingCount = data.filter(i => i.current_stage !== 'finished').length;
    const pendingCount = data.filter(i => ['doc_audit', 'field_audit'].includes(i.current_stage)).length;

    return [
        {
            label: 'Total Ditugaskan',
            value: props.assignments.total,
            icon: 'fa-briefcase',
            color: 'text-slate-600 dark:text-slate-400',
            bg: 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800'
        },
        {
            label: 'Audit Aktif',
            value: ongoingCount,
            icon: 'fa-bolt',
            color: 'text-emerald-500',
            bg: 'bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-500/20'
        },
        {
            label: 'Menunggu Review',
            value: pendingCount,
            icon: 'fa-hourglass-half',
            color: 'text-amber-500',
            bg: 'bg-amber-50/50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-500/20'
        }
    ];
});

/* --- UI HELPERS --- */
const getProgress = (item) => {
    if (!item.indicators_count) return 0;
    return Math.round((item.scored_indicators_count / item.indicators_count) * 100);
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
    return configs[stage] || { label: stage.replaceAll('_', ' ').toUpperCase(), color: 'text-slate-400 bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700' };
};

const getCategoryStyle = (type) => {
    return type.includes('Prodi')
        ? 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400'
        : 'bg-rose-50 dark:bg-rose-500/10 border-rose-100 dark:border-rose-500/20 text-rose-600 dark:text-rose-400';
};
</script>

<template>
    <AppLayout title="Penugasan Audit Saya">
        <template #header>Mesin Kerja Auditor</template>
        <template #subHeader>Kelola evaluasi instrumen dan verifikasi temuan unit kerja secara profesional</template>

        <div class="space-y-8">
            <!-- STATS GRID -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="(stat, idx) in stats" :key="idx"
                    :class="['p-8 rounded-[2.5rem] border shadow-sm relative overflow-hidden group transition-all duration-300 hover:-translate-y-1', stat.bg]">
                    <div class="flex justify-between items-start relative z-10">
                        <p :class="['text-[10px] font-black uppercase tracking-[0.2em]', stat.color.split(' ')[0]]">
                            {{ stat.label }}
                        </p>
                        <icon :icon="`fa-solid ${stat.icon}`"
                            :class="['text-lg opacity-80', stat.color.split(' ')[0]]" />
                    </div>
                    <p
                        :class="['text-4xl font-black mt-4 tracking-tighter italic text-slate-900 dark:text-white', stat.color.split(' ')[0]]">
                        {{ stat.value }}
                    </p>
                    <!-- Decor -->
                    <icon :icon="`fa-solid ${stat.icon}`"
                        class="absolute -right-6 -bottom-6 text-9xl opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-700"
                        :class="stat.color.split(' ')[0]" />
                </div>
            </div>

            <!-- SEARCH & FILTERS -->
            <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div class="relative w-full lg:w-96 group">
                    <span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <icon v-if="!isSearching" icon="fa-solid fa-magnifying-glass"
                            class="text-slate-400 group-focus-within:text-emerald-500 transition-colors text-sm" />
                        <div v-else
                            class="h-4 w-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin">
                        </div>
                    </span>
                    <input v-model="search" type="text" placeholder="Cari Unit atau Periode..."
                        class="w-full pl-12 pr-6 py-4 border-none ring-1 ring-slate-200 dark:ring-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all shadow-sm text-xs font-bold text-slate-700 dark:text-slate-200" />
                </div>

                <div
                    class="flex items-center gap-1 bg-white dark:bg-slate-900 p-1.5 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                    <button v-for="s in ['all', 'on_going', 'completed']" :key="s" @click="changeStatus(s)" :class="[
                        'px-6 py-2.5 text-[10px] font-black uppercase rounded-2xl transition-all duration-300 flex items-center gap-2',
                        status === s
                            ? 'bg-slate-900 dark:bg-emerald-600 text-white shadow-lg shadow-slate-900/10 dark:shadow-emerald-600/20'
                            : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    ]">
                        {{ s.replace('_', ' ') }}
                    </button>
                </div>
            </div>

            <!-- ASSIGNMENT TABLE -->
            <div
                class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden">
                <div class="overflow-x-auto custom-scrollbar">
                    <table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full">
                        <thead>
                            <tr
                                class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50">
                                <th class="p-6 md:p-8">No</th>
                                <th class="p-6 md:p-8">Unit Audit</th>
                                <th class="p-6 md:p-8">Referensi</th>
                                <th class="p-6 md:p-8 text-center">Tahapan</th>
                                <th class="p-6 md:p-8">Progres</th>
                                <th class="p-6 md:p-8 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <tr v-for="item in assignments.data" :key="item.id"
                                class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300">
                                <td class="p-6 md:p-8">
                                    <span
                                        class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20">
                                        {{ assignments.from + assignments.data.indexOf(item) }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="flex items-center gap-5">
                                        <div
                                            class="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center font-black text-slate-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner group-hover:shadow-emerald-500/30">
                                            {{ item.assignable?.name?.charAt(0) }}
                                        </div>
                                        <div>
                                            <div
                                                class="font-black text-slate-900 dark:text-white uppercase tracking-tighter italic text-sm leading-none mb-1.5">
                                                {{ item.assignable?.name }}</div>
                                            <div
                                                :class="['inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[8px] font-black uppercase tracking-widest', getCategoryStyle(item.assignable_type)]">
                                                <icon
                                                    :icon="item.assignable_type.includes('Prodi') ? 'fa-solid fa-graduation-cap' : 'fa-solid fa-building'"
                                                    class="text-[9px]" />
                                                {{ item.assignable_type.includes('Prodi') ? 'Program Studi' :
                                                    'Fakultas / Unit' }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="text-[11px] font-bold text-slate-700 dark:text-slate-300 leading-snug">
                                        {{ item.standard?.name }}</div>
                                    <div
                                        class="text-[9px] font-black text-emerald-500 uppercase tracking-tighter mt-1.5 flex items-center gap-1.5 opacity-80">
                                        <icon icon="fa-regular fa-clock" />
                                        {{ item.period?.name }}
                                    </div>
                                </td>
                                <td class="p-6 md:p-8 text-center">
                                    <span
                                        :class="['px-3 py-1.5 rounded-lg text-[9px] font-black uppercase border tracking-widest inline-block whitespace-nowrap shadow-sm transition-all', getStageConfig(item.current_stage).color]">
                                        {{ getStageConfig(item.current_stage).label }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="flex flex-col gap-2 w-full max-w-[140px]">
                                        <div class="flex justify-between text-[8px] font-black uppercase">
                                            <span
                                                class="text-emerald-600 dark:text-emerald-400 italic tracking-widest">{{
                                                    getProgress(item) }}%</span>
                                            <span class="text-slate-300 dark:text-slate-600 tracking-tighter">{{
                                                item.scored_indicators_count }}/{{ item.indicators_count }}</span>
                                        </div>
                                        <div
                                            class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden p-[1px] shadow-inner">
                                            <div class="bg-gradient-to-r from-emerald-500 to-emerald-400 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                                                :style="{ width: getProgress(item) + '%' }"></div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-6 md:p-8 text-right">
                                    <Link :href="route('auditor.assignments.show', item.id)"
                                        class="inline-flex items-center justify-center w-10 h-10 bg-slate-900 dark:bg-emerald-600 text-white rounded-xl hover:scale-110 hover:shadow-xl hover:shadow-emerald-500/20 hover:bg-emerald-600 transition-all active:scale-95"
                                        title="Buka Evaluasi">
                                        <icon icon="fa-solid fa-arrow-right-to-bracket" class="text-xs" />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- PAGINATION -->
                <div
                    class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm">
                    <div
                        class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
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
    </AppLayout>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    height: 6px;
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
}
</style>

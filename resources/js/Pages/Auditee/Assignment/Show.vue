<script setup>
import { ref, watch, computed } from 'vue';
import { router, useForm, Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';
import axios from 'axios';

// Import Universal Components (High-Performance Reusable)
import ScoringView from '@/Components/Assignment/ScoringView.vue';
import MatrixRtlView from '@/Components/Assignment/MatrixRtlView.vue';
import StatisticsView from '@/Components/Assignment/StatisticsView.vue';
import ArchiveView from '@/Components/Assignment/ArchiveView.vue';
import UploadModal from '@/Components/Assignment/Partials/UploadModal.vue';
import { reactive } from 'vue';

const activeIndex = ref(null);
const tooltipPos = reactive({ top: 0, left: 0 });

const handleMouseEnter = (e, index) => {
    activeIndex.value = index;
    const rect = e.currentTarget.getBoundingClientRect();
    tooltipPos.top = rect.top + window.scrollY;
    tooltipPos.left = rect.left + window.scrollX + (rect.width / 2);
};

const handleMouseLeave = () => {
    activeIndex.value = null;
};

const props = defineProps({
    assignment: Object,
    indicators: Object,
    filters: Object,
    stageStats: Array,
});

/* --- DYNAMIC VIEW ENGINE (Context-Aware UX) --- */
const activeView = computed(() => {
    const stage = props.assignment.current_stage;
    switch (stage) {
        case 'rtm_rtl': return MatrixRtlView;
        case 'reporting': return StatisticsView;
        case 'finished': return ArchiveView;
        default: return ScoringView;
    }
});

/* --- LOGIKA PENCARIAN --- */
/* --- LOGIKA PENCARIAN & PAGINATION --- */
const search = ref(props.filters.search);
const perPage = ref(props.filters.per_page || 10);
const isSearching = ref(false);

watch([search, perPage], debounce(([searchValue, perPageValue]) => {
    isSearching.value = true;
    router.get(route('auditee.assignments.show', props.assignment.id), {
        search: searchValue,
        per_page: perPageValue
    }, {
        preserveState: true, replace: true, preserveScroll: true,
        onFinish: () => isSearching.value = false
    });
}, 500));

/* --- MODAL UNGGAH BUKTI (Role: Auditee) --- */
const showModal = ref(false);
const activeIndicator = ref(null);
const form = useForm({
    evidence_url: '',
    evidence_file: null,
});

const openUpload = (indicator) => {
    activeIndicator.value = indicator;
    form.evidence_url = indicator.evidence_url ?? '';
    form.evidence_file = null;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    activeIndicator.value = null;
    form.reset();
};

const submit = () => {
    form.transform((data) => ({ ...data, _method: 'PATCH' }))
        .post(route('auditee.indicators.update', activeIndicator.value.id), {
            forceFormData: true,
            onSuccess: () => closeModal(),
            preserveScroll: true
        });
};

/* --- LOGIKA RENCANA PERBAIKAN (RTL) --- */
const handleSaveRtl = (item) => {
    router.patch(route('auditee.indicators.update-rtl', item.rtl.id), {
        root_cause: item.rtl.root_cause,
        action_plan: item.rtl.action_plan,
        pic: item.rtl.pic,
        deadline: item.rtl.deadline,
    }, { preserveScroll: true });
};

/* --- LOGIKA RIWAYAT (Transparency UX) --- */
const showHistoryModal = ref(false);
const activeHistory = ref([]);
const activeIndicatorCode = ref('');
const isLoadingHistory = ref(false);

const openHistory = async (item) => {
    activeIndicatorCode.value = item.code;
    isLoadingHistory.value = true;
    showHistoryModal.value = true;
    try {
        const res = await axios.get(route('auditee.indicators.history', item.id));
        activeHistory.value = res.data;
    } catch (e) { console.error("History error"); }
    finally { isLoadingHistory.value = false; }
};

/* --- TAHAPAN & PROGRES --- */
const currentStageIndex = computed(() => {
    return props.stageStats?.findIndex(s => s.stage === props.assignment.current_stage) ?? 0;
});

const isEditable = computed(() => props.assignment.current_stage === 'doc_audit');

const progressPercent = computed(() => {
    const total = props.indicators.total || 1;
    const filled = props.indicators.data.filter(i => i.evidence_path || i.evidence_url).length;
    return Math.round((filled / total) * 100);
});
</script>

<template>
    <AppLayout :title="'Audit Unit: ' + assignment.target_name">
        <template #header>
            <div
                class="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 transition-all duration-300">
                <div class="space-y-1 group cursor-default">
                    <h2
                        class="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none transition-all group-hover:tracking-tight">
                        {{ assignment.target_name }}
                    </h2>
                    <div class="flex items-center gap-2">
                        <span class="relative flex h-2 w-2">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-rose-300"></span>
                        </span>
                        <p
                            class="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em] italic group-hover:text-rose-300 transition-colors">
                            Portal Auditee</p>
                    </div>
                </div>

                <div
                    class="flex items-center gap-1.5 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] w-full lg:w-auto">
                    <Link :href="route('auditee.assignments.index')"
                        class="group flex-1 lg:flex-none px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all bg-transparent hover:bg-white/80 dark:hover:bg-slate-800 active:scale-95 border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                        ← Kembali ke Dashboard
                    </Link>
                </div>
            </div>
        </template>

        <div class="space-y-6">
            <!-- Stepper Section (Luxurious with Tooltips) -->
            <!-- Stepper Section -->
            <div
                class="bg-white dark:bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
                <div class="overflow-x-auto no-scrollbar pt-6 pb-6 px-4 md:px-8">
                    <div class="flex items-center justify-between min-w-[600px] md:min-w-0 px-2 gap-0">
                        <div v-for="(s, index) in stageStats" :key="s.stage"
                            class="flex items-center flex-1 last:flex-none relative">
                            <div class="flex flex-col items-center gap-2 relative group/step">
                                <!-- Teleport Tooltip -->
                                <Teleport to="body">
                                    <transition name="tooltip-fade">
                                        <div v-if="activeIndex !== null && activeIndex === index" :style="{
                                            position: 'fixed',
                                            top: `${tooltipPos.top - 12}px`,
                                            left: `${tooltipPos.left}px`,
                                            transform: 'translate(-50%, -100%)'
                                        }" class="z-[10000] pointer-events-none">
                                            <div
                                                class="bg-slate-900/95 dark:bg-emerald-600/95 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-xl border border-white/10 relative">
                                                Tahap: {{ s.label }}
                                                <div
                                                    class="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-900/95 dark:border-t-emerald-600/95">
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                </Teleport>

                                <!-- Trigger Circle -->
                                <div @mouseenter="handleMouseEnter($event, index)" @mouseleave="handleMouseLeave"
                                    :class="[
                                        'w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-black transition-all duration-300 border-2 z-10 relative overflow-hidden',
                                        assignment.current_stage === s.stage
                                            ? 'bg-slate-900 dark:bg-emerald-600 text-white border-emerald-300 scale-125 shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-4 ring-emerald-300/10'
                                            : (index < currentStageIndex
                                                ? 'bg-emerald-50 text-emerald-600 border-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                                                : 'bg-slate-50 dark:bg-slate-800 text-slate-300 dark:border-slate-700')
                                    ]">
                                    <svg v-if="index < currentStageIndex" class="w-4 h-4" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span v-else class="text-xs italic">{{ index + 1 }}</span>
                                </div>

                                <!-- Label -->
                                <span :class="[
                                    'hidden md:block text-xs font-black uppercase tracking-tighter text-center max-w-[70px] leading-tight transition-all duration-300 transform group-hover/step:scale-105',
                                    assignment.current_stage === s.stage ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-600'
                                ]">
                                    {{ s.label }}
                                </span>
                            </div>

                            <!-- Connector Line -->
                            <div v-if="index < stageStats.length - 1"
                                class="flex-1 h-[2px] mx-2 bg-slate-100 dark:bg-slate-800 relative md:-mt-6">
                                <div :class="[
                                    'absolute inset-0 bg-emerald-300 transition-all duration-1000 shadow-[0_0_8px_rgba(16,185,129,0.4)]',
                                    index < currentStageIndex ? 'w-full' : 'w-0'
                                ]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Top Stats Section (Exclusive & High Contrast) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                <!-- Progress Card (Hero) -->
                <div class="lg:col-span-5 relative group">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-rose-600 to-pink-700 rounded-[2.5rem] rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-20 blur-2xl">
                    </div>
                    <div
                        class="relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-[2.5rem] shadow-xl overflow-hidden h-full flex flex-col justify-between group-hover:shadow-2xl transition-all duration-500">

                        <!-- decorative pattern -->
                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-500/5 to-transparent rounded-bl-[4rem] pointer-events-none">
                        </div>

                        <div class="relative z-10">
                            <div class="flex justify-between items-start mb-8">
                                <div>
                                    <p
                                        class="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                                        <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                        Kelengkapan Bukti
                                    </p>
                                    <h4
                                        class="text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
                                        {{ progressPercent }}<span
                                            class="text-3xl font-bold text-slate-300 dark:text-slate-600 italic -ml-1">%</span>
                                    </h4>
                                </div>
                                <div
                                    class="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-500/30 transform group-hover:scale-110 transition-transform duration-500">
                                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>

                            <div class="space-y-3">
                                <div class="flex justify-between items-end">
                                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Progress
                                        Upload</span>
                                    <span class="text-[10px] font-black text-rose-500">{{ progressPercent }}% /
                                        100%</span>
                                </div>
                                <div
                                    class="w-full bg-slate-100 dark:bg-slate-800 h-4 rounded-full overflow-hidden p-[3px] ring-1 ring-slate-200 dark:ring-slate-700">
                                    <div class="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 h-full rounded-full transition-all duration-1000 shadow-[0_2px_10px_rgba(244,63,94,0.4)] relative overflow-hidden"
                                        :style="{ width: progressPercent + '%' }">
                                        <div class="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                                    </div>
                                </div>
                                <p
                                    class="text-[10px] font-bold text-slate-400 uppercase tracking-wide leading-relaxed pt-2 border-t border-slate-50 dark:border-slate-800/50 mt-4">
                                    <span class="text-rose-500">*</span> Pastikan seluruh bukti digital terunggah valid.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Status / Info Card -->
                <div class="lg:col-span-7 relative group">
                    <div
                        class="absolute inset-0 bg-gradient-to-bl from-indigo-500 to-violet-600 rounded-[2.5rem] -rotate-1 group-hover:-rotate-2 transition-transform duration-500 opacity-10 blur-2xl">
                    </div>
                    <div
                        class="relative h-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center overflow-hidden">

                        <!-- Status Conditionals -->
                        <div v-if="!isEditable" class="flex items-center gap-8 relative z-10">
                            <div class="relative">
                                <div class="absolute inset-0 bg-amber-500 blur-xl opacity-20 animate-pulse"></div>
                                <div
                                    class="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[1.5rem] flex items-center justify-center flex-shrink-0 text-white shadow-xl shadow-amber-500/20 relative z-10">
                                    <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex-1 border-l border-slate-100 dark:border-slate-800 pl-8">
                                <div
                                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/50 mb-3">
                                    <span class="relative flex h-2 w-2">
                                        <span
                                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                                    </span>
                                    <span
                                        class="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider">Akses
                                        Terkunci</span>
                                </div>
                                <h3 class="text-2xl font-black text-slate-800 dark:text-white mb-2 tracking-tight">
                                    Periode Audit
                                    Ditutup</h3>
                                <p class="text-xs font-medium text-slate-500 leading-relaxed max-w-md">
                                    Saat ini unit kerja Anda sedang dalam tahap <span
                                        class="text-amber-600 dark:text-amber-400 font-bold uppercase bg-amber-50 dark:bg-amber-900/30 px-1 rounded">{{
                                            assignment.current_stage?.replace('_', ' ') }}</span>.
                                    Perubahan data dibatasi kecuali atas permintaan Auditor.
                                </p>
                            </div>
                        </div>

                        <div v-else class="flex items-center gap-8 relative z-10">
                            <div class="relative">
                                <div class="absolute inset-0 bg-emerald-500 blur-xl opacity-20 animate-pulse"></div>
                                <div
                                    class="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-[1.5rem] flex items-center justify-center flex-shrink-0 text-white shadow-xl shadow-emerald-500/20 relative z-10">
                                    <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex-1 border-l border-slate-100 dark:border-slate-800 pl-8">
                                <div
                                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/50 mb-3">
                                    <span class="relative flex h-2 w-2">
                                        <span
                                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span
                                        class="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Status
                                        Aktif</span>
                                </div>
                                <h3 class="text-2xl font-black text-slate-800 dark:text-white mb-2 tracking-tight">
                                    Pengumpulan
                                    Bukti</h3>
                                <p class="text-xs font-medium text-slate-500 leading-relaxed max-w-md">
                                    Silakan lengkapi bukti dukung untuk data kinerja. Pastikan tautan penyimpanan
                                    (Drive/Cloud)
                                    dapat diakses publik.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Controls & Full Width Content -->
            <div class="space-y-6">
                <div class="max-w-7xl mx-auto flex flex-row gap-3 items-stretch">
                    <div class="relative flex-1 group/search">
                        <div
                            class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform group-focus-within/search:scale-110 group-focus-within/search:rotate-12">
                            <svg v-if="!isSearching"
                                class="w-4 h-4 text-slate-400 group-focus-within/search:text-emerald-500" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <div v-else
                                class="w-3 h-3 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin">
                            </div>
                        </div>
                        <input v-model="search" type="text" placeholder="Cari kriteria atau butir indikator..."
                            class="w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 shadow-sm focus:shadow-md transition-all duration-300" />
                    </div>

                    <div
                        class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-3 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-emerald-300/50 transition-all duration-300">
                        <span
                            class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r dark:border-slate-800 mr-2">Baris</span>
                        <select v-model="perPage"
                            class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-emerald-600 transition-colors">
                            <option :value="10">10</option>
                            <option :value="25">25</option>
                            <option :value="50">50</option>
                        </select>
                    </div>
                </div>

                <!-- Main Content View -->
                <div class="relative min-h-[400px]">
                    <transition name="view-fade" mode="out-in">
                        <component :is="activeView" :assignment="assignment" :indicators="indicators" :role="'auditee'"
                            @open-upload="openUpload" @open-history="openHistory" @save-rtl="handleSaveRtl" />
                    </transition>
                </div>
            </div>
        </div>

        <UploadModal :show="showModal" :indicator="activeIndicator" :form="form" @close="closeModal" @submit="submit" />

        <transition name="modal">
            <div v-if="showHistoryModal" class="fixed inset-0 z-[999] flex items-center justify-center p-6">
                <div class="fixed inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity"
                    @click="showHistoryModal = false"></div>
                <div
                    class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300 flex flex-col max-h-[85vh]">
                    <div
                        class="p-12 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                        <div>
                            <h3
                                class="text-3xl font-black uppercase text-slate-900 dark:text-white italic tracking-tighter">
                                Audit Trail</h3>
                            <p
                                class="text-[10px] font-bold text-rose-600 font-mono mt-2 uppercase tracking-widest italic leading-none">
                                {{ activeIndicatorCode }}</p>
                        </div>
                        <button @click="showHistoryModal = false"
                            class="text-4xl text-slate-300 hover:text-rose-600 transition-colors">&times;</button>
                    </div>
                    <div class="p-12 overflow-y-auto custom-scrollbar flex-1 bg-white dark:bg-slate-900">
                        <div v-if="isLoadingHistory" class="py-24 text-center">
                            <div
                                class="inline-block w-10 h-10 border-4 border-rose-500 border-t-transparent rounded-full animate-spin">
                            </div>
                            <p class="text-[10px] font-black text-slate-400 mt-6 uppercase tracking-[0.3em]">
                                Mengambil
                                Log...
                            </p>
                        </div>
                        <div v-else class="space-y-12">
                            <div v-for="log in activeHistory" :key="log.id"
                                class="relative pl-10 border-l-2 border-slate-100 dark:border-slate-800">
                                <div
                                    class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-rose-600 shadow-xl">
                                </div>
                                <div class="flex justify-between items-start mb-2">
                                    <p class="text-[10px] font-black text-rose-600 uppercase tracking-widest">{{
                                        log.created_at
                                    }}</p>
                                    <span
                                        class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[8px] font-black uppercase tracking-widest">{{
                                            log.user?.role }}</span>
                                </div>
                                <p class="text-sm font-black text-slate-900 dark:text-white tracking-tighter">{{
                                    log.user?.name
                                }}</p>
                                <div
                                    class="mt-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] border border-slate-50 dark:border-slate-700 shadow-inner">
                                    <p
                                        class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 italic">
                                        Action: <span class="text-rose-600">{{ log.action }}</span></p>
                                    <div class="text-[11px] text-slate-500 dark:text-slate-400 font-medium italic leading-relaxed"
                                        v-html="log.formatted_changes"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </AppLayout>
</template>



<style scoped>
/* High-Performance Transitions */
.view-fade-enter-active,
.view-fade-leave-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.view-fade-enter-from {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(4px);
}

.view-fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
    filter: blur(4px);
}

.modal-enter-active,
.modal-leave-active {
    transition: all 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #f43f5e22;
    border-radius: 20px;
}

.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
    transition: all 0.2s ease;
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
    opacity: 0;
    transform: translate(-50%, -90%) scale(0.95) !important;
}
</style>

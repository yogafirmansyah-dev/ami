<script setup>
import { ref, watch, computed } from 'vue';
import { router, useForm, Link, Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';
import axios from 'axios';

// Import Universal Components dari @/Components/Assignment
import ScoringView from '@/Components/Assignment/ScoringView.vue';
import FindingView from '@/Components/Assignment/FindingView.vue';
import StatisticsView from '@/Components/Assignment/StatisticsView.vue';
import MatrixRtlView from '@/Components/Assignment/MatrixRtlView.vue';
import ArchiveView from '@/Components/Assignment/ArchiveView.vue';
import UploadModal from '@/Components/Assignment/Partials/UploadModal.vue';

const props = defineProps({
    assignment: Object,
    indicators: Object,
    groupedDocuments: Array,
    filters: Object,
    stageStats: Array
});

/* --- DYNAMIC VIEW ENGINE (High-Performance) --- */
const activeView = computed(() => {
    const stage = props.assignment.current_stage;
    switch (stage) {
        case 'doc_audit':
        case 'field_audit': return ScoringView;
        case 'finding': return FindingView;
        case 'reporting': return StatisticsView;
        case 'rtm_rtl': return MatrixRtlView;
        case 'finished': return ArchiveView;
        default: return ScoringView;
    }
});

/* --- LOGIKA SEARCH --- */
const search = ref(props.filters.search);
const isSearching = ref(false);
const perPage = ref(props.filters.per_page || 10); // Added for consistency

watch([search, perPage], debounce(() => {
    isSearching.value = true;
    router.get(route('auditor.assignments.show', props.assignment.id),
        { search: search.value, per_page: perPage.value },
        {
            preserveState: true, replace: true, preserveScroll: true,
            onFinish: () => isSearching.value = false
        }
    );
}, 500));

/* --- MODAL UPLOAD DOKUMEN RESMI (BA) --- */
const showDocModal = ref(false);
const docForm = useForm({ type: '', label: '', file: null });

const openDocUpload = (doc) => {
    docForm.clearErrors();
    docForm.type = doc.type;
    docForm.label = doc.label;
    showDocModal.value = true;
};

const submitDoc = () => {
    docForm.post(route('auditor.assignments.upload-document', props.assignment.id), {
        forceFormData: true,
        preserveScroll: true,
        onSuccess: () => { showDocModal.value = false; docForm.reset(); },
    });
};

/* --- MODAL PENILAIAN INDIKATOR (TECHNICAL WORK) --- */
const showAssessmentModal = ref(false);
const activeIndicator = ref(null);
const assessmentForm = useForm({
    score: '',
    finding_type: '',
    auditor_note: '',
    recommendation: '',
    evidence_url: '',
    evidence_file: null,
});

const openAssessment = (item) => {
    activeIndicator.value = item;
    assessmentForm.score = item.score ?? '';
    assessmentForm.finding_type = item.finding_type ?? '';
    assessmentForm.auditor_note = item.auditor_note ?? '';
    assessmentForm.recommendation = item.recommendation ?? '';
    assessmentForm.evidence_url = item.evidence_url ?? '';
    assessmentForm.evidence_file = null;
    showAssessmentModal.value = true;
};

const submitAssessment = () => {
    assessmentForm
        .transform((data) => ({ ...data, _method: 'PATCH' }))
        .post(route('auditor.indicators.update', activeIndicator.value.id), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => { showAssessmentModal.value = false; assessmentForm.reset(); },
        });
};

/* --- MODAL UPLOAD BUKTI INDIKATOR (ADDED) --- */
const showUploadModal = ref(false);
const uploadForm = useForm({
    evidence_url: '',
    evidence_file: null,
});

const openUpload = (indicator) => {
    activeIndicator.value = indicator;
    uploadForm.evidence_url = indicator.evidence_url ?? '';
    uploadForm.evidence_file = null;
    showUploadModal.value = true;
};

const submitUpload = () => {
    uploadForm.transform((data) => ({ ...data, _method: 'PATCH' }))
        .post(route('auditor.indicators.update', activeIndicator.value.id), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => { showUploadModal.value = false; uploadForm.reset(); },
        });
};

/* --- LOGIKA RIWAYAT (AUDIT TRAIL) --- */
const showHistoryModal = ref(false);
const activeHistory = ref([]);
const isLoadingHistory = ref(false);
const activeIndicatorCode = ref('');

const openHistory = async (item) => {
    activeIndicatorCode.value = item.snapshot_code;
    isLoadingHistory.value = true;
    showHistoryModal.value = true;
    try {
        const res = await axios.get(route('auditor.indicators.history', item.id));
        activeHistory.value = res.data;
    } catch (e) { console.error("History fail"); }
    finally { isLoadingHistory.value = false; }
};

/* --- LOGIKA VERIFIKASI RTL --- */
const handleVerifyRtl = (item) => {
    router.patch(route('auditor.indicators.verify-rtl', item.rtl.id), {
        status: item.rtl.status,
        auditor_feedback: item.rtl.auditor_feedback
    }, { preserveScroll: true });
};

/* --- LOGIKA TOOLTIP STEPPER (Added from Admin) --- */
const activeIndex = ref(null);
import { reactive } from 'vue'; // Import reactive
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

const currentStageIndex = computed(() => {
    return props.stageStats.findIndex(s => s.stage === props.assignment.current_stage);
});

const canUploadBA = (type) => {
    const stage = props.assignment.current_stage;
    if (type === 'field_report') return stage === 'field_audit';
    if (type === 'final_report') return stage === 'finding' || stage === 'reporting';
    if (type === 'end_report') return stage === 'reporting' || stage === 'finished';
    return false;
};

/* --- LOGIKA DOWNLOAD TEMPLATE BA --- */
const downloadTemplate = () => {
    // Buat elemen link virtual agar tidak memperlihatkan url di UI HTML 
    const link = document.createElement('a');
    link.href = '/doc/BERITA ACARA AMI.doc';
    link.download = 'BERITA_ACARA_AMI.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
</script>

<template>
    <AppLayout :title="'Area Kerja: ' + assignment.target_name">
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
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
                        </span>
                        <p
                            class="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em] italic group-hover:text-emerald-300 transition-colors">
                            Mesin Kerja Auditor</p>
                    </div>
                </div>

                <div
                    class="flex items-center gap-1.5 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] w-full lg:w-auto">
                    <Link :href="route('auditor.assignments.index')"
                        class="group flex-1 lg:flex-none px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all bg-transparent hover:bg-white/80 dark:hover:bg-slate-800 active:scale-95 border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                        ← Kembali ke Dashboard
                    </Link>
                </div>
            </div>
        </template>

        <div class="space-y-6">
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

            <!-- Grid Info Cards -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <!-- Info Card (Emerald) -->
                <div
                    class="lg:col-span-5 bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-900 p-8 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-300/20 shadow-xl shadow-emerald-100/50 dark:shadow-none flex flex-col justify-between gap-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-200/50 dark:hover:shadow-emerald-300/10">

                    <!-- DecorElements -->
                    <div
                        class="absolute top-0 right-0 w-64 h-64 bg-emerald-300/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none">
                    </div>

                    <div class="relative z-10 flex items-start gap-6">
                        <div
                            class="w-16 h-16 rounded-[1.2rem] bg-white dark:bg-emerald-300/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-xl italic shadow-sm border border-emerald-50 dark:border-emerald-300/20 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            {{ assignment.standard?.name?.charAt(0) }}
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2 mb-2">
                                <span
                                    class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-300/20 text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-300">
                                    Standar Instrumen
                                </span>
                            </div>
                            <h4
                                class="text-xl font-black text-slate-800 dark:text-slate-100 uppercase italic tracking-tight leading-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                                {{ assignment.standard?.name }}
                            </h4>
                        </div>
                    </div>

                    <div
                        class="relative z-10 grid grid-cols-3 gap-4 border-t border-emerald-100 dark:border-emerald-300/20 pt-6">
                        <div>
                            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Unit
                                Audit
                            </p>
                            <p class="text-sm font-bold text-slate-700 dark:text-slate-200 truncate"
                                :title="assignment.target_name">
                                {{ assignment.target_name?.split(' ')[0] }}
                            </p>
                        </div>
                        <div class="text-center border-x border-emerald-50 dark:border-emerald-300/10">
                            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                                Indikator
                            </p>
                            <p class="text-xl font-black text-emerald-600 dark:text-emerald-400 italic leading-none">
                                {{ indicators.total }}
                            </p>
                        </div>
                        <div class="text-right">
                            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Periode
                            </p>
                            <div class="flex items-center justify-end gap-1">
                                <p class="text-sm font-bold text-slate-800 dark:text-white leading-none">
                                    {{ assignment.period?.name }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Documents Card (Slate/Dark) -->
                <div
                    class="lg:col-span-7 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

                    <!-- DecorElements -->
                    <div
                        class="absolute bottom-0 left-0 w-64 h-64 bg-slate-300/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none">
                    </div>

                    <div class="relative z-10 mb-6 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3
                                    class="text-lg font-black uppercase italic tracking-tight text-slate-800 dark:text-white">
                                    Arsip Resmi
                                </h3>
                                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Berita
                                    Acara &
                                    Laporan</p>
                            </div>
                        </div>
                        <span class="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                            {{groupedDocuments.filter(d => (d.files && d.files.length) || d.file).length}} File
                            Avail
                        </span>
                    </div>

                    <div class="relative z-10 flex gap-4 overflow-x-auto no-scrollbar pb-2">
                        <div v-for="doc in groupedDocuments" :key="doc.type"
                            class="min-w-[140px] flex-1 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col gap-3 transition-all hover:border-emerald-300 hover:shadow-lg group/doc">

                            <div class="flex items-start justify-between">
                                <svg class="w-6 h-6 text-slate-300 group-hover/doc:text-emerald-500 transition-colors"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <div v-if="(doc.files && doc.files.length) || doc.file"
                                    class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                                </div>
                            </div>

                            <div>
                                <p class="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 line-clamp-1"
                                    :title="doc.label">
                                    {{ doc.label }}
                                </p>
                                <div class="flex flex-col gap-2">
                                    <template v-if="!(doc.files?.length || doc.file) && canUploadBA(doc.type)">
                                        <button @click="openDocUpload(doc)"
                                            class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[9px] font-bold uppercase hover:bg-emerald-600 transition-colors w-full">
                                            Unggah
                                        </button>
                                        <button type="button" @click="downloadTemplate"
                                            class="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg text-[9px] font-bold uppercase hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors w-full text-center border border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800">
                                            Unduh Template
                                        </button>
                                    </template>
                                    <template v-else-if="doc.files && doc.files.length > 0">
                                        <a :href="route('files.official.show', doc.files[0].id)" target="_blank"
                                            class="text-[10px] font-bold text-emerald-600 hover:underline flex items-center gap-1">
                                            Unduh PDF ↗
                                        </a>
                                    </template>
                                    <template v-else-if="doc.file">
                                        <a :href="route('files.official.show', doc.file.id)" target="_blank"
                                            class="text-[10px] font-bold text-emerald-600 hover:underline flex items-center gap-1">
                                            Unduh PDF ↗
                                        </a>
                                    </template>
                                    <span v-else class="text-[9px] italic text-slate-300">Menunggu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Search Bar & Filters -->
            <div class="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 items-stretch justify-end mb-2">
                <a :href="route('shared.export.docx', assignment.id)"
                    class="group flex-1 sm:flex-none px-6 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-wider text-blue-600 hover:text-white dark:text-blue-400 transition-all bg-white hover:bg-blue-600 dark:bg-slate-900 dark:hover:bg-blue-500 active:scale-95 border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-md hover:shadow-blue-500/20 flex items-center justify-center">
                    <icon icon="fa-solid fa-file-word"
                        class="mr-2 opacity-70 transition-transform group-hover:scale-110 group-hover:opacity-100" />
                    Daftar Tilik
                </a>
                <a :href="route('shared.export.docx.finding', assignment.id)"
                    class="group flex-1 sm:flex-none px-6 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-wider text-amber-600 hover:text-white dark:text-amber-400 transition-all bg-white hover:bg-amber-600 dark:bg-slate-900 dark:hover:bg-amber-500 active:scale-95 border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-md hover:shadow-amber-500/20 flex items-center justify-center">
                    <icon icon="fa-solid fa-file-signature"
                        class="mr-2 opacity-70 transition-transform group-hover:scale-110 group-hover:opacity-100" />
                    Form Temuan
                </a>
            </div>

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
                        class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r dark:border-slate-800 mr-2">Tampilkan</span>
                    <select v-model="perPage"
                        class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-emerald-600 transition-colors">
                        <option :value="10">10</option>
                        <option :value="25">25</option>
                        <option :value="50">50</option>
                    </select>
                </div>
            </div>

            <div class="relative min-h-[400px]">
                <transition name="view-fade" mode="out-in">
                    <component :is="activeView" :assignment="assignment" :indicators="indicators" :role="'auditor'"
                        :groupedDocuments="groupedDocuments" :filters="filters" @open-assessment="openAssessment"
                        @open-history="openHistory" @verify-rtl="handleVerifyRtl" @open-upload="openUpload" />
                </transition>
            </div>
        </div>

        <transition name="modal">
            <div v-if="showAssessmentModal" class="fixed inset-0 z-[999] flex items-center justify-center p-6">
                <div class="fixed inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity"
                    @click="showAssessmentModal = false"></div>
                <div
                    class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in duration-300">
                    <form @submit.prevent="submitAssessment" class="flex flex-col max-h-[90vh]">
                        <div
                            class="p-12 border-b dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-between items-center">
                            <div>
                                <h3
                                    class="text-3xl font-black uppercase tracking-tighter italic text-slate-900 dark:text-white leading-none">
                                    Evaluasi</h3>
                                <p
                                    class="text-[10px] font-bold text-emerald-600 font-mono mt-3 uppercase tracking-widest italic">
                                    {{ activeIndicator?.snapshot_code }}</p>
                            </div>
                            <button type="button" @click="showAssessmentModal = false"
                                class="text-4xl text-slate-300 hover:text-emerald-600 transition-colors">&times;</button>
                        </div>

                        <div class="p-12 space-y-8 overflow-y-auto custom-scrollbar flex-1">
                            <p
                                class="text-sm font-bold text-slate-600 dark:text-slate-300 italic leading-relaxed bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-inner border border-slate-50 dark:border-slate-700">
                                "{{ activeIndicator?.snapshot_requirement }}"
                            </p>

                            <div class="grid grid-cols-2 gap-8">
                                <div class="space-y-3">
                                    <label
                                        class="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Kategori
                                        Temuan</label>
                                    <select v-model="assessmentForm.finding_type"
                                        class="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold shadow-inner focus:ring-2 focus:ring-emerald-500/20"
                                        required>
                                        <option value="" disabled>Pilih Status</option>
                                        <option value="KS">Kesesuaian (KS)</option>
                                        <option value="KTS">Ketidaksesuaian (KTS)</option>
                                        <option value="OB">Observasi (OB)</option>
                                    </select>
                                </div>
                                <div class="space-y-3">
                                    <label
                                        class="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Skor
                                        Penilaian (1-4)</label>
                                    <select v-model="assessmentForm.score"
                                        class="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold shadow-inner focus:ring-2 focus:ring-emerald-500/20"
                                        required>
                                        <option value="" disabled>Beri Nilai</option>
                                        <option v-for="n in 4" :key="n" :value="n">{{ n }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="space-y-3">
                                <label
                                    class="text-[10px] font-black text-amber-500 uppercase tracking-widest ml-1 italic">Narasi
                                    Deskripsi Temuan</label>
                                <textarea v-model="assessmentForm.auditor_note" rows="4"
                                    class="w-full px-6 py-5 bg-amber-50/20 dark:bg-amber-900/10 border-2 border-amber-100 dark:border-amber-900/20 rounded-[2rem] text-xs font-bold shadow-sm focus:ring-2 focus:ring-amber-500/20"
                                    placeholder="Jelaskan temuan secara faktual..." required></textarea>
                            </div>

                            <div class="space-y-3">
                                <label
                                    class="text-[10px] font-black text-emerald-500 uppercase tracking-widest ml-1 italic">Saran
                                    Rekomendasi Strategis</label>
                                <textarea v-model="assessmentForm.recommendation" rows="4"
                                    class="w-full px-6 py-5 bg-emerald-50/20 dark:bg-emerald-900/10 border-2 border-emerald-100 dark:border-emerald-900/20 rounded-[2rem] text-xs font-bold shadow-sm focus:ring-2 focus:ring-emerald-500/20"
                                    placeholder="Apa yang harus unit lakukan untuk memperbaiki ini?"></textarea>
                            </div>
                        </div>

                        <div
                            class="p-12 border-t dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-end gap-6">
                            <button type="button" @click="showAssessmentModal = false"
                                class="px-10 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors">Batal</button>
                            <button type="submit" :disabled="assessmentForm.processing"
                                class="px-16 py-4 bg-slate-900 dark:bg-emerald-600 text-white rounded-[2.5rem] font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-50">
                                {{ assessmentForm.processing ? 'SINKRONISASI...' : 'SIMPAN EVALUASI' }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </transition>

        <transition name="modal">
            <div v-if="showDocModal" class="fixed inset-0 z-[999] flex items-center justify-center p-6">
                <div class="fixed inset-0 bg-slate-900/70 backdrop-blur-md" @click="showDocModal = false"></div>
                <div
                    class="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[3.5rem] shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in duration-300">
                    <div class="p-12 border-b dark:border-slate-800 text-center bg-slate-50/50 dark:bg-slate-800/20">
                        <h3
                            class="text-xl font-black uppercase tracking-widest text-slate-900 dark:text-white leading-none">
                            Arsip Resmi</h3>
                        <p class="text-[9px] font-bold text-emerald-500 uppercase mt-4 italic tracking-tighter">{{
                            docForm.label }}
                        </p>
                    </div>
                    <form @submit.prevent="submitDoc" class="p-12 space-y-10">
                        <input type="file" @input="docForm.file = $event.target.files[0]" required
                            class="w-full text-[10px] text-slate-400 file:mr-4 file:py-3 file:px-8 file:rounded-2xl file:border-0 file:bg-slate-900 file:text-white file:font-black hover:file:bg-emerald-600 transition-all cursor-pointer shadow-inner" />
                        <button type="submit" :disabled="docForm.processing"
                            class="w-full py-6 bg-emerald-600 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl hover:bg-emerald-700 transition-all active:scale-95">
                            {{ docForm.processing ? 'SINKRONISASI...' : 'UNGGAH DOKUMEN' }}
                        </button>
                    </form>
                </div>
            </div>
        </transition>

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
                                class="text-[10px] font-bold text-emerald-600 font-mono mt-2 uppercase tracking-widest italic leading-none">
                                {{ activeIndicatorCode }}</p>
                        </div>
                        <button @click="showHistoryModal = false"
                            class="text-4xl text-slate-300 hover:text-emerald-600 transition-colors">&times;</button>
                    </div>
                    <div class="p-12 overflow-y-auto custom-scrollbar flex-1 bg-white dark:bg-slate-900">
                        <div v-if="isLoadingHistory" class="py-24 text-center">
                            <div
                                class="inline-block w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin">
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
                                    class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-emerald-600 shadow-xl">
                                </div>
                                <div class="flex justify-between items-start mb-2">
                                    <p class="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{{
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
                                        Action: <span class="text-emerald-600">{{ log.action }}</span></p>
                                    <div class="text-[11px] text-slate-500 dark:text-slate-400 font-medium italic leading-relaxed"
                                        v-html="log.formatted_changes"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <UploadModal :show="showUploadModal" :indicator="activeIndicator" :form="uploadForm"
            @close="showUploadModal = false" @submit="submitUpload" />
    </AppLayout>
</template>

<style scoped>
/* Tooltip & Layout Safety */
.overflow-visible {
    overflow: visible !important;
}

/* Luxury Hide Scrollbar & Custom Theme */
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
    background: #10b98122;
    border-radius: 20px;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
}

/* High-Performance Fluid Transitions */
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

/* Transisi Tooltip */
.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
    opacity: 0;
    transform: translate(-50%, -90%) scale(0.95);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .min-w-\[600px\] {
        padding-top: 1rem;
    }
}
</style>

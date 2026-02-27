<script setup>
import { ref, watch, computed, reactive } from 'vue';
import { router, usePage } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';
import axios from 'axios';

// Import Komponen Parsial
import ScoringView from '@/Components/Assignment/ScoringView.vue';
import FindingView from '@/Components/Assignment/FindingView.vue';
import StatisticsView from '@/Components/Assignment/StatisticsView.vue';
import MatrixRtlView from '@/Components/Assignment/MatrixRtlView.vue';
import ArchiveView from '@/Components/Assignment/ArchiveView.vue';
import UploadModal from '@/Components/Assignment/Partials/UploadModal.vue';

const props = defineProps({
    assignment: Object,
    groupedDocuments: Array,
    indicators: Object,
    filters: Object,
    stageStats: Array
});

/* --- ENGINE TAMPILAN DINAMIS --- */
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

/* --- KONTROL TAHAPAN --- */
const isTransitioning = ref(false);
const stageTransitionError = ref(null);
const moveStage = (direction) => {
    stageTransitionError.value = null;
    const routeName = direction === 'next' ? 'admin.assignments.next' : 'admin.assignments.previous';
    const msg = direction === 'next' ? "Lanjutkan ke tahap berikutnya?" : "Kembali ke tahap sebelumnya?";
    if (confirm(msg)) {
        isTransitioning.value = true;
        router.patch(route(routeName, props.assignment.id), {}, {
            preserveScroll: true,
            onFinish: () => isTransitioning.value = false,
            onError: (errors) => {
                // Ambil pesan error pertama jika ada
                const firstError = Object.values(errors)[0];
                stageTransitionError.value = firstError || 'Gagal mengubah tahapan. Pastikan semua persyaratan terpenuhi.';

                usePage().props.flash.toastr = {
                    type: 'error',
                    content: 'Gagal mengubah tahapan. Mohon periksa pesan error.',
                    position: 'top-right'
                };
            }
        });
    }
};

/* --- LOGIKA PENCARIAN & PAGINASI --- */
const isSearching = ref(false);
const search = ref(props.filters.search);
const perPage = ref(props.filters.per_page || 10);

const updateFilters = debounce(() => {
    isSearching.value = true;
    router.get(route('admin.assignments.show', props.assignment.id),
        { search: search.value, per_page: perPage.value },
        { preserveState: true, replace: true, preserveScroll: true, onFinish: () => isSearching.value = false }
    );
}, 300);

watch([search, perPage], () => updateFilters());

/* --- RIWAYAT AUDIT --- */
const showHistoryModal = ref(false);
const activeHistory = ref([]);
const isLoadingHistory = ref(false);
const activeIndicatorCode = ref('');

const openHistory = async (item) => {
    activeIndicatorCode.value = item.snapshot_code;
    isLoadingHistory.value = true;
    showHistoryModal.value = true;
    try {
        const response = await axios.get(route('admin.indicators.history', item.id));
        activeHistory.value = response.data.data || response.data;
    } catch (e) {
        console.error("Gagal memuat log riwayat.", e);
        activeHistory.value = [];
    }
    finally { isLoadingHistory.value = false; }
};

const activeIndex = ref(null);
const tooltipPos = reactive({ top: 0, left: 0 });

const handleMouseEnter = (e, index) => {
    activeIndex.value = index;
    const rect = e.currentTarget.getBoundingClientRect();

    // Hitung posisi: Tengah elemen secara horizontal, dan tepat di atas secara vertikal
    tooltipPos.top = rect.top + window.scrollY;
    tooltipPos.left = rect.left + window.scrollX + (rect.width / 2);
};

const handleMouseLeave = () => {
    activeIndex.value = null;
};
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
                            Pusat Kendali AMI</p>
                    </div>
                </div>

                <div
                    class="flex items-center gap-1.5 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] w-full lg:w-auto">
                    <button @click="moveStage('prev')" :disabled="isTransitioning"
                        class="group flex-1 lg:flex-none px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all bg-transparent hover:bg-white/80 dark:hover:bg-slate-800 active:scale-95 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 disabled:opacity-30 flex items-center justify-center">
                        <icon icon="fa-solid fa-arrow-left"
                            class="mr-1.5 transition-transform group-hover:-translate-x-0.5" />
                        Kembali
                    </button>
                    <button @click="moveStage('next')" :disabled="isTransitioning"
                        class="group flex-[2] lg:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-300 dark:to-rose-600 text-white shadow-xl shadow-slate-900/20 dark:shadow-rose-600/30 hover:shadow-2xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 border-t border-white/10 dark:border-white/20 active:scale-95 transition-all hover:brightness-110 flex items-center justify-center gap-2 disabled:opacity-50 disabled:grayscale">
                        <span class="text-[10px] font-black uppercase tracking-[0.2em]">{{ isTransitioning ?
                            'Memproses...' :
                            'Lanjut Tahap' }}</span>
                        <icon icon="fa-solid fa-chevron-right"
                            class="text-[9px] transition-transform group-hover:translate-x-0.5" />
                    </button>
                </div>
            </div>
            <div v-if="stageTransitionError" class="flex justify-end mt-2 animate-in fade-in slide-in-from-top-1">
                <p
                    class="text-[10px] font-black text-rose-300 uppercase tracking-widest bg-rose-50 dark:bg-rose-300/10 px-3 py-1.5 rounded-lg border border-rose-100 dark:border-rose-300/20">
                    <icon icon="fa-solid fa-circle-exclamation" class="mr-1" />
                    {{ stageTransitionError }}
                </p>
            </div>
        </template>

        <div class="space-y-6">
            <div
                class="bg-white dark:bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
                <div class="overflow-x-auto no-scrollbar pt-6 pb-6 px-4 md:px-8">
                    <div class="flex items-center justify-between min-w-[600px] md:min-w-0 px-2 gap-0">

                        <div v-for="(s, index) in stageStats" :key="s.stage"
                            class="flex items-center flex-1 last:flex-none relative">
                            <div class="flex flex-col items-center gap-2 relative group/step">

                                <!-- TELEPORT: Dipindahkan ke Body agar tidak terpotong overflow -->
                                <Teleport to="body">
                                    <transition name="tooltip-fade">
                                        <div v-if="activeIndex !== null" :style="{
                                            position: 'fixed', // Gunakan fixed untuk akurasi teleport yang lebih baik
                                            top: `${tooltipPos.top - 12}px`,
                                            left: `${tooltipPos.left}px`,
                                            transform: 'translate(-50%, -100%)'
                                        }" class="z-[10000] pointer-events-none">
                                            <div
                                                class="bg-slate-900/95 dark:bg-rose-600/95 backdrop-blur-md text-white px-3 py-2 rounded-xl border border-white/10 relative text-center flex flex-col items-center">
                                                <div
                                                    class="text-[10px] font-black uppercase tracking-widest leading-tight">
                                                    Tahap: {{ stageStats[activeIndex].label }}</div>
                                                <div v-if="stageStats[activeIndex].start_date || stageStats[activeIndex].end_date"
                                                    class="text-[8px] font-bold text-slate-300 dark:text-rose-200 mt-1 uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded-md">
                                                    {{ stageStats[activeIndex].start_date || '?' }} - {{
                                                        stageStats[activeIndex].end_date || '?' }}
                                                </div>
                                                <div
                                                    class="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-900/95 dark:border-t-rose-600/95">
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                </Teleport>

                                <!-- TRIGGER: Elemen Lingkaran Angka -->
                                <div @mouseenter="handleMouseEnter($event, index)" @mouseleave="handleMouseLeave"
                                    :class="[
                                        'w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-black transition-all duration-300 border-2 z-10 relative overflow-hidden',
                                        assignment.current_stage === s.stage
                                            ? 'bg-slate-900 dark:bg-rose-600 text-white border-rose-300 scale-125 shadow-[0_0_20px_rgba(244,63,94,0.3)] ring-4 ring-rose-300/10'
                                            : (stageStats.findIndex(x => x.stage === assignment.current_stage) > index
                                                ? 'bg-emerald-300 text-white border-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                                                : 'bg-slate-400 dark:bg-slate-800 text-black dark:border-slate-700 hover:border-rose-400/50 hover:text-rose-400')
                                    ]">
                                    <icon v-if="stageStats.findIndex(x => x.stage === assignment.current_stage) > index"
                                        icon="fa-solid fa-check" class="text-xs" />
                                    <span v-else class="text-xs italic">{{ index + 1 }}</span>

                                </div>

                                <!-- Label Bawah -->
                                <div
                                    class="hidden md:flex flex-col items-center gap-1 transition-all duration-300 transform group-hover/step:scale-105 group-hover/step:-translate-y-0.5 mt-2">
                                    <span :class="[
                                        'text-xs font-black uppercase tracking-tighter text-center max-w-[80px] leading-tight',
                                        assignment.current_stage === s.stage ? 'text-rose-600 dark:text-rose-400' : 'text-slate-400 dark:text-slate-600'
                                    ]">
                                        {{ s.label }}
                                    </span>

                                </div>
                            </div>

                            <!-- Garis Penghubung -->
                            <div v-if="index < stageStats.length - 1"
                                class="flex-1 h-[2px] mx-2 bg-slate-100 dark:bg-slate-800 relative md:-mt-6">
                                <div :class="[
                                    'absolute inset-0 bg-rose-300 transition-all duration-1000 shadow-[0_0_8px_rgba(244,63,94,0.4)]',
                                    index < stageStats.findIndex(x => x.stage === assignment.current_stage) ? 'w-full' : 'w-0'
                                ]"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <!-- Standard Info Card (Indigo Theme) -->
                <div
                    class="lg:col-span-5 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-900 dark:to-slate-900 p-8 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-300/20 shadow-xl shadow-indigo-100/50 dark:shadow-none flex flex-col justify-between gap-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-200/50 dark:hover:shadow-indigo-300/10">

                    <!-- DecorElements -->
                    <div
                        class="absolute top-0 right-0 w-64 h-64 bg-indigo-300/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none">
                    </div>

                    <div class="relative z-10 flex items-start gap-6">
                        <div
                            class="w-16 h-16 rounded-[1.2rem] bg-white dark:bg-indigo-300/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black text-xl italic shadow-sm border border-indigo-50 dark:border-indigo-300/20 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            {{ assignment.standard?.name?.charAt(0) }}
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2 mb-2">
                                <span
                                    class="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-300/20 text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
                                    Standar Instrumen
                                </span>
                            </div>
                            <h4
                                class="text-xl font-black text-slate-800 dark:text-slate-100 uppercase italic tracking-tight leading-tight group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
                                {{ assignment.standard?.name }}
                            </h4>
                        </div>
                    </div>

                    <div
                        class="relative z-10 grid grid-cols-3 gap-4 border-t border-indigo-100 dark:border-indigo-300/20 pt-6">
                        <div>
                            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Auditor</p>
                            <p class="text-sm font-bold text-slate-700 dark:text-slate-200 truncate"
                                :title="assignment.auditor?.name">
                                {{ assignment.auditor?.name?.split(' ')[0] }}
                            </p>
                        </div>
                        <div class="text-center border-x border-indigo-50 dark:border-indigo-300/10">
                            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Indikator
                            </p>
                            <p class="text-xl font-black text-indigo-600 dark:text-indigo-400 italic leading-none">
                                {{ indicators.total }}
                            </p>
                        </div>
                        <div class="text-right">
                            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Rating</p>
                            <div class="flex items-center justify-end gap-1">
                                <icon icon="fa-solid fa-star" class="text-amber-400 text-xs" />
                                <p class="text-xl font-black text-slate-800 dark:text-white italic leading-none">
                                    {{ assignment.overall_rating || '-' }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Documents Card (Emerald Theme) -->
                <div
                    class="lg:col-span-7 bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-900 p-8 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-300/20 shadow-xl shadow-emerald-100/50 dark:shadow-none relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-200/50 dark:hover:shadow-emerald-300/10">

                    <!-- DecorElements -->
                    <div
                        class="absolute bottom-0 left-0 w-64 h-64 bg-emerald-300/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none">
                    </div>

                    <div class="relative z-10 mb-6 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-300/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                <icon icon="fa-solid fa-folder-open" />
                            </div>
                            <h3
                                class="text-lg font-black uppercase italic tracking-tight text-slate-800 dark:text-emerald-100">
                                Dokumen Resmi
                            </h3>
                        </div>
                        <span
                            class="text-[10px] font-bold text-emerald-600/60 dark:text-emerald-400/60 uppercase tracking-widest">
                            {{groupedDocuments.filter(d => (d.files && d.files.length) || d.file).length}} File
                            Tersedia
                        </span>
                    </div>

                    <div class="relative z-10 flex gap-4 overflow-x-auto no-scrollbar pb-2">
                        <div v-for="doc in groupedDocuments" :key="doc.type"
                            class="min-w-[140px] flex-1 bg-white dark:bg-slate-800/80 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-300/20 flex flex-col gap-3 transition-all hover:border-emerald-300 dark:hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-300/5 group/doc">

                            <div class="flex items-start justify-between">
                                <icon icon="fa-solid fa-file-contract"
                                    class="text-emerald-300 dark:text-emerald-700/50 text-2xl group-hover/doc:text-emerald-300 transition-colors" />
                                <div v-if="(doc.files && doc.files.length) || doc.file"
                                    class="w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                                </div>
                            </div>

                            <div>
                                <p class="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1 line-clamp-1"
                                    :title="doc.label">
                                    {{ doc.label }}
                                </p>
                                <template v-if="doc.files && doc.files.length > 0">
                                    <a :href="route('files.official.show', doc.files[0].id)" target="_blank"
                                        class="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                                        Unduh PDF
                                        <icon icon="fa-solid fa-arrow-up-right-from-square" class="text-[10px]" />
                                    </a>
                                </template>
                                <template v-else-if="doc.file">
                                    <a :href="route('files.official.show', doc.file.id)" target="_blank"
                                        class="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                                        Unduh PDF
                                        <icon icon="fa-solid fa-arrow-up-right-from-square" class="text-[10px]" />
                                    </a>
                                </template>
                                <template v-else>
                                    <span class="text-xs font-bold text-slate-300 dark:text-slate-600 italic">Belum
                                        ada</span>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                        <icon v-if="!isSearching" icon="fa-solid fa-magnifying-glass"
                            class="text-slate-400 text-xs group-focus-within/search:text-rose-300" />
                        <icon v-else icon="fa-solid fa-spinner" class="text-rose-300 animate-spin text-xs" />
                    </div>
                    <input v-model="search" type="text" placeholder="Cari kriteria atau temuan..."
                        class="w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-300/50 focus:ring-4 focus:ring-rose-300/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" />
                </div>

                <div
                    class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-3 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-300/50 dark:hover:ring-rose-300/50 transition-all duration-300">
                    <span
                        class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r dark:border-slate-800 mr-2">Tampilkan</span>
                    <select v-model="perPage"
                        class="bg-transparent dark:bg-slate-900 dark:border-slate-800 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-300 dark:hover:text-rose-300 transition-colors duration-300">
                        <option :value="10">10</option>
                        <option :value="25">25</option>
                        <option :value="50">50</option>
                    </select>
                </div>
            </div>

            <div class="relative min-h-[400px]">
                <transition name="view-fade" mode="out-in">
                    <component :is="activeView" :assignment="assignment" :indicators="indicators" :role="'admin'"
                        :groupedDocuments="groupedDocuments" :filters="filters" @open-history="openHistory"
                        @open-assessment="openAssessment" @open-upload="openUpload" />
                </transition>
            </div>
        </div>

        <UploadModal :show="showUploadModal" :indicator="activeIndicator" :form="uploadForm"
            @close="showUploadModal = false" @submit="submitUpload" />

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
            <div v-if="showHistoryModal" class="fixed inset-0 z-[999] flex items-center justify-center p-4">
                <div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity"
                    @click="showHistoryModal = false"></div>
                <div
                    class="relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[2rem] shadow-2xl overflow-hidden border border-white/5 flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-200">
                    <div
                        class="p-6 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/30">
                        <div>
                            <h3
                                class="text-lg font-black uppercase text-slate-900 dark:text-white italic tracking-tighter">
                                Log
                                Riwayat</h3>
                            <p class="text-xs font-bold text-rose-600 font-mono tracking-widest uppercase">{{
                                activeIndicatorCode }}</p>
                        </div>
                        <button @click="showHistoryModal = false"
                            class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-300 hover:text-rose-600 transition-all font-bold">&times;</button>
                    </div>

                    <div class="p-6 overflow-y-auto custom-scrollbar flex-1 bg-white dark:bg-slate-900">
                        <div v-if="isLoadingHistory" class="py-12 text-center">
                            <icon icon="fa-solid fa-spinner" class="text-2xl text-rose-300 animate-spin mb-2" />
                            <p class="text-2xs font-black text-slate-400 uppercase tracking-widest italic">
                                Menyinkronkan
                                Data...</p>
                        </div>
                        <div v-else-if="activeHistory.length > 0" class="space-y-8">
                            <div v-for="log in activeHistory" :key="log.id"
                                class="relative pl-8 border-l border-slate-100 dark:border-slate-800">
                                <div class="absolute -left-[4.5px] top-0 w-2 h-2 rounded-full bg-rose-600"></div>
                                <div class="flex justify-between items-center mb-1">
                                    <p class="text-2xs font-black text-rose-600 uppercase tracking-widest italic">{{
                                        log.created_at }}</p>
                                    <span
                                        class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-2xs font-black uppercase text-slate-300">{{
                                            log.user?.role }}</span>
                                </div>
                                <p class="text-xs font-black text-slate-900 dark:text-white italic mb-2 leading-none">{{
                                    log.user?.name || 'SISTEM' }}</p>
                                <div
                                    class="p-4 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-100 dark:border-slate-700 shadow-inner">
                                    <div class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic"
                                        v-html="log.formatted_changes"></div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="py-12 text-center flex flex-col items-center justify-center opacity-50">
                            <icon icon="fa-solid fa-clock-rotate-left"
                                class="text-3xl text-slate-300 dark:text-slate-600 mb-3" />
                            <p
                                class="text-2xs font-black text-slate-400 dark:text-slate-300 uppercase tracking-widest italic">
                                Belum ada riwayat perubahan
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </AppLayout>
</template>

<style scoped>
/* Tooltip & Layout Safety */
.overflow-visible {
    overflow: visible !important;
}

/* Sembunyi Scrollbar */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
    width: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(244, 63, 94, 0.2);
    border-radius: 10px;
}

/* Animasi Transisi View */
.view-fade-enter-active,
.view-fade-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.view-fade-enter-from {
    opacity: 0;
    transform: translateY(8px);
}

.view-fade-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}

/* Animasi Modal */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
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

/* Memastikan label bawah di mobile tidak merusak layout */
@media (max-width: 768px) {
    .min-w-\[600px\] {
        padding-top: 1rem;
    }
}
</style>

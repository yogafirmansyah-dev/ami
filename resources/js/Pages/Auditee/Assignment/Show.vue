<script setup>
import { ref, watch, computed } from 'vue';
import { router, useForm, Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    assignment: Object,
    indicators: Object,
    filters: Object,
});

/* --- LOGIKA PENCARIAN --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('auditee.assignments.show', props.assignment.id), { search: value }, {
        preserveState: true, replace: true
    });
}, 500));

/* --- MODAL UNGGAH BUKTI --- */
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

/* --- LOGIKA TAHAPAN (Stage) --- */
const stages = [
    { key: 'doc_audit', label: 'Audit Dokumen' },
    { key: 'field_audit', label: 'Audit Lapangan' },
    { key: 'finding', label: 'Temuan' },
    { key: 'reporting', label: 'Pelaporan' },
    { key: 'finished', label: 'Selesai' },
];

const currentStageIndex = computed(() => {
    return stages.findIndex(s => s.key === props.assignment.current_stage);
});

const isEditable = computed(() => props.assignment.current_stage === 'doc_audit');

/* --- STATISTIK --- */
const fulfilledCount = computed(() => props.indicators.total - props.indicators.data.filter(i => !i.evidence_path && !i.evidence_url).length);
const progressPercent = computed(() => Math.round((fulfilledCount.value / props.indicators.total) * 100));

/* --- HELPERS --- */
const getFindingBadge = (type) => {
    const map = {
        'KS': 'bg-emerald-50 text-emerald-700 border-emerald-100',
        'KTS': 'bg-rose-50 text-rose-700 border-rose-100',
        'OB': 'bg-amber-50 text-amber-700 border-amber-100'
    };
    return map[type] || 'bg-slate-50 text-slate-400 border-slate-100';
};
</script>

<template>
    <AppLayout :title="'Pemenuhan Bukti: ' + assignment.target_name">
        <template #header>Lembar Pemenuhan Bukti</template>
        <template #subHeader>Unit: <span class="font-bold text-rose-600">{{ assignment.target_name }}</span></template>

        <div class="space-y-8">
            <div
                class="bg-white dark:bg-slate-900 rounded-[1rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div class="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div class="w-full md:w-3/4">
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Alur Tahapan
                            Audit</p>
                        <div class="relative flex justify-between items-center">
                            <div
                                class="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2">
                            </div>
                            <div class="absolute top-1/2 left-0 h-0.5 bg-rose-500 -translate-y-1/2 transition-all duration-1000"
                                :style="{ width: (currentStageIndex / (stages.length - 1) * 100) + '%' }"></div>

                            <div v-for="(stage, index) in stages" :key="stage.key"
                                class="relative z-10 flex flex-col items-center">
                                <div :class="[
                                    'w-4 h-4 rounded-full border-4 transition-all duration-500',
                                    index <= currentStageIndex ? 'bg-rose-500 border-rose-100 dark:border-rose-900 scale-125' : 'bg-slate-200 dark:bg-slate-700 border-white dark:border-slate-900'
                                ]"></div>
                                <span :class="[
                                    'absolute -bottom-8 whitespace-nowrap text-[9px] font-black uppercase tracking-tighter transition-colors',
                                    index === currentStageIndex ? 'text-rose-600' : 'text-slate-400'
                                ]">{{ stage.label }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/4 flex flex-col items-center md:items-end">
                        <div class="text-right">
                            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status
                                Pengisian</p>
                            <h4
                                class="text-3xl font-black text-slate-800 dark:text-white leading-none tracking-tighter">
                                {{
                                    progressPercent }}%</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-2">
                    <div v-if="!isEditable"
                        class="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                        <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Input
                            Terkunci
                            (Tahapan Berjalan)</span>
                    </div>
                </div>
                <div class="flex gap-4 w-full sm:w-auto">
                    <div class="relative flex-1 sm:w-80">
                        <input v-model="search" type="text" placeholder="Cari Kode/Indikator..."
                            class="w-full pl-10 pr-4 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none" />
                        <svg class="w-4 h-4 absolute left-3.5 top-3 text-slate-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <a :href="route('shared.export.pdf', assignment.id)" target="_blank"
                        class="px-5 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-black uppercase rounded-2xl shadow-xl hover:bg-rose-600 dark:hover:bg-rose-600 hover:text-white transition-all">Cetak
                        Preview</a>
                </div>
            </div>

            <div
                class="bg-white dark:bg-slate-900 rounded-[1rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs border-collapse min-w-[1500px]">
                        <thead
                            class="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800">
                            <tr>
                                <th class="p-2 w-20">Kode</th>
                                <th class="p-2 w-80">Indikator & Kriteria</th>
                                <th class="p-2 w-80">Bukti yang Diperiksa</th>
                                <th class="p-2 text-center w-28 text-rose-600">Bukti Anda</th>
                                <th class="p-2 text-center w-32 bg-slate-100/30">Hasil Audit</th>
                                <th class="p-2 w-64 bg-slate-100/30">Catatan & Rekomendasi</th>
                                <th class="p-2 text-center w-20">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr v-for="item in indicators.data" :key="item.id"
                                class="align-top hover:bg-slate-50/50 transition-colors">
                                <td class="p-2 font-black text-rose-600 font-mono tracking-tighter">{{
                                    item.snapshot_code }}
                                </td>
                                <td class="p-2">
                                    <p class="font-bold text-slate-700 dark:text-slate-200 leading-relaxed mb-3">{{
                                        item.snapshot_requirement }}</p>
                                </td>

                                <td class="p-2">
                                    <p class="font-bold text-slate-700 dark:text-slate-200 leading-relaxed mb-3">{{
                                        item.snapshot_evidence_needed }}</p>
                                </td>

                                <td class="p-2">
                                    <div class="flex flex-col gap-2 items-center justify-center h-full">
                                        <div v-if="!item.evidence_path && !item.evidence_url"
                                            class="text-center opacity-30">
                                            <svg class="w-5 h-5 mx-auto mb-1" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <span class="text-[8px] font-black uppercase">Kosong</span>
                                        </div>
                                        <div v-else class="space-y-1.5 w-full">
                                            <a v-if="item.evidence_path" :href="route('files.evidence.show', item.id)"
                                                target="_blank"
                                                class="flex items-center px-2 py-1 bg-blue-50 text-blue-600 rounded-lg border border-blue-100 font-bold text-[9px] hover:bg-blue-600 hover:text-white transition-colors uppercase">
                                                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        d="M4 4a2 2 0 012-2h4.586A1 1 0 0112 2.586L15.414 6A1 1 0 0116 6.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                                                </svg> File Bukti
                                            </a>
                                            <a v-if="item.evidence_url" :href="item.evidence_url" target="_blank"
                                                class="flex items-center px-2 py-1 bg-purple-50 text-purple-600 rounded-lg border border-purple-100 font-bold text-[9px] hover:bg-purple-600 hover:text-white transition-colors uppercase truncate max-w-[150px]">
                                                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" />
                                                </svg> Tautan URL
                                            </a>
                                        </div>
                                    </div>
                                </td>

                                <td class="p-2 text-center bg-slate-50/30 dark:bg-slate-800/30">
                                    <div v-if="item.score" class="space-y-2">
                                        <div
                                            :class="['w-10 h-10 leading-10 mx-auto rounded-2xl font-black text-sm shadow-sm', item.score >= 3 ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white']">
                                            {{ item.score }}</div>
                                        <span
                                            :class="['px-2 py-0.5 rounded text-[8px] font-black border uppercase', getFindingBadge(item.finding_type)]">{{
                                                item.finding_type }}</span>
                                    </div>
                                    <span v-else
                                        class="text-slate-300 font-bold text-[10px] uppercase italic tracking-widest">Belum
                                        Dinilai</span>
                                </td>

                                <td class="p-2 bg-slate-50/30 dark:bg-slate-800/30">
                                    <div class="space-y-3">
                                        <div v-if="item.auditor_note">
                                            <p
                                                class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5 italic leading-none">
                                                Catatan:</p>
                                            <p
                                                class="text-[10px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                                {{ item.auditor_note }}</p>
                                        </div>
                                        <div v-if="item.recommendation"
                                            class="p-2.5 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-xl">
                                            <p
                                                class="text-[8px] font-black text-amber-600 uppercase tracking-widest mb-1 italic leading-none">
                                                Rekomendasi Perbaikan:</p>
                                            <p
                                                class="text-[10px] text-amber-800 dark:text-amber-400 font-bold leading-relaxed underline underline-offset-4 decoration-amber-200">
                                                {{ item.recommendation }}</p>
                                        </div>
                                    </div>
                                </td>

                                <td class="p-2 text-center">
                                    <button v-if="isEditable" @click="openUpload(item)"
                                        class="p-3 bg-rose-600 text-white rounded-2xl shadow-lg shadow-rose-500/20 hover:bg-rose-700 hover:scale-105 active:scale-95 transition-all">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg>
                                    </button>
                                    <div v-else
                                        class="w-8 h-8 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-300">
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="flex items-center justify-between py-2">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Halaman {{
                    indicators.current_page
                }} dari {{ indicators.last_page }}</p>
                <div class="flex gap-1">
                    <button v-for="link in indicators.links" :key="link.label" v-html="link.label"
                        @click="link.url ? $inertia.visit(link.url) : null"
                        class="px-3.5 py-1.5 text-[10px] font-bold rounded-xl border transition-all"
                        :class="[link.active ? 'bg-rose-600 text-white border-rose-600 shadow-lg' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400', !link.url ? 'opacity-30' : 'cursor-pointer hover:border-rose-600 hover:text-rose-600']" />
                </div>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" @click="closeModal"></div>
            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[1rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
                <div class="p-8 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50">
                    <div>
                        <h3
                            class="text-xl font-black uppercase text-slate-800 dark:text-white leading-none tracking-tight">
                            Unggah Bukti Dokumen</h3>
                        <p class="text-[10px] font-bold text-rose-600 mt-2 uppercase tracking-widest font-mono">{{
                            activeIndicator?.snapshot_code }}</p>
                    </div>
                    <button @click="closeModal"
                        class="text-3xl text-slate-300 hover:text-rose-500 transition-colors">&times;</button>
                </div>

                <form @submit.prevent="submit" class="p-10 space-y-8">
                    <div class="p-5 bg-rose-50/50 dark:bg-rose-900/10 border-l-4 border-rose-500 rounded-2xl">
                        <p class="text-[11px] font-bold text-slate-600 dark:text-slate-300 leading-relaxed italic">"{{
                            activeIndicator?.snapshot_requirement }}"</p>
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tautan URL (Cloud
                            Storage)</label>
                        <input v-model="form.evidence_url" type="url" placeholder="https://drive.google.com/..."
                            class="w-full px-5 py-3 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none" />
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Atau Unggah
                            Berkas
                            Fisik</label>
                        <div class="relative group">
                            <input type="file" @input="form.evidence_file = $event.target.files[0]"
                                class="w-full text-[10px] text-slate-400 file:mr-4 file:py-2.5 file:px-6 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:bg-slate-900 file:text-white hover:file:bg-rose-600 transition-all cursor-pointer" />
                        </div>
                        <p class="text-[9px] text-slate-400 italic mt-2">Mendukung format PDF, JPG, PNG, atau ZIP (Maks
                            10MB)
                        </p>
                    </div>

                    <div v-if="form.progress"
                        class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden shadow-inner">
                        <div class="bg-rose-600 h-full transition-all duration-300"
                            :style="{ width: form.progress.percentage + '%' }"></div>
                    </div>

                    <div class="flex justify-end gap-3 pt-4">
                        <button type="button" @click="closeModal"
                            class="px-8 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors">Batal</button>
                        <button type="submit" :disabled="form.processing"
                            class="px-12 py-3 bg-rose-600 text-white rounded-2xl font-black uppercase text-[10px] shadow-xl shadow-rose-500/30 hover:bg-rose-700 hover:translate-y-[-2px] active:translate-y-0 transition-all disabled:opacity-50">
                            {{ form.processing ? 'Sedang Memproses...' : 'Simpan Bukti Sekarang' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>

<style scoped>
/* Smooth transition for stage progress */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.custom-scrollbar::-webkit-scrollbar {
    width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #e2e8f0;
    border-radius: 10px;
}
</style>

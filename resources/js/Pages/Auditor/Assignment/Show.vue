<script setup>
import { ref, watch, computed } from 'vue';
import { router, useForm, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';
import axios from 'axios';

const props = defineProps({
    assignment: Object,
    indicators: Object,
    groupedDocuments: Array,
    filters: Object,
});

/* --- LOGIKA PENCARIAN --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('auditor.assignments.show', props.assignment.id), { search: value }, {
        preserveState: true, replace: true
    });
}, 500));

/* --- MODAL UPLOAD DOKUMEN RESMI (BA) --- */
const showDocModal = ref(false);
const docForm = useForm({ type: '', label: '', file: null });
const openDocUpload = (doc) => {
    docForm.clearErrors(); // Bersihkan error sebelumnya
    docForm.type = doc.type;
    docForm.label = doc.label;
    showDocModal.value = true;
};

const submitDoc = () => {
    docForm.post(route('auditor.assignments.upload-document', props.assignment.id), {
        forceFormData: true, // Memastikan data dikirim sebagai Multipart/Form-Data
        preserveScroll: true,
        onSuccess: () => {
            showDocModal.value = false;
            docForm.reset();
        },
        onError: (errors) => {
            // Log error ke konsol untuk memudahkan debugging
            console.error("Upload Gagal:", errors);
        }
    });
};

/* --- MODAL PENILAIAN INDIKATOR --- */
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
            onSuccess: () => { showAssessmentModal.value = false; assessmentForm.reset(); },
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
const currentStageIndex = computed(() => stages.findIndex(s => s.key === props.assignment.current_stage));

/* --- LOGIKA MODAL RIWAYAT (HISTORY) --- */
const showHistoryModal = ref(false);
const activeHistory = ref([]);
const loadingHistory = ref(false);
const activeIndicatorCode = ref('');

const openHistory = async (item) => {
    activeIndicatorCode.value = item.snapshot_code;
    loadingHistory.value = true;
    showHistoryModal.value = true;
    try {
        const res = await axios.get(route('auditor.indicators.history', item.id));
        activeHistory.value = res.data;
    } catch (e) {
        console.error("Gagal memuat riwayat");
    } finally {
        loadingHistory.value = false;
    }
};

/* --- HELPERS --- */
const getFindingBadge = (type) => {
    const map = {
        'KS': 'bg-emerald-50 text-emerald-700 border-emerald-100',
        'KTS': 'bg-rose-50 text-rose-700 border-rose-100',
        'OB': 'bg-amber-50 text-amber-700 border-amber-100'
    };
    return map[type] || 'bg-slate-50 text-slate-400 border-slate-100';
};

const canUploadBA = (type) => {
    const stage = props.assignment.current_stage;
    if (type === 'field_report') return stage === 'field_audit';
    if (type === 'final_report') return stage === 'finding' || stage === 'reporting';
    if (type === 'end_report') return stage === 'reporting' || stage === 'finished';
    return false;
};
</script>

<template>
    <AppLayout :title="'Audit: ' + assignment.target_name">
        <template #header>Lembar Kerja Auditor</template>
        <template #subHeader>Unit: <span class="font-bold text-rose-600">{{ assignment.target_name }}</span> |
            Instrumen: {{ assignment.standard.name }}</template>

        <div class="space-y-8">
            <div
                class="bg-white dark:bg-slate-900 p-8 rounded-[1rem] border border-slate-200 dark:border-slate-800 shadow-sm">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Alur Tahapan Audit
                    Berjalan</p>
                <div class="relative flex justify-between items-center max-w-4xl mx-auto">
                    <div class="absolute top-1/2 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 -translate-y-1/2">
                    </div>
                    <div class="absolute top-1/2 left-0 h-1 bg-rose-600 -translate-y-1/2 transition-all duration-1000"
                        :style="{ width: (currentStageIndex / (stages.length - 1) * 100) + '%' }"></div>

                    <div v-for="(stage, index) in stages" :key="stage.key"
                        class="relative z-10 flex flex-col items-center">
                        <div :class="[
                            'w-5 h-5 rounded-full border-4 transition-all duration-500',
                            index <= currentStageIndex ? 'bg-rose-600 border-rose-100 dark:border-rose-900 scale-125 shadow-lg shadow-rose-500/20' : 'bg-slate-200 dark:bg-slate-700 border-white dark:border-slate-900'
                        ]"></div>
                        <span :class="[
                            'absolute -bottom-8 whitespace-nowrap text-[9px] font-black uppercase tracking-widest transition-colors',
                            index === currentStageIndex ? 'text-rose-600' : 'text-slate-400'
                        ]">{{ stage.label }}</span>
                    </div>
                </div>
            </div>

            <div
                class="bg-slate-900 rounded-[1rem] p-8 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                <div class="flex-1">
                    <h3 class="text-xl font-black uppercase tracking-tighter italic">Dokumentasi Berita Acara</h3>
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Unggah berkas resmi
                        sesuai
                        tahapan yang berlaku</p>
                </div>
                <div class="flex flex-wrap justify-center gap-4">
                    <div v-for="doc in groupedDocuments" :key="doc.type"
                        class="text-center bg-white/5 p-4 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                        <p class="text-[8px] font-black text-slate-500 uppercase mb-3">{{ doc.label }}</p>
                        <button v-if="!doc.file" @click="openDocUpload(doc)" :disabled="!canUploadBA(doc.type)"
                            :class="['px-6 py-2 rounded-xl text-[9px] font-black uppercase transition-all',
                                canUploadBA(doc.type) ? 'bg-rose-600 text-white hover:bg-rose-500' : 'bg-white/5 text-white/20 cursor-not-allowed']">
                            Unggah
                        </button>
                        <a v-else :href="route('files.official.show', doc.file.id)" target="_blank"
                            class="inline-block px-6 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl text-[9px] font-black uppercase hover:bg-emerald-500/30 transition-all italic">
                            Tersedia
                        </a>
                    </div>
                </div>
            </div>

            <div
                class="bg-white dark:bg-slate-900 rounded-[1rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div class="p-8 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/30">
                    <h3 class="font-black text-slate-800 dark:text-white uppercase text-xs tracking-[0.2em] italic">
                        Evaluasi
                        Indikator Standar</h3>
                    <div class="relative w-80">
                        <input v-model="search" type="text" placeholder="Cari Kode atau Butir..."
                            class="w-full pl-10 pr-4 py-2.5 text-xs bg-white dark:bg-slate-800 border-0 rounded-2xl shadow-inner focus:ring-2 focus:ring-rose-500/20 transition-all" />
                        <svg class="w-4 h-4 absolute left-3.5 top-3 text-slate-300" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs border-collapse min-w-[1500px]">
                        <thead
                            class="bg-slate-50 dark:bg-slate-800/80 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800">
                            <tr>
                                <th class="p-2 w-20">Kode</th>
                                <th class="p-2 w-80">Kriteria Indikator</th>
                                <th class="p-2 w-80">Bukti yang Diperiksa </th>
                                <th class="p-2 text-center w-32">Bukti</th>
                                <th class="p-2 text-center w-28">Status Temuan</th>
                                <th class="p-2 text-center w-20">Skor</th>
                                <th class="p-2 w-64">Catatan & Rekomendasi</th>
                                <th class="p-2 text-center w-28">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr v-for="item in indicators.data" :key="item.id"
                                :class="['align-top transition-colors group', item.finding_type === 'KTS' ? 'bg-rose-50/10 hover:bg-rose-50/20' : 'hover:bg-slate-50/50']">
                                <td class="p-2 font-mono font-black text-rose-600 tracking-tighter">{{
                                    item.snapshot_code }}
                                </td>
                                <td class="p-2 leading-relaxed">
                                    <p class="font-bold text-slate-800 dark:text-slate-200 mb-3 text-[11px]">{{
                                        item.snapshot_requirement }}</p>
                                </td>
                                <td class="p-2 leading-relaxed">
                                    <p class="font-bold text-slate-800 dark:text-slate-200 mb-3 text-[11px]">{{
                                        item.snapshot_evidence_needed }}</p>
                                </td>
                                <td class="p-2 text-center">
                                    <div class="flex flex-col gap-2 items-center">
                                        <a v-if="item.evidence_path" :href="route('files.evidence.show', item.id)"
                                            target="_blank"
                                            class="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-xl font-black text-[9px] border border-blue-100 hover:bg-blue-600 hover:text-white transition-all uppercase shadow-sm">Berkas</a>
                                        <a v-if="item.evidence_url" :href="item.evidence_url" target="_blank"
                                            class="px-3 py-1.5 bg-purple-50 text-purple-600 rounded-xl font-black text-[9px] border border-purple-100 hover:bg-purple-600 hover:text-white transition-all uppercase shadow-sm">Tautan</a>
                                        <span v-if="!item.evidence_path && !item.evidence_url"
                                            class="text-slate-200 font-bold uppercase tracking-widest text-[9px]">Kosong</span>
                                    </div>
                                </td>

                                <td class="p-2 text-center">
                                    <span v-if="item.finding_type"
                                        :class="['px-3 py-1 rounded-full text-[9px] font-black border tracking-widest inline-block shadow-sm', getFindingBadge(item.finding_type)]">
                                        {{ item.finding_type }}
                                    </span>
                                    <span v-else class="text-slate-200 font-bold">-</span>
                                </td>

                                <td class="p-2 text-center">
                                    <div
                                        :class="['w-10 h-10 leading-10 mx-auto rounded-2xl font-black text-sm border-2 transition-all shadow-sm', item.score ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-100 border-slate-50 dark:bg-slate-800 dark:border-slate-700']">
                                        {{ item.score ?? '-' }}
                                    </div>
                                </td>

                                <td class="p-2">
                                    <div class="space-y-4">
                                        <div v-if="item.auditor_note">
                                            <p
                                                class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">
                                                Catatan:</p>
                                            <p
                                                class="text-[10px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                                "{{ item.auditor_note }}"</p>
                                        </div>
                                        <div v-if="item.recommendation"
                                            class="p-3 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-xl">
                                            <p
                                                class="text-[8px] font-black text-amber-600 uppercase tracking-widest mb-1 italic leading-none">
                                                Saran Perbaikan:</p>
                                            <p
                                                class="text-[10px] text-amber-800 dark:text-amber-400 font-bold leading-relaxed">
                                                {{ item.recommendation }}</p>
                                        </div>
                                        <span v-if="!item.auditor_note && !item.recommendation"
                                            class="text-slate-200 font-bold">-</span>
                                    </div>
                                </td>

                                <td class="p-2 text-center">
                                    <div class="flex justify-center gap-2">
                                        <button @click="openAssessment(item)"
                                            class="p-3 bg-rose-600 text-white rounded-2xl shadow-lg shadow-rose-500/20 hover:bg-rose-700 hover:scale-105 active:scale-95 transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                        <button @click="openHistory(item)"
                                            class="p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-2xl hover:text-rose-600 hover:bg-rose-50 transition-all shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div v-if="showAssessmentModal" class="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" @click="showAssessmentModal = false"></div>
            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[1rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
                <form @submit.prevent="submitAssessment" class="flex flex-col max-h-[90vh]">
                    <div class="p-8 border-b dark:border-slate-800 bg-slate-50/50 flex justify-between items-center">
                        <div>
                            <h3
                                class="text-xl font-black uppercase tracking-tighter text-slate-800 dark:text-white leading-none">
                                Evaluasi Auditor</h3>
                            <p class="text-[10px] font-bold text-rose-600 font-mono mt-2 uppercase tracking-widest">{{
                                activeIndicator?.snapshot_code }}</p>
                        </div>
                        <button type="button" @click="showAssessmentModal = false"
                            class="text-4xl text-slate-300 hover:text-rose-600">&times;</button>
                    </div>

                    <div class="p-10 space-y-8 overflow-y-auto custom-scrollbar">
                        <div
                            class="p-2 bg-slate-50 dark:bg-slate-800/80 rounded-[2rem] text-[11px] font-bold text-slate-600 dark:text-slate-300 italic leading-relaxed border border-slate-100 dark:border-slate-700">
                            "{{ activeIndicator?.snapshot_requirement }}"
                        </div>

                        <div class="grid grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status
                                    Temuan</label>
                                <select v-model="assessmentForm.finding_type"
                                    class="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold dark:text-white shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none"
                                    required>
                                    <option value="" disabled>Pilih Status</option>
                                    <option value="KS">KS (Kesesuaian)</option>
                                    <option value="KTS">KTS (Ketidaksesuaian)</option>
                                    <option value="OB">OB (Observasi)</option>
                                </select>
                            </div>
                            <div class="space-y-2">
                                <label class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Skor
                                    Penilaian</label>
                                <select v-model="assessmentForm.score"
                                    class="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold dark:text-white shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none"
                                    required>
                                    <option value="" disabled>Pilih Skor (1-4)</option>
                                    <option v-for="n in 4" :key="n" :value="n">{{ n }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Deskripsi
                                Temuan
                                Audit</label>
                            <textarea v-model="assessmentForm.auditor_note" rows="3"
                                placeholder="Tuliskan temuan audit secara detail..."
                                class="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold dark:text-white shadow-inner outline-none"
                                required></textarea>
                        </div>

                        <div class="space-y-2">
                            <label class="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Rekomendasi
                                Perbaikan</label>
                            <textarea v-model="assessmentForm.recommendation" rows="3"
                                placeholder="Saran langkah perbaikan untuk unit kerja..."
                                class="w-full px-5 py-3.5 bg-amber-50/50 dark:bg-amber-900/10 border-2 border-amber-100 dark:border-amber-900/20 rounded-2xl text-sm font-bold dark:text-white outline-none"></textarea>
                        </div>

                        <div class="grid grid-cols-2 gap-6 pt-4 border-t dark:border-slate-800">
                            <div class="space-y-2">
                                <label class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Link
                                    Verifikasi</label>
                                <input v-model="assessmentForm.evidence_url" type="url" placeholder="https://..."
                                    class="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm dark:text-white shadow-inner outline-none" />
                            </div>
                            <div class="space-y-2">
                                <label class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Upload
                                    Bukti
                                    Baru</label>
                                <input type="file" @input="assessmentForm.evidence_file = $event.target.files[0]"
                                    class="w-full text-[10px] text-slate-400 file:mr-4 file:py-2.5 file:px-6 file:rounded-xl file:border-0 file:bg-slate-900 file:text-white file:font-black hover:file:bg-rose-600 transition-all cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <div class="p-8 border-t dark:border-slate-800 flex justify-end gap-3 bg-slate-50/30">
                        <button type="button" @click="showAssessmentModal = false"
                            class="px-8 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors">Batal</button>
                        <button type="submit" :disabled="assessmentForm.processing"
                            class="px-12 py-3 bg-rose-600 text-white rounded-2xl font-black uppercase text-[10px] shadow-xl shadow-rose-500/20 hover:bg-rose-700 hover:translate-y-[-2px] active:translate-y-0 transition-all disabled:opacity-50 tracking-widest">
                            {{ assessmentForm.processing ? 'Menyimpan...' : 'Simpan Penilaian' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div v-if="showHistoryModal" class="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                @click="showHistoryModal = false">
            </div>
            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[1rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[85vh]">
                <div class="p-8 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50">
                    <div>
                        <h3
                            class="text-xl font-black uppercase text-slate-800 dark:text-white leading-none tracking-tighter">
                            Jejak Audit</h3>
                        <p class="text-[10px] font-bold text-rose-600 font-mono mt-2 uppercase tracking-widest italic">
                            {{
                                activeIndicatorCode }}</p>
                    </div>
                    <button @click="showHistoryModal = false"
                        class="text-slate-400 hover:text-rose-600 text-3xl transition-colors">&times;</button>
                </div>

                <div class="p-10 overflow-y-auto bg-white dark:bg-slate-900 custom-scrollbar flex-1">
                    <div v-if="loadingHistory" class="text-center py-12">
                        <div
                            class="animate-spin inline-block w-10 h-10 border-4 border-rose-500 border-t-transparent rounded-full mb-4">
                        </div>
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Memuat Histori...
                        </p>
                    </div>

                    <div v-else class="space-y-10">
                        <div v-for="log in activeHistory" :key="log.id"
                            class="relative pl-10 border-l-2 border-slate-100 dark:border-slate-800">
                            <div
                                class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-rose-600 shadow-sm shadow-rose-500/30">
                            </div>

                            <div class="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-1">
                                {{ new Date(log.created_at).toLocaleString('id-ID', {
                                    dateStyle: 'medium', timeStyle:
                                        'short'
                                })
                                }}
                            </div>
                            <div class="text-sm font-black text-slate-800 dark:text-white leading-none mb-1">{{ log.user
                                ?
                                log.user.name : 'Sistem' }}</div>
                            <div class="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-4">{{
                                log.user ?
                                    log.user.role : 'SYSTEM' }} (Tahap: {{ log.stage }})</div>

                            <div
                                class="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-3xl border border-slate-100 dark:border-slate-800">
                                <p
                                    class="text-[10px] font-black text-slate-700 dark:text-slate-200 mb-3 uppercase tracking-tighter italic border-b dark:border-slate-700 pb-1">
                                    Aksi: <span class="text-rose-600">{{ log.action.replace(/_/g, ' ') }}</span>
                                </p>
                                <div class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium space-y-1"
                                    v-html="log.formatted_changes"></div>
                            </div>
                        </div>

                        <div v-if="!activeHistory.length" class="text-center py-10">
                            <p class="text-[10px] text-slate-300 font-black uppercase tracking-widest italic">Belum ada
                                rekaman
                                aktivitas.</p>
                        </div>
                    </div>
                </div>

                <div class="p-8 bg-slate-50 dark:bg-slate-800/50 border-t dark:border-slate-800 text-right">
                    <button @click="showHistoryModal = false"
                        class="px-10 py-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all hover:bg-rose-600 shadow-xl active:scale-95">Tutup
                        Histori</button>
                </div>
            </div>
        </div>

        <div v-if="showDocModal" class="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" @click="showDocModal = false"></div>
            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[1rem] shadow-2xl animate-in zoom-in duration-200 overflow-hidden">
                <div class="p-8 border-b bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
                    <h3 class="text-xs font-black uppercase text-slate-800 dark:text-white tracking-[0.2em]">Upload
                        Dokumen
                        Resmi</h3>
                    <button @click="showDocModal = false"
                        class="text-3xl text-slate-300 hover:text-rose-600 transition-colors">&times;</button>
                </div>
                <form @submit.prevent="submitDoc" class="p-10 space-y-8 text-center">
                    <div
                        class="p-2 bg-rose-50 dark:bg-rose-900/10 text-rose-600 rounded-[2rem] text-[10px] font-black uppercase border border-rose-100 dark:border-rose-900 shadow-inner">
                        Jenis Dokumen: <span class="block text-sm mt-1 tracking-tighter italic">{{ docForm.label
                            }}</span>
                    </div>
                    <div v-if="docForm.errors.message"
                        class="p-3 mb-4 bg-rose-50 text-rose-600 text-[10px] font-bold rounded-xl border border-rose-100 italic">
                        {{ docForm.errors.message }}
                    </div>
                    <div class="relative group">
                        <input type="file" @input="docForm.file = $event.target.files[0]" required
                            class="w-full text-[10px] text-slate-400 file:mr-4 file:py-3 file:px-8 file:rounded-2xl file:border-0 file:bg-slate-900 file:text-white file:font-black hover:file:bg-rose-600 transition-all cursor-pointer" />
                    </div>
                    <div v-if="docForm.errors.file" class="text-[9px] text-rose-500 font-bold mt-1 uppercase italic">
                        {{ docForm.errors.file }}
                    </div>
                    <button type="submit" :disabled="docForm.processing"
                        class="w-full py-5 bg-rose-600 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl hover:bg-rose-700 transition-all active:scale-95 disabled:opacity-50">
                        {{ docForm.processing ? 'Sedang Mengunggah...' : 'Finalisasi & Simpan' }}
                    </button>
                </form>
            </div>
        </div>
    </AppLayout>
</template>

<style scoped>
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

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
}
</style>

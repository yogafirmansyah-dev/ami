<script setup>
import { ref, watch } from 'vue';
import { router, Link, Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

// TailAdmin Components
import TTable from '@/Components/Table/TTable.vue';
import TButton from '@/Components/Button/TButton.vue';
import TModal from '@/Components/Modal/TModal.vue';
import TInputText from '@/Components/Form/Inputs/TInputText.vue';

const props = defineProps({
    assignment: Object,
    indicators: Object, // Paginated indicators
    currentStage: String,
    filters: Object
});

/* --- LOGIKA SEARCH INDIKATOR --- */
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

const openHistory = async (indicator) => {
    loadingHistory.value = true;
    showHistoryModal.value = true;
    try {
        const response = await axios.get(route('admin.standards.indicators.history', indicator.id));
        activeHistory.value = response.data;
    } catch (error) {
        console.error("Gagal memuat riwayat");
    } finally {
        loadingHistory.value = false;
    }
};

/* --- HELPER WARNA SKOR --- */
const getScoreClass = (score) => {
    if (!score) return 'bg-slate-100 text-slate-400';
    if (score >= 3) return 'bg-emerald-100 text-emerald-700';
    if (score === 2) return 'bg-amber-100 text-amber-700';
    return 'bg-rose-100 text-rose-700';
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
                <a :href="route('shared.export.pdf', assignment.id)" target="_blank">
                    <TButton color="blue">
                        <icon icon="file-pdf" class="mr-2" /> Cetak Laporan (PDF)
                    </TButton>
                </a>
                <Link :href="route('admin.assignments.index')">
                    <TButton color="gray">Kembali</TButton>
                </Link>
            </div>
        </template>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">

            <div class="lg:col-span-1 space-y-6">
                <div
                    class="bg-white dark:bg-slate-900 p-5 shadow-default rounded-sm border border-slate-200 dark:border-slate-800">
                    <h3 class="font-bold border-b pb-2 mb-4">Informasi Audit</h3>
                    <div class="space-y-4 text-sm">
                        <div>
                            <label class="text-slate-400 block">Auditor</label>
                            <span class="font-semibold">{{ assignment.auditor.name }}</span>
                        </div>
                        <div>
                            <label class="text-slate-400 block">Periode</label>
                            <span class="font-semibold">{{ assignment.period.name }}</span>
                        </div>
                        <div>
                            <label class="text-slate-400 block">Tahap Saat Ini</label>
                            <span
                                class="px-2 py-0.5 rounded-full bg-rose-100 text-rose-600 font-bold text-[10px] uppercase">
                                {{ assignment.current_stage }}
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white dark:bg-slate-900 p-5 shadow-default rounded-sm border border-slate-200 dark:border-slate-800">
                    <h3 class="font-bold border-b pb-2 mb-4">Dokumen Resmi</h3>
                    <div v-if="assignment.documents.length" class="space-y-2">
                        <div v-for="doc in assignment.documents" :key="doc.id"
                            class="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                            <span class="text-xs font-medium truncate pr-2">{{ doc.type_label }}</span>
                            <a :href="route('shared.preview.document', doc.id)" target="_blank"
                                class="text-rose-500 hover:underline text-xs font-bold">Buka</a>
                        </div>
                    </div>
                    <div v-else class="text-xs text-slate-400 italic">Belum ada dokumen diunggah.</div>
                </div>
            </div>

            <div class="lg:col-span-3 space-y-4">
                <div class="flex justify-between items-center">
                    <h3 class="font-bold text-lg">Instrumen Penilaian</h3>
                    <div class="w-64">
                        <TInputText v-model="search" placeholder="Cari kode/kriteria..." size="sm" />
                    </div>
                </div>

                <TTable :items="indicators.data" :pagination="indicators" class="bg-white dark:bg-slate-900">
                    <template #head>
                        <tr>
                            <th class="p-4 text-left w-20">Kode</th>
                            <th class="p-4 text-left">Kriteria & Bukti</th>
                            <th class="p-4 text-center w-24">Skor</th>
                            <th class="p-4 text-center w-20">Aksi</th>
                        </tr>
                    </template>
                    <template #body="{ item }">
                        <tr class="align-top border-b dark:border-slate-800">
                            <td class="p-4 font-mono font-bold text-rose-600">{{ item.snapshot_code }}</td>
                            <td class="p-4">
                                <div class="text-sm mb-3">{{ item.snapshot_requirement }}</div>

                                <div class="flex gap-2">
                                    <a v-if="item.evidence_url" :href="item.evidence_url" target="_blank"
                                        class="inline-flex items-center text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-200">
                                        <icon icon="link" class="mr-1" /> URL Bukti
                                    </a>
                                    <a v-if="item.evidence_path" :href="route('shared.preview.evidence', item.id)"
                                        target="_blank"
                                        class="inline-flex items-center text-[10px] bg-purple-50 text-purple-600 px-2 py-1 rounded border border-purple-200">
                                        <icon icon="file-arrow-up" class="mr-1" /> Lihat File
                                    </a>
                                </div>
                            </td>
                            <td class="p-4 text-center">
                                <div
                                    :class="['inline-block w-10 h-10 leading-10 rounded-full font-bold shadow-sm', getScoreClass(item.score)]">
                                    {{ item.score ?? '-' }}
                                </div>
                                <div class="text-[9px] mt-1 font-bold uppercase text-slate-400">{{ item.score_label }}
                                </div>
                            </td>
                            <td class="p-4 text-center">
                                <TButton color="gray" size="sm" @click="openHistory(item)" title="Lihat History">
                                    <icon icon="history" />
                                </TButton>
                            </td>
                        </tr>
                    </template>
                </TTable>
            </div>
        </div>

        <TModal v-model="showHistoryModal" title="Audit Trail Indikator" size="lg">
            <div v-if="loadingHistory" class="p-10 text-center">Memuat riwayat...</div>
            <div v-else class="p-4 overflow-y-auto max-h-[60vh]">
                <div v-for="(log, i) in activeHistory" :key="i" class="border-l-2 border-rose-500 pl-4 pb-6 relative">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-rose-500 border-2 border-white">
                    </div>
                    <div class="text-xs font-bold text-slate-500">{{ log.created_at }}</div>
                    <div class="text-sm font-semibold">{{ log.user.name }} ({{ log.user.role }})</div>
                    <div class="text-xs bg-slate-100 p-2 mt-2 rounded">
                        <span class="font-bold text-rose-600">{{ log.action }}</span>:
                        {{ log.formatted_changes }}
                    </div>
                </div>
                <div v-if="!activeHistory.length" class="text-center text-slate-400 py-10">Belum ada riwayat perubahan.
                </div>
            </div>
        </TModal>
    </AppLayout>
</template>

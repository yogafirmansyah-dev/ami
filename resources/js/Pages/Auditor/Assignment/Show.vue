<script setup>
import { ref, watch } from 'vue';
import { router, useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

// TailAdmin Components
import TTable from '@/Components/Table/TTable.vue';
import TButton from '@/Components/Button/TButton.vue';
import TModal from '@/Components/Modal/TModal.vue';
import TInputGroup from '@/Components/Form/TInputGroup.vue';
import TInputSelect from '@/Components/Form/Inputs/TInputSelect.vue';
import TInputTextArea from '@/Components/Form/Inputs/TInputTextArea.vue';
import TInputText from '@/Components/Form/Inputs/TInputText.vue';

const props = defineProps({
    assignment: Object,
    indicators: Object,
    currentStage: String,
    filters: Object,
    scoreOptions: Array // [1, 2, 3, 4]
});

/* --- LOGIKA SEARCH --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('auditor.assignments.show', props.assignment.id), { search: value }, { preserveState: true, replace: true });
}, 500));

/* --- FORM PENILAIAN INDIKATOR --- */
const showAssessmentModal = ref(false);
const activeIndicator = ref(null);
const assessmentForm = useForm({
    score: '',
    auditor_note: '',
    recommendation: ''
});

const openAssessment = (indicator) => {
    activeIndicator.value = indicator;
    assessmentForm.score = indicator.score || '';
    assessmentForm.auditor_note = indicator.auditor_note || '';
    assessmentForm.recommendation = indicator.recommendation || '';
    showAssessmentModal.value = true;
};

const submitAssessment = () => {
    assessmentForm.patch(route('auditor.indicators.update', activeIndicator.value.id), {
        onSuccess: () => showAssessmentModal.value = false,
        preserveScroll: true
    });
};

/* --- FORM UNGGAH DOKUMEN RESMI (BA) --- */
const showUploadModal = ref(false);
const uploadForm = useForm({
    type: '',
    file: null
});

const submitDocument = () => {
    uploadForm.post(route('auditor.assignments.upload-document', props.assignment.id), {
        onSuccess: () => {
            showUploadModal.value = false;
            uploadForm.reset();
        }
    });
};

/* --- FINALISASI --- */
const finalizeAudit = () => {
    if (confirm('Apakah Anda yakin ingin melakukan finalisasi? Setelah ini skor tidak dapat diubah.')) {
        router.post(route('auditor.assignments.finalize', props.assignment.id));
    }
};
</script>

<template>
    <AppLayout :title="'Audit: ' + assignment.target_name">
        <template #header>Lembar Penilaian Auditor</template>
        <template #subHeader>
            Unit Kerja: <span class="font-bold text-rose-600">{{ assignment.target_name }}</span>
        </template>

        <template #action-buttons>
            <div class="flex gap-2">
                <TButton color="emerald" @click="showUploadModal = true">
                    <icon icon="upload" class="mr-2" /> Unggah BA
                </TButton>
                <TButton v-if="assignment.can_finalize" color="gradient-primary" @click="finalizeAudit">
                    Finalisasi Audit
                </TButton>
            </div>
        </template>

        <div class="space-y-6">
            <div class="flex justify-end">
                <div class="w-full max-w-sm">
                    <TInputText v-model="search" placeholder="Cari kode/indikator..." />
                </div>
            </div>

            <TTable :items="indicators.data" :pagination="indicators" class="bg-white dark:bg-slate-900 shadow-default">
                <template #head>
                    <tr>
                        <th class="p-4 text-left w-20">Kode</th>
                        <th class="p-4 text-left">Pernyataan & Bukti Auditee</th>
                        <th class="p-4 text-center w-24">Skor</th>
                        <th class="p-4 text-center w-32">Aksi</th>
                    </tr>
                </template>

                <template #body="{ item }">
                    <tr class="align-top border-b dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td class="p-4 font-mono font-bold text-rose-600">{{ item.snapshot_code }}</td>
                        <td class="p-4">
                            <div class="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                                {{ item.snapshot_requirement }}
                            </div>

                            <div class="flex flex-wrap gap-2">
                                <span v-if="!item.evidence_url && !item.evidence_path"
                                    class="text-[10px] italic text-slate-400">Belum ada bukti diunggah</span>
                                <a v-if="item.evidence_url" :href="item.evidence_url" target="_blank"
                                    class="inline-flex items-center text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-200">
                                    <icon icon="link" class="mr-1" /> Link Bukti
                                </a>
                                <a v-if="item.evidence_path" :href="route('shared.preview.evidence', item.id)"
                                    target="_blank"
                                    class="inline-flex items-center text-[10px] bg-purple-50 text-purple-600 px-2 py-1 rounded border border-purple-200">
                                    <icon icon="file-pdf" class="mr-1" /> File Bukti
                                </a>
                            </div>
                        </td>
                        <td class="p-4 text-center">
                            <div :class="[
                                'w-10 h-10 leading-10 mx-auto rounded-full font-bold text-sm',
                                item.score ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'
                            ]">
                                {{ item.score ?? '-' }}
                            </div>
                        </td>
                        <td class="p-4 text-center">
                            <TButton color="gradient-primary" size="sm" @click="openAssessment(item)">
                                <icon icon="edit" class="mr-1" /> Nilai
                            </TButton>
                        </td>
                    </tr>
                </template>
            </TTable>
        </div>

        <TModal v-model="showAssessmentModal" :title="'Penilaian: ' + activeIndicator?.snapshot_code">
            <form @submit.prevent="submitAssessment" class="p-4 space-y-4">
                <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded text-xs border-l-4 border-rose-500">
                    <strong>Persyaratan:</strong><br>
                    {{ activeIndicator?.snapshot_requirement }}
                </div>

                <TInputGroup label="Berikan Skor" :error="assessmentForm.errors.score">
                    <TInputSelect v-model="assessmentForm.score" :options="[1, 2, 3, 4]" placeholder="Pilih Skor 1-4"
                        required />
                </TInputGroup>

                <TInputGroup label="Catatan / Temuan Auditor" :error="assessmentForm.errors.auditor_note">
                    <TInputTextArea v-model="assessmentForm.auditor_note"
                        placeholder="Jelaskan temuan atau alasan pemberian skor..." required />
                </TInputGroup>

                <TInputGroup label="Rekomendasi Perbaikan" :error="assessmentForm.errors.recommendation">
                    <TInputTextArea v-model="assessmentForm.recommendation"
                        placeholder="Apa yang harus diperbaiki oleh unit kerja?" />
                </TInputGroup>

                <div class="flex justify-end gap-3 pt-4 border-t">
                    <TButton color="gray" type="button" @click="showAssessmentModal = false">Batal</TButton>
                    <TButton color="gradient-primary" type="submit" :loading="assessmentForm.processing">Simpan
                        Penilaian
                    </TButton>
                </div>
            </form>
        </TModal>

        <TModal v-model="showUploadModal" title="Unggah Dokumen Berita Acara">
            <form @submit.prevent="submitDocument" class="p-4 space-y-4">
                <TInputGroup label="Jenis Dokumen">
                    <TInputSelect v-model="uploadForm.type" :options="[
                        { id: 'field_report', name: 'Berita Acara Lapangan' },
                        { id: 'final_report', name: 'Berita Acara Final' }
                    ]" options-label="name" options-value="id" required />
                </TInputGroup>

                <TInputGroup label="File Dokumen (PDF)">
                    <input type="file" @input="uploadForm.file = $event.target.files[0]" class="w-full text-sm"
                        accept=".pdf" required />
                </TInputGroup>

                <div class="flex justify-end gap-3 pt-4 border-t">
                    <TButton color="gray" type="button" @click="showUploadModal = false">Batal</TButton>
                    <TButton color="emerald" type="submit" :loading="uploadForm.processing">Unggah Sekarang</TButton>
                </div>
            </form>
        </TModal>
    </AppLayout>
</template>

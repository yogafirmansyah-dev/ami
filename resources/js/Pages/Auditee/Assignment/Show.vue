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
import TInputText from '@/Components/Form/Inputs/TInputText.vue';

const props = defineProps({
    assignment: Object,
    indicators: Object,
    currentStage: String,
    filters: Object
});

/* --- SEARCH LOGIC --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('auditee.assignments.show', props.assignment.id), { search: value }, { preserveState: true, replace: true });
}, 500));

/* --- FORM UPLOAD BUKTI --- */
const showUploadModal = ref(false);
const activeIndicator = ref(null);
const uploadForm = useForm({
    evidence_url: '',
    evidence_file: null,
});

const openUpload = (indicator) => {
    activeIndicator.value = indicator;
    uploadForm.evidence_url = indicator.evidence_url || '';
    uploadForm.evidence_file = null;
    showUploadModal.value = true;
};

const submitEvidence = () => {
    // Menggunakan post dengan parameter _method: 'PATCH' untuk mendukung upload file di Laravel
    uploadForm.post(route('auditee.indicators.update', activeIndicator.value.id), {
        _method: 'PATCH',
        onSuccess: () => {
            showUploadModal.value = false;
            uploadForm.reset();
        },
        preserveScroll: true
    });
};

/* --- HELPER STATUS --- */
const isEditable = computed(() => props.currentStage === 'doc_audit');
</script>

<template>
    <AppLayout :title="'Pemenuhan Bukti: ' + assignment.standard.name">
        <template #header>Pemenuhan Bukti Audit</template>
        <template #subHeader>
            Silakan lengkapi bukti dokumen untuk standar <span class="font-bold text-rose-600">{{
                assignment.standard.name }}</span>
        </template>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div class="lg:col-span-1 space-y-4">
                <div
                    class="bg-white dark:bg-slate-900 p-5 shadow-default border border-slate-200 dark:border-slate-800 rounded-sm">
                    <h3 class="font-bold border-b pb-2 mb-4">Status Audit</h3>
                    <div class="space-y-4 text-sm">
                        <div class="flex flex-col">
                            <label class="text-slate-400 text-xs">Tahap Sekarang:</label>
                            <span class="font-bold text-rose-600 uppercase">{{ currentStage }}</span>
                        </div>
                        <div class="p-3 bg-amber-50 text-amber-700 rounded border border-amber-200 text-xs">
                            <icon icon="info-circle" class="mr-1" />
                            <span v-if="isEditable">Anda dapat mengunggah bukti hingga tahap Audit Dokumen
                                berakhir.</span>
                            <span v-else>Masa unggah bukti telah berakhir. Anda hanya dapat melihat penilaian.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-3 space-y-4">
                <div class="flex justify-end">
                    <div class="w-64">
                        <TInputText v-model="search" placeholder="Cari kode/kriteria..." size="sm" />
                    </div>
                </div>

                <TTable :items="indicators.data" :pagination="indicators"
                    class="bg-white dark:bg-slate-900 shadow-default">
                    <template #head>
                        <tr>
                            <th class="p-4 text-left w-20">Kode</th>
                            <th class="p-4 text-left">Indikator & Catatan Auditor</th>
                            <th class="p-4 text-center w-24">Skor</th>
                            <th class="p-4 text-center w-32">Aksi</th>
                        </tr>
                    </template>

                    <template #body="{ item }">
                        <tr class="align-top border-b dark:border-slate-800 hover:bg-slate-50 transition-colors">
                            <td class="p-4 font-mono font-bold text-rose-600">{{ item.snapshot_code }}</td>
                            <td class="p-4">
                                <div class="text-sm mb-4">{{ item.snapshot_requirement }}</div>

                                <div v-if="item.auditor_note"
                                    class="p-3 bg-slate-100 dark:bg-slate-800 rounded border-l-4 border-amber-500 mb-3">
                                    <div class="text-[10px] font-bold text-slate-500 uppercase">Catatan Auditor:</div>
                                    <div class="text-xs italic">"{{ item.auditor_note }}"</div>
                                </div>

                                <div class="flex gap-2">
                                    <a v-if="item.evidence_url" :href="item.evidence_url" target="_blank"
                                        class="text-[10px] text-blue-600 hover:underline">
                                        <icon icon="link" /> Lihat Link Bukti
                                    </a>
                                    <a v-if="item.evidence_path" :href="route('shared.preview.evidence', item.id)"
                                        target="_blank" class="text-[10px] text-purple-600 hover:underline">
                                        <icon icon="file-pdf" /> Lihat File Bukti
                                    </a>
                                </div>
                            </td>
                            <td class="p-4 text-center">
                                <div v-if="item.score"
                                    class="w-10 h-10 leading-10 mx-auto rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                                    {{ item.score }}
                                </div>
                                <span v-else class="text-[10px] text-slate-400">Belum Dinilai</span>
                            </td>
                            <td class="p-4 text-center">
                                <TButton v-if="isEditable" color="gradient-primary" size="sm" @click="openUpload(item)">
                                    <icon icon="cloud-upload" class="mr-1" /> Unggah Bukti
                                </TButton>
                                <span v-else class="text-[10px] text-slate-400 font-bold italic">Terkunci</span>
                            </td>
                        </tr>
                    </template>
                </TTable>
            </div>
        </div>

        <TModal v-model="showUploadModal" :title="'Upload Bukti: ' + activeIndicator?.snapshot_code">
            <form @submit.prevent="submitEvidence" class="p-4 space-y-6">
                <div class="text-xs bg-slate-50 p-3 rounded text-slate-600 border border-slate-200">
                    {{ activeIndicator?.snapshot_requirement }}
                </div>

                <TInputGroup label="URL Bukti (Opsional)"
                    help-text="Masukkan link Google Drive atau Cloud Storage lainnya.">
                    <TInputText v-model="uploadForm.evidence_url" placeholder="https://..." />
                </TInputGroup>

                <div class="relative">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-slate-200"></div>
                    </div>
                    <div class="relative flex justify-center text-xs uppercase">
                        <span class="bg-white px-2 text-slate-500">Atau Unggah File</span>
                    </div>
                </div>

                <TInputGroup label="File Bukti (PDF/ZIP)" help-text="Maksimal 10MB. Format: PDF, ZIP, JPG, PNG.">
                    <input type="file"
                        class="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100"
                        @input="uploadForm.evidence_file = $event.target.files[0]" />
                </TInputGroup>

                <div class="flex justify-end gap-3 pt-4 border-t">
                    <TButton color="gray" type="button" @click="showUploadModal = false">Batal</TButton>
                    <TButton color="gradient-primary" type="submit" :loading="uploadForm.processing">
                        Simpan Bukti
                    </TButton>
                </div>
            </form>
        </TModal>
    </AppLayout>
</template>

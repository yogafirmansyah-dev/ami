<script setup>
import { ref, watch, computed } from 'vue';
import { router, useForm, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

// TailAdmin Components
import TTable from '@/Components/Table/TTable.vue';
import TButton from '@/Components/Button/TButton.vue';
import TModal from '@/Components/Modal/TModal.vue';
import TInputGroup from '@/Components/Form/TInputGroup.vue';
import TInputSelect from '@/Components/Form/Inputs/TInputSelect.vue';
import TInputText from '@/Components/Form/Inputs/TInputText.vue';

const props = defineProps({
    assignments: Object,
    periods: Array,
    standards: Array,
    auditors: Array,
    prodis: Array,
    faculties: Array,
    filters: Object
});

/* --- SEARCH & FILTER LOGIC --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.assignments.index'), { search: value }, { preserveState: true, replace: true });
}, 500));

/* --- FORM PEMBUATAN PENUGASAN --- */
const showModal = ref(false);
const form = useForm({
    period_id: '',
    master_standard_id: '',
    auditor_id: '',
    assignable_type: 'prodi', // Default target
    assignable_id: '',
});

const submit = () => {
    form.post(route('admin.assignments.store'), {
        onSuccess: () => {
            showModal.value = false;
            form.reset();
        },
    });
};

/* --- HELPER: HITUNG PROGRESS --- */
const getProgress = (item) => {
    if (!item.indicators_count) return 0;
    const percentage = (item.scored_indicators_count / item.indicators_count) * 100;
    return Math.round(percentage);
};
</script>

<template>
    <AppLayout title="Daftar Penugasan AMI">
        <template #header>Penugasan Audit</template>
        <template #subHeader>Manajemen dan monitoring progres audit seluruh unit kerja</template>

        <template #action-buttons>
            <TButton color="gradient-primary" @click="showModal = true">
                <icon icon="plus" class="mr-2" /> Buat Penugasan Baru
            </TButton>
        </template>

        <div class="flex flex-col gap-4">
            <div class="flex justify-end">
                <div class="w-full max-w-sm">
                    <TInputText v-model="search" placeholder="Cari unit atau auditor..." />
                </div>
            </div>

            <TTable :items="assignments.data" :pagination="assignments"
                class="bg-white dark:bg-slate-900 shadow-default">
                <template #head>
                    <tr>
                        <th class="p-4 text-left">Unit Kerja</th>
                        <th class="p-4 text-left">Periode & Standar</th>
                        <th class="p-4 text-left">Auditor</th>
                        <th class="p-4 text-center">Tahapan / Progress</th>
                        <th class="p-4 text-center">Aksi</th>
                    </tr>
                </template>

                <template #body="{ item }">
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td class="p-4">
                            <div class="font-bold text-slate-800 dark:text-white">{{ item.assignable?.name }}</div>
                            <span :class="[
                                'text-[10px] px-2 py-0.5 rounded font-bold uppercase',
                                item.assignable_type.includes('Prodi') ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                            ]">
                                {{ item.assignable_type.includes('Prodi') ? 'Program Studi' : 'Fakultas' }}
                            </span>
                        </td>

                        <td class="p-4">
                            <div class="text-sm font-medium">{{ item.period?.name }}</div>
                            <div class="text-xs text-slate-400">{{ item.standard?.name }}</div>
                        </td>

                        <td class="p-4">
                            <div class="flex items-center gap-2">
                                <icon icon="user-tie" class="text-slate-400" />
                                <span class="text-sm">{{ item.auditor?.name }}</span>
                            </div>
                        </td>

                        <td class="p-4">
                            <div class="flex flex-col gap-2">
                                <div class="flex justify-between items-center text-[10px] font-bold uppercase">
                                    <span class="text-rose-500">{{ item.current_stage }}</span>
                                    <span>{{ getProgress(item) }}%</span>
                                </div>
                                <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                                    <div class="bg-rose-500 h-1.5 rounded-full transition-all duration-500"
                                        :style="{ width: getProgress(item) + '%' }"></div>
                                </div>
                            </div>
                        </td>

                        <td class="p-4 text-center">
                            <div class="flex justify-center gap-2">
                                <Link :href="route('admin.assignments.show', item.id)">
                                    <TButton color="emerald" size="sm" title="Lihat Detail & Indikator">
                                        <icon icon="eye" />
                                    </TButton>
                                </Link>
                                <TButton color="red" size="sm"
                                    @click="router.delete(route('admin.assignments.destroy', item.id))" title="Hapus">
                                    <icon icon="trash" />
                                </TButton>
                            </div>
                        </td>
                    </tr>
                </template>
            </TTable>
        </div>

        <TModal v-model="showModal" title="Buat Penugasan Audit Baru">
            <form @submit.prevent="submit" class="p-4 space-y-4">
                <TInputGroup label="Periode AMI" :error="form.errors.period_id">
                    <TInputSelect v-model="form.period_id" :options="periods" options-label="name" options-value="id"
                        placeholder="Pilih Periode Aktif" required />
                </TInputGroup>

                <TInputGroup label="Standar Mutu" :error="form.errors.master_standard_id">
                    <TInputSelect v-model="form.master_standard_id" :options="standards" options-label="name"
                        options-value="id" placeholder="Pilih Instrumen Standar" required />
                </TInputGroup>

                <div
                    class="grid grid-cols-2 gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200">
                    <TInputGroup label="Tipe Unit Target">
                        <TInputSelect v-model="form.assignable_type"
                            :options="[{ id: 'prodi', name: 'Program Studi' }, { id: 'faculty', name: 'Fakultas' }]"
                            options-label="name" options-value="id" />
                    </TInputGroup>

                    <TInputGroup label="Pilih Unit Kerja">
                        <TInputSelect v-if="form.assignable_type === 'prodi'" v-model="form.assignable_id"
                            :options="prodis" options-label="name" options-value="id" placeholder="Pilih Prodi" />
                        <TInputSelect v-else v-model="form.assignable_id" :options="faculties" options-label="name"
                            options-value="id" placeholder="Pilih Fakultas" />
                    </TInputGroup>
                </div>

                <TInputGroup label="Auditor Penilai" :error="form.errors.auditor_id">
                    <TInputSelect v-model="form.auditor_id" :options="auditors" options-label="name" options-value="id"
                        placeholder="Pilih Auditor" required />
                </TInputGroup>

                <div class="flex justify-end gap-3 pt-4 border-t">
                    <TButton color="gray" type="button" @click="showModal = false">Batal</TButton>
                    <TButton color="gradient-primary" type="submit" :loading="form.processing">
                        Buat & Snapshot Indikator
                    </TButton>
                </div>
            </form>
        </TModal>
    </AppLayout>
</template>

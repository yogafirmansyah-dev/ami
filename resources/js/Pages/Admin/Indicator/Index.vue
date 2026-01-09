<script setup>
import { ref, watch } from 'vue';
import { router, useForm, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

// TailAdmin Components
import TTable from '@/Components/Table/TTable.vue';
import TButton from '@/Components/Button/TButton.vue';
import TModal from '@/Components/Modal/TModal.vue';
import TInputGroup from '@/Components/Form/TInputGroup.vue';
import TInputText from '@/Components/Form/Inputs/TInputText.vue';
import TInputTextArea from '@/Components/Form/Inputs/TInputTextArea.vue'; // Untuk pernyataan yang panjang

const props = defineProps({
    standard: Object,   // Data Standar induk
    indicators: Object, // Data Indikator (paginated)
    filters: Object,
});

/* --- SEARCH LOGIC --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.standards.indicators.index', props.standard.id), { search: value }, {
        preserveState: true,
        replace: true
    });
}, 500));

/* --- MODAL & FORM LOGIC --- */
const showModal = ref(false);
const editMode = ref(false);

const form = useForm({
    id: null,
    code: '',
    requirement: '',
});

const openCreateModal = () => {
    editMode.value = false;
    form.reset();
    showModal.value = true;
};

const openEditModal = (indicator) => {
    editMode.value = true;
    form.id = indicator.id;
    form.code = indicator.code;
    form.requirement = indicator.requirement;
    showModal.value = true;
};

const submit = () => {
    if (editMode.value) {
        form.put(route('admin.standards.indicators.update', [props.standard.id, form.id]), {
            onSuccess: () => closeModal(),
        });
    } else {
        form.post(route('admin.standards.indicators.store', props.standard.id), {
            onSuccess: () => closeModal(),
        });
    }
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
};

const deleteData = (id) => {
    if (confirm('Hapus indikator ini? Data penugasan yang sudah berjalan tidak akan terpengaruh, namun penugasan baru tidak akan menyertakan indikator ini.')) {
        router.delete(route('admin.standards.indicators.destroy', [props.standard.id, id]));
    }
};
</script>

<template>
    <AppLayout :title="'Indikator: ' + standard.name">
        <template #header>Kelola Indikator</template>
        <template #subHeader>
            Standar: <span class="font-bold text-rose-600">{{ standard.name }}</span> (Target: {{ standard.target_type
            }})
        </template>

        <template #action-buttons>
            <div class="flex gap-2">
                <Link :href="route('admin.standards.index')">
                    <TButton color="gray">
                        <icon icon="arrow-left" class="mr-2" /> Kembali
                    </TButton>
                </Link>
                <TButton color="gradient-primary" @click="openCreateModal">
                    <icon icon="plus" class="mr-2" /> Tambah Indikator
                </TButton>
            </div>
        </template>

        <div class="flex flex-col gap-4">
            <div class="flex justify-end">
                <div class="w-full max-w-sm">
                    <TInputText v-model="search" placeholder="Cari kode atau isi kriteria..." />
                </div>
            </div>

            <TTable :items="indicators.data" :pagination="indicators" class="bg-white dark:bg-slate-900 shadow-default">
                <template #head>
                    <tr>
                        <th class="p-4 text-left w-24">Kode</th>
                        <th class="p-4 text-left">Pernyataan Standar / Persyaratan Mutu</th>
                        <th class="p-4 text-center w-32">Aksi</th>
                    </tr>
                </template>

                <template #body="{ item }">
                    <tr class="align-top hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td class="p-4 font-mono font-bold text-rose-600">
                            {{ item.code }}
                        </td>
                        <td class="p-4">
                            <div class="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line">
                                {{ item.requirement }}
                            </div>
                        </td>
                        <td class="p-4">
                            <div class="flex justify-center gap-2">
                                <TButton color="blue" size="sm" @click="openEditModal(item)">
                                    <icon icon="edit" />
                                </TButton>
                                <TButton color="red" size="sm" @click="deleteData(item.id)">
                                    <icon icon="trash" />
                                </TButton>
                            </div>
                        </td>
                    </tr>
                </template>
            </TTable>
        </div>

        <TModal v-model="showModal" :title="editMode ? 'Edit Indikator' : 'Tambah Indikator'">
            <form @submit.prevent="submit" class="p-4 space-y-4">
                <TInputGroup label="Kode Indikator" :error="form.errors.code" help-text="Contoh: C.1.1 atau 01">
                    <TInputText v-model="form.code" placeholder="Masukkan kode..." required />
                </TInputGroup>

                <TInputGroup label="Pernyataan / Persyaratan" :error="form.errors.requirement">
                    <TInputTextArea v-model="form.requirement"
                        placeholder="Masukkan detail kriteria mutu yang harus dipenuhi..." :rows="5" required />
                </TInputGroup>

                <div class="flex justify-end gap-3 pt-4 border-t">
                    <TButton color="gray" type="button" @click="closeModal">Batal</TButton>
                    <TButton color="gradient-primary" type="submit" :loading="form.processing">
                        {{ editMode ? 'Simpan Perubahan' : 'Simpan Indikator' }}
                    </TButton>
                </div>
            </form>
        </TModal>
    </AppLayout>
</template>

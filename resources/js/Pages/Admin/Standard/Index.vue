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
import TInputSelect from '@/Components/Form/Inputs/TInputSelect.vue';

const props = defineProps({
    standards: Object,
    filters: Object,
    // Kita kirim opsi target dari Enum di Controller (prodi, faculty)
    targetTypes: Array,
});

/* --- SEARCH LOGIC --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.standards.index'), { search: value }, {
        preserveState: true,
        replace: true
    });
}, 500));

/* --- MODAL & FORM LOGIC --- */
const showModal = ref(false);
const editMode = ref(false);

const form = useForm({
    id: null,
    name: '',
    target_type: '', // prodi atau faculty
});

const openCreateModal = () => {
    editMode.value = false;
    form.reset();
    showModal.value = true;
};

const openEditModal = (standard) => {
    editMode.value = true;
    form.id = standard.id;
    form.name = standard.name;
    form.target_type = standard.target_type;
    showModal.value = true;
};

const submit = () => {
    if (editMode.value) {
        form.put(route('admin.standards.update', form.id), {
            onSuccess: () => closeModal(),
        });
    } else {
        form.post(route('admin.standards.store'), {
            onSuccess: () => closeModal(),
        });
    }
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
};

const deleteData = (id) => {
    if (confirm('Menghapus standar akan menghapus seluruh indikator di dalamnya. Lanjutkan?')) {
        router.delete(route('admin.standards.destroy', id));
    }
};
</script>

<template>
    <AppLayout title="Master Standar Mutu">
        <template #header>Master Standar Mutu</template>
        <template #subHeader>Kelola instrumen dan kriteria penilaian AMI</template>

        <template #action-buttons>
            <TButton color="gradient-primary" @click="openCreateModal">
                <icon icon="plus" class="mr-2" /> Tambah Standar
            </TButton>
        </template>

        <div class="flex flex-col gap-4">
            <div class="flex justify-end">
                <div class="w-full max-w-sm">
                    <TInputText v-model="search" placeholder="Cari nama standar..." />
                </div>
            </div>

            <TTable :items="standards.data" :pagination="standards" class="bg-white dark:bg-slate-900 shadow-default">
                <template #head>
                    <tr>
                        <th class="p-4 text-left">Nama Standar Mutu</th>
                        <th class="p-4 text-left">Target Unit</th>
                        <th class="p-4 text-center">Jumlah Indikator</th>
                        <th class="p-4 text-center">Aksi</th>
                    </tr>
                </template>

                <template #body="{ item }">
                    <tr>
                        <td class="p-4">
                            <div class="font-bold text-slate-700 dark:text-slate-200">{{ item.name }}</div>
                            <div class="text-xs text-slate-400">ID Standar: #{{ item.id }}</div>
                        </td>
                        <td class="p-4">
                            <span :class="[
                                'px-2 py-1 rounded text-[10px] font-bold uppercase',
                                item.target_type === 'prodi' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                            ]">
                                {{ item.target_type }}
                            </span>
                        </td>
                        <td class="p-4 text-center">
                            <div class="text-lg font-semibold">{{ item.indicators_count || 0 }}</div>
                        </td>
                        <td class="p-4">
                            <div class="flex justify-center gap-2">
                                <Link :href="route('admin.standards.indicators.index', item.id)">
                                    <TButton color="emerald" size="sm" title="Kelola Indikator">
                                        <icon icon="list-check" class="mr-1" /> Indikator
                                    </TButton>
                                </Link>

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

        <TModal v-model="showModal" :title="editMode ? 'Edit Standar Mutu' : 'Tambah Standar Mutu'">
            <form @submit.prevent="submit" class="p-4 space-y-4">
                <TInputGroup label="Nama Standar" :error="form.errors.name">
                    <TInputText v-model="form.name" placeholder="Contoh: Standar Pendidikan Tinggi 2024" required />
                </TInputGroup>

                <TInputGroup label="Target Audit" :error="form.errors.target_type">
                    <TInputSelect v-model="form.target_type" :options="targetTypes" placeholder="Pilih Level Unit Kerja"
                        required />
                    <p class="mt-2 text-xs text-slate-500 italic">
                        * Standar Prodi hanya bisa ditugaskan ke Prodi, begitu pula Fakultas.
                    </p>
                </TInputGroup>

                <div class="flex justify-end gap-3 pt-4 border-t">
                    <TButton color="gray" type="button" @click="closeModal">Batal</TButton>
                    <TButton color="gradient-primary" type="submit" :loading="form.processing">
                        {{ editMode ? 'Simpan Perubahan' : 'Buat Standar' }}
                    </TButton>
                </div>
            </form>
        </TModal>
    </AppLayout>
</template>

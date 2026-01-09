<script setup>
import { ref, watch } from 'vue';
import { router, useForm, Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

// TailAdmin Components
import TTable from '@/Components/Table/TTable.vue';
import TButton from '@/Components/Button/TButton.vue';
import TModal from '@/Components/Modal/TModal.vue';
import TInputGroup from '@/Components/Form/TInputGroup.vue';
import TInputText from '@/Components/Form/Inputs/TInputText.vue';

const props = defineProps({
    faculties: Object, // Paginated data dari Controller
    filters: Object,
});

/* --- SEARCH LOGIC --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.faculties.index'), { search: value }, {
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
});

const openCreateModal = () => {
    editMode.value = false;
    form.reset();
    showModal.value = true;
};

const openEditModal = (faculty) => {
    editMode.value = true;
    form.id = faculty.id;
    form.name = faculty.name;
    showModal.value = true;
};

const submit = () => {
    if (editMode.value) {
        form.put(route('admin.faculties.update', form.id), {
            onSuccess: () => closeModal(),
        });
    } else {
        form.post(route('admin.faculties.store'), {
            onSuccess: () => closeModal(),
        });
    }
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
};

const deleteData = (id) => {
    if (confirm('Menghapus Fakultas akan berdampak pada data Prodi di bawahnya. Lanjutkan?')) {
        router.delete(route('admin.faculties.destroy', id));
    }
};
</script>

<template>
    <AppLayout title="Master Fakultas">
        <template #header>Master Fakultas</template>
        <template #subHeader>Manajemen unit kerja tingkat Fakultas / Dekanat</template>

        <template #action-buttons>
            <TButton color="gradient-primary" @click="openCreateModal">
                <icon icon="plus" class="mr-2" /> Tambah Fakultas
            </TButton>
        </template>

        <div class="flex flex-col gap-4">
            <div class="flex justify-end">
                <div class="w-full max-w-sm">
                    <TInputText v-model="search" placeholder="Cari fakultas..." />
                </div>
            </div>

            <TTable :items="faculties.data" :pagination="faculties" class="bg-white dark:bg-slate-900 shadow-default">
                <template #head>
                    <tr>
                        <th class="p-4 text-left w-16 text-center">No</th>
                        <th class="p-4 text-left">Nama Fakultas</th>
                        <th class="p-4 text-left">Total Prodi</th>
                        <th class="p-4 text-center">Aksi</th>
                    </tr>
                </template>

                <template #body="{ item, index }">
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td class="p-4 text-center text-slate-500">
                            {{ faculties.from + index }}
                        </td>
                        <td class="p-4 font-medium text-slate-700 dark:text-slate-200">
                            {{ item.name }}
                        </td>
                        <td class="p-4">
                            <span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-bold">
                                {{ item.prodis_count || 0 }} Prodi
                            </span>
                        </td>
                        <td class="p-4">
                            <div class="flex justify-center gap-2">
                                <TButton color="blue" size="sm" @click="openEditModal(item)" title="Edit">
                                    <icon icon="edit" />
                                </TButton>
                                <TButton color="red" size="sm" @click="deleteData(item.id)" title="Hapus">
                                    <icon icon="trash" />
                                </TButton>
                            </div>
                        </td>
                    </tr>
                </template>
            </TTable>
        </div>

        <TModal v-model="showModal" :title="editMode ? 'Edit Fakultas' : 'Tambah Fakultas'">
            <form @submit.prevent="submit" class="p-4 space-y-6">
                <TInputGroup label="Nama Fakultas" :error="form.errors.name">
                    <TInputText v-model="form.name" placeholder="Masukkan nama fakultas (ex: Fakultas Teknik)"
                        required />
                </TInputGroup>

                <div class="flex justify-end gap-3 pt-4 border-t">
                    <TButton color="gray" type="button" @click="closeModal">Batal</TButton>
                    <TButton color="gradient-primary" type="submit" :loading="form.processing">
                        {{ editMode ? 'Simpan Perubahan' : 'Tambah Data' }}
                    </TButton>
                </div>
            </form>
        </TModal>
    </AppLayout>
</template>

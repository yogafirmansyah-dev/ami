<script setup>
import { ref, watch } from 'vue';
import { router, useForm, Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

// TailAdmin Components (Sesuaikan dengan nama komponen di template Anda)
import TTable from '@/Components/Table/TTable.vue';
import TButton from '@/Components/Button/TButton.vue';
import TModal from '@/Components/Modal/TModal.vue';
import TInputGroup from '@/Components/Form/TInputGroup.vue';
import TInputText from '@/Components/Form/Inputs/TInputText.vue';
import TInputSelect from '@/Components/Form/Inputs/TInputSelect.vue';

const props = defineProps({
    prodis: Object, // Hasil pagination dari Controller
    faculties: Array, // Data fakultas untuk dropdown
    filters: Object,
});

/* --- LOGIKA PENCARIAN & FILTER --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.prodis.index'), { search: value }, {
        preserveState: true,
        replace: true
    });
}, 500));

/* --- LOGIKA MODAL & FORM --- */
const showModal = ref(false);
const editMode = ref(false);

const form = useForm({
    id: null,
    name: '',
    faculty_id: '',
});

const openCreateModal = () => {
    editMode.value = false;
    form.reset();
    showModal.value = true;
};

const openEditModal = (prodi) => {
    editMode.value = true;
    form.id = prodi.id;
    form.name = prodi.name;
    form.faculty_id = prodi.faculty_id;
    showModal.value = true;
};

const submit = () => {
    if (editMode.value) {
        form.put(route('admin.prodis.update', form.id), {
            onSuccess: () => closeModal(),
        });
    } else {
        form.post(route('admin.prodis.store'), {
            onSuccess: () => closeModal(),
        });
    }
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
};

const deleteData = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        router.delete(route('admin.prodis.destroy', id));
    }
};
</script>

<template>
    <AppLayout title="Master Program Studi">
        <template #header>Master Program Studi</template>
        <template #subHeader>Manajemen data unit kerja tingkat Program Studi</template>

        <template #action-buttons>
            <TButton color="gradient-primary" @click="openCreateModal">
                <icon icon="plus" class="mr-2" /> Tambah Prodi
            </TButton>
        </template>

        <div class="flex flex-col gap-4">
            <div class="flex justify-end">
                <div class="w-full max-w-sm">
                    <TInputText v-model="search" placeholder="Cari nama prodi..." />
                </div>
            </div>

            <TTable :items="prodis.data" :pagination="prodis" class="bg-white dark:bg-slate-900 shadow-default">
                <template #head>
                    <tr>
                        <th class="p-4 text-left">Nama Program Studi</th>
                        <th class="p-4 text-left">Fakultas</th>
                        <th class="p-4 text-center">Aksi</th>
                    </tr>
                </template>
                <template #body="{ item }">
                    <tr>
                        <td class="p-4">{{ item.name }}</td>
                        <td class="p-4">
                            <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-bold">
                                {{ item.faculty?.name || 'N/A' }}
                            </span>
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

        <TModal v-model="showModal" :title="editMode ? 'Edit Program Studi' : 'Tambah Program Studi'">
            <form @submit.prevent="submit" class="space-y-4">
                <TInputGroup label="Nama Program Studi" :error="form.errors.name">
                    <TInputText v-model="form.name" placeholder="Contoh: S1 Informatika" required />
                </TInputGroup>

                <TInputGroup label="Fakultas" :error="form.errors.faculty_id">
                    <TInputSelect v-model="form.faculty_id" :options="faculties" options-label="name" options-value="id"
                        placeholder="Pilih Fakultas" required />
                </TInputGroup>

                <div class="flex justify-end gap-3 mt-6">
                    <TButton color="gray" type="button" @click="closeModal">Batal</TButton>
                    <TButton color="gradient-primary" type="submit" :loading="form.processing">
                        {{ editMode ? 'Simpan Perubahan' : 'Tambah Data' }}
                    </TButton>
                </div>
            </form>
        </TModal>
    </AppLayout>
</template>

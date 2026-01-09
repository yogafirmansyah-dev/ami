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
import TInputDate from '@/Components/Form/Inputs/TInputDate.vue'; // Pastikan komponen ini ada
import TInputCheckBox from '@/Components/Form/Inputs/TInputCheckBox.vue'; // Digunakan untuk Toggle

const props = defineProps({
    periods: Object,
    filters: Object,
});

/* --- SEARCH LOGIC --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.periods.index'), { search: value }, {
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
    start_date: '',
    end_date: '',
    is_active: false,
});

const openCreateModal = () => {
    editMode.value = false;
    form.reset();
    form.is_active = false;
    showModal.value = true;
};

const openEditModal = (period) => {
    editMode.value = true;
    form.id = period.id;
    form.name = period.name;
    form.start_date = period.start_date;
    form.end_date = period.end_date;
    form.is_active = !!period.is_active;
    showModal.value = true;
};

const submit = () => {
    if (editMode.value) {
        form.put(route('admin.periods.update', form.id), {
            onSuccess: () => closeModal(),
        });
    } else {
        form.post(route('admin.periods.store'), {
            onSuccess: () => closeModal(),
        });
    }
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
};

const deleteData = (id) => {
    if (confirm('Menghapus periode akan menghapus seluruh data penugasan terkait. Lanjutkan?')) {
        router.delete(route('admin.periods.destroy', id));
    }
};

/* --- TOGGLE STATUS CEPAT --- */
const toggleStatus = (period) => {
    router.patch(route('admin.periods.update', period.id), {
        is_active: !period.is_active,
        // Kirim data lama agar validasi backend tidak error
        name: period.name,
        start_date: period.start_date,
        end_date: period.end_date
    }, { preserveScroll: true });
};
</script>

<template>
    <AppLayout title="Master Periode AMI">
        <template #header>Master Periode AMI</template>
        <template #subHeader>Atur rentang waktu pelaksanaan audit dan aktivasi sistem</template>

        <template #action-buttons>
            <TButton color="gradient-primary" @click="openCreateModal">
                <icon icon="plus" class="mr-2" /> Tambah Periode
            </TButton>
        </template>

        <div class="flex flex-col gap-4">
            <div class="flex justify-end">
                <div class="w-full max-w-sm">
                    <TInputText v-model="search" placeholder="Cari periode (ex: 2024)..." />
                </div>
            </div>

            <TTable :items="periods.data" :pagination="periods" class="bg-white dark:bg-slate-900 shadow-default">
                <template #head>
                    <tr>
                        <th class="p-4 text-left">Nama Periode</th>
                        <th class="p-4 text-left">Rentang Waktu</th>
                        <th class="p-4 text-center">Status</th>
                        <th class="p-4 text-center">Aksi</th>
                    </tr>
                </template>

                <template #body="{ item }">
                    <tr :class="{ 'bg-emerald-50/50 dark:bg-emerald-900/10': item.is_active }">
                        <td class="p-4">
                            <div class="font-bold">{{ item.name }}</div>
                            <div v-if="item.is_active" class="text-[10px] text-emerald-600 font-bold uppercase">Sedang
                                Berjalan</div>
                        </td>
                        <td class="p-4 text-sm">
                            <div class="flex items-center gap-2">
                                <icon icon="calendar" class="text-slate-400" />
                                {{ item.start_date }} s/d {{ item.end_date }}
                            </div>
                        </td>
                        <td class="p-4 text-center">
                            <button @click="toggleStatus(item)" :title="item.is_active ? 'Non-aktifkan' : 'Aktifkan'">
                                <span :class="[
                                    'px-3 py-1 rounded-full text-xs font-bold',
                                    item.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                                ]">
                                    {{ item.is_active ? 'AKTIF' : 'NON-AKTIF' }}
                                </span>
                            </button>
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

        <TModal v-model="showModal" :title="editMode ? 'Edit Periode' : 'Tambah Periode'">
            <form @submit.prevent="submit" class="p-4 space-y-4">
                <TInputGroup label="Nama Periode" :error="form.errors.name">
                    <TInputText v-model="form.name" placeholder="Contoh: AMI Siklus 2024" required />
                </TInputGroup>

                <div class="grid grid-cols-2 gap-4">
                    <TInputGroup label="Tanggal Mulai" :error="form.errors.start_date">
                        <TInputDate v-model="form.start_date" required />
                    </TInputGroup>
                    <TInputGroup label="Tanggal Selesai" :error="form.errors.end_date">
                        <TInputDate v-model="form.end_date" required />
                    </TInputGroup>
                </div>

                <TInputGroup label="Status Aktivasi">
                    <div class="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <TInputCheckBox v-model="form.is_active" :checked="form.is_active" />
                        <span class="text-sm text-slate-600 dark:text-slate-400">
                            Aktifkan periode ini (Hanya satu periode yang boleh aktif dalam satu waktu)
                        </span>
                    </div>
                </TInputGroup>

                <div class="flex justify-end gap-3 pt-4 border-t">
                    <TButton color="gray" type="button" @click="closeModal">Batal</TButton>
                    <TButton color="gradient-primary" type="submit" :loading="form.processing">
                        {{ editMode ? 'Simpan Perubahan' : 'Mulai Periode' }}
                    </TButton>
                </div>
            </form>
        </TModal>
    </AppLayout>
</template>

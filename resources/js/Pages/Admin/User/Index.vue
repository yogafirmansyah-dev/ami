<script setup>
import { ref, watch, computed } from 'vue';
import { router, useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

// TailAdmin Components
import TTable from '@/Components/Table/TTable.vue';
import TButton from '@/Components/Button/TButton.vue';
import TModal from '@/Components/Modal/TModal.vue';
import TInputGroup from '@/Components/Form/TInputGroup.vue';
import TInputText from '@/Components/Form/Inputs/TInputText.vue';
import TInputSelect from '@/Components/Form/Inputs/TInputSelect.vue';
import TBadge from '@/Components/Badge/TBadge.vue'; // Jika tersedia di template Anda

const props = defineProps({
    users: Object,
    filters: Object,
    roles: Array, // ['admin', 'auditor', 'auditee']
    prodis: Array,
    faculties: Array
});

/* --- SEARCH LOGIC --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.users.index'), { search: value }, { preserveState: true, replace: true });
}, 500));

/* --- MODAL & FORM LOGIC --- */
const showModal = ref(false);
const editMode = ref(false);

const form = useForm({
    id: null,
    name: '',
    email: '',
    password: '',
    role: '',
    prodi_id: null,
    faculty_id: null,
});

const openCreateModal = () => {
    editMode.value = false;
    form.reset();
    showModal.value = true;
};

const openEditModal = (user) => {
    editMode.value = true;
    form.id = user.id;
    form.name = user.name;
    form.email = user.email;
    form.role = user.role;
    form.prodi_id = user.prodi_id;
    form.faculty_id = user.faculty_id;
    form.password = ''; // Kosongkan password saat edit
    showModal.value = true;
};

const submit = () => {
    if (editMode.value) {
        form.put(route('admin.users.update', form.id), { onSuccess: () => closeModal() });
    } else {
        form.post(route('admin.users.store'), { onSuccess: () => closeModal() });
    }
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
};

const reset2FA = (id) => {
    if (confirm('Reset Two Factor Authentication untuk user ini?')) {
        router.post(route('admin.users.reset-2fa', id));
    }
};

// Helper untuk menampilkan nama unit di tabel
const getUnitName = (user) => {
    if (user.role !== 'auditee') return '-';
    return user.prodi?.name || user.faculty?.name || 'Unit Belum Set';
};
</script>

<template>
    <AppLayout title="Manajemen User">
        <template #header>Manajemen Pengguna</template>
        <template #subHeader>Kelola hak akses Admin, Auditor, dan Auditee Unit Kerja</template>

        <template #action-buttons>
            <TButton color="gradient-primary" @click="openCreateModal">
                <icon icon="user-plus" class="mr-2" /> Tambah User
            </TButton>
        </template>

        <div class="flex flex-col gap-4">
            <div class="flex justify-end">
                <div class="w-full max-w-sm">
                    <TInputText v-model="search" placeholder="Cari nama atau email..." />
                </div>
            </div>

            <TTable :items="users.data" :pagination="users" class="bg-white dark:bg-slate-900 shadow-default">
                <template #head>
                    <tr>
                        <th class="p-4 text-left">Pengguna</th>
                        <th class="p-4 text-left">Role</th>
                        <th class="p-4 text-left">Unit Kerja</th>
                        <th class="p-4 text-center">2FA</th>
                        <th class="p-4 text-center">Aksi</th>
                    </tr>
                </template>

                <template #body="{ item }">
                    <tr>
                        <td class="p-4">
                            <div class="flex items-center gap-3">
                                <img :src="item.profile_photo_url" class="w-8 h-8 rounded-full border" />
                                <div>
                                    <div class="font-bold text-sm">{{ item.name }}</div>
                                    <div class="text-xs text-slate-400">{{ item.email }}</div>
                                </div>
                            </div>
                        </td>
                        <td class="p-4">
                            <span :class="[
                                'px-2 py-1 rounded text-[10px] font-bold uppercase',
                                item.role === 'admin' ? 'bg-rose-100 text-rose-700' :
                                    item.role === 'auditor' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                            ]">
                                {{ item.role }}
                            </span>
                        </td>
                        <td class="p-4 text-sm text-slate-600 dark:text-slate-400">
                            {{ getUnitName(item) }}
                        </td>
                        <td class="p-4 text-center">
                            <icon v-if="item.two_factor_confirmed_at" icon="shield-check" class="text-emerald-500"
                                title="2FA Aktif" />
                            <icon v-else icon="shield-x" class="text-slate-300" title="2FA Non-aktif" />
                        </td>
                        <td class="p-4">
                            <div class="flex justify-center gap-2">
                                <TButton v-if="item.two_factor_confirmed_at" color="gray" size="sm"
                                    @click="reset2FA(item.id)" title="Reset 2FA">
                                    <icon icon="key" />
                                </TButton>
                                <TButton color="blue" size="sm" @click="openEditModal(item)">
                                    <icon icon="edit" />
                                </TButton>
                                <TButton color="red" size="sm"
                                    @click="router.delete(route('admin.users.destroy', item.id))">
                                    <icon icon="trash" />
                                </TButton>
                            </div>
                        </td>
                    </tr>
                </template>
            </TTable>
        </div>

        <TModal v-model="showModal" :title="editMode ? 'Edit User' : 'Tambah User'">
            <form @submit.prevent="submit" class="p-4 space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <TInputGroup label="Nama Lengkap" :error="form.errors.name">
                        <TInputText v-model="form.name" required />
                    </TInputGroup>
                    <TInputGroup label="Email" :error="form.errors.email">
                        <TInputText v-model="form.email" type="email" required />
                    </TInputGroup>
                </div>

                <TInputGroup label="Password" :error="form.errors.password"
                    :help-text="editMode ? 'Kosongkan jika tidak ingin ganti password' : ''">
                    <TInputText v-model="form.password" type="password" :required="!editMode" />
                </TInputGroup>

                <TInputGroup label="Role / Hak Akses" :error="form.errors.role">
                    <TInputSelect v-model="form.role" :options="roles" placeholder="Pilih Role" required />
                </TInputGroup>

                <transition name="fade">
                    <div v-if="form.role === 'auditee'"
                        class="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 space-y-4">
                        <div class="text-xs font-bold text-slate-500 uppercase">Penempatan Unit Kerja</div>
                        <div class="grid grid-cols-2 gap-4">
                            <TInputGroup label="Program Studi">
                                <TInputSelect v-model="form.prodi_id" :options="prodis" options-label="name"
                                    options-value="id" placeholder="Pilih Prodi" />
                            </TInputGroup>
                            <TInputGroup label="Fakultas">
                                <TInputSelect v-model="form.faculty_id" :options="faculties" options-label="name"
                                    options-value="id" placeholder="Pilih Fakultas" />
                            </TInputGroup>
                        </div>
                        <p class="text-[10px] text-amber-600 italic">* Pilih salah satu (Prodi ATAU Fakultas) sesuai
                            cakupan
                            auditnya.</p>
                    </div>
                </transition>

                <div class="flex justify-end gap-3 pt-4 border-t">
                    <TButton color="gray" type="button" @click="closeModal">Batal</TButton>
                    <TButton color="gradient-primary" type="submit" :loading="form.processing">
                        {{ editMode ? 'Simpan Perubahan' : 'Buat User' }}
                    </TButton>
                </div>
            </form>
        </TModal>
    </AppLayout>
</template>

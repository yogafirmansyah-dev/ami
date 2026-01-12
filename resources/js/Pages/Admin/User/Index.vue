<script setup>
import { ref, watch } from 'vue';
import { router, useForm, Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    users: Object, // Paginated data
    filters: Object,
    roles: Array,
    prodis: Array,
    faculties: Array
});

/* --- LOGIKA PENCARIAN --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.users.index'), { search: value }, { preserveState: true, replace: true });
}, 500));

/* --- LOGIKA MODAL & FORM --- */
const showModal = ref(false);
const editMode = ref(false);

const form = useForm({
    id: null,
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
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
    form.password = '';
    form.password_confirmation = '';
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
};

const submit = () => {
    if (editMode.value) {
        form.put(route('admin.users.update', form.id), { onSuccess: () => closeModal() });
    } else {
        form.post(route('admin.users.store'), { onSuccess: () => closeModal() });
    }
};

const reset2FA = (id) => {
    if (confirm('Reset Two Factor Authentication untuk user ini?')) {
        router.post(route('admin.users.reset-2fa', id));
    }
};

const deleteData = (id) => {
    if (confirm('Hapus pengguna ini secara permanen?')) {
        router.delete(route('admin.users.destroy', id));
    }
};

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
            <button @click="openCreateModal"
                class="inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-sm transition-all active:scale-95">
                <span class="mr-2">+</span> Tambah User
            </button>
        </template>

        <div class="space-y-4">
            <div class="flex justify-end">
                <div class="relative w-full max-w-sm">
                    <input v-model="search" type="text" placeholder="Cari nama atau email..."
                        class="w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 outline-none transition-all" />
                </div>
            </div>

            <div
                class="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <table class="w-full text-sm text-left">
                    <thead
                        class="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 uppercase text-[11px] font-bold tracking-wider">
                        <tr>
                            <th class="p-4">Pengguna</th>
                            <th class="p-4">Role</th>
                            <th class="p-4">Unit Kerja</th>
                            <th class="p-4 text-center">2FA</th>
                            <th class="p-4 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                        <tr v-for="item in users.data" :key="item.id"
                            class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td class="p-4">
                                <div class="flex items-center gap-3">
                                    <img :src="item.profile_photo_url"
                                        class="w-9 h-9 rounded-full border-2 border-slate-100" />
                                    <div>
                                        <div class="font-bold text-slate-700 dark:text-slate-200">{{ item.name }}</div>
                                        <div class="text-xs text-slate-400">{{ item.email }}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="p-4">
                                <span :class="[
                                    'px-2 py-0.5 rounded text-[10px] font-bold uppercase border',
                                    item.role === 'admin' ? 'bg-rose-50 text-rose-700 border-rose-100' :
                                        item.role === 'auditor' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-blue-50 text-blue-700 border-blue-100'
                                ]">
                                    {{ item.role }}
                                </span>
                            </td>
                            <td class="p-4 text-xs text-slate-600 dark:text-slate-400 font-medium">
                                {{ getUnitName(item) }}
                            </td>
                            <td class="p-4 text-center">
                                <span v-if="item.two_factor_confirmed_at" class="text-emerald-500" title="2FA Aktif">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </span>
                                <span v-else class="text-slate-200 dark:text-slate-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>
                            </td>
                            <td class="p-4">
                                <div class="flex justify-center gap-2">
                                    <button v-if="item.two_factor_confirmed_at" @click="reset2FA(item.id)"
                                        class="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                                        title="Reset 2FA">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                        </svg>
                                    </button>
                                    <button @click="openEditModal(item)"
                                        class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button @click="deleteData(item.id)"
                                        class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex items-center justify-between py-2">
                <div class="text-xs text-slate-500">
                    Menampilkan {{ users.from }} - {{ users.to }} dari {{ users.total }} pengguna
                </div>
                <div class="flex gap-1">
                    <button v-for="link in users.links" :key="link.label" v-html="link.label"
                        @click="link.url ? $inertia.visit(link.url) : null" :disabled="!link.url"
                        class="px-3 py-1 text-xs rounded-md border transition-all" :class="[
                            link.active ? 'bg-rose-600 text-white border-rose-600' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50',
                            !link.url ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                        ]" />
                </div>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" @click="closeModal"></div>

            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <h3 class="text-lg font-bold text-slate-800 dark:text-white">
                        {{ editMode ? 'Edit User' : 'Tambah User' }}
                    </h3>
                    <button @click="closeModal" class="text-slate-400 hover:text-slate-600 text-2xl">&times;</button>
                </div>

                <form @submit.prevent="submit" class="p-6 space-y-5">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Nama Lengkap</label>
                            <input v-model="form.name" type="text" required
                                class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900" />
                            <p v-if="form.errors.name" class="text-xs text-red-500 mt-1">{{ form.errors.name }}</p>
                        </div>
                        <div class="space-y-1.5">
                            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
                            <input v-model="form.email" type="email" required
                                class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900" />
                            <p v-if="form.errors.email" class="text-xs text-red-500 mt-1">{{ form.errors.email }}</p>
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                        <input v-model="form.password" type="password" :required="!editMode"
                            class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900" />
                        <p v-if="editMode" class="text-[10px] text-slate-400 mt-1 italic">Kosongkan jika tidak ingin
                            ganti
                            password</p>
                        <p v-if="form.errors.password" class="text-xs text-red-500 mt-1">{{ form.errors.password }}</p>
                    </div>
                    <div class="space-y-1.5">
                        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Password
                            Confirmation</label>
                        <input v-model="form.password_confirmation" type="password" :required="!editMode"
                            class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900" />
                        <p v-if="form.errors.password_confirmation" class="text-xs text-red-500 mt-1">{{
                            form.errors.password_confirmation }}</p>
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Role / Hak Akses</label>
                        <select v-model="form.role" required
                            class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200">
                            <option value="" disabled>Pilih Role</option>
                            <option v-for="role in roles" :key="role" :value="role">{{ role.toUpperCase() }}</option>
                        </select>
                        <p v-if="form.errors.role" class="text-xs text-red-500 mt-1">{{ form.errors.role }}</p>
                    </div>

                    <transition enter-active-class="transition ease-out duration-200"
                        enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0">
                        <div v-if="form.role === 'auditee'"
                            class="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4">
                            <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Penempatan Unit
                                Kerja
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-1.5">
                                    <label class="text-xs font-semibold text-slate-500">Program Studi</label>
                                    <select v-model="form.prodi_id"
                                        class="w-full px-3 py-1.5 text-xs border border-slate-200 rounded-lg bg-white outline-none">
                                        <option :value="null">Tidak Ada</option>
                                        <option v-for="prodi in prodis" :key="prodi.id" :value="prodi.id">{{ prodi.name
                                            }}
                                        </option>
                                    </select>
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-xs font-semibold text-slate-500">Fakultas</label>
                                    <select v-model="form.faculty_id"
                                        class="w-full px-3 py-1.5 text-xs border border-slate-200 rounded-lg bg-white outline-none">
                                        <option :value="null">Tidak Ada</option>
                                        <option v-for="fac in faculties" :key="fac.id" :value="fac.id">{{ fac.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <p class="text-[10px] text-amber-600 italic leading-tight">* Pilih unit yang sesuai dengan
                                cakupan
                                audit pengguna ini.</p>
                        </div>
                    </transition>

                    <div class="flex justify-end gap-3 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <button type="button" @click="closeModal"
                            class="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Batal</button>
                        <button type="submit" :disabled="form.processing"
                            class="px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-sm disabled:opacity-50 transition-colors">
                            <span v-if="form.processing">Memproses...</span>
                            <span v-else>{{ editMode ? 'Simpan Perubahan' : 'Buat User' }}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>

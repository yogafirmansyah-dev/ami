<script setup>
import { ref, watch } from 'vue';
import { router, useForm, Head, usePage, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    users: Object, // Paginated data
    filters: Object,
    roles: Array,
    prodis: Array,
    faculties: Array
});

/* --- LOGIKA PENCARIAN & PAGINATION --- */
const search = ref(props.filters.search);
const perPage = ref(props.filters.per_page || 10);

watch(search, debounce((value) => {
    router.get(route('admin.users.index'), { search: value, per_page: perPage.value }, { preserveState: true, replace: true });
}, 500));

watch(perPage, (value) => {
    router.get(route('admin.users.index'), { search: search.value, per_page: value }, { preserveState: true, replace: true });
});

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
        form.put(route('admin.users.update', form.id), {
            onSuccess: () => closeModal(),
            onError: () => {
                usePage().props.flash.toastr = {
                    type: 'error',
                    content: 'Terdapat kesalahan validasi, mohon cek kembali form anda.',
                    position: 'top-right'
                };
            }
        });
    } else {
        form.post(route('admin.users.store'), {
            onSuccess: () => closeModal(),
            onError: () => {
                usePage().props.flash.toastr = {
                    type: 'error',
                    content: 'Terdapat kesalahan validasi, mohon cek kembali form anda.',
                    position: 'top-right'
                };
            }
        });
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
                class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10">
                <span
                    class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none">+</span>
                Tambah User
            </button>
        </template>

        <div class="space-y-6">
            <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div class="flex items-stretch gap-3 w-full max-w-2xl">
                    <div class="relative flex-1 group">
                        <span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <icon icon="fa-solid fa-magnifying-glass"
                                class="text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors" />
                        </span>
                        <input v-model="search" type="text" placeholder="Cari nama atau email..."
                            class="w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" />
                    </div>

                    <div
                        class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300">
                        <span
                            class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2">Tampilkan</span>
                        <select v-model="perPage"
                            class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none">
                            <option :value="10">10</option>
                            <option :value="25">25</option>
                            <option :value="50">50</option>
                            <option :value="100">100</option>
                        </select>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <!-- Slot action -->
                </div>
            </div>

            <div
                class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden">
                <div class="overflow-x-auto custom-scrollbar">
                    <table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full">
                        <thead>
                            <tr
                                class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50">
                                <th class="p-6 md:p-8 pl-8 text-center">No</th>
                                <th class="p-6 md:p-8 pl-8">Pengguna</th>
                                <th class="p-6 md:p-8">Role</th>
                                <th class="p-6 md:p-8">Unit Kerja</th>
                                <th class="p-6 md:p-8 text-center">2FA</th>
                                <th class="p-6 md:p-8 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <tr v-for="item in users.data" :key="item.id"
                                class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300">
                                <td class="p-6 md:p-8 text-center">
                                    <span
                                        class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20">
                                        {{ users.from + users.data.indexOf(item) }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8 pl-8">
                                    <div class="flex items-center gap-4">
                                        <img :src="item.profile_photo_url"
                                            class="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-sm" />
                                        <div>
                                            <div class="font-bold text-slate-800 dark:text-slate-200 text-sm mb-0.5">
                                                {{ item.name }}</div>
                                            <div class="text-[10px] font-medium text-slate-400 tracking-tight">{{
                                                item.email }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <span :class="[
                                        'px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border shadow-sm',
                                        item.role === 'admin' ? 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 border-rose-100 dark:border-rose-500/20' :
                                            item.role === 'auditor' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 border-amber-100 dark:border-amber-500/20' :
                                                'bg-blue-50 dark:bg-blue-500/10 text-blue-600 border-blue-100 dark:border-blue-500/20'
                                    ]">
                                        {{ item.role }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8">
                                    <span class="text-xs font-bold text-slate-600 dark:text-slate-400">
                                        {{ getUnitName(item) }}
                                    </span>
                                </td>
                                <td class="p-6 md:p-8 text-center">
                                    <div v-if="item.two_factor_confirmed_at"
                                        class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 border border-emerald-100 dark:border-emerald-500/20"
                                        title="2FA Aktif">
                                        <icon icon="fa-solid fa-shield-halved" class="text-xs" />
                                    </div>
                                    <div v-else
                                        class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-300 border border-slate-100 dark:border-slate-700">
                                        <icon icon="fa-solid fa-lock-open" class="text-xs" />
                                    </div>
                                </td>
                                <td class="p-6 md:p-8">
                                    <div class="flex justify-center gap-2">
                                        <button v-if="item.two_factor_confirmed_at" @click="reset2FA(item.id)"
                                            class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-amber-200 active:scale-95"
                                            title="Reset 2FA">
                                            <icon icon="fa-solid fa-key" class="text-[10px]" />
                                        </button>
                                        <button @click="openEditModal(item)"
                                            class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95">
                                            <icon icon="fa-solid fa-pencil" class="text-[10px]" />
                                        </button>
                                        <button @click="deleteData(item.id)"
                                            class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95">
                                            <icon icon="fa-solid fa-trash" class="text-[10px]" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="users.data.length === 0">
                                <td colspan="5" class="p-12 text-center">
                                    <div class="flex flex-col items-center justify-center opacity-50">
                                        <icon icon="fa-solid fa-users-slash"
                                            class="text-4xl text-slate-300 dark:text-slate-600 mb-4" />
                                        <p class="text-xs font-black text-slate-400 uppercase tracking-widest italic">
                                            Belum ada pengguna ditemukan</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- PAGINATION -->
                <div
                    class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm">
                    <div
                        class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left">
                        Data {{ users.from }} - {{ users.to }} dari total {{ users.total }}
                    </div>
                    <div class="flex flex-wrap justify-center gap-1.5">
                        <template v-for="(link, k) in users.links" :key="k">
                            <Link v-if="link.url" :href="link.url" :class="[
                                'px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all cursor-pointer',
                                link.active
                                    ? 'bg-slate-900 dark:bg-rose-600 text-white border-slate-900 dark:border-rose-600 shadow-lg shadow-slate-900/20'
                                    : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:text-rose-500'
                            ]" v-html="link.label" />

                            <span v-else :class="[
                                'px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all opacity-30 cursor-not-allowed',
                                'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800'
                            ]" v-html="link.label" />
                        </template>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" @click="closeModal"></div>

            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10 flex flex-col max-h-[85vh]">
                <div
                    class="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center shrink-0">
                    <div>
                        <h3
                            class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
                            {{ editMode ? 'Edit User' : 'User Baru' }}
                        </h3>
                        <p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1">
                            Manajemen Hak Akses
                        </p>
                    </div>
                    <button @click="closeModal"
                        class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg">&times;</button>
                </div>

                <form @submit.prevent="submit" class="p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Nama
                                Lengkap</label>
                            <input v-model="form.name" type="text" required
                                class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" />
                            <p v-if="form.errors.name" class="text-xs text-rose-500 font-bold ml-1">{{ form.errors.name
                            }}</p>
                        </div>
                        <div class="space-y-2">
                            <label
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Email</label>
                            <input v-model="form.email" type="email" required
                                class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" />
                            <p v-if="form.errors.email" class="text-xs text-rose-500 font-bold ml-1">{{
                                form.errors.email }}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Password</label>
                            <input v-model="form.password" type="password" :required="!editMode"
                                class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" />
                            <p v-if="editMode" class="text-[10px] text-slate-400 font-bold italic ml-1">* Kosongkan jika
                                tidak ganti</p>
                            <p v-if="form.errors.password" class="text-xs text-rose-500 font-bold ml-1">{{
                                form.errors.password }}</p>
                        </div>
                        <div class="space-y-2">
                            <label
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Konfirmasi
                                Password</label>
                            <input v-model="form.password_confirmation" type="password" :required="!editMode"
                                class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" />
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Role
                            / Hak Akses</label>
                        <select v-model="form.role" required
                            class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm">
                            <option value="" disabled>Pilih Role</option>
                            <option v-for="role in roles" :key="role" :value="role">{{ role.toUpperCase() }}</option>
                        </select>
                        <p v-if="form.errors.role" class="text-xs text-rose-500 font-bold ml-1">{{ form.errors.role }}
                        </p>
                    </div>

                    <transition enter-active-class="transition ease-out duration-300"
                        enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0">
                        <div v-if="form.role === 'auditee'"
                            class="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-4">
                            <div class="flex items-center gap-2">
                                <icon icon="fa-solid fa-building-user" class="text-rose-500" />
                                <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Penempatan
                                    Unit Kerja</span>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label class="text-[10px] font-bold text-slate-500 uppercase">Program Studi</label>
                                    <select v-model="form.prodi_id"
                                        class="w-full px-4 py-2.5 text-xs font-bold border-none ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-rose-500">
                                        <option :value="null">Tidak Ada</option>
                                        <option v-for="prodi in prodis" :key="prodi.id" :value="prodi.id">{{ prodi.name
                                        }}
                                        </option>
                                    </select>
                                    <p v-if="form.errors.prodi_id" class="text-xs text-rose-500 font-bold ml-1">{{
                                        form.errors.prodi_id }}</p>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-[10px] font-bold text-slate-500 uppercase">Fakultas</label>
                                    <select v-model="form.faculty_id"
                                        class="w-full px-4 py-2.5 text-xs font-bold border-none ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-rose-500">
                                        <option :value="null">Tidak Ada</option>
                                        <option v-for="fac in faculties" :key="fac.id" :value="fac.id">{{ fac.name }}
                                        </option>
                                    </select>
                                    <p v-if="form.errors.faculty_id" class="text-xs text-rose-500 font-bold ml-1">{{
                                        form.errors.faculty_id }}</p>
                                </div>
                            </div>
                            <p class="text-[10px] text-rose-500 font-bold italic leading-tight">* Pilih unit yang sesuai
                                dengan cakupan audit pengguna ini.</p>
                        </div>
                    </transition>

                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <button type="submit" :disabled="form.processing"
                            class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50">
                            {{ form.processing ? 'Menyimpan...' : (editMode ? 'Simpan Perubahan' : 'Buat User Baru') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    height: 6px;
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #e2e8f0;
    border-radius: 10px;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
}
</style>

<script setup>
import { ref, watch } from 'vue';
import { router, useForm, Head, usePage, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';



const props = defineProps({
    periods: Object,
    filters: Object,
});

/* --- LOGIKA PENCARIAN & PAGINATION --- */
const search = ref(props.filters.search);
const perPage = ref(props.filters.per_page || 10);

watch(search, debounce((value) => {
    router.get(route('admin.periods.index'), { search: value, per_page: perPage.value }, {
        preserveState: true,
        replace: true
    });
}, 500));

watch(perPage, (value) => {
    router.get(route('admin.periods.index'), { search: search.value, per_page: value }, {
        preserveState: true,
        replace: true
    });
});

/* --- LOGIKA MODAL & FORM --- */
const showModal = ref(false);
const editMode = ref(false);

const form = useForm({
    id: null,
    name: '',
    is_active: false,
    doc_audit_start: '',
    doc_audit_end: '',
    field_audit_start: '',
    field_audit_end: '',
    finding_start: '',
    finding_end: '',
    reporting_start: '',
    reporting_end: '',
    rtm_rtl_start: '',
    rtm_rtl_end: '',
});

const openCreateModal = () => {
    editMode.value = false;
    form.reset();
    showModal.value = true;
};

const openEditModal = (period) => {
    editMode.value = true;
    form.id = period.id;
    form.name = period.name;
    form.is_active = !!period.is_active;
    form.doc_audit_start = parseDate(period.doc_audit_start);
    form.doc_audit_end = parseDate(period.doc_audit_end);
    form.field_audit_start = parseDate(period.field_audit_start);
    form.field_audit_end = parseDate(period.field_audit_end);
    form.finding_start = parseDate(period.finding_start);
    form.finding_end = parseDate(period.finding_end);
    form.reporting_start = parseDate(period.reporting_start);
    form.reporting_end = parseDate(period.reporting_end);
    form.rtm_rtl_start = parseDate(period.rtm_rtl_start);
    form.rtm_rtl_end = parseDate(period.rtm_rtl_end);
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
};

const submit = () => {
    if (editMode.value) {
        form.put(route('admin.periods.update', form.id), {
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
        form.post(route('admin.periods.store'), {
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

const deleteData = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        router.delete(route('admin.periods.destroy', id), {
            preserveScroll: true
        });
    }
};

/* --- HELPER FUNCTIONS --- */
const parseDate = (dateString) => {
    if (!dateString) return '';
    return dateString.split('T')[0].split(' ')[0];
};

const formatDate = (dateString) => {
    if (!dateString) return '-';
    // Ensure we parse the YYYY-MM-DD part and create a local date to avoid timezone shifts
    const [year, month, day] = dateString.split('T')[0].split('-');
    const date = new Date(year, month - 1, day);
    return new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
};

// Helper untuk menentukan status timeline visual
const getStatusTimeline = (item) => {
    const today = new Date();
    const stages = [
        { key: 'doc_audit', label: 'Audit Dokumen', start: item.doc_audit_start, end: item.doc_audit_end },
        { key: 'field_audit', label: 'Audit Lapangan', start: item.field_audit_start, end: item.field_audit_end },
        { key: 'finding', label: 'Verifikasi Temuan', start: item.finding_start, end: item.finding_end },
        { key: 'reporting', label: 'Pelaporan', start: item.reporting_start, end: item.reporting_end },
        { key: 'rtm_rtl', label: 'RTM & RTL', start: item.rtm_rtl_start, end: item.rtm_rtl_end },
    ];

    let currentStage = { label: 'Belum Dimulai', type: 'pending' };

    for (const stage of stages) {
        const start = new Date(stage.start);
        const end = new Date(stage.end);

        // Sesuaikan end date ke akhir hari
        end.setHours(23, 59, 59, 999);

        if (today >= start && today <= end) {
            return { label: stage.label, type: 'active', key: stage.key };
        } else if (today > end) {
            currentStage = { label: 'Selesai', type: 'finished' };
        }
    }

    return currentStage;
};
</script>

<template>

    <AppLayout title="Master Periode AMI">
        <template #header>Master Periode AMI</template>
        <template #subHeader>Atur timeline detail untuk setiap tahapan Audit Mutu Internal</template>

        <template #action-buttons>
            <button @click="openCreateModal"
                class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10">
                <span
                    class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none">+</span>
                Tambah Periode
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
                        <input v-model="search" type="text" placeholder="Cari periode..."
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
                                <th class="p-6 md:p-8 pl-8">Nama Periode</th>
                                <th class="p-6 md:p-8 text-center">Fase Aktif</th>
                                <th class="p-6 md:p-8 text-center">Timeline Visual</th>
                                <th class="p-6 md:p-8 text-center w-28">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-50 dark:divide-slate-800/20">
                            <tr v-for="item in periods.data" :key="item.id"
                                class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300">
                                <td class="p-6 md:p-8 pl-8">
                                    <div class="font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                                        {{ item.name }}</div>
                                    <div v-if="item.is_active"
                                        class="mt-1 flex items-center text-[9px] text-emerald-500 font-black uppercase">
                                        <span
                                            class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                                        Siklus Aktif
                                    </div>
                                </td>

                                <td class="p-6 md:p-8 text-center">
                                    <div
                                        :class="['px-3 py-1 rounded-lg text-[9px] font-black uppercase inline-block border shadow-sm', getStatusTimeline(item).type === 'active' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700']">
                                        {{ getStatusTimeline(item).label }}
                                    </div>
                                </td>

                                <td class="p-6 md:p-8">
                                    <div
                                        class="flex items-center justify-between gap-1 max-w-md mx-auto relative px-2 py-2">
                                        <div
                                            class="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-2">
                                        </div>
                                        <div v-for="stage in [
                                            { key: 'doc_audit', label: 'DOK', fullName: 'Audit Dokumen', start: item.doc_audit_start, end: item.doc_audit_end, color: 'blue' },
                                            { key: 'field_audit', label: 'LAP', fullName: 'Audit Lapangan', start: item.field_audit_start, end: item.field_audit_end, color: 'purple' },
                                            { key: 'finding', label: 'TEM', fullName: 'Verifikasi Temuan', start: item.finding_start, end: item.finding_end, color: 'amber' },
                                            { key: 'reporting', label: 'PEL', fullName: 'Pelaporan Akhir', start: item.reporting_start, end: item.reporting_end, color: 'emerald' },
                                            { key: 'rtm_rtl', label: 'RTM', fullName: 'RTM & RTL', start: item.rtm_rtl_start, end: item.rtm_rtl_end, color: 'rose' }
                                        ]" :key="stage.key"
                                            class="flex-1 flex flex-col items-center group/stage relative z-10 hover:z-50 transition-all">
                                            <div
                                                :class="['w-3 h-3 rounded-full mb-1 border-2 transition-all', getStatusTimeline(item).key === stage.key ? 'bg-' + stage.color + '-500 border-white scale-150 shadow-md ring-2 ring-' + stage.color + '-200' : 'bg-slate-200 border-white dark:bg-slate-700 dark:border-slate-800']">
                                            </div>
                                            <div
                                                :class="['text-[8px] font-black', getStatusTimeline(item).key === stage.key ? 'text-' + stage.color + '-600' : 'text-slate-300']">
                                                {{ stage.label }}</div>
                                            <div
                                                class="absolute -top-16 scale-0 group-hover/stage:scale-100 transition-all bg-slate-900 text-white text-[9px] py-1.5 px-3 rounded-xl whitespace-nowrap shadow-xl font-bold border border-slate-800 pointer-events-none text-center z-[60]">
                                                <div
                                                    class="mb-1 text-[8px] uppercase tracking-wider text-slate-400 border-b border-slate-700 pb-1">
                                                    {{ stage.fullName }}
                                                </div>
                                                {{ formatDate(stage.start) }} — {{ formatDate(stage.end) }}
                                                <div
                                                    class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 border-r border-b border-slate-800">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td class="p-6 md:p-8">
                                    <div class="flex justify-center gap-2">
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
                            <tr v-if="periods.data.length === 0">
                                <td colspan="4" class="p-12 text-center">
                                    <div class="flex flex-col items-center justify-center opacity-50">
                                        <icon icon="fa-solid fa-clock-rotate-left"
                                            class="text-4xl text-slate-300 dark:text-slate-600 mb-4" />
                                        <p class="text-xs font-black text-slate-400 uppercase tracking-widest italic">
                                            Data periode tidak ditemukan</p>
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
                        Data {{ periods.from }} - {{ periods.to }} dari total {{ periods.total }}
                    </div>
                    <div class="flex flex-wrap justify-center gap-1.5">
                        <Link v-for="(link, k) in periods.links" :key="k" :href="link.url || '#'" :class="[
                            'px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all',
                            link.active
                                ? 'bg-slate-900 dark:bg-rose-600 text-white border-slate-900 dark:border-rose-600 shadow-lg shadow-slate-900/20'
                                : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:text-rose-500',
                            !link.url ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
                        ]" v-html="link.label" />
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" @click="closeModal"></div>

            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10 flex flex-col max-h-[90vh]">
                <div
                    class="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center shrink-0">
                    <div>
                        <h3
                            class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
                            {{ editMode ? 'Edit Timeline' : 'Siklus Baru' }}
                        </h3>
                        <p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1">
                            Manajemen Siklus Audit
                        </p>
                    </div>
                    <button @click="closeModal"
                        class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg">&times;</button>
                </div>

                <form @submit.prevent="submit" class="p-8 space-y-8 overflow-y-auto custom-scrollbar flex-1">
                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Nama
                            Periode</label>
                        <input v-model="form.name" type="text"
                            class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
                            required />
                        <p v-if="form.errors.name" class="text-xs text-rose-500 font-bold ml-1">{{ form.errors.name }}
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div v-for="stage in [
                            { label: '1. Audit Dokumen', start: 'doc_audit_start', end: 'doc_audit_end', color: 'blue' },
                            { label: '2. Audit Lapangan', start: 'field_audit_start', end: 'field_audit_end', color: 'purple' },
                            { label: '3. Verifikasi Temuan', start: 'finding_start', end: 'finding_end', color: 'amber' },
                            { label: '4. Pelaporan Akhir', start: 'reporting_start', end: 'reporting_end', color: 'emerald' }
                        ]" :key="stage.label"
                            :class="['p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border-l-4 shadow-sm text-slate-700 dark:text-slate-200 transition-all hover:translate-x-1', 'border-' + stage.color + '-500']">
                            <h4
                                :class="['text-[10px] font-black uppercase mb-4 tracking-widest', 'text-' + stage.color + '-600']">
                                {{ stage.label }}</h4>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        class="text-[9px] font-black text-slate-400 block mb-1 uppercase ml-1">Mulai</label>
                                    <input type="date" v-model="form[stage.start]"
                                        class="w-full px-3 py-2 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-rose-500/50 outline-none"
                                        required />
                                    <p v-if="form.errors[stage.start]" class="text-[9px] text-rose-500 font-bold mt-1">
                                        {{ form.errors[stage.start] }}</p>
                                </div>
                                <div>
                                    <label
                                        class="text-[9px] font-black text-slate-400 block mb-1 uppercase ml-1">Selesai</label>
                                    <input type="date" v-model="form[stage.end]"
                                        class="w-full px-3 py-2 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-rose-500/50 outline-none"
                                        required />
                                    <p v-if="form.errors[stage.end]" class="text-[9px] text-rose-500 font-bold mt-1">{{
                                        form.errors[stage.end] }}</p>
                                </div>
                            </div>
                        </div>

                        <div
                            class="md:col-span-2 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border-l-4 border-rose-500 shadow-sm text-slate-700 dark:text-slate-200 transition-all hover:translate-x-1">
                            <h4 class="text-[10px] font-black text-rose-600 uppercase mb-4 tracking-widest">5. RTM &
                                Rencana
                                Tindak Lanjut</h4>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div class="md:col-span-2">
                                    <label
                                        class="text-[9px] font-black text-slate-400 block mb-1 uppercase ml-1">Mulai</label>
                                    <input type="date" v-model="form.rtm_rtl_start"
                                        class="w-full px-3 py-2 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-rose-500/50 outline-none"
                                        required />
                                    <p v-if="form.errors.rtm_rtl_start" class="text-[9px] text-rose-500 font-bold mt-1">
                                        {{ form.errors.rtm_rtl_start }}</p>
                                </div>
                                <div class="md:col-span-2">
                                    <label
                                        class="text-[9px] font-black text-slate-400 block mb-1 uppercase ml-1">Selesai</label>
                                    <input type="date" v-model="form.rtm_rtl_end"
                                        class="w-full px-3 py-2 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-rose-500/50 outline-none"
                                        required />
                                    <p v-if="form.errors.rtm_rtl_end" class="text-[9px] text-rose-500 font-bold mt-1">{{
                                        form.errors.rtm_rtl_end }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <label
                        class="flex items-center gap-4 p-5 bg-rose-50 dark:bg-rose-500/10 rounded-2xl cursor-pointer hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-all border border-rose-100 dark:border-rose-500/20">
                        <div class="relative flex items-center">
                            <input type="checkbox" v-model="form.is_active"
                                class="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 dark:border-slate-600 checked:bg-rose-500 checked:border-rose-500 transition-all" />
                            <icon icon="fa-solid fa-check"
                                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                        </div>
                        <span class="text-xs font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">
                            Tetapkan Sebagai Siklus Aktif
                        </span>
                    </label>

                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <button type="submit" :disabled="form.processing"
                            class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50">
                            {{ form.processing ? 'Menyimpan...' : 'Simpan Perubahan' }}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </AppLayout>
</template>

<style scoped>
/* Utility Colors for dynamic classes */
.bg-blue-500 {
    background-color: #3b82f6;
}

.bg-purple-500 {
    background-color: #a855f7;
}

.bg-amber-500 {
    background-color: #f59e0b;
}

.bg-emerald-500 {
    background-color: #a7f3d0;
}

.bg-rose-500 {
    background-color: #f43f5e;
}

/* Ring colors for timeline active state */
.ring-blue-200 {
    --tw-ring-color: #bfdbfe;
}

.ring-purple-200 {
    --tw-ring-color: #e9d5ff;
}

.ring-amber-200 {
    --tw-ring-color: #fde68a;
}

.ring-emerald-200 {
    --tw-ring-color: #a7f3d0;
}

.ring-rose-200 {
    --tw-ring-color: #fecdd3;
}

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

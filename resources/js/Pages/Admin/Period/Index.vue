<script setup>
import { ref, watch } from 'vue';
import { router, useForm, Head } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    periods: Object,
    filters: Object,
});

/* --- LOGIKA DETEKSI TAHAPAN (REAL-TIME) --- */
const today = new Date().toISOString().split('T')[0];

const getStatusTimeline = (period) => {
    const stages = [
        { key: 'doc_audit', label: 'Audit Dokumen', start: period.doc_audit_start, end: period.doc_audit_end, color: 'blue' },
        { key: 'field_audit', label: 'Audit Lapangan', start: period.field_audit_start, end: period.field_audit_end, color: 'purple' },
        { key: 'finding', label: 'Verifikasi Temuan', start: period.finding_start, end: period.finding_end, color: 'amber' },
        { key: 'reporting', label: 'Pelaporan Akhir', start: period.reporting_start, end: period.reporting_end, color: 'emerald' },
        { key: 'rtm_rtl', label: 'RTM & RTL', start: period.rtm_rtl_start, end: period.rtm_rtl_end, color: 'rose' },
    ];

    const active = stages.find(s => today >= parseDate(s.start) && today <= parseDate(s.end));
    if (active) return { type: 'active', label: active.label, color: active.color, key: active.key };

    const upcoming = stages.find(s => parseDate(s.start) > today);
    if (upcoming) return { type: 'upcoming', label: upcoming.label, color: 'slate', key: upcoming.key };

    if (today > parseDate(stages[4].end)) return { type: 'expired', label: 'Siklus Selesai', color: 'slate', key: 'done' };

    return { type: 'none', label: 'Belum Diatur', color: 'slate' };
};

/* --- HELPER FORMAT & PARSE --- */
const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(date);
};

const parseDate = (dateString) => {
    if (!dateString) return '';
    return dateString.split('T')[0];
};

/* --- SEARCH & FORM LOGIC --- */
const search = ref(props.filters.search);
watch(search, debounce((value) => {
    router.get(route('admin.periods.index'), { search: value }, { preserveState: true, replace: true });
}, 500));

const showModal = ref(false);
const editMode = ref(false);

const form = useForm({
    id: null,
    name: '',
    doc_audit_start: '', doc_audit_end: '',
    field_audit_start: '', field_audit_end: '',
    finding_start: '', finding_end: '',
    reporting_start: '', reporting_end: '',
    rtm_rtl_start: '', rtm_rtl_end: '',
    is_active: true,
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
    form.is_active = !!period.is_active;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    form.reset();
};

const submit = () => {
    if (editMode.value) {
        form.put(route('admin.periods.update', form.id), { onSuccess: () => closeModal() });
    } else {
        form.post(route('admin.periods.store'), { onSuccess: () => closeModal() });
    }
};

const deleteData = (id) => {
    if (confirm('Menghapus periode akan berdampak pada data transaksi di dalamnya. Lanjutkan?')) {
        router.delete(route('admin.periods.destroy', id));
    }
};
</script>

<template>
    <AppLayout title="Master Periode AMI">
        <template #header>Master Periode AMI</template>
        <template #subHeader>Atur timeline detail untuk setiap tahapan Audit Mutu Internal</template>

        <template #action-buttons>
            <button @click="openCreateModal"
                class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-sm transition-all active:scale-95">
                + Tambah Periode
            </button>
        </template>

        <div class="space-y-4">
            <div class="flex justify-end">
                <input v-model="search" type="text" placeholder="Cari periode..."
                    class="w-full max-w-sm px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 outline-none dark:bg-slate-900 dark:border-slate-700" />
            </div>

            <div
                class="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <table class="w-full text-sm text-left">
                    <thead
                        class="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[10px] font-black tracking-widest border-b dark:border-slate-800">
                        <tr>
                            <th class="p-4 w-56">Nama Periode</th>
                            <th class="p-4 w-48 text-center">Fase Aktif</th>
                            <th class="p-4 text-center">Timeline Visual</th>
                            <th class="p-4 text-center w-28">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr v-for="item in periods.data" :key="item.id" class="hover:bg-slate-50/50 transition-colors">
                            <td class="p-4">
                                <div class="font-black text-slate-700 dark:text-slate-200">{{ item.name }}</div>
                                <div v-if="item.is_active"
                                    class="mt-1 flex items-center text-[9px] text-emerald-500 font-black uppercase">
                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                                    Siklus Aktif
                                </div>
                            </td>

                            <td class="p-4 text-center">
                                <div
                                    :class="['px-3 py-1 rounded-full text-[9px] font-black uppercase inline-block border', getStatusTimeline(item).type === 'active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-50 text-slate-400 border-slate-100']">
                                    {{ getStatusTimeline(item).label }}
                                </div>
                            </td>

                            <td class="p-4">
                                <div class="flex items-center justify-between gap-1 max-w-md mx-auto relative px-2">
                                    <div
                                        class="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-2">
                                    </div>
                                    <div v-for="stage in [
                                        { key: 'doc_audit', label: 'DOC', start: item.doc_audit_start, end: item.doc_audit_end, color: 'blue' },
                                        { key: 'field_audit', label: 'FIELD', start: item.field_audit_start, end: item.field_audit_end, color: 'purple' },
                                        { key: 'finding', label: 'FIND', start: item.finding_start, end: item.finding_end, color: 'amber' },
                                        { key: 'reporting', label: 'REP', start: item.reporting_start, end: item.reporting_end, color: 'emerald' },
                                        { key: 'rtm_rtl', label: 'RTM', start: item.rtm_rtl_start, end: item.rtm_rtl_end, color: 'rose' }
                                    ]" :key="stage.key" class="flex-1 flex flex-col items-center group relative z-10">
                                        <div
                                            :class="['w-3 h-3 rounded-full mb-1 border-2 transition-all', getStatusTimeline(item).key === stage.key ? 'bg-' + stage.color + '-500 border-white scale-150 shadow-md' : 'bg-slate-200 border-white dark:bg-slate-700 dark:border-slate-900']">
                                        </div>
                                        <div
                                            :class="['text-[8px] font-black', getStatusTimeline(item).key === stage.key ? 'text-' + stage.color + '-600' : 'text-slate-300']">
                                            {{ stage.label }}</div>
                                        <div
                                            class="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-slate-800 text-white text-[9px] py-1 px-2 rounded-md whitespace-nowrap z-50 shadow-xl font-bold">
                                            {{ formatDate(stage.start) }} — {{ formatDate(stage.end) }}
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="p-4">
                                <div class="flex justify-center gap-2">
                                    <button @click="openEditModal(item)"
                                        class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><svg
                                            xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg></button>
                                    <button @click="deleteData(item.id)"
                                        class="p-2 text-red-500 hover:bg-red-50 rounded-lg"><svg
                                            xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" @click="closeModal"></div>
            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200">
                <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <h3 class="text-xl font-black text-slate-800 dark:text-white uppercase">
                        {{ editMode ? 'Edit Timeline' : 'Siklus Baru' }}
                    </h3>
                    <button @click="closeModal" class="text-3xl text-slate-300 hover:text-rose-500">&times;</button>
                </div>

                <form @submit.prevent="submit" class="p-8 space-y-8 overflow-y-auto">
                    <div class="space-y-1.5">
                        <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nama
                            Periode</label>
                        <input v-model="form.name" type="text"
                            class="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 transition-all font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900"
                            required />
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div v-for="stage in [
                            { label: '1. Audit Dokumen', start: 'doc_audit_start', end: 'doc_audit_end', color: 'blue' },
                            { label: '2. Audit Lapangan', start: 'field_audit_start', end: 'field_audit_end', color: 'purple' },
                            { label: '3. Verifikasi Temuan', start: 'finding_start', end: 'finding_end', color: 'amber' },
                            { label: '4. Pelaporan Akhir', start: 'reporting_start', end: 'reporting_end', color: 'emerald' }
                        ]" :key="stage.label"
                            :class="['p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-l-4 shadow-sm text-slate-700 dark:text-slate-200', 'border-' + stage.color + '-500']">
                            <h4
                                :class="['text-[10px] font-black uppercase mb-4 tracking-widest', 'text-' + stage.color + '-600']">
                                {{ stage.label }}</h4>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        class="text-[9px] font-black text-slate-400 block mb-1 uppercase">Mulai</label>
                                    <input type="date" v-model="form[stage.start]"
                                        class="w-full p-2 border border-slate-200 rounded-lg text-sm font-bold focus:ring-2 outline-none dark:bg-slate-900 dark:border-slate-700"
                                        required />
                                </div>
                                <div>
                                    <label
                                        class="text-[9px] font-black text-slate-400 block mb-1 uppercase">Selesai</label>
                                    <input type="date" v-model="form[stage.end]"
                                        class="w-full p-2 border border-slate-200 rounded-lg text-sm font-bold focus:ring-2 outline-none dark:bg-slate-900 dark:border-slate-700"
                                        required />
                                </div>
                            </div>
                        </div>

                        <div
                            class="md:col-span-2 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-l-4 border-rose-500 shadow-sm text-slate-700 dark:text-slate-200">
                            <h4 class="text-[10px] font-black text-rose-600 uppercase mb-4 tracking-widest">5. RTM &
                                Rencana
                                Tindak Lanjut</h4>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div class="md:col-span-2">
                                    <label
                                        class="text-[9px] font-black text-slate-400 block mb-1 uppercase">Mulai</label>
                                    <input type="date" v-model="form.rtm_rtl_start"
                                        class="w-full p-2 border border-slate-200 rounded-lg text-sm font-bold focus:ring-2 outline-none dark:bg-slate-900 dark:border-slate-700"
                                        required />
                                </div>
                                <div class="md:col-span-2">
                                    <label
                                        class="text-[9px] font-black text-slate-400 block mb-1 uppercase">Selesai</label>
                                    <input type="date" v-model="form.rtm_rtl_end"
                                        class="w-full p-2 border border-slate-200 rounded-lg text-sm font-bold focus:ring-2 outline-none dark:bg-slate-900 dark:border-slate-700"
                                        required />
                                </div>
                            </div>
                        </div>
                    </div>

                    <label
                        class="flex items-center gap-3 p-4 bg-rose-50 dark:bg-rose-900/10 rounded-2xl cursor-pointer hover:bg-rose-100 transition-colors">
                        <input type="checkbox" v-model="form.is_active"
                            class="w-5 h-5 rounded text-rose-600 focus:ring-rose-500 border-slate-300" />
                        <span class="text-xs font-black text-rose-700 uppercase tracking-tighter">Tetapkan Sebagai
                            Siklus
                            Aktif</span>
                    </label>

                    <div
                        class="flex justify-end gap-3 pt-6 border-t border-slate-100 dark:border-slate-800 sticky bottom-0 bg-white dark:bg-slate-900">
                        <button type="button" @click="closeModal"
                            class="px-6 py-2 text-xs font-black uppercase text-slate-400 hover:text-slate-600">Batal</button>
                        <button type="submit" :disabled="form.processing"
                            class="px-8 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-black uppercase rounded-xl shadow-lg transition-all active:scale-95">
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
    background-color: #10b981;
}

.bg-rose-500 {
    background-color: #f43f5e;
}

.text-blue-600 {
    color: #2563eb;
}

.text-purple-600 {
    color: #9333ea;
}

.text-amber-600 {
    color: #d97706;
}

.text-emerald-600 {
    color: #059669;
}

.text-rose-600 {
    color: #e11d48;
}

.border-blue-500 {
    border-color: #3b82f6;
}

.border-purple-500 {
    border-color: #a855f7;
}

.border-amber-500 {
    border-color: #f59e0b;
}

.border-emerald-500 {
    border-color: #10b981;
}

.border-rose-500 {
    border-color: #f43f5e;
}
</style>

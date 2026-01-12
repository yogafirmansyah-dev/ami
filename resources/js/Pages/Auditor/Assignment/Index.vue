<script setup>
import { ref, watch } from 'vue';
import { router, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    assignments: Object,
    filters: Object,
});

// State untuk filter
const search = ref(props.filters.search || '');
const status = ref(props.filters.status || 'all');

// Fungsi tunggal untuk mengupdate URL (Inertia Request)
const updateFilters = () => {
    router.get(route('auditor.assignments.index'), {
        search: search.value,
        status: status.value
    }, {
        preserveState: true,
        replace: true,
        preserveScroll: true
    });
};

/* --- WATCHERS --- */
// Search menggunakan debounce agar tidak terlalu sering hit server
watch(search, debounce(() => {
    updateFilters();
}, 500));

// Status berubah seketika saat diklik
const changeStatus = (newStatus) => {
    status.value = newStatus;
    updateFilters();
};

/* --- HELPERS --- */
const getProgress = (item) => {
    if (!item.indicators_count) return 0;
    return Math.round((item.scored_indicators_count / item.indicators_count) * 100);
};

const getStageBadge = (stage) => {
    const map = {
        'doc_audit': 'bg-blue-50 text-blue-600 border-blue-100',
        'field_audit': 'bg-purple-50 text-purple-600 border-purple-100',
        'finding': 'bg-amber-50 text-amber-600 border-amber-100',
        'reporting': 'bg-emerald-50 text-emerald-600 border-emerald-100',
    };
    return map[stage] || 'bg-slate-50 text-slate-400 border-slate-100';
};
</script>

<template>
    <AppLayout title="Penugasan Audit Saya">
        <template #header>Daftar Penugasan Audit</template>
        <template #subHeader>Manajemen seluruh unit kerja yang ditugaskan kepada Anda</template>

        <div class="space-y-4">
            <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-2">
                    <span class="text-[10px] font-black uppercase text-slate-400 tracking-widest">Tampilkan:</span>
                    <div class="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                        <button @click="changeStatus('all')" :class="[
                            'px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all',
                            status === 'all' ? 'bg-white dark:bg-slate-700 text-rose-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                        ]">Semua</button>
                        <button @click="changeStatus('on_going')" :class="[
                            'px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all',
                            status === 'on_going' ? 'bg-white dark:bg-slate-700 text-rose-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                        ]">Berjalan</button>
                        <button @click="changeStatus('completed')" :class="[
                            'px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all',
                            status === 'completed' ? 'bg-white dark:bg-slate-700 text-rose-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                        ]">Selesai</button>
                    </div>
                </div>

                <div class="relative w-full sm:w-80">
                    <input v-model="search" type="text" placeholder="Cari unit atau periode..."
                        class="w-full pl-4 pr-10 py-2 text-sm border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all" />
                </div>
            </div>

            <div
                class="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-sm border-collapse">
                        <thead
                            class="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800">
                            <tr>
                                <th class="p-5">Unit Kerja</th>
                                <th class="p-5">Periode & Instrumen</th>
                                <th class="p-5 text-center">Tahapan</th>
                                <th class="p-5">Progres</th>
                                <th class="p-5 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr v-for="item in assignments.data" :key="item.id"
                                class="hover:bg-slate-50/50 transition-colors group">
                                <td class="p-5">
                                    <div
                                        class="font-black text-slate-800 dark:text-white group-hover:text-rose-600 transition-colors">
                                        {{ item.assignable?.name }}
                                    </div>
                                    <div
                                        class="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5 italic">
                                        {{ item.assignable_type.includes('Prodi') ? 'Program Studi' : 'Fakultas' }}
                                    </div>
                                </td>
                                <td class="p-5">
                                    <div class="text-xs font-bold text-slate-700 dark:text-slate-200">{{
                                        item.period?.name }}
                                    </div>
                                    <div class="text-[10px] text-slate-400 font-medium truncate max-w-[200px]">{{
                                        item.standard?.name }}</div>
                                </td>
                                <td class="p-5 text-center">
                                    <span
                                        :class="['px-2.5 py-1 rounded-lg text-[9px] font-black uppercase border tracking-tight', getStageBadge(item.current_stage)]">
                                        {{ item.current_stage.replace('_', ' ') }}
                                    </span>
                                </td>
                                <td class="p-5">
                                    <div class="flex flex-col gap-1.5 w-full max-w-[140px]">
                                        <div
                                            class="flex justify-between text-[9px] font-black uppercase text-slate-400">
                                            <span>{{ getProgress(item) }}%</span>
                                            <span>{{ item.scored_indicators_count }}/{{ item.indicators_count }}</span>
                                        </div>
                                        <div
                                            class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                            <div class="bg-rose-500 h-full rounded-full transition-all duration-700"
                                                :style="{ width: getProgress(item) + '%' }"></div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-5 text-center">
                                    <Link :href="route('auditor.assignments.show', item.id)"
                                        class="inline-flex items-center px-5 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-black uppercase rounded-xl hover:bg-rose-600 hover:text-white transition-all shadow-md active:scale-95">
                                        Buka Lembar Kerja
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </AppLayout>
</template>

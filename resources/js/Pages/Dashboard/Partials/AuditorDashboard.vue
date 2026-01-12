<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    stats: Object,
    myAssignments: Array
});

// Helper untuk warna badge tahap
const getStageColor = (stage) => {
    const colors = {
        'doc_audit': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        'field_audit': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        'finding': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        'reporting': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    };
    return colors[stage] || 'bg-slate-100 text-slate-600';
};
</script>

<template>
    <div class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(val, label) in {
                'Total Penugasan': stats.my_assignments,
                'Menunggu Review': stats.pending_reviews,
                'Selesai': stats.completed_reviews
            }" :key="label"
                class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p class="text-xs font-black text-slate-400 uppercase tracking-widest">{{ label }}</p>
                <p class="text-3xl font-black text-slate-800 dark:text-white mt-2">{{ val }}</p>
            </div>
        </div>

        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <h3 class="text-xl font-black text-slate-800 dark:text-white tracking-tight">Daftar Penugasan Anda</h3>
                <span class="text-xs font-bold text-slate-400">{{ myAssignments.length }} Penugasan Ditemukan</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div v-for="item in myAssignments" :key="item.id"
                    class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300">

                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <span
                                :class="['text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-tighter border', getStageColor(item.current_stage)]">
                                {{ item.current_stage.replace('_', ' ') }}
                            </span>
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{{
                                item.period_name }}</span>
                        </div>

                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <h4
                                    class="font-black text-xl text-slate-800 dark:text-white leading-tight group-hover:text-rose-600 transition-colors">
                                    {{ item.target_name }}
                                </h4>
                                <span
                                    class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[8px] font-bold text-slate-500 uppercase">{{
                                        item.target_type }}</span>
                            </div>
                            <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">{{ item.standard_name }}
                            </p>
                        </div>
                    </div>

                    <div class="mt-8 space-y-4">
                        <div class="space-y-2">
                            <div class="flex justify-between items-end">
                                <span class="text-[10px] font-black text-slate-400 uppercase">Progres Penilaian</span>
                                <span class="text-xs font-black text-slate-700 dark:text-slate-200">{{ item.progress
                                }}%</span>
                            </div>
                            <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                                <div class="bg-rose-500 h-full rounded-full transition-all duration-1000"
                                    :style="{ width: item.progress + '%' }"></div>
                            </div>
                            <div class="text-[10px] text-slate-400 font-medium">
                                <strong>{{ item.scored_indicators_count }}</strong> dari {{ item.indicators_count }}
                                indikator telah dinilai
                            </div>
                        </div>

                        <div
                            class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <div class="flex -space-x-2">
                                <div
                                    class="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-rose-100 flex items-center justify-center text-[10px] font-bold text-rose-600">
                                    A</div>
                                <div
                                    class="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600 italic">
                                    M</div>
                            </div>

                            <Link :href="route('auditor.assignments.show', item.id)"
                                class="inline-flex items-center px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-black uppercase rounded-xl shadow-lg shadow-rose-500/20 transition-all active:scale-95">
                                Mulai Menilai
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="myAssignments.length === 0"
                class="bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center">
                <div
                    class="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-slate-300" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                </div>
                <h4 class="text-slate-800 dark:text-white font-bold">Tidak ada penugasan</h4>
                <p class="text-sm text-slate-500">Anda belum memiliki tugas audit yang aktif untuk saat ini.</p>
            </div>
        </div>
    </div>
</template>

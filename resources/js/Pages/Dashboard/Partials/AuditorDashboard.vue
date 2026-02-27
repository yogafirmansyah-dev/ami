<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps(['stats', 'myAssignments']);

const assignments = computed(() => props.myAssignments || []);

const getStageColor = (stage) => {
    const colors = {
        'doc_audit': 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400',
        'field_audit': 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400',
        'finding': 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400',
        'reporting': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400',
    };
    return colors[stage] || 'bg-slate-100 text-slate-600';
};
</script>

<template>
    <div class="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">

        <!-- Hero -->
        <div
            class="relative bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-[2.5rem] p-10 overflow-hidden shadow-2xl border border-white/10 group">
            <div
                class="absolute top-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-emerald-500/30 transition-colors duration-1000">
            </div>
            <div class="relative z-10 text-white">
                <div class="flex items-center gap-3 mb-6 opacity-80">
                    <span class="w-8 h-[2px] bg-emerald-400"></span>
                    <h3 class="text-xs font-bold uppercase tracking-[0.2em] italic">Auditor Workspace</h3>
                </div>
                <h2
                    class="text-4xl md:text-5xl font-black tracking-tighter mb-4 italic leading-none bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-100">
                    Area Kerja
                    <span class="text-transparent">
                        Auditor
                    </span>
                </h2>
                <p class="text-emerald-200">Kelola penugasan audit dan evaluasi Anda dengan cermat.</p>
            </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
                class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl p-8 rounded-[2rem] border border-white/40 dark:border-slate-800 shadow-sm flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group">
                <div
                    class="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors">
                </div>
                <div class="relative z-10">
                    <p
                        class="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] mb-2">
                        Total Ditugaskan</p>
                    <p class="text-4xl font-black text-slate-800 dark:text-white mt-1 italic tracking-tighter">{{
                        stats.my_assignments }}</p>
                </div>
                <div
                    class="p-5 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-500 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform relative z-10">
                    <icon icon="fa-solid fa-briefcase" class="text-2xl" />
                </div>
            </div>
            <div
                class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl p-8 rounded-[2rem] border border-white/40 dark:border-slate-800 shadow-sm flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group">
                <div
                    class="absolute -right-6 -top-6 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-colors">
                </div>
                <div class="relative z-10">
                    <p
                        class="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] mb-2">
                        Menunggu Review</p>
                    <p class="text-4xl font-black text-rose-500 mt-1 italic tracking-tighter">{{ stats.pending_reviews
                        }}</p>
                </div>
                <div
                    class="p-5 rounded-2xl bg-rose-50 dark:bg-rose-500/10 text-rose-500 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform relative z-10">
                    <icon icon="fa-solid fa-clock" class="text-2xl" />
                </div>
            </div>
            <div
                class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl p-8 rounded-[2rem] border border-white/40 dark:border-slate-800 shadow-sm flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group">
                <div
                    class="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors">
                </div>
                <div class="relative z-10">
                    <p
                        class="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] mb-2">
                        Selesai</p>
                    <p class="text-4xl font-black text-emerald-500 mt-1 italic tracking-tighter">{{
                        stats.completed_reviews }}</p>
                </div>
                <div
                    class="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform relative z-10">
                    <icon icon="fa-solid fa-check-circle" class="text-2xl" />
                </div>
            </div>
        </div>

        <!-- Active Assignments List -->
        <div>
            <h3 class="text-lg font-bold text-slate-700 dark:text-slate-200 mb-6 flex items-center gap-2">
                <icon icon="fa-solid fa-list-check" /> Penugasan Aktif
            </h3>

            <div v-if="assignments.length === 0"
                class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-slate-800 shadow-sm p-16 text-center">
                <div
                    class="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner ring-1 ring-slate-200 dark:ring-slate-700">
                    <icon icon="fa-solid fa-mug-hot" class="text-4xl text-slate-400 animate-bounce-slow" />
                </div>
                <h4 class="text-lg font-black text-slate-800 dark:text-white mb-2">Semua Tugas Selesai</h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 font-medium max-w-sm mx-auto">Anda tidak memiliki
                    penugasan audit aktif pada periode ini. Saatnya beristirahat sejenak!</p>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <Link v-for="item in assignments" :key="item.id" :href="route('auditor.assignments.show', item.id)"
                    class="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 dark:border-slate-800 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)] hover:-translate-y-2 transition-all duration-500 overflow-hidden relative flex flex-col justify-between">

                    <div>
                        <!-- Progress Strip -->
                        <div class="absolute top-0 left-0 w-full h-1.5 bg-slate-100 dark:bg-slate-800">
                            <div class="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-1000 relative"
                                :style="{ width: item.progress + '%' }">
                                <div
                                    class="absolute right-0 top-0 w-2 h-full bg-white/50 blur-[2px] shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                </div>
                            </div>
                        </div>

                        <div class="p-8">
                            <div class="flex justify-between items-start mb-6">
                                <span
                                    :class="['px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-sm', getStageColor(item.current_stage)]">
                                    {{ item.current_stage?.replace('_', ' ') || 'Unknown' }}
                                </span>
                                <span class="text-[10px] font-black text-slate-400 tracking-widest uppercase">{{
                                    item.period_name }}</span>
                            </div>

                            <h4
                                class="text-xl font-black text-slate-800 dark:text-white mb-2 line-clamp-2 group-hover:text-emerald-500 transition-colors leading-tight italic">
                                {{ item.target_name }}
                            </h4>
                            <p
                                class="text-xs text-slate-500 dark:text-slate-400 font-medium mb-8 line-clamp-2 leading-relaxed">
                                {{ item.standard_name }}</p>

                            <div
                                class="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl">
                                <span>Kemajuan Evaluasi</span>
                                <span class="text-emerald-600 dark:text-emerald-400">{{ item.progress }}%</span>
                            </div>

                            <div class="mt-4 flex gap-3">
                                <div
                                    class="flex-1 text-center p-3 rounded-2xl bg-emerald-50/80 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
                                    <span
                                        class="block text-[9px] uppercase font-black tracking-widest mb-1">Dinilai</span>
                                    <span class="text-lg font-black italic">{{ item.scored_indicators_count }}</span>
                                </div>
                                <div
                                    class="flex-1 text-center p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                                    <span class="block text-[9px] uppercase font-black tracking-widest mb-1">Total
                                        Item</span>
                                    <span class="text-lg font-black italic">{{ item.indicators_count }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="px-8 py-5 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                        <span
                            class="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:gap-3 flex items-center gap-2 transition-all">
                            Mulai Evaluasi
                            <icon icon="fa-solid fa-arrow-right" class="text-sm" />
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    </div>
</template>

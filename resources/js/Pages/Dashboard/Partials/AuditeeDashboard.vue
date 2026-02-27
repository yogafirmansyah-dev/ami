<script setup>
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps({
    stats: Object,
    myAssignments: Array
});

// Helper warna stage (Konsisten dengan Auditor)
const getStageColor = (stage) => {
    const colors = {
        'master_setup': 'bg-slate-100 text-slate-600 border-slate-200',
        'doc_audit': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 border-blue-200',
        'field_audit': 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400 border-purple-200',
        'finding': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 border-amber-200',
        'reporting': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 border-emerald-200',
    };
    return colors[stage] || 'bg-slate-100 text-slate-600';
};
</script>

<template>
    <div class="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">

        <!-- Hero Section -->
        <div
            class="relative bg-gradient-to-r from-indigo-900 to-indigo-800 rounded-[2.5rem] p-10 overflow-hidden shadow-2xl border border-white/10 group">
            <div
                class="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-indigo-500/30 transition-colors duration-1000">
            </div>
            <div class="relative z-10 text-white">
                <div class="flex items-center gap-3 mb-6 opacity-80">
                    <span class="w-8 h-[2px] bg-indigo-400"></span>
                    <h3 class="text-xs font-bold uppercase tracking-[0.2em] italic">Auditee Portal</h3>
                </div>
                <h2
                    class="text-4xl md:text-5xl font-black tracking-tighter mb-4 italic leading-none bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-100">
                    Portal <span class="text-transparent">Auditee</span>
                </h2>
                <p class="text-indigo-200">Pantau progres evaluasi audit unit kerja dan temuan Anda secara real-time.
                </p>
            </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
                class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl p-8 rounded-[2rem] border border-white/40 dark:border-slate-800 shadow-sm flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group">
                <div
                    class="absolute -right-6 -top-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors">
                </div>
                <div class="relative z-10">
                    <p
                        class="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] mb-2">
                        Audit Aktif</p>
                    <p class="text-4xl font-black text-slate-800 dark:text-white mt-1 italic tracking-tighter">{{
                        stats.active_assignments || 0 }}</p>
                </div>
                <div
                    class="p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform relative z-10">
                    <icon icon="fa-solid fa-folder-open" class="text-2xl" />
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
                        Total Indikator</p>
                    <p class="text-4xl font-black text-slate-800 dark:text-white mt-1 italic tracking-tighter">{{
                        stats.total_indicators || 0 }}</p>
                </div>
                <div
                    class="p-5 rounded-2xl bg-rose-50 dark:bg-rose-500/10 text-rose-500 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform relative z-10">
                    <icon icon="fa-solid fa-list-ol" class="text-2xl" />
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
                        Bukti Terunggah</p>
                    <p class="text-4xl font-black text-slate-800 dark:text-white mt-1 italic tracking-tighter">{{
                        stats.completed_evidence || 0 }}</p>
                </div>
                <div
                    class="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform relative z-10">
                    <icon icon="fa-solid fa-file-arrow-up" class="text-2xl" />
                </div>
            </div>
        </div>

        <!-- Assignments List -->
        <div>
            <h3 class="text-lg font-bold text-slate-700 dark:text-slate-200 mb-6 flex items-center gap-2">
                <icon icon="fa-solid fa-building-columns" /> Unit Kerja Saya
            </h3>

            <div v-if="myAssignments.length === 0"
                class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-slate-800 shadow-sm p-16 text-center">
                <div
                    class="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner ring-1 ring-slate-200 dark:ring-slate-700">
                    <icon icon="fa-solid fa-bell-slash" class="text-4xl text-slate-400 animate-pulse" />
                </div>
                <h4 class="text-lg font-black text-slate-800 dark:text-white mb-2">Tidak Ada Audit Aktif</h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 font-medium max-w-sm mx-auto">Unit kerja Anda saat
                    ini tidak dijadwalkan untuk proses audit.</p>
            </div>

            <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Link v-for="item in myAssignments" :key="item.id" :href="route('auditee.assignments.show', item.id)"
                    class="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 dark:border-slate-800 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.3)] hover:-translate-y-2 transition-all duration-500 overflow-hidden relative flex flex-col justify-between">

                    <div class="p-8">
                        <div class="flex justify-between items-start mb-6 relative z-10">
                            <span
                                :class="['px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-sm', getStageColor(item.current_stage)]">
                                {{ item.current_stage?.replace('_', ' ') }}
                            </span>
                            <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                {{ item.period_name }}
                            </span>
                        </div>

                        <div class="mb-8 relative z-10">
                            <h4
                                class="font-black text-2xl text-slate-800 dark:text-white leading-tight mb-3 group-hover:text-indigo-500 transition-colors italic">
                                {{ item.target_name }}
                            </h4>
                            <div class="flex items-center gap-3">
                                <span
                                    class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-[9px] font-black text-slate-500 uppercase tracking-widest border border-slate-200 dark:border-slate-700">
                                    {{ item.target_type }}
                                </span>
                                <span class="text-sm text-slate-500 dark:text-slate-400 font-medium truncate">{{
                                    item.standard_name }}</span>
                            </div>
                        </div>

                        <!-- Progress Section -->
                        <div
                            class="bg-slate-50/50 dark:bg-slate-800/30 rounded-3xl p-6 mb-6 relative z-10 border border-slate-100 dark:border-slate-800">
                            <div class="flex justify-between items-end mb-3">
                                <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Kesiapan
                                    Dokumen</span>
                                <span class="text-sm font-black text-indigo-500 italic">{{
                                    Math.round(item.upload_progress) }}%</span>
                            </div>
                            <div
                                class="w-full bg-slate-200/50 dark:bg-slate-700/50 rounded-full h-2.5 overflow-hidden shadow-inner relative">
                                <div class="bg-gradient-to-r from-indigo-400 to-indigo-600 h-full rounded-full transition-all duration-1000 relative"
                                    :style="{ width: item.upload_progress + '%' }">
                                    <div
                                        class="absolute right-0 top-0 w-3 h-full bg-white/50 blur-[2px] shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex justify-between mt-3 text-[9px] text-slate-400 font-black uppercase tracking-widest">
                                <span>{{ item.uploaded_indicators }} Diunggah</span>
                                <span>Target: {{ item.total_indicators }}</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="px-8 py-5 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center group-hover:bg-indigo-50/30 dark:group-hover:bg-indigo-500/5 transition-colors">
                        <div class="flex flex-col">
                            <span
                                class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Auditor</span>
                            <span class="text-xs font-bold text-slate-700 dark:text-slate-300 italic">{{
                                item.auditor_name }}</span>
                        </div>
                        <span
                            class="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:gap-3 flex items-center gap-2 transition-all">
                            Area Kerja
                            <icon icon="fa-solid fa-arrow-right" class="text-sm" />
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    </div>
</template>

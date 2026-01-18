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
        <div class="relative bg-gradient-to-r from-indigo-900 to-indigo-800 rounded-3xl p-8 overflow-hidden shadow-2xl">
            <div
                class="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2">
            </div>
            <div class="relative z-10 text-white">
                <h2 class="text-3xl font-black tracking-tight mb-2">Portal Auditee</h2>
                <p class="text-indigo-200">Pantau progres audit unit kerja dan temuan Anda.</p>
            </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
                class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Audit Aktif</p>
                <div class="flex items-center justify-between">
                    <p class="text-3xl font-black text-slate-800 dark:text-white">{{ stats.active_assignments || 0 }}
                    </p>
                    <icon icon="fa-solid fa-folder-open" class="text-2xl text-indigo-400 opacity-80" />
                </div>
            </div>
            <div
                class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Indikator</p>
                <div class="flex items-center justify-between">
                    <p class="text-3xl font-black text-slate-800 dark:text-white">{{ stats.total_indicators || 0 }}</p>
                    <icon icon="fa-solid fa-list-ol" class="text-2xl text-indigo-400 opacity-80" />
                </div>
            </div>
            <div
                class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Bukti Terunggah</p>
                <div class="flex items-center justify-between">
                    <p class="text-3xl font-black text-slate-800 dark:text-white">{{ stats.completed_evidence || 0 }}
                    </p>
                    <icon icon="fa-solid fa-file-arrow-up" class="text-2xl text-indigo-400 opacity-80" />
                </div>
            </div>
        </div>

        <!-- Assignments List -->
        <div>
            <h3 class="text-lg font-bold text-slate-700 dark:text-slate-200 mb-6 flex items-center gap-2">
                <icon icon="fa-solid fa-building-columns" /> Unit Kerja Saya
            </h3>

            <div v-if="myAssignments.length === 0"
                class="bg-white dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center">
                <icon icon="fa-solid fa-bell-slash" class="text-4xl text-slate-300 mb-4" />
                <h4 class="text-slate-800 dark:text-white font-bold">Tidak Ada Audit Aktif</h4>
                <p class="text-sm text-slate-500 mt-2">Unit kerja Anda saat ini tidak dijadwalkan untuk audit.</p>
            </div>

            <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Link v-for="item in myAssignments" :key="item.id" :href="route('auditee.assignments.show', item.id)"
                    class="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">

                    <div class="flex justify-between items-start mb-6 relative z-10">
                        <span
                            :class="['text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider', getStageColor(item.current_stage)]">
                            {{ item.current_stage?.replace('_', ' ') }}
                        </span>
                        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {{ item.period_name }}
                        </span>
                    </div>

                    <div class="mb-8 relative z-10">
                        <h4
                            class="font-black text-2xl text-slate-800 dark:text-white leading-tight mb-2 group-hover:text-indigo-500 transition-colors">
                            {{ item.target_name }}
                        </h4>
                        <div class="flex items-center gap-2">
                            <span
                                class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[9px] font-bold text-slate-500 uppercase">
                                {{ item.target_type }}
                            </span>
                            <span class="text-sm text-slate-400 font-medium truncate">{{ item.standard_name }}</span>
                        </div>
                    </div>

                    <!-- Progress Section -->
                    <div class="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 mb-6 relative z-10">
                        <div class="flex justify-between items-end mb-2">
                            <span class="text-[10px] font-black text-slate-400 uppercase tracking-wide">Kesiapan</span>
                            <span class="text-xs font-black text-indigo-500">{{ Math.round(item.upload_progress)
                                }}%</span>
                        </div>
                        <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                            <div class="bg-indigo-500 h-full rounded-full transition-all duration-1000"
                                :style="{ width: item.upload_progress + '%' }"></div>
                        </div>
                        <div class="flex justify-between mt-2 text-[10px] text-slate-400 font-bold uppercase">
                            <span>{{ item.uploaded_indicators }} Diunggah</span>
                            <span>Target: {{ item.total_indicators }}</span>
                        </div>
                    </div>

                    <div
                        class="flex items-center justify-between relative z-10 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div class="flex flex-col">
                            <span class="text-[9px] font-bold text-slate-400 uppercase">Auditor</span>
                            <span class="text-xs font-bold text-slate-700 dark:text-slate-300">{{ item.auditor_name
                                }}</span>
                        </div>
                        <span
                            class="text-xs font-black uppercase tracking-widest text-indigo-500 group-hover:gap-2 flex items-center gap-1 transition-all">
                            Detail
                            <icon icon="fa-solid fa-arrow-right" />
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    </div>
</template>

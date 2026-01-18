<script setup>
import { computed } from 'vue';

const props = defineProps({
    assignment: Object,
    indicators: Object,
    groupedDocuments: Array
});

const formatDate = (date) => {
    if (!date) return 'Not available';
    return new Date(date).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

const summaryText = computed(() => {
    return props.assignment.summary_note
        ? props.assignment.summary_note
        : 'Tidak ada catatan simpulan akhir yang direkam untuk siklus ini.';
});
</script>

<template>
    <div class="space-y-12 animate-in fade-in zoom-in duration-1000">

        <div
            class="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden border-b-[12px] border-emerald-600 group">
            <div class="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
                <div class="text-center lg:text-left space-y-8">
                    <div
                        class="inline-flex items-center px-6 py-2 bg-emerald-300/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-emerald-300/20 shadow-lg animate-pulse">
                        <svg class="w-3 h-3 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg>
                        Cycle Officially Archived
                    </div>

                    <div class="space-y-4">
                        <h2 class="text-5xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
                            Audit Certificate
                        </h2>
                        <p class="text-slate-400 text-base md:text-lg font-medium max-w-xl leading-relaxed">
                            Siklus AMI periode <span
                                class="text-white underline decoration-emerald-300 underline-offset-8">{{
                                    assignment.period?.name }}</span> telah dinyatakan selesai dan seluruh data telah
                            dienkripsi secara permanen.
                        </p>
                    </div>

                    <div class="inline-block p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                        <div
                            class="text-[10px] font-black text-slate-300 uppercase tracking-widest italic leading-relaxed">
                            Log ID: <span class="text-emerald-300">#AMI-{{ assignment.id }}-{{ new Date().getFullYear()
                                }}</span><br>
                            Archived on: <span class="text-slate-200">{{ formatDate(assignment.completed_at) }}</span>
                        </div>
                    </div>
                </div>

                <div
                    class="w-64 h-64 md:w-80 md:h-80 rounded-[4rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center backdrop-blur-xl shadow-2xl relative group transition-all duration-700 hover:bg-white/10 hover:scale-105">
                    <p class="text-[10px] font-black uppercase text-emerald-400 tracking-[0.4em] mb-4">Quality Score</p>
                    <span class="text-8xl md:text-9xl font-black text-white italic leading-none drop-shadow-2xl">
                        {{ assignment.overall_rating || 'N/A' }}
                    </span>
                    <div
                        class="absolute -top-6 -right-6 w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-slate-900 rotate-12 group-hover:rotate-0 transition-all duration-300">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-width="3"
                                d="M9 12l2 2 4-4m5.618-4.016A3.333 3.333 0 0110 3.333a3.333 3.333 0 01-5.618 2.651A3.333 3.333 0 013.333 10a3.333 3.333 0 012.651 5.618A3.333 3.333 0 0110 16.667a3.333 3.333 0 015.618-2.651A3.333 3.333 0 0116.667 10a3.333 3.333 0 01-2.651-5.618z" />
                        </svg>
                    </div>
                    <div
                        class="absolute inset-0 bg-emerald-300/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                    </div>
                </div>
            </div>

            <div
                class="absolute -left-20 -top-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none">
            </div>
            <div
                class="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none">
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div class="lg:col-span-2 space-y-10">
                <div
                    class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl p-10 md:p-14 rounded-[3.5rem] border border-white/40 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                    <h3
                        class="text-xs font-black uppercase italic tracking-[0.2em] mb-10 flex items-center text-slate-900 dark:text-white">
                        <span
                            class="w-10 h-10 rounded-2xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center mr-5 shadow-xl italic font-black">Q</span>
                        Simpulan Strategis Auditor
                    </h3>

                    <div
                        class="p-8 md:p-12 bg-slate-50 dark:bg-slate-800/50 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-inner relative z-10">
                        <p
                            class="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 italic leading-relaxed">
                            "{{ summaryText }}"
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div v-for="box in [
                        { label: 'Indikator Dievaluasi', val: indicators.total, icon: 'M9 12l2 2 4-4', color: 'text-slate-900 dark:text-white' },
                        { label: 'Quality Compliance', val: '100%', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'text-emerald-300' },
                        { label: 'Security Level', val: 'Encrypted', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', color: 'text-sky-300' }
                    ]" :key="box.label"
                        class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/40 dark:border-slate-800 shadow-sm text-center group transition-all hover:-translate-y-2 hover:shadow-xl">
                        <p
                            class="text-[8px] font-black uppercase text-slate-400 dark:text-slate-300 tracking-[0.2em] mb-4">
                            {{ box.label }}</p>
                        <p :class="['text-3xl font-black italic tracking-tighter transition-all', box.color]">{{ box.val
                            }}</p>
                        <div class="mt-4 flex justify-center opacity-10 group-hover:opacity-100 transition-opacity">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="box.icon" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-1">
                <div
                    class="bg-slate-900 dark:bg-slate-900 p-10 md:p-12 rounded-[3.5rem] text-white shadow-2xl h-full relative overflow-hidden border border-white/5">
                    <h3
                        class="text-[11px] font-black uppercase italic tracking-widest mb-12 flex items-center relative z-10">
                        <div class="p-2 bg-emerald-600 rounded-lg mr-4 shadow-lg shadow-emerald-600/30">
                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-width="2.5"
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        Secure Vault
                    </h3>

                    <div class="space-y-6 relative z-10">
                        <div v-for="group in groupedDocuments" :key="group.type" class="group/file">
                            <div
                                class="p-6 bg-white/5 rounded-[2.5rem] border border-white/5 transition-all hover:bg-white/10 hover:border-white/10">
                                <div class="flex justify-between items-start mb-6 px-1">
                                    <div class="space-y-1">
                                        <span class="text-[9px] font-black text-slate-300 uppercase tracking-widest">{{
                                            group.label }}</span>
                                        <p class="text-[10px] font-bold text-slate-300 italic leading-none">Official
                                            Report</p>
                                    </div>
                                    <div
                                        class="w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.8)]">
                                    </div>
                                </div>

                                <div v-if="group.files?.length" class="space-y-3">
                                    <a v-for="file in group.files" :key="file.id" :href="'/storage/' + file.file_path"
                                        target="_blank"
                                        class="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-emerald-600 transition-all shadow-sm active:scale-95 group/btn">
                                        <span class="text-[10px] font-black uppercase italic tracking-tighter">Download
                                            Link</span>
                                        <svg class="w-4 h-4 text-white group-hover/btn:translate-y-0.5 transition-transform"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-width="3"
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4-4v12" />
                                        </svg>
                                    </a>
                                </div>
                                <div v-else
                                    class="text-center py-4 px-4 bg-slate-800/50 rounded-2xl border border-dashed border-slate-700">
                                    <span
                                        class="text-[9px] font-black text-slate-600 uppercase tracking-widest italic">Document
                                        Empty</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="absolute -right-16 -bottom-16 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-1000">
                        <div
                            class="w-64 h-64 bg-white rounded-full border-[30px] border-white ring-[40px] ring-white/20">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* High-Performance Micro-Animations */
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}

.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

/* Custom Scrollbar for Sidebar if needed */
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(16, 185, 129, 0.2);
    border-radius: 10px;
}
</style>

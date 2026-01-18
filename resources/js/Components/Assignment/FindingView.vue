<script setup>
import { computed } from 'vue';

const props = defineProps({
    assignment: Object,
    indicators: Object,
    role: String,
    findingStats: Object // Data dari controller
});

// Hitung statistik temuan secara real-time dengan filter yang presisi
const stats = computed(() => {
    // Jika data dari controller tersedia, gunakan itu (lebih akurat untuk total global)
    if (props.findingStats) {
        return {
            kts: props.findingStats.kts,
            ob: props.findingStats.ob,
            unassessed: props.findingStats.unassessed,
            total: props.findingStats.kts + props.findingStats.ob,
            total_indicators: props.findingStats.total_indicators
        };
    }

    // Fallback hitung manual dari data halaman saat ini (untuk backward compatibility)
    const data = props.indicators.data || [];
    return {
        kts: data.filter(i => i.finding_type === 'KTS').length,
        ob: data.filter(i => i.finding_type === 'OB').length,
        unassessed: data.filter(i => !i.score).length, // Estimasi dari page ini
        total: data.filter(i => i.finding_type === 'KTS' || i.finding_type === 'OB').length
    };
});

const getBadgeStyles = (type) => {
    if (type === 'KTS') return 'bg-rose-50 dark:bg-rose-300/10 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-300/20';
    return 'bg-amber-50 dark:bg-amber-300/10 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-300/20';
};
</script>

<template>
    <div class="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">

        <!-- Grid Cards -->
        <div class="grid grid-cols-1 gap-8" :class="stats.unassessed > 0 ? 'md:grid-cols-3' : 'md:grid-cols-2'">
            <!-- Card KTS (Rose Theme - Critical) -->
            <div
                class="bg-gradient-to-br from-rose-600 to-rose-800 dark:from-rose-900 dark:to-rose-950 rounded-[3rem] p-10 text-white shadow-2xl shadow-rose-600/30 relative overflow-hidden group border border-rose-300/20 transition-all hover:scale-[1.02] hover:shadow-rose-500/40">
                <div class="relative z-10">
                    <div class="flex items-center gap-3 mb-4 opacity-90">
                        <div
                            class="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <p class="text-[10px] font-black uppercase tracking-[0.3em] leading-none">
                            Ketidaksesuaian (KTS)</p>
                    </div>
                    <h4 class="text-7xl font-black italic tracking-tighter leading-none drop-shadow-sm">
                        {{ stats.kts }}
                    </h4>
                    <span
                        class="text-xs font-black uppercase tracking-widest text-white/50  mt-3 flex items-center gap-2">
                        <span class="w-1 h-1 bg-white rounded-full"></span> Temuan Terverifikasi
                    </span>
                </div>
                <!-- Decorative Elements -->
                <div
                    class="absolute -right-6 -bottom-6 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000">
                </div>
                <div class="absolute -left-10 -top-10 w-32 h-32 bg-rose-400/20 rounded-full blur-2xl"></div>
            </div>

            <!-- Card OB (Amber Theme - Warning/Improvement) -->
            <div
                class="bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800 rounded-[3rem] p-10 text-white shadow-2xl shadow-amber-600/20 relative overflow-hidden group border border-amber-300/20 transition-all hover:scale-[1.02] hover:shadow-amber-500/40">
                <div class="relative z-10">
                    <div class="flex items-center gap-3 mb-4 opacity-90">
                        <div
                            class="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p class="text-[10px] font-black uppercase tracking-[0.3em] leading-none">
                            Observasi (OB)</p>
                    </div>
                    <h4 class="text-7xl font-black italic tracking-tighter leading-none drop-shadow-sm">
                        {{ stats.ob }}
                    </h4>
                    <span
                        class="text-xs font-black uppercase tracking-widest text-white/50  mt-3 flex items-center gap-2">
                        <span class="w-1 h-1 bg-white rounded-full"></span> Area Peningkatan
                    </span>
                </div>
                <!-- Decorative Elements -->
                <div
                    class="absolute -right-6 -bottom-6 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000">
                </div>
            </div>

            <!-- Card Unassessed (Slate Theme - Pending) -->
            <div v-if="stats.unassessed > 0"
                class="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-[3rem] p-10 text-slate-800 dark:text-white shadow-2xl relative overflow-hidden group border border-white/50 dark:border-white/5 transition-all hover:scale-[1.02]">
                <div class="relative z-10">
                    <div class="flex items-center gap-3 mb-4 opacity-90">
                        <div
                            class="w-12 h-12 rounded-2xl bg-slate-400/10 dark:bg-white/5 border border-slate-400/20 dark:border-white/10 flex items-center justify-center shadow-lg">
                            <svg class="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p
                            class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400 leading-none">
                            Belum Dinilai</p>
                    </div>
                    <h4 class="text-7xl font-black italic tracking-tighter leading-none drop-shadow-sm">
                        {{ stats.unassessed }}
                    </h4>
                    <span
                        class="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500  mt-3 flex items-center gap-2">
                        <span class="w-1 h-1 bg-slate-400 rounded-full animate-pulse"></span> Perlu Tindakan
                    </span>
                </div>
                <!-- Decorative Elements -->
                <div
                    class="absolute -right-6 -bottom-6 w-40 h-40 bg-slate-400/10 dark:bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000">
                </div>
            </div>
        </div>

        <div
            class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[3.5rem] border border-white/40 dark:border-slate-800 shadow-sm p-10 md:p-14 transition-colors duration-300">
            <div
                class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b dark:border-slate-800 pb-10 gap-6">
                <div>
                    <h3
                        class="text-2xl font-black uppercase italic tracking-tighter text-slate-900 dark:text-white leading-none">
                        Ringkasan Verifikasi
                    </h3>
                    <p class="text-[10px] font-bold text-slate-400 dark:text-slate-300 uppercase tracking-widest mt-3">
                        Daftar temuan yang telah diverifikasi oleh auditor
                    </p>
                </div>
                <div
                    class="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 p-2 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <div
                        class="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center text-rose-500 shadow-sm font-black italic text-xl">
                        !</div>
                    <span class="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 px-4">Total: {{
                        stats.total }}
                        Item</span>
                </div>
            </div>

            <div class="space-y-8">
                <div v-for="item in indicators.data.filter(i => i.finding_type)" :key="item.id"
                    class="group flex flex-col md:flex-row gap-8 p-8 bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm rounded-[2.5rem] border border-slate-200/60 dark:border-slate-700/50 hover:border-emerald-300 dark:hover:border-emerald-300/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-300/5">

                    <div class="flex-shrink-0">
                        <div
                            class="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 shadow-lg flex flex-col items-center justify-center border border-white dark:border-slate-700 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                            <span
                                class="text-[7px] font-black text-slate-400 uppercase mb-1 tracking-widest leading-none">Kode</span>
                            <span
                                class="text-xs font-black text-slate-700 dark:text-slate-300 font-mono tracking-tighter">{{
                                    item.snapshot_code }}</span>
                        </div>
                    </div>

                    <div class="flex-1 space-y-4">
                        <div class="flex flex-wrap items-center gap-3">
                            <span
                                :class="['px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-sm border transition-all', getBadgeStyles(item.finding_type)]">
                                {{ item.finding_type === 'KTS' ? 'Ketidaksesuaian' : 'Observasi' }}
                            </span>
                            <div class="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                            <span class="text-[9px] font-bold text-slate-400 uppercase italic">
                                Referensi: {{ item.snapshot_requirement?.substring(0, 40) }}...
                            </span>
                        </div>

                        <div class="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700">
                            <div
                                class="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-emerald-400 transition-colors">
                            </div>
                            <p class="text-base font-bold text-slate-800 dark:text-slate-100 italic leading-relaxed">
                                "{{ item.auditor_note }}"
                            </p>
                        </div>

                        <div v-if="item.recommendation"
                            class="pt-4 mt-2 bg-emerald-50/30 dark:bg-emerald-900/10 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-300/10">
                            <p
                                class="text-[9px] font-black text-emerald-500 dark:text-emerald-400 uppercase tracking-widest mb-2 italic flex items-center gap-2">
                                💡 Saran Auditor:
                            </p>
                            <p class="text-xs text-emerald-900 dark:text-emerald-200/90 font-medium leading-relaxed">
                                {{ item.recommendation }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="stats.kts === 0 && stats.ob === 0 && stats.unassessed === 0" class="py-32 text-center">
                <div
                    class="w-28 h-28 bg-emerald-50 dark:bg-emerald-300/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md border border-emerald-100 dark:border-emerald-300/20 animate-bounce-slow">
                    <svg class="w-12 h-12 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 class="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
                    Kualitas Sempurna</h3>
                <p
                    class="text-slate-400 dark:text-slate-300 text-sm font-medium mt-4 max-w-xs mx-auto leading-relaxed italic">
                    Luar biasa! Tidak ada temuan ketidaksesuaian atau observasi yang tercatat untuk siklus ini.
                </p>
            </div>

            <div v-else-if="stats.unassessed > 0 && stats.kts === 0 && stats.ob === 0" class="py-24 text-center">
                <div
                    class="w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-slate-200 dark:border-slate-700">
                    <svg class="w-10 h-10 text-slate-400 animate-pulse" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 class="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">
                    Verifikasi Belum Selesai
                </h3>
                <p
                    class="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mt-4 max-w-sm mx-auto leading-relaxed">
                    Masih terdapat <span class="text-rose-500">{{ stats.unassessed }} indikator</span> yang belum
                    dinilai.
                    Harap selesaikan penilaian untuk melihat ringkasan akhir.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* High-Performance Micro-Animations */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Custom Glow Effect for Dark Mode */
.dark .bg-rose-600 {
    box-shadow: 0 0 40px rgba(244, 63, 94, 0.15);
}

.animate-pulse {
    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: .6;
    }
}
</style>

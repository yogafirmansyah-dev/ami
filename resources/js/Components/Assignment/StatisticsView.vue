<script setup>
import { computed } from 'vue';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale, PointElement, LineElement, Filler);

const props = defineProps({ assignment: Object, indicators: Object, findingStats: Object });

/* --- DATA LOGIC: Pie Chart Performa --- */
const chartData = computed(() => {
    // Gunakan findingStats untuk data real (total), atau fallback ke data client-side
    const data = props.indicators.data || [];
    const stats = props.findingStats || {
        ks: data.filter(i => i.finding_type === 'KS').length,
        kts: data.filter(i => i.finding_type === 'KTS').length,
        ob: data.filter(i => i.finding_type === 'OB').length,
        unassessed: data.filter(i => !i.finding_type).length,
    };

    return {
        labels: ['Sesuai (KS)', 'Minor/Major (KTS)', 'Observasi (OB)', 'Belum Dinilai'],
        datasets: [{
            backgroundColor: ['#10b981', '#f43f5e', '#f59e0b', '#94a3b8'],
            hoverBackgroundColor: ['#059669', '#be123c', '#d97706', '#64748b'],
            borderWidth: 2,
            borderColor: '#ffffff',
            hoverOffset: 15,
            data: [
                stats.ks,
                stats.kts,
                stats.ob,
                stats.unassessed
            ]
        }]
    };
});

/* --- DATA LOGIC: Efisiensi & Skor --- */
const efficiencyRate = computed(() => {
    const data = props.indicators.data || [];
    const stats = props.findingStats || {
        ks: data.filter(i => i.finding_type === 'KS').length,
        total_indicators: data.length
    };

    if (!stats || stats.total_indicators === 0) return 0;

    // Efficiency = (KS / Total Items) * 100
    return Math.round((stats.ks / stats.total_indicators) * 100);
});

// Options grafik yang mendukung Dark Mode
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                padding: 20,
                usePointStyle: true,
                pointStyle: 'circle',
                font: { size: 12, weight: '600', family: 'Inter' },
                color: '#64748b' // Slate-500
            }
        },
        tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            titleFont: { family: 'Inter', size: 13, weight: 'bold' },
            bodyFont: { family: 'Inter', size: 13 },
            padding: 16,
            cornerRadius: 8,
            displayColors: true,
            boxPadding: 4
        }
    }
};

const summaryText = computed(() => {
    return props.assignment.summary_note
        ? props.assignment.summary_note
        : 'Menunggu kesimpulan akhir auditor untuk siklus ini.';
});

const authorName = computed(() => {
    return props.assignment.auditor?.name || 'System Administrator';
});
</script>

<template>
    <section class="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">

        <!-- Main Grid Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

            <!-- Left Column: Chart Card (Span 5) -->
            <article class="lg:col-span-5 flex flex-col">
                <div
                    class="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-sm border border-slate-200 dark:border-slate-800 h-full relative overflow-hidden flex flex-col">
                    <!-- Decor bg -->
                    <div
                        class="absolute top-0 right-0 p-32 bg-indigo-50 dark:bg-slate-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none">
                    </div>

                    <header class="flex justify-between items-start mb-8 relative z-10">
                        <div>
                            <h2 class="text-lg font-bold text-slate-800 dark:text-white">Compliance Overview</h2>
                            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Distribusi temuan audit</p>
                        </div>
                        <div class="flex flex-col items-end">
                            <span class="text-3xl font-black text-slate-800 dark:text-white tracking-tight">
                                {{ efficiencyRate }}<span class="text-lg text-slate-400">%</span>
                            </span>
                            <span
                                class="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Efficiency</span>
                        </div>
                    </header>

                    <div class="flex-1 flex items-center justify-center relative z-10 min-h-[300px]">
                        <div class="w-full max-w-[280px] hover:scale-105 transition-transform duration-500 ease-out">
                            <Pie :data="chartData" :options="chartOptions" />
                        </div>
                    </div>

                    <footer class="mt-6 text-center relative z-10">
                        <div
                            class="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-full border border-slate-100 dark:border-slate-800">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">Live Audit
                                Data</span>
                        </div>
                    </footer>
                </div>
            </article>

            <!-- Right Column: Summary & Stats (Span 7) -->
            <div class="lg:col-span-7 flex flex-col gap-6">

                <!-- Executive Summary Card -->
                <article
                    class="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-none flex flex-col justify-center group">
                    <!-- Ambient Effects -->
                    <div
                        class="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-white/10 transition-colors duration-1000">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4">
                    </div>

                    <div class="relative z-10">
                        <div class="flex items-center gap-3 mb-6 opacity-80">
                            <span class="w-8 h-[2px] bg-indigo-400"></span>
                            <h3 class="text-xs font-bold uppercase tracking-[0.2em]">Executive Summary</h3>
                        </div>

                        <blockquote
                            class="text-xl md:text-2xl font-medium leading-relaxed font-serif italic text-slate-100">
                            "{{ summaryText }}"
                        </blockquote>

                        <div class="mt-10 flex items-center gap-5 pt-8 border-t border-white/10">
                            <div
                                class="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-indigo-300 ring-1 ring-white/20">
                                <icon icon="fa-solid fa-user-shield" class="text-lg" />
                            </div>
                            <div>
                                <p class="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-0.5">Auditor
                                    in Charge</p>
                                <p class="text-base font-bold text-white">{{ authorName }}</p>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Statistics Grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div v-for="(stat, index) in [
                        { label: 'Scope', value: indicators.total, icon: 'fa-crosshairs', color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
                        { label: 'Findings', value: indicators.data.filter(i => i.finding_type).length, icon: 'fa-triangle-exclamation', color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20' },
                        { label: 'Evidence', value: indicators.data.filter(i => i.evidence_path || i.evidence_url).length, icon: 'fa-paperclip', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
                        { label: 'Score', value: assignment.overall_rating || '-', icon: 'fa-star', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' }
                    ]" :key="index"
                        class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors group cursor-default">

                        <div
                            :class="['w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110', stat.bg, stat.color]">
                            <icon :icon="`fa-solid ${stat.icon}`" class="text-sm" />
                        </div>

                        <span class="text-2xl font-black text-slate-800 dark:text-white leading-tight">
                            {{ stat.value }}
                        </span>
                        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                            {{ stat.label }}
                        </span>
                    </div>
                </div>

            </div>
        </div>

    </section>
</template>

<style scoped>
/* Optional: Custom scrollbar or specific adjustments if needed */
</style>

<script setup>
import { computed } from 'vue';
import { Link, router } from '@inertiajs/vue3';

const props = defineProps({
    assignment: Object,
    indicators: Object,
    role: String,
    filters: Object, // Added filters prop
});

const emit = defineEmits(['open-upload', 'open-assessment', 'open-history']);

/* --- LOGIKA HAK AKSES --- */
const canUpload = computed(() => {
    if (props.role === 'admin') return ['doc_audit', 'field_audit'].includes(props.assignment.current_stage);
    if (props.role === 'auditor') return ['doc_audit', 'field_audit'].includes(props.assignment.current_stage);
    if (props.role === 'auditee') return props.assignment.current_stage === 'doc_audit';
    return false;
});

const canScore = computed(() => {
    if (props.role === 'admin') return ['doc_audit', 'field_audit'].includes(props.assignment.current_stage);
    if (props.role === 'auditor') return ['doc_audit', 'field_audit'].includes(props.assignment.current_stage);
    return false;
});

/* --- SORTING LOGIC (Server-Side) --- */
const handleSort = (field) => {
    const currentSortField = props.filters?.sort_field;
    const currentDirection = props.filters?.direction || 'asc';

    let nextDirection = 'asc';
    if (currentSortField === field) {
        nextDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    }

    router.get(window.location.href, {
        ...props.filters,
        sort_field: field,
        direction: nextDirection,
    }, {
        preserveState: true,
        preserveScroll: true,
        replace: true,
    });
};

/* --- DYNAMIC STYLING --- */
const getScoreColor = (score) => {
    if (!score) return 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700';
    return score >= 3
        ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/30'
        : 'bg-gradient-to-br from-rose-500 to-rose-700 text-white border-rose-600 shadow-lg shadow-rose-500/30';
};

const getFindingBadge = (type) => {
    const map = {
        'KS': 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20',
        'KTS': 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-500/20',
        'OB': 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-500/20'
    };
    return map[type] || 'bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700';
};
</script>

<template>
    <div class="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div
            class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
            <div class="overflow-x-auto custom-scrollbar">
                <table class="w-full text-left border-collapse min-w-[1100px] xl:min-w-full">
                    <thead>
                        <tr
                            class="bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md text-[9px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-200/50 dark:border-slate-800">
                            <th class="p-6 text-center min-w-20">No</th>
                            <th @click="handleSort('snapshot_code')"
                                class="p-6 text-center min-w-24 cursor-pointer hover:text-sky-500 transition-colors group select-none">
                                <div class="flex items-center justify-center gap-1">
                                    Kode
                                    <div
                                        class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">
                                        <icon icon="fa-solid fa-caret-up"
                                            :class="{ 'text-sky-500 opacity-100': filters?.sort_field === 'snapshot_code' && filters?.direction === 'asc' }"
                                            class="-mb-1" />
                                        <icon icon="fa-solid fa-caret-down"
                                            :class="{ 'text-sky-500 opacity-100': filters?.sort_field === 'snapshot_code' && filters?.direction === 'desc' }" />
                                    </div>
                                </div>
                            </th>
                            <th @click="handleSort('snapshot_requirement')"
                                class="p-6 min-w-[350px] cursor-pointer hover:text-sky-500 transition-colors group select-none">
                                <div class="flex items-center justify-center gap-1">
                                    Indikator & Kriteria
                                    <div
                                        class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">
                                        <icon icon="fa-solid fa-caret-up"
                                            :class="{ 'text-sky-500 opacity-100': filters?.sort_field === 'snapshot_requirement' && filters?.direction === 'asc' }"
                                            class="-mb-1" />
                                        <icon icon="fa-solid fa-caret-down"
                                            :class="{ 'text-sky-500 opacity-100': filters?.sort_field === 'snapshot_requirement' && filters?.direction === 'desc' }" />
                                    </div>
                                </div>
                            </th>
                            <th class="p-6 min-w-[250px]">Bukti yang Diperiksa</th>
                            <th class="p-6 text-center w-32">Bukti</th>
                            <th @click="handleSort('score')"
                                class="p-6 text-center w-40 cursor-pointer hover:text-sky-500 transition-colors group select-none">
                                <div class="flex items-center justify-center gap-1">
                                    Hasil Audit
                                    <div
                                        class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">
                                        <icon icon="fa-solid fa-caret-up"
                                            :class="{ 'text-sky-500 opacity-100': filters?.sort_field === 'score' && filters?.direction === 'asc' }"
                                            class="-mb-1" />
                                        <icon icon="fa-solid fa-caret-down"
                                            :class="{ 'text-sky-500 opacity-100': filters?.sort_field === 'score' && filters?.direction === 'desc' }" />
                                    </div>
                                </div>
                            </th>
                            <th class="p-6 min-w-[300px]">Catatan & Rekomendasi</th>
                            <th
                                class="p-6 text-center w-40 sticky right-0 bg-slate-50/80 dark:bg-slate-900/90 backdrop-blur-md z-30 shadow-none">
                                Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100/50 dark:divide-slate-800/50">
                        <tr v-for="(item, index) in indicators.data" :key="item.id"
                            class="group hover:bg-slate-50/80 dark:hover:bg-slate-800/20 transition-all duration-200 align-top">

                            <td class="p-6 text-center">
                                <span :class="[
                                    'font-mono text-xs font-black px-2.5 py-1 rounded-lg border',
                                    role === 'auditor'
                                        ? 'text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20'
                                        : 'text-sky-500 bg-sky-50 dark:bg-sky-500/10 border-sky-100 dark:border-sky-500/20'
                                ]">
                                    {{ indicators.from + index }}
                                </span>
                            </td>

                            <td class="p-6 text-center">
                                <span
                                    class="text-xs font-black text-slate-700 dark:text-slate-300 font-mono tracking-tighter bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                                    {{ item.snapshot_code }}
                                </span>
                            </td>

                            <td class="p-6">
                                <p
                                    class="font-bold text-slate-800 dark:text-slate-200 text-sm italic leading-relaxed mb-2">
                                    {{ item.snapshot_requirement }}
                                </p>
                                <div class="flex items-center gap-2">
                                    <span class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                    <span class="text-[9px] font-black uppercase text-slate-400 tracking-wider">Kriteria
                                        Standar</span>
                                </div>
                            </td>

                            <td class="p-6">
                                <div
                                    class="p-5 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800/50 group-hover:border-slate-200 dark:group-hover:border-slate-700 transition-colors">
                                    <p
                                        class="text-xs text-slate-600 dark:text-slate-400 font-medium italic leading-relaxed">
                                        {{ item.snapshot_evidence_needed }}
                                    </p>
                                    <div v-if="item.snapshot_template_path"
                                        class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                                        <a :href="route('admin.indicators.show-assignment-template', item.id)"
                                            target="_blank"
                                            class="inline-flex items-center gap-2 text-[9px] font-black uppercase text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors tracking-wider">
                                            <icon icon="fa-solid fa-file-arrow-down" class="w-3.5 h-3.5" />
                                            Unduh Template
                                        </a>
                                    </div>
                                </div>
                            </td>

                            <td class="p-6 text-center text-xs">
                                <div class="flex flex-col gap-2 items-center justify-center pt-2">
                                    <a v-if="item.evidence_path" :href="route('files.evidence.show', item.id)"
                                        target="_blank"
                                        class="w-full py-2.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl font-black text-[9px] border border-emerald-100 dark:border-emerald-500/20 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all uppercase tracking-wider flex items-center justify-center gap-1 group/btn">
                                        <icon icon="fa-solid fa-file"
                                            class="w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                                        Berkas
                                    </a>
                                    <a v-if="item.evidence_url" :href="item.evidence_url" target="_blank"
                                        class="w-full py-2.5 bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-xl font-black text-[9px] border border-violet-100 dark:border-violet-500/20 hover:bg-violet-500 hover:text-white dark:hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20 transition-all uppercase tracking-wider flex items-center justify-center gap-1 group/btn">
                                        <icon icon="fa-solid fa-link"
                                            class="w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                                        Tautan
                                    </a>
                                    <span v-if="!item.evidence_path && !item.evidence_url"
                                        class="text-slate-300 dark:text-slate-600 font-black uppercase text-[8px] tracking-[0.2em] py-2">KOSONG</span>
                                </div>
                            </td>

                            <td class="p-6 text-center">
                                <div class="flex flex-col items-center gap-3">
                                    <div
                                        :class="['w-14 h-14 flex items-center justify-center rounded-[1.2rem] font-black text-xl border transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3', getScoreColor(item.score)]">
                                        {{ item.score ?? '-' }}
                                    </div>
                                    <span v-if="item.finding_type"
                                        :class="['px-3 py-1 rounded-lg text-[9px] font-black border tracking-widest uppercase shadow-sm', getFindingBadge(item.finding_type)]">
                                        {{ item.finding_type }}
                                    </span>
                                </div>
                            </td>

                            <td class="p-6">
                                <div class="space-y-3">
                                    <div v-if="item.auditor_note"
                                        class="p-4 bg-amber-50/50 dark:bg-amber-900/10 border-l-[3px] border-amber-400 rounded-r-2xl hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors">
                                        <p
                                            class="text-[8px] font-black text-amber-500 uppercase mb-1.5 tracking-widest flex items-center gap-1.5">
                                            ⚠️ Temuan
                                        </p>
                                        <p
                                            class="text-xs text-slate-700 dark:text-slate-300 font-medium italic leading-relaxed">
                                            "{{ item.auditor_note }}"</p>
                                    </div>
                                    <div v-if="item.recommendation"
                                        class="p-4 bg-emerald-50/50 dark:bg-emerald-900/10 border-l-[3px] border-emerald-400 rounded-r-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
                                        <p
                                            class="text-[8px] font-black text-emerald-500 uppercase mb-1.5 tracking-widest flex items-center gap-1.5">
                                            💡 Saran
                                        </p>
                                        <p
                                            class="text-xs text-slate-700 dark:text-slate-300 font-medium italic leading-relaxed">
                                            {{ item.recommendation }}</p>
                                    </div>
                                </div>
                            </td>

                            <td
                                class="p-6 text-center align-middle sticky right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-10 group-hover:bg-slate-50/90 dark:group-hover:bg-slate-800/90 transition-colors shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.05)]">
                                <div class="flex flex-row justify-center items-center gap-3 relative z-20">
                                    <button v-if="canUpload" @click="$emit('open-upload', item)"
                                        class="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 text-white rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-110 active:scale-95 transition-all"
                                        title="Upload Bukti">
                                        <icon icon="fa-solid fa-cloud-arrow-up" class="text-sm" />
                                    </button>
                                    <button v-if="canScore" @click="$emit('open-assessment', item)"
                                        class="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 dark:from-white dark:to-slate-200 text-white dark:text-slate-900 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all"
                                        title="Penilaian">
                                        <icon icon="fa-solid fa-pen-to-square" class="text-sm" />
                                    </button>
                                    <button @click="$emit('open-history', item)"
                                        class="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 rounded-xl hover:shadow-md hover:border-rose-200 dark:hover:border-rose-500/30 hover:scale-110 active:scale-95 transition-all"
                                        title="Riwayat">
                                        <icon icon="fa-solid fa-clock-rotate-left" class="text-sm" />
                                    </button>
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
                    class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left flex items-center gap-2">
                    <span
                        :class="['w-2 h-2 rounded-full animate-pulse', role === 'auditor' ? 'bg-emerald-500' : 'bg-sky-500']"></span>
                    Data {{ indicators.from }} - {{ indicators.to }} dari total {{ indicators.total }}
                </div>
                <div class="flex flex-wrap justify-center gap-2">
                    <template v-for="(link, k) in indicators.links" :key="k">
                        <Link v-if="link.url" :href="link.url" :class="[
                            'px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all cursor-pointer',
                            link.active
                                ? 'bg-slate-900 dark:bg-rose-600 text-white border-slate-900 dark:border-rose-600 shadow-lg shadow-slate-900/20'
                                : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:text-rose-500'
                        ]" v-html="link.label" />

                        <span v-else :class="[
                            'px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all opacity-30 cursor-not-allowed',
                            'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800'
                        ]" v-html="link.label" />
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    height: 6px;
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
}

/* Fix sticky column shadow on dark mode */
.dark .shadow-sm {
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
}
</style>

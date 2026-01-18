<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
    indicators: Object,
    role: String,
});

const emit = defineEmits(['save-rtl', 'verify-rtl']);

// Local state untuk menghindari mutasi props langsung & handle null safety
const localIndicators = ref([]);

watchEffect(() => {
    if (props.indicators?.data) {
        localIndicators.value = props.indicators.data.map(item => {
            // Jika item.rtl null, inisialisasi objek kosong agar v-model tidak error
            if (!item.rtl) {
                item.rtl = {
                    root_cause: '',
                    action_plan: '',
                    pic: '',
                    deadline: '',
                    status: 'open',
                    auditor_feedback: ''
                };
            }
            return item;
        });
    } else {
        localIndicators.value = [];
    }
});

const getStatusBadge = (status) => {
    const map = {
        'closed': 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30 border-transparent',
        'in_progress': 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 border-transparent',
        'open': 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg shadow-rose-500/30 border-transparent',
    };
    return map[status] || 'bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700';
};
</script>

<template>
    <div
        class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[3.5rem] border border-white/40 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden animate-in fade-in zoom-in duration-500 hover:shadow-2xl transition-shadow">

        <!-- Table View -->
        <div v-if="localIndicators.length > 0" class="overflow-x-auto custom-scrollbar">
            <table class="w-full text-left border-collapse min-w-[2000px]">
                <thead>
                    <tr class="bg-slate-900 dark:bg-black text-white text-[9px] font-black uppercase tracking-[0.2em]">
                        <th
                            class="p-8 w-80 border-r border-white/10 italic underline decoration-rose-500 decoration-2 underline-offset-8">
                            1. Finding Detail</th>
                        <th class="p-8 w-80 border-r border-white/10 italic">2. Root Cause (Auditee)</th>
                        <th class="p-8 w-80 border-r border-white/10 italic">3. Corrective Action Plan</th>
                        <th class="p-8 w-56 border-r border-white/10 text-center italic">4. PIC & Deadline</th>
                        <th class="p-8 w-64 text-center italic border-r border-white/10">5. Auditor Verification</th>
                        <th class="p-8 w-40 text-center italic sticky right-0 bg-slate-900 dark:bg-black z-20">Action
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-50 dark:divide-slate-800/50">
                    <tr v-for="item in localIndicators" :key="item.id"
                        class="align-top group hover:bg-slate-50/50 dark:hover:bg-rose-500/[0.01] transition-colors duration-300">

                        <td class="p-8 border-r border-slate-100 dark:border-slate-800">
                            <div class="space-y-5">
                                <div class="flex items-center gap-2">
                                    <span
                                        class="px-3 py-1 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg text-[9px] font-black uppercase shadow-lg shadow-rose-500/20 italic tracking-widest">{{
                                            item.finding_type }}</span>
                                    <span
                                        class="text-[9px] font-black text-slate-300 dark:text-slate-600 font-mono tracking-tighter group-hover:text-rose-500 transition-colors">#{{
                                            item.snapshot_code }}</span>
                                </div>
                                <div class="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                                    <icon icon="fa-solid fa-quote-left"
                                        class="absolute -top-2 -left-3 text-slate-300 dark:text-slate-600 bg-white dark:bg-slate-900 px-1 text-xs" />
                                    <p
                                        class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-relaxed italic">
                                        "{{ item.auditor_note }}"</p>
                                </div>
                                <div
                                    class="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-700/50 group-hover:border-slate-200 dark:group-hover:border-slate-600 transition-colors">
                                    <p
                                        class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 italic flex items-center gap-1">
                                        <icon icon="fa-solid fa-circle-check" /> Requirement:
                                    </p>
                                    <p
                                        class="text-[10px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                        {{ item.snapshot_requirement }}</p>
                                </div>
                            </div>
                        </td>

                        <td class="p-8 border-r border-slate-100 dark:border-slate-800">
                            <div v-if="role === 'auditee'" class="relative group/field h-full">
                                <textarea v-model="item.rtl.root_cause" rows="8"
                                    class="w-full h-full min-h-[180px] bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/50 rounded-[1.5rem] text-[11px] font-bold text-slate-700 dark:text-slate-200 focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500/50 shadow-inner placeholder:text-slate-300 dark:placeholder:text-slate-600 transition-all resize-none p-5"
                                    placeholder="Analisis penyebab utama masalah..."></textarea>
                                <div
                                    class="absolute bottom-4 right-4 opacity-0 group-focus-within/field:opacity-100 transition-all duration-500 transform translate-y-2 group-focus-within/field:translate-y-0">
                                    <span
                                        class="text-[8px] font-black text-emerald-500 uppercase tracking-widest italic flex items-center gap-1">
                                        <icon icon="fa-solid fa-check-double" /> Autosave Ready
                                    </span>
                                </div>
                            </div>
                            <div v-else
                                class="p-6 rounded-[1.5rem] bg-slate-50/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-700 min-h-[150px] relative overflow-hidden">
                                <div class="absolute top-0 right-0 p-4 opacity-10">
                                    <icon icon="fa-solid fa-magnifying-glass-chart" class="text-4xl" />
                                </div>
                                <p
                                    class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic relative z-10">
                                    {{ item.rtl?.root_cause || 'Belum dianalisis auditror.' }}</p>
                            </div>
                        </td>

                        <td class="p-8 border-r border-slate-100 dark:border-slate-800">
                            <div v-if="role === 'auditee'" class="relative group/field h-full">
                                <textarea v-model="item.rtl.action_plan" rows="8"
                                    class="w-full h-full min-h-[180px] bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/50 rounded-[1.5rem] text-[11px] font-bold text-slate-700 dark:text-slate-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500/50 shadow-inner placeholder:text-slate-300 dark:placeholder:text-slate-600 transition-all resize-none p-5"
                                    placeholder="Langkah perbaikan konkret & sistematis..."></textarea>
                            </div>
                            <div v-else
                                class="p-6 rounded-[1.5rem] bg-slate-50/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-700 min-h-[150px] relative overflow-hidden">
                                <div class="absolute top-0 right-0 p-4 opacity-10">
                                    <icon icon="fa-solid fa-list-check" class="text-4xl" />
                                </div>
                                <p
                                    class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic relative z-10">
                                    {{ item.rtl?.action_plan || 'Rencana belum didefinisikan.' }}</p>
                            </div>
                        </td>

                        <td class="p-8 border-r border-slate-100 dark:border-slate-800">
                            <div class="space-y-6">
                                <div v-if="role === 'auditee'" class="space-y-4">
                                    <div class="space-y-1.5">
                                        <label
                                            class="text-[8px] font-black text-slate-400 uppercase ml-3 italic tracking-widest leading-none">PIC
                                            Name</label>
                                        <input v-model="item.rtl.pic" type="text"
                                            class="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50 rounded-xl text-[10px] font-black uppercase shadow-sm focus:ring-2 focus:ring-rose-500/20 text-center py-3"
                                            placeholder="NAMA / JABATAN">
                                    </div>
                                    <div class="space-y-1.5">
                                        <label
                                            class="text-[8px] font-black text-slate-400 uppercase ml-3 italic tracking-widest leading-none">Due
                                            Date</label>
                                        <input v-model="item.rtl.deadline" type="date"
                                            class="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50 rounded-xl text-[10px] font-black shadow-sm focus:ring-2 focus:ring-rose-500/20 py-3 text-center">
                                    </div>
                                </div>
                                <div v-else class="text-center space-y-4 pt-4">
                                    <div>
                                        <p
                                            class="text-[7px] font-black text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1">
                                            <icon icon="fa-solid fa-user-tag" /> Responsibility
                                        </p>
                                        <p
                                            class="text-[10px] font-black text-slate-800 dark:text-white uppercase tracking-tighter mt-1 bg-slate-100 dark:bg-slate-800 py-1 px-3 rounded-lg inline-block">
                                            {{ item.rtl?.pic || '-' }}</p>
                                    </div>
                                    <div
                                        class="p-3 bg-rose-50 dark:bg-rose-500/5 rounded-2xl border border-rose-100 dark:border-rose-500/20">
                                        <p
                                            class="text-[7px] font-black text-rose-400 uppercase tracking-widest flex items-center justify-center gap-1">
                                            <icon icon="fa-regular fa-calendar" /> Deadline
                                        </p>
                                        <p
                                            class="text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase mt-1">
                                            {{ item.rtl?.deadline || '-' }}</p>
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td class="p-8 border-r border-slate-100 dark:border-slate-800 text-center">
                            <div v-if="role === 'auditor'" class="flex flex-col gap-5 items-center">
                                <select v-model="item.rtl.status"
                                    class="w-full bg-slate-900 dark:bg-black text-white border-none rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] py-4 px-6 shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 cursor-pointer focus:ring-4 focus:ring-rose-500/30 transition-all appearance-none text-center">
                                    <option value="open">STATUS: OPEN</option>
                                    <option value="in_progress">STATUS: IN PROGRESS</option>
                                    <option value="closed">STATUS: CLOSED</option>
                                </select>
                                <textarea v-model="item.rtl.auditor_feedback" rows="4"
                                    class="w-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700/50 rounded-2xl text-[10px] font-medium p-4 italic placeholder:text-slate-300 focus:border-rose-500 focus:ring-0 transition-colors"
                                    placeholder="Evaluasi rencana..."></textarea>
                            </div>
                            <div v-else class="flex flex-col items-center justify-center min-h-[150px] space-y-5">
                                <span
                                    :class="['px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-sm border transition-all duration-700 group-hover:scale-110 select-none', getStatusBadge(item.rtl?.status)]">
                                    {{ item.rtl?.status || 'OPEN' }}
                                </span>
                                <div v-if="item.rtl?.auditor_feedback"
                                    class="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 max-w-[220px]">
                                    <p
                                        class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">
                                        Auditor Feed:</p>
                                    <p class="text-[10px] text-slate-500 dark:text-slate-300 italic leading-relaxed">"{{
                                        item.rtl.auditor_feedback }}"</p>
                                </div>
                            </div>
                        </td>

                        <td
                            class="p-8 text-center flex flex-col items-center justify-center min-h-[200px] sticky right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-10 shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.05)]">
                            <div class="relative z-20 w-full">
                                <button v-if="role === 'auditee'" @click="$emit('save-rtl', item)"
                                    class="w-full py-5 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-rose-600/30 hover:shadow-rose-600/50 hover:scale-105 active:scale-95 transition-all flex flex-col items-center gap-2 group/btn">
                                    <icon icon="fa-solid fa-paper-plane"
                                        class="text-lg group-hover/btn:-translate-y-1 transition-transform" />
                                    <span>Submit</span>
                                </button>

                                <button v-if="role === 'auditor'" @click="$emit('verify-rtl', item)"
                                    class="w-full py-5 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-emerald-600 dark:to-emerald-700 text-white rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-slate-900/30 dark:shadow-emerald-600/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex flex-col items-center gap-2 group/btn">
                                    <icon icon="fa-solid fa-check-to-slot"
                                        class="text-lg group-hover/btn:-translate-y-1 transition-transform" />
                                    <span>Verify</span>
                                </button>

                                <div v-if="role === 'admin'" class="text-center space-y-3 opacity-30">
                                    <icon icon="fa-solid fa-eye" class="text-2xl text-slate-400" />
                                    <span
                                        class="text-[8px] font-black text-slate-400 uppercase tracking-widest block">Monitoring</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Empty State -->
        <div v-else class="flex flex-col items-center justify-center py-20 px-10 text-center space-y-4">
            <div class="p-6 bg-slate-50 dark:bg-slate-800 rounded-full mb-2">
                <icon icon="fa-solid fa-clipboard-check" class="text-4xl text-slate-300 dark:text-slate-600" />
            </div>
            <h3 class="text-lg font-bold text-slate-700 dark:text-white">Tidak Ada Temuan</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 max-w-md">
                Tidak ada temuan (KTS/OB) yang memerlukan Rencana Tindak Lanjut pada saat ini.
            </p>
        </div>
    </div>
</template>

<style scoped>
/* High-Performance Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
    height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(244, 63, 94, 0.3);
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.02);
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
}

/* Luxury Input Depth */
textarea,
input,
select {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

textarea:focus,
input:focus {
    transform: translateY(-2px);
}

.dark textarea:focus,
.dark input:focus {
    background-color: #0f172a;
    /* slate-950 */
}

/* Sticky column shadow fix */
.dark .shadow-sm {
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
}
</style>

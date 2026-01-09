<script setup>
import { Link } from '@inertiajs/vue3';
import TButton from '@/Components/Button/TButton.vue';

const props = defineProps(['myAssignments']);
const assignment = props.myAssignments[0] || null; // Auditee biasanya cuma punya 1 assignment per periode
</script>

<template>
    <div class="max-w-4xl mx-auto space-y-6">
        <div v-if="assignment" class="bg-gradient-to-br from-rose-500 to-rose-700 rounded-xl p-8 text-white shadow-lg">
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="text-2xl font-bold mb-2">Status Audit {{ assignment.target_name }}</h3>
                    <p class="text-rose-100 opacity-80">{{ assignment.standard.name }}</p>
                </div>
                <div class="text-right">
                    <div class="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
                        Tahap: {{ assignment.current_stage }}
                    </div>
                </div>
            </div>

            <div class="mt-8">
                <div class="flex justify-between text-sm mb-2">
                    <span>Progres Pengunggahan Bukti</span>
                    <span class="font-bold">{{ Math.round(assignment.evidence_progress) }}%</span>
                </div>
                <div class="w-full bg-white/20 h-3 rounded-full overflow-hidden">
                    <div class="bg-white h-full transition-all duration-1000"
                        :style="{ width: assignment.evidence_progress + '%' }"></div>
                </div>
            </div>

            <div class="mt-10">
                <Link :href="route('auditee.assignments.show', assignment.id)">
                    <TButton color="white" class="w-full lg:w-auto text-rose-600 font-bold">
                        Buka Lembar Bukti Audit
                    </TButton>
                </Link>
            </div>
        </div>

        <div v-else class="text-center py-20 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
            <p class="text-slate-400 italic">Anda belum memiliki penugasan audit pada periode aktif ini.</p>
        </div>
    </div>
</template>

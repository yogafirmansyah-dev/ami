<script setup>
import { Link } from '@inertiajs/vue3';
import TButton from '@/Components/Button/TButton.vue';

const props = defineProps(['myAssignments']);
</script>

<template>
    <div class="space-y-6">
        <h3 class="text-lg font-bold">Daftar Penugasan Anda</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="item in myAssignments" :key="item.id"
                class="bg-white dark:bg-slate-900 border rounded p-5 flex flex-col justify-between shadow-sm">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-[10px] font-bold px-2 py-1 bg-rose-100 text-rose-600 rounded uppercase">
                            {{ item.current_stage }}
                        </span>
                        <span class="text-xs text-slate-400 italic">Periode: {{ item.period.name }}</span>
                    </div>
                    <h4 class="font-bold text-xl">{{ item.target_name }}</h4>
                    <p class="text-sm text-slate-500 mt-1">{{ item.standard.name }}</p>
                </div>

                <div class="mt-6 pt-4 border-t flex items-center justify-between">
                    <div class="text-xs">
                        Progres Penilaian: <strong>{{ item.scored_indicators_count }} / {{ item.indicators_count
                        }}</strong>
                    </div>
                    <Link :href="route('auditor.assignments.show', item.id)">
                        <TButton color="gradient-primary" size="sm">Mulai Menilai</TButton>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>

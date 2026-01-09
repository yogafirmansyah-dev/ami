<script setup>
import TStatisticWidget from '@/Components/Widgets/TStatisticWidget.vue';
import TTable from '@/Components/Table/TTable.vue';

const props = defineProps(['stats', 'activities']);
</script>

<template>
    <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <TStatisticWidget title="Total Prodi" :value="stats.total_prodi" icon="school" color="blue" />
            <TStatisticWidget title="Total Auditor" :value="stats.total_auditor" icon="user-tie" color="amber" />
            <TStatisticWidget title="Audit Berjalan" :value="stats.active_assignments" icon="tasks" color="rose" />
            <TStatisticWidget title="Audit Selesai" :value="stats.completed_assignments" icon="check-double"
                color="emerald" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white dark:bg-slate-900 p-6 rounded-sm shadow-default">
                <h3 class="font-bold mb-4">Sebaran Tahap Audit</h3>
                <div class="space-y-4">
                    <div v-for="(count, stage) in stats.stage_breakdown" :key="stage" class="flex items-center gap-4">
                        <span class="w-32 text-xs font-bold uppercase text-slate-500">{{ stage }}</span>
                        <div class="flex-grow bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div class="bg-rose-500 h-full"
                                :style="{ width: (count / stats.active_assignments * 100) + '%' }"></div>
                        </div>
                        <span class="text-sm font-bold">{{ count }}</span>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-900 p-6 rounded-sm shadow-default">
                <h3 class="font-bold mb-4 text-sm uppercase text-slate-400">Log Aktivitas Terbaru</h3>
                <div class="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                    <div v-for="act in activities" :key="act.id"
                        class="flex gap-3 border-l-2 border-rose-500 pl-4 py-1">
                        <div class="text-xs">
                            <span class="font-bold block">{{ act.user.name }}</span>
                            <span class="text-slate-500">{{ act.action_label }} pada {{ act.created_at_human }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

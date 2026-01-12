<script setup>
import TStatisticWidget from "@/Components/Card/TStatisticWidget.vue";
import TTable from "@/Components/Table/TTable.vue";

const props = defineProps(['stats', 'activities']);
</script>

<template>
    <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <TStatisticWidget :radius="5" :width="1" color="solid-blue" title="Total Prodi"
                :widgetValue="stats.total_prodi || 0">
                <template #icon>
                    <icon :icon="['fas', 'school']" />
                </template>
            </TStatisticWidget>
            <TStatisticWidget :radius="5" :width="1" color="solid-purple" title="Total Auditor"
                :widgetValue="stats.total_auditors || 0">
                <template #icon>
                    <icon :icon="['fas', 'user-tie']" />
                </template>
            </TStatisticWidget>
            <TStatisticWidget :radius="5" :width="1" color="solid-yellow" title="Audit Berjalan"
                :widgetValue="stats.active_assignments || 0">
                <template #icon>
                    <icon :icon="['fas', 'tasks']" />
                </template>
            </TStatisticWidget>
            <TStatisticWidget :radius="5" :width="1" color="solid-green" title="Audit Selesai"
                :widgetValue="stats.completed_assignments || 0">
                <template #icon>
                    <icon :icon="['fas', 'check-double']" />
                </template>
            </TStatisticWidget>
        </div>


        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white dark:bg-slate-900 p-6 rounded-sm shadow-default">
                <h3 class="font-bold mb-4">Sebaran Tahap Audit</h3>
                <div class="space-y-4">
                    <div v-if="!stats.stage_breakdown" class="text-center text-slate-500 text-sm py-4">
                        Tidak ada data
                    </div>
                    <div v-else v-for="(count, stage) in stats.stage_breakdown" :key="stage"
                        class="flex items-center gap-4">
                        <span class="w-32 text-xs font-bold uppercase text-slate-500">{{ stage }}</span>
                        <div class="flex-grow bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div class="bg-rose-500 h-full"
                                :style="{ width: (count / stats.active_assignments * 100) + '%' }">
                            </div>
                        </div>
                        <span class="text-sm font-bold">{{ count }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

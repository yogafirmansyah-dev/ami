<template>
    <t-content-card :border="true" :color="color" :gradient-direction="gradientDirection" :radius="radius"
        :width="width">
        <template #content>
            <div class="statistic-widget flex items-center justify-between p-4">
                <div class="statistic-widget-data flex-grow">
                    <div class="statistic-widget-title text-slate-500 text-sm font-medium">
                        <slot name="title" />
                    </div>
                    <div class="statistic-widget-value text-2xl font-bold mt-1 flex items-center justify-between">
                        <span>
                            {{ widgetValue }}
                        </span>
                        <span class="h-5 w-5">
                            <slot name="icon" />
                        </span>
                    </div>

                    <div v-if="diffValue"
                        :class="['statistic-widget-diff-value flex items-center text-xs mt-2', calculatedDiffStyle]">
                        <span v-if="diffDirection">{{ diffDirection === 'up' ? '+' : '-' }}</span>
                        {{ diffValue }}
                        <t-chevron-up-icon v-if="diffDirection === 'up'" class="w-3 h-3 ml-1" />
                        <t-chevron-down-icon v-if="diffDirection === 'down'" class="w-3 h-3 ml-1" />
                    </div>
                </div>

            </div>
        </template>
    </t-content-card>
</template>

<script>
import { defineComponent } from 'vue'
import { statisticWidgetStyleMixin } from "@/Mixins/Styles/statisticWidgetStyleMixin";
import TContentCard from "@/Components/Card/TContentCard.vue";
import TChevronUpIcon from "@/Components/Icon/TChevronUpIcon.vue";
import TChevronDownIcon from "@/Components/Icon/TChevronDownIcon.vue";

export default defineComponent({
    name: "TStatisticWidget",
    components: { TChevronDownIcon, TChevronUpIcon, TContentCard },
    mixins: [statisticWidgetStyleMixin],
    props: {
        radius: { default: 0 },
        width: { type: Number, default: 1 },
        widgetValue: { required: true },
        diffValue: { required: false },
        diffDirection: { type: String, default: '' }
    }
})
</script>

<style scoped>
/* Penting: Memastikan SVG Font Awesome memiliki ukuran fisik */
.fa-icon-container {
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    /* Sesuaikan radius widget */
}

/* Selector mendalam untuk menargetkan SVG yang dirender Font Awesome */
.fa-icon-container :deep(svg) {
    width: 20px !important;
    /* Paksa ukuran agar tidak 0px */
    height: 20px !important;
    overflow: visible;
}
</style>

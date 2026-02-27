<template>
    <!--Browser Title-->

    <Head :title="title" />
    <!--TODO: Convert to Announcement Bar Component(TA-23)-->
    <jet-banner />
    <!--Main Container-->
    <div
        class="min-h-screen bg-slate-50 dark:bg-slate-950 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-rose-50/50 via-slate-50/50 to-white dark:from-rose-950/20 dark:via-slate-950 dark:to-black transition-colors duration-300 ease-in-out">
        <div class="flex h-screen overflow-hidden">
            <!--Main Menu -->
            <main-menu />

            <!--Content Container-->
            <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <!--Top Menu-->
                <top-menu />

                <!--Content-->
                <div class="w-full px-6 py-8 mx-auto scroll-smooth app-content-container">
                    <!--Content Header-->
                    <div class="mb-8">
                        <!--Page Header-->
                        <header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                            <div class="space-y-1 w-full">
                                <!--Page Title-->
                                <h1
                                    class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">
                                    <slot v-if="hasSlot('header')" name="header" />
                                    <span v-else-if="header" v-text="header" />
                                </h1>
                                <!--Page SubTitle-->
                                <h2 class="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em]">
                                    <slot v-if="hasSlot('subHeader')" name="subHeader"></slot>
                                    <span v-else-if="subHeader" v-text="subHeader" />
                                </h2>
                            </div>

                            <!--Page Action Buttons-->
                            <div class="flex items-center gap-3">
                                <slot name="action-buttons"></slot>
                            </div>
                        </header>
                    </div>

                    <!--Breadcrumb-->
                    <div class="mb-6">
                        <slot name="breadcrumb"></slot>
                    </div>

                    <!--Content-->
                    <main class="flex flex-col flex-grow relative z-0">
                        <!--Flash Messages-->
                        <div v-if="$page.props.flash.message" class="mb-6 animate-in slide-in-from-top-2 duration-300">
                            <t-alert :color="$page.props.flash.message.type" :timer="5000">
                                <span v-html="$page.props.flash.message.content"></span>
                            </t-alert>
                        </div>
                        <slot></slot>
                    </main>

                    <!--Toastr Notifications-->
                    <div v-if="$page.props.flash.toastr">
                        <t-toastr :key="$page.props.flash.toastr.content" :closeable="true"
                            :color="$page.props.flash.toastr.type" :position="$page.props.flash.toastr.position"
                            :timer="3000">
                            <span v-html="$page.props.flash.toastr.content"></span>
                        </t-toastr>
                    </div>

                    <footer v-if="footerConf.visible"
                        class="mt-12 py-6 text-center border-t border-slate-100 dark:border-slate-800">
                        <span
                            class="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest select-none"
                            v-html="footerConf.content" />
                    </footer>
                </div>
            </div>
        </div>
    </div>
    <!--Modals-->
    <teleport to="body"></teleport>
</template>

<script>
/*Main Functions*/
import { defineComponent, provide, ref, useSlots } from "vue";
import { Head } from "@inertiajs/vue3";
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

/*Components*/
import JetBanner from "@/Jetstream/Banner.vue";
import MainMenu from "@/Layouts/MainMenu/Umay/MainMenu.vue";
import TAlert from "@/Components/Alert/TAlert.vue";
import TToastr from "@/Components/Toastr/TToastr.vue";
import TopMenu from "@/Layouts/TopMenu/TopMenu.vue";

/*Sources*/
import { appConf, footerConf } from "@/config";
import windowSizeCalculator from "@/Functions/windowSizeCalculator";

/*Multi Language*/
import { useI18n } from "vue-i18n";
import { useDarkModeStore } from "@/Stores/darkMode";
import { storeToRefs } from "pinia";

export default defineComponent({
    components: {
        TopMenu,
        Head,
        TToastr,
        MainMenu,
        JetBanner,
        TAlert
    },
    props: {
        title: {
            type: String,
            default: null
        },
        header: {
            type: String,
            default: null
        },
        subHeader: {
            type: String,
            default: null
        }
    },
    setup(props, { slots }) {
        /*Definitions*/
        const { deviceType } = windowSizeCalculator();

        /*Dark Mode*/
        const darkModeStore = useDarkModeStore();
        const { changeThemeUser } = storeToRefs(darkModeStore);

        /*Multi Language*/
        const { t } = useI18n();

        /*Providers*/
        provide("breakpoints", ref(useBreakpoints(breakpointsTailwind)));
        provide("appearingMode", ref(darkModeStore.appearingMode));
        provide("appConf", ref(appConf));


        /*Slot Check*/
        const hasSlot = name => !!useSlots()[name];

        return {
            footerConf,
            deviceType,
            t,
            hasSlot
        };
    }
});
</script>

<script setup>
/*Functions*/
import { inject, provide, ref, computed } from "vue";
import { usePage } from "@inertiajs/vue3"; // Tambahkan usePage
import TopMenuNotification from "@/Layouts/TopMenu/TopMenuNotification.vue";
import TopMenuUserMenu from "@/Layouts/TopMenu/TopMenuUserMenu.vue";
import TLoading from "@/Components/Loading/TLoading.vue";
import TopMenuThemeSelector from "@/Layouts/TopMenu/TopMenuThemeSelector.vue";
import TopMenuLanguageSelector from "@/Layouts/TopMenu/TopMenuLanguageSelector.vue";
import { menuStatus, updateMenuStatus } from "@/Functions/menuTrigger"

/*Sources*/
import { appConf, topBarConf } from "@/config";

/*Definitions*/
const searchBar = ref(false);
const page = usePage();

/*Injections*/
const breakpoints = inject("breakpoints");
const updateMainMenuStatus = updateMenuStatus;

/*Computed: Placeholder Pencarian Dinamis*/
const searchPlaceholder = computed(() => {
    const role = page.props.auth.user.role;
    if (role === 'admin') return "Cari Unit, Auditor, atau Standar...";
    if (role === 'auditor') return "Cari Kode Indikator atau Unit...";
    return "Cari Indikator...";
});

/*Provider*/
provide('appConf', appConf);
provide('topBarConf', topBarConf);
</script>

<template>
    <div class="top-menu shadow-sm" :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`">
        <div v-if="appConf.mainMenuDesign === 'umay' || (breakpoints.smaller('md') && appConf.mainMenuDesign === 'abay')"
            @click="updateMainMenuStatus" class="trigger"
            :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`">
            <svg class="trigger-icon"
                :class="[(breakpoints.smaller('md') && (menuStatus === 'opened')) || menuStatus === undefined ? 'trigger-icon-show' : 'trigger-icon-hide']"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg class="trigger-icon"
                :class="[(menuStatus === 'hidden' || menuStatus === 'closed') ? 'trigger-icon-show' : 'trigger-icon-hide']"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>

        <div class="search-box flex-grow max-w-md ml-4">
            <div @click="searchBar = true"
                class="search-box-wrapper border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex items-center px-4 py-2 cursor-pointer group"
                :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`">
                <svg class="search-icon w-5 h-5 text-slate-400 group-hover:text-rose-500 transition-colors"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span class="ml-2 text-sm text-slate-400 font-normal">
                    {{ searchPlaceholder }}
                </span>
            </div>
        </div>

        <div class="flex items-center gap-2 ml-auto">
            <div v-if="$page.props.jetstream.hasTeamFeatures" class="active-team hidden sm:block">
                <div
                    class="active-team-wrapper flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                    <svg class="w-4 h-4 text-slate-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span class="text-xs font-semibold text-slate-600 dark:text-slate-300 truncate max-w-[100px]">
                        {{ $page.props.auth.user.current_team.name }}
                    </span>
                </div>
            </div>

            <top-menu-notification />
            <top-menu-theme-selector />
            <top-menu-language-selector />
            <div class="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <top-menu-user-menu />
        </div>
    </div>

    <teleport to="body">
        <t-loading v-model="searchBar" color="white" title="Pencarian Global" closeable>
            <div class="search-modal p-6" :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`">
                <div class="relative">
                    <input type="text" id="search"
                        class="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border-2 border-rose-500 rounded-xl focus:ring-0 text-lg"
                        :placeholder="searchPlaceholder" />
                    <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-rose-500" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <p class="mt-4 text-xs text-slate-500 text-center">Tekan <kbd
                        class="px-2 py-1 bg-slate-100 rounded border">ESC</kbd> untuk menutup</p>
            </div>
        </t-loading>
    </teleport>
</template>

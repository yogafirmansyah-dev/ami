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
    <div class="top-menu shadow-sm">
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



        <div class="flex items-center gap-2 ml-auto">

            <top-menu-theme-selector />
            <div class="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <top-menu-user-menu />
        </div>
    </div>
</template>

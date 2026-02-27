<script setup>
/*Functions*/
import { ref, onBeforeMount, inject, watch } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import { onClickOutside } from '@vueuse/core'

defineEmits(['updateMainMenuStatus'])

/*Sources*/
import MainMenuLinks from "@/Sources/mainMenuLinks";
import UserMenu from "@/Layouts/MainMenu/Abay/UserMenu.vue";
import { appConf, mainMenuConf } from "@/config";
import { menuStatus } from "@/Functions/menuTrigger";

const page = usePage()
const { mainMenuLinks, mainMenuFooterLinks } = MainMenuLinks({
    role: page.props.auth.user.role,
});

const activeMainLink = ref([null, null, null]);

/*Main-menu - Variables*/
const appearingMode = inject("appearingMode");
onBeforeMount(() => {
    mainMenuLinks.value.forEach(ml => {
        if (ml.hasOwnProperty('links')) {
            ml.links.find(sl => {
                /*Active Main-link*/
                if (ml.link === route().current()) {
                    activeMainLink.value[0] = ml.id
                }

                /*Active Sub-link*/
                if (sl.link === route().current()) {
                    activeMainLink.value[0] = ml.id
                    activeMainLink.value[1] = sl.id
                }

                /*Active Third-link*/
                if (sl.hasOwnProperty('links')) {
                    sl.links.find(tl => {
                        if (tl.link === route().current()) {
                            activeMainLink.value[0] = ml.id
                            activeMainLink.value[1] = sl.id
                            activeMainLink.value[2] = tl.id
                        }
                    })
                }
            })
        }
    })
})

/*Sub-menu - Variables*/
const subMenu = ref(null)
const showSubMenu = ref();

/*Submenu - Visibility*/
onClickOutside(subMenu, (event) => showSubMenu.value = false)

/*Third-menu */
const thirdMenu = ref(null)
onClickOutside(thirdMenu, (event) => activeMainLink.value[2] = null)

/*Watch Window Size*/
const breakpoints = inject('breakpoints');

watch(breakpoints.value, (newValue) => {

    if (newValue.smaller('md').value) {
        menuStatus.value = 'hidden'
        showSubMenu.value = false;
    }

    if (newValue.greater('md').value) {
        menuStatus.value = 'opened'
    }
})

</script>

<template>
    <div class="abay-main-menu bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl backdrop-saturate-150 border-r border-white/50 dark:border-white/5 shadow-[8px_0_30px_rgba(0,0,0,0.05)] dark:shadow-none h-screen transition-all duration-300 z-50 flex flex-col items-center py-4"
        :class="{
            'w-20': menuStatus === 'opened',
            'hidden': menuStatus === 'hidden',
        }">
        <!-- Logo -->
        <Link :href="route('/')" class="relative group my-4">
            <div
                class="absolute inset-0 bg-rose-500 blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 rounded-full">
            </div>
            <img class="relative h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-110" :src="[
                appearingMode === 'dark' ? mainMenuConf.abay.logo.dark ? mainMenuConf.abay.logo.dark : appConf.logo.dark :
                    mainMenuConf.abay.logo.light ? mainMenuConf.abay.logo.light : appConf.logo.light
            ]" />
        </Link>

        <!-- Main Links -->
        <div
            class="flex flex-col flex-grow space-y-4 w-full px-2 mt-8 overflow-y-auto overflow-x-hidden custom-scrollbar">

            <!-- Link -->
            <template v-for="link in mainMenuLinks" :key="link.id">
                <div @click="activeMainLink[0] = link.id; showSubMenu = true"
                    class="relative group cursor-pointer flex flex-col items-center justify-center w-full aspect-square rounded-2xl transition-all duration-300 hover:bg-white/60 dark:hover:bg-slate-800/60"
                    :class="{ 'bg-white dark:bg-slate-800 shadow-lg shadow-rose-500/10 text-rose-600 dark:text-rose-500': activeMainLink[0] === link.id, 'text-slate-400 dark:text-slate-500 hover:text-rose-500': activeMainLink[0] !== link.id }">

                    <!-- Active Indicator -->
                    <div v-if="activeMainLink[0] === link.id"
                        class="absolute inset-y-3 left-0 w-1 bg-rose-500 rounded-r-full shadow-[0_0_10px_rgba(244,63,94,0.4)]">
                    </div>

                    <!--Dropdown-->
                    <div v-if="link.type === 'dropdown'" class="flex flex-col items-center gap-1">
                        <!-- Icon -->
                        <icon v-if="link.icon" :icon="link.icon"
                            class="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
                        <!-- Label -->
                        <span class="text-[9px] font-black uppercase tracking-wider" v-text="link.label" />
                    </div>

                    <!--Internal Route Link-->
                    <Link v-if="link.type === 'route'" :href="route(link.link)"
                        class="flex flex-col items-center gap-1 w-full h-full justify-center">
                        <!-- Icon -->
                        <icon v-if="link.icon" :icon="link.icon"
                            class="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
                        <!-- Label -->
                        <span class="text-[9px] font-black uppercase tracking-wider" v-text="link.label" />
                    </Link>

                    <!--External Link-->
                    <a v-if="link.type === 'simple-link'"
                        class="flex flex-col items-center gap-1 w-full h-full justify-center" :href="link.link"
                        :target="link.target ? '_blank' : null">
                        <!-- Icon -->
                        <icon v-if="link.icon" :icon="link.icon"
                            class="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
                        <!-- Label -->
                        <span class="text-[9px] font-black uppercase tracking-wider" v-text="link.label" />
                    </a>

                </div>
            </template>
        </div>

        <!--Footer Links-->
        <div class="mt-auto flex flex-col gap-2 w-full px-2">
            <template v-for="link in mainMenuFooterLinks" :key="link.id">
                <div
                    class="flex justify-center items-center w-10 h-10 mx-auto rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all duration-300 cursor-pointer">

                    <!--Internal Route Link-->
                    <Link v-if="link.linkType === 'route'" id="footer-link" :href="route(link.link)">
                        <icon v-if="link.icon" :icon="link.icon" class="w-5 h-5" />
                    </Link>
                    <!--External Link-->
                    <a v-else id="footer-link" :href="link.link" :target="!!link.target">
                        <icon v-if="link.icon" :icon="link.icon" class="w-5 h-5" />
                    </a>
                </div>
            </template>
        </div>

        <!-- User Menu -->
        <div class="mt-6 flex items-center justify-center w-full px-2 pb-2">
            <user-menu />
        </div>
    </div>
    <!-- Sub Links -->

    <div v-if="activeMainLink[0]"
        class="absolute z-10 flex h-full flex-col px-4 -mb-4 w-56 bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl backdrop-saturate-150 border-r border-white/50 dark:border-white/5 shadow-2xl dark:shadow-none text-slate-600 dark:text-slate-300"
        :class="[
            showSubMenu ? 'left-28' : '-left-56',
            'transition-all duration-700'
        ]" ref="subMenu">
        <!-- Firm Info -->
        <div class="flex flex-col h-20 justify-center items-center">
            <!-- Firm Name -->
            <span class="text-2xl font-bold" v-html="mainMenuConf.appName ? mainMenuConf.appName : appConf.appName" />
            <!-- Firm Slogan -->
            <span class="text-xs font-semibold text-center"
                v-html="mainMenuConf.catchPhrase ? mainMenuConf.catchPhrase : appConf.catchPhrase" />
        </div>

        <!-- Sub Links -->
        <div v-if="activeMainLink[0]" class="mt-6 space-y-[.25rem]" ref="thirdMenu">
            <!-- Sub Link -->
            <template v-for="subLink in mainMenuLinks.find(l => l.id === activeMainLink[0]).links" :key="subLink">
                <div class="relative p-2 rounded-md hover:bg-slate-400/50 cursor-pointer text-sm" :class="[
                    { 'bg-rose-500': activeMainLink[1] === subLink.id },
                ]">
                    <!--Dropdown-->

                    <div v-if="subLink.type === 'dropdown'"
                        class="relative flex justify-between items-center cursor-default">

                        <div class="flex space-x-2 items-center">

                            <!-- Icon -->
                            <icon v-if="subLink.icon" :icon="subLink.icon" />

                            <!-- Label -->
                            <span v-text="subLink.label" />
                        </div>

                        <!--Dropdown Icon-->
                        <div class="px-2 cursor-pointer"
                            @click="activeMainLink[2] = activeMainLink[2] === subLink.id ? null : subLink.id">
                            <icon v-if="subLink.hasOwnProperty('links')" icon="ellipsis-vertical" size="sm" />
                        </div>
                    </div>

                    <!--Internal Route Link-->
                    <Link v-if="subLink.type === 'route'" :href="route(subLink.link)"
                        class="flex space-x-2 items-center">

                        <!-- Icon -->
                        <icon v-if="subLink.icon" :icon="subLink.icon" />

                        <!-- Label -->
                        <span v-text="subLink.label" />
                    </Link>

                    <!--External Link-->
                    <a v-if="subLink.type === 'simple-link'" class="flex space-x-2 items-center" :href="subLink.link"
                        :target="!!subLink.target" :key="subLink.id">
                        <!-- Icon -->
                        <icon v-if="subLink.icon" :icon="subLink.icon" />

                        <!-- Label -->
                        <span v-text="subLink.label" />
                    </a>

                    <!--Third Menu-->
                    <div v-if="activeMainLink[2] === subLink.id"
                        class="absolute z-50 top-10 -left-0 flex flex-col p-2 space-y-2 w-full rounded-md bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl">
                        <template v-for="thirdLink in subLink.links" :key="thirdLink">

                            <div class="p-1 rounded-md" :class="[
                                { 'bg-rose-500': route().current(thirdLink.link) }
                            ]">
                                <!--Internal Route Link-->
                                <Link v-if="thirdLink.type === 'route'" :href="route(thirdLink.link)"
                                    class="flex space-x-2 items-center">

                                    <!-- Icon -->
                                    <icon v-if="thirdLink.icon" :icon="thirdLink.icon" />

                                    <!-- Label -->
                                    <span v-text="thirdLink.label" />
                                </Link>

                                <!--External Link-->
                                <a v-if="thirdLink.type === 'simple-link'" class="flex space-x-2 items-center"
                                    :href="thirdLink.link" :target="!!thirdLink.target" :key="thirdLink.id">
                                    <!-- Icon -->
                                    <icon v-if="thirdLink.icon" :icon="thirdLink.icon" />

                                    <!-- Label -->
                                    <span v-text="thirdLink.label" />
                                </a>
                            </div>

                        </template>
                    </div>

                </div>
            </template>
        </div>
    </div>
</template>

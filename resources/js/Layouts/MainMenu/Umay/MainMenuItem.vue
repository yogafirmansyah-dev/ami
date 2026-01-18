<script setup>
/*Functions*/
import { inject, onBeforeMount, defineEmits, defineProps, computed, reactive } from "vue";
import { Link } from '@inertiajs/vue3';
import { menuStatus, updateMenuStatus } from "@/Functions/menuTrigger";


/*Sources*/
import { appConf, mainMenuConf } from "@/config";

/*Variables*/
const emit = defineEmits(['selected'])
const props = defineProps({
    link: {
        type: Object,
        default: null
    }
})

const selectedLink = inject('selectedLink');
const activeMenus = reactive({
    root: null,
    second: null,
    third: null
});

/*Select Active Link*/
const select = (selection) => {

    if (selectedLink.value[0] === selection[0] && selection.length === 1 && menuStatus !== 'opened') {
        emit('selected', [])
    } else if (selectedLink.value[0] === selection[0] && selectedLink.value[1] === selection[1] && selection.length === 2) {
        emit('selected', selection.splice(0, 1))
    } else {
        emit('selected', selection)
    }

}

/*Check Active Helper*/
const checkIsActive = (item) => {
    if (item.activeQuery) {
        return route().current(item.activeQuery);
    }
    return item.link ? route().current(item.link) : false;
};

/*Search Active Link*/
onBeforeMount(() => {
    if (props.link["links"]) {
        for (let child of props.link["links"]) {

            /*Check Second Level*/
            if (checkIsActive(child) && !child["links"]) {
                activeMenus.root = props.link.id
                activeMenus.second = child.id
                select([props.link.id, child.id])
            }

            /*Check Third Level*/
            if (child["links"]) {
                for (let third of child["links"]) {
                    if (checkIsActive(third)) {
                        activeMenus.root = props.link.id
                        activeMenus.second = child.id
                        activeMenus.third = third.id
                        select([props.link.id, child.id, third.id])
                    }
                }
            }

        }
    } else {

        /*Check First Level*/
        if (checkIsActive(props.link)) {
            activeMenus.root = props.link.id
            select([props.link.id])
        }

    }
});

/*Radius Check*/
const generatedRadius = computed(() => {

    let style = {
        rootLinkClasses: {
            activeBg: null,
            normal: null,
            active: null,
        },
        secondLinkClasses: {
            activeBg: null,
            normal: null,
            active: null,
        },
        thirdLinkClasses: {
            activeBg: null,
            normal: null,
            active: null,
        },
    };
    let comparedStyle = `radius-${mainMenuConf.umay.menuRadius ? mainMenuConf.umay.menuRadius : appConf.radius}`


    let mainKeys = ['rootLinkClasses', 'secondLinkClasses', 'thirdLinkClasses']
    let subKeys = ['activeBg', 'normal', 'active']


    mainKeys.forEach((link) => {

        subKeys.forEach((subLink) => {

            mainMenuConf.umay[link][subLink].forEach(i => {

                if (!i.match(/(rounded|radius)/g)) {
                    style[link][subLink] = comparedStyle
                } else {
                    style[link][subLink] = null
                }

            })

        })
    })

    return style

})

</script>
<template>
    <!--Root Wrapper-->
    <div class="relative w-full px-2 py-1">

        <!--Root Item: Dropdown-->
        <div v-if="link.type === 'dropdown' && link.visibleFor !== false"
            @click="select([link.id]); menuStatus === 'closed' && updateMenuStatus()"
            class="group flex justify-between items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 w-full"
            :class="[
                (selectedLink.includes(link.id) && menuStatus !== 'closed') || activeMenus.root === link.id ?
                    'bg-slate-100 dark:bg-slate-800/80 text-rose-600 dark:text-rose-500 font-bold shadow-sm' :
                    'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400'
            ]">
            <div class="flex items-center gap-3 overflow-hidden">
                <!--Icon-->
                <div class="flex justify-center items-center w-6 h-6 shrink-0">
                    <icon v-if="link['icon']" :icon="link.icon"
                        class="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
                </div>
                <!--Label-->
                <span v-text="link.label"
                    class="text-sm font-bold uppercase tracking-wide whitespace-normal leading-tight transition-all duration-300"
                    :class="menuStatus !== 'closed' ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'"></span>
            </div>

            <div v-if="menuStatus !== 'closed'">
                <icon icon="chevron-down" size="xs"
                    :class="[selectedLink.includes(link.id) ? 'rotate-180' : 'rotate-0']"
                    class="transition-transform duration-300 text-current opacity-70" />
            </div>
        </div>

        <!--Root Item: Route-->
        <Link v-else-if="link.type === 'route' && link.visibleFor !== false" :href="route(link.link)"
            @click="select([link.id]); menuStatus === 'closed' && updateMenuStatus()"
            class="group flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer w-full transition-all duration-300"
            :class="[
                selectedLink.includes(link.id) || activeMenus.root === link.id ?
                    'bg-slate-100 dark:bg-slate-800/80 text-rose-600 dark:text-rose-500 font-bold shadow-sm' :
                    'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400'
            ]">
            <!--Icon-->
            <div class="flex justify-center items-center w-6 h-6 shrink-0">
                <icon v-if="link['icon']" :icon="link.icon"
                    class="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
            </div>
            <!--Label-->
            <span v-text="link.label"
                class="text-sm font-bold uppercase tracking-wide whitespace-normal leading-tight transition-all duration-300"
                :class="menuStatus !== 'closed' ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'"></span>
        </Link>

        <!--Root Item: Link-->
        <a v-else-if="link.type === 'simple-link' && link.visibleFor !== false" :href="link.link" :target="link.target"
            class="group flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer w-full transition-all duration-300"
            :class="[
                'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-rose-600 dark:hover:text-rose-400'
            ]">
            <!--Icon-->
            <div class="flex justify-center items-center w-6 h-6 shrink-0">
                <icon v-if="link['icon']" :icon="link.icon"
                    class="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
            </div>
            <!--Label-->
            <span v-text="link.label"
                class="text-sm font-bold uppercase tracking-wide whitespace-normal leading-tight transition-all duration-300"
                :class="menuStatus !== 'closed' ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'"></span>
        </a>
        <!--Secondly Item-->
        <transition name="subMenuTransition">
            <div v-if="link.links && (selectedLink.includes(link.id)) && menuStatus !== 'closed'"
                class="flex flex-col py-2 space-y-2 overflow-hidden">
                <template v-for="subItem in link.links" :key="subItem">

                    <!--Secondly Item: Dropdown-->
                    <div :key="subItem.id" v-if="subItem.type === 'dropdown' && subItem.visibleFor !== false"
                        @click="select([link.id, subItem.id])"
                        class="group flex justify-between items-center px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-300 w-full ml-2 border-l-2 border-slate-100 dark:border-slate-800 hover:border-rose-500"
                        :class="[
                            selectedLink.includes(subItem.id) || activeMenus.second === subItem.id ?
                                'bg-slate-50 dark:bg-slate-800/50 text-rose-600 dark:text-rose-400 font-bold border-l-rose-500 shadow-sm' :
                                'text-slate-500 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400'
                        ]">
                        <div class="flex items-center gap-3">
                            <icon v-if="subItem['icon']" :icon="subItem.icon"
                                class="w-5 h-5 transition-transform group-hover:scale-110" />
                            <span v-text="subItem.label"
                                class="text-xs font-semibold uppercase tracking-wide whitespace-normal leading-tight"></span>
                        </div>
                        <icon icon="chevron-down" size="xs"
                            :class="[selectedLink.includes(subItem.id) ? 'rotate-180' : 'rotate-0']"
                            class="transition-transform duration-300 text-current opacity-70" />
                    </div>

                    <!--Secondly Item: Route-->
                    <Link v-else-if="subItem.type === 'route' && subItem.visibleFor !== false"
                        :href="route(subItem.link)"
                        class="group flex justify-between items-center px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-300 w-full ml-2 border-l-2 border-slate-100 dark:border-slate-800 hover:border-rose-500"
                        :class="[
                            selectedLink.includes(subItem.id) || activeMenus.second === subItem.id ?
                                'bg-slate-50 dark:bg-slate-800/50 text-rose-600 dark:text-rose-400 font-bold border-l-rose-500 shadow-sm' :
                                'text-slate-500 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400'
                        ]">
                        <div class="flex items-center gap-3">
                            <icon v-if="subItem['icon']" :icon="subItem.icon"
                                class="w-5 h-5 transition-transform group-hover:scale-110" />
                            <span v-text="subItem.label"
                                class="text-xs font-semibold uppercase tracking-wide whitespace-normal leading-tight"></span>

                        </div>
                    </Link>

                    <!--Secondly Item: Link-->
                    <a v-else-if="subItem.type === 'simple-link' && subItem.visibleFor !== false" :href="subItem.link"
                        :target="subItem.target"
                        class="group flex justify-between items-center px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-300 w-full ml-2 border-l-2 border-slate-100 dark:border-slate-800 hover:border-rose-500"
                        :class="[
                            'text-slate-500 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400'
                        ]">
                        <div class="flex items-center gap-3">
                            <icon v-if="subItem['icon']" :icon="subItem.icon"
                                class="w-5 h-5 transition-transform group-hover:scale-110" />
                            <span v-text="subItem.label"
                                class="text-xs font-semibold uppercase tracking-wide whitespace-normal leading-tight"></span>
                        </div>
                    </a>

                    <!--Third Item-->
                    <transition name="subMenuTransition">
                        <div v-if="subItem.links && selectedLink.includes(subItem.id) || subItem.links && activeMenus.second === subItem.id"
                            class="flex flex-col space-y-1 mt-1 ml-4 border-l-2 border-slate-200 dark:border-slate-700 pl-2">
                            <template v-for="thirdItem in subItem.links" :key="thirdItem">
                                <!--Third: Route-->
                                <Link :href="route(thirdItem.link)"
                                    v-if="thirdItem.type === 'route' && thirdItem.visibleFor !== false"
                                    class="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer w-full transition-all duration-200"
                                    :class="[
                                        selectedLink.includes(thirdItem.id) || activeMenus.third === thirdItem.id ?
                                            'text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-900/10' :
                                            'text-slate-500 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-400'
                                    ]">
                                    <icon v-if="thirdItem['icon']" :icon="thirdItem.icon" class="w-4 h-4" />
                                    <span v-text="thirdItem.label"
                                        class="text-[11px] font-medium uppercase tracking-wide whitespace-normal leading-tight"></span>
                                </Link>

                                <!--Third: Link-->
                                <a v-if="thirdItem.type === 'simple-link' && thirdItem.visibleFor !== false"
                                    :href="thirdItem.link" :target="thirdItem.target"
                                    class="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer w-full transition-all duration-200"
                                    :class="[
                                        'text-slate-500 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-400'
                                    ]">
                                    <icon v-if="thirdItem['icon']" :icon="thirdItem.icon" class="w-4 h-4" />
                                    <span v-text="thirdItem.label"
                                        class="text-[11px] font-medium uppercase tracking-wide whitespace-normal leading-tight"></span>
                                </a>
                            </template>
                        </div>
                    </transition>
                </template>
            </div>
        </transition>
    </div>
</template>


<style scoped>
.subMenuTransition-enter-active,
.subMenuTransition-leave-active {
    transition: max-height 300ms cubic-bezier(.17, .67, .83, .67),
        opacity 300ms cubic-bezier(.17, .67, .83, .67),
        transform 300ms cubic-bezier(.17, .67, .83, .67);
}

.subMenuTransition-enter-from,
.subMenuTransition-leave-to {
    transform: translateY(-1rem);
    max-height: 0;
    opacity: 0;
}

.subMenuTransition-leave-from,
.subMenuTransition-enter-to {
    max-height: 75vh;
    opacity: 1;
}
</style>

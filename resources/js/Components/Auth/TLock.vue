<template>
    <full-screen-layout :bg-image-url="activeDesign.bgImage[appearingMode]" :bg-color="activeDesign.bgColor">
        <!--Container-->
        <div :class="[
            'auth-container',
            'flex items-center justify-center min-h-screen w-full relative z-10',
            { 'p-4': deviceType === 'phone' },
        ]">
            <div
                class="w-full max-w-md bg-white/10 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden relative group">
                <!-- Decorative Glow -->
                <div
                    class="absolute -top-24 -right-24 w-64 h-64 bg-rose-500/30 rounded-full blur-3xl group-hover:bg-rose-500/40 transition-all duration-1000">
                </div>
                <div
                    class="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl group-hover:bg-indigo-500/40 transition-all duration-1000">
                </div>

                <!--Header / Avatar-->
                <div class="relative z-10 p-8 pb-0 flex flex-col items-center text-center">
                    <!--Avatar-->
                    <div class="mb-6 transform hover:scale-105 transition-transform duration-500 relative">
                        <div class="absolute inset-0 bg-rose-500 rounded-full blur-md opacity-50"></div>
                        <t-avatar :alt="$page.props.auth.user?.name" :radius="8" :size="7"
                            :src="$page.props.auth.user.profile_photo_url"
                            class="relative border-4 border-white/10 shadow-xl" />
                    </div>

                    <!--Name-->
                    <div
                        class="auth-name text-xl font-black uppercase italic tracking-widest text-white drop-shadow-md mb-2">
                        {{ $page.props.auth.user.name }}
                    </div>
                </div>

                <!--Form-->
                <div class="relative z-10 p-8 pt-6">
                    <form @submit.prevent="submit" class="space-y-6">
                        <!--Password-->
                        <t-input-group :radius="5"
                            class="relative text-white/90 font-bold tracking-wide text-xs uppercase"
                            label-for="password" :label="t('password')">
                            <t-input-text id="password" v-model="form.password" :radius="8"
                                :placeholder="tm('password')"
                                class="bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all pl-10">
                                <template #icon>
                                    <t-user-circle-icon class="w-5 h-5 text-white/50" />
                                </template>
                            </t-input-text>
                        </t-input-group>

                        <!--Submit Button-->
                        <t-button :class="{ 'opacity-75': form.processing }" :color="'rose'" design="filled"
                            :disabled="form.processing" :radius="8" size="full"
                            class="justify-center text-sm font-black uppercase tracking-[0.2em] py-4 shadow-lg shadow-rose-900/50 hover:shadow-rose-500/40 hover:-translate-y-0.5 transition-all !rounded-2xl">{{
                            t('reLogin') }}
                        </t-button>
                    </form>
                </div>
            </div>
        </div>

        <!--Errors-->
        <div class="auth-error absolute top-5 right-5 z-50">
            <transition @before-enter="beforeStyle" @after-enter="enterStyle">
                <t-alert v-if="hasErrors" :radius="8" color="rose"
                    class="shadow-xl border border-rose-500/50 backdrop-blur-md">
                    <template #icon>
                        <t-bell-icon class="w-6 h-6 text-rose-200" />
                    </template>
                    <ul class="list-inside text-sm text-white font-medium">
                        <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
                    </ul>
                </t-alert>
            </transition>
        </div>

        <!--Selectors-->
        <div class="fixed bottom-0 flex z-50 w-full justify-center sm:justify-end space-x-6 p-6">
            <!--Language Selector-->
            <t-tooltip v-if="authScreenConf.showLanguageSelector" position="top" :border="false" :custom-style="true">
                <!--Selected Language-->
                <div class="flex justify-center items-center group bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-4 w-10 h-10 cursor-pointer overflow-hidden bg-cover"
                    :class="`radius-${authScreenConf.radius ? authScreenConf.radius : appConf.radius}`">
                    <component :is="languages.find(i => i.id === locale).flag"
                        class="flex flex-shrink-0 w-14 aspect-auto drop-shadow transform hover:scale-110 active:scale-90 hover:-rotate-12 transition-all duration-300"
                        :alt="languages.find(i => i.id === locale).name" />
                    <span
                        class="absolute text-sm -top-2 -right-2 bg-slate-100/10 dark:bg-slate-800/50 backdrop-filter backdrop-blur text-slate-100 px-1 rounded"
                        v-text="languages.find(i => i.id === locale).id"></span>
                </div>
                <template #boxContent>
                    <!--Language Lists-->
                    <div class="top-menu-dropdown-content-wrapper-transparent mb-3">
                        <template v-for="lang in languages" :key="lang.id">
                            <div @click="changeLang(lang.id)" class="top-menu-dropdown-item-transparent">
                                <component :is="lang.flag" class="w-6 aspect-auto drop-shadow" />
                                <span v-text="lang.name"></span>
                            </div>
                        </template>
                    </div>
                </template>
            </t-tooltip>
            <!--Dark Mode-->
            <div v-if="authScreenConf.showDarkModeSelector"
                class="flex justify-center items-center bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-4 w-10 h-10 cursor-pointer overflow-hidden"
                :class="`radius-${authScreenConf.radius ? authScreenConf.radius : appConf.radius}`"
                @click="changeTheme">
                <transition mode="out-in" name="darkModeTransition">
                    <!-- Light -->
                    <icon v-if="darkMode === 'light'" icon="sun" size="lg" key="light" :alt="tm('lightMode')"
                        class="transform hover:scale-110 active:scale-90 transition-transform duration-300" />
                    <!-- Auto -->
                    <icon v-else-if="darkMode === 'auto'" icon="palette" size="lg" key="auto" :alt="tm('auto')"
                        class="transform hover:scale-110 active:scale-90 transition-transform duration-300" />
                    <!-- Dark -->
                    <icon v-else icon="moon" size="lg" key="dark" :alt="tm('darkMode')"
                        class="transform hover:scale-110 active:scale-90 transition-transform duration-300" />
                </transition>
            </div>
            <!--Change Background-->
            <div v-if="authScreenConf.showDesignChanger && authDesigns.length > 1" @click="changeBg"
                class="flex justify-center items-center group bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-4 w-10 h-10 cursor-pointer"
                :class="`radius-${authScreenConf.radius ? authScreenConf.radius : appConf.radius}`">
                <icon icon="redo"
                    class="transform group-hover:scale-110 group-active:scale-90 transition-transform duration-300" />
            </div>
        </div>
    </full-screen-layout>
</template>

<script>
/*Main functions*/
import { defineComponent, computed, ref } from "vue";
import { useForm } from "@inertiajs/vue3";
import { lockStyleMixin } from "@/Mixins/Styles/lockStyleMixin";
import windowSizeCalculator from "@/Functions/windowSizeCalculator";
import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import { useDarkModeStore } from "@/Stores/darkMode.js";

/*Components*/
import FullScreenLayout from "@/Layouts/FullScreenLayout.vue";
import TAlert from "@/Components/Alert/TAlert.vue";
import TBellIcon from "@/Components/Icon/TBellIcon.vue";
import TInputGroup from "@/Components/Form/TInputGroup.vue";
import TInputText from "@/Components/Form/Inputs/TInputText.vue";
import TUserCircleIcon from "@/Components/Icon/TUserCircleIcon.vue";
import TAvatar from "@/Components/Avatar/TAvatar.vue";
import TButton from "@/Components/Button/TButton.vue";
import TTooltip from "@/Components/Tooltip/TTooltip.vue";

/*Sources*/
import { appConf, authScreenConf, badgeConf } from "@/config";
import { authDesigns } from "@/Sources/authScreenDesigns";

/* Multi language */
import { useI18n } from "vue-i18n";
import { useDisplayLanguageStore } from "@/Stores/displayLanguage.js";
import { languages, authTranslates } from "@/Lang/languages";

/*Fontawesome icons*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMoon, faPalette, faRedo, faKey, faBell } from "@fortawesome/free-solid-svg-icons";
import { storeToRefs } from "pinia";

library.add(faSun, faMoon, faPalette, faRedo, faKey, faBell)

export default defineComponent({
    name: "TLock",
    components: { TButton, TAvatar, TUserCircleIcon, TInputText, TInputGroup, TBellIcon, TAlert, FullScreenLayout, TTooltip },
    mixins: [lockStyleMixin],
    props: {
        buttonColor: {
            type: String,
            default: "solid-green"
        },
        buttonDesign: {
            type: String,
            default: "filled"
        },
        bgColor: {
            type: String,
            default: "gray"
        },
        bgGradientDirection: {
            type: String
        },
        bgImage: {
            type: String
        },
        buttonText: {
            type: String,
            default: "Re-Login"
        }
    },
    setup() {
        /*Device type*/
        const { deviceType } = windowSizeCalculator();

        /* Dark Mode */
        const darkModeStore = useDarkModeStore()
        const { changeTheme } = darkModeStore;
        const { darkMode, appearingMode } = storeToRefs(darkModeStore);

        /* Multi-language */
        const displayLanguageStore = useDisplayLanguageStore()
        const { changeLang } = displayLanguageStore;
        const { locale } = storeToRefs(displayLanguageStore);

        const { t, tm } = useI18n({
            inheritLocale: true,
            messages: authTranslates,
        });

        /* Form */
        const form = useForm({
            password: "",
        });

        /* Client-side Validation */
        const rules = ref({
            password: {
                required: helpers.withMessage(tm('validationMessage.password.required'), required)
            },
        });
        const v = useVuelidate(rules, form, { $lazy: true });

        /*Submit*/
        const submit = async () => {
            if (!(await v.value.$validate())) {
                return;
            }
            form.post(route("unlock"), {
                onFinish: () => form.reset("password"),
            });
        };

        /*Design Template Changer*/
        const activeDesignIndex = ref(0)
        const changeBg = () => {
            if (authDesigns.length - 1 > activeDesignIndex.value) {
                activeDesignIndex.value++
            } else {
                activeDesignIndex.value = 0
            }
        };
        const activeDesign = computed(() => {
            return authDesigns[activeDesignIndex.value]
        })

        return {
            authDesigns,
            form,
            darkMode,
            appearingMode,
            changeLang,
            changeTheme,
            changeBg,
            activeDesign,
            submit,
            languages,
            locale,
            deviceType,
            appConf,
            authScreenConf,
            t,
            tm,
            v
        };
    },
    methods: {
        beforeStyle(event) {
            event.style.opacity = 0;
        },
        enterStyle(event) {
            event.style.opacity = 1;
            event.style.transition = `all 1s linear`;
        }
    },
    computed: {
        errors() {
            return this.$page.props.errors;
        },

        hasErrors() {
            return Object.keys(this.errors).length > 0;
        }
    }
});
</script>

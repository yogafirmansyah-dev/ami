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

                <!--Header-->
                <div class="relative z-10 p-8 pb-0 flex flex-col items-center text-center">
                    <!--Logo-->
                    <div class="mb-6 transform hover:scale-105 transition-transform duration-500">
                        <slot v-if="$slots.logo" name="logo" />
                        <div v-else class="flex flex-col items-center gap-4">
                            <img :src="temporaryLogo" class="w-24 h-24 drop-shadow-2xl" />
                            <span v-text="authScreenConf.appName ? authScreenConf.appName : appConf.appName"
                                class="text-2xl font-black italic uppercase tracking-tighter text-white drop-shadow-md leading-tight"></span>
                        </div>
                    </div>
                    <!--Greeting-->
                    <div class="auth-greeting w-full" v-if="status || $slots.greeting">
                        <div class="text-sm font-medium text-white/80">
                            <div v-if="status"
                                class="bg-emerald-500/20 text-emerald-100 p-3 rounded-xl border border-emerald-500/30 backdrop-blur-sm">
                                {{ status }}</div>
                            <slot v-else name="greeting" />
                        </div>
                    </div>
                </div>

                <!--Form-->
                <div class="relative z-10 p-8 pt-6">
                    <form @submit.prevent="submit" class="space-y-5">
                        <!--Email-->
                        <div>
                            <t-input-group :label="t('email')" label-for="email" :errors="v.email.$errors"
                                class="text-white/90 font-bold tracking-wide text-xs uppercase">
                                <t-input-text id="email" v-model="form.email" @blur="v.email.$touch" :radius="8"
                                    autofocus autocomplete="username" required type="email"
                                    placeholder="example@email.com"
                                    class="bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all" />
                            </t-input-group>
                        </div>
                        <!--Password-->
                        <div>
                            <t-input-group :label="t('password')" label-for="password" :errors="v.password.$errors"
                                class="text-white/90 font-bold tracking-wide text-xs uppercase">
                                <t-input-text id="password" v-model="form.password" @blur="v.password.$touch"
                                    :radius="8" autocomplete="current-password" required type="password"
                                    placeholder="••••••••"
                                    class="bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all" />
                            </t-input-group>
                        </div>

                        <div class="flex items-center justify-between mt-2">
                            <!--Remember Me-->
                            <label class="flex items-center cursor-pointer group">
                                <t-input-check-box id="remember" v-model="form.remember" :label="t('rememberMe')"
                                    class="text-white/80 group-hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                                    <template #icon>
                                        <icon icon="key" size="sm"
                                            class="text-rose-400 group-hover:text-rose-300 transition-colors" />
                                    </template>
                                </t-input-check-box>
                            </label>

                            <!--Forgot Password-->
                            <Link v-if="canResetPassword" :href="route('password.request')"
                                class="text-[10px] font-black uppercase tracking-widest text-rose-300 hover:text-rose-200 hover:underline decoration-rose-400/50 underline-offset-4 transition-all">
                            {{
                                t('forgotPassword') }}
                            </Link>
                        </div>

                        <!--Submit Area-->
                        <div class="pt-4 flex flex-col gap-3">
                            <!--Submit Button-->
                            <t-button :class="{ 'opacity-75': form.processing }" :color="'rose'" design="filled"
                                :disabled="form.processing" :radius="8"
                                class="w-full border border-slate-800 justify-center text-sm font-black uppercase tracking-[0.2em] py-4 shadow-lg shadow-rose-900/50 hover:bg-white/10 hover:shadow-rose-500/40 hover:-translate-y-0.5 transition-all !rounded-2xl">
                                {{ t('login') }}
                            </t-button>

                            <!--Register Button-->
                            <!-- <t-button :class="{ 'opacity-75': form.processing }" design="link" color="light"
                                :link="route('register')" :radius="8" type="link"
                                class="w-full justify-center text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors">
                                {{ t('register') }}
                            </t-button> -->
                        </div>
                    </form>
                </div>
            </div>
        </div>



        <!--Selectors-->
        <div class="fixed bottom-0 flex z-50 w-full justify-center sm:justify-end space-x-4 p-6">
            <!--Language Selector-->
            <!-- <t-tooltip v-if="authScreenConf.showLanguageSelector" position="top" :border="false" :custom-style="true"> -->
            <!--Selected Language-->
            <!-- <div
                    class="flex justify-center items-center group bg-black/20 hover:bg-black/40 backdrop-blur-md text-white p-3 w-10 h-10 cursor-pointer overflow-hidden rounded-xl border border-white/10 transition-all hover:border-white/20 shadow-lg">
                    <component :is="languages.find(i => i.id === locale).flag"
                        class="flex flex-shrink-0 w-8 aspect-auto drop-shadow-md transform hover:scale-110 transition-all duration-300"
                        :alt="languages.find(i => i.id === locale).name" />
                </div> -->
            <!-- ... existing template logic for content ... -->
            <!-- <template #boxContent>
                    <div class="top-menu-dropdown-content-wrapper-transparent mb-3">
                        <template v-for="lang in languages" :key="lang.id">
                            <div @click="changeLang(lang.id)"
                                class="top-menu-dropdown-item-transparent text-xs font-bold uppercase tracking-widest">
                                <component :is="lang.flag" class="w-5 aspect-auto drop-shadow" />
                                <span v-text="lang.name"></span>
                            </div>
                        </template>
                    </div>
                </template>
            </t-tooltip> -->

            <!--Dark Mode-->
            <div v-if="authScreenConf.showDarkModeSelector"
                class="flex justify-center items-center bg-black/20 hover:bg-black/40 backdrop-blur-md text-white p-3 w-10 h-10 cursor-pointer overflow-hidden rounded-xl border border-white/10 transition-all hover:border-white/20 shadow-lg"
                @click="changeTheme">
                <transition mode="out-in" name="darkModeTransition">
                    <icon v-if="darkMode === 'light'" icon="sun" size="lg" key="light"
                        class="transform hover:scale-110 active:scale-90 transition-transform duration-300 text-amber-300" />
                    <icon v-else-if="darkMode === 'auto'" icon="palette" size="lg" key="auto"
                        class="transform hover:scale-110 active:scale-90 transition-transform duration-300 text-indigo-300" />
                    <icon v-else icon="moon" size="lg" key="dark"
                        class="transform hover:scale-110 active:scale-90 transition-transform duration-300 text-sky-300" />
                </transition>
            </div>
        </div>
    </full-screen-layout>
</template>

<script>
/*Main functions*/
import { defineComponent, computed, ref } from "vue";
import { loginStyleMixin } from "@/Mixins/Styles/loginStyleMixin";
import { Link, useForm } from "@inertiajs/vue3";
import windowSizeCalculator from "@/Functions/windowSizeCalculator";
import useVuelidate from "@vuelidate/core";
import { email, helpers, required } from "@vuelidate/validators";
import { useDarkModeStore } from "@/Stores/darkMode.js";

/*Components*/
import TAlert from "@/Components/Alert/TAlert.vue";
import TBellIcon from "@/Components/Icon/TBellIcon.vue";
import TButton from "@/Components/Button/TButton.vue";
import FullScreenLayout from "@/Layouts/FullScreenLayout.vue";
import TInputGroup from "@/Components/Form/TInputGroup.vue";
import TInputText from "@/Components/Form/Inputs/TInputText.vue";
import TDropdown from "@/Components/Dropdown/TDropdown.vue";
import TTooltip from "@/Components/Tooltip/TTooltip.vue";
import TInputCheckBox from "@/Components/Form/Inputs/TInputCheckBox.vue";

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
    name: "TLogin",
    components: {
        TInputCheckBox,
        TTooltip,
        TAlert,
        TBellIcon,
        TButton,
        TDropdown,
        FullScreenLayout,
        TInputGroup,
        TInputText,
        Link
    },
    mixins: [loginStyleMixin],
    props: {
        canResetPassword: Boolean,
        status: String,
    },
    setup(props) {
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

        /* Login */
        const form = useForm({
            email: "",
            password: "",
            remember: false,
        });


        /* Client-side Validation */
        const rules = ref({
            email: {
                required: helpers.withMessage(tm('validationMessage.email.required'), required),
                email: helpers.withMessage(tm('validationMessage.email.email'), email)
            },
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
            form
                .transform((data) => ({
                    ...data,
                    remember: form.remember ? "on" : "",
                }))
                .post(route("login"), {
                    onFinish: () => form.reset("password"),
                });
        };

        /*Logo SRC*/
        /*Temporary Definitions*/
        const temporaryLogo = computed(() => {
            let logo;


            if (appearingMode.value === 'dark') {
                if (activeDesign.value.logo.dark) {
                    logo = activeDesign.value.logo.dark
                } else if (authScreenConf.logo.dark) {
                    logo = authScreenConf.darkLogo
                } else {
                    logo = appConf.logo.dark
                }
            } else {
                if (activeDesign.value.logo.light) {
                    logo = activeDesign.value.logo.light
                } else if (authScreenConf.logo.light) {
                    logo = authScreenConf.logo.light
                } else {
                    logo = appConf.logo.light
                }
            }

            return logo;
        });

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
            temporaryLogo,
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

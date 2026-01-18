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
                    <div class="mb-4 transform hover:scale-105 transition-transform duration-500">
                        <slot v-if="$slots.logo" name="logo" />
                        <div v-else class="flex flex-col items-center gap-4">
                            <img :src="temporaryLogo" class="w-20 h-20 drop-shadow-2xl" />
                            <span v-text="authScreenConf.appName ? authScreenConf.appName : appConf.appName"
                                class="text-xl font-black italic uppercase tracking-tighter text-white drop-shadow-md leading-tight"></span>
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
                <div class="relative z-10 p-8 pt-4">
                    <form @submit.prevent="submit" class="space-y-4">
                        <!--Name-->
                        <div>
                            <t-input-group :label="t('name')" label-for="name" :errors="v.name.$errors"
                                class="text-white/90 font-bold tracking-wide text-xs uppercase">
                                <t-input-text id="name" v-model="form.name" @blur="v.name.$touch" :radius="8" autofocus
                                    autocomplete="name" required type="text" placeholder="Full Name"
                                    class="bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all" />
                            </t-input-group>
                        </div>
                        <!--Email-->
                        <div>
                            <t-input-group :label="t('email')" label-for="email" :errors="v.email.$errors"
                                class="text-white/90 font-bold tracking-wide text-xs uppercase">
                                <t-input-text id="email" v-model="form.email" @blur="v.email.$touch" :radius="8"
                                    autocomplete="username" required type="email" placeholder="Email Address"
                                    class="bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all" />
                            </t-input-group>
                        </div>
                        <!--Password-->
                        <div>
                            <t-input-group :label="t('password')" label-for="password" :errors="v.password.$errors"
                                class="text-white/90 font-bold tracking-wide text-xs uppercase">
                                <t-input-text id="password" v-model="form.password" @blur="v.password.$touch"
                                    :radius="8" autocomplete="new-password" required type="password"
                                    placeholder="Password"
                                    class="bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all" />
                            </t-input-group>
                        </div>
                        <!--Confirm Password-->
                        <div>
                            <t-input-group :label="t('passwordConfirmation')" label-for="password_confirmation"
                                :errors="v.password_confirmation.$errors"
                                class="text-white/90 font-bold tracking-wide text-xs uppercase">
                                <t-input-text id="password_confirmation" v-model="form.password_confirmation"
                                    @blur="v.password_confirmation.$touch" :radius="8" autocomplete="new-password"
                                    required type="password" placeholder="Confirm Password"
                                    class="bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all" />
                            </t-input-group>
                        </div>
                        <!--Terms-->
                        <div v-if="privacyPolicyFeature" class="mt-2">
                            <t-input-group label-for="terms">
                                <div class="flex items-center">
                                    <input id="terms" v-model="form.terms" name="terms" type="checkbox"
                                        class="rounded border-rose-300 text-rose-600 shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50" />
                                    <!-- ... Keeping existing i18n logic but styling text ... -->
                                    <div class="ml-2 text-xs text-white/80">
                                        <i18n-t keypath="terms" tag="span">
                                            <template #termsOfService>
                                                <Link :href="termsLink"
                                                    class="underline text-rose-300 hover:text-rose-100" target="_blank">
                                                {{ t('termsOfService') }}</Link>
                                            </template>
                                            <template #privacyPolicy>
                                                <Link :href="policyLink"
                                                    class="underline text-rose-300 hover:text-rose-100" target="_blank">
                                                {{ t('privacyPolicy') }}</Link>
                                            </template>
                                        </i18n-t>
                                    </div>
                                </div>
                            </t-input-group>
                        </div>

                        <!--Actions-->
                        <div class="pt-2 flex flex-col gap-3">
                            <!--Register Button-->
                            <t-button :class="{ 'opacity-75': form.processing }" :color="'rose'" design="filled"
                                :disabled="form.processing" :radius="8"
                                class="w-full justify-center text-sm font-black uppercase tracking-[0.2em] py-4 shadow-lg shadow-rose-900/50 hover:shadow-rose-500/40 hover:-translate-y-0.5 transition-all !rounded-2xl">
                                {{ t('register') }}
                            </t-button>

                            <!--Login Link-->
                            <t-button :class="{ 'opacity-75': form.processing }" design="link" color="light"
                                :link="route('login')" :radius="8" type="link"
                                class="w-full justify-center text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors">
                                {{ t('alreadyRegistered') }}
                            </t-button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="auth-error absolute top-5 right-5 z-50">
            <!--Errors-->
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
import { registerStyleMixin } from "@/Mixins/Styles/registerStyleMixin";
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
    name: "TRegister",
    components: {
        TAlert,
        TBellIcon,
        TButton,
        FullScreenLayout,
        TInputGroup,
        TInputText,
        Link,
        TDropdown,
        TTooltip,
        TInputCheckBox
    },
    mixins: [registerStyleMixin],
    props: {
        privacyPolicyFeature: Boolean,
        termsLink: String,
        policyLink: String
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

        /* Register */
        const form = useForm({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            terms: false
        });

        /* Client-side Validation */
        const rules = ref({
            name: {
                required: helpers.withMessage(tm('validationMessage.name.required'), required)
            },
            email: {
                required: helpers.withMessage(tm('validationMessage.email.required'), required),
                email: helpers.withMessage(tm('validationMessage.email.email'), email)
            },
            password: {
                required: helpers.withMessage(tm('validationMessage.password.required'), required)
            },
            password_confirmation: {
                required: helpers.withMessage(tm('validationMessage.passwordConfirmation.required'), required)
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
                .post(route("register"), {
                    onFinish: () => form.reset("password", "password_confirmation"),
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

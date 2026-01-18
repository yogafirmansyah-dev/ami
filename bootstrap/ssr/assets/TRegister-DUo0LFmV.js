import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, withDirectives, vModelCheckbox, createBlock, openBlock, Fragment, renderList, resolveDynamicComponent, createCommentVNode, renderSlot, withModifiers, Transition, ref, computed, useSSRContext } from "vue";
import { b as bgColorStyles, r as radiusSizeMixin, d as _sfc_main$2, T as TAlert, w as windowSizeCalculator, g as authScreenConf, a as appConf } from "./windowSizeCalculator-BWfQvLaG.js";
import { Link, useForm } from "@inertiajs/vue3";
import useVuelidate from "@vuelidate/core";
import { helpers, required, email } from "@vuelidate/validators";
import { u as useDarkModeStore } from "./darkMode-BsM-iRm5.js";
import { _ as _sfc_main$1, T as TBellIcon, a as authDesigns } from "./authScreenDesigns-Bu_GjJbX.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { T as TDropdown } from "./TDropdown-8S66trQc.js";
import { T as TTooltip } from "./TTooltip-DEROIMmS.js";
import { T as TInputCheckBox } from "./TInputCheckBox-MNbC_ugI.js";
import { useI18n } from "vue-i18n";
import { b as useDisplayLanguageStore, a as authTranslates, l as languages } from "./displayLanguage-Bjc1nzNS.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMoon, faPalette, faRedo, faKey, faBell } from "@fortawesome/free-solid-svg-icons";
import { storeToRefs } from "pinia";
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const registerStyleMixin = {
  mixins: [bgColorStyles, radiusSizeMixin],
  computed: {
    calculatedRegisterStyle() {
      let style;
      style = this.bgColorStyle + " ";
      style += this.textColorStyle;
      return style;
    }
  }
};
library.add(faSun, faMoon, faPalette, faRedo, faKey, faBell);
const _sfc_main = defineComponent({
  name: "TRegister",
  components: {
    TAlert,
    TBellIcon,
    TButton: _sfc_main$2,
    FullScreenLayout: _sfc_main$1,
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
    const { deviceType } = windowSizeCalculator();
    const darkModeStore = useDarkModeStore();
    const { changeTheme } = darkModeStore;
    const { darkMode, appearingMode } = storeToRefs(darkModeStore);
    const displayLanguageStore = useDisplayLanguageStore();
    const { changeLang } = displayLanguageStore;
    const { locale } = storeToRefs(displayLanguageStore);
    const { t, tm } = useI18n({
      inheritLocale: true,
      messages: authTranslates
    });
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: false
    });
    const rules = ref({
      name: {
        required: helpers.withMessage(tm("validationMessage.name.required"), required)
      },
      email: {
        required: helpers.withMessage(tm("validationMessage.email.required"), required),
        email: helpers.withMessage(tm("validationMessage.email.email"), email)
      },
      password: {
        required: helpers.withMessage(tm("validationMessage.password.required"), required)
      },
      password_confirmation: {
        required: helpers.withMessage(tm("validationMessage.passwordConfirmation.required"), required)
      }
    });
    const v = useVuelidate(rules, form, { $lazy: true });
    const submit = async () => {
      if (!await v.value.$validate()) {
        return;
      }
      form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : ""
      })).post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    const temporaryLogo = computed(() => {
      let logo;
      if (appearingMode.value === "dark") {
        if (activeDesign.value.logo.dark) {
          logo = activeDesign.value.logo.dark;
        } else if (authScreenConf.logo.dark) {
          logo = authScreenConf.darkLogo;
        } else {
          logo = appConf.logo.dark;
        }
      } else {
        if (activeDesign.value.logo.light) {
          logo = activeDesign.value.logo.light;
        } else if (authScreenConf.logo.light) {
          logo = authScreenConf.logo.light;
        } else {
          logo = appConf.logo.light;
        }
      }
      return logo;
    });
    const activeDesignIndex = ref(0);
    const changeBg = () => {
      if (authDesigns.length - 1 > activeDesignIndex.value) {
        activeDesignIndex.value++;
      } else {
        activeDesignIndex.value = 0;
      }
    };
    const activeDesign = computed(() => {
      return authDesigns[activeDesignIndex.value];
    });
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_full_screen_layout = resolveComponent("full-screen-layout");
  const _component_t_input_group = resolveComponent("t-input-group");
  const _component_t_input_text = resolveComponent("t-input-text");
  const _component_i18n_t = resolveComponent("i18n-t");
  const _component_Link = resolveComponent("Link");
  const _component_t_button = resolveComponent("t-button");
  const _component_t_alert = resolveComponent("t-alert");
  const _component_t_bell_icon = resolveComponent("t-bell-icon");
  const _component_t_tooltip = resolveComponent("t-tooltip");
  const _component_icon = resolveComponent("icon");
  _push(ssrRenderComponent(_component_full_screen_layout, mergeProps({
    "bg-image-url": _ctx.activeDesign.bgImage[_ctx.appearingMode],
    "bg-color": _ctx.activeDesign.bgColor
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="${ssrRenderClass([
          "auth-container",
          "flex items-center justify-center min-h-screen w-full relative z-10",
          { "p-4": _ctx.deviceType === "phone" }
        ])}"${_scopeId}><div class="w-full max-w-md bg-white/10 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden relative group"${_scopeId}><div class="absolute -top-24 -right-24 w-64 h-64 bg-rose-500/30 rounded-full blur-3xl group-hover:bg-rose-500/40 transition-all duration-1000"${_scopeId}></div><div class="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl group-hover:bg-indigo-500/40 transition-all duration-1000"${_scopeId}></div><div class="relative z-10 p-8 pb-0 flex flex-col items-center text-center"${_scopeId}><div class="mb-4 transform hover:scale-105 transition-transform duration-500"${_scopeId}>`);
        if (_ctx.$slots.logo) {
          ssrRenderSlot(_ctx.$slots, "logo", {}, null, _push2, _parent2, _scopeId);
        } else {
          _push2(`<div class="flex flex-col items-center gap-4"${_scopeId}><img${ssrRenderAttr("src", _ctx.temporaryLogo)} class="w-20 h-20 drop-shadow-2xl"${_scopeId}><span class="text-xl font-black italic uppercase tracking-tighter text-white drop-shadow-md leading-tight"${_scopeId}>${ssrInterpolate(_ctx.authScreenConf.appName ? _ctx.authScreenConf.appName : _ctx.appConf.appName)}</span></div>`);
        }
        _push2(`</div>`);
        if (_ctx.status || _ctx.$slots.greeting) {
          _push2(`<div class="auth-greeting w-full"${_scopeId}><div class="text-sm font-medium text-white/80"${_scopeId}>`);
          if (_ctx.status) {
            _push2(`<div class="bg-emerald-500/20 text-emerald-100 p-3 rounded-xl border border-emerald-500/30 backdrop-blur-sm"${_scopeId}>${ssrInterpolate(_ctx.status)}</div>`);
          } else {
            ssrRenderSlot(_ctx.$slots, "greeting", {}, null, _push2, _parent2, _scopeId);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="relative z-10 p-8 pt-4"${_scopeId}><form class="space-y-4"${_scopeId}><div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_t_input_group, {
          label: _ctx.t("name"),
          "label-for": "name",
          errors: _ctx.v.name.$errors,
          class: "text-white/90 font-bold tracking-wide text-xs uppercase"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_input_text, {
                id: "name",
                modelValue: _ctx.form.name,
                "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
                onBlur: _ctx.v.name.$touch,
                radius: 8,
                autofocus: "",
                autocomplete: "name",
                required: "",
                type: "text",
                placeholder: "Full Name",
                class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_input_text, {
                  id: "name",
                  modelValue: _ctx.form.name,
                  "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
                  onBlur: _ctx.v.name.$touch,
                  radius: 8,
                  autofocus: "",
                  autocomplete: "name",
                  required: "",
                  type: "text",
                  placeholder: "Full Name",
                  class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_t_input_group, {
          label: _ctx.t("email"),
          "label-for": "email",
          errors: _ctx.v.email.$errors,
          class: "text-white/90 font-bold tracking-wide text-xs uppercase"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_input_text, {
                id: "email",
                modelValue: _ctx.form.email,
                "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                onBlur: _ctx.v.email.$touch,
                radius: 8,
                autocomplete: "username",
                required: "",
                type: "email",
                placeholder: "Email Address",
                class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_input_text, {
                  id: "email",
                  modelValue: _ctx.form.email,
                  "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                  onBlur: _ctx.v.email.$touch,
                  radius: 8,
                  autocomplete: "username",
                  required: "",
                  type: "email",
                  placeholder: "Email Address",
                  class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_t_input_group, {
          label: _ctx.t("password"),
          "label-for": "password",
          errors: _ctx.v.password.$errors,
          class: "text-white/90 font-bold tracking-wide text-xs uppercase"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_input_text, {
                id: "password",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                onBlur: _ctx.v.password.$touch,
                radius: 8,
                autocomplete: "new-password",
                required: "",
                type: "password",
                placeholder: "Password",
                class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_input_text, {
                  id: "password",
                  modelValue: _ctx.form.password,
                  "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                  onBlur: _ctx.v.password.$touch,
                  radius: 8,
                  autocomplete: "new-password",
                  required: "",
                  type: "password",
                  placeholder: "Password",
                  class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_t_input_group, {
          label: _ctx.t("passwordConfirmation"),
          "label-for": "password_confirmation",
          errors: _ctx.v.password_confirmation.$errors,
          class: "text-white/90 font-bold tracking-wide text-xs uppercase"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_input_text, {
                id: "password_confirmation",
                modelValue: _ctx.form.password_confirmation,
                "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
                onBlur: _ctx.v.password_confirmation.$touch,
                radius: 8,
                autocomplete: "new-password",
                required: "",
                type: "password",
                placeholder: "Confirm Password",
                class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_input_text, {
                  id: "password_confirmation",
                  modelValue: _ctx.form.password_confirmation,
                  "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
                  onBlur: _ctx.v.password_confirmation.$touch,
                  radius: 8,
                  autocomplete: "new-password",
                  required: "",
                  type: "password",
                  placeholder: "Confirm Password",
                  class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        if (_ctx.privacyPolicyFeature) {
          _push2(`<div class="mt-2"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_t_input_group, { "label-for": "terms" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="flex items-center"${_scopeId2}><input id="terms"${ssrIncludeBooleanAttr(Array.isArray(_ctx.form.terms) ? ssrLooseContain(_ctx.form.terms, null) : _ctx.form.terms) ? " checked" : ""} name="terms" type="checkbox" class="rounded border-rose-300 text-rose-600 shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50"${_scopeId2}><div class="ml-2 text-xs text-white/80"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_i18n_t, {
                  keypath: "terms",
                  tag: "span"
                }, {
                  termsOfService: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_Link, {
                        href: _ctx.termsLink,
                        class: "underline text-rose-300 hover:text-rose-100",
                        target: "_blank"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`${ssrInterpolate(_ctx.t("termsOfService"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.t("termsOfService")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_Link, {
                          href: _ctx.termsLink,
                          class: "underline text-rose-300 hover:text-rose-100",
                          target: "_blank"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.t("termsOfService")), 1)
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ];
                    }
                  }),
                  privacyPolicy: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_Link, {
                        href: _ctx.policyLink,
                        class: "underline text-rose-300 hover:text-rose-100",
                        target: "_blank"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`${ssrInterpolate(_ctx.t("privacyPolicy"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.t("privacyPolicy")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_Link, {
                          href: _ctx.policyLink,
                          class: "underline text-rose-300 hover:text-rose-100",
                          target: "_blank"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.t("privacyPolicy")), 1)
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center" }, [
                    withDirectives(createVNode("input", {
                      id: "terms",
                      "onUpdate:modelValue": ($event) => _ctx.form.terms = $event,
                      name: "terms",
                      type: "checkbox",
                      class: "rounded border-rose-300 text-rose-600 shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, _ctx.form.terms]
                    ]),
                    createVNode("div", { class: "ml-2 text-xs text-white/80" }, [
                      createVNode(_component_i18n_t, {
                        keypath: "terms",
                        tag: "span"
                      }, {
                        termsOfService: withCtx(() => [
                          createVNode(_component_Link, {
                            href: _ctx.termsLink,
                            class: "underline text-rose-300 hover:text-rose-100",
                            target: "_blank"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.t("termsOfService")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        privacyPolicy: withCtx(() => [
                          createVNode(_component_Link, {
                            href: _ctx.policyLink,
                            class: "underline text-rose-300 hover:text-rose-100",
                            target: "_blank"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.t("privacyPolicy")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="pt-2 flex flex-col gap-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_t_button, {
          class: [{ "opacity-75": _ctx.form.processing }, "w-full justify-center text-sm font-black uppercase tracking-[0.2em] py-4 shadow-lg shadow-rose-900/50 hover:shadow-rose-500/40 hover:-translate-y-0.5 transition-all !rounded-2xl"],
          color: "rose",
          design: "filled",
          disabled: _ctx.form.processing,
          radius: 8
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.t("register"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.t("register")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_t_button, {
          class: [{ "opacity-75": _ctx.form.processing }, "w-full justify-center text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors"],
          design: "link",
          color: "light",
          link: _ctx.route("login"),
          radius: 8,
          type: "link"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.t("alreadyRegistered"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.t("alreadyRegistered")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form></div></div></div><div class="auth-error absolute top-5 right-5 z-50"${_scopeId}>`);
        if (_ctx.hasErrors) {
          _push2(ssrRenderComponent(_component_t_alert, {
            radius: 8,
            color: "rose",
            class: "shadow-xl border border-rose-500/50 backdrop-blur-md"
          }, {
            icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_t_bell_icon, { class: "w-6 h-6 text-rose-200" }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_t_bell_icon, { class: "w-6 h-6 text-rose-200" })
                ];
              }
            }),
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<ul class="list-inside text-sm text-white font-medium"${_scopeId2}><!--[-->`);
                ssrRenderList(_ctx.errors, (error, key) => {
                  _push3(`<li${_scopeId2}>${ssrInterpolate(error)}</li>`);
                });
                _push3(`<!--]--></ul>`);
              } else {
                return [
                  createVNode("ul", { class: "list-inside text-sm text-white font-medium" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.errors, (error, key) => {
                      return openBlock(), createBlock("li", { key }, toDisplayString(error), 1);
                    }), 128))
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="fixed bottom-0 flex z-50 w-full justify-center sm:justify-end space-x-6 p-6"${_scopeId}>`);
        if (_ctx.authScreenConf.showLanguageSelector) {
          _push2(ssrRenderComponent(_component_t_tooltip, {
            position: "top",
            border: false,
            "custom-style": true
          }, {
            boxContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="top-menu-dropdown-content-wrapper-transparent mb-3"${_scopeId2}><!--[-->`);
                ssrRenderList(_ctx.languages, (lang) => {
                  _push3(`<div class="top-menu-dropdown-item-transparent"${_scopeId2}>`);
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(lang.flag), { class: "w-6 aspect-auto drop-shadow" }, null), _parent3, _scopeId2);
                  _push3(`<span${_scopeId2}>${ssrInterpolate(lang.name)}</span></div>`);
                });
                _push3(`<!--]--></div>`);
              } else {
                return [
                  createVNode("div", { class: "top-menu-dropdown-content-wrapper-transparent mb-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.languages, (lang) => {
                      return openBlock(), createBlock("div", {
                        key: lang.id,
                        onClick: ($event) => _ctx.changeLang(lang.id),
                        class: "top-menu-dropdown-item-transparent"
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(lang.flag), { class: "w-6 aspect-auto drop-shadow" })),
                        createVNode("span", {
                          textContent: toDisplayString(lang.name)
                        }, null, 8, ["textContent"])
                      ], 8, ["onClick"]);
                    }), 128))
                  ])
                ];
              }
            }),
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="${ssrRenderClass([`radius-${_ctx.authScreenConf.radius ? _ctx.authScreenConf.radius : _ctx.appConf.radius}`, "flex justify-center items-center group bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-4 w-10 h-10 cursor-pointer overflow-hidden bg-cover"])}"${_scopeId2}>`);
                ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.languages.find((i) => i.id === _ctx.locale).flag), {
                  class: "flex flex-shrink-0 w-14 aspect-auto drop-shadow transform hover:scale-110 active:scale-90 hover:-rotate-12 transition-all duration-300",
                  alt: _ctx.languages.find((i) => i.id === _ctx.locale).name
                }, null), _parent3, _scopeId2);
                _push3(`<span class="absolute text-sm -top-2 -right-2 bg-slate-100/10 dark:bg-slate-800/50 backdrop-filter backdrop-blur text-slate-100 px-1 rounded"${_scopeId2}>${ssrInterpolate(_ctx.languages.find((i) => i.id === _ctx.locale).id)}</span></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: ["flex justify-center items-center group bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-4 w-10 h-10 cursor-pointer overflow-hidden bg-cover", `radius-${_ctx.authScreenConf.radius ? _ctx.authScreenConf.radius : _ctx.appConf.radius}`]
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.languages.find((i) => i.id === _ctx.locale).flag), {
                      class: "flex flex-shrink-0 w-14 aspect-auto drop-shadow transform hover:scale-110 active:scale-90 hover:-rotate-12 transition-all duration-300",
                      alt: _ctx.languages.find((i) => i.id === _ctx.locale).name
                    }, null, 8, ["alt"])),
                    createVNode("span", {
                      class: "absolute text-sm -top-2 -right-2 bg-slate-100/10 dark:bg-slate-800/50 backdrop-filter backdrop-blur text-slate-100 px-1 rounded",
                      textContent: toDisplayString(_ctx.languages.find((i) => i.id === _ctx.locale).id)
                    }, null, 8, ["textContent"])
                  ], 2)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.authScreenConf.showDarkModeSelector) {
          _push2(`<div class="${ssrRenderClass([`radius-${_ctx.authScreenConf.radius ? _ctx.authScreenConf.radius : _ctx.appConf.radius}`, "flex justify-center items-center bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-4 w-10 h-10 cursor-pointer overflow-hidden"])}"${_scopeId}>`);
          if (_ctx.darkMode === "light") {
            _push2(ssrRenderComponent(_component_icon, {
              icon: "sun",
              size: "lg",
              key: "light",
              alt: _ctx.tm("lightMode"),
              class: "transform hover:scale-110 active:scale-90 transition-transform duration-300"
            }, null, _parent2, _scopeId));
          } else if (_ctx.darkMode === "auto") {
            _push2(ssrRenderComponent(_component_icon, {
              icon: "palette",
              size: "lg",
              key: "auto",
              alt: _ctx.tm("auto"),
              class: "transform hover:scale-110 active:scale-90 transition-transform duration-300"
            }, null, _parent2, _scopeId));
          } else {
            _push2(ssrRenderComponent(_component_icon, {
              icon: "moon",
              size: "lg",
              key: "dark",
              alt: _ctx.tm("darkMode"),
              class: "transform hover:scale-110 active:scale-90 transition-transform duration-300"
            }, null, _parent2, _scopeId));
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.authScreenConf.showDesignChanger && _ctx.authDesigns.length > 1) {
          _push2(`<div class="${ssrRenderClass([`radius-${_ctx.authScreenConf.radius ? _ctx.authScreenConf.radius : _ctx.appConf.radius}`, "flex justify-center items-center group bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-4 w-10 h-10 cursor-pointer"])}"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_icon, {
            icon: "redo",
            class: "transform group-hover:scale-110 group-active:scale-90 transition-transform duration-300"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            class: [
              "auth-container",
              "flex items-center justify-center min-h-screen w-full relative z-10",
              { "p-4": _ctx.deviceType === "phone" }
            ]
          }, [
            createVNode("div", { class: "w-full max-w-md bg-white/10 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden relative group" }, [
              createVNode("div", { class: "absolute -top-24 -right-24 w-64 h-64 bg-rose-500/30 rounded-full blur-3xl group-hover:bg-rose-500/40 transition-all duration-1000" }),
              createVNode("div", { class: "absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl group-hover:bg-indigo-500/40 transition-all duration-1000" }),
              createVNode("div", { class: "relative z-10 p-8 pb-0 flex flex-col items-center text-center" }, [
                createVNode("div", { class: "mb-4 transform hover:scale-105 transition-transform duration-500" }, [
                  _ctx.$slots.logo ? renderSlot(_ctx.$slots, "logo", { key: 0 }) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex flex-col items-center gap-4"
                  }, [
                    createVNode("img", {
                      src: _ctx.temporaryLogo,
                      class: "w-20 h-20 drop-shadow-2xl"
                    }, null, 8, ["src"]),
                    createVNode("span", {
                      textContent: toDisplayString(_ctx.authScreenConf.appName ? _ctx.authScreenConf.appName : _ctx.appConf.appName),
                      class: "text-xl font-black italic uppercase tracking-tighter text-white drop-shadow-md leading-tight"
                    }, null, 8, ["textContent"])
                  ]))
                ]),
                _ctx.status || _ctx.$slots.greeting ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "auth-greeting w-full"
                }, [
                  createVNode("div", { class: "text-sm font-medium text-white/80" }, [
                    _ctx.status ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "bg-emerald-500/20 text-emerald-100 p-3 rounded-xl border border-emerald-500/30 backdrop-blur-sm"
                    }, toDisplayString(_ctx.status), 1)) : renderSlot(_ctx.$slots, "greeting", { key: 1 })
                  ])
                ])) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "relative z-10 p-8 pt-4" }, [
                createVNode("form", {
                  onSubmit: withModifiers(_ctx.submit, ["prevent"]),
                  class: "space-y-4"
                }, [
                  createVNode("div", null, [
                    createVNode(_component_t_input_group, {
                      label: _ctx.t("name"),
                      "label-for": "name",
                      errors: _ctx.v.name.$errors,
                      class: "text-white/90 font-bold tracking-wide text-xs uppercase"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "name",
                          modelValue: _ctx.form.name,
                          "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
                          onBlur: _ctx.v.name.$touch,
                          radius: 8,
                          autofocus: "",
                          autocomplete: "name",
                          required: "",
                          type: "text",
                          placeholder: "Full Name",
                          class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                      ]),
                      _: 1
                    }, 8, ["label", "errors"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_t_input_group, {
                      label: _ctx.t("email"),
                      "label-for": "email",
                      errors: _ctx.v.email.$errors,
                      class: "text-white/90 font-bold tracking-wide text-xs uppercase"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "email",
                          modelValue: _ctx.form.email,
                          "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                          onBlur: _ctx.v.email.$touch,
                          radius: 8,
                          autocomplete: "username",
                          required: "",
                          type: "email",
                          placeholder: "Email Address",
                          class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                      ]),
                      _: 1
                    }, 8, ["label", "errors"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_t_input_group, {
                      label: _ctx.t("password"),
                      "label-for": "password",
                      errors: _ctx.v.password.$errors,
                      class: "text-white/90 font-bold tracking-wide text-xs uppercase"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "password",
                          modelValue: _ctx.form.password,
                          "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                          onBlur: _ctx.v.password.$touch,
                          radius: 8,
                          autocomplete: "new-password",
                          required: "",
                          type: "password",
                          placeholder: "Password",
                          class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                      ]),
                      _: 1
                    }, 8, ["label", "errors"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_t_input_group, {
                      label: _ctx.t("passwordConfirmation"),
                      "label-for": "password_confirmation",
                      errors: _ctx.v.password_confirmation.$errors,
                      class: "text-white/90 font-bold tracking-wide text-xs uppercase"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "password_confirmation",
                          modelValue: _ctx.form.password_confirmation,
                          "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
                          onBlur: _ctx.v.password_confirmation.$touch,
                          radius: 8,
                          autocomplete: "new-password",
                          required: "",
                          type: "password",
                          placeholder: "Confirm Password",
                          class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                      ]),
                      _: 1
                    }, 8, ["label", "errors"])
                  ]),
                  _ctx.privacyPolicyFeature ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-2"
                  }, [
                    createVNode(_component_t_input_group, { "label-for": "terms" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          withDirectives(createVNode("input", {
                            id: "terms",
                            "onUpdate:modelValue": ($event) => _ctx.form.terms = $event,
                            name: "terms",
                            type: "checkbox",
                            class: "rounded border-rose-300 text-rose-600 shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, _ctx.form.terms]
                          ]),
                          createVNode("div", { class: "ml-2 text-xs text-white/80" }, [
                            createVNode(_component_i18n_t, {
                              keypath: "terms",
                              tag: "span"
                            }, {
                              termsOfService: withCtx(() => [
                                createVNode(_component_Link, {
                                  href: _ctx.termsLink,
                                  class: "underline text-rose-300 hover:text-rose-100",
                                  target: "_blank"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.t("termsOfService")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              privacyPolicy: withCtx(() => [
                                createVNode(_component_Link, {
                                  href: _ctx.policyLink,
                                  class: "underline text-rose-300 hover:text-rose-100",
                                  target: "_blank"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.t("privacyPolicy")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "pt-2 flex flex-col gap-3" }, [
                    createVNode(_component_t_button, {
                      class: [{ "opacity-75": _ctx.form.processing }, "w-full justify-center text-sm font-black uppercase tracking-[0.2em] py-4 shadow-lg shadow-rose-900/50 hover:shadow-rose-500/40 hover:-translate-y-0.5 transition-all !rounded-2xl"],
                      color: "rose",
                      design: "filled",
                      disabled: _ctx.form.processing,
                      radius: 8
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.t("register")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"]),
                    createVNode(_component_t_button, {
                      class: [{ "opacity-75": _ctx.form.processing }, "w-full justify-center text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors"],
                      design: "link",
                      color: "light",
                      link: _ctx.route("login"),
                      radius: 8,
                      type: "link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.t("alreadyRegistered")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "link"])
                  ])
                ], 40, ["onSubmit"])
              ])
            ])
          ], 2),
          createVNode("div", { class: "auth-error absolute top-5 right-5 z-50" }, [
            createVNode(Transition, {
              onBeforeEnter: _ctx.beforeStyle,
              onAfterEnter: _ctx.enterStyle
            }, {
              default: withCtx(() => [
                _ctx.hasErrors ? (openBlock(), createBlock(_component_t_alert, {
                  key: 0,
                  radius: 8,
                  color: "rose",
                  class: "shadow-xl border border-rose-500/50 backdrop-blur-md"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_t_bell_icon, { class: "w-6 h-6 text-rose-200" })
                  ]),
                  default: withCtx(() => [
                    createVNode("ul", { class: "list-inside text-sm text-white font-medium" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.errors, (error, key) => {
                        return openBlock(), createBlock("li", { key }, toDisplayString(error), 1);
                      }), 128))
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["onBeforeEnter", "onAfterEnter"])
          ]),
          createVNode("div", { class: "fixed bottom-0 flex z-50 w-full justify-center sm:justify-end space-x-6 p-6" }, [
            _ctx.authScreenConf.showLanguageSelector ? (openBlock(), createBlock(_component_t_tooltip, {
              key: 0,
              position: "top",
              border: false,
              "custom-style": true
            }, {
              boxContent: withCtx(() => [
                createVNode("div", { class: "top-menu-dropdown-content-wrapper-transparent mb-3" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.languages, (lang) => {
                    return openBlock(), createBlock("div", {
                      key: lang.id,
                      onClick: ($event) => _ctx.changeLang(lang.id),
                      class: "top-menu-dropdown-item-transparent"
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(lang.flag), { class: "w-6 aspect-auto drop-shadow" })),
                      createVNode("span", {
                        textContent: toDisplayString(lang.name)
                      }, null, 8, ["textContent"])
                    ], 8, ["onClick"]);
                  }), 128))
                ])
              ]),
              default: withCtx(() => [
                createVNode("div", {
                  class: ["flex justify-center items-center group bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-4 w-10 h-10 cursor-pointer overflow-hidden bg-cover", `radius-${_ctx.authScreenConf.radius ? _ctx.authScreenConf.radius : _ctx.appConf.radius}`]
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.languages.find((i) => i.id === _ctx.locale).flag), {
                    class: "flex flex-shrink-0 w-14 aspect-auto drop-shadow transform hover:scale-110 active:scale-90 hover:-rotate-12 transition-all duration-300",
                    alt: _ctx.languages.find((i) => i.id === _ctx.locale).name
                  }, null, 8, ["alt"])),
                  createVNode("span", {
                    class: "absolute text-sm -top-2 -right-2 bg-slate-100/10 dark:bg-slate-800/50 backdrop-filter backdrop-blur text-slate-100 px-1 rounded",
                    textContent: toDisplayString(_ctx.languages.find((i) => i.id === _ctx.locale).id)
                  }, null, 8, ["textContent"])
                ], 2)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            _ctx.authScreenConf.showDarkModeSelector ? (openBlock(), createBlock("div", {
              key: 1,
              class: ["flex justify-center items-center bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-4 w-10 h-10 cursor-pointer overflow-hidden", `radius-${_ctx.authScreenConf.radius ? _ctx.authScreenConf.radius : _ctx.appConf.radius}`],
              onClick: _ctx.changeTheme
            }, [
              createVNode(Transition, {
                mode: "out-in",
                name: "darkModeTransition"
              }, {
                default: withCtx(() => [
                  _ctx.darkMode === "light" ? (openBlock(), createBlock(_component_icon, {
                    icon: "sun",
                    size: "lg",
                    key: "light",
                    alt: _ctx.tm("lightMode"),
                    class: "transform hover:scale-110 active:scale-90 transition-transform duration-300"
                  }, null, 8, ["alt"])) : _ctx.darkMode === "auto" ? (openBlock(), createBlock(_component_icon, {
                    icon: "palette",
                    size: "lg",
                    key: "auto",
                    alt: _ctx.tm("auto"),
                    class: "transform hover:scale-110 active:scale-90 transition-transform duration-300"
                  }, null, 8, ["alt"])) : (openBlock(), createBlock(_component_icon, {
                    icon: "moon",
                    size: "lg",
                    key: "dark",
                    alt: _ctx.tm("darkMode"),
                    class: "transform hover:scale-110 active:scale-90 transition-transform duration-300"
                  }, null, 8, ["alt"]))
                ]),
                _: 1
              })
            ], 10, ["onClick"])) : createCommentVNode("", true),
            _ctx.authScreenConf.showDesignChanger && _ctx.authDesigns.length > 1 ? (openBlock(), createBlock("div", {
              key: 2,
              onClick: _ctx.changeBg,
              class: ["flex justify-center items-center group bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-4 w-10 h-10 cursor-pointer", `radius-${_ctx.authScreenConf.radius ? _ctx.authScreenConf.radius : _ctx.appConf.radius}`]
            }, [
              createVNode(_component_icon, {
                icon: "redo",
                class: "transform group-hover:scale-110 group-active:scale-90 transition-transform duration-300"
              })
            ], 10, ["onClick"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Auth/TRegister.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TRegister = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TRegister as T
};

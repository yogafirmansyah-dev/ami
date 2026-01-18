import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, renderSlot, openBlock, withModifiers, Transition, ref, computed, useSSRContext } from "vue";
import { b as bgColorStyles, r as radiusSizeMixin, d as _sfc_main$2, T as TAlert, w as windowSizeCalculator, g as authScreenConf, a as appConf } from "./windowSizeCalculator-Ch6zBFfA.js";
import { Link, useForm } from "@inertiajs/vue3";
import useVuelidate from "@vuelidate/core";
import { helpers, required, email } from "@vuelidate/validators";
import { u as useDarkModeStore } from "./darkMode-BsM-iRm5.js";
import { _ as _sfc_main$1, T as TBellIcon, a as authDesigns } from "./authScreenDesigns-Bu_GjJbX.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { T as TDropdown } from "./TDropdown-CRaizlei.js";
import { T as TTooltip } from "./TTooltip-DEROIMmS.js";
import { T as TInputCheckBox } from "./TInputCheckBox-Cbb-bEsO.js";
import { useI18n } from "vue-i18n";
import { b as useDisplayLanguageStore, a as authTranslates, l as languages } from "./displayLanguage-Bjc1nzNS.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMoon, faPalette, faRedo, faKey, faBell } from "@fortawesome/free-solid-svg-icons";
import { storeToRefs } from "pinia";
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const loginStyleMixin = {
  mixins: [bgColorStyles, radiusSizeMixin],
  computed: {
    calculatedLoginStyle() {
      let style;
      style = this.bgColorStyle + " ";
      style += this.textColorStyle;
      return style;
    }
  }
};
library.add(faSun, faMoon, faPalette, faRedo, faKey, faBell);
const _sfc_main = defineComponent({
  name: "TLogin",
  components: {
    TInputCheckBox,
    TTooltip,
    TAlert,
    TBellIcon,
    TButton: _sfc_main$2,
    TDropdown,
    FullScreenLayout: _sfc_main$1,
    TInputGroup,
    TInputText,
    Link
  },
  mixins: [loginStyleMixin],
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(props) {
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
      email: "",
      password: "",
      remember: false
    });
    const rules = ref({
      email: {
        required: helpers.withMessage(tm("validationMessage.email.required"), required),
        email: helpers.withMessage(tm("validationMessage.email.email"), email)
      },
      password: {
        required: helpers.withMessage(tm("validationMessage.password.required"), required)
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
      })).post(route("login"), {
        onFinish: () => form.reset("password")
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
  const _component_t_input_check_box = resolveComponent("t-input-check-box");
  const _component_icon = resolveComponent("icon");
  const _component_Link = resolveComponent("Link");
  const _component_t_button = resolveComponent("t-button");
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
        ])}"${_scopeId}><div class="w-full max-w-md bg-white/10 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden relative group"${_scopeId}><div class="absolute -top-24 -right-24 w-64 h-64 bg-rose-500/30 rounded-full blur-3xl group-hover:bg-rose-500/40 transition-all duration-1000"${_scopeId}></div><div class="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl group-hover:bg-indigo-500/40 transition-all duration-1000"${_scopeId}></div><div class="relative z-10 p-8 pb-0 flex flex-col items-center text-center"${_scopeId}><div class="mb-6 transform hover:scale-105 transition-transform duration-500"${_scopeId}>`);
        if (_ctx.$slots.logo) {
          ssrRenderSlot(_ctx.$slots, "logo", {}, null, _push2, _parent2, _scopeId);
        } else {
          _push2(`<div class="flex flex-col items-center gap-4"${_scopeId}><img${ssrRenderAttr("src", _ctx.temporaryLogo)} class="w-24 h-24 drop-shadow-2xl"${_scopeId}><span class="text-2xl font-black italic uppercase tracking-tighter text-white drop-shadow-md leading-tight"${_scopeId}>${ssrInterpolate(_ctx.authScreenConf.appName ? _ctx.authScreenConf.appName : _ctx.appConf.appName)}</span></div>`);
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
        _push2(`</div><div class="relative z-10 p-8 pt-6"${_scopeId}><form class="space-y-5"${_scopeId}><div${_scopeId}>`);
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
                autofocus: "",
                autocomplete: "username",
                required: "",
                type: "email",
                placeholder: "example@email.com",
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
                  autofocus: "",
                  autocomplete: "username",
                  required: "",
                  type: "email",
                  placeholder: "example@email.com",
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
                autocomplete: "current-password",
                required: "",
                type: "password",
                placeholder: "••••••••",
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
                  autocomplete: "current-password",
                  required: "",
                  type: "password",
                  placeholder: "••••••••",
                  class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="flex items-center justify-between mt-2"${_scopeId}><label class="flex items-center cursor-pointer group"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_t_input_check_box, {
          id: "remember",
          modelValue: _ctx.form.remember,
          "onUpdate:modelValue": ($event) => _ctx.form.remember = $event,
          label: _ctx.t("rememberMe"),
          class: "text-white/80 group-hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
        }, {
          icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_icon, {
                icon: "key",
                size: "sm",
                class: "text-rose-400 group-hover:text-rose-300 transition-colors"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_icon, {
                  icon: "key",
                  size: "sm",
                  class: "text-rose-400 group-hover:text-rose-300 transition-colors"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</label>`);
        if (_ctx.canResetPassword) {
          _push2(ssrRenderComponent(_component_Link, {
            href: _ctx.route("password.request"),
            class: "text-[10px] font-black uppercase tracking-widest text-rose-300 hover:text-rose-200 hover:underline decoration-rose-400/50 underline-offset-4 transition-all"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.t("forgotPassword"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.t("forgotPassword")), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="pt-4 flex flex-col gap-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_t_button, {
          class: [{ "opacity-75": _ctx.form.processing }, "w-full border border-slate-800 justify-center text-sm font-black uppercase tracking-[0.2em] py-4 shadow-lg shadow-rose-900/50 hover:bg-white/10 hover:shadow-rose-500/40 hover:-translate-y-0.5 transition-all !rounded-2xl"],
          color: "rose",
          design: "filled",
          disabled: _ctx.form.processing,
          radius: 8
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.t("login"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.t("login")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form></div></div></div><div class="fixed bottom-0 flex z-50 w-full justify-center sm:justify-end space-x-4 p-6"${_scopeId}>`);
        if (_ctx.authScreenConf.showDarkModeSelector) {
          _push2(`<div class="flex justify-center items-center bg-black/20 hover:bg-black/40 backdrop-blur-md text-white p-3 w-10 h-10 cursor-pointer overflow-hidden rounded-xl border border-white/10 transition-all hover:border-white/20 shadow-lg"${_scopeId}>`);
          if (_ctx.darkMode === "light") {
            _push2(ssrRenderComponent(_component_icon, {
              icon: "sun",
              size: "lg",
              key: "light",
              class: "transform hover:scale-110 active:scale-90 transition-transform duration-300 text-amber-300"
            }, null, _parent2, _scopeId));
          } else if (_ctx.darkMode === "auto") {
            _push2(ssrRenderComponent(_component_icon, {
              icon: "palette",
              size: "lg",
              key: "auto",
              class: "transform hover:scale-110 active:scale-90 transition-transform duration-300 text-indigo-300"
            }, null, _parent2, _scopeId));
          } else {
            _push2(ssrRenderComponent(_component_icon, {
              icon: "moon",
              size: "lg",
              key: "dark",
              class: "transform hover:scale-110 active:scale-90 transition-transform duration-300 text-sky-300"
            }, null, _parent2, _scopeId));
          }
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
                createVNode("div", { class: "mb-6 transform hover:scale-105 transition-transform duration-500" }, [
                  _ctx.$slots.logo ? renderSlot(_ctx.$slots, "logo", { key: 0 }) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex flex-col items-center gap-4"
                  }, [
                    createVNode("img", {
                      src: _ctx.temporaryLogo,
                      class: "w-24 h-24 drop-shadow-2xl"
                    }, null, 8, ["src"]),
                    createVNode("span", {
                      textContent: toDisplayString(_ctx.authScreenConf.appName ? _ctx.authScreenConf.appName : _ctx.appConf.appName),
                      class: "text-2xl font-black italic uppercase tracking-tighter text-white drop-shadow-md leading-tight"
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
              createVNode("div", { class: "relative z-10 p-8 pt-6" }, [
                createVNode("form", {
                  onSubmit: withModifiers(_ctx.submit, ["prevent"]),
                  class: "space-y-5"
                }, [
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
                          autofocus: "",
                          autocomplete: "username",
                          required: "",
                          type: "email",
                          placeholder: "example@email.com",
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
                          autocomplete: "current-password",
                          required: "",
                          type: "password",
                          placeholder: "••••••••",
                          class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                      ]),
                      _: 1
                    }, 8, ["label", "errors"])
                  ]),
                  createVNode("div", { class: "flex items-center justify-between mt-2" }, [
                    createVNode("label", { class: "flex items-center cursor-pointer group" }, [
                      createVNode(_component_t_input_check_box, {
                        id: "remember",
                        modelValue: _ctx.form.remember,
                        "onUpdate:modelValue": ($event) => _ctx.form.remember = $event,
                        label: _ctx.t("rememberMe"),
                        class: "text-white/80 group-hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_icon, {
                            icon: "key",
                            size: "sm",
                            class: "text-rose-400 group-hover:text-rose-300 transition-colors"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "label"])
                    ]),
                    _ctx.canResetPassword ? (openBlock(), createBlock(_component_Link, {
                      key: 0,
                      href: _ctx.route("password.request"),
                      class: "text-[10px] font-black uppercase tracking-widest text-rose-300 hover:text-rose-200 hover:underline decoration-rose-400/50 underline-offset-4 transition-all"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.t("forgotPassword")), 1)
                      ]),
                      _: 1
                    }, 8, ["href"])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "pt-4 flex flex-col gap-3" }, [
                    createVNode(_component_t_button, {
                      class: [{ "opacity-75": _ctx.form.processing }, "w-full border border-slate-800 justify-center text-sm font-black uppercase tracking-[0.2em] py-4 shadow-lg shadow-rose-900/50 hover:bg-white/10 hover:shadow-rose-500/40 hover:-translate-y-0.5 transition-all !rounded-2xl"],
                      color: "rose",
                      design: "filled",
                      disabled: _ctx.form.processing,
                      radius: 8
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.t("login")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ], 40, ["onSubmit"])
              ])
            ])
          ], 2),
          createVNode("div", { class: "fixed bottom-0 flex z-50 w-full justify-center sm:justify-end space-x-4 p-6" }, [
            _ctx.authScreenConf.showDarkModeSelector ? (openBlock(), createBlock("div", {
              key: 0,
              class: "flex justify-center items-center bg-black/20 hover:bg-black/40 backdrop-blur-md text-white p-3 w-10 h-10 cursor-pointer overflow-hidden rounded-xl border border-white/10 transition-all hover:border-white/20 shadow-lg",
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
                    class: "transform hover:scale-110 active:scale-90 transition-transform duration-300 text-amber-300"
                  })) : _ctx.darkMode === "auto" ? (openBlock(), createBlock(_component_icon, {
                    icon: "palette",
                    size: "lg",
                    key: "auto",
                    class: "transform hover:scale-110 active:scale-90 transition-transform duration-300 text-indigo-300"
                  })) : (openBlock(), createBlock(_component_icon, {
                    icon: "moon",
                    size: "lg",
                    key: "dark",
                    class: "transform hover:scale-110 active:scale-90 transition-transform duration-300 text-sky-300"
                  }))
                ]),
                _: 1
              })
            ], 8, ["onClick"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Auth/TLogin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TLogin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TLogin as T
};

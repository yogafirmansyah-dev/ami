import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, resolveDynamicComponent, createBlock, openBlock, Fragment, renderList, createCommentVNode, renderSlot, withModifiers, Transition, ref, computed, useSSRContext } from "vue";
import { b as bgColorStyles, r as radiusSizeMixin, a as _sfc_main$2 } from "./TButton-oXLR37ud.js";
import { Link, useForm } from "@inertiajs/vue3";
import { T as TAlert, w as windowSizeCalculator, d as authScreenConf, a as appConf } from "./windowSizeCalculator-4-m3qk2a.js";
import useVuelidate from "@vuelidate/core";
import { helpers, required, email } from "@vuelidate/validators";
import { u as useDarkModeStore } from "./darkMode-BsM-iRm5.js";
import { _ as _sfc_main$1, T as TBellIcon, a as authDesigns } from "./authScreenDesigns-BMSiirfR.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { T as TDropdown } from "./TDropdown-8pNOPgDY.js";
import { T as TTooltip } from "./TTooltip-DEROIMmS.js";
import { T as TInputCheckBox } from "./TInputCheckBox-eDtuF0je.js";
import { useI18n } from "vue-i18n";
import { b as useDisplayLanguageStore, a as authTranslates, l as languages } from "./displayLanguage-Bjc1nzNS.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMoon, faPalette, faRedo, faKey, faBell } from "@fortawesome/free-solid-svg-icons";
import { storeToRefs } from "pinia";
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderVNode, ssrRenderList } from "vue/server-renderer";
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
  const _component_t_tooltip = resolveComponent("t-tooltip");
  _push(ssrRenderComponent(_component_full_screen_layout, mergeProps({
    "bg-image-url": _ctx.activeDesign.bgImage[_ctx.appearingMode],
    "bg-color": _ctx.activeDesign.bgColor
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="${ssrRenderClass([
          "auth-container",
          { "w-full": _ctx.deviceType === "phone" }
        ])}"${_scopeId}><div class="${ssrRenderClass([[
          _ctx.activeDesign.header,
          _ctx.deviceType !== "phone" && `radius-t-${_ctx.activeDesign.radius ? _ctx.activeDesign.radius : _ctx.appConf.radius}`
        ], "auth-header"])}"${_scopeId}><div class="auth-logo"${_scopeId}>`);
        if (_ctx.$slots.logo) {
          ssrRenderSlot(_ctx.$slots, "logo", {}, null, _push2, _parent2, _scopeId);
        } else {
          _push2(`<div class="${ssrRenderClass(_ctx.authScreenConf.logoAreaClasses)}"${_scopeId}><img${ssrRenderAttr("src", _ctx.temporaryLogo)} class="${ssrRenderClass(_ctx.authScreenConf.logoClasses)}"${_scopeId}><span class="${ssrRenderClass(_ctx.authScreenConf.appNameClasses)}"${_scopeId}>${ssrInterpolate(_ctx.authScreenConf.appName ? _ctx.authScreenConf.appName : _ctx.appConf.appName)}</span></div>`);
        }
        _push2(`</div>`);
        if (_ctx.status || _ctx.$slots.greeting) {
          _push2(`<div class="auth-greeting"${_scopeId}><div class="text-sm"${_scopeId}>`);
          if (_ctx.status) {
            _push2(`<div class="auth-status"${_scopeId}>${ssrInterpolate(_ctx.status)}</div>`);
          } else {
            ssrRenderSlot(_ctx.$slots, "greeting", {}, null, _push2, _parent2, _scopeId);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="${ssrRenderClass([[
          _ctx.deviceType !== "phone" && `radius-b-${_ctx.activeDesign.radius ? _ctx.activeDesign.radius : _ctx.appConf.radius}`,
          _ctx.activeDesign.body
        ], "auth-form"])}"${_scopeId}><form${_scopeId}><div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_t_input_group, {
          label: _ctx.t("email"),
          "label-for": "email",
          errors: _ctx.v.email.$errors
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_input_text, {
                id: "email",
                modelValue: _ctx.form.email,
                "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                onBlur: _ctx.v.email.$touch,
                radius: 3,
                autofocus: "",
                autocomplete: "username",
                required: "",
                type: "email"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_input_text, {
                  id: "email",
                  modelValue: _ctx.form.email,
                  "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                  onBlur: _ctx.v.email.$touch,
                  radius: 3,
                  autofocus: "",
                  autocomplete: "username",
                  required: "",
                  type: "email"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_t_input_group, {
          label: _ctx.t("password"),
          "label-for": "password",
          errors: _ctx.v.password.$errors
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_input_text, {
                id: "password",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                onBlur: _ctx.v.password.$touch,
                radius: 3,
                autocomplete: "current-password",
                required: "",
                type: "password"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_input_text, {
                  id: "password",
                  modelValue: _ctx.form.password,
                  "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                  onBlur: _ctx.v.password.$touch,
                  radius: 3,
                  autocomplete: "current-password",
                  required: "",
                  type: "password"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="auth-remember"${_scopeId}><label class="flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_t_input_check_box, {
          id: "remember",
          modelValue: _ctx.form.remember,
          "onUpdate:modelValue": ($event) => _ctx.form.remember = $event,
          label: _ctx.t("rememberMe")
        }, {
          icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_icon, {
                icon: "key",
                size: "sm"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_icon, {
                  icon: "key",
                  size: "sm"
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
            class: "auth-forgot-password"
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
        _push2(`</div><div class="auth-submit-area"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_t_button, {
          class: { "opacity-25": _ctx.form.processing },
          design: _ctx.activeDesign.login.registerButton[_ctx.appearingMode].design,
          color: _ctx.activeDesign.login.registerButton[_ctx.appearingMode].color,
          link: _ctx.route("register"),
          radius: 3,
          type: "link"
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
          class: [{ "opacity-25": _ctx.form.processing }, "ml-4"],
          color: _ctx.activeDesign.login.loginButton[_ctx.appearingMode].color,
          design: _ctx.activeDesign.login.loginButton[_ctx.appearingMode].design,
          disabled: _ctx.form.processing,
          radius: 3
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
        _push2(`</div></form></div></div><div class="fixed bottom-0 flex z-50 w-full justify-center sm:justify-end space-x-6 p-6"${_scopeId}>`);
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
              { "w-full": _ctx.deviceType === "phone" }
            ]
          }, [
            createVNode("div", {
              class: ["auth-header", [
                _ctx.activeDesign.header,
                _ctx.deviceType !== "phone" && `radius-t-${_ctx.activeDesign.radius ? _ctx.activeDesign.radius : _ctx.appConf.radius}`
              ]]
            }, [
              createVNode("div", { class: "auth-logo" }, [
                _ctx.$slots.logo ? renderSlot(_ctx.$slots, "logo", { key: 0 }) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: _ctx.authScreenConf.logoAreaClasses
                }, [
                  createVNode("img", {
                    src: _ctx.temporaryLogo,
                    class: _ctx.authScreenConf.logoClasses
                  }, null, 10, ["src"]),
                  createVNode("span", {
                    textContent: toDisplayString(_ctx.authScreenConf.appName ? _ctx.authScreenConf.appName : _ctx.appConf.appName),
                    class: _ctx.authScreenConf.appNameClasses
                  }, null, 10, ["textContent"])
                ], 2))
              ]),
              _ctx.status || _ctx.$slots.greeting ? (openBlock(), createBlock("div", {
                key: 0,
                class: "auth-greeting"
              }, [
                createVNode("div", { class: "text-sm" }, [
                  _ctx.status ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "auth-status"
                  }, toDisplayString(_ctx.status), 1)) : renderSlot(_ctx.$slots, "greeting", { key: 1 })
                ])
              ])) : createCommentVNode("", true)
            ], 2),
            createVNode("div", {
              class: ["auth-form", [
                _ctx.deviceType !== "phone" && `radius-b-${_ctx.activeDesign.radius ? _ctx.activeDesign.radius : _ctx.appConf.radius}`,
                _ctx.activeDesign.body
              ]]
            }, [
              createVNode("form", {
                onSubmit: withModifiers(_ctx.submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_component_t_input_group, {
                    label: _ctx.t("email"),
                    "label-for": "email",
                    errors: _ctx.v.email.$errors
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "email",
                        modelValue: _ctx.form.email,
                        "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                        onBlur: _ctx.v.email.$touch,
                        radius: 3,
                        autofocus: "",
                        autocomplete: "username",
                        required: "",
                        type: "email"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                    ]),
                    _: 1
                  }, 8, ["label", "errors"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_t_input_group, {
                    label: _ctx.t("password"),
                    "label-for": "password",
                    errors: _ctx.v.password.$errors
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "password",
                        modelValue: _ctx.form.password,
                        "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                        onBlur: _ctx.v.password.$touch,
                        radius: 3,
                        autocomplete: "current-password",
                        required: "",
                        type: "password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                    ]),
                    _: 1
                  }, 8, ["label", "errors"])
                ]),
                createVNode("div", { class: "auth-remember" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_component_t_input_check_box, {
                      id: "remember",
                      modelValue: _ctx.form.remember,
                      "onUpdate:modelValue": ($event) => _ctx.form.remember = $event,
                      label: _ctx.t("rememberMe")
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_icon, {
                          icon: "key",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ]),
                  _ctx.canResetPassword ? (openBlock(), createBlock(_component_Link, {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "auth-forgot-password"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.t("forgotPassword")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "auth-submit-area" }, [
                  createVNode(_component_t_button, {
                    class: { "opacity-25": _ctx.form.processing },
                    design: _ctx.activeDesign.login.registerButton[_ctx.appearingMode].design,
                    color: _ctx.activeDesign.login.registerButton[_ctx.appearingMode].color,
                    link: _ctx.route("register"),
                    radius: 3,
                    type: "link"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.t("register")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "design", "color", "link"]),
                  createVNode(_component_t_button, {
                    class: [{ "opacity-25": _ctx.form.processing }, "ml-4"],
                    color: _ctx.activeDesign.login.loginButton[_ctx.appearingMode].color,
                    design: _ctx.activeDesign.login.loginButton[_ctx.appearingMode].design,
                    disabled: _ctx.form.processing,
                    radius: 3
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.t("login")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "color", "design", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ], 2)
          ], 2),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Auth/TLogin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TLogin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TLogin as T
};

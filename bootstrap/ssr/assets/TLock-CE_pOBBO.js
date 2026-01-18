import { defineComponent, ref, computed, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, resolveDynamicComponent, withModifiers, Transition, createCommentVNode, useSSRContext } from "vue";
import { useForm } from "@inertiajs/vue3";
import { b as bgColorStyles, r as radiusSizeMixin, T as TAlert, d as _sfc_main$2, w as windowSizeCalculator, g as authScreenConf, a as appConf } from "./windowSizeCalculator-Ch6zBFfA.js";
import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import { u as useDarkModeStore } from "./darkMode-BsM-iRm5.js";
import { _ as _sfc_main$1, T as TBellIcon, a as authDesigns } from "./authScreenDesigns-Bu_GjJbX.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { T as TUserCircleIcon } from "./TUserCircleIcon-41nI2djU.js";
import { T as TAvatar } from "./TAvatar-DS29Kv5n.js";
import { T as TTooltip } from "./TTooltip-DEROIMmS.js";
import { useI18n } from "vue-i18n";
import { b as useDisplayLanguageStore, a as authTranslates, l as languages } from "./displayLanguage-Bjc1nzNS.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMoon, faPalette, faRedo, faKey, faBell } from "@fortawesome/free-solid-svg-icons";
import { storeToRefs } from "pinia";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const lockStyleMixin = {
  mixins: [bgColorStyles, radiusSizeMixin],
  computed: {
    calculatedLockStyle() {
      let style;
      style = this.bgColorStyle + " ";
      style += this.textColorStyle;
      return style;
    }
  }
};
library.add(faSun, faMoon, faPalette, faRedo, faKey, faBell);
const _sfc_main = defineComponent({
  name: "TLock",
  components: { TButton: _sfc_main$2, TAvatar, TUserCircleIcon, TInputText, TInputGroup, TBellIcon, TAlert, FullScreenLayout: _sfc_main$1, TTooltip },
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
      password: ""
    });
    const rules = ref({
      password: {
        required: helpers.withMessage(tm("validationMessage.password.required"), required)
      }
    });
    const v = useVuelidate(rules, form, { $lazy: true });
    const submit = async () => {
      if (!await v.value.$validate()) {
        return;
      }
      form.post(route("unlock"), {
        onFinish: () => form.reset("password")
      });
    };
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
  const _component_t_avatar = resolveComponent("t-avatar");
  const _component_t_input_group = resolveComponent("t-input-group");
  const _component_t_input_text = resolveComponent("t-input-text");
  const _component_t_user_circle_icon = resolveComponent("t-user-circle-icon");
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
        ])}"${_scopeId}><div class="w-full max-w-md bg-white/10 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden relative group"${_scopeId}><div class="absolute -top-24 -right-24 w-64 h-64 bg-rose-500/30 rounded-full blur-3xl group-hover:bg-rose-500/40 transition-all duration-1000"${_scopeId}></div><div class="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl group-hover:bg-indigo-500/40 transition-all duration-1000"${_scopeId}></div><div class="relative z-10 p-8 pb-0 flex flex-col items-center text-center"${_scopeId}><div class="mb-6 transform hover:scale-105 transition-transform duration-500 relative"${_scopeId}><div class="absolute inset-0 bg-rose-500 rounded-full blur-md opacity-50"${_scopeId}></div>`);
        _push2(ssrRenderComponent(_component_t_avatar, {
          alt: _ctx.$page.props.auth.user?.name,
          radius: 8,
          size: 7,
          src: _ctx.$page.props.auth.user.profile_photo_url,
          class: "relative border-4 border-white/10 shadow-xl"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="auth-name text-xl font-black uppercase italic tracking-widest text-white drop-shadow-md mb-2"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div></div><div class="relative z-10 p-8 pt-6"${_scopeId}><form class="space-y-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_t_input_group, {
          radius: 5,
          class: "relative text-white/90 font-bold tracking-wide text-xs uppercase",
          "label-for": "password",
          label: _ctx.t("password")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_input_text, {
                id: "password",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                radius: 8,
                placeholder: _ctx.tm("password"),
                class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all pl-10"
              }, {
                icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_user_circle_icon, { class: "w-5 h-5 text-white/50" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_user_circle_icon, { class: "w-5 h-5 text-white/50" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_input_text, {
                  id: "password",
                  modelValue: _ctx.form.password,
                  "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                  radius: 8,
                  placeholder: _ctx.tm("password"),
                  class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all pl-10"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_t_user_circle_icon, { class: "w-5 h-5 text-white/50" })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_t_button, {
          class: [{ "opacity-75": _ctx.form.processing }, "justify-center text-sm font-black uppercase tracking-[0.2em] py-4 shadow-lg shadow-rose-900/50 hover:shadow-rose-500/40 hover:-translate-y-0.5 transition-all !rounded-2xl"],
          color: "rose",
          design: "filled",
          disabled: _ctx.form.processing,
          radius: 8,
          size: "full"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.t("reLogin"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.t("reLogin")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</form></div></div></div><div class="auth-error absolute top-5 right-5 z-50"${_scopeId}>`);
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
                createVNode("div", { class: "mb-6 transform hover:scale-105 transition-transform duration-500 relative" }, [
                  createVNode("div", { class: "absolute inset-0 bg-rose-500 rounded-full blur-md opacity-50" }),
                  createVNode(_component_t_avatar, {
                    alt: _ctx.$page.props.auth.user?.name,
                    radius: 8,
                    size: 7,
                    src: _ctx.$page.props.auth.user.profile_photo_url,
                    class: "relative border-4 border-white/10 shadow-xl"
                  }, null, 8, ["alt", "src"])
                ]),
                createVNode("div", { class: "auth-name text-xl font-black uppercase italic tracking-widest text-white drop-shadow-md mb-2" }, toDisplayString(_ctx.$page.props.auth.user.name), 1)
              ]),
              createVNode("div", { class: "relative z-10 p-8 pt-6" }, [
                createVNode("form", {
                  onSubmit: withModifiers(_ctx.submit, ["prevent"]),
                  class: "space-y-6"
                }, [
                  createVNode(_component_t_input_group, {
                    radius: 5,
                    class: "relative text-white/90 font-bold tracking-wide text-xs uppercase",
                    "label-for": "password",
                    label: _ctx.t("password")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "password",
                        modelValue: _ctx.form.password,
                        "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                        radius: 8,
                        placeholder: _ctx.tm("password"),
                        class: "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-rose-500/20 !rounded-xl transition-all pl-10"
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_t_user_circle_icon, { class: "w-5 h-5 text-white/50" })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_t_button, {
                    class: [{ "opacity-75": _ctx.form.processing }, "justify-center text-sm font-black uppercase tracking-[0.2em] py-4 shadow-lg shadow-rose-900/50 hover:shadow-rose-500/40 hover:-translate-y-0.5 transition-all !rounded-2xl"],
                    color: "rose",
                    design: "filled",
                    disabled: _ctx.form.processing,
                    radius: 8,
                    size: "full"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.t("reLogin")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
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
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Auth/TLock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TLock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TLock as T
};

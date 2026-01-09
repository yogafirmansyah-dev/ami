import { watch, resolveComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./ActionMessage-BKCr4dVw.js";
import { _ as _sfc_main$1 } from "./FormSection-CorId1DH.js";
import { _ as _sfc_main$4 } from "./InputError-BCWdSoAI.js";
import { _ as _sfc_main$3 } from "./PrimaryButton-BZZqj18B.js";
import { faSun, faMoon, faPalette } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { u as useDarkModeStore } from "./darkMode-BsM-iRm5.js";
import "./SectionTitle-Bpt4B-Rr.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "pinia";
const _sfc_main = {
  __name: "DarkModePreferenceForm",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    library.add(faSun, faMoon, faPalette);
    const props = __props;
    const form = useForm({
      dark_mode: props.user.dark_mode
    });
    const darkModeStore = useDarkModeStore();
    const { changeThemeUser } = darkModeStore;
    const updateDarkModePreference = () => {
      form.put(route("user.dark-mode-preference.update"), {
        errorBag: "updateDarkModePreference",
        preserveScroll: true,
        onSuccess: () => {
          changeThemeUser(form.dark_mode);
        }
      });
    };
    watch(() => props.user, (value) => {
      form.dark_mode = value.dark_mode;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ onSubmitted: updateDarkModePreference }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Update Dark Mode Preference `);
          } else {
            return [
              createTextVNode(" Update Dark Mode Preference ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Update your preferred dark mode. `);
          } else {
            return [
              createTextVNode(" Update your preferred dark mode. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-start items-center space-x-4 dark:text-slate-100"${_scopeId}><div class="${ssrRenderClass([{
              "bg-yellow-500 text-slate-50": unref(form).dark_mode === "light",
              "text-yellow-500": unref(form).dark_mode !== "light"
            }, "flex cursor-pointer px-2 py-1 rounded"])}"${_scopeId}><span${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "sun",
              size: "lg",
              key: "light",
              class: "transform hover:scale-110 active:scale-90 transition-all duration-300"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
            if (unref(form).dark_mode === "light") {
              _push2(`<span class="ml-3 whitespace-nowrap"${_scopeId}>${ssrInterpolate(_ctx.$t("lightMode"))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="${ssrRenderClass([{
              "bg-sky-700 text-slate-50": unref(form).dark_mode === "auto",
              "text-sky-700": unref(form).dark_mode !== "auto"
            }, "flex cursor-pointer px-2 py-1 rounded"])}"${_scopeId}><span${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "palette",
              size: "lg",
              key: "auto",
              class: "transform hover:scale-110 active:scale-90 transition-all duration-300"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
            if (unref(form).dark_mode === "auto") {
              _push2(`<span class="ml-3 whitespace-nowrap"${_scopeId}>${ssrInterpolate(_ctx.$t("auto"))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="${ssrRenderClass([{
              "bg-slate-700 text-slate-50": unref(form).dark_mode === "dark",
              "text-slate-700": unref(form).dark_mode !== "dark"
            }, "flex cursor-pointer px-2 py-1 rounded"])}"${_scopeId}><span${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "moon",
              size: "lg",
              key: "dark",
              class: "transform hover:scale-110 active:scale-90 transition-all duration-300"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
            if (unref(form).dark_mode === "dark") {
              _push2(`<span class="ml-3 whitespace-nowrap"${_scopeId}>${ssrInterpolate(_ctx.$t("darkMode"))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.dark_mode,
              class: "mt-2"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex justify-start items-center space-x-4 dark:text-slate-100" }, [
                createVNode("div", {
                  onClick: ($event) => unref(form).dark_mode = "light",
                  class: ["flex cursor-pointer px-2 py-1 rounded", {
                    "bg-yellow-500 text-slate-50": unref(form).dark_mode === "light",
                    "text-yellow-500": unref(form).dark_mode !== "light"
                  }]
                }, [
                  createVNode("span", null, [
                    createVNode(_component_icon, {
                      icon: "sun",
                      size: "lg",
                      key: "light",
                      class: "transform hover:scale-110 active:scale-90 transition-all duration-300"
                    })
                  ]),
                  unref(form).dark_mode === "light" ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "ml-3 whitespace-nowrap",
                    textContent: toDisplayString(_ctx.$t("lightMode"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ], 10, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => unref(form).dark_mode = "auto",
                  class: ["flex cursor-pointer px-2 py-1 rounded", {
                    "bg-sky-700 text-slate-50": unref(form).dark_mode === "auto",
                    "text-sky-700": unref(form).dark_mode !== "auto"
                  }]
                }, [
                  createVNode("span", null, [
                    createVNode(_component_icon, {
                      icon: "palette",
                      size: "lg",
                      key: "auto",
                      class: "transform hover:scale-110 active:scale-90 transition-all duration-300"
                    })
                  ]),
                  unref(form).dark_mode === "auto" ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "ml-3 whitespace-nowrap",
                    textContent: toDisplayString(_ctx.$t("auto"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ], 10, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => unref(form).dark_mode = "dark",
                  class: ["flex cursor-pointer px-2 py-1 rounded", {
                    "bg-slate-700 text-slate-50": unref(form).dark_mode === "dark",
                    "text-slate-700": unref(form).dark_mode !== "dark"
                  }]
                }, [
                  createVNode("span", null, [
                    createVNode(_component_icon, {
                      icon: "moon",
                      size: "lg",
                      key: "dark",
                      class: "transform hover:scale-110 active:scale-90 transition-all duration-300"
                    })
                  ]),
                  unref(form).dark_mode === "dark" ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "ml-3 whitespace-nowrap",
                    textContent: toDisplayString(_ctx.$t("darkMode"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ], 10, ["onClick"])
              ]),
              createVNode(_sfc_main$4, {
                message: unref(form).errors.dark_mode,
                class: "mt-2"
              }, null, 8, ["message"])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              on: unref(form).recentlySuccessful,
              class: "me-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Saved. `);
                } else {
                  return [
                    createTextVNode(" Saved. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                on: unref(form).recentlySuccessful,
                class: "me-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Saved. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$3, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DarkModePreferenceForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

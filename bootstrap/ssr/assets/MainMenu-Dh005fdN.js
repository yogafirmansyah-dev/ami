import { useSSRContext, ref, inject, onBeforeMount, watch, resolveComponent, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
import { onClickOutside } from "@vueuse/core";
import { M as MainMenuLinks } from "./mainMenuLinks-IRYWy40j.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { m as mainMenuConf, a as appConf } from "./windowSizeCalculator-4-m3qk2a.js";
import { m as menuStatus } from "./AppLayout-D0TyJNRu.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TButton-oXLR37ud.js";
import "./TDropdown-8pNOPgDY.js";
import "./TChevronDownIcon-fGhz3Hz_.js";
import "./TAvatar-Cw8URzx6.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main$1 = {
  name: "UserMenu"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainMenu/Abay/UserMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UserMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "MainMenu",
  __ssrInlineRender: true,
  emits: ["updateMainMenuStatus"],
  setup(__props) {
    const page = usePage();
    const { mainMenuLinks, mainMenuFooterLinks } = MainMenuLinks({
      role: page.props.auth.user.role
    });
    const activeMainLink = ref([null, null, null]);
    const appearingMode = inject("appearingMode");
    onBeforeMount(() => {
      mainMenuLinks.value.forEach((ml) => {
        if (ml.hasOwnProperty("links")) {
          ml.links.find((sl) => {
            if (ml.link === route().current()) {
              activeMainLink.value[0] = ml.id;
            }
            if (sl.link === route().current()) {
              activeMainLink.value[0] = ml.id;
              activeMainLink.value[1] = sl.id;
            }
            if (sl.hasOwnProperty("links")) {
              sl.links.find((tl) => {
                if (tl.link === route().current()) {
                  activeMainLink.value[0] = ml.id;
                  activeMainLink.value[1] = sl.id;
                  activeMainLink.value[2] = tl.id;
                }
              });
            }
          });
        }
      });
    });
    const subMenu = ref(null);
    const showSubMenu = ref();
    onClickOutside(subMenu, (event) => showSubMenu.value = false);
    const thirdMenu = ref(null);
    onClickOutside(thirdMenu, (event) => activeMainLink.value[2] = null);
    const breakpoints = inject("breakpoints");
    watch(breakpoints.value, (newValue) => {
      if (newValue.smaller("md").value) {
        menuStatus.value = "hidden";
        showSubMenu.value = false;
      }
      if (newValue.greater("md").value) {
        menuStatus.value = "opened";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(`<!--[--><div class="${ssrRenderClass([{
        "border-r": showSubMenu.value,
        "abay-main-menu-show": unref(menuStatus) === "opened",
        "abay-main-menu-hide": unref(menuStatus) === "hidden"
      }, "abay-main-menu"])}">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("/"),
        class: "h-16 w-16 text-rose-600 my-4 mx-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", [
              unref(appearingMode) === "dark" ? unref(mainMenuConf).abay.logo.dark ? unref(mainMenuConf).abay.logo.dark : unref(appConf).logo.dark : unref(mainMenuConf).abay.logo.light ? unref(mainMenuConf).abay.logo.light : unref(appConf).logo.light
            ])}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: [
                  unref(appearingMode) === "dark" ? unref(mainMenuConf).abay.logo.dark ? unref(mainMenuConf).abay.logo.dark : unref(appConf).logo.dark : unref(mainMenuConf).abay.logo.light ? unref(mainMenuConf).abay.logo.light : unref(appConf).logo.light
                ]
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col flex-grow space-y-[.25rem] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-slate-200 overscroll-x-none pr-4 -mr-4 scroll-smooth"><!--[-->`);
      ssrRenderList(unref(mainMenuLinks), (link) => {
        _push(`<div class="${ssrRenderClass([{ "bg-rose-500 text-gray-50": activeMainLink.value[0] === link.id }, "abay-main-menu-root-wrapper"])}">`);
        if (link.type === "dropdown") {
          _push(`<div class="abay-main-menu-root-link">`);
          if (link.icon) {
            _push(ssrRenderComponent(_component_icon, {
              icon: link.icon,
              class: "w-6 h-6"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="text-[.65rem]">${ssrInterpolate(link.label)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (link.type === "route") {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route(link.link),
            class: "abay-main-menu-root-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (link.icon) {
                  _push2(ssrRenderComponent(_component_icon, {
                    icon: link.icon,
                    class: "w-6 h-6"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="text-[.65rem]"${_scopeId}>${ssrInterpolate(link.label)}</span>`);
              } else {
                return [
                  link.icon ? (openBlock(), createBlock(_component_icon, {
                    key: 0,
                    icon: link.icon,
                    class: "w-6 h-6"
                  }, null, 8, ["icon"])) : createCommentVNode("", true),
                  createVNode("span", {
                    class: "text-[.65rem]",
                    textContent: toDisplayString(link.label)
                  }, null, 8, ["textContent"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (link.type === "simple-link") {
          _push(`<a class="abay-main-menu-root-link"${ssrRenderAttr("href", link.link)}${ssrRenderAttr("target", !!link.target)}>`);
          if (link.icon) {
            _push(ssrRenderComponent(_component_icon, {
              icon: link.icon,
              class: "w-6 h-6"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="text-[.65rem]">${ssrInterpolate(link.label)}</span></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(unref(mainMenuFooterLinks), (link) => {
        _push(`<div class="flex flex-shrink-0 justify-center items-center h-12 w-12 mx-auto bg-slate-100/10 mb-4 rounded-full">`);
        if (link.linkType === "route") {
          _push(ssrRenderComponent(unref(Link), {
            id: "footer-link",
            href: _ctx.route(link.link),
            key: link.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (link.icon) {
                  _push2(ssrRenderComponent(_component_icon, {
                    icon: link.icon,
                    class: "mt-1 w-6 h-6"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  link.icon ? (openBlock(), createBlock(_component_icon, {
                    key: 0,
                    icon: link.icon,
                    class: "mt-1 w-6 h-6"
                  }, null, 8, ["icon"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<a id="footer-link"${ssrRenderAttr("href", link.link)}${ssrRenderAttr("target", !!link.target)}>`);
          if (link.icon) {
            _push(ssrRenderComponent(_component_icon, {
              icon: link.icon,
              class: "mt-1 w-6 h-6"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</a>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><div class="flex items-center justify-center">`);
      _push(ssrRenderComponent(UserMenu, null, null, _parent));
      _push(`</div></div>`);
      if (activeMainLink.value[0]) {
        _push(`<div class="${ssrRenderClass([[
          showSubMenu.value ? "left-28" : "-left-56",
          "transition-all duration-700"
        ], "absolute z-10 flex h-full flex-col px-4 -mb-4 w-56 bg-gradient-to-tl from-slate-700/90 to-slate-800 text-gray-50"])}"><div class="flex flex-col h-20 justify-center items-center"><span class="text-2xl font-bold">${(unref(mainMenuConf).appName ? unref(mainMenuConf).appName : unref(appConf).appName) ?? ""}</span><span class="text-xs font-semibold text-center">${(unref(mainMenuConf).catchPhrase ? unref(mainMenuConf).catchPhrase : unref(appConf).catchPhrase) ?? ""}</span></div>`);
        if (activeMainLink.value[0]) {
          _push(`<div class="mt-6 space-y-[.25rem]"><!--[-->`);
          ssrRenderList(unref(mainMenuLinks).find((l) => l.id === activeMainLink.value[0]).links, (subLink) => {
            _push(`<div class="${ssrRenderClass([[
              { "bg-rose-500": activeMainLink.value[1] === subLink.id }
            ], "relative p-2 rounded-md hover:bg-slate-400/50 cursor-pointer text-sm"])}">`);
            if (subLink.type === "dropdown") {
              _push(`<div class="relative flex justify-between items-center cursor-default"><div class="flex space-x-2 items-center">`);
              if (subLink.icon) {
                _push(ssrRenderComponent(_component_icon, {
                  icon: subLink.icon
                }, null, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(`<span>${ssrInterpolate(subLink.label)}</span></div><div class="px-2 cursor-pointer">`);
              if (subLink.hasOwnProperty("links")) {
                _push(ssrRenderComponent(_component_icon, {
                  icon: "ellipsis-vertical",
                  size: "sm"
                }, null, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(`</div></div>`);
            } else {
              _push(`<!---->`);
            }
            if (subLink.type === "route") {
              _push(ssrRenderComponent(unref(Link), {
                href: _ctx.route(subLink.link),
                class: "flex space-x-2 items-center"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    if (subLink.icon) {
                      _push2(ssrRenderComponent(_component_icon, {
                        icon: subLink.icon
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<span${_scopeId}>${ssrInterpolate(subLink.label)}</span>`);
                  } else {
                    return [
                      subLink.icon ? (openBlock(), createBlock(_component_icon, {
                        key: 0,
                        icon: subLink.icon
                      }, null, 8, ["icon"])) : createCommentVNode("", true),
                      createVNode("span", {
                        textContent: toDisplayString(subLink.label)
                      }, null, 8, ["textContent"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            if (subLink.type === "simple-link") {
              _push(`<a class="flex space-x-2 items-center"${ssrRenderAttr("href", subLink.link)}${ssrRenderAttr("target", !!subLink.target)}>`);
              if (subLink.icon) {
                _push(ssrRenderComponent(_component_icon, {
                  icon: subLink.icon
                }, null, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(`<span>${ssrInterpolate(subLink.label)}</span></a>`);
            } else {
              _push(`<!---->`);
            }
            if (activeMainLink.value[2] === subLink.id) {
              _push(`<div class="absolute z-50 top-10 -left-0 flex flex-col p-2 space-y-2 w-full rounded-md bg-white bg-slate-700 bg-opacity-[.97]"><!--[-->`);
              ssrRenderList(subLink.links, (thirdLink) => {
                _push(`<div class="${ssrRenderClass([[
                  { "bg-rose-500": _ctx.route().current(thirdLink.link) }
                ], "p-1 rounded-md"])}">`);
                if (thirdLink.type === "route") {
                  _push(ssrRenderComponent(unref(Link), {
                    href: _ctx.route(thirdLink.link),
                    class: "flex space-x-2 items-center"
                  }, {
                    default: withCtx((_, _push2, _parent2, _scopeId) => {
                      if (_push2) {
                        if (thirdLink.icon) {
                          _push2(ssrRenderComponent(_component_icon, {
                            icon: thirdLink.icon
                          }, null, _parent2, _scopeId));
                        } else {
                          _push2(`<!---->`);
                        }
                        _push2(`<span${_scopeId}>${ssrInterpolate(thirdLink.label)}</span>`);
                      } else {
                        return [
                          thirdLink.icon ? (openBlock(), createBlock(_component_icon, {
                            key: 0,
                            icon: thirdLink.icon
                          }, null, 8, ["icon"])) : createCommentVNode("", true),
                          createVNode("span", {
                            textContent: toDisplayString(thirdLink.label)
                          }, null, 8, ["textContent"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent));
                } else {
                  _push(`<!---->`);
                }
                if (thirdLink.type === "simple-link") {
                  _push(`<a class="flex space-x-2 items-center"${ssrRenderAttr("href", thirdLink.link)}${ssrRenderAttr("target", !!thirdLink.target)}>`);
                  if (thirdLink.icon) {
                    _push(ssrRenderComponent(_component_icon, {
                      icon: thirdLink.icon
                    }, null, _parent));
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<span>${ssrInterpolate(thirdLink.label)}</span></a>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainMenu/Abay/MainMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

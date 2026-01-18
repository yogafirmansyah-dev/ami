import { inject, reactive, onBeforeMount, computed, resolveComponent, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext, ref, provide, watch } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { Link, usePage } from "@inertiajs/vue3";
import { m as menuStatus, u as updateMenuStatus } from "./AppLayout-BXpqpYTS.js";
import { M as MainMenuLinks } from "./mainMenuLinks-CDe0ZxbY.js";
import { m as mainMenuConf, a as appConf } from "./windowSizeCalculator-Ch6zBFfA.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vueuse/core";
import "./TDropdown-CRaizlei.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-DS29Kv5n.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main$1 = {
  __name: "MainMenuItem",
  __ssrInlineRender: true,
  props: {
    link: {
      type: Object,
      default: null
    }
  },
  emits: ["selected"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const selectedLink = inject("selectedLink");
    const activeMenus = reactive({
      root: null,
      second: null,
      third: null
    });
    const select = (selection) => {
      if (selectedLink.value[0] === selection[0] && selection.length === 1 && menuStatus !== "opened") {
        emit("selected", []);
      } else if (selectedLink.value[0] === selection[0] && selectedLink.value[1] === selection[1] && selection.length === 2) {
        emit("selected", selection.splice(0, 1));
      } else {
        emit("selected", selection);
      }
    };
    const checkIsActive = (item) => {
      if (item.activeQuery) {
        return route().current(item.activeQuery);
      }
      return item.link ? route().current(item.link) : false;
    };
    onBeforeMount(() => {
      if (props.link["links"]) {
        for (let child of props.link["links"]) {
          if (checkIsActive(child) && !child["links"]) {
            activeMenus.root = props.link.id;
            activeMenus.second = child.id;
            select([props.link.id, child.id]);
          }
          if (child["links"]) {
            for (let third of child["links"]) {
              if (checkIsActive(third)) {
                activeMenus.root = props.link.id;
                activeMenus.second = child.id;
                activeMenus.third = third.id;
                select([props.link.id, child.id, third.id]);
              }
            }
          }
        }
      } else {
        if (checkIsActive(props.link)) {
          activeMenus.root = props.link.id;
          select([props.link.id]);
        }
      }
    });
    computed(() => {
      let style = {
        rootLinkClasses: {
          activeBg: null,
          normal: null,
          active: null
        },
        secondLinkClasses: {
          activeBg: null,
          normal: null,
          active: null
        },
        thirdLinkClasses: {
          activeBg: null,
          normal: null,
          active: null
        }
      };
      let comparedStyle = `radius-${mainMenuConf.umay.menuRadius ? mainMenuConf.umay.menuRadius : appConf.radius}`;
      let mainKeys = ["rootLinkClasses", "secondLinkClasses", "thirdLinkClasses"];
      let subKeys = ["activeBg", "normal", "active"];
      mainKeys.forEach((link) => {
        subKeys.forEach((subLink) => {
          mainMenuConf.umay[link][subLink].forEach((i) => {
            if (!i.match(/(rounded|radius)/g)) {
              style[link][subLink] = comparedStyle;
            } else {
              style[link][subLink] = null;
            }
          });
        });
      });
      return style;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full px-2 py-1" }, _attrs))} data-v-32d8c3a0>`);
      if (__props.link.type === "dropdown" && __props.link.visibleFor !== false) {
        _push(`<div class="${ssrRenderClass([[
          unref(selectedLink).includes(__props.link.id) && unref(menuStatus) !== "closed" || activeMenus.root === __props.link.id ? "bg-slate-100 dark:bg-slate-800/80 text-rose-600 dark:text-rose-500 font-bold shadow-sm" : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400"
        ], "group flex justify-between items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 w-full"])}" data-v-32d8c3a0><div class="flex items-center gap-3 overflow-hidden" data-v-32d8c3a0><div class="flex justify-center items-center w-6 h-6 shrink-0" data-v-32d8c3a0>`);
        if (__props.link["icon"]) {
          _push(ssrRenderComponent(_component_icon, {
            icon: __props.link.icon,
            class: "w-6 h-6 transition-transform group-hover:scale-110 duration-300"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><span class="${ssrRenderClass([unref(menuStatus) !== "closed" ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0", "text-sm font-bold uppercase tracking-wide whitespace-normal leading-tight transition-all duration-300"])}" data-v-32d8c3a0>${ssrInterpolate(__props.link.label)}</span></div>`);
        if (unref(menuStatus) !== "closed") {
          _push(`<div data-v-32d8c3a0>`);
          _push(ssrRenderComponent(_component_icon, {
            icon: "chevron-down",
            size: "xs",
            class: [[unref(selectedLink).includes(__props.link.id) ? "rotate-180" : "rotate-0"], "transition-transform duration-300 text-current opacity-70"]
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (__props.link.type === "route" && __props.link.visibleFor !== false) {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route(__props.link.link),
          onClick: ($event) => {
            select([__props.link.id]);
            unref(menuStatus) === "closed" && unref(updateMenuStatus)();
          },
          class: ["group flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer w-full transition-all duration-300", [
            unref(selectedLink).includes(__props.link.id) || activeMenus.root === __props.link.id ? "bg-slate-100 dark:bg-slate-800/80 text-rose-600 dark:text-rose-500 font-bold shadow-sm" : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400"
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex justify-center items-center w-6 h-6 shrink-0" data-v-32d8c3a0${_scopeId}>`);
              if (__props.link["icon"]) {
                _push2(ssrRenderComponent(_component_icon, {
                  icon: __props.link.icon,
                  class: "w-6 h-6 transition-transform group-hover:scale-110 duration-300"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><span class="${ssrRenderClass([unref(menuStatus) !== "closed" ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0", "text-sm font-bold uppercase tracking-wide whitespace-normal leading-tight transition-all duration-300"])}" data-v-32d8c3a0${_scopeId}>${ssrInterpolate(__props.link.label)}</span>`);
            } else {
              return [
                createVNode("div", { class: "flex justify-center items-center w-6 h-6 shrink-0" }, [
                  __props.link["icon"] ? (openBlock(), createBlock(_component_icon, {
                    key: 0,
                    icon: __props.link.icon,
                    class: "w-6 h-6 transition-transform group-hover:scale-110 duration-300"
                  }, null, 8, ["icon"])) : createCommentVNode("", true)
                ]),
                createVNode("span", {
                  textContent: toDisplayString(__props.link.label),
                  class: ["text-sm font-bold uppercase tracking-wide whitespace-normal leading-tight transition-all duration-300", unref(menuStatus) !== "closed" ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"]
                }, null, 10, ["textContent"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (__props.link.type === "simple-link" && __props.link.visibleFor !== false) {
        _push(`<a${ssrRenderAttr("href", __props.link.link)}${ssrRenderAttr("target", __props.link.target)} class="${ssrRenderClass([[
          "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-rose-600 dark:hover:text-rose-400"
        ], "group flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer w-full transition-all duration-300"])}" data-v-32d8c3a0><div class="flex justify-center items-center w-6 h-6 shrink-0" data-v-32d8c3a0>`);
        if (__props.link["icon"]) {
          _push(ssrRenderComponent(_component_icon, {
            icon: __props.link.icon,
            class: "w-6 h-6 transition-transform group-hover:scale-110 duration-300"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><span class="${ssrRenderClass([unref(menuStatus) !== "closed" ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0", "text-sm font-bold uppercase tracking-wide whitespace-normal leading-tight transition-all duration-300"])}" data-v-32d8c3a0>${ssrInterpolate(__props.link.label)}</span></a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.link.links && unref(selectedLink).includes(__props.link.id) && unref(menuStatus) !== "closed") {
        _push(`<div class="flex flex-col py-2 space-y-2 overflow-hidden" data-v-32d8c3a0><!--[-->`);
        ssrRenderList(__props.link.links, (subItem) => {
          _push(`<!--[-->`);
          if (subItem.type === "dropdown" && subItem.visibleFor !== false) {
            _push(`<div class="${ssrRenderClass([[
              unref(selectedLink).includes(subItem.id) || activeMenus.second === subItem.id ? "bg-slate-50 dark:bg-slate-800/50 text-rose-600 dark:text-rose-400 font-bold border-l-rose-500 shadow-sm" : "text-slate-500 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400"
            ], "group flex justify-between items-center px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-300 w-full ml-2 border-l-2 border-slate-100 dark:border-slate-800 hover:border-rose-500"])}" data-v-32d8c3a0><div class="flex items-center gap-3" data-v-32d8c3a0>`);
            if (subItem["icon"]) {
              _push(ssrRenderComponent(_component_icon, {
                icon: subItem.icon,
                class: "w-5 h-5 transition-transform group-hover:scale-110"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<span class="text-xs font-semibold uppercase tracking-wide whitespace-normal leading-tight" data-v-32d8c3a0>${ssrInterpolate(subItem.label)}</span></div>`);
            _push(ssrRenderComponent(_component_icon, {
              icon: "chevron-down",
              size: "xs",
              class: [[unref(selectedLink).includes(subItem.id) ? "rotate-180" : "rotate-0"], "transition-transform duration-300 text-current opacity-70"]
            }, null, _parent));
            _push(`</div>`);
          } else if (subItem.type === "route" && subItem.visibleFor !== false) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route(subItem.link),
              class: ["group flex justify-between items-center px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-300 w-full ml-2 border-l-2 border-slate-100 dark:border-slate-800 hover:border-rose-500", [
                unref(selectedLink).includes(subItem.id) || activeMenus.second === subItem.id ? "bg-slate-50 dark:bg-slate-800/50 text-rose-600 dark:text-rose-400 font-bold border-l-rose-500 shadow-sm" : "text-slate-500 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400"
              ]]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex items-center gap-3" data-v-32d8c3a0${_scopeId}>`);
                  if (subItem["icon"]) {
                    _push2(ssrRenderComponent(_component_icon, {
                      icon: subItem.icon,
                      class: "w-5 h-5 transition-transform group-hover:scale-110"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<span class="text-xs font-semibold uppercase tracking-wide whitespace-normal leading-tight" data-v-32d8c3a0${_scopeId}>${ssrInterpolate(subItem.label)}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      subItem["icon"] ? (openBlock(), createBlock(_component_icon, {
                        key: 0,
                        icon: subItem.icon,
                        class: "w-5 h-5 transition-transform group-hover:scale-110"
                      }, null, 8, ["icon"])) : createCommentVNode("", true),
                      createVNode("span", {
                        textContent: toDisplayString(subItem.label),
                        class: "text-xs font-semibold uppercase tracking-wide whitespace-normal leading-tight"
                      }, null, 8, ["textContent"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (subItem.type === "simple-link" && subItem.visibleFor !== false) {
            _push(`<a${ssrRenderAttr("href", subItem.link)}${ssrRenderAttr("target", subItem.target)} class="${ssrRenderClass([[
              "text-slate-500 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400"
            ], "group flex justify-between items-center px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-300 w-full ml-2 border-l-2 border-slate-100 dark:border-slate-800 hover:border-rose-500"])}" data-v-32d8c3a0><div class="flex items-center gap-3" data-v-32d8c3a0>`);
            if (subItem["icon"]) {
              _push(ssrRenderComponent(_component_icon, {
                icon: subItem.icon,
                class: "w-5 h-5 transition-transform group-hover:scale-110"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<span class="text-xs font-semibold uppercase tracking-wide whitespace-normal leading-tight" data-v-32d8c3a0>${ssrInterpolate(subItem.label)}</span></div></a>`);
          } else {
            _push(`<!---->`);
          }
          if (subItem.links && unref(selectedLink).includes(subItem.id) || subItem.links && activeMenus.second === subItem.id) {
            _push(`<div class="flex flex-col space-y-1 mt-1 ml-4 border-l-2 border-slate-200 dark:border-slate-700 pl-2" data-v-32d8c3a0><!--[-->`);
            ssrRenderList(subItem.links, (thirdItem) => {
              _push(`<!--[-->`);
              if (thirdItem.type === "route" && thirdItem.visibleFor !== false) {
                _push(ssrRenderComponent(unref(Link), {
                  href: _ctx.route(thirdItem.link),
                  class: ["flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer w-full transition-all duration-200", [
                    unref(selectedLink).includes(thirdItem.id) || activeMenus.third === thirdItem.id ? "text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-900/10" : "text-slate-500 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-400"
                  ]]
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      if (thirdItem["icon"]) {
                        _push2(ssrRenderComponent(_component_icon, {
                          icon: thirdItem.icon,
                          class: "w-4 h-4"
                        }, null, _parent2, _scopeId));
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`<span class="text-[11px] font-medium uppercase tracking-wide whitespace-normal leading-tight" data-v-32d8c3a0${_scopeId}>${ssrInterpolate(thirdItem.label)}</span>`);
                    } else {
                      return [
                        thirdItem["icon"] ? (openBlock(), createBlock(_component_icon, {
                          key: 0,
                          icon: thirdItem.icon,
                          class: "w-4 h-4"
                        }, null, 8, ["icon"])) : createCommentVNode("", true),
                        createVNode("span", {
                          textContent: toDisplayString(thirdItem.label),
                          class: "text-[11px] font-medium uppercase tracking-wide whitespace-normal leading-tight"
                        }, null, 8, ["textContent"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!---->`);
              }
              if (thirdItem.type === "simple-link" && thirdItem.visibleFor !== false) {
                _push(`<a${ssrRenderAttr("href", thirdItem.link)}${ssrRenderAttr("target", thirdItem.target)} class="${ssrRenderClass([[
                  "text-slate-500 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-400"
                ], "flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer w-full transition-all duration-200"])}" data-v-32d8c3a0>`);
                if (thirdItem["icon"]) {
                  _push(ssrRenderComponent(_component_icon, {
                    icon: thirdItem.icon,
                    class: "w-4 h-4"
                  }, null, _parent));
                } else {
                  _push(`<!---->`);
                }
                _push(`<span class="text-[11px] font-medium uppercase tracking-wide whitespace-normal leading-tight" data-v-32d8c3a0>${ssrInterpolate(thirdItem.label)}</span></a>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MainMenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-32d8c3a0"]]);
const _sfc_main = {
  __name: "MainMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const { mainMenuLinks, mainMenuFooterLinks } = MainMenuLinks({
      role: page.props.auth.user.role
    });
    const selectedLink = ref([]);
    provide("selectedLink", selectedLink);
    const appearingMode = inject("appearingMode");
    const breakpoints = inject("breakpoints");
    watch(breakpoints.value, (newValue) => {
      if (newValue.smaller("md").value) {
        menuStatus.value = "hidden";
      }
      if (newValue.greater("md").value) {
        menuStatus.value = "opened";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: ["umay-main-menu", {
          "umay-main-menu-show": unref(menuStatus) === "opened",
          "umay-main-menu-hide": unref(menuStatus) === "hidden",
          "umay-main-menu-fold": unref(menuStatus) === "closed"
        }]
      }, _attrs))} data-v-1b1c5fa5><div class="${ssrRenderClass([[
        unref(mainMenuConf).umay.logoAreaClasses ? unref(mainMenuConf).umay.logoAreaClasses : unref(appConf).logoAreaClasses,
        `radius-${unref(mainMenuConf).umay.logoAreaRadius ? unref(mainMenuConf).umay.logoAreaRadius : unref(appConf).radius}`
      ], "header"])}" data-v-1b1c5fa5>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("/"),
        class: "logo-out-container"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([unref(menuStatus) === "closed" && "ml-1", "logo-inside-container"])}" data-v-1b1c5fa5${_scopeId}><img${ssrRenderAttr("src", [
              unref(appearingMode) === "dark" ? unref(mainMenuConf).umay.logo.dark ? unref(mainMenuConf).umay.logo.dark : unref(appConf).logo.dark : unref(mainMenuConf).umay.logo.light ? unref(mainMenuConf).umay.logo.light : unref(appConf).logo.light
            ])} class="${ssrRenderClass(unref(mainMenuConf).umay.logoClasses)}" data-v-1b1c5fa5${_scopeId}><div id="logo-title" class="${ssrRenderClass([
              unref(menuStatus) !== "closed" ? "umay-main-menu-title-show" : "umay-main-menu-title-hide",
              unref(mainMenuConf).umay.appNameClasses
            ])}" data-v-1b1c5fa5${_scopeId}>${(unref(mainMenuConf).appName ? unref(mainMenuConf).appName : unref(appConf).appName) ?? ""}</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["logo-inside-container", unref(menuStatus) === "closed" && "ml-1"]
              }, [
                createVNode("img", {
                  src: [
                    unref(appearingMode) === "dark" ? unref(mainMenuConf).umay.logo.dark ? unref(mainMenuConf).umay.logo.dark : unref(appConf).logo.dark : unref(mainMenuConf).umay.logo.light ? unref(mainMenuConf).umay.logo.light : unref(appConf).logo.light
                  ],
                  class: unref(mainMenuConf).umay.logoClasses
                }, null, 10, ["src"]),
                createVNode("div", {
                  id: "logo-title",
                  innerHTML: unref(mainMenuConf).appName ? unref(mainMenuConf).appName : unref(appConf).appName,
                  class: [
                    unref(menuStatus) !== "closed" ? "umay-main-menu-title-show" : "umay-main-menu-title-hide",
                    unref(mainMenuConf).umay.appNameClasses
                  ]
                }, null, 10, ["innerHTML"])
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav id="links-wrapper" class="flex-grow px-3 space-y-1 overflow-y-auto overflow-x-hidden custom-scrollbar" data-v-1b1c5fa5><!--[-->`);
      ssrRenderList(unref(mainMenuLinks), (link) => {
        _push(ssrRenderComponent(MainMenuItem, {
          link,
          onSelected: ($event) => selectedLink.value = $event
        }, null, _parent));
      });
      _push(`<!--]--></nav><div id="footer" class="mt-auto px-4 pt-4 border-t border-white/10 dark:border-slate-800/50" data-v-1b1c5fa5>`);
      if (unref(mainMenuFooterLinks).length > 0 && unref(menuStatus) !== "closed") {
        _push(`<div id="footer-links-wrapper" class="${ssrRenderClass([
          unref(mainMenuFooterLinks).length > 1 ? "grid-cols-2" : "",
          `radius-${unref(mainMenuConf).umay.radius ? unref(mainMenuConf).umay.radius : unref(appConf).radius}`
        ])}" data-v-1b1c5fa5><!--[-->`);
        ssrRenderList(unref(mainMenuFooterLinks), (link) => {
          _push(`<!--[-->`);
          if (link.linkType === "route") {
            _push(ssrRenderComponent(unref(Link), {
              id: "footer-link",
              class: unref(mainMenuFooterLinks).length > 2 ? "justify-start" : "justify-center",
              href: _ctx.route(link.link)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (link.icon) {
                    _push2(ssrRenderComponent(_component_icon, {
                      icon: link.icon,
                      class: "w-4 h-4"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<span data-v-1b1c5fa5${_scopeId}>${ssrInterpolate(link.label ? link.label : link.label)}</span>`);
                } else {
                  return [
                    link.icon ? (openBlock(), createBlock(_component_icon, {
                      key: 0,
                      icon: link.icon,
                      class: "w-4 h-4"
                    }, null, 8, ["icon"])) : createCommentVNode("", true),
                    createVNode("span", {
                      textContent: toDisplayString(link.label ? link.label : link.label)
                    }, null, 8, ["textContent"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<a id="footer-link" class="${ssrRenderClass(unref(mainMenuFooterLinks).length > 2 ? "justify-start" : "justify-center")}"${ssrRenderAttr("href", link.link)}${ssrRenderAttr("target", link.target ? "_blank" : null)} data-v-1b1c5fa5>`);
            if (link.icon) {
              _push(ssrRenderComponent(_component_icon, {
                icon: link.icon,
                class: "w-4 h-4"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<span data-v-1b1c5fa5>${ssrInterpolate(link.label ? link.label : link.label)}</span></a>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div id="footer-trigger" data-v-1b1c5fa5><svg xmlns="http://www.w3.org/2000/svg" class="umay-main-menu-trigger-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-1b1c5fa5><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" data-v-1b1c5fa5></path></svg></div>`);
      }
      _push(`</div></aside>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainMenu/Umay/MainMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MainMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1b1c5fa5"]]);
export {
  MainMenu as default
};

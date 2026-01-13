import { inject, reactive, onBeforeMount, computed, resolveComponent, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext, ref, provide, watch } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { Link, usePage } from "@inertiajs/vue3";
import { m as menuStatus, u as updateMenuStatus } from "./AppLayout-D0TyJNRu.js";
import { M as MainMenuLinks } from "./mainMenuLinks-IRYWy40j.js";
import { m as mainMenuConf, a as appConf } from "./windowSizeCalculator-4-m3qk2a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vueuse/core";
import "./TButton-oXLR37ud.js";
import "./TDropdown-8pNOPgDY.js";
import "./TChevronDownIcon-fGhz3Hz_.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-Cw8URzx6.js";
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
    onBeforeMount(() => {
      if (props.link["links"]) {
        for (let child of props.link["links"]) {
          if (route().current(child.link) && child.link !== null && !child["links"]) {
            activeMenus.root = props.link.id;
            activeMenus.second = child.id;
            select([props.link.id, child.id]);
          }
          if (child["links"]) {
            for (let third of child["links"]) {
              if (route().current(third.link) && third.link !== null) {
                activeMenus.root = props.link.id;
                activeMenus.second = child.id;
                activeMenus.third = third.id;
                select([props.link.id, child.id, third.id]);
              }
            }
          }
        }
      } else {
        if (route().current(props.link.link) && props.link.link !== null) {
          activeMenus.root = props.link.id;
          select([props.link.id]);
        }
      }
    });
    const generatedRadius = computed(() => {
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
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative w-full font-sans text-slate-100 p-2", [
          generatedRadius.value.rootLinkClasses.activeBg,
          unref(selectedLink).includes(__props.link.id) && __props.link["links"] && unref(menuStatus) !== "closed" && unref(mainMenuConf).umay.rootLinkClasses.activeBg
        ]]
      }, _attrs))} data-v-8ea167e4>`);
      if (__props.link.type === "dropdown" && __props.link.visibleFor !== false) {
        _push(`<div class="${ssrRenderClass([[
          unref(selectedLink).includes(__props.link.id) && unref(menuStatus) !== "closed" || activeMenus.root === __props.link.id ? [unref(mainMenuConf).umay.rootLinkClasses.active, generatedRadius.value.rootLinkClasses.active] : [unref(mainMenuConf).umay.rootLinkClasses.normal, generatedRadius.value.rootLinkClasses.normal],
          unref(menuStatus) !== "closed" ? "h-12 space-x-2" : "h-14 "
        ], "flex justify-between items-center px-2 rounded cursor-pointer overflow-hidden transition-color duration-300 w-full"])}" data-v-8ea167e4><div class="${ssrRenderClass([{
          "space-x-2": unref(menuStatus) !== "closed",
          "justify-between": unref(menuStatus) !== "closed",
          "justify-center": unref(menuStatus) === "closed"
        }, "flex items-center w-full"])}" data-v-8ea167e4><div class="flex justify-center items-center w-8 h-8" data-v-8ea167e4>`);
        if (__props.link["icon"]) {
          _push(ssrRenderComponent(_component_icon, {
            icon: __props.link.icon
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><span class="${ssrRenderClass([[
          unref(menuStatus) !== "closed" ? "w-show" : "w-hide",
          "transition-size-medium"
        ], "flex whitespace-nowrap transition-size-medium"])}" data-v-8ea167e4>${ssrInterpolate(__props.link.label)}</span></div><div data-v-8ea167e4>`);
        if (unref(menuStatus) !== "closed") {
          _push(ssrRenderComponent(_component_icon, {
            icon: "chevron-down",
            size: "sm",
            class: [[unref(selectedLink).includes(__props.link.id) ? "rotate-90" : "rotate-0"], "mr-1 transition-size-medium"]
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else if (__props.link.type === "route" && __props.link.visibleFor !== false) {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route(__props.link.link),
          onClick: ($event) => {
            select([__props.link.id]);
            unref(menuStatus) === "closed" && unref(updateMenuStatus)();
          },
          class: ["flex justify-between items-center px-3 rounded cursor-pointer w-full overflow-hidden transition-color duration-300", [
            unref(selectedLink).includes(__props.link.id) || activeMenus.root === __props.link.id ? [unref(mainMenuConf).umay.rootLinkClasses.active, generatedRadius.value.rootLinkClasses.active] : [unref(mainMenuConf).umay.rootLinkClasses.normal, generatedRadius.value.rootLinkClasses.normal],
            unref(menuStatus) !== "closed" ? "h-12 space-x-2" : "h-14 "
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([unref(menuStatus) !== "closed" && "space-x-2", "flex items-center"])}" data-v-8ea167e4${_scopeId}><div class="flex justify-center items-center w-8 h-8" data-v-8ea167e4${_scopeId}>`);
              if (__props.link["icon"]) {
                _push2(ssrRenderComponent(_component_icon, {
                  icon: __props.link.icon
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><span class="${ssrRenderClass([[
                unref(menuStatus) !== "closed" ? "w-show" : "w-hide",
                "transition-size-medium"
              ], "whitespace-nowrap transition-size-medium"])}" data-v-8ea167e4${_scopeId}>${ssrInterpolate(__props.link.label)}</span></div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["flex items-center", unref(menuStatus) !== "closed" && "space-x-2"]
                }, [
                  createVNode("div", { class: "flex justify-center items-center w-8 h-8" }, [
                    __props.link["icon"] ? (openBlock(), createBlock(_component_icon, {
                      key: 0,
                      icon: __props.link.icon
                    }, null, 8, ["icon"])) : createCommentVNode("", true)
                  ]),
                  createVNode("span", {
                    textContent: toDisplayString(__props.link.label),
                    class: ["whitespace-nowrap transition-size-medium", [
                      unref(menuStatus) !== "closed" ? "w-show" : "w-hide",
                      "transition-size-medium"
                    ]]
                  }, null, 10, ["textContent"])
                ], 2)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (__props.link.type === "simple-link" && __props.link.visibleFor !== false) {
        _push(`<a${ssrRenderAttr("href", __props.link.link)}${ssrRenderAttr("target", __props.link.target)} class="${ssrRenderClass([[
          [unref(mainMenuConf).umay.rootLinkClasses.normal, generatedRadius.value.rootLinkClasses.normal],
          unref(menuStatus) !== "closed" ? "h-12 space-x-2" : "h-14 "
        ], "flex justify-between items-center px-3 rounded cursor-pointer w-full overflow-hidden transition-color duration-300"])}" data-v-8ea167e4><div class="${ssrRenderClass([unref(menuStatus) !== "closed" && "space-x-2", "flex items-center"])}" data-v-8ea167e4><div class="flex justify-center items-center w-8 h-8" data-v-8ea167e4>`);
        if (__props.link["icon"]) {
          _push(ssrRenderComponent(_component_icon, {
            icon: __props.link.icon
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><span class="${ssrRenderClass([[
          unref(menuStatus) !== "closed" ? "w-show" : "w-hide",
          "transition-size-medium"
        ], "whitespace-nowrap transition-size-medium"])}" data-v-8ea167e4>${ssrInterpolate(__props.link.label)}</span></div></a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.link.links && unref(selectedLink).includes(__props.link.id) && unref(menuStatus) !== "closed") {
        _push(`<div class="flex flex-col py-2 space-y-2 overflow-hidden" data-v-8ea167e4><!--[-->`);
        ssrRenderList(__props.link.links, (subItem) => {
          _push(`<!--[-->`);
          if (subItem.type === "dropdown" && subItem.visibleFor !== false) {
            _push(`<div class="${ssrRenderClass([[
              unref(selectedLink).includes(subItem.id) || activeMenus.second === subItem.id ? [unref(mainMenuConf).umay.secondLinkClasses.active, generatedRadius.value.secondLinkClasses.active] : [unref(mainMenuConf).umay.secondLinkClasses.normal, generatedRadius.value.secondLinkClasses.normal]
            ], "flex justify-between items-center space-x-2 px-3 py-2 cursor-pointer rounded transition-color duration-300"])}" data-v-8ea167e4><div class="flex space-x-2 items-center" data-v-8ea167e4>`);
            if (subItem["icon"]) {
              _push(ssrRenderComponent(_component_icon, {
                icon: subItem.icon
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<span data-v-8ea167e4>${ssrInterpolate(subItem.label)}</span></div>`);
            _push(ssrRenderComponent(_component_icon, {
              icon: "chevron-down",
              size: "sm",
              class: [[unref(selectedLink).includes(subItem.id) ? "rotate-90" : "rotate-0"], "mr-1 transition-size-medium"]
            }, null, _parent));
            _push(`</div>`);
          } else if (subItem.type === "route" && subItem.visibleFor !== false) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route(subItem.link),
              class: ["flex justify-between items-center space-x-2 px-3 py-2 cursor-pointer rounded transition-color duration-300", [
                unref(selectedLink).includes(subItem.id) || activeMenus.second === subItem.id ? [unref(mainMenuConf).umay.secondLinkClasses.active, generatedRadius.value.secondLinkClasses.active] : [unref(mainMenuConf).umay.secondLinkClasses.normal, generatedRadius.value.secondLinkClasses.normal]
              ]]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex justify-between space-x-2 items-center w-full" data-v-8ea167e4${_scopeId}><span data-v-8ea167e4${_scopeId}>${ssrInterpolate(subItem.label)}</span>`);
                  if (subItem["icon"]) {
                    _push2(ssrRenderComponent(_component_icon, {
                      icon: subItem.icon
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-between space-x-2 items-center w-full" }, [
                      createVNode("span", {
                        textContent: toDisplayString(subItem.label)
                      }, null, 8, ["textContent"]),
                      subItem["icon"] ? (openBlock(), createBlock(_component_icon, {
                        key: 0,
                        icon: subItem.icon
                      }, null, 8, ["icon"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (subItem.type === "simple-link" && subItem.visibleFor !== false) {
            _push(`<a${ssrRenderAttr("href", subItem.link)}${ssrRenderAttr("target", subItem.target)} class="${ssrRenderClass([[
              [unref(mainMenuConf).umay.secondLinkClasses.normal, generatedRadius.value.secondLinkClasses.normal],
              unref(menuStatus) !== "closed" ? "h-12 space-x-2" : "h-14 "
            ], "flex justify-between items-center px-3 rounded cursor-pointer w-full overflow-hidden transition-color duration-300"])}" data-v-8ea167e4><div class="${ssrRenderClass([unref(menuStatus) !== "closed" && "space-x-2", "flex items-center"])}" data-v-8ea167e4><div class="flex justify-center items-center w-8 h-8" data-v-8ea167e4>`);
            if (subItem["icon"]) {
              _push(ssrRenderComponent(_component_icon, {
                icon: subItem.icon
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div><span class="${ssrRenderClass([[
              unref(menuStatus) !== "closed" ? "w-show" : "w-hide",
              "transition-size-medium"
            ], "whitespace-nowrap transition-size-medium"])}" data-v-8ea167e4>${ssrInterpolate(subItem.label)}</span></div></a>`);
          } else {
            _push(`<!---->`);
          }
          if (subItem.links && unref(selectedLink).includes(subItem.id) || subItem.links && activeMenus.second === subItem.id) {
            _push(`<div class="${ssrRenderClass([[
              generatedRadius.value.thirdLinkClasses.activeBg,
              unref(mainMenuConf).umay.thirdLinkClasses.activeBg
            ], "flex p-2"])}" data-v-8ea167e4><div class="flex flex-col space-y-4 w-full" data-v-8ea167e4><!--[-->`);
            ssrRenderList(subItem.links, (thirdItem) => {
              _push(`<!--[-->`);
              if (thirdItem.type === "route" && thirdItem.visibleFor !== false) {
                _push(ssrRenderComponent(unref(Link), {
                  href: _ctx.route(thirdItem.link),
                  class: ["flex items-center space-x-2 px-3 cursor-pointer w-full", [
                    unref(selectedLink).includes(thirdItem.id) || activeMenus.third === thirdItem.id ? [unref(mainMenuConf).umay.thirdLinkClasses.active, generatedRadius.value.thirdLinkClasses.active] : [unref(mainMenuConf).umay.thirdLinkClasses.normal, generatedRadius.value.thirdLinkClasses.normal]
                  ]]
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`<div class="flex justify-between space-x-2 py-2 items-center w-full" data-v-8ea167e4${_scopeId}><span data-v-8ea167e4${_scopeId}>${ssrInterpolate(thirdItem.label)}</span>`);
                      if (thirdItem["icon"]) {
                        _push2(ssrRenderComponent(_component_icon, {
                          icon: thirdItem.icon
                        }, null, _parent2, _scopeId));
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex justify-between space-x-2 py-2 items-center w-full" }, [
                          createVNode("span", {
                            textContent: toDisplayString(thirdItem.label)
                          }, null, 8, ["textContent"]),
                          thirdItem["icon"] ? (openBlock(), createBlock(_component_icon, {
                            key: 0,
                            icon: thirdItem.icon
                          }, null, 8, ["icon"])) : createCommentVNode("", true)
                        ])
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
                  [unref(mainMenuConf).umay.thirdLinkClasses.normal, generatedRadius.value.thirdLinkClasses.normal],
                  unref(menuStatus) !== "closed" ? "h-12 space-x-2" : "h-14 "
                ], "flex items-center space-x-2 px-3 cursor-pointer w-full"])}" data-v-8ea167e4><div class="${ssrRenderClass([unref(menuStatus) !== "closed" && "space-x-2", "flex items-center"])}" data-v-8ea167e4><div class="flex justify-center items-center w-8 h-8" data-v-8ea167e4>`);
                if (thirdItem["icon"]) {
                  _push(ssrRenderComponent(_component_icon, {
                    icon: thirdItem.icon
                  }, null, _parent));
                } else {
                  _push(`<!---->`);
                }
                _push(`</div><span class="${ssrRenderClass([[
                  unref(menuStatus) !== "closed" ? "w-show" : "w-hide",
                  "transition-size-medium"
                ], "whitespace-nowrap transition-size-medium"])}" data-v-8ea167e4>${ssrInterpolate(thirdItem.label)}</span></div></a>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]--></div></div>`);
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
const MainMenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8ea167e4"]]);
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
      }, _attrs))} data-v-edb64d01><div class="${ssrRenderClass([[
        unref(mainMenuConf).umay.logoAreaClasses ? unref(mainMenuConf).umay.logoAreaClasses : unref(appConf).logoAreaClasses,
        `radius-${unref(mainMenuConf).umay.logoAreaRadius ? unref(mainMenuConf).umay.logoAreaRadius : unref(appConf).radius}`
      ], "header"])}" data-v-edb64d01>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("/"),
        class: "logo-out-container"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([unref(menuStatus) === "closed" && "ml-1", "logo-inside-container"])}" data-v-edb64d01${_scopeId}><img${ssrRenderAttr("src", [
              unref(appearingMode) === "dark" ? unref(mainMenuConf).umay.logo.dark ? unref(mainMenuConf).umay.logo.dark : unref(appConf).logo.dark : unref(mainMenuConf).umay.logo.light ? unref(mainMenuConf).umay.logo.light : unref(appConf).logo.light
            ])} class="${ssrRenderClass(unref(mainMenuConf).umay.logoClasses)}" data-v-edb64d01${_scopeId}><div id="logo-title" class="${ssrRenderClass([
              unref(menuStatus) !== "closed" ? "umay-main-menu-title-show" : "umay-main-menu-title-hide",
              unref(mainMenuConf).umay.appNameClasses
            ])}" data-v-edb64d01${_scopeId}>${(unref(mainMenuConf).appName ? unref(mainMenuConf).appName : unref(appConf).appName) ?? ""}</div></div>`);
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
      _push(`</div><nav id="links-wrapper" data-v-edb64d01><!--[-->`);
      ssrRenderList(unref(mainMenuLinks), (link) => {
        _push(ssrRenderComponent(MainMenuItem, {
          link,
          onSelected: ($event) => selectedLink.value = $event
        }, null, _parent));
      });
      _push(`<!--]--></nav><div id="footer" data-v-edb64d01>`);
      if (unref(mainMenuFooterLinks).length > 0 && unref(menuStatus) !== "closed") {
        _push(`<div id="footer-links-wrapper" class="${ssrRenderClass([
          unref(mainMenuFooterLinks).length > 1 ? "grid-cols-2" : "",
          `radius-${unref(mainMenuConf).umay.radius ? unref(mainMenuConf).umay.radius : unref(appConf).radius}`
        ])}" data-v-edb64d01><!--[-->`);
        ssrRenderList(unref(mainMenuFooterLinks), (link) => {
          _push(`<!--[-->`);
          if (link.linkType === "route") {
            _push(ssrRenderComponent(unref(Link), {
              id: "footer-link",
              class: unref(mainMenuFooterLinks).length > 2 ? "justify-start" : "justify-center",
              href: _ctx.route(link.link),
              key: link.id
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (link.icon) {
                    _push2(ssrRenderComponent(_component_icon, {
                      icon: link.icon
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<span data-v-edb64d01${_scopeId}>${ssrInterpolate(link.label ? link.label : link.label)}</span>`);
                } else {
                  return [
                    link.icon ? (openBlock(), createBlock(_component_icon, {
                      key: 0,
                      icon: link.icon
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
            _push(`<a id="footer-link" class="${ssrRenderClass(unref(mainMenuFooterLinks).length > 2 ? "justify-start" : "justify-center")}"${ssrRenderAttr("href", link.link)} target="_blank" data-v-edb64d01>`);
            if (link.icon) {
              _push(ssrRenderComponent(_component_icon, {
                icon: link.icon
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<span data-v-edb64d01>${ssrInterpolate(link.label ? link.label : link.label)}</span></a>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div id="footer-trigger" data-v-edb64d01><svg xmlns="http://www.w3.org/2000/svg" class="umay-main-menu-trigger-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-edb64d01><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" data-v-edb64d01></path></svg></div>`);
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
const MainMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-edb64d01"]]);
export {
  MainMenu as default
};

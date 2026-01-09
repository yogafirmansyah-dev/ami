import { A as AppLayout } from "./AppLayout-C9UC9tJn.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TDropdown } from "./TDropdown-DbVD8e4r.js";
import { defineComponent, resolveComponent, mergeProps, withCtx, createBlock, createCommentVNode, createVNode, openBlock, renderSlot, useSlots, useSSRContext, createTextVNode } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { T as TContentCard } from "./TContentCard-CDGc_Lhz.js";
import { T as TList, a as TListItem } from "./TListItem-DHyz0dl0.js";
import { T as TAvatar } from "./TAvatar-a0UbdIFE.js";
import "@vueuse/core";
import "./windowSizeCalculator-ej9CZPp5.js";
import "vue-i18n";
import "./displayLanguage-CeV33Cax.js";
import "pinia";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main$2 = defineComponent({
  name: "TDropdownItem",
  components: {
    Link
  },
  props: {
    link: {
      type: String,
      default: null
    }
  },
  setup(props, { slots }) {
    const hasSlot = (name) => !!useSlots()[name];
    return { hasSlot };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dropdown-item-container" }, _attrs))}>`);
  if (_ctx.link) {
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.link,
      class: "dropdown-item"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (_ctx.hasSlot("icon")) {
            _push2(`<div class="dropdown-icon"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="flex"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          return [
            _ctx.hasSlot("icon") ? (openBlock(), createBlock("div", {
              key: 0,
              class: "dropdown-icon"
            }, [
              renderSlot(_ctx.$slots, "icon")
            ])) : createCommentVNode("", true),
            createVNode("div", { class: "flex" }, [
              renderSlot(_ctx.$slots, "default")
            ])
          ];
        }
      }),
      _: 3
    }, _parent));
  } else {
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown/TDropdownItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TDropdownItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({
  name: "TLogOutIcon"
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TLogOutIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TLogOutIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Dropdown",
  components: {
    TListItem,
    TList,
    TLogOutIcon,
    TAvatar,
    TContentCard,
    GridSection,
    AppLayout,
    TDropdown,
    TDropdownItem
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_content_card = resolveComponent("t-content-card");
  const _component_t_dropdown = resolveComponent("t-dropdown");
  const _component_t_dropdown_item = resolveComponent("t-dropdown-item");
  const _component_t_log_out_icon = resolveComponent("t-log-out-icon");
  const _component_t_avatar = resolveComponent("t-avatar");
  const _component_t_list = resolveComponent("t-list");
  const _component_t_list_item = resolveComponent("t-list-item");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Dropdowns" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Dropdowns `);
      } else {
        return [
          createTextVNode(" Dropdowns ")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Menu or multi functional buttons `);
      } else {
        return [
          createTextVNode(" Menu or multi functional buttons ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_grid_section, { col: 1 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_content_card, { width: 1 }, {
                "button-trigger": withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Simple`);
                  } else {
                    return [
                      createTextVNode("Simple")
                    ];
                  }
                }),
                subTitle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Link (Blank, Internal, External and Route) and Icons`);
                  } else {
                    return [
                      createTextVNode("Link (Blank, Internal, External and Route) and Icons")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-wrap items-center justify-center space-x-4"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_t_dropdown, {
                      color: "solid-white",
                      size: "fit"
                    }, {
                      trigger: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Fit Links `);
                        } else {
                          return [
                            createTextVNode(" Fit Links ")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_dropdown_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Menu 1`);
                              } else {
                                return [
                                  createTextVNode("Menu 1")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_dropdown_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Menu 2`);
                              } else {
                                return [
                                  createTextVNode("Menu 2")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_dropdown_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Menu 3`);
                              } else {
                                return [
                                  createTextVNode("Menu 3")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_dropdown_item, null, {
                              default: withCtx(() => [
                                createTextVNode("Menu 1")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_dropdown_item, null, {
                              default: withCtx(() => [
                                createTextVNode("Menu 2")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_dropdown_item, null, {
                              default: withCtx(() => [
                                createTextVNode("Menu 3")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_dropdown, {
                      "button-color": "purple",
                      "button-design": "outline",
                      align: "right",
                      size: "fit"
                    }, {
                      trigger: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Wide Links `);
                        } else {
                          return [
                            createTextVNode(" Wide Links ")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_dropdown_item, {
                            link: _ctx.route("alert")
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"${_scopeId5}></path></svg>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    })
                                  ]))
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Alert Component `);
                              } else {
                                return [
                                  createTextVNode(" Alert Component ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_dropdown_item, {
                            link: _ctx.route("badge")
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"${_scopeId5}></path></svg>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                    })
                                  ]))
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Badge Component `);
                              } else {
                                return [
                                  createTextVNode(" Badge Component ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_dropdown_item, {
                            link: _ctx.route("list")
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"${_scopeId5}></path></svg>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                    })
                                  ]))
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` List Component `);
                              } else {
                                return [
                                  createTextVNode(" List Component ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_dropdown_item, {
                              link: _ctx.route("alert")
                            }, {
                              icon: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                  })
                                ]))
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Alert Component ")
                              ]),
                              _: 1
                            }, 8, ["link"]),
                            createVNode(_component_t_dropdown_item, {
                              link: _ctx.route("badge")
                            }, {
                              icon: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                  })
                                ]))
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Badge Component ")
                              ]),
                              _: 1
                            }, 8, ["link"]),
                            createVNode(_component_t_dropdown_item, {
                              link: _ctx.route("list")
                            }, {
                              icon: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                  })
                                ]))
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" List Component ")
                              ]),
                              _: 1
                            }, 8, ["link"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_dropdown, {
                      size: "fit",
                      align: "right",
                      "trigger-type": "rich"
                    }, {
                      trigger: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_avatar, {
                            src: "https://i.pravatar.cc",
                            indicator: { color: "solid-green", position: "rb" }
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_avatar, {
                              src: "https://i.pravatar.cc",
                              indicator: { color: "solid-green", position: "rb" }
                            })
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="bg-white rounded-md border mt-1 overflow-hidden w-32"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_dropdown_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId5}></path></svg> Profile `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-5 h-5 inline-block",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                  ])),
                                  createTextVNode(" Profile ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_dropdown_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"${_scopeId5}></path></svg> Wallet `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-5 inline-block",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                    })
                                  ])),
                                  createTextVNode(" Wallet ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<span class="inline-flex px-2 pb-2 pt-1 -mb-1 border-t border-red-500 w-full gap-1 h-full items-center text-red-500 bg-gray-100 hover:bg-red-500 hover:text-white"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_log_out_icon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(` Logout </span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "bg-white rounded-md border mt-1 overflow-hidden w-32" }, [
                              createVNode(_component_t_dropdown_item, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-5 h-5 inline-block",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                  ])),
                                  createTextVNode(" Profile ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_dropdown_item, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-5 inline-block",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                    })
                                  ])),
                                  createTextVNode(" Wallet ")
                                ]),
                                _: 1
                              }),
                              createVNode("span", { class: "inline-flex px-2 pb-2 pt-1 -mb-1 border-t border-red-500 w-full gap-1 h-full items-center text-red-500 bg-gray-100 hover:bg-red-500 hover:text-white" }, [
                                createVNode(_component_t_log_out_icon, { class: "w-5 h-5" }),
                                createTextVNode(" Logout ")
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_dropdown, {
                      align: "right",
                      size: "fit",
                      "trigger-type": "rich"
                    }, {
                      trigger: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="flex justify-center items-center h-10 w-10 hover:bg-gray-200 rounded-md"${_scopeId4}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId4}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"${_scopeId4}></path></svg></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex justify-center items-center h-10 w-10 hover:bg-gray-200 rounded-md" }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                })
                              ]))
                            ])
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_list, { radius: 3 }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_list_item, { class: "hover:bg-red-100 hover:text-red-500 cursor-pointer text-sm" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<div class="flex items-center h-6"${_scopeId6}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId6}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${_scopeId6}></path></svg> Delete </div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "flex items-center h-6" }, [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            class: "h-5 w-5 mr-1",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor"
                                          }, [
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            })
                                          ])),
                                          createTextVNode(" Delete ")
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_t_list_item, { class: "hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<div class="flex items-center h-6"${_scopeId6}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId6}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"${_scopeId6}></path></svg> Edit </div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "flex items-center h-6" }, [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            class: "h-5 w-5 mr-1",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor"
                                          }, [
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            })
                                          ])),
                                          createTextVNode(" Edit ")
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_t_list_item, { class: "hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<div class="flex items-center h-6"${_scopeId6}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId6}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId6}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId6}></path></svg> View </div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "flex items-center h-6" }, [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            class: "h-5 w-5 mr-1",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor"
                                          }, [
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            }),
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            })
                                          ])),
                                          createTextVNode(" View ")
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_list_item, { class: "hover:bg-red-100 hover:text-red-500 cursor-pointer text-sm" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center h-6" }, [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          class: "h-5 w-5 mr-1",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                          })
                                        ])),
                                        createTextVNode(" Delete ")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_t_list_item, { class: "hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center h-6" }, [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          class: "h-5 w-5 mr-1",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                          })
                                        ])),
                                        createTextVNode(" Edit ")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_t_list_item, { class: "hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center h-6" }, [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          class: "h-5 w-5 mr-1",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                          }),
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                          })
                                        ])),
                                        createTextVNode(" View ")
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_list, { radius: 3 }, {
                              default: withCtx(() => [
                                createVNode(_component_t_list_item, { class: "hover:bg-red-100 hover:text-red-500 cursor-pointer text-sm" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center h-6" }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        class: "h-5 w-5 mr-1",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        })
                                      ])),
                                      createTextVNode(" Delete ")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_list_item, { class: "hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center h-6" }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        class: "h-5 w-5 mr-1",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        })
                                      ])),
                                      createTextVNode(" Edit ")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_list_item, { class: "hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center h-6" }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        class: "h-5 w-5 mr-1",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        }),
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        })
                                      ])),
                                      createTextVNode(" View ")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-wrap items-center justify-center space-x-4" }, [
                        createVNode(_component_t_dropdown, {
                          color: "solid-white",
                          size: "fit"
                        }, {
                          trigger: withCtx(() => [
                            createTextVNode(" Fit Links ")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_t_dropdown_item, null, {
                              default: withCtx(() => [
                                createTextVNode("Menu 1")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_dropdown_item, null, {
                              default: withCtx(() => [
                                createTextVNode("Menu 2")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_dropdown_item, null, {
                              default: withCtx(() => [
                                createTextVNode("Menu 3")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_dropdown, {
                          "button-color": "purple",
                          "button-design": "outline",
                          align: "right",
                          size: "fit"
                        }, {
                          trigger: withCtx(() => [
                            createTextVNode(" Wide Links ")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_t_dropdown_item, {
                              link: _ctx.route("alert")
                            }, {
                              icon: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                  })
                                ]))
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Alert Component ")
                              ]),
                              _: 1
                            }, 8, ["link"]),
                            createVNode(_component_t_dropdown_item, {
                              link: _ctx.route("badge")
                            }, {
                              icon: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                  })
                                ]))
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Badge Component ")
                              ]),
                              _: 1
                            }, 8, ["link"]),
                            createVNode(_component_t_dropdown_item, {
                              link: _ctx.route("list")
                            }, {
                              icon: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                  })
                                ]))
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" List Component ")
                              ]),
                              _: 1
                            }, 8, ["link"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_dropdown, {
                          size: "fit",
                          align: "right",
                          "trigger-type": "rich"
                        }, {
                          trigger: withCtx(() => [
                            createVNode(_component_t_avatar, {
                              src: "https://i.pravatar.cc",
                              indicator: { color: "solid-green", position: "rb" }
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode("div", { class: "bg-white rounded-md border mt-1 overflow-hidden w-32" }, [
                              createVNode(_component_t_dropdown_item, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-5 h-5 inline-block",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                  ])),
                                  createTextVNode(" Profile ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_dropdown_item, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-5 inline-block",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                    })
                                  ])),
                                  createTextVNode(" Wallet ")
                                ]),
                                _: 1
                              }),
                              createVNode("span", { class: "inline-flex px-2 pb-2 pt-1 -mb-1 border-t border-red-500 w-full gap-1 h-full items-center text-red-500 bg-gray-100 hover:bg-red-500 hover:text-white" }, [
                                createVNode(_component_t_log_out_icon, { class: "w-5 h-5" }),
                                createTextVNode(" Logout ")
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_dropdown, {
                          align: "right",
                          size: "fit",
                          "trigger-type": "rich"
                        }, {
                          trigger: withCtx(() => [
                            createVNode("div", { class: "flex justify-center items-center h-10 w-10 hover:bg-gray-200 rounded-md" }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                })
                              ]))
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_t_list, { radius: 3 }, {
                              default: withCtx(() => [
                                createVNode(_component_t_list_item, { class: "hover:bg-red-100 hover:text-red-500 cursor-pointer text-sm" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center h-6" }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        class: "h-5 w-5 mr-1",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        })
                                      ])),
                                      createTextVNode(" Delete ")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_list_item, { class: "hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center h-6" }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        class: "h-5 w-5 mr-1",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        })
                                      ])),
                                      createTextVNode(" Edit ")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_list_item, { class: "hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center h-6" }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        class: "h-5 w-5 mr-1",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        }),
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        })
                                      ])),
                                      createTextVNode(" View ")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_content_card, { width: 1 }, {
                  "button-trigger": withCtx(() => [
                    createTextVNode("Simple")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode("Link (Blank, Internal, External and Route) and Icons")
                  ]),
                  content: withCtx(() => [
                    createVNode("div", { class: "flex flex-wrap items-center justify-center space-x-4" }, [
                      createVNode(_component_t_dropdown, {
                        color: "solid-white",
                        size: "fit"
                      }, {
                        trigger: withCtx(() => [
                          createTextVNode(" Fit Links ")
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_t_dropdown_item, null, {
                            default: withCtx(() => [
                              createTextVNode("Menu 1")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_dropdown_item, null, {
                            default: withCtx(() => [
                              createTextVNode("Menu 2")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_dropdown_item, null, {
                            default: withCtx(() => [
                              createTextVNode("Menu 3")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_dropdown, {
                        "button-color": "purple",
                        "button-design": "outline",
                        align: "right",
                        size: "fit"
                      }, {
                        trigger: withCtx(() => [
                          createTextVNode(" Wide Links ")
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_t_dropdown_item, {
                            link: _ctx.route("alert")
                          }, {
                            icon: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                })
                              ]))
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Alert Component ")
                            ]),
                            _: 1
                          }, 8, ["link"]),
                          createVNode(_component_t_dropdown_item, {
                            link: _ctx.route("badge")
                          }, {
                            icon: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                })
                              ]))
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Badge Component ")
                            ]),
                            _: 1
                          }, 8, ["link"]),
                          createVNode(_component_t_dropdown_item, {
                            link: _ctx.route("list")
                          }, {
                            icon: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                })
                              ]))
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" List Component ")
                            ]),
                            _: 1
                          }, 8, ["link"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_dropdown, {
                        size: "fit",
                        align: "right",
                        "trigger-type": "rich"
                      }, {
                        trigger: withCtx(() => [
                          createVNode(_component_t_avatar, {
                            src: "https://i.pravatar.cc",
                            indicator: { color: "solid-green", position: "rb" }
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode("div", { class: "bg-white rounded-md border mt-1 overflow-hidden w-32" }, [
                            createVNode(_component_t_dropdown_item, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "w-5 h-5 inline-block",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  })
                                ])),
                                createTextVNode(" Profile ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_dropdown_item, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "w-5 inline-block",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                  })
                                ])),
                                createTextVNode(" Wallet ")
                              ]),
                              _: 1
                            }),
                            createVNode("span", { class: "inline-flex px-2 pb-2 pt-1 -mb-1 border-t border-red-500 w-full gap-1 h-full items-center text-red-500 bg-gray-100 hover:bg-red-500 hover:text-white" }, [
                              createVNode(_component_t_log_out_icon, { class: "w-5 h-5" }),
                              createTextVNode(" Logout ")
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_dropdown, {
                        align: "right",
                        size: "fit",
                        "trigger-type": "rich"
                      }, {
                        trigger: withCtx(() => [
                          createVNode("div", { class: "flex justify-center items-center h-10 w-10 hover:bg-gray-200 rounded-md" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                              })
                            ]))
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_t_list, { radius: 3 }, {
                            default: withCtx(() => [
                              createVNode(_component_t_list_item, { class: "hover:bg-red-100 hover:text-red-500 cursor-pointer text-sm" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center h-6" }, [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      class: "h-5 w-5 mr-1",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                      })
                                    ])),
                                    createTextVNode(" Delete ")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_list_item, { class: "hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center h-6" }, [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      class: "h-5 w-5 mr-1",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                      })
                                    ])),
                                    createTextVNode(" Edit ")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_list_item, { class: "hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center h-6" }, [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      class: "h-5 w-5 mr-1",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                      }),
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                      })
                                    ])),
                                    createTextVNode(" View ")
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_grid_section, { col: 1 }, {
            default: withCtx(() => [
              createVNode(_component_t_content_card, { width: 1 }, {
                "button-trigger": withCtx(() => [
                  createTextVNode("Simple")
                ]),
                subTitle: withCtx(() => [
                  createTextVNode("Link (Blank, Internal, External and Route) and Icons")
                ]),
                content: withCtx(() => [
                  createVNode("div", { class: "flex flex-wrap items-center justify-center space-x-4" }, [
                    createVNode(_component_t_dropdown, {
                      color: "solid-white",
                      size: "fit"
                    }, {
                      trigger: withCtx(() => [
                        createTextVNode(" Fit Links ")
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_t_dropdown_item, null, {
                          default: withCtx(() => [
                            createTextVNode("Menu 1")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_dropdown_item, null, {
                          default: withCtx(() => [
                            createTextVNode("Menu 2")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_dropdown_item, null, {
                          default: withCtx(() => [
                            createTextVNode("Menu 3")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_dropdown, {
                      "button-color": "purple",
                      "button-design": "outline",
                      align: "right",
                      size: "fit"
                    }, {
                      trigger: withCtx(() => [
                        createTextVNode(" Wide Links ")
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_t_dropdown_item, {
                          link: _ctx.route("alert")
                        }, {
                          icon: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                              })
                            ]))
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Alert Component ")
                          ]),
                          _: 1
                        }, 8, ["link"]),
                        createVNode(_component_t_dropdown_item, {
                          link: _ctx.route("badge")
                        }, {
                          icon: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                              })
                            ]))
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Badge Component ")
                          ]),
                          _: 1
                        }, 8, ["link"]),
                        createVNode(_component_t_dropdown_item, {
                          link: _ctx.route("list")
                        }, {
                          icon: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              })
                            ]))
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" List Component ")
                          ]),
                          _: 1
                        }, 8, ["link"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_dropdown, {
                      size: "fit",
                      align: "right",
                      "trigger-type": "rich"
                    }, {
                      trigger: withCtx(() => [
                        createVNode(_component_t_avatar, {
                          src: "https://i.pravatar.cc",
                          indicator: { color: "solid-green", position: "rb" }
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-white rounded-md border mt-1 overflow-hidden w-32" }, [
                          createVNode(_component_t_dropdown_item, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-5 h-5 inline-block",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ])),
                              createTextVNode(" Profile ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_dropdown_item, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-5 inline-block",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                })
                              ])),
                              createTextVNode(" Wallet ")
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "inline-flex px-2 pb-2 pt-1 -mb-1 border-t border-red-500 w-full gap-1 h-full items-center text-red-500 bg-gray-100 hover:bg-red-500 hover:text-white" }, [
                            createVNode(_component_t_log_out_icon, { class: "w-5 h-5" }),
                            createTextVNode(" Logout ")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_dropdown, {
                      align: "right",
                      size: "fit",
                      "trigger-type": "rich"
                    }, {
                      trigger: withCtx(() => [
                        createVNode("div", { class: "flex justify-center items-center h-10 w-10 hover:bg-gray-200 rounded-md" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-6 w-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            })
                          ]))
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_t_list, { radius: 3 }, {
                          default: withCtx(() => [
                            createVNode(_component_t_list_item, { class: "hover:bg-red-100 hover:text-red-500 cursor-pointer text-sm" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center h-6" }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-5 w-5 mr-1",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    })
                                  ])),
                                  createTextVNode(" Delete ")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, { class: "hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center h-6" }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-5 w-5 mr-1",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    })
                                  ])),
                                  createTextVNode(" Edit ")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, { class: "hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center h-6" }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-5 w-5 mr-1",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    }),
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    })
                                  ])),
                                  createTextVNode(" View ")
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Dropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Dropdown as default
};

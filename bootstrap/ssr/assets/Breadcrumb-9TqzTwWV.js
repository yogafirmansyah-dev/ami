import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-CbW7EXnn.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TBreadcrumb } from "./TBreadcrumb-C1mZMGtj.js";
import { d as _sfc_main$1, T as TAlert } from "./windowSizeCalculator-EVN4qZjG.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TDropdown-BaNvbUUI.js";
import "./TAvatar-rvhW0AFR.js";
import "./darkMode-BsM-iRm5.js";
library.add(faHome, faPlusCircle);
const _sfc_main = defineComponent({
  name: "Breadcrumb",
  components: {
    TAlert,
    AppLayout,
    GridSection,
    TBreadcrumb,
    TButton: _sfc_main$1
  },
  setup() {
    const breadcrumbs = [
      { key: "home", label: "Home", link: "/", active: false },
      { key: "department", label: "Departments", link: "/department", active: false },
      { key: "new-department", label: "New Department", link: "", active: true, activeColor: "solid-red" }
    ];
    return { breadcrumbs };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_breadcrumb = resolveComponent("t-breadcrumb");
  const _component_icon = resolveComponent("icon");
  const _component_t_button = resolveComponent("t-button");
  const _component_t_alert = resolveComponent("t-alert");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Breadcrumb" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Breadcrumb`);
      } else {
        return [
          createTextVNode("Breadcrumb")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`2 Different breadcrumbs style`);
      } else {
        return [
          createTextVNode("2 Different breadcrumbs style")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_grid_section, {
          class: "hidden md:block",
          col: 1,
          gap: 8
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(["filled", "block"], (design) => {
                _push3(`<div${_scopeId2}><!--[-->`);
                ssrRenderList(["white", "white", "black", "purple"], (color, index) => {
                  _push3(ssrRenderComponent(_component_t_breadcrumb, {
                    design,
                    color,
                    breadcrumbs: _ctx.breadcrumbs,
                    class: "mb-4",
                    position: index % 2 === 0 ? "left" : "right",
                    key: color
                  }, {
                    home: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (props.label === "Home") {
                          _push4(ssrRenderComponent(_component_icon, { icon: "home" }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          props.label === "Home" ? (openBlock(), createBlock(_component_icon, {
                            key: 0,
                            icon: "home"
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    subContent: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (index === 0) {
                          _push4(ssrRenderComponent(_component_t_button, {
                            color: "green",
                            size: "sm"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_icon, {
                                  icon: "plus-circle",
                                  size: "xs"
                                }, null, _parent5, _scopeId4));
                                _push5(` Add Button `);
                              } else {
                                return [
                                  createVNode(_component_icon, {
                                    icon: "plus-circle",
                                    size: "xs"
                                  }),
                                  createTextVNode(" Add Button ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (index === 2) {
                          _push4(`<span${_scopeId3}>Alternative Title</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          index === 0 ? (openBlock(), createBlock(_component_t_button, {
                            key: 0,
                            color: "green",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_icon, {
                                icon: "plus-circle",
                                size: "xs"
                              }),
                              createTextVNode(" Add Button ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          index === 2 ? (openBlock(), createBlock("span", { key: 1 }, "Alternative Title")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]--></div>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(Fragment, null, renderList(["filled", "block"], (design) => {
                  return createVNode("div", { key: design }, [
                    (openBlock(), createBlock(Fragment, null, renderList(["white", "white", "black", "purple"], (color, index) => {
                      return createVNode(_component_t_breadcrumb, {
                        design,
                        color,
                        breadcrumbs: _ctx.breadcrumbs,
                        class: "mb-4",
                        position: index % 2 === 0 ? "left" : "right",
                        key: color
                      }, {
                        home: withCtx(({ props }) => [
                          props.label === "Home" ? (openBlock(), createBlock(_component_icon, {
                            key: 0,
                            icon: "home"
                          })) : createCommentVNode("", true)
                        ]),
                        subContent: withCtx(() => [
                          index === 0 ? (openBlock(), createBlock(_component_t_button, {
                            key: 0,
                            color: "green",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_icon, {
                                icon: "plus-circle",
                                size: "xs"
                              }),
                              createTextVNode(" Add Button ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          index === 2 ? (openBlock(), createBlock("span", { key: 1 }, "Alternative Title")) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["design", "color", "breadcrumbs", "position"]);
                    }), 64))
                  ]);
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_t_alert, {
          class: "block md:hidden",
          color: "red"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`The breakcrumb component works only on the large screens. If you want to see how ist works, you should use a large screen bigger than 728px `);
            } else {
              return [
                createTextVNode("The breakcrumb component works only on the large screens. If you want to see how ist works, you should use a large screen bigger than 728px ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_grid_section, {
            class: "hidden md:block",
            col: 1,
            gap: 8
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(Fragment, null, renderList(["filled", "block"], (design) => {
                return createVNode("div", { key: design }, [
                  (openBlock(), createBlock(Fragment, null, renderList(["white", "white", "black", "purple"], (color, index) => {
                    return createVNode(_component_t_breadcrumb, {
                      design,
                      color,
                      breadcrumbs: _ctx.breadcrumbs,
                      class: "mb-4",
                      position: index % 2 === 0 ? "left" : "right",
                      key: color
                    }, {
                      home: withCtx(({ props }) => [
                        props.label === "Home" ? (openBlock(), createBlock(_component_icon, {
                          key: 0,
                          icon: "home"
                        })) : createCommentVNode("", true)
                      ]),
                      subContent: withCtx(() => [
                        index === 0 ? (openBlock(), createBlock(_component_t_button, {
                          key: 0,
                          color: "green",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_icon, {
                              icon: "plus-circle",
                              size: "xs"
                            }),
                            createTextVNode(" Add Button ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        index === 2 ? (openBlock(), createBlock("span", { key: 1 }, "Alternative Title")) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["design", "color", "breadcrumbs", "position"]);
                  }), 64))
                ]);
              }), 64))
            ]),
            _: 1
          }),
          createVNode(_component_t_alert, {
            class: "block md:hidden",
            color: "red"
          }, {
            default: withCtx(() => [
              createTextVNode("The breakcrumb component works only on the large screens. If you want to see how ist works, you should use a large screen bigger than 728px ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Breadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Breadcrumb as default
};

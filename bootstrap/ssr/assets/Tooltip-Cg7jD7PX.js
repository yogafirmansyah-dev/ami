import { A as AppLayout } from "./AppLayout-D0TyJNRu.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TContentCard } from "./TContentCard-BkuMOsLs.js";
import { T as TTooltip } from "./TTooltip-DEROIMmS.js";
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./TButton-oXLR37ud.js";
import "./windowSizeCalculator-4-m3qk2a.js";
import "./TDropdown-8pNOPgDY.js";
import "./TChevronDownIcon-fGhz3Hz_.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-Cw8URzx6.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  name: "Tooltip",
  components: { AppLayout, GridSection, TContentCard, TTooltip }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_content_card = resolveComponent("t-content-card");
  const _component_t_tooltip = resolveComponent("t-tooltip");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tooltips`);
      } else {
        return [
          createTextVNode("Tooltips")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Smart and fast infos in the line`);
      } else {
        return [
          createTextVNode("Smart and fast infos in the line")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_grid_section, {
          col: 1,
          gap: 4
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_content_card, { width: 1 }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
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
                    _push4(`Left, Top, Right and Bottom Positions`);
                  } else {
                    return [
                      createTextVNode("Left, Top, Right and Bottom Positions")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-wrap space-x-8 dark:text-slate-100 mt-8"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_t_tooltip, { position: "top" }, {
                      boxContent: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Hello, I&#39;m at the top`);
                        } else {
                          return [
                            createTextVNode("Hello, I'm at the top")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Click me - Top `);
                        } else {
                          return [
                            createTextVNode(" Click me - Top ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_tooltip, {
                      position: "bottom",
                      border: false
                    }, {
                      boxContent: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Hello, I&#39;m at the bottom`);
                        } else {
                          return [
                            createTextVNode("Hello, I'm at the bottom")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Click me - Bottom `);
                        } else {
                          return [
                            createTextVNode(" Click me - Bottom ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_tooltip, { position: "left" }, {
                      boxContent: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Hello, I&#39;m at the left`);
                        } else {
                          return [
                            createTextVNode("Hello, I'm at the left")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Click me - Left `);
                        } else {
                          return [
                            createTextVNode(" Click me - Left ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_tooltip, {
                      position: "right",
                      border: false
                    }, {
                      boxContent: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Hello, I&#39;m at the right`);
                        } else {
                          return [
                            createTextVNode("Hello, I'm at the right")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Click me - Right `);
                        } else {
                          return [
                            createTextVNode(" Click me - Right ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-wrap space-x-8 dark:text-slate-100 mt-8" }, [
                        createVNode(_component_t_tooltip, { position: "top" }, {
                          boxContent: withCtx(() => [
                            createTextVNode("Hello, I'm at the top")
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Click me - Top ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_tooltip, {
                          position: "bottom",
                          border: false
                        }, {
                          boxContent: withCtx(() => [
                            createTextVNode("Hello, I'm at the bottom")
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Click me - Bottom ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_tooltip, { position: "left" }, {
                          boxContent: withCtx(() => [
                            createTextVNode("Hello, I'm at the left")
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Click me - Left ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_tooltip, {
                          position: "right",
                          border: false
                        }, {
                          boxContent: withCtx(() => [
                            createTextVNode("Hello, I'm at the right")
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Click me - Right ")
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
                  title: withCtx(() => [
                    createTextVNode("Simple")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode("Left, Top, Right and Bottom Positions")
                  ]),
                  content: withCtx(() => [
                    createVNode("div", { class: "flex flex-wrap space-x-8 dark:text-slate-100 mt-8" }, [
                      createVNode(_component_t_tooltip, { position: "top" }, {
                        boxContent: withCtx(() => [
                          createTextVNode("Hello, I'm at the top")
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Click me - Top ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_tooltip, {
                        position: "bottom",
                        border: false
                      }, {
                        boxContent: withCtx(() => [
                          createTextVNode("Hello, I'm at the bottom")
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Click me - Bottom ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_tooltip, { position: "left" }, {
                        boxContent: withCtx(() => [
                          createTextVNode("Hello, I'm at the left")
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Click me - Left ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_tooltip, {
                        position: "right",
                        border: false
                      }, {
                        boxContent: withCtx(() => [
                          createTextVNode("Hello, I'm at the right")
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Click me - Right ")
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
          createVNode(_component_grid_section, {
            col: 1,
            gap: 4
          }, {
            default: withCtx(() => [
              createVNode(_component_t_content_card, { width: 1 }, {
                title: withCtx(() => [
                  createTextVNode("Simple")
                ]),
                subTitle: withCtx(() => [
                  createTextVNode("Left, Top, Right and Bottom Positions")
                ]),
                content: withCtx(() => [
                  createVNode("div", { class: "flex flex-wrap space-x-8 dark:text-slate-100 mt-8" }, [
                    createVNode(_component_t_tooltip, { position: "top" }, {
                      boxContent: withCtx(() => [
                        createTextVNode("Hello, I'm at the top")
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Click me - Top ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_tooltip, {
                      position: "bottom",
                      border: false
                    }, {
                      boxContent: withCtx(() => [
                        createTextVNode("Hello, I'm at the bottom")
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Click me - Bottom ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_tooltip, { position: "left" }, {
                      boxContent: withCtx(() => [
                        createTextVNode("Hello, I'm at the left")
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Click me - Left ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_tooltip, {
                      position: "right",
                      border: false
                    }, {
                      boxContent: withCtx(() => [
                        createTextVNode("Hello, I'm at the right")
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Click me - Right ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Tooltip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Tooltip = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Tooltip as default
};

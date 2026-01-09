import { A as AppLayout } from "./AppLayout-C9UC9tJn.js";
import { T as TContentCard } from "./TContentCard-CDGc_Lhz.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TCashIcon } from "./TCashIcon-CWuKcSJK.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./windowSizeCalculator-ej9CZPp5.js";
import "./TDropdown-DbVD8e4r.js";
import "vue-i18n";
import "./displayLanguage-CeV33Cax.js";
import "pinia";
import "./TAvatar-a0UbdIFE.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  name: "InputGroup",
  components: { TCashIcon, AppLayout, ContentCard: TContentCard, GridSection, TInputGroup, TInputText }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_content_card = resolveComponent("content-card");
  const _component_t_input_group = resolveComponent("t-input-group");
  const _component_t_input_text = resolveComponent("t-input-text");
  const _component_t_cash_icon = resolveComponent("t-cash-icon");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Input Group `);
      } else {
        return [
          createTextVNode(" Input Group ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_grid_section, {
          "col-tablet": 2,
          "col-desktop": 4
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_content_card, {
                radius: 3,
                width: 1
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` With Label Prop `);
                  } else {
                    return [
                      createTextVNode(" With Label Prop ")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      label: "Text Label",
                      "label-for": "name1"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "name1",
                            placeholder: "I'm a placeholder text"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "name1",
                              placeholder: "I'm a placeholder text"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_input_group, {
                        label: "Text Label",
                        "label-for": "name1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "name1",
                            placeholder: "I'm a placeholder text"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_content_card, {
                radius: 3,
                width: 1
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` With Label Slot `);
                  } else {
                    return [
                      createTextVNode(" With Label Slot ")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      "label-for": "name2",
                      "sub-label": "Cash only"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<template slot="label"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_cash_icon, { class: "w-5 h-5 mr-1" }, null, _parent5, _scopeId4));
                          _push5(` Label Slot </template>`);
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "name2",
                            placeholder: "I'm a placeholder text"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode("template", { slot: "label" }, [
                              createVNode(_component_t_cash_icon, { class: "w-5 h-5 mr-1" }),
                              createTextVNode(" Label Slot ")
                            ]),
                            createVNode(_component_t_input_text, {
                              id: "name2",
                              placeholder: "I'm a placeholder text"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_input_group, {
                        "label-for": "name2",
                        "sub-label": "Cash only"
                      }, {
                        default: withCtx(() => [
                          createVNode("template", { slot: "label" }, [
                            createVNode(_component_t_cash_icon, { class: "w-5 h-5 mr-1" }),
                            createTextVNode(" Label Slot ")
                          ]),
                          createVNode(_component_t_input_text, {
                            id: "name2",
                            placeholder: "I'm a placeholder text"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_content_card, {
                radius: 3,
                width: 1
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` With Colorful Sub Label `);
                  } else {
                    return [
                      createTextVNode(" With Colorful Sub Label ")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      label: "Text Label",
                      "label-for": "name3",
                      "sub-label": "Cash only",
                      "sub-label-color": "solid-green"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "name3",
                            placeholder: "I'm a placeholder text"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "name3",
                              placeholder: "I'm a placeholder text"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_input_group, {
                        label: "Text Label",
                        "label-for": "name3",
                        "sub-label": "Cash only",
                        "sub-label-color": "solid-green"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "name3",
                            placeholder: "I'm a placeholder text"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_content_card, {
                radius: 3,
                width: 1
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` With Error Message `);
                  } else {
                    return [
                      createTextVNode(" With Error Message ")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      error: "Please enter numerical value",
                      label: "Text Label",
                      "label-for": "name4",
                      "sub-label": "Cash only",
                      "sub-label-color": "solid-yellow"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "name4",
                            placeholder: "I'm a placeholder text",
                            value: "Hi, I'm a prefilled text"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "name4",
                              placeholder: "I'm a placeholder text",
                              value: "Hi, I'm a prefilled text"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_input_group, {
                        error: "Please enter numerical value",
                        label: "Text Label",
                        "label-for": "name4",
                        "sub-label": "Cash only",
                        "sub-label-color": "solid-yellow"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "name4",
                            placeholder: "I'm a placeholder text",
                            value: "Hi, I'm a prefilled text"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_content_card, {
                  radius: 3,
                  width: 1
                }, {
                  title: withCtx(() => [
                    createTextVNode(" With Label Prop ")
                  ]),
                  content: withCtx(() => [
                    createVNode(_component_t_input_group, {
                      label: "Text Label",
                      "label-for": "name1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "name1",
                          placeholder: "I'm a placeholder text"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_content_card, {
                  radius: 3,
                  width: 1
                }, {
                  title: withCtx(() => [
                    createTextVNode(" With Label Slot ")
                  ]),
                  content: withCtx(() => [
                    createVNode(_component_t_input_group, {
                      "label-for": "name2",
                      "sub-label": "Cash only"
                    }, {
                      default: withCtx(() => [
                        createVNode("template", { slot: "label" }, [
                          createVNode(_component_t_cash_icon, { class: "w-5 h-5 mr-1" }),
                          createTextVNode(" Label Slot ")
                        ]),
                        createVNode(_component_t_input_text, {
                          id: "name2",
                          placeholder: "I'm a placeholder text"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_content_card, {
                  radius: 3,
                  width: 1
                }, {
                  title: withCtx(() => [
                    createTextVNode(" With Colorful Sub Label ")
                  ]),
                  content: withCtx(() => [
                    createVNode(_component_t_input_group, {
                      label: "Text Label",
                      "label-for": "name3",
                      "sub-label": "Cash only",
                      "sub-label-color": "solid-green"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "name3",
                          placeholder: "I'm a placeholder text"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_content_card, {
                  radius: 3,
                  width: 1
                }, {
                  title: withCtx(() => [
                    createTextVNode(" With Error Message ")
                  ]),
                  content: withCtx(() => [
                    createVNode(_component_t_input_group, {
                      error: "Please enter numerical value",
                      label: "Text Label",
                      "label-for": "name4",
                      "sub-label": "Cash only",
                      "sub-label-color": "solid-yellow"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "name4",
                          placeholder: "I'm a placeholder text",
                          value: "Hi, I'm a prefilled text"
                        })
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_grid_section, {
            "col-tablet": 2,
            "col-desktop": 4
          }, {
            default: withCtx(() => [
              createVNode(_component_content_card, {
                radius: 3,
                width: 1
              }, {
                title: withCtx(() => [
                  createTextVNode(" With Label Prop ")
                ]),
                content: withCtx(() => [
                  createVNode(_component_t_input_group, {
                    label: "Text Label",
                    "label-for": "name1"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "name1",
                        placeholder: "I'm a placeholder text"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_content_card, {
                radius: 3,
                width: 1
              }, {
                title: withCtx(() => [
                  createTextVNode(" With Label Slot ")
                ]),
                content: withCtx(() => [
                  createVNode(_component_t_input_group, {
                    "label-for": "name2",
                    "sub-label": "Cash only"
                  }, {
                    default: withCtx(() => [
                      createVNode("template", { slot: "label" }, [
                        createVNode(_component_t_cash_icon, { class: "w-5 h-5 mr-1" }),
                        createTextVNode(" Label Slot ")
                      ]),
                      createVNode(_component_t_input_text, {
                        id: "name2",
                        placeholder: "I'm a placeholder text"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_content_card, {
                radius: 3,
                width: 1
              }, {
                title: withCtx(() => [
                  createTextVNode(" With Colorful Sub Label ")
                ]),
                content: withCtx(() => [
                  createVNode(_component_t_input_group, {
                    label: "Text Label",
                    "label-for": "name3",
                    "sub-label": "Cash only",
                    "sub-label-color": "solid-green"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "name3",
                        placeholder: "I'm a placeholder text"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_content_card, {
                radius: 3,
                width: 1
              }, {
                title: withCtx(() => [
                  createTextVNode(" With Error Message ")
                ]),
                content: withCtx(() => [
                  createVNode(_component_t_input_group, {
                    error: "Please enter numerical value",
                    label: "Text Label",
                    "label-for": "name4",
                    "sub-label": "Cash only",
                    "sub-label-color": "solid-yellow"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "name4",
                        placeholder: "I'm a placeholder text",
                        value: "Hi, I'm a prefilled text"
                      })
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/FormElements/InputGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  InputGroup as default
};

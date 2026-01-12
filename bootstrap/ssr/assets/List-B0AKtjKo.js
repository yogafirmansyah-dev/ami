import { T as TBadge, A as AppLayout, a as TToastr } from "./AppLayout-BkpuvVky.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TList, a as TListItem } from "./TListItem-DHyz0dl0.js";
import { a as _sfc_main$1 } from "./TButton-oXLR37ud.js";
import { T as TAvatar } from "./TAvatar-Cw8URzx6.js";
import { T as TComponentStyleSelector } from "./TComponentStyleSelector-GmPZoTkx.js";
import { T as TContentCard } from "./TContentCard-BkuMOsLs.js";
import { T as TInputCheckBox } from "./TInputCheckBox-eDtuF0je.js";
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, Transition, withDirectives, vShow, reactive, ref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./windowSizeCalculator-4-m3qk2a.js";
import "./TDropdown-8pNOPgDY.js";
import "./TChevronDownIcon-fGhz3Hz_.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "./TCheckIcon-CWPVq9Ck.js";
import "./TInputSelect-BY60CBa7.js";
import "./TInputText-CyR_XUuU.js";
const _sfc_main = defineComponent({
  name: "List",
  components: {
    TInputCheckBox,
    TContentCard,
    TToastr,
    GridSection,
    TListItem,
    TList,
    AppLayout,
    TBadge,
    TButton: _sfc_main$1,
    TAvatar,
    TComponentStyleSelector
  },
  setup() {
    const selectedData = reactive({
      color: "blue",
      design: "filled",
      border: true,
      separated: false
    });
    const selectedCheckbox = ref(["Cheery", "Banana", "Strawberry"]);
    const selectData = reactive([
      {
        key: "design",
        label: "Design",
        options: [
          { key: "filled", label: "Design: Filled" },
          { key: "light", label: "Design: Light" },
          { key: "outline", label: "Design: Outline" },
          { key: "elegant", label: "Design: Elegant" },
          { key: "simple", label: "Design: Simple" }
        ]
      },
      {
        key: "border",
        label: "Border",
        options: [
          { key: true, label: "Border: True" },
          { key: false, label: "Border: False" }
        ]
      },
      {
        key: "separated",
        label: "Separated",
        options: [
          { key: true, label: "Separated: True" },
          { key: false, label: "Separated: False" }
        ]
      }
    ]);
    return { selectedData, selectedCheckbox, selectData };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_t_component_style_selector = resolveComponent("t-component-style-selector");
  const _component_t_toastr = resolveComponent("t-toastr");
  const _component_t_content_card = resolveComponent("t-content-card");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_list = resolveComponent("t-list");
  const _component_t_list_item = resolveComponent("t-list-item");
  const _component_t_input_check_box = resolveComponent("t-input-check-box");
  const _component_icon = resolveComponent("icon");
  const _component_t_avatar = resolveComponent("t-avatar");
  const _component_t_badge = resolveComponent("t-badge");
  const _component_t_button = resolveComponent("t-button");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Lists" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Lists`);
      } else {
        return [
          createTextVNode("Lists")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Content items, shopping lists or todo list`);
      } else {
        return [
          createTextVNode("Content items, shopping lists or todo list")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_t_component_style_selector, {
          class: "mb-4",
          modelValue: _ctx.selectedData,
          "onUpdate:modelValue": ($event) => _ctx.selectedData = $event,
          "select-data": _ctx.selectData
        }, null, _parent2, _scopeId));
        _push2(``);
        _push2(ssrRenderComponent(_component_t_toastr, {
          id: "alert",
          style: [
            _ctx.selectedData.design === "outline" || _ctx.selectedData.design === "elegant" ? null : { display: "none" },
            { "z-index": "999999" }
          ],
          color: "solid-white",
          class: "bg-opacity-75 text-gray-700 mb-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex flex-col" data-v-474770c5${_scopeId2}><b class="text-yellow-700 font-semibold" data-v-474770c5${_scopeId2}>Warning</b> Outline and Elegant designs defaulted have border, and it&#39;s not an option </div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("b", { class: "text-yellow-700 font-semibold" }, "Warning"),
                  createTextVNode(" Outline and Elegant designs defaulted have border, and it's not an option ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_t_content_card, null, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Samples `);
            } else {
              return [
                createTextVNode(" Samples ")
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_grid_section, {
                "col-tablet": 2,
                "col-laptop": 3
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_list, {
                      color: _ctx.selectedData.color,
                      design: _ctx.selectedData.design,
                      border: _ctx.selectedData.border,
                      radius: 0,
                      separated: _ctx.selectedData.separated
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_list_item, {
                            active: _ctx.selectedCheckbox.includes("Cheery")
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_input_check_box, {
                                  modelValue: _ctx.selectedCheckbox,
                                  "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                  "input-value": "Cheery",
                                  color: _ctx.selectedData.color
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_input_check_box, {
                                    modelValue: _ctx.selectedCheckbox,
                                    "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                    "input-value": "Cheery",
                                    color: _ctx.selectedData.color
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Cheery `);
                              } else {
                                return [
                                  createTextVNode(" Cheery ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, {
                            active: _ctx.selectedCheckbox.includes("Banana")
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_input_check_box, {
                                  modelValue: _ctx.selectedCheckbox,
                                  "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                  "input-value": "Banana",
                                  color: _ctx.selectedData.color
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_input_check_box, {
                                    modelValue: _ctx.selectedCheckbox,
                                    "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                    "input-value": "Banana",
                                    color: _ctx.selectedData.color
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Banana `);
                              } else {
                                return [
                                  createTextVNode(" Banana ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, {
                            active: _ctx.selectedCheckbox.includes("Strawberry")
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_input_check_box, {
                                  modelValue: _ctx.selectedCheckbox,
                                  "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                  "input-value": "Strawberry",
                                  color: _ctx.selectedData.color
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_input_check_box, {
                                    modelValue: _ctx.selectedCheckbox,
                                    "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                    "input-value": "Strawberry",
                                    color: _ctx.selectedData.color
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Strawberry `);
                              } else {
                                return [
                                  createTextVNode(" Strawberry ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, {
                            active: _ctx.selectedCheckbox.includes("Lemon")
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_input_check_box, {
                                  modelValue: _ctx.selectedCheckbox,
                                  "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                  "input-value": "Lemon",
                                  color: _ctx.selectedData.color
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_input_check_box, {
                                    modelValue: _ctx.selectedCheckbox,
                                    "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                    "input-value": "Lemon",
                                    color: _ctx.selectedData.color
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Lemon `);
                              } else {
                                return [
                                  createTextVNode(" Lemon ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_list_item, {
                              active: _ctx.selectedCheckbox.includes("Cheery")
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_t_input_check_box, {
                                  modelValue: _ctx.selectedCheckbox,
                                  "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                  "input-value": "Cheery",
                                  color: _ctx.selectedData.color
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Cheery ")
                              ]),
                              _: 1
                            }, 8, ["active"]),
                            createVNode(_component_t_list_item, {
                              active: _ctx.selectedCheckbox.includes("Banana")
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_t_input_check_box, {
                                  modelValue: _ctx.selectedCheckbox,
                                  "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                  "input-value": "Banana",
                                  color: _ctx.selectedData.color
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Banana ")
                              ]),
                              _: 1
                            }, 8, ["active"]),
                            createVNode(_component_t_list_item, {
                              active: _ctx.selectedCheckbox.includes("Strawberry")
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_t_input_check_box, {
                                  modelValue: _ctx.selectedCheckbox,
                                  "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                  "input-value": "Strawberry",
                                  color: _ctx.selectedData.color
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Strawberry ")
                              ]),
                              _: 1
                            }, 8, ["active"]),
                            createVNode(_component_t_list_item, {
                              active: _ctx.selectedCheckbox.includes("Lemon")
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_t_input_check_box, {
                                  modelValue: _ctx.selectedCheckbox,
                                  "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                  "input-value": "Lemon",
                                  color: _ctx.selectedData.color
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Lemon ")
                              ]),
                              _: 1
                            }, 8, ["active"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_list, {
                      color: _ctx.selectedData.color,
                      design: _ctx.selectedData.design,
                      border: _ctx.selectedData.border,
                      separated: _ctx.selectedData.separated,
                      radius: 3
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Name:`);
                              } else {
                                return [
                                  createTextVNode("Name:")
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Sinan Aydoğan`);
                              } else {
                                return [
                                  createTextVNode("Sinan Aydoğan")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Title:`);
                              } else {
                                return [
                                  createTextVNode("Title:")
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Developer`);
                              } else {
                                return [
                                  createTextVNode("Developer")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Birthday:`);
                              } else {
                                return [
                                  createTextVNode("Birthday:")
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`1987`);
                              } else {
                                return [
                                  createTextVNode("1987")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Country:`);
                              } else {
                                return [
                                  createTextVNode("Country:")
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Turkey`);
                              } else {
                                return [
                                  createTextVNode("Turkey")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_list_item, null, {
                              title: withCtx(() => [
                                createTextVNode("Name:")
                              ]),
                              default: withCtx(() => [
                                createTextVNode("Sinan Aydoğan")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, null, {
                              title: withCtx(() => [
                                createTextVNode("Title:")
                              ]),
                              default: withCtx(() => [
                                createTextVNode("Developer")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, null, {
                              title: withCtx(() => [
                                createTextVNode("Birthday:")
                              ]),
                              default: withCtx(() => [
                                createTextVNode("1987")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, null, {
                              title: withCtx(() => [
                                createTextVNode("Country:")
                              ]),
                              default: withCtx(() => [
                                createTextVNode("Turkey")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_list, {
                      color: _ctx.selectedData.color,
                      design: _ctx.selectedData.design,
                      border: _ctx.selectedData.border,
                      radius: 5,
                      separated: _ctx.selectedData.separated
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_icon, { icon: ["fab", "vuejs"] }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_icon, { icon: ["fab", "vuejs"] })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`VueJS components inside`);
                              } else {
                                return [
                                  createTextVNode("VueJS components inside")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_icon, { icon: ["fab", "js"] }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_icon, { icon: ["fab", "js"] })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Powered by JavaScript`);
                              } else {
                                return [
                                  createTextVNode("Powered by JavaScript")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_icon, { icon: ["fab", "css3"] }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_icon, { icon: ["fab", "css3"] })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Polished with TailwindCSS`);
                              } else {
                                return [
                                  createTextVNode("Polished with TailwindCSS")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_icon, { icon: "chart-bar" }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_icon, { icon: "chart-bar" })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Detailed some graphics with ChartJS`);
                              } else {
                                return [
                                  createTextVNode("Detailed some graphics with ChartJS")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_list_item, null, {
                              icon: withCtx(() => [
                                createVNode(_component_icon, { icon: ["fab", "vuejs"] })
                              ]),
                              default: withCtx(() => [
                                createTextVNode("VueJS components inside")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, null, {
                              icon: withCtx(() => [
                                createVNode(_component_icon, { icon: ["fab", "js"] })
                              ]),
                              default: withCtx(() => [
                                createTextVNode("Powered by JavaScript")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, null, {
                              icon: withCtx(() => [
                                createVNode(_component_icon, { icon: ["fab", "css3"] })
                              ]),
                              default: withCtx(() => [
                                createTextVNode("Polished with TailwindCSS")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, null, {
                              icon: withCtx(() => [
                                createVNode(_component_icon, { icon: "chart-bar" })
                              ]),
                              default: withCtx(() => [
                                createTextVNode("Detailed some graphics with ChartJS")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_list, {
                      color: _ctx.selectedData.color,
                      design: _ctx.selectedData.design,
                      border: _ctx.selectedData.border,
                      radius: 3,
                      separated: _ctx.selectedData.separated
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=1"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_avatar, {
                                    radius: 8,
                                    size: 2,
                                    src: "https://i.pravatar.cc/150?u=1"
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Sinem Aydoğan`);
                              } else {
                                return [
                                  createTextVNode("Sinem Aydoğan")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=2"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_avatar, {
                                    radius: 8,
                                    size: 2,
                                    src: "https://i.pravatar.cc/150?u=2"
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Zuhal Taşçı`);
                              } else {
                                return [
                                  createTextVNode("Zuhal Taşçı")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=3"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_avatar, {
                                    radius: 8,
                                    size: 2,
                                    src: "https://i.pravatar.cc/150?u=3"
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Ayşe Gürel`);
                              } else {
                                return [
                                  createTextVNode("Ayşe Gürel")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=4"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_avatar, {
                                    radius: 8,
                                    size: 2,
                                    src: "https://i.pravatar.cc/150?u=4"
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Günel Deren`);
                              } else {
                                return [
                                  createTextVNode("Günel Deren")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_list_item, null, {
                              icon: withCtx(() => [
                                createVNode(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=1"
                                })
                              ]),
                              default: withCtx(() => [
                                createTextVNode("Sinem Aydoğan")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, null, {
                              icon: withCtx(() => [
                                createVNode(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=2"
                                })
                              ]),
                              default: withCtx(() => [
                                createTextVNode("Zuhal Taşçı")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, null, {
                              icon: withCtx(() => [
                                createVNode(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=3"
                                })
                              ]),
                              default: withCtx(() => [
                                createTextVNode("Ayşe Gürel")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, null, {
                              icon: withCtx(() => [
                                createVNode(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=4"
                                })
                              ]),
                              default: withCtx(() => [
                                createTextVNode("Günel Deren")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_list, {
                      color: _ctx.selectedData.color,
                      design: _ctx.selectedData.design,
                      border: _ctx.selectedData.border,
                      radius: 3,
                      separated: _ctx.selectedData.separated
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Users `);
                              } else {
                                return [
                                  createTextVNode(" Users ")
                                ];
                              }
                            }),
                            secondContent: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_badge, { radius: 5 }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`120`);
                                    } else {
                                      return [
                                        createTextVNode("120")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_badge, { radius: 5 }, {
                                    default: withCtx(() => [
                                      createTextVNode("120")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Materials`);
                              } else {
                                return [
                                  createTextVNode("Materials")
                                ];
                              }
                            }),
                            secondContent: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_badge, {
                                  radius: 5,
                                  color: "red"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`6 pcs.`);
                                    } else {
                                      return [
                                        createTextVNode("6 pcs.")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_badge, {
                                    radius: 5,
                                    color: "red"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("6 pcs.")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Costs`);
                              } else {
                                return [
                                  createTextVNode("Costs")
                                ];
                              }
                            }),
                            secondContent: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_button, {
                                  radius: 2,
                                  design: "light",
                                  border: "",
                                  color: _ctx.selectedData.color,
                                  size: "small"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`+ Add new cash `);
                                    } else {
                                      return [
                                        createTextVNode("+ Add new cash ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_button, {
                                    radius: 2,
                                    design: "light",
                                    border: "",
                                    color: _ctx.selectedData.color,
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("+ Add new cash ")
                                    ]),
                                    _: 1
                                  }, 8, ["color"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_list_item, null, {
                              default: withCtx(() => [
                                createTextVNode(" Users ")
                              ]),
                              secondContent: withCtx(() => [
                                createVNode(_component_t_badge, { radius: 5 }, {
                                  default: withCtx(() => [
                                    createTextVNode("120")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, null, {
                              default: withCtx(() => [
                                createTextVNode("Materials")
                              ]),
                              secondContent: withCtx(() => [
                                createVNode(_component_t_badge, {
                                  radius: 5,
                                  color: "red"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("6 pcs.")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, null, {
                              default: withCtx(() => [
                                createTextVNode("Costs")
                              ]),
                              secondContent: withCtx(() => [
                                createVNode(_component_t_button, {
                                  radius: 2,
                                  design: "light",
                                  border: "",
                                  color: _ctx.selectedData.color,
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("+ Add new cash ")
                                  ]),
                                  _: 1
                                }, 8, ["color"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_list, {
                        color: _ctx.selectedData.color,
                        design: _ctx.selectedData.design,
                        border: _ctx.selectedData.border,
                        radius: 0,
                        separated: _ctx.selectedData.separated
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_list_item, {
                            active: _ctx.selectedCheckbox.includes("Cheery")
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_t_input_check_box, {
                                modelValue: _ctx.selectedCheckbox,
                                "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                "input-value": "Cheery",
                                color: _ctx.selectedData.color
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Cheery ")
                            ]),
                            _: 1
                          }, 8, ["active"]),
                          createVNode(_component_t_list_item, {
                            active: _ctx.selectedCheckbox.includes("Banana")
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_t_input_check_box, {
                                modelValue: _ctx.selectedCheckbox,
                                "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                "input-value": "Banana",
                                color: _ctx.selectedData.color
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Banana ")
                            ]),
                            _: 1
                          }, 8, ["active"]),
                          createVNode(_component_t_list_item, {
                            active: _ctx.selectedCheckbox.includes("Strawberry")
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_t_input_check_box, {
                                modelValue: _ctx.selectedCheckbox,
                                "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                "input-value": "Strawberry",
                                color: _ctx.selectedData.color
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Strawberry ")
                            ]),
                            _: 1
                          }, 8, ["active"]),
                          createVNode(_component_t_list_item, {
                            active: _ctx.selectedCheckbox.includes("Lemon")
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_t_input_check_box, {
                                modelValue: _ctx.selectedCheckbox,
                                "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                                "input-value": "Lemon",
                                color: _ctx.selectedData.color
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Lemon ")
                            ]),
                            _: 1
                          }, 8, ["active"])
                        ]),
                        _: 1
                      }, 8, ["color", "design", "border", "separated"]),
                      createVNode(_component_t_list, {
                        color: _ctx.selectedData.color,
                        design: _ctx.selectedData.design,
                        border: _ctx.selectedData.border,
                        separated: _ctx.selectedData.separated,
                        radius: 3
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_list_item, null, {
                            title: withCtx(() => [
                              createTextVNode("Name:")
                            ]),
                            default: withCtx(() => [
                              createTextVNode("Sinan Aydoğan")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_list_item, null, {
                            title: withCtx(() => [
                              createTextVNode("Title:")
                            ]),
                            default: withCtx(() => [
                              createTextVNode("Developer")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_list_item, null, {
                            title: withCtx(() => [
                              createTextVNode("Birthday:")
                            ]),
                            default: withCtx(() => [
                              createTextVNode("1987")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_list_item, null, {
                            title: withCtx(() => [
                              createTextVNode("Country:")
                            ]),
                            default: withCtx(() => [
                              createTextVNode("Turkey")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["color", "design", "border", "separated"]),
                      createVNode(_component_t_list, {
                        color: _ctx.selectedData.color,
                        design: _ctx.selectedData.design,
                        border: _ctx.selectedData.border,
                        radius: 5,
                        separated: _ctx.selectedData.separated
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_list_item, null, {
                            icon: withCtx(() => [
                              createVNode(_component_icon, { icon: ["fab", "vuejs"] })
                            ]),
                            default: withCtx(() => [
                              createTextVNode("VueJS components inside")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_list_item, null, {
                            icon: withCtx(() => [
                              createVNode(_component_icon, { icon: ["fab", "js"] })
                            ]),
                            default: withCtx(() => [
                              createTextVNode("Powered by JavaScript")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_list_item, null, {
                            icon: withCtx(() => [
                              createVNode(_component_icon, { icon: ["fab", "css3"] })
                            ]),
                            default: withCtx(() => [
                              createTextVNode("Polished with TailwindCSS")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_list_item, null, {
                            icon: withCtx(() => [
                              createVNode(_component_icon, { icon: "chart-bar" })
                            ]),
                            default: withCtx(() => [
                              createTextVNode("Detailed some graphics with ChartJS")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["color", "design", "border", "separated"]),
                      createVNode(_component_t_list, {
                        color: _ctx.selectedData.color,
                        design: _ctx.selectedData.design,
                        border: _ctx.selectedData.border,
                        radius: 3,
                        separated: _ctx.selectedData.separated
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_list_item, null, {
                            icon: withCtx(() => [
                              createVNode(_component_t_avatar, {
                                radius: 8,
                                size: 2,
                                src: "https://i.pravatar.cc/150?u=1"
                              })
                            ]),
                            default: withCtx(() => [
                              createTextVNode("Sinem Aydoğan")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_list_item, null, {
                            icon: withCtx(() => [
                              createVNode(_component_t_avatar, {
                                radius: 8,
                                size: 2,
                                src: "https://i.pravatar.cc/150?u=2"
                              })
                            ]),
                            default: withCtx(() => [
                              createTextVNode("Zuhal Taşçı")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_list_item, null, {
                            icon: withCtx(() => [
                              createVNode(_component_t_avatar, {
                                radius: 8,
                                size: 2,
                                src: "https://i.pravatar.cc/150?u=3"
                              })
                            ]),
                            default: withCtx(() => [
                              createTextVNode("Ayşe Gürel")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_list_item, null, {
                            icon: withCtx(() => [
                              createVNode(_component_t_avatar, {
                                radius: 8,
                                size: 2,
                                src: "https://i.pravatar.cc/150?u=4"
                              })
                            ]),
                            default: withCtx(() => [
                              createTextVNode("Günel Deren")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["color", "design", "border", "separated"]),
                      createVNode(_component_t_list, {
                        color: _ctx.selectedData.color,
                        design: _ctx.selectedData.design,
                        border: _ctx.selectedData.border,
                        radius: 3,
                        separated: _ctx.selectedData.separated
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_list_item, null, {
                            default: withCtx(() => [
                              createTextVNode(" Users ")
                            ]),
                            secondContent: withCtx(() => [
                              createVNode(_component_t_badge, { radius: 5 }, {
                                default: withCtx(() => [
                                  createTextVNode("120")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_list_item, null, {
                            default: withCtx(() => [
                              createTextVNode("Materials")
                            ]),
                            secondContent: withCtx(() => [
                              createVNode(_component_t_badge, {
                                radius: 5,
                                color: "red"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("6 pcs.")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_list_item, null, {
                            default: withCtx(() => [
                              createTextVNode("Costs")
                            ]),
                            secondContent: withCtx(() => [
                              createVNode(_component_t_button, {
                                radius: 2,
                                design: "light",
                                border: "",
                                color: _ctx.selectedData.color,
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("+ Add new cash ")
                                ]),
                                _: 1
                              }, 8, ["color"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["color", "design", "border", "separated"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_grid_section, {
                  "col-tablet": 2,
                  "col-laptop": 3
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_list, {
                      color: _ctx.selectedData.color,
                      design: _ctx.selectedData.design,
                      border: _ctx.selectedData.border,
                      radius: 0,
                      separated: _ctx.selectedData.separated
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_list_item, {
                          active: _ctx.selectedCheckbox.includes("Cheery")
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_t_input_check_box, {
                              modelValue: _ctx.selectedCheckbox,
                              "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                              "input-value": "Cheery",
                              color: _ctx.selectedData.color
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Cheery ")
                          ]),
                          _: 1
                        }, 8, ["active"]),
                        createVNode(_component_t_list_item, {
                          active: _ctx.selectedCheckbox.includes("Banana")
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_t_input_check_box, {
                              modelValue: _ctx.selectedCheckbox,
                              "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                              "input-value": "Banana",
                              color: _ctx.selectedData.color
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Banana ")
                          ]),
                          _: 1
                        }, 8, ["active"]),
                        createVNode(_component_t_list_item, {
                          active: _ctx.selectedCheckbox.includes("Strawberry")
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_t_input_check_box, {
                              modelValue: _ctx.selectedCheckbox,
                              "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                              "input-value": "Strawberry",
                              color: _ctx.selectedData.color
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Strawberry ")
                          ]),
                          _: 1
                        }, 8, ["active"]),
                        createVNode(_component_t_list_item, {
                          active: _ctx.selectedCheckbox.includes("Lemon")
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_t_input_check_box, {
                              modelValue: _ctx.selectedCheckbox,
                              "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                              "input-value": "Lemon",
                              color: _ctx.selectedData.color
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Lemon ")
                          ]),
                          _: 1
                        }, 8, ["active"])
                      ]),
                      _: 1
                    }, 8, ["color", "design", "border", "separated"]),
                    createVNode(_component_t_list, {
                      color: _ctx.selectedData.color,
                      design: _ctx.selectedData.design,
                      border: _ctx.selectedData.border,
                      separated: _ctx.selectedData.separated,
                      radius: 3
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_list_item, null, {
                          title: withCtx(() => [
                            createTextVNode("Name:")
                          ]),
                          default: withCtx(() => [
                            createTextVNode("Sinan Aydoğan")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_list_item, null, {
                          title: withCtx(() => [
                            createTextVNode("Title:")
                          ]),
                          default: withCtx(() => [
                            createTextVNode("Developer")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_list_item, null, {
                          title: withCtx(() => [
                            createTextVNode("Birthday:")
                          ]),
                          default: withCtx(() => [
                            createTextVNode("1987")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_list_item, null, {
                          title: withCtx(() => [
                            createTextVNode("Country:")
                          ]),
                          default: withCtx(() => [
                            createTextVNode("Turkey")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["color", "design", "border", "separated"]),
                    createVNode(_component_t_list, {
                      color: _ctx.selectedData.color,
                      design: _ctx.selectedData.design,
                      border: _ctx.selectedData.border,
                      radius: 5,
                      separated: _ctx.selectedData.separated
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_list_item, null, {
                          icon: withCtx(() => [
                            createVNode(_component_icon, { icon: ["fab", "vuejs"] })
                          ]),
                          default: withCtx(() => [
                            createTextVNode("VueJS components inside")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_list_item, null, {
                          icon: withCtx(() => [
                            createVNode(_component_icon, { icon: ["fab", "js"] })
                          ]),
                          default: withCtx(() => [
                            createTextVNode("Powered by JavaScript")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_list_item, null, {
                          icon: withCtx(() => [
                            createVNode(_component_icon, { icon: ["fab", "css3"] })
                          ]),
                          default: withCtx(() => [
                            createTextVNode("Polished with TailwindCSS")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_list_item, null, {
                          icon: withCtx(() => [
                            createVNode(_component_icon, { icon: "chart-bar" })
                          ]),
                          default: withCtx(() => [
                            createTextVNode("Detailed some graphics with ChartJS")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["color", "design", "border", "separated"]),
                    createVNode(_component_t_list, {
                      color: _ctx.selectedData.color,
                      design: _ctx.selectedData.design,
                      border: _ctx.selectedData.border,
                      radius: 3,
                      separated: _ctx.selectedData.separated
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_list_item, null, {
                          icon: withCtx(() => [
                            createVNode(_component_t_avatar, {
                              radius: 8,
                              size: 2,
                              src: "https://i.pravatar.cc/150?u=1"
                            })
                          ]),
                          default: withCtx(() => [
                            createTextVNode("Sinem Aydoğan")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_list_item, null, {
                          icon: withCtx(() => [
                            createVNode(_component_t_avatar, {
                              radius: 8,
                              size: 2,
                              src: "https://i.pravatar.cc/150?u=2"
                            })
                          ]),
                          default: withCtx(() => [
                            createTextVNode("Zuhal Taşçı")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_list_item, null, {
                          icon: withCtx(() => [
                            createVNode(_component_t_avatar, {
                              radius: 8,
                              size: 2,
                              src: "https://i.pravatar.cc/150?u=3"
                            })
                          ]),
                          default: withCtx(() => [
                            createTextVNode("Ayşe Gürel")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_list_item, null, {
                          icon: withCtx(() => [
                            createVNode(_component_t_avatar, {
                              radius: 8,
                              size: 2,
                              src: "https://i.pravatar.cc/150?u=4"
                            })
                          ]),
                          default: withCtx(() => [
                            createTextVNode("Günel Deren")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["color", "design", "border", "separated"]),
                    createVNode(_component_t_list, {
                      color: _ctx.selectedData.color,
                      design: _ctx.selectedData.design,
                      border: _ctx.selectedData.border,
                      radius: 3,
                      separated: _ctx.selectedData.separated
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_list_item, null, {
                          default: withCtx(() => [
                            createTextVNode(" Users ")
                          ]),
                          secondContent: withCtx(() => [
                            createVNode(_component_t_badge, { radius: 5 }, {
                              default: withCtx(() => [
                                createTextVNode("120")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_list_item, null, {
                          default: withCtx(() => [
                            createTextVNode("Materials")
                          ]),
                          secondContent: withCtx(() => [
                            createVNode(_component_t_badge, {
                              radius: 5,
                              color: "red"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("6 pcs.")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_list_item, null, {
                          default: withCtx(() => [
                            createTextVNode("Costs")
                          ]),
                          secondContent: withCtx(() => [
                            createVNode(_component_t_button, {
                              radius: 2,
                              design: "light",
                              border: "",
                              color: _ctx.selectedData.color,
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("+ Add new cash ")
                              ]),
                              _: 1
                            }, 8, ["color"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["color", "design", "border", "separated"])
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
          createVNode(_component_t_component_style_selector, {
            class: "mb-4",
            modelValue: _ctx.selectedData,
            "onUpdate:modelValue": ($event) => _ctx.selectedData = $event,
            "select-data": _ctx.selectData
          }, null, 8, ["modelValue", "onUpdate:modelValue", "select-data"]),
          createVNode(Transition, { name: "alert" }, {
            default: withCtx(() => [
              withDirectives(createVNode(_component_t_toastr, {
                id: "alert",
                color: "solid-white",
                class: "bg-opacity-75 text-gray-700 mb-2",
                style: { "z-index": "999999" }
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("b", { class: "text-yellow-700 font-semibold" }, "Warning"),
                    createTextVNode(" Outline and Elegant designs defaulted have border, and it's not an option ")
                  ])
                ]),
                _: 1
              }, 512), [
                [vShow, _ctx.selectedData.design === "outline" || _ctx.selectedData.design === "elegant"]
              ])
            ]),
            _: 1
          }),
          createVNode(_component_t_content_card, null, {
            title: withCtx(() => [
              createTextVNode(" Samples ")
            ]),
            default: withCtx(() => [
              createVNode(_component_grid_section, {
                "col-tablet": 2,
                "col-laptop": 3
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_list, {
                    color: _ctx.selectedData.color,
                    design: _ctx.selectedData.design,
                    border: _ctx.selectedData.border,
                    radius: 0,
                    separated: _ctx.selectedData.separated
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_list_item, {
                        active: _ctx.selectedCheckbox.includes("Cheery")
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_t_input_check_box, {
                            modelValue: _ctx.selectedCheckbox,
                            "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                            "input-value": "Cheery",
                            color: _ctx.selectedData.color
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Cheery ")
                        ]),
                        _: 1
                      }, 8, ["active"]),
                      createVNode(_component_t_list_item, {
                        active: _ctx.selectedCheckbox.includes("Banana")
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_t_input_check_box, {
                            modelValue: _ctx.selectedCheckbox,
                            "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                            "input-value": "Banana",
                            color: _ctx.selectedData.color
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Banana ")
                        ]),
                        _: 1
                      }, 8, ["active"]),
                      createVNode(_component_t_list_item, {
                        active: _ctx.selectedCheckbox.includes("Strawberry")
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_t_input_check_box, {
                            modelValue: _ctx.selectedCheckbox,
                            "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                            "input-value": "Strawberry",
                            color: _ctx.selectedData.color
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Strawberry ")
                        ]),
                        _: 1
                      }, 8, ["active"]),
                      createVNode(_component_t_list_item, {
                        active: _ctx.selectedCheckbox.includes("Lemon")
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_t_input_check_box, {
                            modelValue: _ctx.selectedCheckbox,
                            "onUpdate:modelValue": ($event) => _ctx.selectedCheckbox = $event,
                            "input-value": "Lemon",
                            color: _ctx.selectedData.color
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Lemon ")
                        ]),
                        _: 1
                      }, 8, ["active"])
                    ]),
                    _: 1
                  }, 8, ["color", "design", "border", "separated"]),
                  createVNode(_component_t_list, {
                    color: _ctx.selectedData.color,
                    design: _ctx.selectedData.design,
                    border: _ctx.selectedData.border,
                    separated: _ctx.selectedData.separated,
                    radius: 3
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_list_item, null, {
                        title: withCtx(() => [
                          createTextVNode("Name:")
                        ]),
                        default: withCtx(() => [
                          createTextVNode("Sinan Aydoğan")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_list_item, null, {
                        title: withCtx(() => [
                          createTextVNode("Title:")
                        ]),
                        default: withCtx(() => [
                          createTextVNode("Developer")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_list_item, null, {
                        title: withCtx(() => [
                          createTextVNode("Birthday:")
                        ]),
                        default: withCtx(() => [
                          createTextVNode("1987")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_list_item, null, {
                        title: withCtx(() => [
                          createTextVNode("Country:")
                        ]),
                        default: withCtx(() => [
                          createTextVNode("Turkey")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["color", "design", "border", "separated"]),
                  createVNode(_component_t_list, {
                    color: _ctx.selectedData.color,
                    design: _ctx.selectedData.design,
                    border: _ctx.selectedData.border,
                    radius: 5,
                    separated: _ctx.selectedData.separated
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_list_item, null, {
                        icon: withCtx(() => [
                          createVNode(_component_icon, { icon: ["fab", "vuejs"] })
                        ]),
                        default: withCtx(() => [
                          createTextVNode("VueJS components inside")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_list_item, null, {
                        icon: withCtx(() => [
                          createVNode(_component_icon, { icon: ["fab", "js"] })
                        ]),
                        default: withCtx(() => [
                          createTextVNode("Powered by JavaScript")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_list_item, null, {
                        icon: withCtx(() => [
                          createVNode(_component_icon, { icon: ["fab", "css3"] })
                        ]),
                        default: withCtx(() => [
                          createTextVNode("Polished with TailwindCSS")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_list_item, null, {
                        icon: withCtx(() => [
                          createVNode(_component_icon, { icon: "chart-bar" })
                        ]),
                        default: withCtx(() => [
                          createTextVNode("Detailed some graphics with ChartJS")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["color", "design", "border", "separated"]),
                  createVNode(_component_t_list, {
                    color: _ctx.selectedData.color,
                    design: _ctx.selectedData.design,
                    border: _ctx.selectedData.border,
                    radius: 3,
                    separated: _ctx.selectedData.separated
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_list_item, null, {
                        icon: withCtx(() => [
                          createVNode(_component_t_avatar, {
                            radius: 8,
                            size: 2,
                            src: "https://i.pravatar.cc/150?u=1"
                          })
                        ]),
                        default: withCtx(() => [
                          createTextVNode("Sinem Aydoğan")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_list_item, null, {
                        icon: withCtx(() => [
                          createVNode(_component_t_avatar, {
                            radius: 8,
                            size: 2,
                            src: "https://i.pravatar.cc/150?u=2"
                          })
                        ]),
                        default: withCtx(() => [
                          createTextVNode("Zuhal Taşçı")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_list_item, null, {
                        icon: withCtx(() => [
                          createVNode(_component_t_avatar, {
                            radius: 8,
                            size: 2,
                            src: "https://i.pravatar.cc/150?u=3"
                          })
                        ]),
                        default: withCtx(() => [
                          createTextVNode("Ayşe Gürel")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_list_item, null, {
                        icon: withCtx(() => [
                          createVNode(_component_t_avatar, {
                            radius: 8,
                            size: 2,
                            src: "https://i.pravatar.cc/150?u=4"
                          })
                        ]),
                        default: withCtx(() => [
                          createTextVNode("Günel Deren")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["color", "design", "border", "separated"]),
                  createVNode(_component_t_list, {
                    color: _ctx.selectedData.color,
                    design: _ctx.selectedData.design,
                    border: _ctx.selectedData.border,
                    radius: 3,
                    separated: _ctx.selectedData.separated
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_list_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Users ")
                        ]),
                        secondContent: withCtx(() => [
                          createVNode(_component_t_badge, { radius: 5 }, {
                            default: withCtx(() => [
                              createTextVNode("120")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_list_item, null, {
                        default: withCtx(() => [
                          createTextVNode("Materials")
                        ]),
                        secondContent: withCtx(() => [
                          createVNode(_component_t_badge, {
                            radius: 5,
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("6 pcs.")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_list_item, null, {
                        default: withCtx(() => [
                          createTextVNode("Costs")
                        ]),
                        secondContent: withCtx(() => [
                          createVNode(_component_t_button, {
                            radius: 2,
                            design: "light",
                            border: "",
                            color: _ctx.selectedData.color,
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("+ Add new cash ")
                            ]),
                            _: 1
                          }, 8, ["color"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["color", "design", "border", "separated"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const List = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-474770c5"]]);
export {
  List as default
};

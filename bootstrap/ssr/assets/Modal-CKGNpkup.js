import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, createBlock, openBlock, Teleport, ref, reactive, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-BkpuvVky.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TContentCard } from "./TContentCard-BkuMOsLs.js";
import { T as TModal } from "./TModal-BluvIe0P.js";
import { a as _sfc_main$1 } from "./TButton-oXLR37ud.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputSelect } from "./TInputSelect-BY60CBa7.js";
import { ssrRenderComponent, ssrRenderTeleport } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
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
import "vue3-keypress";
import "./TInputText-CyR_XUuU.js";
const _sfc_main = defineComponent({
  name: "Modal",
  components: {
    TInputSelect,
    AppLayout,
    GridSection,
    TButton: _sfc_main$1,
    TContentCard,
    TModal,
    TInputGroup
  },
  setup() {
    const selectedDarkMode = ref(false);
    const selectedDesign = ref("elegant");
    const selectedBgColor = ref("black");
    const selectedColor = ref("white");
    const darkModeOptions = reactive([
      { key: true, label: "Dark: true" },
      { key: false, label: "Dark: false" }
    ]);
    const colorOptions = reactive([
      { key: "red", label: "Red" },
      { key: "blue", label: "Blue" },
      { key: "green", label: "Green" },
      { key: "yellow", label: "Yellow" },
      { key: "indigo", label: "Indigo" },
      { key: "purple", label: "Purple" },
      { key: "pink", label: "Pink" },
      { key: "gray", label: "Gray" },
      { key: "white", label: "White" },
      { key: "black", label: "Black" }
    ]);
    const designOptions = reactive([
      { key: "filled", label: "Filled" },
      { key: "elegant", label: "Elegant" }
    ]);
    return {
      darkModeOptions,
      colorOptions,
      designOptions,
      selectedDarkMode,
      selectedColor,
      selectedBgColor,
      selectedDesign
    };
  },
  data() {
    return {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      form: this.$inertia.form({
        _method: "POST",
        name: null,
        email: null
      })
    };
  },
  methods: {
    reset: function() {
      this.form.name = null;
      this.form.email = null;
    },
    testMetodu() {
      alert("kedi");
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_t_content_card = resolveComponent("t-content-card");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_button = resolveComponent("t-button");
  const _component_t_modal = resolveComponent("t-modal");
  const _component_t_input_group = resolveComponent("t-input-group");
  const _component_t_input_select = resolveComponent("t-input-select");
  const _component_icon = resolveComponent("icon");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Modals`);
      } else {
        return [
          createTextVNode("Modals")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pretty and sweet windows`);
      } else {
        return [
          createTextVNode("Pretty and sweet windows")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_t_content_card, null, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Click to the buttons for show modal windows`);
            } else {
              return [
                createTextVNode("Click to the buttons for show modal windows")
              ];
            }
          }),
          subTitle: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`10 solid, 8 light and limitless gradient color options with radius`);
            } else {
              return [
                createTextVNode("10 solid, 8 light and limitless gradient color options with radius")
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_grid_section, {
                "col-tablet": 2,
                "col-laptop": 4
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_button, {
                      color: "white",
                      type: "button",
                      onClick: ($event) => _ctx.showModal1 = !_ctx.showModal1
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Show Simple Modal `);
                        } else {
                          return [
                            createTextVNode(" Show Simple Modal ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_button, {
                      design: "light",
                      color: "blue",
                      type: "button",
                      onClick: ($event) => _ctx.showModal2 = !_ctx.showModal2
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` With Timer `);
                        } else {
                          return [
                            createTextVNode(" With Timer ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_button, {
                      color: "red",
                      type: "button",
                      onClick: ($event) => _ctx.showModal3 = !_ctx.showModal3
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` With ESC &amp; Out-Side Click `);
                        } else {
                          return [
                            createTextVNode(" With ESC & Out-Side Click ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_button, {
                      color: "indigo",
                      type: "button",
                      onClick: ($event) => _ctx.showModal4 = !_ctx.showModal4
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` With Predefined Icons `);
                        } else {
                          return [
                            createTextVNode(" With Predefined Icons ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_button, {
                        color: "white",
                        type: "button",
                        onClick: ($event) => _ctx.showModal1 = !_ctx.showModal1
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Show Simple Modal ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_t_button, {
                        design: "light",
                        color: "blue",
                        type: "button",
                        onClick: ($event) => _ctx.showModal2 = !_ctx.showModal2
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" With Timer ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_t_button, {
                        color: "red",
                        type: "button",
                        onClick: ($event) => _ctx.showModal3 = !_ctx.showModal3
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" With ESC & Out-Side Click ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_t_button, {
                        color: "indigo",
                        type: "button",
                        onClick: ($event) => _ctx.showModal4 = !_ctx.showModal4
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" With Predefined Icons ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              ssrRenderTeleport(_push3, (_push4) => {
                _push4(ssrRenderComponent(_component_t_modal, {
                  title: "Registration",
                  "sub-title": "Your register success",
                  content: "User infos registered to database<br> Please check your mailbox for apply message",
                  "dark-mode": _ctx.selectedDarkMode,
                  "bg-color": _ctx.selectedBgColor,
                  design: _ctx.selectedDesign,
                  color: _ctx.selectedColor,
                  icon: "success",
                  radius: 3,
                  modelValue: _ctx.showModal1,
                  "onUpdate:modelValue": ($event) => _ctx.showModal1 = $event
                }, {
                  "action-buttons": withCtx((_3, _push5, _parent4, _scopeId3) => {
                    if (_push5) {
                      _push5(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId3}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId3}></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"${_scopeId3}></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"${_scopeId3}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId3}></path></svg>`);
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
                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          }),
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          })
                        ])),
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
                            d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          })
                        ])),
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
                            d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          }),
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          })
                        ]))
                      ];
                    }
                  }),
                  header: withCtx((_3, _push5, _parent4, _scopeId3) => {
                    if (_push5) {
                      _push5(`Modal Header`);
                    } else {
                      return [
                        createTextVNode("Modal Header")
                      ];
                    }
                  }),
                  content: withCtx((_3, _push5, _parent4, _scopeId3) => {
                    if (_push5) {
                      _push5(ssrRenderComponent(_component_grid_section, { col: 2 }, {
                        default: withCtx((_4, _push6, _parent5, _scopeId4) => {
                          if (_push6) {
                            _push6(ssrRenderComponent(_component_t_input_group, { label: "Box Design" }, {
                              default: withCtx((_5, _push7, _parent6, _scopeId5) => {
                                if (_push7) {
                                  _push7(ssrRenderComponent(_component_t_input_select, {
                                    options: _ctx.designOptions,
                                    modelValue: _ctx.selectedDesign,
                                    "onUpdate:modelValue": ($event) => _ctx.selectedDesign = $event
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(_component_t_input_select, {
                                      options: _ctx.designOptions,
                                      modelValue: _ctx.selectedDesign,
                                      "onUpdate:modelValue": ($event) => _ctx.selectedDesign = $event
                                    }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                            _push6(ssrRenderComponent(_component_t_input_group, { label: "Box Color" }, {
                              default: withCtx((_5, _push7, _parent6, _scopeId5) => {
                                if (_push7) {
                                  _push7(ssrRenderComponent(_component_t_input_select, {
                                    options: _ctx.colorOptions,
                                    modelValue: _ctx.selectedColor,
                                    "onUpdate:modelValue": ($event) => _ctx.selectedColor = $event
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(_component_t_input_select, {
                                      options: _ctx.colorOptions,
                                      modelValue: _ctx.selectedColor,
                                      "onUpdate:modelValue": ($event) => _ctx.selectedColor = $event
                                    }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                            _push6(ssrRenderComponent(_component_t_input_group, { label: "Dark Mode" }, {
                              default: withCtx((_5, _push7, _parent6, _scopeId5) => {
                                if (_push7) {
                                  _push7(ssrRenderComponent(_component_t_input_select, {
                                    options: _ctx.darkModeOptions,
                                    modelValue: _ctx.selectedDarkMode,
                                    "onUpdate:modelValue": ($event) => _ctx.selectedDarkMode = $event
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(_component_t_input_select, {
                                      options: _ctx.darkModeOptions,
                                      modelValue: _ctx.selectedDarkMode,
                                      "onUpdate:modelValue": ($event) => _ctx.selectedDarkMode = $event
                                    }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                            _push6(ssrRenderComponent(_component_t_input_group, { label: "Background Color" }, {
                              default: withCtx((_5, _push7, _parent6, _scopeId5) => {
                                if (_push7) {
                                  _push7(ssrRenderComponent(_component_t_input_select, {
                                    options: _ctx.colorOptions,
                                    modelValue: _ctx.selectedBgColor,
                                    "onUpdate:modelValue": ($event) => _ctx.selectedBgColor = $event
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(_component_t_input_select, {
                                      options: _ctx.colorOptions,
                                      modelValue: _ctx.selectedBgColor,
                                      "onUpdate:modelValue": ($event) => _ctx.selectedBgColor = $event
                                    }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_t_input_group, { label: "Box Design" }, {
                                default: withCtx(() => [
                                  createVNode(_component_t_input_select, {
                                    options: _ctx.designOptions,
                                    modelValue: _ctx.selectedDesign,
                                    "onUpdate:modelValue": ($event) => _ctx.selectedDesign = $event
                                  }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_input_group, { label: "Box Color" }, {
                                default: withCtx(() => [
                                  createVNode(_component_t_input_select, {
                                    options: _ctx.colorOptions,
                                    modelValue: _ctx.selectedColor,
                                    "onUpdate:modelValue": ($event) => _ctx.selectedColor = $event
                                  }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_input_group, { label: "Dark Mode" }, {
                                default: withCtx(() => [
                                  createVNode(_component_t_input_select, {
                                    options: _ctx.darkModeOptions,
                                    modelValue: _ctx.selectedDarkMode,
                                    "onUpdate:modelValue": ($event) => _ctx.selectedDarkMode = $event
                                  }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_input_group, { label: "Background Color" }, {
                                default: withCtx(() => [
                                  createVNode(_component_t_input_select, {
                                    options: _ctx.colorOptions,
                                    modelValue: _ctx.selectedBgColor,
                                    "onUpdate:modelValue": ($event) => _ctx.selectedBgColor = $event
                                  }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
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
                        createVNode(_component_grid_section, { col: 2 }, {
                          default: withCtx(() => [
                            createVNode(_component_t_input_group, { label: "Box Design" }, {
                              default: withCtx(() => [
                                createVNode(_component_t_input_select, {
                                  options: _ctx.designOptions,
                                  modelValue: _ctx.selectedDesign,
                                  "onUpdate:modelValue": ($event) => _ctx.selectedDesign = $event
                                }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_input_group, { label: "Box Color" }, {
                              default: withCtx(() => [
                                createVNode(_component_t_input_select, {
                                  options: _ctx.colorOptions,
                                  modelValue: _ctx.selectedColor,
                                  "onUpdate:modelValue": ($event) => _ctx.selectedColor = $event
                                }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_input_group, { label: "Dark Mode" }, {
                              default: withCtx(() => [
                                createVNode(_component_t_input_select, {
                                  options: _ctx.darkModeOptions,
                                  modelValue: _ctx.selectedDarkMode,
                                  "onUpdate:modelValue": ($event) => _ctx.selectedDarkMode = $event
                                }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_input_group, { label: "Background Color" }, {
                              default: withCtx(() => [
                                createVNode(_component_t_input_select, {
                                  options: _ctx.colorOptions,
                                  modelValue: _ctx.selectedBgColor,
                                  "onUpdate:modelValue": ($event) => _ctx.selectedBgColor = $event
                                }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  "footer-right": withCtx((_3, _push5, _parent4, _scopeId3) => {
                    if (_push5) {
                      _push5(ssrRenderComponent(_component_t_button, {
                        radius: 3,
                        color: "white",
                        onClick: ($event) => _ctx.showModal1 = false
                      }, {
                        default: withCtx((_4, _push6, _parent5, _scopeId4) => {
                          if (_push6) {
                            _push6(` Close `);
                          } else {
                            return [
                              createTextVNode(" Close ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push5(ssrRenderComponent(_component_t_button, {
                        radius: 3,
                        color: "green"
                      }, {
                        default: withCtx((_4, _push6, _parent5, _scopeId4) => {
                          if (_push6) {
                            _push6(ssrRenderComponent(_component_icon, { icon: "save" }, null, _parent5, _scopeId4));
                            _push6(` Save `);
                          } else {
                            return [
                              createVNode(_component_icon, { icon: "save" }),
                              createTextVNode(" Save ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_t_button, {
                          radius: 3,
                          color: "white",
                          onClick: ($event) => _ctx.showModal1 = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_t_button, {
                          radius: 3,
                          color: "green"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_icon, { icon: "save" }),
                            createTextVNode(" Save ")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              }, "body", false, _parent3);
              ssrRenderTeleport(_push3, (_push4) => {
                _push4(ssrRenderComponent(_component_t_modal, {
                  title: "Timed Modal",
                  "sub-title": "Countdown: 3 seconds",
                  content: "This modal will close after 3 seconds",
                  timer: 3e3,
                  radius: 3,
                  "out-side-click": "",
                  modelValue: _ctx.showModal2,
                  "onUpdate:modelValue": ($event) => _ctx.showModal2 = $event,
                  "bg-color": "blue"
                }, null, _parent3, _scopeId2));
              }, "body", false, _parent3);
              ssrRenderTeleport(_push3, (_push4) => {
                _push4(ssrRenderComponent(_component_t_modal, {
                  modelValue: _ctx.showModal3,
                  "onUpdate:modelValue": ($event) => _ctx.showModal3 = $event,
                  radius: 3,
                  design: "elegant",
                  color: "red",
                  title: "ESC + Outside Click",
                  "sub-title": "Different ways for close",
                  content: "You can click to outside of this modal or <br>press to ESC key on the keyboard",
                  "out-side-click": "",
                  esc: ""
                }, {
                  "footer-left": withCtx((_3, _push5, _parent4, _scopeId3) => {
                    if (_push5) {
                      _push5(ssrRenderComponent(_component_t_button, {
                        radius: 3,
                        color: "white",
                        onClick: ($event) => _ctx.showModal3 = false
                      }, {
                        default: withCtx((_4, _push6, _parent5, _scopeId4) => {
                          if (_push6) {
                            _push6(` Cancel `);
                          } else {
                            return [
                              createTextVNode(" Cancel ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_t_button, {
                          radius: 3,
                          color: "white",
                          onClick: ($event) => _ctx.showModal3 = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ];
                    }
                  }),
                  "footer-right": withCtx((_3, _push5, _parent4, _scopeId3) => {
                    if (_push5) {
                      _push5(ssrRenderComponent(_component_t_button, {
                        radius: 3,
                        design: "light",
                        color: "red"
                      }, {
                        default: withCtx((_4, _push6, _parent5, _scopeId4) => {
                          if (_push6) {
                            _push6(ssrRenderComponent(_component_icon, { icon: "trash" }, null, _parent5, _scopeId4));
                            _push6(` Delete it `);
                          } else {
                            return [
                              createVNode(_component_icon, { icon: "trash" }),
                              createTextVNode(" Delete it ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_t_button, {
                          radius: 3,
                          design: "light",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_icon, { icon: "trash" }),
                            createTextVNode(" Delete it ")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              }, "body", false, _parent3);
              ssrRenderTeleport(_push3, (_push4) => {
                _push4(ssrRenderComponent(_component_t_modal, {
                  modelValue: _ctx.showModal4,
                  "onUpdate:modelValue": ($event) => _ctx.showModal4 = $event,
                  color: "white",
                  "bg-color": "yellow",
                  radius: 3,
                  title: "Please wait",
                  "sub-title": "Your test will be ready after 30 minutes"
                }, {
                  icon: withCtx((_3, _push5, _parent4, _scopeId3) => {
                    if (_push5) {
                      _push5(`<svg class="w-20 h-20 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.88 122.88"${_scopeId3}><title${_scopeId3}>30-seconds</title><path d="M60.22,113.81a4.54,4.54,0,0,1,0,9.07A60.23,60.23,0,1,1,89.71,10.16l-1.26-3.3a5.06,5.06,0,1,1,9.45-3.6l5,13.15a5,5,0,0,1,.32,1.55,5,5,0,0,1-3.51,5.64L86.27,27.72a5,5,0,0,1-2.92-9.65l1.28-.39a50.55,50.55,0,0,0-10.19-4.19A51.17,51.17,0,1,0,60.22,113.81ZM42.78,91.21c-.6,0-1.18,0-1.75-.06s-1.12-.09-1.67-.16-1.08-.15-1.58-.24-1-.2-1.46-.33V86.26c.61,0,1.27.1,2,.14l2.17.08,2,0A6.82,6.82,0,0,0,44,86.37a1.89,1.89,0,0,0,.9-.43,1.13,1.13,0,0,0,.29-.81V84.8a1,1,0,0,0-.42-.89,1.61,1.61,0,0,0-1-.3H42.35a7.17,7.17,0,0,1-4.76-1.38Q36,80.85,36,77.61v-.89a5.45,5.45,0,0,1,1.78-4.45,7.89,7.89,0,0,1,5.14-1.47,22.61,22.61,0,0,1,2.39.12c.75.08,1.45.18,2.11.3s1.24.24,1.77.36v4.17c-.83-.08-1.76-.13-2.8-.18s-2-.07-2.82-.07a7.88,7.88,0,0,0-1.36.11,1.76,1.76,0,0,0-.92.43,1.31,1.31,0,0,0-.32.95v.27a1.25,1.25,0,0,0,.43,1,2.11,2.11,0,0,0,1.33.35h1.78a6.38,6.38,0,0,1,3.15.71,4.67,4.67,0,0,1,1.89,2,6,6,0,0,1,.64,2.8V85a7.08,7.08,0,0,1-.9,3.92,4.34,4.34,0,0,1-2.54,1.82,14.15,14.15,0,0,1-3.94.48Zm16.15,0a10.92,10.92,0,0,1-1.56-.14,5.41,5.41,0,0,1-1.75-.59,3.72,3.72,0,0,1-1.42-1.42,5.17,5.17,0,0,1-.57-2.64V75.93a5.63,5.63,0,0,1,.46-2.43A4,4,0,0,1,55.28,72a4.7,4.7,0,0,1,1.62-.79A7,7,0,0,1,58.63,71c1.51,0,2.82,0,3.91.07s2,.09,2.83.15,1.51.12,2.13.19V75.8H60.25a1.51,1.51,0,0,0-1,.3,1.08,1.08,0,0,0-.36.89v1.68l7.27.27V83.1l-7.27.27v1.51a1.84,1.84,0,0,0,.15.8,1,1,0,0,0,.42.46,1.21,1.21,0,0,0,.6.15H67.5v4.43c-.78.11-1.66.2-2.65.27s-2,.13-3,.16-2,.06-2.89.06Zm18.9,0a10.62,10.62,0,0,1-3-.41,5.06,5.06,0,0,1-2.33-1.49A7.29,7.29,0,0,1,71,86.21a22.24,22.24,0,0,1-.52-5.27A20.22,20.22,0,0,1,71,75.8a7.51,7.51,0,0,1,1.53-3.09,5.2,5.2,0,0,1,2.34-1.52,10,10,0,0,1,3-.42,21.46,21.46,0,0,1,3,.18,18.67,18.67,0,0,1,2.19.42,9.78,9.78,0,0,1,1.45.48v4.08c-.35-.07-.79-.14-1.33-.21s-1.15-.13-1.85-.18-1.44-.06-2.26-.06a5.74,5.74,0,0,0-1.55.18,1.82,1.82,0,0,0-1,.76,4.17,4.17,0,0,0-.56,1.66A20.28,20.28,0,0,0,75.7,81a22.52,22.52,0,0,0,.13,2.7,4.41,4.41,0,0,0,.49,1.69,1.92,1.92,0,0,0,1,.87,4.89,4.89,0,0,0,1.72.25c1.37,0,2.48,0,3.34-.06s1.53-.11,2-.18v4.08a10,10,0,0,1-1.58.46,17.32,17.32,0,0,1-2.13.3c-.81.07-1.77.11-2.89.11Zm-30.32-26c-2.32,0-4.56-.1-6.74-.3s-4.18-.5-6-.87V57.28h9.48a14.79,14.79,0,0,0,2.63-.18,2.22,2.22,0,0,0,1.28-.56,1.6,1.6,0,0,0,.35-1.09v-.82a1.87,1.87,0,0,0-.4-1.26A2.32,2.32,0,0,0,47,52.65a7,7,0,0,0-1.83-.28L37.38,52V45.5L44.73,45a7.5,7.5,0,0,0,2.56-.52,1.41,1.41,0,0,0,.83-1.39v-.39a1.9,1.9,0,0,0-.87-1.78A6.83,6.83,0,0,0,44,40.42H35.17V33.64c1.88-.32,3.87-.62,5.95-.89a39.39,39.39,0,0,1,6.35-.33,12.44,12.44,0,0,1,4.8.93,6.74,6.74,0,0,1,3.11,2.7,8.8,8.8,0,0,1,1.08,4.58v2.18a10,10,0,0,1-.19,2,5.79,5.79,0,0,1-.63,1.69,4.79,4.79,0,0,1-1.13,1.33,5.72,5.72,0,0,1-1.7.91,4.61,4.61,0,0,1,1.81,1,5.86,5.86,0,0,1,1.25,1.58,7.93,7.93,0,0,1,.77,2.07,11.29,11.29,0,0,1,.26,2.45V57.1a7.43,7.43,0,0,1-2.5,6,10.44,10.44,0,0,1-6.89,2.09Zm21.29,0a10.55,10.55,0,0,1-4.93-1,6.54,6.54,0,0,1-2.93-3,10.71,10.71,0,0,1-1-4.72V41.63a11.2,11.2,0,0,1,1-5,7,7,0,0,1,3-3.11,10.16,10.16,0,0,1,4.83-1.06h7a9.35,9.35,0,0,1,4.63,1.06,6.91,6.91,0,0,1,2.86,3.11,11.64,11.64,0,0,1,1,5V56.45a9,9,0,0,1-2.19,6.43,8.25,8.25,0,0,1-6.33,2.35Zm2.09-7.56H73.5a2.17,2.17,0,0,0,2.43-2.52V42.5a2.55,2.55,0,0,0-.61-2,2.26,2.26,0,0,0-1.48-.5H70.59a2.06,2.06,0,0,0-1.66.61,2.94,2.94,0,0,0-.52,1.91V55.1a2.65,2.65,0,0,0,.61,2,2.62,2.62,0,0,0,1.87.59Zm40.33-27.91c-3.52-5.29-11.65-.65-8.57,5.21l.14.22A50,50,0,0,1,107,43.27a5,5,0,1,0,9.28-3.83,61.08,61.08,0,0,0-5.07-9.68ZM77.27,110.47a5,5,0,1,0,3.36,9.46,60.29,60.29,0,0,0,9.94-4.55,5,5,0,0,0-5-8.7,55.52,55.52,0,0,1-8.3,3.79ZM99.4,95c-3.66,4.44,2.09,10.86,7.08,7a5.37,5.37,0,0,0,.71-.72,64.19,64.19,0,0,0,6.11-9.06,5,5,0,0,0-8.48-5.34A77.5,77.5,0,0,1,99.4,95Zm10.88-24.81a5,5,0,0,0,9.63,2.58,4.83,4.83,0,0,0,.3-1.13,60.28,60.28,0,0,0,.64-10.9c-.28-6.19-9.41-6.63-10-.12v.82a52.28,52.28,0,0,1-.55,8.75Z"${_scopeId3}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "w-20 h-20 text-yellow-500",
                          fill: "currentColor",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 120.88 122.88"
                        }, [
                          createVNode("title", null, "30-seconds"),
                          createVNode("path", { d: "M60.22,113.81a4.54,4.54,0,0,1,0,9.07A60.23,60.23,0,1,1,89.71,10.16l-1.26-3.3a5.06,5.06,0,1,1,9.45-3.6l5,13.15a5,5,0,0,1,.32,1.55,5,5,0,0,1-3.51,5.64L86.27,27.72a5,5,0,0,1-2.92-9.65l1.28-.39a50.55,50.55,0,0,0-10.19-4.19A51.17,51.17,0,1,0,60.22,113.81ZM42.78,91.21c-.6,0-1.18,0-1.75-.06s-1.12-.09-1.67-.16-1.08-.15-1.58-.24-1-.2-1.46-.33V86.26c.61,0,1.27.1,2,.14l2.17.08,2,0A6.82,6.82,0,0,0,44,86.37a1.89,1.89,0,0,0,.9-.43,1.13,1.13,0,0,0,.29-.81V84.8a1,1,0,0,0-.42-.89,1.61,1.61,0,0,0-1-.3H42.35a7.17,7.17,0,0,1-4.76-1.38Q36,80.85,36,77.61v-.89a5.45,5.45,0,0,1,1.78-4.45,7.89,7.89,0,0,1,5.14-1.47,22.61,22.61,0,0,1,2.39.12c.75.08,1.45.18,2.11.3s1.24.24,1.77.36v4.17c-.83-.08-1.76-.13-2.8-.18s-2-.07-2.82-.07a7.88,7.88,0,0,0-1.36.11,1.76,1.76,0,0,0-.92.43,1.31,1.31,0,0,0-.32.95v.27a1.25,1.25,0,0,0,.43,1,2.11,2.11,0,0,0,1.33.35h1.78a6.38,6.38,0,0,1,3.15.71,4.67,4.67,0,0,1,1.89,2,6,6,0,0,1,.64,2.8V85a7.08,7.08,0,0,1-.9,3.92,4.34,4.34,0,0,1-2.54,1.82,14.15,14.15,0,0,1-3.94.48Zm16.15,0a10.92,10.92,0,0,1-1.56-.14,5.41,5.41,0,0,1-1.75-.59,3.72,3.72,0,0,1-1.42-1.42,5.17,5.17,0,0,1-.57-2.64V75.93a5.63,5.63,0,0,1,.46-2.43A4,4,0,0,1,55.28,72a4.7,4.7,0,0,1,1.62-.79A7,7,0,0,1,58.63,71c1.51,0,2.82,0,3.91.07s2,.09,2.83.15,1.51.12,2.13.19V75.8H60.25a1.51,1.51,0,0,0-1,.3,1.08,1.08,0,0,0-.36.89v1.68l7.27.27V83.1l-7.27.27v1.51a1.84,1.84,0,0,0,.15.8,1,1,0,0,0,.42.46,1.21,1.21,0,0,0,.6.15H67.5v4.43c-.78.11-1.66.2-2.65.27s-2,.13-3,.16-2,.06-2.89.06Zm18.9,0a10.62,10.62,0,0,1-3-.41,5.06,5.06,0,0,1-2.33-1.49A7.29,7.29,0,0,1,71,86.21a22.24,22.24,0,0,1-.52-5.27A20.22,20.22,0,0,1,71,75.8a7.51,7.51,0,0,1,1.53-3.09,5.2,5.2,0,0,1,2.34-1.52,10,10,0,0,1,3-.42,21.46,21.46,0,0,1,3,.18,18.67,18.67,0,0,1,2.19.42,9.78,9.78,0,0,1,1.45.48v4.08c-.35-.07-.79-.14-1.33-.21s-1.15-.13-1.85-.18-1.44-.06-2.26-.06a5.74,5.74,0,0,0-1.55.18,1.82,1.82,0,0,0-1,.76,4.17,4.17,0,0,0-.56,1.66A20.28,20.28,0,0,0,75.7,81a22.52,22.52,0,0,0,.13,2.7,4.41,4.41,0,0,0,.49,1.69,1.92,1.92,0,0,0,1,.87,4.89,4.89,0,0,0,1.72.25c1.37,0,2.48,0,3.34-.06s1.53-.11,2-.18v4.08a10,10,0,0,1-1.58.46,17.32,17.32,0,0,1-2.13.3c-.81.07-1.77.11-2.89.11Zm-30.32-26c-2.32,0-4.56-.1-6.74-.3s-4.18-.5-6-.87V57.28h9.48a14.79,14.79,0,0,0,2.63-.18,2.22,2.22,0,0,0,1.28-.56,1.6,1.6,0,0,0,.35-1.09v-.82a1.87,1.87,0,0,0-.4-1.26A2.32,2.32,0,0,0,47,52.65a7,7,0,0,0-1.83-.28L37.38,52V45.5L44.73,45a7.5,7.5,0,0,0,2.56-.52,1.41,1.41,0,0,0,.83-1.39v-.39a1.9,1.9,0,0,0-.87-1.78A6.83,6.83,0,0,0,44,40.42H35.17V33.64c1.88-.32,3.87-.62,5.95-.89a39.39,39.39,0,0,1,6.35-.33,12.44,12.44,0,0,1,4.8.93,6.74,6.74,0,0,1,3.11,2.7,8.8,8.8,0,0,1,1.08,4.58v2.18a10,10,0,0,1-.19,2,5.79,5.79,0,0,1-.63,1.69,4.79,4.79,0,0,1-1.13,1.33,5.72,5.72,0,0,1-1.7.91,4.61,4.61,0,0,1,1.81,1,5.86,5.86,0,0,1,1.25,1.58,7.93,7.93,0,0,1,.77,2.07,11.29,11.29,0,0,1,.26,2.45V57.1a7.43,7.43,0,0,1-2.5,6,10.44,10.44,0,0,1-6.89,2.09Zm21.29,0a10.55,10.55,0,0,1-4.93-1,6.54,6.54,0,0,1-2.93-3,10.71,10.71,0,0,1-1-4.72V41.63a11.2,11.2,0,0,1,1-5,7,7,0,0,1,3-3.11,10.16,10.16,0,0,1,4.83-1.06h7a9.35,9.35,0,0,1,4.63,1.06,6.91,6.91,0,0,1,2.86,3.11,11.64,11.64,0,0,1,1,5V56.45a9,9,0,0,1-2.19,6.43,8.25,8.25,0,0,1-6.33,2.35Zm2.09-7.56H73.5a2.17,2.17,0,0,0,2.43-2.52V42.5a2.55,2.55,0,0,0-.61-2,2.26,2.26,0,0,0-1.48-.5H70.59a2.06,2.06,0,0,0-1.66.61,2.94,2.94,0,0,0-.52,1.91V55.1a2.65,2.65,0,0,0,.61,2,2.62,2.62,0,0,0,1.87.59Zm40.33-27.91c-3.52-5.29-11.65-.65-8.57,5.21l.14.22A50,50,0,0,1,107,43.27a5,5,0,1,0,9.28-3.83,61.08,61.08,0,0,0-5.07-9.68ZM77.27,110.47a5,5,0,1,0,3.36,9.46,60.29,60.29,0,0,0,9.94-4.55,5,5,0,0,0-5-8.7,55.52,55.52,0,0,1-8.3,3.79ZM99.4,95c-3.66,4.44,2.09,10.86,7.08,7a5.37,5.37,0,0,0,.71-.72,64.19,64.19,0,0,0,6.11-9.06,5,5,0,0,0-8.48-5.34A77.5,77.5,0,0,1,99.4,95Zm10.88-24.81a5,5,0,0,0,9.63,2.58,4.83,4.83,0,0,0,.3-1.13,60.28,60.28,0,0,0,.64-10.9c-.28-6.19-9.41-6.63-10-.12v.82a52.28,52.28,0,0,1-.55,8.75Z" })
                        ]))
                      ];
                    }
                  }),
                  "footer-left": withCtx((_3, _push5, _parent4, _scopeId3) => {
                    if (_push5) {
                      _push5(ssrRenderComponent(_component_t_button, {
                        radius: 3,
                        color: "white",
                        onClick: ($event) => _ctx.showModal4 = false
                      }, {
                        default: withCtx((_4, _push6, _parent5, _scopeId4) => {
                          if (_push6) {
                            _push6(` Cancel `);
                          } else {
                            return [
                              createTextVNode(" Cancel ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_t_button, {
                          radius: 3,
                          color: "white",
                          onClick: ($event) => _ctx.showModal4 = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ];
                    }
                  }),
                  "footer-right": withCtx((_3, _push5, _parent4, _scopeId3) => {
                    if (_push5) {
                      _push5(ssrRenderComponent(_component_t_button, {
                        loading: "",
                        radius: 3,
                        design: "light",
                        color: "green"
                      }, {
                        default: withCtx((_4, _push6, _parent5, _scopeId4) => {
                          if (_push6) {
                            _push6(` Wait `);
                          } else {
                            return [
                              createTextVNode(" Wait ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_t_button, {
                          loading: "",
                          radius: 3,
                          design: "light",
                          color: "green"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Wait ")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              }, "body", false, _parent3);
            } else {
              return [
                createVNode(_component_grid_section, {
                  "col-tablet": 2,
                  "col-laptop": 4
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_button, {
                      color: "white",
                      type: "button",
                      onClick: ($event) => _ctx.showModal1 = !_ctx.showModal1
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Show Simple Modal ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_t_button, {
                      design: "light",
                      color: "blue",
                      type: "button",
                      onClick: ($event) => _ctx.showModal2 = !_ctx.showModal2
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" With Timer ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_t_button, {
                      color: "red",
                      type: "button",
                      onClick: ($event) => _ctx.showModal3 = !_ctx.showModal3
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" With ESC & Out-Side Click ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_t_button, {
                      color: "indigo",
                      type: "button",
                      onClick: ($event) => _ctx.showModal4 = !_ctx.showModal4
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" With Predefined Icons ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                (openBlock(), createBlock(Teleport, { to: "body" }, [
                  createVNode(_component_t_modal, {
                    title: "Registration",
                    "sub-title": "Your register success",
                    content: "User infos registered to database<br> Please check your mailbox for apply message",
                    "dark-mode": _ctx.selectedDarkMode,
                    "bg-color": _ctx.selectedBgColor,
                    design: _ctx.selectedDesign,
                    color: _ctx.selectedColor,
                    icon: "success",
                    radius: 3,
                    modelValue: _ctx.showModal1,
                    "onUpdate:modelValue": ($event) => _ctx.showModal1 = $event
                  }, {
                    "action-buttons": withCtx(() => [
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
                          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        }),
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        })
                      ])),
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
                          d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        })
                      ])),
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
                          d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        }),
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        })
                      ]))
                    ]),
                    header: withCtx(() => [
                      createTextVNode("Modal Header")
                    ]),
                    content: withCtx(() => [
                      createVNode(_component_grid_section, { col: 2 }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_group, { label: "Box Design" }, {
                            default: withCtx(() => [
                              createVNode(_component_t_input_select, {
                                options: _ctx.designOptions,
                                modelValue: _ctx.selectedDesign,
                                "onUpdate:modelValue": ($event) => _ctx.selectedDesign = $event
                              }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_input_group, { label: "Box Color" }, {
                            default: withCtx(() => [
                              createVNode(_component_t_input_select, {
                                options: _ctx.colorOptions,
                                modelValue: _ctx.selectedColor,
                                "onUpdate:modelValue": ($event) => _ctx.selectedColor = $event
                              }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_input_group, { label: "Dark Mode" }, {
                            default: withCtx(() => [
                              createVNode(_component_t_input_select, {
                                options: _ctx.darkModeOptions,
                                modelValue: _ctx.selectedDarkMode,
                                "onUpdate:modelValue": ($event) => _ctx.selectedDarkMode = $event
                              }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_input_group, { label: "Background Color" }, {
                            default: withCtx(() => [
                              createVNode(_component_t_input_select, {
                                options: _ctx.colorOptions,
                                modelValue: _ctx.selectedBgColor,
                                "onUpdate:modelValue": ($event) => _ctx.selectedBgColor = $event
                              }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    "footer-right": withCtx(() => [
                      createVNode(_component_t_button, {
                        radius: 3,
                        color: "white",
                        onClick: ($event) => _ctx.showModal1 = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Close ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_t_button, {
                        radius: 3,
                        color: "green"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_icon, { icon: "save" }),
                          createTextVNode(" Save ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["dark-mode", "bg-color", "design", "color", "modelValue", "onUpdate:modelValue"])
                ])),
                (openBlock(), createBlock(Teleport, { to: "body" }, [
                  createVNode(_component_t_modal, {
                    title: "Timed Modal",
                    "sub-title": "Countdown: 3 seconds",
                    content: "This modal will close after 3 seconds",
                    timer: 3e3,
                    radius: 3,
                    "out-side-click": "",
                    modelValue: _ctx.showModal2,
                    "onUpdate:modelValue": ($event) => _ctx.showModal2 = $event,
                    "bg-color": "blue"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])),
                (openBlock(), createBlock(Teleport, { to: "body" }, [
                  createVNode(_component_t_modal, {
                    modelValue: _ctx.showModal3,
                    "onUpdate:modelValue": ($event) => _ctx.showModal3 = $event,
                    radius: 3,
                    design: "elegant",
                    color: "red",
                    title: "ESC + Outside Click",
                    "sub-title": "Different ways for close",
                    content: "You can click to outside of this modal or <br>press to ESC key on the keyboard",
                    "out-side-click": "",
                    esc: ""
                  }, {
                    "footer-left": withCtx(() => [
                      createVNode(_component_t_button, {
                        radius: 3,
                        color: "white",
                        onClick: ($event) => _ctx.showModal3 = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    "footer-right": withCtx(() => [
                      createVNode(_component_t_button, {
                        radius: 3,
                        design: "light",
                        color: "red"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_icon, { icon: "trash" }),
                          createTextVNode(" Delete it ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ])),
                (openBlock(), createBlock(Teleport, { to: "body" }, [
                  createVNode(_component_t_modal, {
                    modelValue: _ctx.showModal4,
                    "onUpdate:modelValue": ($event) => _ctx.showModal4 = $event,
                    color: "white",
                    "bg-color": "yellow",
                    radius: 3,
                    title: "Please wait",
                    "sub-title": "Your test will be ready after 30 minutes"
                  }, {
                    icon: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "w-20 h-20 text-yellow-500",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 120.88 122.88"
                      }, [
                        createVNode("title", null, "30-seconds"),
                        createVNode("path", { d: "M60.22,113.81a4.54,4.54,0,0,1,0,9.07A60.23,60.23,0,1,1,89.71,10.16l-1.26-3.3a5.06,5.06,0,1,1,9.45-3.6l5,13.15a5,5,0,0,1,.32,1.55,5,5,0,0,1-3.51,5.64L86.27,27.72a5,5,0,0,1-2.92-9.65l1.28-.39a50.55,50.55,0,0,0-10.19-4.19A51.17,51.17,0,1,0,60.22,113.81ZM42.78,91.21c-.6,0-1.18,0-1.75-.06s-1.12-.09-1.67-.16-1.08-.15-1.58-.24-1-.2-1.46-.33V86.26c.61,0,1.27.1,2,.14l2.17.08,2,0A6.82,6.82,0,0,0,44,86.37a1.89,1.89,0,0,0,.9-.43,1.13,1.13,0,0,0,.29-.81V84.8a1,1,0,0,0-.42-.89,1.61,1.61,0,0,0-1-.3H42.35a7.17,7.17,0,0,1-4.76-1.38Q36,80.85,36,77.61v-.89a5.45,5.45,0,0,1,1.78-4.45,7.89,7.89,0,0,1,5.14-1.47,22.61,22.61,0,0,1,2.39.12c.75.08,1.45.18,2.11.3s1.24.24,1.77.36v4.17c-.83-.08-1.76-.13-2.8-.18s-2-.07-2.82-.07a7.88,7.88,0,0,0-1.36.11,1.76,1.76,0,0,0-.92.43,1.31,1.31,0,0,0-.32.95v.27a1.25,1.25,0,0,0,.43,1,2.11,2.11,0,0,0,1.33.35h1.78a6.38,6.38,0,0,1,3.15.71,4.67,4.67,0,0,1,1.89,2,6,6,0,0,1,.64,2.8V85a7.08,7.08,0,0,1-.9,3.92,4.34,4.34,0,0,1-2.54,1.82,14.15,14.15,0,0,1-3.94.48Zm16.15,0a10.92,10.92,0,0,1-1.56-.14,5.41,5.41,0,0,1-1.75-.59,3.72,3.72,0,0,1-1.42-1.42,5.17,5.17,0,0,1-.57-2.64V75.93a5.63,5.63,0,0,1,.46-2.43A4,4,0,0,1,55.28,72a4.7,4.7,0,0,1,1.62-.79A7,7,0,0,1,58.63,71c1.51,0,2.82,0,3.91.07s2,.09,2.83.15,1.51.12,2.13.19V75.8H60.25a1.51,1.51,0,0,0-1,.3,1.08,1.08,0,0,0-.36.89v1.68l7.27.27V83.1l-7.27.27v1.51a1.84,1.84,0,0,0,.15.8,1,1,0,0,0,.42.46,1.21,1.21,0,0,0,.6.15H67.5v4.43c-.78.11-1.66.2-2.65.27s-2,.13-3,.16-2,.06-2.89.06Zm18.9,0a10.62,10.62,0,0,1-3-.41,5.06,5.06,0,0,1-2.33-1.49A7.29,7.29,0,0,1,71,86.21a22.24,22.24,0,0,1-.52-5.27A20.22,20.22,0,0,1,71,75.8a7.51,7.51,0,0,1,1.53-3.09,5.2,5.2,0,0,1,2.34-1.52,10,10,0,0,1,3-.42,21.46,21.46,0,0,1,3,.18,18.67,18.67,0,0,1,2.19.42,9.78,9.78,0,0,1,1.45.48v4.08c-.35-.07-.79-.14-1.33-.21s-1.15-.13-1.85-.18-1.44-.06-2.26-.06a5.74,5.74,0,0,0-1.55.18,1.82,1.82,0,0,0-1,.76,4.17,4.17,0,0,0-.56,1.66A20.28,20.28,0,0,0,75.7,81a22.52,22.52,0,0,0,.13,2.7,4.41,4.41,0,0,0,.49,1.69,1.92,1.92,0,0,0,1,.87,4.89,4.89,0,0,0,1.72.25c1.37,0,2.48,0,3.34-.06s1.53-.11,2-.18v4.08a10,10,0,0,1-1.58.46,17.32,17.32,0,0,1-2.13.3c-.81.07-1.77.11-2.89.11Zm-30.32-26c-2.32,0-4.56-.1-6.74-.3s-4.18-.5-6-.87V57.28h9.48a14.79,14.79,0,0,0,2.63-.18,2.22,2.22,0,0,0,1.28-.56,1.6,1.6,0,0,0,.35-1.09v-.82a1.87,1.87,0,0,0-.4-1.26A2.32,2.32,0,0,0,47,52.65a7,7,0,0,0-1.83-.28L37.38,52V45.5L44.73,45a7.5,7.5,0,0,0,2.56-.52,1.41,1.41,0,0,0,.83-1.39v-.39a1.9,1.9,0,0,0-.87-1.78A6.83,6.83,0,0,0,44,40.42H35.17V33.64c1.88-.32,3.87-.62,5.95-.89a39.39,39.39,0,0,1,6.35-.33,12.44,12.44,0,0,1,4.8.93,6.74,6.74,0,0,1,3.11,2.7,8.8,8.8,0,0,1,1.08,4.58v2.18a10,10,0,0,1-.19,2,5.79,5.79,0,0,1-.63,1.69,4.79,4.79,0,0,1-1.13,1.33,5.72,5.72,0,0,1-1.7.91,4.61,4.61,0,0,1,1.81,1,5.86,5.86,0,0,1,1.25,1.58,7.93,7.93,0,0,1,.77,2.07,11.29,11.29,0,0,1,.26,2.45V57.1a7.43,7.43,0,0,1-2.5,6,10.44,10.44,0,0,1-6.89,2.09Zm21.29,0a10.55,10.55,0,0,1-4.93-1,6.54,6.54,0,0,1-2.93-3,10.71,10.71,0,0,1-1-4.72V41.63a11.2,11.2,0,0,1,1-5,7,7,0,0,1,3-3.11,10.16,10.16,0,0,1,4.83-1.06h7a9.35,9.35,0,0,1,4.63,1.06,6.91,6.91,0,0,1,2.86,3.11,11.64,11.64,0,0,1,1,5V56.45a9,9,0,0,1-2.19,6.43,8.25,8.25,0,0,1-6.33,2.35Zm2.09-7.56H73.5a2.17,2.17,0,0,0,2.43-2.52V42.5a2.55,2.55,0,0,0-.61-2,2.26,2.26,0,0,0-1.48-.5H70.59a2.06,2.06,0,0,0-1.66.61,2.94,2.94,0,0,0-.52,1.91V55.1a2.65,2.65,0,0,0,.61,2,2.62,2.62,0,0,0,1.87.59Zm40.33-27.91c-3.52-5.29-11.65-.65-8.57,5.21l.14.22A50,50,0,0,1,107,43.27a5,5,0,1,0,9.28-3.83,61.08,61.08,0,0,0-5.07-9.68ZM77.27,110.47a5,5,0,1,0,3.36,9.46,60.29,60.29,0,0,0,9.94-4.55,5,5,0,0,0-5-8.7,55.52,55.52,0,0,1-8.3,3.79ZM99.4,95c-3.66,4.44,2.09,10.86,7.08,7a5.37,5.37,0,0,0,.71-.72,64.19,64.19,0,0,0,6.11-9.06,5,5,0,0,0-8.48-5.34A77.5,77.5,0,0,1,99.4,95Zm10.88-24.81a5,5,0,0,0,9.63,2.58,4.83,4.83,0,0,0,.3-1.13,60.28,60.28,0,0,0,.64-10.9c-.28-6.19-9.41-6.63-10-.12v.82a52.28,52.28,0,0,1-.55,8.75Z" })
                      ]))
                    ]),
                    "footer-left": withCtx(() => [
                      createVNode(_component_t_button, {
                        radius: 3,
                        color: "white",
                        onClick: ($event) => _ctx.showModal4 = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    "footer-right": withCtx(() => [
                      createVNode(_component_t_button, {
                        loading: "",
                        radius: 3,
                        design: "light",
                        color: "green"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Wait ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_t_content_card, null, {
            title: withCtx(() => [
              createTextVNode("Click to the buttons for show modal windows")
            ]),
            subTitle: withCtx(() => [
              createTextVNode("10 solid, 8 light and limitless gradient color options with radius")
            ]),
            default: withCtx(() => [
              createVNode(_component_grid_section, {
                "col-tablet": 2,
                "col-laptop": 4
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_button, {
                    color: "white",
                    type: "button",
                    onClick: ($event) => _ctx.showModal1 = !_ctx.showModal1
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Show Simple Modal ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_t_button, {
                    design: "light",
                    color: "blue",
                    type: "button",
                    onClick: ($event) => _ctx.showModal2 = !_ctx.showModal2
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" With Timer ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_t_button, {
                    color: "red",
                    type: "button",
                    onClick: ($event) => _ctx.showModal3 = !_ctx.showModal3
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" With ESC & Out-Side Click ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_t_button, {
                    color: "indigo",
                    type: "button",
                    onClick: ($event) => _ctx.showModal4 = !_ctx.showModal4
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" With Predefined Icons ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              (openBlock(), createBlock(Teleport, { to: "body" }, [
                createVNode(_component_t_modal, {
                  title: "Registration",
                  "sub-title": "Your register success",
                  content: "User infos registered to database<br> Please check your mailbox for apply message",
                  "dark-mode": _ctx.selectedDarkMode,
                  "bg-color": _ctx.selectedBgColor,
                  design: _ctx.selectedDesign,
                  color: _ctx.selectedColor,
                  icon: "success",
                  radius: 3,
                  modelValue: _ctx.showModal1,
                  "onUpdate:modelValue": ($event) => _ctx.showModal1 = $event
                }, {
                  "action-buttons": withCtx(() => [
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
                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      }),
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      })
                    ])),
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
                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      })
                    ])),
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
                        d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      }),
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      })
                    ]))
                  ]),
                  header: withCtx(() => [
                    createTextVNode("Modal Header")
                  ]),
                  content: withCtx(() => [
                    createVNode(_component_grid_section, { col: 2 }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_group, { label: "Box Design" }, {
                          default: withCtx(() => [
                            createVNode(_component_t_input_select, {
                              options: _ctx.designOptions,
                              modelValue: _ctx.selectedDesign,
                              "onUpdate:modelValue": ($event) => _ctx.selectedDesign = $event
                            }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_input_group, { label: "Box Color" }, {
                          default: withCtx(() => [
                            createVNode(_component_t_input_select, {
                              options: _ctx.colorOptions,
                              modelValue: _ctx.selectedColor,
                              "onUpdate:modelValue": ($event) => _ctx.selectedColor = $event
                            }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_input_group, { label: "Dark Mode" }, {
                          default: withCtx(() => [
                            createVNode(_component_t_input_select, {
                              options: _ctx.darkModeOptions,
                              modelValue: _ctx.selectedDarkMode,
                              "onUpdate:modelValue": ($event) => _ctx.selectedDarkMode = $event
                            }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_input_group, { label: "Background Color" }, {
                          default: withCtx(() => [
                            createVNode(_component_t_input_select, {
                              options: _ctx.colorOptions,
                              modelValue: _ctx.selectedBgColor,
                              "onUpdate:modelValue": ($event) => _ctx.selectedBgColor = $event
                            }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  "footer-right": withCtx(() => [
                    createVNode(_component_t_button, {
                      radius: 3,
                      color: "white",
                      onClick: ($event) => _ctx.showModal1 = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Close ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_t_button, {
                      radius: 3,
                      color: "green"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_icon, { icon: "save" }),
                        createTextVNode(" Save ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["dark-mode", "bg-color", "design", "color", "modelValue", "onUpdate:modelValue"])
              ])),
              (openBlock(), createBlock(Teleport, { to: "body" }, [
                createVNode(_component_t_modal, {
                  title: "Timed Modal",
                  "sub-title": "Countdown: 3 seconds",
                  content: "This modal will close after 3 seconds",
                  timer: 3e3,
                  radius: 3,
                  "out-side-click": "",
                  modelValue: _ctx.showModal2,
                  "onUpdate:modelValue": ($event) => _ctx.showModal2 = $event,
                  "bg-color": "blue"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])),
              (openBlock(), createBlock(Teleport, { to: "body" }, [
                createVNode(_component_t_modal, {
                  modelValue: _ctx.showModal3,
                  "onUpdate:modelValue": ($event) => _ctx.showModal3 = $event,
                  radius: 3,
                  design: "elegant",
                  color: "red",
                  title: "ESC + Outside Click",
                  "sub-title": "Different ways for close",
                  content: "You can click to outside of this modal or <br>press to ESC key on the keyboard",
                  "out-side-click": "",
                  esc: ""
                }, {
                  "footer-left": withCtx(() => [
                    createVNode(_component_t_button, {
                      radius: 3,
                      color: "white",
                      onClick: ($event) => _ctx.showModal3 = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  "footer-right": withCtx(() => [
                    createVNode(_component_t_button, {
                      radius: 3,
                      design: "light",
                      color: "red"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_icon, { icon: "trash" }),
                        createTextVNode(" Delete it ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ])),
              (openBlock(), createBlock(Teleport, { to: "body" }, [
                createVNode(_component_t_modal, {
                  modelValue: _ctx.showModal4,
                  "onUpdate:modelValue": ($event) => _ctx.showModal4 = $event,
                  color: "white",
                  "bg-color": "yellow",
                  radius: 3,
                  title: "Please wait",
                  "sub-title": "Your test will be ready after 30 minutes"
                }, {
                  icon: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "w-20 h-20 text-yellow-500",
                      fill: "currentColor",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 120.88 122.88"
                    }, [
                      createVNode("title", null, "30-seconds"),
                      createVNode("path", { d: "M60.22,113.81a4.54,4.54,0,0,1,0,9.07A60.23,60.23,0,1,1,89.71,10.16l-1.26-3.3a5.06,5.06,0,1,1,9.45-3.6l5,13.15a5,5,0,0,1,.32,1.55,5,5,0,0,1-3.51,5.64L86.27,27.72a5,5,0,0,1-2.92-9.65l1.28-.39a50.55,50.55,0,0,0-10.19-4.19A51.17,51.17,0,1,0,60.22,113.81ZM42.78,91.21c-.6,0-1.18,0-1.75-.06s-1.12-.09-1.67-.16-1.08-.15-1.58-.24-1-.2-1.46-.33V86.26c.61,0,1.27.1,2,.14l2.17.08,2,0A6.82,6.82,0,0,0,44,86.37a1.89,1.89,0,0,0,.9-.43,1.13,1.13,0,0,0,.29-.81V84.8a1,1,0,0,0-.42-.89,1.61,1.61,0,0,0-1-.3H42.35a7.17,7.17,0,0,1-4.76-1.38Q36,80.85,36,77.61v-.89a5.45,5.45,0,0,1,1.78-4.45,7.89,7.89,0,0,1,5.14-1.47,22.61,22.61,0,0,1,2.39.12c.75.08,1.45.18,2.11.3s1.24.24,1.77.36v4.17c-.83-.08-1.76-.13-2.8-.18s-2-.07-2.82-.07a7.88,7.88,0,0,0-1.36.11,1.76,1.76,0,0,0-.92.43,1.31,1.31,0,0,0-.32.95v.27a1.25,1.25,0,0,0,.43,1,2.11,2.11,0,0,0,1.33.35h1.78a6.38,6.38,0,0,1,3.15.71,4.67,4.67,0,0,1,1.89,2,6,6,0,0,1,.64,2.8V85a7.08,7.08,0,0,1-.9,3.92,4.34,4.34,0,0,1-2.54,1.82,14.15,14.15,0,0,1-3.94.48Zm16.15,0a10.92,10.92,0,0,1-1.56-.14,5.41,5.41,0,0,1-1.75-.59,3.72,3.72,0,0,1-1.42-1.42,5.17,5.17,0,0,1-.57-2.64V75.93a5.63,5.63,0,0,1,.46-2.43A4,4,0,0,1,55.28,72a4.7,4.7,0,0,1,1.62-.79A7,7,0,0,1,58.63,71c1.51,0,2.82,0,3.91.07s2,.09,2.83.15,1.51.12,2.13.19V75.8H60.25a1.51,1.51,0,0,0-1,.3,1.08,1.08,0,0,0-.36.89v1.68l7.27.27V83.1l-7.27.27v1.51a1.84,1.84,0,0,0,.15.8,1,1,0,0,0,.42.46,1.21,1.21,0,0,0,.6.15H67.5v4.43c-.78.11-1.66.2-2.65.27s-2,.13-3,.16-2,.06-2.89.06Zm18.9,0a10.62,10.62,0,0,1-3-.41,5.06,5.06,0,0,1-2.33-1.49A7.29,7.29,0,0,1,71,86.21a22.24,22.24,0,0,1-.52-5.27A20.22,20.22,0,0,1,71,75.8a7.51,7.51,0,0,1,1.53-3.09,5.2,5.2,0,0,1,2.34-1.52,10,10,0,0,1,3-.42,21.46,21.46,0,0,1,3,.18,18.67,18.67,0,0,1,2.19.42,9.78,9.78,0,0,1,1.45.48v4.08c-.35-.07-.79-.14-1.33-.21s-1.15-.13-1.85-.18-1.44-.06-2.26-.06a5.74,5.74,0,0,0-1.55.18,1.82,1.82,0,0,0-1,.76,4.17,4.17,0,0,0-.56,1.66A20.28,20.28,0,0,0,75.7,81a22.52,22.52,0,0,0,.13,2.7,4.41,4.41,0,0,0,.49,1.69,1.92,1.92,0,0,0,1,.87,4.89,4.89,0,0,0,1.72.25c1.37,0,2.48,0,3.34-.06s1.53-.11,2-.18v4.08a10,10,0,0,1-1.58.46,17.32,17.32,0,0,1-2.13.3c-.81.07-1.77.11-2.89.11Zm-30.32-26c-2.32,0-4.56-.1-6.74-.3s-4.18-.5-6-.87V57.28h9.48a14.79,14.79,0,0,0,2.63-.18,2.22,2.22,0,0,0,1.28-.56,1.6,1.6,0,0,0,.35-1.09v-.82a1.87,1.87,0,0,0-.4-1.26A2.32,2.32,0,0,0,47,52.65a7,7,0,0,0-1.83-.28L37.38,52V45.5L44.73,45a7.5,7.5,0,0,0,2.56-.52,1.41,1.41,0,0,0,.83-1.39v-.39a1.9,1.9,0,0,0-.87-1.78A6.83,6.83,0,0,0,44,40.42H35.17V33.64c1.88-.32,3.87-.62,5.95-.89a39.39,39.39,0,0,1,6.35-.33,12.44,12.44,0,0,1,4.8.93,6.74,6.74,0,0,1,3.11,2.7,8.8,8.8,0,0,1,1.08,4.58v2.18a10,10,0,0,1-.19,2,5.79,5.79,0,0,1-.63,1.69,4.79,4.79,0,0,1-1.13,1.33,5.72,5.72,0,0,1-1.7.91,4.61,4.61,0,0,1,1.81,1,5.86,5.86,0,0,1,1.25,1.58,7.93,7.93,0,0,1,.77,2.07,11.29,11.29,0,0,1,.26,2.45V57.1a7.43,7.43,0,0,1-2.5,6,10.44,10.44,0,0,1-6.89,2.09Zm21.29,0a10.55,10.55,0,0,1-4.93-1,6.54,6.54,0,0,1-2.93-3,10.71,10.71,0,0,1-1-4.72V41.63a11.2,11.2,0,0,1,1-5,7,7,0,0,1,3-3.11,10.16,10.16,0,0,1,4.83-1.06h7a9.35,9.35,0,0,1,4.63,1.06,6.91,6.91,0,0,1,2.86,3.11,11.64,11.64,0,0,1,1,5V56.45a9,9,0,0,1-2.19,6.43,8.25,8.25,0,0,1-6.33,2.35Zm2.09-7.56H73.5a2.17,2.17,0,0,0,2.43-2.52V42.5a2.55,2.55,0,0,0-.61-2,2.26,2.26,0,0,0-1.48-.5H70.59a2.06,2.06,0,0,0-1.66.61,2.94,2.94,0,0,0-.52,1.91V55.1a2.65,2.65,0,0,0,.61,2,2.62,2.62,0,0,0,1.87.59Zm40.33-27.91c-3.52-5.29-11.65-.65-8.57,5.21l.14.22A50,50,0,0,1,107,43.27a5,5,0,1,0,9.28-3.83,61.08,61.08,0,0,0-5.07-9.68ZM77.27,110.47a5,5,0,1,0,3.36,9.46,60.29,60.29,0,0,0,9.94-4.55,5,5,0,0,0-5-8.7,55.52,55.52,0,0,1-8.3,3.79ZM99.4,95c-3.66,4.44,2.09,10.86,7.08,7a5.37,5.37,0,0,0,.71-.72,64.19,64.19,0,0,0,6.11-9.06,5,5,0,0,0-8.48-5.34A77.5,77.5,0,0,1,99.4,95Zm10.88-24.81a5,5,0,0,0,9.63,2.58,4.83,4.83,0,0,0,.3-1.13,60.28,60.28,0,0,0,.64-10.9c-.28-6.19-9.41-6.63-10-.12v.82a52.28,52.28,0,0,1-.55,8.75Z" })
                    ]))
                  ]),
                  "footer-left": withCtx(() => [
                    createVNode(_component_t_button, {
                      radius: 3,
                      color: "white",
                      onClick: ($event) => _ctx.showModal4 = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  "footer-right": withCtx(() => [
                    createVNode(_component_t_button, {
                      loading: "",
                      radius: 3,
                      design: "light",
                      color: "green"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Wait ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Modal as default
};

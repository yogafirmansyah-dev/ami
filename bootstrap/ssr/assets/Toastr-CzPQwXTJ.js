import { A as AppLayout } from "./AppLayout-CbW7EXnn.js";
import { T as TFormSection, a as TFormContent } from "./TFormContent-CWNM0Okg.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { T as TInputSelect } from "./TInputSelect-BY60CBa7.js";
import { resolveComponent, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./windowSizeCalculator-EVN4qZjG.js";
import "./TDropdown-BaNvbUUI.js";
import "./TAvatar-rvhW0AFR.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "./TContentCard-DzR3gMGe.js";
const _sfc_main = {
  name: "Toaster",
  components: {
    TInputSelect,
    TInputText,
    TInputGroup,
    TFormContent,
    TFormSection,
    AppLayout
  },
  data() {
    return {
      colorOptions: {
        "red": {
          label: "Red",
          alertStyle: "bg-red-200 border-red-500 text-red-700 shadow-sm"
        },
        "blue": {
          label: "Blue",
          alertStyle: "bg-blue-200 border-blue-500 text-blue-700 shadow-sm"
        },
        "green": {
          label: "Green",
          alertStyle: "bg-green-200 border-green-500 text-green-700 shadow-sm"
        },
        "yellow": {
          label: "Yellow",
          alertStyle: "bg-yellow-200 border-yellow-500 text-yellow-700 shadow-sm"
        },
        "indigo": {
          label: "Indigo",
          alertStyle: "bg-indigo-200 border-indigo-500 text-indigo-700 shadow-sm"
        },
        "purple": {
          label: "Purple",
          alertStyle: "bg-purple-200 border-purple-500 text-purple-700 shadow-sm"
        },
        "pink": {
          label: "Pink",
          alertStyle: "bg-pink-200 border-pink-500 text-pink-700 shadow-sm"
        },
        "white": {
          label: "White",
          alertStyle: "bg-white border-gray-300 shadow-sm"
        },
        "gray": {
          label: "Gray",
          alertStyle: "bg-gray-200 border-gray-500 text-gray-700 shadow-sm"
        },
        "black": {
          label: "Black",
          alertStyle: "bg-gray-700 border-black text-gray-200 shadow-sm"
        }
      }
    };
  },
  methods: {
    toastAlert() {
      this.$page.props.flash.toastr = {
        color: "red",
        position: "",
        closeable: true,
        timer: 6e3,
        content: "Selam ben bir uyarı kutusuyum"
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_t_form_content = resolveComponent("t-form-content");
  const _component_t_form_section = resolveComponent("t-form-section");
  const _component_t_input_group = resolveComponent("t-input-group");
  const _component_t_input_text = resolveComponent("t-input-text");
  const _component_t_input_select = resolveComponent("t-input-select");
  const _component_t_input_select_item = resolveComponent("t-input-select-item");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Toaster Notifications`);
      } else {
        return [
          createTextVNode("Toaster Notifications")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Elegant and simple notifications bubbles`);
      } else {
        return [
          createTextVNode("Elegant and simple notifications bubbles")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_t_form_content, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_form_section, {
                description: "You can customize toaster notfication to demo",
                title: "Toaster Customizer"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      "label-for": "timer",
                      label: "Timer",
                      class: "col-span-12 md:col-span-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "timer",
                            placeholder: "3000"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "timer",
                              placeholder: "3000"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      "label-for": "timer",
                      label: "Timer",
                      class: "col-span-12 md:col-span-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_select, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<!--[-->`);
                                ssrRenderList($data.colorOptions, (item) => {
                                  _push6(ssrRenderComponent(_component_t_input_select_item, {
                                    key: item.key
                                  }, null, _parent6, _scopeId5));
                                });
                                _push6(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.colorOptions, (item) => {
                                    return openBlock(), createBlock(_component_t_input_select_item, {
                                      key: item.key
                                    });
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_select, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList($data.colorOptions, (item) => {
                                  return openBlock(), createBlock(_component_t_input_select_item, {
                                    key: item.key
                                  });
                                }), 128))
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
                      createVNode(_component_t_input_group, {
                        "label-for": "timer",
                        label: "Timer",
                        class: "col-span-12 md:col-span-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "timer",
                            placeholder: "3000"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        "label-for": "timer",
                        label: "Timer",
                        class: "col-span-12 md:col-span-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_select, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList($data.colorOptions, (item) => {
                                return openBlock(), createBlock(_component_t_input_select_item, {
                                  key: item.key
                                });
                              }), 128))
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_form_section, {
                  description: "You can customize toaster notfication to demo",
                  title: "Toaster Customizer"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_input_group, {
                      "label-for": "timer",
                      label: "Timer",
                      class: "col-span-12 md:col-span-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "timer",
                          placeholder: "3000"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      "label-for": "timer",
                      label: "Timer",
                      class: "col-span-12 md:col-span-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_select, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList($data.colorOptions, (item) => {
                              return openBlock(), createBlock(_component_t_input_select_item, {
                                key: item.key
                              });
                            }), 128))
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_t_form_content, null, {
            default: withCtx(() => [
              createVNode(_component_t_form_section, {
                description: "You can customize toaster notfication to demo",
                title: "Toaster Customizer"
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_input_group, {
                    "label-for": "timer",
                    label: "Timer",
                    class: "col-span-12 md:col-span-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "timer",
                        placeholder: "3000"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    "label-for": "timer",
                    label: "Timer",
                    class: "col-span-12 md:col-span-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_select, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList($data.colorOptions, (item) => {
                            return openBlock(), createBlock(_component_t_input_select_item, {
                              key: item.key
                            });
                          }), 128))
                        ]),
                        _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Toastr.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Toastr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Toastr as default
};

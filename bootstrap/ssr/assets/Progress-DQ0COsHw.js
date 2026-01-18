import { A as AppLayout } from "./AppLayout-3kkfgqRQ.js";
import { defineComponent, resolveComponent, withCtx, createVNode, createTextVNode, ref, watch, useSSRContext } from "vue";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TContentCard } from "./TContentCard-DJ3stJrh.js";
import { T as TProgress } from "./TProgress-BC509yXV.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./windowSizeCalculator-BWfQvLaG.js";
import "./TDropdown-8S66trQc.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-BYbkHFXz.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = defineComponent({
  name: "Progress",
  components: { TInputText, TInputGroup, TProgress, TContentCard, GridSection, AppLayout },
  setup() {
    const target = ref(25);
    watch(
      target,
      (newValue) => {
        if (newValue.toString() === null || isNaN(newValue) || newValue.toString() === "") {
          target.value = 0;
        }
      }
    );
    return { target };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_content_card = resolveComponent("t-content-card");
  const _component_t_input_group = resolveComponent("t-input-group");
  const _component_t_input_text = resolveComponent("t-input-text");
  const _component_t_progress = resolveComponent("t-progress");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Progress Bars`);
      } else {
        return [
          createTextVNode("Progress Bars")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Loading, graphical indicator and more than`);
      } else {
        return [
          createTextVNode("Loading, graphical indicator and more than")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_grid_section, { col: 1 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_content_card, { width: 1 }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Simple and colorful`);
                  } else {
                    return [
                      createTextVNode("Simple and colorful")
                    ];
                  }
                }),
                subTitle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`8 different color and 5 different height`);
                  } else {
                    return [
                      createTextVNode("8 different color and 5 different height")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col w-full gap-4"${_scopeId3}><div class="flex flex-col md:flex-row justify-center space-y-2 md:space-x-2 items-center w-full"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "w-full md:w-36",
                      label: "Target Value",
                      "label-for": "target"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            modelValue: _ctx.target,
                            "onUpdate:modelValue": ($event) => _ctx.target = $event,
                            modelModifiers: { lazy: true, number: true },
                            type: "number"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              modelValue: _ctx.target,
                              "onUpdate:modelValue": ($event) => _ctx.target = $event,
                              modelModifiers: { lazy: true, number: true },
                              type: "number"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_progress, {
                      height: 1,
                      modelValue: _ctx.target,
                      "onUpdate:modelValue": ($event) => _ctx.target = $event,
                      title: "Performance"
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                    _push4(ssrRenderComponent(_component_t_progress, {
                      height: 2,
                      "model-value": 10,
                      "counter-text": "$a",
                      color: "indigo",
                      title: "Claim"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_progress, {
                      height: 3,
                      "model-value": 50,
                      "counter-text": "$a TRY",
                      color: "yellow",
                      title: "Cost"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_progress, {
                      height: 4,
                      "model-value": 75,
                      "counter-text": "$a Hour/Person",
                      color: "purple",
                      title: "Working Costs"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_progress, {
                      height: 5,
                      "model-value": 25040,
                      max: 1e5,
                      "counter-text": "-$aK",
                      color: "red",
                      title: "Lost"
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col w-full gap-4" }, [
                        createVNode("div", { class: "flex flex-col md:flex-row justify-center space-y-2 md:space-x-2 items-center w-full" }, [
                          createVNode(_component_t_input_group, {
                            class: "w-full md:w-36",
                            label: "Target Value",
                            "label-for": "target"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_t_input_text, {
                                modelValue: _ctx.target,
                                "onUpdate:modelValue": ($event) => _ctx.target = $event,
                                modelModifiers: { lazy: true, number: true },
                                type: "number"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_progress, {
                            height: 1,
                            modelValue: _ctx.target,
                            "onUpdate:modelValue": ($event) => _ctx.target = $event,
                            title: "Performance"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode(_component_t_progress, {
                          height: 2,
                          "model-value": 10,
                          "counter-text": "$a",
                          color: "indigo",
                          title: "Claim"
                        }),
                        createVNode(_component_t_progress, {
                          height: 3,
                          "model-value": 50,
                          "counter-text": "$a TRY",
                          color: "yellow",
                          title: "Cost"
                        }),
                        createVNode(_component_t_progress, {
                          height: 4,
                          "model-value": 75,
                          "counter-text": "$a Hour/Person",
                          color: "purple",
                          title: "Working Costs"
                        }),
                        createVNode(_component_t_progress, {
                          height: 5,
                          "model-value": 25040,
                          max: 1e5,
                          "counter-text": "-$aK",
                          color: "red",
                          title: "Lost"
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
                    createTextVNode("Simple and colorful")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode("8 different color and 5 different height")
                  ]),
                  content: withCtx(() => [
                    createVNode("div", { class: "flex flex-col w-full gap-4" }, [
                      createVNode("div", { class: "flex flex-col md:flex-row justify-center space-y-2 md:space-x-2 items-center w-full" }, [
                        createVNode(_component_t_input_group, {
                          class: "w-full md:w-36",
                          label: "Target Value",
                          "label-for": "target"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_t_input_text, {
                              modelValue: _ctx.target,
                              "onUpdate:modelValue": ($event) => _ctx.target = $event,
                              modelModifiers: { lazy: true, number: true },
                              type: "number"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_progress, {
                          height: 1,
                          modelValue: _ctx.target,
                          "onUpdate:modelValue": ($event) => _ctx.target = $event,
                          title: "Performance"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode(_component_t_progress, {
                        height: 2,
                        "model-value": 10,
                        "counter-text": "$a",
                        color: "indigo",
                        title: "Claim"
                      }),
                      createVNode(_component_t_progress, {
                        height: 3,
                        "model-value": 50,
                        "counter-text": "$a TRY",
                        color: "yellow",
                        title: "Cost"
                      }),
                      createVNode(_component_t_progress, {
                        height: 4,
                        "model-value": 75,
                        "counter-text": "$a Hour/Person",
                        color: "purple",
                        title: "Working Costs"
                      }),
                      createVNode(_component_t_progress, {
                        height: 5,
                        "model-value": 25040,
                        max: 1e5,
                        "counter-text": "-$aK",
                        color: "red",
                        title: "Lost"
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
                title: withCtx(() => [
                  createTextVNode("Simple and colorful")
                ]),
                subTitle: withCtx(() => [
                  createTextVNode("8 different color and 5 different height")
                ]),
                content: withCtx(() => [
                  createVNode("div", { class: "flex flex-col w-full gap-4" }, [
                    createVNode("div", { class: "flex flex-col md:flex-row justify-center space-y-2 md:space-x-2 items-center w-full" }, [
                      createVNode(_component_t_input_group, {
                        class: "w-full md:w-36",
                        label: "Target Value",
                        "label-for": "target"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            modelValue: _ctx.target,
                            "onUpdate:modelValue": ($event) => _ctx.target = $event,
                            modelModifiers: { lazy: true, number: true },
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_progress, {
                        height: 1,
                        modelValue: _ctx.target,
                        "onUpdate:modelValue": ($event) => _ctx.target = $event,
                        title: "Performance"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(_component_t_progress, {
                      height: 2,
                      "model-value": 10,
                      "counter-text": "$a",
                      color: "indigo",
                      title: "Claim"
                    }),
                    createVNode(_component_t_progress, {
                      height: 3,
                      "model-value": 50,
                      "counter-text": "$a TRY",
                      color: "yellow",
                      title: "Cost"
                    }),
                    createVNode(_component_t_progress, {
                      height: 4,
                      "model-value": 75,
                      "counter-text": "$a Hour/Person",
                      color: "purple",
                      title: "Working Costs"
                    }),
                    createVNode(_component_t_progress, {
                      height: 5,
                      "model-value": 25040,
                      max: 1e5,
                      "counter-text": "-$aK",
                      color: "red",
                      title: "Lost"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Progress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Progress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Progress as default
};

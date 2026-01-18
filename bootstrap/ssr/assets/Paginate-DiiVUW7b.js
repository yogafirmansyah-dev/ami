import { A as AppLayout } from "./AppLayout-3kkfgqRQ.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TContentCard } from "./TContentCard-DJ3stJrh.js";
import { T as TPaginate } from "./TPaginate-AWicR3Cf.js";
import { T as TComponentStyleSelector } from "./TComponentStyleSelector-GmPZoTkx.js";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
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
import "./TCheckIcon-CWPVq9Ck.js";
import "./TInputSelect-BY60CBa7.js";
import "./TInputText-CyR_XUuU.js";
const _sfc_main = {
  name: "Paginate",
  components: { ContentCard: TContentCard, GridSection, AppLayout, TPaginate, TComponentStyleSelector },
  data() {
    return {
      activePage1: 2,
      activePage2: 1,
      activePage3: 5,
      activePage4: 10,
      selectedData: {
        color: "gray"
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_t_component_style_selector = resolveComponent("t-component-style-selector");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_content_card = resolveComponent("content-card");
  const _component_t_paginate = resolveComponent("t-paginate");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Pagination" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pagination`);
      } else {
        return [
          createTextVNode("Pagination")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tables, lists and all of lists`);
      } else {
        return [
          createTextVNode("Tables, lists and all of lists")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_t_component_style_selector, {
          class: "mb-4",
          modelValue: $data.selectedData,
          "onUpdate:modelValue": ($event) => $data.selectedData = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_grid_section, {
          "col-desktop": 2,
          gap: 4
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_content_card, { width: 1 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_paginate, {
                      reverse: "",
                      modelValue: $data.activePage1,
                      "onUpdate:modelValue": ($event) => $data.activePage1 = $event,
                      color: $data.selectedData.color,
                      range: 5,
                      total: 54321,
                      jump: ""
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_paginate, {
                      modelValue: $data.activePage2,
                      "onUpdate:modelValue": ($event) => $data.activePage2 = $event,
                      color: $data.selectedData.color,
                      radius: 3,
                      range: 3,
                      total: 17,
                      jump: false,
                      "arrow-text": false
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_paginate, {
                        reverse: "",
                        modelValue: $data.activePage1,
                        "onUpdate:modelValue": ($event) => $data.activePage1 = $event,
                        color: $data.selectedData.color,
                        range: 5,
                        total: 54321,
                        jump: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "color"]),
                      createVNode(_component_t_paginate, {
                        modelValue: $data.activePage2,
                        "onUpdate:modelValue": ($event) => $data.activePage2 = $event,
                        color: $data.selectedData.color,
                        radius: 3,
                        range: 3,
                        total: 17,
                        jump: false,
                        "arrow-text": false
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_content_card, { width: 1 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_paginate, {
                      modelValue: $data.activePage3,
                      "onUpdate:modelValue": ($event) => $data.activePage3 = $event,
                      color: $data.selectedData.color,
                      radius: 5,
                      range: 4,
                      total: 17,
                      detail: false
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_paginate, {
                      jump: true,
                      modelValue: $data.activePage4,
                      "onUpdate:modelValue": ($event) => $data.activePage4 = $event,
                      color: $data.selectedData.color,
                      radius: 8,
                      range: 5,
                      total: 17
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_paginate, {
                        modelValue: $data.activePage3,
                        "onUpdate:modelValue": ($event) => $data.activePage3 = $event,
                        color: $data.selectedData.color,
                        radius: 5,
                        range: 4,
                        total: 17,
                        detail: false
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "color"]),
                      createVNode(_component_t_paginate, {
                        jump: true,
                        modelValue: $data.activePage4,
                        "onUpdate:modelValue": ($event) => $data.activePage4 = $event,
                        color: $data.selectedData.color,
                        radius: 8,
                        range: 5,
                        total: 17
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_content_card, { width: 1 }, {
                  default: withCtx(() => [
                    createVNode(_component_t_paginate, {
                      reverse: "",
                      modelValue: $data.activePage1,
                      "onUpdate:modelValue": ($event) => $data.activePage1 = $event,
                      color: $data.selectedData.color,
                      range: 5,
                      total: 54321,
                      jump: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "color"]),
                    createVNode(_component_t_paginate, {
                      modelValue: $data.activePage2,
                      "onUpdate:modelValue": ($event) => $data.activePage2 = $event,
                      color: $data.selectedData.color,
                      radius: 3,
                      range: 3,
                      total: 17,
                      jump: false,
                      "arrow-text": false
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                  ]),
                  _: 1
                }),
                createVNode(_component_content_card, { width: 1 }, {
                  default: withCtx(() => [
                    createVNode(_component_t_paginate, {
                      modelValue: $data.activePage3,
                      "onUpdate:modelValue": ($event) => $data.activePage3 = $event,
                      color: $data.selectedData.color,
                      radius: 5,
                      range: 4,
                      total: 17,
                      detail: false
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "color"]),
                    createVNode(_component_t_paginate, {
                      jump: true,
                      modelValue: $data.activePage4,
                      "onUpdate:modelValue": ($event) => $data.activePage4 = $event,
                      color: $data.selectedData.color,
                      radius: 8,
                      range: 5,
                      total: 17
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
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
            modelValue: $data.selectedData,
            "onUpdate:modelValue": ($event) => $data.selectedData = $event
          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_grid_section, {
            "col-desktop": 2,
            gap: 4
          }, {
            default: withCtx(() => [
              createVNode(_component_content_card, { width: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_t_paginate, {
                    reverse: "",
                    modelValue: $data.activePage1,
                    "onUpdate:modelValue": ($event) => $data.activePage1 = $event,
                    color: $data.selectedData.color,
                    range: 5,
                    total: 54321,
                    jump: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "color"]),
                  createVNode(_component_t_paginate, {
                    modelValue: $data.activePage2,
                    "onUpdate:modelValue": ($event) => $data.activePage2 = $event,
                    color: $data.selectedData.color,
                    radius: 3,
                    range: 3,
                    total: 17,
                    jump: false,
                    "arrow-text": false
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                ]),
                _: 1
              }),
              createVNode(_component_content_card, { width: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_t_paginate, {
                    modelValue: $data.activePage3,
                    "onUpdate:modelValue": ($event) => $data.activePage3 = $event,
                    color: $data.selectedData.color,
                    radius: 5,
                    range: 4,
                    total: 17,
                    detail: false
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "color"]),
                  createVNode(_component_t_paginate, {
                    jump: true,
                    modelValue: $data.activePage4,
                    "onUpdate:modelValue": ($event) => $data.activePage4 = $event,
                    color: $data.selectedData.color,
                    radius: 8,
                    range: 5,
                    total: 17
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Paginate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Paginate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Paginate as default
};

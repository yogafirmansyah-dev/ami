import { A as AppLayout } from "./AppLayout-CbW7EXnn.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TStatisticWidget } from "./TStatisticWidget-SxJQqZAa.js";
import { T as TCashIcon } from "./TCashIcon-CWuKcSJK.js";
import { T as TShoppingBagIcon } from "./TShoppingBagIcon-DXnitscL.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
  name: "StatisticWidget",
  components: { AppLayout, GridSection, TCashIcon, TShoppingBagIcon, TStatisticWidget }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_statistic_widget = resolveComponent("t-statistic-widget");
  const _component_t_cash_icon = resolveComponent("t-cash-icon");
  const _component_t_shopping_bag_icon = resolveComponent("t-shopping-bag-icon");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Statistic Widget`);
      } else {
        return [
          createTextVNode("Statistic Widget")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Preview area for your data`);
      } else {
        return [
          createTextVNode("Preview area for your data")
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
              _push3(ssrRenderComponent(_component_t_statistic_widget, {
                width: 1,
                color: "gradient-purple-to-pink",
                "diff-direction": "down",
                "diff-value": "15%",
                "widget-value": "254"
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Incomes `);
                  } else {
                    return [
                      createTextVNode(" Incomes ")
                    ];
                  }
                }),
                icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_cash_icon, { class: "w-16 h-16" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_cash_icon, { class: "w-16 h-16" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_statistic_widget, {
                radius: 5,
                width: 1,
                color: "solid-green",
                "diff-direction": "up",
                "diff-value": "8",
                "widget-value": "30"
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Daily Done Charts `);
                  } else {
                    return [
                      createTextVNode(" Daily Done Charts ")
                    ];
                  }
                }),
                icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_shopping_bag_icon, { class: "w-15 h-15" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_shopping_bag_icon, { class: "w-15 h-15" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_statistic_widget, {
                radius: 5,
                width: 1,
                color: "solid-red",
                "diff-direction": "positive-down",
                "diff-value": "8%",
                "widget-value": "12.254,05 TL"
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Refunds `);
                  } else {
                    return [
                      createTextVNode(" Refunds ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_statistic_widget, {
                radius: 5,
                width: 1,
                color: "solid-white",
                "diff-direction": "down",
                "diff-value": "15%",
                "widget-value": "254 USD"
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Stationery Cost `);
                  } else {
                    return [
                      createTextVNode(" Stationery Cost ")
                    ];
                  }
                }),
                picture: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", "/img/samples/imgMelBaylon-6WLcOFn4HKE-unsplash.jpg")}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: "/img/samples/imgMelBaylon-6WLcOFn4HKE-unsplash.jpg" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_statistic_widget, {
                  width: 1,
                  color: "gradient-purple-to-pink",
                  "diff-direction": "down",
                  "diff-value": "15%",
                  "widget-value": "254"
                }, {
                  title: withCtx(() => [
                    createTextVNode(" Incomes ")
                  ]),
                  icon: withCtx(() => [
                    createVNode(_component_t_cash_icon, { class: "w-16 h-16" })
                  ]),
                  _: 1
                }),
                createVNode(_component_t_statistic_widget, {
                  radius: 5,
                  width: 1,
                  color: "solid-green",
                  "diff-direction": "up",
                  "diff-value": "8",
                  "widget-value": "30"
                }, {
                  title: withCtx(() => [
                    createTextVNode(" Daily Done Charts ")
                  ]),
                  icon: withCtx(() => [
                    createVNode(_component_t_shopping_bag_icon, { class: "w-15 h-15" })
                  ]),
                  _: 1
                }),
                createVNode(_component_t_statistic_widget, {
                  radius: 5,
                  width: 1,
                  color: "solid-red",
                  "diff-direction": "positive-down",
                  "diff-value": "8%",
                  "widget-value": "12.254,05 TL"
                }, {
                  title: withCtx(() => [
                    createTextVNode(" Refunds ")
                  ]),
                  _: 1
                }),
                createVNode(_component_t_statistic_widget, {
                  radius: 5,
                  width: 1,
                  color: "solid-white",
                  "diff-direction": "down",
                  "diff-value": "15%",
                  "widget-value": "254 USD"
                }, {
                  title: withCtx(() => [
                    createTextVNode(" Stationery Cost ")
                  ]),
                  picture: withCtx(() => [
                    createVNode("img", { src: "/img/samples/imgMelBaylon-6WLcOFn4HKE-unsplash.jpg" })
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
              createVNode(_component_t_statistic_widget, {
                width: 1,
                color: "gradient-purple-to-pink",
                "diff-direction": "down",
                "diff-value": "15%",
                "widget-value": "254"
              }, {
                title: withCtx(() => [
                  createTextVNode(" Incomes ")
                ]),
                icon: withCtx(() => [
                  createVNode(_component_t_cash_icon, { class: "w-16 h-16" })
                ]),
                _: 1
              }),
              createVNode(_component_t_statistic_widget, {
                radius: 5,
                width: 1,
                color: "solid-green",
                "diff-direction": "up",
                "diff-value": "8",
                "widget-value": "30"
              }, {
                title: withCtx(() => [
                  createTextVNode(" Daily Done Charts ")
                ]),
                icon: withCtx(() => [
                  createVNode(_component_t_shopping_bag_icon, { class: "w-15 h-15" })
                ]),
                _: 1
              }),
              createVNode(_component_t_statistic_widget, {
                radius: 5,
                width: 1,
                color: "solid-red",
                "diff-direction": "positive-down",
                "diff-value": "8%",
                "widget-value": "12.254,05 TL"
              }, {
                title: withCtx(() => [
                  createTextVNode(" Refunds ")
                ]),
                _: 1
              }),
              createVNode(_component_t_statistic_widget, {
                radius: 5,
                width: 1,
                color: "solid-white",
                "diff-direction": "down",
                "diff-value": "15%",
                "widget-value": "254 USD"
              }, {
                title: withCtx(() => [
                  createTextVNode(" Stationery Cost ")
                ]),
                picture: withCtx(() => [
                  createVNode("img", { src: "/img/samples/imgMelBaylon-6WLcOFn4HKE-unsplash.jpg" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Layouts/StatisticWidget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StatisticWidget = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  StatisticWidget as default
};

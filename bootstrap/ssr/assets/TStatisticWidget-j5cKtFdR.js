import { defineComponent, mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, createBlock, createCommentVNode, renderSlot, toDisplayString, openBlock, createTextVNode } from "vue";
import { T as TContentCard } from "./TContentCard-CDGc_Lhz.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { a as TChevronDownIcon } from "./TDropdown-DbVD8e4r.js";
const statisticWidgetStyleMixin = {
  props: {
    color: {
      required: false
    },
    gradientDirection: {
      type: String,
      default: "r"
    },
    diffDirection: {
      required: false
    }
  },
  data() {
    return {
      iconColors: {
        "solid-red": "bg-red-500 text-red-500 border-red-500",
        "solid-blue": "bg-blue-500 text-blue-500 border-blue-500",
        "solid-green": "bg-green-500 text-green-500 border-green-500",
        "solid-yellow": "bg-yellow-500 text-yellow-500 border-yellow-500",
        "solid-indigo": "bg-indigo-500 text-indigo-500 border-indigo-500",
        "solid-pink": "bg-pink-500 text-pink-500 border-pink-500",
        "solid-purple": "bg-purple-500 text-purple-500 border-purple-500",
        "solid-gray": "bg-gray-500 text-gray-500 border-gray-500",
        "solid-black": "bg-black-500 text-black-500 border-black-500",
        "solid-white": "bg-white-500 text-white-500 border-white-500",
        "light-red": "bg-red-500 text-red-500 border-red-500",
        "light-blue": "bg-blue-500 text-blue-500 border-blue-500",
        "light-green": "bg-green-500 text-green-500 border-green-500",
        "light-yellow": "bg-yellow-500 text-yellow-500 border-yellow-500",
        "light-indigo": "bg-indigo-500 text-indigo-500 border-indigo-500",
        "light-pink": "bg-pink-500 text-pink-500 border-pink-500",
        "light-purple": "bg-purple-500 text-purple-500 border-purple-500",
        "light-gray": "bg-gray-500 text-gray-500 border-gray-500"
      },
      diffStyles: {
        "up": "text-white bg-green-500 px-3 py-1 rounded-md bg-opacity-70",
        "up-green": "text-green-700 border bg-green-100 px-3 py-1 rounded-md bg-opacity-70",
        "down": "text-white bg-red-500 px-3 py-1 rounded-md bg-opacity-70",
        "down-red": "text-red-700 border bg-red-100 px-3 py-1 rounded-md bg-opacity-70",
        "default": "text-gray-600 bg-white px-3 py-1 rounded-md bg-opacity-70 font-semibold"
      }
    };
  },
  computed: {
    calculatedIconStyle() {
      let style;
      if (this.color.includes("gradient")) {
        style = "border-white " + this.textColorStyle;
      } else {
        style = this.iconColors[this.color];
      }
      return style;
    },
    calculatedDiffStyle() {
      let style;
      if (this.diffDirection === "up" || this.diffDirection === "positive-down") {
        if (this.color === "solid-green") {
          style = this.diffStyles["up-green"];
        } else {
          style = this.diffStyles["up"];
        }
      } else if (this.diffDirection === "down" || this.diffDirection === "negative-up") {
        if (this.color === "solid-red") {
          style = this.diffStyles["down-red"];
        } else {
          style = this.diffStyles["down"];
        }
      }
      return style;
    }
  }
};
const _sfc_main$1 = defineComponent({
  name: "TChevronUpIcon"
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TChevronUpIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TChevronUpIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  name: "TStatisticWidget",
  components: {
    TChevronDownIcon,
    TChevronUpIcon,
    TContentCard
    /*'bar-chart': () => import('@/Components/Chart/TBarChart'),
    'line-chart': () => import('@/Components/Chart/TLineChart'),
    'pie-chart': () => import('@/Components/Chart/TPieChart'),
    'polar-chart': () => import('@/Components/Chart/TPolarChart'),
    'radar-chart': () => import('@/Components/Chart/TRadarChart'),*/
  },
  mixins: [statisticWidgetStyleMixin],
  props: {
    radius: {
      required: false
    },
    width: {
      type: Number,
      required: false,
      default: 1
    },
    widgetValue: {
      required: true
    },
    diffValue: {
      required: false
    }
    /*chartType: {
      required: false,
      default: 'Bar'
    }*/
  },
  data() {
    return {
      /*TODO: Chart feature*/
      /*widget: {
          chartdata: {
              labels: ['January', 'February', 'April', 'March', 'June'],
              datasets: [
                  {
                      fill: false,
                      tension: 0.1,
                      borderColor: '#FFFE12',
                      data: [40, 20, 15, 55, 41]
                  },
                  {
                      label: '12',
                      fill: false,
                      tension: 0.1,
                      borderColor: '#00FF',
                      data: [5, 11, 52, 32, 15]
                  },
              ]
          },
          options: {
              plugins: {
                  legend: false,
              },
              elements: {
                  point: {
                      radius: 8,
                      pointStyle: 'circle'
                  },
              },
              responsive: true,
              maintainAspectRatio: false,
              animations: {
                  tension: {
                      duration: 1000,
                      easing: 'linear',
                      from: 1,
                      to: 0,
                      loop: true
                  }
              },
              scales: {
                  display: false,
                  y: { // defining min and max so hiding the dataset does not change scale range
                      min: 0,
                      max: 100,
                      labels: {
                          display: false
                      },
                      ticks: {
                          display: false
                      }
                  }
              }
          },
          styles: {
              height: '100%'
          }
      }*/
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_content_card = resolveComponent("t-content-card");
  const _component_t_chevron_up_icon = resolveComponent("t-chevron-up-icon");
  const _component_t_chevron_down_icon = resolveComponent("t-chevron-down-icon");
  _push(ssrRenderComponent(_component_t_content_card, mergeProps({
    border: true,
    color: _ctx.color,
    "gradient-direction": _ctx.gradientDirection,
    radius: _ctx.radius,
    width: _ctx.width
  }, _attrs), {
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="statistic-widget"${_scopeId}><div class="statistic-widget-data"${_scopeId}><div class="statistic-widget-title"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div><div class="statistic-widget-value"${_scopeId}>${ssrInterpolate(_ctx.widgetValue)}</div>`);
        if (_ctx.diffValue) {
          _push2(`<div class="${ssrRenderClass([
            "statistic-widget-diff-value",
            _ctx.calculatedDiffStyle
          ])}"${_scopeId}>`);
          if (_ctx.diffDirection) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.diffDirection.includes("up") ? "+" : "-")}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(` ${ssrInterpolate(_ctx.diffValue)} `);
          if (_ctx.diffDirection.includes("up")) {
            _push2(ssrRenderComponent(_component_t_chevron_up_icon, { class: "w-4 h-4" }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.diffDirection.includes("down")) {
            _push2(ssrRenderComponent(_component_t_chevron_down_icon, { class: "w-4 h-4" }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
        if (_ctx.$slots.icon) {
          _push2(`<div class="statistic-widget-icon-container"${_scopeId}><span class="${ssrRenderClass(["statistic-widget-icon", _ctx.calculatedIconStyle])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push2, _parent2, _scopeId);
          _push2(`</span></div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.picture) {
          _push2(`<div class="statistic-widget-picture-container"${_scopeId}><span class="${ssrRenderClass(["statistic-widget-picture", _ctx.calculatedIconStyle])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "picture", {}, null, _push2, _parent2, _scopeId);
          _push2(`</span></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "statistic-widget" }, [
            createVNode("div", { class: "statistic-widget-data" }, [
              createVNode("div", { class: "statistic-widget-title" }, [
                renderSlot(_ctx.$slots, "title")
              ]),
              createVNode("div", { class: "statistic-widget-value" }, toDisplayString(_ctx.widgetValue), 1),
              _ctx.diffValue ? (openBlock(), createBlock("div", {
                key: 0,
                class: [
                  "statistic-widget-diff-value",
                  _ctx.calculatedDiffStyle
                ]
              }, [
                _ctx.diffDirection ? (openBlock(), createBlock("span", {
                  key: 0,
                  textContent: toDisplayString(_ctx.diffDirection.includes("up") ? "+" : "-")
                }, null, 8, ["textContent"])) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(_ctx.diffValue) + " ", 1),
                _ctx.diffDirection.includes("up") ? (openBlock(), createBlock(_component_t_chevron_up_icon, {
                  key: 1,
                  class: "w-4 h-4"
                })) : createCommentVNode("", true),
                _ctx.diffDirection.includes("down") ? (openBlock(), createBlock(_component_t_chevron_down_icon, {
                  key: 2,
                  class: "w-4 h-4"
                })) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ]),
            _ctx.$slots.icon ? (openBlock(), createBlock("div", {
              key: 0,
              class: "statistic-widget-icon-container"
            }, [
              createVNode("span", {
                class: ["statistic-widget-icon", _ctx.calculatedIconStyle]
              }, [
                renderSlot(_ctx.$slots, "icon")
              ], 2)
            ])) : createCommentVNode("", true),
            _ctx.$slots.picture ? (openBlock(), createBlock("div", {
              key: 1,
              class: "statistic-widget-picture-container"
            }, [
              createVNode("span", {
                class: ["statistic-widget-picture", _ctx.calculatedIconStyle]
              }, [
                renderSlot(_ctx.$slots, "picture")
              ], 2)
            ])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Card/TStatisticWidget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TStatisticWidget = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TStatisticWidget as T
};

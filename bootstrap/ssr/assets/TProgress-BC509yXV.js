import { defineComponent, mergeProps, toRefs, computed, reactive, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = defineComponent({
  name: "TProgress",
  props: {
    title: {
      type: String,
      default: null
    },
    modelValue: {
      type: Number,
      default: 10
    },
    color: {
      type: String,
      default: "green"
    },
    height: {
      type: Number,
      default: 3
    },
    counterText: {
      type: String,
      default: "$a%"
    },
    max: {
      type: Number,
      default: 100
    }
  },
  setup(props) {
    const { counterText, modelValue, color, height, max } = toRefs(props);
    const counter = computed(() => {
      if (modelValue.value >= 0 && modelValue.value !== null && !isNaN(modelValue.value)) {
        if (modelValue.value / max.value * 100 > 100) {
          return 100;
        } else {
          return modelValue.value / max.value * 100;
        }
      } else {
        return 0;
      }
    });
    const tCounterText = computed(() => {
      let finalText;
      finalText = counterText.value.toString().replace("$a", max.value === 100 ? counter.value.toString() : modelValue.value);
      return finalText;
    });
    const tStyle = reactive({});
    tStyle["height"] = computed(() => {
      return "progress-value progress-height-" + height.value;
    });
    tStyle["line"] = computed(() => {
      return "progress-counter-line progress-" + color.value;
    });
    return { counter, tCounterText, tStyle };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "progress" }, _attrs))}><div class="progress-container"><div>${ssrInterpolate(_ctx.title)}</div><div>${ssrInterpolate(_ctx.tCounterText)}</div></div><div class="${ssrRenderClass(_ctx.tStyle["height"])}"><div class="${ssrRenderClass(_ctx.tStyle["line"])}" style="${ssrRenderStyle("width:" + _ctx.counter + "%")}"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Progress/TProgress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TProgress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TProgress as T
};

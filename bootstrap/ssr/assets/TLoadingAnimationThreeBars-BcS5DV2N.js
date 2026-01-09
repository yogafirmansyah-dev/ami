import { mergeProps, toRefs, computed, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "TLoadingAnimationThreeBars",
  props: {
    title: {
      type: String,
      default: "loading"
    },
    color: {
      type: String,
      default: "gray"
    },
    target: {
      type: String,
      default: "button"
    }
  },
  setup(props) {
    const { color, target } = toRefs(props);
    const tStyle = computed(() => {
      return "loading-" + color.value + (target.value === "button" ? " w-1.5 h-4" : " w-4 h-16 xl:w-6 xl:h-24");
    });
    return { tStyle };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading-three-bars" }, _attrs))} data-v-e3129d32><div id="bar1" class="${ssrRenderClass($setup.tStyle)}" data-v-e3129d32></div><div id="bar2" class="${ssrRenderClass($setup.tStyle)}" data-v-e3129d32></div><div id="bar3" class="${ssrRenderClass($setup.tStyle)}" data-v-e3129d32></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Loading/Animations/TLoadingAnimationThreeBars.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TLoadingAnimationThreeBars = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e3129d32"]]);
export {
  TLoadingAnimationThreeBars as default
};

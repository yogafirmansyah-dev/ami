import { mergeProps, toRefs, computed, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "TLoadingAnimationThreeDots",
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
      return "loading-" + color.value + " " + (target.value === "button" ? "w-2 h-2" : "w-8 h-8 xl:w-14 xl:h-14");
    });
    return { tStyle };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading-three-dots" }, _attrs))} data-v-a3ba942b><div id="dot1" class="${ssrRenderClass($setup.tStyle)}" data-v-a3ba942b></div><div id="dot2" class="${ssrRenderClass($setup.tStyle)}" data-v-a3ba942b></div><div id="dot3" class="${ssrRenderClass($setup.tStyle)}" data-v-a3ba942b></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Loading/Animations/TLoadingAnimationThreeDots.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TLoadingAnimationThreeDots = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a3ba942b"]]);
export {
  TLoadingAnimationThreeDots as default
};

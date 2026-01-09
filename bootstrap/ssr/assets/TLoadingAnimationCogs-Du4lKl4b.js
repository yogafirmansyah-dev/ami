import { defineComponent, mergeProps, toRefs, reactive, computed, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = defineComponent({
  name: "TLoadingAnimationCogs",
  props: {
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
    const tStyle = reactive({});
    tStyle["cog1"] = computed(() => {
      return "loading-" + color.value + " " + (target.value === "button" ? "w-1.5 h-4" : "w-20 h-20 xl:w-26 xl:h-26");
    });
    tStyle["cog2"] = computed(() => {
      return "loading-" + color.value + " " + (target.value === "button" ? "w-1.5 h-4" : "w-12 h-12 xl:w-16 xl:h-16");
    });
    return { tStyle };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading-cogs-container" }, _attrs))} data-v-79d6deb6><div id="cog1" data-v-79d6deb6><svg class="${ssrRenderClass(_ctx.tStyle["cog1"])}" style="${ssrRenderStyle({ "background-color": "rgba(0,0,0,0)" })}" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-79d6deb6><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-79d6deb6></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-79d6deb6></path></svg></div><div id="cog2" class="loading-cogs-second" data-v-79d6deb6><svg class="${ssrRenderClass(_ctx.tStyle["cog2"])}" style="${ssrRenderStyle({ "background-color": "rgba(0,0,0,0)" })}" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-79d6deb6><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-79d6deb6></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-79d6deb6></path></svg></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Loading/Animations/TLoadingAnimationCogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TLoadingAnimationCogs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-79d6deb6"]]);
export {
  TLoadingAnimationCogs as default
};

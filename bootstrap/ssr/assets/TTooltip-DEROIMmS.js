import { defineComponent, toRefs, ref, watch, mergeProps, useSlots, useSSRContext } from "vue";
import { onClickOutside } from "@vueuse/core";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = defineComponent({
  name: "TTooltip",
  props: {
    position: {
      type: String,
      default: "bottom"
    },
    color: {
      type: String,
      default: "white"
    },
    border: {
      type: Boolean,
      default: true
    },
    bold: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    const { position } = toRefs(props);
    const showPopover = ref(false);
    const activePosition = ref(position.value);
    const tooltipItem = ref(null);
    const box = ref(null);
    const updateStatus = () => {
      let tooltipPosition = box.value.getBoundingClientRect();
      let windowInnerWidth = window.innerWidth;
      if (position.value !== "top" && position.value !== "bottom") {
        if (tooltipPosition.width > tooltipPosition.left && position.value === "left") {
          activePosition.value = "right";
        }
        if (tooltipPosition.right > windowInnerWidth) {
          activePosition.value = "left";
        }
      } else {
        if (tooltipPosition.right > windowInnerWidth && windowInnerWidth > tooltipPosition.left) {
          Object.assign(box.value.style, {
            position: "absolute",
            left: `-${Number(tooltipPosition.right) - Number(windowInnerWidth) + 20}px`
          });
        }
      }
    };
    watch(showPopover, () => {
      updateStatus();
    });
    onClickOutside(tooltipItem, () => showPopover.value = false);
    const hasSlot = (name) => !!useSlots()[name];
    return {
      tooltipItem,
      box,
      showPopover,
      updateStatus,
      hasSlot,
      activePosition
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tooltip" }, _attrs))}><div class="${ssrRenderClass([[
    { "tooltip-border": _ctx.border },
    { "tooltip-bold": _ctx.bold }
  ], "tooltip-container"])}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<div style="${ssrRenderStyle({ visibility: _ctx.showPopover ? "visible" : "hidden" })}" class="${ssrRenderClass([[
    `tooltip-${_ctx.color}`,
    `tooltip-${_ctx.activePosition}-container`
  ], "tooltip-box"])}"><div class="${ssrRenderClass([[
    `tooltip-${_ctx.activePosition}-arrow`,
    _ctx.hasSlot("boxTitle")
  ], "tooltip-arrow"])}"></div><div class="${ssrRenderClass([_ctx.hasSlot("boxTitle") ? "rounded-b-md" : "rounded-md", "tooltip-box-content"])}">`);
  ssrRenderSlot(_ctx.$slots, "boxContent", {}, null, _push, _parent);
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Tooltip/TTooltip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TTooltip = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TTooltip as T
};

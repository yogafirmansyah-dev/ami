import { defineComponent, toRefs, provide, ref, computed, mergeProps, useSSRContext, inject, useSlots } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = defineComponent({
  name: "TList",
  props: {
    color: {
      type: String,
      default: "white"
    },
    design: {
      type: String,
      default: "filled"
    },
    radius: {
      type: Number,
      default: 3
    },
    separated: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { color, design, radius, separated, border } = toRefs(props);
    provide("separated", ref(separated));
    provide("radius", ref(radius));
    provide("border", ref(border));
    provide("rootColor", ref(color));
    provide("rootDesign", ref(design));
    const tStyle = computed(() => {
      return "list " + (separated.value ? "space-y-2" : "");
    });
    return { tStyle };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.tStyle }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/List/TList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  name: "TListItem",
  props: {
    active: {
      type: Boolean,
      required: false
    },
    design: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: null,
      request: false
    }
  },
  setup(props, { slots }) {
    const { active, design, color } = toRefs(props);
    const radius = inject("radius");
    const border = inject("border");
    const separated = inject("separated");
    const rootColor = inject("rootColor");
    const rootDesign = inject("rootDesign");
    const activeColor = computed(() => {
      return rootColor.value ? rootColor.value : color.value;
    });
    const activeDesign = computed(() => {
      return rootDesign.value ? rootDesign.value : design.value;
    });
    const tStyle = computed(() => {
      return "list-container list-" + activeDesign.value + "-base list-" + activeDesign.value + "-" + activeColor.value + (active.value ? "-active" : "") + " " + (separated.value && border ? "border last:border first:border" : "") + " " + (separated.value ? "radius-" + radius.value : "group-radius-" + radius.value) + " " + (activeDesign.value === "outline" || activeDesign.value === "elegant" ? "list-border" : border.value ? "list-border" : "border-none") + " " + (hasSlot("secondContent") ? "justify-between" : "justify-start");
    });
    const hasSlot = (name) => !!useSlots()[name];
    return { hasSlot, tStyle };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.tStyle }, _attrs))}>`);
  if (_ctx.hasSlot("icon")) {
    _push(`<div>`);
    ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.hasSlot("title")) {
    _push(`<div><b>`);
    ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
    _push(`</b></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="list-content">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  if (_ctx.hasSlot("secondContent")) {
    _push(`<div>`);
    ssrRenderSlot(_ctx.$slots, "secondContent", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/List/TListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TListItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TList as T,
  TListItem as a
};

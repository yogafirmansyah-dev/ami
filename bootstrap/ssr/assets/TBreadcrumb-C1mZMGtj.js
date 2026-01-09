import { defineComponent, toRefs, reactive, computed, useSlots, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = defineComponent({
  name: "TBreadcrumb",
  props: {
    breadcrumbs: {
      type: Array,
      default() {
        return [];
      },
      require: true
    },
    design: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "gray"
    },
    position: {
      type: String,
      require: true,
      default: "left"
    }
  },
  setup(props, { slots }) {
    const { design, color, position } = toRefs(props);
    const tStyle = reactive({});
    tStyle["filled"] = computed(() => {
      return "breadcrumb breadcrumb-" + design.value + "-" + color.value + " breadcrumb-" + design.value + "-base " + (position.value === "right" ? "flex-row-reverse" : "");
    });
    const filledContainerStyle = (item) => {
      return "breadcrumb-filled-item " + (item.active ? "breadcrumb-item-active" : "");
    };
    tStyle["block"] = computed(() => {
      return "breadcrumb breadcrumb-" + design.value + "-base " + (position.value === "right" ? "flex-row-reverse" : "");
    });
    tStyle["blockSub"] = computed(() => {
      return "breadcrumb-" + design.value + "-" + color.value + " ";
    });
    const blockContainerStyle = (item) => {
      return "breadcrumb-block-item " + (item.active ? "breadcrumb-item-active" : "text-gray-700");
    };
    const hasSlot = (name) => !!useSlots()[name];
    return {
      hasSlot,
      filledContainerStyle,
      tStyle,
      blockContainerStyle
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (_ctx.design === "filled") {
    _push(`<div class="${ssrRenderClass(_ctx.tStyle["filled"])}"><div id="breadcrumb-filled-container"><!--[-->`);
    ssrRenderList(_ctx.breadcrumbs, (item, index) => {
      _push(`<div class="${ssrRenderClass(_ctx.filledContainerStyle(item))}">`);
      if (_ctx.hasSlot(item.key)) {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, item.key, { props: item }, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div>${ssrInterpolate(item.label)}</div>`);
      if (_ctx.breadcrumbs.length !== index + 1) {
        _push(`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
    if (_ctx.hasSlot("subContent")) {
      _push(`<div class="breadcrumb-sub-content">`);
      ssrRenderSlot(_ctx.$slots, "subContent", {}, null, _push, _parent);
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.design === "block") {
    _push(`<div class="${ssrRenderClass(_ctx.tStyle["block"])}"><div id="breadcrumb-block-container" class="${ssrRenderClass(_ctx.tStyle["blockSub"])}"><!--[-->`);
    ssrRenderList(_ctx.breadcrumbs, (item, index) => {
      _push(`<div class="${ssrRenderClass(_ctx.blockContainerStyle(item))}">`);
      if (_ctx.hasSlot(item.key)) {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, item.key, { props: item }, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div>${ssrInterpolate(item.label)}</div></div>`);
    });
    _push(`<!--]--></div>`);
    if (_ctx.hasSlot("subContent")) {
      _push(`<div class="breadcrumb-sub-content">`);
      ssrRenderSlot(_ctx.$slots, "subContent", {}, null, _push, _parent);
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Breadcrumb/TBreadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TBreadcrumb as T
};

import { defineComponent, toRefs, provide, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const inputGroupStyleMixin = {
  data() {
    return {
      subLabelColors: {
        "solid-red": "text-red-500",
        "solid-blue": "text-blue-500",
        "solid-green": "text-green-500",
        "solid-yellow": "text-yellow-500",
        "solid-indigo": "text-indigo-500",
        "solid-pink": "text-pink-500",
        "solid-purple": "text-purple-500",
        "solid-gray": "text-gray-500",
        "solid-black": "text-black",
        "solid-white": "text-white"
      }
    };
  }
};
const _sfc_main = defineComponent({
  props: {
    label: {
      type: String,
      default: null
    },
    subLabel: {
      type: String,
      default: null
    },
    subLabelColor: {
      type: String,
      default: "yellow"
    },
    labelFor: {
      type: String,
      default: null
    },
    errors: {
      type: Array,
      default() {
        return [];
      }
    },
    phoneWidth: {
      type: Number,
      default: 12
    },
    tabletWidth: {
      type: Number,
      default: null
    },
    laptopWidth: {
      type: Number,
      default: 6
    },
    desktopWidth: {
      type: Number,
      default: null
    }
  },
  mixins: [inputGroupStyleMixin],
  setup(props) {
    const { errors } = toRefs(props);
    provide("errors", errors);
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["flex flex-col", [
      _ctx.phoneWidth ? `grid-${_ctx.phoneWidth}` : "",
      _ctx.tabletWidth ? `grid-md-${_ctx.tabletWidth}` : "",
      _ctx.laptopWidth ? `grid-lg-${_ctx.laptopWidth}` : "",
      _ctx.desktopWidth ? `grid-xl-${_ctx.desktopWidth}` : ""
    ]]
  }, _attrs))}><label${ssrRenderAttr("for", _ctx.labelFor)} class="flex flex-row gap-1 items-center font-medium text-sm whitespace-normal dark:text-gray-200">`);
  if (_ctx.label) {
    _push(`<span>${ssrInterpolate(_ctx.label)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (!_ctx.label && _ctx.$slots.label) {
    _push(`<span class="inline-flex items-center">`);
    ssrRenderSlot(_ctx.$slots, "label", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.subLabel) {
    _push(`<span class="${ssrRenderClass(["text-xs italic", _ctx.subLabelColors[_ctx.subLabelColor]])}">${ssrInterpolate(_ctx.subLabel)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</label>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.errors.length > 0) {
    _push(`<div><!--[-->`);
    ssrRenderList(_ctx.errors, (error) => {
      _push(`<p class="text-sm text-red-600 mt-2 whitespace-nowrap">${ssrInterpolate(error.$message)}</p>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<div><p class="text-sm text-red-600 mt-2 whitespace-nowrap">${ssrInterpolate(_ctx.$page.props.errors[_ctx.labelFor])}</p></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/TInputGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TInputGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TInputGroup as T
};

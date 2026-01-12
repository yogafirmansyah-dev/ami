import { r as radiusSizeMixin } from "./TButton-oXLR37ud.js";
import { c as TXCircleIcon } from "./AppLayout-BkpuvVky.js";
import { toRefs, ref, watch, inject, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "TInputTextArea",
  components: { TXCircleIcon },
  mixins: [radiusSizeMixin],
  props: {
    modelValue: {
      type: String
    },
    id: {
      type: String
    },
    rows: {
      type: Number,
      default: 3
    },
    placeholder: {
      type: String
    },
    clearButton: {
      type: Boolean,
      default: false
    },
    counter: {
      type: Boolean,
      default: false
    },
    disabled: {
      default: false
    },
    readOnly: {
      default: false
    }
  },
  setup(props) {
    const { modelValue } = toRefs(props);
    const textLength = ref();
    watch(modelValue, () => {
      if (modelValue.value) {
        textLength.value = modelValue.value.length;
      }
    });
    const errors = inject("errors", []);
    return { errors, textLength };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_x_circle_icon = resolveComponent("t-x-circle-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["relative", [$setup.errors.length > 0 ? `border border-red-500 radius-${_ctx.radius}` : ""]]
  }, _attrs))}>`);
  if ($props.clearButton && $props.modelValue) {
    _push(ssrRenderComponent(_component_t_x_circle_icon, {
      onClick: ($event) => _ctx.$emit("update:modelValue", null),
      class: "absolute rounded-full -top-3 -right-3 w-6 h-6 bg-white hover:bg-red-500 text-red-500 hover:text-white cursor-pointer"
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<textarea class="${ssrRenderClass([
    "input h-auto w-full",
    `radius-${_ctx.radius}`,
    { "input-disabled cursor-not-allowed": $props.disabled || $props.readOnly }
  ])}"${ssrRenderAttr("rows", $props.rows)}${ssrRenderAttr("id", $props.id)}${ssrRenderAttr("placeholder", $props.placeholder)}${ssrIncludeBooleanAttr($props.disabled) ? " disabled" : ""}>${ssrInterpolate($props.modelValue)}</textarea><span class="absolute bg-white bg-opacity-70 bottom-3 right-2 float-right text-xs border px-1 py-0.5 rounded-full min-w-[1.5rem] text-center bg-white-500" style="${ssrRenderStyle($props.counter && $props.modelValue ? null : { display: "none" })}">${ssrInterpolate($setup.textLength)}</span></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Inputs/TInputTextArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TInputTextArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TInputTextArea as T
};

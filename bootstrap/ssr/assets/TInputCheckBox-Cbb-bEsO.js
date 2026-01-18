import { r as radiusSizeMixin } from "./windowSizeCalculator-Ch6zBFfA.js";
import { T as TCheckIcon } from "./TCheckIcon-CWPVq9Ck.js";
import { defineComponent, mergeProps, toRefs, computed, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = defineComponent({
  name: "TInputCheckBox",
  components: { TCheckIcon },
  mixins: [radiusSizeMixin],
  props: {
    modelValue: [Array, Boolean],
    inputValue: String,
    multipleOption: {
      type: Boolean,
      default: false
    },
    label: String,
    color: {
      type: String,
      default: "white"
    },
    id: String,
    disabled: Boolean
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { multipleOption, color, inputValue, modelValue } = toRefs(props);
    const checkboxStyle = () => {
      let style;
      if (color.value === "white") {
        style = "bg-white hover:bg-blue-100 checked:bg-indigo-200 border-gray-300 text-gray-600";
      } else if (color.value === "black") {
        style = "bg-white hover:bg-gray-500 checked:bg-indigo-200 border-black text-gray-100";
      } else {
        style = "bg-white hover:bg-" + color.value + "-200 active:bg-" + color.value + "-200 border-" + color.value + "-500";
      }
      return style;
    };
    const defaultSelectorStyle = () => {
      let style;
      if (color.value === "white") {
        style = "bg-gray-500";
      } else if (color.value === "black") {
        style = "bg-gray-800";
      } else {
        style = "bg-" + color.value + "-500";
      }
      return style;
    };
    const isChecked = computed(() => {
      if (multipleOption.value) {
        return modelValue.value.includes(inputValue.value);
      }
      return !!modelValue.value;
    });
    const updateField = () => {
      let newValue = modelValue.value;
      if (multipleOption.value) {
        if (!modelValue.value.includes(inputValue.value)) {
          newValue.push(inputValue.value);
        } else {
          newValue.splice(modelValue.value.indexOf(inputValue.value), 1);
        }
      } else {
        newValue = !newValue;
      }
      emit("update:modelValue", newValue);
    };
    return { isChecked, checkboxStyle, defaultSelectorStyle, updateField };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row items-center" }, _attrs))}><div class="${ssrRenderClass([
    "flex flex-shrink-0 justify-center items-center w-5 h-5 border mr-1",
    _ctx.isChecked && "bg-" + _ctx.color + "-100",
    _ctx.checkboxStyle(),
    _ctx.radiusStyle
  ])}">`);
  if (_ctx.isChecked) {
    _push(`<div class="${ssrRenderClass("text-" + _ctx.color + "-500")}">`);
    if (_ctx.$slots.icon) {
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
    } else {
      _push(`<div class="${ssrRenderClass(["flex w-3 h-3", _ctx.defaultSelectorStyle(), _ctx.radiusStyle])}"></div>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.label) {
    _push(`<span class="whitespace-nowrap">${ssrInterpolate(_ctx.label)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Inputs/TInputCheckBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TInputCheckBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TInputCheckBox as T
};

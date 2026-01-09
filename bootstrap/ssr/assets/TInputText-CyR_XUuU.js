import { defineComponent, toRefs, ref, inject, computed, useSlots, mergeProps, useSSRContext } from "vue";
import { onClickOutside } from "@vueuse/core";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = defineComponent({
  name: "TInputText",
  props: {
    selectValue: {
      type: [String, Date, Number, Object, Array],
      default: null
    },
    modelValue: {
      type: [String, Date, Number, Object, Array],
      default: null
    },
    id: {
      type: String,
      default() {
        return "text-input-" + Number(/* @__PURE__ */ new Date());
      }
    },
    placeholder: {
      type: String,
      default: ""
    },
    prepend: {
      type: String,
      default: ""
    },
    append: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    selectType: {
      type: String,
      default: "outside"
    },
    selectPosition: {
      type: String,
      default: ""
    },
    iconType: {
      type: String,
      default: "outside"
    },
    options: {
      type: [Object, Array],
      default() {
        return [
          { key: "", label: "Please add a options source" }
        ];
      }
    },
    optionsLabelKey: {
      type: String,
      default: "label"
    },
    optionsValueKey: {
      type: String,
      default: "key"
    },
    radius: {
      type: Number,
      default: 3
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: String,
      default: ""
    },
    clearButton: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "update:selectValue"],
  setup(props, { slots }) {
    const { radius, prepend, append, iconType, options, optionsValueKey, selectPosition } = toRefs(props);
    const input = ref(null);
    const withSelectInput = ref(null);
    const showSelectList = ref(false);
    const errors = inject("errors", []);
    onClickOutside(withSelectInput, () => showSelectList.value = false);
    const focus = () => {
      input.value.focus();
    };
    const inputStyle = computed(() => {
      let radiusStyle;
      let leftSideHasItem, rightSideHasItem;
      if (prepend.value || hasSlot("prepend") || selectPosition.value === "left" || hasSlot("icon") && iconType.value === "outside") {
        leftSideHasItem = true;
      }
      if (append.value || hasSlot("append") || selectPosition.value === "right") {
        rightSideHasItem = true;
      }
      if (leftSideHasItem && !rightSideHasItem) {
        radiusStyle = "radius-r-" + radius.value;
      }
      if (!leftSideHasItem && rightSideHasItem) {
        radiusStyle = "radius-l-" + radius.value;
      }
      if (!leftSideHasItem && !rightSideHasItem) {
        radiusStyle = "radius-" + radius.value;
      }
      return radiusStyle;
    });
    const hasSlot = (name) => !!useSlots()[name];
    return { input, withSelectInput, inputStyle, showSelectList, errors, focus, hasSlot };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["text-input", [_ctx.errors.length > 0 ? `border border-red-500 radius-${_ctx.radius}` : ""]],
    ref: "withSelectInput"
  }, _attrs))}>`);
  if (_ctx.hasSlot("icon") && _ctx.iconType === "outside") {
    _push(`<div class="${ssrRenderClass([`radius-l-${_ctx.radius}`, "text-input-outside-icon"])}">`);
    ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.prepend || _ctx.hasSlot("prepend")) {
    _push(`<div class="${ssrRenderClass([[
      _ctx.selectPosition === "left" && _ctx.options[0][_ctx.optionsValueKey] ? "border-r" : "",
      _ctx.hasSlot("icon") && _ctx.iconType === "outside" ? "" : `border-l radius-l-${_ctx.radius}`
    ], "text-input-prepend"])}">`);
    if (_ctx.prepend) {
      _push(`<span>${ssrInterpolate(_ctx.prepend)}</span>`);
    } else {
      ssrRenderSlot(_ctx.$slots, "prepend", {}, null, _push, _parent);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.options[0][_ctx.optionsValueKey] && _ctx.selectPosition === "left") {
    _push(`<div class="text-input-select-container"><div class="${ssrRenderClass([[
      _ctx.hasSlot("prepend") || _ctx.prepend ? "" : `border-l radius-l-${_ctx.radius}`,
      _ctx.disabled || _ctx.readOnly === "select" || _ctx.readOnly === "both" ? "cursor-not-allowed" : "cursor-pointer",
      { "input-disabled": _ctx.disabled }
    ], "text-input-select-trigger"])}">`);
    if (_ctx.selectValue && !_ctx.disabled && _ctx.readOnly !== "select" && _ctx.readOnly !== "both") {
      _push(`<svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([_ctx.selectPosition === "left" ? "mr-1" : "", "input-clear-icon"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.selectValue && _ctx.selectType === "inside") {
      _push(`<span>${ssrInterpolate(_ctx.options.find((o) => o[_ctx.optionsValueKey] === _ctx.selectValue)[_ctx.optionsLabelKey])}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<svg class="${ssrRenderClass([[
      !_ctx.showSelectList ? "rotate-0" : "",
      _ctx.showSelectList && _ctx.selectPosition === "left" && _ctx.selectType !== "inside" ? "-rotate-90" : "",
      _ctx.showSelectList && _ctx.selectPosition === "right" || _ctx.showSelectList && _ctx.selectType === "inside" ? "rotate-90" : "",
      "transition-size-short"
    ], "w-5 h-5 transform"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>`);
    if (_ctx.selectType === "outside") {
      _push(`<div class="${ssrRenderClass([_ctx.selectValue ? "bg-green-500" : "bg-gray-500 dark:bg-gray-700", "text-input-selected-indicator"])}"></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    if (_ctx.showSelectList) {
      _push(`<div class="${ssrRenderClass([[
        `radius-${_ctx.radius}`,
        _ctx.selectPosition === "left" ? "left-0" : "right-0"
      ], "text-input-select-list-container"])}"><!--[-->`);
      ssrRenderList(_ctx.options, (item) => {
        _push(`<div class="text-input-select-list-item"><span>${ssrInterpolate(item[_ctx.optionsLabelKey])}</span>`);
        if (item[_ctx.optionsValueKey] === _ctx.selectValue) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" class="text-input-select-list-selected-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex flex-grow">`);
  if (_ctx.hasSlot("icon") && _ctx.iconType === "inside") {
    _push(`<div class="text-input-inside-icon">`);
    ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input class="${ssrRenderClass([[
    _ctx.inputStyle,
    { "pl-10": _ctx.iconType === "inside" },
    { "input-disabled": _ctx.disabled }
  ], "input text-input"])}"${ssrRenderAttr("type", _ctx.type)}${ssrRenderAttr("id", _ctx.id)}${ssrRenderAttr("placeholder", _ctx.placeholder)}${ssrRenderAttr("value", _ctx.disabled ? "" : _ctx.modelValue)}${ssrIncludeBooleanAttr(_ctx.disabled || _ctx.readOnly === "text" || _ctx.readOnly === "both") ? " disabled" : ""}></div>`);
  if (_ctx.options[0][_ctx.optionsValueKey] && _ctx.selectPosition === "right") {
    _push(`<div class="text-input-select-container"><div class="${ssrRenderClass([[
      _ctx.hasSlot("append") || _ctx.append ? "" : `border-r radius-r-${_ctx.radius}`,
      _ctx.disabled || _ctx.readOnly === "select" || _ctx.readOnly === "both" ? "cursor-not-allowed" : "cursor-pointer",
      { "input-disabled": _ctx.disabled }
    ], "text-input-select-trigger"])}">`);
    if (_ctx.selectValue && !_ctx.disabled && _ctx.readOnly !== "select" && _ctx.readOnly !== "both") {
      _push(`<svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([_ctx.selectPosition === "right" ? "ml-1" : "", "input-clear-icon"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.selectValue && _ctx.selectType === "inside") {
      _push(`<span>${ssrInterpolate(_ctx.options.find((o) => o[_ctx.optionsValueKey] === _ctx.selectValue)[_ctx.optionsLabelKey])}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<svg class="${ssrRenderClass([[
      !_ctx.showSelectList ? "rotate-0" : "",
      _ctx.showSelectList && _ctx.selectPosition === "left" && _ctx.selectType !== "inside" ? "-rotate-90" : "",
      _ctx.showSelectList && _ctx.selectPosition === "right" || _ctx.showSelectList && _ctx.selectType === "inside" ? "rotate-90" : "",
      "transition-size-short"
    ], "w-5 h-5 transform"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>`);
    if (_ctx.selectType === "outside") {
      _push(`<div class="${ssrRenderClass([_ctx.selectValue ? "bg-green-500" : "bg-gray-500 dark:bg-gray-700", "text-input-selected-indicator"])}"></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    if (_ctx.showSelectList) {
      _push(`<div class="${ssrRenderClass([[
        `radius-${_ctx.radius}`,
        _ctx.selectPosition === "left" ? "left-0" : "right-0"
      ], "text-input-select-list-container"])}"><!--[-->`);
      ssrRenderList(_ctx.options, (item) => {
        _push(`<div class="text-input-select-list-item"><span>${ssrInterpolate(item[_ctx.optionsLabelKey])}</span>`);
        if (item[_ctx.optionsValueKey] === _ctx.selectValue) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" class="text-input-select-list-selected-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.append || _ctx.hasSlot("append")) {
    _push(`<div class="${ssrRenderClass([[
      `radius-r-${_ctx.radius}`,
      _ctx.selectPosition === "right" && _ctx.options[0][_ctx.optionsValueKey] ? "border-l" : ``
    ], "text-input-append"])}">`);
    if (_ctx.append) {
      _push(`<span>${ssrInterpolate(_ctx.append)}</span>`);
    } else {
      ssrRenderSlot(_ctx.$slots, "append", {}, null, _push, _parent);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Inputs/TInputText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TInputText = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TInputText as T
};

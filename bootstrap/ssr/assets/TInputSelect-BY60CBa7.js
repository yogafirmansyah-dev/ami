import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { onClickOutside } from "@vueuse/core";
import { toRefs, inject, ref, computed, resolveComponent, mergeProps, withCtx, createBlock, openBlock, createVNode, useSlots, useSSRContext } from "vue";
import { useI18n } from "vue-i18n";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "TInputSelect",
  components: { TInputText },
  props: {
    modelValue: {
      type: [String, Date, Number, Object, Array, Boolean],
      default: null
    },
    options: {
      type: [Object, Array],
      default() {
        return [];
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
    placeHolder: {
      type: String,
      default: "component.input.select.select"
    },
    searchPlaceHolder: {
      type: String,
      default: "component.input.select.search"
    },
    clearButton: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    showingMaxOptions: {
      type: Number,
      default: 10
    },
    radius: {
      type: Number,
      default: 3
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit, slots }) {
    const {
      modelValue,
      options,
      optionsLabelKey,
      optionsValueKey,
      disabled,
      readOnly
    } = toRefs(props);
    const { t } = useI18n();
    const errors = inject("errors", []);
    const showOptions = ref(false);
    const updateOptionsShowStatus = () => {
      if (disabled.value || readOnly.value) {
        showOptions.value = false;
      } else {
        showOptions.value = !showOptions.value;
      }
    };
    const selectItem = ref(null);
    onClickOutside(selectItem, () => showOptions.value = false);
    const selectOption = (value) => {
      emit("update:modelValue", value);
      showOptions.value = false;
    };
    const clear = () => {
      showOptions.value = false;
      emit("update:modelValue", null);
      searchText.value = "";
    };
    const selectedOption = computed(() => {
      if (modelValue.value === null || modelValue.value === "" || modelValue.value === void 0) {
        return null;
      }
      return options.value.find((option) => option[optionsValueKey.value] === modelValue.value);
    });
    const searchText = ref("");
    const searchedList = computed(() => {
      if (searchText.value === "") {
        return options.value;
      }
      return options.value.filter((option) => option[optionsLabelKey.value].toLowerCase().replace(/[^a-zA-Z ]/g, "").includes(searchText.value.toLowerCase().replace(/[^a-zA-Z ]/g, "")));
    });
    const hasSlot = (name) => !!useSlots()[name];
    return {
      selectItem,
      showOptions,
      selectedOption,
      searchedList,
      t,
      searchText,
      errors,
      selectOption,
      updateOptionsShowStatus,
      hasSlot,
      clear
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_input_text = resolveComponent("t-input-text");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["input-select", [$setup.errors.length > 0 ? `border border-red-500 radius-${$props.radius}` : ""]],
    ref: "selectItem"
  }, _attrs))} data-v-1922c4ff><div class="select-container" data-v-1922c4ff>`);
  if ($setup.hasSlot("icon")) {
    _push(`<div class="${ssrRenderClass([`radius-l-${$props.radius}`, "select-input-icon"])}" data-v-1922c4ff>`);
    ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([[
    $setup.hasSlot("icon") ? `radius-r-${$props.radius}` : `radius-${$props.radius}`,
    { "input-disabled": $props.disabled },
    $props.disabled || $props.readOnly ? "cursor-not-allowed" : "cursor-pointer"
  ], "select-trigger"])}" data-v-1922c4ff><div class="select-trigger-text" data-v-1922c4ff>`);
  if ($props.modelValue === null || $props.modelValue === void 0) {
    _push(`<span class="select-trigger-placeholder" data-v-1922c4ff>${ssrInterpolate($setup.t($props.placeHolder))}</span>`);
  } else {
    _push(`<div data-v-1922c4ff>`);
    if ($setup.hasSlot("label") && !$props.disabled) {
      ssrRenderSlot(_ctx.$slots, "label", { props: $setup.selectedOption }, null, _push, _parent);
    } else {
      _push(`<!---->`);
    }
    if (!$setup.hasSlot("label") && !$props.disabled) {
      _push(`<span data-v-1922c4ff>${ssrInterpolate($setup.selectedOption[$props.optionsLabelKey])}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  }
  _push(`</div><div class="inline-flex" data-v-1922c4ff>`);
  if ($props.clearButton && $setup.selectedOption && !$props.readOnly && !$props.disabled) {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" class="input-clear-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-1922c4ff><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-1922c4ff></path></svg>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<svg class="${ssrRenderClass([[
    $setup.showOptions ? "rotate-90" : "rotate-0",
    "transition-size-short"
  ], "w-5 h-5 transform"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-1922c4ff><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-1922c4ff></path></svg></div></div></div>`);
  if ($setup.showOptions) {
    _push(`<div class="${ssrRenderClass([`radius-${$props.radius}`, "select-options-container"])}" data-v-1922c4ff><div class="${ssrRenderClass([{ "max-h-56": !$props.search }, "select-options-content"])}" data-v-1922c4ff>`);
    if ($props.search && $props.options.length > 0) {
      _push(`<div class="select-search-container" data-v-1922c4ff>`);
      _push(ssrRenderComponent(_component_t_input_text, {
        modelValue: $setup.searchText,
        "onUpdate:modelValue": ($event) => $setup.searchText = $event,
        placeholder: $setup.t($props.searchPlaceHolder),
        "icon-type": "inside",
        class: "border-none"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-1922c4ff${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-1922c4ff${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--[-->`);
    ssrRenderList($setup.searchedList, (option, index) => {
      _push(`<!--[-->`);
      if ($props.search ? index < $props.showingMaxOptions : true) {
        _push(`<div class="${ssrRenderClass([
          "select-option-item",
          { "select-option-active-item": $props.modelValue === option[$props.optionsValueKey] },
          `radius-${$props.radius}`
        ])}" data-v-1922c4ff>`);
        if ($setup.hasSlot("label")) {
          ssrRenderSlot(_ctx.$slots, "label", { props: option }, null, _push, _parent);
        } else {
          _push(`<span data-v-1922c4ff>${ssrInterpolate(option[$props.optionsLabelKey])}</span>`);
        }
        if ($props.modelValue === option[$props.optionsValueKey]) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" class="select-option-active-item-icon" viewBox="0 0 20 20" fill="currentColor" data-v-1922c4ff><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-1922c4ff></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]-->`);
    if ($props.options.length === 0) {
      _push(`<div data-v-1922c4ff>${ssrInterpolate($setup.t("component.input.select.addSource"))}</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    if ($setup.searchedList.length > $props.showingMaxOptions && $props.search) {
      _push(`<div class="select-many-result" data-v-1922c4ff>${ssrInterpolate($setup.t("component.input.select.manyResults", { showingMaxOptions: $props.showingMaxOptions, totalOptions: $setup.searchedList.length }))}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Inputs/TInputSelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TInputSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1922c4ff"]]);
export {
  TInputSelect as T
};

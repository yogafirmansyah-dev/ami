import { defineComponent, toRefs, reactive, watch, resolveComponent, mergeProps, useSSRContext } from "vue";
import { T as TCheckIcon } from "./TCheckIcon-CWPVq9Ck.js";
import { T as TInputSelect } from "./TInputSelect-BY60CBa7.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = defineComponent({
  name: "TComponentStyleSelector",
  components: { TInputSelect, TCheckIcon },
  props: {
    selectData: {
      type: Array,
      default: null
    },
    modelValue: {
      type: Object,
      default() {
        return { color: null };
      }
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { modelValue, selectData } = toRefs(props);
    const colorOptions = reactive({
      "red": {
        style: "bg-red-500",
        name: "Red"
      },
      "blue": {
        style: "bg-blue-500",
        name: "Blue"
      },
      "green": {
        style: "bg-green-500",
        name: "Green"
      },
      "yellow": {
        style: "bg-yellow-500",
        name: "Yellow"
      },
      "indigo": {
        style: "bg-indigo-500",
        name: "Indigo"
      },
      "purple": {
        style: "bg-purple-500",
        name: "Purple"
      },
      "pink": {
        style: "bg-pink-500",
        name: "Pink"
      },
      "gray": {
        style: "bg-gray-500",
        name: "Gray"
      },
      "white": {
        style: "bg-white border border-gray-200",
        name: "White"
      },
      "black": {
        style: "bg-black",
        name: "Black"
      }
    });
    const modelData = reactive(modelValue);
    watch(
      modelData,
      () => {
        emit("update:modelValue", modelData);
      }
    );
    return {
      colorOptions,
      modelData
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_input_select = resolveComponent("t-input-select");
  const _component_t_check_icon = resolveComponent("t-check-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap justify-center p-2 bg-white border border-gray-300 bg-opacity-60 border-opacity-60 rounded-lg lg:rounded-full" }, _attrs))}><div class="flex flex-wrap justify-center items-center space-x-2">`);
  if (_ctx.selectData !== null) {
    _push(`<div class="flex flex-wrap justify-center items-center space-x-2 text-sm"><!--[-->`);
    ssrRenderList(_ctx.selectData, (item) => {
      _push(ssrRenderComponent(_component_t_input_select, {
        options: item.options,
        modelValue: _ctx.modelData[item.key],
        "onUpdate:modelValue": ($event) => _ctx.modelData[item.key] = $event,
        "options-value-key": "key",
        "options-label-key": "label",
        "place-holder": item.label,
        radius: 8,
        disabled: false
      }, null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<ul class="grid grid-cols-5 my-2 md:grid-cols-10 gap-2 place-items-center items-center"><!--[-->`);
  ssrRenderList(_ctx.colorOptions, (item, itemKey, index) => {
    _push(`<li class="${ssrRenderClass([
      "w-5 h-5 rounded-full items-center flex justify-center flex-shrink-0 cursor-pointer",
      item.style
    ])}">`);
    if (_ctx.modelValue["color"] === itemKey) {
      _push(ssrRenderComponent(_component_t_check_icon, {
        class: [
          "w-5 h-5",
          itemKey === "white" ? "text-gray-600" : "text-white"
        ]
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Misc/TComponentStyleSelector.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TComponentStyleSelector = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TComponentStyleSelector as T
};

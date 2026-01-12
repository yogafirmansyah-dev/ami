import { defineComponent, toRefs, ref, provide, reactive, computed, resolveComponent, mergeProps, withCtx, renderSlot, createVNode, useSSRContext } from "vue";
import { onClickOutside } from "@vueuse/core";
import { T as TChevronDownIcon } from "./TChevronDownIcon-fGhz3Hz_.js";
import { a as _sfc_main$1 } from "./TButton-oXLR37ud.js";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = defineComponent({
  name: "TDropdown",
  components: { TButton: _sfc_main$1, TChevronDownIcon },
  props: {
    align: {
      type: String,
      default: "left"
    },
    buttonColor: {
      type: String,
      default: "blue"
    },
    buttonDesign: {
      type: String,
      default: "filled"
    },
    buttonSize: {
      type: String,
      default: "normal"
    },
    size: {
      type: String,
      default: "wide"
    },
    triggerType: {
      type: String,
      default: "button"
    },
    radius: {
      type: Number,
      default: 3
    }
  },
  setup(props) {
    const { align, size, radius, triggerType } = toRefs(props);
    const isVisible = ref(false);
    const dropDownItem = ref(null);
    provide("triggerType", ref(triggerType));
    const updateStatus = () => {
      isVisible.value = !isVisible.value;
    };
    onClickOutside(dropDownItem, () => isVisible.value = false);
    const tStyle = reactive({});
    tStyle["buttonTrigger"] = computed(() => {
      return "dropdown-button-trigger radius-" + radius.value;
    });
    tStyle["content"] = computed(() => {
      return "dropdown-content-" + align.value + " dropdown-content-" + size.value;
    });
    tStyle["buttonTriggerContent"] = computed(() => {
      return "dropdown-button-trigger-content " + tStyle["content"];
    });
    tStyle["richTriggerContent"] = computed(() => {
      return "dropdown-rich-trigger-content " + tStyle["content"];
    });
    tStyle["triggerIcon"] = computed(() => {
      return "dropdown-trigger-icon " + (isVisible.value ? "rotate-90" : "rotate-0");
    });
    return {
      isVisible,
      updateStatus,
      dropDownItem,
      tStyle
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_button = resolveComponent("t-button");
  const _component_t_chevron_down_icon = resolveComponent("t-chevron-down-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "dropdown",
    ref: "dropDownItem"
  }, _attrs))} data-v-5d55e068>`);
  if (_ctx.triggerType === "button") {
    _push(`<div class="${ssrRenderClass(_ctx.tStyle["buttonTrigger"])}" data-v-5d55e068>`);
    _push(ssrRenderComponent(_component_t_button, {
      type: "button",
      color: _ctx.buttonColor,
      design: _ctx.buttonDesign,
      size: _ctx.buttonSize
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push2, _parent2, _scopeId);
          _push2(ssrRenderComponent(_component_t_chevron_down_icon, {
            class: _ctx.tStyle["triggerIcon"]
          }, null, _parent2, _scopeId));
        } else {
          return [
            renderSlot(_ctx.$slots, "trigger", {}, void 0, true),
            createVNode(_component_t_chevron_down_icon, {
              class: _ctx.tStyle["triggerIcon"]
            }, null, 8, ["class"])
          ];
        }
      }),
      _: 3
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.triggerType === "rich") {
    _push(`<div class="dropdown-rich-trigger" data-v-5d55e068>`);
    ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isVisible) {
    _push(`<div class="dropdown-content-container" data-v-5d55e068>`);
    if (_ctx.triggerType === "button") {
      _push(`<div class="${ssrRenderClass(_ctx.tStyle["buttonTriggerContent"])}" data-v-5d55e068>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.triggerType === "rich") {
      _push(`<div class="${ssrRenderClass(_ctx.tStyle["richTriggerContent"])}" data-v-5d55e068>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown/TDropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TDropdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5d55e068"]]);
export {
  TDropdown as T
};

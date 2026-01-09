import { defineComponent, toRefs, ref, watch, reactive, computed, useSlots, mergeProps, useSSRContext } from "vue";
import { useKeypress } from "vue3-keypress";
import { onClickOutside } from "@vueuse/core";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = defineComponent({
  name: "TModal",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: function() {
        return "modal-" + Number(/* @__PURE__ */ new Date());
      }
    },
    bgColor: {
      type: String,
      default: "gray"
    },
    darkMode: {
      type: Boolean,
      default: false
    },
    design: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "white"
    },
    radius: {
      type: Number,
      default: 3
    },
    esc: {
      type: Boolean,
      default: false
    },
    outSideClick: {
      type: Boolean,
      default: false
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: null,
      require: false
    },
    subTitle: {
      type: String,
      default: null,
      require: false
    },
    content: {
      type: String,
      default: null,
      require: false
    },
    icon: {
      type: String,
      default: null,
      require: false
    },
    timer: {
      type: Number,
      default: null,
      require: false
    }
  },
  emits: ["destroy", "update:modelValue"],
  setup(props, { slots, emit }) {
    const {
      modelValue,
      id,
      darkMode,
      design,
      color,
      radius,
      bgColor,
      esc,
      outSideClick,
      icon,
      timer,
      content,
      title,
      subTitle
    } = toRefs(props);
    const modalItem = ref(null);
    const iconList = [
      {
        key: "success",
        content: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />\n</svg>',
        color: "text-green-500"
      },
      {
        key: "warning",
        content: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />\n</svg>',
        color: "text-yellow-500"
      },
      {
        key: "error",
        content: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n</svg>',
        color: "text-red-500"
      },
      {
        key: "info",
        content: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n</svg>',
        color: "bg-blue-500"
      },
      {
        key: "question",
        content: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n</svg>',
        color: "text-indigo-500"
      }
    ];
    if (esc.value) {
      const someSuccessCallback = () => {
        close();
      };
      useKeypress({
        keyEvent: "keydown",
        keyBinds: [
          {
            keyCode: "esc",
            // or keyCode as integer, e.g. 40
            success: someSuccessCallback
          }
        ]
      });
    }
    if (outSideClick.value) {
      onClickOutside(modalItem, () => close());
    }
    const close = () => {
      emit("destroy", id.value);
      emit("update:modelValue", false);
    };
    watch(modelValue, (value) => {
      if (value && timer.value) {
        autoClose();
      }
    });
    const timerCounter = ref(0);
    const countDownCounter = ref(0);
    const autoClose = () => {
      setTimeout(() => {
        close();
      }, timer.value);
      const countDownFn = setInterval(() => {
        if (timer.value >= timerCounter.value) {
          countDownCounter.value = timerCounter.value / timer.value * 100;
          timerCounter.value += 4;
        } else {
          timerCounter.value = 0;
          countDownCounter.value = 0;
          clearInterval(countDownFn);
        }
      }, 1);
    };
    const tStyle = reactive({});
    tStyle["container"] = computed(() => {
      return "modal-container modal-container-" + bgColor.value;
    });
    tStyle["actionsContainer"] = computed(() => {
      return "modal-actions-container " + (design.value !== "elegant" ? "w-full justify-end" : "");
    });
    tStyle["content"] = computed(() => {
      let style;
      if ((content.value || title.value || subTitle.value) && !hasSlot("content")) {
        style = "modal-content-container";
      }
      if (hasSlot("content")) {
        style = "modal-custom-content-container";
      }
      if (content.value && hasSlot("content")) {
        style = "modal-content-container";
      }
      if (!hasSlot("footer-left") && !hasSlot("footer-center") && !hasSlot("footer-right")) {
        style = style + " pb-8";
      }
      return style;
    });
    tStyle["box"] = computed(() => {
      return "modal-box modal-" + design.value + (darkMode.value ? "-dark" : "-light") + " modal-" + design.value + "-base modal-" + design.value + "-" + color.value + " radius-" + radius.value;
    });
    tStyle["icon"] = computed(() => {
      return "modal-icon-default " + iconList.find((i) => i.key === icon.value).color;
    });
    const hasSlot = (name) => !!useSlots()[name];
    return { hasSlot, close, tStyle, iconList, countDownCounter, modalItem };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.modelValue) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: _ctx.tStyle["container"]
    }, _attrs))} data-v-7f00aaf9>`);
    if (_ctx.timer) {
      _push(`<div class="modal-countdown" data-v-7f00aaf9><div id="countdown" style="${ssrRenderStyle({ width: _ctx.countDownCounter + "%" })}" data-v-7f00aaf9></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="${ssrRenderClass(_ctx.tStyle["box"])}" data-v-7f00aaf9><div class="modal-header" data-v-7f00aaf9>`);
    if (_ctx.design === "elegant" && (_ctx.title || _ctx.subTitle)) {
      _push(`<div id="title-container" data-v-7f00aaf9>`);
      if (_ctx.design === "elegant") {
        _push(`<span id="top-title" data-v-7f00aaf9>${ssrInterpolate(_ctx.title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.design === "elegant") {
        _push(`<span id="top-sub-title" data-v-7f00aaf9>${ssrInterpolate(_ctx.subTitle)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="${ssrRenderClass(_ctx.tStyle["actionsContainer"])}" data-v-7f00aaf9>`);
    if (_ctx.hasSlot("action-buttons")) {
      _push(`<div class="modal-action-buttons" data-v-7f00aaf9>`);
      ssrRenderSlot(_ctx.$slots, "action-buttons", {}, null, _push, _parent);
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.closeButton) {
      _push(`<div class="modal-close-button" data-v-7f00aaf9><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-7f00aaf9><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-7f00aaf9></path></svg></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
    if (_ctx.design === "elegant") {
      _push(`<div id="header-separator" data-v-7f00aaf9></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="${ssrRenderClass(_ctx.tStyle["content"])}" data-v-7f00aaf9>`);
    if (_ctx.icon || _ctx.hasSlot("icon")) {
      _push(`<div class="modal-icon" data-v-7f00aaf9>`);
      if (_ctx.icon) {
        _push(`<svg class="${ssrRenderClass(_ctx.tStyle["icon"])}" data-v-7f00aaf9>${_ctx.iconList.find((i) => i.key === _ctx.icon).content ?? ""}</svg>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.design !== "elegant" && (_ctx.title || _ctx.subTitle)) {
      _push(`<div id="content-title-container" data-v-7f00aaf9>`);
      if (_ctx.design !== "elegant" && _ctx.title) {
        _push(`<span id="content-title" data-v-7f00aaf9>${ssrInterpolate(_ctx.title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.design !== "elegant" && _ctx.subTitle) {
        _push(`<span id="content-sub-title" data-v-7f00aaf9>${ssrInterpolate(_ctx.subTitle)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.content || _ctx.hasSlot("content")) {
      _push(`<div class="modal-content" data-v-7f00aaf9>`);
      if (_ctx.content) {
        _push(`<span class="modal-content-default" data-v-7f00aaf9>${_ctx.content ?? ""}</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    if (_ctx.hasSlot("footer-left") || _ctx.hasSlot("footer-center") || _ctx.hasSlot("footer-right")) {
      _push(`<div class="modal-footer-container" data-v-7f00aaf9><div class="modal-footer-left" data-v-7f00aaf9><span class="modal-footer-item" style="${ssrRenderStyle(_ctx.hasSlot("footer-left") ? null : { display: "none" })}" data-v-7f00aaf9>`);
      ssrRenderSlot(_ctx.$slots, "footer-left", {}, null, _push, _parent);
      _push(`</span></div><div class="modal-footer-center" data-v-7f00aaf9><span class="modal-footer-item" style="${ssrRenderStyle(_ctx.hasSlot("footer-center") ? null : { display: "none" })}" data-v-7f00aaf9>`);
      ssrRenderSlot(_ctx.$slots, "footer-center", {}, null, _push, _parent);
      _push(`</span></div><div class="modal-footer-right" data-v-7f00aaf9><span class="modal-footer-item" style="${ssrRenderStyle(_ctx.hasSlot("footer-right") ? null : { display: "none" })}" data-v-7f00aaf9>`);
      ssrRenderSlot(_ctx.$slots, "footer-right", {}, null, _push, _parent);
      _push(`</span></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal/TModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7f00aaf9"]]);
export {
  TModal as T
};

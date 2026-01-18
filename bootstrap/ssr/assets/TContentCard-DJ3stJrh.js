import { defineComponent, ref, mergeProps, useSlots, useSSRContext } from "vue";
import { r as radiusSizeMixin, b as bgColorStyles } from "./windowSizeCalculator-BWfQvLaG.js";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const contentCardStyleMixin = {
  props: {
    width: {
      type: Number,
      default: 1
    },
    adaptiveHeight: {
      type: Boolean,
      default: false
    }
  },
  mixins: [radiusSizeMixin, bgColorStyles],
  data() {
    return {
      widthStyle: {
        "1": "md:col-span-1",
        "2": "md:col-span-2",
        "3": "md:col-span-3",
        "4": "md:col-span-4",
        "5": "md:col-span-5",
        "6": "md:col-span-6",
        "7": "md:col-span-7",
        "8": "md:col-span-8",
        "9": "md:col-span-9",
        "10": "md:col-span-10",
        "11": "md:col-span-11",
        "12": "md:col-span-12"
      },
      defaultStyle: {
        "0": "col-span-full"
      }
    };
  },
  computed: {
    calculatedCardStyle() {
      let style = "";
      if (this.adaptiveHeight) {
        style = "place-self-start ";
      }
      style += this.bgColorStyle + " " + this.radiusStyle + " " + this.textColorStyle + " " + this.widthStyle[this.width] + " " + this.defaultStyle[0];
      return style;
    }
  }
};
const _sfc_main = defineComponent({
  name: "TContentCard",
  mixins: [contentCardStyleMixin],
  props: {
    title: {
      type: String,
      default: null,
      required: false
    },
    subTitle: {
      type: String,
      default: null,
      required: false
    },
    line: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const showSecondContent = ref(false);
    const hasSlot = (name) => !!useSlots()[name];
    return { hasSlot, showSecondContent };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [
      "relative p-4 shadow-sm w-full dark:bg-gray-800 dark:border-transparent",
      _ctx.calculatedCardStyle,
      _ctx.border && "border"
    ]
  }, _attrs))}><div class="${ssrRenderClass(_ctx.hasSlot("icon") ? "flex justify-between items-center" : "justify-start")}">`);
  if (_ctx.hasSlot("icon")) {
    _push(`<div class="flex w-16 h-full justify-center items-center -ml-3 dark:text-gray-200">`);
    ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([
    "flex-grow",
    _ctx.hasSlot("icon") ? "border-l pl-2" : ""
  ])}">`);
  if (_ctx.hasSlot("title") || _ctx.title) {
    _push(`<div class="font-bold text-xl dark:text-gray-200">`);
    if (_ctx.title) {
      _push(`<span>${ssrInterpolate(_ctx.title)}</span>`);
    } else {
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.hasSlot("subTitle") || _ctx.subTitle) {
    _push(`<div class="text-sm dark:text-gray-400">`);
    if (_ctx.subTitle) {
      _push(`<span>${ssrInterpolate(_ctx.subTitle)}</span>`);
    } else {
      ssrRenderSlot(_ctx.$slots, "subTitle", {}, null, _push, _parent);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.line) {
    _push(`<hr class="${ssrRenderClass("my-1 border")}">`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex flex-wrap whitespace-normal w-full">`);
  if (!_ctx.showSecondContent) {
    ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  if (!_ctx.showSecondContent) {
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.showSecondContent) {
    ssrRenderSlot(_ctx.$slots, "secondContent", {}, null, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Card/TContentCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TContentCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TContentCard as T
};

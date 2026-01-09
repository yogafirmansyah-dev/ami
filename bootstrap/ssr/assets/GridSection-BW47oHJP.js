import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const gridStyleMixin = {
  props: {
    gap: {
      type: Number,
      default: 4
    },
    col: {
      type: Number
    },
    colPhone: Number,
    colTablet: Number,
    colLaptop: Number,
    colDesktop: Number
  },
  data() {
    return {
      gapStyle: {
        "0": "gap-0",
        "1": "gap-1 mb-1",
        "2": "gap-2 mb-2",
        "3": "gap-3 mb-3",
        "4": "gap-4 mb-4",
        "5": "gap-5 mb-5",
        "6": "gap-6 mb-6",
        "7": "gap-7 mb-7",
        "8": "gap-8 mb-8",
        "9": "gap-9 mb-9",
        "10": "gap-10 mb-10"
      },
      gridStyle: {
        "0": "grid-cols-none",
        "1": "grid-cols-1",
        "2": "grid-cols-2",
        "3": "grid-cols-3",
        "4": "grid-cols-4",
        "5": "grid-cols-5",
        "6": "grid-cols-6",
        "7": "grid-cols-7",
        "8": "grid-cols-8",
        "9": "grid-cols-9",
        "10": "grid-cols-10",
        "11": "grid-cols-11",
        "12": "grid-cols-12"
      },
      gridPhoneStyle: {
        "0": "sm:grid-cols-none",
        "1": "sm:grid-cols-1",
        "2": "sm:grid-cols-2",
        "3": "sm:grid-cols-3",
        "4": "sm:grid-cols-4",
        "5": "sm:grid-cols-5",
        "6": "sm:grid-cols-6",
        "7": "sm:grid-cols-7",
        "8": "sm:grid-cols-8",
        "9": "sm:grid-cols-9",
        "10": "sm:grid-cols-10",
        "11": "sm:grid-cols-11",
        "12": "sm:grid-cols-12"
      },
      gridTabletStyle: {
        "0": "md:grid-cols-none",
        "1": "md:grid-cols-1",
        "2": "md:grid-cols-2",
        "3": "md:grid-cols-3",
        "4": "md:grid-cols-4",
        "5": "md:grid-cols-5",
        "6": "md:grid-cols-6",
        "7": "md:grid-cols-7",
        "8": "md:grid-cols-8",
        "9": "md:grid-cols-9",
        "10": "md:grid-cols-10",
        "11": "md:grid-cols-11",
        "12": "md:grid-cols-12"
      },
      gridLaptopStyle: {
        "0": "lg:grid-cols-none",
        "1": "lg:grid-cols-1",
        "2": "lg:grid-cols-2",
        "3": "lg:grid-cols-3",
        "4": "lg:grid-cols-4",
        "5": "lg:grid-cols-5",
        "6": "lg:grid-cols-6",
        "7": "lg:grid-cols-7",
        "8": "lg:grid-cols-8",
        "9": "lg:grid-cols-9",
        "10": "lg:grid-cols-10",
        "11": "lg:grid-cols-11",
        "12": "lg:grid-cols-12"
      },
      gridDesktopStyle: {
        "0": "xl:grid-cols-none",
        "1": "xl:grid-cols-1",
        "2": "xl:grid-cols-2",
        "3": "xl:grid-cols-3",
        "4": "xl:grid-cols-4",
        "5": "xl:grid-cols-5",
        "6": "xl:grid-cols-6",
        "7": "xl:grid-cols-7",
        "8": "xl:grid-cols-8",
        "9": "xl:grid-cols-9",
        "10": "xl:grid-cols-10",
        "11": "xl:grid-cols-11",
        "12": "xl:grid-cols-12"
      },
      defaultStyle: {
        "0": "justify-items-stretch"
      }
    };
  },
  computed: {
    calculatedGridStyle() {
      let style;
      if (this.col) {
        style = this.gridStyle[this.col];
      } else {
        style = this.gridStyle[1] + " ";
      }
      if (this.colPhone) {
        style = this.gridPhoneStyle[this.colPhone] + " ";
      }
      if (this.colTablet) {
        style = style + this.gridTabletStyle[this.colTablet] + " ";
      }
      if (this.colLaptop) {
        style = style + this.gridLaptopStyle[this.colLaptop] + " ";
      }
      if (this.colDesktop) {
        style = style + this.gridDesktopStyle[this.colDesktop];
      }
      return style + " " + this.defaultStyle[0];
    }
  }
};
const _sfc_main = defineComponent({
  name: "GridSection",
  mixins: [gridStyleMixin]
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-full w-full" }, _attrs))}><div class="${ssrRenderClass([
    "grid w-full grid-flow-row",
    _ctx.gapStyle[_ctx.gap],
    _ctx.calculatedGridStyle
  ])}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GridSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GridSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  GridSection as G
};

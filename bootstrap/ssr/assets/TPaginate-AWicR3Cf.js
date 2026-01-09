import { defineComponent, toRefs, ref, computed, mergeProps, useSSRContext } from "vue";
import { useI18n } from "vue-i18n";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const pagination_tr = {
  detailText: "Toplam: {totalPage} sayfa {totalRecord} kayıt",
  previous: "Önceki",
  next: "Sonraki"
};
const pagination_en = {
  detailText: "{totalPage} pages - {totalRecord} records",
  previous: "Previous",
  next: "Next"
};
const _sfc_main = defineComponent({
  name: "TPaginate",
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    design: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "gray"
    },
    reverse: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Number,
      default: 3
    },
    detail: {
      type: Boolean,
      default: true
    },
    jump: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 1
    },
    range: {
      type: Number,
      default: 5
    },
    arrowText: {
      type: Boolean,
      default: true
    },
    detailText: {
      type: String,
      default: "detailText"
    },
    nextText: {
      type: String,
      default: "next"
    },
    previousText: {
      type: String,
      default: "previous"
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { total, modelValue, range } = toRefs(props);
    const jumpPage = ref(null);
    const { t } = useI18n({
      messages: {
        en: pagination_en,
        tr: pagination_tr
      }
    });
    const totalPage = computed(() => {
      return Math.ceil(total.value / range.value);
    });
    const nextPage = () => {
      if (Math.ceil(totalPage.value / range.value) > Math.ceil(modelValue.value / range.value)) {
        let newPage = Math.ceil(modelValue.value / range.value) * range.value + 1;
        emit("update:modelValue", newPage);
      }
    };
    const previousPage = () => {
      if (modelValue.value > range.value) {
        let newPage = Math.floor(modelValue.value / range.value) * range.value;
        if (modelValue.value === newPage) {
          newPage = newPage - range.value;
        }
        emit("update:modelValue", newPage);
      }
    };
    const selectPage = (item) => {
      let newPage;
      if (isNaN(item)) {
        newPage = 1;
      } else {
        if (item > totalPage.value) {
          newPage = totalPage.value;
        } else if (1 > item) {
          newPage = 1;
        } else {
          newPage = item;
        }
      }
      emit("update:modelValue", newPage);
    };
    const dynamicRange = computed(() => {
      let newRange = [];
      let start;
      start = Math.floor(modelValue.value / range.value) * range.value;
      if (start < 0) {
        start = 1;
      } else if (modelValue.value % range.value !== 0) {
        start = start + 1;
        for (let i = start; start + range.value > i; i++) {
          if (totalPage.value >= i) {
            newRange.push(i);
          }
        }
      } else if (modelValue.value % range.value === 0) {
        start = start - (range.value - 1);
        for (let i = start; start + range.value > i; i++) {
          if (totalPage.value >= i) {
            newRange.push(i);
          }
        }
      }
      return newRange;
    });
    return {
      nextPage,
      previousPage,
      totalPage,
      selectPage,
      dynamicRange,
      jumpPage,
      t
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["pagination-container", [
      `pagination-${_ctx.design}-base`,
      `pagination-${_ctx.design}-${_ctx.color}`,
      { "flex-wrap-reverse": _ctx.reverse }
    ]]
  }, _attrs))}>`);
  if (_ctx.detail || _ctx.jump) {
    _push(`<div class="pagination-detail-container"><div class="pagination-detail-text">${ssrInterpolate(_ctx.t(_ctx.detailText, { activePage: _ctx.modelValue, totalPage: _ctx.totalPage, totalRecord: _ctx.total }))}</div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.jump) {
    _push(`<div class="pagination-detail-jump-container"><input type="text"${ssrRenderAttr("maxlength", _ctx.total.toString().length)}${ssrRenderAttr("value", _ctx.jumpPage)} class="pagination-detail-jump-input" style="${ssrRenderStyle({ width: Math.floor(_ctx.total.toString().length) - (0.25 * _ctx.total.toString().length - 0.5) + "rem" })}"><span class="pagination-detail-jump-button"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd"></path></svg></span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex flex-grow"></div><div class="${ssrRenderClass([`radius-${_ctx.radius}`, "pagination-counters"])}"><div class="${ssrRenderClass(_ctx.range >= _ctx.modelValue ? "pagination-passive-arrow" : "pagination-arrow")}"><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass(["h-6 w-6", _ctx.arrowText ? "-mx-1 md:-ml-2 md:-mr-1" : ""])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`);
  if (_ctx.arrowText) {
    _push(`<span class="pagination-arrow-text">${ssrInterpolate(_ctx.t(_ctx.previousText))}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><!--[-->`);
  ssrRenderList(_ctx.dynamicRange, (item) => {
    _push(`<span class="${ssrRenderClass(_ctx.modelValue === item ? "pagination-active-item" : "pagination-item")}">${ssrInterpolate(item)}</span>`);
  });
  _push(`<!--]--><div class="${ssrRenderClass(Math.ceil(_ctx.modelValue / _ctx.range) === Math.ceil(_ctx.totalPage / _ctx.range) ? "pagination-passive-arrow" : "pagination-arrow")}">`);
  if (_ctx.arrowText) {
    _push(`<span class="pagination-arrow-text">${ssrInterpolate(_ctx.t(_ctx.nextText))}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass(["h-6 w-6", _ctx.arrowText ? "-mx-1 md:-mr-2 md:-ml-1" : ""])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Paginate/TPaginate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TPaginate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TPaginate as T
};

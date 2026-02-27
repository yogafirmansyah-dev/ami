import { computed, watch, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { T as TInputSelect } from "./TInputSelect-BY60CBa7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TInputText-CyR_XUuU.js";
import "@vueuse/core";
import "vue-i18n";
const _sfc_main = {
  __name: "AssignmentFormModal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      required: true
    },
    periods: Array,
    standards: Array,
    auditors: Array,
    prodis: Array,
    faculties: Array
  },
  emits: ["update:show", "closed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const form = useForm({
      period_id: "",
      master_standard_id: "",
      auditor_id: "",
      assignable_type: "prodi",
      assignable_id: ""
    });
    const filteredStandards = computed(() => {
      if (!form.assignable_type) {
        return [];
      }
      return props.standards.filter((s) => {
        const targetTypeStr = typeof s.target_type === "object" ? s.target_type.value : s.target_type;
        return targetTypeStr === form.assignable_type;
      });
    });
    watch(() => form.assignable_type, (newType, oldType) => {
      if (newType !== oldType) {
        form.master_standard_id = "";
        form.assignable_id = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-50 flex items-center justify-center p-6" }, _attrs))} data-v-c6f6615f><div class="fixed inset-0 bg-slate-900/80 dark:bg-slate-950/90 backdrop-blur-md transition-opacity" data-v-c6f6615f></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in duration-300" data-v-c6f6615f><div class="p-10 border-b border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30" data-v-c6f6615f><h3 class="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none" data-v-c6f6615f> Inisialisasi AMI </h3><p class="text-[10px] font-bold text-rose-500 uppercase tracking-[0.3em] mt-4 italic" data-v-c6f6615f> Buat Penugasan &amp; Snapshot Data Baru </p></div><form class="p-10 space-y-8 bg-white dark:bg-slate-900" data-v-c6f6615f><div class="space-y-3" data-v-c6f6615f><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-c6f6615f>Kategori Unit Target</label><div class="flex p-1.5 bg-slate-100 dark:bg-slate-800 rounded-3xl" data-v-c6f6615f><button type="button" class="${ssrRenderClass([unref(form).assignable_type === "prodi" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300", "flex-1 py-4 text-[10px] font-black uppercase rounded-2xl transition-all duration-300"])}" data-v-c6f6615f> Program Studi </button><button type="button" class="${ssrRenderClass([unref(form).assignable_type === "faculty" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300", "flex-1 py-4 text-[10px] font-black uppercase rounded-2xl transition-all duration-300"])}" data-v-c6f6615f> Fakultas </button></div></div><div class="grid grid-cols-2 gap-8" data-v-c6f6615f><div class="space-y-3" data-v-c6f6615f><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-c6f6615f>Periode AMI</label>`);
        _push(ssrRenderComponent(TInputSelect, {
          modelValue: unref(form).period_id,
          "onUpdate:modelValue": ($event) => unref(form).period_id = $event,
          options: __props.periods,
          "options-value-key": "id",
          "options-label-key": "name",
          "place-holder": "Pilih Periode",
          search: true,
          "search-place-holder": "Cari periode...",
          radius: 5,
          class: ["w-full", unref(form).errors.period_id ? "ring-2 ring-rose-500 rounded-xl" : ""]
        }, null, _parent));
        if (unref(form).errors.period_id) {
          _push(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-c6f6615f>${ssrInterpolate(unref(form).errors.period_id)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="space-y-3" data-v-c6f6615f><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-c6f6615f>Target Unit (${ssrInterpolate(unref(form).assignable_type === "prodi" ? "Prodi" : "Fakultas")})</label>`);
        _push(ssrRenderComponent(TInputSelect, {
          modelValue: unref(form).assignable_id,
          "onUpdate:modelValue": ($event) => unref(form).assignable_id = $event,
          options: unref(form).assignable_type === "prodi" ? __props.prodis : __props.faculties,
          "options-value-key": "id",
          "options-label-key": "name",
          "place-holder": unref(form).assignable_type === "prodi" ? "Pilih Program Studi" : "Pilih Fakultas",
          search: true,
          "search-place-holder": "Cari unit...",
          radius: 5,
          class: ["w-full", unref(form).errors.assignable_id ? "ring-2 ring-rose-500 rounded-xl" : ""]
        }, null, _parent));
        if (unref(form).errors.assignable_id) {
          _push(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-c6f6615f>${ssrInterpolate(unref(form).errors.assignable_id)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="space-y-3" data-v-c6f6615f><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-c6f6615f>Standard Mutu (${ssrInterpolate(unref(form).assignable_type === "prodi" ? "Prodi" : "Fakultas")})</label>`);
        _push(ssrRenderComponent(TInputSelect, {
          modelValue: unref(form).master_standard_id,
          "onUpdate:modelValue": ($event) => unref(form).master_standard_id = $event,
          options: filteredStandards.value,
          "options-value-key": "id",
          "options-label-key": "name",
          "place-holder": "Pilih Instrumen",
          search: true,
          "search-place-holder": "Cari instrumen...",
          radius: 5,
          class: ["w-full", [unref(form).errors.master_standard_id ? "ring-2 ring-rose-500 rounded-xl" : "", !unref(form).assignable_type ? "opacity-50 cursor-not-allowed pointer-events-none" : ""]]
        }, null, _parent));
        if (unref(form).errors.master_standard_id) {
          _push(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-c6f6615f>${ssrInterpolate(unref(form).errors.master_standard_id)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="space-y-3" data-v-c6f6615f><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-c6f6615f>Lead Auditor</label>`);
        _push(ssrRenderComponent(TInputSelect, {
          modelValue: unref(form).auditor_id,
          "onUpdate:modelValue": ($event) => unref(form).auditor_id = $event,
          options: __props.auditors,
          "options-value-key": "id",
          "options-label-key": "name",
          "place-holder": "Pilih Auditor",
          search: true,
          "search-place-holder": "Cari auditor...",
          radius: 5,
          class: ["w-full", unref(form).errors.auditor_id ? "ring-2 ring-rose-500 rounded-xl" : ""]
        }, {
          label: withCtx(({ props: optionProps }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2" data-v-c6f6615f${_scopeId}><div class="w-6 h-6 rounded bg-rose-100 text-rose-600 flex items-center justify-center text-[8px] font-black uppercase" data-v-c6f6615f${_scopeId}>${ssrInterpolate(optionProps.name.substring(0, 2))}</div><span data-v-c6f6615f${_scopeId}>${ssrInterpolate(optionProps.name)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("div", { class: "w-6 h-6 rounded bg-rose-100 text-rose-600 flex items-center justify-center text-[8px] font-black uppercase" }, toDisplayString(optionProps.name.substring(0, 2)), 1),
                  createVNode("span", null, toDisplayString(optionProps.name), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(form).errors.auditor_id) {
          _push(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-c6f6615f>${ssrInterpolate(unref(form).errors.auditor_id)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full py-6 mt-4 bg-slate-900 dark:bg-rose-600 text-white text-xs font-black uppercase tracking-[0.3em] rounded-[2.5rem] shadow-2xl hover:bg-rose-600 dark:hover:bg-rose-500 transition-all active:scale-95 disabled:opacity-50" data-v-c6f6615f>${ssrInterpolate(unref(form).processing ? "Membuat Snapshots..." : "Inisialisasi Siklus AMI Baru")}</button></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Assignment/AssignmentFormModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AssignmentFormModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c6f6615f"]]);
export {
  AssignmentFormModal as default
};

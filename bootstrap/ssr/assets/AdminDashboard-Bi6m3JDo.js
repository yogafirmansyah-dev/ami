import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { T as TStatisticWidget } from "./TStatisticWidget-CYw_XkfQ.js";
import "./TTable-CBIvC_BZ.js";
import "./TContentCard-BkuMOsLs.js";
import "./TButton-oXLR37ud.js";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TChevronDownIcon-fGhz3Hz_.js";
import "./TPaginate-AWicR3Cf.js";
import "vue-i18n";
import "./TModal-BluvIe0P.js";
import "vue3-keypress";
import "@vueuse/core";
import "./TInputSelect-BY60CBa7.js";
import "./TInputText-CyR_XUuU.js";
import "./TInputCheckBox-eDtuF0je.js";
import "./TCheckIcon-CWPVq9Ck.js";
import "lodash";
import "./table_lang-CXzpQG4k.js";
const _sfc_main = {
  __name: "AdminDashboard",
  __ssrInlineRender: true,
  props: ["stats", "activities"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">`);
      _push(ssrRenderComponent(TStatisticWidget, {
        radius: 5,
        width: 1,
        color: "solid-blue",
        title: "Total Prodi",
        widgetValue: __props.stats.total_prodi || 0
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_icon, { icon: ["fas", "school"] }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_icon, { icon: ["fas", "school"] })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TStatisticWidget, {
        radius: 5,
        width: 1,
        color: "solid-purple",
        title: "Total Auditor",
        widgetValue: __props.stats.total_auditors || 0
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_icon, { icon: ["fas", "user-tie"] }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_icon, { icon: ["fas", "user-tie"] })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TStatisticWidget, {
        radius: 5,
        width: 1,
        color: "solid-yellow",
        title: "Audit Berjalan",
        widgetValue: __props.stats.active_assignments || 0
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_icon, { icon: ["fas", "tasks"] }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_icon, { icon: ["fas", "tasks"] })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TStatisticWidget, {
        radius: 5,
        width: 1,
        color: "solid-green",
        title: "Audit Selesai",
        widgetValue: __props.stats.completed_assignments || 0
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_icon, { icon: ["fas", "check-double"] }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_icon, { icon: ["fas", "check-double"] })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="bg-white dark:bg-slate-900 p-6 rounded-sm shadow-default"><h3 class="font-bold mb-4">Sebaran Tahap Audit</h3><div class="space-y-4">`);
      if (!__props.stats.stage_breakdown) {
        _push(`<div class="text-center text-slate-500 text-sm py-4"> Tidak ada data </div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(__props.stats.stage_breakdown, (count, stage) => {
          _push(`<div class="flex items-center gap-4"><span class="w-32 text-xs font-bold uppercase text-slate-500">${ssrInterpolate(stage)}</span><div class="flex-grow bg-slate-100 h-2 rounded-full overflow-hidden"><div class="bg-rose-500 h-full" style="${ssrRenderStyle({ width: count / __props.stats.active_assignments * 100 + "%" })}"></div></div><span class="text-sm font-bold">${ssrInterpolate(count)}</span></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Partials/AdminDashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

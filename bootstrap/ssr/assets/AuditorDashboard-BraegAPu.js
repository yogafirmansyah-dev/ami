import { computed, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "AuditorDashboard",
  __ssrInlineRender: true,
  props: ["stats", "myAssignments"],
  setup(__props) {
    const props = __props;
    const assignments = computed(() => props.myAssignments || []);
    const getStageColor = (stage) => {
      const colors = {
        "doc_audit": "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400",
        "field_audit": "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400",
        "finding": "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400",
        "reporting": "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400"
      };
      return colors[stage] || "bg-slate-100 text-slate-600";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700" }, _attrs))}><div class="relative bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-3xl p-8 overflow-hidden shadow-2xl"><div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div><div class="relative z-10 text-white"><h2 class="text-3xl font-black tracking-tight mb-2">Area Kerja Auditor</h2><p class="text-emerald-200">Kelola penugasan audit dan evaluasi Anda.</p></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"><div><p class="text-xs uppercase font-bold text-slate-400 tracking-widest">Total Ditugaskan</p><p class="text-3xl font-black text-slate-800 dark:text-white mt-1">${ssrInterpolate(__props.stats.my_assignments)}</p></div><div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-500">`);
      _push(ssrRenderComponent(_component_icon, {
        icon: "fa-solid fa-briefcase",
        class: "text-xl"
      }, null, _parent));
      _push(`</div></div><div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"><div><p class="text-xs uppercase font-bold text-slate-400 tracking-widest">Menunggu Review</p><p class="text-3xl font-black text-rose-500 mt-1">${ssrInterpolate(__props.stats.pending_reviews)}</p></div><div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-500">`);
      _push(ssrRenderComponent(_component_icon, {
        icon: "fa-solid fa-clock",
        class: "text-xl"
      }, null, _parent));
      _push(`</div></div><div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"><div><p class="text-xs uppercase font-bold text-slate-400 tracking-widest">Selesai</p><p class="text-3xl font-black text-emerald-500 mt-1">${ssrInterpolate(__props.stats.completed_reviews)}</p></div><div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500">`);
      _push(ssrRenderComponent(_component_icon, {
        icon: "fa-solid fa-check-circle",
        class: "text-xl"
      }, null, _parent));
      _push(`</div></div></div><div><h3 class="text-lg font-bold text-slate-700 dark:text-slate-200 mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-list-check" }, null, _parent));
      _push(` Penugasan Aktif </h3>`);
      if (assignments.value.length === 0) {
        _push(`<div class="text-center py-12 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">`);
        _push(ssrRenderComponent(_component_icon, {
          icon: "fa-solid fa-mug-hot",
          class: "text-4xl text-slate-300 mb-4"
        }, null, _parent));
        _push(`<p class="text-slate-500 font-medium">Semua tugas selesai! Tidak ada penugasan aktif.</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(assignments.value, (item) => {
          _push(ssrRenderComponent(unref(Link), {
            key: item.id,
            href: _ctx.route("auditor.assignments.show", item.id),
            class: "group bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative flex flex-col justify-between"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${_scopeId}><div class="absolute top-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800"${_scopeId}><div class="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-1000" style="${ssrRenderStyle({ width: item.progress + "%" })}"${_scopeId}></div></div><div class="p-6"${_scopeId}><div class="flex justify-between items-start mb-4"${_scopeId}><span class="${ssrRenderClass(["px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider", getStageColor(item.current_stage)])}"${_scopeId}>${ssrInterpolate(item.current_stage?.replace("_", " ") || "Unknown")}</span><span class="text-[10px] font-bold text-slate-400"${_scopeId}>${ssrInterpolate(item.period_name)}</span></div><h4 class="text-lg font-black text-slate-800 dark:text-white mb-1 line-clamp-2 group-hover:text-emerald-500 transition-colors"${_scopeId}>${ssrInterpolate(item.target_name)}</h4><p class="text-xs text-slate-500 font-medium mb-6 line-clamp-1"${_scopeId}>${ssrInterpolate(item.standard_name)}</p><div class="flex items-center justify-between text-xs font-bold text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl"${_scopeId}><span${_scopeId}>Kemajuan</span><span class="text-slate-700 dark:text-slate-200"${_scopeId}>${ssrInterpolate(item.progress)}%</span></div><div class="mt-4 flex gap-2"${_scopeId}><div class="flex-1 text-center p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"${_scopeId}><span class="block text-[10px] uppercase font-black tracking-wider"${_scopeId}>Dinilai</span><span class="text-sm font-bold"${_scopeId}>${ssrInterpolate(item.scored_indicators_count)}</span></div><div class="flex-1 text-center p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-500"${_scopeId}><span class="block text-[10px] uppercase font-black tracking-wider"${_scopeId}>Total</span><span class="text-sm font-bold"${_scopeId}>${ssrInterpolate(item.indicators_count)}</span></div></div></div></div><div class="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex justify-end"${_scopeId}><span class="text-xs font-black uppercase tracking-widest text-emerald-500 group-hover:gap-2 flex items-center gap-1 transition-all"${_scopeId}> Mulai Evaluasi `);
                _push2(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-arrow-right" }, null, _parent2, _scopeId));
                _push2(`</span></div>`);
              } else {
                return [
                  createVNode("div", null, [
                    createVNode("div", { class: "absolute top-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800" }, [
                      createVNode("div", {
                        class: "h-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-1000",
                        style: { width: item.progress + "%" }
                      }, null, 4)
                    ]),
                    createVNode("div", { class: "p-6" }, [
                      createVNode("div", { class: "flex justify-between items-start mb-4" }, [
                        createVNode("span", {
                          class: ["px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider", getStageColor(item.current_stage)]
                        }, toDisplayString(item.current_stage?.replace("_", " ") || "Unknown"), 3),
                        createVNode("span", { class: "text-[10px] font-bold text-slate-400" }, toDisplayString(item.period_name), 1)
                      ]),
                      createVNode("h4", { class: "text-lg font-black text-slate-800 dark:text-white mb-1 line-clamp-2 group-hover:text-emerald-500 transition-colors" }, toDisplayString(item.target_name), 1),
                      createVNode("p", { class: "text-xs text-slate-500 font-medium mb-6 line-clamp-1" }, toDisplayString(item.standard_name), 1),
                      createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl" }, [
                        createVNode("span", null, "Kemajuan"),
                        createVNode("span", { class: "text-slate-700 dark:text-slate-200" }, toDisplayString(item.progress) + "%", 1)
                      ]),
                      createVNode("div", { class: "mt-4 flex gap-2" }, [
                        createVNode("div", { class: "flex-1 text-center p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" }, [
                          createVNode("span", { class: "block text-[10px] uppercase font-black tracking-wider" }, "Dinilai"),
                          createVNode("span", { class: "text-sm font-bold" }, toDisplayString(item.scored_indicators_count), 1)
                        ]),
                        createVNode("div", { class: "flex-1 text-center p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-500" }, [
                          createVNode("span", { class: "block text-[10px] uppercase font-black tracking-wider" }, "Total"),
                          createVNode("span", { class: "text-sm font-bold" }, toDisplayString(item.indicators_count), 1)
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex justify-end" }, [
                    createVNode("span", { class: "text-xs font-black uppercase tracking-widest text-emerald-500 group-hover:gap-2 flex items-center gap-1 transition-all" }, [
                      createTextVNode(" Mulai Evaluasi "),
                      createVNode(_component_icon, { icon: "fa-solid fa-arrow-right" })
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Partials/AuditorDashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

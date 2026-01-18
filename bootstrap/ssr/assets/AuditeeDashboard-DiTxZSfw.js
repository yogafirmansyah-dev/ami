import { resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "AuditeeDashboard",
  __ssrInlineRender: true,
  props: {
    stats: Object,
    myAssignments: Array
  },
  setup(__props) {
    const getStageColor = (stage) => {
      const colors = {
        "master_setup": "bg-slate-100 text-slate-600 border-slate-200",
        "doc_audit": "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 border-blue-200",
        "field_audit": "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400 border-purple-200",
        "finding": "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 border-amber-200",
        "reporting": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 border-emerald-200"
      };
      return colors[stage] || "bg-slate-100 text-slate-600";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700" }, _attrs))}><div class="relative bg-gradient-to-r from-indigo-900 to-indigo-800 rounded-3xl p-8 overflow-hidden shadow-2xl"><div class="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div><div class="relative z-10 text-white"><h2 class="text-3xl font-black tracking-tight mb-2">Portal Auditee</h2><p class="text-indigo-200">Pantau progres audit unit kerja dan temuan Anda.</p></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"><p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Audit Aktif</p><div class="flex items-center justify-between"><p class="text-3xl font-black text-slate-800 dark:text-white">${ssrInterpolate(__props.stats.active_assignments || 0)}</p>`);
      _push(ssrRenderComponent(_component_icon, {
        icon: "fa-solid fa-folder-open",
        class: "text-2xl text-indigo-400 opacity-80"
      }, null, _parent));
      _push(`</div></div><div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"><p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Indikator</p><div class="flex items-center justify-between"><p class="text-3xl font-black text-slate-800 dark:text-white">${ssrInterpolate(__props.stats.total_indicators || 0)}</p>`);
      _push(ssrRenderComponent(_component_icon, {
        icon: "fa-solid fa-list-ol",
        class: "text-2xl text-indigo-400 opacity-80"
      }, null, _parent));
      _push(`</div></div><div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"><p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Bukti Terunggah</p><div class="flex items-center justify-between"><p class="text-3xl font-black text-slate-800 dark:text-white">${ssrInterpolate(__props.stats.completed_evidence || 0)}</p>`);
      _push(ssrRenderComponent(_component_icon, {
        icon: "fa-solid fa-file-arrow-up",
        class: "text-2xl text-indigo-400 opacity-80"
      }, null, _parent));
      _push(`</div></div></div><div><h3 class="text-lg font-bold text-slate-700 dark:text-slate-200 mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-building-columns" }, null, _parent));
      _push(` Unit Kerja Saya </h3>`);
      if (__props.myAssignments.length === 0) {
        _push(`<div class="bg-white dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center">`);
        _push(ssrRenderComponent(_component_icon, {
          icon: "fa-solid fa-bell-slash",
          class: "text-4xl text-slate-300 mb-4"
        }, null, _parent));
        _push(`<h4 class="text-slate-800 dark:text-white font-bold">Tidak Ada Audit Aktif</h4><p class="text-sm text-slate-500 mt-2">Unit kerja Anda saat ini tidak dijadwalkan untuk audit.</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><!--[-->`);
        ssrRenderList(__props.myAssignments, (item) => {
          _push(ssrRenderComponent(unref(Link), {
            key: item.id,
            href: _ctx.route("auditee.assignments.show", item.id),
            class: "group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex justify-between items-start mb-6 relative z-10"${_scopeId}><span class="${ssrRenderClass(["text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider", getStageColor(item.current_stage)])}"${_scopeId}>${ssrInterpolate(item.current_stage?.replace("_", " "))}</span><span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest"${_scopeId}>${ssrInterpolate(item.period_name)}</span></div><div class="mb-8 relative z-10"${_scopeId}><h4 class="font-black text-2xl text-slate-800 dark:text-white leading-tight mb-2 group-hover:text-indigo-500 transition-colors"${_scopeId}>${ssrInterpolate(item.target_name)}</h4><div class="flex items-center gap-2"${_scopeId}><span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[9px] font-bold text-slate-500 uppercase"${_scopeId}>${ssrInterpolate(item.target_type)}</span><span class="text-sm text-slate-400 font-medium truncate"${_scopeId}>${ssrInterpolate(item.standard_name)}</span></div></div><div class="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 mb-6 relative z-10"${_scopeId}><div class="flex justify-between items-end mb-2"${_scopeId}><span class="text-[10px] font-black text-slate-400 uppercase tracking-wide"${_scopeId}>Kesiapan</span><span class="text-xs font-black text-indigo-500"${_scopeId}>${ssrInterpolate(Math.round(item.upload_progress))}%</span></div><div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden"${_scopeId}><div class="bg-indigo-500 h-full rounded-full transition-all duration-1000" style="${ssrRenderStyle({ width: item.upload_progress + "%" })}"${_scopeId}></div></div><div class="flex justify-between mt-2 text-[10px] text-slate-400 font-bold uppercase"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.uploaded_indicators)} Diunggah</span><span${_scopeId}>Target: ${ssrInterpolate(item.total_indicators)}</span></div></div><div class="flex items-center justify-between relative z-10 pt-4 border-t border-slate-100 dark:border-slate-800"${_scopeId}><div class="flex flex-col"${_scopeId}><span class="text-[9px] font-bold text-slate-400 uppercase"${_scopeId}>Auditor</span><span class="text-xs font-bold text-slate-700 dark:text-slate-300"${_scopeId}>${ssrInterpolate(item.auditor_name)}</span></div><span class="text-xs font-black uppercase tracking-widest text-indigo-500 group-hover:gap-2 flex items-center gap-1 transition-all"${_scopeId}> Detail `);
                _push2(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-arrow-right" }, null, _parent2, _scopeId));
                _push2(`</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex justify-between items-start mb-6 relative z-10" }, [
                    createVNode("span", {
                      class: ["text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider", getStageColor(item.current_stage)]
                    }, toDisplayString(item.current_stage?.replace("_", " ")), 3),
                    createVNode("span", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest" }, toDisplayString(item.period_name), 1)
                  ]),
                  createVNode("div", { class: "mb-8 relative z-10" }, [
                    createVNode("h4", { class: "font-black text-2xl text-slate-800 dark:text-white leading-tight mb-2 group-hover:text-indigo-500 transition-colors" }, toDisplayString(item.target_name), 1),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", { class: "px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[9px] font-bold text-slate-500 uppercase" }, toDisplayString(item.target_type), 1),
                      createVNode("span", { class: "text-sm text-slate-400 font-medium truncate" }, toDisplayString(item.standard_name), 1)
                    ])
                  ]),
                  createVNode("div", { class: "bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 mb-6 relative z-10" }, [
                    createVNode("div", { class: "flex justify-between items-end mb-2" }, [
                      createVNode("span", { class: "text-[10px] font-black text-slate-400 uppercase tracking-wide" }, "Kesiapan"),
                      createVNode("span", { class: "text-xs font-black text-indigo-500" }, toDisplayString(Math.round(item.upload_progress)) + "%", 1)
                    ]),
                    createVNode("div", { class: "w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden" }, [
                      createVNode("div", {
                        class: "bg-indigo-500 h-full rounded-full transition-all duration-1000",
                        style: { width: item.upload_progress + "%" }
                      }, null, 4)
                    ]),
                    createVNode("div", { class: "flex justify-between mt-2 text-[10px] text-slate-400 font-bold uppercase" }, [
                      createVNode("span", null, toDisplayString(item.uploaded_indicators) + " Diunggah", 1),
                      createVNode("span", null, "Target: " + toDisplayString(item.total_indicators), 1)
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center justify-between relative z-10 pt-4 border-t border-slate-100 dark:border-slate-800" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("span", { class: "text-[9px] font-bold text-slate-400 uppercase" }, "Auditor"),
                      createVNode("span", { class: "text-xs font-bold text-slate-700 dark:text-slate-300" }, toDisplayString(item.auditor_name), 1)
                    ]),
                    createVNode("span", { class: "text-xs font-black uppercase tracking-widest text-indigo-500 group-hover:gap-2 flex items-center gap-1 transition-all" }, [
                      createTextVNode(" Detail "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Partials/AuditeeDashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

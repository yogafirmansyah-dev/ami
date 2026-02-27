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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700" }, _attrs))}><div class="relative bg-gradient-to-r from-indigo-900 to-indigo-800 rounded-[2.5rem] p-10 overflow-hidden shadow-2xl border border-white/10 group"><div class="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-indigo-500/30 transition-colors duration-1000"></div><div class="relative z-10 text-white"><div class="flex items-center gap-3 mb-6 opacity-80"><span class="w-8 h-[2px] bg-indigo-400"></span><h3 class="text-xs font-bold uppercase tracking-[0.2em] italic">Auditee Portal</h3></div><h2 class="text-4xl md:text-5xl font-black tracking-tighter mb-4 italic leading-none bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-100"> Portal <span class="text-transparent">Auditee</span></h2><p class="text-indigo-200">Pantau progres evaluasi audit unit kerja dan temuan Anda secara real-time. </p></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl p-8 rounded-[2rem] border border-white/40 dark:border-slate-800 shadow-sm flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group"><div class="absolute -right-6 -top-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors"></div><div class="relative z-10"><p class="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] mb-2"> Audit Aktif</p><p class="text-4xl font-black text-slate-800 dark:text-white mt-1 italic tracking-tighter">${ssrInterpolate(__props.stats.active_assignments || 0)}</p></div><div class="p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform relative z-10">`);
      _push(ssrRenderComponent(_component_icon, {
        icon: "fa-solid fa-folder-open",
        class: "text-2xl"
      }, null, _parent));
      _push(`</div></div><div class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl p-8 rounded-[2rem] border border-white/40 dark:border-slate-800 shadow-sm flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group"><div class="absolute -right-6 -top-6 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-colors"></div><div class="relative z-10"><p class="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] mb-2"> Total Indikator</p><p class="text-4xl font-black text-slate-800 dark:text-white mt-1 italic tracking-tighter">${ssrInterpolate(__props.stats.total_indicators || 0)}</p></div><div class="p-5 rounded-2xl bg-rose-50 dark:bg-rose-500/10 text-rose-500 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform relative z-10">`);
      _push(ssrRenderComponent(_component_icon, {
        icon: "fa-solid fa-list-ol",
        class: "text-2xl"
      }, null, _parent));
      _push(`</div></div><div class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl p-8 rounded-[2rem] border border-white/40 dark:border-slate-800 shadow-sm flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group"><div class="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors"></div><div class="relative z-10"><p class="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] mb-2"> Bukti Terunggah</p><p class="text-4xl font-black text-slate-800 dark:text-white mt-1 italic tracking-tighter">${ssrInterpolate(__props.stats.completed_evidence || 0)}</p></div><div class="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform relative z-10">`);
      _push(ssrRenderComponent(_component_icon, {
        icon: "fa-solid fa-file-arrow-up",
        class: "text-2xl"
      }, null, _parent));
      _push(`</div></div></div><div><h3 class="text-lg font-bold text-slate-700 dark:text-slate-200 mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-building-columns" }, null, _parent));
      _push(` Unit Kerja Saya </h3>`);
      if (__props.myAssignments.length === 0) {
        _push(`<div class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-slate-800 shadow-sm p-16 text-center"><div class="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner ring-1 ring-slate-200 dark:ring-slate-700">`);
        _push(ssrRenderComponent(_component_icon, {
          icon: "fa-solid fa-bell-slash",
          class: "text-4xl text-slate-400 animate-pulse"
        }, null, _parent));
        _push(`</div><h4 class="text-lg font-black text-slate-800 dark:text-white mb-2">Tidak Ada Audit Aktif</h4><p class="text-sm text-slate-500 dark:text-slate-400 font-medium max-w-sm mx-auto">Unit kerja Anda saat ini tidak dijadwalkan untuk proses audit.</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><!--[-->`);
        ssrRenderList(__props.myAssignments, (item) => {
          _push(ssrRenderComponent(unref(Link), {
            key: item.id,
            href: _ctx.route("auditee.assignments.show", item.id),
            class: "group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 dark:border-slate-800 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.3)] hover:-translate-y-2 transition-all duration-500 overflow-hidden relative flex flex-col justify-between"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="p-8"${_scopeId}><div class="flex justify-between items-start mb-6 relative z-10"${_scopeId}><span class="${ssrRenderClass(["px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-sm", getStageColor(item.current_stage)])}"${_scopeId}>${ssrInterpolate(item.current_stage?.replace("_", " "))}</span><span class="text-[10px] font-black text-slate-400 uppercase tracking-widest"${_scopeId}>${ssrInterpolate(item.period_name)}</span></div><div class="mb-8 relative z-10"${_scopeId}><h4 class="font-black text-2xl text-slate-800 dark:text-white leading-tight mb-3 group-hover:text-indigo-500 transition-colors italic"${_scopeId}>${ssrInterpolate(item.target_name)}</h4><div class="flex items-center gap-3"${_scopeId}><span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-[9px] font-black text-slate-500 uppercase tracking-widest border border-slate-200 dark:border-slate-700"${_scopeId}>${ssrInterpolate(item.target_type)}</span><span class="text-sm text-slate-500 dark:text-slate-400 font-medium truncate"${_scopeId}>${ssrInterpolate(item.standard_name)}</span></div></div><div class="bg-slate-50/50 dark:bg-slate-800/30 rounded-3xl p-6 mb-6 relative z-10 border border-slate-100 dark:border-slate-800"${_scopeId}><div class="flex justify-between items-end mb-3"${_scopeId}><span class="text-[10px] font-black text-slate-400 uppercase tracking-widest"${_scopeId}>Kesiapan Dokumen</span><span class="text-sm font-black text-indigo-500 italic"${_scopeId}>${ssrInterpolate(Math.round(item.upload_progress))}%</span></div><div class="w-full bg-slate-200/50 dark:bg-slate-700/50 rounded-full h-2.5 overflow-hidden shadow-inner relative"${_scopeId}><div class="bg-gradient-to-r from-indigo-400 to-indigo-600 h-full rounded-full transition-all duration-1000 relative" style="${ssrRenderStyle({ width: item.upload_progress + "%" })}"${_scopeId}><div class="absolute right-0 top-0 w-3 h-full bg-white/50 blur-[2px] shadow-[0_0_10px_rgba(255,255,255,0.8)]"${_scopeId}></div></div></div><div class="flex justify-between mt-3 text-[9px] text-slate-400 font-black uppercase tracking-widest"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.uploaded_indicators)} Diunggah</span><span${_scopeId}>Target: ${ssrInterpolate(item.total_indicators)}</span></div></div></div><div class="px-8 py-5 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center group-hover:bg-indigo-50/30 dark:group-hover:bg-indigo-500/5 transition-colors"${_scopeId}><div class="flex flex-col"${_scopeId}><span class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5"${_scopeId}>Auditor</span><span class="text-xs font-bold text-slate-700 dark:text-slate-300 italic"${_scopeId}>${ssrInterpolate(item.auditor_name)}</span></div><span class="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:gap-3 flex items-center gap-2 transition-all"${_scopeId}> Area Kerja `);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-arrow-right",
                  class: "text-sm"
                }, null, _parent2, _scopeId));
                _push2(`</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "p-8" }, [
                    createVNode("div", { class: "flex justify-between items-start mb-6 relative z-10" }, [
                      createVNode("span", {
                        class: ["px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-sm", getStageColor(item.current_stage)]
                      }, toDisplayString(item.current_stage?.replace("_", " ")), 3),
                      createVNode("span", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest" }, toDisplayString(item.period_name), 1)
                    ]),
                    createVNode("div", { class: "mb-8 relative z-10" }, [
                      createVNode("h4", { class: "font-black text-2xl text-slate-800 dark:text-white leading-tight mb-3 group-hover:text-indigo-500 transition-colors italic" }, toDisplayString(item.target_name), 1),
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("span", { class: "px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-[9px] font-black text-slate-500 uppercase tracking-widest border border-slate-200 dark:border-slate-700" }, toDisplayString(item.target_type), 1),
                        createVNode("span", { class: "text-sm text-slate-500 dark:text-slate-400 font-medium truncate" }, toDisplayString(item.standard_name), 1)
                      ])
                    ]),
                    createVNode("div", { class: "bg-slate-50/50 dark:bg-slate-800/30 rounded-3xl p-6 mb-6 relative z-10 border border-slate-100 dark:border-slate-800" }, [
                      createVNode("div", { class: "flex justify-between items-end mb-3" }, [
                        createVNode("span", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest" }, "Kesiapan Dokumen"),
                        createVNode("span", { class: "text-sm font-black text-indigo-500 italic" }, toDisplayString(Math.round(item.upload_progress)) + "%", 1)
                      ]),
                      createVNode("div", { class: "w-full bg-slate-200/50 dark:bg-slate-700/50 rounded-full h-2.5 overflow-hidden shadow-inner relative" }, [
                        createVNode("div", {
                          class: "bg-gradient-to-r from-indigo-400 to-indigo-600 h-full rounded-full transition-all duration-1000 relative",
                          style: { width: item.upload_progress + "%" }
                        }, [
                          createVNode("div", { class: "absolute right-0 top-0 w-3 h-full bg-white/50 blur-[2px] shadow-[0_0_10px_rgba(255,255,255,0.8)]" })
                        ], 4)
                      ]),
                      createVNode("div", { class: "flex justify-between mt-3 text-[9px] text-slate-400 font-black uppercase tracking-widest" }, [
                        createVNode("span", null, toDisplayString(item.uploaded_indicators) + " Diunggah", 1),
                        createVNode("span", null, "Target: " + toDisplayString(item.total_indicators), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "px-8 py-5 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center group-hover:bg-indigo-50/30 dark:group-hover:bg-indigo-500/5 transition-colors" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("span", { class: "text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5" }, "Auditor"),
                      createVNode("span", { class: "text-xs font-bold text-slate-700 dark:text-slate-300 italic" }, toDisplayString(item.auditor_name), 1)
                    ]),
                    createVNode("span", { class: "text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:gap-3 flex items-center gap-2 transition-all" }, [
                      createTextVNode(" Area Kerja "),
                      createVNode(_component_icon, {
                        icon: "fa-solid fa-arrow-right",
                        class: "text-sm"
                      })
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

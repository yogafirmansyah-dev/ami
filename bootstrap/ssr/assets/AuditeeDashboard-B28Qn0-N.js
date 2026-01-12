import { mergeProps, unref, withCtx, createTextVNode, createBlock, openBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
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
        "doc_audit": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200",
        "field_audit": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200",
        "finding": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200",
        "reporting": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200"
      };
      return colors[stage] || "bg-slate-100 text-slate-600";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList({
        "Audit Aktif": __props.stats.active_assignments,
        "Total Indikator": __props.stats.total_indicators,
        "Bukti Terunggah": __props.stats.completed_evidence
      }, (val, label) => {
        _push(`<div class="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm"><p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">${ssrInterpolate(label)}</p><p class="text-3xl font-black text-slate-800 dark:text-white mt-2">${ssrInterpolate(val)}</p></div>`);
      });
      _push(`<!--]--></div><div class="space-y-6"><div class="flex items-center justify-between"><h3 class="text-xl font-black text-slate-800 dark:text-white tracking-tight uppercase italic">Pemantauan Audit Unit Kerja</h3><span class="text-xs font-bold text-slate-400">${ssrInterpolate(__props.myAssignments.length)} Unit Terdaftar</span></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(__props.myAssignments, (item) => {
        _push(`<div class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300"><div><div class="flex justify-between items-start mb-6"><span class="${ssrRenderClass(["text-[10px] font-black px-3 py-1 rounded-xl uppercase tracking-widest border", getStageColor(item.current_stage)])}">${ssrInterpolate(item.current_stage.replace("_", " "))}</span><span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest"> PERIODE ${ssrInterpolate(item.period_name)}</span></div><div class="space-y-2"><div class="flex items-center gap-2"><h4 class="font-black text-2xl text-slate-800 dark:text-white leading-tight group-hover:text-rose-600 transition-colors">${ssrInterpolate(item.target_name)}</h4><span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-[9px] font-black text-slate-500 uppercase tracking-tighter">${ssrInterpolate(item.target_type)}</span></div><p class="text-sm text-slate-400 font-medium line-clamp-1 italic">${ssrInterpolate(item.standard_name)}</p></div></div><div class="mt-10 space-y-4"><div class="space-y-2"><div class="flex justify-between items-end"><span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Kesiapan Bukti Dokumen</span><span class="text-xs font-black text-slate-800 dark:text-white">${ssrInterpolate(Math.round(item.upload_progress))}%</span></div><div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden p-0.5 border dark:border-slate-700"><div class="bg-gradient-to-r from-rose-600 to-rose-400 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(225,29,72,0.3)]" style="${ssrRenderStyle({ width: item.upload_progress + "%" })}"></div></div><div class="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-tighter"><span>${ssrInterpolate(item.uploaded_indicators)} Terunggah</span><span>Target: ${ssrInterpolate(item.total_indicators)} Butir</span></div></div><div class="pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4"><div class="flex flex-col"><span class="text-[8px] font-black text-slate-400 uppercase">Auditor Penilai:</span><span class="text-[10px] font-bold text-slate-600 dark:text-slate-300">${ssrInterpolate(item.auditor_name)}</span></div>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("auditee.assignments.show", item.id),
          class: "inline-flex items-center px-7 py-3 bg-slate-900 hover:bg-rose-600 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-lg transition-all active:scale-95 group-hover:-translate-y-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Lihat Penilaian <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" Lihat Penilaian "),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "w-3 h-3 ml-2",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "3",
                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                  })
                ]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (__props.myAssignments.length === 0) {
        _push(`<div class="bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[3rem] p-20 text-center"><div class="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6"><svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg></div><h4 class="text-slate-800 dark:text-white font-black uppercase tracking-tight">Belum Ada Jadwal AMI</h4><p class="text-sm text-slate-400 mt-2 font-medium">Unit kerja Anda belum terdaftar dalam periode audit aktif.</p></div>`);
      } else {
        _push(`<!---->`);
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

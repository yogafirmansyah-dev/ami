import { computed, resolveComponent, mergeProps, unref, useSSRContext, ref, watchEffect } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { Pie } from "vue-chartjs";
import { Chart, Title, Tooltip, Legend, ArcElement, RadialLinearScale, PointElement, LineElement, Filler } from "chart.js";
const _sfc_main$4 = {
  __name: "ScoringView",
  __ssrInlineRender: true,
  props: {
    assignment: Object,
    indicators: Object,
    role: String
  },
  emits: ["open-upload", "open-assessment", "open-history"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const canUpload = computed(() => {
      if (props.role === "admin") return ["doc_audit", "field_audit"].includes(props.assignment.current_stage);
      if (props.role === "auditor") return ["doc_audit", "field_audit"].includes(props.assignment.current_stage);
      if (props.role === "auditee") return props.assignment.current_stage === "doc_audit";
      return false;
    });
    const canScore = computed(() => {
      if (props.role === "admin") return ["doc_audit", "field_audit"].includes(props.assignment.current_stage);
      if (props.role === "auditor") return ["doc_audit", "field_audit"].includes(props.assignment.current_stage);
      return false;
    });
    const getScoreColor = (score) => {
      if (!score) return "bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700";
      return score >= 3 ? "bg-gradient-to-br from-emerald-400 to-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/30" : "bg-gradient-to-br from-rose-500 to-rose-700 text-white border-rose-600 shadow-lg shadow-rose-500/30";
    };
    const getFindingBadge = (type) => {
      const map = {
        "KS": "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20",
        "KTS": "bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-500/20",
        "OB": "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-500/20"
      };
      return map[type] || "bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500" }, _attrs))} data-v-7e2ca435><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md" data-v-7e2ca435><div class="overflow-x-auto custom-scrollbar" data-v-7e2ca435><table class="w-full text-left border-collapse min-w-[1100px] xl:min-w-full" data-v-7e2ca435><thead data-v-7e2ca435><tr class="bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md text-[9px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-200/50 dark:border-slate-800" data-v-7e2ca435><th class="p-6 text-center min-w-20" data-v-7e2ca435>No</th><th class="p-6 text-center min-w-24" data-v-7e2ca435>Kode</th><th class="p-6 min-w-[350px]" data-v-7e2ca435>Indikator &amp; Kriteria</th><th class="p-6 min-w-[250px]" data-v-7e2ca435>Bukti yang Diperiksa</th><th class="p-6 text-center w-32" data-v-7e2ca435>Bukti</th><th class="p-6 text-center w-40" data-v-7e2ca435>Hasil Audit</th><th class="p-6 min-w-[300px]" data-v-7e2ca435>Catatan &amp; Rekomendasi</th><th class="p-6 text-center w-40 sticky right-0 bg-slate-50/80 dark:bg-slate-900/90 backdrop-blur-md z-30 shadow-none" data-v-7e2ca435> Aksi</th></tr></thead><tbody class="divide-y divide-slate-100/50 dark:divide-slate-800/50" data-v-7e2ca435><!--[-->`);
      ssrRenderList(__props.indicators.data, (item, index) => {
        _push(`<tr class="group hover:bg-slate-50/80 dark:hover:bg-slate-800/20 transition-all duration-200 align-top" data-v-7e2ca435><td class="p-6 text-center" data-v-7e2ca435><span class="${ssrRenderClass([
          "font-mono text-xs font-black px-2.5 py-1 rounded-lg border",
          __props.role === "auditor" ? "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20" : "text-sky-500 bg-sky-50 dark:bg-sky-500/10 border-sky-100 dark:border-sky-500/20"
        ])}" data-v-7e2ca435>${ssrInterpolate(__props.indicators.from + index)}</span></td><td class="p-6 text-center" data-v-7e2ca435><span class="text-xs font-black text-slate-700 dark:text-slate-300 font-mono tracking-tighter bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg" data-v-7e2ca435>${ssrInterpolate(item.snapshot_code)}</span></td><td class="p-6" data-v-7e2ca435><p class="font-bold text-slate-800 dark:text-slate-200 text-sm italic leading-relaxed mb-2" data-v-7e2ca435>${ssrInterpolate(item.snapshot_requirement)}</p><div class="flex items-center gap-2" data-v-7e2ca435><span class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" data-v-7e2ca435></span><span class="text-[9px] font-black uppercase text-slate-400 tracking-wider" data-v-7e2ca435>Kriteria Standar</span></div></td><td class="p-6" data-v-7e2ca435><div class="p-5 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800/50 group-hover:border-slate-200 dark:group-hover:border-slate-700 transition-colors" data-v-7e2ca435><p class="text-xs text-slate-600 dark:text-slate-400 font-medium italic leading-relaxed" data-v-7e2ca435>${ssrInterpolate(item.snapshot_evidence_needed)}</p>`);
        if (item.snapshot_template_path) {
          _push(`<div class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/50" data-v-7e2ca435><a${ssrRenderAttr("href", _ctx.route("admin.indicators.show-assignment-template", item.id))} target="_blank" class="inline-flex items-center gap-2 text-[9px] font-black uppercase text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors tracking-wider" data-v-7e2ca435>`);
          _push(ssrRenderComponent(_component_icon, {
            icon: "fa-solid fa-file-arrow-down",
            class: "w-3.5 h-3.5"
          }, null, _parent));
          _push(` Unduh Template </a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td><td class="p-6 text-center text-xs" data-v-7e2ca435><div class="flex flex-col gap-2 items-center justify-center pt-2" data-v-7e2ca435>`);
        if (item.evidence_path) {
          _push(`<a${ssrRenderAttr("href", _ctx.route("files.evidence.show", item.id))} target="_blank" class="w-full py-2.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl font-black text-[9px] border border-emerald-100 dark:border-emerald-500/20 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all uppercase tracking-wider flex items-center justify-center gap-1 group/btn" data-v-7e2ca435>`);
          _push(ssrRenderComponent(_component_icon, {
            icon: "fa-solid fa-file",
            class: "w-3 h-3 group-hover/btn:scale-110 transition-transform"
          }, null, _parent));
          _push(` Berkas </a>`);
        } else {
          _push(`<!---->`);
        }
        if (item.evidence_url) {
          _push(`<a${ssrRenderAttr("href", item.evidence_url)} target="_blank" class="w-full py-2.5 bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-xl font-black text-[9px] border border-violet-100 dark:border-violet-500/20 hover:bg-violet-500 hover:text-white dark:hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20 transition-all uppercase tracking-wider flex items-center justify-center gap-1 group/btn" data-v-7e2ca435>`);
          _push(ssrRenderComponent(_component_icon, {
            icon: "fa-solid fa-link",
            class: "w-3 h-3 group-hover/btn:scale-110 transition-transform"
          }, null, _parent));
          _push(` Tautan </a>`);
        } else {
          _push(`<!---->`);
        }
        if (!item.evidence_path && !item.evidence_url) {
          _push(`<span class="text-slate-300 dark:text-slate-600 font-black uppercase text-[8px] tracking-[0.2em] py-2" data-v-7e2ca435>KOSONG</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td><td class="p-6 text-center" data-v-7e2ca435><div class="flex flex-col items-center gap-3" data-v-7e2ca435><div class="${ssrRenderClass(["w-14 h-14 flex items-center justify-center rounded-[1.2rem] font-black text-xl border transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3", getScoreColor(item.score)])}" data-v-7e2ca435>${ssrInterpolate(item.score ?? "-")}</div>`);
        if (item.finding_type) {
          _push(`<span class="${ssrRenderClass(["px-3 py-1 rounded-lg text-[9px] font-black border tracking-widest uppercase shadow-sm", getFindingBadge(item.finding_type)])}" data-v-7e2ca435>${ssrInterpolate(item.finding_type)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td><td class="p-6" data-v-7e2ca435><div class="space-y-3" data-v-7e2ca435>`);
        if (item.auditor_note) {
          _push(`<div class="p-4 bg-amber-50/50 dark:bg-amber-900/10 border-l-[3px] border-amber-400 rounded-r-2xl hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors" data-v-7e2ca435><p class="text-[8px] font-black text-amber-500 uppercase mb-1.5 tracking-widest flex items-center gap-1.5" data-v-7e2ca435> ⚠️ Temuan </p><p class="text-xs text-slate-700 dark:text-slate-300 font-medium italic leading-relaxed" data-v-7e2ca435> &quot;${ssrInterpolate(item.auditor_note)}&quot;</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.recommendation) {
          _push(`<div class="p-4 bg-emerald-50/50 dark:bg-emerald-900/10 border-l-[3px] border-emerald-400 rounded-r-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors" data-v-7e2ca435><p class="text-[8px] font-black text-emerald-500 uppercase mb-1.5 tracking-widest flex items-center gap-1.5" data-v-7e2ca435> 💡 Saran </p><p class="text-xs text-slate-700 dark:text-slate-300 font-medium italic leading-relaxed" data-v-7e2ca435>${ssrInterpolate(item.recommendation)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td><td class="p-6 text-center align-middle sticky right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-10 group-hover:bg-slate-50/90 dark:group-hover:bg-slate-800/90 transition-colors shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.05)]" data-v-7e2ca435><div class="flex flex-row justify-center items-center gap-3 relative z-20" data-v-7e2ca435>`);
        if (canUpload.value) {
          _push(`<button class="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 text-white rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-110 active:scale-95 transition-all" title="Upload Bukti" data-v-7e2ca435>`);
          _push(ssrRenderComponent(_component_icon, {
            icon: "fa-solid fa-cloud-arrow-up",
            class: "text-sm"
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        if (canScore.value) {
          _push(`<button class="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 dark:from-white dark:to-slate-200 text-white dark:text-slate-900 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all" title="Penilaian" data-v-7e2ca435>`);
          _push(ssrRenderComponent(_component_icon, {
            icon: "fa-solid fa-pen-to-square",
            class: "text-sm"
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 rounded-xl hover:shadow-md hover:border-rose-200 dark:hover:border-rose-500/30 hover:scale-110 active:scale-95 transition-all" title="Riwayat" data-v-7e2ca435>`);
        _push(ssrRenderComponent(_component_icon, {
          icon: "fa-solid fa-clock-rotate-left",
          class: "text-sm"
        }, null, _parent));
        _push(`</button></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-7e2ca435><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left flex items-center gap-2" data-v-7e2ca435><span class="${ssrRenderClass(["w-2 h-2 rounded-full animate-pulse", __props.role === "auditor" ? "bg-emerald-500" : "bg-sky-500"])}" data-v-7e2ca435></span> Data ${ssrInterpolate(__props.indicators.from)} - ${ssrInterpolate(__props.indicators.to)} dari total ${ssrInterpolate(__props.indicators.total)}</div><div class="flex flex-wrap justify-center gap-2" data-v-7e2ca435><!--[-->`);
      ssrRenderList(__props.indicators.links, (link, k) => {
        _push(`<!--[-->`);
        if (link.url) {
          _push(ssrRenderComponent(unref(Link), {
            href: link.url,
            class: [
              "px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all cursor-pointer",
              link.active ? "bg-slate-900 dark:bg-rose-600 text-white border-slate-900 dark:border-rose-600 shadow-lg shadow-slate-900/20" : "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:text-rose-500"
            ]
          }, null, _parent));
        } else {
          _push(`<span class="${ssrRenderClass([
            "px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all opacity-30 cursor-not-allowed",
            "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800"
          ])}" data-v-7e2ca435>${link.label ?? ""}</span>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Assignment/ScoringView.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ScoringView = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7e2ca435"]]);
const _sfc_main$3 = {
  __name: "StatisticsView",
  __ssrInlineRender: true,
  props: { assignment: Object, indicators: Object, findingStats: Object },
  setup(__props) {
    Chart.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale, PointElement, LineElement, Filler);
    const props = __props;
    const chartData = computed(() => {
      const data = props.indicators.data || [];
      const stats = props.findingStats || {
        ks: data.filter((i) => i.finding_type === "KS").length,
        kts: data.filter((i) => i.finding_type === "KTS").length,
        ob: data.filter((i) => i.finding_type === "OB").length,
        unassessed: data.filter((i) => !i.finding_type).length
      };
      return {
        labels: ["Sesuai (KS)", "Minor/Major (KTS)", "Observasi (OB)", "Belum Dinilai"],
        datasets: [{
          backgroundColor: ["#10b981", "#f43f5e", "#f59e0b", "#94a3b8"],
          hoverBackgroundColor: ["#059669", "#be123c", "#d97706", "#64748b"],
          borderWidth: 2,
          borderColor: "#ffffff",
          hoverOffset: 15,
          data: [
            stats.ks,
            stats.kts,
            stats.ob,
            stats.unassessed
          ]
        }]
      };
    });
    const efficiencyRate = computed(() => {
      const data = props.indicators.data || [];
      const stats = props.findingStats || {
        ks: data.filter((i) => i.finding_type === "KS").length,
        total_indicators: data.length
      };
      if (!stats || stats.total_indicators === 0) return 0;
      return Math.round(stats.ks / stats.total_indicators * 100);
    });
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 20,
            usePointStyle: true,
            pointStyle: "circle",
            font: { size: 12, weight: "600", family: "Inter" },
            color: "#64748b"
            // Slate-500
          }
        },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          titleFont: { family: "Inter", size: 13, weight: "bold" },
          bodyFont: { family: "Inter", size: 13 },
          padding: 16,
          cornerRadius: 8,
          displayColors: true,
          boxPadding: 4
        }
      }
    };
    const summaryText = computed(() => {
      return props.assignment.summary_note ? props.assignment.summary_note : "Menunggu kesimpulan akhir auditor untuk siklus ini.";
    });
    const authorName = computed(() => {
      return props.assignment.auditor?.name || "System Administrator";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700" }, _attrs))} data-v-dd3c9f89><div class="grid grid-cols-1 lg:grid-cols-12 gap-6" data-v-dd3c9f89><article class="lg:col-span-5 flex flex-col" data-v-dd3c9f89><div class="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-sm border border-slate-200 dark:border-slate-800 h-full relative overflow-hidden flex flex-col" data-v-dd3c9f89><div class="absolute top-0 right-0 p-32 bg-indigo-50 dark:bg-slate-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none" data-v-dd3c9f89></div><header class="flex justify-between items-start mb-8 relative z-10" data-v-dd3c9f89><div data-v-dd3c9f89><h2 class="text-lg font-bold text-slate-800 dark:text-white" data-v-dd3c9f89>Compliance Overview</h2><p class="text-sm text-slate-500 dark:text-slate-400 mt-1" data-v-dd3c9f89>Distribusi temuan audit</p></div><div class="flex flex-col items-end" data-v-dd3c9f89><span class="text-3xl font-black text-slate-800 dark:text-white tracking-tight" data-v-dd3c9f89>${ssrInterpolate(efficiencyRate.value)}<span class="text-lg text-slate-400" data-v-dd3c9f89>%</span></span><span class="text-[10px] font-bold uppercase tracking-widest text-emerald-500" data-v-dd3c9f89>Efficiency</span></div></header><div class="flex-1 flex items-center justify-center relative z-10 min-h-[300px]" data-v-dd3c9f89><div class="w-full max-w-[280px] hover:scale-105 transition-transform duration-500 ease-out" data-v-dd3c9f89>`);
      _push(ssrRenderComponent(unref(Pie), {
        data: chartData.value,
        options: chartOptions
      }, null, _parent));
      _push(`</div></div><footer class="mt-6 text-center relative z-10" data-v-dd3c9f89><div class="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-full border border-slate-100 dark:border-slate-800" data-v-dd3c9f89><span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" data-v-dd3c9f89></span><span class="text-xs font-semibold text-slate-500 dark:text-slate-400" data-v-dd3c9f89>Live Audit Data</span></div></footer></div></article><div class="lg:col-span-7 flex flex-col gap-6" data-v-dd3c9f89><article class="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-none flex flex-col justify-center group" data-v-dd3c9f89><div class="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-white/10 transition-colors duration-1000" data-v-dd3c9f89></div><div class="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4" data-v-dd3c9f89></div><div class="relative z-10" data-v-dd3c9f89><div class="flex items-center gap-3 mb-6 opacity-80" data-v-dd3c9f89><span class="w-8 h-[2px] bg-indigo-400" data-v-dd3c9f89></span><h3 class="text-xs font-bold uppercase tracking-[0.2em]" data-v-dd3c9f89>Executive Summary</h3></div><blockquote class="text-xl md:text-2xl font-medium leading-relaxed font-serif italic text-slate-100" data-v-dd3c9f89> &quot;${ssrInterpolate(summaryText.value)}&quot; </blockquote><div class="mt-10 flex items-center gap-5 pt-8 border-t border-white/10" data-v-dd3c9f89><div class="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-indigo-300 ring-1 ring-white/20" data-v-dd3c9f89>`);
      _push(ssrRenderComponent(_component_icon, {
        icon: "fa-solid fa-user-shield",
        class: "text-lg"
      }, null, _parent));
      _push(`</div><div data-v-dd3c9f89><p class="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-0.5" data-v-dd3c9f89>Auditor in Charge</p><p class="text-base font-bold text-white" data-v-dd3c9f89>${ssrInterpolate(authorName.value)}</p></div></div></div></article><div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-v-dd3c9f89><!--[-->`);
      ssrRenderList([
        { label: "Scope", value: __props.indicators.total, icon: "fa-crosshairs", color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
        { label: "Findings", value: __props.indicators.data.filter((i) => i.finding_type).length, icon: "fa-triangle-exclamation", color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-900/20" },
        { label: "Evidence", value: __props.indicators.data.filter((i) => i.evidence_path || i.evidence_url).length, icon: "fa-paperclip", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/20" },
        { label: "Score", value: __props.assignment.overall_rating || "-", icon: "fa-star", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" }
      ], (stat, index) => {
        _push(`<div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors group cursor-default" data-v-dd3c9f89><div class="${ssrRenderClass(["w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110", stat.bg, stat.color])}" data-v-dd3c9f89>`);
        _push(ssrRenderComponent(_component_icon, {
          icon: `fa-solid ${stat.icon}`,
          class: "text-sm"
        }, null, _parent));
        _push(`</div><span class="text-2xl font-black text-slate-800 dark:text-white leading-tight" data-v-dd3c9f89>${ssrInterpolate(stat.value)}</span><span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1" data-v-dd3c9f89>${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Assignment/StatisticsView.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const StatisticsView = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-dd3c9f89"]]);
const _sfc_main$2 = {
  __name: "MatrixRtlView",
  __ssrInlineRender: true,
  props: {
    indicators: Object,
    role: String
  },
  emits: ["save-rtl", "verify-rtl"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const localIndicators = ref([]);
    watchEffect(() => {
      if (props.indicators?.data) {
        localIndicators.value = props.indicators.data.map((item) => {
          if (!item.rtl) {
            item.rtl = {
              root_cause: "",
              action_plan: "",
              pic: "",
              deadline: "",
              status: "open",
              auditor_feedback: ""
            };
          }
          return item;
        });
      } else {
        localIndicators.value = [];
      }
    });
    const getStatusBadge = (status) => {
      const map = {
        "closed": "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30 border-transparent",
        "in_progress": "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 border-transparent",
        "open": "bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg shadow-rose-500/30 border-transparent"
      };
      return map[status] || "bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[3.5rem] border border-white/40 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden animate-in fade-in zoom-in duration-500 hover:shadow-2xl transition-shadow" }, _attrs))} data-v-8fef23a6>`);
      if (localIndicators.value.length > 0) {
        _push(`<div class="overflow-x-auto custom-scrollbar" data-v-8fef23a6><table class="w-full text-left border-collapse min-w-[2000px]" data-v-8fef23a6><thead data-v-8fef23a6><tr class="bg-slate-900 dark:bg-black text-white text-[9px] font-black uppercase tracking-[0.2em]" data-v-8fef23a6><th class="p-8 w-80 border-r border-white/10 italic underline decoration-rose-500 decoration-2 underline-offset-8" data-v-8fef23a6> 1. Finding Detail</th><th class="p-8 w-80 border-r border-white/10 italic" data-v-8fef23a6>2. Root Cause (Auditee)</th><th class="p-8 w-80 border-r border-white/10 italic" data-v-8fef23a6>3. Corrective Action Plan</th><th class="p-8 w-56 border-r border-white/10 text-center italic" data-v-8fef23a6>4. PIC &amp; Deadline</th><th class="p-8 w-64 text-center italic border-r border-white/10" data-v-8fef23a6>5. Auditor Verification</th><th class="p-8 w-40 text-center italic sticky right-0 bg-slate-900 dark:bg-black z-20" data-v-8fef23a6>Action </th></tr></thead><tbody class="divide-y divide-slate-50 dark:divide-slate-800/50" data-v-8fef23a6><!--[-->`);
        ssrRenderList(localIndicators.value, (item) => {
          _push(`<tr class="align-top group hover:bg-slate-50/50 dark:hover:bg-rose-500/[0.01] transition-colors duration-300" data-v-8fef23a6><td class="p-8 border-r border-slate-100 dark:border-slate-800" data-v-8fef23a6><div class="space-y-5" data-v-8fef23a6><div class="flex items-center gap-2" data-v-8fef23a6><span class="px-3 py-1 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg text-[9px] font-black uppercase shadow-lg shadow-rose-500/20 italic tracking-widest" data-v-8fef23a6>${ssrInterpolate(item.finding_type)}</span><span class="text-[9px] font-black text-slate-300 dark:text-slate-600 font-mono tracking-tighter group-hover:text-rose-500 transition-colors" data-v-8fef23a6>#${ssrInterpolate(item.snapshot_code)}</span></div><div class="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700" data-v-8fef23a6>`);
          _push(ssrRenderComponent(_component_icon, {
            icon: "fa-solid fa-quote-left",
            class: "absolute -top-2 -left-3 text-slate-300 dark:text-slate-600 bg-white dark:bg-slate-900 px-1 text-xs"
          }, null, _parent));
          _push(`<p class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-relaxed italic" data-v-8fef23a6> &quot;${ssrInterpolate(item.auditor_note)}&quot;</p></div><div class="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-700/50 group-hover:border-slate-200 dark:group-hover:border-slate-600 transition-colors" data-v-8fef23a6><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 italic flex items-center gap-1" data-v-8fef23a6>`);
          _push(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-circle-check" }, null, _parent));
          _push(` Requirement: </p><p class="text-[10px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed" data-v-8fef23a6>${ssrInterpolate(item.snapshot_requirement)}</p></div></div></td><td class="p-8 border-r border-slate-100 dark:border-slate-800" data-v-8fef23a6>`);
          if (__props.role === "auditee") {
            _push(`<div class="relative group/field h-full" data-v-8fef23a6><textarea rows="8" class="w-full h-full min-h-[180px] bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/50 rounded-[1.5rem] text-[11px] font-bold text-slate-700 dark:text-slate-200 focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500/50 shadow-inner placeholder:text-slate-300 dark:placeholder:text-slate-600 transition-all resize-none p-5" placeholder="Analisis penyebab utama masalah..." data-v-8fef23a6>${ssrInterpolate(item.rtl.root_cause)}</textarea><div class="absolute bottom-4 right-4 opacity-0 group-focus-within/field:opacity-100 transition-all duration-500 transform translate-y-2 group-focus-within/field:translate-y-0" data-v-8fef23a6><span class="text-[8px] font-black text-emerald-500 uppercase tracking-widest italic flex items-center gap-1" data-v-8fef23a6>`);
            _push(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-check-double" }, null, _parent));
            _push(` Autosave Ready </span></div></div>`);
          } else {
            _push(`<div class="p-6 rounded-[1.5rem] bg-slate-50/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-700 min-h-[150px] relative overflow-hidden" data-v-8fef23a6><div class="absolute top-0 right-0 p-4 opacity-10" data-v-8fef23a6>`);
            _push(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-magnifying-glass-chart",
              class: "text-4xl"
            }, null, _parent));
            _push(`</div><p class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic relative z-10" data-v-8fef23a6>${ssrInterpolate(item.rtl?.root_cause || "Belum dianalisis auditror.")}</p></div>`);
          }
          _push(`</td><td class="p-8 border-r border-slate-100 dark:border-slate-800" data-v-8fef23a6>`);
          if (__props.role === "auditee") {
            _push(`<div class="relative group/field h-full" data-v-8fef23a6><textarea rows="8" class="w-full h-full min-h-[180px] bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/50 rounded-[1.5rem] text-[11px] font-bold text-slate-700 dark:text-slate-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500/50 shadow-inner placeholder:text-slate-300 dark:placeholder:text-slate-600 transition-all resize-none p-5" placeholder="Langkah perbaikan konkret &amp; sistematis..." data-v-8fef23a6>${ssrInterpolate(item.rtl.action_plan)}</textarea></div>`);
          } else {
            _push(`<div class="p-6 rounded-[1.5rem] bg-slate-50/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-700 min-h-[150px] relative overflow-hidden" data-v-8fef23a6><div class="absolute top-0 right-0 p-4 opacity-10" data-v-8fef23a6>`);
            _push(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-list-check",
              class: "text-4xl"
            }, null, _parent));
            _push(`</div><p class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic relative z-10" data-v-8fef23a6>${ssrInterpolate(item.rtl?.action_plan || "Rencana belum didefinisikan.")}</p></div>`);
          }
          _push(`</td><td class="p-8 border-r border-slate-100 dark:border-slate-800" data-v-8fef23a6><div class="space-y-6" data-v-8fef23a6>`);
          if (__props.role === "auditee") {
            _push(`<div class="space-y-4" data-v-8fef23a6><div class="space-y-1.5" data-v-8fef23a6><label class="text-[8px] font-black text-slate-400 uppercase ml-3 italic tracking-widest leading-none" data-v-8fef23a6>PIC Name</label><input${ssrRenderAttr("value", item.rtl.pic)} type="text" class="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50 rounded-xl text-[10px] font-black uppercase shadow-sm focus:ring-2 focus:ring-rose-500/20 text-center py-3" placeholder="NAMA / JABATAN" data-v-8fef23a6></div><div class="space-y-1.5" data-v-8fef23a6><label class="text-[8px] font-black text-slate-400 uppercase ml-3 italic tracking-widest leading-none" data-v-8fef23a6>Due Date</label><input${ssrRenderAttr("value", item.rtl.deadline)} type="date" class="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50 rounded-xl text-[10px] font-black shadow-sm focus:ring-2 focus:ring-rose-500/20 py-3 text-center" data-v-8fef23a6></div></div>`);
          } else {
            _push(`<div class="text-center space-y-4 pt-4" data-v-8fef23a6><div data-v-8fef23a6><p class="text-[7px] font-black text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1" data-v-8fef23a6>`);
            _push(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-user-tag" }, null, _parent));
            _push(` Responsibility </p><p class="text-[10px] font-black text-slate-800 dark:text-white uppercase tracking-tighter mt-1 bg-slate-100 dark:bg-slate-800 py-1 px-3 rounded-lg inline-block" data-v-8fef23a6>${ssrInterpolate(item.rtl?.pic || "-")}</p></div><div class="p-3 bg-rose-50 dark:bg-rose-500/5 rounded-2xl border border-rose-100 dark:border-rose-500/20" data-v-8fef23a6><p class="text-[7px] font-black text-rose-400 uppercase tracking-widest flex items-center justify-center gap-1" data-v-8fef23a6>`);
            _push(ssrRenderComponent(_component_icon, { icon: "fa-regular fa-calendar" }, null, _parent));
            _push(` Deadline </p><p class="text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase mt-1" data-v-8fef23a6>${ssrInterpolate(item.rtl?.deadline || "-")}</p></div></div>`);
          }
          _push(`</div></td><td class="p-8 border-r border-slate-100 dark:border-slate-800 text-center" data-v-8fef23a6>`);
          if (__props.role === "auditor") {
            _push(`<div class="flex flex-col gap-5 items-center" data-v-8fef23a6><select class="w-full bg-slate-900 dark:bg-black text-white border-none rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] py-4 px-6 shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 cursor-pointer focus:ring-4 focus:ring-rose-500/30 transition-all appearance-none text-center" data-v-8fef23a6><option value="open" data-v-8fef23a6${ssrIncludeBooleanAttr(Array.isArray(item.rtl.status) ? ssrLooseContain(item.rtl.status, "open") : ssrLooseEqual(item.rtl.status, "open")) ? " selected" : ""}>STATUS: OPEN</option><option value="in_progress" data-v-8fef23a6${ssrIncludeBooleanAttr(Array.isArray(item.rtl.status) ? ssrLooseContain(item.rtl.status, "in_progress") : ssrLooseEqual(item.rtl.status, "in_progress")) ? " selected" : ""}>STATUS: IN PROGRESS</option><option value="closed" data-v-8fef23a6${ssrIncludeBooleanAttr(Array.isArray(item.rtl.status) ? ssrLooseContain(item.rtl.status, "closed") : ssrLooseEqual(item.rtl.status, "closed")) ? " selected" : ""}>STATUS: CLOSED</option></select><textarea rows="4" class="w-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700/50 rounded-2xl text-[10px] font-medium p-4 italic placeholder:text-slate-300 focus:border-rose-500 focus:ring-0 transition-colors" placeholder="Evaluasi rencana..." data-v-8fef23a6>${ssrInterpolate(item.rtl.auditor_feedback)}</textarea></div>`);
          } else {
            _push(`<div class="flex flex-col items-center justify-center min-h-[150px] space-y-5" data-v-8fef23a6><span class="${ssrRenderClass(["px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-sm border transition-all duration-700 group-hover:scale-110 select-none", getStatusBadge(item.rtl?.status)])}" data-v-8fef23a6>${ssrInterpolate(item.rtl?.status || "OPEN")}</span>`);
            if (item.rtl?.auditor_feedback) {
              _push(`<div class="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 max-w-[220px]" data-v-8fef23a6><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 italic" data-v-8fef23a6> Auditor Feed:</p><p class="text-[10px] text-slate-500 dark:text-slate-300 italic leading-relaxed" data-v-8fef23a6>&quot;${ssrInterpolate(item.rtl.auditor_feedback)}&quot;</p></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          }
          _push(`</td><td class="p-8 text-center flex flex-col items-center justify-center min-h-[200px] sticky right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-10 shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.05)]" data-v-8fef23a6><div class="relative z-20 w-full" data-v-8fef23a6>`);
          if (__props.role === "auditee") {
            _push(`<button class="w-full py-5 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-rose-600/30 hover:shadow-rose-600/50 hover:scale-105 active:scale-95 transition-all flex flex-col items-center gap-2 group/btn" data-v-8fef23a6>`);
            _push(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-paper-plane",
              class: "text-lg group-hover/btn:-translate-y-1 transition-transform"
            }, null, _parent));
            _push(`<span data-v-8fef23a6>Submit</span></button>`);
          } else {
            _push(`<!---->`);
          }
          if (__props.role === "auditor") {
            _push(`<button class="w-full py-5 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-emerald-600 dark:to-emerald-700 text-white rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-slate-900/30 dark:shadow-emerald-600/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex flex-col items-center gap-2 group/btn" data-v-8fef23a6>`);
            _push(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-check-to-slot",
              class: "text-lg group-hover/btn:-translate-y-1 transition-transform"
            }, null, _parent));
            _push(`<span data-v-8fef23a6>Verify</span></button>`);
          } else {
            _push(`<!---->`);
          }
          if (__props.role === "admin") {
            _push(`<div class="text-center space-y-3 opacity-30" data-v-8fef23a6>`);
            _push(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-eye",
              class: "text-2xl text-slate-400"
            }, null, _parent));
            _push(`<span class="text-[8px] font-black text-slate-400 uppercase tracking-widest block" data-v-8fef23a6>Monitoring</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.indicators.links && __props.indicators.links.length > 3) {
        _push(`<div class="flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-8fef23a6><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" data-v-8fef23a6> Data ${ssrInterpolate(__props.indicators.from)} - ${ssrInterpolate(__props.indicators.to)} dari total ${ssrInterpolate(__props.indicators.total)}</div><div class="flex flex-wrap justify-center gap-1.5" data-v-8fef23a6><!--[-->`);
        ssrRenderList(__props.indicators.links, (link, k) => {
          _push(`<!--[-->`);
          if (link.url) {
            _push(ssrRenderComponent(unref(Link), {
              href: link.url,
              "preserve-scroll": true,
              class: [
                "px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all cursor-pointer",
                link.active ? "bg-slate-900 dark:bg-rose-600 text-white border-slate-900 dark:border-rose-600 shadow-lg shadow-slate-900/20" : "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:text-rose-500"
              ]
            }, null, _parent));
          } else {
            _push(`<span class="${ssrRenderClass([
              "px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all opacity-30 cursor-not-allowed",
              "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800"
            ])}" data-v-8fef23a6>${link.label ?? ""}</span>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="flex flex-col items-center justify-center py-20 px-10 text-center space-y-4" data-v-8fef23a6><div class="p-6 bg-slate-50 dark:bg-slate-800 rounded-full mb-2" data-v-8fef23a6>`);
        _push(ssrRenderComponent(_component_icon, {
          icon: "fa-solid fa-clipboard-check",
          class: "text-4xl text-slate-300 dark:text-slate-600"
        }, null, _parent));
        _push(`</div><h3 class="text-lg font-bold text-slate-700 dark:text-white" data-v-8fef23a6>Tidak Ada Temuan</h3><p class="text-sm text-slate-500 dark:text-slate-400 max-w-md" data-v-8fef23a6> Tidak ada temuan (KTS/OB) yang memerlukan Rencana Tindak Lanjut pada saat ini. </p></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Assignment/MatrixRtlView.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MatrixRtlView = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8fef23a6"]]);
const _sfc_main$1 = {
  __name: "ArchiveView",
  __ssrInlineRender: true,
  props: {
    assignment: Object,
    indicators: Object,
    groupedDocuments: Array
  },
  setup(__props) {
    const props = __props;
    const formatDate = (date) => {
      if (!date) return "Not available";
      return new Date(date).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    const summaryText = computed(() => {
      return props.assignment.summary_note ? props.assignment.summary_note : "Tidak ada catatan simpulan akhir yang direkam untuk siklus ini.";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-12 animate-in fade-in zoom-in duration-1000" }, _attrs))} data-v-81f263f6><div class="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden border-b-[12px] border-emerald-600 group" data-v-81f263f6><div class="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12" data-v-81f263f6><div class="text-center lg:text-left space-y-8" data-v-81f263f6><div class="inline-flex items-center px-6 py-2 bg-emerald-300/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-emerald-300/20 shadow-lg animate-pulse" data-v-81f263f6><svg class="w-3 h-3 mr-3" fill="currentColor" viewBox="0 0 20 20" data-v-81f263f6><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-81f263f6></path></svg> Cycle Officially Archived </div><div class="space-y-4" data-v-81f263f6><h2 class="text-5xl md:text-6xl font-black uppercase tracking-tighter italic leading-none" data-v-81f263f6> Audit Certificate </h2><p class="text-slate-400 text-base md:text-lg font-medium max-w-xl leading-relaxed" data-v-81f263f6> Siklus AMI periode <span class="text-white underline decoration-emerald-300 underline-offset-8" data-v-81f263f6>${ssrInterpolate(__props.assignment.period?.name)}</span> telah dinyatakan selesai dan seluruh data telah dienkripsi secara permanen. </p></div><div class="inline-block p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md" data-v-81f263f6><div class="text-[10px] font-black text-slate-300 uppercase tracking-widest italic leading-relaxed" data-v-81f263f6> Log ID: <span class="text-emerald-300" data-v-81f263f6>#AMI-${ssrInterpolate(__props.assignment.id)}-${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</span><br data-v-81f263f6> Archived on: <span class="text-slate-200" data-v-81f263f6>${ssrInterpolate(formatDate(__props.assignment.completed_at))}</span></div></div></div><div class="w-64 h-64 md:w-80 md:h-80 rounded-[4rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center backdrop-blur-xl shadow-2xl relative group transition-all duration-700 hover:bg-white/10 hover:scale-105" data-v-81f263f6><p class="text-[10px] font-black uppercase text-emerald-400 tracking-[0.4em] mb-4" data-v-81f263f6>Quality Score</p><span class="text-8xl md:text-9xl font-black text-white italic leading-none drop-shadow-2xl" data-v-81f263f6>${ssrInterpolate(__props.assignment.overall_rating || "N/A")}</span><div class="absolute -top-6 -right-6 w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-slate-900 rotate-12 group-hover:rotate-0 transition-all duration-300" data-v-81f263f6><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-81f263f6><path stroke-width="3" d="M9 12l2 2 4-4m5.618-4.016A3.333 3.333 0 0110 3.333a3.333 3.333 0 01-5.618 2.651A3.333 3.333 0 013.333 10a3.333 3.333 0 012.651 5.618A3.333 3.333 0 0110 16.667a3.333 3.333 0 015.618-2.651A3.333 3.333 0 0116.667 10a3.333 3.333 0 01-2.651-5.618z" data-v-81f263f6></path></svg></div><div class="absolute inset-0 bg-emerald-300/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" data-v-81f263f6></div></div></div><div class="absolute -left-20 -top-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none" data-v-81f263f6></div><div class="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none" data-v-81f263f6></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-10" data-v-81f263f6><div class="lg:col-span-2 space-y-10" data-v-81f263f6><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl p-10 md:p-14 rounded-[3.5rem] border border-white/40 dark:border-slate-800 shadow-sm relative overflow-hidden group" data-v-81f263f6><h3 class="text-xs font-black uppercase italic tracking-[0.2em] mb-10 flex items-center text-slate-900 dark:text-white" data-v-81f263f6><span class="w-10 h-10 rounded-2xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center mr-5 shadow-xl italic font-black" data-v-81f263f6>Q</span> Simpulan Strategis Auditor </h3><div class="p-8 md:p-12 bg-slate-50 dark:bg-slate-800/50 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-inner relative z-10" data-v-81f263f6><p class="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 italic leading-relaxed" data-v-81f263f6> &quot;${ssrInterpolate(summaryText.value)}&quot; </p></div></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-6" data-v-81f263f6><!--[-->`);
      ssrRenderList([
        { label: "Indikator Dievaluasi", val: __props.indicators.total, icon: "M9 12l2 2 4-4", color: "text-slate-900 dark:text-white" },
        { label: "Quality Compliance", val: "100%", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "text-emerald-300" },
        { label: "Security Level", val: "Encrypted", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", color: "text-sky-300" }
      ], (box) => {
        _push(`<div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/40 dark:border-slate-800 shadow-sm text-center group transition-all hover:-translate-y-2 hover:shadow-xl" data-v-81f263f6><p class="text-[8px] font-black uppercase text-slate-400 dark:text-slate-300 tracking-[0.2em] mb-4" data-v-81f263f6>${ssrInterpolate(box.label)}</p><p class="${ssrRenderClass(["text-3xl font-black italic tracking-tighter transition-all", box.color])}" data-v-81f263f6>${ssrInterpolate(box.val)}</p><div class="mt-4 flex justify-center opacity-10 group-hover:opacity-100 transition-opacity" data-v-81f263f6><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-81f263f6><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", box.icon)} data-v-81f263f6></path></svg></div></div>`);
      });
      _push(`<!--]--></div></div><div class="lg:col-span-1" data-v-81f263f6><div class="bg-slate-900 dark:bg-slate-900 p-10 md:p-12 rounded-[3.5rem] text-white shadow-2xl h-full relative overflow-hidden border border-white/5" data-v-81f263f6><h3 class="text-[11px] font-black uppercase italic tracking-widest mb-12 flex items-center relative z-10" data-v-81f263f6><div class="p-2 bg-emerald-600 rounded-lg mr-4 shadow-lg shadow-emerald-600/30" data-v-81f263f6><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-81f263f6><path stroke-width="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-81f263f6></path></svg></div> Secure Vault </h3><div class="space-y-6 relative z-10" data-v-81f263f6><!--[-->`);
      ssrRenderList(__props.groupedDocuments, (group) => {
        _push(`<div class="group/file" data-v-81f263f6><div class="p-6 bg-white/5 rounded-[2.5rem] border border-white/5 transition-all hover:bg-white/10 hover:border-white/10" data-v-81f263f6><div class="flex justify-between items-start mb-6 px-1" data-v-81f263f6><div class="space-y-1" data-v-81f263f6><span class="text-[9px] font-black text-slate-300 uppercase tracking-widest" data-v-81f263f6>${ssrInterpolate(group.label)}</span><p class="text-[10px] font-bold text-slate-300 italic leading-none" data-v-81f263f6>Official Report</p></div><div class="w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.8)]" data-v-81f263f6></div></div>`);
        if (group.files?.length) {
          _push(`<div class="space-y-3" data-v-81f263f6><!--[-->`);
          ssrRenderList(group.files, (file) => {
            _push(`<a${ssrRenderAttr("href", "/storage/" + file.file_path)} target="_blank" class="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-emerald-600 transition-all shadow-sm active:scale-95 group/btn" data-v-81f263f6><span class="text-[10px] font-black uppercase italic tracking-tighter" data-v-81f263f6>Download Link</span><svg class="w-4 h-4 text-white group-hover/btn:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-81f263f6><path stroke-width="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4-4v12" data-v-81f263f6></path></svg></a>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="text-center py-4 px-4 bg-slate-800/50 rounded-2xl border border-dashed border-slate-700" data-v-81f263f6><span class="text-[9px] font-black text-slate-600 uppercase tracking-widest italic" data-v-81f263f6>Document Empty</span></div>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="absolute -right-16 -bottom-16 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-1000" data-v-81f263f6><div class="w-64 h-64 bg-white rounded-full border-[30px] border-white ring-[40px] ring-white/20" data-v-81f263f6></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Assignment/ArchiveView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArchiveView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-81f263f6"]]);
const _sfc_main = {
  __name: "UploadModal",
  __ssrInlineRender: true,
  props: {
    show: Boolean,
    indicator: Object,
    form: Object
  },
  emits: ["close", "submit"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-[999] flex items-center justify-center p-6" }, _attrs))}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity"></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in duration-300"><form class="flex flex-col max-h-[90vh]"><div class="p-12 border-b dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-between items-center"><div><h3 class="text-3xl font-black uppercase tracking-tighter italic text-slate-900 dark:text-white leading-none"> Upload Bukti</h3><p class="text-[10px] font-bold text-sky-600 font-mono mt-3 uppercase tracking-widest italic">${ssrInterpolate(__props.indicator?.snapshot_code)}</p></div><button type="button" class="text-4xl text-slate-300 hover:text-sky-600 transition-colors">×</button></div><div class="p-12 space-y-10 overflow-y-auto custom-scrollbar flex-1 text-center"><div class="p-8 bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-inner border border-slate-50 dark:border-slate-700 italic text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed"> &quot;${ssrInterpolate(__props.indicator?.snapshot_requirement)}&quot; </div><div class="space-y-4 text-left"><label class="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Link Penyimpanan (Google Drive/OneDrive)</label><input${ssrRenderAttr("value", __props.form.evidence_url)} type="url" placeholder="https://drive.google.com/..." class="w-full px-6 py-5 bg-slate-50 dark:bg-slate-800 border-none rounded-[2rem] text-xs font-bold shadow-inner focus:ring-2 focus:ring-sky-500/20 outline-none"></div><div class="space-y-4"><label class="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Atau Upload File Fisik</label><div class="relative group"><input type="file" class="w-full text-[10px] text-slate-400 file:mr-6 file:py-4 file:px-10 file:rounded-[1.5rem] file:border-0 file:bg-slate-900 file:text-white file:font-black hover:file:bg-sky-600 transition-all cursor-pointer shadow-lg"></div><p class="text-[9px] text-slate-400 font-bold uppercase mt-6 tracking-[0.2em] italic"> Mendukung PDF, JPG, PNG (Maks 10MB)</p></div></div><div class="p-12 border-t dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-end gap-6"><button type="button" class="px-10 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors">Batal</button><button type="submit"${ssrIncludeBooleanAttr(__props.form.processing) ? " disabled" : ""} class="px-16 py-5 bg-sky-600 text-white rounded-[2.5rem] font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl shadow-sky-600/30 hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-50">${ssrInterpolate(__props.form.processing ? "MENYINKRONKAN..." : "SIMPAN BUKTI")}</button></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Assignment/Partials/UploadModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  ArchiveView as A,
  MatrixRtlView as M,
  ScoringView as S,
  _sfc_main as _,
  StatisticsView as a
};

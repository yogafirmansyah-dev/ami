import { ref, reactive, computed, watch, mergeProps, withCtx, createVNode, resolveDynamicComponent, unref, createBlock, openBlock, Fragment, renderList, createCommentVNode, Teleport, Transition, createTextVNode, toDisplayString, withDirectives, vModelText, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderTeleport, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderVNode } from "vue/server-renderer";
import { router, useForm, Link } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-CbW7EXnn.js";
import debounce from "lodash/debounce.js";
import axios from "axios";
import { S as ScoringView, A as ArchiveView, a as StatisticsView, M as MatrixRtlView, _ as _sfc_main$1 } from "./UploadModal-B3JNm3bq.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vueuse/core";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./windowSizeCalculator-EVN4qZjG.js";
import "./TDropdown-BaNvbUUI.js";
import "./TAvatar-rvhW0AFR.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "vue-chartjs";
import "chart.js";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    assignment: Object,
    indicators: Object,
    filters: Object,
    stageStats: Array
  },
  setup(__props) {
    const activeIndex = ref(null);
    const tooltipPos = reactive({ top: 0, left: 0 });
    const handleMouseEnter = (e, index) => {
      activeIndex.value = index;
      const rect = e.currentTarget.getBoundingClientRect();
      tooltipPos.top = rect.top + window.scrollY;
      tooltipPos.left = rect.left + window.scrollX + rect.width / 2;
    };
    const handleMouseLeave = () => {
      activeIndex.value = null;
    };
    const props = __props;
    const activeView = computed(() => {
      const stage = props.assignment.current_stage;
      switch (stage) {
        case "rtm_rtl":
          return MatrixRtlView;
        case "reporting":
          return StatisticsView;
        case "finished":
          return ArchiveView;
        default:
          return ScoringView;
      }
    });
    const search = ref(props.filters.search);
    const perPage = ref(props.filters.per_page || 10);
    const isSearching = ref(false);
    watch([search, perPage], debounce(([searchValue, perPageValue]) => {
      isSearching.value = true;
      router.get(route("auditee.assignments.show", props.assignment.id), {
        search: searchValue,
        per_page: perPageValue
      }, {
        preserveState: true,
        replace: true,
        preserveScroll: true,
        onFinish: () => isSearching.value = false
      });
    }, 500));
    const showModal = ref(false);
    const activeIndicator = ref(null);
    const form = useForm({
      evidence_url: "",
      evidence_file: null
    });
    const openUpload = (indicator) => {
      activeIndicator.value = indicator;
      form.evidence_url = indicator.evidence_url ?? "";
      form.evidence_file = null;
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
      activeIndicator.value = null;
      form.reset();
    };
    const submit = () => {
      form.transform((data) => ({ ...data, _method: "PATCH" })).post(route("auditee.indicators.update", activeIndicator.value.id), {
        forceFormData: true,
        onSuccess: () => closeModal(),
        preserveScroll: true
      });
    };
    const showHistoryModal = ref(false);
    const activeHistory = ref([]);
    const activeIndicatorCode = ref("");
    const isLoadingHistory = ref(false);
    const openHistory = async (item) => {
      activeIndicatorCode.value = item.code;
      isLoadingHistory.value = true;
      showHistoryModal.value = true;
      try {
        const res = await axios.get(route("auditee.indicators.history", item.id));
        activeHistory.value = res.data;
      } catch (e) {
        console.error("History error");
      } finally {
        isLoadingHistory.value = false;
      }
    };
    const currentStageIndex = computed(() => {
      return props.stageStats?.findIndex((s) => s.stage === props.assignment.current_stage) ?? 0;
    });
    const isEditable = computed(() => props.assignment.current_stage === "doc_audit");
    const progressPercent = computed(() => {
      const total = props.indicators.total || 1;
      const filled = props.indicators.data.filter((i) => i.evidence_path || i.evidence_url).length;
      return Math.round(filled / total * 100);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({
        title: "Audit Unit: " + __props.assignment.target_name
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 transition-all duration-300" data-v-266b131b${_scopeId}><div class="space-y-1 group cursor-default" data-v-266b131b${_scopeId}><h2 class="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none transition-all group-hover:tracking-tight" data-v-266b131b${_scopeId}>${ssrInterpolate(__props.assignment.target_name)}</h2><div class="flex items-center gap-2" data-v-266b131b${_scopeId}><span class="relative flex h-2 w-2" data-v-266b131b${_scopeId}><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" data-v-266b131b${_scopeId}></span><span class="relative inline-flex rounded-full h-2 w-2 bg-rose-300" data-v-266b131b${_scopeId}></span></span><p class="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em] italic group-hover:text-rose-300 transition-colors" data-v-266b131b${_scopeId}> Portal Auditee</p></div></div><div class="flex items-center gap-1.5 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] w-full lg:w-auto" data-v-266b131b${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("auditee.assignments.index"),
              class: "group flex-1 lg:flex-none px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all bg-transparent hover:bg-white/80 dark:hover:bg-slate-800 active:scale-95 border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` ← Kembali ke Dashboard `);
                } else {
                  return [
                    createTextVNode(" ← Kembali ke Dashboard ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 transition-all duration-300" }, [
                createVNode("div", { class: "space-y-1 group cursor-default" }, [
                  createVNode("h2", { class: "text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none transition-all group-hover:tracking-tight" }, toDisplayString(__props.assignment.target_name), 1),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "relative flex h-2 w-2" }, [
                      createVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" }),
                      createVNode("span", { class: "relative inline-flex rounded-full h-2 w-2 bg-rose-300" })
                    ]),
                    createVNode("p", { class: "text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em] italic group-hover:text-rose-300 transition-colors" }, " Portal Auditee")
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-1.5 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] w-full lg:w-auto" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("auditee.assignments.index"),
                    class: "group flex-1 lg:flex-none px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all bg-transparent hover:bg-white/80 dark:hover:bg-slate-800 active:scale-95 border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" ← Kembali ke Dashboard ")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-266b131b${_scopeId}><div class="bg-white dark:bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden" data-v-266b131b${_scopeId}><div class="overflow-x-auto no-scrollbar pt-6 pb-6 px-4 md:px-8" data-v-266b131b${_scopeId}><div class="flex items-center justify-between min-w-[600px] md:min-w-0 px-2 gap-0" data-v-266b131b${_scopeId}><!--[-->`);
            ssrRenderList(__props.stageStats, (s, index) => {
              _push2(`<div class="flex items-center flex-1 last:flex-none relative" data-v-266b131b${_scopeId}><div class="flex flex-col items-center gap-2 relative group/step" data-v-266b131b${_scopeId}>`);
              ssrRenderTeleport(_push2, (_push3) => {
                if (activeIndex.value !== null && activeIndex.value === index) {
                  _push3(`<div style="${ssrRenderStyle({
                    position: "fixed",
                    top: `${tooltipPos.top - 12}px`,
                    left: `${tooltipPos.left}px`,
                    transform: "translate(-50%, -100%)"
                  })}" class="z-[10000] pointer-events-none" data-v-266b131b${_scopeId}><div class="bg-slate-900/95 dark:bg-emerald-600/95 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-xl border border-white/10 relative" data-v-266b131b${_scopeId}> Tahap: ${ssrInterpolate(s.label)} <div class="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-900/95 dark:border-t-emerald-600/95" data-v-266b131b${_scopeId}></div></div></div>`);
                } else {
                  _push3(`<!---->`);
                }
              }, "body", false, _parent2);
              _push2(`<div class="${ssrRenderClass([
                "w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-black transition-all duration-300 border-2 z-10 relative overflow-hidden",
                __props.assignment.current_stage === s.stage ? "bg-slate-900 dark:bg-emerald-600 text-white border-emerald-300 scale-125 shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-4 ring-emerald-300/10" : index < currentStageIndex.value ? "bg-emerald-50 text-emerald-600 border-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.2)]" : "bg-slate-50 dark:bg-slate-800 text-slate-300 dark:border-slate-700"
              ])}" data-v-266b131b${_scopeId}>`);
              if (index < currentStageIndex.value) {
                _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-266b131b${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" data-v-266b131b${_scopeId}></path></svg>`);
              } else {
                _push2(`<span class="text-xs italic" data-v-266b131b${_scopeId}>${ssrInterpolate(index + 1)}</span>`);
              }
              _push2(`</div><span class="${ssrRenderClass([
                "hidden md:block text-xs font-black uppercase tracking-tighter text-center max-w-[70px] leading-tight transition-all duration-300 transform group-hover/step:scale-105",
                __props.assignment.current_stage === s.stage ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-slate-600"
              ])}" data-v-266b131b${_scopeId}>${ssrInterpolate(s.label)}</span></div>`);
              if (index < __props.stageStats.length - 1) {
                _push2(`<div class="flex-1 h-[2px] mx-2 bg-slate-100 dark:bg-slate-800 relative md:-mt-6" data-v-266b131b${_scopeId}><div class="${ssrRenderClass([
                  "absolute inset-0 bg-emerald-300 transition-all duration-1000 shadow-[0_0_8px_rgba(16,185,129,0.4)]",
                  index < currentStageIndex.value ? "w-full" : "w-0"
                ])}" data-v-266b131b${_scopeId}></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8" data-v-266b131b${_scopeId}><div class="lg:col-span-5 relative group" data-v-266b131b${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-rose-600 to-pink-700 rounded-[2.5rem] rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-20 blur-2xl" data-v-266b131b${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-[2.5rem] shadow-xl overflow-hidden h-full flex flex-col justify-between group-hover:shadow-2xl transition-all duration-500" data-v-266b131b${_scopeId}><div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-500/5 to-transparent rounded-bl-[4rem] pointer-events-none" data-v-266b131b${_scopeId}></div><div class="relative z-10" data-v-266b131b${_scopeId}><div class="flex justify-between items-start mb-8" data-v-266b131b${_scopeId}><div data-v-266b131b${_scopeId}><p class="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2" data-v-266b131b${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-rose-500" data-v-266b131b${_scopeId}></span> Kelengkapan Bukti </p><h4 class="text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-none" data-v-266b131b${_scopeId}>${ssrInterpolate(progressPercent.value)}<span class="text-3xl font-bold text-slate-300 dark:text-slate-600 italic -ml-1" data-v-266b131b${_scopeId}>%</span></h4></div><div class="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-500/30 transform group-hover:scale-110 transition-transform duration-500" data-v-266b131b${_scopeId}><svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-266b131b${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-266b131b${_scopeId}></path></svg></div></div><div class="space-y-3" data-v-266b131b${_scopeId}><div class="flex justify-between items-end" data-v-266b131b${_scopeId}><span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider" data-v-266b131b${_scopeId}>Progress Upload</span><span class="text-[10px] font-black text-rose-500" data-v-266b131b${_scopeId}>${ssrInterpolate(progressPercent.value)}% / 100%</span></div><div class="w-full bg-slate-100 dark:bg-slate-800 h-4 rounded-full overflow-hidden p-[3px] ring-1 ring-slate-200 dark:ring-slate-700" data-v-266b131b${_scopeId}><div class="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 h-full rounded-full transition-all duration-1000 shadow-[0_2px_10px_rgba(244,63,94,0.4)] relative overflow-hidden" style="${ssrRenderStyle({ width: progressPercent.value + "%" })}" data-v-266b131b${_scopeId}><div class="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" data-v-266b131b${_scopeId}></div></div></div><p class="text-[10px] font-bold text-slate-400 uppercase tracking-wide leading-relaxed pt-2 border-t border-slate-50 dark:border-slate-800/50 mt-4" data-v-266b131b${_scopeId}><span class="text-rose-500" data-v-266b131b${_scopeId}>*</span> Pastikan seluruh bukti digital terunggah valid. </p></div></div></div></div><div class="lg:col-span-7 relative group" data-v-266b131b${_scopeId}><div class="absolute inset-0 bg-gradient-to-bl from-indigo-500 to-violet-600 rounded-[2.5rem] -rotate-1 group-hover:-rotate-2 transition-transform duration-500 opacity-10 blur-2xl" data-v-266b131b${_scopeId}></div><div class="relative h-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center overflow-hidden" data-v-266b131b${_scopeId}>`);
            if (!isEditable.value) {
              _push2(`<div class="flex items-center gap-8 relative z-10" data-v-266b131b${_scopeId}><div class="relative" data-v-266b131b${_scopeId}><div class="absolute inset-0 bg-amber-500 blur-xl opacity-20 animate-pulse" data-v-266b131b${_scopeId}></div><div class="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[1.5rem] flex items-center justify-center flex-shrink-0 text-white shadow-xl shadow-amber-500/20 relative z-10" data-v-266b131b${_scopeId}><svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-266b131b${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" data-v-266b131b${_scopeId}></path></svg></div></div><div class="flex-1 border-l border-slate-100 dark:border-slate-800 pl-8" data-v-266b131b${_scopeId}><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/50 mb-3" data-v-266b131b${_scopeId}><span class="relative flex h-2 w-2" data-v-266b131b${_scopeId}><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" data-v-266b131b${_scopeId}></span><span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500" data-v-266b131b${_scopeId}></span></span><span class="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider" data-v-266b131b${_scopeId}>Akses Terkunci</span></div><h3 class="text-2xl font-black text-slate-800 dark:text-white mb-2 tracking-tight" data-v-266b131b${_scopeId}> Periode Audit Ditutup</h3><p class="text-xs font-medium text-slate-500 leading-relaxed max-w-md" data-v-266b131b${_scopeId}> Saat ini unit kerja Anda sedang dalam tahap <span class="text-amber-600 dark:text-amber-400 font-bold uppercase bg-amber-50 dark:bg-amber-900/30 px-1 rounded" data-v-266b131b${_scopeId}>${ssrInterpolate(__props.assignment.current_stage?.replace("_", " "))}</span>. Perubahan data dibatasi kecuali atas permintaan Auditor. </p></div></div>`);
            } else {
              _push2(`<div class="flex items-center gap-8 relative z-10" data-v-266b131b${_scopeId}><div class="relative" data-v-266b131b${_scopeId}><div class="absolute inset-0 bg-emerald-500 blur-xl opacity-20 animate-pulse" data-v-266b131b${_scopeId}></div><div class="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-[1.5rem] flex items-center justify-center flex-shrink-0 text-white shadow-xl shadow-emerald-500/20 relative z-10" data-v-266b131b${_scopeId}><svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-266b131b${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-266b131b${_scopeId}></path></svg></div></div><div class="flex-1 border-l border-slate-100 dark:border-slate-800 pl-8" data-v-266b131b${_scopeId}><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/50 mb-3" data-v-266b131b${_scopeId}><span class="relative flex h-2 w-2" data-v-266b131b${_scopeId}><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" data-v-266b131b${_scopeId}></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" data-v-266b131b${_scopeId}></span></span><span class="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider" data-v-266b131b${_scopeId}>Status Aktif</span></div><h3 class="text-2xl font-black text-slate-800 dark:text-white mb-2 tracking-tight" data-v-266b131b${_scopeId}> Pengumpulan Bukti</h3><p class="text-xs font-medium text-slate-500 leading-relaxed max-w-md" data-v-266b131b${_scopeId}> Silakan lengkapi bukti dukung untuk data kinerja. Pastikan tautan penyimpanan (Drive/Cloud) dapat diakses publik. </p></div></div>`);
            }
            _push2(`</div></div></div><div class="space-y-6" data-v-266b131b${_scopeId}><div class="max-w-7xl mx-auto flex flex-row gap-3 items-stretch" data-v-266b131b${_scopeId}><div class="relative flex-1 group/search" data-v-266b131b${_scopeId}><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform group-focus-within/search:scale-110 group-focus-within/search:rotate-12" data-v-266b131b${_scopeId}>`);
            if (!isSearching.value) {
              _push2(`<svg class="w-4 h-4 text-slate-400 group-focus-within/search:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-266b131b${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-266b131b${_scopeId}></path></svg>`);
            } else {
              _push2(`<div class="w-3 h-3 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" data-v-266b131b${_scopeId}></div>`);
            }
            _push2(`</div><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari kriteria atau butir indikator..." class="w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 shadow-sm focus:shadow-md transition-all duration-300" data-v-266b131b${_scopeId}></div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-3 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-emerald-300/50 transition-all duration-300" data-v-266b131b${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r dark:border-slate-800 mr-2" data-v-266b131b${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-emerald-600 transition-colors" data-v-266b131b${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-266b131b${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-266b131b${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-266b131b${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option></select></div></div><div class="relative min-h-[400px]" data-v-266b131b${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(activeView.value), {
              assignment: __props.assignment,
              indicators: __props.indicators,
              role: "auditee",
              groupedDocuments: _ctx.groupedDocuments,
              filters: __props.filters,
              onOpenHistory: openHistory,
              onOpenAssessment: _ctx.openAssessment,
              onOpenUpload: openUpload
            }, null), _parent2, _scopeId);
            _push2(`</div></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              show: showModal.value,
              indicator: activeIndicator.value,
              form: unref(form),
              onClose: closeModal,
              onSubmit: submit
            }, null, _parent2, _scopeId));
            _push2(``);
            if (showHistoryModal.value) {
              _push2(`<div class="fixed inset-0 z-[999] flex items-center justify-center p-6" data-v-266b131b${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity" data-v-266b131b${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300 flex flex-col max-h-[85vh]" data-v-266b131b${_scopeId}><div class="p-12 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30" data-v-266b131b${_scopeId}><div data-v-266b131b${_scopeId}><h3 class="text-3xl font-black uppercase text-slate-900 dark:text-white italic tracking-tighter" data-v-266b131b${_scopeId}> Audit Trail</h3><p class="text-[10px] font-bold text-rose-600 font-mono mt-2 uppercase tracking-widest italic leading-none" data-v-266b131b${_scopeId}>${ssrInterpolate(activeIndicatorCode.value)}</p></div><button class="text-4xl text-slate-300 hover:text-rose-600 transition-colors" data-v-266b131b${_scopeId}>×</button></div><div class="p-12 overflow-y-auto custom-scrollbar flex-1 bg-white dark:bg-slate-900" data-v-266b131b${_scopeId}>`);
              if (isLoadingHistory.value) {
                _push2(`<div class="py-24 text-center" data-v-266b131b${_scopeId}><div class="inline-block w-10 h-10 border-4 border-rose-500 border-t-transparent rounded-full animate-spin" data-v-266b131b${_scopeId}></div><p class="text-[10px] font-black text-slate-400 mt-6 uppercase tracking-[0.3em]" data-v-266b131b${_scopeId}> Mengambil Log... </p></div>`);
              } else {
                _push2(`<div class="space-y-12" data-v-266b131b${_scopeId}><!--[-->`);
                ssrRenderList(activeHistory.value, (log) => {
                  _push2(`<div class="relative pl-10 border-l-2 border-slate-100 dark:border-slate-800" data-v-266b131b${_scopeId}><div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-rose-600 shadow-xl" data-v-266b131b${_scopeId}></div><div class="flex justify-between items-start mb-2" data-v-266b131b${_scopeId}><p class="text-[10px] font-black text-rose-600 uppercase tracking-widest" data-v-266b131b${_scopeId}>${ssrInterpolate(log.created_at)}</p><span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[8px] font-black uppercase tracking-widest" data-v-266b131b${_scopeId}>${ssrInterpolate(log.user?.role)}</span></div><p class="text-sm font-black text-slate-900 dark:text-white tracking-tighter" data-v-266b131b${_scopeId}>${ssrInterpolate(log.user?.name)}</p><div class="mt-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] border border-slate-50 dark:border-slate-700 shadow-inner" data-v-266b131b${_scopeId}><p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 italic" data-v-266b131b${_scopeId}> Action: <span class="text-rose-600" data-v-266b131b${_scopeId}>${ssrInterpolate(log.action)}</span></p><div class="text-[11px] text-slate-500 dark:text-slate-400 font-medium italic leading-relaxed" data-v-266b131b${_scopeId}>${log.formatted_changes ?? ""}</div></div></div>`);
                });
                _push2(`<!--]--></div>`);
              }
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "bg-white dark:bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden" }, [
                  createVNode("div", { class: "overflow-x-auto no-scrollbar pt-6 pb-6 px-4 md:px-8" }, [
                    createVNode("div", { class: "flex items-center justify-between min-w-[600px] md:min-w-0 px-2 gap-0" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.stageStats, (s, index) => {
                        return openBlock(), createBlock("div", {
                          key: s.stage,
                          class: "flex items-center flex-1 last:flex-none relative"
                        }, [
                          createVNode("div", { class: "flex flex-col items-center gap-2 relative group/step" }, [
                            (openBlock(), createBlock(Teleport, { to: "body" }, [
                              createVNode(Transition, { name: "tooltip-fade" }, {
                                default: withCtx(() => [
                                  activeIndex.value !== null && activeIndex.value === index ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    style: {
                                      position: "fixed",
                                      top: `${tooltipPos.top - 12}px`,
                                      left: `${tooltipPos.left}px`,
                                      transform: "translate(-50%, -100%)"
                                    },
                                    class: "z-[10000] pointer-events-none"
                                  }, [
                                    createVNode("div", { class: "bg-slate-900/95 dark:bg-emerald-600/95 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-xl border border-white/10 relative" }, [
                                      createTextVNode(" Tahap: " + toDisplayString(s.label) + " ", 1),
                                      createVNode("div", { class: "absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-900/95 dark:border-t-emerald-600/95" })
                                    ])
                                  ], 4)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)
                            ])),
                            createVNode("div", {
                              onMouseenter: ($event) => handleMouseEnter($event, index),
                              onMouseleave: handleMouseLeave,
                              class: [
                                "w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-black transition-all duration-300 border-2 z-10 relative overflow-hidden",
                                __props.assignment.current_stage === s.stage ? "bg-slate-900 dark:bg-emerald-600 text-white border-emerald-300 scale-125 shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-4 ring-emerald-300/10" : index < currentStageIndex.value ? "bg-emerald-50 text-emerald-600 border-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.2)]" : "bg-slate-50 dark:bg-slate-800 text-slate-300 dark:border-slate-700"
                              ]
                            }, [
                              index < currentStageIndex.value ? (openBlock(), createBlock("svg", {
                                key: 0,
                                class: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "3",
                                  d: "M5 13l4 4L19 7"
                                })
                              ])) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-xs italic"
                              }, toDisplayString(index + 1), 1))
                            ], 42, ["onMouseenter"]),
                            createVNode("span", {
                              class: [
                                "hidden md:block text-xs font-black uppercase tracking-tighter text-center max-w-[70px] leading-tight transition-all duration-300 transform group-hover/step:scale-105",
                                __props.assignment.current_stage === s.stage ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-slate-600"
                              ]
                            }, toDisplayString(s.label), 3)
                          ]),
                          index < __props.stageStats.length - 1 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex-1 h-[2px] mx-2 bg-slate-100 dark:bg-slate-800 relative md:-mt-6"
                          }, [
                            createVNode("div", {
                              class: [
                                "absolute inset-0 bg-emerald-300 transition-all duration-1000 shadow-[0_0_8px_rgba(16,185,129,0.4)]",
                                index < currentStageIndex.value ? "w-full" : "w-0"
                              ]
                            }, null, 2)
                          ])) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8" }, [
                  createVNode("div", { class: "lg:col-span-5 relative group" }, [
                    createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-rose-600 to-pink-700 rounded-[2.5rem] rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-20 blur-2xl" }),
                    createVNode("div", { class: "relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-[2.5rem] shadow-xl overflow-hidden h-full flex flex-col justify-between group-hover:shadow-2xl transition-all duration-500" }, [
                      createVNode("div", { class: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-500/5 to-transparent rounded-bl-[4rem] pointer-events-none" }),
                      createVNode("div", { class: "relative z-10" }, [
                        createVNode("div", { class: "flex justify-between items-start mb-8" }, [
                          createVNode("div", null, [
                            createVNode("p", { class: "text-[10px] font-black text-rose-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2" }, [
                              createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-rose-500" }),
                              createTextVNode(" Kelengkapan Bukti ")
                            ]),
                            createVNode("h4", { class: "text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-none" }, [
                              createTextVNode(toDisplayString(progressPercent.value), 1),
                              createVNode("span", { class: "text-3xl font-bold text-slate-300 dark:text-slate-600 italic -ml-1" }, "%")
                            ])
                          ]),
                          createVNode("div", { class: "w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-500/30 transform group-hover:scale-110 transition-transform duration-500" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-7 h-7",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2.5",
                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              })
                            ]))
                          ])
                        ]),
                        createVNode("div", { class: "space-y-3" }, [
                          createVNode("div", { class: "flex justify-between items-end" }, [
                            createVNode("span", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Progress Upload"),
                            createVNode("span", { class: "text-[10px] font-black text-rose-500" }, toDisplayString(progressPercent.value) + "% / 100%", 1)
                          ]),
                          createVNode("div", { class: "w-full bg-slate-100 dark:bg-slate-800 h-4 rounded-full overflow-hidden p-[3px] ring-1 ring-slate-200 dark:ring-slate-700" }, [
                            createVNode("div", {
                              class: "bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 h-full rounded-full transition-all duration-1000 shadow-[0_2px_10px_rgba(244,63,94,0.4)] relative overflow-hidden",
                              style: { width: progressPercent.value + "%" }
                            }, [
                              createVNode("div", { class: "absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" })
                            ], 4)
                          ]),
                          createVNode("p", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wide leading-relaxed pt-2 border-t border-slate-50 dark:border-slate-800/50 mt-4" }, [
                            createVNode("span", { class: "text-rose-500" }, "*"),
                            createTextVNode(" Pastikan seluruh bukti digital terunggah valid. ")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-7 relative group" }, [
                    createVNode("div", { class: "absolute inset-0 bg-gradient-to-bl from-indigo-500 to-violet-600 rounded-[2.5rem] -rotate-1 group-hover:-rotate-2 transition-transform duration-500 opacity-10 blur-2xl" }),
                    createVNode("div", { class: "relative h-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center overflow-hidden" }, [
                      !isEditable.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center gap-8 relative z-10"
                      }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode("div", { class: "absolute inset-0 bg-amber-500 blur-xl opacity-20 animate-pulse" }),
                          createVNode("div", { class: "w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[1.5rem] flex items-center justify-center flex-shrink-0 text-white shadow-xl shadow-amber-500/20 relative z-10" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-9 h-9",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2.5",
                                d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                              })
                            ]))
                          ])
                        ]),
                        createVNode("div", { class: "flex-1 border-l border-slate-100 dark:border-slate-800 pl-8" }, [
                          createVNode("div", { class: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/50 mb-3" }, [
                            createVNode("span", { class: "relative flex h-2 w-2" }, [
                              createVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" }),
                              createVNode("span", { class: "relative inline-flex rounded-full h-2 w-2 bg-amber-500" })
                            ]),
                            createVNode("span", { class: "text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider" }, "Akses Terkunci")
                          ]),
                          createVNode("h3", { class: "text-2xl font-black text-slate-800 dark:text-white mb-2 tracking-tight" }, " Periode Audit Ditutup"),
                          createVNode("p", { class: "text-xs font-medium text-slate-500 leading-relaxed max-w-md" }, [
                            createTextVNode(" Saat ini unit kerja Anda sedang dalam tahap "),
                            createVNode("span", { class: "text-amber-600 dark:text-amber-400 font-bold uppercase bg-amber-50 dark:bg-amber-900/30 px-1 rounded" }, toDisplayString(__props.assignment.current_stage?.replace("_", " ")), 1),
                            createTextVNode(". Perubahan data dibatasi kecuali atas permintaan Auditor. ")
                          ])
                        ])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex items-center gap-8 relative z-10"
                      }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode("div", { class: "absolute inset-0 bg-emerald-500 blur-xl opacity-20 animate-pulse" }),
                          createVNode("div", { class: "w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-[1.5rem] flex items-center justify-center flex-shrink-0 text-white shadow-xl shadow-emerald-500/20 relative z-10" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-9 h-9",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2.5",
                                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              })
                            ]))
                          ])
                        ]),
                        createVNode("div", { class: "flex-1 border-l border-slate-100 dark:border-slate-800 pl-8" }, [
                          createVNode("div", { class: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/50 mb-3" }, [
                            createVNode("span", { class: "relative flex h-2 w-2" }, [
                              createVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
                              createVNode("span", { class: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })
                            ]),
                            createVNode("span", { class: "text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider" }, "Status Aktif")
                          ]),
                          createVNode("h3", { class: "text-2xl font-black text-slate-800 dark:text-white mb-2 tracking-tight" }, " Pengumpulan Bukti"),
                          createVNode("p", { class: "text-xs font-medium text-slate-500 leading-relaxed max-w-md" }, " Silakan lengkapi bukti dukung untuk data kinerja. Pastikan tautan penyimpanan (Drive/Cloud) dapat diakses publik. ")
                        ])
                      ]))
                    ])
                  ])
                ]),
                createVNode("div", { class: "space-y-6" }, [
                  createVNode("div", { class: "max-w-7xl mx-auto flex flex-row gap-3 items-stretch" }, [
                    createVNode("div", { class: "relative flex-1 group/search" }, [
                      createVNode("div", { class: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform group-focus-within/search:scale-110 group-focus-within/search:rotate-12" }, [
                        !isSearching.value ? (openBlock(), createBlock("svg", {
                          key: 0,
                          class: "w-4 h-4 text-slate-400 group-focus-within/search:text-emerald-500",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          })
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "w-3 h-3 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"
                        }))
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => search.value = $event,
                        type: "text",
                        placeholder: "Cari kriteria atau butir indikator...",
                        class: "w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 shadow-sm focus:shadow-md transition-all duration-300"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, search.value]
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center bg-white dark:bg-slate-900 rounded-2xl px-3 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-emerald-300/50 transition-all duration-300" }, [
                      createVNode("span", { class: "hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r dark:border-slate-800 mr-2" }, "Tampilkan"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => perPage.value = $event,
                        class: "bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-emerald-600 transition-colors"
                      }, [
                        createVNode("option", { value: 10 }, "10"),
                        createVNode("option", { value: 25 }, "25"),
                        createVNode("option", { value: 50 }, "50")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, perPage.value]
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "relative min-h-[400px]" }, [
                    createVNode(Transition, {
                      name: "view-fade",
                      mode: "out-in"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(activeView.value), {
                          assignment: __props.assignment,
                          indicators: __props.indicators,
                          role: "auditee",
                          groupedDocuments: _ctx.groupedDocuments,
                          filters: __props.filters,
                          onOpenHistory: openHistory,
                          onOpenAssessment: _ctx.openAssessment,
                          onOpenUpload: openUpload
                        }, null, 40, ["assignment", "indicators", "groupedDocuments", "filters", "onOpenAssessment"]))
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createVNode(_sfc_main$1, {
                show: showModal.value,
                indicator: activeIndicator.value,
                form: unref(form),
                onClose: closeModal,
                onSubmit: submit
              }, null, 8, ["show", "indicator", "form"]),
              createVNode(Transition, { name: "modal" }, {
                default: withCtx(() => [
                  showHistoryModal.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed inset-0 z-[999] flex items-center justify-center p-6"
                  }, [
                    createVNode("div", {
                      class: "fixed inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity",
                      onClick: ($event) => showHistoryModal.value = false
                    }, null, 8, ["onClick"]),
                    createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300 flex flex-col max-h-[85vh]" }, [
                      createVNode("div", { class: "p-12 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30" }, [
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-3xl font-black uppercase text-slate-900 dark:text-white italic tracking-tighter" }, " Audit Trail"),
                          createVNode("p", { class: "text-[10px] font-bold text-rose-600 font-mono mt-2 uppercase tracking-widest italic leading-none" }, toDisplayString(activeIndicatorCode.value), 1)
                        ]),
                        createVNode("button", {
                          onClick: ($event) => showHistoryModal.value = false,
                          class: "text-4xl text-slate-300 hover:text-rose-600 transition-colors"
                        }, "×", 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "p-12 overflow-y-auto custom-scrollbar flex-1 bg-white dark:bg-slate-900" }, [
                        isLoadingHistory.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "py-24 text-center"
                        }, [
                          createVNode("div", { class: "inline-block w-10 h-10 border-4 border-rose-500 border-t-transparent rounded-full animate-spin" }),
                          createVNode("p", { class: "text-[10px] font-black text-slate-400 mt-6 uppercase tracking-[0.3em]" }, " Mengambil Log... ")
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "space-y-12"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(activeHistory.value, (log) => {
                            return openBlock(), createBlock("div", {
                              key: log.id,
                              class: "relative pl-10 border-l-2 border-slate-100 dark:border-slate-800"
                            }, [
                              createVNode("div", { class: "absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-rose-600 shadow-xl" }),
                              createVNode("div", { class: "flex justify-between items-start mb-2" }, [
                                createVNode("p", { class: "text-[10px] font-black text-rose-600 uppercase tracking-widest" }, toDisplayString(log.created_at), 1),
                                createVNode("span", { class: "px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[8px] font-black uppercase tracking-widest" }, toDisplayString(log.user?.role), 1)
                              ]),
                              createVNode("p", { class: "text-sm font-black text-slate-900 dark:text-white tracking-tighter" }, toDisplayString(log.user?.name), 1),
                              createVNode("div", { class: "mt-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] border border-slate-50 dark:border-slate-700 shadow-inner" }, [
                                createVNode("p", { class: "text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 italic" }, [
                                  createTextVNode(" Action: "),
                                  createVNode("span", { class: "text-rose-600" }, toDisplayString(log.action), 1)
                                ]),
                                createVNode("div", {
                                  class: "text-[11px] text-slate-500 dark:text-slate-400 font-medium italic leading-relaxed",
                                  innerHTML: log.formatted_changes
                                }, null, 8, ["innerHTML"])
                              ])
                            ]);
                          }), 128))
                        ]))
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auditee/Assignment/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-266b131b"]]);
export {
  Show as default
};

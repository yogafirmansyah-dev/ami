import { computed, ref, watch, reactive, mergeProps, withCtx, createVNode, resolveDynamicComponent, unref, createBlock, openBlock, Fragment, renderList, createCommentVNode, Teleport, Transition, createTextVNode, toDisplayString, withDirectives, vModelText, vModelSelect, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderTeleport, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderVNode } from "vue/server-renderer";
import { router, useForm, Link } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-BXpqpYTS.js";
import debounce from "lodash/debounce.js";
import axios from "axios";
import { S as ScoringView, A as ArchiveView, M as MatrixRtlView, a as StatisticsView, _ as _sfc_main$1 } from "./UploadModal-bgBv6j4W.js";
import { F as FindingView } from "./FindingView-BvtLyDsC.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vueuse/core";
import "./windowSizeCalculator-Ch6zBFfA.js";
import "./TDropdown-CRaizlei.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-DS29Kv5n.js";
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
    groupedDocuments: Array,
    filters: Object,
    stageStats: Array
  },
  setup(__props) {
    const props = __props;
    const activeView = computed(() => {
      const stage = props.assignment.current_stage;
      switch (stage) {
        case "doc_audit":
        case "field_audit":
          return ScoringView;
        case "finding":
          return FindingView;
        case "reporting":
          return StatisticsView;
        case "rtm_rtl":
          return MatrixRtlView;
        case "finished":
          return ArchiveView;
        default:
          return ScoringView;
      }
    });
    const search = ref(props.filters.search);
    const isSearching = ref(false);
    const perPage = ref(props.filters.per_page || 10);
    watch([search, perPage], debounce(() => {
      isSearching.value = true;
      router.get(
        route("auditor.assignments.show", props.assignment.id),
        { search: search.value, per_page: perPage.value },
        {
          preserveState: true,
          replace: true,
          preserveScroll: true,
          onFinish: () => isSearching.value = false
        }
      );
    }, 500));
    const showDocModal = ref(false);
    const docForm = useForm({ type: "", label: "", file: null });
    const openDocUpload = (doc) => {
      docForm.clearErrors();
      docForm.type = doc.type;
      docForm.label = doc.label;
      showDocModal.value = true;
    };
    const submitDoc = () => {
      docForm.post(route("auditor.assignments.upload-document", props.assignment.id), {
        forceFormData: true,
        preserveScroll: true,
        onSuccess: () => {
          showDocModal.value = false;
          docForm.reset();
        }
      });
    };
    const showAssessmentModal = ref(false);
    const activeIndicator = ref(null);
    const assessmentForm = useForm({
      score: "",
      finding_type: "",
      auditor_note: "",
      recommendation: "",
      evidence_url: "",
      evidence_file: null
    });
    const openAssessment = (item) => {
      activeIndicator.value = item;
      assessmentForm.score = item.score ?? "";
      assessmentForm.finding_type = item.finding_type ?? "";
      assessmentForm.auditor_note = item.auditor_note ?? "";
      assessmentForm.recommendation = item.recommendation ?? "";
      assessmentForm.evidence_url = item.evidence_url ?? "";
      assessmentForm.evidence_file = null;
      showAssessmentModal.value = true;
    };
    const submitAssessment = () => {
      assessmentForm.transform((data) => ({ ...data, _method: "PATCH" })).post(route("auditor.indicators.update", activeIndicator.value.id), {
        forceFormData: true,
        preserveScroll: true,
        onSuccess: () => {
          showAssessmentModal.value = false;
          assessmentForm.reset();
        }
      });
    };
    const showUploadModal = ref(false);
    const uploadForm = useForm({
      evidence_url: "",
      evidence_file: null
    });
    const openUpload = (indicator) => {
      activeIndicator.value = indicator;
      uploadForm.evidence_url = indicator.evidence_url ?? "";
      uploadForm.evidence_file = null;
      showUploadModal.value = true;
    };
    const submitUpload = () => {
      uploadForm.transform((data) => ({ ...data, _method: "PATCH" })).post(route("auditor.indicators.update", activeIndicator.value.id), {
        forceFormData: true,
        preserveScroll: true,
        onSuccess: () => {
          showUploadModal.value = false;
          uploadForm.reset();
        }
      });
    };
    const showHistoryModal = ref(false);
    const activeHistory = ref([]);
    const isLoadingHistory = ref(false);
    const activeIndicatorCode = ref("");
    const openHistory = async (item) => {
      activeIndicatorCode.value = item.snapshot_code;
      isLoadingHistory.value = true;
      showHistoryModal.value = true;
      try {
        const res = await axios.get(route("auditor.indicators.history", item.id));
        activeHistory.value = res.data;
      } catch (e) {
        console.error("History fail");
      } finally {
        isLoadingHistory.value = false;
      }
    };
    const handleVerifyRtl = (item) => {
      router.patch(route("auditor.indicators.verify-rtl", item.rtl.id), {
        status: item.rtl.status,
        auditor_feedback: item.rtl.auditor_feedback
      }, { preserveScroll: true });
    };
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
    const currentStageIndex = computed(() => {
      return props.stageStats.findIndex((s) => s.stage === props.assignment.current_stage);
    });
    const canUploadBA = (type) => {
      const stage = props.assignment.current_stage;
      if (type === "field_report") return stage === "field_audit";
      if (type === "final_report") return stage === "finding" || stage === "reporting";
      if (type === "end_report") return stage === "reporting" || stage === "finished";
      return false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({
        title: "Area Kerja: " + __props.assignment.target_name
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 transition-all duration-300" data-v-2267f68e${_scopeId}><div class="space-y-1 group cursor-default" data-v-2267f68e${_scopeId}><h2 class="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none transition-all group-hover:tracking-tight" data-v-2267f68e${_scopeId}>${ssrInterpolate(__props.assignment.target_name)}</h2><div class="flex items-center gap-2" data-v-2267f68e${_scopeId}><span class="relative flex h-2 w-2" data-v-2267f68e${_scopeId}><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" data-v-2267f68e${_scopeId}></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-300" data-v-2267f68e${_scopeId}></span></span><p class="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em] italic group-hover:text-emerald-300 transition-colors" data-v-2267f68e${_scopeId}> Mesin Kerja Auditor</p></div></div><div class="flex items-center gap-1.5 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] w-full lg:w-auto" data-v-2267f68e${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("auditor.assignments.index"),
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
                      createVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
                      createVNode("span", { class: "relative inline-flex rounded-full h-2 w-2 bg-emerald-300" })
                    ]),
                    createVNode("p", { class: "text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em] italic group-hover:text-emerald-300 transition-colors" }, " Mesin Kerja Auditor")
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-1.5 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] w-full lg:w-auto" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("auditor.assignments.index"),
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
            _push2(`<div class="space-y-6" data-v-2267f68e${_scopeId}><div class="bg-white dark:bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden" data-v-2267f68e${_scopeId}><div class="overflow-x-auto no-scrollbar pt-6 pb-6 px-4 md:px-8" data-v-2267f68e${_scopeId}><div class="flex items-center justify-between min-w-[600px] md:min-w-0 px-2 gap-0" data-v-2267f68e${_scopeId}><!--[-->`);
            ssrRenderList(__props.stageStats, (s, index) => {
              _push2(`<div class="flex items-center flex-1 last:flex-none relative" data-v-2267f68e${_scopeId}><div class="flex flex-col items-center gap-2 relative group/step" data-v-2267f68e${_scopeId}>`);
              ssrRenderTeleport(_push2, (_push3) => {
                if (activeIndex.value !== null && activeIndex.value === index) {
                  _push3(`<div style="${ssrRenderStyle({
                    position: "fixed",
                    top: `${tooltipPos.top - 12}px`,
                    left: `${tooltipPos.left}px`,
                    transform: "translate(-50%, -100%)"
                  })}" class="z-[10000] pointer-events-none" data-v-2267f68e${_scopeId}><div class="bg-slate-900/95 dark:bg-emerald-600/95 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-xl border border-white/10 relative" data-v-2267f68e${_scopeId}> Tahap: ${ssrInterpolate(s.label)} <div class="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-900/95 dark:border-t-emerald-600/95" data-v-2267f68e${_scopeId}></div></div></div>`);
                } else {
                  _push3(`<!---->`);
                }
              }, "body", false, _parent2);
              _push2(`<div class="${ssrRenderClass([
                "w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-black transition-all duration-300 border-2 z-10 relative overflow-hidden",
                __props.assignment.current_stage === s.stage ? "bg-slate-900 dark:bg-emerald-600 text-white border-emerald-300 scale-125 shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-4 ring-emerald-300/10" : index < currentStageIndex.value ? "bg-emerald-50 text-emerald-600 border-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.2)]" : "bg-slate-50 dark:bg-slate-800 text-slate-300 dark:border-slate-700"
              ])}" data-v-2267f68e${_scopeId}>`);
              if (index < currentStageIndex.value) {
                _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2267f68e${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" data-v-2267f68e${_scopeId}></path></svg>`);
              } else {
                _push2(`<span class="text-xs italic" data-v-2267f68e${_scopeId}>${ssrInterpolate(index + 1)}</span>`);
              }
              _push2(`</div><span class="${ssrRenderClass([
                "hidden md:block text-xs font-black uppercase tracking-tighter text-center max-w-[70px] leading-tight transition-all duration-300 transform group-hover/step:scale-105",
                __props.assignment.current_stage === s.stage ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-slate-600"
              ])}" data-v-2267f68e${_scopeId}>${ssrInterpolate(s.label)}</span></div>`);
              if (index < __props.stageStats.length - 1) {
                _push2(`<div class="flex-1 h-[2px] mx-2 bg-slate-100 dark:bg-slate-800 relative md:-mt-6" data-v-2267f68e${_scopeId}><div class="${ssrRenderClass([
                  "absolute inset-0 bg-emerald-300 transition-all duration-1000 shadow-[0_0_8px_rgba(16,185,129,0.4)]",
                  index < currentStageIndex.value ? "w-full" : "w-0"
                ])}" data-v-2267f68e${_scopeId}></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-8" data-v-2267f68e${_scopeId}><div class="lg:col-span-5 bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-900 p-8 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-300/20 shadow-xl shadow-emerald-100/50 dark:shadow-none flex flex-col justify-between gap-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-200/50 dark:hover:shadow-emerald-300/10" data-v-2267f68e${_scopeId}><div class="absolute top-0 right-0 w-64 h-64 bg-emerald-300/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" data-v-2267f68e${_scopeId}></div><div class="relative z-10 flex items-start gap-6" data-v-2267f68e${_scopeId}><div class="w-16 h-16 rounded-[1.2rem] bg-white dark:bg-emerald-300/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-xl italic shadow-sm border border-emerald-50 dark:border-emerald-300/20 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" data-v-2267f68e${_scopeId}>${ssrInterpolate(__props.assignment.standard?.name?.charAt(0))}</div><div class="min-w-0 flex-1" data-v-2267f68e${_scopeId}><div class="flex items-center gap-2 mb-2" data-v-2267f68e${_scopeId}><span class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-300/20 text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-300" data-v-2267f68e${_scopeId}> Standar Instrumen </span></div><h4 class="text-xl font-black text-slate-800 dark:text-slate-100 uppercase italic tracking-tight leading-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors" data-v-2267f68e${_scopeId}>${ssrInterpolate(__props.assignment.standard?.name)}</h4></div></div><div class="relative z-10 grid grid-cols-3 gap-4 border-t border-emerald-100 dark:border-emerald-300/20 pt-6" data-v-2267f68e${_scopeId}><div data-v-2267f68e${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1" data-v-2267f68e${_scopeId}>Unit Audit </p><p class="text-sm font-bold text-slate-700 dark:text-slate-200 truncate"${ssrRenderAttr("title", __props.assignment.target_name)} data-v-2267f68e${_scopeId}>${ssrInterpolate(__props.assignment.target_name?.split(" ")[0])}</p></div><div class="text-center border-x border-emerald-50 dark:border-emerald-300/10" data-v-2267f68e${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1" data-v-2267f68e${_scopeId}> Indikator </p><p class="text-xl font-black text-emerald-600 dark:text-emerald-400 italic leading-none" data-v-2267f68e${_scopeId}>${ssrInterpolate(__props.indicators.total)}</p></div><div class="text-right" data-v-2267f68e${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1" data-v-2267f68e${_scopeId}>Periode </p><div class="flex items-center justify-end gap-1" data-v-2267f68e${_scopeId}><p class="text-sm font-bold text-slate-800 dark:text-white leading-none" data-v-2267f68e${_scopeId}>${ssrInterpolate(__props.assignment.period?.name)}</p></div></div></div></div><div class="lg:col-span-7 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" data-v-2267f68e${_scopeId}><div class="absolute bottom-0 left-0 w-64 h-64 bg-slate-300/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" data-v-2267f68e${_scopeId}></div><div class="relative z-10 mb-6 flex items-center justify-between" data-v-2267f68e${_scopeId}><div class="flex items-center gap-3" data-v-2267f68e${_scopeId}><div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300" data-v-2267f68e${_scopeId}><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2267f68e${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" data-v-2267f68e${_scopeId}></path></svg></div><div data-v-2267f68e${_scopeId}><h3 class="text-lg font-black uppercase italic tracking-tight text-slate-800 dark:text-white" data-v-2267f68e${_scopeId}> Arsip Resmi </h3><p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider" data-v-2267f68e${_scopeId}>Berita Acara &amp; Laporan</p></div></div><span class="text-[10px] font-bold text-emerald-600 uppercase tracking-widest" data-v-2267f68e${_scopeId}>${ssrInterpolate(__props.groupedDocuments.filter((d) => d.files && d.files.length || d.file).length)} File Avail </span></div><div class="relative z-10 flex gap-4 overflow-x-auto no-scrollbar pb-2" data-v-2267f68e${_scopeId}><!--[-->`);
            ssrRenderList(__props.groupedDocuments, (doc) => {
              _push2(`<div class="min-w-[140px] flex-1 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col gap-3 transition-all hover:border-emerald-300 hover:shadow-lg group/doc" data-v-2267f68e${_scopeId}><div class="flex items-start justify-between" data-v-2267f68e${_scopeId}><svg class="w-6 h-6 text-slate-300 group-hover/doc:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2267f68e${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-2267f68e${_scopeId}></path></svg>`);
              if (doc.files && doc.files.length || doc.file) {
                _push2(`<div class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" data-v-2267f68e${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-2267f68e${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 line-clamp-1"${ssrRenderAttr("title", doc.label)} data-v-2267f68e${_scopeId}>${ssrInterpolate(doc.label)}</p><div class="flex flex-col gap-2" data-v-2267f68e${_scopeId}>`);
              if (!(doc.files?.length || doc.file) && canUploadBA(doc.type)) {
                _push2(`<button class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[9px] font-bold uppercase hover:bg-emerald-600 transition-colors" data-v-2267f68e${_scopeId}> Unggah </button>`);
              } else if (doc.files && doc.files.length > 0) {
                _push2(`<a${ssrRenderAttr("href", _ctx.route("files.official.show", doc.files[0].id))} target="_blank" class="text-[10px] font-bold text-emerald-600 hover:underline flex items-center gap-1" data-v-2267f68e${_scopeId}> Unduh PDF ↗ </a>`);
              } else if (doc.file) {
                _push2(`<a${ssrRenderAttr("href", _ctx.route("files.official.show", doc.file.id))} target="_blank" class="text-[10px] font-bold text-emerald-600 hover:underline flex items-center gap-1" data-v-2267f68e${_scopeId}> Unduh PDF ↗ </a>`);
              } else {
                _push2(`<span class="text-[9px] italic text-slate-300" data-v-2267f68e${_scopeId}>Menunggu</span>`);
              }
              _push2(`</div></div></div>`);
            });
            _push2(`<!--]--></div></div></div><div class="max-w-7xl mx-auto flex flex-row gap-3 items-stretch" data-v-2267f68e${_scopeId}><div class="relative flex-1 group/search" data-v-2267f68e${_scopeId}><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform group-focus-within/search:scale-110 group-focus-within/search:rotate-12" data-v-2267f68e${_scopeId}>`);
            if (!isSearching.value) {
              _push2(`<svg class="w-4 h-4 text-slate-400 group-focus-within/search:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2267f68e${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-2267f68e${_scopeId}></path></svg>`);
            } else {
              _push2(`<div class="w-3 h-3 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" data-v-2267f68e${_scopeId}></div>`);
            }
            _push2(`</div><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari kriteria atau butir indikator..." class="w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 shadow-sm focus:shadow-md transition-all duration-300" data-v-2267f68e${_scopeId}></div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-3 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-emerald-300/50 transition-all duration-300" data-v-2267f68e${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r dark:border-slate-800 mr-2" data-v-2267f68e${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-emerald-600 transition-colors" data-v-2267f68e${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-2267f68e${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-2267f68e${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-2267f68e${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option></select></div></div><div class="relative min-h-[400px]" data-v-2267f68e${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(activeView.value), {
              assignment: __props.assignment,
              indicators: __props.indicators,
              role: "auditor",
              groupedDocuments: __props.groupedDocuments,
              onOpenAssessment: openAssessment,
              onOpenHistory: openHistory,
              onVerifyRtl: handleVerifyRtl,
              onOpenUpload: openUpload
            }, null), _parent2, _scopeId);
            _push2(`</div></div>`);
            if (showAssessmentModal.value) {
              _push2(`<div class="fixed inset-0 z-[999] flex items-center justify-center p-6" data-v-2267f68e${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity" data-v-2267f68e${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in duration-300" data-v-2267f68e${_scopeId}><form class="flex flex-col max-h-[90vh]" data-v-2267f68e${_scopeId}><div class="p-12 border-b dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-between items-center" data-v-2267f68e${_scopeId}><div data-v-2267f68e${_scopeId}><h3 class="text-3xl font-black uppercase tracking-tighter italic text-slate-900 dark:text-white leading-none" data-v-2267f68e${_scopeId}> Evaluasi</h3><p class="text-[10px] font-bold text-emerald-600 font-mono mt-3 uppercase tracking-widest italic" data-v-2267f68e${_scopeId}>${ssrInterpolate(activeIndicator.value?.snapshot_code)}</p></div><button type="button" class="text-4xl text-slate-300 hover:text-emerald-600 transition-colors" data-v-2267f68e${_scopeId}>×</button></div><div class="p-12 space-y-8 overflow-y-auto custom-scrollbar flex-1" data-v-2267f68e${_scopeId}><p class="text-sm font-bold text-slate-600 dark:text-slate-300 italic leading-relaxed bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-inner border border-slate-50 dark:border-slate-700" data-v-2267f68e${_scopeId}> &quot;${ssrInterpolate(activeIndicator.value?.snapshot_requirement)}&quot; </p><div class="grid grid-cols-2 gap-8" data-v-2267f68e${_scopeId}><div class="space-y-3" data-v-2267f68e${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1" data-v-2267f68e${_scopeId}>Kategori Temuan</label><select class="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold shadow-inner focus:ring-2 focus:ring-emerald-500/20" required data-v-2267f68e${_scopeId}><option value="" disabled data-v-2267f68e${ssrIncludeBooleanAttr(Array.isArray(unref(assessmentForm).finding_type) ? ssrLooseContain(unref(assessmentForm).finding_type, "") : ssrLooseEqual(unref(assessmentForm).finding_type, "")) ? " selected" : ""}${_scopeId}>Pilih Status</option><option value="KS" data-v-2267f68e${ssrIncludeBooleanAttr(Array.isArray(unref(assessmentForm).finding_type) ? ssrLooseContain(unref(assessmentForm).finding_type, "KS") : ssrLooseEqual(unref(assessmentForm).finding_type, "KS")) ? " selected" : ""}${_scopeId}>Kesesuaian (KS)</option><option value="KTS" data-v-2267f68e${ssrIncludeBooleanAttr(Array.isArray(unref(assessmentForm).finding_type) ? ssrLooseContain(unref(assessmentForm).finding_type, "KTS") : ssrLooseEqual(unref(assessmentForm).finding_type, "KTS")) ? " selected" : ""}${_scopeId}>Ketidaksesuaian (KTS)</option><option value="OB" data-v-2267f68e${ssrIncludeBooleanAttr(Array.isArray(unref(assessmentForm).finding_type) ? ssrLooseContain(unref(assessmentForm).finding_type, "OB") : ssrLooseEqual(unref(assessmentForm).finding_type, "OB")) ? " selected" : ""}${_scopeId}>Observasi (OB)</option></select></div><div class="space-y-3" data-v-2267f68e${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1" data-v-2267f68e${_scopeId}>Skor Penilaian (1-4)</label><select class="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold shadow-inner focus:ring-2 focus:ring-emerald-500/20" required data-v-2267f68e${_scopeId}><option value="" disabled data-v-2267f68e${ssrIncludeBooleanAttr(Array.isArray(unref(assessmentForm).score) ? ssrLooseContain(unref(assessmentForm).score, "") : ssrLooseEqual(unref(assessmentForm).score, "")) ? " selected" : ""}${_scopeId}>Beri Nilai</option><!--[-->`);
              ssrRenderList(4, (n) => {
                _push2(`<option${ssrRenderAttr("value", n)} data-v-2267f68e${ssrIncludeBooleanAttr(Array.isArray(unref(assessmentForm).score) ? ssrLooseContain(unref(assessmentForm).score, n) : ssrLooseEqual(unref(assessmentForm).score, n)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(n)}</option>`);
              });
              _push2(`<!--]--></select></div></div><div class="space-y-3" data-v-2267f68e${_scopeId}><label class="text-[10px] font-black text-amber-500 uppercase tracking-widest ml-1 italic" data-v-2267f68e${_scopeId}>Narasi Deskripsi Temuan</label><textarea rows="4" class="w-full px-6 py-5 bg-amber-50/20 dark:bg-amber-900/10 border-2 border-amber-100 dark:border-amber-900/20 rounded-[2rem] text-xs font-bold shadow-sm focus:ring-2 focus:ring-amber-500/20" placeholder="Jelaskan temuan secara faktual..." required data-v-2267f68e${_scopeId}>${ssrInterpolate(unref(assessmentForm).auditor_note)}</textarea></div><div class="space-y-3" data-v-2267f68e${_scopeId}><label class="text-[10px] font-black text-emerald-500 uppercase tracking-widest ml-1 italic" data-v-2267f68e${_scopeId}>Saran Rekomendasi Strategis</label><textarea rows="4" class="w-full px-6 py-5 bg-emerald-50/20 dark:bg-emerald-900/10 border-2 border-emerald-100 dark:border-emerald-900/20 rounded-[2rem] text-xs font-bold shadow-sm focus:ring-2 focus:ring-emerald-500/20" placeholder="Apa yang harus unit lakukan untuk memperbaiki ini?" data-v-2267f68e${_scopeId}>${ssrInterpolate(unref(assessmentForm).recommendation)}</textarea></div></div><div class="p-12 border-t dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-end gap-6" data-v-2267f68e${_scopeId}><button type="button" class="px-10 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors" data-v-2267f68e${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(assessmentForm).processing) ? " disabled" : ""} class="px-16 py-4 bg-slate-900 dark:bg-emerald-600 text-white rounded-[2.5rem] font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-50" data-v-2267f68e${_scopeId}>${ssrInterpolate(unref(assessmentForm).processing ? "SINKRONISASI..." : "SIMPAN EVALUASI")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(``);
            if (showDocModal.value) {
              _push2(`<div class="fixed inset-0 z-[999] flex items-center justify-center p-6" data-v-2267f68e${_scopeId}><div class="fixed inset-0 bg-slate-900/70 backdrop-blur-md" data-v-2267f68e${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[3.5rem] shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in duration-300" data-v-2267f68e${_scopeId}><div class="p-12 border-b dark:border-slate-800 text-center bg-slate-50/50 dark:bg-slate-800/20" data-v-2267f68e${_scopeId}><h3 class="text-xl font-black uppercase tracking-widest text-slate-900 dark:text-white leading-none" data-v-2267f68e${_scopeId}> Arsip Resmi</h3><p class="text-[9px] font-bold text-emerald-500 uppercase mt-4 italic tracking-tighter" data-v-2267f68e${_scopeId}>${ssrInterpolate(unref(docForm).label)}</p></div><form class="p-12 space-y-10" data-v-2267f68e${_scopeId}><input type="file" required class="w-full text-[10px] text-slate-400 file:mr-4 file:py-3 file:px-8 file:rounded-2xl file:border-0 file:bg-slate-900 file:text-white file:font-black hover:file:bg-emerald-600 transition-all cursor-pointer shadow-inner" data-v-2267f68e${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(docForm).processing) ? " disabled" : ""} class="w-full py-6 bg-emerald-600 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl hover:bg-emerald-700 transition-all active:scale-95" data-v-2267f68e${_scopeId}>${ssrInterpolate(unref(docForm).processing ? "SINKRONISASI..." : "UNGGAH DOKUMEN")}</button></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(``);
            if (showHistoryModal.value) {
              _push2(`<div class="fixed inset-0 z-[999] flex items-center justify-center p-6" data-v-2267f68e${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity" data-v-2267f68e${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300 flex flex-col max-h-[85vh]" data-v-2267f68e${_scopeId}><div class="p-12 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30" data-v-2267f68e${_scopeId}><div data-v-2267f68e${_scopeId}><h3 class="text-3xl font-black uppercase text-slate-900 dark:text-white italic tracking-tighter" data-v-2267f68e${_scopeId}> Audit Trail</h3><p class="text-[10px] font-bold text-emerald-600 font-mono mt-2 uppercase tracking-widest italic leading-none" data-v-2267f68e${_scopeId}>${ssrInterpolate(activeIndicatorCode.value)}</p></div><button class="text-4xl text-slate-300 hover:text-emerald-600 transition-colors" data-v-2267f68e${_scopeId}>×</button></div><div class="p-12 overflow-y-auto custom-scrollbar flex-1 bg-white dark:bg-slate-900" data-v-2267f68e${_scopeId}>`);
              if (isLoadingHistory.value) {
                _push2(`<div class="py-24 text-center" data-v-2267f68e${_scopeId}><div class="inline-block w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" data-v-2267f68e${_scopeId}></div><p class="text-[10px] font-black text-slate-400 mt-6 uppercase tracking-[0.3em]" data-v-2267f68e${_scopeId}> Mengambil Log... </p></div>`);
              } else {
                _push2(`<div class="space-y-12" data-v-2267f68e${_scopeId}><!--[-->`);
                ssrRenderList(activeHistory.value, (log) => {
                  _push2(`<div class="relative pl-10 border-l-2 border-slate-100 dark:border-slate-800" data-v-2267f68e${_scopeId}><div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-emerald-600 shadow-xl" data-v-2267f68e${_scopeId}></div><div class="flex justify-between items-start mb-2" data-v-2267f68e${_scopeId}><p class="text-[10px] font-black text-emerald-600 uppercase tracking-widest" data-v-2267f68e${_scopeId}>${ssrInterpolate(log.created_at)}</p><span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[8px] font-black uppercase tracking-widest" data-v-2267f68e${_scopeId}>${ssrInterpolate(log.user?.role)}</span></div><p class="text-sm font-black text-slate-900 dark:text-white tracking-tighter" data-v-2267f68e${_scopeId}>${ssrInterpolate(log.user?.name)}</p><div class="mt-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] border border-slate-50 dark:border-slate-700 shadow-inner" data-v-2267f68e${_scopeId}><p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 italic" data-v-2267f68e${_scopeId}> Action: <span class="text-emerald-600" data-v-2267f68e${_scopeId}>${ssrInterpolate(log.action)}</span></p><div class="text-[11px] text-slate-500 dark:text-slate-400 font-medium italic leading-relaxed" data-v-2267f68e${_scopeId}>${log.formatted_changes ?? ""}</div></div></div>`);
                });
                _push2(`<!--]--></div>`);
              }
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$1, {
              show: showUploadModal.value,
              indicator: activeIndicator.value,
              form: unref(uploadForm),
              onClose: ($event) => showUploadModal.value = false,
              onSubmit: submitUpload
            }, null, _parent2, _scopeId));
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
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-8" }, [
                  createVNode("div", { class: "lg:col-span-5 bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-900 p-8 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-300/20 shadow-xl shadow-emerald-100/50 dark:shadow-none flex flex-col justify-between gap-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-200/50 dark:hover:shadow-emerald-300/10" }, [
                    createVNode("div", { class: "absolute top-0 right-0 w-64 h-64 bg-emerald-300/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" }),
                    createVNode("div", { class: "relative z-10 flex items-start gap-6" }, [
                      createVNode("div", { class: "w-16 h-16 rounded-[1.2rem] bg-white dark:bg-emerald-300/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-xl italic shadow-sm border border-emerald-50 dark:border-emerald-300/20 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" }, toDisplayString(__props.assignment.standard?.name?.charAt(0)), 1),
                      createVNode("div", { class: "min-w-0 flex-1" }, [
                        createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                          createVNode("span", { class: "px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-300/20 text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-300" }, " Standar Instrumen ")
                        ]),
                        createVNode("h4", { class: "text-xl font-black text-slate-800 dark:text-slate-100 uppercase italic tracking-tight leading-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors" }, toDisplayString(__props.assignment.standard?.name), 1)
                      ])
                    ]),
                    createVNode("div", { class: "relative z-10 grid grid-cols-3 gap-4 border-t border-emerald-100 dark:border-emerald-300/20 pt-6" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1" }, "Unit Audit "),
                        createVNode("p", {
                          class: "text-sm font-bold text-slate-700 dark:text-slate-200 truncate",
                          title: __props.assignment.target_name
                        }, toDisplayString(__props.assignment.target_name?.split(" ")[0]), 9, ["title"])
                      ]),
                      createVNode("div", { class: "text-center border-x border-emerald-50 dark:border-emerald-300/10" }, [
                        createVNode("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1" }, " Indikator "),
                        createVNode("p", { class: "text-xl font-black text-emerald-600 dark:text-emerald-400 italic leading-none" }, toDisplayString(__props.indicators.total), 1)
                      ]),
                      createVNode("div", { class: "text-right" }, [
                        createVNode("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1" }, "Periode "),
                        createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                          createVNode("p", { class: "text-sm font-bold text-slate-800 dark:text-white leading-none" }, toDisplayString(__props.assignment.period?.name), 1)
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-7 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" }, [
                    createVNode("div", { class: "absolute bottom-0 left-0 w-64 h-64 bg-slate-300/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" }),
                    createVNode("div", { class: "relative z-10 mb-6 flex items-center justify-between" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("div", { class: "w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                            })
                          ]))
                        ]),
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-lg font-black uppercase italic tracking-tight text-slate-800 dark:text-white" }, " Arsip Resmi "),
                          createVNode("p", { class: "text-[10px] text-slate-400 font-bold uppercase tracking-wider" }, "Berita Acara & Laporan")
                        ])
                      ]),
                      createVNode("span", { class: "text-[10px] font-bold text-emerald-600 uppercase tracking-widest" }, toDisplayString(__props.groupedDocuments.filter((d) => d.files && d.files.length || d.file).length) + " File Avail ", 1)
                    ]),
                    createVNode("div", { class: "relative z-10 flex gap-4 overflow-x-auto no-scrollbar pb-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.groupedDocuments, (doc) => {
                        return openBlock(), createBlock("div", {
                          key: doc.type,
                          class: "min-w-[140px] flex-1 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col gap-3 transition-all hover:border-emerald-300 hover:shadow-lg group/doc"
                        }, [
                          createVNode("div", { class: "flex items-start justify-between" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-6 h-6 text-slate-300 group-hover/doc:text-emerald-500 transition-colors",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              })
                            ])),
                            doc.files && doc.files.length || doc.file ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("p", {
                              class: "text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 line-clamp-1",
                              title: doc.label
                            }, toDisplayString(doc.label), 9, ["title"]),
                            createVNode("div", { class: "flex flex-col gap-2" }, [
                              !(doc.files?.length || doc.file) && canUploadBA(doc.type) ? (openBlock(), createBlock("button", {
                                key: 0,
                                onClick: ($event) => openDocUpload(doc),
                                class: "px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[9px] font-bold uppercase hover:bg-emerald-600 transition-colors"
                              }, " Unggah ", 8, ["onClick"])) : doc.files && doc.files.length > 0 ? (openBlock(), createBlock("a", {
                                key: 1,
                                href: _ctx.route("files.official.show", doc.files[0].id),
                                target: "_blank",
                                class: "text-[10px] font-bold text-emerald-600 hover:underline flex items-center gap-1"
                              }, " Unduh PDF ↗ ", 8, ["href"])) : doc.file ? (openBlock(), createBlock("a", {
                                key: 2,
                                href: _ctx.route("files.official.show", doc.file.id),
                                target: "_blank",
                                class: "text-[10px] font-bold text-emerald-600 hover:underline flex items-center gap-1"
                              }, " Unduh PDF ↗ ", 8, ["href"])) : (openBlock(), createBlock("span", {
                                key: 3,
                                class: "text-[9px] italic text-slate-300"
                              }, "Menunggu"))
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
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
                        role: "auditor",
                        groupedDocuments: __props.groupedDocuments,
                        onOpenAssessment: openAssessment,
                        onOpenHistory: openHistory,
                        onVerifyRtl: handleVerifyRtl,
                        onOpenUpload: openUpload
                      }, null, 40, ["assignment", "indicators", "groupedDocuments"]))
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(Transition, { name: "modal" }, {
                default: withCtx(() => [
                  showAssessmentModal.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed inset-0 z-[999] flex items-center justify-center p-6"
                  }, [
                    createVNode("div", {
                      class: "fixed inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity",
                      onClick: ($event) => showAssessmentModal.value = false
                    }, null, 8, ["onClick"]),
                    createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in duration-300" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submitAssessment, ["prevent"]),
                        class: "flex flex-col max-h-[90vh]"
                      }, [
                        createVNode("div", { class: "p-12 border-b dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-between items-center" }, [
                          createVNode("div", null, [
                            createVNode("h3", { class: "text-3xl font-black uppercase tracking-tighter italic text-slate-900 dark:text-white leading-none" }, " Evaluasi"),
                            createVNode("p", { class: "text-[10px] font-bold text-emerald-600 font-mono mt-3 uppercase tracking-widest italic" }, toDisplayString(activeIndicator.value?.snapshot_code), 1)
                          ]),
                          createVNode("button", {
                            type: "button",
                            onClick: ($event) => showAssessmentModal.value = false,
                            class: "text-4xl text-slate-300 hover:text-emerald-600 transition-colors"
                          }, "×", 8, ["onClick"])
                        ]),
                        createVNode("div", { class: "p-12 space-y-8 overflow-y-auto custom-scrollbar flex-1" }, [
                          createVNode("p", { class: "text-sm font-bold text-slate-600 dark:text-slate-300 italic leading-relaxed bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-inner border border-slate-50 dark:border-slate-700" }, ' "' + toDisplayString(activeIndicator.value?.snapshot_requirement) + '" ', 1),
                          createVNode("div", { class: "grid grid-cols-2 gap-8" }, [
                            createVNode("div", { class: "space-y-3" }, [
                              createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1" }, "Kategori Temuan"),
                              withDirectives(createVNode("select", {
                                "onUpdate:modelValue": ($event) => unref(assessmentForm).finding_type = $event,
                                class: "w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold shadow-inner focus:ring-2 focus:ring-emerald-500/20",
                                required: ""
                              }, [
                                createVNode("option", {
                                  value: "",
                                  disabled: ""
                                }, "Pilih Status"),
                                createVNode("option", { value: "KS" }, "Kesesuaian (KS)"),
                                createVNode("option", { value: "KTS" }, "Ketidaksesuaian (KTS)"),
                                createVNode("option", { value: "OB" }, "Observasi (OB)")
                              ], 8, ["onUpdate:modelValue"]), [
                                [vModelSelect, unref(assessmentForm).finding_type]
                              ])
                            ]),
                            createVNode("div", { class: "space-y-3" }, [
                              createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1" }, "Skor Penilaian (1-4)"),
                              withDirectives(createVNode("select", {
                                "onUpdate:modelValue": ($event) => unref(assessmentForm).score = $event,
                                class: "w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold shadow-inner focus:ring-2 focus:ring-emerald-500/20",
                                required: ""
                              }, [
                                createVNode("option", {
                                  value: "",
                                  disabled: ""
                                }, "Beri Nilai"),
                                (openBlock(), createBlock(Fragment, null, renderList(4, (n) => {
                                  return createVNode("option", {
                                    key: n,
                                    value: n
                                  }, toDisplayString(n), 9, ["value"]);
                                }), 64))
                              ], 8, ["onUpdate:modelValue"]), [
                                [vModelSelect, unref(assessmentForm).score]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("label", { class: "text-[10px] font-black text-amber-500 uppercase tracking-widest ml-1 italic" }, "Narasi Deskripsi Temuan"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(assessmentForm).auditor_note = $event,
                              rows: "4",
                              class: "w-full px-6 py-5 bg-amber-50/20 dark:bg-amber-900/10 border-2 border-amber-100 dark:border-amber-900/20 rounded-[2rem] text-xs font-bold shadow-sm focus:ring-2 focus:ring-amber-500/20",
                              placeholder: "Jelaskan temuan secara faktual...",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(assessmentForm).auditor_note]
                            ])
                          ]),
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("label", { class: "text-[10px] font-black text-emerald-500 uppercase tracking-widest ml-1 italic" }, "Saran Rekomendasi Strategis"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(assessmentForm).recommendation = $event,
                              rows: "4",
                              class: "w-full px-6 py-5 bg-emerald-50/20 dark:bg-emerald-900/10 border-2 border-emerald-100 dark:border-emerald-900/20 rounded-[2rem] text-xs font-bold shadow-sm focus:ring-2 focus:ring-emerald-500/20",
                              placeholder: "Apa yang harus unit lakukan untuk memperbaiki ini?"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(assessmentForm).recommendation]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "p-12 border-t dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-end gap-6" }, [
                          createVNode("button", {
                            type: "button",
                            onClick: ($event) => showAssessmentModal.value = false,
                            class: "px-10 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors"
                          }, "Batal", 8, ["onClick"]),
                          createVNode("button", {
                            type: "submit",
                            disabled: unref(assessmentForm).processing,
                            class: "px-16 py-4 bg-slate-900 dark:bg-emerald-600 text-white rounded-[2.5rem] font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-50"
                          }, toDisplayString(unref(assessmentForm).processing ? "SINKRONISASI..." : "SIMPAN EVALUASI"), 9, ["disabled"])
                        ])
                      ], 32)
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(Transition, { name: "modal" }, {
                default: withCtx(() => [
                  showDocModal.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed inset-0 z-[999] flex items-center justify-center p-6"
                  }, [
                    createVNode("div", {
                      class: "fixed inset-0 bg-slate-900/70 backdrop-blur-md",
                      onClick: ($event) => showDocModal.value = false
                    }, null, 8, ["onClick"]),
                    createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[3.5rem] shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in duration-300" }, [
                      createVNode("div", { class: "p-12 border-b dark:border-slate-800 text-center bg-slate-50/50 dark:bg-slate-800/20" }, [
                        createVNode("h3", { class: "text-xl font-black uppercase tracking-widest text-slate-900 dark:text-white leading-none" }, " Arsip Resmi"),
                        createVNode("p", { class: "text-[9px] font-bold text-emerald-500 uppercase mt-4 italic tracking-tighter" }, toDisplayString(unref(docForm).label), 1)
                      ]),
                      createVNode("form", {
                        onSubmit: withModifiers(submitDoc, ["prevent"]),
                        class: "p-12 space-y-10"
                      }, [
                        createVNode("input", {
                          type: "file",
                          onInput: ($event) => unref(docForm).file = $event.target.files[0],
                          required: "",
                          class: "w-full text-[10px] text-slate-400 file:mr-4 file:py-3 file:px-8 file:rounded-2xl file:border-0 file:bg-slate-900 file:text-white file:font-black hover:file:bg-emerald-600 transition-all cursor-pointer shadow-inner"
                        }, null, 40, ["onInput"]),
                        createVNode("button", {
                          type: "submit",
                          disabled: unref(docForm).processing,
                          class: "w-full py-6 bg-emerald-600 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl hover:bg-emerald-700 transition-all active:scale-95"
                        }, toDisplayString(unref(docForm).processing ? "SINKRONISASI..." : "UNGGAH DOKUMEN"), 9, ["disabled"])
                      ], 32)
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
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
                          createVNode("p", { class: "text-[10px] font-bold text-emerald-600 font-mono mt-2 uppercase tracking-widest italic leading-none" }, toDisplayString(activeIndicatorCode.value), 1)
                        ]),
                        createVNode("button", {
                          onClick: ($event) => showHistoryModal.value = false,
                          class: "text-4xl text-slate-300 hover:text-emerald-600 transition-colors"
                        }, "×", 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "p-12 overflow-y-auto custom-scrollbar flex-1 bg-white dark:bg-slate-900" }, [
                        isLoadingHistory.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "py-24 text-center"
                        }, [
                          createVNode("div", { class: "inline-block w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" }),
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
                              createVNode("div", { class: "absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-emerald-600 shadow-xl" }),
                              createVNode("div", { class: "flex justify-between items-start mb-2" }, [
                                createVNode("p", { class: "text-[10px] font-black text-emerald-600 uppercase tracking-widest" }, toDisplayString(log.created_at), 1),
                                createVNode("span", { class: "px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[8px] font-black uppercase tracking-widest" }, toDisplayString(log.user?.role), 1)
                              ]),
                              createVNode("p", { class: "text-sm font-black text-slate-900 dark:text-white tracking-tighter" }, toDisplayString(log.user?.name), 1),
                              createVNode("div", { class: "mt-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] border border-slate-50 dark:border-slate-700 shadow-inner" }, [
                                createVNode("p", { class: "text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 italic" }, [
                                  createTextVNode(" Action: "),
                                  createVNode("span", { class: "text-emerald-600" }, toDisplayString(log.action), 1)
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
              }),
              createVNode(_sfc_main$1, {
                show: showUploadModal.value,
                indicator: activeIndicator.value,
                form: unref(uploadForm),
                onClose: ($event) => showUploadModal.value = false,
                onSubmit: submitUpload
              }, null, 8, ["show", "indicator", "form", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auditor/Assignment/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2267f68e"]]);
export {
  Show as default
};

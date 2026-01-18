import { computed, ref, watch, reactive, resolveComponent, mergeProps, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, Fragment, renderList, createCommentVNode, Teleport, Transition, createTextVNode, toDisplayString, withDirectives, vModelText, vModelSelect, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderTeleport, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderVNode } from "vue/server-renderer";
import { router, usePage } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-BXpqpYTS.js";
import debounce from "lodash/debounce.js";
import axios from "axios";
import { S as ScoringView, A as ArchiveView, M as MatrixRtlView, a as StatisticsView, _ as _sfc_main$1 } from "./UploadModal-DmlXYBwj.js";
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
    groupedDocuments: Array,
    indicators: Object,
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
    const isTransitioning = ref(false);
    const stageTransitionError = ref(null);
    const moveStage = (direction) => {
      stageTransitionError.value = null;
      const routeName = direction === "next" ? "admin.assignments.next" : "admin.assignments.previous";
      const msg = direction === "next" ? "Lanjutkan ke tahap berikutnya?" : "Kembali ke tahap sebelumnya?";
      if (confirm(msg)) {
        isTransitioning.value = true;
        router.patch(route(routeName, props.assignment.id), {}, {
          preserveScroll: true,
          onFinish: () => isTransitioning.value = false,
          onError: (errors) => {
            const firstError = Object.values(errors)[0];
            stageTransitionError.value = firstError || "Gagal mengubah tahapan. Pastikan semua persyaratan terpenuhi.";
            usePage().props.flash.toastr = {
              type: "error",
              content: "Gagal mengubah tahapan. Mohon periksa pesan error.",
              position: "top-right"
            };
          }
        });
      }
    };
    const isSearching = ref(false);
    const search = ref(props.filters.search);
    const perPage = ref(props.filters.per_page || 10);
    const updateFilters = debounce(() => {
      isSearching.value = true;
      router.get(
        route("admin.assignments.show", props.assignment.id),
        { search: search.value, per_page: perPage.value },
        { preserveState: true, replace: true, preserveScroll: true, onFinish: () => isSearching.value = false }
      );
    }, 300);
    watch([search, perPage], () => updateFilters());
    const showHistoryModal = ref(false);
    const activeHistory = ref([]);
    const isLoadingHistory = ref(false);
    const activeIndicatorCode = ref("");
    const openHistory = async (item) => {
      activeIndicatorCode.value = item.snapshot_code;
      isLoadingHistory.value = true;
      showHistoryModal.value = true;
      try {
        const response = await axios.get(route("admin.indicators.history", item.id));
        activeHistory.value = response.data.data || response.data;
      } catch (e) {
        console.error("Gagal memuat log riwayat.", e);
        activeHistory.value = [];
      } finally {
        isLoadingHistory.value = false;
      }
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(ssrRenderComponent(AppLayout, mergeProps({
        title: "Audit Unit: " + __props.assignment.target_name
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 transition-all duration-300" data-v-f250c7dc${_scopeId}><div class="space-y-1 group cursor-default" data-v-f250c7dc${_scopeId}><h2 class="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none transition-all group-hover:tracking-tight" data-v-f250c7dc${_scopeId}>${ssrInterpolate(__props.assignment.target_name)}</h2><div class="flex items-center gap-2" data-v-f250c7dc${_scopeId}><span class="relative flex h-2 w-2" data-v-f250c7dc${_scopeId}><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" data-v-f250c7dc${_scopeId}></span><span class="relative inline-flex rounded-full h-2 w-2 bg-rose-300" data-v-f250c7dc${_scopeId}></span></span><p class="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em] italic group-hover:text-rose-300 transition-colors" data-v-f250c7dc${_scopeId}> Pusat Kendali AMI</p></div></div><div class="flex items-center gap-1.5 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] w-full lg:w-auto" data-v-f250c7dc${_scopeId}><button${ssrIncludeBooleanAttr(isTransitioning.value) ? " disabled" : ""} class="group flex-1 lg:flex-none px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all bg-transparent hover:bg-white/80 dark:hover:bg-slate-800 active:scale-95 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 disabled:opacity-30" data-v-f250c7dc${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-arrow-left",
              class: "mr-1.5 transition-transform group-hover:-translate-x-0.5"
            }, null, _parent2, _scopeId));
            _push2(` Kembali </button><button${ssrIncludeBooleanAttr(isTransitioning.value) ? " disabled" : ""} class="group flex-[2] lg:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-300 dark:to-rose-600 text-white shadow-xl shadow-slate-900/20 dark:shadow-rose-600/30 hover:shadow-2xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 border-t border-white/10 dark:border-white/20 active:scale-95 transition-all hover:brightness-110 flex items-center justify-center gap-2 disabled:opacity-50 disabled:grayscale" data-v-f250c7dc${_scopeId}><span class="text-[10px] font-black uppercase tracking-[0.2em]" data-v-f250c7dc${_scopeId}>${ssrInterpolate(isTransitioning.value ? "Memproses..." : "Lanjut Tahap")}</span>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-chevron-right",
              class: "text-[9px] transition-transform group-hover:translate-x-0.5"
            }, null, _parent2, _scopeId));
            _push2(`</button></div></div>`);
            if (stageTransitionError.value) {
              _push2(`<div class="flex justify-end mt-2 animate-in fade-in slide-in-from-top-1" data-v-f250c7dc${_scopeId}><p class="text-[10px] font-black text-rose-300 uppercase tracking-widest bg-rose-50 dark:bg-rose-300/10 px-3 py-1.5 rounded-lg border border-rose-100 dark:border-rose-300/20" data-v-f250c7dc${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-circle-exclamation",
                class: "mr-1"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(stageTransitionError.value)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
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
                    createVNode("p", { class: "text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em] italic group-hover:text-rose-300 transition-colors" }, " Pusat Kendali AMI")
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-1.5 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] w-full lg:w-auto" }, [
                  createVNode("button", {
                    onClick: ($event) => moveStage("prev"),
                    disabled: isTransitioning.value,
                    class: "group flex-1 lg:flex-none px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all bg-transparent hover:bg-white/80 dark:hover:bg-slate-800 active:scale-95 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 disabled:opacity-30"
                  }, [
                    createVNode(_component_icon, {
                      icon: "fa-solid fa-arrow-left",
                      class: "mr-1.5 transition-transform group-hover:-translate-x-0.5"
                    }),
                    createTextVNode(" Kembali ")
                  ], 8, ["onClick", "disabled"]),
                  createVNode("button", {
                    onClick: ($event) => moveStage("next"),
                    disabled: isTransitioning.value,
                    class: "group flex-[2] lg:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-300 dark:to-rose-600 text-white shadow-xl shadow-slate-900/20 dark:shadow-rose-600/30 hover:shadow-2xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 border-t border-white/10 dark:border-white/20 active:scale-95 transition-all hover:brightness-110 flex items-center justify-center gap-2 disabled:opacity-50 disabled:grayscale"
                  }, [
                    createVNode("span", { class: "text-[10px] font-black uppercase tracking-[0.2em]" }, toDisplayString(isTransitioning.value ? "Memproses..." : "Lanjut Tahap"), 1),
                    createVNode(_component_icon, {
                      icon: "fa-solid fa-chevron-right",
                      class: "text-[9px] transition-transform group-hover:translate-x-0.5"
                    })
                  ], 8, ["onClick", "disabled"])
                ])
              ]),
              stageTransitionError.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex justify-end mt-2 animate-in fade-in slide-in-from-top-1"
              }, [
                createVNode("p", { class: "text-[10px] font-black text-rose-300 uppercase tracking-widest bg-rose-50 dark:bg-rose-300/10 px-3 py-1.5 rounded-lg border border-rose-100 dark:border-rose-300/20" }, [
                  createVNode(_component_icon, {
                    icon: "fa-solid fa-circle-exclamation",
                    class: "mr-1"
                  }),
                  createTextVNode(" " + toDisplayString(stageTransitionError.value), 1)
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-f250c7dc${_scopeId}><div class="bg-white dark:bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden" data-v-f250c7dc${_scopeId}><div class="overflow-x-auto no-scrollbar pt-6 pb-6 px-4 md:px-8" data-v-f250c7dc${_scopeId}><div class="flex items-center justify-between min-w-[600px] md:min-w-0 px-2 gap-0" data-v-f250c7dc${_scopeId}><!--[-->`);
            ssrRenderList(__props.stageStats, (s, index) => {
              _push2(`<div class="flex items-center flex-1 last:flex-none relative" data-v-f250c7dc${_scopeId}><div class="flex flex-col items-center gap-2 relative group/step" data-v-f250c7dc${_scopeId}>`);
              ssrRenderTeleport(_push2, (_push3) => {
                if (activeIndex.value !== null) {
                  _push3(`<div style="${ssrRenderStyle({
                    position: "fixed",
                    // Gunakan fixed untuk akurasi teleport yang lebih baik
                    top: `${tooltipPos.top - 12}px`,
                    left: `${tooltipPos.left}px`,
                    transform: "translate(-50%, -100%)"
                  })}" class="z-[10000] pointer-events-none" data-v-f250c7dc${_scopeId}><div class="bg-slate-900/95 dark:bg-rose-600/95 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-xl border border-white/10 relative" data-v-f250c7dc${_scopeId}> Tahap: ${ssrInterpolate(__props.stageStats[activeIndex.value].label)} <div class="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-900/95 dark:border-t-rose-600/95" data-v-f250c7dc${_scopeId}></div></div></div>`);
                } else {
                  _push3(`<!---->`);
                }
              }, "body", false, _parent2);
              _push2(`<div class="${ssrRenderClass([
                "w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-black transition-all duration-300 border-2 z-10 relative overflow-hidden",
                __props.assignment.current_stage === s.stage ? "bg-slate-900 dark:bg-rose-600 text-white border-rose-300 scale-125 shadow-[0_0_20px_rgba(244,63,94,0.3)] ring-4 ring-rose-300/10" : __props.stageStats.findIndex((x) => x.stage === __props.assignment.current_stage) > index ? "bg-emerald-300 text-white border-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.2)]" : "bg-slate-400 dark:bg-slate-800 text-black dark:border-slate-700 hover:border-rose-400/50 hover:text-rose-400"
              ])}" data-v-f250c7dc${_scopeId}>`);
              if (__props.stageStats.findIndex((x) => x.stage === __props.assignment.current_stage) > index) {
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-check",
                  class: "text-xs"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<span class="text-xs italic" data-v-f250c7dc${_scopeId}>${ssrInterpolate(index + 1)}</span>`);
              }
              _push2(`<div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover/step:translate-x-full transition-transform duration-1000" data-v-f250c7dc${_scopeId}></div></div><span class="${ssrRenderClass([
                "hidden md:block text-xs font-black uppercase tracking-tighter text-center max-w-[70px] leading-tight transition-all duration-300 transform group-hover/step:scale-105",
                __props.assignment.current_stage === s.stage ? "text-rose-600 dark:text-rose-400" : "text-slate-400 dark:text-slate-600"
              ])}" data-v-f250c7dc${_scopeId}>${ssrInterpolate(s.label)}</span></div>`);
              if (index < __props.stageStats.length - 1) {
                _push2(`<div class="flex-1 h-[2px] mx-2 bg-slate-100 dark:bg-slate-800 relative md:-mt-6" data-v-f250c7dc${_scopeId}><div class="${ssrRenderClass([
                  "absolute inset-0 bg-rose-300 transition-all duration-1000 shadow-[0_0_8px_rgba(244,63,94,0.4)]",
                  index < __props.stageStats.findIndex((x) => x.stage === __props.assignment.current_stage) ? "w-full" : "w-0"
                ])}" data-v-f250c7dc${_scopeId}></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-8" data-v-f250c7dc${_scopeId}><div class="lg:col-span-5 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-900 dark:to-slate-900 p-8 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-300/20 shadow-xl shadow-indigo-100/50 dark:shadow-none flex flex-col justify-between gap-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-200/50 dark:hover:shadow-indigo-300/10" data-v-f250c7dc${_scopeId}><div class="absolute top-0 right-0 w-64 h-64 bg-indigo-300/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" data-v-f250c7dc${_scopeId}></div><div class="relative z-10 flex items-start gap-6" data-v-f250c7dc${_scopeId}><div class="w-16 h-16 rounded-[1.2rem] bg-white dark:bg-indigo-300/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black text-xl italic shadow-sm border border-indigo-50 dark:border-indigo-300/20 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" data-v-f250c7dc${_scopeId}>${ssrInterpolate(__props.assignment.standard?.name?.charAt(0))}</div><div class="min-w-0 flex-1" data-v-f250c7dc${_scopeId}><div class="flex items-center gap-2 mb-2" data-v-f250c7dc${_scopeId}><span class="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-300/20 text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-300" data-v-f250c7dc${_scopeId}> Standar Instrumen </span></div><h4 class="text-xl font-black text-slate-800 dark:text-slate-100 uppercase italic tracking-tight leading-tight group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors" data-v-f250c7dc${_scopeId}>${ssrInterpolate(__props.assignment.standard?.name)}</h4></div></div><div class="relative z-10 grid grid-cols-3 gap-4 border-t border-indigo-100 dark:border-indigo-300/20 pt-6" data-v-f250c7dc${_scopeId}><div data-v-f250c7dc${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1" data-v-f250c7dc${_scopeId}>Auditor</p><p class="text-sm font-bold text-slate-700 dark:text-slate-200 truncate"${ssrRenderAttr("title", __props.assignment.auditor?.name)} data-v-f250c7dc${_scopeId}>${ssrInterpolate(__props.assignment.auditor?.name?.split(" ")[0])}</p></div><div class="text-center border-x border-indigo-50 dark:border-indigo-300/10" data-v-f250c7dc${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1" data-v-f250c7dc${_scopeId}>Indikator </p><p class="text-xl font-black text-indigo-600 dark:text-indigo-400 italic leading-none" data-v-f250c7dc${_scopeId}>${ssrInterpolate(__props.indicators.total)}</p></div><div class="text-right" data-v-f250c7dc${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1" data-v-f250c7dc${_scopeId}>Rating</p><div class="flex items-center justify-end gap-1" data-v-f250c7dc${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-star",
              class: "text-amber-400 text-xs"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-xl font-black text-slate-800 dark:text-white italic leading-none" data-v-f250c7dc${_scopeId}>${ssrInterpolate(__props.assignment.overall_rating || "-")}</p></div></div></div></div><div class="lg:col-span-7 bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-900 p-8 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-300/20 shadow-xl shadow-emerald-100/50 dark:shadow-none relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-200/50 dark:hover:shadow-emerald-300/10" data-v-f250c7dc${_scopeId}><div class="absolute bottom-0 left-0 w-64 h-64 bg-emerald-300/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" data-v-f250c7dc${_scopeId}></div><div class="relative z-10 mb-6 flex items-center justify-between" data-v-f250c7dc${_scopeId}><div class="flex items-center gap-3" data-v-f250c7dc${_scopeId}><div class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-300/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400" data-v-f250c7dc${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-folder-open" }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-lg font-black uppercase italic tracking-tight text-slate-800 dark:text-emerald-100" data-v-f250c7dc${_scopeId}> Dokumen Resmi </h3></div><span class="text-[10px] font-bold text-emerald-600/60 dark:text-emerald-400/60 uppercase tracking-widest" data-v-f250c7dc${_scopeId}>${ssrInterpolate(__props.groupedDocuments.filter((d) => d.files && d.files.length || d.file).length)} File Tersedia </span></div><div class="relative z-10 flex gap-4 overflow-x-auto no-scrollbar pb-2" data-v-f250c7dc${_scopeId}><!--[-->`);
            ssrRenderList(__props.groupedDocuments, (doc) => {
              _push2(`<div class="min-w-[140px] flex-1 bg-white dark:bg-slate-800/80 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-300/20 flex flex-col gap-3 transition-all hover:border-emerald-300 dark:hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-300/5 group/doc" data-v-f250c7dc${_scopeId}><div class="flex items-start justify-between" data-v-f250c7dc${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-file-contract",
                class: "text-emerald-300 dark:text-emerald-700/50 text-2xl group-hover/doc:text-emerald-300 transition-colors"
              }, null, _parent2, _scopeId));
              if (doc.files && doc.files.length || doc.file) {
                _push2(`<div class="w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.5)]" data-v-f250c7dc${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-f250c7dc${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1 line-clamp-1"${ssrRenderAttr("title", doc.label)} data-v-f250c7dc${_scopeId}>${ssrInterpolate(doc.label)}</p>`);
              if (doc.files && doc.files.length > 0) {
                _push2(`<a${ssrRenderAttr("href", _ctx.route("files.official.show", doc.files[0].id))} target="_blank" class="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline" data-v-f250c7dc${_scopeId}> Unduh PDF `);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-arrow-up-right-from-square",
                  class: "text-[10px]"
                }, null, _parent2, _scopeId));
                _push2(`</a>`);
              } else if (doc.file) {
                _push2(`<a${ssrRenderAttr("href", _ctx.route("files.official.show", doc.file.id))} target="_blank" class="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline" data-v-f250c7dc${_scopeId}> Unduh PDF `);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-arrow-up-right-from-square",
                  class: "text-[10px]"
                }, null, _parent2, _scopeId));
                _push2(`</a>`);
              } else {
                _push2(`<span class="text-xs font-bold text-slate-300 dark:text-slate-600 italic" data-v-f250c7dc${_scopeId}>Belum ada</span>`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div></div></div><div class="max-w-7xl mx-auto flex flex-row gap-3 items-stretch" data-v-f250c7dc${_scopeId}><div class="relative flex-1 group/search" data-v-f250c7dc${_scopeId}><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform group-focus-within/search:scale-110 group-focus-within/search:rotate-12" data-v-f250c7dc${_scopeId}>`);
            if (!isSearching.value) {
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-magnifying-glass",
                class: "text-slate-400 text-xs group-focus-within/search:text-rose-300"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-spinner",
                class: "text-rose-300 animate-spin text-xs"
              }, null, _parent2, _scopeId));
            }
            _push2(`</div><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari kriteria atau temuan..." class="w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-300/50 focus:ring-4 focus:ring-rose-300/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" data-v-f250c7dc${_scopeId}></div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-3 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-300/50 dark:hover:ring-rose-300/50 transition-all duration-300" data-v-f250c7dc${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r dark:border-slate-800 mr-2" data-v-f250c7dc${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 dark:border-slate-800 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-300 dark:hover:text-rose-300 transition-colors duration-300" data-v-f250c7dc${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-f250c7dc${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-f250c7dc${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-f250c7dc${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option></select></div></div><div class="relative min-h-[400px]" data-v-f250c7dc${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(activeView.value), {
              assignment: __props.assignment,
              indicators: __props.indicators,
              role: "admin",
              groupedDocuments: __props.groupedDocuments,
              filters: __props.filters,
              onOpenHistory: openHistory,
              onOpenAssessment: _ctx.openAssessment,
              onOpenUpload: _ctx.openUpload
            }, null), _parent2, _scopeId);
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              show: _ctx.showUploadModal,
              indicator: _ctx.activeIndicator,
              form: _ctx.uploadForm,
              onClose: ($event) => _ctx.showUploadModal = false,
              onSubmit: _ctx.submitUpload
            }, null, _parent2, _scopeId));
            _push2(``);
            if (_ctx.showAssessmentModal) {
              _push2(`<div class="fixed inset-0 z-[999] flex items-center justify-center p-6" data-v-f250c7dc${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity" data-v-f250c7dc${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in duration-300" data-v-f250c7dc${_scopeId}><form class="flex flex-col max-h-[90vh]" data-v-f250c7dc${_scopeId}><div class="p-12 border-b dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-between items-center" data-v-f250c7dc${_scopeId}><div data-v-f250c7dc${_scopeId}><h3 class="text-3xl font-black uppercase tracking-tighter italic text-slate-900 dark:text-white leading-none" data-v-f250c7dc${_scopeId}> Evaluasi</h3><p class="text-[10px] font-bold text-emerald-600 font-mono mt-3 uppercase tracking-widest italic" data-v-f250c7dc${_scopeId}>${ssrInterpolate(_ctx.activeIndicator?.snapshot_code)}</p></div><button type="button" class="text-4xl text-slate-300 hover:text-emerald-600 transition-colors" data-v-f250c7dc${_scopeId}>×</button></div><div class="p-12 space-y-8 overflow-y-auto custom-scrollbar flex-1" data-v-f250c7dc${_scopeId}><p class="text-sm font-bold text-slate-600 dark:text-slate-300 italic leading-relaxed bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-inner border border-slate-50 dark:border-slate-700" data-v-f250c7dc${_scopeId}> &quot;${ssrInterpolate(_ctx.activeIndicator?.snapshot_requirement)}&quot; </p><div class="grid grid-cols-2 gap-8" data-v-f250c7dc${_scopeId}><div class="space-y-3" data-v-f250c7dc${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1" data-v-f250c7dc${_scopeId}>Kategori Temuan</label><select class="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold shadow-inner focus:ring-2 focus:ring-emerald-500/20" required data-v-f250c7dc${_scopeId}><option value="" disabled data-v-f250c7dc${ssrIncludeBooleanAttr(Array.isArray(_ctx.assessmentForm.finding_type) ? ssrLooseContain(_ctx.assessmentForm.finding_type, "") : ssrLooseEqual(_ctx.assessmentForm.finding_type, "")) ? " selected" : ""}${_scopeId}>Pilih Status</option><option value="KS" data-v-f250c7dc${ssrIncludeBooleanAttr(Array.isArray(_ctx.assessmentForm.finding_type) ? ssrLooseContain(_ctx.assessmentForm.finding_type, "KS") : ssrLooseEqual(_ctx.assessmentForm.finding_type, "KS")) ? " selected" : ""}${_scopeId}>Kesesuaian (KS)</option><option value="KTS" data-v-f250c7dc${ssrIncludeBooleanAttr(Array.isArray(_ctx.assessmentForm.finding_type) ? ssrLooseContain(_ctx.assessmentForm.finding_type, "KTS") : ssrLooseEqual(_ctx.assessmentForm.finding_type, "KTS")) ? " selected" : ""}${_scopeId}>Ketidaksesuaian (KTS)</option><option value="OB" data-v-f250c7dc${ssrIncludeBooleanAttr(Array.isArray(_ctx.assessmentForm.finding_type) ? ssrLooseContain(_ctx.assessmentForm.finding_type, "OB") : ssrLooseEqual(_ctx.assessmentForm.finding_type, "OB")) ? " selected" : ""}${_scopeId}>Observasi (OB)</option></select></div><div class="space-y-3" data-v-f250c7dc${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1" data-v-f250c7dc${_scopeId}>Skor Penilaian (1-4)</label><select class="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold shadow-inner focus:ring-2 focus:ring-emerald-500/20" required data-v-f250c7dc${_scopeId}><option value="" disabled data-v-f250c7dc${ssrIncludeBooleanAttr(Array.isArray(_ctx.assessmentForm.score) ? ssrLooseContain(_ctx.assessmentForm.score, "") : ssrLooseEqual(_ctx.assessmentForm.score, "")) ? " selected" : ""}${_scopeId}>Beri Nilai</option><!--[-->`);
              ssrRenderList(4, (n) => {
                _push2(`<option${ssrRenderAttr("value", n)} data-v-f250c7dc${ssrIncludeBooleanAttr(Array.isArray(_ctx.assessmentForm.score) ? ssrLooseContain(_ctx.assessmentForm.score, n) : ssrLooseEqual(_ctx.assessmentForm.score, n)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(n)}</option>`);
              });
              _push2(`<!--]--></select></div></div><div class="space-y-3" data-v-f250c7dc${_scopeId}><label class="text-[10px] font-black text-amber-500 uppercase tracking-widest ml-1 italic" data-v-f250c7dc${_scopeId}>Narasi Deskripsi Temuan</label><textarea rows="4" class="w-full px-6 py-5 bg-amber-50/20 dark:bg-amber-900/10 border-2 border-amber-100 dark:border-amber-900/20 rounded-[2rem] text-xs font-bold shadow-sm focus:ring-2 focus:ring-amber-500/20" placeholder="Jelaskan temuan secara faktual..." required data-v-f250c7dc${_scopeId}>${ssrInterpolate(_ctx.assessmentForm.auditor_note)}</textarea></div><div class="space-y-3" data-v-f250c7dc${_scopeId}><label class="text-[10px] font-black text-emerald-500 uppercase tracking-widest ml-1 italic" data-v-f250c7dc${_scopeId}>Saran Rekomendasi Strategis</label><textarea rows="4" class="w-full px-6 py-5 bg-emerald-50/20 dark:bg-emerald-900/10 border-2 border-emerald-100 dark:border-emerald-900/20 rounded-[2rem] text-xs font-bold shadow-sm focus:ring-2 focus:ring-emerald-500/20" placeholder="Apa yang harus unit lakukan untuk memperbaiki ini?" data-v-f250c7dc${_scopeId}>${ssrInterpolate(_ctx.assessmentForm.recommendation)}</textarea></div></div><div class="p-12 border-t dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-end gap-6" data-v-f250c7dc${_scopeId}><button type="button" class="px-10 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors" data-v-f250c7dc${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(_ctx.assessmentForm.processing) ? " disabled" : ""} class="px-16 py-4 bg-slate-900 dark:bg-emerald-600 text-white rounded-[2.5rem] font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-50" data-v-f250c7dc${_scopeId}>${ssrInterpolate(_ctx.assessmentForm.processing ? "SINKRONISASI..." : "SIMPAN EVALUASI")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(``);
            if (showHistoryModal.value) {
              _push2(`<div class="fixed inset-0 z-[999] flex items-center justify-center p-4" data-v-f250c7dc${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" data-v-f250c7dc${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[2rem] shadow-2xl overflow-hidden border border-white/5 flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-200" data-v-f250c7dc${_scopeId}><div class="p-6 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/30" data-v-f250c7dc${_scopeId}><div data-v-f250c7dc${_scopeId}><h3 class="text-lg font-black uppercase text-slate-900 dark:text-white italic tracking-tighter" data-v-f250c7dc${_scopeId}> Log Riwayat</h3><p class="text-xs font-bold text-rose-600 font-mono tracking-widest uppercase" data-v-f250c7dc${_scopeId}>${ssrInterpolate(activeIndicatorCode.value)}</p></div><button class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-300 hover:text-rose-600 transition-all font-bold" data-v-f250c7dc${_scopeId}>×</button></div><div class="p-6 overflow-y-auto custom-scrollbar flex-1 bg-white dark:bg-slate-900" data-v-f250c7dc${_scopeId}>`);
              if (isLoadingHistory.value) {
                _push2(`<div class="py-12 text-center" data-v-f250c7dc${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-spinner",
                  class: "text-2xl text-rose-300 animate-spin mb-2"
                }, null, _parent2, _scopeId));
                _push2(`<p class="text-2xs font-black text-slate-400 uppercase tracking-widest italic" data-v-f250c7dc${_scopeId}> Menyinkronkan Data...</p></div>`);
              } else if (activeHistory.value.length > 0) {
                _push2(`<div class="space-y-8" data-v-f250c7dc${_scopeId}><!--[-->`);
                ssrRenderList(activeHistory.value, (log) => {
                  _push2(`<div class="relative pl-8 border-l border-slate-100 dark:border-slate-800" data-v-f250c7dc${_scopeId}><div class="absolute -left-[4.5px] top-0 w-2 h-2 rounded-full bg-rose-600" data-v-f250c7dc${_scopeId}></div><div class="flex justify-between items-center mb-1" data-v-f250c7dc${_scopeId}><p class="text-2xs font-black text-rose-600 uppercase tracking-widest italic" data-v-f250c7dc${_scopeId}>${ssrInterpolate(log.created_at)}</p><span class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-2xs font-black uppercase text-slate-300" data-v-f250c7dc${_scopeId}>${ssrInterpolate(log.user?.role)}</span></div><p class="text-xs font-black text-slate-900 dark:text-white italic mb-2 leading-none" data-v-f250c7dc${_scopeId}>${ssrInterpolate(log.user?.name || "SISTEM")}</p><div class="p-4 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-100 dark:border-slate-700 shadow-inner" data-v-f250c7dc${_scopeId}><div class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic" data-v-f250c7dc${_scopeId}>${log.formatted_changes ?? ""}</div></div></div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<div class="py-12 text-center flex flex-col items-center justify-center opacity-50" data-v-f250c7dc${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-clock-rotate-left",
                  class: "text-3xl text-slate-300 dark:text-slate-600 mb-3"
                }, null, _parent2, _scopeId));
                _push2(`<p class="text-2xs font-black text-slate-400 dark:text-slate-300 uppercase tracking-widest italic" data-v-f250c7dc${_scopeId}> Belum ada riwayat perubahan </p></div>`);
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
                                  activeIndex.value !== null ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    style: {
                                      position: "fixed",
                                      // Gunakan fixed untuk akurasi teleport yang lebih baik
                                      top: `${tooltipPos.top - 12}px`,
                                      left: `${tooltipPos.left}px`,
                                      transform: "translate(-50%, -100%)"
                                    },
                                    class: "z-[10000] pointer-events-none"
                                  }, [
                                    createVNode("div", { class: "bg-slate-900/95 dark:bg-rose-600/95 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-xl border border-white/10 relative" }, [
                                      createTextVNode(" Tahap: " + toDisplayString(__props.stageStats[activeIndex.value].label) + " ", 1),
                                      createVNode("div", { class: "absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-900/95 dark:border-t-rose-600/95" })
                                    ])
                                  ], 4)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ])),
                            createVNode("div", {
                              onMouseenter: ($event) => handleMouseEnter($event, index),
                              onMouseleave: handleMouseLeave,
                              class: [
                                "w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-black transition-all duration-300 border-2 z-10 relative overflow-hidden",
                                __props.assignment.current_stage === s.stage ? "bg-slate-900 dark:bg-rose-600 text-white border-rose-300 scale-125 shadow-[0_0_20px_rgba(244,63,94,0.3)] ring-4 ring-rose-300/10" : __props.stageStats.findIndex((x) => x.stage === __props.assignment.current_stage) > index ? "bg-emerald-300 text-white border-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.2)]" : "bg-slate-400 dark:bg-slate-800 text-black dark:border-slate-700 hover:border-rose-400/50 hover:text-rose-400"
                              ]
                            }, [
                              __props.stageStats.findIndex((x) => x.stage === __props.assignment.current_stage) > index ? (openBlock(), createBlock(_component_icon, {
                                key: 0,
                                icon: "fa-solid fa-check",
                                class: "text-xs"
                              })) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-xs italic"
                              }, toDisplayString(index + 1), 1)),
                              createVNode("div", { class: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover/step:translate-x-full transition-transform duration-1000" })
                            ], 42, ["onMouseenter"]),
                            createVNode("span", {
                              class: [
                                "hidden md:block text-xs font-black uppercase tracking-tighter text-center max-w-[70px] leading-tight transition-all duration-300 transform group-hover/step:scale-105",
                                __props.assignment.current_stage === s.stage ? "text-rose-600 dark:text-rose-400" : "text-slate-400 dark:text-slate-600"
                              ]
                            }, toDisplayString(s.label), 3)
                          ]),
                          index < __props.stageStats.length - 1 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex-1 h-[2px] mx-2 bg-slate-100 dark:bg-slate-800 relative md:-mt-6"
                          }, [
                            createVNode("div", {
                              class: [
                                "absolute inset-0 bg-rose-300 transition-all duration-1000 shadow-[0_0_8px_rgba(244,63,94,0.4)]",
                                index < __props.stageStats.findIndex((x) => x.stage === __props.assignment.current_stage) ? "w-full" : "w-0"
                              ]
                            }, null, 2)
                          ])) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-8" }, [
                  createVNode("div", { class: "lg:col-span-5 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-900 dark:to-slate-900 p-8 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-300/20 shadow-xl shadow-indigo-100/50 dark:shadow-none flex flex-col justify-between gap-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-200/50 dark:hover:shadow-indigo-300/10" }, [
                    createVNode("div", { class: "absolute top-0 right-0 w-64 h-64 bg-indigo-300/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" }),
                    createVNode("div", { class: "relative z-10 flex items-start gap-6" }, [
                      createVNode("div", { class: "w-16 h-16 rounded-[1.2rem] bg-white dark:bg-indigo-300/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black text-xl italic shadow-sm border border-indigo-50 dark:border-indigo-300/20 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" }, toDisplayString(__props.assignment.standard?.name?.charAt(0)), 1),
                      createVNode("div", { class: "min-w-0 flex-1" }, [
                        createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                          createVNode("span", { class: "px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-300/20 text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-300" }, " Standar Instrumen ")
                        ]),
                        createVNode("h4", { class: "text-xl font-black text-slate-800 dark:text-slate-100 uppercase italic tracking-tight leading-tight group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors" }, toDisplayString(__props.assignment.standard?.name), 1)
                      ])
                    ]),
                    createVNode("div", { class: "relative z-10 grid grid-cols-3 gap-4 border-t border-indigo-100 dark:border-indigo-300/20 pt-6" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1" }, "Auditor"),
                        createVNode("p", {
                          class: "text-sm font-bold text-slate-700 dark:text-slate-200 truncate",
                          title: __props.assignment.auditor?.name
                        }, toDisplayString(__props.assignment.auditor?.name?.split(" ")[0]), 9, ["title"])
                      ]),
                      createVNode("div", { class: "text-center border-x border-indigo-50 dark:border-indigo-300/10" }, [
                        createVNode("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1" }, "Indikator "),
                        createVNode("p", { class: "text-xl font-black text-indigo-600 dark:text-indigo-400 italic leading-none" }, toDisplayString(__props.indicators.total), 1)
                      ]),
                      createVNode("div", { class: "text-right" }, [
                        createVNode("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1" }, "Rating"),
                        createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                          createVNode(_component_icon, {
                            icon: "fa-solid fa-star",
                            class: "text-amber-400 text-xs"
                          }),
                          createVNode("p", { class: "text-xl font-black text-slate-800 dark:text-white italic leading-none" }, toDisplayString(__props.assignment.overall_rating || "-"), 1)
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-7 bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-900 p-8 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-300/20 shadow-xl shadow-emerald-100/50 dark:shadow-none relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-200/50 dark:hover:shadow-emerald-300/10" }, [
                    createVNode("div", { class: "absolute bottom-0 left-0 w-64 h-64 bg-emerald-300/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" }),
                    createVNode("div", { class: "relative z-10 mb-6 flex items-center justify-between" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("div", { class: "w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-300/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400" }, [
                          createVNode(_component_icon, { icon: "fa-solid fa-folder-open" })
                        ]),
                        createVNode("h3", { class: "text-lg font-black uppercase italic tracking-tight text-slate-800 dark:text-emerald-100" }, " Dokumen Resmi ")
                      ]),
                      createVNode("span", { class: "text-[10px] font-bold text-emerald-600/60 dark:text-emerald-400/60 uppercase tracking-widest" }, toDisplayString(__props.groupedDocuments.filter((d) => d.files && d.files.length || d.file).length) + " File Tersedia ", 1)
                    ]),
                    createVNode("div", { class: "relative z-10 flex gap-4 overflow-x-auto no-scrollbar pb-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.groupedDocuments, (doc) => {
                        return openBlock(), createBlock("div", {
                          key: doc.type,
                          class: "min-w-[140px] flex-1 bg-white dark:bg-slate-800/80 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-300/20 flex flex-col gap-3 transition-all hover:border-emerald-300 dark:hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-300/5 group/doc"
                        }, [
                          createVNode("div", { class: "flex items-start justify-between" }, [
                            createVNode(_component_icon, {
                              icon: "fa-solid fa-file-contract",
                              class: "text-emerald-300 dark:text-emerald-700/50 text-2xl group-hover/doc:text-emerald-300 transition-colors"
                            }),
                            doc.files && doc.files.length || doc.file ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("p", {
                              class: "text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1 line-clamp-1",
                              title: doc.label
                            }, toDisplayString(doc.label), 9, ["title"]),
                            doc.files && doc.files.length > 0 ? (openBlock(), createBlock("a", {
                              key: 0,
                              href: _ctx.route("files.official.show", doc.files[0].id),
                              target: "_blank",
                              class: "inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                            }, [
                              createTextVNode(" Unduh PDF "),
                              createVNode(_component_icon, {
                                icon: "fa-solid fa-arrow-up-right-from-square",
                                class: "text-[10px]"
                              })
                            ], 8, ["href"])) : doc.file ? (openBlock(), createBlock("a", {
                              key: 1,
                              href: _ctx.route("files.official.show", doc.file.id),
                              target: "_blank",
                              class: "inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                            }, [
                              createTextVNode(" Unduh PDF "),
                              createVNode(_component_icon, {
                                icon: "fa-solid fa-arrow-up-right-from-square",
                                class: "text-[10px]"
                              })
                            ], 8, ["href"])) : (openBlock(), createBlock("span", {
                              key: 2,
                              class: "text-xs font-bold text-slate-300 dark:text-slate-600 italic"
                            }, "Belum ada"))
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto flex flex-row gap-3 items-stretch" }, [
                  createVNode("div", { class: "relative flex-1 group/search" }, [
                    createVNode("div", { class: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform group-focus-within/search:scale-110 group-focus-within/search:rotate-12" }, [
                      !isSearching.value ? (openBlock(), createBlock(_component_icon, {
                        key: 0,
                        icon: "fa-solid fa-magnifying-glass",
                        class: "text-slate-400 text-xs group-focus-within/search:text-rose-300"
                      })) : (openBlock(), createBlock(_component_icon, {
                        key: 1,
                        icon: "fa-solid fa-spinner",
                        class: "text-rose-300 animate-spin text-xs"
                      }))
                    ]),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      type: "text",
                      placeholder: "Cari kriteria atau temuan...",
                      class: "w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-300/50 focus:ring-4 focus:ring-rose-300/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, search.value]
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center bg-white dark:bg-slate-900 rounded-2xl px-3 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-300/50 dark:hover:ring-rose-300/50 transition-all duration-300" }, [
                    createVNode("span", { class: "hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r dark:border-slate-800 mr-2" }, "Tampilkan"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => perPage.value = $event,
                      class: "bg-transparent dark:bg-slate-900 dark:border-slate-800 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-300 dark:hover:text-rose-300 transition-colors duration-300"
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
                        role: "admin",
                        groupedDocuments: __props.groupedDocuments,
                        filters: __props.filters,
                        onOpenHistory: openHistory,
                        onOpenAssessment: _ctx.openAssessment,
                        onOpenUpload: _ctx.openUpload
                      }, null, 40, ["assignment", "indicators", "groupedDocuments", "filters", "onOpenAssessment", "onOpenUpload"]))
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(_sfc_main$1, {
                show: _ctx.showUploadModal,
                indicator: _ctx.activeIndicator,
                form: _ctx.uploadForm,
                onClose: ($event) => _ctx.showUploadModal = false,
                onSubmit: _ctx.submitUpload
              }, null, 8, ["show", "indicator", "form", "onClose", "onSubmit"]),
              createVNode(Transition, { name: "modal" }, {
                default: withCtx(() => [
                  _ctx.showAssessmentModal ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed inset-0 z-[999] flex items-center justify-center p-6"
                  }, [
                    createVNode("div", {
                      class: "fixed inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity",
                      onClick: ($event) => _ctx.showAssessmentModal = false
                    }, null, 8, ["onClick"]),
                    createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in duration-300" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(_ctx.submitAssessment, ["prevent"]),
                        class: "flex flex-col max-h-[90vh]"
                      }, [
                        createVNode("div", { class: "p-12 border-b dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-between items-center" }, [
                          createVNode("div", null, [
                            createVNode("h3", { class: "text-3xl font-black uppercase tracking-tighter italic text-slate-900 dark:text-white leading-none" }, " Evaluasi"),
                            createVNode("p", { class: "text-[10px] font-bold text-emerald-600 font-mono mt-3 uppercase tracking-widest italic" }, toDisplayString(_ctx.activeIndicator?.snapshot_code), 1)
                          ]),
                          createVNode("button", {
                            type: "button",
                            onClick: ($event) => _ctx.showAssessmentModal = false,
                            class: "text-4xl text-slate-300 hover:text-emerald-600 transition-colors"
                          }, "×", 8, ["onClick"])
                        ]),
                        createVNode("div", { class: "p-12 space-y-8 overflow-y-auto custom-scrollbar flex-1" }, [
                          createVNode("p", { class: "text-sm font-bold text-slate-600 dark:text-slate-300 italic leading-relaxed bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-inner border border-slate-50 dark:border-slate-700" }, ' "' + toDisplayString(_ctx.activeIndicator?.snapshot_requirement) + '" ', 1),
                          createVNode("div", { class: "grid grid-cols-2 gap-8" }, [
                            createVNode("div", { class: "space-y-3" }, [
                              createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1" }, "Kategori Temuan"),
                              withDirectives(createVNode("select", {
                                "onUpdate:modelValue": ($event) => _ctx.assessmentForm.finding_type = $event,
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
                                [vModelSelect, _ctx.assessmentForm.finding_type]
                              ])
                            ]),
                            createVNode("div", { class: "space-y-3" }, [
                              createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1" }, "Skor Penilaian (1-4)"),
                              withDirectives(createVNode("select", {
                                "onUpdate:modelValue": ($event) => _ctx.assessmentForm.score = $event,
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
                                [vModelSelect, _ctx.assessmentForm.score]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("label", { class: "text-[10px] font-black text-amber-500 uppercase tracking-widest ml-1 italic" }, "Narasi Deskripsi Temuan"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => _ctx.assessmentForm.auditor_note = $event,
                              rows: "4",
                              class: "w-full px-6 py-5 bg-amber-50/20 dark:bg-amber-900/10 border-2 border-amber-100 dark:border-amber-900/20 rounded-[2rem] text-xs font-bold shadow-sm focus:ring-2 focus:ring-amber-500/20",
                              placeholder: "Jelaskan temuan secara faktual...",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, _ctx.assessmentForm.auditor_note]
                            ])
                          ]),
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("label", { class: "text-[10px] font-black text-emerald-500 uppercase tracking-widest ml-1 italic" }, "Saran Rekomendasi Strategis"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => _ctx.assessmentForm.recommendation = $event,
                              rows: "4",
                              class: "w-full px-6 py-5 bg-emerald-50/20 dark:bg-emerald-900/10 border-2 border-emerald-100 dark:border-emerald-900/20 rounded-[2rem] text-xs font-bold shadow-sm focus:ring-2 focus:ring-emerald-500/20",
                              placeholder: "Apa yang harus unit lakukan untuk memperbaiki ini?"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, _ctx.assessmentForm.recommendation]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "p-12 border-t dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-end gap-6" }, [
                          createVNode("button", {
                            type: "button",
                            onClick: ($event) => _ctx.showAssessmentModal = false,
                            class: "px-10 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors"
                          }, "Batal", 8, ["onClick"]),
                          createVNode("button", {
                            type: "submit",
                            disabled: _ctx.assessmentForm.processing,
                            class: "px-16 py-4 bg-slate-900 dark:bg-emerald-600 text-white rounded-[2.5rem] font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-50"
                          }, toDisplayString(_ctx.assessmentForm.processing ? "SINKRONISASI..." : "SIMPAN EVALUASI"), 9, ["disabled"])
                        ])
                      ], 40, ["onSubmit"])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(Transition, { name: "modal" }, {
                default: withCtx(() => [
                  showHistoryModal.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed inset-0 z-[999] flex items-center justify-center p-4"
                  }, [
                    createVNode("div", {
                      class: "fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity",
                      onClick: ($event) => showHistoryModal.value = false
                    }, null, 8, ["onClick"]),
                    createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[2rem] shadow-2xl overflow-hidden border border-white/5 flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-200" }, [
                      createVNode("div", { class: "p-6 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/30" }, [
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-lg font-black uppercase text-slate-900 dark:text-white italic tracking-tighter" }, " Log Riwayat"),
                          createVNode("p", { class: "text-xs font-bold text-rose-600 font-mono tracking-widest uppercase" }, toDisplayString(activeIndicatorCode.value), 1)
                        ]),
                        createVNode("button", {
                          onClick: ($event) => showHistoryModal.value = false,
                          class: "w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-300 hover:text-rose-600 transition-all font-bold"
                        }, "×", 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "p-6 overflow-y-auto custom-scrollbar flex-1 bg-white dark:bg-slate-900" }, [
                        isLoadingHistory.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "py-12 text-center"
                        }, [
                          createVNode(_component_icon, {
                            icon: "fa-solid fa-spinner",
                            class: "text-2xl text-rose-300 animate-spin mb-2"
                          }),
                          createVNode("p", { class: "text-2xs font-black text-slate-400 uppercase tracking-widest italic" }, " Menyinkronkan Data...")
                        ])) : activeHistory.value.length > 0 ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "space-y-8"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(activeHistory.value, (log) => {
                            return openBlock(), createBlock("div", {
                              key: log.id,
                              class: "relative pl-8 border-l border-slate-100 dark:border-slate-800"
                            }, [
                              createVNode("div", { class: "absolute -left-[4.5px] top-0 w-2 h-2 rounded-full bg-rose-600" }),
                              createVNode("div", { class: "flex justify-between items-center mb-1" }, [
                                createVNode("p", { class: "text-2xs font-black text-rose-600 uppercase tracking-widest italic" }, toDisplayString(log.created_at), 1),
                                createVNode("span", { class: "px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-2xs font-black uppercase text-slate-300" }, toDisplayString(log.user?.role), 1)
                              ]),
                              createVNode("p", { class: "text-xs font-black text-slate-900 dark:text-white italic mb-2 leading-none" }, toDisplayString(log.user?.name || "SISTEM"), 1),
                              createVNode("div", { class: "p-4 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-100 dark:border-slate-700 shadow-inner" }, [
                                createVNode("div", {
                                  class: "text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic",
                                  innerHTML: log.formatted_changes
                                }, null, 8, ["innerHTML"])
                              ])
                            ]);
                          }), 128))
                        ])) : (openBlock(), createBlock("div", {
                          key: 2,
                          class: "py-12 text-center flex flex-col items-center justify-center opacity-50"
                        }, [
                          createVNode(_component_icon, {
                            icon: "fa-solid fa-clock-rotate-left",
                            class: "text-3xl text-slate-300 dark:text-slate-600 mb-3"
                          }),
                          createVNode("p", { class: "text-2xs font-black text-slate-400 dark:text-slate-300 uppercase tracking-widest italic" }, " Belum ada riwayat perubahan ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Assignment/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f250c7dc"]]);
export {
  Show as default
};

import { ref, watch, resolveComponent, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, withDirectives, vModelText, vModelSelect, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { router, Link } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-CbW7EXnn.js";
import AssignmentFormModal from "./AssignmentFormModal-Bcz_OwJI.js";
import debounce from "lodash/debounce.js";
import { T as TModal } from "./TModal-BluvIe0P.js";
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
import "./TInputSelect-BY60CBa7.js";
import "./TInputText-CyR_XUuU.js";
import "vue3-keypress";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    assignments: Object,
    periods: Array,
    standards: Array,
    auditors: Array,
    prodis: Array,
    faculties: Array,
    filters: Object,
    stageBreakdown: Array
  },
  setup(__props) {
    const props = __props;
    const isSearching = ref(false);
    const search = ref(props.filters.search || "");
    const perPage = ref(props.filters.per_page || 10);
    const sortField = ref(props.filters.sort_field || "created_at");
    const sortDirection = ref(props.filters.direction || "desc");
    const reloadData = debounce(() => {
      isSearching.value = true;
      router.get(
        route("admin.assignments.index"),
        {
          search: search.value,
          per_page: perPage.value,
          sort_field: sortField.value,
          direction: sortDirection.value
        },
        {
          preserveState: true,
          replace: true,
          onFinish: () => isSearching.value = false
        }
      );
    }, 500);
    const handleSort = (field) => {
      if (sortField.value === field) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
      } else {
        sortField.value = field;
        sortDirection.value = "asc";
      }
      reloadData();
    };
    watch(perPage, () => reloadData());
    watch(search, () => reloadData());
    const showModal = ref(false);
    const closeModal = () => {
      showModal.value = false;
    };
    const getAuditorProgress = (item) => {
      if (!item.indicators_count || item.indicators_count === 0) return 0;
      return Math.round((item.scored_indicators_count || 0) / item.indicators_count * 100);
    };
    const getAuditeeProgress = (item) => {
      if (!item.indicators_count || item.indicators_count === 0) return 0;
      return Math.round((item.filled_indicators_count || 0) / item.indicators_count * 100);
    };
    const getStageConfig = (stage) => {
      const configs = {
        "doc_audit": { label: "Audit Dokumen", color: "text-blue-600 bg-blue-50 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20" },
        "field_audit": { label: "Audit Lapangan", color: "text-purple-600 bg-purple-50 dark:bg-purple-500/10 border-purple-100 dark:border-purple-500/20" },
        "finding": { label: "Temuan", color: "text-amber-600 bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20" },
        "reporting": { label: "Pelaporan", color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20" },
        "rtm_rtl": { label: "RTM & RTL", color: "text-rose-600 bg-rose-50 dark:bg-rose-500/10 border-rose-100 dark:border-rose-500/20" },
        "finished": { label: "Selesai", color: "text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700" }
      };
      return configs[stage] || { label: stage.toUpperCase(), color: "text-slate-400 bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700" };
    };
    const showDeleteModal = ref(false);
    const itemToDelete = ref(null);
    const confirmDeleteAction = (id) => {
      itemToDelete.value = id;
      showDeleteModal.value = true;
    };
    const executeDelete = () => {
      if (itemToDelete.value) {
        router.delete(route("admin.assignments.destroy", itemToDelete.value), {
          preserveScroll: true,
          onSuccess: () => {
            showDeleteModal.value = false;
            itemToDelete.value = null;
          }
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Penugasan Audit" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dashboard Penugasan`);
          } else {
            return [
              createTextVNode("Dashboard Penugasan")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Manajemen pusat siklus AMI dan pemantauan real-time unit kerja`);
          } else {
            return [
              createTextVNode("Manajemen pusat siklus AMI dan pemantauan real-time unit kerja")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.stageBreakdown) {
              _push2(`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10" data-v-28f56572${_scopeId}><!--[-->`);
              ssrRenderList(__props.stageBreakdown, (stat) => {
                _push2(`<div class="bg-white dark:bg-slate-900 backdrop-blur-3xl p-5 rounded-[2rem] border border-white/40 dark:border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 group relative overflow-hidden" data-v-28f56572${_scopeId}><p class="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] leading-none mb-3 group-hover:text-rose-500 transition-colors" data-v-28f56572${_scopeId}>${ssrInterpolate(stat.label)}</p><div class="flex items-end justify-between relative z-10" data-v-28f56572${_scopeId}><p class="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tighter italic" data-v-28f56572${_scopeId}>${ssrInterpolate(stat.total)}</p><div class="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)] animate-pulse mb-1.5" data-v-28f56572${_scopeId}></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="space-y-6" data-v-28f56572${_scopeId}><div class="flex flex-col lg:flex-row justify-between items-center gap-6" data-v-28f56572${_scopeId}><div class="flex items-stretch gap-3 w-full max-w-2xl" data-v-28f56572${_scopeId}><div class="relative flex-1 group" data-v-28f56572${_scopeId}><span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" data-v-28f56572${_scopeId}>`);
            if (!isSearching.value) {
              _push2(`<svg class="h-4 w-4 text-slate-400 group-focus-within:text-rose-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-28f56572${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-28f56572${_scopeId}></path></svg>`);
            } else {
              _push2(`<div class="h-4 w-4 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" data-v-28f56572${_scopeId}></div>`);
            }
            _push2(`</span><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari unit, auditor, atau standar..." class="w-full pl-11 pr-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" data-v-28f56572${_scopeId}>`);
            if (search.value) {
              _push2(`<button class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-rose-500 transition-colors" data-v-28f56572${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-times-circle",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300" data-v-28f56572${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2" data-v-28f56572${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none" data-v-28f56572${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-28f56572${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-28f56572${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-28f56572${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option><option${ssrRenderAttr("value", 100)} data-v-28f56572${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 100) : ssrLooseEqual(perPage.value, 100)) ? " selected" : ""}${_scopeId}>100</option></select></div></div><button class="group w-full lg:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-2xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10" data-v-28f56572${_scopeId}><span class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" data-v-28f56572${_scopeId}>+</span> Inisialisasi AMI Baru </button></div><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" data-v-28f56572${_scopeId}><div class="overflow-x-auto custom-scrollbar" data-v-28f56572${_scopeId}><table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full" data-v-28f56572${_scopeId}><thead data-v-28f56572${_scopeId}><tr class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" data-v-28f56572${_scopeId}><th class="p-6 md:p-8" data-v-28f56572${_scopeId}> No </th><th class="p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-28f56572${_scopeId}><div class="flex items-center gap-2" data-v-28f56572${_scopeId}> Unit Kerja &amp; Kategori <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-28f56572${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "assignable_name" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "assignable_name" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-28f56572${_scopeId}><div class="flex items-center justify-center gap-2" data-v-28f56572${_scopeId}> Metadata AMI <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-28f56572${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "standard_name" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "standard_name" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-28f56572${_scopeId}><div class="flex items-center justify-center gap-2" data-v-28f56572${_scopeId}> Auditor <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-28f56572${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "auditor_name" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "auditor_name" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8 text-center" data-v-28f56572${_scopeId}> Progres Saat Ini </th><th class="p-6 md:p-8 pr-8 text-right" data-v-28f56572${_scopeId}>Aksi</th></tr></thead>`);
            if (isSearching.value) {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-28f56572${_scopeId}><!--[-->`);
              ssrRenderList(5, (i) => {
                _push2(`<tr class="animate-pulse bg-white/30 dark:bg-slate-900/10" data-v-28f56572${_scopeId}><td class="p-6 md:p-8" data-v-28f56572${_scopeId}><div class="h-6 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-md" data-v-28f56572${_scopeId}></div></td><td class="p-6 md:p-8 pl-8" data-v-28f56572${_scopeId}><div class="flex items-center gap-4" data-v-28f56572${_scopeId}><div class="w-12 h-12 bg-slate-200 dark:bg-slate-700/50 rounded-xl" data-v-28f56572${_scopeId}></div><div class="space-y-2" data-v-28f56572${_scopeId}><div class="h-4 w-32 bg-slate-200 dark:bg-slate-700/50 rounded" data-v-28f56572${_scopeId}></div><div class="h-3 w-16 bg-slate-200 dark:bg-slate-700/50 rounded" data-v-28f56572${_scopeId}></div></div></div></td><td class="p-6 md:p-8" data-v-28f56572${_scopeId}><div class="h-4 w-24 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded" data-v-28f56572${_scopeId}></div></td><td class="p-6 md:p-8 flex justify-center items-center" data-v-28f56572${_scopeId}><div class="h-8 w-24 bg-slate-200 dark:bg-slate-700/50 rounded-lg" data-v-28f56572${_scopeId}></div></td><td class="p-6 md:p-8" data-v-28f56572${_scopeId}><div class="h-4 w-32 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded" data-v-28f56572${_scopeId}></div></td><td class="p-6 md:p-8" data-v-28f56572${_scopeId}><div class="h-8 w-16 ml-auto bg-slate-200 dark:bg-slate-700/50 rounded-lg" data-v-28f56572${_scopeId}></div></td></tr>`);
              });
              _push2(`<!--]--></tbody>`);
            } else if (__props.assignments.data.length === 0) {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-28f56572${_scopeId}><tr data-v-28f56572${_scopeId}><td colspan="6" class="p-16 text-center" data-v-28f56572${_scopeId}><div class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500" data-v-28f56572${_scopeId}><div class="w-24 h-24 mb-6 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner" data-v-28f56572${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-folder-open",
                class: "text-4xl text-slate-300 dark:text-slate-600"
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest" data-v-28f56572${_scopeId}> Belum Ada Penugasan</h3><p class="text-xs max-w-sm text-center leading-relaxed font-bold" data-v-28f56572${_scopeId}> Data penugasan belum dibuat atau pencarian Anda tidak cocok dengan data manapun. </p>`);
              if (search.value) {
                _push2(`<button class="mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm" data-v-28f56572${_scopeId}> Bersihkan Pencarian </button>`);
              } else {
                _push2(`<button class="mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500" data-v-28f56572${_scopeId}> Buat Penugasan Baru </button>`);
              }
              _push2(`</div></td></tr></tbody>`);
            } else {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-28f56572${_scopeId}><!--[-->`);
              ssrRenderList(__props.assignments.data, (item) => {
                _push2(`<tr class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300" data-v-28f56572${_scopeId}><td class="p-6 md:p-8" data-v-28f56572${_scopeId}><span class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" data-v-28f56572${_scopeId}>${ssrInterpolate(__props.assignments.from + __props.assignments.data.indexOf(item))}</span></td><td class="p-6 md:p-8 pl-8" data-v-28f56572${_scopeId}><div class="flex items-center gap-4" data-v-28f56572${_scopeId}><div class="${ssrRenderClass([
                  "w-12 h-12 rounded-xl flex items-center justify-center font-black text-base shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] border border-white/20 dark:border-white/5 transition-transform group-hover:scale-105 duration-500",
                  item.assignable_type.includes("Prodi") ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600" : "bg-rose-50 dark:bg-rose-500/10 text-rose-600"
                ])}" data-v-28f56572${_scopeId}>${ssrInterpolate(item.assignable?.name?.charAt(0))}</div><div data-v-28f56572${_scopeId}><div class="font-black text-slate-800 dark:text-slate-200 uppercase text-xs tracking-tight italic leading-none mb-1.5" data-v-28f56572${_scopeId}>${ssrInterpolate(item.assignable?.name)}</div><div class="flex items-center gap-2" data-v-28f56572${_scopeId}><span class="${ssrRenderClass([
                  "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border shadow-sm",
                  item.assignable_type.includes("Prodi") ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 border-indigo-100 dark:border-indigo-500/20" : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20"
                ])}" data-v-28f56572${_scopeId}>${ssrInterpolate(item.assignable_type.includes("Prodi") ? "Program Studi" : "Fakultas")}</span></div></div></div></td><td class="p-6 md:p-8" data-v-28f56572${_scopeId}><div class="text-[11px] font-bold text-slate-600 dark:text-slate-300 leading-snug" data-v-28f56572${_scopeId}>${ssrInterpolate(item.standard?.name)}</div><div class="text-[9px] font-black text-slate-400 dark:text-slate-600 mt-1.5 uppercase tracking-tighter italic flex items-center gap-1" data-v-28f56572${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-regular fa-calendar",
                  class: "text-[8px]"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(item.period?.name)}</div></td><td class="p-6 md:p-8 text-slate-600 dark:text-slate-400 font-bold text-[10px]" data-v-28f56572${_scopeId}>`);
                if (item.auditor) {
                  _push2(`<div class="flex items-center gap-2.5" data-v-28f56572${_scopeId}><div class="w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center font-black text-[9px] shadow-lg shadow-slate-900/10 uppercase italic border border-white/10" data-v-28f56572${_scopeId}>${ssrInterpolate(item.auditor.name.substring(0, 2))}</div><span class="tracking-tight" data-v-28f56572${_scopeId}>${ssrInterpolate(item.auditor.name)}</span></div>`);
                } else {
                  _push2(`<div class="inline-flex items-center gap-1 text-[9px] font-black text-amber-500 bg-amber-50 dark:bg-amber-500/10 px-2 py-1 rounded-md border border-amber-200 dark:border-amber-500/20 uppercase tracking-widest animate-pulse" data-v-28f56572${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_icon, {
                    icon: "fa-solid fa-exclamation-triangle",
                    class: "text-[8px]"
                  }, null, _parent2, _scopeId));
                  _push2(` Belum Diplot </div>`);
                }
                _push2(`</td><td class="p-6 md:p-8" data-v-28f56572${_scopeId}><div class="max-w-[140px] mx-auto space-y-3" data-v-28f56572${_scopeId}><div class="flex justify-center text-[8px] font-black uppercase mb-2" data-v-28f56572${_scopeId}><span class="${ssrRenderClass(["px-3 py-1 rounded-md border border-transparent italic shadow-sm transition-all", getStageConfig(item.current_stage).color])}" data-v-28f56572${_scopeId}>${ssrInterpolate(getStageConfig(item.current_stage).label)}</span></div><div class="space-y-1" data-v-28f56572${_scopeId}><div class="flex justify-between items-center text-[8px] font-black uppercase text-slate-500" data-v-28f56572${_scopeId}><span data-v-28f56572${_scopeId}>Pengisian</span><span class="text-indigo-600 dark:text-indigo-400" data-v-28f56572${_scopeId}>${ssrInterpolate(getAuditeeProgress(item))}%</span></div><div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden p-[1px]" data-v-28f56572${_scopeId}><div class="bg-indigo-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(99,102,241,0.4)]" style="${ssrRenderStyle({ width: getAuditeeProgress(item) + "%" })}" data-v-28f56572${_scopeId}></div></div></div><div class="space-y-1" data-v-28f56572${_scopeId}><div class="flex justify-between items-center text-[8px] font-black uppercase text-slate-500" data-v-28f56572${_scopeId}><span data-v-28f56572${_scopeId}>Penilaian</span><span class="text-rose-600 dark:text-rose-400" data-v-28f56572${_scopeId}>${ssrInterpolate(getAuditorProgress(item))}%</span></div><div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden p-[1px]" data-v-28f56572${_scopeId}><div class="bg-rose-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(244,63,94,0.4)]" style="${ssrRenderStyle({ width: getAuditorProgress(item) + "%" })}" data-v-28f56572${_scopeId}></div></div></div></div></td><td class="p-6 md:p-8 pr-8 text-right" data-v-28f56572${_scopeId}><div class="flex justify-end items-center gap-2" data-v-28f56572${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("admin.assignments.show", item.id),
                  title: "Detail Penugasan",
                  class: "w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 dark:hover:text-rose-500 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 dark:hover:border-rose-900/50 active:scale-95"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_icon, {
                        icon: "fa-solid fa-arrow-right",
                        class: "text-[10px]"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_icon, {
                          icon: "fa-solid fa-arrow-right",
                          class: "text-[10px]"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<button title="Hapus Penugasan" class="w-8 h-8 flex items-center justify-center text-slate-300 dark:text-slate-700 hover:text-rose-600 dark:hover:text-rose-500 transition-all hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl active:scale-95" data-v-28f56572${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-trash",
                  class: "text-[10px]"
                }, null, _parent2, _scopeId));
                _push2(`</button></div></td></tr>`);
              });
              _push2(`<!--]--></tbody>`);
            }
            _push2(`</table></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-28f56572${_scopeId}><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" data-v-28f56572${_scopeId}> Data ${ssrInterpolate(__props.assignments.from)} - ${ssrInterpolate(__props.assignments.to)} dari total ${ssrInterpolate(__props.assignments.total)}</div><div class="flex flex-wrap justify-center gap-1.5" data-v-28f56572${_scopeId}><!--[-->`);
            ssrRenderList(__props.assignments.links, (link, k) => {
              _push2(`<!--[-->`);
              if (link.url) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: link.url,
                  class: [
                    "px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all cursor-pointer",
                    link.active ? "bg-slate-900 dark:bg-rose-600 text-white border-slate-900 dark:border-rose-600 shadow-lg shadow-slate-900/20" : "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:text-rose-500"
                  ]
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<span class="${ssrRenderClass([
                  "px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all opacity-30 cursor-not-allowed",
                  "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800"
                ])}" data-v-28f56572${_scopeId}>${link.label ?? ""}</span>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div></div></div>`);
            _push2(ssrRenderComponent(AssignmentFormModal, {
              show: showModal.value,
              "onUpdate:show": ($event) => showModal.value = $event,
              onClosed: closeModal,
              periods: __props.periods,
              standards: __props.standards,
              auditors: __props.auditors,
              prodis: __props.prodis,
              faculties: __props.faculties
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TModal, {
              modelValue: showDeleteModal.value,
              "onUpdate:modelValue": ($event) => showDeleteModal.value = $event,
              radius: 5,
              closeButton: false
            }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center p-4" data-v-28f56572${_scopeId2}><div class="w-20 h-20 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-500 mx-auto flex items-center justify-center mb-6 shadow-inner" data-v-28f56572${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon, {
                    icon: "fa-solid fa-trash-can",
                    class: "text-3xl animate-bounce"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><h3 class="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter italic" data-v-28f56572${_scopeId2}> Konfirmasi Hapus</h3><p class="text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto" data-v-28f56572${_scopeId2}> Menghapus penugasan akan menghapus seluruh data snapshot indikator di dalamnya secara permanen. Apakah Anda yakin? </p><div class="flex justify-center gap-3" data-v-28f56572${_scopeId2}><button class="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 rounded-xl transition active:scale-95" data-v-28f56572${_scopeId2}> Batal </button><button class="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition shadow-lg shadow-rose-500/30 active:scale-95" data-v-28f56572${_scopeId2}> Ya, Hapus </button></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center p-4" }, [
                      createVNode("div", { class: "w-20 h-20 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-500 mx-auto flex items-center justify-center mb-6 shadow-inner" }, [
                        createVNode(_component_icon, {
                          icon: "fa-solid fa-trash-can",
                          class: "text-3xl animate-bounce"
                        })
                      ]),
                      createVNode("h3", { class: "text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter italic" }, " Konfirmasi Hapus"),
                      createVNode("p", { class: "text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto" }, " Menghapus penugasan akan menghapus seluruh data snapshot indikator di dalamnya secara permanen. Apakah Anda yakin? "),
                      createVNode("div", { class: "flex justify-center gap-3" }, [
                        createVNode("button", {
                          onClick: ($event) => showDeleteModal.value = false,
                          class: "px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 rounded-xl transition active:scale-95"
                        }, " Batal ", 8, ["onClick"]),
                        createVNode("button", {
                          onClick: executeDelete,
                          class: "px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition shadow-lg shadow-rose-500/30 active:scale-95"
                        }, " Ya, Hapus ")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              __props.stageBreakdown ? (openBlock(), createBlock("div", {
                key: 0,
                class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.stageBreakdown, (stat) => {
                  return openBlock(), createBlock("div", {
                    key: stat.stage,
                    class: "bg-white dark:bg-slate-900 backdrop-blur-3xl p-5 rounded-[2rem] border border-white/40 dark:border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 group relative overflow-hidden"
                  }, [
                    createVNode("p", { class: "text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] leading-none mb-3 group-hover:text-rose-500 transition-colors" }, toDisplayString(stat.label), 1),
                    createVNode("div", { class: "flex items-end justify-between relative z-10" }, [
                      createVNode("p", { class: "text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tighter italic" }, toDisplayString(stat.total), 1),
                      createVNode("div", { class: "w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)] animate-pulse mb-1.5" })
                    ])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "flex flex-col lg:flex-row justify-between items-center gap-6" }, [
                  createVNode("div", { class: "flex items-stretch gap-3 w-full max-w-2xl" }, [
                    createVNode("div", { class: "relative flex-1 group" }, [
                      createVNode("span", { class: "absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" }, [
                        !isSearching.value ? (openBlock(), createBlock("svg", {
                          key: 0,
                          class: "h-4 w-4 text-slate-400 group-focus-within:text-rose-500 transition-colors",
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
                          class: "h-4 w-4 border-2 border-rose-500 border-t-transparent rounded-full animate-spin"
                        }))
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => search.value = $event,
                        type: "text",
                        placeholder: "Cari unit, auditor, atau standar...",
                        class: "w-full pl-11 pr-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, search.value]
                      ]),
                      search.value ? (openBlock(), createBlock("button", {
                        key: 0,
                        onClick: ($event) => search.value = "",
                        class: "absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-rose-500 transition-colors"
                      }, [
                        createVNode(_component_icon, {
                          icon: "fa-solid fa-times-circle",
                          class: "w-4 h-4"
                        })
                      ], 8, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300" }, [
                      createVNode("span", { class: "hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2" }, "Tampilkan"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => perPage.value = $event,
                        class: "bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none"
                      }, [
                        createVNode("option", { value: 10 }, "10"),
                        createVNode("option", { value: 25 }, "25"),
                        createVNode("option", { value: 50 }, "50"),
                        createVNode("option", { value: 100 }, "100")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, perPage.value]
                      ])
                    ])
                  ]),
                  createVNode("button", {
                    onClick: ($event) => showModal.value = true,
                    class: "group w-full lg:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-2xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10"
                  }, [
                    createVNode("span", { class: "mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" }, "+"),
                    createTextVNode(" Inisialisasi AMI Baru ")
                  ], 8, ["onClick"])
                ]),
                createVNode("div", { class: "bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" }, [
                  createVNode("div", { class: "overflow-x-auto custom-scrollbar" }, [
                    createVNode("table", { class: "w-full text-left border-collapse min-w-[1000px] lg:min-w-full" }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" }, [
                          createVNode("th", {
                            onClick: ($event) => handleSort("created_at"),
                            class: "p-6 md:p-8"
                          }, " No ", 8, ["onClick"]),
                          createVNode("th", {
                            onClick: ($event) => handleSort("assignable_name"),
                            class: "p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createTextVNode(" Unit Kerja & Kategori "),
                              createVNode("div", { class: "flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-up",
                                  class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "assignable_name" && __props.filters.direction === "asc" }, "-mb-1"]
                                }, null, 8, ["class"]),
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-down",
                                  class: { "text-rose-500 opacity-100": __props.filters.sort_field === "assignable_name" && __props.filters.direction === "desc" }
                                }, null, 8, ["class"])
                              ])
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", {
                            onClick: ($event) => handleSort("standard_name"),
                            class: "p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                              createTextVNode(" Metadata AMI "),
                              createVNode("div", { class: "flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-up",
                                  class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "standard_name" && __props.filters.direction === "asc" }, "-mb-1"]
                                }, null, 8, ["class"]),
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-down",
                                  class: { "text-rose-500 opacity-100": __props.filters.sort_field === "standard_name" && __props.filters.direction === "desc" }
                                }, null, 8, ["class"])
                              ])
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", {
                            onClick: ($event) => handleSort("auditor_name"),
                            class: "p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                              createTextVNode(" Auditor "),
                              createVNode("div", { class: "flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-up",
                                  class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "auditor_name" && __props.filters.direction === "asc" }, "-mb-1"]
                                }, null, 8, ["class"]),
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-down",
                                  class: { "text-rose-500 opacity-100": __props.filters.sort_field === "auditor_name" && __props.filters.direction === "desc" }
                                }, null, 8, ["class"])
                              ])
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", { class: "p-6 md:p-8 text-center" }, " Progres Saat Ini "),
                          createVNode("th", { class: "p-6 md:p-8 pr-8 text-right" }, "Aksi")
                        ])
                      ]),
                      isSearching.value ? (openBlock(), createBlock("tbody", {
                        key: 0,
                        class: "divide-y divide-slate-50 dark:divide-slate-800/20"
                      }, [
                        (openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
                          return createVNode("tr", {
                            key: "skeleton-" + i,
                            class: "animate-pulse bg-white/30 dark:bg-slate-900/10"
                          }, [
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "h-6 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-md" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pl-8" }, [
                              createVNode("div", { class: "flex items-center gap-4" }, [
                                createVNode("div", { class: "w-12 h-12 bg-slate-200 dark:bg-slate-700/50 rounded-xl" }),
                                createVNode("div", { class: "space-y-2" }, [
                                  createVNode("div", { class: "h-4 w-32 bg-slate-200 dark:bg-slate-700/50 rounded" }),
                                  createVNode("div", { class: "h-3 w-16 bg-slate-200 dark:bg-slate-700/50 rounded" })
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "h-4 w-24 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 flex justify-center items-center" }, [
                              createVNode("div", { class: "h-8 w-24 bg-slate-200 dark:bg-slate-700/50 rounded-lg" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "h-4 w-32 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "h-8 w-16 ml-auto bg-slate-200 dark:bg-slate-700/50 rounded-lg" })
                            ])
                          ]);
                        }), 64))
                      ])) : __props.assignments.data.length === 0 ? (openBlock(), createBlock("tbody", {
                        key: 1,
                        class: "divide-y divide-slate-50 dark:divide-slate-800/20"
                      }, [
                        createVNode("tr", null, [
                          createVNode("td", {
                            colspan: "6",
                            class: "p-16 text-center"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center text-slate-400 dark:text-slate-500" }, [
                              createVNode("div", { class: "w-24 h-24 mb-6 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-folder-open",
                                  class: "text-4xl text-slate-300 dark:text-slate-600"
                                })
                              ]),
                              createVNode("h3", { class: "text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest" }, " Belum Ada Penugasan"),
                              createVNode("p", { class: "text-xs max-w-sm text-center leading-relaxed font-bold" }, " Data penugasan belum dibuat atau pencarian Anda tidak cocok dengan data manapun. "),
                              search.value ? (openBlock(), createBlock("button", {
                                key: 0,
                                onClick: ($event) => search.value = "",
                                class: "mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm"
                              }, " Bersihkan Pencarian ", 8, ["onClick"])) : (openBlock(), createBlock("button", {
                                key: 1,
                                onClick: ($event) => showModal.value = true,
                                class: "mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500"
                              }, " Buat Penugasan Baru ", 8, ["onClick"]))
                            ])
                          ])
                        ])
                      ])) : (openBlock(), createBlock("tbody", {
                        key: 2,
                        class: "divide-y divide-slate-50 dark:divide-slate-800/20"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.assignments.data, (item) => {
                          return openBlock(), createBlock("tr", {
                            key: item.id,
                            class: "group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300"
                          }, [
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("span", { class: "font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" }, toDisplayString(__props.assignments.from + __props.assignments.data.indexOf(item)), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pl-8" }, [
                              createVNode("div", { class: "flex items-center gap-4" }, [
                                createVNode("div", {
                                  class: [
                                    "w-12 h-12 rounded-xl flex items-center justify-center font-black text-base shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] border border-white/20 dark:border-white/5 transition-transform group-hover:scale-105 duration-500",
                                    item.assignable_type.includes("Prodi") ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600" : "bg-rose-50 dark:bg-rose-500/10 text-rose-600"
                                  ]
                                }, toDisplayString(item.assignable?.name?.charAt(0)), 3),
                                createVNode("div", null, [
                                  createVNode("div", { class: "font-black text-slate-800 dark:text-slate-200 uppercase text-xs tracking-tight italic leading-none mb-1.5" }, toDisplayString(item.assignable?.name), 1),
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode("span", {
                                      class: [
                                        "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border shadow-sm",
                                        item.assignable_type.includes("Prodi") ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 border-indigo-100 dark:border-indigo-500/20" : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20"
                                      ]
                                    }, toDisplayString(item.assignable_type.includes("Prodi") ? "Program Studi" : "Fakultas"), 3)
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "text-[11px] font-bold text-slate-600 dark:text-slate-300 leading-snug" }, toDisplayString(item.standard?.name), 1),
                              createVNode("div", { class: "text-[9px] font-black text-slate-400 dark:text-slate-600 mt-1.5 uppercase tracking-tighter italic flex items-center gap-1" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-regular fa-calendar",
                                  class: "text-[8px]"
                                }),
                                createTextVNode(" " + toDisplayString(item.period?.name), 1)
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-slate-600 dark:text-slate-400 font-bold text-[10px]" }, [
                              item.auditor ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex items-center gap-2.5"
                              }, [
                                createVNode("div", { class: "w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center font-black text-[9px] shadow-lg shadow-slate-900/10 uppercase italic border border-white/10" }, toDisplayString(item.auditor.name.substring(0, 2)), 1),
                                createVNode("span", { class: "tracking-tight" }, toDisplayString(item.auditor.name), 1)
                              ])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "inline-flex items-center gap-1 text-[9px] font-black text-amber-500 bg-amber-50 dark:bg-amber-500/10 px-2 py-1 rounded-md border border-amber-200 dark:border-amber-500/20 uppercase tracking-widest animate-pulse"
                              }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-exclamation-triangle",
                                  class: "text-[8px]"
                                }),
                                createTextVNode(" Belum Diplot ")
                              ]))
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "max-w-[140px] mx-auto space-y-3" }, [
                                createVNode("div", { class: "flex justify-center text-[8px] font-black uppercase mb-2" }, [
                                  createVNode("span", {
                                    class: ["px-3 py-1 rounded-md border border-transparent italic shadow-sm transition-all", getStageConfig(item.current_stage).color]
                                  }, toDisplayString(getStageConfig(item.current_stage).label), 3)
                                ]),
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode("div", { class: "flex justify-between items-center text-[8px] font-black uppercase text-slate-500" }, [
                                    createVNode("span", null, "Pengisian"),
                                    createVNode("span", { class: "text-indigo-600 dark:text-indigo-400" }, toDisplayString(getAuditeeProgress(item)) + "%", 1)
                                  ]),
                                  createVNode("div", { class: "w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden p-[1px]" }, [
                                    createVNode("div", {
                                      class: "bg-indigo-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(99,102,241,0.4)]",
                                      style: { width: getAuditeeProgress(item) + "%" }
                                    }, null, 4)
                                  ])
                                ]),
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode("div", { class: "flex justify-between items-center text-[8px] font-black uppercase text-slate-500" }, [
                                    createVNode("span", null, "Penilaian"),
                                    createVNode("span", { class: "text-rose-600 dark:text-rose-400" }, toDisplayString(getAuditorProgress(item)) + "%", 1)
                                  ]),
                                  createVNode("div", { class: "w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden p-[1px]" }, [
                                    createVNode("div", {
                                      class: "bg-rose-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(244,63,94,0.4)]",
                                      style: { width: getAuditorProgress(item) + "%" }
                                    }, null, 4)
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pr-8 text-right" }, [
                              createVNode("div", { class: "flex justify-end items-center gap-2" }, [
                                createVNode(unref(Link), {
                                  href: _ctx.route("admin.assignments.show", item.id),
                                  title: "Detail Penugasan",
                                  class: "w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 dark:hover:text-rose-500 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 dark:hover:border-rose-900/50 active:scale-95"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_icon, {
                                      icon: "fa-solid fa-arrow-right",
                                      class: "text-[10px]"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode("button", {
                                  onClick: ($event) => confirmDeleteAction(item.id),
                                  title: "Hapus Penugasan",
                                  class: "w-8 h-8 flex items-center justify-center text-slate-300 dark:text-slate-700 hover:text-rose-600 dark:hover:text-rose-500 transition-all hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl active:scale-95"
                                }, [
                                  createVNode(_component_icon, {
                                    icon: "fa-solid fa-trash",
                                    class: "text-[10px]"
                                  })
                                ], 8, ["onClick"])
                              ])
                            ])
                          ]);
                        }), 128))
                      ]))
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" }, [
                    createVNode("div", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" }, " Data " + toDisplayString(__props.assignments.from) + " - " + toDisplayString(__props.assignments.to) + " dari total " + toDisplayString(__props.assignments.total), 1),
                    createVNode("div", { class: "flex flex-wrap justify-center gap-1.5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.assignments.links, (link, k) => {
                        return openBlock(), createBlock(Fragment, { key: k }, [
                          link.url ? (openBlock(), createBlock(unref(Link), {
                            key: 0,
                            href: link.url,
                            class: [
                              "px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all cursor-pointer",
                              link.active ? "bg-slate-900 dark:bg-rose-600 text-white border-slate-900 dark:border-rose-600 shadow-lg shadow-slate-900/20" : "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:text-rose-500"
                            ],
                            innerHTML: link.label
                          }, null, 8, ["href", "class", "innerHTML"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: [
                              "px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all opacity-30 cursor-not-allowed",
                              "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800"
                            ],
                            innerHTML: link.label
                          }, null, 8, ["innerHTML"]))
                        ], 64);
                      }), 128))
                    ])
                  ])
                ])
              ]),
              createVNode(AssignmentFormModal, {
                show: showModal.value,
                "onUpdate:show": ($event) => showModal.value = $event,
                onClosed: closeModal,
                periods: __props.periods,
                standards: __props.standards,
                auditors: __props.auditors,
                prodis: __props.prodis,
                faculties: __props.faculties
              }, null, 8, ["show", "onUpdate:show", "periods", "standards", "auditors", "prodis", "faculties"]),
              createVNode(TModal, {
                modelValue: showDeleteModal.value,
                "onUpdate:modelValue": ($event) => showDeleteModal.value = $event,
                radius: 5,
                closeButton: false
              }, {
                content: withCtx(() => [
                  createVNode("div", { class: "text-center p-4" }, [
                    createVNode("div", { class: "w-20 h-20 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-500 mx-auto flex items-center justify-center mb-6 shadow-inner" }, [
                      createVNode(_component_icon, {
                        icon: "fa-solid fa-trash-can",
                        class: "text-3xl animate-bounce"
                      })
                    ]),
                    createVNode("h3", { class: "text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter italic" }, " Konfirmasi Hapus"),
                    createVNode("p", { class: "text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto" }, " Menghapus penugasan akan menghapus seluruh data snapshot indikator di dalamnya secara permanen. Apakah Anda yakin? "),
                    createVNode("div", { class: "flex justify-center gap-3" }, [
                      createVNode("button", {
                        onClick: ($event) => showDeleteModal.value = false,
                        class: "px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 rounded-xl transition active:scale-95"
                      }, " Batal ", 8, ["onClick"]),
                      createVNode("button", {
                        onClick: executeDelete,
                        class: "px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition shadow-lg shadow-rose-500/30 active:scale-95"
                      }, " Ya, Hapus ")
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Assignment/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-28f56572"]]);
export {
  Index as default
};

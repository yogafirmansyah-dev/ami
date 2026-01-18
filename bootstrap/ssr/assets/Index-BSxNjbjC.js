import { ref, watch, resolveComponent, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, withDirectives, vModelText, vModelSelect, createTextVNode, Transition, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { router, useForm, Link, usePage } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-BXpqpYTS.js";
import debounce from "lodash/debounce.js";
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
    const updateFilters = debounce((value) => {
      isSearching.value = true;
      router.get(
        route("admin.assignments.index"),
        { search: value, per_page: perPage.value },
        {
          preserveState: true,
          replace: true,
          onFinish: () => isSearching.value = false
        }
      );
    }, 500);
    watch(perPage, (value) => {
      router.get(
        route("admin.assignments.index"),
        { search: search.value, per_page: value },
        {
          preserveState: true,
          replace: true
        }
      );
    });
    watch(search, (newValue) => updateFilters(newValue));
    const showModal = ref(false);
    const form = useForm({
      period_id: "",
      master_standard_id: "",
      auditor_id: "",
      assignable_type: "prodi",
      assignable_id: ""
    });
    const submit = () => {
      form.post(route("admin.assignments.store"), {
        onSuccess: () => {
          showModal.value = false;
          form.reset();
        },
        onError: () => {
          usePage().props.flash.toastr = {
            type: "error",
            content: "Terdapat kesalahan validasi, mohon cek kembali form anda.",
            position: "top-right"
          };
        }
      });
    };
    const closeModal = () => {
      showModal.value = false;
      form.reset();
    };
    const getProgress = (item) => {
      if (!item.indicators_count) return 0;
      return Math.round(item.scored_indicators_count / item.indicators_count * 100);
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
    const deleteData = (id) => {
      if (confirm("Menghapus penugasan akan menghapus seluruh data snapshot indikator di dalamnya. Lanjutkan?")) {
        router.delete(route("admin.assignments.destroy", id));
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
              _push2(`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10" data-v-2cbb1ae0${_scopeId}><!--[-->`);
              ssrRenderList(__props.stageBreakdown, (stat) => {
                _push2(`<div class="bg-white dark:bg-slate-900 backdrop-blur-3xl p-5 rounded-[2rem] border border-white/40 dark:border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 group relative overflow-hidden" data-v-2cbb1ae0${_scopeId}><p class="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] leading-none mb-3 group-hover:text-rose-500 transition-colors" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(stat.label)}</p><div class="flex items-end justify-between relative z-10" data-v-2cbb1ae0${_scopeId}><p class="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tighter italic" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(stat.total)}</p><div class="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)] animate-pulse mb-1.5" data-v-2cbb1ae0${_scopeId}></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="space-y-6" data-v-2cbb1ae0${_scopeId}><div class="flex flex-col lg:flex-row justify-between items-center gap-6" data-v-2cbb1ae0${_scopeId}><div class="flex items-stretch gap-3 w-full max-w-2xl" data-v-2cbb1ae0${_scopeId}><div class="relative flex-1 group" data-v-2cbb1ae0${_scopeId}><span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" data-v-2cbb1ae0${_scopeId}>`);
            if (!isSearching.value) {
              _push2(`<svg class="h-4 w-4 text-slate-400 group-focus-within:text-rose-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2cbb1ae0${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-2cbb1ae0${_scopeId}></path></svg>`);
            } else {
              _push2(`<div class="h-4 w-4 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" data-v-2cbb1ae0${_scopeId}></div>`);
            }
            _push2(`</span><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari unit, auditor, atau standar..." class="w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" data-v-2cbb1ae0${_scopeId}></div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300" data-v-2cbb1ae0${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2" data-v-2cbb1ae0${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none" data-v-2cbb1ae0${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-2cbb1ae0${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-2cbb1ae0${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-2cbb1ae0${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option><option${ssrRenderAttr("value", 100)} data-v-2cbb1ae0${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 100) : ssrLooseEqual(perPage.value, 100)) ? " selected" : ""}${_scopeId}>100</option></select></div></div><button class="group w-full lg:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-2xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10" data-v-2cbb1ae0${_scopeId}><span class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" data-v-2cbb1ae0${_scopeId}>+</span> Inisialisasi AMI Baru </button></div><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" data-v-2cbb1ae0${_scopeId}><div class="overflow-x-auto custom-scrollbar" data-v-2cbb1ae0${_scopeId}><table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full" data-v-2cbb1ae0${_scopeId}><thead data-v-2cbb1ae0${_scopeId}><tr class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" data-v-2cbb1ae0${_scopeId}><th class="p-6 md:p-8" data-v-2cbb1ae0${_scopeId}>No</th><th class="p-6 md:p-8 pl-8" data-v-2cbb1ae0${_scopeId}>Unit Kerja &amp; Kategori</th><th class="p-6 md:p-8" data-v-2cbb1ae0${_scopeId}>Metadata AMI</th><th class="p-6 md:p-8" data-v-2cbb1ae0${_scopeId}>Auditor</th><th class="p-6 md:p-8 text-center" data-v-2cbb1ae0${_scopeId}>Current Progress</th><th class="p-6 md:p-8 pr-8 text-right" data-v-2cbb1ae0${_scopeId}>Actions</th></tr></thead><tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-2cbb1ae0${_scopeId}><!--[-->`);
            ssrRenderList(__props.assignments.data, (item) => {
              _push2(`<tr class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300" data-v-2cbb1ae0${_scopeId}><td class="p-6 md:p-8" data-v-2cbb1ae0${_scopeId}><span class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(__props.assignments.from + __props.assignments.data.indexOf(item))}</span></td><td class="p-6 md:p-8 pl-8" data-v-2cbb1ae0${_scopeId}><div class="flex items-center gap-4" data-v-2cbb1ae0${_scopeId}><div class="${ssrRenderClass([
                "w-12 h-12 rounded-xl flex items-center justify-center font-black text-base shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] border border-white/20 dark:border-white/5 transition-transform group-hover:scale-105 duration-500",
                item.assignable_type.includes("Prodi") ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600" : "bg-rose-50 dark:bg-rose-500/10 text-rose-600"
              ])}" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(item.assignable?.name?.charAt(0))}</div><div data-v-2cbb1ae0${_scopeId}><div class="font-black text-slate-800 dark:text-slate-200 uppercase text-xs tracking-tight italic leading-none mb-1.5" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(item.assignable?.name)}</div><div class="flex items-center gap-2" data-v-2cbb1ae0${_scopeId}><span class="${ssrRenderClass([
                "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border shadow-sm",
                item.assignable_type.includes("Prodi") ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 border-indigo-100 dark:border-indigo-500/20" : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20"
              ])}" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(item.assignable_type.includes("Prodi") ? "Program Studi" : "Fakultas")}</span></div></div></div></td><td class="p-6 md:p-8" data-v-2cbb1ae0${_scopeId}><div class="text-[11px] font-bold text-slate-600 dark:text-slate-300 leading-snug" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(item.standard?.name)}</div><div class="text-[9px] font-black text-slate-400 dark:text-slate-600 mt-1.5 uppercase tracking-tighter italic flex items-center gap-1" data-v-2cbb1ae0${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-regular fa-calendar",
                class: "text-[8px]"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(item.period?.name)}</div></td><td class="p-6 md:p-8 text-slate-600 dark:text-slate-400 font-bold text-[10px]" data-v-2cbb1ae0${_scopeId}>`);
              if (item.auditor) {
                _push2(`<div class="flex items-center gap-2.5" data-v-2cbb1ae0${_scopeId}><div class="w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center font-black text-[9px] shadow-lg shadow-slate-900/10 uppercase italic border border-white/10" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(item.auditor.name.substring(0, 2))}</div><span class="tracking-tight" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(item.auditor.name)}</span></div>`);
              } else {
                _push2(`<span class="text-[9px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-widest animate-pulse" data-v-2cbb1ae0${_scopeId}>Belum Diplot</span>`);
              }
              _push2(`</td><td class="p-6 md:p-8" data-v-2cbb1ae0${_scopeId}><div class="max-w-[140px] mx-auto space-y-2" data-v-2cbb1ae0${_scopeId}><div class="flex justify-between items-center text-[8px] font-black uppercase" data-v-2cbb1ae0${_scopeId}><span class="${ssrRenderClass(["px-2.5 py-1 rounded-md border border-transparent italic shadow-sm transition-all", getStageConfig(item.current_stage).color])}" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(getStageConfig(item.current_stage).label)}</span><span class="text-slate-700 dark:text-slate-300 italic tracking-tighter font-black" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(getProgress(item))}%</span></div><div class="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full overflow-hidden p-[1px]" data-v-2cbb1ae0${_scopeId}><div class="bg-slate-900 dark:bg-rose-600 h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(244,63,94,0.4)]" style="${ssrRenderStyle({ width: getProgress(item) + "%" })}" data-v-2cbb1ae0${_scopeId}></div></div></div></td><td class="p-6 md:p-8 pr-8 text-right" data-v-2cbb1ae0${_scopeId}><div class="flex justify-end items-center gap-2" data-v-2cbb1ae0${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.assignments.show", item.id),
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
              _push2(`<button class="w-8 h-8 flex items-center justify-center text-slate-300 dark:text-slate-700 hover:text-rose-600 dark:hover:text-rose-500 transition-all hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl active:scale-95" data-v-2cbb1ae0${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-trash",
                class: "text-[10px]"
              }, null, _parent2, _scopeId));
              _push2(`</button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-2cbb1ae0${_scopeId}><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" data-v-2cbb1ae0${_scopeId}> Data ${ssrInterpolate(__props.assignments.from)} - ${ssrInterpolate(__props.assignments.to)} dari total ${ssrInterpolate(__props.assignments.total)}</div><div class="flex flex-wrap justify-center gap-1.5" data-v-2cbb1ae0${_scopeId}><!--[-->`);
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
                ])}" data-v-2cbb1ae0${_scopeId}>${link.label ?? ""}</span>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-6" data-v-2cbb1ae0${_scopeId}><div class="fixed inset-0 bg-slate-900/80 dark:bg-slate-950/90 backdrop-blur-md transition-opacity" data-v-2cbb1ae0${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in duration-300" data-v-2cbb1ae0${_scopeId}><div class="p-12 border-b border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30" data-v-2cbb1ae0${_scopeId}><h3 class="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none" data-v-2cbb1ae0${_scopeId}> Inisialisasi AMI </h3><p class="text-[10px] font-bold text-rose-500 uppercase tracking-[0.3em] mt-4 italic" data-v-2cbb1ae0${_scopeId}> Buat Penugasan &amp; Snapshot Data Baru </p></div><form class="p-12 space-y-10 bg-white dark:bg-slate-900" data-v-2cbb1ae0${_scopeId}><div class="grid grid-cols-2 gap-8" data-v-2cbb1ae0${_scopeId}><div class="space-y-3" data-v-2cbb1ae0${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-2cbb1ae0${_scopeId}>Periode AMI</label><select name="period_id" class="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white shadow-inner focus:ring-2 focus:ring-rose-500/20" data-v-2cbb1ae0${_scopeId}><option value="" disabled data-v-2cbb1ae0${ssrIncludeBooleanAttr(Array.isArray(unref(form).period_id) ? ssrLooseContain(unref(form).period_id, "") : ssrLooseEqual(unref(form).period_id, "")) ? " selected" : ""}${_scopeId}>Pilih Periode</option><!--[-->`);
              ssrRenderList(__props.periods, (p) => {
                _push2(`<option${ssrRenderAttr("value", p.id)} data-v-2cbb1ae0${ssrIncludeBooleanAttr(Array.isArray(unref(form).period_id) ? ssrLooseContain(unref(form).period_id, p.id) : ssrLooseEqual(unref(form).period_id, p.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(p.name)}</option>`);
              });
              _push2(`<!--]--></select>`);
              if (unref(form).errors.period_id) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(unref(form).errors.period_id)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-3" data-v-2cbb1ae0${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-2cbb1ae0${_scopeId}>Standard Mutu</label><select name="master_standard_id" class="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white shadow-inner focus:ring-2 focus:ring-rose-500/20" data-v-2cbb1ae0${_scopeId}><option value="" disabled data-v-2cbb1ae0${ssrIncludeBooleanAttr(Array.isArray(unref(form).master_standard_id) ? ssrLooseContain(unref(form).master_standard_id, "") : ssrLooseEqual(unref(form).master_standard_id, "")) ? " selected" : ""}${_scopeId}>Pilih Instrumen</option><!--[-->`);
              ssrRenderList(__props.standards, (s) => {
                _push2(`<option${ssrRenderAttr("value", s.id)} data-v-2cbb1ae0${ssrIncludeBooleanAttr(Array.isArray(unref(form).master_standard_id) ? ssrLooseContain(unref(form).master_standard_id, s.id) : ssrLooseEqual(unref(form).master_standard_id, s.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(s.name)}</option>`);
              });
              _push2(`<!--]--></select>`);
              if (unref(form).errors.master_standard_id) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(unref(form).errors.master_standard_id)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="space-y-3" data-v-2cbb1ae0${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-2cbb1ae0${_scopeId}>Kategori Unit</label><div class="flex p-1.5 bg-slate-100 dark:bg-slate-800 rounded-3xl" data-v-2cbb1ae0${_scopeId}><button type="button" class="${ssrRenderClass([unref(form).assignable_type === "prodi" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 dark:text-slate-500", "flex-1 py-4 text-[10px] font-black uppercase rounded-2xl transition-all duration-300"])}" data-v-2cbb1ae0${_scopeId}>Program Studi</button><button type="button" class="${ssrRenderClass([unref(form).assignable_type === "faculty" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 dark:text-slate-500", "flex-1 py-4 text-[10px] font-black uppercase rounded-2xl transition-all duration-300"])}" data-v-2cbb1ae0${_scopeId}>Fakultas</button></div></div><div class="grid grid-cols-2 gap-8" data-v-2cbb1ae0${_scopeId}><div class="space-y-3" data-v-2cbb1ae0${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-2cbb1ae0${_scopeId}>Target Unit</label><select name="assignable_id" class="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white shadow-inner focus:ring-2 focus:ring-rose-500/20" data-v-2cbb1ae0${_scopeId}><option value="" disabled data-v-2cbb1ae0${ssrIncludeBooleanAttr(Array.isArray(unref(form).assignable_id) ? ssrLooseContain(unref(form).assignable_id, "") : ssrLooseEqual(unref(form).assignable_id, "")) ? " selected" : ""}${_scopeId}>Unit Kerja</option><!--[-->`);
              ssrRenderList(unref(form).assignable_type === "prodi" ? __props.prodis : __props.faculties, (item) => {
                _push2(`<option${ssrRenderAttr("value", item.id)} data-v-2cbb1ae0${ssrIncludeBooleanAttr(Array.isArray(unref(form).assignable_id) ? ssrLooseContain(unref(form).assignable_id, item.id) : ssrLooseEqual(unref(form).assignable_id, item.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(item.name)}</option>`);
              });
              _push2(`<!--]--></select>`);
              if (unref(form).errors.assignable_id) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(unref(form).errors.assignable_id)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-3" data-v-2cbb1ae0${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-2cbb1ae0${_scopeId}>Lead Auditor</label><select name="auditor_id" class="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white shadow-inner focus:ring-2 focus:ring-rose-500/20" data-v-2cbb1ae0${_scopeId}><option value="" disabled data-v-2cbb1ae0${ssrIncludeBooleanAttr(Array.isArray(unref(form).auditor_id) ? ssrLooseContain(unref(form).auditor_id, "") : ssrLooseEqual(unref(form).auditor_id, "")) ? " selected" : ""}${_scopeId}>Pilih Auditor</option><!--[-->`);
              ssrRenderList(__props.auditors, (a) => {
                _push2(`<option${ssrRenderAttr("value", a.id)} data-v-2cbb1ae0${ssrIncludeBooleanAttr(Array.isArray(unref(form).auditor_id) ? ssrLooseContain(unref(form).auditor_id, a.id) : ssrLooseEqual(unref(form).auditor_id, a.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(a.name)}</option>`);
              });
              _push2(`<!--]--></select>`);
              if (unref(form).errors.auditor_id) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(unref(form).errors.auditor_id)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full py-6 bg-slate-900 dark:bg-rose-600 text-white text-xs font-black uppercase tracking-[0.3em] rounded-[2.5rem] shadow-2xl hover:bg-rose-600 dark:hover:bg-rose-500 transition-all active:scale-95 disabled:opacity-50" data-v-2cbb1ae0${_scopeId}>${ssrInterpolate(unref(form).processing ? "Membuat Snapshots..." : "Inisialisasi Siklus AMI Baru")}</button></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
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
                        class: "w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, search.value]
                      ])
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
                          createVNode("th", { class: "p-6 md:p-8" }, "No"),
                          createVNode("th", { class: "p-6 md:p-8 pl-8" }, "Unit Kerja & Kategori"),
                          createVNode("th", { class: "p-6 md:p-8" }, "Metadata AMI"),
                          createVNode("th", { class: "p-6 md:p-8" }, "Auditor"),
                          createVNode("th", { class: "p-6 md:p-8 text-center" }, "Current Progress"),
                          createVNode("th", { class: "p-6 md:p-8 pr-8 text-right" }, "Actions")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-slate-50 dark:divide-slate-800/20" }, [
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
                              ])) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-[9px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-widest animate-pulse"
                              }, "Belum Diplot"))
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "max-w-[140px] mx-auto space-y-2" }, [
                                createVNode("div", { class: "flex justify-between items-center text-[8px] font-black uppercase" }, [
                                  createVNode("span", {
                                    class: ["px-2.5 py-1 rounded-md border border-transparent italic shadow-sm transition-all", getStageConfig(item.current_stage).color]
                                  }, toDisplayString(getStageConfig(item.current_stage).label), 3),
                                  createVNode("span", { class: "text-slate-700 dark:text-slate-300 italic tracking-tighter font-black" }, toDisplayString(getProgress(item)) + "%", 1)
                                ]),
                                createVNode("div", { class: "w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full overflow-hidden p-[1px]" }, [
                                  createVNode("div", {
                                    class: "bg-slate-900 dark:bg-rose-600 h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(244,63,94,0.4)]",
                                    style: { width: getProgress(item) + "%" }
                                  }, null, 4)
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pr-8 text-right" }, [
                              createVNode("div", { class: "flex justify-end items-center gap-2" }, [
                                createVNode(unref(Link), {
                                  href: _ctx.route("admin.assignments.show", item.id),
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
                                  onClick: ($event) => deleteData(item.id),
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
                      ])
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
              createVNode(Transition, { name: "modal" }, {
                default: withCtx(() => [
                  showModal.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed inset-0 z-50 flex items-center justify-center p-6"
                  }, [
                    createVNode("div", {
                      class: "fixed inset-0 bg-slate-900/80 dark:bg-slate-950/90 backdrop-blur-md transition-opacity",
                      onClick: closeModal
                    }),
                    createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in duration-300" }, [
                      createVNode("div", { class: "p-12 border-b border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30" }, [
                        createVNode("h3", { class: "text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none" }, " Inisialisasi AMI "),
                        createVNode("p", { class: "text-[10px] font-bold text-rose-500 uppercase tracking-[0.3em] mt-4 italic" }, " Buat Penugasan & Snapshot Data Baru ")
                      ]),
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "p-12 space-y-10 bg-white dark:bg-slate-900"
                      }, [
                        createVNode("div", { class: "grid grid-cols-2 gap-8" }, [
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Periode AMI"),
                            withDirectives(createVNode("select", {
                              name: "period_id",
                              "onUpdate:modelValue": ($event) => unref(form).period_id = $event,
                              class: "w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white shadow-inner focus:ring-2 focus:ring-rose-500/20"
                            }, [
                              createVNode("option", {
                                value: "",
                                disabled: ""
                              }, "Pilih Periode"),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.periods, (p) => {
                                return openBlock(), createBlock("option", {
                                  key: p.id,
                                  value: p.id
                                }, toDisplayString(p.name), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).period_id]
                            ]),
                            unref(form).errors.period_id ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-xs text-rose-500 font-bold ml-1"
                            }, toDisplayString(unref(form).errors.period_id), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Standard Mutu"),
                            withDirectives(createVNode("select", {
                              name: "master_standard_id",
                              "onUpdate:modelValue": ($event) => unref(form).master_standard_id = $event,
                              class: "w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white shadow-inner focus:ring-2 focus:ring-rose-500/20"
                            }, [
                              createVNode("option", {
                                value: "",
                                disabled: ""
                              }, "Pilih Instrumen"),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.standards, (s) => {
                                return openBlock(), createBlock("option", {
                                  key: s.id,
                                  value: s.id
                                }, toDisplayString(s.name), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).master_standard_id]
                            ]),
                            unref(form).errors.master_standard_id ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-xs text-rose-500 font-bold ml-1"
                            }, toDisplayString(unref(form).errors.master_standard_id), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "space-y-3" }, [
                          createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Kategori Unit"),
                          createVNode("div", { class: "flex p-1.5 bg-slate-100 dark:bg-slate-800 rounded-3xl" }, [
                            createVNode("button", {
                              type: "button",
                              onClick: ($event) => unref(form).assignable_type = "prodi",
                              class: [unref(form).assignable_type === "prodi" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 dark:text-slate-500", "flex-1 py-4 text-[10px] font-black uppercase rounded-2xl transition-all duration-300"]
                            }, "Program Studi", 10, ["onClick"]),
                            createVNode("button", {
                              type: "button",
                              onClick: ($event) => unref(form).assignable_type = "faculty",
                              class: [unref(form).assignable_type === "faculty" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 dark:text-slate-500", "flex-1 py-4 text-[10px] font-black uppercase rounded-2xl transition-all duration-300"]
                            }, "Fakultas", 10, ["onClick"])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-2 gap-8" }, [
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Target Unit"),
                            withDirectives(createVNode("select", {
                              name: "assignable_id",
                              "onUpdate:modelValue": ($event) => unref(form).assignable_id = $event,
                              class: "w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white shadow-inner focus:ring-2 focus:ring-rose-500/20"
                            }, [
                              createVNode("option", {
                                value: "",
                                disabled: ""
                              }, "Unit Kerja"),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(form).assignable_type === "prodi" ? __props.prodis : __props.faculties, (item) => {
                                return openBlock(), createBlock("option", {
                                  key: item.id,
                                  value: item.id
                                }, toDisplayString(item.name), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).assignable_id]
                            ]),
                            unref(form).errors.assignable_id ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-xs text-rose-500 font-bold ml-1"
                            }, toDisplayString(unref(form).errors.assignable_id), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Lead Auditor"),
                            withDirectives(createVNode("select", {
                              name: "auditor_id",
                              "onUpdate:modelValue": ($event) => unref(form).auditor_id = $event,
                              class: "w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white shadow-inner focus:ring-2 focus:ring-rose-500/20"
                            }, [
                              createVNode("option", {
                                value: "",
                                disabled: ""
                              }, "Pilih Auditor"),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.auditors, (a) => {
                                return openBlock(), createBlock("option", {
                                  key: a.id,
                                  value: a.id
                                }, toDisplayString(a.name), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).auditor_id]
                            ]),
                            unref(form).errors.auditor_id ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-xs text-rose-500 font-bold ml-1"
                            }, toDisplayString(unref(form).errors.auditor_id), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("button", {
                          type: "submit",
                          disabled: unref(form).processing,
                          class: "w-full py-6 bg-slate-900 dark:bg-rose-600 text-white text-xs font-black uppercase tracking-[0.3em] rounded-[2.5rem] shadow-2xl hover:bg-rose-600 dark:hover:bg-rose-500 transition-all active:scale-95 disabled:opacity-50"
                        }, toDisplayString(unref(form).processing ? "Membuat Snapshots..." : "Inisialisasi Siklus AMI Baru"), 9, ["disabled"])
                      ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Assignment/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2cbb1ae0"]]);
export {
  Index as default
};

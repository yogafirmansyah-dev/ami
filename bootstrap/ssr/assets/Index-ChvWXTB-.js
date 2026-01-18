import { ref, watch, computed, resolveComponent, mergeProps, withCtx, unref, createBlock, openBlock, createVNode, Fragment, renderList, toDisplayString, withDirectives, createCommentVNode, vModelText, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { Link, router } from "@inertiajs/vue3";
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
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const isSearching = ref(false);
    const search = ref(props.filters.search || "");
    const status = ref(props.filters.status || "all");
    const updateFilters = () => {
      isSearching.value = true;
      router.get(route("auditee.assignments.index"), {
        search: search.value,
        status: status.value,
        sort_field: props.filters.sort_field,
        direction: props.filters.direction
      }, {
        preserveState: true,
        replace: true,
        preserveScroll: true,
        onFinish: () => isSearching.value = false
      });
    };
    const handleSort = (field) => {
      const currentSort = props.filters.sort_field;
      const currentDir = props.filters.direction || "asc";
      const nextDir = currentSort === field && currentDir === "asc" ? "desc" : "asc";
      router.get(route("auditee.assignments.index"), {
        search: search.value,
        status: status.value,
        sort_field: field,
        direction: nextDir
      }, {
        preserveState: true,
        preserveScroll: true
      });
    };
    watch(search, debounce(() => updateFilters(), 500));
    const changeStatus = (newStatus) => {
      status.value = newStatus;
      updateFilters();
    };
    const globalStats = computed(() => {
      const data = props.assignments.data || [];
      const total = props.assignments.total || 0;
      const avgProgress = data.length > 0 ? Math.round(data.reduce((acc, curr) => acc + getProgress(curr), 0) / data.length) : 0;
      const completed = data.filter((i) => i.current_stage === "finished").length;
      return { total, avgProgress, completed };
    });
    const getProgress = (item) => {
      const total = parseInt(item.indicators_count) || 0;
      const uploaded = parseInt(item.evidence_count) || 0;
      if (total === 0) return 0;
      return Math.min(Math.round(uploaded / total * 100), 100);
    };
    const getStageBadge = (stage) => {
      const map = {
        "doc_audit": "bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20",
        "field_audit": "bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20",
        "finding": "bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
        "reporting": "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
        "rtm_rtl": "bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",
        "finished": "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900"
      };
      return map[stage] || "bg-slate-50 text-slate-400 border-slate-100";
    };
    const stats = computed(() => {
      const gs = globalStats.value;
      return [
        {
          label: "Agenda Aktif",
          value: gs.total,
          icon: "fa-briefcase",
          color: "text-rose-600 dark:text-rose-400",
          bg: "bg-rose-50 dark:bg-rose-900/10 border-rose-100 dark:border-rose-500/20"
        },
        {
          label: "Progres Global",
          value: gs.avgProgress + "%",
          icon: "fa-chart-pie",
          color: "text-indigo-600 dark:text-indigo-400",
          bg: "bg-indigo-50 dark:bg-indigo-900/10 border-indigo-100 dark:border-indigo-500/20"
        },
        {
          label: "Riwayat Arsip",
          value: gs.completed,
          icon: "fa-archive",
          color: "text-slate-600 dark:text-slate-400",
          bg: "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800"
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Portal Auditee" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-4" data-v-b318da29${_scopeId}><div class="relative flex h-3 w-3" data-v-b318da29${_scopeId}><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" data-v-b318da29${_scopeId}></span><span class="relative inline-flex rounded-full h-3 w-3 bg-rose-500" data-v-b318da29${_scopeId}></span></div><h2 class="font-black text-xl text-slate-800 dark:text-white leading-tight uppercase tracking-tighter italic" data-v-b318da29${_scopeId}> Portal Auditee </h2></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-4" }, [
                createVNode("div", { class: "relative flex h-3 w-3" }, [
                  createVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" }),
                  createVNode("span", { class: "relative inline-flex rounded-full h-3 w-3 bg-rose-500" })
                ]),
                createVNode("h2", { class: "font-black text-xl text-slate-800 dark:text-white leading-tight uppercase tracking-tighter italic" }, " Portal Auditee ")
              ])
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pantau dan kelola pemenuhan standar mutu unit kerja Anda secara real-time. `);
          } else {
            return [
              createTextVNode(" Pantau dan kelola pemenuhan standar mutu unit kerja Anda secara real-time. ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-12" data-v-b318da29${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-b318da29${_scopeId}><!--[-->`);
            ssrRenderList(stats.value, (stat, idx) => {
              _push2(`<div class="${ssrRenderClass(["p-8 rounded-[2.5rem] border shadow-sm relative overflow-hidden group transition-all duration-300 hover:-translate-y-1", stat.bg])}" data-v-b318da29${_scopeId}><div class="flex justify-between items-start relative z-10" data-v-b318da29${_scopeId}><p class="${ssrRenderClass(["text-[10px] font-black uppercase tracking-[0.2em]", stat.color])}" data-v-b318da29${_scopeId}>${ssrInterpolate(stat.label)}</p>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: `fa-solid ${stat.icon}`,
                class: ["text-lg opacity-80", stat.color]
              }, null, _parent2, _scopeId));
              _push2(`</div><p class="${ssrRenderClass(["text-4xl font-black mt-4 tracking-tighter italic text-slate-900 dark:text-white", stat.color])}" data-v-b318da29${_scopeId}>${ssrInterpolate(stat.value)}</p>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: `fa-solid ${stat.icon}`,
                class: ["absolute -right-6 -bottom-6 text-9xl opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-700", stat.color]
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div class="flex flex-col lg:flex-row justify-between items-center gap-6" data-v-b318da29${_scopeId}><div class="flex items-center gap-2 p-1.5 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm" data-v-b318da29${_scopeId}><!--[-->`);
            ssrRenderList(["all", "on_going", "completed"], (s) => {
              _push2(`<button class="${ssrRenderClass([status.value === s ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30" : "text-slate-400 hover:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800", "px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300"])}" data-v-b318da29${_scopeId}>${ssrInterpolate(s === "all" ? "Semua Audit" : s === "on_going" ? "Proses Berjalan" : "Selesai")}</button>`);
            });
            _push2(`<!--]--></div><div class="relative w-full lg:w-96 group" data-v-b318da29${_scopeId}><div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" data-v-b318da29${_scopeId}><svg class="w-4 h-4 text-slate-400 group-focus-within:text-rose-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-b318da29${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-b318da29${_scopeId}></path></svg></div><input${ssrRenderAttr("value", search.value)} type="text" class="w-full pl-12 pr-6 py-4 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-700 dark:text-white placeholder:text-slate-400 shadow-sm ring-1 ring-slate-100 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500/20 transition-all" placeholder="Cari Standar Mutu..." data-v-b318da29${_scopeId}>`);
            if (isSearching.value) {
              _push2(`<div class="absolute inset-y-0 right-0 pr-5 flex items-center" data-v-b318da29${_scopeId}><div class="w-3 h-3 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" data-v-b318da29${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden" data-v-b318da29${_scopeId}>`);
            if (__props.assignments.data.length > 0) {
              _push2(`<div class="overflow-x-auto" data-v-b318da29${_scopeId}><table class="w-full min-w-[1000px]" data-v-b318da29${_scopeId}><thead data-v-b318da29${_scopeId}><tr class="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30" data-v-b318da29${_scopeId}><th class="px-10 py-8 text-center text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]" data-v-b318da29${_scopeId}> No</th><th class="px-10 py-8 text-left text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-b318da29${_scopeId}><div class="flex items-center justify-between gap-2" data-v-b318da29${_scopeId}> Standar Mutu &amp; Periode <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-b318da29${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-caret-up",
                class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "standard_name" && __props.filters.direction === "asc" }, "-mb-1"]
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-caret-down",
                class: { "text-rose-500 opacity-100": __props.filters.sort_field === "standard_name" && __props.filters.direction === "desc" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div></th><th class="px-10 py-8 text-left text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-b318da29${_scopeId}><div class="flex items-center justify-between gap-2" data-v-b318da29${_scopeId}> Unit Kerja &amp; Kategori <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-b318da29${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-caret-up",
                class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "assignable_name" && __props.filters.direction === "asc" }, "-mb-1"]
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-caret-down",
                class: { "text-rose-500 opacity-100": __props.filters.sort_field === "assignable_name" && __props.filters.direction === "desc" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div></th><th class="px-10 py-8 text-left text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-b318da29${_scopeId}><div class="flex items-center justify-between gap-2" data-v-b318da29${_scopeId}> Auditor <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-b318da29${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-caret-up",
                class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "auditor_name" && __props.filters.direction === "asc" }, "-mb-1"]
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-caret-down",
                class: { "text-rose-500 opacity-100": __props.filters.sort_field === "auditor_name" && __props.filters.direction === "desc" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div></th><th class="px-10 py-8 text-center text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]" data-v-b318da29${_scopeId}> Status Tahapan</th><th class="px-10 py-8 text-left text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]" data-v-b318da29${_scopeId}> Kepatuhan Unit</th><th class="px-10 py-8 text-right text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]" data-v-b318da29${_scopeId}> Aksi</th></tr></thead><tbody class="divide-y divide-slate-50 dark:divide-slate-800" data-v-b318da29${_scopeId}><!--[-->`);
              ssrRenderList(__props.assignments.data, (item) => {
                _push2(`<tr class="group hover:bg-rose-50/30 dark:hover:bg-rose-900/10 transition-colors duration-300" data-v-b318da29${_scopeId}><td class="px-10 py-8" data-v-b318da29${_scopeId}><span class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" data-v-b318da29${_scopeId}>${ssrInterpolate(__props.assignments.from + __props.assignments.data.indexOf(item))}</span></td><td class="px-10 py-8" data-v-b318da29${_scopeId}><h4 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tighter italic mb-2 group-hover:text-rose-600 transition-colors" data-v-b318da29${_scopeId}>${ssrInterpolate(item.standard?.name)}</h4><span class="inline-flex items-center px-2.5 py-1 rounded-md bg-rose-400 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-[8px] font-black text-slate-500 uppercase tracking-widest shadow-sm" data-v-b318da29${_scopeId}>${ssrInterpolate(item.period?.name)}</span></td><td class="px-10 py-8" data-v-b318da29${_scopeId}><div class="flex items-center gap-4" data-v-b318da29${_scopeId}><div class="${ssrRenderClass([
                  "w-12 h-12 rounded-xl flex items-center justify-center font-black text-base shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] border border-white/20 dark:border-white/5 transition-transform group-hover:scale-105 duration-500",
                  item.assignable_type.includes("Prodi") ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600" : "bg-rose-50 dark:bg-rose-500/10 text-rose-600"
                ])}" data-v-b318da29${_scopeId}>${ssrInterpolate(item.assignable?.name?.charAt(0))}</div><div data-v-b318da29${_scopeId}><div class="font-black text-slate-800 dark:text-slate-200 uppercase text-xs tracking-tight italic leading-none mb-1.5" data-v-b318da29${_scopeId}>${ssrInterpolate(item.assignable?.name)}</div><div class="flex items-center gap-2" data-v-b318da29${_scopeId}><span class="${ssrRenderClass([
                  "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border shadow-sm",
                  item.assignable_type.includes("Prodi") ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 border-indigo-100 dark:border-indigo-500/20" : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20"
                ])}" data-v-b318da29${_scopeId}>${ssrInterpolate(item.assignable_type.includes("Prodi") ? "Program Studi" : "Fakultas")}</span></div></div></div></td><td class="px-10 py-8" data-v-b318da29${_scopeId}>`);
                if (item.auditor) {
                  _push2(`<div class="flex items-center gap-4" data-v-b318da29${_scopeId}><div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-600 dark:text-slate-300 border-2 border-white dark:border-slate-700 shadow-lg group-hover:scale-110 transition-transform" data-v-b318da29${_scopeId}>${ssrInterpolate(item.auditor.name.substring(0, 2).toUpperCase())}</div><div data-v-b318da29${_scopeId}><p class="text-xs font-bold text-slate-700 dark:text-slate-200" data-v-b318da29${_scopeId}>${ssrInterpolate(item.auditor.name)}</p><p class="text-[9px] text-slate-400 font-medium" data-v-b318da29${_scopeId}>Penilai Utama</p></div></div>`);
                } else {
                  _push2(`<span class="text-[9px] font-black italic text-slate-300 uppercase tracking-widest" data-v-b318da29${_scopeId}>Belum Ditentukan</span>`);
                }
                _push2(`</td><td class="px-10 py-8 text-center" data-v-b318da29${_scopeId}><span class="${ssrRenderClass(["inline-flex items-center px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm", getStageBadge(item.current_stage)])}" data-v-b318da29${_scopeId}>${ssrInterpolate(item.current_stage.replace("_", " "))}</span></td><td class="px-10 py-8" data-v-b318da29${_scopeId}><div class="w-full max-w-[150px]" data-v-b318da29${_scopeId}><div class="flex justify-between items-end mb-2" data-v-b318da29${_scopeId}><span class="text-[9px] font-bold text-slate-400" data-v-b318da29${_scopeId}>Terisi</span><span class="text-xs font-black text-rose-600" data-v-b318da29${_scopeId}>${ssrInterpolate(getProgress(item))}%</span></div><div class="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden" data-v-b318da29${_scopeId}><div class="h-full bg-gradient-to-r from-rose-400 to-rose-600 rounded-full" style="${ssrRenderStyle({ width: getProgress(item) + "%" })}" data-v-b318da29${_scopeId}></div></div></div></td><td class="px-10 py-8 text-right" data-v-b318da29${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("auditee.assignments.show", item.id),
                  class: "inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 text-slate-400 hover:text-white hover:bg-rose-600 border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-rose-500/30 transition-all duration-300 group-hover:scale-110"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b318da29${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-b318da29${_scopeId2}></path></svg>`);
                    } else {
                      return [
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
                            d: "M14 5l7 7m0 0l-7 7m7-7H3"
                          })
                        ]))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            } else {
              _push2(`<div class="py-32 flex flex-col items-center justify-center text-center" data-v-b318da29${_scopeId}><div class="w-24 h-24 bg-rose-50 dark:bg-rose-900/10 rounded-full flex items-center justify-center mb-6" data-v-b318da29${_scopeId}><svg class="w-10 h-10 text-rose-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b318da29${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-v-b318da29${_scopeId}></path></svg></div><h3 class="text-2xl font-black text-slate-800 dark:text-white italic tracking-tighter mb-2" data-v-b318da29${_scopeId}>Belum Ada Agenda </h3><p class="text-slate-400 text-sm max-w-sm leading-relaxed" data-v-b318da29${_scopeId}>Saat ini unit kerja Anda belum memiliki jadwal audit yang aktif atau arsip tersimpan.</p></div>`);
            }
            if (__props.assignments.data.length > 0) {
              _push2(`<div class="px-10 py-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/30 dark:bg-slate-800/20" data-v-b318da29${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest" data-v-b318da29${_scopeId}> Menampilkan <span class="text-slate-900 dark:text-white" data-v-b318da29${_scopeId}>${ssrInterpolate(__props.assignments.from)}-${ssrInterpolate(__props.assignments.to)}</span> dari ${ssrInterpolate(__props.assignments.total)}</p><div class="flex gap-2" data-v-b318da29${_scopeId}><!--[-->`);
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
                  ])}" data-v-b318da29${_scopeId}>${link.label ?? ""}</span>`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-12" }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(stats.value, (stat, idx) => {
                    return openBlock(), createBlock("div", {
                      key: idx,
                      class: ["p-8 rounded-[2.5rem] border shadow-sm relative overflow-hidden group transition-all duration-300 hover:-translate-y-1", stat.bg]
                    }, [
                      createVNode("div", { class: "flex justify-between items-start relative z-10" }, [
                        createVNode("p", {
                          class: ["text-[10px] font-black uppercase tracking-[0.2em]", stat.color]
                        }, toDisplayString(stat.label), 3),
                        createVNode(_component_icon, {
                          icon: `fa-solid ${stat.icon}`,
                          class: ["text-lg opacity-80", stat.color]
                        }, null, 8, ["icon", "class"])
                      ]),
                      createVNode("p", {
                        class: ["text-4xl font-black mt-4 tracking-tighter italic text-slate-900 dark:text-white", stat.color]
                      }, toDisplayString(stat.value), 3),
                      createVNode(_component_icon, {
                        icon: `fa-solid ${stat.icon}`,
                        class: ["absolute -right-6 -bottom-6 text-9xl opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-700", stat.color]
                      }, null, 8, ["icon", "class"])
                    ], 2);
                  }), 128))
                ]),
                createVNode("div", { class: "flex flex-col lg:flex-row justify-between items-center gap-6" }, [
                  createVNode("div", { class: "flex items-center gap-2 p-1.5 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(["all", "on_going", "completed"], (s) => {
                      return createVNode("button", {
                        key: s,
                        onClick: ($event) => changeStatus(s),
                        class: ["px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300", status.value === s ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30" : "text-slate-400 hover:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"]
                      }, toDisplayString(s === "all" ? "Semua Audit" : s === "on_going" ? "Proses Berjalan" : "Selesai"), 11, ["onClick"]);
                    }), 64))
                  ]),
                  createVNode("div", { class: "relative w-full lg:w-96 group" }, [
                    createVNode("div", { class: "absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-4 h-4 text-slate-400 group-focus-within:text-rose-500 transition-colors",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        })
                      ]))
                    ]),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      type: "text",
                      class: "w-full pl-12 pr-6 py-4 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-700 dark:text-white placeholder:text-slate-400 shadow-sm ring-1 ring-slate-100 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500/20 transition-all",
                      placeholder: "Cari Standar Mutu..."
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, search.value]
                    ]),
                    isSearching.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "absolute inset-y-0 right-0 pr-5 flex items-center"
                    }, [
                      createVNode("div", { class: "w-3 h-3 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" })
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden" }, [
                  __props.assignments.data.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "overflow-x-auto"
                  }, [
                    createVNode("table", { class: "w-full min-w-[1000px]" }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30" }, [
                          createVNode("th", { class: "px-10 py-8 text-center text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]" }, " No"),
                          createVNode("th", {
                            onClick: ($event) => handleSort("standard_name"),
                            class: "px-10 py-8 text-left text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                              createTextVNode(" Standar Mutu & Periode "),
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
                            onClick: ($event) => handleSort("assignable_name"),
                            class: "px-10 py-8 text-left text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center justify-between gap-2" }, [
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
                            onClick: ($event) => handleSort("auditor_name"),
                            class: "px-10 py-8 text-left text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center justify-between gap-2" }, [
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
                          createVNode("th", { class: "px-10 py-8 text-center text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]" }, " Status Tahapan"),
                          createVNode("th", { class: "px-10 py-8 text-left text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]" }, " Kepatuhan Unit"),
                          createVNode("th", { class: "px-10 py-8 text-right text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]" }, " Aksi")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-slate-50 dark:divide-slate-800" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.assignments.data, (item) => {
                          return openBlock(), createBlock("tr", {
                            key: item.id,
                            class: "group hover:bg-rose-50/30 dark:hover:bg-rose-900/10 transition-colors duration-300"
                          }, [
                            createVNode("td", { class: "px-10 py-8" }, [
                              createVNode("span", { class: "font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" }, toDisplayString(__props.assignments.from + __props.assignments.data.indexOf(item)), 1)
                            ]),
                            createVNode("td", { class: "px-10 py-8" }, [
                              createVNode("h4", { class: "text-sm font-black text-slate-800 dark:text-white uppercase tracking-tighter italic mb-2 group-hover:text-rose-600 transition-colors" }, toDisplayString(item.standard?.name), 1),
                              createVNode("span", { class: "inline-flex items-center px-2.5 py-1 rounded-md bg-rose-400 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-[8px] font-black text-slate-500 uppercase tracking-widest shadow-sm" }, toDisplayString(item.period?.name), 1)
                            ]),
                            createVNode("td", { class: "px-10 py-8" }, [
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
                            createVNode("td", { class: "px-10 py-8" }, [
                              item.auditor ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex items-center gap-4"
                              }, [
                                createVNode("div", { class: "w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-600 dark:text-slate-300 border-2 border-white dark:border-slate-700 shadow-lg group-hover:scale-110 transition-transform" }, toDisplayString(item.auditor.name.substring(0, 2).toUpperCase()), 1),
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-xs font-bold text-slate-700 dark:text-slate-200" }, toDisplayString(item.auditor.name), 1),
                                  createVNode("p", { class: "text-[9px] text-slate-400 font-medium" }, "Penilai Utama")
                                ])
                              ])) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-[9px] font-black italic text-slate-300 uppercase tracking-widest"
                              }, "Belum Ditentukan"))
                            ]),
                            createVNode("td", { class: "px-10 py-8 text-center" }, [
                              createVNode("span", {
                                class: ["inline-flex items-center px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm", getStageBadge(item.current_stage)]
                              }, toDisplayString(item.current_stage.replace("_", " ")), 3)
                            ]),
                            createVNode("td", { class: "px-10 py-8" }, [
                              createVNode("div", { class: "w-full max-w-[150px]" }, [
                                createVNode("div", { class: "flex justify-between items-end mb-2" }, [
                                  createVNode("span", { class: "text-[9px] font-bold text-slate-400" }, "Terisi"),
                                  createVNode("span", { class: "text-xs font-black text-rose-600" }, toDisplayString(getProgress(item)) + "%", 1)
                                ]),
                                createVNode("div", { class: "h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden" }, [
                                  createVNode("div", {
                                    class: "h-full bg-gradient-to-r from-rose-400 to-rose-600 rounded-full",
                                    style: { width: getProgress(item) + "%" }
                                  }, null, 4)
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "px-10 py-8 text-right" }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("auditee.assignments.show", item.id),
                                class: "inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 text-slate-400 hover:text-white hover:bg-rose-600 border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-rose-500/30 transition-all duration-300 group-hover:scale-110"
                              }, {
                                default: withCtx(() => [
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
                                      d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "py-32 flex flex-col items-center justify-center text-center"
                  }, [
                    createVNode("div", { class: "w-24 h-24 bg-rose-50 dark:bg-rose-900/10 rounded-full flex items-center justify-center mb-6" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-10 h-10 text-rose-300",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "1.5",
                          d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        })
                      ]))
                    ]),
                    createVNode("h3", { class: "text-2xl font-black text-slate-800 dark:text-white italic tracking-tighter mb-2" }, "Belum Ada Agenda "),
                    createVNode("p", { class: "text-slate-400 text-sm max-w-sm leading-relaxed" }, "Saat ini unit kerja Anda belum memiliki jadwal audit yang aktif atau arsip tersimpan.")
                  ])),
                  __props.assignments.data.length > 0 ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "px-10 py-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/30 dark:bg-slate-800/20"
                  }, [
                    createVNode("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest" }, [
                      createTextVNode(" Menampilkan "),
                      createVNode("span", { class: "text-slate-900 dark:text-white" }, toDisplayString(__props.assignments.from) + "-" + toDisplayString(__props.assignments.to), 1),
                      createTextVNode(" dari " + toDisplayString(__props.assignments.total), 1)
                    ]),
                    createVNode("div", { class: "flex gap-2" }, [
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
                  ])) : createCommentVNode("", true)
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auditee/Assignment/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b318da29"]]);
export {
  Index as default
};

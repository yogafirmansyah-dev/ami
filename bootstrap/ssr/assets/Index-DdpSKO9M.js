import { ref, watch, computed, resolveComponent, mergeProps, withCtx, unref, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, withDirectives, vModelText, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { router, Link } from "@inertiajs/vue3";
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
    const updateSearch = debounce((value) => {
      isSearching.value = true;
      router.get(route("auditor.assignments.index"), {
        search: value,
        status: status.value,
        sort_field: props.filters.sort_field,
        direction: props.filters.direction
      }, {
        preserveState: true,
        replace: true,
        preserveScroll: true,
        onFinish: () => isSearching.value = false
      });
    }, 500);
    watch(search, (val) => updateSearch(val));
    const changeStatus = (newStatus) => {
      status.value = newStatus;
      router.get(route("auditor.assignments.index"), {
        search: search.value,
        status: newStatus,
        sort_field: props.filters.sort_field,
        direction: props.filters.direction
      }, {
        preserveState: true,
        preserveScroll: true
      });
    };
    const handleSort = (field) => {
      const currentSort = props.filters.sort_field;
      const currentDir = props.filters.direction || "asc";
      const nextDir = currentSort === field && currentDir === "asc" ? "desc" : "asc";
      router.get(route("auditor.assignments.index"), {
        search: search.value,
        status: status.value,
        sort_field: field,
        direction: nextDir
      }, {
        preserveState: true,
        preserveScroll: true
      });
    };
    const stats = computed(() => {
      const data = props.assignments.data || [];
      const ongoingCount = data.filter((i) => i.current_stage !== "finished").length;
      const pendingCount = data.filter((i) => ["doc_audit", "field_audit"].includes(i.current_stage)).length;
      return [
        {
          label: "Total Ditugaskan",
          value: props.assignments.total,
          icon: "fa-briefcase",
          color: "text-slate-600 dark:text-slate-400",
          bg: "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800"
        },
        {
          label: "Audit Aktif",
          value: ongoingCount,
          icon: "fa-bolt",
          color: "text-emerald-500",
          bg: "bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-500/20"
        },
        {
          label: "Menunggu Review",
          value: pendingCount,
          icon: "fa-hourglass-half",
          color: "text-amber-500",
          bg: "bg-amber-50/50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-500/20"
        }
      ];
    });
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
      return configs[stage] || { label: stage.replaceAll("_", " ").toUpperCase(), color: "text-slate-400 bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700" };
    };
    const getCategoryStyle = (type) => {
      return type.includes("Prodi") ? "bg-indigo-50 dark:bg-indigo-500/10 border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400" : "bg-rose-50 dark:bg-rose-500/10 border-rose-100 dark:border-rose-500/20 text-rose-600 dark:text-rose-400";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Penugasan Audit Saya" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Mesin Kerja Auditor`);
          } else {
            return [
              createTextVNode("Mesin Kerja Auditor")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kelola evaluasi instrumen dan verifikasi temuan unit kerja secara profesional`);
          } else {
            return [
              createTextVNode("Kelola evaluasi instrumen dan verifikasi temuan unit kerja secara profesional")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-8" data-v-78abf455${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-78abf455${_scopeId}><!--[-->`);
            ssrRenderList(stats.value, (stat, idx) => {
              _push2(`<div class="${ssrRenderClass(["p-8 rounded-[2.5rem] border shadow-sm relative overflow-hidden group transition-all duration-300 hover:-translate-y-1", stat.bg])}" data-v-78abf455${_scopeId}><div class="flex justify-between items-start relative z-10" data-v-78abf455${_scopeId}><p class="${ssrRenderClass(["text-[10px] font-black uppercase tracking-[0.2em]", stat.color.split(" ")[0]])}" data-v-78abf455${_scopeId}>${ssrInterpolate(stat.label)}</p>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: `fa-solid ${stat.icon}`,
                class: ["text-lg opacity-80", stat.color.split(" ")[0]]
              }, null, _parent2, _scopeId));
              _push2(`</div><p class="${ssrRenderClass(["text-4xl font-black mt-4 tracking-tighter italic text-slate-900 dark:text-white", stat.color.split(" ")[0]])}" data-v-78abf455${_scopeId}>${ssrInterpolate(stat.value)}</p>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: `fa-solid ${stat.icon}`,
                class: ["absolute -right-6 -bottom-6 text-9xl opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-700", stat.color.split(" ")[0]]
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div class="flex flex-col lg:flex-row justify-between items-center gap-6" data-v-78abf455${_scopeId}><div class="relative w-full lg:w-96 group" data-v-78abf455${_scopeId}><span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" data-v-78abf455${_scopeId}>`);
            if (!isSearching.value) {
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-magnifying-glass",
                class: "text-slate-400 group-focus-within:text-emerald-500 transition-colors text-sm"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="h-4 w-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" data-v-78abf455${_scopeId}></div>`);
            }
            _push2(`</span><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari Unit atau Periode..." class="w-full pl-12 pr-6 py-4 border-none ring-1 ring-slate-200 dark:ring-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all shadow-sm text-xs font-bold text-slate-700 dark:text-slate-200" data-v-78abf455${_scopeId}></div><div class="flex items-center gap-1 bg-white dark:bg-slate-900 p-1.5 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 shadow-sm" data-v-78abf455${_scopeId}><!--[-->`);
            ssrRenderList(["all", "on_going", "completed"], (s) => {
              _push2(`<button class="${ssrRenderClass([
                "px-6 py-2.5 text-[10px] font-black uppercase rounded-2xl transition-all duration-300 flex items-center gap-2",
                status.value === s ? "bg-slate-900 dark:bg-emerald-600 text-white shadow-lg shadow-slate-900/10 dark:shadow-emerald-600/20" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              ])}" data-v-78abf455${_scopeId}>${ssrInterpolate(s.replace("_", " "))}</button>`);
            });
            _push2(`<!--]--></div></div><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" data-v-78abf455${_scopeId}><div class="overflow-x-auto custom-scrollbar" data-v-78abf455${_scopeId}><table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full" data-v-78abf455${_scopeId}><thead data-v-78abf455${_scopeId}><tr class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" data-v-78abf455${_scopeId}><th class="p-6 md:p-8" data-v-78abf455${_scopeId}>No</th><th class="p-6 md:p-8" data-v-78abf455${_scopeId}>Unit Audit</th><th class="p-6 md:p-8 cursor-pointer hover:text-emerald-500 transition-colors group select-none" data-v-78abf455${_scopeId}><div class="flex items-center gap-2" data-v-78abf455${_scopeId}> Referensi <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-78abf455${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-emerald-500 opacity-100": __props.filters.sort_field === "standard_name" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-emerald-500 opacity-100": __props.filters.sort_field === "standard_name" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8 text-center cursor-pointer hover:text-emerald-500 transition-colors group select-none" data-v-78abf455${_scopeId}><div class="flex items-center justify-center gap-2" data-v-78abf455${_scopeId}> Tahapan <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-78abf455${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-emerald-500 opacity-100": __props.filters.sort_field === "current_stage" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-emerald-500 opacity-100": __props.filters.sort_field === "current_stage" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8" data-v-78abf455${_scopeId}>Progres</th><th class="p-6 md:p-8 text-right" data-v-78abf455${_scopeId}>Aksi</th></tr></thead>`);
            if (__props.assignments.data.length > 0) {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-78abf455${_scopeId}><!--[-->`);
              ssrRenderList(__props.assignments.data, (item) => {
                _push2(`<tr class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300" data-v-78abf455${_scopeId}><td class="p-6 md:p-8" data-v-78abf455${_scopeId}><span class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" data-v-78abf455${_scopeId}>${ssrInterpolate(__props.assignments.from + __props.assignments.data.indexOf(item))}</span></td><td class="p-6 md:p-8" data-v-78abf455${_scopeId}><div class="flex items-center gap-5" data-v-78abf455${_scopeId}><div class="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center font-black text-slate-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner group-hover:shadow-emerald-500/30" data-v-78abf455${_scopeId}>${ssrInterpolate(item.assignable?.name?.charAt(0))}</div><div data-v-78abf455${_scopeId}><div class="font-black text-slate-900 dark:text-white uppercase tracking-tighter italic text-sm leading-none mb-1.5" data-v-78abf455${_scopeId}>${ssrInterpolate(item.assignable?.name)}</div><div class="${ssrRenderClass(["inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[8px] font-black uppercase tracking-widest", getCategoryStyle(item.assignable_type)])}" data-v-78abf455${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: item.assignable_type.includes("Prodi") ? "fa-solid fa-graduation-cap" : "fa-solid fa-building",
                  class: "text-[9px]"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(item.assignable_type.includes("Prodi") ? "Program Studi" : "Fakultas / Unit")}</div></div></div></td><td class="p-6 md:p-8" data-v-78abf455${_scopeId}><div class="text-[11px] font-bold text-slate-700 dark:text-slate-300 leading-snug" data-v-78abf455${_scopeId}>${ssrInterpolate(item.standard?.name)}</div><div class="text-[9px] font-black text-emerald-500 uppercase tracking-tighter mt-1.5 flex items-center gap-1.5 opacity-80" data-v-78abf455${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, { icon: "fa-regular fa-clock" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(item.period?.name)}</div></td><td class="p-6 md:p-8 text-center" data-v-78abf455${_scopeId}><span class="${ssrRenderClass(["px-3 py-1.5 rounded-lg text-[9px] font-black uppercase border tracking-widest inline-block whitespace-nowrap shadow-sm transition-all", getStageConfig(item.current_stage).color])}" data-v-78abf455${_scopeId}>${ssrInterpolate(getStageConfig(item.current_stage).label)}</span></td><td class="p-6 md:p-8" data-v-78abf455${_scopeId}><div class="flex flex-col gap-2 w-full max-w-[140px]" data-v-78abf455${_scopeId}><div class="flex justify-between text-[8px] font-black uppercase" data-v-78abf455${_scopeId}><span class="text-emerald-600 dark:text-emerald-400 italic tracking-widest" data-v-78abf455${_scopeId}>${ssrInterpolate(getProgress(item))}%</span><span class="text-slate-300 dark:text-slate-600 tracking-tighter" data-v-78abf455${_scopeId}>${ssrInterpolate(item.scored_indicators_count)}/${ssrInterpolate(item.indicators_count)}</span></div><div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden p-[1px] shadow-inner" data-v-78abf455${_scopeId}><div class="bg-gradient-to-r from-emerald-500 to-emerald-400 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.4)]" style="${ssrRenderStyle({ width: getProgress(item) + "%" })}" data-v-78abf455${_scopeId}></div></div></div></td><td class="p-6 md:p-8 text-right" data-v-78abf455${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("auditor.assignments.show", item.id),
                  class: "inline-flex items-center justify-center w-10 h-10 bg-slate-900 dark:bg-emerald-600 text-white rounded-xl hover:scale-110 hover:shadow-xl hover:shadow-emerald-500/20 hover:bg-emerald-600 transition-all active:scale-95",
                  title: "Buka Evaluasi"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_icon, {
                        icon: "fa-solid fa-arrow-right-to-bracket",
                        class: "text-xs"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_icon, {
                          icon: "fa-solid fa-arrow-right-to-bracket",
                          class: "text-xs"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</td></tr>`);
              });
              _push2(`<!--]--></tbody>`);
            } else {
              _push2(`<tbody data-v-78abf455${_scopeId}><tr data-v-78abf455${_scopeId}><td colspan="6" class="p-12 text-center" data-v-78abf455${_scopeId}><div class="flex flex-col items-center justify-center py-12" data-v-78abf455${_scopeId}><div class="w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-sm" data-v-78abf455${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-clipboard-check",
                class: "text-4xl text-slate-300 dark:text-slate-600"
              }, null, _parent2, _scopeId));
              _push2(`</div><h4 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-widest mb-2" data-v-78abf455${_scopeId}> Belum Ada Penugasan </h4><p class="text-xs font-bold text-slate-400 max-w-xs mx-auto" data-v-78abf455${_scopeId}> Saat ini belum ada data penugasan audit yang tersedia untuk Anda. </p></div></td></tr></tbody>`);
            }
            _push2(`</table></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-78abf455${_scopeId}><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left flex items-center gap-2" data-v-78abf455${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" data-v-78abf455${_scopeId}></span> Data ${ssrInterpolate(__props.assignments.from)} - ${ssrInterpolate(__props.assignments.to)} dari total ${ssrInterpolate(__props.assignments.total)}</div><div class="flex flex-wrap justify-center gap-1.5" data-v-78abf455${_scopeId}><!--[-->`);
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
                ])}" data-v-78abf455${_scopeId}>${link.label ?? ""}</span>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-8" }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(stats.value, (stat, idx) => {
                    return openBlock(), createBlock("div", {
                      key: idx,
                      class: ["p-8 rounded-[2.5rem] border shadow-sm relative overflow-hidden group transition-all duration-300 hover:-translate-y-1", stat.bg]
                    }, [
                      createVNode("div", { class: "flex justify-between items-start relative z-10" }, [
                        createVNode("p", {
                          class: ["text-[10px] font-black uppercase tracking-[0.2em]", stat.color.split(" ")[0]]
                        }, toDisplayString(stat.label), 3),
                        createVNode(_component_icon, {
                          icon: `fa-solid ${stat.icon}`,
                          class: ["text-lg opacity-80", stat.color.split(" ")[0]]
                        }, null, 8, ["icon", "class"])
                      ]),
                      createVNode("p", {
                        class: ["text-4xl font-black mt-4 tracking-tighter italic text-slate-900 dark:text-white", stat.color.split(" ")[0]]
                      }, toDisplayString(stat.value), 3),
                      createVNode(_component_icon, {
                        icon: `fa-solid ${stat.icon}`,
                        class: ["absolute -right-6 -bottom-6 text-9xl opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-700", stat.color.split(" ")[0]]
                      }, null, 8, ["icon", "class"])
                    ], 2);
                  }), 128))
                ]),
                createVNode("div", { class: "flex flex-col lg:flex-row justify-between items-center gap-6" }, [
                  createVNode("div", { class: "relative w-full lg:w-96 group" }, [
                    createVNode("span", { class: "absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" }, [
                      !isSearching.value ? (openBlock(), createBlock(_component_icon, {
                        key: 0,
                        icon: "fa-solid fa-magnifying-glass",
                        class: "text-slate-400 group-focus-within:text-emerald-500 transition-colors text-sm"
                      })) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "h-4 w-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"
                      }))
                    ]),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      type: "text",
                      placeholder: "Cari Unit atau Periode...",
                      class: "w-full pl-12 pr-6 py-4 border-none ring-1 ring-slate-200 dark:ring-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all shadow-sm text-xs font-bold text-slate-700 dark:text-slate-200"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, search.value]
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-1 bg-white dark:bg-slate-900 p-1.5 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 shadow-sm" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(["all", "on_going", "completed"], (s) => {
                      return createVNode("button", {
                        key: s,
                        onClick: ($event) => changeStatus(s),
                        class: [
                          "px-6 py-2.5 text-[10px] font-black uppercase rounded-2xl transition-all duration-300 flex items-center gap-2",
                          status.value === s ? "bg-slate-900 dark:bg-emerald-600 text-white shadow-lg shadow-slate-900/10 dark:shadow-emerald-600/20" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                        ]
                      }, toDisplayString(s.replace("_", " ")), 11, ["onClick"]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" }, [
                  createVNode("div", { class: "overflow-x-auto custom-scrollbar" }, [
                    createVNode("table", { class: "w-full text-left border-collapse min-w-[1000px] lg:min-w-full" }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" }, [
                          createVNode("th", { class: "p-6 md:p-8" }, "No"),
                          createVNode("th", { class: "p-6 md:p-8" }, "Unit Audit"),
                          createVNode("th", {
                            onClick: ($event) => handleSort("standard_name"),
                            class: "p-6 md:p-8 cursor-pointer hover:text-emerald-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createTextVNode(" Referensi "),
                              createVNode("div", { class: "flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-up",
                                  class: [{ "text-emerald-500 opacity-100": __props.filters.sort_field === "standard_name" && __props.filters.direction === "asc" }, "-mb-1"]
                                }, null, 8, ["class"]),
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-down",
                                  class: { "text-emerald-500 opacity-100": __props.filters.sort_field === "standard_name" && __props.filters.direction === "desc" }
                                }, null, 8, ["class"])
                              ])
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", {
                            onClick: ($event) => handleSort("current_stage"),
                            class: "p-6 md:p-8 text-center cursor-pointer hover:text-emerald-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                              createTextVNode(" Tahapan "),
                              createVNode("div", { class: "flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-up",
                                  class: [{ "text-emerald-500 opacity-100": __props.filters.sort_field === "current_stage" && __props.filters.direction === "asc" }, "-mb-1"]
                                }, null, 8, ["class"]),
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-down",
                                  class: { "text-emerald-500 opacity-100": __props.filters.sort_field === "current_stage" && __props.filters.direction === "desc" }
                                }, null, 8, ["class"])
                              ])
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", { class: "p-6 md:p-8" }, "Progres"),
                          createVNode("th", { class: "p-6 md:p-8 text-right" }, "Aksi")
                        ])
                      ]),
                      __props.assignments.data.length > 0 ? (openBlock(), createBlock("tbody", {
                        key: 0,
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
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "flex items-center gap-5" }, [
                                createVNode("div", { class: "w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center font-black text-slate-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner group-hover:shadow-emerald-500/30" }, toDisplayString(item.assignable?.name?.charAt(0)), 1),
                                createVNode("div", null, [
                                  createVNode("div", { class: "font-black text-slate-900 dark:text-white uppercase tracking-tighter italic text-sm leading-none mb-1.5" }, toDisplayString(item.assignable?.name), 1),
                                  createVNode("div", {
                                    class: ["inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[8px] font-black uppercase tracking-widest", getCategoryStyle(item.assignable_type)]
                                  }, [
                                    createVNode(_component_icon, {
                                      icon: item.assignable_type.includes("Prodi") ? "fa-solid fa-graduation-cap" : "fa-solid fa-building",
                                      class: "text-[9px]"
                                    }, null, 8, ["icon"]),
                                    createTextVNode(" " + toDisplayString(item.assignable_type.includes("Prodi") ? "Program Studi" : "Fakultas / Unit"), 1)
                                  ], 2)
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "text-[11px] font-bold text-slate-700 dark:text-slate-300 leading-snug" }, toDisplayString(item.standard?.name), 1),
                              createVNode("div", { class: "text-[9px] font-black text-emerald-500 uppercase tracking-tighter mt-1.5 flex items-center gap-1.5 opacity-80" }, [
                                createVNode(_component_icon, { icon: "fa-regular fa-clock" }),
                                createTextVNode(" " + toDisplayString(item.period?.name), 1)
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("span", {
                                class: ["px-3 py-1.5 rounded-lg text-[9px] font-black uppercase border tracking-widest inline-block whitespace-nowrap shadow-sm transition-all", getStageConfig(item.current_stage).color]
                              }, toDisplayString(getStageConfig(item.current_stage).label), 3)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "flex flex-col gap-2 w-full max-w-[140px]" }, [
                                createVNode("div", { class: "flex justify-between text-[8px] font-black uppercase" }, [
                                  createVNode("span", { class: "text-emerald-600 dark:text-emerald-400 italic tracking-widest" }, toDisplayString(getProgress(item)) + "%", 1),
                                  createVNode("span", { class: "text-slate-300 dark:text-slate-600 tracking-tighter" }, toDisplayString(item.scored_indicators_count) + "/" + toDisplayString(item.indicators_count), 1)
                                ]),
                                createVNode("div", { class: "w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden p-[1px] shadow-inner" }, [
                                  createVNode("div", {
                                    class: "bg-gradient-to-r from-emerald-500 to-emerald-400 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.4)]",
                                    style: { width: getProgress(item) + "%" }
                                  }, null, 4)
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-right" }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("auditor.assignments.show", item.id),
                                class: "inline-flex items-center justify-center w-10 h-10 bg-slate-900 dark:bg-emerald-600 text-white rounded-xl hover:scale-110 hover:shadow-xl hover:shadow-emerald-500/20 hover:bg-emerald-600 transition-all active:scale-95",
                                title: "Buka Evaluasi"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_icon, {
                                    icon: "fa-solid fa-arrow-right-to-bracket",
                                    class: "text-xs"
                                  })
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ]);
                        }), 128))
                      ])) : (openBlock(), createBlock("tbody", { key: 1 }, [
                        createVNode("tr", null, [
                          createVNode("td", {
                            colspan: "6",
                            class: "p-12 text-center"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center py-12" }, [
                              createVNode("div", { class: "w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-sm" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-clipboard-check",
                                  class: "text-4xl text-slate-300 dark:text-slate-600"
                                })
                              ]),
                              createVNode("h4", { class: "text-sm font-black text-slate-800 dark:text-white uppercase tracking-widest mb-2" }, " Belum Ada Penugasan "),
                              createVNode("p", { class: "text-xs font-bold text-slate-400 max-w-xs mx-auto" }, " Saat ini belum ada data penugasan audit yang tersedia untuk Anda. ")
                            ])
                          ])
                        ])
                      ]))
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" }, [
                    createVNode("div", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left flex items-center gap-2" }, [
                      createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                      createTextVNode(" Data " + toDisplayString(__props.assignments.from) + " - " + toDisplayString(__props.assignments.to) + " dari total " + toDisplayString(__props.assignments.total), 1)
                    ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auditor/Assignment/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-78abf455"]]);
export {
  Index as default
};

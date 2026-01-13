import { ref, watch, mergeProps, withCtx, unref, createTextVNode, createVNode, withDirectives, vModelText, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { Link, router } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-D0TyJNRu.js";
import debounce from "lodash/debounce.js";
import "@vueuse/core";
import "./TButton-oXLR37ud.js";
import "./windowSizeCalculator-4-m3qk2a.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TDropdown-8pNOPgDY.js";
import "./TChevronDownIcon-fGhz3Hz_.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-Cw8URzx6.js";
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
    const search = ref(props.filters.search || "");
    const status = ref(props.filters.status || "all");
    const updateFilters = () => {
      router.get(route("auditor.assignments.index"), {
        search: search.value,
        status: status.value
      }, {
        preserveState: true,
        replace: true,
        preserveScroll: true
      });
    };
    watch(search, debounce(() => {
      updateFilters();
    }, 500));
    const changeStatus = (newStatus) => {
      status.value = newStatus;
      updateFilters();
    };
    const getProgress = (item) => {
      if (!item.indicators_count) return 0;
      return Math.round(item.scored_indicators_count / item.indicators_count * 100);
    };
    const getStageBadge = (stage) => {
      const map = {
        "doc_audit": "bg-blue-50 text-blue-600 border-blue-100",
        "field_audit": "bg-purple-50 text-purple-600 border-purple-100",
        "finding": "bg-amber-50 text-amber-600 border-amber-100",
        "reporting": "bg-emerald-50 text-emerald-600 border-emerald-100"
      };
      return map[stage] || "bg-slate-50 text-slate-400 border-slate-100";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Penugasan Audit Saya" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Daftar Penugasan Audit`);
          } else {
            return [
              createTextVNode("Daftar Penugasan Audit")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Manajemen seluruh unit kerja yang ditugaskan kepada Anda`);
          } else {
            return [
              createTextVNode("Manajemen seluruh unit kerja yang ditugaskan kepada Anda")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex flex-col sm:flex-row justify-between items-center gap-4"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-[10px] font-black uppercase text-slate-400 tracking-widest"${_scopeId}>Tampilkan:</span><div class="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl"${_scopeId}><button class="${ssrRenderClass([
              "px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all",
              status.value === "all" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
            ])}"${_scopeId}>Semua</button><button class="${ssrRenderClass([
              "px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all",
              status.value === "on_going" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
            ])}"${_scopeId}>Berjalan</button><button class="${ssrRenderClass([
              "px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all",
              status.value === "completed" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
            ])}"${_scopeId}>Selesai</button></div></div><div class="relative w-full sm:w-80"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari unit atau periode..." class="w-full pl-4 pr-10 py-2 text-sm border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all"${_scopeId}></div></div><div class="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden"${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="w-full text-left text-sm border-collapse"${_scopeId}><thead class="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800"${_scopeId}><tr${_scopeId}><th class="p-5"${_scopeId}>Unit Kerja</th><th class="p-5"${_scopeId}>Periode &amp; Instrumen</th><th class="p-5 text-center"${_scopeId}>Tahapan</th><th class="p-5"${_scopeId}>Progres</th><th class="p-5 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"${_scopeId}><!--[-->`);
            ssrRenderList(__props.assignments.data, (item) => {
              _push2(`<tr class="hover:bg-slate-50/50 transition-colors group"${_scopeId}><td class="p-5"${_scopeId}><div class="font-black text-slate-800 dark:text-white group-hover:text-rose-600 transition-colors"${_scopeId}>${ssrInterpolate(item.assignable?.name)}</div><div class="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5 italic"${_scopeId}>${ssrInterpolate(item.assignable_type.includes("Prodi") ? "Program Studi" : "Fakultas")}</div></td><td class="p-5"${_scopeId}><div class="text-xs font-bold text-slate-700 dark:text-slate-200"${_scopeId}>${ssrInterpolate(item.period?.name)}</div><div class="text-[10px] text-slate-400 font-medium truncate max-w-[200px]"${_scopeId}>${ssrInterpolate(item.standard?.name)}</div></td><td class="p-5 text-center"${_scopeId}><span class="${ssrRenderClass(["px-2.5 py-1 rounded-lg text-[9px] font-black uppercase border tracking-tight", getStageBadge(item.current_stage)])}"${_scopeId}>${ssrInterpolate(item.current_stage.replace("_", " "))}</span></td><td class="p-5"${_scopeId}><div class="flex flex-col gap-1.5 w-full max-w-[140px]"${_scopeId}><div class="flex justify-between text-[9px] font-black uppercase text-slate-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(getProgress(item))}%</span><span${_scopeId}>${ssrInterpolate(item.scored_indicators_count)}/${ssrInterpolate(item.indicators_count)}</span></div><div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden"${_scopeId}><div class="bg-rose-500 h-full rounded-full transition-all duration-700" style="${ssrRenderStyle({ width: getProgress(item) + "%" })}"${_scopeId}></div></div></div></td><td class="p-5 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("auditor.assignments.show", item.id),
                class: "inline-flex items-center px-5 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-black uppercase rounded-xl hover:bg-rose-600 hover:text-white transition-all shadow-md active:scale-95"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Buka Lembar Kerja `);
                  } else {
                    return [
                      createTextVNode(" Buka Lembar Kerja ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex flex-col sm:flex-row justify-between items-center gap-4" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "text-[10px] font-black uppercase text-slate-400 tracking-widest" }, "Tampilkan:"),
                    createVNode("div", { class: "flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl" }, [
                      createVNode("button", {
                        onClick: ($event) => changeStatus("all"),
                        class: [
                          "px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all",
                          status.value === "all" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                        ]
                      }, "Semua", 10, ["onClick"]),
                      createVNode("button", {
                        onClick: ($event) => changeStatus("on_going"),
                        class: [
                          "px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all",
                          status.value === "on_going" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                        ]
                      }, "Berjalan", 10, ["onClick"]),
                      createVNode("button", {
                        onClick: ($event) => changeStatus("completed"),
                        class: [
                          "px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all",
                          status.value === "completed" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                        ]
                      }, "Selesai", 10, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "relative w-full sm:w-80" }, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      type: "text",
                      placeholder: "Cari unit atau periode...",
                      class: "w-full pl-4 pr-10 py-2 text-sm border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, search.value]
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden" }, [
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("table", { class: "w-full text-left text-sm border-collapse" }, [
                      createVNode("thead", { class: "bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800" }, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "p-5" }, "Unit Kerja"),
                          createVNode("th", { class: "p-5" }, "Periode & Instrumen"),
                          createVNode("th", { class: "p-5 text-center" }, "Tahapan"),
                          createVNode("th", { class: "p-5" }, "Progres"),
                          createVNode("th", { class: "p-5 text-center" }, "Aksi")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-slate-100 dark:divide-slate-800" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.assignments.data, (item) => {
                          return openBlock(), createBlock("tr", {
                            key: item.id,
                            class: "hover:bg-slate-50/50 transition-colors group"
                          }, [
                            createVNode("td", { class: "p-5" }, [
                              createVNode("div", { class: "font-black text-slate-800 dark:text-white group-hover:text-rose-600 transition-colors" }, toDisplayString(item.assignable?.name), 1),
                              createVNode("div", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5 italic" }, toDisplayString(item.assignable_type.includes("Prodi") ? "Program Studi" : "Fakultas"), 1)
                            ]),
                            createVNode("td", { class: "p-5" }, [
                              createVNode("div", { class: "text-xs font-bold text-slate-700 dark:text-slate-200" }, toDisplayString(item.period?.name), 1),
                              createVNode("div", { class: "text-[10px] text-slate-400 font-medium truncate max-w-[200px]" }, toDisplayString(item.standard?.name), 1)
                            ]),
                            createVNode("td", { class: "p-5 text-center" }, [
                              createVNode("span", {
                                class: ["px-2.5 py-1 rounded-lg text-[9px] font-black uppercase border tracking-tight", getStageBadge(item.current_stage)]
                              }, toDisplayString(item.current_stage.replace("_", " ")), 3)
                            ]),
                            createVNode("td", { class: "p-5" }, [
                              createVNode("div", { class: "flex flex-col gap-1.5 w-full max-w-[140px]" }, [
                                createVNode("div", { class: "flex justify-between text-[9px] font-black uppercase text-slate-400" }, [
                                  createVNode("span", null, toDisplayString(getProgress(item)) + "%", 1),
                                  createVNode("span", null, toDisplayString(item.scored_indicators_count) + "/" + toDisplayString(item.indicators_count), 1)
                                ]),
                                createVNode("div", { class: "w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden" }, [
                                  createVNode("div", {
                                    class: "bg-rose-500 h-full rounded-full transition-all duration-700",
                                    style: { width: getProgress(item) + "%" }
                                  }, null, 4)
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "p-5 text-center" }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("auditor.assignments.show", item.id),
                                class: "inline-flex items-center px-5 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-black uppercase rounded-xl hover:bg-rose-600 hover:text-white transition-all shadow-md active:scale-95"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Buka Lembar Kerja ")
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ]);
                        }), 128))
                      ])
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
export {
  _sfc_main as default
};

import { ref, watch, mergeProps, withCtx, unref, createTextVNode, createVNode, createBlock, createCommentVNode, withDirectives, vModelText, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { Link, router } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-BkpuvVky.js";
import debounce from "lodash/debounce.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vueuse/core";
import "./TButton-oXLR37ud.js";
import "./windowSizeCalculator-4-m3qk2a.js";
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
    // Data paginasi dari server
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search || "");
    const status = ref(props.filters.status || "all");
    const updateFilters = () => {
      router.get(route("auditee.assignments.index"), {
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
      const total = parseInt(item.indicators_count) || 0;
      const uploaded = parseInt(item.evidence_count) || 0;
      if (total === 0) return 0;
      const percentage = Math.round(uploaded / total * 100);
      return percentage > 100 ? 100 : percentage;
    };
    const getStageBadge = (stage) => {
      const map = {
        "doc_audit": "bg-blue-50 text-blue-600 border-blue-100",
        "field_audit": "bg-purple-50 text-purple-600 border-purple-100",
        "finding": "bg-amber-50 text-amber-600 border-amber-100",
        "reporting": "bg-emerald-50 text-emerald-600 border-emerald-100",
        "finished": "bg-slate-900 text-white border-slate-900"
      };
      return map[stage] || "bg-slate-50 text-slate-400 border-slate-100";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Monitoring Audit Unit" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Daftar Audit Unit Saya`);
          } else {
            return [
              createTextVNode("Daftar Audit Unit Saya")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pantau progres pemenuhan bukti dan hasil audit untuk unit Anda`);
          } else {
            return [
              createTextVNode("Pantau progres pemenuhan bukti dan hasil audit untuk unit Anda")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-9be7489d${_scopeId}><div class="flex flex-col sm:flex-row justify-between items-center gap-4" data-v-9be7489d${_scopeId}><div class="flex items-center gap-2" data-v-9be7489d${_scopeId}><span class="text-[10px] font-black uppercase text-slate-400 tracking-widest" data-v-9be7489d${_scopeId}>Tampilkan:</span><div class="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl" data-v-9be7489d${_scopeId}><button class="${ssrRenderClass([
              "px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all",
              status.value === "all" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
            ])}" data-v-9be7489d${_scopeId}> Semua </button><button class="${ssrRenderClass([
              "px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all",
              status.value === "on_going" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
            ])}" data-v-9be7489d${_scopeId}> Berjalan </button></div></div><div class="relative w-full sm:w-80" data-v-9be7489d${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari standar..." class="w-full pl-4 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all shadow-sm" data-v-9be7489d${_scopeId}></div></div><div class="bg-white dark:bg-slate-900 rounded-[1rem] shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden" data-v-9be7489d${_scopeId}><div class="overflow-x-auto" data-v-9be7489d${_scopeId}><table class="w-full text-left text-sm border-collapse" data-v-9be7489d${_scopeId}><thead class="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800" data-v-9be7489d${_scopeId}><tr data-v-9be7489d${_scopeId}><th class="p-5" data-v-9be7489d${_scopeId}>Standar &amp; Instrumen</th><th class="p-5" data-v-9be7489d${_scopeId}>Auditor Penilai</th><th class="p-5 text-center" data-v-9be7489d${_scopeId}>Tahapan</th><th class="p-5" data-v-9be7489d${_scopeId}>Progres Bukti</th><th class="p-5 text-center" data-v-9be7489d${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800" data-v-9be7489d${_scopeId}><!--[-->`);
            ssrRenderList(__props.assignments.data, (item) => {
              _push2(`<tr class="hover:bg-slate-50/50 transition-colors group" data-v-9be7489d${_scopeId}><td class="p-5" data-v-9be7489d${_scopeId}><div class="font-black text-slate-800 dark:text-white group-hover:text-rose-600 transition-colors uppercase tracking-tight leading-tight" data-v-9be7489d${_scopeId}>${ssrInterpolate(item.standard?.name)}</div><div class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-0.5" data-v-9be7489d${_scopeId}> Periode: ${ssrInterpolate(item.period?.name)}</div></td><td class="p-5" data-v-9be7489d${_scopeId}>`);
              if (item.auditor) {
                _push2(`<div class="flex items-center gap-3" data-v-9be7489d${_scopeId}><div class="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-black text-[10px]" data-v-9be7489d${_scopeId}>${ssrInterpolate(item.auditor.name.charAt(0))}</div><div class="flex flex-col min-w-0" data-v-9be7489d${_scopeId}><span class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate" data-v-9be7489d${_scopeId}>${ssrInterpolate(item.auditor.name)}</span><span class="text-[9px] text-slate-400 font-black uppercase tracking-tighter" data-v-9be7489d${_scopeId}>Ketua Auditor</span></div></div>`);
              } else {
                _push2(`<span class="text-[10px] italic text-slate-300 font-bold uppercase" data-v-9be7489d${_scopeId}>Belum Diplot</span>`);
              }
              _push2(`</td><td class="p-5 text-center" data-v-9be7489d${_scopeId}><span class="${ssrRenderClass(["px-3 py-1 rounded-xl text-[9px] font-black uppercase border tracking-widest inline-block whitespace-nowrap", getStageBadge(item.current_stage)])}" data-v-9be7489d${_scopeId}>${ssrInterpolate(item.current_stage.replace("_", " "))}</span></td><td class="p-5" data-v-9be7489d${_scopeId}><div class="flex flex-col gap-1.5 w-full max-w-[160px]" data-v-9be7489d${_scopeId}><div class="flex justify-between text-[9px] font-black uppercase" data-v-9be7489d${_scopeId}><span class="text-slate-400" data-v-9be7489d${_scopeId}>Bukti</span><span class="text-rose-600" data-v-9be7489d${_scopeId}>${ssrInterpolate(getProgress(item))}%</span></div><div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-50 dark:border-slate-800" data-v-9be7489d${_scopeId}><div class="bg-rose-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(244,63,94,0.3)]" style="${ssrRenderStyle({ width: getProgress(item) + "%" })}" data-v-9be7489d${_scopeId}></div></div><div class="text-[8px] text-slate-400 font-bold uppercase tracking-tighter" data-v-9be7489d${_scopeId}>${ssrInterpolate(item.evidence_count || 0)} / ${ssrInterpolate(item.indicators_count || 0)} Butir </div></div></td><td class="p-5 text-center" data-v-9be7489d${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("auditee.assignments.show", item.id),
                class: "inline-flex items-center px-5 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-black uppercase rounded-xl hover:bg-rose-600 dark:hover:bg-rose-600 hover:text-white transition-all shadow-md active:scale-95 whitespace-nowrap"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Lihat Penilaian `);
                  } else {
                    return [
                      createTextVNode(" Lihat Penilaian ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div><div class="flex items-center justify-between py-2 px-6" data-v-9be7489d${_scopeId}><div class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" data-v-9be7489d${_scopeId}> Menampilkan ${ssrInterpolate(__props.assignments.data.length)} Audit aktif </div><div class="flex gap-1" data-v-9be7489d${_scopeId}><!--[-->`);
            ssrRenderList(__props.assignments.links, (link) => {
              _push2(`<button class="${ssrRenderClass([[link.active ? "bg-rose-600 text-white border-rose-600 shadow-lg shadow-rose-200" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:border-rose-500", !link.url ? "opacity-30 cursor-not-allowed" : "cursor-pointer"], "px-4 py-1.5 text-[10px] font-black rounded-xl border transition-all"])}" data-v-9be7489d${_scopeId}>${link.label ?? ""}</button>`);
            });
            _push2(`<!--]--></div></div>`);
            if (__props.assignments.data.length === 0) {
              _push2(`<div class="bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[3rem] p-20 text-center" data-v-9be7489d${_scopeId}><div class="w-24 h-24 bg-rose-50 dark:bg-rose-900/20 rounded-full flex items-center justify-center mx-auto mb-6" data-v-9be7489d${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-9be7489d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-9be7489d${_scopeId}></path></svg></div><h3 class="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight" data-v-9be7489d${_scopeId}>Tidak Ada Jadwal Audit </h3><p class="text-slate-400 mt-2 font-medium" data-v-9be7489d${_scopeId}>Data tidak ditemukan untuk kriteria filter ini.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
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
                      }, " Semua ", 10, ["onClick"]),
                      createVNode("button", {
                        onClick: ($event) => changeStatus("on_going"),
                        class: [
                          "px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all",
                          status.value === "on_going" ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                        ]
                      }, " Berjalan ", 10, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "relative w-full sm:w-80" }, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      type: "text",
                      placeholder: "Cari standar...",
                      class: "w-full pl-4 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all shadow-sm"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, search.value]
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white dark:bg-slate-900 rounded-[1rem] shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden" }, [
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("table", { class: "w-full text-left text-sm border-collapse" }, [
                      createVNode("thead", { class: "bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800" }, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "p-5" }, "Standar & Instrumen"),
                          createVNode("th", { class: "p-5" }, "Auditor Penilai"),
                          createVNode("th", { class: "p-5 text-center" }, "Tahapan"),
                          createVNode("th", { class: "p-5" }, "Progres Bukti"),
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
                              createVNode("div", { class: "font-black text-slate-800 dark:text-white group-hover:text-rose-600 transition-colors uppercase tracking-tight leading-tight" }, toDisplayString(item.standard?.name), 1),
                              createVNode("div", { class: "text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-0.5" }, " Periode: " + toDisplayString(item.period?.name), 1)
                            ]),
                            createVNode("td", { class: "p-5" }, [
                              item.auditor ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex items-center gap-3"
                              }, [
                                createVNode("div", { class: "w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-black text-[10px]" }, toDisplayString(item.auditor.name.charAt(0)), 1),
                                createVNode("div", { class: "flex flex-col min-w-0" }, [
                                  createVNode("span", { class: "text-xs font-bold text-slate-700 dark:text-slate-200 truncate" }, toDisplayString(item.auditor.name), 1),
                                  createVNode("span", { class: "text-[9px] text-slate-400 font-black uppercase tracking-tighter" }, "Ketua Auditor")
                                ])
                              ])) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-[10px] italic text-slate-300 font-bold uppercase"
                              }, "Belum Diplot"))
                            ]),
                            createVNode("td", { class: "p-5 text-center" }, [
                              createVNode("span", {
                                class: ["px-3 py-1 rounded-xl text-[9px] font-black uppercase border tracking-widest inline-block whitespace-nowrap", getStageBadge(item.current_stage)]
                              }, toDisplayString(item.current_stage.replace("_", " ")), 3)
                            ]),
                            createVNode("td", { class: "p-5" }, [
                              createVNode("div", { class: "flex flex-col gap-1.5 w-full max-w-[160px]" }, [
                                createVNode("div", { class: "flex justify-between text-[9px] font-black uppercase" }, [
                                  createVNode("span", { class: "text-slate-400" }, "Bukti"),
                                  createVNode("span", { class: "text-rose-600" }, toDisplayString(getProgress(item)) + "%", 1)
                                ]),
                                createVNode("div", { class: "w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-50 dark:border-slate-800" }, [
                                  createVNode("div", {
                                    class: "bg-rose-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(244,63,94,0.3)]",
                                    style: { width: getProgress(item) + "%" }
                                  }, null, 4)
                                ]),
                                createVNode("div", { class: "text-[8px] text-slate-400 font-bold uppercase tracking-tighter" }, toDisplayString(item.evidence_count || 0) + " / " + toDisplayString(item.indicators_count || 0) + " Butir ", 1)
                              ])
                            ]),
                            createVNode("td", { class: "p-5 text-center" }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("auditee.assignments.show", item.id),
                                class: "inline-flex items-center px-5 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-black uppercase rounded-xl hover:bg-rose-600 dark:hover:bg-rose-600 hover:text-white transition-all shadow-md active:scale-95 whitespace-nowrap"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Lihat Penilaian ")
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between py-2 px-6" }, [
                  createVNode("div", { class: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" }, " Menampilkan " + toDisplayString(__props.assignments.data.length) + " Audit aktif ", 1),
                  createVNode("div", { class: "flex gap-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.assignments.links, (link) => {
                      return openBlock(), createBlock("button", {
                        key: link.label,
                        innerHTML: link.label,
                        onClick: ($event) => link.url ? _ctx.$inertia.visit(link.url) : null,
                        class: ["px-4 py-1.5 text-[10px] font-black rounded-xl border transition-all", [link.active ? "bg-rose-600 text-white border-rose-600 shadow-lg shadow-rose-200" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:border-rose-500", !link.url ? "opacity-30 cursor-not-allowed" : "cursor-pointer"]]
                      }, null, 10, ["innerHTML", "onClick"]);
                    }), 128))
                  ])
                ]),
                __props.assignments.data.length === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[3rem] p-20 text-center"
                }, [
                  createVNode("div", { class: "w-24 h-24 bg-rose-50 dark:bg-rose-900/20 rounded-full flex items-center justify-center mx-auto mb-6" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-12 h-12 text-rose-300",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "1.5",
                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      })
                    ]))
                  ]),
                  createVNode("h3", { class: "text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight" }, "Tidak Ada Jadwal Audit "),
                  createVNode("p", { class: "text-slate-400 mt-2 font-medium" }, "Data tidak ditemukan untuk kriteria filter ini.")
                ])) : createCommentVNode("", true)
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
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9be7489d"]]);
export {
  Index as default
};

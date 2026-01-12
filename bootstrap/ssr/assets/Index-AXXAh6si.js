import { ref, watch, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, withDirectives, vModelText, openBlock, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-BkpuvVky.js";
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
    histories: Object,
    // Paginated data
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    watch(search, debounce((value) => {
      router.get(route("admin.histories.index"), { search: value }, { preserveState: true, replace: true });
    }, 500));
    const showModal = ref(false);
    const selectedLog = ref(null);
    const openDetail = (log) => {
      selectedLog.value = log;
      showModal.value = true;
    };
    const formatDate = (dateString) => {
      return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }).format(new Date(dateString));
    };
    const getActionBadge = (action) => {
      if (action.includes("create")) return "bg-emerald-50 text-emerald-700 border-emerald-100";
      if (action.includes("delete")) return "bg-rose-50 text-rose-700 border-rose-100";
      return "bg-blue-50 text-blue-700 border-blue-100";
    };
    const formatEntityName = (type) => {
      if (!type) return "-";
      return type.replace("App\\Models\\", "");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Audit Trail" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Audit Trail &amp; History`);
          } else {
            return [
              createTextVNode("Audit Trail & History")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Log aktivitas sistem untuk melacak setiap perubahan data Master dan Transaksi`);
          } else {
            return [
              createTextVNode("Log aktivitas sistem untuk melacak setiap perubahan data Master dan Transaksi")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex justify-between items-center gap-4"${_scopeId}><div class="text-xs font-bold text-slate-400 uppercase tracking-widest"${_scopeId}> Menampilkan ${ssrInterpolate(__props.histories.total)} Aktivitas Terakhir </div><div class="relative w-full max-w-sm"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari aktor, aksi, atau entitas..." class="w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 outline-none transition-all text-sm"${_scopeId}></div></div><div class="overflow-x-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800"${_scopeId}><table class="w-full text-sm text-left"${_scopeId}><thead class="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[10px] font-black tracking-widest border-b dark:border-slate-800"${_scopeId}><tr${_scopeId}><th class="p-4"${_scopeId}>Waktu</th><th class="p-4"${_scopeId}>Aktor (User)</th><th class="p-4"${_scopeId}>Aksi</th><th class="p-4"${_scopeId}>Entitas Terkait</th><th class="p-4 text-center"${_scopeId}>Detail</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"${_scopeId}><!--[-->`);
            ssrRenderList(__props.histories.data, (log) => {
              _push2(`<tr class="hover:bg-slate-50/50 transition-colors"${_scopeId}><td class="p-4 text-[11px] font-bold text-slate-500 whitespace-nowrap"${_scopeId}>${ssrInterpolate(formatDate(log.created_at))}</td><td class="p-4"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px] text-slate-400 border"${_scopeId}>${ssrInterpolate(log.user?.name?.substring(0, 2).toUpperCase())}</div><div class="flex flex-col"${_scopeId}><span class="font-bold text-slate-700 dark:text-slate-200 leading-tight"${_scopeId}>${ssrInterpolate(log.user?.name)}</span><span class="text-[9px] text-slate-400 uppercase tracking-tighter"${_scopeId}>${ssrInterpolate(log.user?.role)}</span></div></div></td><td class="p-4"${_scopeId}><span class="${ssrRenderClass(["px-2 py-0.5 rounded text-[9px] font-black uppercase border", getActionBadge(log.action)])}"${_scopeId}>${ssrInterpolate(log.action.replace("_", " "))}</span></td><td class="p-4"${_scopeId}><div class="text-xs font-bold text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(formatEntityName(log.historable_type))}</div><div class="text-[10px] text-slate-400 tracking-tighter"${_scopeId}>ID: #${ssrInterpolate(log.historable_id)} | Stage: ${ssrInterpolate(log.stage)}</div></td><td class="p-4 text-center"${_scopeId}><button class="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg></button></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.histories.data.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="5" class="p-12 text-center text-slate-400 italic font-medium"${_scopeId}>Belum ada aktivitas terekam.</td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div><div class="flex items-center justify-between py-2"${_scopeId}><div class="text-[10px] font-black text-slate-400 uppercase tracking-widest"${_scopeId}> Data ${ssrInterpolate(__props.histories.from)} - ${ssrInterpolate(__props.histories.to)} dari ${ssrInterpolate(__props.histories.total)}</div><div class="flex gap-1"${_scopeId}><!--[-->`);
            ssrRenderList(__props.histories.links, (link) => {
              _push2(`<button class="${ssrRenderClass([[link.active ? "bg-rose-600 text-white border-rose-600 shadow-lg shadow-rose-200" : "bg-white border-slate-200 text-slate-400 hover:border-rose-500", !link.url ? "opacity-30 cursor-not-allowed" : "cursor-pointer"], "px-3 py-1 text-[10px] font-bold rounded-lg border transition-all"])}"${_scopeId}>${link.label ?? ""}</button>`);
            });
            _push2(`<!--]--></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-[999] flex items-center justify-center p-4"${_scopeId}><div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]"${_scopeId}><div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center"${_scopeId}><div${_scopeId}><h3 class="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight"${_scopeId}>Detail Perubahan Data</h3><p class="text-[10px] text-slate-400 font-bold uppercase"${_scopeId}>${ssrInterpolate(selectedLog.value.action)} - ${ssrInterpolate(formatDate(selectedLog.value.created_at))}</p></div><button class="text-3xl text-slate-300 hover:text-rose-500"${_scopeId}>×</button></div><div class="p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 dark:bg-slate-900"${_scopeId}><div class="space-y-4"${_scopeId}><div class="flex items-center gap-2 text-rose-600"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg><h4 class="text-xs font-black uppercase tracking-widest"${_scopeId}>Data Sebelumnya (Old)</h4></div><div class="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 font-mono text-[11px] overflow-x-auto shadow-sm"${_scopeId}>`);
              if (selectedLog.value.old_values) {
                _push2(`<pre class="text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(JSON.stringify(selectedLog.value.old_values, null, 2))}</pre>`);
              } else {
                _push2(`<div class="text-slate-400 italic"${_scopeId}>Tidak ada data sebelumnya (Record Baru).</div>`);
              }
              _push2(`</div></div><div class="space-y-4"${_scopeId}><div class="flex items-center gap-2 text-emerald-600"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg><h4 class="text-xs font-black uppercase tracking-widest"${_scopeId}>Data Sesudahnya (New)</h4></div><div class="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-emerald-100 dark:border-emerald-900/30 font-mono text-[11px] overflow-x-auto shadow-sm ring-4 ring-emerald-500/5"${_scopeId}>`);
              if (selectedLog.value.new_values) {
                _push2(`<pre class="text-slate-700 dark:text-slate-200 font-bold"${_scopeId}>${ssrInterpolate(JSON.stringify(selectedLog.value.new_values, null, 2))}</pre>`);
              } else {
                _push2(`<div class="text-slate-400 italic text-rose-500 font-bold"${_scopeId}>Data Telah Dihapus Permanen.</div>`);
              }
              _push2(`</div></div></div><div class="p-6 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 text-right"${_scopeId}><button class="px-8 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-black uppercase rounded-xl transition-all"${_scopeId}>Tutup Detail</button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex justify-between items-center gap-4" }, [
                  createVNode("div", { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" }, " Menampilkan " + toDisplayString(__props.histories.total) + " Aktivitas Terakhir ", 1),
                  createVNode("div", { class: "relative w-full max-w-sm" }, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      type: "text",
                      placeholder: "Cari aktor, aksi, atau entitas...",
                      class: "w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 outline-none transition-all text-sm"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, search.value]
                    ])
                  ])
                ]),
                createVNode("div", { class: "overflow-x-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800" }, [
                  createVNode("table", { class: "w-full text-sm text-left" }, [
                    createVNode("thead", { class: "bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[10px] font-black tracking-widest border-b dark:border-slate-800" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "p-4" }, "Waktu"),
                        createVNode("th", { class: "p-4" }, "Aktor (User)"),
                        createVNode("th", { class: "p-4" }, "Aksi"),
                        createVNode("th", { class: "p-4" }, "Entitas Terkait"),
                        createVNode("th", { class: "p-4 text-center" }, "Detail")
                      ])
                    ]),
                    createVNode("tbody", { class: "divide-y divide-slate-100 dark:divide-slate-800" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.histories.data, (log) => {
                        return openBlock(), createBlock("tr", {
                          key: log.id,
                          class: "hover:bg-slate-50/50 transition-colors"
                        }, [
                          createVNode("td", { class: "p-4 text-[11px] font-bold text-slate-500 whitespace-nowrap" }, toDisplayString(formatDate(log.created_at)), 1),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("div", { class: "w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px] text-slate-400 border" }, toDisplayString(log.user?.name?.substring(0, 2).toUpperCase()), 1),
                              createVNode("div", { class: "flex flex-col" }, [
                                createVNode("span", { class: "font-bold text-slate-700 dark:text-slate-200 leading-tight" }, toDisplayString(log.user?.name), 1),
                                createVNode("span", { class: "text-[9px] text-slate-400 uppercase tracking-tighter" }, toDisplayString(log.user?.role), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("span", {
                              class: ["px-2 py-0.5 rounded text-[9px] font-black uppercase border", getActionBadge(log.action)]
                            }, toDisplayString(log.action.replace("_", " ")), 3)
                          ]),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "text-xs font-bold text-slate-600 dark:text-slate-400" }, toDisplayString(formatEntityName(log.historable_type)), 1),
                            createVNode("div", { class: "text-[10px] text-slate-400 tracking-tighter" }, "ID: #" + toDisplayString(log.historable_id) + " | Stage: " + toDisplayString(log.stage), 1)
                          ]),
                          createVNode("td", { class: "p-4 text-center" }, [
                            createVNode("button", {
                              onClick: ($event) => openDetail(log),
                              class: "p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-5 h-5 mx-auto",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                }),
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                })
                              ]))
                            ], 8, ["onClick"])
                          ])
                        ]);
                      }), 128)),
                      __props.histories.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                        createVNode("td", {
                          colspan: "5",
                          class: "p-12 text-center text-slate-400 italic font-medium"
                        }, "Belum ada aktivitas terekam.")
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between py-2" }, [
                  createVNode("div", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest" }, " Data " + toDisplayString(__props.histories.from) + " - " + toDisplayString(__props.histories.to) + " dari " + toDisplayString(__props.histories.total), 1),
                  createVNode("div", { class: "flex gap-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.histories.links, (link) => {
                      return openBlock(), createBlock("button", {
                        key: link.label,
                        innerHTML: link.label,
                        onClick: ($event) => link.url ? _ctx.$inertia.visit(link.url) : null,
                        class: ["px-3 py-1 text-[10px] font-bold rounded-lg border transition-all", [link.active ? "bg-rose-600 text-white border-rose-600 shadow-lg shadow-rose-200" : "bg-white border-slate-200 text-slate-400 hover:border-rose-500", !link.url ? "opacity-30 cursor-not-allowed" : "cursor-pointer"]]
                      }, null, 10, ["innerHTML", "onClick"]);
                    }), 128))
                  ])
                ])
              ]),
              showModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-[999] flex items-center justify-center p-4"
              }, [
                createVNode("div", {
                  class: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity",
                  onClick: ($event) => showModal.value = false
                }, null, 8, ["onClick"]),
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]" }, [
                  createVNode("div", { class: "p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight" }, "Detail Perubahan Data"),
                      createVNode("p", { class: "text-[10px] text-slate-400 font-bold uppercase" }, toDisplayString(selectedLog.value.action) + " - " + toDisplayString(formatDate(selectedLog.value.created_at)), 1)
                    ]),
                    createVNode("button", {
                      onClick: ($event) => showModal.value = false,
                      class: "text-3xl text-slate-300 hover:text-rose-500"
                    }, "×", 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 dark:bg-slate-900" }, [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "flex items-center gap-2 text-rose-600" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "w-4 h-4",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ])),
                        createVNode("h4", { class: "text-xs font-black uppercase tracking-widest" }, "Data Sebelumnya (Old)")
                      ]),
                      createVNode("div", { class: "bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 font-mono text-[11px] overflow-x-auto shadow-sm" }, [
                        selectedLog.value.old_values ? (openBlock(), createBlock("pre", {
                          key: 0,
                          class: "text-slate-600 dark:text-slate-400"
                        }, toDisplayString(JSON.stringify(selectedLog.value.old_values, null, 2)), 1)) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-slate-400 italic"
                        }, "Tidak ada data sebelumnya (Record Baru)."))
                      ])
                    ]),
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "flex items-center gap-2 text-emerald-600" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "w-4 h-4",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ])),
                        createVNode("h4", { class: "text-xs font-black uppercase tracking-widest" }, "Data Sesudahnya (New)")
                      ]),
                      createVNode("div", { class: "bg-white dark:bg-slate-800 rounded-2xl p-4 border border-emerald-100 dark:border-emerald-900/30 font-mono text-[11px] overflow-x-auto shadow-sm ring-4 ring-emerald-500/5" }, [
                        selectedLog.value.new_values ? (openBlock(), createBlock("pre", {
                          key: 0,
                          class: "text-slate-700 dark:text-slate-200 font-bold"
                        }, toDisplayString(JSON.stringify(selectedLog.value.new_values, null, 2)), 1)) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-slate-400 italic text-rose-500 font-bold"
                        }, "Data Telah Dihapus Permanen."))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "p-6 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 text-right" }, [
                    createVNode("button", {
                      onClick: ($event) => showModal.value = false,
                      class: "px-8 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-black uppercase rounded-xl transition-all"
                    }, "Tutup Detail", 8, ["onClick"])
                  ])
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/History/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

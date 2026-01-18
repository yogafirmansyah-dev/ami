import { ref, watch, computed, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, withDirectives, createBlock, vModelText, openBlock, createCommentVNode, Fragment, renderList, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-3kkfgqRQ.js";
import debounce from "lodash/debounce.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vueuse/core";
import "./windowSizeCalculator-BWfQvLaG.js";
import "./TDropdown-8S66trQc.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-BYbkHFXz.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    documents: Object,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    watch(search, debounce((value) => {
      router.get(route("library.index"), { search: value }, { preserveState: true, replace: true });
    }, 500));
    const getFileIcon = (ext) => {
      const e = ext.toLowerCase();
      if (e === "pdf") return "📄";
      if (["doc", "docx"].includes(e)) return "📝";
      if (["xls", "xlsx"].includes(e)) return "📊";
      return "📁";
    };
    const emptyStateMessage = computed(() => {
      return search.value ? `Tidak ada hasil untuk kata kunci "${search.value}"` : "Database dokumen saat ini masih kosong.";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Pusat Referensi" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pusat Referensi &amp; Dokumen`);
          } else {
            return [
              createTextVNode("Pusat Referensi & Dokumen")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-8" data-v-af8040e5${_scopeId}><div class="flex flex-col md:flex-row justify-between items-end gap-4" data-v-af8040e5${_scopeId}><div class="space-y-1" data-v-af8040e5${_scopeId}><p class="text-[10px] font-black text-rose-600 uppercase tracking-[0.3em] italic" data-v-af8040e5${_scopeId}>Digital Asset Management </p><h2 class="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none" data-v-af8040e5${_scopeId}> Pustaka Dokumen <span class="text-emerald-600 dark:text-emerald-400" data-v-af8040e5${_scopeId}>AMI</span></h2></div><div class="relative w-full md:w-96 group" data-v-af8040e5${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari regulasi atau pedoman..." class="w-full pl-12 pr-4 py-4 text-xs bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-[1.5rem] shadow-sm focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 transition-all placeholder:font-bold placeholder:uppercase placeholder:tracking-widest" data-v-af8040e5${_scopeId}><svg class="w-5 h-5 absolute left-4 top-3.5 text-slate-400 group-focus-within:text-rose-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-af8040e5${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-af8040e5${_scopeId}></path></svg></div></div><div class="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" data-v-af8040e5${_scopeId}><div class="overflow-x-auto" data-v-af8040e5${_scopeId}><table class="w-full text-left border-collapse" data-v-af8040e5${_scopeId}><thead data-v-af8040e5${_scopeId}><tr class="bg-slate-50/50 dark:bg-slate-800/50 border-b dark:border-slate-800" data-v-af8040e5${_scopeId}><th class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]" data-v-af8040e5${_scopeId}>Info Dokumen </th><th class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-center" data-v-af8040e5${_scopeId}> Tipe</th><th class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-center" data-v-af8040e5${_scopeId}> Format</th><th class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]" data-v-af8040e5${_scopeId}> Metadata</th><th class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-right" data-v-af8040e5${_scopeId}> Aksi </th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800" data-v-af8040e5${_scopeId}><!--[-->`);
            ssrRenderList(__props.documents.data, (doc) => {
              _push2(`<tr class="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all duration-300" data-v-af8040e5${_scopeId}><td class="p-8" data-v-af8040e5${_scopeId}><div class="flex items-center gap-5" data-v-af8040e5${_scopeId}><div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform" data-v-af8040e5${_scopeId}>${ssrInterpolate(getFileIcon(doc.extension))}</div><div data-v-af8040e5${_scopeId}><h3 class="font-black text-slate-900 dark:text-white uppercase text-sm tracking-tight leading-none mb-2" data-v-af8040e5${_scopeId}>${ssrInterpolate(doc.name)}</h3><p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic" data-v-af8040e5${_scopeId}> ID: #AMI-DOC-${ssrInterpolate(String(doc.id).padStart(4, "0"))}</p></div></div></td><td class="p-8 text-center" data-v-af8040e5${_scopeId}><span class="${ssrRenderClass([
                "px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.1em] border shadow-sm",
                doc.type === "public" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100"
              ])}" data-v-af8040e5${_scopeId}>${ssrInterpolate(doc.type)}</span></td><td class="p-8 text-center" data-v-af8040e5${_scopeId}><span class="text-[10px] font-black text-slate-800 dark:text-slate-300 uppercase bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg" data-v-af8040e5${_scopeId}> .${ssrInterpolate(doc.extension)}</span></td><td class="p-8" data-v-af8040e5${_scopeId}><div class="space-y-1" data-v-af8040e5${_scopeId}><div class="flex items-center gap-2" data-v-af8040e5${_scopeId}><span class="text-[8px] font-black text-slate-400 uppercase" data-v-af8040e5${_scopeId}>Uploader:</span><span class="text-[10px] font-bold text-slate-700 dark:text-slate-400" data-v-af8040e5${_scopeId}>${ssrInterpolate(doc.uploader.name)}</span></div><div class="flex items-center gap-2" data-v-af8040e5${_scopeId}><span class="text-[8px] font-black text-slate-400 uppercase" data-v-af8040e5${_scopeId}>Tanggal:</span><span class="text-[10px] font-bold text-slate-500" data-v-af8040e5${_scopeId}>${ssrInterpolate(new Date(doc.created_at).toLocaleDateString("id-ID"))}</span></div></div></td><td class="p-8 text-right" data-v-af8040e5${_scopeId}><a${ssrRenderAttr("href", _ctx.route("library.download", doc.id))} target="_blank" class="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-slate-900/20 hover:bg-rose-600 hover:translate-x-1 transition-all active:scale-95" data-v-af8040e5${_scopeId}> Buka Berkas <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-af8040e5${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-af8040e5${_scopeId}></path></svg></a></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.documents.data.length === 0) {
              _push2(`<tr data-v-af8040e5${_scopeId}><td colspan="5" class="p-12 text-center" data-v-af8040e5${_scopeId}><div class="flex flex-col items-center justify-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-700/50 rounded-[2.5rem]" data-v-af8040e5${_scopeId}><div class="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-sm" data-v-af8040e5${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: search.value ? "fa-solid fa-search" : "fa-solid fa-folder",
                class: "text-3xl text-slate-300 dark:text-slate-600"
              }, null, _parent2, _scopeId));
              _push2(`</div><h4 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-widest" data-v-af8040e5${_scopeId}>${ssrInterpolate(search.value ? "Tidak Ditemukan" : "Belum Ada Dokumen")}</h4><p class="text-[10px] font-bold text-slate-400 uppercase mt-2 max-w-xs px-4" data-v-af8040e5${_scopeId}>${ssrInterpolate(emptyStateMessage.value)}</p>`);
              if (search.value) {
                _push2(`<button class="mt-6 px-6 py-2 bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" data-v-af8040e5${_scopeId}> Reset Pencarian </button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div>`);
            if (__props.documents.data.length > 0) {
              _push2(`<div class="p-8 bg-slate-50/50 dark:bg-slate-800/50 border-t dark:border-slate-800 flex justify-between items-center" data-v-af8040e5${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest italic" data-v-af8040e5${_scopeId}> Menampilkan ${ssrInterpolate(__props.documents.data.length)} dari ${ssrInterpolate(__props.documents.total)} Dokumen Tersedia </p><div class="flex gap-2" data-v-af8040e5${_scopeId}><div class="flex justify-end gap-1 mt-6" data-v-af8040e5${_scopeId}><!--[-->`);
              ssrRenderList(__props.documents.links, (link) => {
                _push2(`<button${ssrIncludeBooleanAttr(!link.url) ? " disabled" : ""} class="${ssrRenderClass([[
                  link.active ? "bg-slate-900 text-white" : "bg-white text-slate-600 hover:bg-slate-100",
                  !link.url && "opacity-40 cursor-not-allowed"
                ], "px-4 py-2 text-[10px] font-black uppercase rounded-xl border transition"])}" data-v-af8040e5${_scopeId}>${link.label ?? ""}</button>`);
              });
              _push2(`<!--]--></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-8" }, [
                createVNode("div", { class: "flex flex-col md:flex-row justify-between items-end gap-4" }, [
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("p", { class: "text-[10px] font-black text-rose-600 uppercase tracking-[0.3em] italic" }, "Digital Asset Management "),
                    createVNode("h2", { class: "text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none" }, [
                      createTextVNode(" Pustaka Dokumen "),
                      createVNode("span", { class: "text-emerald-600 dark:text-emerald-400" }, "AMI")
                    ])
                  ]),
                  createVNode("div", { class: "relative w-full md:w-96 group" }, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      type: "text",
                      placeholder: "Cari regulasi atau pedoman...",
                      class: "w-full pl-12 pr-4 py-4 text-xs bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-[1.5rem] shadow-sm focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 transition-all placeholder:font-bold placeholder:uppercase placeholder:tracking-widest"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, search.value]
                    ]),
                    (openBlock(), createBlock("svg", {
                      class: "w-5 h-5 absolute left-4 top-3.5 text-slate-400 group-focus-within:text-rose-500 transition-colors",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2.5",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      })
                    ]))
                  ])
                ]),
                createVNode("div", { class: "bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" }, [
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("table", { class: "w-full text-left border-collapse" }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "bg-slate-50/50 dark:bg-slate-800/50 border-b dark:border-slate-800" }, [
                          createVNode("th", { class: "p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]" }, "Info Dokumen "),
                          createVNode("th", { class: "p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-center" }, " Tipe"),
                          createVNode("th", { class: "p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-center" }, " Format"),
                          createVNode("th", { class: "p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]" }, " Metadata"),
                          createVNode("th", { class: "p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-right" }, " Aksi ")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-slate-100 dark:divide-slate-800" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.documents.data, (doc) => {
                          return openBlock(), createBlock("tr", {
                            key: doc.id,
                            class: "group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all duration-300"
                          }, [
                            createVNode("td", { class: "p-8" }, [
                              createVNode("div", { class: "flex items-center gap-5" }, [
                                createVNode("div", { class: "w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform" }, toDisplayString(getFileIcon(doc.extension)), 1),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "font-black text-slate-900 dark:text-white uppercase text-sm tracking-tight leading-none mb-2" }, toDisplayString(doc.name), 1),
                                  createVNode("p", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest italic" }, " ID: #AMI-DOC-" + toDisplayString(String(doc.id).padStart(4, "0")), 1)
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "p-8 text-center" }, [
                              createVNode("span", {
                                class: [
                                  "px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.1em] border shadow-sm",
                                  doc.type === "public" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100"
                                ]
                              }, toDisplayString(doc.type), 3)
                            ]),
                            createVNode("td", { class: "p-8 text-center" }, [
                              createVNode("span", { class: "text-[10px] font-black text-slate-800 dark:text-slate-300 uppercase bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg" }, " ." + toDisplayString(doc.extension), 1)
                            ]),
                            createVNode("td", { class: "p-8" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode("span", { class: "text-[8px] font-black text-slate-400 uppercase" }, "Uploader:"),
                                  createVNode("span", { class: "text-[10px] font-bold text-slate-700 dark:text-slate-400" }, toDisplayString(doc.uploader.name), 1)
                                ]),
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode("span", { class: "text-[8px] font-black text-slate-400 uppercase" }, "Tanggal:"),
                                  createVNode("span", { class: "text-[10px] font-bold text-slate-500" }, toDisplayString(new Date(doc.created_at).toLocaleDateString("id-ID")), 1)
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "p-8 text-right" }, [
                              createVNode("a", {
                                href: _ctx.route("library.download", doc.id),
                                target: "_blank",
                                class: "inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-slate-900/20 hover:bg-rose-600 hover:translate-x-1 transition-all active:scale-95"
                              }, [
                                createTextVNode(" Buka Berkas "),
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2.5",
                                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                  })
                                ]))
                              ], 8, ["href"])
                            ])
                          ]);
                        }), 128)),
                        __props.documents.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                          createVNode("td", {
                            colspan: "5",
                            class: "p-12 text-center"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-700/50 rounded-[2.5rem]" }, [
                              createVNode("div", { class: "w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-sm" }, [
                                createVNode(_component_icon, {
                                  icon: search.value ? "fa-solid fa-search" : "fa-solid fa-folder",
                                  class: "text-3xl text-slate-300 dark:text-slate-600"
                                }, null, 8, ["icon"])
                              ]),
                              createVNode("h4", { class: "text-sm font-black text-slate-800 dark:text-white uppercase tracking-widest" }, toDisplayString(search.value ? "Tidak Ditemukan" : "Belum Ada Dokumen"), 1),
                              createVNode("p", { class: "text-[10px] font-bold text-slate-400 uppercase mt-2 max-w-xs px-4" }, toDisplayString(emptyStateMessage.value), 1),
                              search.value ? (openBlock(), createBlock("button", {
                                key: 0,
                                onClick: ($event) => search.value = "",
                                class: "mt-6 px-6 py-2 bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                              }, " Reset Pencarian ", 8, ["onClick"])) : createCommentVNode("", true)
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  __props.documents.data.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "p-8 bg-slate-50/50 dark:bg-slate-800/50 border-t dark:border-slate-800 flex justify-between items-center"
                  }, [
                    createVNode("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest italic" }, " Menampilkan " + toDisplayString(__props.documents.data.length) + " dari " + toDisplayString(__props.documents.total) + " Dokumen Tersedia ", 1),
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode("div", { class: "flex justify-end gap-1 mt-6" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.documents.links, (link) => {
                          return openBlock(), createBlock("button", {
                            key: link.label,
                            innerHTML: link.label,
                            disabled: !link.url,
                            onClick: ($event) => unref(router).get(link.url, {}, { preserveState: true, replace: true }),
                            class: ["px-4 py-2 text-[10px] font-black uppercase rounded-xl border transition", [
                              link.active ? "bg-slate-900 text-white" : "bg-white text-slate-600 hover:bg-slate-100",
                              !link.url && "opacity-40 cursor-not-allowed"
                            ]]
                          }, null, 10, ["innerHTML", "disabled", "onClick"]);
                        }), 128))
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Library/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-af8040e5"]]);
export {
  Index as default
};

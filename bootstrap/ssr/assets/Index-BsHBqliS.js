import { ref, watch, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, createTextVNode, withDirectives, vModelText, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-D0TyJNRu.js";
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
    return (_ctx, _push, _parent, _attrs) => {
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
            _push2(`<div class="space-y-8" data-v-d90687de${_scopeId}><div class="flex flex-col md:flex-row justify-between items-end gap-4" data-v-d90687de${_scopeId}><div class="space-y-1" data-v-d90687de${_scopeId}><p class="text-[10px] font-black text-rose-600 uppercase tracking-[0.3em] italic" data-v-d90687de${_scopeId}>Digital Asset Management </p><h2 class="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none" data-v-d90687de${_scopeId}> Pustaka Dokumen <span class="text-emerald-600 dark:text-emerald-400" data-v-d90687de${_scopeId}>AMI</span></h2></div><div class="relative w-full md:w-96 group" data-v-d90687de${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari regulasi atau pedoman..." class="w-full pl-12 pr-4 py-4 text-xs bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-[1.5rem] shadow-sm focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 transition-all placeholder:font-bold placeholder:uppercase placeholder:tracking-widest" data-v-d90687de${_scopeId}><svg class="w-5 h-5 absolute left-4 top-3.5 text-slate-400 group-focus-within:text-rose-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-d90687de${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-d90687de${_scopeId}></path></svg></div></div><div class="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" data-v-d90687de${_scopeId}><div class="overflow-x-auto" data-v-d90687de${_scopeId}><table class="w-full text-left border-collapse" data-v-d90687de${_scopeId}><thead data-v-d90687de${_scopeId}><tr class="bg-slate-50/50 dark:bg-slate-800/50 border-b dark:border-slate-800" data-v-d90687de${_scopeId}><th class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]" data-v-d90687de${_scopeId}>Info Dokumen </th><th class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-center" data-v-d90687de${_scopeId}> Tipe</th><th class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-center" data-v-d90687de${_scopeId}> Format</th><th class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]" data-v-d90687de${_scopeId}> Metadata</th><th class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-right" data-v-d90687de${_scopeId}> Aksi </th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800" data-v-d90687de${_scopeId}><!--[-->`);
            ssrRenderList(__props.documents.data, (doc) => {
              _push2(`<tr class="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all duration-300" data-v-d90687de${_scopeId}><td class="p-8" data-v-d90687de${_scopeId}><div class="flex items-center gap-5" data-v-d90687de${_scopeId}><div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform" data-v-d90687de${_scopeId}>${ssrInterpolate(getFileIcon(doc.extension))}</div><div data-v-d90687de${_scopeId}><h3 class="font-black text-slate-900 dark:text-white uppercase text-sm tracking-tight leading-none mb-2" data-v-d90687de${_scopeId}>${ssrInterpolate(doc.name)}</h3><p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic" data-v-d90687de${_scopeId}> ID: #AMI-DOC-${ssrInterpolate(String(doc.id).padStart(4, "0"))}</p></div></div></td><td class="p-8 text-center" data-v-d90687de${_scopeId}><span class="${ssrRenderClass([
                "px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.1em] border shadow-sm",
                doc.type === "public" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100"
              ])}" data-v-d90687de${_scopeId}>${ssrInterpolate(doc.type)}</span></td><td class="p-8 text-center" data-v-d90687de${_scopeId}><span class="text-[10px] font-black text-slate-800 dark:text-slate-300 uppercase bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg" data-v-d90687de${_scopeId}> .${ssrInterpolate(doc.extension)}</span></td><td class="p-8" data-v-d90687de${_scopeId}><div class="space-y-1" data-v-d90687de${_scopeId}><div class="flex items-center gap-2" data-v-d90687de${_scopeId}><span class="text-[8px] font-black text-slate-400 uppercase" data-v-d90687de${_scopeId}>Uploader:</span><span class="text-[10px] font-bold text-slate-700 dark:text-slate-400" data-v-d90687de${_scopeId}>${ssrInterpolate(doc.uploader.name)}</span></div><div class="flex items-center gap-2" data-v-d90687de${_scopeId}><span class="text-[8px] font-black text-slate-400 uppercase" data-v-d90687de${_scopeId}>Tanggal:</span><span class="text-[10px] font-bold text-slate-500" data-v-d90687de${_scopeId}>${ssrInterpolate(new Date(doc.created_at).toLocaleDateString("id-ID"))}</span></div></div></td><td class="p-8 text-right" data-v-d90687de${_scopeId}><a${ssrRenderAttr("href", _ctx.route("library.download", doc.id))} target="_blank" class="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-slate-900/20 hover:bg-rose-600 hover:translate-x-1 transition-all active:scale-95" data-v-d90687de${_scopeId}> Buka Berkas <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-d90687de${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-d90687de${_scopeId}></path></svg></a></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div><div class="p-8 bg-slate-50/50 dark:bg-slate-800/50 border-t dark:border-slate-800 flex justify-between items-center" data-v-d90687de${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest italic" data-v-d90687de${_scopeId}> Menampilkan ${ssrInterpolate(__props.documents.data.length)} dari ${ssrInterpolate(__props.documents.total)} Dokumen Tersedia </p><div class="flex gap-2" data-v-d90687de${_scopeId}></div></div></div>`);
            if (__props.documents.data.length === 0) {
              _push2(`<div class="text-center py-32 bg-slate-50 dark:bg-slate-800/20 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800" data-v-d90687de${_scopeId}><div class="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6" data-v-d90687de${_scopeId}><svg class="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-d90687de${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 17.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-d90687de${_scopeId}></path></svg></div><h4 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-widest" data-v-d90687de${_scopeId}>Dokumen Tidak Ditemukan </h4><p class="text-[10px] font-bold text-slate-400 uppercase mt-2" data-v-d90687de${_scopeId}>Coba gunakan kata kunci pencarian yang berbeda </p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
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
                        }), 128))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "p-8 bg-slate-50/50 dark:bg-slate-800/50 border-t dark:border-slate-800 flex justify-between items-center" }, [
                    createVNode("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest italic" }, " Menampilkan " + toDisplayString(__props.documents.data.length) + " dari " + toDisplayString(__props.documents.total) + " Dokumen Tersedia ", 1),
                    createVNode("div", { class: "flex gap-2" })
                  ])
                ]),
                __props.documents.data.length === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-center py-32 bg-slate-50 dark:bg-slate-800/20 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800"
                }, [
                  createVNode("div", { class: "w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-10 h-10 text-slate-300",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9.172 17.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    ]))
                  ]),
                  createVNode("h4", { class: "text-sm font-black text-slate-800 dark:text-white uppercase tracking-widest" }, "Dokumen Tidak Ditemukan "),
                  createVNode("p", { class: "text-[10px] font-bold text-slate-400 uppercase mt-2" }, "Coba gunakan kata kunci pencarian yang berbeda ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Library/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d90687de"]]);
export {
  Index as default
};

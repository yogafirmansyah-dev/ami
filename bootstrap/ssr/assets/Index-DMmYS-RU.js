import { ref, computed, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, withModifiers, withDirectives, vModelText, vModelSelect, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle } from "vue/server-renderer";
import { useForm, router } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-D0TyJNRu.js";
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
  props: { documents: Object },
  setup(__props) {
    const showModal = ref(false);
    const isEditing = ref(false);
    const editId = ref(null);
    const form = useForm({
      name: "",
      type: "public",
      file: null
    });
    const openCreate = () => {
      isEditing.value = false;
      editId.value = null;
      form.reset();
      form.clearErrors();
      showModal.value = true;
    };
    const openEdit = (doc) => {
      isEditing.value = true;
      editId.value = doc.id;
      form.name = doc.name;
      form.type = doc.type;
      form.file = null;
      form.clearErrors();
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
      form.reset();
      form.clearErrors();
    };
    const submit = () => {
      form.transform((data) => data);
      if (isEditing.value) {
        form.transform((data) => ({
          ...data,
          _method: "PATCH"
        })).post(route("admin.library.update", editId.value), {
          forceFormData: true,
          // Wajib untuk upload file
          onSuccess: () => closeModal()
        });
      } else {
        form.post(route("admin.library.store"), {
          forceFormData: true,
          // Wajib untuk upload file
          onSuccess: () => closeModal()
        });
      }
    };
    const deleteDoc = (id) => {
      if (confirm("Hapus dokumen ini secara permanen?")) {
        router.delete(route("admin.library.destroy", id));
      }
    };
    const buttonLabel = computed(() => {
      if (form.processing) return "Sedang Memproses...";
      return isEditing.value ? "Simpan Perubahan" : "Upload Dokumen";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Kelola Library" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Manajemen Pusat Dokumen`);
          } else {
            return [
              createTextVNode("Manajemen Pusat Dokumen")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h2 class="text-xs font-black uppercase tracking-[0.3em] text-slate-400 italic"${_scopeId}>Daftar Dokumen Pendukung </h2><button class="px-8 py-3 bg-slate-900 text-white rounded-[1.5rem] font-black text-[10px] uppercase shadow-2xl hover:bg-rose-600 transition-all active:scale-95"${_scopeId}> Tambah Dokumen Baru </button></div><div class="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"${_scopeId}><table class="w-full text-left text-xs border-collapse"${_scopeId}><thead class="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800"${_scopeId}><tr${_scopeId}><th class="p-6"${_scopeId}>Nama Dokumen</th><th class="p-6 text-center"${_scopeId}>Tipe Akses</th><th class="p-6"${_scopeId}>Diupload Oleh</th><th class="p-6 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"${_scopeId}><!--[-->`);
            ssrRenderList(__props.documents.data, (doc) => {
              _push2(`<tr class="group hover:bg-slate-50/50 transition-colors"${_scopeId}><td class="p-6"${_scopeId}><div class="font-black text-slate-800 dark:text-white uppercase text-sm leading-none"${_scopeId}>${ssrInterpolate(doc.name)}</div><div class="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-tighter"${_scopeId}>Format: ${ssrInterpolate(doc.extension)}</div></td><td class="p-6 text-center"${_scopeId}><span class="${ssrRenderClass([
                "px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border shadow-sm",
                doc.type === "public" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100"
              ])}"${_scopeId}>${ssrInterpolate(doc.type)}</span></td><td class="p-6 text-slate-500 font-medium italic"${_scopeId}>${ssrInterpolate(doc.uploader.name)}</td><td class="p-6"${_scopeId}><div class="flex justify-center gap-2"${_scopeId}><a${ssrRenderAttr("href", _ctx.route("library.download", doc.id))} class="p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-emerald-600 rounded-2xl transition-all shadow-sm"${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"${_scopeId}></path></svg></a><button class="p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-blue-600 rounded-2xl transition-all shadow-sm"${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"${_scopeId}></path></svg></button><button class="p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 rounded-2xl transition-all shadow-sm"${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${_scopeId}></path></svg></button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-[999] flex items-center justify-center p-4"${_scopeId}><div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200"${_scopeId}><div class="p-8 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50"${_scopeId}><h3 class="text-xl font-black uppercase text-slate-800 dark:text-white tracking-tighter"${_scopeId}>${ssrInterpolate(isEditing.value ? "Edit Dokumen" : "Dokumen Baru")}</h3><button class="text-4xl text-slate-300 hover:text-rose-600"${_scopeId}>×</button></div><form class="p-10 space-y-8"${_scopeId}><div class="space-y-2"${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-widest"${_scopeId}>Nama Dokumen</label><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Misal: Standar SPMI 2024" class="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none" required${_scopeId}></div><div class="space-y-2"${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-widest"${_scopeId}>Tipe Akses Dokumen</label><select class="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none"${_scopeId}><option value="public"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "public") : ssrLooseEqual(unref(form).type, "public")) ? " selected" : ""}${_scopeId}>Semua User (Public)</option><option value="auditor"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "auditor") : ssrLooseEqual(unref(form).type, "auditor")) ? " selected" : ""}${_scopeId}>Khusus Auditor &amp; Admin</option></select></div><div class="space-y-2"${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-widest"${_scopeId}>Pilih Berkas ${ssrInterpolate(isEditing.value ? "(Opsional)" : "")}</label><input type="file"${ssrIncludeBooleanAttr(!isEditing.value) ? " required" : ""} class="w-full text-[10px] text-slate-400 file:mr-4 file:py-2.5 file:px-8 file:rounded-xl file:border-0 file:bg-slate-900 file:text-white file:font-black hover:file:bg-rose-600 transition-all cursor-pointer shadow-sm"${_scopeId}></div>`);
              if (unref(form).progress) {
                _push2(`<div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"${_scopeId}><div class="bg-rose-600 h-full transition-all" style="${ssrRenderStyle({ width: unref(form).progress.percentage + "%" })}"${_scopeId}></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex justify-end gap-3 pt-4"${_scopeId}><button type="button" class="px-8 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-12 py-3 bg-rose-600 text-white rounded-2xl font-black uppercase text-[10px] shadow-xl shadow-rose-500/30 hover:bg-rose-700 transition-all active:scale-95 disabled:opacity-50"${_scopeId}>${ssrInterpolate(buttonLabel.value)}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "flex justify-between items-center" }, [
                  createVNode("h2", { class: "text-xs font-black uppercase tracking-[0.3em] text-slate-400 italic" }, "Daftar Dokumen Pendukung "),
                  createVNode("button", {
                    onClick: openCreate,
                    class: "px-8 py-3 bg-slate-900 text-white rounded-[1.5rem] font-black text-[10px] uppercase shadow-2xl hover:bg-rose-600 transition-all active:scale-95"
                  }, " Tambah Dokumen Baru ")
                ]),
                createVNode("div", { class: "bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" }, [
                  createVNode("table", { class: "w-full text-left text-xs border-collapse" }, [
                    createVNode("thead", { class: "bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "p-6" }, "Nama Dokumen"),
                        createVNode("th", { class: "p-6 text-center" }, "Tipe Akses"),
                        createVNode("th", { class: "p-6" }, "Diupload Oleh"),
                        createVNode("th", { class: "p-6 text-center" }, "Aksi")
                      ])
                    ]),
                    createVNode("tbody", { class: "divide-y divide-slate-100 dark:divide-slate-800" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.documents.data, (doc) => {
                        return openBlock(), createBlock("tr", {
                          key: doc.id,
                          class: "group hover:bg-slate-50/50 transition-colors"
                        }, [
                          createVNode("td", { class: "p-6" }, [
                            createVNode("div", { class: "font-black text-slate-800 dark:text-white uppercase text-sm leading-none" }, toDisplayString(doc.name), 1),
                            createVNode("div", { class: "text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-tighter" }, "Format: " + toDisplayString(doc.extension), 1)
                          ]),
                          createVNode("td", { class: "p-6 text-center" }, [
                            createVNode("span", {
                              class: [
                                "px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border shadow-sm",
                                doc.type === "public" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100"
                              ]
                            }, toDisplayString(doc.type), 3)
                          ]),
                          createVNode("td", { class: "p-6 text-slate-500 font-medium italic" }, toDisplayString(doc.uploader.name), 1),
                          createVNode("td", { class: "p-6" }, [
                            createVNode("div", { class: "flex justify-center gap-2" }, [
                              createVNode("a", {
                                href: _ctx.route("library.download", doc.id),
                                class: "p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-emerald-600 rounded-2xl transition-all shadow-sm"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                  })
                                ]))
                              ], 8, ["href"]),
                              createVNode("button", {
                                onClick: ($event) => openEdit(doc),
                                class: "p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-blue-600 rounded-2xl transition-all shadow-sm"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  })
                                ]))
                              ], 8, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => deleteDoc(doc.id),
                                class: "p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 rounded-2xl transition-all shadow-sm"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  })
                                ]))
                              ], 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ])
              ]),
              showModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-[999] flex items-center justify-center p-4"
              }, [
                createVNode("div", {
                  class: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm",
                  onClick: closeModal
                }),
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200" }, [
                  createVNode("div", { class: "p-8 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50" }, [
                    createVNode("h3", { class: "text-xl font-black uppercase text-slate-800 dark:text-white tracking-tighter" }, toDisplayString(isEditing.value ? "Edit Dokumen" : "Dokumen Baru"), 1),
                    createVNode("button", {
                      onClick: closeModal,
                      class: "text-4xl text-slate-300 hover:text-rose-600"
                    }, "×")
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "p-10 space-y-8"
                  }, [
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest" }, "Nama Dokumen"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        type: "text",
                        placeholder: "Misal: Standar SPMI 2024",
                        class: "w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).name]
                      ])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest" }, "Tipe Akses Dokumen"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => unref(form).type = $event,
                        class: "w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none"
                      }, [
                        createVNode("option", { value: "public" }, "Semua User (Public)"),
                        createVNode("option", { value: "auditor" }, "Khusus Auditor & Admin")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(form).type]
                      ])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest" }, "Pilih Berkas " + toDisplayString(isEditing.value ? "(Opsional)" : ""), 1),
                      createVNode("input", {
                        type: "file",
                        onInput: ($event) => unref(form).file = $event.target.files[0],
                        required: !isEditing.value,
                        class: "w-full text-[10px] text-slate-400 file:mr-4 file:py-2.5 file:px-8 file:rounded-xl file:border-0 file:bg-slate-900 file:text-white file:font-black hover:file:bg-rose-600 transition-all cursor-pointer shadow-sm"
                      }, null, 40, ["onInput", "required"])
                    ]),
                    unref(form).progress ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"
                    }, [
                      createVNode("div", {
                        class: "bg-rose-600 h-full transition-all",
                        style: { width: unref(form).progress.percentage + "%" }
                      }, null, 4)
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "flex justify-end gap-3 pt-4" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: closeModal,
                        class: "px-8 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors"
                      }, "Batal"),
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(form).processing,
                        class: "px-12 py-3 bg-rose-600 text-white rounded-2xl font-black uppercase text-[10px] shadow-xl shadow-rose-500/30 hover:bg-rose-700 transition-all active:scale-95 disabled:opacity-50"
                      }, toDisplayString(buttonLabel.value), 9, ["disabled"])
                    ])
                  ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Library/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

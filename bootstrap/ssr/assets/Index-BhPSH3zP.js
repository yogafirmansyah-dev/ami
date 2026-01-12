import { ref, watch, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withDirectives, vModelText, openBlock, Fragment, renderList, toDisplayString, withModifiers, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { router, useForm } from "@inertiajs/vue3";
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
    faculties: Object,
    // Paginated data
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    watch(search, debounce((value) => {
      router.get(route("admin.faculties.index"), { search: value }, {
        preserveState: true,
        replace: true
      });
    }, 500));
    const showModal = ref(false);
    const editMode = ref(false);
    const form = useForm({
      id: null,
      name: ""
    });
    const openCreateModal = () => {
      editMode.value = false;
      form.reset();
      showModal.value = true;
    };
    const openEditModal = (faculty) => {
      editMode.value = true;
      form.id = faculty.id;
      form.name = faculty.name;
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
      form.reset();
    };
    const submit = () => {
      if (editMode.value) {
        form.put(route("admin.faculties.update", form.id), {
          onSuccess: () => closeModal()
        });
      } else {
        form.post(route("admin.faculties.store"), {
          onSuccess: () => closeModal()
        });
      }
    };
    const deleteData = (id) => {
      if (confirm("Menghapus Fakultas akan berdampak pada data Prodi di bawahnya. Lanjutkan?")) {
        router.delete(route("admin.faculties.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Master Fakultas" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Master Fakultas`);
          } else {
            return [
              createTextVNode("Master Fakultas")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Manajemen unit kerja tingkat Fakultas / Dekanat`);
          } else {
            return [
              createTextVNode("Manajemen unit kerja tingkat Fakultas / Dekanat")
            ];
          }
        }),
        "action-buttons": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors"${_scopeId}><span class="mr-2"${_scopeId}>+</span> Tambah Fakultas </button>`);
          } else {
            return [
              createVNode("button", {
                onClick: openCreateModal,
                class: "inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors"
              }, [
                createVNode("span", { class: "mr-2" }, "+"),
                createTextVNode(" Tambah Fakultas ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex justify-end"${_scopeId}><div class="relative w-full max-w-sm"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama fakultas..." class="w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"${_scopeId}></div></div><div class="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800"${_scopeId}><table class="w-full text-sm text-left"${_scopeId}><thead class="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 uppercase text-xs font-bold"${_scopeId}><tr${_scopeId}><th class="p-4 text-center w-16"${_scopeId}>No</th><th class="p-4"${_scopeId}>Nama Fakultas</th><th class="p-4"${_scopeId}>Total Prodi</th><th class="p-4 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-200 dark:divide-slate-800"${_scopeId}><!--[-->`);
            ssrRenderList(__props.faculties.data, (item, index) => {
              _push2(`<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"${_scopeId}><td class="p-4 text-center text-slate-500"${_scopeId}>${ssrInterpolate(__props.faculties.from + index)}</td><td class="p-4 font-medium text-slate-700 dark:text-slate-200"${_scopeId}>${ssrInterpolate(item.name)}</td><td class="p-4"${_scopeId}><span class="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold border border-blue-100 dark:border-blue-800"${_scopeId}>${ssrInterpolate(item.prodis_count || 0)} Prodi </span></td><td class="p-4"${_scopeId}><div class="flex justify-center gap-2"${_scopeId}><button class="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="Edit"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"${_scopeId}></path></svg></button><button class="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Hapus"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${_scopeId}></path></svg></button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.faculties.data.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="4" class="p-8 text-center text-slate-500 italic"${_scopeId}>Data fakultas tidak ditemukan. </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div><div class="flex items-center justify-between py-2"${_scopeId}><div class="text-xs text-slate-500"${_scopeId}> Menampilkan ${ssrInterpolate(__props.faculties.from)} sampai ${ssrInterpolate(__props.faculties.to)} dari ${ssrInterpolate(__props.faculties.total)} data </div><div class="flex gap-1"${_scopeId}><!--[-->`);
            ssrRenderList(__props.faculties.links, (link) => {
              _push2(`<button${ssrIncludeBooleanAttr(!link.url) ? " disabled" : ""} class="${ssrRenderClass([[
                link.active ? "bg-rose-600 text-white border-rose-600" : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50",
                !link.url ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              ], "px-3 py-1 text-xs rounded-md border transition-all"])}"${_scopeId}>${link.label ?? ""}</button>`);
            });
            _push2(`<!--]--></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4"${_scopeId}><div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"${_scopeId}><div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center"${_scopeId}><h3 class="text-lg font-bold text-slate-800 dark:text-white"${_scopeId}>${ssrInterpolate(editMode.value ? "Edit Fakultas" : "Tambah Fakultas")}</h3><button class="text-slate-400 hover:text-slate-600 text-2xl"${_scopeId}>×</button></div><form class="p-6 space-y-5"${_scopeId}><div class="space-y-1.5"${_scopeId}><label class="text-sm font-semibold text-slate-700 dark:text-slate-300"${_scopeId}>Nama Fakultas</label><input${ssrRenderAttr("value", unref(form).name)} type="text" required placeholder="Masukkan nama fakultas (ex: Fakultas Teknik)" class="${ssrRenderClass([unref(form).errors.name ? "border-red-500 focus:ring-red-200" : "border-slate-300 dark:border-slate-700 focus:ring-rose-200 focus:border-rose-500", "w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 transition-all bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"])}"${_scopeId}>`);
              if (unref(form).errors.name) {
                _push2(`<p class="text-xs text-red-500 mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex justify-end gap-3 mt-8"${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"${_scopeId}> Batal </button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg shadow-sm disabled:opacity-50 transition-colors"${_scopeId}>`);
              if (unref(form).processing) {
                _push2(`<span${_scopeId}>Memproses...</span>`);
              } else {
                _push2(`<span${_scopeId}>${ssrInterpolate(editMode.value ? "Simpan Perubahan" : "Tambah Data")}</span>`);
              }
              _push2(`</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode("div", { class: "relative w-full max-w-sm" }, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      type: "text",
                      placeholder: "Cari nama fakultas...",
                      class: "w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, search.value]
                    ])
                  ])
                ]),
                createVNode("div", { class: "overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800" }, [
                  createVNode("table", { class: "w-full text-sm text-left" }, [
                    createVNode("thead", { class: "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 uppercase text-xs font-bold" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "p-4 text-center w-16" }, "No"),
                        createVNode("th", { class: "p-4" }, "Nama Fakultas"),
                        createVNode("th", { class: "p-4" }, "Total Prodi"),
                        createVNode("th", { class: "p-4 text-center" }, "Aksi")
                      ])
                    ]),
                    createVNode("tbody", { class: "divide-y divide-slate-200 dark:divide-slate-800" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.faculties.data, (item, index) => {
                        return openBlock(), createBlock("tr", {
                          key: item.id,
                          class: "hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        }, [
                          createVNode("td", { class: "p-4 text-center text-slate-500" }, toDisplayString(__props.faculties.from + index), 1),
                          createVNode("td", { class: "p-4 font-medium text-slate-700 dark:text-slate-200" }, toDisplayString(item.name), 1),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("span", { class: "px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold border border-blue-100 dark:border-blue-800" }, toDisplayString(item.prodis_count || 0) + " Prodi ", 1)
                          ]),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "flex justify-center gap-2" }, [
                              createVNode("button", {
                                onClick: ($event) => openEditModal(item),
                                class: "p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors",
                                title: "Edit"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "w-5 h-5",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
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
                                onClick: ($event) => deleteData(item.id),
                                class: "p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors",
                                title: "Hapus"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "w-5 h-5",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
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
                      }), 128)),
                      __props.faculties.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                        createVNode("td", {
                          colspan: "4",
                          class: "p-8 text-center text-slate-500 italic"
                        }, "Data fakultas tidak ditemukan. ")
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between py-2" }, [
                  createVNode("div", { class: "text-xs text-slate-500" }, " Menampilkan " + toDisplayString(__props.faculties.from) + " sampai " + toDisplayString(__props.faculties.to) + " dari " + toDisplayString(__props.faculties.total) + " data ", 1),
                  createVNode("div", { class: "flex gap-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.faculties.links, (link) => {
                      return openBlock(), createBlock("button", {
                        key: link.label,
                        innerHTML: link.label,
                        onClick: ($event) => link.url ? _ctx.$inertia.visit(link.url) : null,
                        disabled: !link.url,
                        class: ["px-3 py-1 text-xs rounded-md border transition-all", [
                          link.active ? "bg-rose-600 text-white border-rose-600" : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50",
                          !link.url ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                        ]]
                      }, null, 10, ["innerHTML", "onClick", "disabled"]);
                    }), 128))
                  ])
                ])
              ]),
              showModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center p-4"
              }, [
                createVNode("div", {
                  class: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm",
                  onClick: closeModal
                }),
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200" }, [
                  createVNode("div", { class: "p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center" }, [
                    createVNode("h3", { class: "text-lg font-bold text-slate-800 dark:text-white" }, toDisplayString(editMode.value ? "Edit Fakultas" : "Tambah Fakultas"), 1),
                    createVNode("button", {
                      onClick: closeModal,
                      class: "text-slate-400 hover:text-slate-600 text-2xl"
                    }, "×")
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "p-6 space-y-5"
                  }, [
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-sm font-semibold text-slate-700 dark:text-slate-300" }, "Nama Fakultas"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        type: "text",
                        required: "",
                        placeholder: "Masukkan nama fakultas (ex: Fakultas Teknik)",
                        class: ["w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 transition-all bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200", unref(form).errors.name ? "border-red-500 focus:ring-red-200" : "border-slate-300 dark:border-slate-700 focus:ring-rose-200 focus:border-rose-500"]
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).name]
                      ]),
                      unref(form).errors.name ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-red-500 mt-1"
                      }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex justify-end gap-3 mt-8" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: closeModal,
                        class: "px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      }, " Batal "),
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(form).processing,
                        class: "px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg shadow-sm disabled:opacity-50 transition-colors"
                      }, [
                        unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "Memproses...")) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(editMode.value ? "Simpan Perubahan" : "Tambah Data"), 1))
                      ], 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Faculty/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

import { ref, watch, mergeProps, withCtx, unref, createBlock, createTextVNode, openBlock, createVNode, createCommentVNode, withDirectives, vModelText, Fragment, renderList, toDisplayString, withModifiers, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { router, useForm, Link } from "@inertiajs/vue3";
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
    standards: Object,
    filters: Object,
    targetTypes: Array
    // [ {value: 'prodi', label: 'Program Studi'}, ... ]
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    watch(search, debounce((value) => {
      router.get(route("admin.standards.index"), { search: value }, {
        preserveState: true,
        replace: true
      });
    }, 500));
    const showModal = ref(false);
    const editMode = ref(false);
    const form = useForm({
      id: null,
      name: "",
      target_type: "",
      description: ""
    });
    const openCreateModal = () => {
      editMode.value = false;
      form.reset();
      showModal.value = true;
    };
    const openEditModal = (standard) => {
      editMode.value = true;
      form.id = standard.id;
      form.name = standard.name;
      form.target_type = standard.target_type;
      form.description = standard.description;
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
      form.reset();
    };
    const submit = () => {
      if (editMode.value) {
        form.put(route("admin.standards.update", form.id), {
          onSuccess: () => closeModal()
        });
      } else {
        form.post(route("admin.standards.store"), {
          onSuccess: () => closeModal()
        });
      }
    };
    const deleteData = (id) => {
      if (confirm("Menghapus standar akan menghapus seluruh indikator di dalamnya. Lanjutkan?")) {
        router.delete(route("admin.standards.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Master Standar Mutu" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Master Standar Mutu`);
          } else {
            return [
              createTextVNode("Master Standar Mutu")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kelola instrumen dan kriteria penilaian AMI`);
          } else {
            return [
              createTextVNode("Kelola instrumen dan kriteria penilaian AMI")
            ];
          }
        }),
        "action-buttons": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-rose-500/20 transition-all active:scale-95"${_scopeId}><span class="mr-2"${_scopeId}>+</span> Tambah Standar </button>`);
          } else {
            return [
              createVNode("button", {
                onClick: openCreateModal,
                class: "inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-rose-500/20 transition-all active:scale-95"
              }, [
                createVNode("span", { class: "mr-2" }, "+"),
                createTextVNode(" Tambah Standar ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex justify-end"${_scopeId}><div class="relative w-full max-w-sm"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama standar..." class="w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"${_scopeId}></div></div><div class="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800"${_scopeId}><table class="w-full text-sm text-left"${_scopeId}><thead class="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 uppercase text-xs font-bold"${_scopeId}><tr${_scopeId}><th class="p-4"${_scopeId}>Nama Standar Mutu</th><th class="p-4"${_scopeId}>Target Unit</th><th class="p-4 text-center"${_scopeId}>Jumlah Indikator</th><th class="p-4 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-200 dark:divide-slate-800"${_scopeId}><!--[-->`);
            ssrRenderList(__props.standards.data, (item) => {
              _push2(`<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"${_scopeId}><td class="p-4"${_scopeId}><div class="font-bold text-slate-700 dark:text-slate-200"${_scopeId}>${ssrInterpolate(item.name)}</div><div class="text-[10px] text-slate-400 mt-1 uppercase tracking-tight"${_scopeId}>ID: #${ssrInterpolate(item.id)}</div></td><td class="p-4"${_scopeId}><span class="${ssrRenderClass([
                "px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border",
                item.target_type === "prodi" ? "bg-blue-50 text-blue-700 border-blue-100" : "bg-purple-50 text-purple-700 border-purple-100"
              ])}"${_scopeId}>${ssrInterpolate(item.target_type)}</span></td><td class="p-4 text-center"${_scopeId}><div class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 font-bold text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(item.indicators_count || 0)}</div></td><td class="p-4"${_scopeId}><div class="flex justify-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.standards.indicators.index", item.id),
                class: "inline-flex items-center px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-100 transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"${_scopeId2}></path></svg> Indikator `);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-4 h-4 mr-1.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        })
                      ])),
                      createTextVNode(" Indikator ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button class="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"${_scopeId}></path></svg></button><button class="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${_scopeId}></path></svg></button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.standards.data.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="4" class="p-10 text-center text-slate-400 italic"${_scopeId}>Belum ada standar mutu yang dibuat. </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div><div class="flex items-center justify-between py-2"${_scopeId}><div class="text-xs text-slate-500 italic"${_scopeId}> Data ${ssrInterpolate(__props.standards.from)} - ${ssrInterpolate(__props.standards.to)} dari total ${ssrInterpolate(__props.standards.total)}</div><div class="flex gap-1"${_scopeId}><!--[-->`);
            ssrRenderList(__props.standards.links, (link) => {
              _push2(`<button${ssrIncludeBooleanAttr(!link.url) ? " disabled" : ""} class="${ssrRenderClass([[
                link.active ? "bg-rose-600 text-white border-rose-600 shadow-md" : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50",
                !link.url ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              ], "px-3 py-1 text-xs rounded-md border transition-all"])}"${_scopeId}>${link.label ?? ""}</button>`);
            });
            _push2(`<!--]--></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4"${_scopeId}><div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"${_scopeId}><div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center"${_scopeId}><h3 class="text-lg font-bold text-slate-800 dark:text-white"${_scopeId}>${ssrInterpolate(editMode.value ? "Edit Standar Mutu" : "Tambah Standar Mutu")}</h3><button class="text-slate-400 hover:text-slate-600 text-2xl transition-colors"${_scopeId}>×</button></div><form class="p-6 space-y-5"${_scopeId}><div class="space-y-1.5"${_scopeId}><label class="text-sm font-semibold text-slate-700 dark:text-slate-300"${_scopeId}>Nama Standar Mutu</label><input${ssrRenderAttr("value", unref(form).name)} type="text" required placeholder="Contoh: Standar Pendidikan Tinggi 2026" class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 transition-all bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"${_scopeId}>`);
              if (unref(form).errors.name) {
                _push2(`<p class="text-xs text-red-500 mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-1.5"${_scopeId}><label class="text-sm font-semibold text-slate-700 dark:text-slate-300"${_scopeId}>Target Audit (Level)</label><select required class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 transition-all bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"${_scopeId}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).target_type) ? ssrLooseContain(unref(form).target_type, "") : ssrLooseEqual(unref(form).target_type, "")) ? " selected" : ""}${_scopeId}>Pilih Level Unit Kerja</option><!--[-->`);
              ssrRenderList(__props.targetTypes, (type, index) => {
                _push2(`<option${ssrRenderAttr("value", type.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).target_type) ? ssrLooseContain(unref(form).target_type, type.value) : ssrLooseEqual(unref(form).target_type, type.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(type.label)}</option>`);
              });
              _push2(`<!--]--></select>`);
              if (unref(form).errors.target_type) {
                _push2(`<p class="text-xs text-red-500 mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.target_type)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="text-[10px] text-slate-500 italic leading-tight mt-2"${_scopeId}> * Penting: Standar yang diset untuk &#39;prodi&#39; tidak bisa digunakan untuk audit tingkat &#39;faculty&#39;, dan sebaliknya. </p></div><div class="space-y-1.5"${_scopeId}><label class="text-sm font-semibold text-slate-700 dark:text-slate-300"${_scopeId}>Deskripsi</label><textarea type="text" required placeholder="Contoh: Standar Pendidikan Tinggi 2026" class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 transition-all bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
              if (unref(form).errors.description) {
                _push2(`<p class="text-xs text-red-500 mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex justify-end gap-3 mt-8"${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"${_scopeId}> Batal </button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-sm disabled:opacity-50 transition-colors"${_scopeId}>`);
              if (unref(form).processing) {
                _push2(`<span${_scopeId}>Memproses...</span>`);
              } else {
                _push2(`<span${_scopeId}>${ssrInterpolate(editMode.value ? "Simpan Perubahan" : "Buat Standar")}</span>`);
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
                      placeholder: "Cari nama standar...",
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
                        createVNode("th", { class: "p-4" }, "Nama Standar Mutu"),
                        createVNode("th", { class: "p-4" }, "Target Unit"),
                        createVNode("th", { class: "p-4 text-center" }, "Jumlah Indikator"),
                        createVNode("th", { class: "p-4 text-center" }, "Aksi")
                      ])
                    ]),
                    createVNode("tbody", { class: "divide-y divide-slate-200 dark:divide-slate-800" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.standards.data, (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.id,
                          class: "hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        }, [
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "font-bold text-slate-700 dark:text-slate-200" }, toDisplayString(item.name), 1),
                            createVNode("div", { class: "text-[10px] text-slate-400 mt-1 uppercase tracking-tight" }, "ID: #" + toDisplayString(item.id), 1)
                          ]),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("span", {
                              class: [
                                "px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border",
                                item.target_type === "prodi" ? "bg-blue-50 text-blue-700 border-blue-100" : "bg-purple-50 text-purple-700 border-purple-100"
                              ]
                            }, toDisplayString(item.target_type), 3)
                          ]),
                          createVNode("td", { class: "p-4 text-center" }, [
                            createVNode("div", { class: "inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 font-bold text-slate-600 dark:text-slate-400" }, toDisplayString(item.indicators_count || 0), 1)
                          ]),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "flex justify-center gap-2" }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("admin.standards.indicators.index", item.id),
                                class: "inline-flex items-center px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-100 transition-colors"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-4 h-4 mr-1.5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                    })
                                  ])),
                                  createTextVNode(" Indikator ")
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              createVNode("button", {
                                onClick: ($event) => openEditModal(item),
                                class: "p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
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
                                class: "p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
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
                      __props.standards.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                        createVNode("td", {
                          colspan: "4",
                          class: "p-10 text-center text-slate-400 italic"
                        }, "Belum ada standar mutu yang dibuat. ")
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between py-2" }, [
                  createVNode("div", { class: "text-xs text-slate-500 italic" }, " Data " + toDisplayString(__props.standards.from) + " - " + toDisplayString(__props.standards.to) + " dari total " + toDisplayString(__props.standards.total), 1),
                  createVNode("div", { class: "flex gap-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.standards.links, (link) => {
                      return openBlock(), createBlock("button", {
                        key: link.label,
                        innerHTML: link.label,
                        onClick: ($event) => link.url ? _ctx.$inertia.visit(link.url) : null,
                        disabled: !link.url,
                        class: ["px-3 py-1 text-xs rounded-md border transition-all", [
                          link.active ? "bg-rose-600 text-white border-rose-600 shadow-md" : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50",
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
                    createVNode("h3", { class: "text-lg font-bold text-slate-800 dark:text-white" }, toDisplayString(editMode.value ? "Edit Standar Mutu" : "Tambah Standar Mutu"), 1),
                    createVNode("button", {
                      onClick: closeModal,
                      class: "text-slate-400 hover:text-slate-600 text-2xl transition-colors"
                    }, "×")
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "p-6 space-y-5"
                  }, [
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-sm font-semibold text-slate-700 dark:text-slate-300" }, "Nama Standar Mutu"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        type: "text",
                        required: "",
                        placeholder: "Contoh: Standar Pendidikan Tinggi 2026",
                        class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 transition-all bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).name]
                      ]),
                      unref(form).errors.name ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-red-500 mt-1"
                      }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-sm font-semibold text-slate-700 dark:text-slate-300" }, "Target Audit (Level)"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => unref(form).target_type = $event,
                        required: "",
                        class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 transition-all bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"
                      }, [
                        createVNode("option", {
                          value: "",
                          disabled: ""
                        }, "Pilih Level Unit Kerja"),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.targetTypes, (type, index) => {
                          return openBlock(), createBlock("option", {
                            key: index,
                            value: type.value
                          }, toDisplayString(type.label), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(form).target_type]
                      ]),
                      unref(form).errors.target_type ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-red-500 mt-1"
                      }, toDisplayString(unref(form).errors.target_type), 1)) : createCommentVNode("", true),
                      createVNode("p", { class: "text-[10px] text-slate-500 italic leading-tight mt-2" }, " * Penting: Standar yang diset untuk 'prodi' tidak bisa digunakan untuk audit tingkat 'faculty', dan sebaliknya. ")
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-sm font-semibold text-slate-700 dark:text-slate-300" }, "Deskripsi"),
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => unref(form).description = $event,
                        type: "text",
                        required: "",
                        placeholder: "Contoh: Standar Pendidikan Tinggi 2026",
                        class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 transition-all bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).description]
                      ]),
                      unref(form).errors.description ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-red-500 mt-1"
                      }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
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
                        class: "px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-sm disabled:opacity-50 transition-colors"
                      }, [
                        unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "Memproses...")) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(editMode.value ? "Simpan Perubahan" : "Buat Standar"), 1))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Standard/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

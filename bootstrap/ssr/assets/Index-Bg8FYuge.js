import { ref, watch, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withDirectives, vModelText, openBlock, Fragment, renderList, toDisplayString, withModifiers, vModelSelect, createTextVNode, useSSRContext } from "vue";
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
    standard: Object,
    // Master Standard Parent
    indicators: Object,
    // Paginated indicators
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    watch(search, debounce((value) => {
      router.get(route("admin.standards.indicators.index", props.standard.id), { search: value }, {
        preserveState: true,
        replace: true
      });
    }, 500));
    const showModal = ref(false);
    const editMode = ref(false);
    const form = useForm({
      id: null,
      requirement: "",
      target: "",
      evidence_needed: "",
      is_evidence_required: 1,
      template: null
    });
    const openCreateModal = () => {
      editMode.value = false;
      form.reset();
      showModal.value = true;
    };
    const openEditModal = (indicator) => {
      editMode.value = true;
      form.id = indicator.id;
      form.requirement = indicator.requirement;
      form.target = indicator.target;
      form.evidence_needed = indicator.evidence_needed;
      form.is_evidence_required = indicator.is_evidence_required ? 1 : 0;
      form.template = null;
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
      form.reset();
    };
    const submit = () => {
      if (editMode.value) {
        form.transform((data) => ({
          ...data,
          _method: "PATCH"
        })).post(route("admin.standards.indicators.update", {
          standard: props.standard.id,
          indicator: form.id
        }), {
          forceFormData: true,
          // Wajib untuk upload file
          onSuccess: () => closeModal(),
          preserveScroll: true
        });
      } else {
        form.post(route("admin.standards.indicators.store", props.standard.id), {
          onSuccess: () => closeModal()
        });
      }
    };
    const deleteData = (id) => {
      if (confirm("Hapus indikator master ini? Perubahan ini tidak akan mempengaruhi penugasan yang sudah berjalan (snapshot).")) {
        router.delete(route("admin.standards.indicators.destroy", {
          standard: props.standard.id,
          indicator: id
        }));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({
        title: "Master Indikator: " + __props.standard.name
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pengaturan Master Indikator`);
          } else {
            return [
              createTextVNode("Pengaturan Master Indikator")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Standar: <span class="font-bold text-rose-600"${_scopeId}>${ssrInterpolate(__props.standard.name)}</span> | Target Unit: <span class="uppercase font-semibold"${_scopeId}>${ssrInterpolate(__props.standard.target_type)}</span>`);
          } else {
            return [
              createTextVNode(" Standar: "),
              createVNode("span", { class: "font-bold text-rose-600" }, toDisplayString(__props.standard.name), 1),
              createTextVNode(" | Target Unit: "),
              createVNode("span", { class: "uppercase font-semibold" }, toDisplayString(__props.standard.target_type), 1)
            ];
          }
        }),
        "action-buttons": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.standards.index"),
              class: "inline-flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` ← Kembali `);
                } else {
                  return [
                    createTextVNode(" ← Kembali ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button class="inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg shadow-sm transition-all active:scale-95"${_scopeId}> + Tambah Indikator </button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-2" }, [
                createVNode(unref(Link), {
                  href: _ctx.route("admin.standards.index"),
                  class: "inline-flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" ← Kembali ")
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode("button", {
                  onClick: openCreateModal,
                  class: "inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg shadow-sm transition-all active:scale-95"
                }, " + Tambah Indikator ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex justify-end"${_scopeId}><div class="relative w-full max-w-sm"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari kode atau pernyataan..." class="w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 outline-none transition-all"${_scopeId}></div></div><div class="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800"${_scopeId}><table class="w-full text-sm text-left"${_scopeId}><thead class="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 uppercase text-[11px] font-bold tracking-wider"${_scopeId}><tr${_scopeId}><th class="p-4 w-20"${_scopeId}>Kode</th><th class="p-4"${_scopeId}>Pernyataan Standar / Indikator</th><th class="p-4 text-center w-28"${_scopeId}>Target</th><th class="p-4 text-center w-32"${_scopeId}>Bukti Dibutuhkan</th><th class="p-4 text-center w-24"${_scopeId}>Template</th><th class="p-4 text-center w-24"${_scopeId}>Wajib Bukti</th><th class="p-4 text-center w-24"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-200 dark:divide-slate-800"${_scopeId}><!--[-->`);
            ssrRenderList(__props.indicators.data, (item) => {
              _push2(`<tr class="align-top hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"${_scopeId}><td class="p-4 font-bold text-rose-600 font-mono"${_scopeId}>${ssrInterpolate(item.code)}</td><td class="p-4 leading-relaxed text-slate-700 dark:text-slate-300"${_scopeId}>${ssrInterpolate(item.requirement)}</td><td class="p-4 text-center text-[11px] font-semibold text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(item.target || "-")}</td><td class="p-4 text-center text-[11px] italic text-slate-500"${_scopeId}>${ssrInterpolate(item.evidence_needed || "-")}</td><td class="p-4 text-center"${_scopeId}>`);
              if (item.template_path) {
                _push2(`<a${ssrRenderAttr("href", _ctx.route("admin.indicators.show-template", item.id))} target="_blank" class="text-blue-500 hover:underline font-bold"${_scopeId}> Buka Template </a>`);
              } else {
                _push2(`<span class="text-slate-300"${_scopeId}>-</span>`);
              }
              _push2(`</td><td class="p-4 text-center"${_scopeId}><span class="${ssrRenderClass([
                "px-2 py-0.5 rounded text-[10px] font-bold uppercase border",
                item.is_evidence_required ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-slate-50 text-slate-400 border-slate-200"
              ])}"${_scopeId}>${ssrInterpolate(item.is_evidence_required ? "Ya" : "Tidak")}</span></td><td class="p-4"${_scopeId}><div class="flex justify-center gap-1"${_scopeId}><button class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"${_scopeId}></path></svg></button><button class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Hapus"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${_scopeId}></path></svg></button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.indicators.data.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="7" class="p-10 text-center text-slate-400 italic font-medium"${_scopeId}>Data indikator belum tersedia.</td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div><div class="flex items-center justify-between py-2"${_scopeId}><div class="text-xs text-slate-500"${_scopeId}> Menampilkan ${ssrInterpolate(__props.indicators.from)} - ${ssrInterpolate(__props.indicators.to)} dari ${ssrInterpolate(__props.indicators.total)} indikator </div><div class="flex gap-1"${_scopeId}><!--[-->`);
            ssrRenderList(__props.indicators.links, (link) => {
              _push2(`<button${ssrIncludeBooleanAttr(!link.url) ? " disabled" : ""} class="${ssrRenderClass([[
                link.active ? "bg-rose-600 text-white border-rose-600" : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50",
                !link.url ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              ], "px-3 py-1 text-xs rounded-md border transition-all"])}"${_scopeId}>${link.label ?? ""}</button>`);
            });
            _push2(`<!--]--></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4"${_scopeId}><div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"${_scopeId}><div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center"${_scopeId}><h3 class="text-lg font-bold text-slate-800 dark:text-white"${_scopeId}>${ssrInterpolate(editMode.value ? "Edit Master Indikator" : "Tambah Master Indikator")}</h3><button class="text-slate-400 hover:text-slate-600 text-2xl transition-colors"${_scopeId}>×</button></div><form class="p-6 space-y-5 max-h-[80vh] overflow-y-auto"${_scopeId}><div class="space-y-1.5"${_scopeId}><label class="text-xs font-bold text-slate-500 uppercase"${_scopeId}>Pernyataan Standar / Indikator</label><textarea rows="3" placeholder="Masukkan standar atau indikator mutu" class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-white dark:bg-slate-900" required${_scopeId}>${ssrInterpolate(unref(form).requirement)}</textarea></div><div class="space-y-1.5"${_scopeId}><label class="text-xs font-bold text-slate-500 uppercase"${_scopeId}>Target Kinerja</label><input${ssrRenderAttr("value", unref(form).target)} type="text" placeholder="" class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-white dark:bg-slate-900"${_scopeId}></div><div class="space-y-1.5"${_scopeId}><label class="text-xs font-bold text-slate-500 uppercase"${_scopeId}>Bukti yang Diperiksa</label><textarea rows="2" placeholder="Contoh: Dokumen kurikulum, SK Kaprodi, dll" class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-white dark:bg-slate-900"${_scopeId}>${ssrInterpolate(unref(form).evidence_needed)}</textarea></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4"${_scopeId}><div class="space-y-1.5"${_scopeId}><label class="text-xs font-bold text-slate-500 uppercase"${_scopeId}>Wajib Bukti?</label><select class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-white dark:bg-slate-900"${_scopeId}><option${ssrRenderAttr("value", 1)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_evidence_required) ? ssrLooseContain(unref(form).is_evidence_required, 1) : ssrLooseEqual(unref(form).is_evidence_required, 1)) ? " selected" : ""}${_scopeId}>Ya (Wajib)</option><option${ssrRenderAttr("value", 0)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_evidence_required) ? ssrLooseContain(unref(form).is_evidence_required, 0) : ssrLooseEqual(unref(form).is_evidence_required, 0)) ? " selected" : ""}${_scopeId}>Tidak (Opsional)</option></select></div><div class="space-y-1.5"${_scopeId}><label class="text-xs font-bold text-slate-500 uppercase"${_scopeId}>Upload Template Dokumen (Opsional)</label><input type="file" accept=".pdf,.docx,.xlsx" class="block w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100 cursor-pointer border border-slate-100 rounded-lg p-1"${_scopeId}>`);
              if (unref(form).errors.template) {
                _push2(`<p class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(unref(form).errors.template)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="flex justify-end gap-3 pt-6 border-t border-slate-100 dark:border-slate-800"${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-rose-500/20 disabled:opacity-50 transition-all active:scale-95"${_scopeId}>`);
              if (unref(form).processing) {
                _push2(`<span${_scopeId}>Memproses...</span>`);
              } else {
                _push2(`<span${_scopeId}>${ssrInterpolate(editMode.value ? "Simpan Perubahan" : "Tambah Indikator")}</span>`);
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
                      placeholder: "Cari kode atau pernyataan...",
                      class: "w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 outline-none transition-all"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, search.value]
                    ])
                  ])
                ]),
                createVNode("div", { class: "overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800" }, [
                  createVNode("table", { class: "w-full text-sm text-left" }, [
                    createVNode("thead", { class: "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 uppercase text-[11px] font-bold tracking-wider" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "p-4 w-20" }, "Kode"),
                        createVNode("th", { class: "p-4" }, "Pernyataan Standar / Indikator"),
                        createVNode("th", { class: "p-4 text-center w-28" }, "Target"),
                        createVNode("th", { class: "p-4 text-center w-32" }, "Bukti Dibutuhkan"),
                        createVNode("th", { class: "p-4 text-center w-24" }, "Template"),
                        createVNode("th", { class: "p-4 text-center w-24" }, "Wajib Bukti"),
                        createVNode("th", { class: "p-4 text-center w-24" }, "Aksi")
                      ])
                    ]),
                    createVNode("tbody", { class: "divide-y divide-slate-200 dark:divide-slate-800" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.indicators.data, (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.id,
                          class: "align-top hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        }, [
                          createVNode("td", { class: "p-4 font-bold text-rose-600 font-mono" }, toDisplayString(item.code), 1),
                          createVNode("td", { class: "p-4 leading-relaxed text-slate-700 dark:text-slate-300" }, toDisplayString(item.requirement), 1),
                          createVNode("td", { class: "p-4 text-center text-[11px] font-semibold text-slate-600 dark:text-slate-400" }, toDisplayString(item.target || "-"), 1),
                          createVNode("td", { class: "p-4 text-center text-[11px] italic text-slate-500" }, toDisplayString(item.evidence_needed || "-"), 1),
                          createVNode("td", { class: "p-4 text-center" }, [
                            item.template_path ? (openBlock(), createBlock("a", {
                              key: 0,
                              href: _ctx.route("admin.indicators.show-template", item.id),
                              target: "_blank",
                              class: "text-blue-500 hover:underline font-bold"
                            }, " Buka Template ", 8, ["href"])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-slate-300"
                            }, "-"))
                          ]),
                          createVNode("td", { class: "p-4 text-center" }, [
                            createVNode("span", {
                              class: [
                                "px-2 py-0.5 rounded text-[10px] font-bold uppercase border",
                                item.is_evidence_required ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-slate-50 text-slate-400 border-slate-200"
                              ]
                            }, toDisplayString(item.is_evidence_required ? "Ya" : "Tidak"), 3)
                          ]),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "flex justify-center gap-1" }, [
                              createVNode("button", {
                                onClick: ($event) => openEditModal(item),
                                class: "p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                title: "Edit"
                              }, [
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
                                    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  })
                                ]))
                              ], 8, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => deleteData(item.id),
                                class: "p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                                title: "Hapus"
                              }, [
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
                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  })
                                ]))
                              ], 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128)),
                      __props.indicators.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                        createVNode("td", {
                          colspan: "7",
                          class: "p-10 text-center text-slate-400 italic font-medium"
                        }, "Data indikator belum tersedia.")
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between py-2" }, [
                  createVNode("div", { class: "text-xs text-slate-500" }, " Menampilkan " + toDisplayString(__props.indicators.from) + " - " + toDisplayString(__props.indicators.to) + " dari " + toDisplayString(__props.indicators.total) + " indikator ", 1),
                  createVNode("div", { class: "flex gap-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.indicators.links, (link) => {
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
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200" }, [
                  createVNode("div", { class: "p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center" }, [
                    createVNode("h3", { class: "text-lg font-bold text-slate-800 dark:text-white" }, toDisplayString(editMode.value ? "Edit Master Indikator" : "Tambah Master Indikator"), 1),
                    createVNode("button", {
                      onClick: closeModal,
                      class: "text-slate-400 hover:text-slate-600 text-2xl transition-colors"
                    }, "×")
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "p-6 space-y-5 max-h-[80vh] overflow-y-auto"
                  }, [
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-xs font-bold text-slate-500 uppercase" }, "Pernyataan Standar / Indikator"),
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => unref(form).requirement = $event,
                        rows: "3",
                        placeholder: "Masukkan standar atau indikator mutu",
                        class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-white dark:bg-slate-900",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).requirement]
                      ])
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-xs font-bold text-slate-500 uppercase" }, "Target Kinerja"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).target = $event,
                        type: "text",
                        placeholder: "",
                        class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-white dark:bg-slate-900"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).target]
                      ])
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-xs font-bold text-slate-500 uppercase" }, "Bukti yang Diperiksa"),
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => unref(form).evidence_needed = $event,
                        rows: "2",
                        placeholder: "Contoh: Dokumen kurikulum, SK Kaprodi, dll",
                        class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-white dark:bg-slate-900"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).evidence_needed]
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4" }, [
                      createVNode("div", { class: "space-y-1.5" }, [
                        createVNode("label", { class: "text-xs font-bold text-slate-500 uppercase" }, "Wajib Bukti?"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => unref(form).is_evidence_required = $event,
                          class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-white dark:bg-slate-900"
                        }, [
                          createVNode("option", { value: 1 }, "Ya (Wajib)"),
                          createVNode("option", { value: 0 }, "Tidak (Opsional)")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).is_evidence_required]
                        ])
                      ]),
                      createVNode("div", { class: "space-y-1.5" }, [
                        createVNode("label", { class: "text-xs font-bold text-slate-500 uppercase" }, "Upload Template Dokumen (Opsional)"),
                        createVNode("input", {
                          type: "file",
                          onInput: ($event) => unref(form).template = $event.target.files[0],
                          accept: ".pdf,.docx,.xlsx",
                          class: "block w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100 cursor-pointer border border-slate-100 rounded-lg p-1"
                        }, null, 40, ["onInput"]),
                        unref(form).errors.template ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-red-500"
                        }, toDisplayString(unref(form).errors.template), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-3 pt-6 border-t border-slate-100 dark:border-slate-800" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: closeModal,
                        class: "px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                      }, "Batal"),
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(form).processing,
                        class: "px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-rose-500/20 disabled:opacity-50 transition-all active:scale-95"
                      }, [
                        unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "Memproses...")) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(editMode.value ? "Simpan Perubahan" : "Tambah Indikator"), 1))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Indicator/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

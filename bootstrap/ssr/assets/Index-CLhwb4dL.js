import { ref, watch, mergeProps, withCtx, unref, createBlock, openBlock, createVNode, createCommentVNode, withDirectives, vModelText, Fragment, renderList, toDisplayString, withModifiers, vModelSelect, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
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
    assignments: Object,
    periods: Array,
    standards: Array,
    auditors: Array,
    prodis: Array,
    faculties: Array,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    watch(search, debounce((value) => {
      router.get(route("admin.assignments.index"), { search: value }, { preserveState: true, replace: true });
    }, 500));
    const showModal = ref(false);
    const form = useForm({
      period_id: "",
      master_standard_id: "",
      auditor_id: "",
      assignable_type: "prodi",
      // prodi atau faculty
      assignable_id: ""
    });
    const submit = () => {
      form.post(route("admin.assignments.store"), {
        onSuccess: () => {
          showModal.value = false;
          form.reset();
        }
      });
    };
    const closeModal = () => {
      showModal.value = false;
      form.reset();
    };
    const getProgress = (item) => {
      if (!item.indicators_count) return 0;
      const percentage = item.scored_indicators_count / item.indicators_count * 100;
      return Math.round(percentage);
    };
    const deleteData = (id) => {
      if (confirm("Menghapus penugasan akan menghapus seluruh data snapshot indikator di dalamnya. Lanjutkan?")) {
        router.delete(route("admin.assignments.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Penugasan Audit" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Penugasan Audit`);
          } else {
            return [
              createTextVNode("Penugasan Audit")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Manajemen dan monitoring progres audit seluruh unit kerja`);
          } else {
            return [
              createTextVNode("Manajemen dan monitoring progres audit seluruh unit kerja")
            ];
          }
        }),
        "action-buttons": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-rose-500/20 transition-all active:scale-95"${_scopeId}> + Buat Penugasan Baru </button>`);
          } else {
            return [
              createVNode("button", {
                onClick: ($event) => showModal.value = true,
                class: "inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-rose-500/20 transition-all active:scale-95"
              }, " + Buat Penugasan Baru ", 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex justify-end"${_scopeId}><div class="relative w-full max-w-sm"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari unit atau auditor..." class="w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 outline-none transition-all"${_scopeId}></div></div><div class="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800"${_scopeId}><table class="w-full text-sm text-left"${_scopeId}><thead class="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 uppercase text-[11px] font-bold tracking-wider"${_scopeId}><tr${_scopeId}><th class="p-4"${_scopeId}>Unit Kerja</th><th class="p-4"${_scopeId}>Periode &amp; Standar</th><th class="p-4"${_scopeId}>Auditor</th><th class="p-4 text-center"${_scopeId}>Tahapan / Progress</th><th class="p-4 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-200 dark:divide-slate-800"${_scopeId}><!--[-->`);
            ssrRenderList(__props.assignments.data, (item) => {
              _push2(`<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"${_scopeId}><td class="p-4"${_scopeId}><div class="font-bold text-slate-800 dark:text-white leading-tight"${_scopeId}>${ssrInterpolate(item.assignable?.name)}</div><span class="${ssrRenderClass([
                "text-[9px] px-1.5 py-0.5 rounded font-bold uppercase mt-1 inline-block border",
                item.assignable_type.includes("Prodi") ? "bg-blue-50 text-blue-600 border-blue-100" : "bg-purple-50 text-purple-600 border-purple-100"
              ])}"${_scopeId}>${ssrInterpolate(item.assignable_type.includes("Prodi") ? "Program Studi" : "Fakultas")}</span></td><td class="p-4"${_scopeId}><div class="text-xs font-semibold text-slate-700 dark:text-slate-200"${_scopeId}>${ssrInterpolate(item.period?.name)}</div><div class="text-[10px] text-slate-400 mt-0.5"${_scopeId}>${ssrInterpolate(item.standard?.name)}</div></td><td class="p-4"${_scopeId}><div class="flex items-center gap-2 text-slate-600 dark:text-slate-300"${_scopeId}><div class="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"${_scopeId}></path></svg></div><span class="text-xs font-medium"${_scopeId}>${ssrInterpolate(item.auditor?.name)}</span></div></td><td class="p-4"${_scopeId}><div class="max-w-[150px] mx-auto"${_scopeId}><div class="flex justify-between items-center text-[9px] font-black uppercase mb-1.5"${_scopeId}><span class="text-rose-600 tracking-tighter"${_scopeId}>${ssrInterpolate(item.current_stage)}</span><span class="text-slate-600"${_scopeId}>${ssrInterpolate(getProgress(item))}%</span></div><div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden"${_scopeId}><div class="bg-rose-500 h-full rounded-full transition-all duration-700" style="${ssrRenderStyle({ width: getProgress(item) + "%" })}"${_scopeId}></div></div></div></td><td class="p-4"${_scopeId}><div class="flex justify-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.assignments.show", item.id),
                class: "p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors",
                title: "Buka Detail"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId2}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId2}></path></svg>`);
                  } else {
                    return [
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
                          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        }),
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        })
                      ]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Hapus"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${_scopeId}></path></svg></button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.assignments.data.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="5" class="p-12 text-center text-slate-400 italic font-medium"${_scopeId}>Belum ada penugasan audit yang dibuat.</td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div><div class="flex items-center justify-between py-2"${_scopeId}><div class="text-xs text-slate-500"${_scopeId}> Menampilkan ${ssrInterpolate(__props.assignments.from)} - ${ssrInterpolate(__props.assignments.to)} dari ${ssrInterpolate(__props.assignments.total)} penugasan </div><div class="flex gap-1"${_scopeId}><!--[-->`);
            ssrRenderList(__props.assignments.links, (link) => {
              _push2(`<button${ssrIncludeBooleanAttr(!link.url) ? " disabled" : ""} class="${ssrRenderClass([[
                link.active ? "bg-rose-600 text-white border-rose-600" : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50",
                !link.url ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              ], "px-3 py-1 text-xs rounded-md border transition-all"])}"${_scopeId}>${link.label ?? ""}</button>`);
            });
            _push2(`<!--]--></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4"${_scopeId}><div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"${_scopeId}><div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center"${_scopeId}><h3 class="text-lg font-bold text-slate-800 dark:text-white"${_scopeId}>Buat Penugasan Audit Baru</h3><button class="text-slate-400 hover:text-slate-600 text-2xl transition-colors"${_scopeId}>×</button></div><form class="p-6 space-y-5"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div class="space-y-1.5"${_scopeId}><label class="text-xs font-bold text-slate-500 uppercase"${_scopeId}>Periode AMI</label><select class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-sm" required${_scopeId}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).period_id) ? ssrLooseContain(unref(form).period_id, "") : ssrLooseEqual(unref(form).period_id, "")) ? " selected" : ""}${_scopeId}>Pilih Periode</option><!--[-->`);
              ssrRenderList(__props.periods, (p) => {
                _push2(`<option${ssrRenderAttr("value", p.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).period_id) ? ssrLooseContain(unref(form).period_id, p.id) : ssrLooseEqual(unref(form).period_id, p.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(p.name)}</option>`);
              });
              _push2(`<!--]--></select>`);
              if (unref(form).errors.period_id) {
                _push2(`<p class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(unref(form).errors.period_id)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-1.5"${_scopeId}><label class="text-xs font-bold text-slate-500 uppercase"${_scopeId}>Standar Mutu</label><select class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-sm" required${_scopeId}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).master_standard_id) ? ssrLooseContain(unref(form).master_standard_id, "") : ssrLooseEqual(unref(form).master_standard_id, "")) ? " selected" : ""}${_scopeId}>Pilih Instrumen</option><!--[-->`);
              ssrRenderList(__props.standards, (s) => {
                _push2(`<option${ssrRenderAttr("value", s.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).master_standard_id) ? ssrLooseContain(unref(form).master_standard_id, s.id) : ssrLooseEqual(unref(form).master_standard_id, s.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(s.name)}</option>`);
              });
              _push2(`<!--]--></select></div></div><div class="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4"${_scopeId}><div class="space-y-1.5"${_scopeId}><label class="text-xs font-bold text-slate-500 uppercase tracking-tight"${_scopeId}>Tipe Unit Target</label><div class="flex gap-2"${_scopeId}><button type="button" class="${ssrRenderClass([unref(form).assignable_type === "prodi" ? "bg-rose-600 text-white shadow-rose-200" : "bg-white text-slate-600 border border-slate-200", "flex-1 py-2 text-xs font-bold rounded-lg transition-all shadow-sm"])}"${_scopeId}> Program Studi </button><button type="button" class="${ssrRenderClass([unref(form).assignable_type === "faculty" ? "bg-rose-600 text-white shadow-rose-200" : "bg-white text-slate-600 border border-slate-200", "flex-1 py-2 text-xs font-bold rounded-lg transition-all shadow-sm"])}"${_scopeId}> Fakultas </button></div></div><div class="space-y-1.5"${_scopeId}><label class="text-xs font-bold text-slate-500 uppercase tracking-tight"${_scopeId}>Pilih Unit Kerja</label><select class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-sm" required${_scopeId}>`);
              if (unref(form).assignable_type === "prodi") {
                _push2(`<!--[--><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).assignable_id) ? ssrLooseContain(unref(form).assignable_id, "") : ssrLooseEqual(unref(form).assignable_id, "")) ? " selected" : ""}${_scopeId}>Pilih Program Studi</option><!--[-->`);
                ssrRenderList(__props.prodis, (item) => {
                  _push2(`<option${ssrRenderAttr("value", item.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).assignable_id) ? ssrLooseContain(unref(form).assignable_id, item.id) : ssrLooseEqual(unref(form).assignable_id, item.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(item.name)}</option>`);
                });
                _push2(`<!--]--><!--]-->`);
              } else {
                _push2(`<!--[--><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).assignable_id) ? ssrLooseContain(unref(form).assignable_id, "") : ssrLooseEqual(unref(form).assignable_id, "")) ? " selected" : ""}${_scopeId}>Pilih Fakultas</option><!--[-->`);
                ssrRenderList(__props.faculties, (item) => {
                  _push2(`<option${ssrRenderAttr("value", item.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).assignable_id) ? ssrLooseContain(unref(form).assignable_id, item.id) : ssrLooseEqual(unref(form).assignable_id, item.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(item.name)}</option>`);
                });
                _push2(`<!--]--><!--]-->`);
              }
              _push2(`</select></div></div><div class="space-y-1.5"${_scopeId}><label class="text-xs font-bold text-slate-500 uppercase"${_scopeId}>Auditor Penilai</label><select class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-sm" required${_scopeId}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).auditor_id) ? ssrLooseContain(unref(form).auditor_id, "") : ssrLooseEqual(unref(form).auditor_id, "")) ? " selected" : ""}${_scopeId}>Pilih Auditor</option><!--[-->`);
              ssrRenderList(__props.auditors, (a) => {
                _push2(`<option${ssrRenderAttr("value", a.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).auditor_id) ? ssrLooseContain(unref(form).auditor_id, a.id) : ssrLooseEqual(unref(form).auditor_id, a.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(a.name)}</option>`);
              });
              _push2(`<!--]--></select></div><div class="flex justify-end gap-3 pt-6 border-t border-slate-100 dark:border-slate-800"${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-black uppercase rounded-lg shadow-lg shadow-rose-500/20 disabled:opacity-50 transition-all active:scale-95"${_scopeId}>`);
              if (unref(form).processing) {
                _push2(`<span${_scopeId}>Memproses...</span>`);
              } else {
                _push2(`<span${_scopeId}>Buat &amp; Snapshot Indikator</span>`);
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
                      placeholder: "Cari unit atau auditor...",
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
                        createVNode("th", { class: "p-4" }, "Unit Kerja"),
                        createVNode("th", { class: "p-4" }, "Periode & Standar"),
                        createVNode("th", { class: "p-4" }, "Auditor"),
                        createVNode("th", { class: "p-4 text-center" }, "Tahapan / Progress"),
                        createVNode("th", { class: "p-4 text-center" }, "Aksi")
                      ])
                    ]),
                    createVNode("tbody", { class: "divide-y divide-slate-200 dark:divide-slate-800" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.assignments.data, (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.id,
                          class: "hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        }, [
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "font-bold text-slate-800 dark:text-white leading-tight" }, toDisplayString(item.assignable?.name), 1),
                            createVNode("span", {
                              class: [
                                "text-[9px] px-1.5 py-0.5 rounded font-bold uppercase mt-1 inline-block border",
                                item.assignable_type.includes("Prodi") ? "bg-blue-50 text-blue-600 border-blue-100" : "bg-purple-50 text-purple-600 border-purple-100"
                              ]
                            }, toDisplayString(item.assignable_type.includes("Prodi") ? "Program Studi" : "Fakultas"), 3)
                          ]),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "text-xs font-semibold text-slate-700 dark:text-slate-200" }, toDisplayString(item.period?.name), 1),
                            createVNode("div", { class: "text-[10px] text-slate-400 mt-0.5" }, toDisplayString(item.standard?.name), 1)
                          ]),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "flex items-center gap-2 text-slate-600 dark:text-slate-300" }, [
                              createVNode("div", { class: "w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center" }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "w-4 h-4 text-slate-400",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                                    "clip-rule": "evenodd"
                                  })
                                ]))
                              ]),
                              createVNode("span", { class: "text-xs font-medium" }, toDisplayString(item.auditor?.name), 1)
                            ])
                          ]),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "max-w-[150px] mx-auto" }, [
                              createVNode("div", { class: "flex justify-between items-center text-[9px] font-black uppercase mb-1.5" }, [
                                createVNode("span", { class: "text-rose-600 tracking-tighter" }, toDisplayString(item.current_stage), 1),
                                createVNode("span", { class: "text-slate-600" }, toDisplayString(getProgress(item)) + "%", 1)
                              ]),
                              createVNode("div", { class: "w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden" }, [
                                createVNode("div", {
                                  class: "bg-rose-500 h-full rounded-full transition-all duration-700",
                                  style: { width: getProgress(item) + "%" }
                                }, null, 4)
                              ])
                            ])
                          ]),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "flex justify-center gap-2" }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("admin.assignments.show", item.id),
                                class: "p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors",
                                title: "Buka Detail"
                              }, {
                                default: withCtx(() => [
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
                                      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    }),
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              createVNode("button", {
                                onClick: ($event) => deleteData(item.id),
                                class: "p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors",
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
                      __props.assignments.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                        createVNode("td", {
                          colspan: "5",
                          class: "p-12 text-center text-slate-400 italic font-medium"
                        }, "Belum ada penugasan audit yang dibuat.")
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between py-2" }, [
                  createVNode("div", { class: "text-xs text-slate-500" }, " Menampilkan " + toDisplayString(__props.assignments.from) + " - " + toDisplayString(__props.assignments.to) + " dari " + toDisplayString(__props.assignments.total) + " penugasan ", 1),
                  createVNode("div", { class: "flex gap-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.assignments.links, (link) => {
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
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200" }, [
                  createVNode("div", { class: "p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center" }, [
                    createVNode("h3", { class: "text-lg font-bold text-slate-800 dark:text-white" }, "Buat Penugasan Audit Baru"),
                    createVNode("button", {
                      onClick: closeModal,
                      class: "text-slate-400 hover:text-slate-600 text-2xl transition-colors"
                    }, "×")
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "p-6 space-y-5"
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                      createVNode("div", { class: "space-y-1.5" }, [
                        createVNode("label", { class: "text-xs font-bold text-slate-500 uppercase" }, "Periode AMI"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => unref(form).period_id = $event,
                          class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-sm",
                          required: ""
                        }, [
                          createVNode("option", {
                            value: "",
                            disabled: ""
                          }, "Pilih Periode"),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.periods, (p) => {
                            return openBlock(), createBlock("option", {
                              key: p.id,
                              value: p.id
                            }, toDisplayString(p.name), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).period_id]
                        ]),
                        unref(form).errors.period_id ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-red-500"
                        }, toDisplayString(unref(form).errors.period_id), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "space-y-1.5" }, [
                        createVNode("label", { class: "text-xs font-bold text-slate-500 uppercase" }, "Standar Mutu"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => unref(form).master_standard_id = $event,
                          class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-sm",
                          required: ""
                        }, [
                          createVNode("option", {
                            value: "",
                            disabled: ""
                          }, "Pilih Instrumen"),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.standards, (s) => {
                            return openBlock(), createBlock("option", {
                              key: s.id,
                              value: s.id
                            }, toDisplayString(s.name), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).master_standard_id]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4" }, [
                      createVNode("div", { class: "space-y-1.5" }, [
                        createVNode("label", { class: "text-xs font-bold text-slate-500 uppercase tracking-tight" }, "Tipe Unit Target"),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode("button", {
                            type: "button",
                            onClick: ($event) => unref(form).assignable_type = "prodi",
                            class: [unref(form).assignable_type === "prodi" ? "bg-rose-600 text-white shadow-rose-200" : "bg-white text-slate-600 border border-slate-200", "flex-1 py-2 text-xs font-bold rounded-lg transition-all shadow-sm"]
                          }, " Program Studi ", 10, ["onClick"]),
                          createVNode("button", {
                            type: "button",
                            onClick: ($event) => unref(form).assignable_type = "faculty",
                            class: [unref(form).assignable_type === "faculty" ? "bg-rose-600 text-white shadow-rose-200" : "bg-white text-slate-600 border border-slate-200", "flex-1 py-2 text-xs font-bold rounded-lg transition-all shadow-sm"]
                          }, " Fakultas ", 10, ["onClick"])
                        ])
                      ]),
                      createVNode("div", { class: "space-y-1.5" }, [
                        createVNode("label", { class: "text-xs font-bold text-slate-500 uppercase tracking-tight" }, "Pilih Unit Kerja"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => unref(form).assignable_id = $event,
                          class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-sm",
                          required: ""
                        }, [
                          unref(form).assignable_type === "prodi" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("option", {
                              value: "",
                              disabled: ""
                            }, "Pilih Program Studi"),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.prodis, (item) => {
                              return openBlock(), createBlock("option", {
                                key: item.id,
                                value: item.id
                              }, toDisplayString(item.name), 9, ["value"]);
                            }), 128))
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode("option", {
                              value: "",
                              disabled: ""
                            }, "Pilih Fakultas"),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.faculties, (item) => {
                              return openBlock(), createBlock("option", {
                                key: item.id,
                                value: item.id
                              }, toDisplayString(item.name), 9, ["value"]);
                            }), 128))
                          ], 64))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).assignable_id]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-xs font-bold text-slate-500 uppercase" }, "Auditor Penilai"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => unref(form).auditor_id = $event,
                        class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-sm",
                        required: ""
                      }, [
                        createVNode("option", {
                          value: "",
                          disabled: ""
                        }, "Pilih Auditor"),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.auditors, (a) => {
                          return openBlock(), createBlock("option", {
                            key: a.id,
                            value: a.id
                          }, toDisplayString(a.name), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(form).auditor_id]
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
                        class: "px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-black uppercase rounded-lg shadow-lg shadow-rose-500/20 disabled:opacity-50 transition-all active:scale-95"
                      }, [
                        unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "Memproses...")) : (openBlock(), createBlock("span", { key: 1 }, "Buat & Snapshot Indikator"))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Assignment/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

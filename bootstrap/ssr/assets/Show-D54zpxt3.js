import { ref, watch, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, Fragment, renderList, createTextVNode, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { router, Link } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-BkpuvVky.js";
import debounce from "lodash/debounce.js";
import axios from "axios";
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
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    assignment: Object,
    groupedDocuments: Array,
    indicators: Object,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    watch(search, debounce((value) => {
      router.get(route("admin.assignments.show", props.assignment.id), { search: value }, {
        preserveState: true,
        replace: true
      });
    }, 500));
    const showHistoryModal = ref(false);
    const activeHistory = ref([]);
    const loadingHistory = ref(false);
    const activeIndicatorCode = ref("");
    const openHistory = async (item) => {
      activeIndicatorCode.value = item.snapshot_code;
      loadingHistory.value = true;
      showHistoryModal.value = true;
      try {
        const response = await axios.get(route("admin.indicators.history", item.id));
        activeHistory.value = response.data;
      } catch (error) {
        console.error("Gagal memuat riwayat");
      } finally {
        loadingHistory.value = false;
      }
    };
    const closeHistoryModal = () => {
      showHistoryModal.value = false;
      activeHistory.value = [];
    };
    const getScoreClass = (score) => {
      if (!score) return "bg-slate-100 text-slate-400 dark:bg-slate-800";
      if (score >= 3) return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      if (score === 2) return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      return "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({
        title: "Detail Audit: " + __props.assignment.target_name
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detail Penugasan Audit`);
          } else {
            return [
              createTextVNode("Detail Penugasan Audit")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Monitoring instrumen standar untuk unit <span class="font-bold text-rose-600" data-v-d52ea258${_scopeId}>${ssrInterpolate(__props.assignment.target_name)}</span>`);
          } else {
            return [
              createTextVNode(" Monitoring instrumen standar untuk unit "),
              createVNode("span", { class: "font-bold text-rose-600" }, toDisplayString(__props.assignment.target_name), 1)
            ];
          }
        }),
        "action-buttons": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-2" data-v-d52ea258${_scopeId}><a${ssrRenderAttr("href", _ctx.route("shared.export.pdf", __props.assignment.id))} target="_blank" class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-sm" data-v-d52ea258${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d52ea258${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-d52ea258${_scopeId}></path></svg> Cetak Laporan </a>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.assignments.index"),
              class: "inline-flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-xl transition-all"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Kembali `);
                } else {
                  return [
                    createTextVNode(" Kembali ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-2" }, [
                createVNode("a", {
                  href: _ctx.route("shared.export.pdf", __props.assignment.id),
                  target: "_blank",
                  class: "inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-sm"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "w-4 h-4 mr-2",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    })
                  ])),
                  createTextVNode(" Cetak Laporan ")
                ], 8, ["href"]),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.assignments.index"),
                  class: "inline-flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-xl transition-all"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Kembali ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 lg:grid-cols-4 gap-6" data-v-d52ea258${_scopeId}><div class="lg:col-span-1 space-y-6" data-v-d52ea258${_scopeId}><div class="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm" data-v-d52ea258${_scopeId}><h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-50 dark:border-slate-800 pb-3" data-v-d52ea258${_scopeId}> Status Audit</h3><div class="space-y-5" data-v-d52ea258${_scopeId}><div class="flex flex-col" data-v-d52ea258${_scopeId}><label class="text-[9px] font-black text-slate-400 uppercase tracking-widest" data-v-d52ea258${_scopeId}>Auditor Ketua</label><span class="font-bold text-slate-700 dark:text-slate-200" data-v-d52ea258${_scopeId}>${ssrInterpolate(__props.assignment.auditor?.name || "N/A")}</span></div><div class="flex flex-col" data-v-d52ea258${_scopeId}><label class="text-[9px] font-black text-slate-400 uppercase tracking-widest" data-v-d52ea258${_scopeId}>Tahap Berjalan</label><div class="mt-1" data-v-d52ea258${_scopeId}><span class="px-2 py-0.5 rounded-lg bg-rose-50 text-rose-600 border border-rose-100 font-black text-[9px] uppercase tracking-tighter" data-v-d52ea258${_scopeId}>${ssrInterpolate(__props.assignment.current_stage?.replace("_", " "))}</span></div></div></div></div><div class="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm" data-v-d52ea258${_scopeId}><h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-50 dark:border-slate-800 pb-3" data-v-d52ea258${_scopeId}> Arsip Dokumen</h3><div class="space-y-8" data-v-d52ea258${_scopeId}><!--[-->`);
            ssrRenderList(__props.groupedDocuments, (group) => {
              _push2(`<div data-v-d52ea258${_scopeId}><p class="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest mb-3 flex items-center" data-v-d52ea258${_scopeId}><span class="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2" data-v-d52ea258${_scopeId}></span> ${ssrInterpolate(group.label)}</p>`);
              if (group.files.length) {
                _push2(`<div class="space-y-2 pl-3 border-l-2 border-slate-50 dark:border-slate-800" data-v-d52ea258${_scopeId}><!--[-->`);
                ssrRenderList(group.files, (doc) => {
                  _push2(`<div class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl group transition-all hover:ring-2 hover:ring-rose-500/20" data-v-d52ea258${_scopeId}><div class="flex flex-col min-w-0" data-v-d52ea258${_scopeId}><span class="text-[10px] font-bold text-slate-600 dark:text-slate-300 truncate pr-2" data-v-d52ea258${_scopeId}>${ssrInterpolate(doc.original_name || "Dokumen")}</span><span class="text-[8px] text-slate-400 font-bold uppercase tracking-tighter" data-v-d52ea258${_scopeId}>${ssrInterpolate(new Date(doc.created_at).toLocaleDateString())}</span></div><a${ssrRenderAttr("href", "/storage/" + doc.path)} target="_blank" class="p-1.5 bg-white dark:bg-slate-700 rounded-lg text-rose-500 shadow-sm hover:bg-rose-500 hover:text-white transition-all" data-v-d52ea258${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d52ea258${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" data-v-d52ea258${_scopeId}></path></svg></a></div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<div class="pl-3 py-2 text-[10px] text-slate-300 italic" data-v-d52ea258${_scopeId}>Belum diunggah.</div>`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></div><div class="lg:col-span-3 space-y-4" data-v-d52ea258${_scopeId}><div class="flex flex-col sm:flex-row justify-between items-center gap-4" data-v-d52ea258${_scopeId}><h3 class="font-black text-slate-800 dark:text-white tracking-tight uppercase italic text-sm" data-v-d52ea258${_scopeId}> Instrumen Monitoring AMI</h3><div class="relative w-full sm:w-64" data-v-d52ea258${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari kode/indikator..." class="w-full pl-3 pr-10 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all" data-v-d52ea258${_scopeId}></div></div><div class="bg-white dark:bg-slate-900 rounded-[1rem] shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden" data-v-d52ea258${_scopeId}><div class="overflow-x-auto" data-v-d52ea258${_scopeId}><table class="w-full text-left text-xs border-collapse min-w-[1000px]" data-v-d52ea258${_scopeId}><thead class="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800" data-v-d52ea258${_scopeId}><tr data-v-d52ea258${_scopeId}><th class="p-5 w-20" data-v-d52ea258${_scopeId}>Kode</th><th class="p-5" data-v-d52ea258${_scopeId}>Kriteria &amp; Bukti</th><th class="p-5 text-center w-32" data-v-d52ea258${_scopeId}>Skor Akhir</th><th class="p-5 text-center w-24" data-v-d52ea258${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800" data-v-d52ea258${_scopeId}><!--[-->`);
            ssrRenderList(__props.indicators.data, (item) => {
              _push2(`<tr class="align-top hover:bg-slate-50/30 transition-colors" data-v-d52ea258${_scopeId}><td class="p-5 font-mono font-black text-rose-600 tracking-tighter" data-v-d52ea258${_scopeId}>${ssrInterpolate(item.snapshot_code)}</td><td class="p-5" data-v-d52ea258${_scopeId}><p class="text-xs font-bold text-slate-700 dark:text-slate-200 leading-relaxed mb-4" data-v-d52ea258${_scopeId}>${ssrInterpolate(item.snapshot_requirement)}</p><div class="flex flex-wrap gap-2" data-v-d52ea258${_scopeId}>`);
              if (item.evidence_url) {
                _push2(`<a${ssrRenderAttr("href", item.evidence_url)} target="_blank" class="inline-flex items-center text-[9px] font-black bg-blue-50 text-blue-600 px-2.5 py-1 rounded-lg border border-blue-100 uppercase hover:bg-blue-100" data-v-d52ea258${_scopeId}> Tautan URL </a>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.evidence_path) {
                _push2(`<a${ssrRenderAttr("href", "/storage/" + item.evidence_path)} target="_blank" class="inline-flex items-center text-[9px] font-black bg-purple-50 text-purple-600 px-2.5 py-1 rounded-lg border border-purple-100 uppercase hover:bg-purple-100" data-v-d52ea258${_scopeId}> Berkas PDF </a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="p-5 text-center" data-v-d52ea258${_scopeId}><div class="${ssrRenderClass(["inline-block w-12 h-12 leading-[48px] rounded-2xl font-black text-lg shadow-sm border-2 transition-all", getScoreClass(item.score)])}" data-v-d52ea258${_scopeId}>${ssrInterpolate(item.score ?? "-")}</div><div class="text-[8px] font-black uppercase text-slate-400 mt-2 tracking-widest" data-v-d52ea258${_scopeId}>${ssrInterpolate(item.finding_type || "Belum Dinilai")}</div></td><td class="p-5 text-center" data-v-d52ea258${_scopeId}><button class="p-2 text-slate-300 hover:text-rose-600 transition-all" title="Lihat Audit Trail" data-v-d52ea258${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d52ea258${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-v-d52ea258${_scopeId}></path></svg></button></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div><div class="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center" data-v-d52ea258${_scopeId}><div class="text-[10px] font-black text-slate-400 uppercase tracking-widest" data-v-d52ea258${_scopeId}>Menampilkan ${ssrInterpolate(__props.indicators.from)}-${ssrInterpolate(__props.indicators.to)} dari ${ssrInterpolate(__props.indicators.total)} data</div><div class="flex gap-1" data-v-d52ea258${_scopeId}><!--[-->`);
            ssrRenderList(__props.indicators.links, (link) => {
              _push2(ssrRenderComponent(unref(Link), {
                key: link.label,
                href: link.url || "#",
                class: ["px-3 py-1 rounded-lg text-[10px] font-black border transition-all", [link.active ? "bg-rose-600 text-white border-rose-600 shadow-lg shadow-rose-200" : "bg-white border-slate-200 text-slate-400", !link.url ? "opacity-30" : "cursor-pointer"]]
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div></div></div>`);
            if (showHistoryModal.value) {
              _push2(`<div class="fixed inset-0 z-[999] flex items-center justify-center p-4" data-v-d52ea258${_scopeId}><div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" data-v-d52ea258${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[1rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200" data-v-d52ea258${_scopeId}><div class="p-7 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center" data-v-d52ea258${_scopeId}><div data-v-d52ea258${_scopeId}><h3 class="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight" data-v-d52ea258${_scopeId}>Audit Trail</h3><p class="text-[10px] font-bold text-rose-600 font-mono" data-v-d52ea258${_scopeId}>${ssrInterpolate(activeIndicatorCode.value)}</p></div><button class="text-slate-400 hover:text-rose-600 text-3xl transition-colors" data-v-d52ea258${_scopeId}>×</button></div><div class="p-7 max-h-[60vh] overflow-y-auto bg-white dark:bg-slate-900" data-v-d52ea258${_scopeId}>`);
              if (loadingHistory.value) {
                _push2(`<div class="text-center py-10" data-v-d52ea258${_scopeId}><div class="animate-spin inline-block w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full" data-v-d52ea258${_scopeId}></div><p class="text-[10px] font-black text-slate-400 mt-4 uppercase tracking-widest" data-v-d52ea258${_scopeId}>Sinkronisasi Data...</p></div>`);
              } else {
                _push2(`<div class="space-y-8" data-v-d52ea258${_scopeId}><!--[-->`);
                ssrRenderList(activeHistory.value, (log, i) => {
                  _push2(`<div class="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800" data-v-d52ea258${_scopeId}><div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-rose-500 shadow-sm" data-v-d52ea258${_scopeId}></div><div class="text-[9px] font-black text-rose-500 uppercase tracking-widest mb-1" data-v-d52ea258${_scopeId}>${ssrInterpolate(log.created_at)}</div><div class="text-sm font-black text-slate-800 dark:text-white leading-none" data-v-d52ea258${_scopeId}>${ssrInterpolate(log.user?.name || "System")}</div><div class="text-[9px] font-bold text-slate-400 uppercase mt-1 mb-4" data-v-d52ea258${_scopeId}>${ssrInterpolate(log.user?.role)}</div><div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800" data-v-d52ea258${_scopeId}><p class="text-[10px] font-black text-slate-700 dark:text-slate-200 mb-2 uppercase tracking-tighter" data-v-d52ea258${_scopeId}> Aksi: <span class="text-rose-600" data-v-d52ea258${_scopeId}>${ssrInterpolate(log.action)}</span></p><div class="text-[11px] text-slate-500 leading-relaxed italic" data-v-d52ea258${_scopeId}>${log.formatted_changes ?? ""}</div></div></div>`);
                });
                _push2(`<!--]-->`);
                if (!activeHistory.value.length) {
                  _push2(`<div class="text-center py-10 text-slate-400 italic text-sm font-medium" data-v-d52ea258${_scopeId}> Belum ada riwayat aktivitas pada indikator ini. </div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              }
              _push2(`</div><div class="p-7 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-right" data-v-d52ea258${_scopeId}><button class="px-8 py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all hover:bg-rose-600" data-v-d52ea258${_scopeId}>Tutup Panel</button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-4 gap-6" }, [
                createVNode("div", { class: "lg:col-span-1 space-y-6" }, [
                  createVNode("div", { class: "bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm" }, [
                    createVNode("h3", { class: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-50 dark:border-slate-800 pb-3" }, " Status Audit"),
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", { class: "text-[9px] font-black text-slate-400 uppercase tracking-widest" }, "Auditor Ketua"),
                        createVNode("span", { class: "font-bold text-slate-700 dark:text-slate-200" }, toDisplayString(__props.assignment.auditor?.name || "N/A"), 1)
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", { class: "text-[9px] font-black text-slate-400 uppercase tracking-widest" }, "Tahap Berjalan"),
                        createVNode("div", { class: "mt-1" }, [
                          createVNode("span", { class: "px-2 py-0.5 rounded-lg bg-rose-50 text-rose-600 border border-rose-100 font-black text-[9px] uppercase tracking-tighter" }, toDisplayString(__props.assignment.current_stage?.replace("_", " ")), 1)
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm" }, [
                    createVNode("h3", { class: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-50 dark:border-slate-800 pb-3" }, " Arsip Dokumen"),
                    createVNode("div", { class: "space-y-8" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.groupedDocuments, (group) => {
                        return openBlock(), createBlock("div", {
                          key: group.type
                        }, [
                          createVNode("p", { class: "text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest mb-3 flex items-center" }, [
                            createVNode("span", { class: "w-1.5 h-1.5 bg-rose-500 rounded-full mr-2" }),
                            createTextVNode(" " + toDisplayString(group.label), 1)
                          ]),
                          group.files.length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "space-y-2 pl-3 border-l-2 border-slate-50 dark:border-slate-800"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(group.files, (doc) => {
                              return openBlock(), createBlock("div", {
                                key: doc.id,
                                class: "flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl group transition-all hover:ring-2 hover:ring-rose-500/20"
                              }, [
                                createVNode("div", { class: "flex flex-col min-w-0" }, [
                                  createVNode("span", { class: "text-[10px] font-bold text-slate-600 dark:text-slate-300 truncate pr-2" }, toDisplayString(doc.original_name || "Dokumen"), 1),
                                  createVNode("span", { class: "text-[8px] text-slate-400 font-bold uppercase tracking-tighter" }, toDisplayString(new Date(doc.created_at).toLocaleDateString()), 1)
                                ]),
                                createVNode("a", {
                                  href: "/storage/" + doc.path,
                                  target: "_blank",
                                  class: "p-1.5 bg-white dark:bg-slate-700 rounded-lg text-rose-500 shadow-sm hover:bg-rose-500 hover:text-white transition-all"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-3 h-3",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "3",
                                      d: "M12 4v16m8-8H4"
                                    })
                                  ]))
                                ], 8, ["href"])
                              ]);
                            }), 128))
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "pl-3 py-2 text-[10px] text-slate-300 italic"
                          }, "Belum diunggah."))
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
                createVNode("div", { class: "lg:col-span-3 space-y-4" }, [
                  createVNode("div", { class: "flex flex-col sm:flex-row justify-between items-center gap-4" }, [
                    createVNode("h3", { class: "font-black text-slate-800 dark:text-white tracking-tight uppercase italic text-sm" }, " Instrumen Monitoring AMI"),
                    createVNode("div", { class: "relative w-full sm:w-64" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => search.value = $event,
                        type: "text",
                        placeholder: "Cari kode/indikator...",
                        class: "w-full pl-3 pr-10 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, search.value]
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "bg-white dark:bg-slate-900 rounded-[1rem] shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden" }, [
                    createVNode("div", { class: "overflow-x-auto" }, [
                      createVNode("table", { class: "w-full text-left text-xs border-collapse min-w-[1000px]" }, [
                        createVNode("thead", { class: "bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800" }, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "p-5 w-20" }, "Kode"),
                            createVNode("th", { class: "p-5" }, "Kriteria & Bukti"),
                            createVNode("th", { class: "p-5 text-center w-32" }, "Skor Akhir"),
                            createVNode("th", { class: "p-5 text-center w-24" }, "Aksi")
                          ])
                        ]),
                        createVNode("tbody", { class: "divide-y divide-slate-100 dark:divide-slate-800" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.indicators.data, (item) => {
                            return openBlock(), createBlock("tr", {
                              key: item.id,
                              class: "align-top hover:bg-slate-50/30 transition-colors"
                            }, [
                              createVNode("td", { class: "p-5 font-mono font-black text-rose-600 tracking-tighter" }, toDisplayString(item.snapshot_code), 1),
                              createVNode("td", { class: "p-5" }, [
                                createVNode("p", { class: "text-xs font-bold text-slate-700 dark:text-slate-200 leading-relaxed mb-4" }, toDisplayString(item.snapshot_requirement), 1),
                                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                  item.evidence_url ? (openBlock(), createBlock("a", {
                                    key: 0,
                                    href: item.evidence_url,
                                    target: "_blank",
                                    class: "inline-flex items-center text-[9px] font-black bg-blue-50 text-blue-600 px-2.5 py-1 rounded-lg border border-blue-100 uppercase hover:bg-blue-100"
                                  }, " Tautan URL ", 8, ["href"])) : createCommentVNode("", true),
                                  item.evidence_path ? (openBlock(), createBlock("a", {
                                    key: 1,
                                    href: "/storage/" + item.evidence_path,
                                    target: "_blank",
                                    class: "inline-flex items-center text-[9px] font-black bg-purple-50 text-purple-600 px-2.5 py-1 rounded-lg border border-purple-100 uppercase hover:bg-purple-100"
                                  }, " Berkas PDF ", 8, ["href"])) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("td", { class: "p-5 text-center" }, [
                                createVNode("div", {
                                  class: ["inline-block w-12 h-12 leading-[48px] rounded-2xl font-black text-lg shadow-sm border-2 transition-all", getScoreClass(item.score)]
                                }, toDisplayString(item.score ?? "-"), 3),
                                createVNode("div", { class: "text-[8px] font-black uppercase text-slate-400 mt-2 tracking-widest" }, toDisplayString(item.finding_type || "Belum Dinilai"), 1)
                              ]),
                              createVNode("td", { class: "p-5 text-center" }, [
                                createVNode("button", {
                                  onClick: ($event) => openHistory(item),
                                  class: "p-2 text-slate-300 hover:text-rose-600 transition-all",
                                  title: "Lihat Audit Trail"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-6 h-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                  ]))
                                ], 8, ["onClick"])
                              ])
                            ]);
                          }), 128))
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center" }, [
                      createVNode("div", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest" }, "Menampilkan " + toDisplayString(__props.indicators.from) + "-" + toDisplayString(__props.indicators.to) + " dari " + toDisplayString(__props.indicators.total) + " data", 1),
                      createVNode("div", { class: "flex gap-1" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.indicators.links, (link) => {
                          return openBlock(), createBlock(unref(Link), {
                            key: link.label,
                            href: link.url || "#",
                            innerHTML: link.label,
                            class: ["px-3 py-1 rounded-lg text-[10px] font-black border transition-all", [link.active ? "bg-rose-600 text-white border-rose-600 shadow-lg shadow-rose-200" : "bg-white border-slate-200 text-slate-400", !link.url ? "opacity-30" : "cursor-pointer"]]
                          }, null, 8, ["href", "innerHTML", "class"]);
                        }), 128))
                      ])
                    ])
                  ])
                ])
              ]),
              showHistoryModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-[999] flex items-center justify-center p-4"
              }, [
                createVNode("div", {
                  class: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity",
                  onClick: closeHistoryModal
                }),
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[1rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200" }, [
                  createVNode("div", { class: "p-7 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight" }, "Audit Trail"),
                      createVNode("p", { class: "text-[10px] font-bold text-rose-600 font-mono" }, toDisplayString(activeIndicatorCode.value), 1)
                    ]),
                    createVNode("button", {
                      onClick: closeHistoryModal,
                      class: "text-slate-400 hover:text-rose-600 text-3xl transition-colors"
                    }, "×")
                  ]),
                  createVNode("div", { class: "p-7 max-h-[60vh] overflow-y-auto bg-white dark:bg-slate-900" }, [
                    loadingHistory.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-center py-10"
                    }, [
                      createVNode("div", { class: "animate-spin inline-block w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full" }),
                      createVNode("p", { class: "text-[10px] font-black text-slate-400 mt-4 uppercase tracking-widest" }, "Sinkronisasi Data...")
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "space-y-8"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(activeHistory.value, (log, i) => {
                        return openBlock(), createBlock("div", {
                          key: i,
                          class: "relative pl-8 border-l-2 border-slate-100 dark:border-slate-800"
                        }, [
                          createVNode("div", { class: "absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-rose-500 shadow-sm" }),
                          createVNode("div", { class: "text-[9px] font-black text-rose-500 uppercase tracking-widest mb-1" }, toDisplayString(log.created_at), 1),
                          createVNode("div", { class: "text-sm font-black text-slate-800 dark:text-white leading-none" }, toDisplayString(log.user?.name || "System"), 1),
                          createVNode("div", { class: "text-[9px] font-bold text-slate-400 uppercase mt-1 mb-4" }, toDisplayString(log.user?.role), 1),
                          createVNode("div", { class: "bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800" }, [
                            createVNode("p", { class: "text-[10px] font-black text-slate-700 dark:text-slate-200 mb-2 uppercase tracking-tighter" }, [
                              createTextVNode(" Aksi: "),
                              createVNode("span", { class: "text-rose-600" }, toDisplayString(log.action), 1)
                            ]),
                            createVNode("div", {
                              class: "text-[11px] text-slate-500 leading-relaxed italic",
                              innerHTML: log.formatted_changes
                            }, null, 8, ["innerHTML"])
                          ])
                        ]);
                      }), 128)),
                      !activeHistory.value.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-center py-10 text-slate-400 italic text-sm font-medium"
                      }, " Belum ada riwayat aktivitas pada indikator ini. ")) : createCommentVNode("", true)
                    ]))
                  ]),
                  createVNode("div", { class: "p-7 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-right" }, [
                    createVNode("button", {
                      onClick: closeHistoryModal,
                      class: "px-8 py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all hover:bg-rose-600"
                    }, "Tutup Panel")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Assignment/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d52ea258"]]);
export {
  Show as default
};

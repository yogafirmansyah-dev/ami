import { ref, watch, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withDirectives, vModelText, openBlock, Fragment, renderList, toDisplayString, createTextVNode, withModifiers, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { router, useForm } from "@inertiajs/vue3";
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
    periods: Object,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const getStatusTimeline = (period) => {
      const stages = [
        { key: "doc_audit", label: "Audit Dokumen", start: period.doc_audit_start, end: period.doc_audit_end, color: "blue" },
        { key: "field_audit", label: "Audit Lapangan", start: period.field_audit_start, end: period.field_audit_end, color: "purple" },
        { key: "finding", label: "Verifikasi Temuan", start: period.finding_start, end: period.finding_end, color: "amber" },
        { key: "reporting", label: "Pelaporan Akhir", start: period.reporting_start, end: period.reporting_end, color: "emerald" },
        { key: "rtm_rtl", label: "RTM & RTL", start: period.rtm_rtl_start, end: period.rtm_rtl_end, color: "rose" }
      ];
      const active = stages.find((s) => today >= parseDate(s.start) && today <= parseDate(s.end));
      if (active) return { type: "active", label: active.label, color: active.color, key: active.key };
      const upcoming = stages.find((s) => parseDate(s.start) > today);
      if (upcoming) return { type: "upcoming", label: upcoming.label, color: "slate", key: upcoming.key };
      if (today > parseDate(stages[4].end)) return { type: "expired", label: "Siklus Selesai", color: "slate", key: "done" };
      return { type: "none", label: "Belum Diatur", color: "slate" };
    };
    const formatDate = (dateString) => {
      if (!dateString) return "-";
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric"
      }).format(date);
    };
    const parseDate = (dateString) => {
      if (!dateString) return "";
      return dateString.split("T")[0];
    };
    const search = ref(props.filters.search);
    watch(search, debounce((value) => {
      router.get(route("admin.periods.index"), { search: value }, { preserveState: true, replace: true });
    }, 500));
    const showModal = ref(false);
    const editMode = ref(false);
    const form = useForm({
      id: null,
      name: "",
      doc_audit_start: "",
      doc_audit_end: "",
      field_audit_start: "",
      field_audit_end: "",
      finding_start: "",
      finding_end: "",
      reporting_start: "",
      reporting_end: "",
      rtm_rtl_start: "",
      rtm_rtl_end: "",
      is_active: true
    });
    const openCreateModal = () => {
      editMode.value = false;
      form.reset();
      showModal.value = true;
    };
    const openEditModal = (period) => {
      editMode.value = true;
      form.id = period.id;
      form.name = period.name;
      form.doc_audit_start = parseDate(period.doc_audit_start);
      form.doc_audit_end = parseDate(period.doc_audit_end);
      form.field_audit_start = parseDate(period.field_audit_start);
      form.field_audit_end = parseDate(period.field_audit_end);
      form.finding_start = parseDate(period.finding_start);
      form.finding_end = parseDate(period.finding_end);
      form.reporting_start = parseDate(period.reporting_start);
      form.reporting_end = parseDate(period.reporting_end);
      form.rtm_rtl_start = parseDate(period.rtm_rtl_start);
      form.rtm_rtl_end = parseDate(period.rtm_rtl_end);
      form.is_active = !!period.is_active;
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
      form.reset();
    };
    const submit = () => {
      if (editMode.value) {
        form.put(route("admin.periods.update", form.id), { onSuccess: () => closeModal() });
      } else {
        form.post(route("admin.periods.store"), { onSuccess: () => closeModal() });
      }
    };
    const deleteData = (id) => {
      if (confirm("Menghapus periode akan berdampak pada data transaksi di dalamnya. Lanjutkan?")) {
        router.delete(route("admin.periods.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Master Periode AMI" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Master Periode AMI`);
          } else {
            return [
              createTextVNode("Master Periode AMI")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Atur timeline detail untuk setiap tahapan Audit Mutu Internal`);
          } else {
            return [
              createTextVNode("Atur timeline detail untuk setiap tahapan Audit Mutu Internal")
            ];
          }
        }),
        "action-buttons": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-sm transition-all active:scale-95" data-v-27c9b51d${_scopeId}> + Tambah Periode </button>`);
          } else {
            return [
              createVNode("button", {
                onClick: openCreateModal,
                class: "px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-sm transition-all active:scale-95"
              }, " + Tambah Periode ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4" data-v-27c9b51d${_scopeId}><div class="flex justify-end" data-v-27c9b51d${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari periode..." class="w-full max-w-sm px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 outline-none dark:bg-slate-900 dark:border-slate-700" data-v-27c9b51d${_scopeId}></div><div class="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800" data-v-27c9b51d${_scopeId}><table class="w-full text-sm text-left" data-v-27c9b51d${_scopeId}><thead class="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[10px] font-black tracking-widest border-b dark:border-slate-800" data-v-27c9b51d${_scopeId}><tr data-v-27c9b51d${_scopeId}><th class="p-4 w-56" data-v-27c9b51d${_scopeId}>Nama Periode</th><th class="p-4 w-48 text-center" data-v-27c9b51d${_scopeId}>Fase Aktif</th><th class="p-4 text-center" data-v-27c9b51d${_scopeId}>Timeline Visual</th><th class="p-4 text-center w-28" data-v-27c9b51d${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800" data-v-27c9b51d${_scopeId}><!--[-->`);
            ssrRenderList(__props.periods.data, (item) => {
              _push2(`<tr class="hover:bg-slate-50/50 transition-colors" data-v-27c9b51d${_scopeId}><td class="p-4" data-v-27c9b51d${_scopeId}><div class="font-black text-slate-700 dark:text-slate-200" data-v-27c9b51d${_scopeId}>${ssrInterpolate(item.name)}</div>`);
              if (item.is_active) {
                _push2(`<div class="mt-1 flex items-center text-[9px] text-emerald-500 font-black uppercase" data-v-27c9b51d${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" data-v-27c9b51d${_scopeId}></span> Siklus Aktif </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td><td class="p-4 text-center" data-v-27c9b51d${_scopeId}><div class="${ssrRenderClass(["px-3 py-1 rounded-full text-[9px] font-black uppercase inline-block border", getStatusTimeline(item).type === "active" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-slate-50 text-slate-400 border-slate-100"])}" data-v-27c9b51d${_scopeId}>${ssrInterpolate(getStatusTimeline(item).label)}</div></td><td class="p-4" data-v-27c9b51d${_scopeId}><div class="flex items-center justify-between gap-1 max-w-md mx-auto relative px-2" data-v-27c9b51d${_scopeId}><div class="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-2" data-v-27c9b51d${_scopeId}></div><!--[-->`);
              ssrRenderList([
                { key: "doc_audit", label: "DOC", start: item.doc_audit_start, end: item.doc_audit_end, color: "blue" },
                { key: "field_audit", label: "FIELD", start: item.field_audit_start, end: item.field_audit_end, color: "purple" },
                { key: "finding", label: "FIND", start: item.finding_start, end: item.finding_end, color: "amber" },
                { key: "reporting", label: "REP", start: item.reporting_start, end: item.reporting_end, color: "emerald" },
                { key: "rtm_rtl", label: "RTM", start: item.rtm_rtl_start, end: item.rtm_rtl_end, color: "rose" }
              ], (stage) => {
                _push2(`<div class="flex-1 flex flex-col items-center group relative z-10" data-v-27c9b51d${_scopeId}><div class="${ssrRenderClass(["w-3 h-3 rounded-full mb-1 border-2 transition-all", getStatusTimeline(item).key === stage.key ? "bg-" + stage.color + "-500 border-white scale-150 shadow-md" : "bg-slate-200 border-white dark:bg-slate-700 dark:border-slate-900"])}" data-v-27c9b51d${_scopeId}></div><div class="${ssrRenderClass(["text-[8px] font-black", getStatusTimeline(item).key === stage.key ? "text-" + stage.color + "-600" : "text-slate-300"])}" data-v-27c9b51d${_scopeId}>${ssrInterpolate(stage.label)}</div><div class="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-slate-800 text-white text-[9px] py-1 px-2 rounded-md whitespace-nowrap z-50 shadow-xl font-bold" data-v-27c9b51d${_scopeId}>${ssrInterpolate(formatDate(stage.start))} — ${ssrInterpolate(formatDate(stage.end))}</div></div>`);
              });
              _push2(`<!--]--></div></td><td class="p-4" data-v-27c9b51d${_scopeId}><div class="flex justify-center gap-2" data-v-27c9b51d${_scopeId}><button class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" data-v-27c9b51d${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-27c9b51d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-27c9b51d${_scopeId}></path></svg></button><button class="p-2 text-red-500 hover:bg-red-50 rounded-lg" data-v-27c9b51d${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-27c9b51d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-27c9b51d${_scopeId}></path></svg></button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-[999] flex items-center justify-center p-4" data-v-27c9b51d${_scopeId}><div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" data-v-27c9b51d${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200" data-v-27c9b51d${_scopeId}><div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center" data-v-27c9b51d${_scopeId}><h3 class="text-xl font-black text-slate-800 dark:text-white uppercase" data-v-27c9b51d${_scopeId}>${ssrInterpolate(editMode.value ? "Edit Timeline" : "Siklus Baru")}</h3><button class="text-3xl text-slate-300 hover:text-rose-500" data-v-27c9b51d${_scopeId}>×</button></div><form class="p-8 space-y-8 overflow-y-auto" data-v-27c9b51d${_scopeId}><div class="space-y-1.5" data-v-27c9b51d${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-widest" data-v-27c9b51d${_scopeId}>Nama Periode</label><input${ssrRenderAttr("value", unref(form).name)} type="text" class="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 transition-all font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900" required data-v-27c9b51d${_scopeId}></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-27c9b51d${_scopeId}><!--[-->`);
              ssrRenderList([
                { label: "1. Audit Dokumen", start: "doc_audit_start", end: "doc_audit_end", color: "blue" },
                { label: "2. Audit Lapangan", start: "field_audit_start", end: "field_audit_end", color: "purple" },
                { label: "3. Verifikasi Temuan", start: "finding_start", end: "finding_end", color: "amber" },
                { label: "4. Pelaporan Akhir", start: "reporting_start", end: "reporting_end", color: "emerald" }
              ], (stage) => {
                _push2(`<div class="${ssrRenderClass(["p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-l-4 shadow-sm text-slate-700 dark:text-slate-200", "border-" + stage.color + "-500"])}" data-v-27c9b51d${_scopeId}><h4 class="${ssrRenderClass(["text-[10px] font-black uppercase mb-4 tracking-widest", "text-" + stage.color + "-600"])}" data-v-27c9b51d${_scopeId}>${ssrInterpolate(stage.label)}</h4><div class="grid grid-cols-2 gap-4" data-v-27c9b51d${_scopeId}><div data-v-27c9b51d${_scopeId}><label class="text-[9px] font-black text-slate-400 block mb-1 uppercase" data-v-27c9b51d${_scopeId}>Mulai</label><input type="date"${ssrRenderAttr("value", unref(form)[stage.start])} class="w-full p-2 border border-slate-200 rounded-lg text-sm font-bold focus:ring-2 outline-none dark:bg-slate-900 dark:border-slate-700" required data-v-27c9b51d${_scopeId}></div><div data-v-27c9b51d${_scopeId}><label class="text-[9px] font-black text-slate-400 block mb-1 uppercase" data-v-27c9b51d${_scopeId}>Selesai</label><input type="date"${ssrRenderAttr("value", unref(form)[stage.end])} class="w-full p-2 border border-slate-200 rounded-lg text-sm font-bold focus:ring-2 outline-none dark:bg-slate-900 dark:border-slate-700" required data-v-27c9b51d${_scopeId}></div></div></div>`);
              });
              _push2(`<!--]--><div class="md:col-span-2 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-l-4 border-rose-500 shadow-sm text-slate-700 dark:text-slate-200" data-v-27c9b51d${_scopeId}><h4 class="text-[10px] font-black text-rose-600 uppercase mb-4 tracking-widest" data-v-27c9b51d${_scopeId}>5. RTM &amp; Rencana Tindak Lanjut</h4><div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-v-27c9b51d${_scopeId}><div class="md:col-span-2" data-v-27c9b51d${_scopeId}><label class="text-[9px] font-black text-slate-400 block mb-1 uppercase" data-v-27c9b51d${_scopeId}>Mulai</label><input type="date"${ssrRenderAttr("value", unref(form).rtm_rtl_start)} class="w-full p-2 border border-slate-200 rounded-lg text-sm font-bold focus:ring-2 outline-none dark:bg-slate-900 dark:border-slate-700" required data-v-27c9b51d${_scopeId}></div><div class="md:col-span-2" data-v-27c9b51d${_scopeId}><label class="text-[9px] font-black text-slate-400 block mb-1 uppercase" data-v-27c9b51d${_scopeId}>Selesai</label><input type="date"${ssrRenderAttr("value", unref(form).rtm_rtl_end)} class="w-full p-2 border border-slate-200 rounded-lg text-sm font-bold focus:ring-2 outline-none dark:bg-slate-900 dark:border-slate-700" required data-v-27c9b51d${_scopeId}></div></div></div></div><label class="flex items-center gap-3 p-4 bg-rose-50 dark:bg-rose-900/10 rounded-2xl cursor-pointer hover:bg-rose-100 transition-colors" data-v-27c9b51d${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""} class="w-5 h-5 rounded text-rose-600 focus:ring-rose-500 border-slate-300" data-v-27c9b51d${_scopeId}><span class="text-xs font-black text-rose-700 uppercase tracking-tighter" data-v-27c9b51d${_scopeId}>Tetapkan Sebagai Siklus Aktif</span></label><div class="flex justify-end gap-3 pt-6 border-t border-slate-100 dark:border-slate-800 sticky bottom-0 bg-white dark:bg-slate-900" data-v-27c9b51d${_scopeId}><button type="button" class="px-6 py-2 text-xs font-black uppercase text-slate-400 hover:text-slate-600" data-v-27c9b51d${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-8 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-black uppercase rounded-xl shadow-lg transition-all active:scale-95" data-v-27c9b51d${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan Perubahan")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex justify-end" }, [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => search.value = $event,
                    type: "text",
                    placeholder: "Cari periode...",
                    class: "w-full max-w-sm px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 outline-none dark:bg-slate-900 dark:border-slate-700"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, search.value]
                  ])
                ]),
                createVNode("div", { class: "overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800" }, [
                  createVNode("table", { class: "w-full text-sm text-left" }, [
                    createVNode("thead", { class: "bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[10px] font-black tracking-widest border-b dark:border-slate-800" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "p-4 w-56" }, "Nama Periode"),
                        createVNode("th", { class: "p-4 w-48 text-center" }, "Fase Aktif"),
                        createVNode("th", { class: "p-4 text-center" }, "Timeline Visual"),
                        createVNode("th", { class: "p-4 text-center w-28" }, "Aksi")
                      ])
                    ]),
                    createVNode("tbody", { class: "divide-y divide-slate-100 dark:divide-slate-800" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.periods.data, (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.id,
                          class: "hover:bg-slate-50/50 transition-colors"
                        }, [
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "font-black text-slate-700 dark:text-slate-200" }, toDisplayString(item.name), 1),
                            item.is_active ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-1 flex items-center text-[9px] text-emerald-500 font-black uppercase"
                            }, [
                              createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" }),
                              createTextVNode(" Siklus Aktif ")
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("td", { class: "p-4 text-center" }, [
                            createVNode("div", {
                              class: ["px-3 py-1 rounded-full text-[9px] font-black uppercase inline-block border", getStatusTimeline(item).type === "active" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-slate-50 text-slate-400 border-slate-100"]
                            }, toDisplayString(getStatusTimeline(item).label), 3)
                          ]),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "flex items-center justify-between gap-1 max-w-md mx-auto relative px-2" }, [
                              createVNode("div", { class: "absolute top-1/2 left-4 right-4 h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-2" }),
                              (openBlock(true), createBlock(Fragment, null, renderList([
                                { key: "doc_audit", label: "DOC", start: item.doc_audit_start, end: item.doc_audit_end, color: "blue" },
                                { key: "field_audit", label: "FIELD", start: item.field_audit_start, end: item.field_audit_end, color: "purple" },
                                { key: "finding", label: "FIND", start: item.finding_start, end: item.finding_end, color: "amber" },
                                { key: "reporting", label: "REP", start: item.reporting_start, end: item.reporting_end, color: "emerald" },
                                { key: "rtm_rtl", label: "RTM", start: item.rtm_rtl_start, end: item.rtm_rtl_end, color: "rose" }
                              ], (stage) => {
                                return openBlock(), createBlock("div", {
                                  key: stage.key,
                                  class: "flex-1 flex flex-col items-center group relative z-10"
                                }, [
                                  createVNode("div", {
                                    class: ["w-3 h-3 rounded-full mb-1 border-2 transition-all", getStatusTimeline(item).key === stage.key ? "bg-" + stage.color + "-500 border-white scale-150 shadow-md" : "bg-slate-200 border-white dark:bg-slate-700 dark:border-slate-900"]
                                  }, null, 2),
                                  createVNode("div", {
                                    class: ["text-[8px] font-black", getStatusTimeline(item).key === stage.key ? "text-" + stage.color + "-600" : "text-slate-300"]
                                  }, toDisplayString(stage.label), 3),
                                  createVNode("div", { class: "absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-slate-800 text-white text-[9px] py-1 px-2 rounded-md whitespace-nowrap z-50 shadow-xl font-bold" }, toDisplayString(formatDate(stage.start)) + " — " + toDisplayString(formatDate(stage.end)), 1)
                                ]);
                              }), 128))
                            ])
                          ]),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "flex justify-center gap-2" }, [
                              createVNode("button", {
                                onClick: ($event) => openEditModal(item),
                                class: "p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
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
                                class: "p-2 text-red-500 hover:bg-red-50 rounded-lg"
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
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200" }, [
                  createVNode("div", { class: "p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center" }, [
                    createVNode("h3", { class: "text-xl font-black text-slate-800 dark:text-white uppercase" }, toDisplayString(editMode.value ? "Edit Timeline" : "Siklus Baru"), 1),
                    createVNode("button", {
                      onClick: closeModal,
                      class: "text-3xl text-slate-300 hover:text-rose-500"
                    }, "×")
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "p-8 space-y-8 overflow-y-auto"
                  }, [
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest" }, "Nama Periode"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        type: "text",
                        class: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 transition-all font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).name]
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                      (openBlock(), createBlock(Fragment, null, renderList([
                        { label: "1. Audit Dokumen", start: "doc_audit_start", end: "doc_audit_end", color: "blue" },
                        { label: "2. Audit Lapangan", start: "field_audit_start", end: "field_audit_end", color: "purple" },
                        { label: "3. Verifikasi Temuan", start: "finding_start", end: "finding_end", color: "amber" },
                        { label: "4. Pelaporan Akhir", start: "reporting_start", end: "reporting_end", color: "emerald" }
                      ], (stage) => {
                        return createVNode("div", {
                          key: stage.label,
                          class: ["p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-l-4 shadow-sm text-slate-700 dark:text-slate-200", "border-" + stage.color + "-500"]
                        }, [
                          createVNode("h4", {
                            class: ["text-[10px] font-black uppercase mb-4 tracking-widest", "text-" + stage.color + "-600"]
                          }, toDisplayString(stage.label), 3),
                          createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "text-[9px] font-black text-slate-400 block mb-1 uppercase" }, "Mulai"),
                              withDirectives(createVNode("input", {
                                type: "date",
                                "onUpdate:modelValue": ($event) => unref(form)[stage.start] = $event,
                                class: "w-full p-2 border border-slate-200 rounded-lg text-sm font-bold focus:ring-2 outline-none dark:bg-slate-900 dark:border-slate-700",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form)[stage.start]]
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "text-[9px] font-black text-slate-400 block mb-1 uppercase" }, "Selesai"),
                              withDirectives(createVNode("input", {
                                type: "date",
                                "onUpdate:modelValue": ($event) => unref(form)[stage.end] = $event,
                                class: "w-full p-2 border border-slate-200 rounded-lg text-sm font-bold focus:ring-2 outline-none dark:bg-slate-900 dark:border-slate-700",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form)[stage.end]]
                              ])
                            ])
                          ])
                        ], 2);
                      }), 64)),
                      createVNode("div", { class: "md:col-span-2 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-l-4 border-rose-500 shadow-sm text-slate-700 dark:text-slate-200" }, [
                        createVNode("h4", { class: "text-[10px] font-black text-rose-600 uppercase mb-4 tracking-widest" }, "5. RTM & Rencana Tindak Lanjut"),
                        createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4" }, [
                          createVNode("div", { class: "md:col-span-2" }, [
                            createVNode("label", { class: "text-[9px] font-black text-slate-400 block mb-1 uppercase" }, "Mulai"),
                            withDirectives(createVNode("input", {
                              type: "date",
                              "onUpdate:modelValue": ($event) => unref(form).rtm_rtl_start = $event,
                              class: "w-full p-2 border border-slate-200 rounded-lg text-sm font-bold focus:ring-2 outline-none dark:bg-slate-900 dark:border-slate-700",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).rtm_rtl_start]
                            ])
                          ]),
                          createVNode("div", { class: "md:col-span-2" }, [
                            createVNode("label", { class: "text-[9px] font-black text-slate-400 block mb-1 uppercase" }, "Selesai"),
                            withDirectives(createVNode("input", {
                              type: "date",
                              "onUpdate:modelValue": ($event) => unref(form).rtm_rtl_end = $event,
                              class: "w-full p-2 border border-slate-200 rounded-lg text-sm font-bold focus:ring-2 outline-none dark:bg-slate-900 dark:border-slate-700",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).rtm_rtl_end]
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("label", { class: "flex items-center gap-3 p-4 bg-rose-50 dark:bg-rose-900/10 rounded-2xl cursor-pointer hover:bg-rose-100 transition-colors" }, [
                      withDirectives(createVNode("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": ($event) => unref(form).is_active = $event,
                        class: "w-5 h-5 rounded text-rose-600 focus:ring-rose-500 border-slate-300"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelCheckbox, unref(form).is_active]
                      ]),
                      createVNode("span", { class: "text-xs font-black text-rose-700 uppercase tracking-tighter" }, "Tetapkan Sebagai Siklus Aktif")
                    ]),
                    createVNode("div", { class: "flex justify-end gap-3 pt-6 border-t border-slate-100 dark:border-slate-800 sticky bottom-0 bg-white dark:bg-slate-900" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: closeModal,
                        class: "px-6 py-2 text-xs font-black uppercase text-slate-400 hover:text-slate-600"
                      }, "Batal"),
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(form).processing,
                        class: "px-8 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-black uppercase rounded-xl shadow-lg transition-all active:scale-95"
                      }, toDisplayString(unref(form).processing ? "Menyimpan..." : "Simpan Perubahan"), 9, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Period/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-27c9b51d"]]);
export {
  Index as default
};

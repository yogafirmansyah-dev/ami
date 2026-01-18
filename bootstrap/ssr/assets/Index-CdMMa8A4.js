import { ref, watch, resolveComponent, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withDirectives, vModelText, vModelSelect, openBlock, Fragment, renderList, toDisplayString, createTextVNode, withModifiers, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { router, useForm, Link, usePage } from "@inertiajs/vue3";
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
    periods: Object,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    const perPage = ref(props.filters.per_page || 10);
    watch(search, debounce((value) => {
      router.get(route("admin.periods.index"), { search: value, per_page: perPage.value }, {
        preserveState: true,
        replace: true
      });
    }, 500));
    watch(perPage, (value) => {
      router.get(route("admin.periods.index"), { search: search.value, per_page: value }, {
        preserveState: true,
        replace: true
      });
    });
    const showModal = ref(false);
    const editMode = ref(false);
    const form = useForm({
      id: null,
      name: "",
      is_active: false,
      doc_audit_start: "",
      doc_audit_end: "",
      field_audit_start: "",
      field_audit_end: "",
      finding_start: "",
      finding_end: "",
      reporting_start: "",
      reporting_end: "",
      rtm_rtl_start: "",
      rtm_rtl_end: ""
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
      form.is_active = !!period.is_active;
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
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
      form.reset();
    };
    const submit = () => {
      if (editMode.value) {
        form.put(route("admin.periods.update", form.id), {
          onSuccess: () => closeModal(),
          onError: () => {
            usePage().props.flash.toastr = {
              type: "error",
              content: "Terdapat kesalahan validasi, mohon cek kembali form anda.",
              position: "top-right"
            };
          }
        });
      } else {
        form.post(route("admin.periods.store"), {
          onSuccess: () => closeModal(),
          onError: () => {
            usePage().props.flash.toastr = {
              type: "error",
              content: "Terdapat kesalahan validasi, mohon cek kembali form anda.",
              position: "top-right"
            };
          }
        });
      }
    };
    const deleteData = (id) => {
      if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
        router.delete(route("admin.periods.destroy", id), {
          preserveScroll: true
        });
      }
    };
    const parseDate = (dateString) => {
      if (!dateString) return "";
      return dateString.split("T")[0].split(" ")[0];
    };
    const formatDate = (dateString) => {
      if (!dateString) return "-";
      const [year, month, day] = dateString.split("T")[0].split("-");
      const date = new Date(year, month - 1, day);
      return new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "short", year: "numeric" }).format(date);
    };
    const getStatusTimeline = (item) => {
      const today = /* @__PURE__ */ new Date();
      const stages = [
        { key: "doc_audit", label: "Audit Dokumen", start: item.doc_audit_start, end: item.doc_audit_end },
        { key: "field_audit", label: "Audit Lapangan", start: item.field_audit_start, end: item.field_audit_end },
        { key: "finding", label: "Verifikasi Temuan", start: item.finding_start, end: item.finding_end },
        { key: "reporting", label: "Pelaporan", start: item.reporting_start, end: item.reporting_end },
        { key: "rtm_rtl", label: "RTM & RTL", start: item.rtm_rtl_start, end: item.rtm_rtl_end }
      ];
      let currentStage = { label: "Belum Dimulai", type: "pending" };
      for (const stage of stages) {
        const start = new Date(stage.start);
        const end = new Date(stage.end);
        end.setHours(23, 59, 59, 999);
        if (today >= start && today <= end) {
          return { label: stage.label, type: "active", key: stage.key };
        } else if (today > end) {
          currentStage = { label: "Selesai", type: "finished" };
        }
      }
      return currentStage;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
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
            _push2(`<button class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10" data-v-e672c71a${_scopeId}><span class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" data-v-e672c71a${_scopeId}>+</span> Tambah Periode </button>`);
          } else {
            return [
              createVNode("button", {
                onClick: openCreateModal,
                class: "group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10"
              }, [
                createVNode("span", { class: "mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" }, "+"),
                createTextVNode(" Tambah Periode ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-e672c71a${_scopeId}><div class="flex flex-col lg:flex-row justify-between items-center gap-6" data-v-e672c71a${_scopeId}><div class="flex items-stretch gap-3 w-full max-w-2xl" data-v-e672c71a${_scopeId}><div class="relative flex-1 group" data-v-e672c71a${_scopeId}><span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" data-v-e672c71a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-magnifying-glass",
              class: "text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors"
            }, null, _parent2, _scopeId));
            _push2(`</span><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari periode..." class="w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" data-v-e672c71a${_scopeId}></div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300" data-v-e672c71a${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2" data-v-e672c71a${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none" data-v-e672c71a${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-e672c71a${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-e672c71a${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-e672c71a${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option><option${ssrRenderAttr("value", 100)} data-v-e672c71a${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 100) : ssrLooseEqual(perPage.value, 100)) ? " selected" : ""}${_scopeId}>100</option></select></div></div><div class="flex items-center gap-3" data-v-e672c71a${_scopeId}></div></div><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" data-v-e672c71a${_scopeId}><div class="overflow-x-auto custom-scrollbar" data-v-e672c71a${_scopeId}><table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full" data-v-e672c71a${_scopeId}><thead data-v-e672c71a${_scopeId}><tr class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" data-v-e672c71a${_scopeId}><th class="p-6 md:p-8 pl-8" data-v-e672c71a${_scopeId}>Nama Periode</th><th class="p-6 md:p-8 text-center" data-v-e672c71a${_scopeId}>Fase Aktif</th><th class="p-6 md:p-8 text-center" data-v-e672c71a${_scopeId}>Timeline Visual</th><th class="p-6 md:p-8 text-center w-28" data-v-e672c71a${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-e672c71a${_scopeId}><!--[-->`);
            ssrRenderList(__props.periods.data, (item) => {
              _push2(`<tr class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300" data-v-e672c71a${_scopeId}><td class="p-6 md:p-8 pl-8" data-v-e672c71a${_scopeId}><div class="font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight" data-v-e672c71a${_scopeId}>${ssrInterpolate(item.name)}</div>`);
              if (item.is_active) {
                _push2(`<div class="mt-1 flex items-center text-[9px] text-emerald-500 font-black uppercase" data-v-e672c71a${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" data-v-e672c71a${_scopeId}></span> Siklus Aktif </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td><td class="p-6 md:p-8 text-center" data-v-e672c71a${_scopeId}><div class="${ssrRenderClass(["px-3 py-1 rounded-lg text-[9px] font-black uppercase inline-block border shadow-sm", getStatusTimeline(item).type === "active" ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20" : "bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700"])}" data-v-e672c71a${_scopeId}>${ssrInterpolate(getStatusTimeline(item).label)}</div></td><td class="p-6 md:p-8" data-v-e672c71a${_scopeId}><div class="flex items-center justify-between gap-1 max-w-md mx-auto relative px-2 py-2" data-v-e672c71a${_scopeId}><div class="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-2" data-v-e672c71a${_scopeId}></div><!--[-->`);
              ssrRenderList([
                { key: "doc_audit", label: "DOK", fullName: "Audit Dokumen", start: item.doc_audit_start, end: item.doc_audit_end, color: "blue" },
                { key: "field_audit", label: "LAP", fullName: "Audit Lapangan", start: item.field_audit_start, end: item.field_audit_end, color: "purple" },
                { key: "finding", label: "TEM", fullName: "Verifikasi Temuan", start: item.finding_start, end: item.finding_end, color: "amber" },
                { key: "reporting", label: "PEL", fullName: "Pelaporan Akhir", start: item.reporting_start, end: item.reporting_end, color: "emerald" },
                { key: "rtm_rtl", label: "RTM", fullName: "RTM & RTL", start: item.rtm_rtl_start, end: item.rtm_rtl_end, color: "rose" }
              ], (stage) => {
                _push2(`<div class="flex-1 flex flex-col items-center group/stage relative z-10 hover:z-50 transition-all" data-v-e672c71a${_scopeId}><div class="${ssrRenderClass(["w-3 h-3 rounded-full mb-1 border-2 transition-all", getStatusTimeline(item).key === stage.key ? "bg-" + stage.color + "-500 border-white scale-150 shadow-md ring-2 ring-" + stage.color + "-200" : "bg-slate-200 border-white dark:bg-slate-700 dark:border-slate-800"])}" data-v-e672c71a${_scopeId}></div><div class="${ssrRenderClass(["text-[8px] font-black", getStatusTimeline(item).key === stage.key ? "text-" + stage.color + "-600" : "text-slate-300"])}" data-v-e672c71a${_scopeId}>${ssrInterpolate(stage.label)}</div><div class="absolute -top-16 scale-0 group-hover/stage:scale-100 transition-all bg-slate-900 text-white text-[9px] py-1.5 px-3 rounded-xl whitespace-nowrap shadow-xl font-bold border border-slate-800 pointer-events-none text-center z-[60]" data-v-e672c71a${_scopeId}><div class="mb-1 text-[8px] uppercase tracking-wider text-slate-400 border-b border-slate-700 pb-1" data-v-e672c71a${_scopeId}>${ssrInterpolate(stage.fullName)}</div> ${ssrInterpolate(formatDate(stage.start))} — ${ssrInterpolate(formatDate(stage.end))} <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 border-r border-b border-slate-800" data-v-e672c71a${_scopeId}></div></div></div>`);
              });
              _push2(`<!--]--></div></td><td class="p-6 md:p-8" data-v-e672c71a${_scopeId}><div class="flex justify-center gap-2" data-v-e672c71a${_scopeId}><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95" data-v-e672c71a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-pencil",
                class: "text-[10px]"
              }, null, _parent2, _scopeId));
              _push2(`</button><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95" data-v-e672c71a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-trash",
                class: "text-[10px]"
              }, null, _parent2, _scopeId));
              _push2(`</button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.periods.data.length === 0) {
              _push2(`<tr data-v-e672c71a${_scopeId}><td colspan="4" class="p-12 text-center" data-v-e672c71a${_scopeId}><div class="flex flex-col items-center justify-center opacity-50" data-v-e672c71a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-clock-rotate-left",
                class: "text-4xl text-slate-300 dark:text-slate-600 mb-4"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-xs font-black text-slate-400 uppercase tracking-widest italic" data-v-e672c71a${_scopeId}> Data periode tidak ditemukan</p></div></td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-e672c71a${_scopeId}><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" data-v-e672c71a${_scopeId}> Data ${ssrInterpolate(__props.periods.from)} - ${ssrInterpolate(__props.periods.to)} dari total ${ssrInterpolate(__props.periods.total)}</div><div class="flex flex-wrap justify-center gap-1.5" data-v-e672c71a${_scopeId}><!--[-->`);
            ssrRenderList(__props.periods.links, (link, k) => {
              _push2(ssrRenderComponent(unref(Link), {
                key: k,
                href: link.url || "#",
                class: [
                  "px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all",
                  link.active ? "bg-slate-900 dark:bg-rose-600 text-white border-slate-900 dark:border-rose-600 shadow-lg shadow-slate-900/20" : "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:text-rose-500",
                  !link.url ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                ]
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" data-v-e672c71a${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" data-v-e672c71a${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10 flex flex-col max-h-[90vh]" data-v-e672c71a${_scopeId}><div class="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center shrink-0" data-v-e672c71a${_scopeId}><div data-v-e672c71a${_scopeId}><h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" data-v-e672c71a${_scopeId}>${ssrInterpolate(editMode.value ? "Edit Timeline" : "Siklus Baru")}</h3><p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" data-v-e672c71a${_scopeId}> Manajemen Siklus Audit </p></div><button class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg" data-v-e672c71a${_scopeId}>×</button></div><form class="p-8 space-y-8 overflow-y-auto custom-scrollbar flex-1" data-v-e672c71a${_scopeId}><div class="space-y-2" data-v-e672c71a${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-e672c71a${_scopeId}>Nama Periode</label><input${ssrRenderAttr("value", unref(form).name)} type="text" class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" required data-v-e672c71a${_scopeId}>`);
              if (unref(form).errors.name) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-e672c71a${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-e672c71a${_scopeId}><!--[-->`);
              ssrRenderList([
                { label: "1. Audit Dokumen", start: "doc_audit_start", end: "doc_audit_end", color: "blue" },
                { label: "2. Audit Lapangan", start: "field_audit_start", end: "field_audit_end", color: "purple" },
                { label: "3. Verifikasi Temuan", start: "finding_start", end: "finding_end", color: "amber" },
                { label: "4. Pelaporan Akhir", start: "reporting_start", end: "reporting_end", color: "emerald" }
              ], (stage) => {
                _push2(`<div class="${ssrRenderClass(["p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border-l-4 shadow-sm text-slate-700 dark:text-slate-200 transition-all hover:translate-x-1", "border-" + stage.color + "-500"])}" data-v-e672c71a${_scopeId}><h4 class="${ssrRenderClass(["text-[10px] font-black uppercase mb-4 tracking-widest", "text-" + stage.color + "-600"])}" data-v-e672c71a${_scopeId}>${ssrInterpolate(stage.label)}</h4><div class="grid grid-cols-2 gap-4" data-v-e672c71a${_scopeId}><div data-v-e672c71a${_scopeId}><label class="text-[9px] font-black text-slate-400 block mb-1 uppercase ml-1" data-v-e672c71a${_scopeId}>Mulai</label><input type="date"${ssrRenderAttr("value", unref(form)[stage.start])} class="w-full px-3 py-2 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-rose-500/50 outline-none" required data-v-e672c71a${_scopeId}>`);
                if (unref(form).errors[stage.start]) {
                  _push2(`<p class="text-[9px] text-rose-500 font-bold mt-1" data-v-e672c71a${_scopeId}>${ssrInterpolate(unref(form).errors[stage.start])}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div data-v-e672c71a${_scopeId}><label class="text-[9px] font-black text-slate-400 block mb-1 uppercase ml-1" data-v-e672c71a${_scopeId}>Selesai</label><input type="date"${ssrRenderAttr("value", unref(form)[stage.end])} class="w-full px-3 py-2 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-rose-500/50 outline-none" required data-v-e672c71a${_scopeId}>`);
                if (unref(form).errors[stage.end]) {
                  _push2(`<p class="text-[9px] text-rose-500 font-bold mt-1" data-v-e672c71a${_scopeId}>${ssrInterpolate(unref(form).errors[stage.end])}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></div>`);
              });
              _push2(`<!--]--><div class="md:col-span-2 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border-l-4 border-rose-500 shadow-sm text-slate-700 dark:text-slate-200 transition-all hover:translate-x-1" data-v-e672c71a${_scopeId}><h4 class="text-[10px] font-black text-rose-600 uppercase mb-4 tracking-widest" data-v-e672c71a${_scopeId}>5. RTM &amp; Rencana Tindak Lanjut</h4><div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-v-e672c71a${_scopeId}><div class="md:col-span-2" data-v-e672c71a${_scopeId}><label class="text-[9px] font-black text-slate-400 block mb-1 uppercase ml-1" data-v-e672c71a${_scopeId}>Mulai</label><input type="date"${ssrRenderAttr("value", unref(form).rtm_rtl_start)} class="w-full px-3 py-2 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-rose-500/50 outline-none" required data-v-e672c71a${_scopeId}>`);
              if (unref(form).errors.rtm_rtl_start) {
                _push2(`<p class="text-[9px] text-rose-500 font-bold mt-1" data-v-e672c71a${_scopeId}>${ssrInterpolate(unref(form).errors.rtm_rtl_start)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="md:col-span-2" data-v-e672c71a${_scopeId}><label class="text-[9px] font-black text-slate-400 block mb-1 uppercase ml-1" data-v-e672c71a${_scopeId}>Selesai</label><input type="date"${ssrRenderAttr("value", unref(form).rtm_rtl_end)} class="w-full px-3 py-2 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-rose-500/50 outline-none" required data-v-e672c71a${_scopeId}>`);
              if (unref(form).errors.rtm_rtl_end) {
                _push2(`<p class="text-[9px] text-rose-500 font-bold mt-1" data-v-e672c71a${_scopeId}>${ssrInterpolate(unref(form).errors.rtm_rtl_end)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div></div><label class="flex items-center gap-4 p-5 bg-rose-50 dark:bg-rose-500/10 rounded-2xl cursor-pointer hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-all border border-rose-100 dark:border-rose-500/20" data-v-e672c71a${_scopeId}><div class="relative flex items-center" data-v-e672c71a${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""} class="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 dark:border-slate-600 checked:bg-rose-500 checked:border-rose-500 transition-all" data-v-e672c71a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-check",
                class: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
              }, null, _parent2, _scopeId));
              _push2(`</div><span class="text-xs font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest" data-v-e672c71a${_scopeId}> Tetapkan Sebagai Siklus Aktif </span></label><div class="pt-4 border-t border-slate-100 dark:border-slate-800" data-v-e672c71a${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50" data-v-e672c71a${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan Perubahan")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "flex flex-col lg:flex-row justify-between items-center gap-6" }, [
                  createVNode("div", { class: "flex items-stretch gap-3 w-full max-w-2xl" }, [
                    createVNode("div", { class: "relative flex-1 group" }, [
                      createVNode("span", { class: "absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" }, [
                        createVNode(_component_icon, {
                          icon: "fa-solid fa-magnifying-glass",
                          class: "text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors"
                        })
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => search.value = $event,
                        type: "text",
                        placeholder: "Cari periode...",
                        class: "w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, search.value]
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300" }, [
                      createVNode("span", { class: "hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2" }, "Tampilkan"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => perPage.value = $event,
                        class: "bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none"
                      }, [
                        createVNode("option", { value: 10 }, "10"),
                        createVNode("option", { value: 25 }, "25"),
                        createVNode("option", { value: 50 }, "50"),
                        createVNode("option", { value: 100 }, "100")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, perPage.value]
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-3" })
                ]),
                createVNode("div", { class: "bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" }, [
                  createVNode("div", { class: "overflow-x-auto custom-scrollbar" }, [
                    createVNode("table", { class: "w-full text-left border-collapse min-w-[1000px] lg:min-w-full" }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" }, [
                          createVNode("th", { class: "p-6 md:p-8 pl-8" }, "Nama Periode"),
                          createVNode("th", { class: "p-6 md:p-8 text-center" }, "Fase Aktif"),
                          createVNode("th", { class: "p-6 md:p-8 text-center" }, "Timeline Visual"),
                          createVNode("th", { class: "p-6 md:p-8 text-center w-28" }, "Aksi")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-slate-50 dark:divide-slate-800/20" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.periods.data, (item) => {
                          return openBlock(), createBlock("tr", {
                            key: item.id,
                            class: "group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300"
                          }, [
                            createVNode("td", { class: "p-6 md:p-8 pl-8" }, [
                              createVNode("div", { class: "font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight" }, toDisplayString(item.name), 1),
                              item.is_active ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-1 flex items-center text-[9px] text-emerald-500 font-black uppercase"
                              }, [
                                createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" }),
                                createTextVNode(" Siklus Aktif ")
                              ])) : createCommentVNode("", true)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("div", {
                                class: ["px-3 py-1 rounded-lg text-[9px] font-black uppercase inline-block border shadow-sm", getStatusTimeline(item).type === "active" ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20" : "bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700"]
                              }, toDisplayString(getStatusTimeline(item).label), 3)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "flex items-center justify-between gap-1 max-w-md mx-auto relative px-2 py-2" }, [
                                createVNode("div", { class: "absolute top-1/2 left-4 right-4 h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-2" }),
                                (openBlock(true), createBlock(Fragment, null, renderList([
                                  { key: "doc_audit", label: "DOK", fullName: "Audit Dokumen", start: item.doc_audit_start, end: item.doc_audit_end, color: "blue" },
                                  { key: "field_audit", label: "LAP", fullName: "Audit Lapangan", start: item.field_audit_start, end: item.field_audit_end, color: "purple" },
                                  { key: "finding", label: "TEM", fullName: "Verifikasi Temuan", start: item.finding_start, end: item.finding_end, color: "amber" },
                                  { key: "reporting", label: "PEL", fullName: "Pelaporan Akhir", start: item.reporting_start, end: item.reporting_end, color: "emerald" },
                                  { key: "rtm_rtl", label: "RTM", fullName: "RTM & RTL", start: item.rtm_rtl_start, end: item.rtm_rtl_end, color: "rose" }
                                ], (stage) => {
                                  return openBlock(), createBlock("div", {
                                    key: stage.key,
                                    class: "flex-1 flex flex-col items-center group/stage relative z-10 hover:z-50 transition-all"
                                  }, [
                                    createVNode("div", {
                                      class: ["w-3 h-3 rounded-full mb-1 border-2 transition-all", getStatusTimeline(item).key === stage.key ? "bg-" + stage.color + "-500 border-white scale-150 shadow-md ring-2 ring-" + stage.color + "-200" : "bg-slate-200 border-white dark:bg-slate-700 dark:border-slate-800"]
                                    }, null, 2),
                                    createVNode("div", {
                                      class: ["text-[8px] font-black", getStatusTimeline(item).key === stage.key ? "text-" + stage.color + "-600" : "text-slate-300"]
                                    }, toDisplayString(stage.label), 3),
                                    createVNode("div", { class: "absolute -top-16 scale-0 group-hover/stage:scale-100 transition-all bg-slate-900 text-white text-[9px] py-1.5 px-3 rounded-xl whitespace-nowrap shadow-xl font-bold border border-slate-800 pointer-events-none text-center z-[60]" }, [
                                      createVNode("div", { class: "mb-1 text-[8px] uppercase tracking-wider text-slate-400 border-b border-slate-700 pb-1" }, toDisplayString(stage.fullName), 1),
                                      createTextVNode(" " + toDisplayString(formatDate(stage.start)) + " — " + toDisplayString(formatDate(stage.end)) + " ", 1),
                                      createVNode("div", { class: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 border-r border-b border-slate-800" })
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "flex justify-center gap-2" }, [
                                createVNode("button", {
                                  onClick: ($event) => openEditModal(item),
                                  class: "w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95"
                                }, [
                                  createVNode(_component_icon, {
                                    icon: "fa-solid fa-pencil",
                                    class: "text-[10px]"
                                  })
                                ], 8, ["onClick"]),
                                createVNode("button", {
                                  onClick: ($event) => deleteData(item.id),
                                  class: "w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95"
                                }, [
                                  createVNode(_component_icon, {
                                    icon: "fa-solid fa-trash",
                                    class: "text-[10px]"
                                  })
                                ], 8, ["onClick"])
                              ])
                            ])
                          ]);
                        }), 128)),
                        __props.periods.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                          createVNode("td", {
                            colspan: "4",
                            class: "p-12 text-center"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center opacity-50" }, [
                              createVNode(_component_icon, {
                                icon: "fa-solid fa-clock-rotate-left",
                                class: "text-4xl text-slate-300 dark:text-slate-600 mb-4"
                              }),
                              createVNode("p", { class: "text-xs font-black text-slate-400 uppercase tracking-widest italic" }, " Data periode tidak ditemukan")
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" }, [
                    createVNode("div", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" }, " Data " + toDisplayString(__props.periods.from) + " - " + toDisplayString(__props.periods.to) + " dari total " + toDisplayString(__props.periods.total), 1),
                    createVNode("div", { class: "flex flex-wrap justify-center gap-1.5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.periods.links, (link, k) => {
                        return openBlock(), createBlock(unref(Link), {
                          key: k,
                          href: link.url || "#",
                          class: [
                            "px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all",
                            link.active ? "bg-slate-900 dark:bg-rose-600 text-white border-slate-900 dark:border-rose-600 shadow-lg shadow-slate-900/20" : "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:text-rose-500",
                            !link.url ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                          ],
                          innerHTML: link.label
                        }, null, 8, ["href", "class", "innerHTML"]);
                      }), 128))
                    ])
                  ])
                ])
              ]),
              showModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center p-4"
              }, [
                createVNode("div", {
                  class: "fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity",
                  onClick: closeModal
                }),
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10 flex flex-col max-h-[90vh]" }, [
                  createVNode("div", { class: "p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center shrink-0" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" }, toDisplayString(editMode.value ? "Edit Timeline" : "Siklus Baru"), 1),
                      createVNode("p", { class: "text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" }, " Manajemen Siklus Audit ")
                    ]),
                    createVNode("button", {
                      onClick: closeModal,
                      class: "w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg"
                    }, "×")
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "p-8 space-y-8 overflow-y-auto custom-scrollbar flex-1"
                  }, [
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Nama Periode"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        type: "text",
                        class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).name]
                      ]),
                      unref(form).errors.name ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-rose-500 font-bold ml-1"
                      }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
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
                          class: ["p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border-l-4 shadow-sm text-slate-700 dark:text-slate-200 transition-all hover:translate-x-1", "border-" + stage.color + "-500"]
                        }, [
                          createVNode("h4", {
                            class: ["text-[10px] font-black uppercase mb-4 tracking-widest", "text-" + stage.color + "-600"]
                          }, toDisplayString(stage.label), 3),
                          createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "text-[9px] font-black text-slate-400 block mb-1 uppercase ml-1" }, "Mulai"),
                              withDirectives(createVNode("input", {
                                type: "date",
                                "onUpdate:modelValue": ($event) => unref(form)[stage.start] = $event,
                                class: "w-full px-3 py-2 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-rose-500/50 outline-none",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form)[stage.start]]
                              ]),
                              unref(form).errors[stage.start] ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-[9px] text-rose-500 font-bold mt-1"
                              }, toDisplayString(unref(form).errors[stage.start]), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "text-[9px] font-black text-slate-400 block mb-1 uppercase ml-1" }, "Selesai"),
                              withDirectives(createVNode("input", {
                                type: "date",
                                "onUpdate:modelValue": ($event) => unref(form)[stage.end] = $event,
                                class: "w-full px-3 py-2 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-rose-500/50 outline-none",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form)[stage.end]]
                              ]),
                              unref(form).errors[stage.end] ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-[9px] text-rose-500 font-bold mt-1"
                              }, toDisplayString(unref(form).errors[stage.end]), 1)) : createCommentVNode("", true)
                            ])
                          ])
                        ], 2);
                      }), 64)),
                      createVNode("div", { class: "md:col-span-2 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border-l-4 border-rose-500 shadow-sm text-slate-700 dark:text-slate-200 transition-all hover:translate-x-1" }, [
                        createVNode("h4", { class: "text-[10px] font-black text-rose-600 uppercase mb-4 tracking-widest" }, "5. RTM & Rencana Tindak Lanjut"),
                        createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4" }, [
                          createVNode("div", { class: "md:col-span-2" }, [
                            createVNode("label", { class: "text-[9px] font-black text-slate-400 block mb-1 uppercase ml-1" }, "Mulai"),
                            withDirectives(createVNode("input", {
                              type: "date",
                              "onUpdate:modelValue": ($event) => unref(form).rtm_rtl_start = $event,
                              class: "w-full px-3 py-2 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-rose-500/50 outline-none",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).rtm_rtl_start]
                            ]),
                            unref(form).errors.rtm_rtl_start ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-[9px] text-rose-500 font-bold mt-1"
                            }, toDisplayString(unref(form).errors.rtm_rtl_start), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "md:col-span-2" }, [
                            createVNode("label", { class: "text-[9px] font-black text-slate-400 block mb-1 uppercase ml-1" }, "Selesai"),
                            withDirectives(createVNode("input", {
                              type: "date",
                              "onUpdate:modelValue": ($event) => unref(form).rtm_rtl_end = $event,
                              class: "w-full px-3 py-2 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-rose-500/50 outline-none",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).rtm_rtl_end]
                            ]),
                            unref(form).errors.rtm_rtl_end ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-[9px] text-rose-500 font-bold mt-1"
                            }, toDisplayString(unref(form).errors.rtm_rtl_end), 1)) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ]),
                    createVNode("label", { class: "flex items-center gap-4 p-5 bg-rose-50 dark:bg-rose-500/10 rounded-2xl cursor-pointer hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-all border border-rose-100 dark:border-rose-500/20" }, [
                      createVNode("div", { class: "relative flex items-center" }, [
                        withDirectives(createVNode("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": ($event) => unref(form).is_active = $event,
                          class: "peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 dark:border-slate-600 checked:bg-rose-500 checked:border-rose-500 transition-all"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelCheckbox, unref(form).is_active]
                        ]),
                        createVNode(_component_icon, {
                          icon: "fa-solid fa-check",
                          class: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                        })
                      ]),
                      createVNode("span", { class: "text-xs font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest" }, " Tetapkan Sebagai Siklus Aktif ")
                    ]),
                    createVNode("div", { class: "pt-4 border-t border-slate-100 dark:border-slate-800" }, [
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(form).processing,
                        class: "w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
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
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e672c71a"]]);
export {
  Index as default
};

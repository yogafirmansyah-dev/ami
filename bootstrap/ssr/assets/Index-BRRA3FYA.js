import { ref, watch, resolveComponent, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withDirectives, vModelText, vModelSelect, createTextVNode, toDisplayString, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { router, Link } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-BXpqpYTS.js";
import debounce from "lodash/debounce.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vueuse/core";
import "./windowSizeCalculator-Ch6zBFfA.js";
import "./TDropdown-CRaizlei.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-DS29Kv5n.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    histories: Object,
    // Paginated data
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    const perPage = ref(props.filters.per_page || 10);
    watch(search, debounce((value) => {
      router.get(route("admin.history.index"), { search: value, per_page: perPage.value }, { preserveState: true, replace: true });
    }, 500));
    watch(perPage, (value) => {
      router.get(route("admin.history.index"), { search: search.value, per_page: value }, { preserveState: true, replace: true });
    });
    const handleSort = (field) => {
      const currentSort = props.filters.sort_field;
      const currentDir = props.filters.direction || "asc";
      const nextDir = currentSort === field && currentDir === "asc" ? "desc" : "asc";
      router.get(window.location.href, { ...props.filters, sort_field: field, direction: nextDir }, { preserveState: true, replace: true });
    };
    const showModal = ref(false);
    const selectedLog = ref(null);
    const openDetail = (log) => {
      selectedLog.value = log;
      showModal.value = true;
    };
    const formatDate = (dateString) => {
      return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }).format(new Date(dateString));
    };
    const getActionBadge = (action) => {
      if (action.includes("create")) return "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20";
      if (action.includes("delete")) return "bg-rose-50 dark:bg-rose-500/10 text-rose-600 border-rose-100 dark:border-rose-500/20";
      return "bg-blue-50 dark:bg-blue-500/10 text-blue-600 border-blue-100 dark:border-blue-500/20";
    };
    const formatEntityName = (type) => {
      if (!type) return "-";
      return type.replace("App\\Models\\", "");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Audit Trail" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Audit Trail &amp; History`);
          } else {
            return [
              createTextVNode("Audit Trail & History")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Log aktivitas sistem untuk melacak setiap perubahan data Master dan Transaksi`);
          } else {
            return [
              createTextVNode("Log aktivitas sistem untuk melacak setiap perubahan data Master dan Transaksi")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-141b67f3${_scopeId}><div class="flex flex-col lg:flex-row justify-between items-center gap-6" data-v-141b67f3${_scopeId}><div class="flex items-stretch gap-3 w-full max-w-2xl" data-v-141b67f3${_scopeId}><div class="relative flex-1 group" data-v-141b67f3${_scopeId}><span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" data-v-141b67f3${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-magnifying-glass",
              class: "text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors"
            }, null, _parent2, _scopeId));
            _push2(`</span><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari aktor, aksi, atau entitas..." class="w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" data-v-141b67f3${_scopeId}></div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300" data-v-141b67f3${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2" data-v-141b67f3${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none" data-v-141b67f3${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-141b67f3${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-141b67f3${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-141b67f3${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option><option${ssrRenderAttr("value", 100)} data-v-141b67f3${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 100) : ssrLooseEqual(perPage.value, 100)) ? " selected" : ""}${_scopeId}>100</option></select></div></div><div class="px-6 py-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800" data-v-141b67f3${_scopeId}><span class="text-[10px] font-black text-slate-400 uppercase tracking-widest" data-v-141b67f3${_scopeId}> Total Aktivitas: <span class="text-rose-500 ml-1" data-v-141b67f3${_scopeId}>${ssrInterpolate(__props.histories.total)}</span></span></div></div><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" data-v-141b67f3${_scopeId}><div class="overflow-x-auto custom-scrollbar" data-v-141b67f3${_scopeId}><table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full" data-v-141b67f3${_scopeId}><thead data-v-141b67f3${_scopeId}><tr class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" data-v-141b67f3${_scopeId}><th class="p-6 md:p-8 pl-8 text-center" data-v-141b67f3${_scopeId}>No</th><th class="p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-141b67f3${_scopeId}><div class="flex items-center gap-2" data-v-141b67f3${_scopeId}> Waktu <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-141b67f3${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "created_at" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "created_at" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8" data-v-141b67f3${_scopeId}>Aktor (User)</th><th class="p-6 md:p-8 cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-141b67f3${_scopeId}><div class="flex items-center gap-2" data-v-141b67f3${_scopeId}> Aksi <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-141b67f3${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "action" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "action" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8" data-v-141b67f3${_scopeId}>Entitas Terkait</th><th class="p-6 md:p-8 text-center" data-v-141b67f3${_scopeId}>Detail</th></tr></thead><tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-141b67f3${_scopeId}><!--[-->`);
            ssrRenderList(__props.histories.data, (log) => {
              _push2(`<tr class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300" data-v-141b67f3${_scopeId}><td class="p-6 md:p-8 text-center" data-v-141b67f3${_scopeId}><span class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" data-v-141b67f3${_scopeId}>${ssrInterpolate(__props.histories.from + __props.histories.data.indexOf(log))}</span></td><td class="p-6 md:p-8 pl-8 text-[10px] font-bold text-slate-400 font-mono whitespace-nowrap" data-v-141b67f3${_scopeId}>${ssrInterpolate(formatDate(log.created_at))}</td><td class="p-6 md:p-8" data-v-141b67f3${_scopeId}><div class="flex items-center gap-3" data-v-141b67f3${_scopeId}><div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-[10px] text-slate-400 border border-slate-200 dark:border-slate-700" data-v-141b67f3${_scopeId}>${ssrInterpolate(log.user?.name?.substring(0, 2).toUpperCase() || "?")}</div><div class="flex flex-col" data-v-141b67f3${_scopeId}><span class="font-bold text-slate-700 dark:text-slate-200 text-xs leading-tight" data-v-141b67f3${_scopeId}>${ssrInterpolate(log.user?.name || "Unknown")}</span><span class="text-[9px] text-slate-400 uppercase tracking-tighter" data-v-141b67f3${_scopeId}>${ssrInterpolate(log.user?.role || "-")}</span></div></div></td><td class="p-6 md:p-8" data-v-141b67f3${_scopeId}><span class="${ssrRenderClass(["px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border shadow-sm", getActionBadge(log.action)])}" data-v-141b67f3${_scopeId}>${ssrInterpolate(log.action.replace("_", " "))}</span></td><td class="p-6 md:p-8" data-v-141b67f3${_scopeId}><div class="text-xs font-bold text-slate-600 dark:text-slate-400" data-v-141b67f3${_scopeId}>${ssrInterpolate(formatEntityName(log.historable_type))}</div><div class="text-[9px] text-slate-400 tracking-tighter mt-0.5" data-v-141b67f3${_scopeId}> ID: <span class="font-mono text-rose-500" data-v-141b67f3${_scopeId}>#${ssrInterpolate(log.historable_id)}</span>`);
              if (log.stage) {
                _push2(`<span class="mx-1" data-v-141b67f3${_scopeId}>•</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (log.stage) {
                _push2(`<span data-v-141b67f3${_scopeId}>${ssrInterpolate(log.stage)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="flex items-center justify-center p-6 md:p-8 text-center" data-v-141b67f3${_scopeId}><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95" data-v-141b67f3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-eye",
                class: "text-[10px]"
              }, null, _parent2, _scopeId));
              _push2(`</button></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.histories.data.length === 0) {
              _push2(`<tr data-v-141b67f3${_scopeId}><td colspan="5" class="p-12 text-center" data-v-141b67f3${_scopeId}><div class="flex flex-col items-center justify-center opacity-50" data-v-141b67f3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-clock-rotate-left",
                class: "text-4xl text-slate-300 dark:text-slate-600 mb-4"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-xs font-black text-slate-400 uppercase tracking-widest italic" data-v-141b67f3${_scopeId}> Belum ada log aktivitas terekam</p></div></td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-141b67f3${_scopeId}><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" data-v-141b67f3${_scopeId}> Data ${ssrInterpolate(__props.histories.from)} - ${ssrInterpolate(__props.histories.to)} dari total ${ssrInterpolate(__props.histories.total)}</div><div class="flex flex-wrap justify-center gap-1.5" data-v-141b67f3${_scopeId}><!--[-->`);
            ssrRenderList(__props.histories.links, (link, k) => {
              _push2(`<!--[-->`);
              if (link.url) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: link.url,
                  class: [
                    "px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all cursor-pointer",
                    link.active ? "bg-slate-900 dark:bg-rose-600 text-white border-slate-900 dark:border-rose-600 shadow-lg shadow-slate-900/20" : "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:text-rose-500"
                  ]
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<span class="${ssrRenderClass([
                  "px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all opacity-30 cursor-not-allowed",
                  "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800"
                ])}" data-v-141b67f3${_scopeId}>${link.label ?? ""}</span>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" data-v-141b67f3${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" data-v-141b67f3${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[85vh] border border-white/10" data-v-141b67f3${_scopeId}><div class="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30" data-v-141b67f3${_scopeId}><div data-v-141b67f3${_scopeId}><h3 class="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" data-v-141b67f3${_scopeId}> Detail Perubahan Data</h3><p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" data-v-141b67f3${_scopeId}>${ssrInterpolate(selectedLog.value.action)} • ${ssrInterpolate(formatDate(selectedLog.value.created_at))}</p></div><button class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg" data-v-141b67f3${_scopeId}>×</button></div><div class="p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-slate-900 custom-scrollbar" data-v-141b67f3${_scopeId}><div class="space-y-4" data-v-141b67f3${_scopeId}><div class="flex items-center gap-2 text-rose-600 dark:text-rose-500" data-v-141b67f3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-file-circle-minus" }, null, _parent2, _scopeId));
              _push2(`<h4 class="text-[10px] font-black uppercase tracking-widest" data-v-141b67f3${_scopeId}>Data Sebelumnya (Old)</h4></div><div class="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 font-mono text-[11px] overflow-x-auto shadow-inner h-full max-h-[400px] custom-scrollbar" data-v-141b67f3${_scopeId}>`);
              if (selectedLog.value.old_values) {
                _push2(`<pre class="text-slate-600 dark:text-slate-400" data-v-141b67f3${_scopeId}>${ssrInterpolate(JSON.stringify(selectedLog.value.old_values, null, 2))}</pre>`);
              } else {
                _push2(`<div class="text-slate-400 italic text-[10px] font-bold uppercase tracking-wider py-10 text-center" data-v-141b67f3${_scopeId}> Tidak ada data sebelumnya (Record Baru)</div>`);
              }
              _push2(`</div></div><div class="space-y-4" data-v-141b67f3${_scopeId}><div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-500" data-v-141b67f3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-file-circle-plus" }, null, _parent2, _scopeId));
              _push2(`<h4 class="text-[10px] font-black uppercase tracking-widest" data-v-141b67f3${_scopeId}>Data Sesudahnya (New)</h4></div><div class="bg-emerald-50/30 dark:bg-emerald-900/10 rounded-2xl p-4 border border-emerald-100 dark:border-emerald-500/20 font-mono text-[11px] overflow-x-auto shadow-inner h-full max-h-[400px] custom-scrollbar ring-2 ring-emerald-500/10" data-v-141b67f3${_scopeId}>`);
              if (selectedLog.value.new_values) {
                _push2(`<pre class="text-slate-700 dark:text-slate-200 font-bold" data-v-141b67f3${_scopeId}>${ssrInterpolate(JSON.stringify(selectedLog.value.new_values, null, 2))}</pre>`);
              } else {
                _push2(`<div class="text-rose-500 italic text-[10px] font-bold uppercase tracking-wider py-10 text-center" data-v-141b67f3${_scopeId}> Data Telah Dihapus Permanen</div>`);
              }
              _push2(`</div></div></div><div class="p-6 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 text-right" data-v-141b67f3${_scopeId}><button class="px-8 py-3 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm" data-v-141b67f3${_scopeId}> Tutup Detail </button></div></div></div>`);
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
                        placeholder: "Cari aktor, aksi, atau entitas...",
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
                  createVNode("div", { class: "px-6 py-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800" }, [
                    createVNode("span", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest" }, [
                      createTextVNode(" Total Aktivitas: "),
                      createVNode("span", { class: "text-rose-500 ml-1" }, toDisplayString(__props.histories.total), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" }, [
                  createVNode("div", { class: "overflow-x-auto custom-scrollbar" }, [
                    createVNode("table", { class: "w-full text-left border-collapse min-w-[1000px] lg:min-w-full" }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" }, [
                          createVNode("th", { class: "p-6 md:p-8 pl-8 text-center" }, "No"),
                          createVNode("th", {
                            onClick: ($event) => handleSort("created_at"),
                            class: "p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createTextVNode(" Waktu "),
                              createVNode("div", { class: "flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-up",
                                  class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "created_at" && __props.filters.direction === "asc" }, "-mb-1"]
                                }, null, 8, ["class"]),
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-down",
                                  class: { "text-rose-500 opacity-100": __props.filters.sort_field === "created_at" && __props.filters.direction === "desc" }
                                }, null, 8, ["class"])
                              ])
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", { class: "p-6 md:p-8" }, "Aktor (User)"),
                          createVNode("th", {
                            onClick: ($event) => handleSort("action"),
                            class: "p-6 md:p-8 cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createTextVNode(" Aksi "),
                              createVNode("div", { class: "flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-up",
                                  class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "action" && __props.filters.direction === "asc" }, "-mb-1"]
                                }, null, 8, ["class"]),
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-down",
                                  class: { "text-rose-500 opacity-100": __props.filters.sort_field === "action" && __props.filters.direction === "desc" }
                                }, null, 8, ["class"])
                              ])
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", { class: "p-6 md:p-8" }, "Entitas Terkait"),
                          createVNode("th", { class: "p-6 md:p-8 text-center" }, "Detail")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-slate-50 dark:divide-slate-800/20" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.histories.data, (log) => {
                          return openBlock(), createBlock("tr", {
                            key: log.id,
                            class: "group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300"
                          }, [
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("span", { class: "font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" }, toDisplayString(__props.histories.from + __props.histories.data.indexOf(log)), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pl-8 text-[10px] font-bold text-slate-400 font-mono whitespace-nowrap" }, toDisplayString(formatDate(log.created_at)), 1),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "flex items-center gap-3" }, [
                                createVNode("div", { class: "w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-[10px] text-slate-400 border border-slate-200 dark:border-slate-700" }, toDisplayString(log.user?.name?.substring(0, 2).toUpperCase() || "?"), 1),
                                createVNode("div", { class: "flex flex-col" }, [
                                  createVNode("span", { class: "font-bold text-slate-700 dark:text-slate-200 text-xs leading-tight" }, toDisplayString(log.user?.name || "Unknown"), 1),
                                  createVNode("span", { class: "text-[9px] text-slate-400 uppercase tracking-tighter" }, toDisplayString(log.user?.role || "-"), 1)
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("span", {
                                class: ["px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border shadow-sm", getActionBadge(log.action)]
                              }, toDisplayString(log.action.replace("_", " ")), 3)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "text-xs font-bold text-slate-600 dark:text-slate-400" }, toDisplayString(formatEntityName(log.historable_type)), 1),
                              createVNode("div", { class: "text-[9px] text-slate-400 tracking-tighter mt-0.5" }, [
                                createTextVNode(" ID: "),
                                createVNode("span", { class: "font-mono text-rose-500" }, "#" + toDisplayString(log.historable_id), 1),
                                log.stage ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "mx-1"
                                }, "•")) : createCommentVNode("", true),
                                log.stage ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(log.stage), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("td", { class: "flex items-center justify-center p-6 md:p-8 text-center" }, [
                              createVNode("button", {
                                onClick: ($event) => openDetail(log),
                                class: "w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95"
                              }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-eye",
                                  class: "text-[10px]"
                                })
                              ], 8, ["onClick"])
                            ])
                          ]);
                        }), 128)),
                        __props.histories.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                          createVNode("td", {
                            colspan: "5",
                            class: "p-12 text-center"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center opacity-50" }, [
                              createVNode(_component_icon, {
                                icon: "fa-solid fa-clock-rotate-left",
                                class: "text-4xl text-slate-300 dark:text-slate-600 mb-4"
                              }),
                              createVNode("p", { class: "text-xs font-black text-slate-400 uppercase tracking-widest italic" }, " Belum ada log aktivitas terekam")
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" }, [
                    createVNode("div", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" }, " Data " + toDisplayString(__props.histories.from) + " - " + toDisplayString(__props.histories.to) + " dari total " + toDisplayString(__props.histories.total), 1),
                    createVNode("div", { class: "flex flex-wrap justify-center gap-1.5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.histories.links, (link, k) => {
                        return openBlock(), createBlock(Fragment, { key: k }, [
                          link.url ? (openBlock(), createBlock(unref(Link), {
                            key: 0,
                            href: link.url,
                            class: [
                              "px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all cursor-pointer",
                              link.active ? "bg-slate-900 dark:bg-rose-600 text-white border-slate-900 dark:border-rose-600 shadow-lg shadow-slate-900/20" : "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:text-rose-500"
                            ],
                            innerHTML: link.label
                          }, null, 8, ["href", "class", "innerHTML"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: [
                              "px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all opacity-30 cursor-not-allowed",
                              "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800"
                            ],
                            innerHTML: link.label
                          }, null, 8, ["innerHTML"]))
                        ], 64);
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
                  onClick: ($event) => showModal.value = false
                }, null, 8, ["onClick"]),
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[85vh] border border-white/10" }, [
                  createVNode("div", { class: "p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" }, " Detail Perubahan Data"),
                      createVNode("p", { class: "text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" }, toDisplayString(selectedLog.value.action) + " • " + toDisplayString(formatDate(selectedLog.value.created_at)), 1)
                    ]),
                    createVNode("button", {
                      onClick: ($event) => showModal.value = false,
                      class: "w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg"
                    }, "×", 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-slate-900 custom-scrollbar" }, [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "flex items-center gap-2 text-rose-600 dark:text-rose-500" }, [
                        createVNode(_component_icon, { icon: "fa-solid fa-file-circle-minus" }),
                        createVNode("h4", { class: "text-[10px] font-black uppercase tracking-widest" }, "Data Sebelumnya (Old)")
                      ]),
                      createVNode("div", { class: "bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 font-mono text-[11px] overflow-x-auto shadow-inner h-full max-h-[400px] custom-scrollbar" }, [
                        selectedLog.value.old_values ? (openBlock(), createBlock("pre", {
                          key: 0,
                          class: "text-slate-600 dark:text-slate-400"
                        }, toDisplayString(JSON.stringify(selectedLog.value.old_values, null, 2)), 1)) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-slate-400 italic text-[10px] font-bold uppercase tracking-wider py-10 text-center"
                        }, " Tidak ada data sebelumnya (Record Baru)"))
                      ])
                    ]),
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "flex items-center gap-2 text-emerald-600 dark:text-emerald-500" }, [
                        createVNode(_component_icon, { icon: "fa-solid fa-file-circle-plus" }),
                        createVNode("h4", { class: "text-[10px] font-black uppercase tracking-widest" }, "Data Sesudahnya (New)")
                      ]),
                      createVNode("div", { class: "bg-emerald-50/30 dark:bg-emerald-900/10 rounded-2xl p-4 border border-emerald-100 dark:border-emerald-500/20 font-mono text-[11px] overflow-x-auto shadow-inner h-full max-h-[400px] custom-scrollbar ring-2 ring-emerald-500/10" }, [
                        selectedLog.value.new_values ? (openBlock(), createBlock("pre", {
                          key: 0,
                          class: "text-slate-700 dark:text-slate-200 font-bold"
                        }, toDisplayString(JSON.stringify(selectedLog.value.new_values, null, 2)), 1)) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-rose-500 italic text-[10px] font-bold uppercase tracking-wider py-10 text-center"
                        }, " Data Telah Dihapus Permanen"))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "p-6 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 text-right" }, [
                    createVNode("button", {
                      onClick: ($event) => showModal.value = false,
                      class: "px-8 py-3 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                    }, " Tutup Detail ", 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/History/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-141b67f3"]]);
export {
  Index as default
};

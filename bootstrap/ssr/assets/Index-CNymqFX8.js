import { ref, watch, resolveComponent, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withDirectives, vModelText, vModelSelect, openBlock, Fragment, renderList, toDisplayString, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { router, useForm, Link, usePage } from "@inertiajs/vue3";
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
    standard: Object,
    // Master Standard Parent
    indicators: Object,
    // Paginated indicators
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    const perPage = ref(props.filters.per_page || 10);
    watch(search, debounce((value) => {
      router.get(route("admin.standards.indicators.index", props.standard.id), { search: value, per_page: perPage.value }, {
        preserveState: true,
        replace: true
      });
    }, 500));
    watch(perPage, (value) => {
      router.get(route("admin.standards.indicators.index", props.standard.id), { search: search.value, per_page: value }, {
        preserveState: true,
        replace: true
      });
    });
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
          preserveScroll: true,
          onError: () => {
            usePage().props.flash.toastr = {
              type: "error",
              content: "Terdapat kesalahan validasi, mohon cek kembali form anda.",
              position: "top-right"
            };
          }
        });
      } else {
        form.post(route("admin.standards.indicators.store", props.standard.id), {
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
      if (confirm("Hapus indikator master ini? Perubahan ini tidak akan mempengaruhi penugasan yang sudah berjalan (snapshot).")) {
        router.delete(route("admin.standards.indicators.destroy", {
          standard: props.standard.id,
          indicator: id
        }));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
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
            _push2(`<div class="flex items-center gap-2 mt-1" data-v-8aa7cb1f${_scopeId}><span class="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider" data-v-8aa7cb1f${_scopeId}>Standar:</span><span class="font-black text-rose-600 dark:text-rose-500 text-sm uppercase tracking-tight" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(__props.standard.name)}</span><span class="text-slate-300 dark:text-slate-600 mx-1" data-v-8aa7cb1f${_scopeId}>|</span><span class="${ssrRenderClass([
              "px-2 py-0.5 rounded text-[9px] font-black uppercase border",
              __props.standard.target_type === "prodi" ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 border-indigo-100 dark:border-indigo-500/20" : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20"
            ])}" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(__props.standard.target_type === "prodi" ? "Program Studi" : "Fakultas")}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2 mt-1" }, [
                createVNode("span", { class: "text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider" }, "Standar:"),
                createVNode("span", { class: "font-black text-rose-600 dark:text-rose-500 text-sm uppercase tracking-tight" }, toDisplayString(__props.standard.name), 1),
                createVNode("span", { class: "text-slate-300 dark:text-slate-600 mx-1" }, "|"),
                createVNode("span", {
                  class: [
                    "px-2 py-0.5 rounded text-[9px] font-black uppercase border",
                    __props.standard.target_type === "prodi" ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 border-indigo-100 dark:border-indigo-500/20" : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20"
                  ]
                }, toDisplayString(__props.standard.target_type === "prodi" ? "Program Studi" : "Fakultas"), 3)
              ])
            ];
          }
        }),
        "action-buttons": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-3" data-v-8aa7cb1f${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.standards.index"),
              class: "inline-flex items-center px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all active:scale-95 shadow-sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_icon, {
                    icon: "fa-solid fa-chevron-left",
                    class: "mr-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` Kembali `);
                } else {
                  return [
                    createVNode(_component_icon, {
                      icon: "fa-solid fa-chevron-left",
                      class: "mr-2"
                    }),
                    createTextVNode(" Kembali ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10" data-v-8aa7cb1f${_scopeId}><span class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" data-v-8aa7cb1f${_scopeId}>+</span> Tambah Indikator </button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-3" }, [
                createVNode(unref(Link), {
                  href: _ctx.route("admin.standards.index"),
                  class: "inline-flex items-center px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all active:scale-95 shadow-sm"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_icon, {
                      icon: "fa-solid fa-chevron-left",
                      class: "mr-2"
                    }),
                    createTextVNode(" Kembali ")
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode("button", {
                  onClick: openCreateModal,
                  class: "group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10"
                }, [
                  createVNode("span", { class: "mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" }, "+"),
                  createTextVNode(" Tambah Indikator ")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-8aa7cb1f${_scopeId}><div class="flex flex-col lg:flex-row justify-between items-center gap-6" data-v-8aa7cb1f${_scopeId}><div class="flex items-stretch gap-3 w-full max-w-2xl" data-v-8aa7cb1f${_scopeId}><div class="relative flex-1 group" data-v-8aa7cb1f${_scopeId}><span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" data-v-8aa7cb1f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-magnifying-glass",
              class: "text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors"
            }, null, _parent2, _scopeId));
            _push2(`</span><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari kode atau pernyataan..." class="w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" data-v-8aa7cb1f${_scopeId}></div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300" data-v-8aa7cb1f${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2" data-v-8aa7cb1f${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none" data-v-8aa7cb1f${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-8aa7cb1f${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-8aa7cb1f${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-8aa7cb1f${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option><option${ssrRenderAttr("value", 100)} data-v-8aa7cb1f${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 100) : ssrLooseEqual(perPage.value, 100)) ? " selected" : ""}${_scopeId}>100</option></select></div></div><div class="flex items-center gap-3" data-v-8aa7cb1f${_scopeId}></div></div><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" data-v-8aa7cb1f${_scopeId}><div class="overflow-x-auto custom-scrollbar" data-v-8aa7cb1f${_scopeId}><table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full" data-v-8aa7cb1f${_scopeId}><thead data-v-8aa7cb1f${_scopeId}><tr class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" data-v-8aa7cb1f${_scopeId}><th class="p-6 md:p-8 pl-8 min-w-24" data-v-8aa7cb1f${_scopeId}>No</th><th class="p-6 md:p-8 pl-8 min-w-24" data-v-8aa7cb1f${_scopeId}>Kode</th><th class="p-6 md:p-8" data-v-8aa7cb1f${_scopeId}>Pernyataan Standar / Indikator</th><th class="p-6 md:p-8 text-center min-w-28" data-v-8aa7cb1f${_scopeId}>Target</th><th class="p-6 md:p-8 min-w-32" data-v-8aa7cb1f${_scopeId}>Bukti</th><th class="p-6 md:p-8 text-center min-w-24" data-v-8aa7cb1f${_scopeId}>Template</th><th class="p-6 md:p-8 text-center min-w-24" data-v-8aa7cb1f${_scopeId}>Wajib</th><th class="p-6 md:p-8 pr-8 text-center min-w-24" data-v-8aa7cb1f${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-8aa7cb1f${_scopeId}><!--[-->`);
            ssrRenderList(__props.indicators.data, (item) => {
              _push2(`<tr class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300 align-top" data-v-8aa7cb1f${_scopeId}><td class="p-6 md:p-8 pl-8" data-v-8aa7cb1f${_scopeId}><span class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(__props.indicators.from + __props.indicators.data.indexOf(item))}</span></td><td class="p-6 md:p-8 pl-8" data-v-8aa7cb1f${_scopeId}><span class="font-mono text-[10px] font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(item.code)}</span></td><td class="p-6 md:p-8" data-v-8aa7cb1f${_scopeId}><div class="text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed max-w-3xl" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(item.requirement)}</div></td><td class="p-6 md:p-8 text-center" data-v-8aa7cb1f${_scopeId}><span class="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tight" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(item.target || "-")}</span></td><td class="p-6 md:p-8" data-v-8aa7cb1f${_scopeId}><div class="text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed max-w-3xl" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(item.evidence_needed || "-")}</div></td><td class="p-6 md:p-8 text-center" data-v-8aa7cb1f${_scopeId}>`);
              if (item.template_path) {
                _push2(`<a${ssrRenderAttr("href", _ctx.route("admin.indicators.show-template", item.id))} target="_blank" class="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-blue-600 hover:text-blue-700 hover:underline" data-v-8aa7cb1f${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-file-arrow-down" }, null, _parent2, _scopeId));
                _push2(` Template </a>`);
              } else {
                _push2(`<span class="text-slate-300 text-xs" data-v-8aa7cb1f${_scopeId}>-</span>`);
              }
              _push2(`</td><td class="p-6 md:p-8 text-center" data-v-8aa7cb1f${_scopeId}><span class="${ssrRenderClass([
                "px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest border shadow-sm",
                item.is_evidence_required ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20" : "bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700"
              ])}" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(item.is_evidence_required ? "Ya" : "Opsional")}</span></td><td class="p-6 md:p-8 pr-8" data-v-8aa7cb1f${_scopeId}><div class="flex justify-center gap-2" data-v-8aa7cb1f${_scopeId}><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95" data-v-8aa7cb1f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-pencil",
                class: "text-[10px]"
              }, null, _parent2, _scopeId));
              _push2(`</button><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95" data-v-8aa7cb1f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-trash",
                class: "text-[10px]"
              }, null, _parent2, _scopeId));
              _push2(`</button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.indicators.data.length === 0) {
              _push2(`<tr data-v-8aa7cb1f${_scopeId}><td colspan="8" class="p-12 text-center" data-v-8aa7cb1f${_scopeId}><div class="flex flex-col items-center justify-center opacity-50" data-v-8aa7cb1f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-clipboard-list",
                class: "text-4xl text-slate-300 dark:text-slate-600 mb-4"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-xs font-black text-slate-400 uppercase tracking-widest italic" data-v-8aa7cb1f${_scopeId}> Belum ada indikator mutu</p></div></td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-8aa7cb1f${_scopeId}><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" data-v-8aa7cb1f${_scopeId}> Menampilkan ${ssrInterpolate(__props.indicators.from)} - ${ssrInterpolate(__props.indicators.to)} dari ${ssrInterpolate(__props.indicators.total)} indikator </div><div class="flex flex-wrap justify-center gap-1.5" data-v-8aa7cb1f${_scopeId}><!--[-->`);
            ssrRenderList(__props.indicators.links, (link, k) => {
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
                ])}" data-v-8aa7cb1f${_scopeId}>${link.label ?? ""}</span>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" data-v-8aa7cb1f${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" data-v-8aa7cb1f${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10 flex flex-col max-h-[85vh]" data-v-8aa7cb1f${_scopeId}><div class="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center shrink-0" data-v-8aa7cb1f${_scopeId}><div data-v-8aa7cb1f${_scopeId}><h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(editMode.value ? "Edit Indikator" : "Indikator Baru")}</h3><p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(__props.standard.name)}</p></div><button class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg" data-v-8aa7cb1f${_scopeId}>×</button></div><form class="p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1" data-v-8aa7cb1f${_scopeId}><div class="space-y-2" data-v-8aa7cb1f${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-8aa7cb1f${_scopeId}>Pernyataan Standar / Indikator</label><textarea name="requirement" rows="3" placeholder="Masukkan standar atau indikator mutu" class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" required data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(unref(form).requirement)}</textarea>`);
              if (unref(form).errors.requirement) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(unref(form).errors.requirement)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-8aa7cb1f${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-8aa7cb1f${_scopeId}>Target Kinerja</label><input name="target"${ssrRenderAttr("value", unref(form).target)} type="text" placeholder="Contoh: 100%, Ada, 3 Dokumen" class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-8aa7cb1f${_scopeId}>`);
              if (unref(form).errors.target) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(unref(form).errors.target)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-8aa7cb1f${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-8aa7cb1f${_scopeId}>Bukti yang Diperiksa</label><textarea name="evidence_needed" rows="2" placeholder="Contoh: Dokumen kurikulum, SK Kaprodi, dll" class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(unref(form).evidence_needed)}</textarea>`);
              if (unref(form).errors.evidence_needed) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(unref(form).errors.evidence_needed)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-8aa7cb1f${_scopeId}><div class="space-y-2" data-v-8aa7cb1f${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-8aa7cb1f${_scopeId}>Wajib Bukti?</label><select name="is_evidence_required" class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-8aa7cb1f${_scopeId}><option${ssrRenderAttr("value", 1)} data-v-8aa7cb1f${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_evidence_required) ? ssrLooseContain(unref(form).is_evidence_required, 1) : ssrLooseEqual(unref(form).is_evidence_required, 1)) ? " selected" : ""}${_scopeId}>Ya (Wajib Upload)</option><option${ssrRenderAttr("value", 0)} data-v-8aa7cb1f${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_evidence_required) ? ssrLooseContain(unref(form).is_evidence_required, 0) : ssrLooseEqual(unref(form).is_evidence_required, 0)) ? " selected" : ""}${_scopeId}>Tidak (Opsional)</option></select>`);
              if (unref(form).errors.is_evidence_required) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(unref(form).errors.is_evidence_required)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-8aa7cb1f${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-8aa7cb1f${_scopeId}>Upload Template (Opsional)</label><input name="template" type="file" accept=".pdf,.docx,.xlsx" class="block w-full text-[10px] text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-wider file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 cursor-pointer border border-slate-200 dark:border-slate-700 rounded-2xl p-1.5" data-v-8aa7cb1f${_scopeId}>`);
              if (unref(form).errors.template) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(unref(form).errors.template)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="pt-4" data-v-8aa7cb1f${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50" data-v-8aa7cb1f${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : editMode.value ? "Simpan Perubahan" : "Simpan Indikator")}</button></div></form></div></div>`);
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
                        placeholder: "Cari kode atau pernyataan...",
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
                          createVNode("th", { class: "p-6 md:p-8 pl-8 min-w-24" }, "No"),
                          createVNode("th", { class: "p-6 md:p-8 pl-8 min-w-24" }, "Kode"),
                          createVNode("th", { class: "p-6 md:p-8" }, "Pernyataan Standar / Indikator"),
                          createVNode("th", { class: "p-6 md:p-8 text-center min-w-28" }, "Target"),
                          createVNode("th", { class: "p-6 md:p-8 min-w-32" }, "Bukti"),
                          createVNode("th", { class: "p-6 md:p-8 text-center min-w-24" }, "Template"),
                          createVNode("th", { class: "p-6 md:p-8 text-center min-w-24" }, "Wajib"),
                          createVNode("th", { class: "p-6 md:p-8 pr-8 text-center min-w-24" }, "Aksi")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-slate-50 dark:divide-slate-800/20" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.indicators.data, (item) => {
                          return openBlock(), createBlock("tr", {
                            key: item.id,
                            class: "group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300 align-top"
                          }, [
                            createVNode("td", { class: "p-6 md:p-8 pl-8" }, [
                              createVNode("span", { class: "font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" }, toDisplayString(__props.indicators.from + __props.indicators.data.indexOf(item)), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pl-8" }, [
                              createVNode("span", { class: "font-mono text-[10px] font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" }, toDisplayString(item.code), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed max-w-3xl" }, toDisplayString(item.requirement), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("span", { class: "text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tight" }, toDisplayString(item.target || "-"), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed max-w-3xl" }, toDisplayString(item.evidence_needed || "-"), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              item.template_path ? (openBlock(), createBlock("a", {
                                key: 0,
                                href: _ctx.route("admin.indicators.show-template", item.id),
                                target: "_blank",
                                class: "inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-blue-600 hover:text-blue-700 hover:underline"
                              }, [
                                createVNode(_component_icon, { icon: "fa-solid fa-file-arrow-down" }),
                                createTextVNode(" Template ")
                              ], 8, ["href"])) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-slate-300 text-xs"
                              }, "-"))
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("span", {
                                class: [
                                  "px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest border shadow-sm",
                                  item.is_evidence_required ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20" : "bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700"
                                ]
                              }, toDisplayString(item.is_evidence_required ? "Ya" : "Opsional"), 3)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pr-8" }, [
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
                        __props.indicators.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                          createVNode("td", {
                            colspan: "8",
                            class: "p-12 text-center"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center opacity-50" }, [
                              createVNode(_component_icon, {
                                icon: "fa-solid fa-clipboard-list",
                                class: "text-4xl text-slate-300 dark:text-slate-600 mb-4"
                              }),
                              createVNode("p", { class: "text-xs font-black text-slate-400 uppercase tracking-widest italic" }, " Belum ada indikator mutu")
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" }, [
                    createVNode("div", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" }, " Menampilkan " + toDisplayString(__props.indicators.from) + " - " + toDisplayString(__props.indicators.to) + " dari " + toDisplayString(__props.indicators.total) + " indikator ", 1),
                    createVNode("div", { class: "flex flex-wrap justify-center gap-1.5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.indicators.links, (link, k) => {
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
                  onClick: closeModal
                }),
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10 flex flex-col max-h-[85vh]" }, [
                  createVNode("div", { class: "p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center shrink-0" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" }, toDisplayString(editMode.value ? "Edit Indikator" : "Indikator Baru"), 1),
                      createVNode("p", { class: "text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" }, toDisplayString(__props.standard.name), 1)
                    ]),
                    createVNode("button", {
                      onClick: closeModal,
                      class: "w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg"
                    }, "×")
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1"
                  }, [
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Pernyataan Standar / Indikator"),
                      withDirectives(createVNode("textarea", {
                        name: "requirement",
                        "onUpdate:modelValue": ($event) => unref(form).requirement = $event,
                        rows: "3",
                        placeholder: "Masukkan standar atau indikator mutu",
                        class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).requirement]
                      ]),
                      unref(form).errors.requirement ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-rose-500 font-bold ml-1"
                      }, toDisplayString(unref(form).errors.requirement), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Target Kinerja"),
                      withDirectives(createVNode("input", {
                        name: "target",
                        "onUpdate:modelValue": ($event) => unref(form).target = $event,
                        type: "text",
                        placeholder: "Contoh: 100%, Ada, 3 Dokumen",
                        class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).target]
                      ]),
                      unref(form).errors.target ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-rose-500 font-bold ml-1"
                      }, toDisplayString(unref(form).errors.target), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Bukti yang Diperiksa"),
                      withDirectives(createVNode("textarea", {
                        name: "evidence_needed",
                        "onUpdate:modelValue": ($event) => unref(form).evidence_needed = $event,
                        rows: "2",
                        placeholder: "Contoh: Dokumen kurikulum, SK Kaprodi, dll",
                        class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).evidence_needed]
                      ]),
                      unref(form).errors.evidence_needed ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-rose-500 font-bold ml-1"
                      }, toDisplayString(unref(form).errors.evidence_needed), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Wajib Bukti?"),
                        withDirectives(createVNode("select", {
                          name: "is_evidence_required",
                          "onUpdate:modelValue": ($event) => unref(form).is_evidence_required = $event,
                          class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
                        }, [
                          createVNode("option", { value: 1 }, "Ya (Wajib Upload)"),
                          createVNode("option", { value: 0 }, "Tidak (Opsional)")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).is_evidence_required]
                        ]),
                        unref(form).errors.is_evidence_required ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-rose-500 font-bold ml-1"
                        }, toDisplayString(unref(form).errors.is_evidence_required), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Upload Template (Opsional)"),
                        createVNode("input", {
                          name: "template",
                          type: "file",
                          onInput: ($event) => unref(form).template = $event.target.files[0],
                          accept: ".pdf,.docx,.xlsx",
                          class: "block w-full text-[10px] text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-wider file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 cursor-pointer border border-slate-200 dark:border-slate-700 rounded-2xl p-1.5"
                        }, null, 40, ["onInput"]),
                        unref(form).errors.template ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-rose-500 font-bold ml-1"
                        }, toDisplayString(unref(form).errors.template), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "pt-4" }, [
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(form).processing,
                        class: "w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
                      }, toDisplayString(unref(form).processing ? "Menyimpan..." : editMode.value ? "Simpan Perubahan" : "Simpan Indikator"), 9, ["disabled"])
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
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8aa7cb1f"]]);
export {
  Index as default
};

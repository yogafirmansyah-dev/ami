import { ref, watch, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, createBlock, createCommentVNode, withDirectives, vModelText, vModelSelect, openBlock, Fragment, renderList, toDisplayString, withModifiers, useSSRContext } from "vue";
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
    standards: Object,
    filters: Object,
    targetTypes: Array
    // [ {value: 'prodi', label: 'Program Studi'}, ... ]
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    const perPage = ref(props.filters.per_page || 10);
    watch(search, debounce((value) => {
      router.get(route("admin.standards.index"), { search: value, per_page: perPage.value }, {
        preserveState: true,
        replace: true
      });
    }, 500));
    watch(perPage, (value) => {
      router.get(route("admin.standards.index"), { search: search.value, per_page: value }, {
        preserveState: true,
        replace: true
      });
    });
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
        form.post(route("admin.standards.store"), {
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
      if (confirm("Menghapus standar akan menghapus seluruh indikator di dalamnya. Lanjutkan?")) {
        router.delete(route("admin.standards.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
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
            _push2(`<button class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10" data-v-0adbba24${_scopeId}><span class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" data-v-0adbba24${_scopeId}>+</span> Tambah Standar </button>`);
          } else {
            return [
              createVNode("button", {
                onClick: openCreateModal,
                class: "group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10"
              }, [
                createVNode("span", { class: "mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" }, "+"),
                createTextVNode(" Tambah Standar ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-0adbba24${_scopeId}><div class="flex flex-col lg:flex-row justify-between items-center gap-6" data-v-0adbba24${_scopeId}><div class="flex items-stretch gap-3 w-full max-w-2xl" data-v-0adbba24${_scopeId}><div class="relative flex-1 group" data-v-0adbba24${_scopeId}><span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" data-v-0adbba24${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-magnifying-glass",
              class: "text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors"
            }, null, _parent2, _scopeId));
            _push2(`</span><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama standar..." class="w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" data-v-0adbba24${_scopeId}></div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300" data-v-0adbba24${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2" data-v-0adbba24${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none" data-v-0adbba24${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-0adbba24${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-0adbba24${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-0adbba24${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option><option${ssrRenderAttr("value", 100)} data-v-0adbba24${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 100) : ssrLooseEqual(perPage.value, 100)) ? " selected" : ""}${_scopeId}>100</option></select></div></div><div class="flex items-center gap-3" data-v-0adbba24${_scopeId}></div></div><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" data-v-0adbba24${_scopeId}><div class="overflow-x-auto custom-scrollbar" data-v-0adbba24${_scopeId}><table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full" data-v-0adbba24${_scopeId}><thead data-v-0adbba24${_scopeId}><tr class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" data-v-0adbba24${_scopeId}><th class="p-6 md:p-8 w-24" data-v-0adbba24${_scopeId}>No</th><th class="p-6 md:p-8 pl-8" data-v-0adbba24${_scopeId}>Nama Standar Mutu</th><th class="p-6 md:p-8" data-v-0adbba24${_scopeId}>Target Unit</th><th class="p-6 md:p-8 text-center" data-v-0adbba24${_scopeId}>Jumlah Indikator</th><th class="p-6 md:p-8 pr-8 text-right" data-v-0adbba24${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-0adbba24${_scopeId}><!--[-->`);
            ssrRenderList(__props.standards.data, (item) => {
              _push2(`<tr class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300" data-v-0adbba24${_scopeId}><td class="p-6 md:p-8" data-v-0adbba24${_scopeId}><span class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" data-v-0adbba24${_scopeId}>${ssrInterpolate(__props.standards.from + __props.standards.data.indexOf(item))}</span></td><td class="p-6 md:p-8 pl-8" data-v-0adbba24${_scopeId}><div class="font-black text-slate-800 dark:text-slate-200 text-sm mb-1" data-v-0adbba24${_scopeId}>${ssrInterpolate(item.name)}</div><div class="text-[10px] font-bold text-rose-500/80 uppercase italic tracking-tighter flex items-center gap-1" data-v-0adbba24${_scopeId}> ID: #${ssrInterpolate(item.id)}</div></td><td class="p-6 md:p-8" data-v-0adbba24${_scopeId}><span class="${ssrRenderClass([
                "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border shadow-sm",
                item.target_type === "prodi" ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 border-indigo-100 dark:border-indigo-500/20" : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20"
              ])}" data-v-0adbba24${_scopeId}>${ssrInterpolate(item.target_type === "prodi" ? "Program Studi" : "Fakultas")}</span></td><td class="p-6 md:p-8 text-center" data-v-0adbba24${_scopeId}><div class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 font-black text-rose-500 shadow-inner border border-slate-200 dark:border-slate-700 text-xs" data-v-0adbba24${_scopeId}>${ssrInterpolate(item.indicators_count || 0)}</div></td><td class="p-6 md:p-8 pr-8" data-v-0adbba24${_scopeId}><div class="flex justify-end items-center gap-2" data-v-0adbba24${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.standards.indicators.index", item.id),
                class: "inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95 border border-emerald-500/20 hover:border-emerald-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-list-check" }, null, _parent3, _scopeId2));
                    _push3(` Indikator `);
                  } else {
                    return [
                      createVNode(_component_icon, { icon: "fa-solid fa-list-check" }),
                      createTextVNode(" Indikator ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95" data-v-0adbba24${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-pencil",
                class: "text-[10px]"
              }, null, _parent2, _scopeId));
              _push2(`</button><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95" data-v-0adbba24${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-trash",
                class: "text-[10px]"
              }, null, _parent2, _scopeId));
              _push2(`</button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.standards.data.length === 0) {
              _push2(`<tr data-v-0adbba24${_scopeId}><td colspan="4" class="p-12 text-center" data-v-0adbba24${_scopeId}><div class="flex flex-col items-center justify-center opacity-50" data-v-0adbba24${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-folder-open",
                class: "text-4xl text-slate-300 dark:text-slate-600 mb-4"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-xs font-black text-slate-400 uppercase tracking-widest italic" data-v-0adbba24${_scopeId}> Belum ada standar mutu yang dibuat</p></div></td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-0adbba24${_scopeId}><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" data-v-0adbba24${_scopeId}> Data ${ssrInterpolate(__props.standards.from)} - ${ssrInterpolate(__props.standards.to)} dari total ${ssrInterpolate(__props.standards.total)}</div><div class="flex flex-wrap justify-center gap-1.5" data-v-0adbba24${_scopeId}><!--[-->`);
            ssrRenderList(__props.standards.links, (link, k) => {
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
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" data-v-0adbba24${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" data-v-0adbba24${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10" data-v-0adbba24${_scopeId}><div class="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center" data-v-0adbba24${_scopeId}><div data-v-0adbba24${_scopeId}><h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" data-v-0adbba24${_scopeId}>${ssrInterpolate(editMode.value ? "Edit Standar" : "Standar Baru")}</h3><p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" data-v-0adbba24${_scopeId}> Manajemen Instrumen Mutu </p></div><button class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg" data-v-0adbba24${_scopeId}>×</button></div><form class="p-8 space-y-6" data-v-0adbba24${_scopeId}><div class="space-y-2" data-v-0adbba24${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-0adbba24${_scopeId}>Nama Standar</label><input name="name"${ssrRenderAttr("value", unref(form).name)} type="text" required placeholder="Contoh: Standar Pendidikan Tinggi 2026" class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm focus:shadow-md" data-v-0adbba24${_scopeId}>`);
              if (unref(form).errors.name) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-0adbba24${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-0adbba24${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-0adbba24${_scopeId}>Target Unit</label><select name="target_type" required class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-0adbba24${_scopeId}><option value="" disabled data-v-0adbba24${ssrIncludeBooleanAttr(Array.isArray(unref(form).target_type) ? ssrLooseContain(unref(form).target_type, "") : ssrLooseEqual(unref(form).target_type, "")) ? " selected" : ""}${_scopeId}>Pilih Level Unit Kerja</option><!--[-->`);
              ssrRenderList(__props.targetTypes, (type, index) => {
                _push2(`<option${ssrRenderAttr("value", type.value)} data-v-0adbba24${ssrIncludeBooleanAttr(Array.isArray(unref(form).target_type) ? ssrLooseContain(unref(form).target_type, type.value) : ssrLooseEqual(unref(form).target_type, type.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(type.label)}</option>`);
              });
              _push2(`<!--]--></select>`);
              if (unref(form).errors.target_type) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-0adbba24${_scopeId}>${ssrInterpolate(unref(form).errors.target_type)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-0adbba24${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-0adbba24${_scopeId}>Deskripsi</label><textarea name="description" required placeholder="Deskripsi singkat standar..." class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm min-h-[100px]" data-v-0adbba24${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
              if (unref(form).errors.description) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-0adbba24${_scopeId}>${ssrInterpolate(unref(form).errors.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="pt-4" data-v-0adbba24${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50" data-v-0adbba24${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : editMode.value ? "Simpan Perubahan" : "Buat Standar Baru")}</button></div></form></div></div>`);
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
                        placeholder: "Cari nama standar...",
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
                          createVNode("th", { class: "p-6 md:p-8 w-24" }, "No"),
                          createVNode("th", { class: "p-6 md:p-8 pl-8" }, "Nama Standar Mutu"),
                          createVNode("th", { class: "p-6 md:p-8" }, "Target Unit"),
                          createVNode("th", { class: "p-6 md:p-8 text-center" }, "Jumlah Indikator"),
                          createVNode("th", { class: "p-6 md:p-8 pr-8 text-right" }, "Aksi")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-slate-50 dark:divide-slate-800/20" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.standards.data, (item) => {
                          return openBlock(), createBlock("tr", {
                            key: item.id,
                            class: "group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300"
                          }, [
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("span", { class: "font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" }, toDisplayString(__props.standards.from + __props.standards.data.indexOf(item)), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pl-8" }, [
                              createVNode("div", { class: "font-black text-slate-800 dark:text-slate-200 text-sm mb-1" }, toDisplayString(item.name), 1),
                              createVNode("div", { class: "text-[10px] font-bold text-rose-500/80 uppercase italic tracking-tighter flex items-center gap-1" }, " ID: #" + toDisplayString(item.id), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("span", {
                                class: [
                                  "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border shadow-sm",
                                  item.target_type === "prodi" ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 border-indigo-100 dark:border-indigo-500/20" : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20"
                                ]
                              }, toDisplayString(item.target_type === "prodi" ? "Program Studi" : "Fakultas"), 3)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("div", { class: "inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 font-black text-rose-500 shadow-inner border border-slate-200 dark:border-slate-700 text-xs" }, toDisplayString(item.indicators_count || 0), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pr-8" }, [
                              createVNode("div", { class: "flex justify-end items-center gap-2" }, [
                                createVNode(unref(Link), {
                                  href: _ctx.route("admin.standards.indicators.index", item.id),
                                  class: "inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95 border border-emerald-500/20 hover:border-emerald-500"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_icon, { icon: "fa-solid fa-list-check" }),
                                    createTextVNode(" Indikator ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
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
                        __props.standards.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                          createVNode("td", {
                            colspan: "4",
                            class: "p-12 text-center"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center opacity-50" }, [
                              createVNode(_component_icon, {
                                icon: "fa-solid fa-folder-open",
                                class: "text-4xl text-slate-300 dark:text-slate-600 mb-4"
                              }),
                              createVNode("p", { class: "text-xs font-black text-slate-400 uppercase tracking-widest italic" }, " Belum ada standar mutu yang dibuat")
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" }, [
                    createVNode("div", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" }, " Data " + toDisplayString(__props.standards.from) + " - " + toDisplayString(__props.standards.to) + " dari total " + toDisplayString(__props.standards.total), 1),
                    createVNode("div", { class: "flex flex-wrap justify-center gap-1.5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.standards.links, (link, k) => {
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
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10" }, [
                  createVNode("div", { class: "p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" }, toDisplayString(editMode.value ? "Edit Standar" : "Standar Baru"), 1),
                      createVNode("p", { class: "text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" }, " Manajemen Instrumen Mutu ")
                    ]),
                    createVNode("button", {
                      onClick: closeModal,
                      class: "w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg"
                    }, "×")
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "p-8 space-y-6"
                  }, [
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Nama Standar"),
                      withDirectives(createVNode("input", {
                        name: "name",
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        type: "text",
                        required: "",
                        placeholder: "Contoh: Standar Pendidikan Tinggi 2026",
                        class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm focus:shadow-md"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).name]
                      ]),
                      unref(form).errors.name ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-rose-500 font-bold ml-1"
                      }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Target Unit"),
                      withDirectives(createVNode("select", {
                        name: "target_type",
                        "onUpdate:modelValue": ($event) => unref(form).target_type = $event,
                        required: "",
                        class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
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
                        class: "text-xs text-rose-500 font-bold ml-1"
                      }, toDisplayString(unref(form).errors.target_type), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Deskripsi"),
                      withDirectives(createVNode("textarea", {
                        name: "description",
                        "onUpdate:modelValue": ($event) => unref(form).description = $event,
                        required: "",
                        placeholder: "Deskripsi singkat standar...",
                        class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm min-h-[100px]"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).description]
                      ]),
                      unref(form).errors.description ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-rose-500 font-bold ml-1"
                      }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "pt-4" }, [
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(form).processing,
                        class: "w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
                      }, toDisplayString(unref(form).processing ? "Menyimpan..." : editMode.value ? "Simpan Perubahan" : "Buat Standar Baru"), 9, ["disabled"])
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
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0adbba24"]]);
export {
  Index as default
};

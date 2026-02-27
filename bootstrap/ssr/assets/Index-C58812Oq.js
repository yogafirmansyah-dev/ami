import { ref, watch, resolveComponent, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withDirectives, openBlock, vModelText, vModelSelect, createTextVNode, Fragment, renderList, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { router, useForm, Link, usePage } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-CbW7EXnn.js";
import debounce from "lodash/debounce.js";
import { T as TModal } from "./TModal-BluvIe0P.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vueuse/core";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./windowSizeCalculator-EVN4qZjG.js";
import "./TDropdown-BaNvbUUI.js";
import "./TAvatar-rvhW0AFR.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "vue3-keypress";
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
    const isSearching = ref(false);
    const search = ref(props.filters.search);
    const perPage = ref(props.filters.per_page || 10);
    watch(search, debounce((value) => {
      isSearching.value = true;
      router.get(route("admin.faculties.index"), { search: value, per_page: perPage.value }, {
        preserveState: true,
        replace: true,
        onFinish: () => isSearching.value = false
      });
    }, 500));
    watch(perPage, (value) => {
      router.get(route("admin.faculties.index"), { search: search.value, per_page: value }, {
        preserveState: true,
        replace: true
      });
    });
    const handleSort = (field) => {
      const currentSortField = props.filters.sort_field;
      const currentDirection = props.filters.direction || "asc";
      const nextDirection = currentSortField === field && currentDirection === "asc" ? "desc" : "asc";
      router.get(window.location.href, {
        ...props.filters,
        sort_field: field,
        direction: nextDirection
      }, {
        preserveState: true,
        replace: true
      });
    };
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
        form.post(route("admin.faculties.store"), {
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
    const showDeleteModal = ref(false);
    const itemToDelete = ref(null);
    const confirmDeleteAction = (id) => {
      itemToDelete.value = id;
      showDeleteModal.value = true;
    };
    const executeDelete = () => {
      if (itemToDelete.value) {
        router.delete(route("admin.faculties.destroy", itemToDelete.value), {
          preserveScroll: true,
          onSuccess: () => {
            showDeleteModal.value = false;
            itemToDelete.value = null;
          }
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
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
            _push2(`<span class="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider" data-v-c4be782e${_scopeId}>Manajemen unit kerja tingkat Fakultas / Dekanat</span>`);
          } else {
            return [
              createVNode("span", { class: "text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider" }, "Manajemen unit kerja tingkat Fakultas / Dekanat")
            ];
          }
        }),
        "action-buttons": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10" data-v-c4be782e${_scopeId}><span class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" data-v-c4be782e${_scopeId}>+</span> Tambah Fakultas </button>`);
          } else {
            return [
              createVNode("button", {
                onClick: openCreateModal,
                class: "group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10"
              }, [
                createVNode("span", { class: "mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" }, "+"),
                createTextVNode(" Tambah Fakultas ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-c4be782e${_scopeId}><div class="flex flex-col lg:flex-row justify-between items-center gap-6" data-v-c4be782e${_scopeId}><div class="flex items-stretch gap-3 w-full max-w-2xl" data-v-c4be782e${_scopeId}><div class="relative flex-1 group" data-v-c4be782e${_scopeId}><span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" data-v-c4be782e${_scopeId}>`);
            if (!isSearching.value) {
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-magnifying-glass",
                class: "text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="h-4 w-4 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" data-v-c4be782e${_scopeId}></div>`);
            }
            _push2(`</span><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama fakultas..." class="w-full pl-11 pr-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" data-v-c4be782e${_scopeId}>`);
            if (search.value) {
              _push2(`<button class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-rose-500 transition-colors" data-v-c4be782e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-times-circle",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300" data-v-c4be782e${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2" data-v-c4be782e${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none" data-v-c4be782e${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-c4be782e${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-c4be782e${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-c4be782e${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option><option${ssrRenderAttr("value", 100)} data-v-c4be782e${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 100) : ssrLooseEqual(perPage.value, 100)) ? " selected" : ""}${_scopeId}>100</option></select></div></div><div class="flex items-center gap-3" data-v-c4be782e${_scopeId}></div></div><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" data-v-c4be782e${_scopeId}><div class="overflow-x-auto custom-scrollbar" data-v-c4be782e${_scopeId}><table class="w-full text-left border-collapse min-w-[800px] lg:min-w-full" data-v-c4be782e${_scopeId}><thead data-v-c4be782e${_scopeId}><tr class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" data-v-c4be782e${_scopeId}><th class="p-6 md:p-8 text-center w-24" data-v-c4be782e${_scopeId}>No</th><th class="p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-c4be782e${_scopeId}><div class="flex items-center gap-2" data-v-c4be782e${_scopeId}> Nama Fakultas <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-c4be782e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "name" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "name" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-c4be782e${_scopeId}><div class="flex items-center justify-center gap-2" data-v-c4be782e${_scopeId}> Total Prodi <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-c4be782e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "prodis_count" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "prodis_count" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8 pr-8 text-center w-24" data-v-c4be782e${_scopeId}>Aksi</th></tr></thead>`);
            if (isSearching.value) {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-c4be782e${_scopeId}><!--[-->`);
              ssrRenderList(5, (i) => {
                _push2(`<tr class="animate-pulse bg-white/30 dark:bg-slate-900/10" data-v-c4be782e${_scopeId}><td class="p-6 md:p-8 text-center" data-v-c4be782e${_scopeId}><div class="h-6 w-8 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-md" data-v-c4be782e${_scopeId}></div></td><td class="p-6 md:p-8 pl-8" data-v-c4be782e${_scopeId}><div class="h-5 w-48 bg-slate-200 dark:bg-slate-700/50 rounded mt-1 mb-2" data-v-c4be782e${_scopeId}></div></td><td class="p-6 md:p-8 text-center" data-v-c4be782e${_scopeId}><div class="h-6 w-24 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-lg" data-v-c4be782e${_scopeId}></div></td><td class="p-6 md:p-8 text-center pr-8" data-v-c4be782e${_scopeId}><div class="flex justify-center gap-2" data-v-c4be782e${_scopeId}><div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl" data-v-c4be782e${_scopeId}></div><div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl" data-v-c4be782e${_scopeId}></div></div></td></tr>`);
              });
              _push2(`<!--]--></tbody>`);
            } else if (__props.faculties.data.length === 0) {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-c4be782e${_scopeId}><tr data-v-c4be782e${_scopeId}><td colspan="4" class="p-16 text-center" data-v-c4be782e${_scopeId}><div class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500" data-v-c4be782e${_scopeId}><div class="w-24 h-24 mb-6 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner" data-v-c4be782e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-building-columns",
                class: "text-4xl text-slate-300 dark:text-slate-600"
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest" data-v-c4be782e${_scopeId}> Belum Ada Fakultas</h3><p class="text-xs max-w-sm text-center leading-relaxed font-bold" data-v-c4be782e${_scopeId}> Sistem belum mencatat data fakultas apa pun atau pencarian Anda tidak memiliki kecocokan data. </p>`);
              if (search.value) {
                _push2(`<button class="mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm" data-v-c4be782e${_scopeId}> Bersihkan Pencarian </button>`);
              } else {
                _push2(`<button class="mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500" data-v-c4be782e${_scopeId}> Tambahkan Fakultas Baru </button>`);
              }
              _push2(`</div></td></tr></tbody>`);
            } else {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-c4be782e${_scopeId}><!--[-->`);
              ssrRenderList(__props.faculties.data, (item, index) => {
                _push2(`<tr class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300" data-v-c4be782e${_scopeId}><td class="p-6 md:p-8 text-center" data-v-c4be782e${_scopeId}><span class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" data-v-c4be782e${_scopeId}>${ssrInterpolate(__props.faculties.from + __props.faculties.data.indexOf(item))}</span></td><td class="p-6 md:p-8 pl-8" data-v-c4be782e${_scopeId}><div class="font-black text-slate-800 dark:text-slate-200 text-sm" data-v-c4be782e${_scopeId}>${ssrInterpolate(item.name)}</div></td><td class="p-6 md:p-8 text-center" data-v-c4be782e${_scopeId}><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors" data-v-c4be782e${_scopeId}><span class="text-xs font-black text-indigo-600 dark:text-indigo-400" data-v-c4be782e${_scopeId}>${ssrInterpolate(item.prodis_count || 0)}</span><span class="text-[9px] font-bold text-indigo-400 dark:text-indigo-500 uppercase tracking-wider" data-v-c4be782e${_scopeId}>Prodi</span></div></td><td class="p-6 md:p-8 pr-8" data-v-c4be782e${_scopeId}><div class="flex justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity" data-v-c4be782e${_scopeId}><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95" data-v-c4be782e${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-pencil",
                  class: "text-[10px]"
                }, null, _parent2, _scopeId));
                _push2(`</button><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95" data-v-c4be782e${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-trash",
                  class: "text-[10px]"
                }, null, _parent2, _scopeId));
                _push2(`</button></div></td></tr>`);
              });
              _push2(`<!--]--></tbody>`);
            }
            _push2(`</table></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-c4be782e${_scopeId}><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" data-v-c4be782e${_scopeId}> Data ${ssrInterpolate(__props.faculties.from)} - ${ssrInterpolate(__props.faculties.to)} dari total ${ssrInterpolate(__props.faculties.total)}</div><div class="flex flex-wrap justify-center gap-1.5" data-v-c4be782e${_scopeId}><!--[-->`);
            ssrRenderList(__props.faculties.links, (link, k) => {
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
                ])}" data-v-c4be782e${_scopeId}>${link.label ?? ""}</span>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" data-v-c4be782e${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" data-v-c4be782e${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10" data-v-c4be782e${_scopeId}><div class="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center" data-v-c4be782e${_scopeId}><div data-v-c4be782e${_scopeId}><h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" data-v-c4be782e${_scopeId}>${ssrInterpolate(editMode.value ? "Edit Fakultas" : "Fakultas Baru")}</h3><p class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1" data-v-c4be782e${_scopeId}> Manajemen Unit </p></div><button class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg" data-v-c4be782e${_scopeId}>×</button></div><form class="p-8 space-y-6" data-v-c4be782e${_scopeId}><div class="space-y-2" data-v-c4be782e${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-c4be782e${_scopeId}>Nama Fakultas</label><input${ssrRenderAttr("value", unref(form).name)} type="text" required placeholder="Masukkan nama fakultas (ex: Fakultas Teknik)" class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-c4be782e${_scopeId}>`);
              if (unref(form).errors.name) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-c4be782e${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="pt-4" data-v-c4be782e${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50" data-v-c4be782e${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : editMode.value ? "Simpan Perubahan" : "Simpan Data")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(TModal, {
              modelValue: showDeleteModal.value,
              "onUpdate:modelValue": ($event) => showDeleteModal.value = $event,
              radius: 5,
              closeButton: false
            }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center p-4" data-v-c4be782e${_scopeId2}><div class="w-20 h-20 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-500 mx-auto flex items-center justify-center mb-6 shadow-inner" data-v-c4be782e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon, {
                    icon: "fa-solid fa-trash-can",
                    class: "text-3xl animate-bounce"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><h3 class="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter italic" data-v-c4be782e${_scopeId2}> Konfirmasi Hapus</h3><p class="text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto" data-v-c4be782e${_scopeId2}> Tindakan ini akan menghapus data fakultas secara permanen. Menghapus Fakultas akan berdampak pada data Prodi di bawahnya. Apakah Anda yakin? </p><div class="flex justify-center gap-3" data-v-c4be782e${_scopeId2}><button class="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 rounded-xl transition active:scale-95" data-v-c4be782e${_scopeId2}> Batal </button><button class="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition shadow-lg shadow-rose-500/30 active:scale-95" data-v-c4be782e${_scopeId2}> Ya, Hapus </button></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center p-4" }, [
                      createVNode("div", { class: "w-20 h-20 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-500 mx-auto flex items-center justify-center mb-6 shadow-inner" }, [
                        createVNode(_component_icon, {
                          icon: "fa-solid fa-trash-can",
                          class: "text-3xl animate-bounce"
                        })
                      ]),
                      createVNode("h3", { class: "text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter italic" }, " Konfirmasi Hapus"),
                      createVNode("p", { class: "text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto" }, " Tindakan ini akan menghapus data fakultas secara permanen. Menghapus Fakultas akan berdampak pada data Prodi di bawahnya. Apakah Anda yakin? "),
                      createVNode("div", { class: "flex justify-center gap-3" }, [
                        createVNode("button", {
                          onClick: ($event) => showDeleteModal.value = false,
                          class: "px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 rounded-xl transition active:scale-95"
                        }, " Batal ", 8, ["onClick"]),
                        createVNode("button", {
                          onClick: executeDelete,
                          class: "px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition shadow-lg shadow-rose-500/30 active:scale-95"
                        }, " Ya, Hapus ")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "flex flex-col lg:flex-row justify-between items-center gap-6" }, [
                  createVNode("div", { class: "flex items-stretch gap-3 w-full max-w-2xl" }, [
                    createVNode("div", { class: "relative flex-1 group" }, [
                      createVNode("span", { class: "absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" }, [
                        !isSearching.value ? (openBlock(), createBlock(_component_icon, {
                          key: 0,
                          icon: "fa-solid fa-magnifying-glass",
                          class: "text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors"
                        })) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "h-4 w-4 border-2 border-rose-500 border-t-transparent rounded-full animate-spin"
                        }))
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => search.value = $event,
                        type: "text",
                        placeholder: "Cari nama fakultas...",
                        class: "w-full pl-11 pr-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, search.value]
                      ]),
                      search.value ? (openBlock(), createBlock("button", {
                        key: 0,
                        onClick: ($event) => search.value = "",
                        class: "absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-rose-500 transition-colors"
                      }, [
                        createVNode(_component_icon, {
                          icon: "fa-solid fa-times-circle",
                          class: "w-4 h-4"
                        })
                      ], 8, ["onClick"])) : createCommentVNode("", true)
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
                    createVNode("table", { class: "w-full text-left border-collapse min-w-[800px] lg:min-w-full" }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" }, [
                          createVNode("th", { class: "p-6 md:p-8 text-center w-24" }, "No"),
                          createVNode("th", {
                            onClick: ($event) => handleSort("name"),
                            class: "p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createTextVNode(" Nama Fakultas "),
                              createVNode("div", { class: "flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-up",
                                  class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "name" && __props.filters.direction === "asc" }, "-mb-1"]
                                }, null, 8, ["class"]),
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-down",
                                  class: { "text-rose-500 opacity-100": __props.filters.sort_field === "name" && __props.filters.direction === "desc" }
                                }, null, 8, ["class"])
                              ])
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", {
                            onClick: ($event) => handleSort("prodis_count"),
                            class: "p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                              createTextVNode(" Total Prodi "),
                              createVNode("div", { class: "flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-up",
                                  class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "prodis_count" && __props.filters.direction === "asc" }, "-mb-1"]
                                }, null, 8, ["class"]),
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-down",
                                  class: { "text-rose-500 opacity-100": __props.filters.sort_field === "prodis_count" && __props.filters.direction === "desc" }
                                }, null, 8, ["class"])
                              ])
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", { class: "p-6 md:p-8 pr-8 text-center w-24" }, "Aksi")
                        ])
                      ]),
                      isSearching.value ? (openBlock(), createBlock("tbody", {
                        key: 0,
                        class: "divide-y divide-slate-50 dark:divide-slate-800/20"
                      }, [
                        (openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
                          return createVNode("tr", {
                            key: "skeleton-" + i,
                            class: "animate-pulse bg-white/30 dark:bg-slate-900/10"
                          }, [
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("div", { class: "h-6 w-8 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-md" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pl-8" }, [
                              createVNode("div", { class: "h-5 w-48 bg-slate-200 dark:bg-slate-700/50 rounded mt-1 mb-2" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("div", { class: "h-6 w-24 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-lg" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-center pr-8" }, [
                              createVNode("div", { class: "flex justify-center gap-2" }, [
                                createVNode("div", { class: "h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl" }),
                                createVNode("div", { class: "h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl" })
                              ])
                            ])
                          ]);
                        }), 64))
                      ])) : __props.faculties.data.length === 0 ? (openBlock(), createBlock("tbody", {
                        key: 1,
                        class: "divide-y divide-slate-50 dark:divide-slate-800/20"
                      }, [
                        createVNode("tr", null, [
                          createVNode("td", {
                            colspan: "4",
                            class: "p-16 text-center"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center text-slate-400 dark:text-slate-500" }, [
                              createVNode("div", { class: "w-24 h-24 mb-6 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-building-columns",
                                  class: "text-4xl text-slate-300 dark:text-slate-600"
                                })
                              ]),
                              createVNode("h3", { class: "text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest" }, " Belum Ada Fakultas"),
                              createVNode("p", { class: "text-xs max-w-sm text-center leading-relaxed font-bold" }, " Sistem belum mencatat data fakultas apa pun atau pencarian Anda tidak memiliki kecocokan data. "),
                              search.value ? (openBlock(), createBlock("button", {
                                key: 0,
                                onClick: ($event) => search.value = "",
                                class: "mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm"
                              }, " Bersihkan Pencarian ", 8, ["onClick"])) : (openBlock(), createBlock("button", {
                                key: 1,
                                onClick: openCreateModal,
                                class: "mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500"
                              }, " Tambahkan Fakultas Baru "))
                            ])
                          ])
                        ])
                      ])) : (openBlock(), createBlock("tbody", {
                        key: 2,
                        class: "divide-y divide-slate-50 dark:divide-slate-800/20"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.faculties.data, (item, index) => {
                          return openBlock(), createBlock("tr", {
                            key: item.id,
                            class: "group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300"
                          }, [
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("span", { class: "font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" }, toDisplayString(__props.faculties.from + __props.faculties.data.indexOf(item)), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pl-8" }, [
                              createVNode("div", { class: "font-black text-slate-800 dark:text-slate-200 text-sm" }, toDisplayString(item.name), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("div", { class: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors" }, [
                                createVNode("span", { class: "text-xs font-black text-indigo-600 dark:text-indigo-400" }, toDisplayString(item.prodis_count || 0), 1),
                                createVNode("span", { class: "text-[9px] font-bold text-indigo-400 dark:text-indigo-500 uppercase tracking-wider" }, "Prodi")
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pr-8" }, [
                              createVNode("div", { class: "flex justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity" }, [
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
                                  onClick: ($event) => confirmDeleteAction(item.id),
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
                        }), 128))
                      ]))
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" }, [
                    createVNode("div", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" }, " Data " + toDisplayString(__props.faculties.from) + " - " + toDisplayString(__props.faculties.to) + " dari total " + toDisplayString(__props.faculties.total), 1),
                    createVNode("div", { class: "flex flex-wrap justify-center gap-1.5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.faculties.links, (link, k) => {
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
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10" }, [
                  createVNode("div", { class: "p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" }, toDisplayString(editMode.value ? "Edit Fakultas" : "Fakultas Baru"), 1),
                      createVNode("p", { class: "text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1" }, " Manajemen Unit ")
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
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Nama Fakultas"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        type: "text",
                        required: "",
                        placeholder: "Masukkan nama fakultas (ex: Fakultas Teknik)",
                        class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).name]
                      ]),
                      unref(form).errors.name ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-rose-500 font-bold ml-1"
                      }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "pt-4" }, [
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(form).processing,
                        class: "w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
                      }, toDisplayString(unref(form).processing ? "Menyimpan..." : editMode.value ? "Simpan Perubahan" : "Simpan Data"), 9, ["disabled"])
                    ])
                  ], 32)
                ])
              ])) : createCommentVNode("", true),
              createVNode(TModal, {
                modelValue: showDeleteModal.value,
                "onUpdate:modelValue": ($event) => showDeleteModal.value = $event,
                radius: 5,
                closeButton: false
              }, {
                content: withCtx(() => [
                  createVNode("div", { class: "text-center p-4" }, [
                    createVNode("div", { class: "w-20 h-20 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-500 mx-auto flex items-center justify-center mb-6 shadow-inner" }, [
                      createVNode(_component_icon, {
                        icon: "fa-solid fa-trash-can",
                        class: "text-3xl animate-bounce"
                      })
                    ]),
                    createVNode("h3", { class: "text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter italic" }, " Konfirmasi Hapus"),
                    createVNode("p", { class: "text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto" }, " Tindakan ini akan menghapus data fakultas secara permanen. Menghapus Fakultas akan berdampak pada data Prodi di bawahnya. Apakah Anda yakin? "),
                    createVNode("div", { class: "flex justify-center gap-3" }, [
                      createVNode("button", {
                        onClick: ($event) => showDeleteModal.value = false,
                        class: "px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 rounded-xl transition active:scale-95"
                      }, " Batal ", 8, ["onClick"]),
                      createVNode("button", {
                        onClick: executeDelete,
                        class: "px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition shadow-lg shadow-rose-500/30 active:scale-95"
                      }, " Ya, Hapus ")
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4be782e"]]);
export {
  Index as default
};

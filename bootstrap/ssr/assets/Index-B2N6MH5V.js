import { ref, watch, computed, resolveComponent, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withDirectives, openBlock, vModelText, vModelSelect, createTextVNode, Fragment, renderList, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { router, useForm, Link, usePage } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-CbW7EXnn.js";
import debounce from "lodash/debounce.js";
import { T as TModal } from "./TModal-BluvIe0P.js";
import { T as TInputSelect } from "./TInputSelect-BY60CBa7.js";
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
import "./TInputText-CyR_XUuU.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    documents: Object,
    filters: Object
    // Adding filters prop
  },
  setup(__props) {
    const props = __props;
    const isSearching = ref(false);
    const search = ref(props.filters?.search || "");
    const perPage = ref(props.filters?.per_page || 10);
    watch(search, debounce((value) => {
      isSearching.value = true;
      router.get(route("admin.library.index"), { search: value, per_page: perPage.value }, {
        preserveState: true,
        replace: true,
        onFinish: () => isSearching.value = false
      });
    }, 500));
    watch(perPage, (value) => {
      router.get(route("admin.library.index"), { search: search.value, per_page: value }, { preserveState: true, replace: true });
    });
    const handleSort = (field) => {
      const currentSort = props.filters.sort_field;
      const currentDir = props.filters.direction || "asc";
      const nextDir = currentSort === field && currentDir === "asc" ? "desc" : "asc";
      router.get(window.location.href, { ...props.filters, sort_field: field, direction: nextDir }, { preserveState: true, replace: true });
    };
    const showModal = ref(false);
    const isEditing = ref(false);
    const editId = ref(null);
    const form = useForm({
      name: "",
      type: "public",
      file: null
    });
    const openCreate = () => {
      isEditing.value = false;
      editId.value = null;
      form.reset();
      form.clearErrors();
      showModal.value = true;
    };
    const openEdit = (doc) => {
      isEditing.value = true;
      editId.value = doc.id;
      form.name = doc.name;
      form.type = doc.type;
      form.file = null;
      form.clearErrors();
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
      form.reset();
      form.clearErrors();
    };
    const submit = () => {
      form.transform((data) => data);
      if (isEditing.value) {
        form.transform((data) => ({
          ...data,
          _method: "PATCH"
        })).post(route("admin.library.update", editId.value), {
          forceFormData: true,
          onSuccess: () => closeModal(),
          onError: () => {
            usePage().props.flash.toastr = {
              type: "error",
              content: "Gagal menyimpan dokumen. Mohon cek kembali inputan anda.",
              position: "top-right"
            };
          }
        });
      } else {
        form.post(route("admin.library.store"), {
          forceFormData: true,
          onSuccess: () => closeModal(),
          onError: () => {
            usePage().props.flash.toastr = {
              type: "error",
              content: "Gagal mengupload dokumen. Mohon cek kembali inputan anda.",
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
        router.delete(route("admin.library.destroy", itemToDelete.value), {
          preserveScroll: true,
          onSuccess: () => {
            showDeleteModal.value = false;
            itemToDelete.value = null;
          }
        });
      }
    };
    const buttonLabel = computed(() => {
      if (form.processing) return "Sedang Memproses...";
      return isEditing.value ? "Simpan Perubahan" : "Upload Dokumen";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Kelola Library" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Manajemen Pusat Dokumen`);
          } else {
            return [
              createTextVNode("Manajemen Pusat Dokumen")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Repository dokumen standar dan referensi audit`);
          } else {
            return [
              createTextVNode("Repository dokumen standar dan referensi audit")
            ];
          }
        }),
        "action-buttons": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10" data-v-fd22c28d${_scopeId}><span class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" data-v-fd22c28d${_scopeId}>+</span> Tambah Dokumen </button>`);
          } else {
            return [
              createVNode("button", {
                onClick: openCreate,
                class: "group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10"
              }, [
                createVNode("span", { class: "mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" }, "+"),
                createTextVNode(" Tambah Dokumen ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-fd22c28d${_scopeId}><div class="flex flex-col lg:flex-row justify-between items-center gap-6" data-v-fd22c28d${_scopeId}><div class="flex items-stretch gap-3 w-full max-w-2xl" data-v-fd22c28d${_scopeId}><div class="relative flex-1 group" data-v-fd22c28d${_scopeId}><span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" data-v-fd22c28d${_scopeId}>`);
            if (!isSearching.value) {
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-magnifying-glass",
                class: "text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="h-4 w-4 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" data-v-fd22c28d${_scopeId}></div>`);
            }
            _push2(`</span><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama dokumen..." class="w-full pl-11 pr-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" data-v-fd22c28d${_scopeId}>`);
            if (search.value) {
              _push2(`<button class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-rose-500 transition-colors" data-v-fd22c28d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-times-circle",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300" data-v-fd22c28d${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2" data-v-fd22c28d${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none" data-v-fd22c28d${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-fd22c28d${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-fd22c28d${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-fd22c28d${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option><option${ssrRenderAttr("value", 100)} data-v-fd22c28d${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 100) : ssrLooseEqual(perPage.value, 100)) ? " selected" : ""}${_scopeId}>100</option></select></div></div><div class="flex items-center gap-3" data-v-fd22c28d${_scopeId}></div></div><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" data-v-fd22c28d${_scopeId}><div class="overflow-x-auto custom-scrollbar" data-v-fd22c28d${_scopeId}><table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full" data-v-fd22c28d${_scopeId}><thead data-v-fd22c28d${_scopeId}><tr class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" data-v-fd22c28d${_scopeId}><th class="p-6 md:p-8 pl-8 text-center" data-v-fd22c28d${_scopeId}>No</th><th class="p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-fd22c28d${_scopeId}><div class="flex items-center gap-2" data-v-fd22c28d${_scopeId}> Nama Dokumen <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-fd22c28d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "name" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "name" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-fd22c28d${_scopeId}><div class="flex items-center justify-center gap-2" data-v-fd22c28d${_scopeId}> Tipe Akses <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-fd22c28d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "type" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "type" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8" data-v-fd22c28d${_scopeId}>Diupload Oleh</th><th class="p-6 md:p-8 text-center" data-v-fd22c28d${_scopeId}>Aksi</th></tr></thead>`);
            if (isSearching.value) {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-fd22c28d${_scopeId}><!--[-->`);
              ssrRenderList(5, (i) => {
                _push2(`<tr class="animate-pulse bg-white/30 dark:bg-slate-900/10" data-v-fd22c28d${_scopeId}><td class="p-6 md:p-8 pl-8 text-center" data-v-fd22c28d${_scopeId}><div class="h-6 w-8 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-md" data-v-fd22c28d${_scopeId}></div></td><td class="p-6 md:p-8 pl-8" data-v-fd22c28d${_scopeId}><div class="h-4 w-48 bg-slate-200 dark:bg-slate-700/50 rounded mb-2" data-v-fd22c28d${_scopeId}></div><div class="flex gap-2" data-v-fd22c28d${_scopeId}><div class="h-3 w-8 bg-slate-200 dark:bg-slate-700/50 rounded" data-v-fd22c28d${_scopeId}></div><div class="h-3 w-12 bg-slate-200 dark:bg-slate-700/50 rounded" data-v-fd22c28d${_scopeId}></div></div></td><td class="p-6 md:p-8 text-center" data-v-fd22c28d${_scopeId}><div class="h-6 w-20 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-lg" data-v-fd22c28d${_scopeId}></div></td><td class="p-6 md:p-8" data-v-fd22c28d${_scopeId}><div class="flex items-center gap-2" data-v-fd22c28d${_scopeId}><div class="h-6 w-6 bg-slate-200 dark:bg-slate-700/50 rounded-full" data-v-fd22c28d${_scopeId}></div><div class="h-4 w-32 bg-slate-200 dark:bg-slate-700/50 rounded" data-v-fd22c28d${_scopeId}></div></div></td><td class="p-6 md:p-8 text-center" data-v-fd22c28d${_scopeId}><div class="flex justify-center gap-2" data-v-fd22c28d${_scopeId}><div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl" data-v-fd22c28d${_scopeId}></div><div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl" data-v-fd22c28d${_scopeId}></div><div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl" data-v-fd22c28d${_scopeId}></div></div></td></tr>`);
              });
              _push2(`<!--]--></tbody>`);
            } else if (__props.documents.data.length === 0) {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-fd22c28d${_scopeId}><tr data-v-fd22c28d${_scopeId}><td colspan="5" class="p-16 text-center" data-v-fd22c28d${_scopeId}><div class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500" data-v-fd22c28d${_scopeId}><div class="w-24 h-24 mb-6 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner" data-v-fd22c28d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-box-open",
                class: "text-4xl text-slate-300 dark:text-slate-600"
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest" data-v-fd22c28d${_scopeId}> Belum Ada Dokumen</h3><p class="text-xs max-w-sm text-center leading-relaxed font-bold" data-v-fd22c28d${_scopeId}> Library masih kosong atau pencarian Anda tidak memiliki kecocokan data dokumen. </p>`);
              if (search.value) {
                _push2(`<button class="mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm" data-v-fd22c28d${_scopeId}> Bersihkan Pencarian </button>`);
              } else {
                _push2(`<button class="mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500" data-v-fd22c28d${_scopeId}> Upload Dokumen Baru </button>`);
              }
              _push2(`</div></td></tr></tbody>`);
            } else {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-fd22c28d${_scopeId}><!--[-->`);
              ssrRenderList(__props.documents.data, (doc) => {
                _push2(`<tr class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300" data-v-fd22c28d${_scopeId}><td class="p-6 md:p-8 pl-8 text-center" data-v-fd22c28d${_scopeId}><span class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" data-v-fd22c28d${_scopeId}>${ssrInterpolate(__props.documents.from + __props.documents.data.indexOf(doc))}</span></td><td class="p-6 md:p-8 pl-8" data-v-fd22c28d${_scopeId}><div class="flex flex-col" data-v-fd22c28d${_scopeId}><div class="font-black text-slate-800 dark:text-slate-200 uppercase text-xs leading-none" data-v-fd22c28d${_scopeId}>${ssrInterpolate(doc.name)}</div><div class="flex items-center gap-2 mt-2" data-v-fd22c28d${_scopeId}><span class="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[8px] font-bold text-slate-500 uppercase tracking-tighter" data-v-fd22c28d${_scopeId}>${ssrInterpolate(doc.extension)}</span><span class="text-[9px] text-slate-400 font-medium" data-v-fd22c28d${_scopeId}>${ssrInterpolate(doc.size_kb || 0)} KB </span></div></div></td><td class="p-6 md:p-8 text-center" data-v-fd22c28d${_scopeId}><span class="${ssrRenderClass([
                  "px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border shadow-sm",
                  doc.type === "public" ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20" : "bg-rose-50 dark:bg-rose-500/10 text-rose-600 border-rose-100 dark:border-rose-500/20"
                ])}" data-v-fd22c28d${_scopeId}>${ssrInterpolate(doc.type === "public" ? "Publik" : "Terbatas")}</span></td><td class="p-6 md:p-8" data-v-fd22c28d${_scopeId}><div class="flex items-center gap-2" data-v-fd22c28d${_scopeId}><div class="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-[9px] font-black text-indigo-500" data-v-fd22c28d${_scopeId}>${ssrInterpolate(doc.uploader?.name?.[0] || "?")}</div><span class="text-xs font-bold text-slate-600 dark:text-slate-400" data-v-fd22c28d${_scopeId}>${ssrInterpolate(doc.uploader?.name)}</span></div></td><td class="p-6 md:p-8" data-v-fd22c28d${_scopeId}><div class="flex justify-center gap-2" data-v-fd22c28d${_scopeId}><a${ssrRenderAttr("href", _ctx.route("library.download", doc.id))} class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-emerald-500 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-emerald-200 active:scale-95" title="Download" data-v-fd22c28d${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-download",
                  class: "text-[10px]"
                }, null, _parent2, _scopeId));
                _push2(`</a><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95" data-v-fd22c28d${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-pencil",
                  class: "text-[10px]"
                }, null, _parent2, _scopeId));
                _push2(`</button><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95" data-v-fd22c28d${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-trash",
                  class: "text-[10px]"
                }, null, _parent2, _scopeId));
                _push2(`</button></div></td></tr>`);
              });
              _push2(`<!--]--></tbody>`);
            }
            _push2(`</table></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-fd22c28d${_scopeId}><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" data-v-fd22c28d${_scopeId}> Data ${ssrInterpolate(__props.documents.from)} - ${ssrInterpolate(__props.documents.to)} dari total ${ssrInterpolate(__props.documents.total)}</div><div class="flex flex-wrap justify-center gap-1.5" data-v-fd22c28d${_scopeId}><!--[-->`);
            ssrRenderList(__props.documents.links, (link, k) => {
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
                ])}" data-v-fd22c28d${_scopeId}>${link.label ?? ""}</span>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" data-v-fd22c28d${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" data-v-fd22c28d${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10" data-v-fd22c28d${_scopeId}><div class="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center" data-v-fd22c28d${_scopeId}><div data-v-fd22c28d${_scopeId}><h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" data-v-fd22c28d${_scopeId}>${ssrInterpolate(isEditing.value ? "Edit Dokumen" : "Upload Dokumen")}</h3><p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" data-v-fd22c28d${_scopeId}> Manajemen File Library </p></div><button class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg" data-v-fd22c28d${_scopeId}>×</button></div><form class="p-8 space-y-6" data-v-fd22c28d${_scopeId}><div class="space-y-2" data-v-fd22c28d${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-fd22c28d${_scopeId}>Nama Dokumen</label><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Misal: Standar SPMI 2024" class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" required data-v-fd22c28d${_scopeId}>`);
              if (unref(form).errors.name) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-fd22c28d${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-fd22c28d${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-fd22c28d${_scopeId}>Tipe Akses</label>`);
              _push2(ssrRenderComponent(TInputSelect, {
                modelValue: unref(form).type,
                "onUpdate:modelValue": ($event) => unref(form).type = $event,
                options: [
                  { value: "public", label: "Semua User (Public)" },
                  { value: "auditor", label: "Khusus Auditor & Admin" }
                ],
                "options-value-key": "value",
                "options-label-key": "label",
                radius: 5,
                class: ["w-full", unref(form).errors.type ? "ring-2 ring-rose-500 rounded-xl" : ""]
              }, null, _parent2, _scopeId));
              if (unref(form).errors.type) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-fd22c28d${_scopeId}>${ssrInterpolate(unref(form).errors.type)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-fd22c28d${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-fd22c28d${_scopeId}>File Dokumen ${ssrInterpolate(isEditing.value ? "(Opsional)" : "")}</label><input type="file"${ssrIncludeBooleanAttr(!isEditing.value) ? " required" : ""} class="block w-full text-[10px] text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-wider file:bg-slate-100 dark:file:bg-slate-800 file:text-slate-700 dark:file:text-slate-300 hover:file:bg-rose-50 dark:hover:file:bg-rose-900/30 hover:file:text-rose-600 cursor-pointer border border-slate-200 dark:border-slate-800 rounded-2xl p-2 bg-white dark:bg-slate-900/50" data-v-fd22c28d${_scopeId}>`);
              if (unref(form).errors.file) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-fd22c28d${_scopeId}>${ssrInterpolate(unref(form).errors.file)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (unref(form).progress) {
                _push2(`<div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden" data-v-fd22c28d${_scopeId}><div class="bg-rose-500 h-full transition-all duration-300 ease-out" style="${ssrRenderStyle({ width: unref(form).progress.percentage + "%" })}" data-v-fd22c28d${_scopeId}></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="pt-4 border-t border-slate-100 dark:border-slate-800" data-v-fd22c28d${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50" data-v-fd22c28d${_scopeId}>${ssrInterpolate(buttonLabel.value)}</button></div></form></div></div>`);
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
                  _push3(`<div class="text-center p-4" data-v-fd22c28d${_scopeId2}><div class="w-20 h-20 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-500 mx-auto flex items-center justify-center mb-6 shadow-inner" data-v-fd22c28d${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon, {
                    icon: "fa-solid fa-trash-can",
                    class: "text-3xl animate-bounce"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><h3 class="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter italic" data-v-fd22c28d${_scopeId2}> Konfirmasi Hapus</h3><p class="text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto" data-v-fd22c28d${_scopeId2}> Tindakan ini akan menghapus dokumen library ini secara permanen. Lanjutkan penghapusan data ini? </p><div class="flex justify-center gap-3" data-v-fd22c28d${_scopeId2}><button class="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 rounded-xl transition active:scale-95" data-v-fd22c28d${_scopeId2}> Batal </button><button class="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition shadow-lg shadow-rose-500/30 active:scale-95" data-v-fd22c28d${_scopeId2}> Ya, Hapus </button></div></div>`);
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
                      createVNode("p", { class: "text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto" }, " Tindakan ini akan menghapus dokumen library ini secara permanen. Lanjutkan penghapusan data ini? "),
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
                        placeholder: "Cari nama dokumen...",
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
                    createVNode("table", { class: "w-full text-left border-collapse min-w-[1000px] lg:min-w-full" }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" }, [
                          createVNode("th", { class: "p-6 md:p-8 pl-8 text-center" }, "No"),
                          createVNode("th", {
                            onClick: ($event) => handleSort("name"),
                            class: "p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createTextVNode(" Nama Dokumen "),
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
                            onClick: ($event) => handleSort("type"),
                            class: "p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                              createTextVNode(" Tipe Akses "),
                              createVNode("div", { class: "flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-up",
                                  class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "type" && __props.filters.direction === "asc" }, "-mb-1"]
                                }, null, 8, ["class"]),
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-down",
                                  class: { "text-rose-500 opacity-100": __props.filters.sort_field === "type" && __props.filters.direction === "desc" }
                                }, null, 8, ["class"])
                              ])
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", { class: "p-6 md:p-8" }, "Diupload Oleh"),
                          createVNode("th", { class: "p-6 md:p-8 text-center" }, "Aksi")
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
                            createVNode("td", { class: "p-6 md:p-8 pl-8 text-center" }, [
                              createVNode("div", { class: "h-6 w-8 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-md" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pl-8" }, [
                              createVNode("div", { class: "h-4 w-48 bg-slate-200 dark:bg-slate-700/50 rounded mb-2" }),
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode("div", { class: "h-3 w-8 bg-slate-200 dark:bg-slate-700/50 rounded" }),
                                createVNode("div", { class: "h-3 w-12 bg-slate-200 dark:bg-slate-700/50 rounded" })
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("div", { class: "h-6 w-20 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-lg" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("div", { class: "h-6 w-6 bg-slate-200 dark:bg-slate-700/50 rounded-full" }),
                                createVNode("div", { class: "h-4 w-32 bg-slate-200 dark:bg-slate-700/50 rounded" })
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("div", { class: "flex justify-center gap-2" }, [
                                createVNode("div", { class: "h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl" }),
                                createVNode("div", { class: "h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl" }),
                                createVNode("div", { class: "h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl" })
                              ])
                            ])
                          ]);
                        }), 64))
                      ])) : __props.documents.data.length === 0 ? (openBlock(), createBlock("tbody", {
                        key: 1,
                        class: "divide-y divide-slate-50 dark:divide-slate-800/20"
                      }, [
                        createVNode("tr", null, [
                          createVNode("td", {
                            colspan: "5",
                            class: "p-16 text-center"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center text-slate-400 dark:text-slate-500" }, [
                              createVNode("div", { class: "w-24 h-24 mb-6 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-box-open",
                                  class: "text-4xl text-slate-300 dark:text-slate-600"
                                })
                              ]),
                              createVNode("h3", { class: "text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest" }, " Belum Ada Dokumen"),
                              createVNode("p", { class: "text-xs max-w-sm text-center leading-relaxed font-bold" }, " Library masih kosong atau pencarian Anda tidak memiliki kecocokan data dokumen. "),
                              search.value ? (openBlock(), createBlock("button", {
                                key: 0,
                                onClick: ($event) => search.value = "",
                                class: "mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm"
                              }, " Bersihkan Pencarian ", 8, ["onClick"])) : (openBlock(), createBlock("button", {
                                key: 1,
                                onClick: openCreate,
                                class: "mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500"
                              }, " Upload Dokumen Baru "))
                            ])
                          ])
                        ])
                      ])) : (openBlock(), createBlock("tbody", {
                        key: 2,
                        class: "divide-y divide-slate-50 dark:divide-slate-800/20"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.documents.data, (doc) => {
                          return openBlock(), createBlock("tr", {
                            key: doc.id,
                            class: "group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300"
                          }, [
                            createVNode("td", { class: "p-6 md:p-8 pl-8 text-center" }, [
                              createVNode("span", { class: "font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" }, toDisplayString(__props.documents.from + __props.documents.data.indexOf(doc)), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pl-8" }, [
                              createVNode("div", { class: "flex flex-col" }, [
                                createVNode("div", { class: "font-black text-slate-800 dark:text-slate-200 uppercase text-xs leading-none" }, toDisplayString(doc.name), 1),
                                createVNode("div", { class: "flex items-center gap-2 mt-2" }, [
                                  createVNode("span", { class: "px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[8px] font-bold text-slate-500 uppercase tracking-tighter" }, toDisplayString(doc.extension), 1),
                                  createVNode("span", { class: "text-[9px] text-slate-400 font-medium" }, toDisplayString(doc.size_kb || 0) + " KB ", 1)
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("span", {
                                class: [
                                  "px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border shadow-sm",
                                  doc.type === "public" ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20" : "bg-rose-50 dark:bg-rose-500/10 text-rose-600 border-rose-100 dark:border-rose-500/20"
                                ]
                              }, toDisplayString(doc.type === "public" ? "Publik" : "Terbatas"), 3)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("div", { class: "w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-[9px] font-black text-indigo-500" }, toDisplayString(doc.uploader?.name?.[0] || "?"), 1),
                                createVNode("span", { class: "text-xs font-bold text-slate-600 dark:text-slate-400" }, toDisplayString(doc.uploader?.name), 1)
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "flex justify-center gap-2" }, [
                                createVNode("a", {
                                  href: _ctx.route("library.download", doc.id),
                                  class: "w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-emerald-500 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-emerald-200 active:scale-95",
                                  title: "Download"
                                }, [
                                  createVNode(_component_icon, {
                                    icon: "fa-solid fa-download",
                                    class: "text-[10px]"
                                  })
                                ], 8, ["href"]),
                                createVNode("button", {
                                  onClick: ($event) => openEdit(doc),
                                  class: "w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95"
                                }, [
                                  createVNode(_component_icon, {
                                    icon: "fa-solid fa-pencil",
                                    class: "text-[10px]"
                                  })
                                ], 8, ["onClick"]),
                                createVNode("button", {
                                  onClick: ($event) => confirmDeleteAction(doc.id),
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
                    createVNode("div", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" }, " Data " + toDisplayString(__props.documents.from) + " - " + toDisplayString(__props.documents.to) + " dari total " + toDisplayString(__props.documents.total), 1),
                    createVNode("div", { class: "flex flex-wrap justify-center gap-1.5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.documents.links, (link, k) => {
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
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10" }, [
                  createVNode("div", { class: "p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" }, toDisplayString(isEditing.value ? "Edit Dokumen" : "Upload Dokumen"), 1),
                      createVNode("p", { class: "text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" }, " Manajemen File Library ")
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
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Nama Dokumen"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        type: "text",
                        placeholder: "Misal: Standar SPMI 2024",
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
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Tipe Akses"),
                      createVNode(TInputSelect, {
                        modelValue: unref(form).type,
                        "onUpdate:modelValue": ($event) => unref(form).type = $event,
                        options: [
                          { value: "public", label: "Semua User (Public)" },
                          { value: "auditor", label: "Khusus Auditor & Admin" }
                        ],
                        "options-value-key": "value",
                        "options-label-key": "label",
                        radius: 5,
                        class: ["w-full", unref(form).errors.type ? "ring-2 ring-rose-500 rounded-xl" : ""]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      unref(form).errors.type ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-rose-500 font-bold ml-1"
                      }, toDisplayString(unref(form).errors.type), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "File Dokumen " + toDisplayString(isEditing.value ? "(Opsional)" : ""), 1),
                      createVNode("input", {
                        type: "file",
                        onInput: ($event) => unref(form).file = $event.target.files[0],
                        required: !isEditing.value,
                        class: "block w-full text-[10px] text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-wider file:bg-slate-100 dark:file:bg-slate-800 file:text-slate-700 dark:file:text-slate-300 hover:file:bg-rose-50 dark:hover:file:bg-rose-900/30 hover:file:text-rose-600 cursor-pointer border border-slate-200 dark:border-slate-800 rounded-2xl p-2 bg-white dark:bg-slate-900/50"
                      }, null, 40, ["onInput", "required"]),
                      unref(form).errors.file ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-rose-500 font-bold ml-1"
                      }, toDisplayString(unref(form).errors.file), 1)) : createCommentVNode("", true)
                    ]),
                    unref(form).progress ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden"
                    }, [
                      createVNode("div", {
                        class: "bg-rose-500 h-full transition-all duration-300 ease-out",
                        style: { width: unref(form).progress.percentage + "%" }
                      }, null, 4)
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "pt-4 border-t border-slate-100 dark:border-slate-800" }, [
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(form).processing,
                        class: "w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
                      }, toDisplayString(buttonLabel.value), 9, ["disabled"])
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
                    createVNode("p", { class: "text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto" }, " Tindakan ini akan menghapus dokumen library ini secara permanen. Lanjutkan penghapusan data ini? "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Library/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fd22c28d"]]);
export {
  Index as default
};

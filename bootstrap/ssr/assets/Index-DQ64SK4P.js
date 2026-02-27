import { ref, watch, resolveComponent, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, unref, createTextVNode, withModifiers, withDirectives, vModelText, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass } from "vue/server-renderer";
import { router, useForm, Link, usePage } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-CbW7EXnn.js";
import debounce from "lodash/debounce.js";
import { T as TModal } from "./TModal-BluvIe0P.js";
import { T as TAlert } from "./windowSizeCalculator-EVN4qZjG.js";
import { T as TInputSelect } from "./TInputSelect-BY60CBa7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vueuse/core";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
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
    standards: Object,
    filters: Object,
    targetTypes: Array
    // [ {value: 'prodi', label: 'Program Studi'}, ... ]
  },
  setup(__props) {
    const props = __props;
    const isSearching = ref(false);
    const search = ref(props.filters.search);
    const perPage = ref(props.filters.per_page || 10);
    watch(search, debounce((value) => {
      isSearching.value = true;
      router.get(route("admin.standards.index"), { search: value, per_page: perPage.value }, {
        preserveState: true,
        replace: true,
        onFinish: () => isSearching.value = false
      });
    }, 500));
    watch(perPage, (value) => {
      router.get(route("admin.standards.index"), { search: search.value, per_page: value }, {
        preserveState: true,
        replace: true
      });
    });
    const handleSort = (field) => {
      const currentSort = props.filters.sort_field;
      const currentDir = props.filters.direction || "asc";
      const nextDir = currentSort === field && currentDir === "asc" ? "desc" : "asc";
      router.get(window.location.href, { ...props.filters, sort_field: field, direction: nextDir }, { preserveState: true, replace: true });
    };
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
    const showImportModal = ref(false);
    const importForm = useForm({
      file: null
    });
    const openImportModal = () => {
      importForm.reset();
      showImportModal.value = true;
    };
    const closeImportModal = () => {
      showImportModal.value = false;
      importForm.reset();
    };
    const handleFileUpload = (e) => {
      importForm.file = e.target.files[0];
    };
    const submitImport = () => {
      importForm.post(route("admin.standards.import"), {
        onSuccess: () => {
          closeImportModal();
        }
      });
    };
    const showDeleteModal = ref(false);
    const itemToDelete = ref(null);
    const confirmDeleteAction = (id) => {
      itemToDelete.value = id;
      showDeleteModal.value = true;
    };
    const executeDelete = () => {
      if (itemToDelete.value) {
        router.delete(route("admin.standards.destroy", itemToDelete.value), {
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
            _push2(`<div class="flex gap-2" data-v-fb998bbc${_scopeId}><a${ssrRenderAttr("href", _ctx.route("admin.standards.export"))} class="group inline-flex items-center px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 active:scale-95" data-v-fb998bbc${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-file-excel",
              class: "mr-2 text-emerald-500 text-sm"
            }, null, _parent2, _scopeId));
            _push2(` Export </a><button class="group inline-flex items-center px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95" data-v-fb998bbc${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-cloud-arrow-up",
              class: "mr-2 text-blue-500 text-sm"
            }, null, _parent2, _scopeId));
            _push2(` Import </button><button class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10" data-v-fb998bbc${_scopeId}><span class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" data-v-fb998bbc${_scopeId}>+</span> Tambah Standar </button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-2" }, [
                createVNode("a", {
                  href: _ctx.route("admin.standards.export"),
                  class: "group inline-flex items-center px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 active:scale-95"
                }, [
                  createVNode(_component_icon, {
                    icon: "fa-solid fa-file-excel",
                    class: "mr-2 text-emerald-500 text-sm"
                  }),
                  createTextVNode(" Export ")
                ], 8, ["href"]),
                createVNode("button", {
                  onClick: openImportModal,
                  class: "group inline-flex items-center px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95"
                }, [
                  createVNode(_component_icon, {
                    icon: "fa-solid fa-cloud-arrow-up",
                    class: "mr-2 text-blue-500 text-sm"
                  }),
                  createTextVNode(" Import ")
                ]),
                createVNode("button", {
                  onClick: openCreateModal,
                  class: "group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10"
                }, [
                  createVNode("span", { class: "mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" }, "+"),
                  createTextVNode(" Tambah Standar ")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.flash.import_errors && _ctx.$page.props.flash.import_errors.length > 0) {
              _push2(ssrRenderComponent(TAlert, {
                type: "error",
                design: "filled",
                closeable: true,
                class: "mb-6"
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_icon, {
                      icon: "fa-solid fa-triangle-exclamation",
                      class: "text-lg mt-0.5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_icon, {
                        icon: "fa-solid fa-triangle-exclamation",
                        class: "text-lg mt-0.5"
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="space-y-3" data-v-fb998bbc${_scopeId2}><p class="font-bold text-sm" data-v-fb998bbc${_scopeId2}>Validasi Impor Gagal pada Beberapa Baris</p><ul class="list-disc list-inside text-xs font-medium space-y-1 opacity-90 max-h-48 overflow-y-auto custom-scrollbar pr-2" data-v-fb998bbc${_scopeId2}><!--[-->`);
                    ssrRenderList(_ctx.$page.props.flash.import_errors, (err, i) => {
                      _push3(`<li data-v-fb998bbc${_scopeId2}>${ssrInterpolate(err)}</li>`);
                    });
                    _push3(`<!--]--></ul>`);
                    if (_ctx.$page.props.flash.import_errors.length >= 50) {
                      _push3(`<p class="text-[10px] italic opacity-80" data-v-fb998bbc${_scopeId2}> * Menampilkan 50 peringatan pertama. Silakan periksa sisa file Anda secara teliti. </p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "space-y-3" }, [
                        createVNode("p", { class: "font-bold text-sm" }, "Validasi Impor Gagal pada Beberapa Baris"),
                        createVNode("ul", { class: "list-disc list-inside text-xs font-medium space-y-1 opacity-90 max-h-48 overflow-y-auto custom-scrollbar pr-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.flash.import_errors, (err, i) => {
                            return openBlock(), createBlock("li", { key: i }, toDisplayString(err), 1);
                          }), 128))
                        ]),
                        _ctx.$page.props.flash.import_errors.length >= 50 ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-[10px] italic opacity-80"
                        }, " * Menampilkan 50 peringatan pertama. Silakan periksa sisa file Anda secara teliti. ")) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="space-y-6" data-v-fb998bbc${_scopeId}><div class="flex flex-col lg:flex-row justify-between items-center gap-6" data-v-fb998bbc${_scopeId}><div class="flex items-stretch gap-3 w-full max-w-2xl" data-v-fb998bbc${_scopeId}><div class="relative flex-1 group" data-v-fb998bbc${_scopeId}><span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" data-v-fb998bbc${_scopeId}>`);
            if (!isSearching.value) {
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-magnifying-glass",
                class: "text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="h-4 w-4 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" data-v-fb998bbc${_scopeId}></div>`);
            }
            _push2(`</span><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama standar..." class="w-full pl-11 pr-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" data-v-fb998bbc${_scopeId}>`);
            if (search.value) {
              _push2(`<button class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-rose-500 transition-colors" data-v-fb998bbc${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-times-circle",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300" data-v-fb998bbc${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2" data-v-fb998bbc${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none" data-v-fb998bbc${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-fb998bbc${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-fb998bbc${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-fb998bbc${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option><option${ssrRenderAttr("value", 100)} data-v-fb998bbc${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 100) : ssrLooseEqual(perPage.value, 100)) ? " selected" : ""}${_scopeId}>100</option></select></div></div><div class="flex items-center gap-3" data-v-fb998bbc${_scopeId}></div></div><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" data-v-fb998bbc${_scopeId}><div class="overflow-x-auto custom-scrollbar" data-v-fb998bbc${_scopeId}><table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full" data-v-fb998bbc${_scopeId}><thead data-v-fb998bbc${_scopeId}><tr class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" data-v-fb998bbc${_scopeId}><th class="p-6 md:p-8 w-24" data-v-fb998bbc${_scopeId}>No</th><th class="p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-fb998bbc${_scopeId}><div class="flex items-center gap-2" data-v-fb998bbc${_scopeId}> Nama Standar Mutu <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-fb998bbc${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "name" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "name" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8 cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-fb998bbc${_scopeId}><div class="flex items-center gap-2" data-v-fb998bbc${_scopeId}> Target Unit <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-fb998bbc${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "target_type" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "target_type" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-fb998bbc${_scopeId}><div class="flex items-center justify-center gap-2" data-v-fb998bbc${_scopeId}> Jumlah Indikator <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-fb998bbc${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "indicators_count" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "indicators_count" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8 pr-8 text-right" data-v-fb998bbc${_scopeId}>Aksi</th></tr></thead>`);
            if (isSearching.value) {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-fb998bbc${_scopeId}><!--[-->`);
              ssrRenderList(5, (i) => {
                _push2(`<tr class="animate-pulse bg-white/30 dark:bg-slate-900/10" data-v-fb998bbc${_scopeId}><td class="p-6 md:p-8" data-v-fb998bbc${_scopeId}><div class="h-6 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-md" data-v-fb998bbc${_scopeId}></div></td><td class="p-6 md:p-8 pl-8" data-v-fb998bbc${_scopeId}><div class="h-5 w-64 bg-slate-200 dark:bg-slate-700/50 rounded mb-2" data-v-fb998bbc${_scopeId}></div><div class="h-3 w-16 bg-slate-200 dark:bg-slate-700/50 rounded" data-v-fb998bbc${_scopeId}></div></td><td class="p-6 md:p-8" data-v-fb998bbc${_scopeId}><div class="h-6 w-24 bg-slate-200 dark:bg-slate-700/50 rounded-lg" data-v-fb998bbc${_scopeId}></div></td><td class="p-6 md:p-8 text-center" data-v-fb998bbc${_scopeId}><div class="h-8 w-8 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-lg" data-v-fb998bbc${_scopeId}></div></td><td class="p-6 md:p-8 pr-8" data-v-fb998bbc${_scopeId}><div class="flex justify-end items-center gap-2" data-v-fb998bbc${_scopeId}><div class="h-8 w-24 bg-slate-200 dark:bg-slate-700/50 rounded-xl" data-v-fb998bbc${_scopeId}></div><div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl" data-v-fb998bbc${_scopeId}></div><div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl" data-v-fb998bbc${_scopeId}></div></div></td></tr>`);
              });
              _push2(`<!--]--></tbody>`);
            } else if (__props.standards.data.length === 0) {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-fb998bbc${_scopeId}><tr data-v-fb998bbc${_scopeId}><td colspan="5" class="p-16 text-center" data-v-fb998bbc${_scopeId}><div class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500" data-v-fb998bbc${_scopeId}><div class="w-24 h-24 mb-6 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner" data-v-fb998bbc${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-folder-open",
                class: "text-4xl text-slate-300 dark:text-slate-600"
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest" data-v-fb998bbc${_scopeId}> Belum Ada Standar Mutu</h3><p class="text-xs max-w-sm text-center leading-relaxed font-bold" data-v-fb998bbc${_scopeId}> Sistem belum mencatat data standar mutu apa pun atau pencarian Anda tidak memiliki kecocokan data. </p>`);
              if (search.value) {
                _push2(`<button class="mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm" data-v-fb998bbc${_scopeId}> Bersihkan Pencarian </button>`);
              } else {
                _push2(`<button class="mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500" data-v-fb998bbc${_scopeId}> Tambahkan Standar Mutu </button>`);
              }
              _push2(`</div></td></tr></tbody>`);
            } else {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-fb998bbc${_scopeId}><!--[-->`);
              ssrRenderList(__props.standards.data, (item) => {
                _push2(`<tr class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300" data-v-fb998bbc${_scopeId}><td class="p-6 md:p-8" data-v-fb998bbc${_scopeId}><span class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" data-v-fb998bbc${_scopeId}>${ssrInterpolate(__props.standards.from + __props.standards.data.indexOf(item))}</span></td><td class="p-6 md:p-8 pl-8" data-v-fb998bbc${_scopeId}><div class="font-black text-slate-800 dark:text-slate-200 text-sm mb-1" data-v-fb998bbc${_scopeId}>${ssrInterpolate(item.name)}</div><div class="text-[10px] font-bold text-rose-500/80 uppercase italic tracking-tighter flex items-center gap-1" data-v-fb998bbc${_scopeId}> ID: #${ssrInterpolate(item.code)}</div></td><td class="p-6 md:p-8" data-v-fb998bbc${_scopeId}><span class="${ssrRenderClass([
                  "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border shadow-sm",
                  item.target_type === "prodi" ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 border-indigo-100 dark:border-indigo-500/20" : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20"
                ])}" data-v-fb998bbc${_scopeId}>${ssrInterpolate(item.target_type === "prodi" ? "Program Studi" : "Fakultas")}</span></td><td class="p-6 md:p-8 text-center" data-v-fb998bbc${_scopeId}><div class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 font-black text-rose-500 shadow-inner border border-slate-200 dark:border-slate-700 text-xs" data-v-fb998bbc${_scopeId}>${ssrInterpolate(item.indicators_count || 0)}</div></td><td class="p-6 md:p-8 pr-8" data-v-fb998bbc${_scopeId}><div class="flex justify-end items-center gap-2" data-v-fb998bbc${_scopeId}>`);
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
                _push2(`<button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95" data-v-fb998bbc${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-pencil",
                  class: "text-[10px]"
                }, null, _parent2, _scopeId));
                _push2(`</button><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95" data-v-fb998bbc${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-trash",
                  class: "text-[10px]"
                }, null, _parent2, _scopeId));
                _push2(`</button></div></td></tr>`);
              });
              _push2(`<!--]--></tbody>`);
            }
            _push2(`</table></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-fb998bbc${_scopeId}><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" data-v-fb998bbc${_scopeId}> Data ${ssrInterpolate(__props.standards.from)} - ${ssrInterpolate(__props.standards.to)} dari total ${ssrInterpolate(__props.standards.total)}</div><div class="flex flex-wrap justify-center gap-1.5" data-v-fb998bbc${_scopeId}><!--[-->`);
            ssrRenderList(__props.standards.links, (link, k) => {
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
                ])}" data-v-fb998bbc${_scopeId}>${link.label ?? ""}</span>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" data-v-fb998bbc${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" data-v-fb998bbc${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10" data-v-fb998bbc${_scopeId}><div class="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center" data-v-fb998bbc${_scopeId}><div data-v-fb998bbc${_scopeId}><h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" data-v-fb998bbc${_scopeId}>${ssrInterpolate(editMode.value ? "Edit Standar" : "Standar Baru")}</h3><p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" data-v-fb998bbc${_scopeId}> Manajemen Instrumen Mutu </p></div><button class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg" data-v-fb998bbc${_scopeId}>×</button></div><form class="p-8 space-y-6" data-v-fb998bbc${_scopeId}><div class="space-y-2" data-v-fb998bbc${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-fb998bbc${_scopeId}>Nama Standar</label><input name="name"${ssrRenderAttr("value", unref(form).name)} type="text" required placeholder="Contoh: Standar Pendidikan Tinggi 2026" class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm focus:shadow-md" data-v-fb998bbc${_scopeId}>`);
              if (unref(form).errors.name) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-fb998bbc${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-fb998bbc${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-fb998bbc${_scopeId}>Target Unit</label>`);
              _push2(ssrRenderComponent(TInputSelect, {
                modelValue: unref(form).target_type,
                "onUpdate:modelValue": ($event) => unref(form).target_type = $event,
                options: __props.targetTypes,
                "options-value-key": "value",
                "options-label-key": "label",
                "place-holder": "Pilih Level Unit Kerja",
                radius: 5,
                class: ["w-full", unref(form).errors.target_type ? "ring-2 ring-rose-500 rounded-xl" : ""]
              }, null, _parent2, _scopeId));
              if (unref(form).errors.target_type) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-fb998bbc${_scopeId}>${ssrInterpolate(unref(form).errors.target_type)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-fb998bbc${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-fb998bbc${_scopeId}>Deskripsi</label><textarea name="description" required placeholder="Deskripsi singkat standar..." class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm min-h-[100px]" data-v-fb998bbc${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
              if (unref(form).errors.description) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-fb998bbc${_scopeId}>${ssrInterpolate(unref(form).errors.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="pt-4" data-v-fb998bbc${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50" data-v-fb998bbc${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : editMode.value ? "Simpan Perubahan" : "Buat Standar Baru")}</button></div></form></div></div>`);
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
                  _push3(`<div class="text-center p-4" data-v-fb998bbc${_scopeId2}><div class="w-20 h-20 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-500 mx-auto flex items-center justify-center mb-6 shadow-inner" data-v-fb998bbc${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon, {
                    icon: "fa-solid fa-trash-can",
                    class: "text-3xl animate-bounce"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><h3 class="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter italic" data-v-fb998bbc${_scopeId2}> Konfirmasi Hapus</h3><p class="text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto" data-v-fb998bbc${_scopeId2}> Tindakan ini akan menghapus standar mutu ini secara permanen. Menghapus standar akan menghapus seluruh indikator di dalamnya. Lanjutkan? </p><div class="flex justify-center gap-3" data-v-fb998bbc${_scopeId2}><button class="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 rounded-xl transition active:scale-95" data-v-fb998bbc${_scopeId2}> Batal </button><button class="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition shadow-lg shadow-rose-500/30 active:scale-95" data-v-fb998bbc${_scopeId2}> Ya, Hapus </button></div></div>`);
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
                      createVNode("p", { class: "text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto" }, " Tindakan ini akan menghapus standar mutu ini secara permanen. Menghapus standar akan menghapus seluruh indikator di dalamnya. Lanjutkan? "),
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
            _push2(ssrRenderComponent(TModal, {
              modelValue: showImportModal.value,
              "onUpdate:modelValue": ($event) => showImportModal.value = $event,
              radius: 5,
              closeButton: false
            }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between p-8 pb-0" data-v-fb998bbc${_scopeId2}><div data-v-fb998bbc${_scopeId2}><h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" data-v-fb998bbc${_scopeId2}> Import Data Master </h3><p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" data-v-fb998bbc${_scopeId2}> Unggah File Excel (.xlsx) </p></div></div><form class="p-8 space-y-6" data-v-fb998bbc${_scopeId2}><div class="bg-blue-50 dark:bg-blue-500/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-500/20" data-v-fb998bbc${_scopeId2}><div class="flex gap-4" data-v-fb998bbc${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon, {
                    icon: "fa-solid fa-circle-info",
                    class: "text-blue-500 text-xl mt-0.5 shrink-0"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="space-y-2" data-v-fb998bbc${_scopeId2}><p class="text-xs text-blue-700 dark:text-blue-300 font-medium leading-relaxed" data-v-fb998bbc${_scopeId2}> Pastikan data yang diunggah mengikuti format template yang disediakan. 1 baris mewakili 1 indikator. Standar yang sama akan digabungkan menjadi 1 target. Target Level (Target Unit) harus dipilih apakah fakultas atau prodi. </p><a${ssrRenderAttr("href", _ctx.route("admin.standards.template"))} class="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors" data-v-fb998bbc${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-download" }, null, _parent3, _scopeId2));
                  _push3(` Unduh Template Master </a></div></div></div><div class="space-y-2" data-v-fb998bbc${_scopeId2}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-fb998bbc${_scopeId2}>File Excel</label><div class="relative" data-v-fb998bbc${_scopeId2}><input type="file" required accept=".xlsx,.xls,.csv" class="w-full px-5 py-4 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-500 dark:text-slate-400 ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-blue-500 transition-all shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-500/10 dark:file:text-blue-400" data-v-fb998bbc${_scopeId2}></div>`);
                  if (unref(importForm).errors.file) {
                    _push3(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-fb998bbc${_scopeId2}>${ssrInterpolate(unref(importForm).errors.file)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800" data-v-fb998bbc${_scopeId2}><button type="button" class="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors" data-v-fb998bbc${_scopeId2}> Batal </button><button type="submit"${ssrIncludeBooleanAttr(unref(importForm).processing) ? " disabled" : ""} class="px-8 py-3 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2" data-v-fb998bbc${_scopeId2}>`);
                  if (unref(importForm).processing) {
                    _push3(ssrRenderComponent(_component_icon, {
                      icon: "fa-solid fa-circle-notch",
                      class: "animate-spin"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_icon, { icon: "fa-solid fa-cloud-arrow-up" }, null, _parent3, _scopeId2));
                  }
                  _push3(` ${ssrInterpolate(unref(importForm).processing ? "Mengimpor..." : "Mulai Import")}</button></div></form>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between p-8 pb-0" }, [
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" }, " Import Data Master "),
                        createVNode("p", { class: "text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" }, " Unggah File Excel (.xlsx) ")
                      ])
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(submitImport, ["prevent"]),
                      class: "p-8 space-y-6"
                    }, [
                      createVNode("div", { class: "bg-blue-50 dark:bg-blue-500/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-500/20" }, [
                        createVNode("div", { class: "flex gap-4" }, [
                          createVNode(_component_icon, {
                            icon: "fa-solid fa-circle-info",
                            class: "text-blue-500 text-xl mt-0.5 shrink-0"
                          }),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode("p", { class: "text-xs text-blue-700 dark:text-blue-300 font-medium leading-relaxed" }, " Pastikan data yang diunggah mengikuti format template yang disediakan. 1 baris mewakili 1 indikator. Standar yang sama akan digabungkan menjadi 1 target. Target Level (Target Unit) harus dipilih apakah fakultas atau prodi. "),
                            createVNode("a", {
                              href: _ctx.route("admin.standards.template"),
                              class: "inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                            }, [
                              createVNode(_component_icon, { icon: "fa-solid fa-download" }),
                              createTextVNode(" Unduh Template Master ")
                            ], 8, ["href"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "File Excel"),
                        createVNode("div", { class: "relative" }, [
                          createVNode("input", {
                            type: "file",
                            required: "",
                            accept: ".xlsx,.xls,.csv",
                            onChange: handleFileUpload,
                            class: "w-full px-5 py-4 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-500 dark:text-slate-400 ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-blue-500 transition-all shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-500/10 dark:file:text-blue-400"
                          }, null, 32)
                        ]),
                        unref(importForm).errors.file ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-rose-500 font-bold ml-1"
                        }, toDisplayString(unref(importForm).errors.file), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800" }, [
                        createVNode("button", {
                          type: "button",
                          onClick: closeImportModal,
                          class: "px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors"
                        }, " Batal "),
                        createVNode("button", {
                          type: "submit",
                          disabled: unref(importForm).processing,
                          class: "px-8 py-3 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2"
                        }, [
                          unref(importForm).processing ? (openBlock(), createBlock(_component_icon, {
                            key: 0,
                            icon: "fa-solid fa-circle-notch",
                            class: "animate-spin"
                          })) : (openBlock(), createBlock(_component_icon, {
                            key: 1,
                            icon: "fa-solid fa-cloud-arrow-up"
                          })),
                          createTextVNode(" " + toDisplayString(unref(importForm).processing ? "Mengimpor..." : "Mulai Import"), 1)
                        ], 8, ["disabled"])
                      ])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              _ctx.$page.props.flash.import_errors && _ctx.$page.props.flash.import_errors.length > 0 ? (openBlock(), createBlock(TAlert, {
                key: 0,
                type: "error",
                design: "filled",
                closeable: true,
                class: "mb-6"
              }, {
                icon: withCtx(() => [
                  createVNode(_component_icon, {
                    icon: "fa-solid fa-triangle-exclamation",
                    class: "text-lg mt-0.5"
                  })
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-3" }, [
                    createVNode("p", { class: "font-bold text-sm" }, "Validasi Impor Gagal pada Beberapa Baris"),
                    createVNode("ul", { class: "list-disc list-inside text-xs font-medium space-y-1 opacity-90 max-h-48 overflow-y-auto custom-scrollbar pr-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.flash.import_errors, (err, i) => {
                        return openBlock(), createBlock("li", { key: i }, toDisplayString(err), 1);
                      }), 128))
                    ]),
                    _ctx.$page.props.flash.import_errors.length >= 50 ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-[10px] italic opacity-80"
                    }, " * Menampilkan 50 peringatan pertama. Silakan periksa sisa file Anda secara teliti. ")) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })) : createCommentVNode("", true),
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
                        placeholder: "Cari nama standar...",
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
                          createVNode("th", { class: "p-6 md:p-8 w-24" }, "No"),
                          createVNode("th", {
                            onClick: ($event) => handleSort("name"),
                            class: "p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createTextVNode(" Nama Standar Mutu "),
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
                            onClick: ($event) => handleSort("target_type"),
                            class: "p-6 md:p-8 cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createTextVNode(" Target Unit "),
                              createVNode("div", { class: "flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-up",
                                  class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "target_type" && __props.filters.direction === "asc" }, "-mb-1"]
                                }, null, 8, ["class"]),
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-down",
                                  class: { "text-rose-500 opacity-100": __props.filters.sort_field === "target_type" && __props.filters.direction === "desc" }
                                }, null, 8, ["class"])
                              ])
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", {
                            onClick: ($event) => handleSort("indicators_count"),
                            class: "p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                              createTextVNode(" Jumlah Indikator "),
                              createVNode("div", { class: "flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-up",
                                  class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "indicators_count" && __props.filters.direction === "asc" }, "-mb-1"]
                                }, null, 8, ["class"]),
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-down",
                                  class: { "text-rose-500 opacity-100": __props.filters.sort_field === "indicators_count" && __props.filters.direction === "desc" }
                                }, null, 8, ["class"])
                              ])
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", { class: "p-6 md:p-8 pr-8 text-right" }, "Aksi")
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
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "h-6 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-md" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pl-8" }, [
                              createVNode("div", { class: "h-5 w-64 bg-slate-200 dark:bg-slate-700/50 rounded mb-2" }),
                              createVNode("div", { class: "h-3 w-16 bg-slate-200 dark:bg-slate-700/50 rounded" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "h-6 w-24 bg-slate-200 dark:bg-slate-700/50 rounded-lg" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("div", { class: "h-8 w-8 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-lg" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pr-8" }, [
                              createVNode("div", { class: "flex justify-end items-center gap-2" }, [
                                createVNode("div", { class: "h-8 w-24 bg-slate-200 dark:bg-slate-700/50 rounded-xl" }),
                                createVNode("div", { class: "h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl" }),
                                createVNode("div", { class: "h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-xl" })
                              ])
                            ])
                          ]);
                        }), 64))
                      ])) : __props.standards.data.length === 0 ? (openBlock(), createBlock("tbody", {
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
                                  icon: "fa-solid fa-folder-open",
                                  class: "text-4xl text-slate-300 dark:text-slate-600"
                                })
                              ]),
                              createVNode("h3", { class: "text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest" }, " Belum Ada Standar Mutu"),
                              createVNode("p", { class: "text-xs max-w-sm text-center leading-relaxed font-bold" }, " Sistem belum mencatat data standar mutu apa pun atau pencarian Anda tidak memiliki kecocokan data. "),
                              search.value ? (openBlock(), createBlock("button", {
                                key: 0,
                                onClick: ($event) => search.value = "",
                                class: "mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm"
                              }, " Bersihkan Pencarian ", 8, ["onClick"])) : (openBlock(), createBlock("button", {
                                key: 1,
                                onClick: openCreateModal,
                                class: "mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500"
                              }, " Tambahkan Standar Mutu "))
                            ])
                          ])
                        ])
                      ])) : (openBlock(), createBlock("tbody", {
                        key: 2,
                        class: "divide-y divide-slate-50 dark:divide-slate-800/20"
                      }, [
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
                              createVNode("div", { class: "text-[10px] font-bold text-rose-500/80 uppercase italic tracking-tighter flex items-center gap-1" }, " ID: #" + toDisplayString(item.code), 1)
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
                    createVNode("div", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" }, " Data " + toDisplayString(__props.standards.from) + " - " + toDisplayString(__props.standards.to) + " dari total " + toDisplayString(__props.standards.total), 1),
                    createVNode("div", { class: "flex flex-wrap justify-center gap-1.5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.standards.links, (link, k) => {
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
                key: 1,
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
                      createVNode(TInputSelect, {
                        modelValue: unref(form).target_type,
                        "onUpdate:modelValue": ($event) => unref(form).target_type = $event,
                        options: __props.targetTypes,
                        "options-value-key": "value",
                        "options-label-key": "label",
                        "place-holder": "Pilih Level Unit Kerja",
                        radius: 5,
                        class: ["w-full", unref(form).errors.target_type ? "ring-2 ring-rose-500 rounded-xl" : ""]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "class"]),
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
                    createVNode("p", { class: "text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto" }, " Tindakan ini akan menghapus standar mutu ini secara permanen. Menghapus standar akan menghapus seluruh indikator di dalamnya. Lanjutkan? "),
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
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(TModal, {
                modelValue: showImportModal.value,
                "onUpdate:modelValue": ($event) => showImportModal.value = $event,
                radius: 5,
                closeButton: false
              }, {
                content: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between p-8 pb-0" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" }, " Import Data Master "),
                      createVNode("p", { class: "text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" }, " Unggah File Excel (.xlsx) ")
                    ])
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submitImport, ["prevent"]),
                    class: "p-8 space-y-6"
                  }, [
                    createVNode("div", { class: "bg-blue-50 dark:bg-blue-500/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-500/20" }, [
                      createVNode("div", { class: "flex gap-4" }, [
                        createVNode(_component_icon, {
                          icon: "fa-solid fa-circle-info",
                          class: "text-blue-500 text-xl mt-0.5 shrink-0"
                        }),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("p", { class: "text-xs text-blue-700 dark:text-blue-300 font-medium leading-relaxed" }, " Pastikan data yang diunggah mengikuti format template yang disediakan. 1 baris mewakili 1 indikator. Standar yang sama akan digabungkan menjadi 1 target. Target Level (Target Unit) harus dipilih apakah fakultas atau prodi. "),
                          createVNode("a", {
                            href: _ctx.route("admin.standards.template"),
                            class: "inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                          }, [
                            createVNode(_component_icon, { icon: "fa-solid fa-download" }),
                            createTextVNode(" Unduh Template Master ")
                          ], 8, ["href"])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "File Excel"),
                      createVNode("div", { class: "relative" }, [
                        createVNode("input", {
                          type: "file",
                          required: "",
                          accept: ".xlsx,.xls,.csv",
                          onChange: handleFileUpload,
                          class: "w-full px-5 py-4 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-500 dark:text-slate-400 ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-blue-500 transition-all shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-500/10 dark:file:text-blue-400"
                        }, null, 32)
                      ]),
                      unref(importForm).errors.file ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-rose-500 font-bold ml-1"
                      }, toDisplayString(unref(importForm).errors.file), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: closeImportModal,
                        class: "px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors"
                      }, " Batal "),
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(importForm).processing,
                        class: "px-8 py-3 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2"
                      }, [
                        unref(importForm).processing ? (openBlock(), createBlock(_component_icon, {
                          key: 0,
                          icon: "fa-solid fa-circle-notch",
                          class: "animate-spin"
                        })) : (openBlock(), createBlock(_component_icon, {
                          key: 1,
                          icon: "fa-solid fa-cloud-arrow-up"
                        })),
                        createTextVNode(" " + toDisplayString(unref(importForm).processing ? "Mengimpor..." : "Mulai Import"), 1)
                      ], 8, ["disabled"])
                    ])
                  ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Standard/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fb998bbc"]]);
export {
  Index as default
};

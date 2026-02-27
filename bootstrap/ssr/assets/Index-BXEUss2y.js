import { ref, watch, computed, resolveComponent, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, unref, createTextVNode, withModifiers, withDirectives, vModelText, vModelSelect, Transition, useSSRContext } from "vue";
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
    users: Object,
    // Paginated data
    filters: Object,
    roles: Array,
    prodis: Array,
    faculties: Array
  },
  setup(__props) {
    const props = __props;
    const isSearching = ref(false);
    const search = ref(props.filters.search);
    const perPage = ref(props.filters.per_page || 10);
    watch(search, debounce((value) => {
      isSearching.value = true;
      router.get(route("admin.users.index"), { search: value, per_page: perPage.value }, { preserveState: true, replace: true, onFinish: () => isSearching.value = false });
    }, 500));
    watch(perPage, (value) => {
      router.get(route("admin.users.index"), { search: search.value, per_page: value }, { preserveState: true, replace: true });
    });
    const handleSort = (field) => {
      const currentSort = props.filters.sort_field;
      const currentDir = props.filters.direction || "asc";
      const nextDir = currentSort === field && currentDir === "asc" ? "desc" : "asc";
      router.get(window.location.href, { ...props.filters, sort_field: field, direction: nextDir }, { preserveState: true, replace: true });
    };
    const showModal = ref(false);
    const editMode = ref(false);
    const filteredProdis = computed(() => {
      if (form.faculty_id) {
        return props.prodis.filter((p) => p.faculty_id === form.faculty_id);
      }
      return props.prodis;
    });
    const filteredFaculties = computed(() => {
      if (form.prodi_id) {
        const selectedProdi = props.prodis.find((p) => p.id === form.prodi_id);
        if (selectedProdi) {
          return props.faculties.filter((f) => f.id === selectedProdi.faculty_id);
        }
      }
      return props.faculties;
    });
    const form = useForm({
      id: null,
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      role: "",
      prodi_id: null,
      faculty_id: null
    });
    watch(() => form.faculty_id, (newVal) => {
      if (newVal && form.prodi_id) {
        const selectedProdi = props.prodis.find((p) => p.id === form.prodi_id);
        if (selectedProdi && selectedProdi.faculty_id !== newVal) {
          form.prodi_id = null;
        }
      }
    });
    watch(() => form.prodi_id, (newVal) => {
      if (newVal && form.faculty_id) {
        const selectedProdi = props.prodis.find((p) => p.id === newVal);
        if (selectedProdi && selectedProdi.faculty_id !== form.faculty_id) {
          form.faculty_id = null;
        }
      }
    });
    const openCreateModal = () => {
      editMode.value = false;
      form.reset();
      showModal.value = true;
    };
    const openEditModal = (user) => {
      editMode.value = true;
      form.id = user.id;
      form.name = user.name;
      form.email = user.email;
      form.role = user.role;
      form.prodi_id = user.prodi_id;
      form.faculty_id = user.faculty_id;
      form.password = "";
      form.password_confirmation = "";
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
      form.reset();
    };
    const submit = () => {
      if (editMode.value) {
        form.put(route("admin.users.update", form.id), {
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
        form.post(route("admin.users.store"), {
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
    const reset2FA = (id) => {
      if (confirm("Reset Two Factor Authentication untuk user ini?")) {
        router.post(route("admin.users.reset-2fa", id));
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
      importForm.post(route("settings-user.import"), {
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
        router.delete(route("admin.users.destroy", itemToDelete.value), {
          preserveScroll: true,
          onSuccess: () => {
            showDeleteModal.value = false;
            itemToDelete.value = null;
          }
        });
      }
    };
    const getUnitName = (user) => {
      if (user.role !== "auditee") return "-";
      return user.prodi?.name || user.faculty?.name || "Unit Belum Set";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Manajemen User" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Manajemen Pengguna`);
          } else {
            return [
              createTextVNode("Manajemen Pengguna")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kelola hak akses Admin, Auditor, dan Auditee Unit Kerja`);
          } else {
            return [
              createTextVNode("Kelola hak akses Admin, Auditor, dan Auditee Unit Kerja")
            ];
          }
        }),
        "action-buttons": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-2" data-v-9a120553${_scopeId}><a${ssrRenderAttr("href", _ctx.route("settings-user.export"))} class="group inline-flex items-center px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 active:scale-95" data-v-9a120553${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-file-excel",
              class: "mr-2 text-emerald-500 text-sm"
            }, null, _parent2, _scopeId));
            _push2(` Export </a><button class="group inline-flex items-center px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95" data-v-9a120553${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-cloud-arrow-up",
              class: "mr-2 text-blue-500 text-sm"
            }, null, _parent2, _scopeId));
            _push2(` Import </button><button class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10" data-v-9a120553${_scopeId}><span class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" data-v-9a120553${_scopeId}>+</span> Tambah User </button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-2" }, [
                createVNode("a", {
                  href: _ctx.route("settings-user.export"),
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
                  createTextVNode(" Tambah User ")
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
                    _push3(`<div class="space-y-3" data-v-9a120553${_scopeId2}><p class="font-bold text-sm" data-v-9a120553${_scopeId2}>Validasi Impor Gagal pada Beberapa Baris</p><ul class="list-disc list-inside text-xs font-medium space-y-1 opacity-90 max-h-48 overflow-y-auto custom-scrollbar pr-2" data-v-9a120553${_scopeId2}><!--[-->`);
                    ssrRenderList(_ctx.$page.props.flash.import_errors, (err, i) => {
                      _push3(`<li data-v-9a120553${_scopeId2}>${ssrInterpolate(err)}</li>`);
                    });
                    _push3(`<!--]--></ul>`);
                    if (_ctx.$page.props.flash.import_errors.length >= 50) {
                      _push3(`<p class="text-[10px] italic opacity-80" data-v-9a120553${_scopeId2}> * Menampilkan 50 peringatan pertama. Silakan periksa sisa file Anda secara teliti. </p>`);
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
            _push2(`<div class="space-y-6" data-v-9a120553${_scopeId}><div class="flex flex-col lg:flex-row justify-between items-center gap-6" data-v-9a120553${_scopeId}><div class="flex items-stretch gap-3 w-full max-w-2xl" data-v-9a120553${_scopeId}><div class="relative flex-1 group" data-v-9a120553${_scopeId}><span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" data-v-9a120553${_scopeId}>`);
            if (!isSearching.value) {
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-magnifying-glass",
                class: "text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="h-4 w-4 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" data-v-9a120553${_scopeId}></div>`);
            }
            _push2(`</span><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama atau email..." class="w-full pl-11 pr-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" data-v-9a120553${_scopeId}>`);
            if (search.value) {
              _push2(`<button class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-rose-500 transition-colors" data-v-9a120553${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-times-circle",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300" data-v-9a120553${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2" data-v-9a120553${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none" data-v-9a120553${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-9a120553${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-9a120553${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-9a120553${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option><option${ssrRenderAttr("value", 100)} data-v-9a120553${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 100) : ssrLooseEqual(perPage.value, 100)) ? " selected" : ""}${_scopeId}>100</option></select></div></div><div class="flex items-center gap-3" data-v-9a120553${_scopeId}></div></div><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" data-v-9a120553${_scopeId}><div class="overflow-x-auto custom-scrollbar" data-v-9a120553${_scopeId}><table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full" data-v-9a120553${_scopeId}><thead data-v-9a120553${_scopeId}><tr class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" data-v-9a120553${_scopeId}><th class="p-6 md:p-8 pl-8 text-center" data-v-9a120553${_scopeId}>No</th><th class="p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-9a120553${_scopeId}><div class="flex items-center gap-2" data-v-9a120553${_scopeId}> Pengguna <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-9a120553${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "name" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "name" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8 cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-9a120553${_scopeId}><div class="flex items-center gap-2" data-v-9a120553${_scopeId}> Role <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-9a120553${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "role" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "role" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8" data-v-9a120553${_scopeId}>Unit Kerja</th><th class="p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-9a120553${_scopeId}><div class="flex items-center justify-center gap-2" data-v-9a120553${_scopeId}> 2FA <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-9a120553${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "two_factor_confirmed_at" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "two_factor_confirmed_at" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8 text-center" data-v-9a120553${_scopeId}>Aksi</th></tr></thead>`);
            if (isSearching.value) {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-9a120553${_scopeId}><!--[-->`);
              ssrRenderList(5, (i) => {
                _push2(`<tr class="animate-pulse bg-white/30 dark:bg-slate-900/10" data-v-9a120553${_scopeId}><td class="p-6 md:p-8" data-v-9a120553${_scopeId}><div class="h-6 w-8 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-md" data-v-9a120553${_scopeId}></div></td><td class="p-6 md:p-8 pl-8" data-v-9a120553${_scopeId}><div class="flex items-center gap-4" data-v-9a120553${_scopeId}><div class="w-10 h-10 bg-slate-200 dark:bg-slate-700/50 rounded-full" data-v-9a120553${_scopeId}></div><div class="space-y-2" data-v-9a120553${_scopeId}><div class="h-4 w-32 bg-slate-200 dark:bg-slate-700/50 rounded" data-v-9a120553${_scopeId}></div><div class="h-3 w-48 bg-slate-200 dark:bg-slate-700/50 rounded" data-v-9a120553${_scopeId}></div></div></div></td><td class="p-6 md:p-8" data-v-9a120553${_scopeId}><div class="h-6 w-20 bg-slate-200 dark:bg-slate-700/50 rounded-md" data-v-9a120553${_scopeId}></div></td><td class="p-6 md:p-8" data-v-9a120553${_scopeId}><div class="h-4 w-32 bg-slate-200 dark:bg-slate-700/50 rounded" data-v-9a120553${_scopeId}></div></td><td class="p-6 md:p-8 flex justify-center" data-v-9a120553${_scopeId}><div class="h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-full" data-v-9a120553${_scopeId}></div></td><td class="p-6 md:p-8" data-v-9a120553${_scopeId}><div class="h-8 w-24 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-lg" data-v-9a120553${_scopeId}></div></td></tr>`);
              });
              _push2(`<!--]--></tbody>`);
            } else if (__props.users.data.length === 0) {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-9a120553${_scopeId}><tr data-v-9a120553${_scopeId}><td colspan="6" class="p-16 text-center" data-v-9a120553${_scopeId}><div class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500" data-v-9a120553${_scopeId}><div class="w-24 h-24 mb-6 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner" data-v-9a120553${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-users-slash",
                class: "text-4xl text-slate-300 dark:text-slate-600"
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest" data-v-9a120553${_scopeId}> Belum Ada Pengguna</h3><p class="text-xs max-w-sm text-center leading-relaxed font-bold" data-v-9a120553${_scopeId}> Sistem belum mencatat data pengguna apa pun atau pencarian Anda tidak memiliki kecocokan data. </p>`);
              if (search.value) {
                _push2(`<button class="mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm" data-v-9a120553${_scopeId}> Bersihkan Pencarian </button>`);
              } else {
                _push2(`<button class="mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500" data-v-9a120553${_scopeId}> Tambahkan Pengguna Baru </button>`);
              }
              _push2(`</div></td></tr></tbody>`);
            } else {
              _push2(`<tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-9a120553${_scopeId}><!--[-->`);
              ssrRenderList(__props.users.data, (item) => {
                _push2(`<tr class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300" data-v-9a120553${_scopeId}><td class="p-6 md:p-8 text-center" data-v-9a120553${_scopeId}><span class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" data-v-9a120553${_scopeId}>${ssrInterpolate(__props.users.from + __props.users.data.indexOf(item))}</span></td><td class="p-6 md:p-8 pl-8" data-v-9a120553${_scopeId}><div class="flex items-center gap-4" data-v-9a120553${_scopeId}><img${ssrRenderAttr("src", item.profile_photo_url)} class="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-sm" data-v-9a120553${_scopeId}><div data-v-9a120553${_scopeId}><div class="font-bold text-slate-800 dark:text-slate-200 text-sm mb-0.5" data-v-9a120553${_scopeId}>${ssrInterpolate(item.name)}</div><div class="text-[10px] font-medium text-slate-400 tracking-tight" data-v-9a120553${_scopeId}>${ssrInterpolate(item.email)}</div></div></div></td><td class="p-6 md:p-8" data-v-9a120553${_scopeId}><span class="${ssrRenderClass([
                  "px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border shadow-sm",
                  item.role === "admin" ? "bg-rose-50 dark:bg-rose-500/10 text-rose-600 border-rose-100 dark:border-rose-500/20" : item.role === "auditor" ? "bg-amber-50 dark:bg-amber-500/10 text-amber-600 border-amber-100 dark:border-amber-500/20" : "bg-blue-50 dark:bg-blue-500/10 text-blue-600 border-blue-100 dark:border-blue-500/20"
                ])}" data-v-9a120553${_scopeId}>${ssrInterpolate(item.role)}</span></td><td class="p-6 md:p-8" data-v-9a120553${_scopeId}><span class="text-xs font-bold text-slate-600 dark:text-slate-400" data-v-9a120553${_scopeId}>${ssrInterpolate(getUnitName(item))}</span></td><td class="p-6 md:p-8 text-center" data-v-9a120553${_scopeId}>`);
                if (item.two_factor_confirmed_at) {
                  _push2(`<div class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 border border-emerald-100 dark:border-emerald-500/20" title="2FA Aktif" data-v-9a120553${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_icon, {
                    icon: "fa-solid fa-shield-halved",
                    class: "text-xs"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<div class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-300 border border-slate-100 dark:border-slate-700" data-v-9a120553${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_icon, {
                    icon: "fa-solid fa-lock-open",
                    class: "text-xs"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                }
                _push2(`</td><td class="p-6 md:p-8" data-v-9a120553${_scopeId}><div class="flex justify-center gap-2" data-v-9a120553${_scopeId}>`);
                if (item.two_factor_confirmed_at) {
                  _push2(`<button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-amber-200 active:scale-95" title="Reset 2FA" data-v-9a120553${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_icon, {
                    icon: "fa-solid fa-key",
                    class: "text-[10px]"
                  }, null, _parent2, _scopeId));
                  _push2(`</button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95" data-v-9a120553${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-pencil",
                  class: "text-[10px]"
                }, null, _parent2, _scopeId));
                _push2(`</button><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95" data-v-9a120553${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-trash",
                  class: "text-[10px]"
                }, null, _parent2, _scopeId));
                _push2(`</button></div></td></tr>`);
              });
              _push2(`<!--]--></tbody>`);
            }
            _push2(`</table></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-9a120553${_scopeId}><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" data-v-9a120553${_scopeId}> Data ${ssrInterpolate(__props.users.from)} - ${ssrInterpolate(__props.users.to)} dari total ${ssrInterpolate(__props.users.total)}</div><div class="flex flex-wrap justify-center gap-1.5" data-v-9a120553${_scopeId}><!--[-->`);
            ssrRenderList(__props.users.links, (link, k) => {
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
                ])}" data-v-9a120553${_scopeId}>${link.label ?? ""}</span>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" data-v-9a120553${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" data-v-9a120553${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10 flex flex-col max-h-[85vh]" data-v-9a120553${_scopeId}><div class="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center shrink-0" data-v-9a120553${_scopeId}><div data-v-9a120553${_scopeId}><h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" data-v-9a120553${_scopeId}>${ssrInterpolate(editMode.value ? "Edit User" : "User Baru")}</h3><p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" data-v-9a120553${_scopeId}> Manajemen Hak Akses </p></div><button class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg" data-v-9a120553${_scopeId}>×</button></div><form class="p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1" data-v-9a120553${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-9a120553${_scopeId}><div class="space-y-2" data-v-9a120553${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-9a120553${_scopeId}>Nama Lengkap</label><input${ssrRenderAttr("value", unref(form).name)} type="text" required class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-9a120553${_scopeId}>`);
              if (unref(form).errors.name) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-9a120553${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-9a120553${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-9a120553${_scopeId}>Email</label><input${ssrRenderAttr("value", unref(form).email)} type="email" required class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-9a120553${_scopeId}>`);
              if (unref(form).errors.email) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-9a120553${_scopeId}>${ssrInterpolate(unref(form).errors.email)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-9a120553${_scopeId}><div class="space-y-2" data-v-9a120553${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-9a120553${_scopeId}>Password</label><input${ssrRenderAttr("value", unref(form).password)} type="password"${ssrIncludeBooleanAttr(!editMode.value) ? " required" : ""} class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-9a120553${_scopeId}>`);
              if (editMode.value) {
                _push2(`<p class="text-[10px] text-slate-400 font-bold italic ml-1" data-v-9a120553${_scopeId}>* Kosongkan jika tidak ganti</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(form).errors.password) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-9a120553${_scopeId}>${ssrInterpolate(unref(form).errors.password)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-9a120553${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-9a120553${_scopeId}>Konfirmasi Password</label><input${ssrRenderAttr("value", unref(form).password_confirmation)} type="password"${ssrIncludeBooleanAttr(!editMode.value) ? " required" : ""} class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-9a120553${_scopeId}></div></div><div class="space-y-2" data-v-9a120553${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-9a120553${_scopeId}>Role / Hak Akses</label>`);
              _push2(ssrRenderComponent(TInputSelect, {
                modelValue: unref(form).role,
                "onUpdate:modelValue": ($event) => unref(form).role = $event,
                options: __props.roles.map((r) => ({ id: r, name: r.toUpperCase() })),
                "options-value-key": "id",
                "options-label-key": "name",
                "place-holder": "Pilih Role",
                radius: 5,
                class: ["w-full", unref(form).errors.role ? "ring-2 ring-rose-500 rounded-xl" : ""]
              }, null, _parent2, _scopeId));
              if (unref(form).errors.role) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-9a120553${_scopeId}>${ssrInterpolate(unref(form).errors.role)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (unref(form).role === "auditee") {
                _push2(`<div class="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-4" data-v-9a120553${_scopeId}><div class="flex items-center gap-2" data-v-9a120553${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-building-user",
                  class: "text-rose-500"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-[10px] font-black text-slate-400 uppercase tracking-widest" data-v-9a120553${_scopeId}>Penempatan Unit Kerja</span></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-9a120553${_scopeId}><div class="space-y-2" data-v-9a120553${_scopeId}><label class="text-[10px] font-bold text-slate-500 uppercase" data-v-9a120553${_scopeId}>Program Studi</label>`);
                _push2(ssrRenderComponent(TInputSelect, {
                  modelValue: unref(form).prodi_id,
                  "onUpdate:modelValue": ($event) => unref(form).prodi_id = $event,
                  options: filteredProdis.value,
                  "options-value-key": "id",
                  "options-label-key": "name",
                  "place-holder": "Pilih Program Studi",
                  search: true,
                  "search-place-holder": "Cari prodi...",
                  "clear-button": true,
                  radius: 5,
                  class: "w-full ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500"
                }, null, _parent2, _scopeId));
                if (unref(form).errors.prodi_id) {
                  _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-9a120553${_scopeId}>${ssrInterpolate(unref(form).errors.prodi_id)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="space-y-2" data-v-9a120553${_scopeId}><label class="text-[10px] font-bold text-slate-500 uppercase" data-v-9a120553${_scopeId}>Fakultas</label>`);
                _push2(ssrRenderComponent(TInputSelect, {
                  modelValue: unref(form).faculty_id,
                  "onUpdate:modelValue": ($event) => unref(form).faculty_id = $event,
                  options: filteredFaculties.value,
                  "options-value-key": "id",
                  "options-label-key": "name",
                  "place-holder": "Pilih Fakultas",
                  search: true,
                  "search-place-holder": "Cari fakultas...",
                  "clear-button": true,
                  radius: 5,
                  class: "w-full ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500"
                }, null, _parent2, _scopeId));
                if (unref(form).errors.faculty_id) {
                  _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-9a120553${_scopeId}>${ssrInterpolate(unref(form).errors.faculty_id)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><p class="text-[10px] text-rose-500 font-bold italic leading-tight" data-v-9a120553${_scopeId}>* Pilih unit yang sesuai dengan cakupan audit pengguna ini.</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="pt-4 border-t border-slate-100 dark:border-slate-800" data-v-9a120553${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50" data-v-9a120553${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : editMode.value ? "Simpan Perubahan" : "Buat User Baru")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(TModal, {
              modelValue: showDeleteModal.value,
              "onUpdate:modelValue": ($event) => showDeleteModal.value = $event,
              radius: 5,
              closeButton: false
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Konfirmasi Hapus `);
                } else {
                  return [
                    createTextVNode(" Konfirmasi Hapus ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-4 py-2" data-v-9a120553${_scopeId2}><div class="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-500/20 flex flex-shrink-0 items-center justify-center" data-v-9a120553${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon, {
                    icon: "fa-solid fa-triangle-exclamation",
                    class: "text-rose-500 text-xl"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div data-v-9a120553${_scopeId2}><h4 class="text-base font-bold text-slate-800 dark:text-slate-200 mb-1" data-v-9a120553${_scopeId2}>Hapus Data Pengguna? </h4><p class="text-xs text-slate-500 dark:text-slate-400" data-v-9a120553${_scopeId2}> Tindakan ini akan memindahkan pengguna ke dalam tong sampah (Soft Delete) dan dapat menghilangkan aksesnya dari sistem. Lanjutkan? </p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-4 py-2" }, [
                      createVNode("div", { class: "w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-500/20 flex flex-shrink-0 items-center justify-center" }, [
                        createVNode(_component_icon, {
                          icon: "fa-solid fa-triangle-exclamation",
                          class: "text-rose-500 text-xl"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("h4", { class: "text-base font-bold text-slate-800 dark:text-slate-200 mb-1" }, "Hapus Data Pengguna? "),
                        createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400" }, " Tindakan ini akan memindahkan pengguna ke dalam tong sampah (Soft Delete) dan dapat menghilangkan aksesnya dari sistem. Lanjutkan? ")
                      ])
                    ])
                  ];
                }
              }),
              "footer-right": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-end gap-3 rounded-b-3xl" data-v-9a120553${_scopeId2}><button class="px-5 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors" data-v-9a120553${_scopeId2}> Batal </button><button class="px-5 py-2.5 text-xs font-bold text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition-colors shadow-sm shadow-rose-500/30" data-v-9a120553${_scopeId2}> Ya, Hapus </button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-end gap-3 rounded-b-3xl" }, [
                      createVNode("button", {
                        onClick: ($event) => showDeleteModal.value = false,
                        class: "px-5 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
                      }, " Batal ", 8, ["onClick"]),
                      createVNode("button", {
                        onClick: executeDelete,
                        class: "px-5 py-2.5 text-xs font-bold text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition-colors shadow-sm shadow-rose-500/30"
                      }, " Ya, Hapus ")
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
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Import Pengguna Baru `);
                } else {
                  return [
                    createTextVNode(" Import Pengguna Baru ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form data-v-9a120553${_scopeId2}><div class="space-y-6" data-v-9a120553${_scopeId2}><div class="bg-blue-50 dark:bg-blue-500/10 p-4 rounded-xl border border-blue-100 dark:border-blue-500/20" data-v-9a120553${_scopeId2}><h4 class="text-blue-800 dark:text-blue-300 font-bold text-sm mb-2 flex items-center" data-v-9a120553${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon, {
                    icon: "fa-solid fa-circle-info",
                    class: "mr-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` Panduan Import </h4><p class="text-xs text-blue-600 dark:text-blue-400 leading-relaxed" data-v-9a120553${_scopeId2}> Pastikan format kolom file Excel/CSV sesuai dengan template standar sistem AMI. Anda wajib menyediakan kolom <b data-v-9a120553${_scopeId2}>Name, Email, dan Role (admin/auditor/auditee)</b>. </p><a${ssrRenderAttr("href", _ctx.route("settings-user.template"))} class="mt-3 inline-flex items-center text-xs font-bold text-blue-700 dark:text-blue-300 hover:underline" data-v-9a120553${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon, {
                    icon: "fa-solid fa-download",
                    class: "mr-1.5"
                  }, null, _parent3, _scopeId2));
                  _push3(` Unduh Template Excel </a></div><div data-v-9a120553${_scopeId2}><label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-2" data-v-9a120553${_scopeId2}> File Excel / CSV </label><input type="file" accept=".xlsx, .xls, .csv" required class="w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-slate-800 dark:file:text-slate-300 transition-all cursor-pointer border border-slate-200 dark:border-slate-700 rounded-xl p-2" data-v-9a120553${_scopeId2}>`);
                  if (unref(importForm).errors.file) {
                    _push3(`<div class="text-rose-500 text-xs mt-1 font-medium" data-v-9a120553${_scopeId2}>${ssrInterpolate(unref(importForm).errors.file)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div></form>`);
                } else {
                  return [
                    createVNode("form", {
                      onSubmit: withModifiers(submitImport, ["prevent"])
                    }, [
                      createVNode("div", { class: "space-y-6" }, [
                        createVNode("div", { class: "bg-blue-50 dark:bg-blue-500/10 p-4 rounded-xl border border-blue-100 dark:border-blue-500/20" }, [
                          createVNode("h4", { class: "text-blue-800 dark:text-blue-300 font-bold text-sm mb-2 flex items-center" }, [
                            createVNode(_component_icon, {
                              icon: "fa-solid fa-circle-info",
                              class: "mr-2"
                            }),
                            createTextVNode(" Panduan Import ")
                          ]),
                          createVNode("p", { class: "text-xs text-blue-600 dark:text-blue-400 leading-relaxed" }, [
                            createTextVNode(" Pastikan format kolom file Excel/CSV sesuai dengan template standar sistem AMI. Anda wajib menyediakan kolom "),
                            createVNode("b", null, "Name, Email, dan Role (admin/auditor/auditee)"),
                            createTextVNode(". ")
                          ]),
                          createVNode("a", {
                            href: _ctx.route("settings-user.template"),
                            class: "mt-3 inline-flex items-center text-xs font-bold text-blue-700 dark:text-blue-300 hover:underline"
                          }, [
                            createVNode(_component_icon, {
                              icon: "fa-solid fa-download",
                              class: "mr-1.5"
                            }),
                            createTextVNode(" Unduh Template Excel ")
                          ], 8, ["href"])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-2" }, " File Excel / CSV "),
                          createVNode("input", {
                            type: "file",
                            onChange: handleFileUpload,
                            accept: ".xlsx, .xls, .csv",
                            required: "",
                            class: "w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-slate-800 dark:file:text-slate-300 transition-all cursor-pointer border border-slate-200 dark:border-slate-700 rounded-xl p-2"
                          }, null, 32),
                          unref(importForm).errors.file ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-rose-500 text-xs mt-1 font-medium"
                          }, toDisplayString(unref(importForm).errors.file), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ], 32)
                  ];
                }
              }),
              "footer-right": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col sm:flex-row justify-end items-center gap-3" data-v-9a120553${_scopeId2}><button type="button" class="w-full sm:w-auto px-6 py-3 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all h-11 flex items-center justify-center" data-v-9a120553${_scopeId2}> Batal </button><button type="button"${ssrIncludeBooleanAttr(unref(importForm).processing) ? " disabled" : ""} class="w-full sm:w-auto px-6 py-3 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-br from-blue-500 to-blue-600 h-11 flex items-center justify-center" data-v-9a120553${_scopeId2}>`);
                  if (unref(importForm).processing) {
                    _push3(`<span class="flex items-center" data-v-9a120553${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_icon, {
                      icon: "fa-solid fa-circle-notch",
                      class: "animate-spin mr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(` Mengunggah... </span>`);
                  } else {
                    _push3(`<span class="flex items-center" data-v-9a120553${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_icon, {
                      icon: "fa-solid fa-upload",
                      class: "mr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(` Mulai Import </span>`);
                  }
                  _push3(`</button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col sm:flex-row justify-end items-center gap-3" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: closeImportModal,
                        class: "w-full sm:w-auto px-6 py-3 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all h-11 flex items-center justify-center"
                      }, " Batal "),
                      createVNode("button", {
                        type: "button",
                        onClick: submitImport,
                        disabled: unref(importForm).processing,
                        class: "w-full sm:w-auto px-6 py-3 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-br from-blue-500 to-blue-600 h-11 flex items-center justify-center"
                      }, [
                        unref(importForm).processing ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "flex items-center"
                        }, [
                          createVNode(_component_icon, {
                            icon: "fa-solid fa-circle-notch",
                            class: "animate-spin mr-2"
                          }),
                          createTextVNode(" Mengunggah... ")
                        ])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "flex items-center"
                        }, [
                          createVNode(_component_icon, {
                            icon: "fa-solid fa-upload",
                            class: "mr-2"
                          }),
                          createTextVNode(" Mulai Import ")
                        ]))
                      ], 8, ["disabled"])
                    ])
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
                        placeholder: "Cari nama atau email...",
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
                              createTextVNode(" Pengguna "),
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
                            onClick: ($event) => handleSort("role"),
                            class: "p-6 md:p-8 cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createTextVNode(" Role "),
                              createVNode("div", { class: "flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-up",
                                  class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "role" && __props.filters.direction === "asc" }, "-mb-1"]
                                }, null, 8, ["class"]),
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-down",
                                  class: { "text-rose-500 opacity-100": __props.filters.sort_field === "role" && __props.filters.direction === "desc" }
                                }, null, 8, ["class"])
                              ])
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", { class: "p-6 md:p-8" }, "Unit Kerja"),
                          createVNode("th", {
                            onClick: ($event) => handleSort("two_factor_confirmed_at"),
                            class: "p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none"
                          }, [
                            createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                              createTextVNode(" 2FA "),
                              createVNode("div", { class: "flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-up",
                                  class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "two_factor_confirmed_at" && __props.filters.direction === "asc" }, "-mb-1"]
                                }, null, 8, ["class"]),
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-caret-down",
                                  class: { "text-rose-500 opacity-100": __props.filters.sort_field === "two_factor_confirmed_at" && __props.filters.direction === "desc" }
                                }, null, 8, ["class"])
                              ])
                            ])
                          ], 8, ["onClick"]),
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
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "h-6 w-8 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-md" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pl-8" }, [
                              createVNode("div", { class: "flex items-center gap-4" }, [
                                createVNode("div", { class: "w-10 h-10 bg-slate-200 dark:bg-slate-700/50 rounded-full" }),
                                createVNode("div", { class: "space-y-2" }, [
                                  createVNode("div", { class: "h-4 w-32 bg-slate-200 dark:bg-slate-700/50 rounded" }),
                                  createVNode("div", { class: "h-3 w-48 bg-slate-200 dark:bg-slate-700/50 rounded" })
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "h-6 w-20 bg-slate-200 dark:bg-slate-700/50 rounded-md" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "h-4 w-32 bg-slate-200 dark:bg-slate-700/50 rounded" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 flex justify-center" }, [
                              createVNode("div", { class: "h-8 w-8 bg-slate-200 dark:bg-slate-700/50 rounded-full" })
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "h-8 w-24 mx-auto bg-slate-200 dark:bg-slate-700/50 rounded-lg" })
                            ])
                          ]);
                        }), 64))
                      ])) : __props.users.data.length === 0 ? (openBlock(), createBlock("tbody", {
                        key: 1,
                        class: "divide-y divide-slate-50 dark:divide-slate-800/20"
                      }, [
                        createVNode("tr", null, [
                          createVNode("td", {
                            colspan: "6",
                            class: "p-16 text-center"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center text-slate-400 dark:text-slate-500" }, [
                              createVNode("div", { class: "w-24 h-24 mb-6 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner" }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-users-slash",
                                  class: "text-4xl text-slate-300 dark:text-slate-600"
                                })
                              ]),
                              createVNode("h3", { class: "text-lg font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest" }, " Belum Ada Pengguna"),
                              createVNode("p", { class: "text-xs max-w-sm text-center leading-relaxed font-bold" }, " Sistem belum mencatat data pengguna apa pun atau pencarian Anda tidak memiliki kecocokan data. "),
                              search.value ? (openBlock(), createBlock("button", {
                                key: 0,
                                onClick: ($event) => search.value = "",
                                class: "mt-8 px-6 py-3 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 text-xs font-black tracking-widest uppercase rounded-xl transition hover:bg-rose-100 dark:hover:bg-rose-500/20 active:scale-95 shadow-sm"
                              }, " Bersihkan Pencarian ", 8, ["onClick"])) : (openBlock(), createBlock("button", {
                                key: 1,
                                onClick: openCreateModal,
                                class: "mt-8 px-6 py-3 bg-slate-900 text-white dark:bg-rose-600 text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg active:scale-95 hover:shadow-xl hover:bg-slate-800 dark:hover:bg-rose-500"
                              }, " Tambahkan Pengguna Baru "))
                            ])
                          ])
                        ])
                      ])) : (openBlock(), createBlock("tbody", {
                        key: 2,
                        class: "divide-y divide-slate-50 dark:divide-slate-800/20"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.users.data, (item) => {
                          return openBlock(), createBlock("tr", {
                            key: item.id,
                            class: "group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300"
                          }, [
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              createVNode("span", { class: "font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" }, toDisplayString(__props.users.from + __props.users.data.indexOf(item)), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 pl-8" }, [
                              createVNode("div", { class: "flex items-center gap-4" }, [
                                createVNode("img", {
                                  src: item.profile_photo_url,
                                  class: "w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-sm"
                                }, null, 8, ["src"]),
                                createVNode("div", null, [
                                  createVNode("div", { class: "font-bold text-slate-800 dark:text-slate-200 text-sm mb-0.5" }, toDisplayString(item.name), 1),
                                  createVNode("div", { class: "text-[10px] font-medium text-slate-400 tracking-tight" }, toDisplayString(item.email), 1)
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("span", {
                                class: [
                                  "px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border shadow-sm",
                                  item.role === "admin" ? "bg-rose-50 dark:bg-rose-500/10 text-rose-600 border-rose-100 dark:border-rose-500/20" : item.role === "auditor" ? "bg-amber-50 dark:bg-amber-500/10 text-amber-600 border-amber-100 dark:border-amber-500/20" : "bg-blue-50 dark:bg-blue-500/10 text-blue-600 border-blue-100 dark:border-blue-500/20"
                                ]
                              }, toDisplayString(item.role), 3)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("span", { class: "text-xs font-bold text-slate-600 dark:text-slate-400" }, toDisplayString(getUnitName(item)), 1)
                            ]),
                            createVNode("td", { class: "p-6 md:p-8 text-center" }, [
                              item.two_factor_confirmed_at ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 border border-emerald-100 dark:border-emerald-500/20",
                                title: "2FA Aktif"
                              }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-shield-halved",
                                  class: "text-xs"
                                })
                              ])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-300 border border-slate-100 dark:border-slate-700"
                              }, [
                                createVNode(_component_icon, {
                                  icon: "fa-solid fa-lock-open",
                                  class: "text-xs"
                                })
                              ]))
                            ]),
                            createVNode("td", { class: "p-6 md:p-8" }, [
                              createVNode("div", { class: "flex justify-center gap-2" }, [
                                item.two_factor_confirmed_at ? (openBlock(), createBlock("button", {
                                  key: 0,
                                  onClick: ($event) => reset2FA(item.id),
                                  class: "w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-amber-200 active:scale-95",
                                  title: "Reset 2FA"
                                }, [
                                  createVNode(_component_icon, {
                                    icon: "fa-solid fa-key",
                                    class: "text-[10px]"
                                  })
                                ], 8, ["onClick"])) : createCommentVNode("", true),
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
                    createVNode("div", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" }, " Data " + toDisplayString(__props.users.from) + " - " + toDisplayString(__props.users.to) + " dari total " + toDisplayString(__props.users.total), 1),
                    createVNode("div", { class: "flex flex-wrap justify-center gap-1.5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.users.links, (link, k) => {
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
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10 flex flex-col max-h-[85vh]" }, [
                  createVNode("div", { class: "p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center shrink-0" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" }, toDisplayString(editMode.value ? "Edit User" : "User Baru"), 1),
                      createVNode("p", { class: "text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" }, " Manajemen Hak Akses ")
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
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Nama Lengkap"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          type: "text",
                          required: "",
                          class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).name]
                        ]),
                        unref(form).errors.name ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-rose-500 font-bold ml-1"
                        }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Email"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          type: "email",
                          required: "",
                          class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).email]
                        ]),
                        unref(form).errors.email ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-rose-500 font-bold ml-1"
                        }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Password"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          type: "password",
                          required: !editMode.value,
                          class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
                        }, null, 8, ["onUpdate:modelValue", "required"]), [
                          [vModelText, unref(form).password]
                        ]),
                        editMode.value ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-[10px] text-slate-400 font-bold italic ml-1"
                        }, "* Kosongkan jika tidak ganti")) : createCommentVNode("", true),
                        unref(form).errors.password ? (openBlock(), createBlock("p", {
                          key: 1,
                          class: "text-xs text-rose-500 font-bold ml-1"
                        }, toDisplayString(unref(form).errors.password), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Konfirmasi Password"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                          type: "password",
                          required: !editMode.value,
                          class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
                        }, null, 8, ["onUpdate:modelValue", "required"]), [
                          [vModelText, unref(form).password_confirmation]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" }, "Role / Hak Akses"),
                      createVNode(TInputSelect, {
                        modelValue: unref(form).role,
                        "onUpdate:modelValue": ($event) => unref(form).role = $event,
                        options: __props.roles.map((r) => ({ id: r, name: r.toUpperCase() })),
                        "options-value-key": "id",
                        "options-label-key": "name",
                        "place-holder": "Pilih Role",
                        radius: 5,
                        class: ["w-full", unref(form).errors.role ? "ring-2 ring-rose-500 rounded-xl" : ""]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "class"]),
                      unref(form).errors.role ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-rose-500 font-bold ml-1"
                      }, toDisplayString(unref(form).errors.role), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode(Transition, {
                      "enter-active-class": "transition ease-out duration-300",
                      "enter-from-class": "opacity-0 -translate-y-2",
                      "enter-to-class": "opacity-100 translate-y-0"
                    }, {
                      default: withCtx(() => [
                        unref(form).role === "auditee" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-4"
                        }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_icon, {
                              icon: "fa-solid fa-building-user",
                              class: "text-rose-500"
                            }),
                            createVNode("span", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest" }, "Penempatan Unit Kerja")
                          ]),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode("label", { class: "text-[10px] font-bold text-slate-500 uppercase" }, "Program Studi"),
                              createVNode(TInputSelect, {
                                modelValue: unref(form).prodi_id,
                                "onUpdate:modelValue": ($event) => unref(form).prodi_id = $event,
                                options: filteredProdis.value,
                                "options-value-key": "id",
                                "options-label-key": "name",
                                "place-holder": "Pilih Program Studi",
                                search: true,
                                "search-place-holder": "Cari prodi...",
                                "clear-button": true,
                                radius: 5,
                                class: "w-full ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                              unref(form).errors.prodi_id ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-rose-500 font-bold ml-1"
                              }, toDisplayString(unref(form).errors.prodi_id), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode("label", { class: "text-[10px] font-bold text-slate-500 uppercase" }, "Fakultas"),
                              createVNode(TInputSelect, {
                                modelValue: unref(form).faculty_id,
                                "onUpdate:modelValue": ($event) => unref(form).faculty_id = $event,
                                options: filteredFaculties.value,
                                "options-value-key": "id",
                                "options-label-key": "name",
                                "place-holder": "Pilih Fakultas",
                                search: true,
                                "search-place-holder": "Cari fakultas...",
                                "clear-button": true,
                                radius: 5,
                                class: "w-full ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                              unref(form).errors.faculty_id ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-rose-500 font-bold ml-1"
                              }, toDisplayString(unref(form).errors.faculty_id), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("p", { class: "text-[10px] text-rose-500 font-bold italic leading-tight" }, "* Pilih unit yang sesuai dengan cakupan audit pengguna ini.")
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "pt-4 border-t border-slate-100 dark:border-slate-800" }, [
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(form).processing,
                        class: "w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
                      }, toDisplayString(unref(form).processing ? "Menyimpan..." : editMode.value ? "Simpan Perubahan" : "Buat User Baru"), 9, ["disabled"])
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
                title: withCtx(() => [
                  createTextVNode(" Konfirmasi Hapus ")
                ]),
                content: withCtx(() => [
                  createVNode("div", { class: "flex items-center gap-4 py-2" }, [
                    createVNode("div", { class: "w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-500/20 flex flex-shrink-0 items-center justify-center" }, [
                      createVNode(_component_icon, {
                        icon: "fa-solid fa-triangle-exclamation",
                        class: "text-rose-500 text-xl"
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode("h4", { class: "text-base font-bold text-slate-800 dark:text-slate-200 mb-1" }, "Hapus Data Pengguna? "),
                      createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400" }, " Tindakan ini akan memindahkan pengguna ke dalam tong sampah (Soft Delete) dan dapat menghilangkan aksesnya dari sistem. Lanjutkan? ")
                    ])
                  ])
                ]),
                "footer-right": withCtx(() => [
                  createVNode("div", { class: "flex justify-end gap-3 rounded-b-3xl" }, [
                    createVNode("button", {
                      onClick: ($event) => showDeleteModal.value = false,
                      class: "px-5 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
                    }, " Batal ", 8, ["onClick"]),
                    createVNode("button", {
                      onClick: executeDelete,
                      class: "px-5 py-2.5 text-xs font-bold text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition-colors shadow-sm shadow-rose-500/30"
                    }, " Ya, Hapus ")
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
                title: withCtx(() => [
                  createTextVNode(" Import Pengguna Baru ")
                ]),
                content: withCtx(() => [
                  createVNode("form", {
                    onSubmit: withModifiers(submitImport, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", { class: "bg-blue-50 dark:bg-blue-500/10 p-4 rounded-xl border border-blue-100 dark:border-blue-500/20" }, [
                        createVNode("h4", { class: "text-blue-800 dark:text-blue-300 font-bold text-sm mb-2 flex items-center" }, [
                          createVNode(_component_icon, {
                            icon: "fa-solid fa-circle-info",
                            class: "mr-2"
                          }),
                          createTextVNode(" Panduan Import ")
                        ]),
                        createVNode("p", { class: "text-xs text-blue-600 dark:text-blue-400 leading-relaxed" }, [
                          createTextVNode(" Pastikan format kolom file Excel/CSV sesuai dengan template standar sistem AMI. Anda wajib menyediakan kolom "),
                          createVNode("b", null, "Name, Email, dan Role (admin/auditor/auditee)"),
                          createTextVNode(". ")
                        ]),
                        createVNode("a", {
                          href: _ctx.route("settings-user.template"),
                          class: "mt-3 inline-flex items-center text-xs font-bold text-blue-700 dark:text-blue-300 hover:underline"
                        }, [
                          createVNode(_component_icon, {
                            icon: "fa-solid fa-download",
                            class: "mr-1.5"
                          }),
                          createTextVNode(" Unduh Template Excel ")
                        ], 8, ["href"])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-2" }, " File Excel / CSV "),
                        createVNode("input", {
                          type: "file",
                          onChange: handleFileUpload,
                          accept: ".xlsx, .xls, .csv",
                          required: "",
                          class: "w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-slate-800 dark:file:text-slate-300 transition-all cursor-pointer border border-slate-200 dark:border-slate-700 rounded-xl p-2"
                        }, null, 32),
                        unref(importForm).errors.file ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-rose-500 text-xs mt-1 font-medium"
                        }, toDisplayString(unref(importForm).errors.file), 1)) : createCommentVNode("", true)
                      ])
                    ])
                  ], 32)
                ]),
                "footer-right": withCtx(() => [
                  createVNode("div", { class: "flex flex-col sm:flex-row justify-end items-center gap-3" }, [
                    createVNode("button", {
                      type: "button",
                      onClick: closeImportModal,
                      class: "w-full sm:w-auto px-6 py-3 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all h-11 flex items-center justify-center"
                    }, " Batal "),
                    createVNode("button", {
                      type: "button",
                      onClick: submitImport,
                      disabled: unref(importForm).processing,
                      class: "w-full sm:w-auto px-6 py-3 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-br from-blue-500 to-blue-600 h-11 flex items-center justify-center"
                    }, [
                      unref(importForm).processing ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "flex items-center"
                      }, [
                        createVNode(_component_icon, {
                          icon: "fa-solid fa-circle-notch",
                          class: "animate-spin mr-2"
                        }),
                        createTextVNode(" Mengunggah... ")
                      ])) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "flex items-center"
                      }, [
                        createVNode(_component_icon, {
                          icon: "fa-solid fa-upload",
                          class: "mr-2"
                        }),
                        createTextVNode(" Mulai Import ")
                      ]))
                    ], 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/User/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9a120553"]]);
export {
  Index as default
};

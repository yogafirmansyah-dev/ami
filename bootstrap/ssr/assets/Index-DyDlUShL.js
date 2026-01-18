import { ref, watch, resolveComponent, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withDirectives, vModelText, vModelSelect, createTextVNode, openBlock, Fragment, renderList, toDisplayString, withModifiers, Transition, useSSRContext } from "vue";
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
    users: Object,
    // Paginated data
    filters: Object,
    roles: Array,
    prodis: Array,
    faculties: Array
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    const perPage = ref(props.filters.per_page || 10);
    watch(search, debounce((value) => {
      router.get(route("admin.users.index"), { search: value, per_page: perPage.value }, { preserveState: true, replace: true });
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
    const deleteData = (id) => {
      if (confirm("Hapus pengguna ini secara permanen?")) {
        router.delete(route("admin.users.destroy", id));
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
            _push2(`<button class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10" data-v-ccb95941${_scopeId}><span class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" data-v-ccb95941${_scopeId}>+</span> Tambah User </button>`);
          } else {
            return [
              createVNode("button", {
                onClick: openCreateModal,
                class: "group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10"
              }, [
                createVNode("span", { class: "mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" }, "+"),
                createTextVNode(" Tambah User ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-ccb95941${_scopeId}><div class="flex flex-col lg:flex-row justify-between items-center gap-6" data-v-ccb95941${_scopeId}><div class="flex items-stretch gap-3 w-full max-w-2xl" data-v-ccb95941${_scopeId}><div class="relative flex-1 group" data-v-ccb95941${_scopeId}><span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" data-v-ccb95941${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-magnifying-glass",
              class: "text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors"
            }, null, _parent2, _scopeId));
            _push2(`</span><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama atau email..." class="w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" data-v-ccb95941${_scopeId}></div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300" data-v-ccb95941${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2" data-v-ccb95941${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none" data-v-ccb95941${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-ccb95941${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-ccb95941${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-ccb95941${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option><option${ssrRenderAttr("value", 100)} data-v-ccb95941${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 100) : ssrLooseEqual(perPage.value, 100)) ? " selected" : ""}${_scopeId}>100</option></select></div></div><div class="flex items-center gap-3" data-v-ccb95941${_scopeId}></div></div><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" data-v-ccb95941${_scopeId}><div class="overflow-x-auto custom-scrollbar" data-v-ccb95941${_scopeId}><table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full" data-v-ccb95941${_scopeId}><thead data-v-ccb95941${_scopeId}><tr class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" data-v-ccb95941${_scopeId}><th class="p-6 md:p-8 pl-8 text-center" data-v-ccb95941${_scopeId}>No</th><th class="p-6 md:p-8 pl-8 cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-ccb95941${_scopeId}><div class="flex items-center gap-2" data-v-ccb95941${_scopeId}> Pengguna <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-ccb95941${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "name" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "name" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8 cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-ccb95941${_scopeId}><div class="flex items-center gap-2" data-v-ccb95941${_scopeId}> Role <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-ccb95941${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "role" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "role" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8" data-v-ccb95941${_scopeId}>Unit Kerja</th><th class="p-6 md:p-8 text-center cursor-pointer hover:text-rose-500 transition-colors group select-none" data-v-ccb95941${_scopeId}><div class="flex items-center justify-center gap-2" data-v-ccb95941${_scopeId}> 2FA <div class="flex flex-col text-[8px] opacity-30 group-hover:opacity-100 transition-opacity" data-v-ccb95941${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-up",
              class: [{ "text-rose-500 opacity-100": __props.filters.sort_field === "two_factor_confirmed_at" && __props.filters.direction === "asc" }, "-mb-1"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-caret-down",
              class: { "text-rose-500 opacity-100": __props.filters.sort_field === "two_factor_confirmed_at" && __props.filters.direction === "desc" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></th><th class="p-6 md:p-8 text-center" data-v-ccb95941${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-ccb95941${_scopeId}><!--[-->`);
            ssrRenderList(__props.users.data, (item) => {
              _push2(`<tr class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300" data-v-ccb95941${_scopeId}><td class="p-6 md:p-8 text-center" data-v-ccb95941${_scopeId}><span class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" data-v-ccb95941${_scopeId}>${ssrInterpolate(__props.users.from + __props.users.data.indexOf(item))}</span></td><td class="p-6 md:p-8 pl-8" data-v-ccb95941${_scopeId}><div class="flex items-center gap-4" data-v-ccb95941${_scopeId}><img${ssrRenderAttr("src", item.profile_photo_url)} class="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-sm" data-v-ccb95941${_scopeId}><div data-v-ccb95941${_scopeId}><div class="font-bold text-slate-800 dark:text-slate-200 text-sm mb-0.5" data-v-ccb95941${_scopeId}>${ssrInterpolate(item.name)}</div><div class="text-[10px] font-medium text-slate-400 tracking-tight" data-v-ccb95941${_scopeId}>${ssrInterpolate(item.email)}</div></div></div></td><td class="p-6 md:p-8" data-v-ccb95941${_scopeId}><span class="${ssrRenderClass([
                "px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border shadow-sm",
                item.role === "admin" ? "bg-rose-50 dark:bg-rose-500/10 text-rose-600 border-rose-100 dark:border-rose-500/20" : item.role === "auditor" ? "bg-amber-50 dark:bg-amber-500/10 text-amber-600 border-amber-100 dark:border-amber-500/20" : "bg-blue-50 dark:bg-blue-500/10 text-blue-600 border-blue-100 dark:border-blue-500/20"
              ])}" data-v-ccb95941${_scopeId}>${ssrInterpolate(item.role)}</span></td><td class="p-6 md:p-8" data-v-ccb95941${_scopeId}><span class="text-xs font-bold text-slate-600 dark:text-slate-400" data-v-ccb95941${_scopeId}>${ssrInterpolate(getUnitName(item))}</span></td><td class="p-6 md:p-8 text-center" data-v-ccb95941${_scopeId}>`);
              if (item.two_factor_confirmed_at) {
                _push2(`<div class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 border border-emerald-100 dark:border-emerald-500/20" title="2FA Aktif" data-v-ccb95941${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-shield-halved",
                  class: "text-xs"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<div class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-300 border border-slate-100 dark:border-slate-700" data-v-ccb95941${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-lock-open",
                  class: "text-xs"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`</td><td class="p-6 md:p-8" data-v-ccb95941${_scopeId}><div class="flex justify-center gap-2" data-v-ccb95941${_scopeId}>`);
              if (item.two_factor_confirmed_at) {
                _push2(`<button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-amber-200 active:scale-95" title="Reset 2FA" data-v-ccb95941${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-key",
                  class: "text-[10px]"
                }, null, _parent2, _scopeId));
                _push2(`</button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95" data-v-ccb95941${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-pencil",
                class: "text-[10px]"
              }, null, _parent2, _scopeId));
              _push2(`</button><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95" data-v-ccb95941${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-trash",
                class: "text-[10px]"
              }, null, _parent2, _scopeId));
              _push2(`</button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.users.data.length === 0) {
              _push2(`<tr data-v-ccb95941${_scopeId}><td colspan="5" class="p-12 text-center" data-v-ccb95941${_scopeId}><div class="flex flex-col items-center justify-center opacity-50" data-v-ccb95941${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-users-slash",
                class: "text-4xl text-slate-300 dark:text-slate-600 mb-4"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-xs font-black text-slate-400 uppercase tracking-widest italic" data-v-ccb95941${_scopeId}> Belum ada pengguna ditemukan</p></div></td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-ccb95941${_scopeId}><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" data-v-ccb95941${_scopeId}> Data ${ssrInterpolate(__props.users.from)} - ${ssrInterpolate(__props.users.to)} dari total ${ssrInterpolate(__props.users.total)}</div><div class="flex flex-wrap justify-center gap-1.5" data-v-ccb95941${_scopeId}><!--[-->`);
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
                ])}" data-v-ccb95941${_scopeId}>${link.label ?? ""}</span>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" data-v-ccb95941${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" data-v-ccb95941${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10 flex flex-col max-h-[85vh]" data-v-ccb95941${_scopeId}><div class="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center shrink-0" data-v-ccb95941${_scopeId}><div data-v-ccb95941${_scopeId}><h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" data-v-ccb95941${_scopeId}>${ssrInterpolate(editMode.value ? "Edit User" : "User Baru")}</h3><p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" data-v-ccb95941${_scopeId}> Manajemen Hak Akses </p></div><button class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg" data-v-ccb95941${_scopeId}>×</button></div><form class="p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1" data-v-ccb95941${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-ccb95941${_scopeId}><div class="space-y-2" data-v-ccb95941${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-ccb95941${_scopeId}>Nama Lengkap</label><input${ssrRenderAttr("value", unref(form).name)} type="text" required class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-ccb95941${_scopeId}>`);
              if (unref(form).errors.name) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-ccb95941${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-ccb95941${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-ccb95941${_scopeId}>Email</label><input${ssrRenderAttr("value", unref(form).email)} type="email" required class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-ccb95941${_scopeId}>`);
              if (unref(form).errors.email) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-ccb95941${_scopeId}>${ssrInterpolate(unref(form).errors.email)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-ccb95941${_scopeId}><div class="space-y-2" data-v-ccb95941${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-ccb95941${_scopeId}>Password</label><input${ssrRenderAttr("value", unref(form).password)} type="password"${ssrIncludeBooleanAttr(!editMode.value) ? " required" : ""} class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-ccb95941${_scopeId}>`);
              if (editMode.value) {
                _push2(`<p class="text-[10px] text-slate-400 font-bold italic ml-1" data-v-ccb95941${_scopeId}>* Kosongkan jika tidak ganti</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(form).errors.password) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-ccb95941${_scopeId}>${ssrInterpolate(unref(form).errors.password)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-ccb95941${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-ccb95941${_scopeId}>Konfirmasi Password</label><input${ssrRenderAttr("value", unref(form).password_confirmation)} type="password"${ssrIncludeBooleanAttr(!editMode.value) ? " required" : ""} class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-ccb95941${_scopeId}></div></div><div class="space-y-2" data-v-ccb95941${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-ccb95941${_scopeId}>Role / Hak Akses</label><select required class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-ccb95941${_scopeId}><option value="" disabled data-v-ccb95941${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "") : ssrLooseEqual(unref(form).role, "")) ? " selected" : ""}${_scopeId}>Pilih Role</option><!--[-->`);
              ssrRenderList(__props.roles, (role) => {
                _push2(`<option${ssrRenderAttr("value", role)} data-v-ccb95941${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, role) : ssrLooseEqual(unref(form).role, role)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(role.toUpperCase())}</option>`);
              });
              _push2(`<!--]--></select>`);
              if (unref(form).errors.role) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-ccb95941${_scopeId}>${ssrInterpolate(unref(form).errors.role)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (unref(form).role === "auditee") {
                _push2(`<div class="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-4" data-v-ccb95941${_scopeId}><div class="flex items-center gap-2" data-v-ccb95941${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, {
                  icon: "fa-solid fa-building-user",
                  class: "text-rose-500"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-[10px] font-black text-slate-400 uppercase tracking-widest" data-v-ccb95941${_scopeId}>Penempatan Unit Kerja</span></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-ccb95941${_scopeId}><div class="space-y-2" data-v-ccb95941${_scopeId}><label class="text-[10px] font-bold text-slate-500 uppercase" data-v-ccb95941${_scopeId}>Program Studi</label><select class="w-full px-4 py-2.5 text-xs font-bold border-none ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-rose-500" data-v-ccb95941${_scopeId}><option${ssrRenderAttr("value", null)} data-v-ccb95941${ssrIncludeBooleanAttr(Array.isArray(unref(form).prodi_id) ? ssrLooseContain(unref(form).prodi_id, null) : ssrLooseEqual(unref(form).prodi_id, null)) ? " selected" : ""}${_scopeId}>Tidak Ada</option><!--[-->`);
                ssrRenderList(__props.prodis, (prodi) => {
                  _push2(`<option${ssrRenderAttr("value", prodi.id)} data-v-ccb95941${ssrIncludeBooleanAttr(Array.isArray(unref(form).prodi_id) ? ssrLooseContain(unref(form).prodi_id, prodi.id) : ssrLooseEqual(unref(form).prodi_id, prodi.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(prodi.name)}</option>`);
                });
                _push2(`<!--]--></select>`);
                if (unref(form).errors.prodi_id) {
                  _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-ccb95941${_scopeId}>${ssrInterpolate(unref(form).errors.prodi_id)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="space-y-2" data-v-ccb95941${_scopeId}><label class="text-[10px] font-bold text-slate-500 uppercase" data-v-ccb95941${_scopeId}>Fakultas</label><select class="w-full px-4 py-2.5 text-xs font-bold border-none ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-rose-500" data-v-ccb95941${_scopeId}><option${ssrRenderAttr("value", null)} data-v-ccb95941${ssrIncludeBooleanAttr(Array.isArray(unref(form).faculty_id) ? ssrLooseContain(unref(form).faculty_id, null) : ssrLooseEqual(unref(form).faculty_id, null)) ? " selected" : ""}${_scopeId}>Tidak Ada</option><!--[-->`);
                ssrRenderList(__props.faculties, (fac) => {
                  _push2(`<option${ssrRenderAttr("value", fac.id)} data-v-ccb95941${ssrIncludeBooleanAttr(Array.isArray(unref(form).faculty_id) ? ssrLooseContain(unref(form).faculty_id, fac.id) : ssrLooseEqual(unref(form).faculty_id, fac.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(fac.name)}</option>`);
                });
                _push2(`<!--]--></select>`);
                if (unref(form).errors.faculty_id) {
                  _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-ccb95941${_scopeId}>${ssrInterpolate(unref(form).errors.faculty_id)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><p class="text-[10px] text-rose-500 font-bold italic leading-tight" data-v-ccb95941${_scopeId}>* Pilih unit yang sesuai dengan cakupan audit pengguna ini.</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="pt-4 border-t border-slate-100 dark:border-slate-800" data-v-ccb95941${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50" data-v-ccb95941${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : editMode.value ? "Simpan Perubahan" : "Buat User Baru")}</button></div></form></div></div>`);
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
                        placeholder: "Cari nama atau email...",
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
                      createVNode("tbody", { class: "divide-y divide-slate-50 dark:divide-slate-800/20" }, [
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
                        __props.users.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                          createVNode("td", {
                            colspan: "5",
                            class: "p-12 text-center"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center opacity-50" }, [
                              createVNode(_component_icon, {
                                icon: "fa-solid fa-users-slash",
                                class: "text-4xl text-slate-300 dark:text-slate-600 mb-4"
                              }),
                              createVNode("p", { class: "text-xs font-black text-slate-400 uppercase tracking-widest italic" }, " Belum ada pengguna ditemukan")
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ])
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
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => unref(form).role = $event,
                        required: "",
                        class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
                      }, [
                        createVNode("option", {
                          value: "",
                          disabled: ""
                        }, "Pilih Role"),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
                          return openBlock(), createBlock("option", {
                            key: role,
                            value: role
                          }, toDisplayString(role.toUpperCase()), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(form).role]
                      ]),
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
                              withDirectives(createVNode("select", {
                                "onUpdate:modelValue": ($event) => unref(form).prodi_id = $event,
                                class: "w-full px-4 py-2.5 text-xs font-bold border-none ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-rose-500"
                              }, [
                                createVNode("option", { value: null }, "Tidak Ada"),
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.prodis, (prodi) => {
                                  return openBlock(), createBlock("option", {
                                    key: prodi.id,
                                    value: prodi.id
                                  }, toDisplayString(prodi.name), 9, ["value"]);
                                }), 128))
                              ], 8, ["onUpdate:modelValue"]), [
                                [vModelSelect, unref(form).prodi_id]
                              ]),
                              unref(form).errors.prodi_id ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-rose-500 font-bold ml-1"
                              }, toDisplayString(unref(form).errors.prodi_id), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode("label", { class: "text-[10px] font-bold text-slate-500 uppercase" }, "Fakultas"),
                              withDirectives(createVNode("select", {
                                "onUpdate:modelValue": ($event) => unref(form).faculty_id = $event,
                                class: "w-full px-4 py-2.5 text-xs font-bold border-none ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-rose-500"
                              }, [
                                createVNode("option", { value: null }, "Tidak Ada"),
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.faculties, (fac) => {
                                  return openBlock(), createBlock("option", {
                                    key: fac.id,
                                    value: fac.id
                                  }, toDisplayString(fac.name), 9, ["value"]);
                                }), 128))
                              ], 8, ["onUpdate:modelValue"]), [
                                [vModelSelect, unref(form).faculty_id]
                              ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/User/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ccb95941"]]);
export {
  Index as default
};

import { ref, watch, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withDirectives, vModelText, openBlock, Fragment, renderList, toDisplayString, withModifiers, vModelSelect, Transition, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { router, useForm } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-BkpuvVky.js";
import debounce from "lodash/debounce.js";
import "@vueuse/core";
import "./TButton-oXLR37ud.js";
import "./windowSizeCalculator-4-m3qk2a.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
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
    watch(search, debounce((value) => {
      router.get(route("admin.users.index"), { search: value }, { preserveState: true, replace: true });
    }, 500));
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
        form.put(route("admin.users.update", form.id), { onSuccess: () => closeModal() });
      } else {
        form.post(route("admin.users.store"), { onSuccess: () => closeModal() });
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
            _push2(`<button class="inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-sm transition-all active:scale-95"${_scopeId}><span class="mr-2"${_scopeId}>+</span> Tambah User </button>`);
          } else {
            return [
              createVNode("button", {
                onClick: openCreateModal,
                class: "inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-sm transition-all active:scale-95"
              }, [
                createVNode("span", { class: "mr-2" }, "+"),
                createTextVNode(" Tambah User ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex justify-end"${_scopeId}><div class="relative w-full max-w-sm"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama atau email..." class="w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 outline-none transition-all"${_scopeId}></div></div><div class="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800"${_scopeId}><table class="w-full text-sm text-left"${_scopeId}><thead class="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 uppercase text-[11px] font-bold tracking-wider"${_scopeId}><tr${_scopeId}><th class="p-4"${_scopeId}>Pengguna</th><th class="p-4"${_scopeId}>Role</th><th class="p-4"${_scopeId}>Unit Kerja</th><th class="p-4 text-center"${_scopeId}>2FA</th><th class="p-4 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-200 dark:divide-slate-800"${_scopeId}><!--[-->`);
            ssrRenderList(__props.users.data, (item) => {
              _push2(`<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"${_scopeId}><td class="p-4"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><img${ssrRenderAttr("src", item.profile_photo_url)} class="w-9 h-9 rounded-full border-2 border-slate-100"${_scopeId}><div${_scopeId}><div class="font-bold text-slate-700 dark:text-slate-200"${_scopeId}>${ssrInterpolate(item.name)}</div><div class="text-xs text-slate-400"${_scopeId}>${ssrInterpolate(item.email)}</div></div></div></td><td class="p-4"${_scopeId}><span class="${ssrRenderClass([
                "px-2 py-0.5 rounded text-[10px] font-bold uppercase border",
                item.role === "admin" ? "bg-rose-50 text-rose-700 border-rose-100" : item.role === "auditor" ? "bg-amber-50 text-amber-700 border-amber-100" : "bg-blue-50 text-blue-700 border-blue-100"
              ])}"${_scopeId}>${ssrInterpolate(item.role)}</span></td><td class="p-4 text-xs text-slate-600 dark:text-slate-400 font-medium"${_scopeId}>${ssrInterpolate(getUnitName(item))}</td><td class="p-4 text-center"${_scopeId}>`);
              if (item.two_factor_confirmed_at) {
                _push2(`<span class="text-emerald-500" title="2FA Aktif"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"${_scopeId}></path></svg></span>`);
              } else {
                _push2(`<span class="text-slate-200 dark:text-slate-700"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"${_scopeId}></path></svg></span>`);
              }
              _push2(`</td><td class="p-4"${_scopeId}><div class="flex justify-center gap-2"${_scopeId}>`);
              if (item.two_factor_confirmed_at) {
                _push2(`<button class="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors" title="Reset 2FA"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"${_scopeId}></path></svg></button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<button class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"${_scopeId}></path></svg></button><button class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${_scopeId}></path></svg></button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div><div class="flex items-center justify-between py-2"${_scopeId}><div class="text-xs text-slate-500"${_scopeId}> Menampilkan ${ssrInterpolate(__props.users.from)} - ${ssrInterpolate(__props.users.to)} dari ${ssrInterpolate(__props.users.total)} pengguna </div><div class="flex gap-1"${_scopeId}><!--[-->`);
            ssrRenderList(__props.users.links, (link) => {
              _push2(`<button${ssrIncludeBooleanAttr(!link.url) ? " disabled" : ""} class="${ssrRenderClass([[
                link.active ? "bg-rose-600 text-white border-rose-600" : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50",
                !link.url ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              ], "px-3 py-1 text-xs rounded-md border transition-all"])}"${_scopeId}>${link.label ?? ""}</button>`);
            });
            _push2(`<!--]--></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4"${_scopeId}><div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"${_scopeId}><div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center"${_scopeId}><h3 class="text-lg font-bold text-slate-800 dark:text-white"${_scopeId}>${ssrInterpolate(editMode.value ? "Edit User" : "Tambah User")}</h3><button class="text-slate-400 hover:text-slate-600 text-2xl"${_scopeId}>×</button></div><form class="p-6 space-y-5"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div class="space-y-1.5"${_scopeId}><label class="text-sm font-semibold text-slate-700 dark:text-slate-300"${_scopeId}>Nama Lengkap</label><input${ssrRenderAttr("value", unref(form).name)} type="text" required class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900"${_scopeId}>`);
              if (unref(form).errors.name) {
                _push2(`<p class="text-xs text-red-500 mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-1.5"${_scopeId}><label class="text-sm font-semibold text-slate-700 dark:text-slate-300"${_scopeId}>Email</label><input${ssrRenderAttr("value", unref(form).email)} type="email" required class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900"${_scopeId}>`);
              if (unref(form).errors.email) {
                _push2(`<p class="text-xs text-red-500 mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.email)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="space-y-1.5"${_scopeId}><label class="text-sm font-semibold text-slate-700 dark:text-slate-300"${_scopeId}>Password</label><input${ssrRenderAttr("value", unref(form).password)} type="password"${ssrIncludeBooleanAttr(!editMode.value) ? " required" : ""} class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900"${_scopeId}>`);
              if (editMode.value) {
                _push2(`<p class="text-[10px] text-slate-400 mt-1 italic"${_scopeId}>Kosongkan jika tidak ingin ganti password</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(form).errors.password) {
                _push2(`<p class="text-xs text-red-500 mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.password)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-1.5"${_scopeId}><label class="text-sm font-semibold text-slate-700 dark:text-slate-300"${_scopeId}>Password Confirmation</label><input${ssrRenderAttr("value", unref(form).password_confirmation)} type="password"${ssrIncludeBooleanAttr(!editMode.value) ? " required" : ""} class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900"${_scopeId}>`);
              if (unref(form).errors.password_confirmation) {
                _push2(`<p class="text-xs text-red-500 mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.password_confirmation)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-1.5"${_scopeId}><label class="text-sm font-semibold text-slate-700 dark:text-slate-300"${_scopeId}>Role / Hak Akses</label><select required class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"${_scopeId}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "") : ssrLooseEqual(unref(form).role, "")) ? " selected" : ""}${_scopeId}>Pilih Role</option><!--[-->`);
              ssrRenderList(__props.roles, (role) => {
                _push2(`<option${ssrRenderAttr("value", role)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, role) : ssrLooseEqual(unref(form).role, role)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(role.toUpperCase())}</option>`);
              });
              _push2(`<!--]--></select>`);
              if (unref(form).errors.role) {
                _push2(`<p class="text-xs text-red-500 mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.role)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (unref(form).role === "auditee") {
                _push2(`<div class="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4"${_scopeId}><div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider"${_scopeId}>Penempatan Unit Kerja </div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div class="space-y-1.5"${_scopeId}><label class="text-xs font-semibold text-slate-500"${_scopeId}>Program Studi</label><select class="w-full px-3 py-1.5 text-xs border border-slate-200 rounded-lg bg-white outline-none"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).prodi_id) ? ssrLooseContain(unref(form).prodi_id, null) : ssrLooseEqual(unref(form).prodi_id, null)) ? " selected" : ""}${_scopeId}>Tidak Ada</option><!--[-->`);
                ssrRenderList(__props.prodis, (prodi) => {
                  _push2(`<option${ssrRenderAttr("value", prodi.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).prodi_id) ? ssrLooseContain(unref(form).prodi_id, prodi.id) : ssrLooseEqual(unref(form).prodi_id, prodi.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(prodi.name)}</option>`);
                });
                _push2(`<!--]--></select></div><div class="space-y-1.5"${_scopeId}><label class="text-xs font-semibold text-slate-500"${_scopeId}>Fakultas</label><select class="w-full px-3 py-1.5 text-xs border border-slate-200 rounded-lg bg-white outline-none"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).faculty_id) ? ssrLooseContain(unref(form).faculty_id, null) : ssrLooseEqual(unref(form).faculty_id, null)) ? " selected" : ""}${_scopeId}>Tidak Ada</option><!--[-->`);
                ssrRenderList(__props.faculties, (fac) => {
                  _push2(`<option${ssrRenderAttr("value", fac.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).faculty_id) ? ssrLooseContain(unref(form).faculty_id, fac.id) : ssrLooseEqual(unref(form).faculty_id, fac.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(fac.name)}</option>`);
                });
                _push2(`<!--]--></select></div></div><p class="text-[10px] text-amber-600 italic leading-tight"${_scopeId}>* Pilih unit yang sesuai dengan cakupan audit pengguna ini.</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex justify-end gap-3 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800"${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-sm disabled:opacity-50 transition-colors"${_scopeId}>`);
              if (unref(form).processing) {
                _push2(`<span${_scopeId}>Memproses...</span>`);
              } else {
                _push2(`<span${_scopeId}>${ssrInterpolate(editMode.value ? "Simpan Perubahan" : "Buat User")}</span>`);
              }
              _push2(`</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode("div", { class: "relative w-full max-w-sm" }, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      type: "text",
                      placeholder: "Cari nama atau email...",
                      class: "w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 focus:ring-2 focus:ring-rose-500 outline-none transition-all"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, search.value]
                    ])
                  ])
                ]),
                createVNode("div", { class: "overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800" }, [
                  createVNode("table", { class: "w-full text-sm text-left" }, [
                    createVNode("thead", { class: "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 uppercase text-[11px] font-bold tracking-wider" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "p-4" }, "Pengguna"),
                        createVNode("th", { class: "p-4" }, "Role"),
                        createVNode("th", { class: "p-4" }, "Unit Kerja"),
                        createVNode("th", { class: "p-4 text-center" }, "2FA"),
                        createVNode("th", { class: "p-4 text-center" }, "Aksi")
                      ])
                    ]),
                    createVNode("tbody", { class: "divide-y divide-slate-200 dark:divide-slate-800" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.users.data, (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.id,
                          class: "hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        }, [
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "flex items-center gap-3" }, [
                              createVNode("img", {
                                src: item.profile_photo_url,
                                class: "w-9 h-9 rounded-full border-2 border-slate-100"
                              }, null, 8, ["src"]),
                              createVNode("div", null, [
                                createVNode("div", { class: "font-bold text-slate-700 dark:text-slate-200" }, toDisplayString(item.name), 1),
                                createVNode("div", { class: "text-xs text-slate-400" }, toDisplayString(item.email), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("span", {
                              class: [
                                "px-2 py-0.5 rounded text-[10px] font-bold uppercase border",
                                item.role === "admin" ? "bg-rose-50 text-rose-700 border-rose-100" : item.role === "auditor" ? "bg-amber-50 text-amber-700 border-amber-100" : "bg-blue-50 text-blue-700 border-blue-100"
                              ]
                            }, toDisplayString(item.role), 3)
                          ]),
                          createVNode("td", { class: "p-4 text-xs text-slate-600 dark:text-slate-400 font-medium" }, toDisplayString(getUnitName(item)), 1),
                          createVNode("td", { class: "p-4 text-center" }, [
                            item.two_factor_confirmed_at ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-emerald-500",
                              title: "2FA Aktif"
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-5 h-5 mx-auto",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                })
                              ]))
                            ])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-slate-200 dark:text-slate-700"
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-5 h-5 mx-auto",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                })
                              ]))
                            ]))
                          ]),
                          createVNode("td", { class: "p-4" }, [
                            createVNode("div", { class: "flex justify-center gap-2" }, [
                              item.two_factor_confirmed_at ? (openBlock(), createBlock("button", {
                                key: 0,
                                onClick: ($event) => reset2FA(item.id),
                                class: "p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors",
                                title: "Reset 2FA"
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
                                    d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                                  })
                                ]))
                              ], 8, ["onClick"])) : createCommentVNode("", true),
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
                                class: "p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
                ]),
                createVNode("div", { class: "flex items-center justify-between py-2" }, [
                  createVNode("div", { class: "text-xs text-slate-500" }, " Menampilkan " + toDisplayString(__props.users.from) + " - " + toDisplayString(__props.users.to) + " dari " + toDisplayString(__props.users.total) + " pengguna ", 1),
                  createVNode("div", { class: "flex gap-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.users.links, (link) => {
                      return openBlock(), createBlock("button", {
                        key: link.label,
                        innerHTML: link.label,
                        onClick: ($event) => link.url ? _ctx.$inertia.visit(link.url) : null,
                        disabled: !link.url,
                        class: ["px-3 py-1 text-xs rounded-md border transition-all", [
                          link.active ? "bg-rose-600 text-white border-rose-600" : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50",
                          !link.url ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                        ]]
                      }, null, 10, ["innerHTML", "onClick", "disabled"]);
                    }), 128))
                  ])
                ])
              ]),
              showModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center p-4"
              }, [
                createVNode("div", {
                  class: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm",
                  onClick: closeModal
                }),
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200" }, [
                  createVNode("div", { class: "p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center" }, [
                    createVNode("h3", { class: "text-lg font-bold text-slate-800 dark:text-white" }, toDisplayString(editMode.value ? "Edit User" : "Tambah User"), 1),
                    createVNode("button", {
                      onClick: closeModal,
                      class: "text-slate-400 hover:text-slate-600 text-2xl"
                    }, "×")
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "p-6 space-y-5"
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                      createVNode("div", { class: "space-y-1.5" }, [
                        createVNode("label", { class: "text-sm font-semibold text-slate-700 dark:text-slate-300" }, "Nama Lengkap"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          type: "text",
                          required: "",
                          class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).name]
                        ]),
                        unref(form).errors.name ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-red-500 mt-1"
                        }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "space-y-1.5" }, [
                        createVNode("label", { class: "text-sm font-semibold text-slate-700 dark:text-slate-300" }, "Email"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          type: "email",
                          required: "",
                          class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).email]
                        ]),
                        unref(form).errors.email ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-red-500 mt-1"
                        }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-sm font-semibold text-slate-700 dark:text-slate-300" }, "Password"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        type: "password",
                        required: !editMode.value,
                        class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900"
                      }, null, 8, ["onUpdate:modelValue", "required"]), [
                        [vModelText, unref(form).password]
                      ]),
                      editMode.value ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-[10px] text-slate-400 mt-1 italic"
                      }, "Kosongkan jika tidak ingin ganti password")) : createCommentVNode("", true),
                      unref(form).errors.password ? (openBlock(), createBlock("p", {
                        key: 1,
                        class: "text-xs text-red-500 mt-1"
                      }, toDisplayString(unref(form).errors.password), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-sm font-semibold text-slate-700 dark:text-slate-300" }, "Password Confirmation"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                        type: "password",
                        required: !editMode.value,
                        class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900"
                      }, null, 8, ["onUpdate:modelValue", "required"]), [
                        [vModelText, unref(form).password_confirmation]
                      ]),
                      unref(form).errors.password_confirmation ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-red-500 mt-1"
                      }, toDisplayString(unref(form).errors.password_confirmation), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-sm font-semibold text-slate-700 dark:text-slate-300" }, "Role / Hak Akses"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => unref(form).role = $event,
                        required: "",
                        class: "w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"
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
                        class: "text-xs text-red-500 mt-1"
                      }, toDisplayString(unref(form).errors.role), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode(Transition, {
                      "enter-active-class": "transition ease-out duration-200",
                      "enter-from-class": "opacity-0 -translate-y-2",
                      "enter-to-class": "opacity-100 translate-y-0"
                    }, {
                      default: withCtx(() => [
                        unref(form).role === "auditee" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4"
                        }, [
                          createVNode("div", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Penempatan Unit Kerja "),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode("label", { class: "text-xs font-semibold text-slate-500" }, "Program Studi"),
                              withDirectives(createVNode("select", {
                                "onUpdate:modelValue": ($event) => unref(form).prodi_id = $event,
                                class: "w-full px-3 py-1.5 text-xs border border-slate-200 rounded-lg bg-white outline-none"
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
                              ])
                            ]),
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode("label", { class: "text-xs font-semibold text-slate-500" }, "Fakultas"),
                              withDirectives(createVNode("select", {
                                "onUpdate:modelValue": ($event) => unref(form).faculty_id = $event,
                                class: "w-full px-3 py-1.5 text-xs border border-slate-200 rounded-lg bg-white outline-none"
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
                              ])
                            ])
                          ]),
                          createVNode("p", { class: "text-[10px] text-amber-600 italic leading-tight" }, "* Pilih unit yang sesuai dengan cakupan audit pengguna ini.")
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex justify-end gap-3 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: closeModal,
                        class: "px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                      }, "Batal"),
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(form).processing,
                        class: "px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg shadow-sm disabled:opacity-50 transition-colors"
                      }, [
                        unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "Memproses...")) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(editMode.value ? "Simpan Perubahan" : "Buat User"), 1))
                      ], 8, ["disabled"])
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
export {
  _sfc_main as default
};

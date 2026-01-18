import { ref, watch, computed, resolveComponent, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withDirectives, vModelText, vModelSelect, openBlock, Fragment, renderList, toDisplayString, withModifiers, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
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
    documents: Object,
    filters: Object
    // Adding filters prop
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters?.search || "");
    const perPage = ref(props.filters?.per_page || 10);
    watch(search, debounce((value) => {
      router.get(route("admin.library.index"), { search: value, per_page: perPage.value }, { preserveState: true, replace: true });
    }, 500));
    watch(perPage, (value) => {
      router.get(route("admin.library.index"), { search: search.value, per_page: value }, { preserveState: true, replace: true });
    });
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
    const deleteDoc = (id) => {
      if (confirm("Hapus dokumen ini secara permanen?")) {
        router.delete(route("admin.library.destroy", id));
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
            _push2(`<button class="group inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-rose-600 dark:via-rose-500 dark:to-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-rose-600/30 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-rose-600/40 hover:-translate-y-0.5 active:scale-95 border-t border-white/10" data-v-adb2a300${_scopeId}><span class="mr-2 text-rose-400 dark:text-white group-hover:rotate-90 transition-transform duration-300 text-sm leading-none" data-v-adb2a300${_scopeId}>+</span> Tambah Dokumen </button>`);
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
            _push2(`<div class="space-y-6" data-v-adb2a300${_scopeId}><div class="flex flex-col lg:flex-row justify-between items-center gap-6" data-v-adb2a300${_scopeId}><div class="flex items-stretch gap-3 w-full max-w-2xl" data-v-adb2a300${_scopeId}><div class="relative flex-1 group" data-v-adb2a300${_scopeId}><span class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" data-v-adb2a300${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              icon: "fa-solid fa-magnifying-glass",
              class: "text-slate-400 text-xs group-focus-within:text-rose-500 transition-colors"
            }, null, _parent2, _scopeId));
            _push2(`</span><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama dokumen..." class="w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400/50 font-bold text-xs rounded-2xl border-none outline-none focus:outline-none ring-1 ring-slate-200 dark:ring-slate-800 dark:focus:ring-rose-500/50 focus:ring-4 focus:ring-rose-500/50 shadow-sm focus:shadow-md transition-[ring,background-color,box-shadow] duration-300 ease-out focus:bg-slate-50 dark:focus:bg-slate-800/80" data-v-adb2a300${_scopeId}></div><div class="flex items-center bg-white dark:bg-slate-900 rounded-2xl px-4 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-rose-500/50 dark:hover:ring-rose-500/50 transition-all duration-300" data-v-adb2a300${_scopeId}><span class="hidden sm:inline text-[9px] font-black uppercase text-slate-400 px-2 border-r border-slate-200 dark:border-slate-800 mr-2" data-v-adb2a300${_scopeId}>Tampilkan</span><select class="bg-transparent dark:bg-slate-900 border-none focus:ring-0 text-xs font-black text-slate-900 dark:text-white py-4 pr-8 cursor-pointer hover:text-rose-500 dark:hover:text-rose-500 transition-colors duration-300 outline-none" data-v-adb2a300${_scopeId}><option${ssrRenderAttr("value", 10)} data-v-adb2a300${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 10) : ssrLooseEqual(perPage.value, 10)) ? " selected" : ""}${_scopeId}>10</option><option${ssrRenderAttr("value", 25)} data-v-adb2a300${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 25) : ssrLooseEqual(perPage.value, 25)) ? " selected" : ""}${_scopeId}>25</option><option${ssrRenderAttr("value", 50)} data-v-adb2a300${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 50) : ssrLooseEqual(perPage.value, 50)) ? " selected" : ""}${_scopeId}>50</option><option${ssrRenderAttr("value", 100)} data-v-adb2a300${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, 100) : ssrLooseEqual(perPage.value, 100)) ? " selected" : ""}${_scopeId}>100</option></select></div></div><div class="flex items-center gap-3" data-v-adb2a300${_scopeId}></div></div><div class="bg-white/60 dark:bg-slate-900 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 dark:border-white/5 shadow-sm overflow-hidden" data-v-adb2a300${_scopeId}><div class="overflow-x-auto custom-scrollbar" data-v-adb2a300${_scopeId}><table class="w-full text-left border-collapse min-w-[1000px] lg:min-w-full" data-v-adb2a300${_scopeId}><thead data-v-adb2a300${_scopeId}><tr class="bg-slate-50/80 dark:bg-slate-800/20 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/50" data-v-adb2a300${_scopeId}><th class="p-6 md:p-8 pl-8 text-center" data-v-adb2a300${_scopeId}>No</th><th class="p-6 md:p-8 pl-8" data-v-adb2a300${_scopeId}>Nama Dokumen</th><th class="p-6 md:p-8 text-center" data-v-adb2a300${_scopeId}>Tipe Akses</th><th class="p-6 md:p-8" data-v-adb2a300${_scopeId}>Diupload Oleh</th><th class="p-6 md:p-8 text-center" data-v-adb2a300${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-50 dark:divide-slate-800/20" data-v-adb2a300${_scopeId}><!--[-->`);
            ssrRenderList(__props.documents.data, (doc) => {
              _push2(`<tr class="group hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors duration-300" data-v-adb2a300${_scopeId}><td class="p-6 md:p-8 pl-8 text-center" data-v-adb2a300${_scopeId}><span class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20" data-v-adb2a300${_scopeId}>${ssrInterpolate(__props.documents.from + __props.documents.data.indexOf(doc))}</span></td><td class="p-6 md:p-8 pl-8" data-v-adb2a300${_scopeId}><div class="flex flex-col" data-v-adb2a300${_scopeId}><div class="font-black text-slate-800 dark:text-slate-200 uppercase text-xs leading-none" data-v-adb2a300${_scopeId}>${ssrInterpolate(doc.name)}</div><div class="flex items-center gap-2 mt-2" data-v-adb2a300${_scopeId}><span class="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[8px] font-bold text-slate-500 uppercase tracking-tighter" data-v-adb2a300${_scopeId}>${ssrInterpolate(doc.extension)}</span><span class="text-[9px] text-slate-400 font-medium" data-v-adb2a300${_scopeId}>${ssrInterpolate(doc.size_kb || 0)} KB </span></div></div></td><td class="p-6 md:p-8 text-center" data-v-adb2a300${_scopeId}><span class="${ssrRenderClass([
                "px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border shadow-sm",
                doc.type === "public" ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20" : "bg-rose-50 dark:bg-rose-500/10 text-rose-600 border-rose-100 dark:border-rose-500/20"
              ])}" data-v-adb2a300${_scopeId}>${ssrInterpolate(doc.type === "public" ? "Publik" : "Terbatas")}</span></td><td class="p-6 md:p-8" data-v-adb2a300${_scopeId}><div class="flex items-center gap-2" data-v-adb2a300${_scopeId}><div class="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-[9px] font-black text-indigo-500" data-v-adb2a300${_scopeId}>${ssrInterpolate(doc.uploader?.name?.[0] || "?")}</div><span class="text-xs font-bold text-slate-600 dark:text-slate-400" data-v-adb2a300${_scopeId}>${ssrInterpolate(doc.uploader?.name)}</span></div></td><td class="p-6 md:p-8" data-v-adb2a300${_scopeId}><div class="flex justify-center gap-2" data-v-adb2a300${_scopeId}><a${ssrRenderAttr("href", _ctx.route("library.download", doc.id))} class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-emerald-500 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-emerald-200 active:scale-95" title="Download" data-v-adb2a300${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-download",
                class: "text-[10px]"
              }, null, _parent2, _scopeId));
              _push2(`</a><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95" data-v-adb2a300${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-pencil",
                class: "text-[10px]"
              }, null, _parent2, _scopeId));
              _push2(`</button><button class="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 rounded-xl transition-all shadow-sm hover:shadow-md hover:border-rose-200 active:scale-95" data-v-adb2a300${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-trash",
                class: "text-[10px]"
              }, null, _parent2, _scopeId));
              _push2(`</button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.documents.data.length === 0) {
              _push2(`<tr data-v-adb2a300${_scopeId}><td colspan="4" class="p-12 text-center" data-v-adb2a300${_scopeId}><div class="flex flex-col items-center justify-center opacity-50" data-v-adb2a300${_scopeId}>`);
              _push2(ssrRenderComponent(_component_icon, {
                icon: "fa-solid fa-box-open",
                class: "text-4xl text-slate-300 dark:text-slate-600 mb-4"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-xs font-black text-slate-400 uppercase tracking-widest italic" data-v-adb2a300${_scopeId}> Tidak ada dokumen tersedia</p></div></td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm" data-v-adb2a300${_scopeId}><div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left" data-v-adb2a300${_scopeId}> Data ${ssrInterpolate(__props.documents.from)} - ${ssrInterpolate(__props.documents.to)} dari total ${ssrInterpolate(__props.documents.total)}</div><div class="flex flex-wrap justify-center gap-1.5" data-v-adb2a300${_scopeId}><!--[-->`);
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
                ])}" data-v-adb2a300${_scopeId}>${link.label ?? ""}</span>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" data-v-adb2a300${_scopeId}><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" data-v-adb2a300${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10" data-v-adb2a300${_scopeId}><div class="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center" data-v-adb2a300${_scopeId}><div data-v-adb2a300${_scopeId}><h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic" data-v-adb2a300${_scopeId}>${ssrInterpolate(isEditing.value ? "Edit Dokumen" : "Upload Dokumen")}</h3><p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1" data-v-adb2a300${_scopeId}> Manajemen File Library </p></div><button class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-600 transition-colors font-bold text-lg" data-v-adb2a300${_scopeId}>×</button></div><form class="p-8 space-y-6" data-v-adb2a300${_scopeId}><div class="space-y-2" data-v-adb2a300${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-adb2a300${_scopeId}>Nama Dokumen</label><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Misal: Standar SPMI 2024" class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" required data-v-adb2a300${_scopeId}>`);
              if (unref(form).errors.name) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-adb2a300${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-adb2a300${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-adb2a300${_scopeId}>Tipe Akses</label><select class="w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm" data-v-adb2a300${_scopeId}><option value="public" data-v-adb2a300${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "public") : ssrLooseEqual(unref(form).type, "public")) ? " selected" : ""}${_scopeId}>Semua User (Public)</option><option value="auditor" data-v-adb2a300${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "auditor") : ssrLooseEqual(unref(form).type, "auditor")) ? " selected" : ""}${_scopeId}>Khusus Auditor &amp; Admin</option></select>`);
              if (unref(form).errors.type) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-adb2a300${_scopeId}>${ssrInterpolate(unref(form).errors.type)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-2" data-v-adb2a300${_scopeId}><label class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1" data-v-adb2a300${_scopeId}>File Dokumen ${ssrInterpolate(isEditing.value ? "(Opsional)" : "")}</label><input type="file"${ssrIncludeBooleanAttr(!isEditing.value) ? " required" : ""} class="block w-full text-[10px] text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-wider file:bg-slate-100 dark:file:bg-slate-800 file:text-slate-700 dark:file:text-slate-300 hover:file:bg-rose-50 dark:hover:file:bg-rose-900/30 hover:file:text-rose-600 cursor-pointer border border-slate-200 dark:border-slate-800 rounded-2xl p-2 bg-white dark:bg-slate-900/50" data-v-adb2a300${_scopeId}>`);
              if (unref(form).errors.file) {
                _push2(`<p class="text-xs text-rose-500 font-bold ml-1" data-v-adb2a300${_scopeId}>${ssrInterpolate(unref(form).errors.file)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (unref(form).progress) {
                _push2(`<div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden" data-v-adb2a300${_scopeId}><div class="bg-rose-500 h-full transition-all duration-300 ease-out" style="${ssrRenderStyle({ width: unref(form).progress.percentage + "%" })}" data-v-adb2a300${_scopeId}></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="pt-4 border-t border-slate-100 dark:border-slate-800" data-v-adb2a300${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full py-4 bg-slate-900 dark:bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-rose-600/20 transition-all hover:bg-rose-600 dark:hover:bg-rose-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50" data-v-adb2a300${_scopeId}>${ssrInterpolate(buttonLabel.value)}</button></div></form></div></div>`);
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
                        placeholder: "Cari nama dokumen...",
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
                          createVNode("th", { class: "p-6 md:p-8 pl-8" }, "Nama Dokumen"),
                          createVNode("th", { class: "p-6 md:p-8 text-center" }, "Tipe Akses"),
                          createVNode("th", { class: "p-6 md:p-8" }, "Diupload Oleh"),
                          createVNode("th", { class: "p-6 md:p-8 text-center" }, "Aksi")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-slate-50 dark:divide-slate-800/20" }, [
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
                                  onClick: ($event) => deleteDoc(doc.id),
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
                        __props.documents.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                          createVNode("td", {
                            colspan: "4",
                            class: "p-12 text-center"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center opacity-50" }, [
                              createVNode(_component_icon, {
                                icon: "fa-solid fa-box-open",
                                class: "text-4xl text-slate-300 dark:text-slate-600 mb-4"
                              }),
                              createVNode("p", { class: "text-xs font-black text-slate-400 uppercase tracking-widest italic" }, " Tidak ada dokumen tersedia")
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ])
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
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => unref(form).type = $event,
                        class: "w-full px-5 py-3.5 bg-white dark:bg-slate-900 border-none rounded-2xl text-xs font-bold text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
                      }, [
                        createVNode("option", { value: "public" }, "Semua User (Public)"),
                        createVNode("option", { value: "auditor" }, "Khusus Auditor & Admin")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(form).type]
                      ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Library/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-adb2a300"]]);
export {
  Index as default
};

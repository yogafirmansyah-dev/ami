import { ref, watch, computed, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, withDirectives, vModelText, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { router, useForm } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-D0TyJNRu.js";
import debounce from "lodash/debounce.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vueuse/core";
import "./TButton-oXLR37ud.js";
import "./windowSizeCalculator-4-m3qk2a.js";
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
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    assignment: Object,
    indicators: Object,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    watch(search, debounce((value) => {
      router.get(route("auditee.assignments.show", props.assignment.id), { search: value }, {
        preserveState: true,
        replace: true
      });
    }, 500));
    const showModal = ref(false);
    const activeIndicator = ref(null);
    const form = useForm({
      evidence_url: "",
      evidence_file: null
    });
    const openUpload = (indicator) => {
      activeIndicator.value = indicator;
      form.evidence_url = indicator.evidence_url ?? "";
      form.evidence_file = null;
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
      activeIndicator.value = null;
      form.reset();
    };
    const submit = () => {
      form.transform((data) => ({ ...data, _method: "PATCH" })).post(route("auditee.indicators.update", activeIndicator.value.id), {
        forceFormData: true,
        onSuccess: () => closeModal(),
        preserveScroll: true
      });
    };
    const stages = [
      { key: "doc_audit", label: "Audit Dokumen" },
      { key: "field_audit", label: "Audit Lapangan" },
      { key: "finding", label: "Temuan" },
      { key: "reporting", label: "Pelaporan" },
      { key: "finished", label: "Selesai" }
    ];
    const currentStageIndex = computed(() => {
      return stages.findIndex((s) => s.key === props.assignment.current_stage);
    });
    const isEditable = computed(() => props.assignment.current_stage === "doc_audit");
    const fulfilledCount = computed(() => props.indicators.total - props.indicators.data.filter((i) => !i.evidence_path && !i.evidence_url).length);
    const progressPercent = computed(() => Math.round(fulfilledCount.value / props.indicators.total * 100));
    const getFindingBadge = (type) => {
      const map = {
        "KS": "bg-emerald-50 text-emerald-700 border-emerald-100",
        "KTS": "bg-rose-50 text-rose-700 border-rose-100",
        "OB": "bg-amber-50 text-amber-700 border-amber-100"
      };
      return map[type] || "bg-slate-50 text-slate-400 border-slate-100";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({
        title: "Pemenuhan Bukti: " + __props.assignment.target_name
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Lembar Pemenuhan Bukti`);
          } else {
            return [
              createTextVNode("Lembar Pemenuhan Bukti")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Unit: <span class="font-bold text-rose-600" data-v-3067a124${_scopeId}>${ssrInterpolate(__props.assignment.target_name)}</span>`);
          } else {
            return [
              createTextVNode("Unit: "),
              createVNode("span", { class: "font-bold text-rose-600" }, toDisplayString(__props.assignment.target_name), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-8" data-v-3067a124${_scopeId}><div class="bg-white dark:bg-slate-900 rounded-[1rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm" data-v-3067a124${_scopeId}><div class="flex flex-col md:flex-row justify-between items-center gap-8" data-v-3067a124${_scopeId}><div class="w-full md:w-3/4" data-v-3067a124${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6" data-v-3067a124${_scopeId}>Alur Tahapan Audit</p><div class="relative flex justify-between items-center" data-v-3067a124${_scopeId}><div class="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2" data-v-3067a124${_scopeId}></div><div class="absolute top-1/2 left-0 h-0.5 bg-rose-500 -translate-y-1/2 transition-all duration-1000" style="${ssrRenderStyle({ width: currentStageIndex.value / (stages.length - 1) * 100 + "%" })}" data-v-3067a124${_scopeId}></div><!--[-->`);
            ssrRenderList(stages, (stage, index) => {
              _push2(`<div class="relative z-10 flex flex-col items-center" data-v-3067a124${_scopeId}><div class="${ssrRenderClass([
                "w-4 h-4 rounded-full border-4 transition-all duration-500",
                index <= currentStageIndex.value ? "bg-rose-500 border-rose-100 dark:border-rose-900 scale-125" : "bg-slate-200 dark:bg-slate-700 border-white dark:border-slate-900"
              ])}" data-v-3067a124${_scopeId}></div><span class="${ssrRenderClass([
                "absolute -bottom-8 whitespace-nowrap text-[9px] font-black uppercase tracking-tighter transition-colors",
                index === currentStageIndex.value ? "text-rose-600" : "text-slate-400"
              ])}" data-v-3067a124${_scopeId}>${ssrInterpolate(stage.label)}</span></div>`);
            });
            _push2(`<!--]--></div></div><div class="w-full md:w-1/4 flex flex-col items-center md:items-end" data-v-3067a124${_scopeId}><div class="text-right" data-v-3067a124${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1" data-v-3067a124${_scopeId}>Status Pengisian</p><h4 class="text-3xl font-black text-slate-800 dark:text-white leading-none tracking-tighter" data-v-3067a124${_scopeId}>${ssrInterpolate(progressPercent.value)}%</h4></div></div></div></div><div class="flex flex-col sm:flex-row justify-between items-center gap-4" data-v-3067a124${_scopeId}><div class="flex items-center gap-2" data-v-3067a124${_scopeId}>`);
            if (!isEditable.value) {
              _push2(`<div class="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700" data-v-3067a124${_scopeId}><svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20" data-v-3067a124${_scopeId}><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" data-v-3067a124${_scopeId}></path></svg><span class="text-[10px] font-black text-slate-500 uppercase tracking-widest italic" data-v-3067a124${_scopeId}>Input Terkunci (Tahapan Berjalan)</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex gap-4 w-full sm:w-auto" data-v-3067a124${_scopeId}><div class="relative flex-1 sm:w-80" data-v-3067a124${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari Kode/Indikator..." class="w-full pl-10 pr-4 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none" data-v-3067a124${_scopeId}><svg class="w-4 h-4 absolute left-3.5 top-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3067a124${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-3067a124${_scopeId}></path></svg></div><a${ssrRenderAttr("href", _ctx.route("shared.export.pdf", __props.assignment.id))} target="_blank" class="px-5 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-black uppercase rounded-2xl shadow-xl hover:bg-rose-600 dark:hover:bg-rose-600 hover:text-white transition-all" data-v-3067a124${_scopeId}>Cetak Preview</a></div></div><div class="bg-white dark:bg-slate-900 rounded-[1rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" data-v-3067a124${_scopeId}><div class="overflow-x-auto" data-v-3067a124${_scopeId}><table class="w-full text-left text-xs border-collapse min-w-[1500px]" data-v-3067a124${_scopeId}><thead class="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800" data-v-3067a124${_scopeId}><tr data-v-3067a124${_scopeId}><th class="p-2 w-20" data-v-3067a124${_scopeId}>Kode</th><th class="p-2 w-80" data-v-3067a124${_scopeId}>Indikator &amp; Kriteria</th><th class="p-2 w-80" data-v-3067a124${_scopeId}>Bukti yang Diperiksa</th><th class="p-2 text-center w-28 text-rose-600" data-v-3067a124${_scopeId}>Bukti Anda</th><th class="p-2 text-center w-32 bg-slate-100/30" data-v-3067a124${_scopeId}>Hasil Audit</th><th class="p-2 w-64 bg-slate-100/30" data-v-3067a124${_scopeId}>Catatan &amp; Rekomendasi</th><th class="p-2 text-center w-20" data-v-3067a124${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800" data-v-3067a124${_scopeId}><!--[-->`);
            ssrRenderList(__props.indicators.data, (item) => {
              _push2(`<tr class="align-top hover:bg-slate-50/50 transition-colors" data-v-3067a124${_scopeId}><td class="p-2 font-black text-rose-600 font-mono tracking-tighter" data-v-3067a124${_scopeId}>${ssrInterpolate(item.snapshot_code)}</td><td class="p-2" data-v-3067a124${_scopeId}><p class="font-bold text-slate-700 dark:text-slate-200 leading-relaxed mb-3" data-v-3067a124${_scopeId}>${ssrInterpolate(item.snapshot_requirement)}</p></td><td class="p-2" data-v-3067a124${_scopeId}><p class="font-bold text-slate-700 dark:text-slate-200 leading-relaxed mb-3" data-v-3067a124${_scopeId}>${ssrInterpolate(item.snapshot_evidence_needed)}</p></td><td class="p-2" data-v-3067a124${_scopeId}><div class="flex flex-col gap-2 items-center justify-center h-full" data-v-3067a124${_scopeId}>`);
              if (!item.evidence_path && !item.evidence_url) {
                _push2(`<div class="text-center opacity-30" data-v-3067a124${_scopeId}><svg class="w-5 h-5 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3067a124${_scopeId}><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-v-3067a124${_scopeId}></path></svg><span class="text-[8px] font-black uppercase" data-v-3067a124${_scopeId}>Kosong</span></div>`);
              } else {
                _push2(`<div class="space-y-1.5 w-full" data-v-3067a124${_scopeId}>`);
                if (item.evidence_path) {
                  _push2(`<a${ssrRenderAttr("href", _ctx.route("files.evidence.show", item.id))} target="_blank" class="flex items-center px-2 py-1 bg-blue-50 text-blue-600 rounded-lg border border-blue-100 font-bold text-[9px] hover:bg-blue-600 hover:text-white transition-colors uppercase" data-v-3067a124${_scopeId}><svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" data-v-3067a124${_scopeId}><path d="M4 4a2 2 0 012-2h4.586A1 1 0 0112 2.586L15.414 6A1 1 0 0116 6.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" data-v-3067a124${_scopeId}></path></svg> File Bukti </a>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.evidence_url) {
                  _push2(`<a${ssrRenderAttr("href", item.evidence_url)} target="_blank" class="flex items-center px-2 py-1 bg-purple-50 text-purple-600 rounded-lg border border-purple-100 font-bold text-[9px] hover:bg-purple-600 hover:text-white transition-colors uppercase truncate max-w-[150px]" data-v-3067a124${_scopeId}><svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" data-v-3067a124${_scopeId}><path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" data-v-3067a124${_scopeId}></path></svg> Tautan URL </a>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              }
              _push2(`</div></td><td class="p-2 text-center bg-slate-50/30 dark:bg-slate-800/30" data-v-3067a124${_scopeId}>`);
              if (item.score) {
                _push2(`<div class="space-y-2" data-v-3067a124${_scopeId}><div class="${ssrRenderClass(["w-10 h-10 leading-10 mx-auto rounded-2xl font-black text-sm shadow-sm", item.score >= 3 ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"])}" data-v-3067a124${_scopeId}>${ssrInterpolate(item.score)}</div><span class="${ssrRenderClass(["px-2 py-0.5 rounded text-[8px] font-black border uppercase", getFindingBadge(item.finding_type)])}" data-v-3067a124${_scopeId}>${ssrInterpolate(item.finding_type)}</span></div>`);
              } else {
                _push2(`<span class="text-slate-300 font-bold text-[10px] uppercase italic tracking-widest" data-v-3067a124${_scopeId}>Belum Dinilai</span>`);
              }
              _push2(`</td><td class="p-2 bg-slate-50/30 dark:bg-slate-800/30" data-v-3067a124${_scopeId}><div class="space-y-3" data-v-3067a124${_scopeId}>`);
              if (item.auditor_note) {
                _push2(`<div data-v-3067a124${_scopeId}><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5 italic leading-none" data-v-3067a124${_scopeId}> Catatan:</p><p class="text-[10px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed" data-v-3067a124${_scopeId}>${ssrInterpolate(item.auditor_note)}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.recommendation) {
                _push2(`<div class="p-2.5 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-xl" data-v-3067a124${_scopeId}><p class="text-[8px] font-black text-amber-600 uppercase tracking-widest mb-1 italic leading-none" data-v-3067a124${_scopeId}> Rekomendasi Perbaikan:</p><p class="text-[10px] text-amber-800 dark:text-amber-400 font-bold leading-relaxed underline underline-offset-4 decoration-amber-200" data-v-3067a124${_scopeId}>${ssrInterpolate(item.recommendation)}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="p-2 text-center" data-v-3067a124${_scopeId}>`);
              if (isEditable.value) {
                _push2(`<button class="p-3 bg-rose-600 text-white rounded-2xl shadow-lg shadow-rose-500/20 hover:bg-rose-700 hover:scale-105 active:scale-95 transition-all" data-v-3067a124${_scopeId}><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3067a124${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" data-v-3067a124${_scopeId}></path></svg></button>`);
              } else {
                _push2(`<div class="w-8 h-8 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-300" data-v-3067a124${_scopeId}><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-v-3067a124${_scopeId}><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" data-v-3067a124${_scopeId}></path></svg></div>`);
              }
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div><div class="flex items-center justify-between py-2" data-v-3067a124${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" data-v-3067a124${_scopeId}>Halaman ${ssrInterpolate(__props.indicators.current_page)} dari ${ssrInterpolate(__props.indicators.last_page)}</p><div class="flex gap-1" data-v-3067a124${_scopeId}><!--[-->`);
            ssrRenderList(__props.indicators.links, (link) => {
              _push2(`<button class="${ssrRenderClass([[link.active ? "bg-rose-600 text-white border-rose-600 shadow-lg" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400", !link.url ? "opacity-30" : "cursor-pointer hover:border-rose-600 hover:text-rose-600"], "px-3.5 py-1.5 text-[10px] font-bold rounded-xl border transition-all"])}" data-v-3067a124${_scopeId}>${link.label ?? ""}</button>`);
            });
            _push2(`<!--]--></div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 z-[999] flex items-center justify-center p-4" data-v-3067a124${_scopeId}><div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" data-v-3067a124${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[1rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200" data-v-3067a124${_scopeId}><div class="p-8 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50" data-v-3067a124${_scopeId}><div data-v-3067a124${_scopeId}><h3 class="text-xl font-black uppercase text-slate-800 dark:text-white leading-none tracking-tight" data-v-3067a124${_scopeId}> Unggah Bukti Dokumen</h3><p class="text-[10px] font-bold text-rose-600 mt-2 uppercase tracking-widest font-mono" data-v-3067a124${_scopeId}>${ssrInterpolate(activeIndicator.value?.snapshot_code)}</p></div><button class="text-3xl text-slate-300 hover:text-rose-500 transition-colors" data-v-3067a124${_scopeId}>×</button></div><form class="p-10 space-y-8" data-v-3067a124${_scopeId}><div class="p-5 bg-rose-50/50 dark:bg-rose-900/10 border-l-4 border-rose-500 rounded-2xl" data-v-3067a124${_scopeId}><p class="text-[11px] font-bold text-slate-600 dark:text-slate-300 leading-relaxed italic" data-v-3067a124${_scopeId}>&quot;${ssrInterpolate(activeIndicator.value?.snapshot_requirement)}&quot;</p></div><div class="space-y-1.5" data-v-3067a124${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-widest" data-v-3067a124${_scopeId}>Tautan URL (Cloud Storage)</label><input${ssrRenderAttr("value", unref(form).evidence_url)} type="url" placeholder="https://drive.google.com/..." class="w-full px-5 py-3 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none" data-v-3067a124${_scopeId}></div><div class="space-y-1.5" data-v-3067a124${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-widest" data-v-3067a124${_scopeId}>Atau Unggah Berkas Fisik</label><div class="relative group" data-v-3067a124${_scopeId}><input type="file" class="w-full text-[10px] text-slate-400 file:mr-4 file:py-2.5 file:px-6 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:bg-slate-900 file:text-white hover:file:bg-rose-600 transition-all cursor-pointer" data-v-3067a124${_scopeId}></div><p class="text-[9px] text-slate-400 italic mt-2" data-v-3067a124${_scopeId}>Mendukung format PDF, JPG, PNG, atau ZIP (Maks 10MB) </p></div>`);
              if (unref(form).progress) {
                _push2(`<div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden shadow-inner" data-v-3067a124${_scopeId}><div class="bg-rose-600 h-full transition-all duration-300" style="${ssrRenderStyle({ width: unref(form).progress.percentage + "%" })}" data-v-3067a124${_scopeId}></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex justify-end gap-3 pt-4" data-v-3067a124${_scopeId}><button type="button" class="px-8 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors" data-v-3067a124${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-12 py-3 bg-rose-600 text-white rounded-2xl font-black uppercase text-[10px] shadow-xl shadow-rose-500/30 hover:bg-rose-700 hover:translate-y-[-2px] active:translate-y-0 transition-all disabled:opacity-50" data-v-3067a124${_scopeId}>${ssrInterpolate(unref(form).processing ? "Sedang Memproses..." : "Simpan Bukti Sekarang")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "space-y-8" }, [
                createVNode("div", { class: "bg-white dark:bg-slate-900 rounded-[1rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm" }, [
                  createVNode("div", { class: "flex flex-col md:flex-row justify-between items-center gap-8" }, [
                    createVNode("div", { class: "w-full md:w-3/4" }, [
                      createVNode("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6" }, "Alur Tahapan Audit"),
                      createVNode("div", { class: "relative flex justify-between items-center" }, [
                        createVNode("div", { class: "absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2" }),
                        createVNode("div", {
                          class: "absolute top-1/2 left-0 h-0.5 bg-rose-500 -translate-y-1/2 transition-all duration-1000",
                          style: { width: currentStageIndex.value / (stages.length - 1) * 100 + "%" }
                        }, null, 4),
                        (openBlock(), createBlock(Fragment, null, renderList(stages, (stage, index) => {
                          return createVNode("div", {
                            key: stage.key,
                            class: "relative z-10 flex flex-col items-center"
                          }, [
                            createVNode("div", {
                              class: [
                                "w-4 h-4 rounded-full border-4 transition-all duration-500",
                                index <= currentStageIndex.value ? "bg-rose-500 border-rose-100 dark:border-rose-900 scale-125" : "bg-slate-200 dark:bg-slate-700 border-white dark:border-slate-900"
                              ]
                            }, null, 2),
                            createVNode("span", {
                              class: [
                                "absolute -bottom-8 whitespace-nowrap text-[9px] font-black uppercase tracking-tighter transition-colors",
                                index === currentStageIndex.value ? "text-rose-600" : "text-slate-400"
                              ]
                            }, toDisplayString(stage.label), 3)
                          ]);
                        }), 64))
                      ])
                    ]),
                    createVNode("div", { class: "w-full md:w-1/4 flex flex-col items-center md:items-end" }, [
                      createVNode("div", { class: "text-right" }, [
                        createVNode("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1" }, "Status Pengisian"),
                        createVNode("h4", { class: "text-3xl font-black text-slate-800 dark:text-white leading-none tracking-tighter" }, toDisplayString(progressPercent.value) + "%", 1)
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex flex-col sm:flex-row justify-between items-center gap-4" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    !isEditable.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700"
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-4 h-4 text-amber-500",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createVNode("span", { class: "text-[10px] font-black text-slate-500 uppercase tracking-widest italic" }, "Input Terkunci (Tahapan Berjalan)")
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "flex gap-4 w-full sm:w-auto" }, [
                    createVNode("div", { class: "relative flex-1 sm:w-80" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => search.value = $event,
                        type: "text",
                        placeholder: "Cari Kode/Indikator...",
                        class: "w-full pl-10 pr-4 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, search.value]
                      ]),
                      (openBlock(), createBlock("svg", {
                        class: "w-4 h-4 absolute left-3.5 top-3 text-slate-400",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        })
                      ]))
                    ]),
                    createVNode("a", {
                      href: _ctx.route("shared.export.pdf", __props.assignment.id),
                      target: "_blank",
                      class: "px-5 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-black uppercase rounded-2xl shadow-xl hover:bg-rose-600 dark:hover:bg-rose-600 hover:text-white transition-all"
                    }, "Cetak Preview", 8, ["href"])
                  ])
                ]),
                createVNode("div", { class: "bg-white dark:bg-slate-900 rounded-[1rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" }, [
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("table", { class: "w-full text-left text-xs border-collapse min-w-[1500px]" }, [
                      createVNode("thead", { class: "bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800" }, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "p-2 w-20" }, "Kode"),
                          createVNode("th", { class: "p-2 w-80" }, "Indikator & Kriteria"),
                          createVNode("th", { class: "p-2 w-80" }, "Bukti yang Diperiksa"),
                          createVNode("th", { class: "p-2 text-center w-28 text-rose-600" }, "Bukti Anda"),
                          createVNode("th", { class: "p-2 text-center w-32 bg-slate-100/30" }, "Hasil Audit"),
                          createVNode("th", { class: "p-2 w-64 bg-slate-100/30" }, "Catatan & Rekomendasi"),
                          createVNode("th", { class: "p-2 text-center w-20" }, "Aksi")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-slate-100 dark:divide-slate-800" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.indicators.data, (item) => {
                          return openBlock(), createBlock("tr", {
                            key: item.id,
                            class: "align-top hover:bg-slate-50/50 transition-colors"
                          }, [
                            createVNode("td", { class: "p-2 font-black text-rose-600 font-mono tracking-tighter" }, toDisplayString(item.snapshot_code), 1),
                            createVNode("td", { class: "p-2" }, [
                              createVNode("p", { class: "font-bold text-slate-700 dark:text-slate-200 leading-relaxed mb-3" }, toDisplayString(item.snapshot_requirement), 1)
                            ]),
                            createVNode("td", { class: "p-2" }, [
                              createVNode("p", { class: "font-bold text-slate-700 dark:text-slate-200 leading-relaxed mb-3" }, toDisplayString(item.snapshot_evidence_needed), 1)
                            ]),
                            createVNode("td", { class: "p-2" }, [
                              createVNode("div", { class: "flex flex-col gap-2 items-center justify-center h-full" }, [
                                !item.evidence_path && !item.evidence_url ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-center opacity-30"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-5 h-5 mx-auto mb-1",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    createVNode("path", { d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" })
                                  ])),
                                  createVNode("span", { class: "text-[8px] font-black uppercase" }, "Kosong")
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "space-y-1.5 w-full"
                                }, [
                                  item.evidence_path ? (openBlock(), createBlock("a", {
                                    key: 0,
                                    href: _ctx.route("files.evidence.show", item.id),
                                    target: "_blank",
                                    class: "flex items-center px-2 py-1 bg-blue-50 text-blue-600 rounded-lg border border-blue-100 font-bold text-[9px] hover:bg-blue-600 hover:text-white transition-colors uppercase"
                                  }, [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-3 h-3 mr-1",
                                      fill: "currentColor",
                                      viewBox: "0 0 20 20"
                                    }, [
                                      createVNode("path", { d: "M4 4a2 2 0 012-2h4.586A1 1 0 0112 2.586L15.414 6A1 1 0 0116 6.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" })
                                    ])),
                                    createTextVNode(" File Bukti ")
                                  ], 8, ["href"])) : createCommentVNode("", true),
                                  item.evidence_url ? (openBlock(), createBlock("a", {
                                    key: 1,
                                    href: item.evidence_url,
                                    target: "_blank",
                                    class: "flex items-center px-2 py-1 bg-purple-50 text-purple-600 rounded-lg border border-purple-100 font-bold text-[9px] hover:bg-purple-600 hover:text-white transition-colors uppercase truncate max-w-[150px]"
                                  }, [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-3 h-3 mr-1",
                                      fill: "currentColor",
                                      viewBox: "0 0 20 20"
                                    }, [
                                      createVNode("path", { d: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" })
                                    ])),
                                    createTextVNode(" Tautan URL ")
                                  ], 8, ["href"])) : createCommentVNode("", true)
                                ]))
                              ])
                            ]),
                            createVNode("td", { class: "p-2 text-center bg-slate-50/30 dark:bg-slate-800/30" }, [
                              item.score ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "space-y-2"
                              }, [
                                createVNode("div", {
                                  class: ["w-10 h-10 leading-10 mx-auto rounded-2xl font-black text-sm shadow-sm", item.score >= 3 ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"]
                                }, toDisplayString(item.score), 3),
                                createVNode("span", {
                                  class: ["px-2 py-0.5 rounded text-[8px] font-black border uppercase", getFindingBadge(item.finding_type)]
                                }, toDisplayString(item.finding_type), 3)
                              ])) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-slate-300 font-bold text-[10px] uppercase italic tracking-widest"
                              }, "Belum Dinilai"))
                            ]),
                            createVNode("td", { class: "p-2 bg-slate-50/30 dark:bg-slate-800/30" }, [
                              createVNode("div", { class: "space-y-3" }, [
                                item.auditor_note ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode("p", { class: "text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5 italic leading-none" }, " Catatan:"),
                                  createVNode("p", { class: "text-[10px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed" }, toDisplayString(item.auditor_note), 1)
                                ])) : createCommentVNode("", true),
                                item.recommendation ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "p-2.5 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-xl"
                                }, [
                                  createVNode("p", { class: "text-[8px] font-black text-amber-600 uppercase tracking-widest mb-1 italic leading-none" }, " Rekomendasi Perbaikan:"),
                                  createVNode("p", { class: "text-[10px] text-amber-800 dark:text-amber-400 font-bold leading-relaxed underline underline-offset-4 decoration-amber-200" }, toDisplayString(item.recommendation), 1)
                                ])) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("td", { class: "p-2 text-center" }, [
                              isEditable.value ? (openBlock(), createBlock("button", {
                                key: 0,
                                onClick: ($event) => openUpload(item),
                                class: "p-3 bg-rose-600 text-white rounded-2xl shadow-lg shadow-rose-500/20 hover:bg-rose-700 hover:scale-105 active:scale-95 transition-all"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-5 h-5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2.5",
                                    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                  })
                                ]))
                              ], 8, ["onClick"])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "w-8 h-8 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-300"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "currentColor",
                                  viewBox: "0 0 20 20"
                                }, [
                                  createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                                    "clip-rule": "evenodd"
                                  })
                                ]))
                              ]))
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between py-2" }, [
                  createVNode("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" }, "Halaman " + toDisplayString(__props.indicators.current_page) + " dari " + toDisplayString(__props.indicators.last_page), 1),
                  createVNode("div", { class: "flex gap-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.indicators.links, (link) => {
                      return openBlock(), createBlock("button", {
                        key: link.label,
                        innerHTML: link.label,
                        onClick: ($event) => link.url ? _ctx.$inertia.visit(link.url) : null,
                        class: ["px-3.5 py-1.5 text-[10px] font-bold rounded-xl border transition-all", [link.active ? "bg-rose-600 text-white border-rose-600 shadow-lg" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400", !link.url ? "opacity-30" : "cursor-pointer hover:border-rose-600 hover:text-rose-600"]]
                      }, null, 10, ["innerHTML", "onClick"]);
                    }), 128))
                  ])
                ])
              ]),
              showModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-[999] flex items-center justify-center p-4"
              }, [
                createVNode("div", {
                  class: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm",
                  onClick: closeModal
                }),
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[1rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200" }, [
                  createVNode("div", { class: "p-8 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-xl font-black uppercase text-slate-800 dark:text-white leading-none tracking-tight" }, " Unggah Bukti Dokumen"),
                      createVNode("p", { class: "text-[10px] font-bold text-rose-600 mt-2 uppercase tracking-widest font-mono" }, toDisplayString(activeIndicator.value?.snapshot_code), 1)
                    ]),
                    createVNode("button", {
                      onClick: closeModal,
                      class: "text-3xl text-slate-300 hover:text-rose-500 transition-colors"
                    }, "×")
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "p-10 space-y-8"
                  }, [
                    createVNode("div", { class: "p-5 bg-rose-50/50 dark:bg-rose-900/10 border-l-4 border-rose-500 rounded-2xl" }, [
                      createVNode("p", { class: "text-[11px] font-bold text-slate-600 dark:text-slate-300 leading-relaxed italic" }, '"' + toDisplayString(activeIndicator.value?.snapshot_requirement) + '"', 1)
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest" }, "Tautan URL (Cloud Storage)"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).evidence_url = $event,
                        type: "url",
                        placeholder: "https://drive.google.com/...",
                        class: "w-full px-5 py-3 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).evidence_url]
                      ])
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest" }, "Atau Unggah Berkas Fisik"),
                      createVNode("div", { class: "relative group" }, [
                        createVNode("input", {
                          type: "file",
                          onInput: ($event) => unref(form).evidence_file = $event.target.files[0],
                          class: "w-full text-[10px] text-slate-400 file:mr-4 file:py-2.5 file:px-6 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:bg-slate-900 file:text-white hover:file:bg-rose-600 transition-all cursor-pointer"
                        }, null, 40, ["onInput"])
                      ]),
                      createVNode("p", { class: "text-[9px] text-slate-400 italic mt-2" }, "Mendukung format PDF, JPG, PNG, atau ZIP (Maks 10MB) ")
                    ]),
                    unref(form).progress ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "w-full bg-slate-100 rounded-full h-1.5 overflow-hidden shadow-inner"
                    }, [
                      createVNode("div", {
                        class: "bg-rose-600 h-full transition-all duration-300",
                        style: { width: unref(form).progress.percentage + "%" }
                      }, null, 4)
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "flex justify-end gap-3 pt-4" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: closeModal,
                        class: "px-8 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors"
                      }, "Batal"),
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(form).processing,
                        class: "px-12 py-3 bg-rose-600 text-white rounded-2xl font-black uppercase text-[10px] shadow-xl shadow-rose-500/30 hover:bg-rose-700 hover:translate-y-[-2px] active:translate-y-0 transition-all disabled:opacity-50"
                      }, toDisplayString(unref(form).processing ? "Sedang Memproses..." : "Simpan Bukti Sekarang"), 9, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auditee/Assignment/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3067a124"]]);
export {
  Show as default
};

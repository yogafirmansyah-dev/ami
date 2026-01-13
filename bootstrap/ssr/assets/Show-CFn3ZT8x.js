import { ref, watch, computed, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, withDirectives, vModelText, withModifiers, vModelSelect, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { router, useForm } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-D0TyJNRu.js";
import debounce from "lodash/debounce.js";
import axios from "axios";
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
    groupedDocuments: Array,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    watch(search, debounce((value) => {
      router.get(route("auditor.assignments.show", props.assignment.id), { search: value }, {
        preserveState: true,
        replace: true
      });
    }, 500));
    const showDocModal = ref(false);
    const docForm = useForm({ type: "", label: "", file: null });
    const openDocUpload = (doc) => {
      docForm.clearErrors();
      docForm.type = doc.type;
      docForm.label = doc.label;
      showDocModal.value = true;
    };
    const submitDoc = () => {
      docForm.post(route("auditor.assignments.upload-document", props.assignment.id), {
        forceFormData: true,
        // Memastikan data dikirim sebagai Multipart/Form-Data
        preserveScroll: true,
        onSuccess: () => {
          showDocModal.value = false;
          docForm.reset();
        },
        onError: (errors) => {
          console.error("Upload Gagal:", errors);
        }
      });
    };
    const showAssessmentModal = ref(false);
    const activeIndicator = ref(null);
    const assessmentForm = useForm({
      score: "",
      finding_type: "",
      auditor_note: "",
      recommendation: "",
      evidence_url: "",
      evidence_file: null
    });
    const openAssessment = (item) => {
      activeIndicator.value = item;
      assessmentForm.score = item.score ?? "";
      assessmentForm.finding_type = item.finding_type ?? "";
      assessmentForm.auditor_note = item.auditor_note ?? "";
      assessmentForm.recommendation = item.recommendation ?? "";
      assessmentForm.evidence_url = item.evidence_url ?? "";
      assessmentForm.evidence_file = null;
      showAssessmentModal.value = true;
    };
    const submitAssessment = () => {
      assessmentForm.transform((data) => ({ ...data, _method: "PATCH" })).post(route("auditor.indicators.update", activeIndicator.value.id), {
        forceFormData: true,
        onSuccess: () => {
          showAssessmentModal.value = false;
          assessmentForm.reset();
        },
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
    const currentStageIndex = computed(() => stages.findIndex((s) => s.key === props.assignment.current_stage));
    const showHistoryModal = ref(false);
    const activeHistory = ref([]);
    const loadingHistory = ref(false);
    const activeIndicatorCode = ref("");
    const openHistory = async (item) => {
      activeIndicatorCode.value = item.snapshot_code;
      loadingHistory.value = true;
      showHistoryModal.value = true;
      try {
        const res = await axios.get(route("auditor.indicators.history", item.id));
        activeHistory.value = res.data;
      } catch (e) {
        console.error("Gagal memuat riwayat");
      } finally {
        loadingHistory.value = false;
      }
    };
    const getFindingBadge = (type) => {
      const map = {
        "KS": "bg-emerald-50 text-emerald-700 border-emerald-100",
        "KTS": "bg-rose-50 text-rose-700 border-rose-100",
        "OB": "bg-amber-50 text-amber-700 border-amber-100"
      };
      return map[type] || "bg-slate-50 text-slate-400 border-slate-100";
    };
    const canUploadBA = (type) => {
      const stage = props.assignment.current_stage;
      if (type === "field_report") return stage === "field_audit";
      if (type === "final_report") return stage === "finding" || stage === "reporting";
      if (type === "end_report") return stage === "reporting" || stage === "finished";
      return false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({
        title: "Audit: " + __props.assignment.target_name
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Lembar Kerja Auditor`);
          } else {
            return [
              createTextVNode("Lembar Kerja Auditor")
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Unit: <span class="font-bold text-rose-600" data-v-99876120${_scopeId}>${ssrInterpolate(__props.assignment.target_name)}</span> | Instrumen: ${ssrInterpolate(__props.assignment.standard.name)}`);
          } else {
            return [
              createTextVNode("Unit: "),
              createVNode("span", { class: "font-bold text-rose-600" }, toDisplayString(__props.assignment.target_name), 1),
              createTextVNode(" | Instrumen: " + toDisplayString(__props.assignment.standard.name), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-8" data-v-99876120${_scopeId}><div class="bg-white dark:bg-slate-900 p-8 rounded-[1rem] border border-slate-200 dark:border-slate-800 shadow-sm" data-v-99876120${_scopeId}><p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8" data-v-99876120${_scopeId}>Alur Tahapan Audit Berjalan</p><div class="relative flex justify-between items-center max-w-4xl mx-auto" data-v-99876120${_scopeId}><div class="absolute top-1/2 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 -translate-y-1/2" data-v-99876120${_scopeId}></div><div class="absolute top-1/2 left-0 h-1 bg-rose-600 -translate-y-1/2 transition-all duration-1000" style="${ssrRenderStyle({ width: currentStageIndex.value / (stages.length - 1) * 100 + "%" })}" data-v-99876120${_scopeId}></div><!--[-->`);
            ssrRenderList(stages, (stage, index) => {
              _push2(`<div class="relative z-10 flex flex-col items-center" data-v-99876120${_scopeId}><div class="${ssrRenderClass([
                "w-5 h-5 rounded-full border-4 transition-all duration-500",
                index <= currentStageIndex.value ? "bg-rose-600 border-rose-100 dark:border-rose-900 scale-125 shadow-lg shadow-rose-500/20" : "bg-slate-200 dark:bg-slate-700 border-white dark:border-slate-900"
              ])}" data-v-99876120${_scopeId}></div><span class="${ssrRenderClass([
                "absolute -bottom-8 whitespace-nowrap text-[9px] font-black uppercase tracking-widest transition-colors",
                index === currentStageIndex.value ? "text-rose-600" : "text-slate-400"
              ])}" data-v-99876120${_scopeId}>${ssrInterpolate(stage.label)}</span></div>`);
            });
            _push2(`<!--]--></div></div><div class="bg-slate-900 rounded-[1rem] p-8 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl" data-v-99876120${_scopeId}><div class="flex-1" data-v-99876120${_scopeId}><h3 class="text-xl font-black uppercase tracking-tighter italic" data-v-99876120${_scopeId}>Dokumentasi Berita Acara</h3><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1" data-v-99876120${_scopeId}>Unggah berkas resmi sesuai tahapan yang berlaku</p></div><div class="flex flex-wrap justify-center gap-4" data-v-99876120${_scopeId}><!--[-->`);
            ssrRenderList(__props.groupedDocuments, (doc) => {
              _push2(`<div class="text-center bg-white/5 p-4 rounded-3xl border border-white/10 hover:bg-white/10 transition-all" data-v-99876120${_scopeId}><p class="text-[8px] font-black text-slate-500 uppercase mb-3" data-v-99876120${_scopeId}>${ssrInterpolate(doc.label)}</p>`);
              if (!doc.file) {
                _push2(`<button${ssrIncludeBooleanAttr(!canUploadBA(doc.type)) ? " disabled" : ""} class="${ssrRenderClass([
                  "px-6 py-2 rounded-xl text-[9px] font-black uppercase transition-all",
                  canUploadBA(doc.type) ? "bg-rose-600 text-white hover:bg-rose-500" : "bg-white/5 text-white/20 cursor-not-allowed"
                ])}" data-v-99876120${_scopeId}> Unggah </button>`);
              } else {
                _push2(`<a${ssrRenderAttr("href", _ctx.route("files.official.show", doc.file.id))} target="_blank" class="inline-block px-6 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl text-[9px] font-black uppercase hover:bg-emerald-500/30 transition-all italic" data-v-99876120${_scopeId}> Tersedia </a>`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div><div class="bg-white dark:bg-slate-900 rounded-[1rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" data-v-99876120${_scopeId}><div class="p-8 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/30" data-v-99876120${_scopeId}><h3 class="font-black text-slate-800 dark:text-white uppercase text-xs tracking-[0.2em] italic" data-v-99876120${_scopeId}> Evaluasi Indikator Standar</h3><div class="relative w-80" data-v-99876120${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari Kode atau Butir..." class="w-full pl-10 pr-4 py-2.5 text-xs bg-white dark:bg-slate-800 border-0 rounded-2xl shadow-inner focus:ring-2 focus:ring-rose-500/20 transition-all" data-v-99876120${_scopeId}><svg class="w-4 h-4 absolute left-3.5 top-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-99876120${_scopeId}><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-99876120${_scopeId}></path></svg></div></div><div class="overflow-x-auto" data-v-99876120${_scopeId}><table class="w-full text-left text-xs border-collapse min-w-[1500px]" data-v-99876120${_scopeId}><thead class="bg-slate-50 dark:bg-slate-800/80 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800" data-v-99876120${_scopeId}><tr data-v-99876120${_scopeId}><th class="p-2 w-20" data-v-99876120${_scopeId}>Kode</th><th class="p-2 w-80" data-v-99876120${_scopeId}>Kriteria Indikator</th><th class="p-2 w-80" data-v-99876120${_scopeId}>Bukti yang Diperiksa </th><th class="p-2 text-center w-32" data-v-99876120${_scopeId}>Bukti</th><th class="p-2 text-center w-28" data-v-99876120${_scopeId}>Status Temuan</th><th class="p-2 text-center w-20" data-v-99876120${_scopeId}>Skor</th><th class="p-2 w-64" data-v-99876120${_scopeId}>Catatan &amp; Rekomendasi</th><th class="p-2 text-center w-28" data-v-99876120${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800" data-v-99876120${_scopeId}><!--[-->`);
            ssrRenderList(__props.indicators.data, (item) => {
              _push2(`<tr class="${ssrRenderClass(["align-top transition-colors group", item.finding_type === "KTS" ? "bg-rose-50/10 hover:bg-rose-50/20" : "hover:bg-slate-50/50"])}" data-v-99876120${_scopeId}><td class="p-2 font-mono font-black text-rose-600 tracking-tighter" data-v-99876120${_scopeId}>${ssrInterpolate(item.snapshot_code)}</td><td class="p-2 leading-relaxed" data-v-99876120${_scopeId}><p class="font-bold text-slate-800 dark:text-slate-200 mb-3 text-[11px]" data-v-99876120${_scopeId}>${ssrInterpolate(item.snapshot_requirement)}</p></td><td class="p-2 leading-relaxed" data-v-99876120${_scopeId}><p class="font-bold text-slate-800 dark:text-slate-200 mb-3 text-[11px]" data-v-99876120${_scopeId}>${ssrInterpolate(item.snapshot_evidence_needed)}</p></td><td class="p-2 text-center" data-v-99876120${_scopeId}><div class="flex flex-col gap-2 items-center" data-v-99876120${_scopeId}>`);
              if (item.evidence_path) {
                _push2(`<a${ssrRenderAttr("href", _ctx.route("files.evidence.show", item.id))} target="_blank" class="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-xl font-black text-[9px] border border-blue-100 hover:bg-blue-600 hover:text-white transition-all uppercase shadow-sm" data-v-99876120${_scopeId}>Berkas</a>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.evidence_url) {
                _push2(`<a${ssrRenderAttr("href", item.evidence_url)} target="_blank" class="px-3 py-1.5 bg-purple-50 text-purple-600 rounded-xl font-black text-[9px] border border-purple-100 hover:bg-purple-600 hover:text-white transition-all uppercase shadow-sm" data-v-99876120${_scopeId}>Tautan</a>`);
              } else {
                _push2(`<!---->`);
              }
              if (!item.evidence_path && !item.evidence_url) {
                _push2(`<span class="text-slate-200 font-bold uppercase tracking-widest text-[9px]" data-v-99876120${_scopeId}>Kosong</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="p-2 text-center" data-v-99876120${_scopeId}>`);
              if (item.finding_type) {
                _push2(`<span class="${ssrRenderClass(["px-3 py-1 rounded-full text-[9px] font-black border tracking-widest inline-block shadow-sm", getFindingBadge(item.finding_type)])}" data-v-99876120${_scopeId}>${ssrInterpolate(item.finding_type)}</span>`);
              } else {
                _push2(`<span class="text-slate-200 font-bold" data-v-99876120${_scopeId}>-</span>`);
              }
              _push2(`</td><td class="p-2 text-center" data-v-99876120${_scopeId}><div class="${ssrRenderClass(["w-10 h-10 leading-10 mx-auto rounded-2xl font-black text-sm border-2 transition-all shadow-sm", item.score ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-100 border-slate-50 dark:bg-slate-800 dark:border-slate-700"])}" data-v-99876120${_scopeId}>${ssrInterpolate(item.score ?? "-")}</div></td><td class="p-2" data-v-99876120${_scopeId}><div class="space-y-4" data-v-99876120${_scopeId}>`);
              if (item.auditor_note) {
                _push2(`<div data-v-99876120${_scopeId}><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 italic" data-v-99876120${_scopeId}> Catatan:</p><p class="text-[10px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed" data-v-99876120${_scopeId}> &quot;${ssrInterpolate(item.auditor_note)}&quot;</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.recommendation) {
                _push2(`<div class="p-3 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-xl" data-v-99876120${_scopeId}><p class="text-[8px] font-black text-amber-600 uppercase tracking-widest mb-1 italic leading-none" data-v-99876120${_scopeId}> Saran Perbaikan:</p><p class="text-[10px] text-amber-800 dark:text-amber-400 font-bold leading-relaxed" data-v-99876120${_scopeId}>${ssrInterpolate(item.recommendation)}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!item.auditor_note && !item.recommendation) {
                _push2(`<span class="text-slate-200 font-bold" data-v-99876120${_scopeId}>-</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="p-2 text-center" data-v-99876120${_scopeId}><div class="flex justify-center gap-2" data-v-99876120${_scopeId}><button class="p-3 bg-rose-600 text-white rounded-2xl shadow-lg shadow-rose-500/20 hover:bg-rose-700 hover:scale-105 active:scale-95 transition-all" data-v-99876120${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-99876120${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-99876120${_scopeId}></path></svg></button><button class="p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-2xl hover:text-rose-600 hover:bg-rose-50 transition-all shadow-sm" data-v-99876120${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-99876120${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-v-99876120${_scopeId}></path></svg></button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div>`);
            if (showAssessmentModal.value) {
              _push2(`<div class="fixed inset-0 z-[999] flex items-center justify-center p-4" data-v-99876120${_scopeId}><div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" data-v-99876120${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[1rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200" data-v-99876120${_scopeId}><form class="flex flex-col max-h-[90vh]" data-v-99876120${_scopeId}><div class="p-8 border-b dark:border-slate-800 bg-slate-50/50 flex justify-between items-center" data-v-99876120${_scopeId}><div data-v-99876120${_scopeId}><h3 class="text-xl font-black uppercase tracking-tighter text-slate-800 dark:text-white leading-none" data-v-99876120${_scopeId}> Evaluasi Auditor</h3><p class="text-[10px] font-bold text-rose-600 font-mono mt-2 uppercase tracking-widest" data-v-99876120${_scopeId}>${ssrInterpolate(activeIndicator.value?.snapshot_code)}</p></div><button type="button" class="text-4xl text-slate-300 hover:text-rose-600" data-v-99876120${_scopeId}>×</button></div><div class="p-10 space-y-8 overflow-y-auto custom-scrollbar" data-v-99876120${_scopeId}><div class="p-2 bg-slate-50 dark:bg-slate-800/80 rounded-[2rem] text-[11px] font-bold text-slate-600 dark:text-slate-300 italic leading-relaxed border border-slate-100 dark:border-slate-700" data-v-99876120${_scopeId}> &quot;${ssrInterpolate(activeIndicator.value?.snapshot_requirement)}&quot; </div><div class="grid grid-cols-2 gap-6" data-v-99876120${_scopeId}><div class="space-y-2" data-v-99876120${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" data-v-99876120${_scopeId}>Status Temuan</label><select class="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold dark:text-white shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none" required data-v-99876120${_scopeId}><option value="" disabled data-v-99876120${ssrIncludeBooleanAttr(Array.isArray(unref(assessmentForm).finding_type) ? ssrLooseContain(unref(assessmentForm).finding_type, "") : ssrLooseEqual(unref(assessmentForm).finding_type, "")) ? " selected" : ""}${_scopeId}>Pilih Status</option><option value="KS" data-v-99876120${ssrIncludeBooleanAttr(Array.isArray(unref(assessmentForm).finding_type) ? ssrLooseContain(unref(assessmentForm).finding_type, "KS") : ssrLooseEqual(unref(assessmentForm).finding_type, "KS")) ? " selected" : ""}${_scopeId}>KS (Kesesuaian)</option><option value="KTS" data-v-99876120${ssrIncludeBooleanAttr(Array.isArray(unref(assessmentForm).finding_type) ? ssrLooseContain(unref(assessmentForm).finding_type, "KTS") : ssrLooseEqual(unref(assessmentForm).finding_type, "KTS")) ? " selected" : ""}${_scopeId}>KTS (Ketidaksesuaian)</option><option value="OB" data-v-99876120${ssrIncludeBooleanAttr(Array.isArray(unref(assessmentForm).finding_type) ? ssrLooseContain(unref(assessmentForm).finding_type, "OB") : ssrLooseEqual(unref(assessmentForm).finding_type, "OB")) ? " selected" : ""}${_scopeId}>OB (Observasi)</option></select></div><div class="space-y-2" data-v-99876120${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" data-v-99876120${_scopeId}>Skor Penilaian</label><select class="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold dark:text-white shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none" required data-v-99876120${_scopeId}><option value="" disabled data-v-99876120${ssrIncludeBooleanAttr(Array.isArray(unref(assessmentForm).score) ? ssrLooseContain(unref(assessmentForm).score, "") : ssrLooseEqual(unref(assessmentForm).score, "")) ? " selected" : ""}${_scopeId}>Pilih Skor (1-4)</option><!--[-->`);
              ssrRenderList(4, (n) => {
                _push2(`<option${ssrRenderAttr("value", n)} data-v-99876120${ssrIncludeBooleanAttr(Array.isArray(unref(assessmentForm).score) ? ssrLooseContain(unref(assessmentForm).score, n) : ssrLooseEqual(unref(assessmentForm).score, n)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(n)}</option>`);
              });
              _push2(`<!--]--></select></div></div><div class="space-y-2" data-v-99876120${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" data-v-99876120${_scopeId}>Deskripsi Temuan Audit</label><textarea rows="3" placeholder="Tuliskan temuan audit secara detail..." class="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold dark:text-white shadow-inner outline-none" required data-v-99876120${_scopeId}>${ssrInterpolate(unref(assessmentForm).auditor_note)}</textarea></div><div class="space-y-2" data-v-99876120${_scopeId}><label class="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]" data-v-99876120${_scopeId}>Rekomendasi Perbaikan</label><textarea rows="3" placeholder="Saran langkah perbaikan untuk unit kerja..." class="w-full px-5 py-3.5 bg-amber-50/50 dark:bg-amber-900/10 border-2 border-amber-100 dark:border-amber-900/20 rounded-2xl text-sm font-bold dark:text-white outline-none" data-v-99876120${_scopeId}>${ssrInterpolate(unref(assessmentForm).recommendation)}</textarea></div><div class="grid grid-cols-2 gap-6 pt-4 border-t dark:border-slate-800" data-v-99876120${_scopeId}><div class="space-y-2" data-v-99876120${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" data-v-99876120${_scopeId}>Link Verifikasi</label><input${ssrRenderAttr("value", unref(assessmentForm).evidence_url)} type="url" placeholder="https://..." class="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm dark:text-white shadow-inner outline-none" data-v-99876120${_scopeId}></div><div class="space-y-2" data-v-99876120${_scopeId}><label class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" data-v-99876120${_scopeId}>Upload Bukti Baru</label><input type="file" class="w-full text-[10px] text-slate-400 file:mr-4 file:py-2.5 file:px-6 file:rounded-xl file:border-0 file:bg-slate-900 file:text-white file:font-black hover:file:bg-rose-600 transition-all cursor-pointer" data-v-99876120${_scopeId}></div></div></div><div class="p-8 border-t dark:border-slate-800 flex justify-end gap-3 bg-slate-50/30" data-v-99876120${_scopeId}><button type="button" class="px-8 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors" data-v-99876120${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(assessmentForm).processing) ? " disabled" : ""} class="px-12 py-3 bg-rose-600 text-white rounded-2xl font-black uppercase text-[10px] shadow-xl shadow-rose-500/20 hover:bg-rose-700 hover:translate-y-[-2px] active:translate-y-0 transition-all disabled:opacity-50 tracking-widest" data-v-99876120${_scopeId}>${ssrInterpolate(unref(assessmentForm).processing ? "Menyimpan..." : "Simpan Penilaian")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (showHistoryModal.value) {
              _push2(`<div class="fixed inset-0 z-[999] flex items-center justify-center p-4" data-v-99876120${_scopeId}><div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" data-v-99876120${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[1rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[85vh]" data-v-99876120${_scopeId}><div class="p-8 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50" data-v-99876120${_scopeId}><div data-v-99876120${_scopeId}><h3 class="text-xl font-black uppercase text-slate-800 dark:text-white leading-none tracking-tighter" data-v-99876120${_scopeId}> Jejak Audit</h3><p class="text-[10px] font-bold text-rose-600 font-mono mt-2 uppercase tracking-widest italic" data-v-99876120${_scopeId}>${ssrInterpolate(activeIndicatorCode.value)}</p></div><button class="text-slate-400 hover:text-rose-600 text-3xl transition-colors" data-v-99876120${_scopeId}>×</button></div><div class="p-10 overflow-y-auto bg-white dark:bg-slate-900 custom-scrollbar flex-1" data-v-99876120${_scopeId}>`);
              if (loadingHistory.value) {
                _push2(`<div class="text-center py-12" data-v-99876120${_scopeId}><div class="animate-spin inline-block w-10 h-10 border-4 border-rose-500 border-t-transparent rounded-full mb-4" data-v-99876120${_scopeId}></div><p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]" data-v-99876120${_scopeId}>Memuat Histori... </p></div>`);
              } else {
                _push2(`<div class="space-y-10" data-v-99876120${_scopeId}><!--[-->`);
                ssrRenderList(activeHistory.value, (log) => {
                  _push2(`<div class="relative pl-10 border-l-2 border-slate-100 dark:border-slate-800" data-v-99876120${_scopeId}><div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-rose-600 shadow-sm shadow-rose-500/30" data-v-99876120${_scopeId}></div><div class="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-1" data-v-99876120${_scopeId}>${ssrInterpolate(new Date(log.created_at).toLocaleString("id-ID", {
                    dateStyle: "medium",
                    timeStyle: "short"
                  }))}</div><div class="text-sm font-black text-slate-800 dark:text-white leading-none mb-1" data-v-99876120${_scopeId}>${ssrInterpolate(log.user ? log.user.name : "Sistem")}</div><div class="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-4" data-v-99876120${_scopeId}>${ssrInterpolate(log.user ? log.user.role : "SYSTEM")} (Tahap: ${ssrInterpolate(log.stage)})</div><div class="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-3xl border border-slate-100 dark:border-slate-800" data-v-99876120${_scopeId}><p class="text-[10px] font-black text-slate-700 dark:text-slate-200 mb-3 uppercase tracking-tighter italic border-b dark:border-slate-700 pb-1" data-v-99876120${_scopeId}> Aksi: <span class="text-rose-600" data-v-99876120${_scopeId}>${ssrInterpolate(log.action.replace(/_/g, " "))}</span></p><div class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium space-y-1" data-v-99876120${_scopeId}>${log.formatted_changes ?? ""}</div></div></div>`);
                });
                _push2(`<!--]-->`);
                if (!activeHistory.value.length) {
                  _push2(`<div class="text-center py-10" data-v-99876120${_scopeId}><p class="text-[10px] text-slate-300 font-black uppercase tracking-widest italic" data-v-99876120${_scopeId}>Belum ada rekaman aktivitas.</p></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              }
              _push2(`</div><div class="p-8 bg-slate-50 dark:bg-slate-800/50 border-t dark:border-slate-800 text-right" data-v-99876120${_scopeId}><button class="px-10 py-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all hover:bg-rose-600 shadow-xl active:scale-95" data-v-99876120${_scopeId}>Tutup Histori</button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (showDocModal.value) {
              _push2(`<div class="fixed inset-0 z-[999] flex items-center justify-center p-4" data-v-99876120${_scopeId}><div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" data-v-99876120${_scopeId}></div><div class="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[1rem] shadow-2xl animate-in zoom-in duration-200 overflow-hidden" data-v-99876120${_scopeId}><div class="p-8 border-b bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center" data-v-99876120${_scopeId}><h3 class="text-xs font-black uppercase text-slate-800 dark:text-white tracking-[0.2em]" data-v-99876120${_scopeId}>Upload Dokumen Resmi</h3><button class="text-3xl text-slate-300 hover:text-rose-600 transition-colors" data-v-99876120${_scopeId}>×</button></div><form class="p-10 space-y-8 text-center" data-v-99876120${_scopeId}><div class="p-2 bg-rose-50 dark:bg-rose-900/10 text-rose-600 rounded-[2rem] text-[10px] font-black uppercase border border-rose-100 dark:border-rose-900 shadow-inner" data-v-99876120${_scopeId}> Jenis Dokumen: <span class="block text-sm mt-1 tracking-tighter italic" data-v-99876120${_scopeId}>${ssrInterpolate(unref(docForm).label)}</span></div>`);
              if (unref(docForm).errors.message) {
                _push2(`<div class="p-3 mb-4 bg-rose-50 text-rose-600 text-[10px] font-bold rounded-xl border border-rose-100 italic" data-v-99876120${_scopeId}>${ssrInterpolate(unref(docForm).errors.message)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="relative group" data-v-99876120${_scopeId}><input type="file" required class="w-full text-[10px] text-slate-400 file:mr-4 file:py-3 file:px-8 file:rounded-2xl file:border-0 file:bg-slate-900 file:text-white file:font-black hover:file:bg-rose-600 transition-all cursor-pointer" data-v-99876120${_scopeId}></div>`);
              if (unref(docForm).errors.file) {
                _push2(`<div class="text-[9px] text-rose-500 font-bold mt-1 uppercase italic" data-v-99876120${_scopeId}>${ssrInterpolate(unref(docForm).errors.file)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<button type="submit"${ssrIncludeBooleanAttr(unref(docForm).processing) ? " disabled" : ""} class="w-full py-5 bg-rose-600 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl hover:bg-rose-700 transition-all active:scale-95 disabled:opacity-50" data-v-99876120${_scopeId}>${ssrInterpolate(unref(docForm).processing ? "Sedang Mengunggah..." : "Finalisasi & Simpan")}</button></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "space-y-8" }, [
                createVNode("div", { class: "bg-white dark:bg-slate-900 p-8 rounded-[1rem] border border-slate-200 dark:border-slate-800 shadow-sm" }, [
                  createVNode("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8" }, "Alur Tahapan Audit Berjalan"),
                  createVNode("div", { class: "relative flex justify-between items-center max-w-4xl mx-auto" }, [
                    createVNode("div", { class: "absolute top-1/2 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 -translate-y-1/2" }),
                    createVNode("div", {
                      class: "absolute top-1/2 left-0 h-1 bg-rose-600 -translate-y-1/2 transition-all duration-1000",
                      style: { width: currentStageIndex.value / (stages.length - 1) * 100 + "%" }
                    }, null, 4),
                    (openBlock(), createBlock(Fragment, null, renderList(stages, (stage, index) => {
                      return createVNode("div", {
                        key: stage.key,
                        class: "relative z-10 flex flex-col items-center"
                      }, [
                        createVNode("div", {
                          class: [
                            "w-5 h-5 rounded-full border-4 transition-all duration-500",
                            index <= currentStageIndex.value ? "bg-rose-600 border-rose-100 dark:border-rose-900 scale-125 shadow-lg shadow-rose-500/20" : "bg-slate-200 dark:bg-slate-700 border-white dark:border-slate-900"
                          ]
                        }, null, 2),
                        createVNode("span", {
                          class: [
                            "absolute -bottom-8 whitespace-nowrap text-[9px] font-black uppercase tracking-widest transition-colors",
                            index === currentStageIndex.value ? "text-rose-600" : "text-slate-400"
                          ]
                        }, toDisplayString(stage.label), 3)
                      ]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "bg-slate-900 rounded-[1rem] p-8 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl" }, [
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("h3", { class: "text-xl font-black uppercase tracking-tighter italic" }, "Dokumentasi Berita Acara"),
                    createVNode("p", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1" }, "Unggah berkas resmi sesuai tahapan yang berlaku")
                  ]),
                  createVNode("div", { class: "flex flex-wrap justify-center gap-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.groupedDocuments, (doc) => {
                      return openBlock(), createBlock("div", {
                        key: doc.type,
                        class: "text-center bg-white/5 p-4 rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
                      }, [
                        createVNode("p", { class: "text-[8px] font-black text-slate-500 uppercase mb-3" }, toDisplayString(doc.label), 1),
                        !doc.file ? (openBlock(), createBlock("button", {
                          key: 0,
                          onClick: ($event) => openDocUpload(doc),
                          disabled: !canUploadBA(doc.type),
                          class: [
                            "px-6 py-2 rounded-xl text-[9px] font-black uppercase transition-all",
                            canUploadBA(doc.type) ? "bg-rose-600 text-white hover:bg-rose-500" : "bg-white/5 text-white/20 cursor-not-allowed"
                          ]
                        }, " Unggah ", 10, ["onClick", "disabled"])) : (openBlock(), createBlock("a", {
                          key: 1,
                          href: _ctx.route("files.official.show", doc.file.id),
                          target: "_blank",
                          class: "inline-block px-6 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl text-[9px] font-black uppercase hover:bg-emerald-500/30 transition-all italic"
                        }, " Tersedia ", 8, ["href"]))
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "bg-white dark:bg-slate-900 rounded-[1rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" }, [
                  createVNode("div", { class: "p-8 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/30" }, [
                    createVNode("h3", { class: "font-black text-slate-800 dark:text-white uppercase text-xs tracking-[0.2em] italic" }, " Evaluasi Indikator Standar"),
                    createVNode("div", { class: "relative w-80" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => search.value = $event,
                        type: "text",
                        placeholder: "Cari Kode atau Butir...",
                        class: "w-full pl-10 pr-4 py-2.5 text-xs bg-white dark:bg-slate-800 border-0 rounded-2xl shadow-inner focus:ring-2 focus:ring-rose-500/20 transition-all"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, search.value]
                      ]),
                      (openBlock(), createBlock("svg", {
                        class: "w-4 h-4 absolute left-3.5 top-3 text-slate-300",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", { d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" })
                      ]))
                    ])
                  ]),
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("table", { class: "w-full text-left text-xs border-collapse min-w-[1500px]" }, [
                      createVNode("thead", { class: "bg-slate-50 dark:bg-slate-800/80 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b dark:border-slate-800" }, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "p-2 w-20" }, "Kode"),
                          createVNode("th", { class: "p-2 w-80" }, "Kriteria Indikator"),
                          createVNode("th", { class: "p-2 w-80" }, "Bukti yang Diperiksa "),
                          createVNode("th", { class: "p-2 text-center w-32" }, "Bukti"),
                          createVNode("th", { class: "p-2 text-center w-28" }, "Status Temuan"),
                          createVNode("th", { class: "p-2 text-center w-20" }, "Skor"),
                          createVNode("th", { class: "p-2 w-64" }, "Catatan & Rekomendasi"),
                          createVNode("th", { class: "p-2 text-center w-28" }, "Aksi")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-slate-100 dark:divide-slate-800" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.indicators.data, (item) => {
                          return openBlock(), createBlock("tr", {
                            key: item.id,
                            class: ["align-top transition-colors group", item.finding_type === "KTS" ? "bg-rose-50/10 hover:bg-rose-50/20" : "hover:bg-slate-50/50"]
                          }, [
                            createVNode("td", { class: "p-2 font-mono font-black text-rose-600 tracking-tighter" }, toDisplayString(item.snapshot_code), 1),
                            createVNode("td", { class: "p-2 leading-relaxed" }, [
                              createVNode("p", { class: "font-bold text-slate-800 dark:text-slate-200 mb-3 text-[11px]" }, toDisplayString(item.snapshot_requirement), 1)
                            ]),
                            createVNode("td", { class: "p-2 leading-relaxed" }, [
                              createVNode("p", { class: "font-bold text-slate-800 dark:text-slate-200 mb-3 text-[11px]" }, toDisplayString(item.snapshot_evidence_needed), 1)
                            ]),
                            createVNode("td", { class: "p-2 text-center" }, [
                              createVNode("div", { class: "flex flex-col gap-2 items-center" }, [
                                item.evidence_path ? (openBlock(), createBlock("a", {
                                  key: 0,
                                  href: _ctx.route("files.evidence.show", item.id),
                                  target: "_blank",
                                  class: "px-3 py-1.5 bg-blue-50 text-blue-600 rounded-xl font-black text-[9px] border border-blue-100 hover:bg-blue-600 hover:text-white transition-all uppercase shadow-sm"
                                }, "Berkas", 8, ["href"])) : createCommentVNode("", true),
                                item.evidence_url ? (openBlock(), createBlock("a", {
                                  key: 1,
                                  href: item.evidence_url,
                                  target: "_blank",
                                  class: "px-3 py-1.5 bg-purple-50 text-purple-600 rounded-xl font-black text-[9px] border border-purple-100 hover:bg-purple-600 hover:text-white transition-all uppercase shadow-sm"
                                }, "Tautan", 8, ["href"])) : createCommentVNode("", true),
                                !item.evidence_path && !item.evidence_url ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: "text-slate-200 font-bold uppercase tracking-widest text-[9px]"
                                }, "Kosong")) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("td", { class: "p-2 text-center" }, [
                              item.finding_type ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ["px-3 py-1 rounded-full text-[9px] font-black border tracking-widest inline-block shadow-sm", getFindingBadge(item.finding_type)]
                              }, toDisplayString(item.finding_type), 3)) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-slate-200 font-bold"
                              }, "-"))
                            ]),
                            createVNode("td", { class: "p-2 text-center" }, [
                              createVNode("div", {
                                class: ["w-10 h-10 leading-10 mx-auto rounded-2xl font-black text-sm border-2 transition-all shadow-sm", item.score ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-100 border-slate-50 dark:bg-slate-800 dark:border-slate-700"]
                              }, toDisplayString(item.score ?? "-"), 3)
                            ]),
                            createVNode("td", { class: "p-2" }, [
                              createVNode("div", { class: "space-y-4" }, [
                                item.auditor_note ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode("p", { class: "text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 italic" }, " Catatan:"),
                                  createVNode("p", { class: "text-[10px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed" }, ' "' + toDisplayString(item.auditor_note) + '"', 1)
                                ])) : createCommentVNode("", true),
                                item.recommendation ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "p-3 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-xl"
                                }, [
                                  createVNode("p", { class: "text-[8px] font-black text-amber-600 uppercase tracking-widest mb-1 italic leading-none" }, " Saran Perbaikan:"),
                                  createVNode("p", { class: "text-[10px] text-amber-800 dark:text-amber-400 font-bold leading-relaxed" }, toDisplayString(item.recommendation), 1)
                                ])) : createCommentVNode("", true),
                                !item.auditor_note && !item.recommendation ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: "text-slate-200 font-bold"
                                }, "-")) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("td", { class: "p-2 text-center" }, [
                              createVNode("div", { class: "flex justify-center gap-2" }, [
                                createVNode("button", {
                                  onClick: ($event) => openAssessment(item),
                                  class: "p-3 bg-rose-600 text-white rounded-2xl shadow-lg shadow-rose-500/20 hover:bg-rose-700 hover:scale-105 active:scale-95 transition-all"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-4 h-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2.5",
                                      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    })
                                  ]))
                                ], 8, ["onClick"]),
                                createVNode("button", {
                                  onClick: ($event) => openHistory(item),
                                  class: "p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-2xl hover:text-rose-600 hover:bg-rose-50 transition-all shadow-sm"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-4 h-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2.5",
                                      d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                  ]))
                                ], 8, ["onClick"])
                              ])
                            ])
                          ], 2);
                        }), 128))
                      ])
                    ])
                  ])
                ])
              ]),
              showAssessmentModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-[999] flex items-center justify-center p-4"
              }, [
                createVNode("div", {
                  class: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm",
                  onClick: ($event) => showAssessmentModal.value = false
                }, null, 8, ["onClick"]),
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[1rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(submitAssessment, ["prevent"]),
                    class: "flex flex-col max-h-[90vh]"
                  }, [
                    createVNode("div", { class: "p-8 border-b dark:border-slate-800 bg-slate-50/50 flex justify-between items-center" }, [
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-xl font-black uppercase tracking-tighter text-slate-800 dark:text-white leading-none" }, " Evaluasi Auditor"),
                        createVNode("p", { class: "text-[10px] font-bold text-rose-600 font-mono mt-2 uppercase tracking-widest" }, toDisplayString(activeIndicator.value?.snapshot_code), 1)
                      ]),
                      createVNode("button", {
                        type: "button",
                        onClick: ($event) => showAssessmentModal.value = false,
                        class: "text-4xl text-slate-300 hover:text-rose-600"
                      }, "×", 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "p-10 space-y-8 overflow-y-auto custom-scrollbar" }, [
                      createVNode("div", { class: "p-2 bg-slate-50 dark:bg-slate-800/80 rounded-[2rem] text-[11px] font-bold text-slate-600 dark:text-slate-300 italic leading-relaxed border border-slate-100 dark:border-slate-700" }, ' "' + toDisplayString(activeIndicator.value?.snapshot_requirement) + '" ', 1),
                      createVNode("div", { class: "grid grid-cols-2 gap-6" }, [
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" }, "Status Temuan"),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => unref(assessmentForm).finding_type = $event,
                            class: "w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold dark:text-white shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none",
                            required: ""
                          }, [
                            createVNode("option", {
                              value: "",
                              disabled: ""
                            }, "Pilih Status"),
                            createVNode("option", { value: "KS" }, "KS (Kesesuaian)"),
                            createVNode("option", { value: "KTS" }, "KTS (Ketidaksesuaian)"),
                            createVNode("option", { value: "OB" }, "OB (Observasi)")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(assessmentForm).finding_type]
                          ])
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" }, "Skor Penilaian"),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => unref(assessmentForm).score = $event,
                            class: "w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold dark:text-white shadow-inner focus:ring-2 focus:ring-rose-500/20 outline-none",
                            required: ""
                          }, [
                            createVNode("option", {
                              value: "",
                              disabled: ""
                            }, "Pilih Skor (1-4)"),
                            (openBlock(), createBlock(Fragment, null, renderList(4, (n) => {
                              return createVNode("option", {
                                key: n,
                                value: n
                              }, toDisplayString(n), 9, ["value"]);
                            }), 64))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(assessmentForm).score]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" }, "Deskripsi Temuan Audit"),
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => unref(assessmentForm).auditor_note = $event,
                          rows: "3",
                          placeholder: "Tuliskan temuan audit secara detail...",
                          class: "w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm font-bold dark:text-white shadow-inner outline-none",
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(assessmentForm).auditor_note]
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]" }, "Rekomendasi Perbaikan"),
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => unref(assessmentForm).recommendation = $event,
                          rows: "3",
                          placeholder: "Saran langkah perbaikan untuk unit kerja...",
                          class: "w-full px-5 py-3.5 bg-amber-50/50 dark:bg-amber-900/10 border-2 border-amber-100 dark:border-amber-900/20 rounded-2xl text-sm font-bold dark:text-white outline-none"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(assessmentForm).recommendation]
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-6 pt-4 border-t dark:border-slate-800" }, [
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" }, "Link Verifikasi"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(assessmentForm).evidence_url = $event,
                            type: "url",
                            placeholder: "https://...",
                            class: "w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl text-sm dark:text-white shadow-inner outline-none"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(assessmentForm).evidence_url]
                          ])
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("label", { class: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" }, "Upload Bukti Baru"),
                          createVNode("input", {
                            type: "file",
                            onInput: ($event) => unref(assessmentForm).evidence_file = $event.target.files[0],
                            class: "w-full text-[10px] text-slate-400 file:mr-4 file:py-2.5 file:px-6 file:rounded-xl file:border-0 file:bg-slate-900 file:text-white file:font-black hover:file:bg-rose-600 transition-all cursor-pointer"
                          }, null, 40, ["onInput"])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "p-8 border-t dark:border-slate-800 flex justify-end gap-3 bg-slate-50/30" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: ($event) => showAssessmentModal.value = false,
                        class: "px-8 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors"
                      }, "Batal", 8, ["onClick"]),
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(assessmentForm).processing,
                        class: "px-12 py-3 bg-rose-600 text-white rounded-2xl font-black uppercase text-[10px] shadow-xl shadow-rose-500/20 hover:bg-rose-700 hover:translate-y-[-2px] active:translate-y-0 transition-all disabled:opacity-50 tracking-widest"
                      }, toDisplayString(unref(assessmentForm).processing ? "Menyimpan..." : "Simpan Penilaian"), 9, ["disabled"])
                    ])
                  ], 32)
                ])
              ])) : createCommentVNode("", true),
              showHistoryModal.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "fixed inset-0 z-[999] flex items-center justify-center p-4"
              }, [
                createVNode("div", {
                  class: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity",
                  onClick: ($event) => showHistoryModal.value = false
                }, null, 8, ["onClick"]),
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[1rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[85vh]" }, [
                  createVNode("div", { class: "p-8 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-xl font-black uppercase text-slate-800 dark:text-white leading-none tracking-tighter" }, " Jejak Audit"),
                      createVNode("p", { class: "text-[10px] font-bold text-rose-600 font-mono mt-2 uppercase tracking-widest italic" }, toDisplayString(activeIndicatorCode.value), 1)
                    ]),
                    createVNode("button", {
                      onClick: ($event) => showHistoryModal.value = false,
                      class: "text-slate-400 hover:text-rose-600 text-3xl transition-colors"
                    }, "×", 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "p-10 overflow-y-auto bg-white dark:bg-slate-900 custom-scrollbar flex-1" }, [
                    loadingHistory.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-center py-12"
                    }, [
                      createVNode("div", { class: "animate-spin inline-block w-10 h-10 border-4 border-rose-500 border-t-transparent rounded-full mb-4" }),
                      createVNode("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]" }, "Memuat Histori... ")
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "space-y-10"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(activeHistory.value, (log) => {
                        return openBlock(), createBlock("div", {
                          key: log.id,
                          class: "relative pl-10 border-l-2 border-slate-100 dark:border-slate-800"
                        }, [
                          createVNode("div", { class: "absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-rose-600 shadow-sm shadow-rose-500/30" }),
                          createVNode("div", { class: "text-[10px] font-black text-rose-600 uppercase tracking-widest mb-1" }, toDisplayString(new Date(log.created_at).toLocaleString("id-ID", {
                            dateStyle: "medium",
                            timeStyle: "short"
                          })), 1),
                          createVNode("div", { class: "text-sm font-black text-slate-800 dark:text-white leading-none mb-1" }, toDisplayString(log.user ? log.user.name : "Sistem"), 1),
                          createVNode("div", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-4" }, toDisplayString(log.user ? log.user.role : "SYSTEM") + " (Tahap: " + toDisplayString(log.stage) + ")", 1),
                          createVNode("div", { class: "bg-slate-50 dark:bg-slate-800/50 p-5 rounded-3xl border border-slate-100 dark:border-slate-800" }, [
                            createVNode("p", { class: "text-[10px] font-black text-slate-700 dark:text-slate-200 mb-3 uppercase tracking-tighter italic border-b dark:border-slate-700 pb-1" }, [
                              createTextVNode(" Aksi: "),
                              createVNode("span", { class: "text-rose-600" }, toDisplayString(log.action.replace(/_/g, " ")), 1)
                            ]),
                            createVNode("div", {
                              class: "text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium space-y-1",
                              innerHTML: log.formatted_changes
                            }, null, 8, ["innerHTML"])
                          ])
                        ]);
                      }), 128)),
                      !activeHistory.value.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-center py-10"
                      }, [
                        createVNode("p", { class: "text-[10px] text-slate-300 font-black uppercase tracking-widest italic" }, "Belum ada rekaman aktivitas.")
                      ])) : createCommentVNode("", true)
                    ]))
                  ]),
                  createVNode("div", { class: "p-8 bg-slate-50 dark:bg-slate-800/50 border-t dark:border-slate-800 text-right" }, [
                    createVNode("button", {
                      onClick: ($event) => showHistoryModal.value = false,
                      class: "px-10 py-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all hover:bg-rose-600 shadow-xl active:scale-95"
                    }, "Tutup Histori", 8, ["onClick"])
                  ])
                ])
              ])) : createCommentVNode("", true),
              showDocModal.value ? (openBlock(), createBlock("div", {
                key: 2,
                class: "fixed inset-0 z-[999] flex items-center justify-center p-4"
              }, [
                createVNode("div", {
                  class: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm",
                  onClick: ($event) => showDocModal.value = false
                }, null, 8, ["onClick"]),
                createVNode("div", { class: "relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[1rem] shadow-2xl animate-in zoom-in duration-200 overflow-hidden" }, [
                  createVNode("div", { class: "p-8 border-b bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center" }, [
                    createVNode("h3", { class: "text-xs font-black uppercase text-slate-800 dark:text-white tracking-[0.2em]" }, "Upload Dokumen Resmi"),
                    createVNode("button", {
                      onClick: ($event) => showDocModal.value = false,
                      class: "text-3xl text-slate-300 hover:text-rose-600 transition-colors"
                    }, "×", 8, ["onClick"])
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submitDoc, ["prevent"]),
                    class: "p-10 space-y-8 text-center"
                  }, [
                    createVNode("div", { class: "p-2 bg-rose-50 dark:bg-rose-900/10 text-rose-600 rounded-[2rem] text-[10px] font-black uppercase border border-rose-100 dark:border-rose-900 shadow-inner" }, [
                      createTextVNode(" Jenis Dokumen: "),
                      createVNode("span", { class: "block text-sm mt-1 tracking-tighter italic" }, toDisplayString(unref(docForm).label), 1)
                    ]),
                    unref(docForm).errors.message ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "p-3 mb-4 bg-rose-50 text-rose-600 text-[10px] font-bold rounded-xl border border-rose-100 italic"
                    }, toDisplayString(unref(docForm).errors.message), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "relative group" }, [
                      createVNode("input", {
                        type: "file",
                        onInput: ($event) => unref(docForm).file = $event.target.files[0],
                        required: "",
                        class: "w-full text-[10px] text-slate-400 file:mr-4 file:py-3 file:px-8 file:rounded-2xl file:border-0 file:bg-slate-900 file:text-white file:font-black hover:file:bg-rose-600 transition-all cursor-pointer"
                      }, null, 40, ["onInput"])
                    ]),
                    unref(docForm).errors.file ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-[9px] text-rose-500 font-bold mt-1 uppercase italic"
                    }, toDisplayString(unref(docForm).errors.file), 1)) : createCommentVNode("", true),
                    createVNode("button", {
                      type: "submit",
                      disabled: unref(docForm).processing,
                      class: "w-full py-5 bg-rose-600 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl hover:bg-rose-700 transition-all active:scale-95 disabled:opacity-50"
                    }, toDisplayString(unref(docForm).processing ? "Sedang Mengunggah..." : "Finalisasi & Simpan"), 9, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auditor/Assignment/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-99876120"]]);
export {
  Show as default
};

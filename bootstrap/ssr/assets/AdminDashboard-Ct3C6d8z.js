import { computed, resolveComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Doughnut, Bar } from "vue-chartjs";
import { Chart, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
const _sfc_main = {
  __name: "AdminDashboard",
  __ssrInlineRender: true,
  props: ["stats", "activities"],
  setup(__props) {
    Chart.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);
    const props = __props;
    const stageData = computed(() => {
      const breakdown = props.stats.stage_breakdown || [];
      const items = Array.isArray(breakdown) ? breakdown : Object.values(breakdown);
      return {
        labels: items.map((item) => item.label),
        datasets: [{
          backgroundColor: ["#6366f1", "#e11d48", "#f59e0b", "#10b981", "#8b5cf6", "#ec4899"],
          borderWidth: 0,
          data: items.map((item) => item.total)
        }]
      };
    });
    const stageOptions = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
      plugins: {
        legend: { position: "bottom", labels: { usePointStyle: true, color: "#94a3b8" } }
      }
    };
    const findingData = computed(() => {
      const dist = props.stats.findings_distribution || { ks: 0, kts: 0, ob: 0 };
      return {
        labels: ["Sesuai (KS)", "Minor/Major (KTS)", "Observasi (OB)"],
        datasets: [{
          label: "Jumlah Temuan",
          backgroundColor: ["#10b981", "#f43f5e", "#f59e0b"],
          borderRadius: 6,
          data: [dist.ks, dist.kts, dist.ob]
        }]
      };
    });
    const findingOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, grid: { color: "#33415520" }, ticks: { color: "#94a3b8" } },
        x: { grid: { display: false }, ticks: { color: "#94a3b8" } }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700" }, _attrs))}><div class="relative bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 rounded-3xl p-8 overflow-hidden shadow-xl dark:shadow-2xl border border-slate-100 dark:border-none"><div class="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div><div class="relative z-10"><h2 class="text-3xl font-black tracking-tight mb-2 text-slate-800 dark:text-white">Pusat Komando</h2><p class="text-slate-500 dark:text-slate-400">Ringkasan kinerja dan aktivitas audit akademik.</p></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList([
        { label: "Total Unit", val: __props.stats.total_prodi + __props.stats.total_faculty, icon: "fa-school", color: "text-indigo-400" },
        { label: "Auditor", val: __props.stats.total_auditors, icon: "fa-user-tie", color: "text-amber-400" },
        { label: "Audit Aktif", val: __props.stats.active_assignments, icon: "fa-bolt", color: "text-rose-400" },
        { label: "Selesai", val: __props.stats.completed_assignments, icon: "fa-flag-checkered", color: "text-emerald-400" }
      ], (item, idx) => {
        _push(`<div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"><div class="flex items-center gap-3"><div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800">`);
        _push(ssrRenderComponent(_component_icon, {
          icon: `fa-solid ${item.icon}`,
          class: item.color
        }, null, _parent));
        _push(`</div><div><p class="text-2xl font-black text-slate-800 dark:text-white">${ssrInterpolate(item.val)}</p><p class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">${ssrInterpolate(item.label)}</p></div></div></div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"><h3 class="text-sm font-bold uppercase text-slate-500 mb-6 tracking-widest">Tahapan Audit</h3><div class="h-64 relative">`);
      if (stageData.value.datasets[0].data.some((val) => val > 0)) {
        _push(ssrRenderComponent(unref(Doughnut), {
          data: stageData.value,
          options: stageOptions
        }, null, _parent));
      } else {
        _push(`<div class="h-full flex items-center justify-center text-slate-400 text-sm italic"> Tidak ada data tahapan tersedia </div>`);
      }
      _push(`</div></div><div class="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"><h3 class="text-sm font-bold uppercase text-slate-500 mb-6 tracking-widest">Sebaran Temuan</h3><div class="h-64 relative">`);
      if (findingData.value.datasets[0].data.some((val) => val > 0)) {
        _push(ssrRenderComponent(unref(Bar), {
          data: findingData.value,
          options: findingOptions
        }, null, _parent));
      } else {
        _push(`<div class="h-full flex items-center justify-center text-slate-400 text-sm italic"> Belum ada temuan tercatat </div>`);
      }
      _push(`</div></div></div><div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden"><div class="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50"><h3 class="text-sm font-bold uppercase text-slate-500 tracking-widest">Aktivitas Terbaru</h3></div><div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead class="bg-slate-50 dark:bg-slate-800 text-xs uppercase text-slate-400 font-bold"><tr><th class="px-6 py-4">Pengguna</th><th class="px-6 py-4">Aksi</th><th class="px-6 py-4">Tahap</th><th class="px-6 py-4">Waktu</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
      ssrRenderList(__props.activities, (log) => {
        _push(`<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><td class="px-6 py-4 font-bold text-slate-700 dark:text-slate-200">${ssrInterpolate(log.user?.name || "Tidak Diketahui")}</td><td class="px-6 py-4 text-slate-600 dark:text-slate-400">${ssrInterpolate(log.action)}</td><td class="px-6 py-4"><span class="px-2 py-1 rounded text-[10px] font-black uppercase bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300">${ssrInterpolate(log.stage)}</span></td><td class="px-6 py-4 text-slate-400 text-xs">${ssrInterpolate(new Date(log.created_at).toLocaleString("id-ID"))}</td></tr>`);
      });
      _push(`<!--]-->`);
      if (!__props.activities?.length) {
        _push(`<tr><td colspan="4" class="px-6 py-8 text-center text-slate-400 italic">Tidak ada aktivitas terbaru.</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Partials/AdminDashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

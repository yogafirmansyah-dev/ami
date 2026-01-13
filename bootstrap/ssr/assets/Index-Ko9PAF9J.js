import { computed, mergeProps, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-D0TyJNRu.js";
import _sfc_main$1 from "./AdminDashboard-Bi6m3JDo.js";
import _sfc_main$2 from "./AuditorDashboard-Zrfjbg_i.js";
import _sfc_main$3 from "./AuditeeDashboard-B28Qn0-N.js";
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
import "./TStatisticWidget-CYw_XkfQ.js";
import "./TContentCard-BkuMOsLs.js";
import "./TTable-CBIvC_BZ.js";
import "./TPaginate-AWicR3Cf.js";
import "./TModal-BluvIe0P.js";
import "vue3-keypress";
import "./TInputSelect-BY60CBa7.js";
import "./TInputText-CyR_XUuU.js";
import "./TInputCheckBox-eDtuF0je.js";
import "./TCheckIcon-CWPVq9Ck.js";
import "lodash";
import "./table_lang-CXzpQG4k.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    stats: Object,
    // Data statistik dari DashboardController
    activities: Array,
    myAssignments: Array
  },
  setup(__props) {
    const page = usePage();
    const role = computed(() => page.props.auth.user.role);
    const dashboardComponent = computed(() => {
      if (role.value === "admin") return _sfc_main$1;
      if (role.value === "auditor") return _sfc_main$2;
      if (role.value === "auditee") return _sfc_main$3;
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Dashboard Overview" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dashboard ${ssrInterpolate(role.value.toUpperCase())}`);
          } else {
            return [
              createTextVNode("Dashboard " + toDisplayString(role.value.toUpperCase()), 1)
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Selamat Datang kembali, ${ssrInterpolate(_ctx.$page.props.auth.user.name)}`);
          } else {
            return [
              createTextVNode("Selamat Datang kembali, " + toDisplayString(_ctx.$page.props.auth.user.name), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(dashboardComponent.value), {
              stats: __props.stats,
              activities: __props.activities,
              "my-assignments": __props.myAssignments
            }, null), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(dashboardComponent.value), {
                stats: __props.stats,
                activities: __props.activities,
                "my-assignments": __props.myAssignments
              }, null, 8, ["stats", "activities", "my-assignments"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

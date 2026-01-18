import { defineComponent, resolveComponent, useSSRContext } from "vue";
import { Head } from "@inertiajs/vue3";
import { T as TLogin } from "./TLogin-DsDEEK8d.js";
import { useI18n } from "vue-i18n";
import { a as authTranslates } from "./displayLanguage-Bjc1nzNS.js";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./windowSizeCalculator-BWfQvLaG.js";
import "@vuelidate/core";
import "@vuelidate/validators";
import "./darkMode-BsM-iRm5.js";
import "pinia";
import "./authScreenDesigns-Bu_GjJbX.js";
import "./TInputGroup-D2FkHKt4.js";
import "./TInputText-CyR_XUuU.js";
import "@vueuse/core";
import "./TDropdown-8S66trQc.js";
import "./TTooltip-DEROIMmS.js";
import "./TInputCheckBox-MNbC_ugI.js";
import "./TCheckIcon-CWPVq9Ck.js";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = defineComponent({
  props: {
    canResetPassword: Boolean,
    status: String
  },
  components: {
    TLogin,
    Head
  },
  setup() {
    const { t, tm } = useI18n({
      inheritLocale: true,
      messages: authTranslates
    });
    return { t, tm };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_t_login = resolveComponent("t-login");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.tm("login")
  }, null, _parent));
  _push(ssrRenderComponent(_component_t_login, {
    status: _ctx.status,
    "can-reset-password": _ctx.canResetPassword
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Login as default
};

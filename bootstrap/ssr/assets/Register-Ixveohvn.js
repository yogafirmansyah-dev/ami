import { unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { T as TRegister } from "./TRegister-BofKJ23c.js";
import { useI18n } from "vue-i18n";
import { a as authTranslates } from "./displayLanguage-CeV33Cax.js";
import "./windowSizeCalculator-ej9CZPp5.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vuelidate/core";
import "@vuelidate/validators";
import "./darkMode-BsM-iRm5.js";
import "pinia";
import "./authScreenDesigns-BMSiirfR.js";
import "./TInputGroup-D2FkHKt4.js";
import "./TInputText-CyR_XUuU.js";
import "@vueuse/core";
import "./TDropdown-DbVD8e4r.js";
import "./TTooltip-DEROIMmS.js";
import "./TInputCheckBox-HSBq-avl.js";
import "./TCheckIcon-CWPVq9Ck.js";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm } = useI18n({
      inheritLocale: true,
      messages: authTranslates
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: unref(tm)("register")
      }, null, _parent));
      _push(ssrRenderComponent(TRegister, {
        privacyPolicyFeature: _ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature,
        termsLink: "/terms",
        policyLink: "/privacy-policy"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

import { unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { T as TForgot } from "./TForgot-CVDFpeom.js";
import { useI18n } from "vue-i18n";
import { a as authTranslates } from "./displayLanguage-Bjc1nzNS.js";
import "./windowSizeCalculator-BWfQvLaG.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vuelidate/core";
import "@vuelidate/validators";
import "./darkMode-BsM-iRm5.js";
import "pinia";
import "./authScreenDesigns-Bu_GjJbX.js";
import "./TInputGroup-D2FkHKt4.js";
import "./TInputText-CyR_XUuU.js";
import "@vueuse/core";
import "./TTooltip-DEROIMmS.js";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const { tm } = useI18n({
      inheritLocale: true,
      messages: authTranslates
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: unref(tm)("forgotPassword")
      }, null, _parent));
      _push(ssrRenderComponent(TForgot, { status: __props.status }, {
        greeting: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(tm)("forgotPassword"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(tm)("forgotPassword")), 1)
            ];
          }
        }),
        subGreeting: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(tm)("forgotPasswordSubGreeting"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(tm)("forgotPasswordSubGreeting")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

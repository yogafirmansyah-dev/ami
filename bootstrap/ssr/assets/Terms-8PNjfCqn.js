import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-BXpqpYTS.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./windowSizeCalculator-Ch6zBFfA.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TDropdown-CRaizlei.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-DS29Kv5n.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  __name: "Terms",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Terms & Conditions" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-3xl mx-auto py-12 px-6"${_scopeId}><h1 class="text-3xl font-bold mb-6"${_scopeId}>Terms &amp; Conditions</h1><div class="prose dark:prose-invert"${_scopeId}><p${_scopeId}> Welcome to our Terms &amp; Conditions page. Please read carefully. </p><h2${_scopeId}>Section 1: Usage</h2><p${_scopeId}> You must agree to these terms to use our service. </p><h2${_scopeId}>Section 2: Privacy</h2><p${_scopeId}> Your privacy is important to us. Please review our policy. </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-3xl mx-auto py-12 px-6" }, [
                createVNode("h1", { class: "text-3xl font-bold mb-6" }, "Terms & Conditions"),
                createVNode("div", { class: "prose dark:prose-invert" }, [
                  createVNode("p", null, " Welcome to our Terms & Conditions page. Please read carefully. "),
                  createVNode("h2", null, "Section 1: Usage"),
                  createVNode("p", null, " You must agree to these terms to use our service. "),
                  createVNode("h2", null, "Section 2: Privacy"),
                  createVNode("p", null, " Your privacy is important to us. Please review our policy. ")
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

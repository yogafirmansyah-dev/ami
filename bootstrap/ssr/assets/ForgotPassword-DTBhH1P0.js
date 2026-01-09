import { mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { T as TForgot } from "./TForgot-CwYGK0ZH.js";
import { T as TLogo } from "./TLogo-BWZcVjQx.js";
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
import "./TTooltip-DEROIMmS.js";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm } = useI18n({
      inheritLocale: true,
      messages: authTranslates
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(TForgot, mergeProps({ status: _ctx.status }, _attrs), {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Link), { href: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col justify-center items-center w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(TLogo, { class: "w-12 h-12" }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-3xl"${_scopeId2}>TailAdmin</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col justify-center items-center w-full" }, [
                      createVNode(TLogo, { class: "w-12 h-12" }),
                      createVNode("span", { class: "text-3xl" }, "TailAdmin")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link), { href: "/" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col justify-center items-center w-full" }, [
                    createVNode(TLogo, { class: "w-12 h-12" }),
                    createVNode("span", { class: "text-3xl" }, "TailAdmin")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        greeting: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b${_scopeId}>${ssrInterpolate(unref(t)("forgotPasswordGreeting"))}</b>`);
          } else {
            return [
              createVNode("b", null, toDisplayString(unref(t)("forgotPasswordGreeting")), 1)
            ];
          }
        }),
        subGreeting: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("forgotPasswordSubGreeting"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("forgotPasswordSubGreeting")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Examples/Auth/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

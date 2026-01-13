import { mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-D0TyJNRu.js";
import _sfc_main$7 from "./DeleteUserForm-BbxvcRGD.js";
import _sfc_main$6 from "./LogoutOtherBrowserSessionsForm-CfXmc7y0.js";
import { S as SectionBorder } from "./SectionBorder-9_0CxrVI.js";
import _sfc_main$5 from "./TwoFactorAuthenticationForm-D90c0Jm_.js";
import _sfc_main$2 from "./UpdatePasswordForm-DAN3CkFn.js";
import _sfc_main$1 from "./UpdateProfileInformationForm-OQBPsTYt.js";
import _sfc_main$3 from "./PreferredLanguageForm-BrpR9tv9.js";
import _sfc_main$4 from "./DarkModePreferenceForm-DG8r1rEy.js";
import "@inertiajs/vue3";
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
import "./Modal-BPxfNimL.js";
import "./SectionTitle-Bpt4B-Rr.js";
import "./DangerButton-DFSaKo0t.js";
import "./DialogModal-mwxakEYG.js";
import "./InputError-BCWdSoAI.js";
import "./SecondaryButton-BWihrucI.js";
import "./TextInput-wJl1wgt1.js";
import "./ActionMessage-BKCr4dVw.js";
import "./PrimaryButton-BZZqj18B.js";
import "./InputLabel-s7D3-jRa.js";
import "./FormSection-CorId1DH.js";
import "./TInputSelect-BY60CBa7.js";
import "./TInputText-CyR_XUuU.js";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Profile" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Profile </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Profile ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            if (_ctx.$page.props.jetstream.canUpdateProfileInformation) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                user: _ctx.$page.props.auth.user
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.jetstream.canUpdatePassword) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-10 sm:mt-0",
              user: _ctx.$page.props.auth.user
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-10 sm:mt-0",
              user: _ctx.$page.props.auth.user
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (_ctx.$page.props.jetstream.canManageTwoFactorAuthentication) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                "requires-confirmation": __props.confirmsTwoFactorAuthentication,
                class: "mt-10 sm:mt-0"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$6, {
              sessions: __props.sessions,
              class: "mt-10 sm:mt-0"
            }, null, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.hasAccountDeletionFeatures) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$7, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                  _ctx.$page.props.jetstream.canUpdateProfileInformation ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_sfc_main$1, {
                      user: _ctx.$page.props.auth.user
                    }, null, 8, ["user"]),
                    createVNode(SectionBorder)
                  ])) : createCommentVNode("", true),
                  _ctx.$page.props.jetstream.canUpdatePassword ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_sfc_main$2, { class: "mt-10 sm:mt-0" }),
                    createVNode(SectionBorder)
                  ])) : createCommentVNode("", true),
                  createVNode("div", null, [
                    createVNode(_sfc_main$3, {
                      class: "mt-10 sm:mt-0",
                      user: _ctx.$page.props.auth.user
                    }, null, 8, ["user"]),
                    createVNode(SectionBorder)
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$4, {
                      class: "mt-10 sm:mt-0",
                      user: _ctx.$page.props.auth.user
                    }, null, 8, ["user"]),
                    createVNode(SectionBorder)
                  ]),
                  _ctx.$page.props.jetstream.canManageTwoFactorAuthentication ? (openBlock(), createBlock("div", { key: 2 }, [
                    createVNode(_sfc_main$5, {
                      "requires-confirmation": __props.confirmsTwoFactorAuthentication,
                      class: "mt-10 sm:mt-0"
                    }, null, 8, ["requires-confirmation"]),
                    createVNode(SectionBorder)
                  ])) : createCommentVNode("", true),
                  createVNode(_sfc_main$6, {
                    sessions: __props.sessions,
                    class: "mt-10 sm:mt-0"
                  }, null, 8, ["sessions"]),
                  _ctx.$page.props.jetstream.hasAccountDeletionFeatures ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                    createVNode(SectionBorder),
                    createVNode(_sfc_main$7, { class: "mt-10 sm:mt-0" })
                  ], 64)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

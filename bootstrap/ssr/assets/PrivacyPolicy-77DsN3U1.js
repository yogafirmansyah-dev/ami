import { unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticationCardLogo-CymWJ5V7.js";
const policy = `
    <h1>Privacy Policy</h1>
    <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services.</p>
    <h2>Information We Collect</h2>
    <ul>
        <li>Personal information you provide when registering or using our site.</li>
        <li>Usage data and cookies to improve your experience.</li>
    </ul>
    <h2>How We Use Information</h2>
    <ul>
        <li>To provide and maintain our services.</li>
        <li>To communicate with you and improve our offerings.</li>
    </ul>
    <h2>Data Protection</h2>
    <p>We implement security measures to safeguard your data. Your information is not shared with third parties except as required by law.</p>
    <h2>Contact</h2>
    <p>If you have any questions about this policy, please contact us.</p>
`;
const _sfc_main = {
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Privacy Policy" }, null, _parent));
      _push(`<div class="font-sans text-gray-900 antialiased"><div class="pt-4 bg-gray-100"><div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0"><div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><div class="w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose">${policy}</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PrivacyPolicy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

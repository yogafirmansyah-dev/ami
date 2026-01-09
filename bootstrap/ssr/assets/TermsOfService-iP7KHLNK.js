import { unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticationCardLogo-CymWJ5V7.js";
const terms = `
    <h1>Terms of Service</h1>
    <p>Welcome to our application. By using our services, you agree to comply with and be bound by the following terms and conditions.</p>
    <h2>Use of Services</h2>
    <ul>
        <li>You must follow any policies made available to you within the services.</li>
        <li>You may not misuse our services, for example, by interfering with them or accessing them using a method other than the interface and the instructions that we provide.</li>
    </ul>
    <h2>Your Content</h2>
    <p>You retain ownership of any intellectual property rights that you hold in your content. When you upload or otherwise submit content to our services, you give us (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display and distribute such content.</p>
    <h2>Modifications to the Service</h2>
    <p>We are constantly changing and improving our services. We may add or remove functionalities or features, and we may suspend or stop a service altogether.</p>
    <h2>Termination</h2>
    <p>We may terminate or suspend your access to the services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
    <h2>Contact</h2>
    <p>If you have any questions about these Terms, please contact us.</p>
`;
const _sfc_main = {
  __name: "TermsOfService",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Terms of Service" }, null, _parent));
      _push(`<div class="font-sans text-gray-900 antialiased"><div class="pt-4 bg-gray-100"><div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0"><div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><div class="w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose">${terms}</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TermsOfService.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

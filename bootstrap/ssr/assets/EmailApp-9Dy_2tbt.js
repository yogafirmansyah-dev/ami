import { A as AppLayout } from "./AppLayout-C9UC9tJn.js";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./windowSizeCalculator-ej9CZPp5.js";
import "./TDropdown-DbVD8e4r.js";
import "vue-i18n";
import "./displayLanguage-CeV33Cax.js";
import "pinia";
import "./TAvatar-a0UbdIFE.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  name: "EmailApp",
  components: { AppLayout }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Email Application Page`);
      } else {
        return [
          createTextVNode("Email Application Page")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) ;
      else {
        return [];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) ;
      else {
        return [];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Examples/EmailApp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EmailApp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  EmailApp as default
};

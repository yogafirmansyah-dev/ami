import { A as AppLayout } from "./AppLayout-CbW7EXnn.js";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./windowSizeCalculator-EVN4qZjG.js";
import "./TDropdown-BaNvbUUI.js";
import "./TAvatar-rvhW0AFR.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  name: "LayoutStructure",
  components: { AppLayout }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ "action-buttons": true }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-blue-200 w-full h-full"${_scopeId}>Header</div>`);
      } else {
        return [
          createVNode("div", { class: "bg-blue-200 w-full h-full" }, "Header")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-gray-200 w-full h-full"${_scopeId}>SubHeader</div>`);
      } else {
        return [
          createVNode("div", { class: "bg-gray-200 w-full h-full" }, "SubHeader")
        ];
      }
    }),
    "action-buttons": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-green-200 w-full h-full flex justify-center items-center"${_scopeId}>Action Button Area</div>`);
      } else {
        return [
          createVNode("div", { class: "bg-green-200 w-full h-full flex justify-center items-center" }, "Action Button Area")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-yellow-200 w-full items-center justify-center flex text-center h-36"${_scopeId}>Content Area</div>`);
      } else {
        return [
          createVNode("div", { class: "bg-yellow-200 w-full items-center justify-center flex text-center h-36" }, "Content Area")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Layouts/LayoutStructure.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LayoutStructure = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LayoutStructure as default
};

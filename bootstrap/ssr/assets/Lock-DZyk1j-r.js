import { T as TLock } from "./TLock-CE_pOBBO.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "./windowSizeCalculator-Ch6zBFfA.js";
import "@vuelidate/core";
import "@vuelidate/validators";
import "./darkMode-BsM-iRm5.js";
import "pinia";
import "./authScreenDesigns-Bu_GjJbX.js";
import "./TInputGroup-D2FkHKt4.js";
import "./TInputText-CyR_XUuU.js";
import "@vueuse/core";
import "./TUserCircleIcon-41nI2djU.js";
import "./TAvatar-DS29Kv5n.js";
import "./TTooltip-DEROIMmS.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  components: { TLock }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_lock = resolveComponent("t-lock");
  _push(ssrRenderComponent(_component_t_lock, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Examples/Auth/Lock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Lock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Lock as default
};

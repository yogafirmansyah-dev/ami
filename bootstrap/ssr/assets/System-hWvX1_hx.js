import { A as AppLayout } from "./AppLayout-3kkfgqRQ.js";
import { s as settingsMenuMixin, I as InitialVerticalMenu } from "./settingsMenuMixin-DSVi_scy.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./windowSizeCalculator-BWfQvLaG.js";
import "./TDropdown-8S66trQc.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-BYbkHFXz.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  name: "SettingsSystem",
  components: { InitialVerticalMenu, AppLayout },
  mixins: [settingsMenuMixin]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_initial_vertical_menu = resolveComponent("initial-vertical-menu");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`System Settings`);
      } else {
        return [
          createTextVNode("System Settings")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Management of System&#39;s Variables`);
      } else {
        return [
          createTextVNode("Management of System's Variables")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_initial_vertical_menu, { menu: _ctx.menuList }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_initial_vertical_menu, { menu: _ctx.menuList }, null, 8, ["menu"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/System.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const System = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  System as default
};

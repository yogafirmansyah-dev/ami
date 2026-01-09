import { A as AppLayout } from "./AppLayout-C9UC9tJn.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TContentCard } from "./TContentCard-CDGc_Lhz.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
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
  name: "Chart",
  components: {
    AppLayout,
    GridSection,
    TContentCard
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_content_card = resolveComponent("t-content-card");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Charts`);
      } else {
        return [
          createTextVNode("Charts")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Change the tables to the show`);
      } else {
        return [
          createTextVNode("Change the tables to the show")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_grid_section, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_content_card, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_content_card)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_grid_section, null, {
            default: withCtx(() => [
              createVNode(_component_t_content_card)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Chart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Chart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Chart as default
};

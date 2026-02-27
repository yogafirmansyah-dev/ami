import { A as AppLayout } from "./AppLayout-CbW7EXnn.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { resolveComponent, withCtx, createBlock, openBlock, Fragment, renderList, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  name: "Grid",
  components: { GridSection, AppLayout }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Grid`);
      } else {
        return [
          createTextVNode("Grid")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Grid system for contents`);
      } else {
        return [
          createTextVNode("Grid system for contents")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_grid_section, {
          "col-tablet": 2,
          "col-laptop": 3,
          "col-desktop": 4
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(6, (i) => {
                _push3(`<div class="bg-gray-300 border border-gray-500 h-16 items-center justify-center flex font-bold text-xl"${_scopeId2}>${ssrInterpolate("Col " + i)}</div>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(Fragment, null, renderList(6, (i) => {
                  return createVNode("div", { class: "bg-gray-300 border border-gray-500 h-16 items-center justify-center flex font-bold text-xl" }, toDisplayString("Col " + i), 1);
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_grid_section, {
            "col-tablet": 2,
            "col-laptop": 3,
            "col-desktop": 4
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(Fragment, null, renderList(6, (i) => {
                return createVNode("div", { class: "bg-gray-300 border border-gray-500 h-16 items-center justify-center flex font-bold text-xl" }, toDisplayString("Col " + i), 1);
              }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Layouts/Grid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Grid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Grid as default
};

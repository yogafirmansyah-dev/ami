import { A as AppLayout } from "./AppLayout-C9UC9tJn.js";
import SshPre from "simple-syntax-highlighter";
/* empty css                */
import { resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
  name: "Validation",
  components: { AppLayout, SshPre },
  data() {
    return {
      sampleCode: {
        html: `<t-input-group label="Text Label" label-for="name4" sub-label="Cash only" sub-label-color="yellow" error="Please enter numerical value">
    <t-input-text id="name4" placeholder="I'm a placeholder text" value="Hi, I'm a prefilled text"/>
</t-input-group>`,
        js: 'import TInputGroup from "@/Components/Form/TInputGroup.vue";\nimport TInputText from "@/Components/Form/Inputs/TInputText.vue";\n\nexport default {\n  name: "InputGroup",\n  components: {SshPre,GridSection, TInputText, TInputGroup, ContentCard, AppLayout},\n  }',
        table: {
          header: [
            { key: "variable", label: "Variable" },
            { key: "type", label: "Value Type" },
            { key: "details", label: "Details" }
          ],
          content: [
            { variable: "label", type: "String", details: "Your input label" },
            { variable: "label-for", type: "String", details: "Label identity indicator, you should enter input's id" },
            {
              variable: "sub-label",
              type: "String",
              details: "If you want to show a second and small label, you can use"
            },
            {
              variable: "sub-label-color",
              type: "String",
              details: "You can change sub label color <br><b>Options:</b> red, blue, green, yellow, indigo, pink, gray"
            },
            {
              variable: "error",
              type: "String",
              details: "Every time it's text color is red, If It has a value, it shows"
            }
          ]
        }
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_ssh_pre = resolveComponent("ssh-pre");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Form Validations`);
      } else {
        return [
          createTextVNode("Form Validations")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Require, length and a few things`);
      } else {
        return [
          createTextVNode("Require, length and a few things")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ssh_pre, {
          "copy-button": true,
          language: "html",
          label: "Code"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($data.sampleCode.html)}`);
            } else {
              return [
                createTextVNode(toDisplayString($data.sampleCode.html), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ssh_pre, {
          "copy-button": true,
          language: "js",
          label: "JS"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($data.sampleCode.js)}`);
            } else {
              return [
                createTextVNode(toDisplayString($data.sampleCode.js), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ssh_pre, {
            "copy-button": true,
            language: "html",
            label: "Code"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($data.sampleCode.html), 1)
            ]),
            _: 1
          }),
          createVNode(_component_ssh_pre, {
            "copy-button": true,
            language: "js",
            label: "JS"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($data.sampleCode.js), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/FormElements/Validation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Validation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Validation as default
};

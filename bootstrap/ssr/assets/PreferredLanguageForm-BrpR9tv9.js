import { watch, mergeProps, withCtx, unref, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./ActionMessage-BKCr4dVw.js";
import { _ as _sfc_main$1 } from "./FormSection-CorId1DH.js";
import { _ as _sfc_main$4 } from "./InputError-BCWdSoAI.js";
import { _ as _sfc_main$3 } from "./PrimaryButton-BZZqj18B.js";
import { b as useDisplayLanguageStore, l as languages } from "./displayLanguage-Bjc1nzNS.js";
import { T as TInputSelect } from "./TInputSelect-BY60CBa7.js";
import "./SectionTitle-Bpt4B-Rr.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "pinia";
import "vue-i18n";
import "./TInputText-CyR_XUuU.js";
import "@vueuse/core";
const _sfc_main = {
  __name: "PreferredLanguageForm",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      language: props.user.language
    });
    const updatePreferredLanguage = () => {
      form.put(route("user.preferred-language.update"), {
        errorBag: "updatePreferredLanguage",
        preserveScroll: true,
        onSuccess: () => {
          changeLang(form.language);
        }
      });
    };
    const displayLanguageStore = useDisplayLanguageStore();
    const { changeLang } = displayLanguageStore;
    watch(() => props.user, (value) => {
      form.language = value.language;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ onSubmitted: updatePreferredLanguage }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Update Language Preference `);
          } else {
            return [
              createTextVNode(" Update Language Preference ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Update your preferred language. `);
          } else {
            return [
              createTextVNode(" Update your preferred language. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(TInputSelect, {
              modelValue: unref(form).language,
              "onUpdate:modelValue": ($event) => unref(form).language = $event,
              options: unref(languages),
              "options-label-key": "name",
              "options-value-key": "id",
              "place-holder": "Select Language"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.language,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(TInputSelect, {
                  modelValue: unref(form).language,
                  "onUpdate:modelValue": ($event) => unref(form).language = $event,
                  options: unref(languages),
                  "options-label-key": "name",
                  "options-value-key": "id",
                  "place-holder": "Select Language"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.language,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              on: unref(form).recentlySuccessful,
              class: "me-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Saved. `);
                } else {
                  return [
                    createTextVNode(" Saved. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                on: unref(form).recentlySuccessful,
                class: "me-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Saved. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$3, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/PreferredLanguageForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

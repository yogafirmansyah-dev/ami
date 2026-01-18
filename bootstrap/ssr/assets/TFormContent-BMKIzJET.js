import { defineComponent, toRefs, inject, ref, mergeProps, useSSRContext, provide, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, renderSlot, Transition, createBlock, createCommentVNode, openBlock, useSlots } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { d as _sfc_main$2, h as formContentConf } from "./windowSizeCalculator-Ch6zBFfA.js";
import { T as TContentCard } from "./TContentCard-B_5B7YYa.js";
import { useI18n } from "vue-i18n";
const _sfc_main$1 = defineComponent({
  name: "TFormSection",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    radius: {
      type: Number,
      default: null
    }
  },
  emits: ["reset"],
  setup(props, { emit }) {
    const { radius } = toRefs(props);
    const formContentConf2 = inject("formContentConf");
    const appConf = inject("appConf");
    const sectionLayout = inject("sectionLayout");
    const temporaryRadius = ref(radius.value ? radius.value : formContentConf2.radius ? formContentConf2.radius : appConf.value.radius);
    const reset = () => {
      emit("reset");
    };
    return {
      reset,
      temporaryRadius,
      sectionLayout
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["text-slate-700 dark:text-gray-100", [
      { "md:grid md:grid-cols-3 md:gap-6": _ctx.sectionLayout === "native" },
      { "-mx-6": _ctx.sectionLayout === "smart" }
    ]]
  }, _attrs))}>`);
  if (_ctx.sectionLayout === "native") {
    _push(`<div class="md:col-span-1"><div class="px-4">`);
    if (_ctx.title) {
      _push(`<h3 class="text-lg font-medium">${ssrInterpolate(_ctx.title)}</h3>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.description) {
      _push(`<p class="mt-1 text-sm">${ssrInterpolate(_ctx.description)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([
    { "mt-5 md:mt-0 md:col-span-2 border shadow m-2": _ctx.sectionLayout === "native" },
    { "": _ctx.sectionLayout === "smart" },
    `radius-${_ctx.temporaryRadius}`
  ])}"><div class="${ssrRenderClass([[
    { "py-4": _ctx.sectionLayout === "native" }
  ], "px-6"])}">`);
  if (_ctx.sectionLayout === "smart") {
    _push(`<div class="mb-4 pb-1 border-b">`);
    if (_ctx.title) {
      _push(`<h3 class="text-md font-medium">${ssrInterpolate(_ctx.title)}</h3>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.description) {
      _push(`<p class="mt-1 text-xs">${ssrInterpolate(_ctx.description)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="grid grid-cols-12 gap-2">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/TFormSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TFormSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  name: "TForm",
  props: {
    enctype: {
      type: String,
      default: "application/x-www-form-urlencoded"
    },
    disabled: Boolean,
    radius: {
      type: Number,
      default: null
    },
    resetButton: {
      type: Boolean,
      default: true
    },
    submitButton: {
      type: Boolean,
      default: true
    },
    sectionLayout: {
      type: String,
      default: "native"
    }
  },
  components: {
    TContentCard,
    TButton: _sfc_main$2
  },
  emits: ["reset"],
  setup(props, { emit, slots }) {
    const { radius, sectionLayout } = toRefs(props);
    const appConf = inject("appConf");
    provide("formContentConf", formContentConf);
    provide("sectionLayout", sectionLayout);
    const temporaryRadius = ref(radius.value ? radius.value : formContentConf.radius ? formContentConf.radius : appConf.value.radius);
    const { tm } = useI18n({
      inheritLocale: true
    });
    const reset = () => {
      emit("reset");
    };
    const hasSlot = (name) => !!useSlots()[name];
    return {
      appConf,
      formContentConf,
      temporaryRadius,
      tm,
      hasSlot,
      reset
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_content_card = resolveComponent("t-content-card");
  const _component_t_button = resolveComponent("t-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><form${ssrRenderAttr("enctype", _ctx.enctype)}>`);
  _push(ssrRenderComponent(_component_t_content_card, { radius: _ctx.temporaryRadius }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col w-full space-y-4"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        if (_ctx.submitButton || _ctx.resetButton || _ctx.$slots.status || _ctx.$slots.button + "-area") {
          _push2(`<div class="${ssrRenderClass([[
            { "mr-2 py-2": _ctx.sectionLayout === "native" },
            { "border-t pt-2 mt-2 -mb-2": _ctx.sectionLayout === "smart" }
          ], "flex flex-wrap col-span-12 justify-center md:justify-end space-x-2"])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "button-area", {}, null, _push2, _parent2, _scopeId);
          if (_ctx.$slots.status) {
            ssrRenderSlot(_ctx.$slots, "status", {}, null, _push2, _parent2, _scopeId);
          } else {
            _push2(`<div class="flex flex-wrap w-full justify-center md:justify-end items-center space-x-2"${_scopeId}>`);
            if (_ctx.resetButton) {
              _push2(ssrRenderComponent(_component_t_button, {
                radius: _ctx.temporaryRadius,
                design: "filled",
                color: "yellow",
                type: "button",
                onClick: _ctx.reset
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.tm("reset"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.tm("reset")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.submitButton) {
              _push2(ssrRenderComponent(_component_t_button, {
                disabled: _ctx.disabled,
                radius: _ctx.temporaryRadius,
                design: "filled",
                color: "green",
                icon: "plus",
                type: "submit"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.tm("save"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.tm("save")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col w-full space-y-4" }, [
            renderSlot(_ctx.$slots, "default"),
            createVNode(Transition, {
              duration: "500",
              name: "status"
            }, {
              default: withCtx(() => [
                _ctx.submitButton || _ctx.resetButton || _ctx.$slots.status || _ctx.$slots.button + "-area" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ["flex flex-wrap col-span-12 justify-center md:justify-end space-x-2", [
                    { "mr-2 py-2": _ctx.sectionLayout === "native" },
                    { "border-t pt-2 mt-2 -mb-2": _ctx.sectionLayout === "smart" }
                  ]]
                }, [
                  renderSlot(_ctx.$slots, "button-area"),
                  _ctx.$slots.status ? renderSlot(_ctx.$slots, "status", { key: 0 }) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex flex-wrap w-full justify-center md:justify-end items-center space-x-2"
                  }, [
                    _ctx.resetButton ? (openBlock(), createBlock(_component_t_button, {
                      key: 0,
                      radius: _ctx.temporaryRadius,
                      design: "filled",
                      color: "yellow",
                      type: "button",
                      onClick: _ctx.reset
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.tm("reset")), 1)
                      ]),
                      _: 1
                    }, 8, ["radius", "onClick"])) : createCommentVNode("", true),
                    _ctx.submitButton ? (openBlock(), createBlock(_component_t_button, {
                      key: 1,
                      disabled: _ctx.disabled,
                      radius: _ctx.temporaryRadius,
                      design: "filled",
                      color: "green",
                      icon: "plus",
                      type: "submit"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.tm("save")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled", "radius"])) : createCommentVNode("", true)
                  ]))
                ], 2)) : createCommentVNode("", true)
              ]),
              _: 3
            })
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/TFormContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TFormContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TFormSection as T,
  TFormContent as a
};

import { A as AppLayout } from "./AppLayout-3kkfgqRQ.js";
import { a as TFormContent, T as TFormSection } from "./TFormContent-CNybaDNe.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { T as TPlusCircleIcon } from "./TPlusCircleIcon-jXAh_dKQ.js";
import { T as TTrashIcon } from "./TTrashIcon-B76N3D4s.js";
import { d as _sfc_main$2 } from "./windowSizeCalculator-BWfQvLaG.js";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./TDropdown-8S66trQc.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-BYbkHFXz.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "./TContentCard-DJ3stJrh.js";
const _sfc_main$1 = {
  props: ["placeHolderText", "value"],
  components: {
    TButton: _sfc_main$2,
    TTrashIcon,
    TPlusCircleIcon
  },
  data() {
    return {
      nullError: false
    };
  },
  methods: {
    reset() {
      this.valueName = null;
      this.nullError = false;
    },
    addItem(index) {
      if (this.value[index] === null || this.value[index] === "") {
        this.nullError = true;
      } else {
        this.value.push(null);
        this.reset();
      }
    },
    deleteItem(index) {
      this.value.splice(index, 1);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_trash_icon = resolveComponent("t-trash-icon");
  const _component_t_button = resolveComponent("t-button");
  const _component_t_plus_circle_icon = resolveComponent("t-plus-circle-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="justify-between items-center flex cursor-pointer text-gray-600"><div class="flex flex-col space-y-2 w-full"><!--[-->`);
  ssrRenderList($props.value, (item, index) => {
    _push(`<div class="flex flex-col w-full items-center"><div class="flex flex-row items-center w-full"><span class="${ssrRenderClass([$data.nullError && $props.value[index] === null && "text-red-500", "flex mr-2 font-semibold text-md text-gray-400"])}">${ssrInterpolate(index + 1)}.</span><label${ssrRenderAttr("for", $props.value)} class="flex w-full"><input${ssrRenderAttr("value", $props.value[index])} type="text" name="value" class="${ssrRenderClass([$data.nullError && $props.value.length === index + 1 && "border-red-500 placeholder-red-500", "flex w-full rounded border border-gray-300 p-2 text-gray-500"])}"${ssrRenderAttr("placeholder", $data.nullError && $props.value.length === index + 1 ? "Please fill this field" : $props.placeHolderText)}></label><span class="col-span-1">`);
    _push(ssrRenderComponent(_component_t_trash_icon, { class: "w-6 h-5 text-red-500 cursor-pointer" }, null, _parent));
    _push(`</span></div><div class="flex flex-col w-full pl-4 pr-6 mt-2">`);
    if (index === $props.value.length - 1) {
      _push(ssrRenderComponent(_component_t_button, {
        type: "button",
        color: "green",
        onClick: ($event) => $options.addItem(index),
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_t_plus_circle_icon, { class: "w-6 h-5 cursor-pointer mr-2" }, null, _parent2, _scopeId));
            _push2(` Add new item `);
          } else {
            return [
              createVNode(_component_t_plus_circle_icon, { class: "w-6 h-5 cursor-pointer mr-2" }),
              createTextVNode(" Add new item ")
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  });
  _push(`<!--]-->`);
  if ($props.value.length === 0) {
    _push(ssrRenderComponent(_component_t_button, {
      type: "button",
      design: "light",
      color: "green",
      onClick: $options.addItem
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_t_plus_circle_icon, { class: "w-6 h-5 cursor-pointer mr-2" }, null, _parent2, _scopeId));
          _push2(` No items found, add new item `);
        } else {
          return [
            createVNode(_component_t_plus_circle_icon, { class: "w-6 h-5 cursor-pointer mr-2" }),
            createTextVNode(" No items found, add new item ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Inputs/TInputInlineEditableRepeatable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TInputInlineEditableRepeatable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "InlineRepeatableField",
  components: {
    TInputInlineEditableRepeatable,
    TInputText,
    TInputGroup,
    TFormSection,
    TFormContent,
    AppLayout
  },
  data() {
    return {
      form: this.$inertia.form({
        _method: "POST",
        name: null,
        job_requirements: []
      })
    };
  },
  methods: {
    reset: function() {
      this.form.name = null;
      this.form.job_requirements = [];
    },
    save() {
      this.form.post(route("user.store"), {
        errorBag: "user",
        preserveScroll: true
      });
      this.loading = true;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_t_form_content = resolveComponent("t-form-content");
  const _component_t_form_section = resolveComponent("t-form-section");
  const _component_t_input_group = resolveComponent("t-input-group");
  const _component_t_input_text = resolveComponent("t-input-text");
  const _component_t_input_inline_editable_repeatable = resolveComponent("t-input-inline-editable-repeatable");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Inline Editable and Repeatable Input Type`);
      } else {
        return [
          createTextVNode("Inline Editable and Repeatable Input Type")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`One field but every things is in there`);
      } else {
        return [
          createTextVNode("One field but every things is in there")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_t_form_content, {
          onReset: $options.reset,
          onSubmitted: $options.save
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_form_section, {
                description: "This information is subject to personal data protection law.",
                title: "Personal Infos"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Name",
                      labelFor: "name"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "name",
                            modelValue: $data.form.name,
                            "onUpdate:modelValue": ($event) => $data.form.name = $event,
                            placeholder: "Business mail address"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "name",
                              modelValue: $data.form.name,
                              "onUpdate:modelValue": ($event) => $data.form.name = $event,
                              placeholder: "Business mail address"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Job Requirements",
                      labelFor: "job_requirements"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_inline_editable_repeatable, {
                            id: "job_requirements",
                            modelValue: $data.form.job_requirements,
                            "onUpdate:modelValue": ($event) => $data.form.job_requirements = $event,
                            "place-holder-text": "Requirement"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_inline_editable_repeatable, {
                              id: "job_requirements",
                              modelValue: $data.form.job_requirements,
                              "onUpdate:modelValue": ($event) => $data.form.job_requirements = $event,
                              "place-holder-text": "Requirement"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_input_group, {
                        class: "col-span-12",
                        label: "Name",
                        labelFor: "name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "name",
                            modelValue: $data.form.name,
                            "onUpdate:modelValue": ($event) => $data.form.name = $event,
                            placeholder: "Business mail address"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12",
                        label: "Job Requirements",
                        labelFor: "job_requirements"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_inline_editable_repeatable, {
                            id: "job_requirements",
                            modelValue: $data.form.job_requirements,
                            "onUpdate:modelValue": ($event) => $data.form.job_requirements = $event,
                            "place-holder-text": "Requirement"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_form_section, {
                  description: "This information is subject to personal data protection law.",
                  title: "Personal Infos"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Name",
                      labelFor: "name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "name",
                          modelValue: $data.form.name,
                          "onUpdate:modelValue": ($event) => $data.form.name = $event,
                          placeholder: "Business mail address"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Job Requirements",
                      labelFor: "job_requirements"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_inline_editable_repeatable, {
                          id: "job_requirements",
                          modelValue: $data.form.job_requirements,
                          "onUpdate:modelValue": ($event) => $data.form.job_requirements = $event,
                          "place-holder-text": "Requirement"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_t_form_content, {
            onReset: $options.reset,
            onSubmitted: $options.save
          }, {
            default: withCtx(() => [
              createVNode(_component_t_form_section, {
                description: "This information is subject to personal data protection law.",
                title: "Personal Infos"
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_input_group, {
                    class: "col-span-12",
                    label: "Name",
                    labelFor: "name"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "name",
                        modelValue: $data.form.name,
                        "onUpdate:modelValue": ($event) => $data.form.name = $event,
                        placeholder: "Business mail address"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12",
                    label: "Job Requirements",
                    labelFor: "job_requirements"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_inline_editable_repeatable, {
                        id: "job_requirements",
                        modelValue: $data.form.job_requirements,
                        "onUpdate:modelValue": ($event) => $data.form.job_requirements = $event,
                        "place-holder-text": "Requirement"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onReset", "onSubmitted"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/FormElements/InlineRepeatableField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InlineRepeatableField = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  InlineRepeatableField as default
};

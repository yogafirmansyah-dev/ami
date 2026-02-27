import { A as AppLayout } from "./AppLayout-CbW7EXnn.js";
import { useForm } from "@inertiajs/vue3";
import { a as TFormContent, T as TFormSection } from "./TFormContent-CWNM0Okg.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { toRefs, ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { onClickOutside } from "@vueuse/core";
import { r as radiusSizeMixin, d as _sfc_main$2 } from "./windowSizeCalculator-EVN4qZjG.js";
import { T as TPlusCircleIcon } from "./TPlusCircleIcon-jXAh_dKQ.js";
import { T as TTrashIcon } from "./TTrashIcon-B76N3D4s.js";
import { a as TChevronDownIcon } from "./TDropdown-BaNvbUUI.js";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-rvhW0AFR.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "./TContentCard-DzR3gMGe.js";
const _sfc_main$1 = {
  props: {
    value1name: {
      type: String,
      default: null
    },
    value2name: {
      type: String,
      default: null
    },
    modelValue: {
      type: [Object, Array],
      default: null
    }
  },
  components: {
    TChevronDownIcon,
    TButton: _sfc_main$2,
    TTrashIcon,
    TPlusCircleIcon
  },
  mixins: [radiusSizeMixin],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { value2name, modelValue } = toRefs(props);
    const value1 = ref();
    const value2 = ref();
    const showPanel = ref();
    const emptyMessage = ref();
    const target = ref();
    onClickOutside(target, () => showPanel.value = false);
    const reset = () => {
      value1.value = null;
      value2.value = null;
      emptyMessage.value = null;
    };
    const addItem = () => {
      if (value2name.value != null) {
        if (value1.value == null || value2.value == null) {
          emptyMessage.value = "Please fill in the fields";
          window.setTimeout(() => {
            emptyMessage.value = null;
          }, 3e3);
        } else {
          let newValue = [...modelValue.value];
          newValue.push({ value1: value1.value, value2: value2.value });
          emit("update:modelValue", newValue);
          reset();
        }
      } else {
        if (value1.value == null) {
          emptyMessage.value = "Please fill in the fields";
          window.setTimeout(() => {
            emptyMessage.value = null;
          }, 3e3);
        } else {
          let newValue = [...modelValue.value];
          newValue.push({ value1: value1.value });
          emit("update:modelValue", newValue);
          reset();
        }
      }
    };
    const deleteItem = (index) => {
      modelValue.value.splice(index, 1);
    };
    return {
      value1,
      value2,
      showPanel,
      emptyMessage,
      target,
      addItem,
      deleteItem,
      reset
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_chevron_down_icon = resolveComponent("t-chevron-down-icon");
  const _component_t_button = resolveComponent("t-button");
  const _component_t_plus_circle_icon = resolveComponent("t-plus-circle-icon");
  const _component_t_trash_icon = resolveComponent("t-trash-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "target",
    class: "relative select-none"
  }, _attrs))}><div class="${ssrRenderClass(["input border pl-2 h-10 items-center cursor-pointer hover:border-blue-500 relative", _ctx.radiusStyle])}">${ssrInterpolate($props.modelValue.length === 0 ? "No items found" : $props.modelValue.length + " items")} `);
  _push(ssrRenderComponent(_component_t_chevron_down_icon, {
    class: [
      "absolute right-2 w-5 h-5 transform duration-300",
      $setup.showPanel ? "rotate-90" : "rotate-0"
    ]
  }, null, _parent));
  _push(`</div>`);
  if ($setup.showPanel) {
    _push(`<div class="absolute flex flex-col w-full border border-gray-300 py-4 px-2 rounded-md mt-2 space-y-2 bg-gradient-to-t from-gray-200 to-gray-100 shadow-inner shadow z-10"><div class="flex flex-row items-center">`);
    if ($props.value1name) {
      _push(`<input${ssrRenderAttr("value", $setup.value1)} class="${ssrRenderClass([$props.value2name == null ? "rounded-md border" : "md:rounded-l md:rounded-r-none md:border-r-0", "flex w-full rounded border-gray-300 p-2"])}"${ssrRenderAttr("placeholder", $props.value1name)} name="value1" type="text">`);
    } else {
      _push(`<!---->`);
    }
    if ($props.value2name) {
      _push(`<input${ssrRenderAttr("value", $setup.value2)}${ssrRenderAttr("placeholder", $props.value2name)} class="flex w-full rounded md:rounded-r md:rounded-l-none border border-gray-300 p-2" name="value2" type="text">`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="flex items-center justify-center ml-1 h-10">`);
    _push(ssrRenderComponent(_component_t_button, {
      color: "green",
      type: "button",
      onClick: $setup.addItem
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_t_plus_circle_icon, { class: "w-6 h-6 md:w-5 md:h-5" }, null, _parent2, _scopeId));
          _push2(`<span class="hidden md:block pr-2"${_scopeId}>Add</span>`);
        } else {
          return [
            createVNode(_component_t_plus_circle_icon, { class: "w-6 h-6 md:w-5 md:h-5" }),
            createVNode("span", { class: "hidden md:block pr-2" }, "Add")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
    if ($setup.emptyMessage != null) {
      _push(`<div class="text-red-500 text-sm">${ssrInterpolate($setup.emptyMessage)}</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($props.modelValue.length > 0) {
      _push(`<div class="grid grid-cols-12 w-full border-b border-gray-300 items-center space-x-2 px-2 py-1 font-bold"><span class="col-span-1"></span><span class="col-span-5">${ssrInterpolate($props.value1name)}</span><span class="col-span-5">${ssrInterpolate($props.value2name)}</span><span class="col-span-1"></span></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--[-->`);
    ssrRenderList($props.modelValue, (item, index) => {
      _push(`<div class="grid grid-cols-12 bg-gray-50 border rounded-md items-center space-x-2 px-2 py-1"><span class="col-span-1">${ssrInterpolate(index + 1)}.</span><span class="col-span-5">${ssrInterpolate(item.value1)}</span><span class="col-span-5">${ssrInterpolate(item.value2)}</span><span class="col-span-1">`);
      _push(ssrRenderComponent(_component_t_trash_icon, { class: "w-6 h-5 text-red-500 cursor-pointer" }, null, _parent));
      _push(`</span></div>`);
    });
    _push(`<!--]-->`);
    _push(ssrRenderComponent(_component_t_button, {
      color: "white",
      size: "sm",
      type: "button",
      onClick: ($event) => $setup.showPanel = false
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Close `);
        } else {
          return [
            createTextVNode(" Close ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Inputs/TInputRepeatable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TInputRepeatable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "RepeatableField",
  components: { TInputRepeatable, TInputText, TInputGroup, TFormSection, TFormContent, AppLayout },
  setup() {
    const form = useForm({
      name: null,
      education: [],
      hobbies: []
    });
    const reset = () => {
      form.reset();
    };
    return {
      form,
      reset
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_t_form_content = resolveComponent("t-form-content");
  const _component_t_form_section = resolveComponent("t-form-section");
  const _component_t_input_group = resolveComponent("t-input-group");
  const _component_t_input_text = resolveComponent("t-input-text");
  const _component_t_input_repeatable = resolveComponent("t-input-repeatable");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Repeatable Input Type`);
      } else {
        return [
          createTextVNode("Repeatable Input Type")
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
          onReset: $setup.reset,
          onSubmitted: ($event) => null
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
                            modelValue: $setup.form.name,
                            "onUpdate:modelValue": ($event) => $setup.form.name = $event,
                            placeholder: "Business mail address"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "name",
                              modelValue: $setup.form.name,
                              "onUpdate:modelValue": ($event) => $setup.form.name = $event,
                              placeholder: "Business mail address"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Hobbies (1 field)",
                      labelFor: "tax_id"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_repeatable, {
                            id: "hobbies",
                            modelValue: $setup.form.hobbies,
                            "onUpdate:modelValue": ($event) => $setup.form.hobbies = $event,
                            value1name: "Hobby"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_repeatable, {
                              id: "hobbies",
                              modelValue: $setup.form.hobbies,
                              "onUpdate:modelValue": ($event) => $setup.form.hobbies = $event,
                              value1name: "Hobby"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Education Info (2 fields)",
                      labelFor: "tax_id"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_repeatable, {
                            id: "education",
                            modelValue: $setup.form.education,
                            "onUpdate:modelValue": ($event) => $setup.form.education = $event,
                            value1name: "School",
                            value2name: "Degree"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_repeatable, {
                              id: "education",
                              modelValue: $setup.form.education,
                              "onUpdate:modelValue": ($event) => $setup.form.education = $event,
                              value1name: "School",
                              value2name: "Degree"
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
                            modelValue: $setup.form.name,
                            "onUpdate:modelValue": ($event) => $setup.form.name = $event,
                            placeholder: "Business mail address"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12",
                        label: "Hobbies (1 field)",
                        labelFor: "tax_id"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_repeatable, {
                            id: "hobbies",
                            modelValue: $setup.form.hobbies,
                            "onUpdate:modelValue": ($event) => $setup.form.hobbies = $event,
                            value1name: "Hobby"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12",
                        label: "Education Info (2 fields)",
                        labelFor: "tax_id"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_repeatable, {
                            id: "education",
                            modelValue: $setup.form.education,
                            "onUpdate:modelValue": ($event) => $setup.form.education = $event,
                            value1name: "School",
                            value2name: "Degree"
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
                          modelValue: $setup.form.name,
                          "onUpdate:modelValue": ($event) => $setup.form.name = $event,
                          placeholder: "Business mail address"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Hobbies (1 field)",
                      labelFor: "tax_id"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_repeatable, {
                          id: "hobbies",
                          modelValue: $setup.form.hobbies,
                          "onUpdate:modelValue": ($event) => $setup.form.hobbies = $event,
                          value1name: "Hobby"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Education Info (2 fields)",
                      labelFor: "tax_id"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_repeatable, {
                          id: "education",
                          modelValue: $setup.form.education,
                          "onUpdate:modelValue": ($event) => $setup.form.education = $event,
                          value1name: "School",
                          value2name: "Degree"
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
            onReset: $setup.reset,
            onSubmitted: ($event) => null
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
                        modelValue: $setup.form.name,
                        "onUpdate:modelValue": ($event) => $setup.form.name = $event,
                        placeholder: "Business mail address"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12",
                    label: "Hobbies (1 field)",
                    labelFor: "tax_id"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_repeatable, {
                        id: "hobbies",
                        modelValue: $setup.form.hobbies,
                        "onUpdate:modelValue": ($event) => $setup.form.hobbies = $event,
                        value1name: "Hobby"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12",
                    label: "Education Info (2 fields)",
                    labelFor: "tax_id"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_repeatable, {
                        id: "education",
                        modelValue: $setup.form.education,
                        "onUpdate:modelValue": ($event) => $setup.form.education = $event,
                        value1name: "School",
                        value2name: "Degree"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onReset"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/FormElements/RepeatableField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RepeatableField = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  RepeatableField as default
};

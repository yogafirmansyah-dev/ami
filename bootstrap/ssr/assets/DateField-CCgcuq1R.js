import { A as AppLayout } from "./AppLayout-D0TyJNRu.js";
import { a as TFormContent, T as TFormSection } from "./TFormContent-CmcaSy-p.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { defineComponent, toRefs, ref, inject, watch, resolveComponent, mergeProps, withCtx, toHandlers, createVNode, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { DatePicker } from "v-calendar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock, faCalendar, faCalendarMinus, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./TButton-oXLR37ud.js";
import "./windowSizeCalculator-4-m3qk2a.js";
import "./TDropdown-8pNOPgDY.js";
import "./TChevronDownIcon-fGhz3Hz_.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-Cw8URzx6.js";
import "./darkMode-BsM-iRm5.js";
import "./TContentCard-BkuMOsLs.js";
library.add(faClock, faCalendar, faCalendarMinus, faTimesCircle);
const _sfc_main$1 = defineComponent({
  props: {
    modelValue: {
      type: [String, Array, Object],
      default: null
    },
    mode: {
      type: String,
      default: "date"
    },
    masks: {
      type: String,
      default: "DD-MM-YYYY"
    },
    is24hr: {
      type: Boolean,
      default: false
    },
    isRange: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Number,
      default: null
    },
    clearButton: {
      type: Boolean,
      default: true
    }
  },
  components: {
    TInputText,
    DatePicker
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { modelValue, radius } = toRefs(props);
    const date = ref(modelValue.value ? modelValue.value : /* @__PURE__ */ new Date());
    const inertnalDate = ref(null);
    const appConf = inject("appConf");
    const temporaryRadius = ref(radius.value ? radius.value : appConf.value.radius);
    watch(modelValue, () => {
      date.value = modelValue.value;
    });
    watch(date, () => {
      emit("update:modelValue", date.value);
    });
    return {
      temporaryRadius,
      inertnalDate,
      date
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_date_picker = resolveComponent("date-picker");
  const _component_t_input_text = resolveComponent("t-input-text");
  const _component_icon = resolveComponent("icon");
  _push(ssrRenderComponent(_component_date_picker, mergeProps({
    modelValue: _ctx.date,
    "onUpdate:modelValue": ($event) => _ctx.date = $event,
    is24hr: _ctx.is24hr,
    isRange: _ctx.isRange,
    masks: { type: "string", mask: _ctx.masks },
    mode: _ctx.mode
  }, _attrs), {
    default: withCtx(({ inputValue, inputEvents, togglePopover }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="relative flex items-center" data-v-219f3ebb${_scopeId}>`);
        if (!_ctx.isRange) {
          _push2(ssrRenderComponent(_component_t_input_text, mergeProps({ modelValue: inputValue }, toHandlers(inputEvents), {
            placeholder: _ctx.masks,
            onClick: ($event) => togglePopover(),
            radius: _ctx.temporaryRadius
          }), {
            append: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="flex px-1 overflow-hidden" data-v-219f3ebb${_scopeId2}>`);
                if (!_ctx.isRange && _ctx.date && _ctx.clearButton) {
                  _push3(ssrRenderComponent(_component_icon, {
                    icon: "times-circle",
                    class: "cursor-pointer hover:text-red-500 mr-2",
                    onClick: ($event) => _ctx.date = null
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                if (_ctx.mode) {
                  _push3(ssrRenderComponent(_component_icon, {
                    icon: _ctx.mode.toLowerCase().includes("time") && !_ctx.mode.toLowerCase().includes("date") ? "clock" : _ctx.mode.toLowerCase().includes("date") && !_ctx.mode.toLowerCase().includes("time") ? "calendar" : "calendar-minus",
                    onClick: ($event) => togglePopover()
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "flex px-1 overflow-hidden" }, [
                    !_ctx.isRange && _ctx.date && _ctx.clearButton ? (openBlock(), createBlock(_component_icon, {
                      key: 0,
                      icon: "times-circle",
                      class: "cursor-pointer hover:text-red-500 mr-2",
                      onClick: ($event) => _ctx.date = null
                    }, null, 8, ["onClick"])) : createCommentVNode("", true),
                    _ctx.mode ? (openBlock(), createBlock(_component_icon, {
                      key: 1,
                      icon: _ctx.mode.toLowerCase().includes("time") && !_ctx.mode.toLowerCase().includes("date") ? "clock" : _ctx.mode.toLowerCase().includes("date") && !_ctx.mode.toLowerCase().includes("time") ? "calendar" : "calendar-minus",
                      onClick: ($event) => togglePopover()
                    }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.isRange) {
          _push2(`<div class="${ssrRenderClass([`radius-${_ctx.temporaryRadius}`, "input flex-wrap sm:justify-between items-center pl-2 cursor-pointer w-full overflow-hidden"])}" data-v-219f3ebb${_scopeId}>`);
          if (_ctx.date) {
            _push2(`<div data-v-219f3ebb${_scopeId}><span class="text-center mr-1 py-1 whitespace-nowrap" data-v-219f3ebb${_scopeId}><b data-v-219f3ebb${_scopeId}>Start:</b></span> ${ssrInterpolate(inputValue.start)}</div>`);
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.date) {
            _push2(`<div data-v-219f3ebb${_scopeId}><span class="text-center mr-3 py-1 whitespace-nowrap" data-v-219f3ebb${_scopeId}><b data-v-219f3ebb${_scopeId}>End:</b></span> ${ssrInterpolate(inputValue.end)}</div>`);
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.isRange && !_ctx.date) {
            _push2(`<div data-v-219f3ebb${_scopeId}>Please click for select</div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="flex min-w-[2.5rem] justify-center text-input-append" data-v-219f3ebb${_scopeId}>`);
          if (_ctx.isRange && _ctx.date) {
            _push2(ssrRenderComponent(_component_icon, {
              icon: "times-circle",
              class: "cursor-pointer hover:text-red-500 mr-2",
              onClick: ($event) => _ctx.date = null
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.mode) {
            _push2(ssrRenderComponent(_component_icon, {
              icon: _ctx.mode.toLowerCase().includes("time") && !_ctx.mode.toLowerCase().includes("date") ? "clock" : _ctx.mode.toLowerCase().includes("date") && !_ctx.mode.toLowerCase().includes("time") ? "calendar" : "calendar-minus",
              onClick: ($event) => togglePopover()
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "relative flex items-center" }, [
            !_ctx.isRange ? (openBlock(), createBlock(_component_t_input_text, mergeProps({
              key: 0,
              modelValue: inputValue
            }, toHandlers(inputEvents), {
              placeholder: _ctx.masks,
              onClick: ($event) => togglePopover(),
              radius: _ctx.temporaryRadius
            }), {
              append: withCtx(() => [
                createVNode("div", { class: "flex px-1 overflow-hidden" }, [
                  !_ctx.isRange && _ctx.date && _ctx.clearButton ? (openBlock(), createBlock(_component_icon, {
                    key: 0,
                    icon: "times-circle",
                    class: "cursor-pointer hover:text-red-500 mr-2",
                    onClick: ($event) => _ctx.date = null
                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                  _ctx.mode ? (openBlock(), createBlock(_component_icon, {
                    key: 1,
                    icon: _ctx.mode.toLowerCase().includes("time") && !_ctx.mode.toLowerCase().includes("date") ? "clock" : _ctx.mode.toLowerCase().includes("date") && !_ctx.mode.toLowerCase().includes("time") ? "calendar" : "calendar-minus",
                    onClick: ($event) => togglePopover()
                  }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
                ])
              ]),
              _: 2
            }, 1040, ["modelValue", "placeholder", "onClick", "radius"])) : createCommentVNode("", true),
            _ctx.isRange ? (openBlock(), createBlock("div", {
              key: 1,
              class: ["input flex-wrap sm:justify-between items-center pl-2 cursor-pointer w-full overflow-hidden", `radius-${_ctx.temporaryRadius}`],
              onClick: ($event) => togglePopover()
            }, [
              _ctx.date ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("span", { class: "text-center mr-1 py-1 whitespace-nowrap" }, [
                  createVNode("b", null, "Start:")
                ]),
                createTextVNode(" " + toDisplayString(inputValue.start), 1)
              ])) : createCommentVNode("", true),
              _ctx.date ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("span", { class: "text-center mr-3 py-1 whitespace-nowrap" }, [
                  createVNode("b", null, "End:")
                ]),
                createTextVNode(" " + toDisplayString(inputValue.end), 1)
              ])) : createCommentVNode("", true),
              _ctx.isRange && !_ctx.date ? (openBlock(), createBlock("div", { key: 2 }, "Please click for select")) : createCommentVNode("", true),
              createVNode("div", { class: "flex min-w-[2.5rem] justify-center text-input-append" }, [
                _ctx.isRange && _ctx.date ? (openBlock(), createBlock(_component_icon, {
                  key: 0,
                  icon: "times-circle",
                  class: "cursor-pointer hover:text-red-500 mr-2",
                  onClick: ($event) => _ctx.date = null
                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                _ctx.mode ? (openBlock(), createBlock(_component_icon, {
                  key: 1,
                  icon: _ctx.mode.toLowerCase().includes("time") && !_ctx.mode.toLowerCase().includes("date") ? "clock" : _ctx.mode.toLowerCase().includes("date") && !_ctx.mode.toLowerCase().includes("time") ? "calendar" : "calendar-minus",
                  onClick: ($event) => togglePopover()
                }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
              ])
            ], 10, ["onClick"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Inputs/TInputDate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TInputDate = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-219f3ebb"]]);
const _sfc_main = {
  name: "DateField",
  components: { TInputDate, TInputText, TInputGroup, TFormSection, TFormContent, AppLayout },
  data() {
    return {
      form: this.$inertia.form({
        _method: "POST",
        name: null,
        birth_date: null,
        flying_time: null,
        meeting_time: null,
        meeting_duration: null
      })
    };
  },
  methods: {
    reset: function() {
      this.form.name = null;
      this.form.birth_date = null;
      this.form.flying_time = null;
      this.form.meeting_time = null;
      this.form.meeting_duration = null;
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
  const _component_t_input_date = resolveComponent("t-input-date");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Date Input Field`);
      } else {
        return [
          createTextVNode("Date Input Field")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Starting, birth, fired, register date or time`);
      } else {
        return [
          createTextVNode("Starting, birth, fired, register date or time")
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
                      label: "Birthday (Only Date)",
                      labelFor: "tax_id"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_date, {
                            modelValue: $data.form.birth_date,
                            "onUpdate:modelValue": ($event) => $data.form.birth_date = $event
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_date, {
                              modelValue: $data.form.birth_date,
                              "onUpdate:modelValue": ($event) => $data.form.birth_date = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Flying Date-Time",
                      labelFor: "flying_time"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_date, {
                            modelValue: $data.form.flying_time,
                            "onUpdate:modelValue": ($event) => $data.form.flying_time = $event,
                            mode: "dateTime"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_date, {
                              modelValue: $data.form.flying_time,
                              "onUpdate:modelValue": ($event) => $data.form.flying_time = $event,
                              mode: "dateTime"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Meeting Time (Hour:Minute A)",
                      labelFor: "meeting_time"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_date, {
                            modelValue: $data.form.meeting_time,
                            "onUpdate:modelValue": ($event) => $data.form.meeting_time = $event,
                            mode: "time"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_date, {
                              modelValue: $data.form.meeting_time,
                              "onUpdate:modelValue": ($event) => $data.form.meeting_time = $event,
                              mode: "time"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Meeting Time (Hour:Minute 24Hr)",
                      labelFor: "meeting_time"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_date, {
                            modelValue: $data.form.meeting_time,
                            "onUpdate:modelValue": ($event) => $data.form.meeting_time = $event,
                            is24hr: true,
                            mode: "time"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_date, {
                              modelValue: $data.form.meeting_time,
                              "onUpdate:modelValue": ($event) => $data.form.meeting_time = $event,
                              is24hr: true,
                              mode: "time"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Meeting Duration (Date Range)",
                      labelFor: "meeting_time"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_date, {
                            modelValue: $data.form.meeting_duration,
                            "onUpdate:modelValue": ($event) => $data.form.meeting_duration = $event,
                            "is-range": true
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_date, {
                              modelValue: $data.form.meeting_duration,
                              "onUpdate:modelValue": ($event) => $data.form.meeting_duration = $event,
                              "is-range": true
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
                        label: "Birthday (Only Date)",
                        labelFor: "tax_id"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_date, {
                            modelValue: $data.form.birth_date,
                            "onUpdate:modelValue": ($event) => $data.form.birth_date = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12",
                        label: "Flying Date-Time",
                        labelFor: "flying_time"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_date, {
                            modelValue: $data.form.flying_time,
                            "onUpdate:modelValue": ($event) => $data.form.flying_time = $event,
                            mode: "dateTime"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12",
                        label: "Meeting Time (Hour:Minute A)",
                        labelFor: "meeting_time"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_date, {
                            modelValue: $data.form.meeting_time,
                            "onUpdate:modelValue": ($event) => $data.form.meeting_time = $event,
                            mode: "time"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12",
                        label: "Meeting Time (Hour:Minute 24Hr)",
                        labelFor: "meeting_time"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_date, {
                            modelValue: $data.form.meeting_time,
                            "onUpdate:modelValue": ($event) => $data.form.meeting_time = $event,
                            is24hr: true,
                            mode: "time"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12",
                        label: "Meeting Duration (Date Range)",
                        labelFor: "meeting_time"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_date, {
                            modelValue: $data.form.meeting_duration,
                            "onUpdate:modelValue": ($event) => $data.form.meeting_duration = $event,
                            "is-range": true
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
                      label: "Birthday (Only Date)",
                      labelFor: "tax_id"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_date, {
                          modelValue: $data.form.birth_date,
                          "onUpdate:modelValue": ($event) => $data.form.birth_date = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Flying Date-Time",
                      labelFor: "flying_time"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_date, {
                          modelValue: $data.form.flying_time,
                          "onUpdate:modelValue": ($event) => $data.form.flying_time = $event,
                          mode: "dateTime"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Meeting Time (Hour:Minute A)",
                      labelFor: "meeting_time"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_date, {
                          modelValue: $data.form.meeting_time,
                          "onUpdate:modelValue": ($event) => $data.form.meeting_time = $event,
                          mode: "time"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Meeting Time (Hour:Minute 24Hr)",
                      labelFor: "meeting_time"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_date, {
                          modelValue: $data.form.meeting_time,
                          "onUpdate:modelValue": ($event) => $data.form.meeting_time = $event,
                          is24hr: true,
                          mode: "time"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Meeting Duration (Date Range)",
                      labelFor: "meeting_time"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_date, {
                          modelValue: $data.form.meeting_duration,
                          "onUpdate:modelValue": ($event) => $data.form.meeting_duration = $event,
                          "is-range": true
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
                    label: "Birthday (Only Date)",
                    labelFor: "tax_id"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_date, {
                        modelValue: $data.form.birth_date,
                        "onUpdate:modelValue": ($event) => $data.form.birth_date = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12",
                    label: "Flying Date-Time",
                    labelFor: "flying_time"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_date, {
                        modelValue: $data.form.flying_time,
                        "onUpdate:modelValue": ($event) => $data.form.flying_time = $event,
                        mode: "dateTime"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12",
                    label: "Meeting Time (Hour:Minute A)",
                    labelFor: "meeting_time"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_date, {
                        modelValue: $data.form.meeting_time,
                        "onUpdate:modelValue": ($event) => $data.form.meeting_time = $event,
                        mode: "time"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12",
                    label: "Meeting Time (Hour:Minute 24Hr)",
                    labelFor: "meeting_time"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_date, {
                        modelValue: $data.form.meeting_time,
                        "onUpdate:modelValue": ($event) => $data.form.meeting_time = $event,
                        is24hr: true,
                        mode: "time"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12",
                    label: "Meeting Duration (Date Range)",
                    labelFor: "meeting_time"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_date, {
                        modelValue: $data.form.meeting_duration,
                        "onUpdate:modelValue": ($event) => $data.form.meeting_duration = $event,
                        "is-range": true
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/FormElements/DateField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DateField = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  DateField as default
};

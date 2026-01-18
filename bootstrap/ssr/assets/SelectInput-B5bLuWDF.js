import { A as AppLayout, c as TXCircleIcon } from "./AppLayout-3kkfgqRQ.js";
import { d as _sfc_main$1 } from "./windowSizeCalculator-BWfQvLaG.js";
import { a as TFormContent, T as TFormSection } from "./TFormContent-CNybaDNe.js";
/* empty css                */
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputSelect } from "./TInputSelect-BY60CBa7.js";
import { T as TCheckCircleIcon } from "./TCheckCircleIcon-CASuI5wJ.js";
import { resolveComponent, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
import "./TInputText-CyR_XUuU.js";
const _sfc_main = {
  name: "SelectInput",
  components: {
    TXCircleIcon,
    TCheckCircleIcon,
    TInputSelect,
    AppLayout,
    TButton: _sfc_main$1,
    TFormSection,
    TFormContent,
    TInputGroup
  },
  props: ["users"],
  data() {
    return {
      loading: false,
      form: this.$inertia.form({
        _method: "POST",
        user_id: null,
        status: false
      }),
      status: [
        { name: "Passive", value: false, icon: "XIcon", class: "w-5 h-5 text-red-500 mr-2" },
        { name: "Active", value: true, icon: "Checked", class: "w-5 h-5 text-green-500 mr-2" }
      ]
    };
  },
  methods: {
    reset: function() {
      this.form.name = null;
      this.form.user_id = null;
      this.form.tax_id = null;
      this.form.email = null;
      this.form.phone = null;
      this.form.status = null;
      this.form.address = null;
    },
    save() {
      this.form.post(route("customer.store"), {
        errorBag: "customer",
        preserveScroll: true
      });
      this.loading = true;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_t_button = resolveComponent("t-button");
  const _component_icon = resolveComponent("icon");
  const _component_t_form_content = resolveComponent("t-form-content");
  const _component_t_form_section = resolveComponent("t-form-section");
  const _component_t_input_group = resolveComponent("t-input-group");
  const _component_t_input_select = resolveComponent("t-input-select");
  const _component_t_check_circle_icon = resolveComponent("t-check-circle-icon");
  const _component_t_x_circle_icon = resolveComponent("t-x-circle-icon");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ actionButtons: true }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Select Input Component `);
      } else {
        return [
          createTextVNode(" Select Input Component ")
        ];
      }
    }),
    "action-buttons": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_t_button, {
          radius: 3,
          color: "yellow"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_icon, { icon: "angle-left" }, null, _parent3, _scopeId2));
              _push3(` Back to Home `);
            } else {
              return [
                createVNode(_component_icon, { icon: "angle-left" }),
                createTextVNode(" Back to Home ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_t_button, {
          radius: 3,
          color: "green"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_icon, { icon: "plus-circle" }, null, _parent3, _scopeId2));
              _push3(` Add New `);
            } else {
              return [
                createVNode(_component_icon, { icon: "plus-circle" }),
                createTextVNode(" Add New ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_t_button, {
            radius: 3,
            color: "yellow"
          }, {
            default: withCtx(() => [
              createVNode(_component_icon, { icon: "angle-left" }),
              createTextVNode(" Back to Home ")
            ]),
            _: 1
          }),
          createVNode(_component_t_button, {
            radius: 3,
            color: "green"
          }, {
            default: withCtx(() => [
              createVNode(_component_icon, { icon: "plus-circle" }),
              createTextVNode(" Add New ")
            ]),
            _: 1
          })
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
                      class: "col-span-12 md:col-span-6",
                      label: "Manager - Searchable",
                      labelFor: "user_id"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_select, {
                            modelValue: $data.form.user_id,
                            "onUpdate:modelValue": ($event) => $data.form.user_id = $event,
                            "clear-button": true,
                            options: $props.users,
                            search: true,
                            optionsLabelKey: "name",
                            optionsValueKey: "id",
                            "place-holder": "Select a manager",
                            "search-place-holder": "Search a manager..."
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_select, {
                              modelValue: $data.form.user_id,
                              "onUpdate:modelValue": ($event) => $data.form.user_id = $event,
                              "clear-button": true,
                              options: $props.users,
                              search: true,
                              optionsLabelKey: "name",
                              optionsValueKey: "id",
                              "place-holder": "Select a manager",
                              "search-place-holder": "Search a manager..."
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 md:col-span-6",
                      label: "Rich Options Content",
                      labelFor: "status"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_select, {
                            modelValue: $data.form.status,
                            "onUpdate:modelValue": ($event) => $data.form.status = $event,
                            "clear-button": true,
                            options: $data.status,
                            optionsLabelKey: "name",
                            optionsValueKey: "value",
                            "place-holder": "Select a status"
                          }, {
                            label: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                if (props.value === true) {
                                  _push6(`<span class="flex flex-row items-center gap-1"${_scopeId5}>`);
                                  _push6(ssrRenderComponent(_component_t_check_circle_icon, { class: "w-5 h-5 text-green-500" }, null, _parent6, _scopeId5));
                                  _push6(` ${ssrInterpolate(props.name)}</span>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                                if (props.value === false) {
                                  _push6(`<span class="flex flex-row items-center gap-1"${_scopeId5}>`);
                                  _push6(ssrRenderComponent(_component_t_x_circle_icon, { class: "w-5 h-5 text-red-500 items-center" }, null, _parent6, _scopeId5));
                                  _push6(` ${ssrInterpolate(props.name)}</span>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                              } else {
                                return [
                                  props.value === true ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "flex flex-row items-center gap-1"
                                  }, [
                                    createVNode(_component_t_check_circle_icon, { class: "w-5 h-5 text-green-500" }),
                                    createTextVNode(" " + toDisplayString(props.name), 1)
                                  ])) : createCommentVNode("", true),
                                  props.value === false ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "flex flex-row items-center gap-1"
                                  }, [
                                    createVNode(_component_t_x_circle_icon, { class: "w-5 h-5 text-red-500 items-center" }),
                                    createTextVNode(" " + toDisplayString(props.name), 1)
                                  ])) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_select, {
                              modelValue: $data.form.status,
                              "onUpdate:modelValue": ($event) => $data.form.status = $event,
                              "clear-button": true,
                              options: $data.status,
                              optionsLabelKey: "name",
                              optionsValueKey: "value",
                              "place-holder": "Select a status"
                            }, {
                              label: withCtx(({ props }) => [
                                props.value === true ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "flex flex-row items-center gap-1"
                                }, [
                                  createVNode(_component_t_check_circle_icon, { class: "w-5 h-5 text-green-500" }),
                                  createTextVNode(" " + toDisplayString(props.name), 1)
                                ])) : createCommentVNode("", true),
                                props.value === false ? (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "flex flex-row items-center gap-1"
                                }, [
                                  createVNode(_component_t_x_circle_icon, { class: "w-5 h-5 text-red-500 items-center" }),
                                  createTextVNode(" " + toDisplayString(props.name), 1)
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      label: "Disabled",
                      class: "col-span-12 md:col-span-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_select, { disabled: "" }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_select, { disabled: "" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      label: "Read Only",
                      class: "col-span-12 md:col-span-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_select, {
                            "model-value": true,
                            options: $data.status,
                            "options-value-key": "value",
                            "options-label-key": "name",
                            "read-only": ""
                          }, {
                            label: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                if (props.value === true) {
                                  _push6(`<span class="flex flex-row items-center gap-1"${_scopeId5}>`);
                                  _push6(ssrRenderComponent(_component_t_check_circle_icon, { class: "w-5 h-5 text-green-500" }, null, _parent6, _scopeId5));
                                  _push6(` ${ssrInterpolate(props.name)}</span>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                                if (props.value === false) {
                                  _push6(`<span class="flex flex-row items-center gap-1"${_scopeId5}>`);
                                  _push6(ssrRenderComponent(_component_t_x_circle_icon, { class: "w-5 h-5 text-red-500 items-center" }, null, _parent6, _scopeId5));
                                  _push6(` ${ssrInterpolate(props.name)}</span>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                              } else {
                                return [
                                  props.value === true ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "flex flex-row items-center gap-1"
                                  }, [
                                    createVNode(_component_t_check_circle_icon, { class: "w-5 h-5 text-green-500" }),
                                    createTextVNode(" " + toDisplayString(props.name), 1)
                                  ])) : createCommentVNode("", true),
                                  props.value === false ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "flex flex-row items-center gap-1"
                                  }, [
                                    createVNode(_component_t_x_circle_icon, { class: "w-5 h-5 text-red-500 items-center" }),
                                    createTextVNode(" " + toDisplayString(props.name), 1)
                                  ])) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_select, {
                              "model-value": true,
                              options: $data.status,
                              "options-value-key": "value",
                              "options-label-key": "name",
                              "read-only": ""
                            }, {
                              label: withCtx(({ props }) => [
                                props.value === true ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "flex flex-row items-center gap-1"
                                }, [
                                  createVNode(_component_t_check_circle_icon, { class: "w-5 h-5 text-green-500" }),
                                  createTextVNode(" " + toDisplayString(props.name), 1)
                                ])) : createCommentVNode("", true),
                                props.value === false ? (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "flex flex-row items-center gap-1"
                                }, [
                                  createVNode(_component_t_x_circle_icon, { class: "w-5 h-5 text-red-500 items-center" }),
                                  createTextVNode(" " + toDisplayString(props.name), 1)
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }, 8, ["options"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 md:col-span-6",
                        label: "Manager - Searchable",
                        labelFor: "user_id"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_select, {
                            modelValue: $data.form.user_id,
                            "onUpdate:modelValue": ($event) => $data.form.user_id = $event,
                            "clear-button": true,
                            options: $props.users,
                            search: true,
                            optionsLabelKey: "name",
                            optionsValueKey: "id",
                            "place-holder": "Select a manager",
                            "search-place-holder": "Search a manager..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 md:col-span-6",
                        label: "Rich Options Content",
                        labelFor: "status"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_select, {
                            modelValue: $data.form.status,
                            "onUpdate:modelValue": ($event) => $data.form.status = $event,
                            "clear-button": true,
                            options: $data.status,
                            optionsLabelKey: "name",
                            optionsValueKey: "value",
                            "place-holder": "Select a status"
                          }, {
                            label: withCtx(({ props }) => [
                              props.value === true ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "flex flex-row items-center gap-1"
                              }, [
                                createVNode(_component_t_check_circle_icon, { class: "w-5 h-5 text-green-500" }),
                                createTextVNode(" " + toDisplayString(props.name), 1)
                              ])) : createCommentVNode("", true),
                              props.value === false ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "flex flex-row items-center gap-1"
                              }, [
                                createVNode(_component_t_x_circle_icon, { class: "w-5 h-5 text-red-500 items-center" }),
                                createTextVNode(" " + toDisplayString(props.name), 1)
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        label: "Disabled",
                        class: "col-span-12 md:col-span-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_select, { disabled: "" })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        label: "Read Only",
                        class: "col-span-12 md:col-span-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_select, {
                            "model-value": true,
                            options: $data.status,
                            "options-value-key": "value",
                            "options-label-key": "name",
                            "read-only": ""
                          }, {
                            label: withCtx(({ props }) => [
                              props.value === true ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "flex flex-row items-center gap-1"
                              }, [
                                createVNode(_component_t_check_circle_icon, { class: "w-5 h-5 text-green-500" }),
                                createTextVNode(" " + toDisplayString(props.name), 1)
                              ])) : createCommentVNode("", true),
                              props.value === false ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "flex flex-row items-center gap-1"
                              }, [
                                createVNode(_component_t_x_circle_icon, { class: "w-5 h-5 text-red-500 items-center" }),
                                createTextVNode(" " + toDisplayString(props.name), 1)
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["options"])
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
                      class: "col-span-12 md:col-span-6",
                      label: "Manager - Searchable",
                      labelFor: "user_id"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_select, {
                          modelValue: $data.form.user_id,
                          "onUpdate:modelValue": ($event) => $data.form.user_id = $event,
                          "clear-button": true,
                          options: $props.users,
                          search: true,
                          optionsLabelKey: "name",
                          optionsValueKey: "id",
                          "place-holder": "Select a manager",
                          "search-place-holder": "Search a manager..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 md:col-span-6",
                      label: "Rich Options Content",
                      labelFor: "status"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_select, {
                          modelValue: $data.form.status,
                          "onUpdate:modelValue": ($event) => $data.form.status = $event,
                          "clear-button": true,
                          options: $data.status,
                          optionsLabelKey: "name",
                          optionsValueKey: "value",
                          "place-holder": "Select a status"
                        }, {
                          label: withCtx(({ props }) => [
                            props.value === true ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "flex flex-row items-center gap-1"
                            }, [
                              createVNode(_component_t_check_circle_icon, { class: "w-5 h-5 text-green-500" }),
                              createTextVNode(" " + toDisplayString(props.name), 1)
                            ])) : createCommentVNode("", true),
                            props.value === false ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "flex flex-row items-center gap-1"
                            }, [
                              createVNode(_component_t_x_circle_icon, { class: "w-5 h-5 text-red-500 items-center" }),
                              createTextVNode(" " + toDisplayString(props.name), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      label: "Disabled",
                      class: "col-span-12 md:col-span-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_select, { disabled: "" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      label: "Read Only",
                      class: "col-span-12 md:col-span-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_select, {
                          "model-value": true,
                          options: $data.status,
                          "options-value-key": "value",
                          "options-label-key": "name",
                          "read-only": ""
                        }, {
                          label: withCtx(({ props }) => [
                            props.value === true ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "flex flex-row items-center gap-1"
                            }, [
                              createVNode(_component_t_check_circle_icon, { class: "w-5 h-5 text-green-500" }),
                              createTextVNode(" " + toDisplayString(props.name), 1)
                            ])) : createCommentVNode("", true),
                            props.value === false ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "flex flex-row items-center gap-1"
                            }, [
                              createVNode(_component_t_x_circle_icon, { class: "w-5 h-5 text-red-500 items-center" }),
                              createTextVNode(" " + toDisplayString(props.name), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["options"])
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
                    class: "col-span-12 md:col-span-6",
                    label: "Manager - Searchable",
                    labelFor: "user_id"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_select, {
                        modelValue: $data.form.user_id,
                        "onUpdate:modelValue": ($event) => $data.form.user_id = $event,
                        "clear-button": true,
                        options: $props.users,
                        search: true,
                        optionsLabelKey: "name",
                        optionsValueKey: "id",
                        "place-holder": "Select a manager",
                        "search-place-holder": "Search a manager..."
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 md:col-span-6",
                    label: "Rich Options Content",
                    labelFor: "status"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_select, {
                        modelValue: $data.form.status,
                        "onUpdate:modelValue": ($event) => $data.form.status = $event,
                        "clear-button": true,
                        options: $data.status,
                        optionsLabelKey: "name",
                        optionsValueKey: "value",
                        "place-holder": "Select a status"
                      }, {
                        label: withCtx(({ props }) => [
                          props.value === true ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "flex flex-row items-center gap-1"
                          }, [
                            createVNode(_component_t_check_circle_icon, { class: "w-5 h-5 text-green-500" }),
                            createTextVNode(" " + toDisplayString(props.name), 1)
                          ])) : createCommentVNode("", true),
                          props.value === false ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "flex flex-row items-center gap-1"
                          }, [
                            createVNode(_component_t_x_circle_icon, { class: "w-5 h-5 text-red-500 items-center" }),
                            createTextVNode(" " + toDisplayString(props.name), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    label: "Disabled",
                    class: "col-span-12 md:col-span-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_select, { disabled: "" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    label: "Read Only",
                    class: "col-span-12 md:col-span-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_select, {
                        "model-value": true,
                        options: $data.status,
                        "options-value-key": "value",
                        "options-label-key": "name",
                        "read-only": ""
                      }, {
                        label: withCtx(({ props }) => [
                          props.value === true ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "flex flex-row items-center gap-1"
                          }, [
                            createVNode(_component_t_check_circle_icon, { class: "w-5 h-5 text-green-500" }),
                            createTextVNode(" " + toDisplayString(props.name), 1)
                          ])) : createCommentVNode("", true),
                          props.value === false ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "flex flex-row items-center gap-1"
                          }, [
                            createVNode(_component_t_x_circle_icon, { class: "w-5 h-5 text-red-500 items-center" }),
                            createTextVNode(" " + toDisplayString(props.name), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["options"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/FormElements/SelectInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SelectInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SelectInput as default
};

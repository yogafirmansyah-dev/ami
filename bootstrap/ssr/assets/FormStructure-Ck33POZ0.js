import { A as AppLayout, T as TBadge } from "./AppLayout-BkpuvVky.js";
import { a as _sfc_main$1 } from "./TButton-oXLR37ud.js";
import { a as TFormContent, T as TFormSection } from "./TFormContent-CmcaSy-p.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { T as TInputTextArea } from "./TInputTextArea-ClDbAFEY.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./windowSizeCalculator-4-m3qk2a.js";
import "./TDropdown-8pNOPgDY.js";
import "./TChevronDownIcon-fGhz3Hz_.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-Cw8URzx6.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "./TContentCard-BkuMOsLs.js";
const _sfc_main = {
  name: "FormStructure",
  components: {
    TBadge,
    AppLayout,
    TButton: _sfc_main$1,
    TFormSection,
    TFormContent,
    TInputGroup,
    TInputText,
    TInputTextArea
  },
  data() {
    return {
      loading: false,
      form: this.$inertia.form({
        _method: "POST",
        name: null,
        tax_id: null,
        email: null,
        phone: null,
        status: null,
        address: null
      }),
      status: [
        { name: "Passive", value: 0, icon: "XIcon", class: "w-5 h-5 text-red-500 mr-2" },
        { name: "Active", value: 1, icon: "Checked", class: "w-5 h-5 text-green-500 mr-2" }
      ]
    };
  },
  methods: {
    reset: function() {
      this.form.name = null;
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
  const _component_t_badge = resolveComponent("t-badge");
  const _component_t_form_section = resolveComponent("t-form-section");
  const _component_t_input_group = resolveComponent("t-input-group");
  const _component_t_input_text = resolveComponent("t-input-text");
  const _component_t_input_text_area = resolveComponent("t-input-text-area");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ actionButtons: true }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Form Structure`);
      } else {
        return [
          createTextVNode("Form Structure")
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
              _push3(`Back to Home `);
            } else {
              return [
                createVNode(_component_icon, { icon: "angle-left" }),
                createTextVNode("Back to Home ")
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
              _push3(`Add New `);
            } else {
              return [
                createVNode(_component_icon, { icon: "plus-circle" }),
                createTextVNode("Add New ")
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
              createTextVNode("Back to Home ")
            ]),
            _: 1
          }),
          createVNode(_component_t_button, {
            radius: 3,
            color: "green"
          }, {
            default: withCtx(() => [
              createVNode(_component_icon, { icon: "plus-circle" }),
              createTextVNode("Add New ")
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_t_form_content, {
          "reset-button": false,
          "submit-button": false,
          onReset: $options.reset,
          onSubmitted: $options.save
        }, {
          "button-area": withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex flex-wrap col-span-12 justify-center md:justify-end space-x-2 mr-4 py-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_t_badge, { color: "pink" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Form Extra Button Area`);
                  } else {
                    return [
                      createTextVNode("Form Extra Button Area")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="border p-2 gap-2 inline-flex items-center"${_scopeId2}><div class="flex flex-wrap gap-1 justify-center md:justify-end"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_t_badge, { color: "light" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Form Status Area`);
                  } else {
                    return [
                      createTextVNode("Form Status Area")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`or `);
              _push3(ssrRenderComponent(_component_t_badge, { color: "purple" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Default Form Buttons Area`);
                  } else {
                    return [
                      createTextVNode("Default Form Buttons Area")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-wrap col-span-12 justify-center md:justify-end space-x-2 mr-4 py-4" }, [
                  createVNode(_component_t_badge, { color: "pink" }, {
                    default: withCtx(() => [
                      createTextVNode("Form Extra Button Area")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "border p-2 gap-2 inline-flex items-center" }, [
                  createVNode("div", { class: "flex flex-wrap gap-1 justify-center md:justify-end" }, [
                    createVNode(_component_t_badge, { color: "light" }, {
                      default: withCtx(() => [
                        createTextVNode("Form Status Area")
                      ]),
                      _: 1
                    }),
                    createTextVNode("or "),
                    createVNode(_component_t_badge, { color: "purple" }, {
                      default: withCtx(() => [
                        createTextVNode("Default Form Buttons Area")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_badge, { color: "success" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Form Content Area`);
                  } else {
                    return [
                      createTextVNode("Form Content Area")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_form_section, {
                description: "This information is subject to personal data protection law. - (Description)",
                title: "Personal Infos - (Title)"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="col-span-full"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_t_badge, { color: "info" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Form Section Area`);
                        } else {
                          return [
                            createTextVNode("Form Section Area")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                    _push4(ssrRenderComponent(_component_t_input_group, {
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
                      label: "Tax ID",
                      labelFor: "tax_id"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "tax_id",
                            modelValue: $data.form.tax_id,
                            "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "tax_id",
                              modelValue: $data.form.tax_id,
                              "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      "laptop-width": 12,
                      label: "Address",
                      labelFor: "address"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text_area, {
                            id: "address",
                            modelValue: $data.form.address,
                            "onUpdate:modelValue": ($event) => $data.form.address = $event,
                            "clear-button": true,
                            counter: true,
                            rows: 3,
                            placeholder: "Full address"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text_area, {
                              id: "address",
                              modelValue: $data.form.address,
                              "onUpdate:modelValue": ($event) => $data.form.address = $event,
                              "clear-button": true,
                              counter: true,
                              rows: 3,
                              placeholder: "Full address"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("div", { class: "col-span-full" }, [
                        createVNode(_component_t_badge, { color: "info" }, {
                          default: withCtx(() => [
                            createTextVNode("Form Section Area")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_t_input_group, {
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
                        label: "Tax ID",
                        labelFor: "tax_id"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "tax_id",
                            modelValue: $data.form.tax_id,
                            "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        "laptop-width": 12,
                        label: "Address",
                        labelFor: "address"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text_area, {
                            id: "address",
                            modelValue: $data.form.address,
                            "onUpdate:modelValue": ($event) => $data.form.address = $event,
                            "clear-button": true,
                            counter: true,
                            rows: 3,
                            placeholder: "Full address"
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
                createVNode(_component_t_badge, { color: "success" }, {
                  default: withCtx(() => [
                    createTextVNode("Form Content Area")
                  ]),
                  _: 1
                }),
                createVNode(_component_t_form_section, {
                  description: "This information is subject to personal data protection law. - (Description)",
                  title: "Personal Infos - (Title)"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "col-span-full" }, [
                      createVNode(_component_t_badge, { color: "info" }, {
                        default: withCtx(() => [
                          createTextVNode("Form Section Area")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_t_input_group, {
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
                      label: "Tax ID",
                      labelFor: "tax_id"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "tax_id",
                          modelValue: $data.form.tax_id,
                          "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      "laptop-width": 12,
                      label: "Address",
                      labelFor: "address"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text_area, {
                          id: "address",
                          modelValue: $data.form.address,
                          "onUpdate:modelValue": ($event) => $data.form.address = $event,
                          "clear-button": true,
                          counter: true,
                          rows: 3,
                          placeholder: "Full address"
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
        _push2(ssrRenderComponent(_component_t_form_content, {
          "reset-button": true,
          "submit-button": true,
          sectionLayout: "smart",
          onReset: $options.reset,
          onSubmitted: $options.save,
          class: "mt-4"
        }, {
          actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Saved`);
            } else {
              return [
                createTextVNode("Saved")
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_form_section, {
                description: "This information is subject to personal data protection law. - (Description)",
                title: "Personal Infos - (Title)"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_input_group, {
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
                      label: "Tax ID",
                      labelFor: "tax_id"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "tax_id",
                            modelValue: $data.form.tax_id,
                            "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "tax_id",
                              modelValue: $data.form.tax_id,
                              "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      "desktop-width": 12,
                      label: "Address",
                      labelFor: "address"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text_area, {
                            id: "address",
                            modelValue: $data.form.address,
                            "onUpdate:modelValue": ($event) => $data.form.address = $event,
                            "clear-button": true,
                            counter: true,
                            rows: 3,
                            placeholder: "Full address"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text_area, {
                              id: "address",
                              modelValue: $data.form.address,
                              "onUpdate:modelValue": ($event) => $data.form.address = $event,
                              "clear-button": true,
                              counter: true,
                              rows: 3,
                              placeholder: "Full address"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_input_group, {
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
                        label: "Tax ID",
                        labelFor: "tax_id"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "tax_id",
                            modelValue: $data.form.tax_id,
                            "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        "desktop-width": 12,
                        label: "Address",
                        labelFor: "address"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text_area, {
                            id: "address",
                            modelValue: $data.form.address,
                            "onUpdate:modelValue": ($event) => $data.form.address = $event,
                            "clear-button": true,
                            counter: true,
                            rows: 3,
                            placeholder: "Full address"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_form_section, {
                description: "This information is subject to personal data protection law. - (Description)",
                title: "Personal Infos - (Title)"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_input_group, {
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
                      label: "Tax ID",
                      labelFor: "tax_id"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "tax_id",
                            modelValue: $data.form.tax_id,
                            "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "tax_id",
                              modelValue: $data.form.tax_id,
                              "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      "desktop-width": 12,
                      label: "Address",
                      labelFor: "address"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text_area, {
                            id: "address",
                            modelValue: $data.form.address,
                            "onUpdate:modelValue": ($event) => $data.form.address = $event,
                            "clear-button": true,
                            counter: true,
                            rows: 3,
                            placeholder: "Full address"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text_area, {
                              id: "address",
                              modelValue: $data.form.address,
                              "onUpdate:modelValue": ($event) => $data.form.address = $event,
                              "clear-button": true,
                              counter: true,
                              rows: 3,
                              placeholder: "Full address"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_input_group, {
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
                        label: "Tax ID",
                        labelFor: "tax_id"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "tax_id",
                            modelValue: $data.form.tax_id,
                            "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        "desktop-width": 12,
                        label: "Address",
                        labelFor: "address"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text_area, {
                            id: "address",
                            modelValue: $data.form.address,
                            "onUpdate:modelValue": ($event) => $data.form.address = $event,
                            "clear-button": true,
                            counter: true,
                            rows: 3,
                            placeholder: "Full address"
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
                  description: "This information is subject to personal data protection law. - (Description)",
                  title: "Personal Infos - (Title)"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_input_group, {
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
                      label: "Tax ID",
                      labelFor: "tax_id"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "tax_id",
                          modelValue: $data.form.tax_id,
                          "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      "desktop-width": 12,
                      label: "Address",
                      labelFor: "address"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text_area, {
                          id: "address",
                          modelValue: $data.form.address,
                          "onUpdate:modelValue": ($event) => $data.form.address = $event,
                          "clear-button": true,
                          counter: true,
                          rows: 3,
                          placeholder: "Full address"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_t_form_section, {
                  description: "This information is subject to personal data protection law. - (Description)",
                  title: "Personal Infos - (Title)"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_input_group, {
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
                      label: "Tax ID",
                      labelFor: "tax_id"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "tax_id",
                          modelValue: $data.form.tax_id,
                          "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      "desktop-width": 12,
                      label: "Address",
                      labelFor: "address"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text_area, {
                          id: "address",
                          modelValue: $data.form.address,
                          "onUpdate:modelValue": ($event) => $data.form.address = $event,
                          "clear-button": true,
                          counter: true,
                          rows: 3,
                          placeholder: "Full address"
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
            "reset-button": false,
            "submit-button": false,
            onReset: $options.reset,
            onSubmitted: $options.save
          }, {
            "button-area": withCtx(() => [
              createVNode("div", { class: "flex flex-wrap col-span-12 justify-center md:justify-end space-x-2 mr-4 py-4" }, [
                createVNode(_component_t_badge, { color: "pink" }, {
                  default: withCtx(() => [
                    createTextVNode("Form Extra Button Area")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "border p-2 gap-2 inline-flex items-center" }, [
                createVNode("div", { class: "flex flex-wrap gap-1 justify-center md:justify-end" }, [
                  createVNode(_component_t_badge, { color: "light" }, {
                    default: withCtx(() => [
                      createTextVNode("Form Status Area")
                    ]),
                    _: 1
                  }),
                  createTextVNode("or "),
                  createVNode(_component_t_badge, { color: "purple" }, {
                    default: withCtx(() => [
                      createTextVNode("Default Form Buttons Area")
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_t_badge, { color: "success" }, {
                default: withCtx(() => [
                  createTextVNode("Form Content Area")
                ]),
                _: 1
              }),
              createVNode(_component_t_form_section, {
                description: "This information is subject to personal data protection law. - (Description)",
                title: "Personal Infos - (Title)"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "col-span-full" }, [
                    createVNode(_component_t_badge, { color: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("Form Section Area")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_t_input_group, {
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
                    label: "Tax ID",
                    labelFor: "tax_id"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "tax_id",
                        modelValue: $data.form.tax_id,
                        "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    "laptop-width": 12,
                    label: "Address",
                    labelFor: "address"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text_area, {
                        id: "address",
                        modelValue: $data.form.address,
                        "onUpdate:modelValue": ($event) => $data.form.address = $event,
                        "clear-button": true,
                        counter: true,
                        rows: 3,
                        placeholder: "Full address"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onReset", "onSubmitted"]),
          createVNode(_component_t_form_content, {
            "reset-button": true,
            "submit-button": true,
            sectionLayout: "smart",
            onReset: $options.reset,
            onSubmitted: $options.save,
            class: "mt-4"
          }, {
            actions: withCtx(() => [
              createTextVNode("Saved")
            ]),
            default: withCtx(() => [
              createVNode(_component_t_form_section, {
                description: "This information is subject to personal data protection law. - (Description)",
                title: "Personal Infos - (Title)"
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_input_group, {
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
                    label: "Tax ID",
                    labelFor: "tax_id"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "tax_id",
                        modelValue: $data.form.tax_id,
                        "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    "desktop-width": 12,
                    label: "Address",
                    labelFor: "address"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text_area, {
                        id: "address",
                        modelValue: $data.form.address,
                        "onUpdate:modelValue": ($event) => $data.form.address = $event,
                        "clear-button": true,
                        counter: true,
                        rows: 3,
                        placeholder: "Full address"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_t_form_section, {
                description: "This information is subject to personal data protection law. - (Description)",
                title: "Personal Infos - (Title)"
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_input_group, {
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
                    label: "Tax ID",
                    labelFor: "tax_id"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "tax_id",
                        modelValue: $data.form.tax_id,
                        "onUpdate:modelValue": ($event) => $data.form.tax_id = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    "desktop-width": 12,
                    label: "Address",
                    labelFor: "address"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text_area, {
                        id: "address",
                        modelValue: $data.form.address,
                        "onUpdate:modelValue": ($event) => $data.form.address = $event,
                        "clear-button": true,
                        counter: true,
                        rows: 3,
                        placeholder: "Full address"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/FormElements/FormStructure.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FormStructure = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FormStructure as default
};

import { A as AppLayout } from "./AppLayout-C9UC9tJn.js";
import { T as TTable } from "./TTable-D8iFYRUh.js";
import { T as TAvatar } from "./TAvatar-a0UbdIFE.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { _ as _sfc_main$1 } from "./windowSizeCalculator-ej9CZPp5.js";
import { T as TUserCircleIcon } from "./TUserCircleIcon-41nI2djU.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, reactive, useSSRContext } from "vue";
import SshPre from "simple-syntax-highlighter";
/* empty css                */
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./TDropdown-DbVD8e4r.js";
import "vue-i18n";
import "./displayLanguage-CeV33Cax.js";
import "pinia";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "./TPaginate-AWicR3Cf.js";
import "./TModal-BluvIe0P.js";
import "vue3-keypress";
import "./TInputSelect-BY60CBa7.js";
import "./TInputCheckBox-HSBq-avl.js";
import "./TCheckIcon-CWPVq9Ck.js";
import "lodash";
import "./table_lang-CXzpQG4k.js";
const _sfc_main = {
  name: "Table",
  components: {
    TUserCircleIcon,
    TButton: _sfc_main$1,
    GridSection,
    TInputText,
    TInputGroup,
    AppLayout,
    TTable,
    TAvatar,
    SshPre
  },
  props: ["users"],
  setup() {
    const tableHeader = reactive([
      { label: "Avatar", key: "photo", align: "center", width: "5", status: true },
      { label: "Name", key: "name", align: "left", simpleSearchable: true, status: true, sortable: true },
      { label: "Email", key: "email", align: "left", status: true, sortable: true }
    ]);
    const tableFeatures = reactive({
      table: {
        design: "elegant",
        seperatedRow: true,
        rowBorder: true,
        zebraRow: true,
        radius: 3,
        perPage: 5
      },
      pagination: {
        status: true,
        radius: 3,
        range: 5,
        jump: true
      },
      actions: {
        status: true,
        headerText: "Aksiyonlar"
      },
      deleteModal: {
        headerText: "Item's deleting",
        contentText: "You are going to delete <br><b></b><br>Are you sure ?",
        icon: "warning"
      }
    });
    return { tableHeader, tableFeatures };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_t_table = resolveComponent("t-table");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_input_group = resolveComponent("t-input-group");
  const _component_t_input_text = resolveComponent("t-input-text");
  const _component_t_button = resolveComponent("t-button");
  const _component_t_user_circle_icon = resolveComponent("t-user-circle-icon");
  const _component_t_avatar = resolveComponent("t-avatar");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Tables `);
      } else {
        return [
          createTextVNode(" Tables ")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Customizable tables `);
      } else {
        return [
          createTextVNode(" Customizable tables ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_t_table, {
          content: $props.users,
          header: $setup.tableHeader,
          features: $setup.tableFeatures
        }, {
          search: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_grid_section, {
                col: 12,
                gap: 2
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 md:col-span-6",
                      label: "Name"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, { id: "name" }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, { id: "name" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 md:col-span-6",
                      label: "Email"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, { id: "email" }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, { id: "email" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 md:col-span-6",
                        label: "Name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, { id: "name" })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 md:col-span-6",
                        label: "Email"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, { id: "email" })
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
                createVNode(_component_grid_section, {
                  col: 12,
                  gap: 2
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 md:col-span-6",
                      label: "Name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, { id: "name" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 md:col-span-6",
                      label: "Email"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, { id: "email" })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          right: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_button, {
                link: _ctx.route("form-structure"),
                radius: 8
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_user_circle_icon, { class: "w-6 h-6" }, null, _parent4, _scopeId3));
                    _push4(` Add New User `);
                  } else {
                    return [
                      createVNode(_component_t_user_circle_icon, { class: "w-6 h-6" }),
                      createTextVNode(" Add New User ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_button, {
                  link: _ctx.route("form-structure"),
                  radius: 8
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_user_circle_icon, { class: "w-6 h-6" }),
                    createTextVNode(" Add New User ")
                  ]),
                  _: 1
                }, 8, ["link"])
              ];
            }
          }),
          photo: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_avatar, {
                link: props.photo,
                radius: 8,
                size: 3
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_avatar, {
                  link: props.photo,
                  radius: 8,
                  size: 3
                }, null, 8, ["link"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_t_table, {
            content: $props.users,
            header: $setup.tableHeader,
            features: $setup.tableFeatures
          }, {
            search: withCtx(() => [
              createVNode(_component_grid_section, {
                col: 12,
                gap: 2
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 md:col-span-6",
                    label: "Name"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, { id: "name" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 md:col-span-6",
                    label: "Email"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, { id: "email" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            right: withCtx(() => [
              createVNode(_component_t_button, {
                link: _ctx.route("form-structure"),
                radius: 8
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_user_circle_icon, { class: "w-6 h-6" }),
                  createTextVNode(" Add New User ")
                ]),
                _: 1
              }, 8, ["link"])
            ]),
            photo: withCtx(({ props }) => [
              createVNode(_component_t_avatar, {
                link: props.photo,
                radius: 8,
                size: 3
              }, null, 8, ["link"])
            ]),
            _: 1
          }, 8, ["content", "header", "features"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Table = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Table as default
};

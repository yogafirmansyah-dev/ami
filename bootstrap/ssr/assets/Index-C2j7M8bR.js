import { A as AppLayout } from "./AppLayout-C9UC9tJn.js";
import { s as settingsMenuMixin, I as InitialVerticalMenu } from "./settingsMenuMixin-DWdNwbuV.js";
import { resolveComponent, withCtx, createTextVNode, createVNode, withModifiers, ref, reactive, useSSRContext } from "vue";
import { useForm } from "@inertiajs/vue3";
import { T as TBackEndTable } from "./TBackEndTable-Hwncl7IW.js";
import { T as TModal } from "./TModal-BluvIe0P.js";
import { _ as _sfc_main$1 } from "./windowSizeCalculator-ej9CZPp5.js";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vueuse/core";
import "./TDropdown-DbVD8e4r.js";
import "vue-i18n";
import "./displayLanguage-CeV33Cax.js";
import "pinia";
import "./TAvatar-a0UbdIFE.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "./TInputCheckBox-HSBq-avl.js";
import "./TCheckIcon-CWPVq9Ck.js";
import "./TInputSelect-BY60CBa7.js";
import "./TInputText-CyR_XUuU.js";
import "./TListItem-DHyz0dl0.js";
import "./TInputGroup-D2FkHKt4.js";
import "./table_lang-CXzpQG4k.js";
import "lodash";
import "./TPaginate-AWicR3Cf.js";
import "vue3-keypress";
const _sfc_main = {
  name: "Index",
  components: { InitialVerticalMenu, AppLayout, TBackEndTable, TModal, TButton: _sfc_main$1 },
  mixins: [settingsMenuMixin],
  props: {
    Roles: {
      type: Object,
      default: () => {
      }
    }
  },
  setup() {
    const showModal = ref(false);
    const modalContent = ref(null);
    const selectedPermission = ref(null);
    const form = useForm({
      id: null
    });
    const showDeleteModal = (role) => {
      showModal.value = true;
      modalContent.value = `You are going to delete <b> ${role.name} </b>, Are you sure ?`;
    };
    const deletePermission = () => {
      form.id = selectedPermission.value;
      form.delete(route("settings-role.destroy", selectedPermission.value), {
        preserveScroll: true,
        onSuccess: () => showModal.value = false
      });
    };
    const compareOperators = reactive([
      { key: "contains", label: "contains" },
      { key: "notContains", label: "not contains" },
      { key: "starts", label: "starts" },
      { key: "ends", label: "ends" }
    ]);
    const header = reactive([
      {
        label: "Name",
        key: "name",
        align: "left",
        status: true,
        sortable: true,
        simpleSearchable: true,
        advancedSearchable: true,
        advancedSearchInputType: "text",
        compareOperators
      }
    ]);
    return {
      deletePermission,
      showDeleteModal,
      modalContent,
      selectedPermission,
      header,
      showModal
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_initial_vertical_menu = resolveComponent("initial-vertical-menu");
  const _component_t_back_end_table = resolveComponent("t-back-end-table");
  const _component_t_modal = resolveComponent("t-modal");
  const _component_t_button = resolveComponent("t-button");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Roles`);
      } else {
        return [
          createTextVNode("Roles")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Management of Roles`);
      } else {
        return [
          createTextVNode("Management of Roles")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_initial_vertical_menu, {
          menu: _ctx.menuList,
          class: "mb-10"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_t_back_end_table, {
          onSelectedItem: ($event) => {
            $setup.selectedPermission = $event.data;
            $event.action === "delete" && $setup.showDeleteModal($event.data);
          },
          content: $props.Roles,
          header: $setup.header,
          "content-key": "roles",
          "unique-id": "id",
          "search-route": "settings-role.search"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_t_modal, {
          modelValue: $setup.showModal,
          "onUpdate:modelValue": ($event) => $setup.showModal = $event
        }, {
          header: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` User Deleting `);
            } else {
              return [
                createTextVNode(" User Deleting ")
              ];
            }
          }),
          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span${_scopeId2}>${$setup.modalContent ?? ""}</span>`);
            } else {
              return [
                createVNode("span", { innerHTML: $setup.modalContent }, null, 8, ["innerHTML"])
              ];
            }
          }),
          "footer-left": withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_button, {
                design: "light",
                color: "green",
                onClick: ($event) => $setup.showModal = false
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` No, Nevermind `);
                  } else {
                    return [
                      createTextVNode(" No, Nevermind ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_button, {
                  design: "light",
                  color: "green",
                  onClick: ($event) => $setup.showModal = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(" No, Nevermind ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          "footer-right": withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<form id="delete"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_t_button, {
                design: "light",
                color: "gray",
                type: "submit"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Yes, Delete `);
                  } else {
                    return [
                      createTextVNode(" Yes, Delete ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</form>`);
            } else {
              return [
                createVNode("form", {
                  id: "delete",
                  onSubmit: withModifiers($setup.deletePermission, ["prevent"])
                }, [
                  createVNode(_component_t_button, {
                    design: "light",
                    color: "gray",
                    type: "submit"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Yes, Delete ")
                    ]),
                    _: 1
                  })
                ], 40, ["onSubmit"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_initial_vertical_menu, {
            menu: _ctx.menuList,
            class: "mb-10"
          }, null, 8, ["menu"]),
          createVNode(_component_t_back_end_table, {
            onSelectedItem: ($event) => {
              $setup.selectedPermission = $event.data;
              $event.action === "delete" && $setup.showDeleteModal($event.data);
            },
            content: $props.Roles,
            header: $setup.header,
            "content-key": "roles",
            "unique-id": "id",
            "search-route": "settings-role.search"
          }, null, 8, ["onSelectedItem", "content", "header"]),
          createVNode(_component_t_modal, {
            modelValue: $setup.showModal,
            "onUpdate:modelValue": ($event) => $setup.showModal = $event
          }, {
            header: withCtx(() => [
              createTextVNode(" User Deleting ")
            ]),
            content: withCtx(() => [
              createVNode("span", { innerHTML: $setup.modalContent }, null, 8, ["innerHTML"])
            ]),
            "footer-left": withCtx(() => [
              createVNode(_component_t_button, {
                design: "light",
                color: "green",
                onClick: ($event) => $setup.showModal = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" No, Nevermind ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            "footer-right": withCtx(() => [
              createVNode("form", {
                id: "delete",
                onSubmit: withModifiers($setup.deletePermission, ["prevent"])
              }, [
                createVNode(_component_t_button, {
                  design: "light",
                  color: "gray",
                  type: "submit"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Yes, Delete ")
                  ]),
                  _: 1
                })
              ], 40, ["onSubmit"])
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Role/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};

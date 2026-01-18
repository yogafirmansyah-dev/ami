import { s as settingsMenuMixin, I as InitialVerticalMenu } from "./settingsMenuMixin-DLW3V7dk.js";
import { defineComponent, mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, withModifiers, toRefs, ref, watch, reactive } from "vue";
import { useForm } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-BXpqpYTS.js";
import { T as TTable } from "./TTable-DsnPHBdE.js";
import { d as _sfc_main$3 } from "./windowSizeCalculator-Ch6zBFfA.js";
import { T as TTrashIcon } from "./TTrashIcon-B76N3D4s.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { T as TDropdown } from "./TDropdown-CRaizlei.js";
import { T as TList, a as TListItem } from "./TListItem-DHyz0dl0.js";
import { T as TModal } from "./TModal-BluvIe0P.js";
import { T as TBackEndTable } from "./TBackEndTable-Cc1flIMi.js";
import "@vueuse/core";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-DS29Kv5n.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "./TPaginate-AWicR3Cf.js";
import "./TInputSelect-BY60CBa7.js";
import "./TInputText-CyR_XUuU.js";
import "./TInputCheckBox-Cbb-bEsO.js";
import "./TCheckIcon-CWPVq9Ck.js";
import "lodash";
import "./table_lang-CXzpQG4k.js";
import "vue3-keypress";
import "./TInputGroup-D2FkHKt4.js";
const _sfc_main$2 = defineComponent({
  name: "TPencilAltIcon"
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TPencilAltIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TPencilAltIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({
  name: "TDotsVerticalIcon"
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TDotsVerticalIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TDotsVerticalIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "SettingsUser",
  components: {
    TBackEndTable,
    TModal,
    TListItem,
    TList,
    TDotsVerticalIcon,
    TDropdown,
    TPencilAltIcon,
    TTrashIcon,
    TButton: _sfc_main$3,
    TTable,
    InitialVerticalMenu,
    AppLayout
  },
  mixins: [settingsMenuMixin],
  props: {
    users: {
      type: Array,
      default() {
        return [];
      }
    },
    roles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(props) {
    const { users, roles } = toRefs(props);
    const showModal = ref(false);
    const modalContent = ref(null);
    const selectedUser = ref(null);
    const form = useForm({
      id: null
    });
    watch(() => selectedUser, () => {
    });
    const showDeleteModal = (user) => {
      showModal.value = true;
      modalContent.value = `You are going to delete <b> ${user.name} </b>, Are you sure ?`;
    };
    const deleteUser = () => {
      form.id = selectedUser.value;
      form.delete(route("settings-user.destroy", selectedUser.value), {
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
      showModal,
      showDeleteModal,
      deleteUser,
      modalContent,
      selectedUser,
      form,
      header,
      compareOperators
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_initial_vertical_menu = resolveComponent("initial-vertical-menu");
  const _component_t_back_end_table = resolveComponent("t-back-end-table");
  const _component_t_modal = resolveComponent("t-modal");
  const _component_t_button = resolveComponent("t-button");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Users" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Users`);
      } else {
        return [
          createTextVNode("Users")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Management of Users`);
      } else {
        return [
          createTextVNode("Management of Users")
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
            $setup.selectedUser = $event.data;
            $event.action === "delete" && $setup.showDeleteModal($event.data);
          },
          content: $props.users,
          header: $setup.header,
          "content-key": "users",
          "unique-id": "id",
          "search-route": "settings-user.search"
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
                  onSubmit: withModifiers($setup.deleteUser, ["prevent"])
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
              $setup.selectedUser = $event.data;
              $event.action === "delete" && $setup.showDeleteModal($event.data);
            },
            content: $props.users,
            header: $setup.header,
            "content-key": "users",
            "unique-id": "id",
            "search-route": "settings-user.search"
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
                onSubmit: withModifiers($setup.deleteUser, ["prevent"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/User.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const User = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  User as default
};

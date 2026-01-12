import { A as AppLayout } from "./AppLayout-BkpuvVky.js";
import { s as settingsMenuMixin, I as InitialVerticalMenu } from "./settingsMenuMixin-lfNDuWHR.js";
import { resolveComponent, withCtx, createTextVNode, createVNode, withModifiers, toDisplayString, createBlock, openBlock, Fragment, renderList, ref, reactive, useSSRContext } from "vue";
import { useForm } from "@inertiajs/vue3";
import { T as TBackEndTable } from "./TBackEndTable-COZOukYy.js";
import { T as TModal } from "./TModal-BluvIe0P.js";
import { a as _sfc_main$1 } from "./TButton-oXLR37ud.js";
import { T as TAlert } from "./windowSizeCalculator-4-m3qk2a.js";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vueuse/core";
import "./TDropdown-8pNOPgDY.js";
import "./TChevronDownIcon-fGhz3Hz_.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-Cw8URzx6.js";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "./TInputCheckBox-eDtuF0je.js";
import "./TCheckIcon-CWPVq9Ck.js";
import "./TInputSelect-BY60CBa7.js";
import "./TInputText-CyR_XUuU.js";
import "./TListItem-DHyz0dl0.js";
import "./TInputGroup-D2FkHKt4.js";
import "./table_lang-CXzpQG4k.js";
import "lodash";
import "./TPaginate-AWicR3Cf.js";
import "vue3-keypress";
library.add(faPlusCircle);
const _sfc_main = {
  name: "Index",
  components: { TAlert, InitialVerticalMenu, AppLayout, TBackEndTable, TModal, TButton: _sfc_main$1 },
  mixins: [settingsMenuMixin],
  props: {
    permissions: {
      type: Object,
      default: () => {
      }
    },
    permissionGroups: {
      type: Object,
      default: () => {
      }
    }
  },
  setup() {
    const showModal = ref({
      type: null,
      status: false
    });
    const modalContent = ref(null);
    const selectedPermission = ref(null);
    const form = useForm({
      id: null
    });
    const showDeleteModal = (role) => {
      showModal.value.status = true;
      showModal.value.title = "User Deleting";
      showModal.value.submit = deletePermission;
      modalContent.value = `You are going to delete <b> ${role.name} </b>, Are you sure ?`;
    };
    const deletePermission = () => {
      form.id = selectedPermission.value;
      form.delete(route("settings-permission.destroy", selectedPermission.value), {
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
  const _component_icon = resolveComponent("icon");
  const _component_t_button = resolveComponent("t-button");
  const _component_t_modal = resolveComponent("t-modal");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Permissions`);
      } else {
        return [
          createTextVNode("Permissions")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Management of Permissions`);
      } else {
        return [
          createTextVNode("Management of Permissions")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_initial_vertical_menu, {
          menu: _ctx.menuList,
          class: "mb-10"
        }, null, _parent2, _scopeId));
        if ($props.permissionGroups.length > 0) {
          _push2(`<div class="grid grid-cols-4 grid-flow-row gap-4"${_scopeId}><!--[-->`);
          ssrRenderList($props.permissionGroups, (group) => {
            _push2(`<div class="flex border border-slate-300 bg-white dark:bg-slate-800 dark:text-slate-100 rounded flex-col select-none"${_scopeId}><div class="flex flex-col p-4"${_scopeId}><span class="font-semibold"${_scopeId}>${ssrInterpolate(group.name)}</span><span class="text-sm"${_scopeId}>${ssrInterpolate(group.description)}</span></div><div class="flex justify-end text-slate-700 overflow-hidden"${_scopeId}><div class="group flex space-x-1 font-semibold items-center cursor-pointer bg-slate-300 hover:bg-emerald-200 active:bg-emerald-500 p-1 rounded-l-full mb-2 -mr-1 duration-100"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, { icon: "plus-circle" }, null, _parent2, _scopeId));
            _push2(`<span class="text-2xs opacity-0 transform w-0 group-hover:block group-hover:w-14 group-hover:opacity-100 transition-all duration-300"${_scopeId}>Permission</span></div></div></div>`);
          });
          _push2(`<!--]--><div class="flex space-y-2 justify-center items-center border border-slate-400 bg-emerald-200 hover:bg-emerald-300 hover:border-emerald-300 transform active:scale-95 duration-300 select-none dark:bg-slate-800 text-emerald-800 dark:text-slate-100 p-2 rounded flex-col cursor-pointer"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_icon, {
            icon: "plus-circle",
            size: "2x",
            class: "transform hover:scale-125 duration-300"
          }, null, _parent2, _scopeId));
          _push2(`<span class="text-sm"${_scopeId}>Add new group</span></div></div>`);
        } else {
          _push2(`<div class="flex justify-between w-full p-4 rounded bg-orange-200 dark:bg-slate-800 text-slate-700 dark:text-slate-100 items-center text-xl"${_scopeId}><span${_scopeId}> There is any role groups, please add a role group </span>`);
          _push2(ssrRenderComponent(_component_t_button, {
            color: "green",
            class: "text-sm"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Add New Group `);
              } else {
                return [
                  createTextVNode(" Add New Group ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        }
        _push2(ssrRenderComponent(_component_t_modal, {
          modelValue: $setup.showModal.status,
          "onUpdate:modelValue": ($event) => $setup.showModal.status = $event
        }, {
          header: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span${_scopeId2}>${ssrInterpolate($setup.showModal.title)}</span>`);
            } else {
              return [
                createVNode("span", {
                  textContent: toDisplayString($setup.showModal.title)
                }, null, 8, ["textContent"])
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
                onClick: ($event) => $setup.showModal.status = false
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
                  onClick: ($event) => $setup.showModal.status = false
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
                  onSubmit: withModifiers($setup.showModal.submit, ["prevent"])
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
          $props.permissionGroups.length > 0 ? (openBlock(), createBlock("div", {
            key: 0,
            class: "grid grid-cols-4 grid-flow-row gap-4"
          }, [
            (openBlock(true), createBlock(Fragment, null, renderList($props.permissionGroups, (group) => {
              return openBlock(), createBlock("div", { class: "flex border border-slate-300 bg-white dark:bg-slate-800 dark:text-slate-100 rounded flex-col select-none" }, [
                createVNode("div", { class: "flex flex-col p-4" }, [
                  createVNode("span", {
                    textContent: toDisplayString(group.name),
                    class: "font-semibold"
                  }, null, 8, ["textContent"]),
                  createVNode("span", {
                    textContent: toDisplayString(group.description),
                    class: "text-sm"
                  }, null, 8, ["textContent"])
                ]),
                createVNode("div", { class: "flex justify-end text-slate-700 overflow-hidden" }, [
                  createVNode("div", { class: "group flex space-x-1 font-semibold items-center cursor-pointer bg-slate-300 hover:bg-emerald-200 active:bg-emerald-500 p-1 rounded-l-full mb-2 -mr-1 duration-100" }, [
                    createVNode(_component_icon, { icon: "plus-circle" }),
                    createVNode("span", { class: "text-2xs opacity-0 transform w-0 group-hover:block group-hover:w-14 group-hover:opacity-100 transition-all duration-300" }, "Permission")
                  ])
                ])
              ]);
            }), 256)),
            createVNode("div", { class: "flex space-y-2 justify-center items-center border border-slate-400 bg-emerald-200 hover:bg-emerald-300 hover:border-emerald-300 transform active:scale-95 duration-300 select-none dark:bg-slate-800 text-emerald-800 dark:text-slate-100 p-2 rounded flex-col cursor-pointer" }, [
              createVNode(_component_icon, {
                icon: "plus-circle",
                size: "2x",
                class: "transform hover:scale-125 duration-300"
              }),
              createVNode("span", { class: "text-sm" }, "Add new group")
            ])
          ])) : (openBlock(), createBlock("div", {
            key: 1,
            class: "flex justify-between w-full p-4 rounded bg-orange-200 dark:bg-slate-800 text-slate-700 dark:text-slate-100 items-center text-xl"
          }, [
            createVNode("span", null, " There is any role groups, please add a role group "),
            createVNode(_component_t_button, {
              color: "green",
              class: "text-sm"
            }, {
              default: withCtx(() => [
                createTextVNode(" Add New Group ")
              ]),
              _: 1
            })
          ])),
          createVNode(_component_t_modal, {
            modelValue: $setup.showModal.status,
            "onUpdate:modelValue": ($event) => $setup.showModal.status = $event
          }, {
            header: withCtx(() => [
              createVNode("span", {
                textContent: toDisplayString($setup.showModal.title)
              }, null, 8, ["textContent"])
            ]),
            content: withCtx(() => [
              createVNode("span", { innerHTML: $setup.modalContent }, null, 8, ["innerHTML"])
            ]),
            "footer-left": withCtx(() => [
              createVNode(_component_t_button, {
                design: "light",
                color: "green",
                onClick: ($event) => $setup.showModal.status = false
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
                onSubmit: withModifiers($setup.showModal.submit, ["prevent"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Permission/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};

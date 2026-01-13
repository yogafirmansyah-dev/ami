import { Link } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-D0TyJNRu.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TContentCard } from "./TContentCard-BkuMOsLs.js";
import { T as TStatisticWidget } from "./TStatisticWidget-CYw_XkfQ.js";
import { defineComponent, mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { T as TUserGroupIcon } from "./TUserGroupIcon-AYKEEw32.js";
import "@vueuse/core";
import "./TButton-oXLR37ud.js";
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
const _sfc_main$3 = defineComponent({
  name: "TCogIcon"
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TCogIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TCogIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({
  name: "TAdjustmentsIcon"
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TAdjustmentsIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TAdjustmentsIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({
  name: "TChevronDoubleDownIcon"
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TChevronDoubleDownIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TChevronDoubleDownIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Index",
  components: {
    AppLayout,
    GridSection,
    Link,
    TAdjustmentsIcon,
    TChevronDoubleDownIcon,
    TCogIcon,
    TContentCard,
    TStatisticWidget,
    TUserGroupIcon
  },
  props: ["users_count", "roles_count", "permissions_count"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_Link = resolveComponent("Link");
  const _component_t_content_card = resolveComponent("t-content-card");
  const _component_t_user_group_icon = resolveComponent("t-user-group-icon");
  const _component_t_chevron_double_down_icon = resolveComponent("t-chevron-double-down-icon");
  const _component_t_adjustments_icon = resolveComponent("t-adjustments-icon");
  const _component_t_cog_icon = resolveComponent("t-cog-icon");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Settings `);
      } else {
        return [
          createTextVNode(" Settings ")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` User and features management `);
      } else {
        return [
          createTextVNode(" User and features management ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_grid_section, {
          gap: 2,
          "col-tablet": 2,
          "col-desktop": 4
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Link, {
                href: _ctx.route("settings-user.index")
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_content_card, {
                      color: "light-indigo",
                      class: "hover:bg-white"
                    }, {
                      title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Users`);
                        } else {
                          return [
                            createTextVNode("Users")
                          ];
                        }
                      }),
                      icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_user_group_icon, { class: "w-12 h-12" }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_user_group_icon, { class: "w-12 h-12" })
                          ];
                        }
                      }),
                      content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`${ssrInterpolate($props.users_count)} user/s `);
                        } else {
                          return [
                            createTextVNode(toDisplayString($props.users_count) + " user/s ", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_content_card, {
                        color: "light-indigo",
                        class: "hover:bg-white"
                      }, {
                        title: withCtx(() => [
                          createTextVNode("Users")
                        ]),
                        icon: withCtx(() => [
                          createVNode(_component_t_user_group_icon, { class: "w-12 h-12" })
                        ]),
                        content: withCtx(() => [
                          createTextVNode(toDisplayString($props.users_count) + " user/s ", 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Link, {
                href: _ctx.route("settings-role.index")
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_content_card, {
                      color: "light-purple",
                      class: "hover:bg-white"
                    }, {
                      title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Roles`);
                        } else {
                          return [
                            createTextVNode("Roles")
                          ];
                        }
                      }),
                      icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_chevron_double_down_icon, { class: "w-12 h-12" }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_chevron_double_down_icon, { class: "w-12 h-12" })
                          ];
                        }
                      }),
                      content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`${ssrInterpolate($props.roles_count)} role/s `);
                        } else {
                          return [
                            createTextVNode(toDisplayString($props.roles_count) + " role/s ", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_content_card, {
                        color: "light-purple",
                        class: "hover:bg-white"
                      }, {
                        title: withCtx(() => [
                          createTextVNode("Roles")
                        ]),
                        icon: withCtx(() => [
                          createVNode(_component_t_chevron_double_down_icon, { class: "w-12 h-12" })
                        ]),
                        content: withCtx(() => [
                          createTextVNode(toDisplayString($props.roles_count) + " role/s ", 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Link, {
                href: _ctx.route("settings-permission.index")
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_content_card, {
                      color: "light-pink",
                      class: "hover:bg-white"
                    }, {
                      title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Permissions`);
                        } else {
                          return [
                            createTextVNode("Permissions")
                          ];
                        }
                      }),
                      icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_adjustments_icon, { class: "w-12 h-12" }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_adjustments_icon, { class: "w-12 h-12" })
                          ];
                        }
                      }),
                      content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`${ssrInterpolate($props.permissions_count)} permission/s `);
                        } else {
                          return [
                            createTextVNode(toDisplayString($props.permissions_count) + " permission/s ", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_content_card, {
                        color: "light-pink",
                        class: "hover:bg-white"
                      }, {
                        title: withCtx(() => [
                          createTextVNode("Permissions")
                        ]),
                        icon: withCtx(() => [
                          createVNode(_component_t_adjustments_icon, { class: "w-12 h-12" })
                        ]),
                        content: withCtx(() => [
                          createTextVNode(toDisplayString($props.permissions_count) + " permission/s ", 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Link, {
                href: _ctx.route("settings-system")
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_content_card, {
                      color: "light-blue",
                      class: "hover:bg-white"
                    }, {
                      title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Settings`);
                        } else {
                          return [
                            createTextVNode("Settings")
                          ];
                        }
                      }),
                      icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_cog_icon, { class: "w-12 h-12" }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_cog_icon, { class: "w-12 h-12" })
                          ];
                        }
                      }),
                      content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Definitions of System `);
                        } else {
                          return [
                            createTextVNode(" Definitions of System ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_content_card, {
                        color: "light-blue",
                        class: "hover:bg-white"
                      }, {
                        title: withCtx(() => [
                          createTextVNode("Settings")
                        ]),
                        icon: withCtx(() => [
                          createVNode(_component_t_cog_icon, { class: "w-12 h-12" })
                        ]),
                        content: withCtx(() => [
                          createTextVNode(" Definitions of System ")
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
                createVNode(_component_Link, {
                  href: _ctx.route("settings-user.index")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_content_card, {
                      color: "light-indigo",
                      class: "hover:bg-white"
                    }, {
                      title: withCtx(() => [
                        createTextVNode("Users")
                      ]),
                      icon: withCtx(() => [
                        createVNode(_component_t_user_group_icon, { class: "w-12 h-12" })
                      ]),
                      content: withCtx(() => [
                        createTextVNode(toDisplayString($props.users_count) + " user/s ", 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(_component_Link, {
                  href: _ctx.route("settings-role.index")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_content_card, {
                      color: "light-purple",
                      class: "hover:bg-white"
                    }, {
                      title: withCtx(() => [
                        createTextVNode("Roles")
                      ]),
                      icon: withCtx(() => [
                        createVNode(_component_t_chevron_double_down_icon, { class: "w-12 h-12" })
                      ]),
                      content: withCtx(() => [
                        createTextVNode(toDisplayString($props.roles_count) + " role/s ", 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(_component_Link, {
                  href: _ctx.route("settings-permission.index")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_content_card, {
                      color: "light-pink",
                      class: "hover:bg-white"
                    }, {
                      title: withCtx(() => [
                        createTextVNode("Permissions")
                      ]),
                      icon: withCtx(() => [
                        createVNode(_component_t_adjustments_icon, { class: "w-12 h-12" })
                      ]),
                      content: withCtx(() => [
                        createTextVNode(toDisplayString($props.permissions_count) + " permission/s ", 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(_component_Link, {
                  href: _ctx.route("settings-system")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_content_card, {
                      color: "light-blue",
                      class: "hover:bg-white"
                    }, {
                      title: withCtx(() => [
                        createTextVNode("Settings")
                      ]),
                      icon: withCtx(() => [
                        createVNode(_component_t_cog_icon, { class: "w-12 h-12" })
                      ]),
                      content: withCtx(() => [
                        createTextVNode(" Definitions of System ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["href"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_grid_section, {
            gap: 2,
            "col-tablet": 2,
            "col-desktop": 4
          }, {
            default: withCtx(() => [
              createVNode(_component_Link, {
                href: _ctx.route("settings-user.index")
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_content_card, {
                    color: "light-indigo",
                    class: "hover:bg-white"
                  }, {
                    title: withCtx(() => [
                      createTextVNode("Users")
                    ]),
                    icon: withCtx(() => [
                      createVNode(_component_t_user_group_icon, { class: "w-12 h-12" })
                    ]),
                    content: withCtx(() => [
                      createTextVNode(toDisplayString($props.users_count) + " user/s ", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_component_Link, {
                href: _ctx.route("settings-role.index")
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_content_card, {
                    color: "light-purple",
                    class: "hover:bg-white"
                  }, {
                    title: withCtx(() => [
                      createTextVNode("Roles")
                    ]),
                    icon: withCtx(() => [
                      createVNode(_component_t_chevron_double_down_icon, { class: "w-12 h-12" })
                    ]),
                    content: withCtx(() => [
                      createTextVNode(toDisplayString($props.roles_count) + " role/s ", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_component_Link, {
                href: _ctx.route("settings-permission.index")
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_content_card, {
                    color: "light-pink",
                    class: "hover:bg-white"
                  }, {
                    title: withCtx(() => [
                      createTextVNode("Permissions")
                    ]),
                    icon: withCtx(() => [
                      createVNode(_component_t_adjustments_icon, { class: "w-12 h-12" })
                    ]),
                    content: withCtx(() => [
                      createTextVNode(toDisplayString($props.permissions_count) + " permission/s ", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_component_Link, {
                href: _ctx.route("settings-system")
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_content_card, {
                    color: "light-blue",
                    class: "hover:bg-white"
                  }, {
                    title: withCtx(() => [
                      createTextVNode("Settings")
                    ]),
                    icon: withCtx(() => [
                      createVNode(_component_t_cog_icon, { class: "w-12 h-12" })
                    ]),
                    content: withCtx(() => [
                      createTextVNode(" Definitions of System ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["href"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};

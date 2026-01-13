import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, reactive, useSSRContext } from "vue";
import { T as TBadge, A as AppLayout } from "./AppLayout-D0TyJNRu.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TContentCard } from "./TContentCard-BkuMOsLs.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faStar, faShieldAlt, faBan, faPlusCircle, faUserCircle, faUsers, faCog, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
library.add(faCheckCircle, faStar, faShieldAlt, faBan, faPlusCircle, faUserCircle, faUsers, faCog, faTrash);
const _sfc_main = {
  name: "Badge",
  components: {
    AppLayout,
    GridSection,
    TBadge,
    TContentCard
  },
  setup() {
    const tagBadge = reactive([
      { id: 1, label: "VueJS" },
      { id: 2, label: "Tailawindcss" },
      { id: 3, label: "Laravel" },
      { id: 4, label: "Javascript" },
      { id: 5, label: "CSS" }
    ]);
    const activeTagList = reactive([]);
    const passiveTagList = reactive([...tagBadge]);
    const tagBadgeCustomColor = reactive([
      { id: 1, label: "Urgent", status: true },
      { id: 2, label: "Low", status: true },
      { id: 3, label: "High", status: true },
      { id: 4, label: "Modarete", status: false },
      { id: 5, label: "Insignificant", status: false }
    ]);
    const addTag = (tag) => {
      activeTagList.push(tag);
      passiveTagList.splice(passiveTagList.findIndex((pt) => pt.id === tag.id), 1);
    };
    const deleteTag = (tag) => {
      passiveTagList.push(tag);
      activeTagList.splice(activeTagList.findIndex((pt) => pt.id === tag.id), 1);
    };
    return { tagBadge, tagBadgeCustomColor, activeTagList, addTag, deleteTag, passiveTagList };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_content_card = resolveComponent("t-content-card");
  const _component_t_badge = resolveComponent("t-badge");
  const _component_icon = resolveComponent("icon");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Badges" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Badges `);
      } else {
        return [
          createTextVNode(" Badges ")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Useful badges like price indicator,tags and etc `);
      } else {
        return [
          createTextVNode(" Useful badges like price indicator,tags and etc ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_grid_section, { col: 1 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_content_card, { width: 1 }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Custom Badges`);
                  } else {
                    return [
                      createTextVNode("Custom Badges")
                    ];
                  }
                }),
                subTitle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Color, radius, icon and value options`);
                  } else {
                    return [
                      createTextVNode("Color, radius, icon and value options")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_grid_section, {
                      "col-laptop": 2,
                      class: "dark:text-gray-100"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="flex flex-wrap justify-center md:justify-start items-center"${_scopeId4}><h2 class="font-semibold mr-4"${_scopeId4}>Filled</h2><div class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "filled",
                            color: "danger",
                            radius: 0,
                            class: "mt-2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`REJECTED`);
                              } else {
                                return [
                                  createTextVNode("REJECTED")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "filled",
                            color: "success"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`ACTIVE`);
                              } else {
                                return [
                                  createTextVNode("ACTIVE")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "filled",
                            color: "light",
                            "badge-value": "2.825,90 TRY"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`SALARY`);
                              } else {
                                return [
                                  createTextVNode("SALARY")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "filled",
                            color: "warning",
                            "badge-value": "8",
                            radius: 8
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_icon, {
                                  icon: "shield-alt",
                                  size: "sm"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_icon, {
                                    icon: "shield-alt",
                                    size: "sm"
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Attacks `);
                              } else {
                                return [
                                  createTextVNode(" Attacks ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div></div><div class="flex flex-wrap justify-center md:justify-start items-center"${_scopeId4}><h2 class="font-semibold mr-4"${_scopeId4}>Light</h2><div class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "light",
                            color: "info",
                            radius: 0,
                            class: "mt-2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`pending`);
                              } else {
                                return [
                                  createTextVNode("pending")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "light",
                            color: "violet",
                            "badge-value": "12"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`open tasks`);
                              } else {
                                return [
                                  createTextVNode("open tasks")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "light",
                            color: "pink",
                            "badge-value": "125",
                            radius: 8
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_icon, { icon: "user-circle" }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_icon, { icon: "user-circle" })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Staff `);
                              } else {
                                return [
                                  createTextVNode(" Staff ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div></div><div class="flex flex-wrap justify-center md:justify-start items-center"${_scopeId4}><h2 class="font-semibold mr-4"${_scopeId4}>Inline</h2><div class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "inline",
                            color: "green",
                            radius: 0,
                            class: "mt-2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`#tailwindcss `);
                              } else {
                                return [
                                  createTextVNode("#tailwindcss ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "inline",
                            color: "pink",
                            "badge-value": "1 Hr. 25 Min.",
                            radius: 2
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` London `);
                              } else {
                                return [
                                  createTextVNode(" London ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "inline",
                            color: "warning",
                            "badge-value": "2",
                            radius: 2
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_icon, {
                                  icon: "star",
                                  size: "sm"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_icon, {
                                    icon: "star",
                                    size: "sm"
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Awards `);
                              } else {
                                return [
                                  createTextVNode(" Awards ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div></div><div class="flex flex-wrap justify-center md:justify-start items-center"${_scopeId4}><h2 class="font-semibold mr-4"${_scopeId4}>Outline</h2><div class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "outline",
                            color: "success",
                            radius: 0,
                            class: "mt-2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Online`);
                              } else {
                                return [
                                  createTextVNode("Online")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "outline",
                            color: "danger"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Offline`);
                              } else {
                                return [
                                  createTextVNode("Offline")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "outline",
                            color: "warning",
                            "badge-value": "12 minutes"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Away`);
                              } else {
                                return [
                                  createTextVNode("Away")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "outline",
                            color: "success",
                            "badge-value": "+%2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`BTC`);
                              } else {
                                return [
                                  createTextVNode("BTC")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "outline",
                            color: "danger",
                            "badge-value": "-%1,8"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`ADA`);
                              } else {
                                return [
                                  createTextVNode("ADA")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div></div><div class="flex flex-wrap justify-center md:justify-start items-center"${_scopeId4}><h2 class="font-semibold mr-4"${_scopeId4}>Elegant</h2><div class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "elegant",
                            color: "success",
                            radius: 0,
                            class: "mt-2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Manager`);
                              } else {
                                return [
                                  createTextVNode("Manager")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "elegant",
                            color: "violet",
                            "badge-value": "12"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Engineer`);
                              } else {
                                return [
                                  createTextVNode("Engineer")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "elegant",
                            color: "warning",
                            "badge-value": "8",
                            radius: 6
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_icon, {
                                  icon: "cog",
                                  size: "sm"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_icon, {
                                    icon: "cog",
                                    size: "sm"
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Maintainer `);
                              } else {
                                return [
                                  createTextVNode(" Maintainer ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div></div><div class="flex flex-wrap justify-center md:justify-start items-center"${_scopeId4}><h2 class="font-semibold mr-4"${_scopeId4}>Block</h2><div class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "block",
                            color: "success",
                            radius: 0,
                            class: "mt-2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`PASSED`);
                              } else {
                                return [
                                  createTextVNode("PASSED")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "block",
                            color: "light",
                            "badge-value": "-3K TRY"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Prompt Cash`);
                              } else {
                                return [
                                  createTextVNode("Prompt Cash")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_badge, {
                            design: "block",
                            color: "danger",
                            "badge-value": "8",
                            radius: 8
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_icon, {
                                  icon: "trash",
                                  size: "sm"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_icon, {
                                    icon: "trash",
                                    size: "sm"
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Trash `);
                              } else {
                                return [
                                  createTextVNode(" Trash ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                              createVNode("h2", { class: "font-semibold mr-4" }, "Filled"),
                              createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                                createVNode(_component_t_badge, {
                                  design: "filled",
                                  color: "danger",
                                  radius: 0,
                                  class: "mt-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("REJECTED")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "filled",
                                  color: "success"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("ACTIVE")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "filled",
                                  color: "light",
                                  "badge-value": "2.825,90 TRY"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("SALARY")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "filled",
                                  color: "warning",
                                  "badge-value": "8",
                                  radius: 8
                                }, {
                                  icon: withCtx(() => [
                                    createVNode(_component_icon, {
                                      icon: "shield-alt",
                                      size: "sm"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createTextVNode(" Attacks ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                              createVNode("h2", { class: "font-semibold mr-4" }, "Light"),
                              createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                                createVNode(_component_t_badge, {
                                  design: "light",
                                  color: "info",
                                  radius: 0,
                                  class: "mt-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("pending")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "light",
                                  color: "violet",
                                  "badge-value": "12"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("open tasks")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "light",
                                  color: "pink",
                                  "badge-value": "125",
                                  radius: 8
                                }, {
                                  icon: withCtx(() => [
                                    createVNode(_component_icon, { icon: "user-circle" })
                                  ]),
                                  default: withCtx(() => [
                                    createTextVNode(" Staff ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                              createVNode("h2", { class: "font-semibold mr-4" }, "Inline"),
                              createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                                createVNode(_component_t_badge, {
                                  design: "inline",
                                  color: "green",
                                  radius: 0,
                                  class: "mt-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("#tailwindcss ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "inline",
                                  color: "pink",
                                  "badge-value": "1 Hr. 25 Min.",
                                  radius: 2
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" London ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "inline",
                                  color: "warning",
                                  "badge-value": "2",
                                  radius: 2
                                }, {
                                  icon: withCtx(() => [
                                    createVNode(_component_icon, {
                                      icon: "star",
                                      size: "sm"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createTextVNode(" Awards ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                              createVNode("h2", { class: "font-semibold mr-4" }, "Outline"),
                              createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                                createVNode(_component_t_badge, {
                                  design: "outline",
                                  color: "success",
                                  radius: 0,
                                  class: "mt-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Online")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "outline",
                                  color: "danger"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Offline")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "outline",
                                  color: "warning",
                                  "badge-value": "12 minutes"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Away")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "outline",
                                  color: "success",
                                  "badge-value": "+%2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("BTC")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "outline",
                                  color: "danger",
                                  "badge-value": "-%1,8"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("ADA")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                              createVNode("h2", { class: "font-semibold mr-4" }, "Elegant"),
                              createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                                createVNode(_component_t_badge, {
                                  design: "elegant",
                                  color: "success",
                                  radius: 0,
                                  class: "mt-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Manager")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "elegant",
                                  color: "violet",
                                  "badge-value": "12"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Engineer")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "elegant",
                                  color: "warning",
                                  "badge-value": "8",
                                  radius: 6
                                }, {
                                  icon: withCtx(() => [
                                    createVNode(_component_icon, {
                                      icon: "cog",
                                      size: "sm"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createTextVNode(" Maintainer ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                              createVNode("h2", { class: "font-semibold mr-4" }, "Block"),
                              createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                                createVNode(_component_t_badge, {
                                  design: "block",
                                  color: "success",
                                  radius: 0,
                                  class: "mt-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("PASSED")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "block",
                                  color: "light",
                                  "badge-value": "-3K TRY"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Prompt Cash")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_badge, {
                                  design: "block",
                                  color: "danger",
                                  "badge-value": "8",
                                  radius: 8
                                }, {
                                  icon: withCtx(() => [
                                    createVNode(_component_icon, {
                                      icon: "trash",
                                      size: "sm"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createTextVNode(" Trash ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_grid_section, {
                        "col-laptop": 2,
                        class: "dark:text-gray-100"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                            createVNode("h2", { class: "font-semibold mr-4" }, "Filled"),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                              createVNode(_component_t_badge, {
                                design: "filled",
                                color: "danger",
                                radius: 0,
                                class: "mt-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("REJECTED")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "filled",
                                color: "success"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("ACTIVE")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "filled",
                                color: "light",
                                "badge-value": "2.825,90 TRY"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("SALARY")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "filled",
                                color: "warning",
                                "badge-value": "8",
                                radius: 8
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_component_icon, {
                                    icon: "shield-alt",
                                    size: "sm"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" Attacks ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                            createVNode("h2", { class: "font-semibold mr-4" }, "Light"),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                              createVNode(_component_t_badge, {
                                design: "light",
                                color: "info",
                                radius: 0,
                                class: "mt-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("pending")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "light",
                                color: "violet",
                                "badge-value": "12"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("open tasks")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "light",
                                color: "pink",
                                "badge-value": "125",
                                radius: 8
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_component_icon, { icon: "user-circle" })
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" Staff ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                            createVNode("h2", { class: "font-semibold mr-4" }, "Inline"),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                              createVNode(_component_t_badge, {
                                design: "inline",
                                color: "green",
                                radius: 0,
                                class: "mt-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("#tailwindcss ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "inline",
                                color: "pink",
                                "badge-value": "1 Hr. 25 Min.",
                                radius: 2
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" London ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "inline",
                                color: "warning",
                                "badge-value": "2",
                                radius: 2
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_component_icon, {
                                    icon: "star",
                                    size: "sm"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" Awards ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                            createVNode("h2", { class: "font-semibold mr-4" }, "Outline"),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                              createVNode(_component_t_badge, {
                                design: "outline",
                                color: "success",
                                radius: 0,
                                class: "mt-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Online")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "outline",
                                color: "danger"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Offline")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "outline",
                                color: "warning",
                                "badge-value": "12 minutes"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Away")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "outline",
                                color: "success",
                                "badge-value": "+%2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("BTC")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "outline",
                                color: "danger",
                                "badge-value": "-%1,8"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("ADA")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                            createVNode("h2", { class: "font-semibold mr-4" }, "Elegant"),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                              createVNode(_component_t_badge, {
                                design: "elegant",
                                color: "success",
                                radius: 0,
                                class: "mt-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Manager")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "elegant",
                                color: "violet",
                                "badge-value": "12"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Engineer")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "elegant",
                                color: "warning",
                                "badge-value": "8",
                                radius: 6
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_component_icon, {
                                    icon: "cog",
                                    size: "sm"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" Maintainer ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                            createVNode("h2", { class: "font-semibold mr-4" }, "Block"),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                              createVNode(_component_t_badge, {
                                design: "block",
                                color: "success",
                                radius: 0,
                                class: "mt-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("PASSED")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "block",
                                color: "light",
                                "badge-value": "-3K TRY"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Prompt Cash")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_badge, {
                                design: "block",
                                color: "danger",
                                "badge-value": "8",
                                radius: 8
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_component_icon, {
                                    icon: "trash",
                                    size: "sm"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" Trash ")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_content_card, { width: 1 }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Selectable Badges `);
                  } else {
                    return [
                      createTextVNode(" Selectable Badges ")
                    ];
                  }
                }),
                subTitle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` It works like tag `);
                  } else {
                    return [
                      createTextVNode(" It works like tag ")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_grid_section, { "col-tablet": 2 }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="flex flex-col border border-dashed p-2"${_scopeId4}><h3 class="font-semibold dark:text-gray-100"${_scopeId4}>Tags:</h3><div class="flex flex-wrap space-x-2 justify-start items-center mt-2"${_scopeId4}><div class="flex flex-wrap border space-x-2 p-2 mb-2 w-full min-h-10"${_scopeId4}><!--[-->`);
                          ssrRenderList($setup.activeTagList, (tag, key) => {
                            _push5(ssrRenderComponent(_component_t_badge, {
                              color: "success",
                              design: "filled",
                              class: "my-2 cursor-pointer",
                              onClick: ($event) => $setup.deleteTag(tag),
                              key
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate(tag.label)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(tag.label), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]--></div><div class="flex flex-wrap"${_scopeId4}><!--[-->`);
                          ssrRenderList($setup.passiveTagList, (tag, key) => {
                            _push5(ssrRenderComponent(_component_t_badge, {
                              color: "light",
                              design: "filled",
                              class: "mb-2 mr-2 cursor-pointer",
                              onClick: ($event) => $setup.addTag(tag),
                              key
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate(tag.label)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(tag.label), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]--></div></div></div><div class="flex flex-col border border-dashed p-2"${_scopeId4}><h3 class="font-semibold dark:text-gray-100"${_scopeId4}>Custom Selected:</h3><div class="flex flex-wrap justify-start items-center mt-2"${_scopeId4}><!--[-->`);
                          ssrRenderList($setup.tagBadgeCustomColor, (tag, key) => {
                            _push5(ssrRenderComponent(_component_t_badge, {
                              "model-value": tag.status,
                              "select-active-style": { color: "success", design: "filled" },
                              "select-passive-style": { color: "light", design: "elegant" },
                              class: "mb-2 mr-2",
                              modelValue: tag.status,
                              "onUpdate:modelValue": ($event) => tag.status = $event,
                              selectable: "",
                              "select-indicator": "",
                              key
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate(tag.label)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(tag.label), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]--></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-col border border-dashed p-2" }, [
                              createVNode("h3", { class: "font-semibold dark:text-gray-100" }, "Tags:"),
                              createVNode("div", { class: "flex flex-wrap space-x-2 justify-start items-center mt-2" }, [
                                createVNode("div", { class: "flex flex-wrap border space-x-2 p-2 mb-2 w-full min-h-10" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList($setup.activeTagList, (tag, key) => {
                                    return openBlock(), createBlock(_component_t_badge, {
                                      color: "success",
                                      design: "filled",
                                      class: "my-2 cursor-pointer",
                                      onClick: ($event) => $setup.deleteTag(tag),
                                      key
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(tag.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "flex flex-wrap" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList($setup.passiveTagList, (tag, key) => {
                                    return openBlock(), createBlock(_component_t_badge, {
                                      color: "light",
                                      design: "filled",
                                      class: "mb-2 mr-2 cursor-pointer",
                                      onClick: ($event) => $setup.addTag(tag),
                                      key
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(tag.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]);
                                  }), 128))
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-col border border-dashed p-2" }, [
                              createVNode("h3", { class: "font-semibold dark:text-gray-100" }, "Custom Selected:"),
                              createVNode("div", { class: "flex flex-wrap justify-start items-center mt-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList($setup.tagBadgeCustomColor, (tag, key) => {
                                  return openBlock(), createBlock(_component_t_badge, {
                                    "model-value": tag.status,
                                    "select-active-style": { color: "success", design: "filled" },
                                    "select-passive-style": { color: "light", design: "elegant" },
                                    class: "mb-2 mr-2",
                                    modelValue: tag.status,
                                    "onUpdate:modelValue": ($event) => tag.status = $event,
                                    selectable: "",
                                    "select-indicator": "",
                                    key
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(tag.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["model-value", "modelValue", "onUpdate:modelValue"]);
                                }), 128))
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_grid_section, { "col-tablet": 2 }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col border border-dashed p-2" }, [
                            createVNode("h3", { class: "font-semibold dark:text-gray-100" }, "Tags:"),
                            createVNode("div", { class: "flex flex-wrap space-x-2 justify-start items-center mt-2" }, [
                              createVNode("div", { class: "flex flex-wrap border space-x-2 p-2 mb-2 w-full min-h-10" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList($setup.activeTagList, (tag, key) => {
                                  return openBlock(), createBlock(_component_t_badge, {
                                    color: "success",
                                    design: "filled",
                                    class: "my-2 cursor-pointer",
                                    onClick: ($event) => $setup.deleteTag(tag),
                                    key
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(tag.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 128))
                              ]),
                              createVNode("div", { class: "flex flex-wrap" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList($setup.passiveTagList, (tag, key) => {
                                  return openBlock(), createBlock(_component_t_badge, {
                                    color: "light",
                                    design: "filled",
                                    class: "mb-2 mr-2 cursor-pointer",
                                    onClick: ($event) => $setup.addTag(tag),
                                    key
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(tag.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 128))
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-col border border-dashed p-2" }, [
                            createVNode("h3", { class: "font-semibold dark:text-gray-100" }, "Custom Selected:"),
                            createVNode("div", { class: "flex flex-wrap justify-start items-center mt-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList($setup.tagBadgeCustomColor, (tag, key) => {
                                return openBlock(), createBlock(_component_t_badge, {
                                  "model-value": tag.status,
                                  "select-active-style": { color: "success", design: "filled" },
                                  "select-passive-style": { color: "light", design: "elegant" },
                                  class: "mb-2 mr-2",
                                  modelValue: tag.status,
                                  "onUpdate:modelValue": ($event) => tag.status = $event,
                                  selectable: "",
                                  "select-indicator": "",
                                  key
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(tag.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["model-value", "modelValue", "onUpdate:modelValue"]);
                              }), 128))
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_content_card, { width: 1 }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Collapsible Badges`);
                  } else {
                    return [
                      createTextVNode("Collapsible Badges")
                    ];
                  }
                }),
                subTitle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Click them`);
                  } else {
                    return [
                      createTextVNode("Click them")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-wrap space-x-4"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_t_badge, {
                      collapsible: true,
                      radius: 1,
                      color: "pink",
                      design: "filled"
                    }, {
                      icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_icon, { icon: "shield-alt" }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_icon, { icon: "shield-alt" })
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Super Admin `);
                        } else {
                          return [
                            createTextVNode(" Super Admin ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_badge, {
                      collapsible: true,
                      radius: 8,
                      color: "danger",
                      design: "filled"
                    }, {
                      icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_icon, { icon: "ban" }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_icon, { icon: "ban" })
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Restricted Area `);
                        } else {
                          return [
                            createTextVNode(" Restricted Area ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-wrap space-x-4" }, [
                        createVNode(_component_t_badge, {
                          collapsible: true,
                          radius: 1,
                          color: "pink",
                          design: "filled"
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_icon, { icon: "shield-alt" })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Super Admin ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_badge, {
                          collapsible: true,
                          radius: 8,
                          color: "danger",
                          design: "filled"
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_icon, { icon: "ban" })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Restricted Area ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_content_card, { width: 1 }, {
                  title: withCtx(() => [
                    createTextVNode("Custom Badges")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode("Color, radius, icon and value options")
                  ]),
                  content: withCtx(() => [
                    createVNode(_component_grid_section, {
                      "col-laptop": 2,
                      class: "dark:text-gray-100"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                          createVNode("h2", { class: "font-semibold mr-4" }, "Filled"),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                            createVNode(_component_t_badge, {
                              design: "filled",
                              color: "danger",
                              radius: 0,
                              class: "mt-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("REJECTED")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "filled",
                              color: "success"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("ACTIVE")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "filled",
                              color: "light",
                              "badge-value": "2.825,90 TRY"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("SALARY")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "filled",
                              color: "warning",
                              "badge-value": "8",
                              radius: 8
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_icon, {
                                  icon: "shield-alt",
                                  size: "sm"
                                })
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Attacks ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                          createVNode("h2", { class: "font-semibold mr-4" }, "Light"),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                            createVNode(_component_t_badge, {
                              design: "light",
                              color: "info",
                              radius: 0,
                              class: "mt-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("pending")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "light",
                              color: "violet",
                              "badge-value": "12"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("open tasks")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "light",
                              color: "pink",
                              "badge-value": "125",
                              radius: 8
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_icon, { icon: "user-circle" })
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Staff ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                          createVNode("h2", { class: "font-semibold mr-4" }, "Inline"),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                            createVNode(_component_t_badge, {
                              design: "inline",
                              color: "green",
                              radius: 0,
                              class: "mt-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("#tailwindcss ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "inline",
                              color: "pink",
                              "badge-value": "1 Hr. 25 Min.",
                              radius: 2
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" London ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "inline",
                              color: "warning",
                              "badge-value": "2",
                              radius: 2
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_icon, {
                                  icon: "star",
                                  size: "sm"
                                })
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Awards ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                          createVNode("h2", { class: "font-semibold mr-4" }, "Outline"),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                            createVNode(_component_t_badge, {
                              design: "outline",
                              color: "success",
                              radius: 0,
                              class: "mt-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Online")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "outline",
                              color: "danger"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Offline")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "outline",
                              color: "warning",
                              "badge-value": "12 minutes"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Away")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "outline",
                              color: "success",
                              "badge-value": "+%2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("BTC")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "outline",
                              color: "danger",
                              "badge-value": "-%1,8"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("ADA")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                          createVNode("h2", { class: "font-semibold mr-4" }, "Elegant"),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                            createVNode(_component_t_badge, {
                              design: "elegant",
                              color: "success",
                              radius: 0,
                              class: "mt-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Manager")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "elegant",
                              color: "violet",
                              "badge-value": "12"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Engineer")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "elegant",
                              color: "warning",
                              "badge-value": "8",
                              radius: 6
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_icon, {
                                  icon: "cog",
                                  size: "sm"
                                })
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Maintainer ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                          createVNode("h2", { class: "font-semibold mr-4" }, "Block"),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                            createVNode(_component_t_badge, {
                              design: "block",
                              color: "success",
                              radius: 0,
                              class: "mt-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("PASSED")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "block",
                              color: "light",
                              "badge-value": "-3K TRY"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Prompt Cash")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_badge, {
                              design: "block",
                              color: "danger",
                              "badge-value": "8",
                              radius: 8
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_icon, {
                                  icon: "trash",
                                  size: "sm"
                                })
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Trash ")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_t_content_card, { width: 1 }, {
                  title: withCtx(() => [
                    createTextVNode(" Selectable Badges ")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode(" It works like tag ")
                  ]),
                  content: withCtx(() => [
                    createVNode(_component_grid_section, { "col-tablet": 2 }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col border border-dashed p-2" }, [
                          createVNode("h3", { class: "font-semibold dark:text-gray-100" }, "Tags:"),
                          createVNode("div", { class: "flex flex-wrap space-x-2 justify-start items-center mt-2" }, [
                            createVNode("div", { class: "flex flex-wrap border space-x-2 p-2 mb-2 w-full min-h-10" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList($setup.activeTagList, (tag, key) => {
                                return openBlock(), createBlock(_component_t_badge, {
                                  color: "success",
                                  design: "filled",
                                  class: "my-2 cursor-pointer",
                                  onClick: ($event) => $setup.deleteTag(tag),
                                  key
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(tag.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "flex flex-wrap" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList($setup.passiveTagList, (tag, key) => {
                                return openBlock(), createBlock(_component_t_badge, {
                                  color: "light",
                                  design: "filled",
                                  class: "mb-2 mr-2 cursor-pointer",
                                  onClick: ($event) => $setup.addTag(tag),
                                  key
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(tag.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]);
                              }), 128))
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col border border-dashed p-2" }, [
                          createVNode("h3", { class: "font-semibold dark:text-gray-100" }, "Custom Selected:"),
                          createVNode("div", { class: "flex flex-wrap justify-start items-center mt-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList($setup.tagBadgeCustomColor, (tag, key) => {
                              return openBlock(), createBlock(_component_t_badge, {
                                "model-value": tag.status,
                                "select-active-style": { color: "success", design: "filled" },
                                "select-passive-style": { color: "light", design: "elegant" },
                                class: "mb-2 mr-2",
                                modelValue: tag.status,
                                "onUpdate:modelValue": ($event) => tag.status = $event,
                                selectable: "",
                                "select-indicator": "",
                                key
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(tag.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["model-value", "modelValue", "onUpdate:modelValue"]);
                            }), 128))
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_t_content_card, { width: 1 }, {
                  title: withCtx(() => [
                    createTextVNode("Collapsible Badges")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode("Click them")
                  ]),
                  content: withCtx(() => [
                    createVNode("div", { class: "flex flex-wrap space-x-4" }, [
                      createVNode(_component_t_badge, {
                        collapsible: true,
                        radius: 1,
                        color: "pink",
                        design: "filled"
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_icon, { icon: "shield-alt" })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Super Admin ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_badge, {
                        collapsible: true,
                        radius: 8,
                        color: "danger",
                        design: "filled"
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_icon, { icon: "ban" })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Restricted Area ")
                        ]),
                        _: 1
                      })
                    ])
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
          createVNode(_component_grid_section, { col: 1 }, {
            default: withCtx(() => [
              createVNode(_component_t_content_card, { width: 1 }, {
                title: withCtx(() => [
                  createTextVNode("Custom Badges")
                ]),
                subTitle: withCtx(() => [
                  createTextVNode("Color, radius, icon and value options")
                ]),
                content: withCtx(() => [
                  createVNode(_component_grid_section, {
                    "col-laptop": 2,
                    class: "dark:text-gray-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                        createVNode("h2", { class: "font-semibold mr-4" }, "Filled"),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                          createVNode(_component_t_badge, {
                            design: "filled",
                            color: "danger",
                            radius: 0,
                            class: "mt-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("REJECTED")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "filled",
                            color: "success"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("ACTIVE")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "filled",
                            color: "light",
                            "badge-value": "2.825,90 TRY"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("SALARY")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "filled",
                            color: "warning",
                            "badge-value": "8",
                            radius: 8
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_icon, {
                                icon: "shield-alt",
                                size: "sm"
                              })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Attacks ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                        createVNode("h2", { class: "font-semibold mr-4" }, "Light"),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                          createVNode(_component_t_badge, {
                            design: "light",
                            color: "info",
                            radius: 0,
                            class: "mt-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("pending")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "light",
                            color: "violet",
                            "badge-value": "12"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("open tasks")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "light",
                            color: "pink",
                            "badge-value": "125",
                            radius: 8
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_icon, { icon: "user-circle" })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Staff ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                        createVNode("h2", { class: "font-semibold mr-4" }, "Inline"),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                          createVNode(_component_t_badge, {
                            design: "inline",
                            color: "green",
                            radius: 0,
                            class: "mt-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("#tailwindcss ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "inline",
                            color: "pink",
                            "badge-value": "1 Hr. 25 Min.",
                            radius: 2
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" London ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "inline",
                            color: "warning",
                            "badge-value": "2",
                            radius: 2
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_icon, {
                                icon: "star",
                                size: "sm"
                              })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Awards ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                        createVNode("h2", { class: "font-semibold mr-4" }, "Outline"),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                          createVNode(_component_t_badge, {
                            design: "outline",
                            color: "success",
                            radius: 0,
                            class: "mt-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Online")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "outline",
                            color: "danger"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Offline")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "outline",
                            color: "warning",
                            "badge-value": "12 minutes"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Away")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "outline",
                            color: "success",
                            "badge-value": "+%2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("BTC")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "outline",
                            color: "danger",
                            "badge-value": "-%1,8"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("ADA")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                        createVNode("h2", { class: "font-semibold mr-4" }, "Elegant"),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                          createVNode(_component_t_badge, {
                            design: "elegant",
                            color: "success",
                            radius: 0,
                            class: "mt-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Manager")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "elegant",
                            color: "violet",
                            "badge-value": "12"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Engineer")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "elegant",
                            color: "warning",
                            "badge-value": "8",
                            radius: 6
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_icon, {
                                icon: "cog",
                                size: "sm"
                              })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Maintainer ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                        createVNode("h2", { class: "font-semibold mr-4" }, "Block"),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700" }, [
                          createVNode(_component_t_badge, {
                            design: "block",
                            color: "success",
                            radius: 0,
                            class: "mt-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("PASSED")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "block",
                            color: "light",
                            "badge-value": "-3K TRY"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Prompt Cash")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_badge, {
                            design: "block",
                            color: "danger",
                            "badge-value": "8",
                            radius: 8
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_icon, {
                                icon: "trash",
                                size: "sm"
                              })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Trash ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_t_content_card, { width: 1 }, {
                title: withCtx(() => [
                  createTextVNode(" Selectable Badges ")
                ]),
                subTitle: withCtx(() => [
                  createTextVNode(" It works like tag ")
                ]),
                content: withCtx(() => [
                  createVNode(_component_grid_section, { "col-tablet": 2 }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-col border border-dashed p-2" }, [
                        createVNode("h3", { class: "font-semibold dark:text-gray-100" }, "Tags:"),
                        createVNode("div", { class: "flex flex-wrap space-x-2 justify-start items-center mt-2" }, [
                          createVNode("div", { class: "flex flex-wrap border space-x-2 p-2 mb-2 w-full min-h-10" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList($setup.activeTagList, (tag, key) => {
                              return openBlock(), createBlock(_component_t_badge, {
                                color: "success",
                                design: "filled",
                                class: "my-2 cursor-pointer",
                                onClick: ($event) => $setup.deleteTag(tag),
                                key
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(tag.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 128))
                          ]),
                          createVNode("div", { class: "flex flex-wrap" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList($setup.passiveTagList, (tag, key) => {
                              return openBlock(), createBlock(_component_t_badge, {
                                color: "light",
                                design: "filled",
                                class: "mb-2 mr-2 cursor-pointer",
                                onClick: ($event) => $setup.addTag(tag),
                                key
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(tag.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 128))
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col border border-dashed p-2" }, [
                        createVNode("h3", { class: "font-semibold dark:text-gray-100" }, "Custom Selected:"),
                        createVNode("div", { class: "flex flex-wrap justify-start items-center mt-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList($setup.tagBadgeCustomColor, (tag, key) => {
                            return openBlock(), createBlock(_component_t_badge, {
                              "model-value": tag.status,
                              "select-active-style": { color: "success", design: "filled" },
                              "select-passive-style": { color: "light", design: "elegant" },
                              class: "mb-2 mr-2",
                              modelValue: tag.status,
                              "onUpdate:modelValue": ($event) => tag.status = $event,
                              selectable: "",
                              "select-indicator": "",
                              key
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(tag.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["model-value", "modelValue", "onUpdate:modelValue"]);
                          }), 128))
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_t_content_card, { width: 1 }, {
                title: withCtx(() => [
                  createTextVNode("Collapsible Badges")
                ]),
                subTitle: withCtx(() => [
                  createTextVNode("Click them")
                ]),
                content: withCtx(() => [
                  createVNode("div", { class: "flex flex-wrap space-x-4" }, [
                    createVNode(_component_t_badge, {
                      collapsible: true,
                      radius: 1,
                      color: "pink",
                      design: "filled"
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_icon, { icon: "shield-alt" })
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Super Admin ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_badge, {
                      collapsible: true,
                      radius: 8,
                      color: "danger",
                      design: "filled"
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_icon, { icon: "ban" })
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Restricted Area ")
                      ]),
                      _: 1
                    })
                  ])
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
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Badge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Badge as default
};

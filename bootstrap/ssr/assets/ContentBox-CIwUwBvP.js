import { A as AppLayout } from "./AppLayout-D0TyJNRu.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TContentCard } from "./TContentCard-BkuMOsLs.js";
import { T as TUserGroupIcon } from "./TUserGroupIcon-AYKEEw32.js";
import { T as TAvatar } from "./TAvatar-Cw8URzx6.js";
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
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
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  name: "ContentBox",
  components: {
    TAvatar,
    TUserGroupIcon,
    TContentCard,
    GridSection,
    AppLayout
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_content_card = resolveComponent("t-content-card");
  const _component_t_user_group_icon = resolveComponent("t-user-group-icon");
  const _component_t_avatar = resolveComponent("t-avatar");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Content Card`);
      } else {
        return [
          createTextVNode("Content Card")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`It is a shell for your content`);
      } else {
        return [
          createTextVNode("It is a shell for your content")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_grid_section, {
          col: 2,
          gap: 4
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_content_card, null, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Users`);
                  } else {
                    return [
                      createTextVNode("Users")
                    ];
                  }
                }),
                icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_user_group_icon, { class: "w-12 h-12" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_user_group_icon, { class: "w-12 h-12" })
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` 255 user/s `);
                  } else {
                    return [
                      createTextVNode(" 255 user/s ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_content_card, { color: "gradient-gray-to-pink" }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Sinan AYDOĞAN`);
                  } else {
                    return [
                      createTextVNode("Sinan AYDOĞAN")
                    ];
                  }
                }),
                icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_avatar, {
                      slot: "icon",
                      radius: 8,
                      size: 4,
                      src: "https://i.pravatar.cc/300"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_avatar, {
                        slot: "icon",
                        radius: 8,
                        size: 4,
                        src: "https://i.pravatar.cc/300"
                      })
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Developer `);
                  } else {
                    return [
                      createTextVNode(" Developer ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_content_card, null, {
                  title: withCtx(() => [
                    createTextVNode("Users")
                  ]),
                  icon: withCtx(() => [
                    createVNode(_component_t_user_group_icon, { class: "w-12 h-12" })
                  ]),
                  content: withCtx(() => [
                    createTextVNode(" 255 user/s ")
                  ]),
                  _: 1
                }),
                createVNode(_component_t_content_card, { color: "gradient-gray-to-pink" }, {
                  title: withCtx(() => [
                    createTextVNode("Sinan AYDOĞAN")
                  ]),
                  icon: withCtx(() => [
                    createVNode(_component_t_avatar, {
                      slot: "icon",
                      radius: 8,
                      size: 4,
                      src: "https://i.pravatar.cc/300"
                    })
                  ]),
                  content: withCtx(() => [
                    createTextVNode(" Developer ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_grid_section, {
          col: 3,
          gap: 4
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_content_card, {
                border: true,
                line: true,
                radius: 0,
                width: 1
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Content Card Component Title `);
                  } else {
                    return [
                      createTextVNode(" Content Card Component Title ")
                    ];
                  }
                }),
                subTitle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Solid, Light and Gradient Color Options `);
                  } else {
                    return [
                      createTextVNode(" Solid, Light and Gradient Color Options ")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed posuere, mauris et dapibus tincidunt. <div class="flex flex-col justify-center w-full mt-6 gap-4"${_scopeId3}></div>`);
                  } else {
                    return [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed posuere, mauris et dapibus tincidunt. "),
                      createVNode("div", { class: "flex flex-col justify-center w-full mt-6 gap-4" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_content_card, {
                border: true,
                line: true,
                radius: 3,
                width: 1,
                color: "solid-red"
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Adaptive Height: False `);
                  } else {
                    return [
                      createTextVNode(" Adaptive Height: False ")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus metus enim. In vestibulum sit amet felis vitae ornare. <div class="flex flex-col justify-center w-full mt-6 gap-4"${_scopeId3}></div>`);
                  } else {
                    return [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus metus enim. In vestibulum sit amet felis vitae ornare. "),
                      createVNode("div", { class: "flex flex-col justify-center w-full mt-6 gap-4" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_content_card, {
                "adaptive-height": true,
                border: true,
                line: false,
                radius: 6,
                width: 1,
                color: "light-indigo"
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Adaptive Height: True `);
                  } else {
                    return [
                      createTextVNode(" Adaptive Height: True ")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed posuere, mauris et dapibus tincidunt. <div class="flex flex-col justify-center w-full mt-6 gap-4"${_scopeId3}></div>`);
                  } else {
                    return [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed posuere, mauris et dapibus tincidunt. "),
                      createVNode("div", { class: "flex flex-col justify-center w-full mt-6 gap-4" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_content_card, {
                  border: true,
                  line: true,
                  radius: 0,
                  width: 1
                }, {
                  title: withCtx(() => [
                    createTextVNode(" Content Card Component Title ")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode(" Solid, Light and Gradient Color Options ")
                  ]),
                  content: withCtx(() => [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed posuere, mauris et dapibus tincidunt. "),
                    createVNode("div", { class: "flex flex-col justify-center w-full mt-6 gap-4" })
                  ]),
                  _: 1
                }),
                createVNode(_component_t_content_card, {
                  border: true,
                  line: true,
                  radius: 3,
                  width: 1,
                  color: "solid-red"
                }, {
                  title: withCtx(() => [
                    createTextVNode(" Adaptive Height: False ")
                  ]),
                  content: withCtx(() => [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus metus enim. In vestibulum sit amet felis vitae ornare. "),
                    createVNode("div", { class: "flex flex-col justify-center w-full mt-6 gap-4" })
                  ]),
                  _: 1
                }),
                createVNode(_component_t_content_card, {
                  "adaptive-height": true,
                  border: true,
                  line: false,
                  radius: 6,
                  width: 1,
                  color: "light-indigo"
                }, {
                  title: withCtx(() => [
                    createTextVNode(" Adaptive Height: True ")
                  ]),
                  content: withCtx(() => [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed posuere, mauris et dapibus tincidunt. "),
                    createVNode("div", { class: "flex flex-col justify-center w-full mt-6 gap-4" })
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
          createVNode(_component_grid_section, {
            col: 2,
            gap: 4
          }, {
            default: withCtx(() => [
              createVNode(_component_t_content_card, null, {
                title: withCtx(() => [
                  createTextVNode("Users")
                ]),
                icon: withCtx(() => [
                  createVNode(_component_t_user_group_icon, { class: "w-12 h-12" })
                ]),
                content: withCtx(() => [
                  createTextVNode(" 255 user/s ")
                ]),
                _: 1
              }),
              createVNode(_component_t_content_card, { color: "gradient-gray-to-pink" }, {
                title: withCtx(() => [
                  createTextVNode("Sinan AYDOĞAN")
                ]),
                icon: withCtx(() => [
                  createVNode(_component_t_avatar, {
                    slot: "icon",
                    radius: 8,
                    size: 4,
                    src: "https://i.pravatar.cc/300"
                  })
                ]),
                content: withCtx(() => [
                  createTextVNode(" Developer ")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_grid_section, {
            col: 3,
            gap: 4
          }, {
            default: withCtx(() => [
              createVNode(_component_t_content_card, {
                border: true,
                line: true,
                radius: 0,
                width: 1
              }, {
                title: withCtx(() => [
                  createTextVNode(" Content Card Component Title ")
                ]),
                subTitle: withCtx(() => [
                  createTextVNode(" Solid, Light and Gradient Color Options ")
                ]),
                content: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed posuere, mauris et dapibus tincidunt. "),
                  createVNode("div", { class: "flex flex-col justify-center w-full mt-6 gap-4" })
                ]),
                _: 1
              }),
              createVNode(_component_t_content_card, {
                border: true,
                line: true,
                radius: 3,
                width: 1,
                color: "solid-red"
              }, {
                title: withCtx(() => [
                  createTextVNode(" Adaptive Height: False ")
                ]),
                content: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus metus enim. In vestibulum sit amet felis vitae ornare. "),
                  createVNode("div", { class: "flex flex-col justify-center w-full mt-6 gap-4" })
                ]),
                _: 1
              }),
              createVNode(_component_t_content_card, {
                "adaptive-height": true,
                border: true,
                line: false,
                radius: 6,
                width: 1,
                color: "light-indigo"
              }, {
                title: withCtx(() => [
                  createTextVNode(" Adaptive Height: True ")
                ]),
                content: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed posuere, mauris et dapibus tincidunt. "),
                  createVNode("div", { class: "flex flex-col justify-center w-full mt-6 gap-4" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/ContentBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ContentBox as default
};

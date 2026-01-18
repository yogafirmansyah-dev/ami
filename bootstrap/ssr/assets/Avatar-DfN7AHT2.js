import { defineComponent, mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createTextVNode, toDisplayString } from "vue";
import { A as AppLayout } from "./AppLayout-BXpqpYTS.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TAvatar } from "./TAvatar-DS29Kv5n.js";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { T as TCodeShowcase } from "./TCodeShowcase-DOKY_97q.js";
import { useI18n } from "vue-i18n/dist/vue-i18n.esm-bundler";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./windowSizeCalculator-Ch6zBFfA.js";
import "./TDropdown-CRaizlei.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main$1 = defineComponent({
  name: "TAvatarGroup"
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "avatar-group-container" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Avatar/TAvatarGroup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TAvatarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  name: "Avatar",
  components: {
    AppLayout,
    GridSection,
    TAvatar,
    TAvatarGroup,
    TCodeShowcase
  },
  setup() {
    const { tm } = useI18n({
      inheritLocale: true,
      messages: {
        en: {
          pageTitle: "Avatar",
          pageSubTitle: "User avatars and team members avatar group",
          docDefault: "Default Value",
          docDescription: "Description",
          docType: "Value Type",
          docOptions: "Options",
          docSrcDesc: "The path of the photo.",
          docSizeDesc: "The size of the photo.",
          docRadiusDesc: "It shapes the corners of the avatar.",
          docIndicatorDesc: `It works to show a indicator point near the avatar. You should define the values of the options in this object. Sample: :indicator="{ color: 'success', label: 2, position: 'lb' }" `,
          docLinkDesc: 'When the user clicks on the avatar, it directs them to the link you want." '
        },
        tr: {
          pageTitle: "Profil Resmi",
          pageSubTitle: "Profil resmi ve ekip üyeleri resimlerinin gösterimi",
          docDefault: "Varsayılan Değer",
          docDescription: "Detay",
          docType: "Değer Türü",
          docOptions: "Alabileceği Değerler",
          docSrcDesc: "Profil fotoğrafının adresi.",
          docSizeDesc: "Profil fotoğrafının büyüklüğü.",
          docRadiusDesc: "Profil resminin köşelerinin ovalliğini kontrol etmenizi sağlar.",
          docIndicatorDesc: `Profil resminin kenarında bildirim simgesi göstermenizi sağlar. Alabileceği değerler listesindeki değerleri bu obje içinde tanımlamanız gereklidir. Örnek: :indicator="{ color: 'success', label: 2, position: 'lb' }"`,
          docLinkDesc: 'Kullanıcının profil resmini tıkladığında istediğin linke yönlenmesini sağlar."'
        }
      }
    });
    const docProps = {
      headers: [
        { id: "prop", label: "Prop" },
        { id: "type", label: tm("docType") },
        { id: "options", label: tm("docOptions"), colorfulBg: true },
        { id: "default", label: tm("docDefault") },
        { id: "description", label: tm("docDescription") }
      ],
      content: [
        {
          id: "src",
          prop: "src",
          type: "String",
          description: tm("docSrcDesc")
        },
        {
          id: "size",
          prop: "size",
          type: "Number",
          options: ["1", "2", "3", "4", "5", "6", "7", "8"],
          default: "3",
          description: tm("docSizeDesc")
        },
        {
          id: "radius",
          prop: "radius",
          type: "Number",
          options: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
          default: "3",
          description: tm("docRadiusDesc")
        },
        {
          id: "indicator",
          prop: "indicator",
          type: "Object",
          options: ["color (success, danger, info, warning, purple, light)", "label (String)", "position (lb, rb, lt, rt)"],
          description: tm("docIndicatorDesc")
        },
        {
          id: "link",
          prop: "link",
          type: "String",
          description: tm("docLinkDesc")
        }
      ]
    };
    const docSamples = {
      simple: {
        js: "import TAvatar from '@/Components/Alert/TAvatar.vue'\n\nexport default {\n    components: { TAvatar },\n    setup() {\n    },\n}",
        template: '<t-avatar\n    :radius="3"\n    src="https://i.pravatar.cc/300?img=0"\n    >\n</t-avatar>'
      },
      group: {
        js: "import TAvatar from '@/Components/Alert/TAvatar.vue'\nimport TAvatarGroup from '@/Components/Alert/TAvatarGroup.vue'\n\nexport default {\n    components: { TAvatar, TAvatarGroup },\n    setup() {\n    },\n}",
        template: `<t-avatar-group>

    <t-avatar
        :radius="8"
        src="https://i.pravatar.cc/300?img=0"
        link="https://test.com"
        >
    </t-avatar>

    <t-avatar
        :radius="8"
        src="https://i.pravatar.cc/300?img=2"
        :link="route('profile')"
        >
    </t-avatar>

</t-avatar-group>`
      },
      size: {
        js: "import TAvatar from '@/Components/Alert/TAvatar.vue'\n\nexport default {\n    components: { TAvatar },\n    setup() {\n    },\n}",
        template: '<t-avatar\n    :size="5"\n    src="https://i.pravatar.cc/300?img=0"\n    >\n</t-avatar>'
      },
      indicator: {
        js: "import TAvatar from '@/Components/Alert/TAvatar.vue'\n\nexport default {\n    components: { TAvatar },\n    setup() {\n    },\n}",
        template: `<t-avatar
    :radius="3"
    src="https://i.pravatar.cc/300?img=0"
    :indicator="{
            color: 'success',
            label: 7,
            position: 'rt'
        }"
    >
</t-avatar>`
      }
    };
    const showcaseTabs = [
      { id: "js", label: "JS", type: "code", codeLang: "javascript" },
      { id: "template", label: "Template", type: "code", codeLang: "html" },
      { id: "props", label: "Props", type: "table", table: docProps }
    ];
    return { tm, docSamples, docProps, showcaseTabs };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_code_showcase = resolveComponent("t-code-showcase");
  const _component_t_avatar = resolveComponent("t-avatar");
  const _component_t_avatar_group = resolveComponent("t-avatar-group");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({
    title: _ctx.tm("pageTitle")
  }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.tm("pageTitle"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.tm("pageTitle")), 1)
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.tm("pageSubTitle"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.tm("pageSubTitle")), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_grid_section, {
          "col-phone": 1,
          "col-desktop": 2
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_code_showcase, { tabs: _ctx.showcaseTabs }, {
                js: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate(_ctx.docSamples.simple.js)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.docSamples.simple.js), 1)
                    ];
                  }
                }),
                template: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate(_ctx.docSamples.simple.template)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.docSamples.simple.template), 1)
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-wrap gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_t_avatar, {
                      radius: 0,
                      src: "https://i.pravatar.cc/300?img=0"
                    }, null, _parent4, _scopeId3));
                    _push4(`<!--[-->`);
                    ssrRenderList(8, (i) => {
                      _push4(ssrRenderComponent(_component_t_avatar, {
                        key: i,
                        radius: i,
                        src: "https://i.pravatar.cc/300?img=" + i
                      }, null, _parent4, _scopeId3));
                    });
                    _push4(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-wrap gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4" }, [
                        createVNode(_component_t_avatar, {
                          radius: 0,
                          src: "https://i.pravatar.cc/300?img=0"
                        }),
                        (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                          return createVNode(_component_t_avatar, {
                            key: i,
                            radius: i,
                            src: "https://i.pravatar.cc/300?img=" + i
                          }, null, 8, ["radius", "src"]);
                        }), 64))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_code_showcase, { tabs: _ctx.showcaseTabs }, {
                js: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate(_ctx.docSamples.group.js)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.docSamples.group.js), 1)
                    ];
                  }
                }),
                template: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate(_ctx.docSamples.group.template)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.docSamples.group.template), 1)
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-wrap gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_t_avatar_group, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<!--[-->`);
                          ssrRenderList(8, (i) => {
                            _push5(ssrRenderComponent(_component_t_avatar, {
                              key: i,
                              radius: 8,
                              src: "https://i.pravatar.cc/300?img=" + i
                            }, null, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                              return createVNode(_component_t_avatar, {
                                key: i,
                                radius: 8,
                                src: "https://i.pravatar.cc/300?img=" + i
                              }, null, 8, ["src"]);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-wrap gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4" }, [
                        createVNode(_component_t_avatar_group, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                              return createVNode(_component_t_avatar, {
                                key: i,
                                radius: 8,
                                src: "https://i.pravatar.cc/300?img=" + i
                              }, null, 8, ["src"]);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_code_showcase, { tabs: _ctx.showcaseTabs }, {
                js: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate(_ctx.docSamples.size.js)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.docSamples.size.js), 1)
                    ];
                  }
                }),
                template: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate(_ctx.docSamples.size.template)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.docSamples.size.template), 1)
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-wrap place-items-end gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4"${_scopeId3}><!--[-->`);
                    ssrRenderList(8, (i) => {
                      _push4(ssrRenderComponent(_component_t_avatar, {
                        key: i,
                        radius: 3,
                        size: 9 - i,
                        src: "https://i.pravatar.cc/300?img=" + i
                      }, null, _parent4, _scopeId3));
                    });
                    _push4(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-wrap place-items-end gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                          return createVNode(_component_t_avatar, {
                            key: i,
                            radius: 3,
                            size: 9 - i,
                            src: "https://i.pravatar.cc/300?img=" + i
                          }, null, 8, ["size", "src"]);
                        }), 64))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_code_showcase, { tabs: _ctx.showcaseTabs }, {
                js: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate(_ctx.docSamples.indicator.js)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.docSamples.indicator.js), 1)
                    ];
                  }
                }),
                template: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate(_ctx.docSamples.indicator.template)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.docSamples.indicator.template), 1)
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-wrap place-items-end gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_t_avatar, {
                      indicator: {
                        color: "pink",
                        label: 2,
                        position: "rb"
                      },
                      radius: 8,
                      size: 8,
                      src: "https://i.pravatar.cc/300?img=8"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_avatar, {
                      indicator: {
                        color: "light",
                        label: 12,
                        position: "lb"
                      },
                      radius: 7,
                      size: 7,
                      src: "https://i.pravatar.cc/300?img=5"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_avatar, {
                      indicator: {
                        color: "danger",
                        label: 85,
                        position: "rt"
                      },
                      radius: 6,
                      size: 6,
                      src: "https://i.pravatar.cc/300?img=4"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_avatar, {
                      indicator: {
                        color: "purple",
                        label: 7,
                        position: "rt"
                      },
                      radius: 5,
                      size: 5,
                      src: "https://i.pravatar.cc/300?img=3"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_avatar, {
                      indicator: {
                        color: "warning",
                        label: 14,
                        position: "lb"
                      },
                      radius: 4,
                      size: 4,
                      src: "https://i.pravatar.cc/300?img=2"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_avatar, {
                      indicator: {
                        color: "success",
                        position: "rb"
                      },
                      radius: 3,
                      size: 3,
                      src: "https://i.pravatar.cc/300?img=1"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_avatar, {
                      indicator: {
                        color: "info",
                        label: 2,
                        position: "lt"
                      },
                      radius: 2,
                      size: 2,
                      src: "https://i.pravatar.cc/300?img=0"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_avatar, {
                      indicator: {
                        color: "danger",
                        label: 2,
                        position: "lb"
                      },
                      radius: 1,
                      size: 1
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-wrap place-items-end gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4" }, [
                        createVNode(_component_t_avatar, {
                          indicator: {
                            color: "pink",
                            label: 2,
                            position: "rb"
                          },
                          radius: 8,
                          size: 8,
                          src: "https://i.pravatar.cc/300?img=8"
                        }),
                        createVNode(_component_t_avatar, {
                          indicator: {
                            color: "light",
                            label: 12,
                            position: "lb"
                          },
                          radius: 7,
                          size: 7,
                          src: "https://i.pravatar.cc/300?img=5"
                        }),
                        createVNode(_component_t_avatar, {
                          indicator: {
                            color: "danger",
                            label: 85,
                            position: "rt"
                          },
                          radius: 6,
                          size: 6,
                          src: "https://i.pravatar.cc/300?img=4"
                        }),
                        createVNode(_component_t_avatar, {
                          indicator: {
                            color: "purple",
                            label: 7,
                            position: "rt"
                          },
                          radius: 5,
                          size: 5,
                          src: "https://i.pravatar.cc/300?img=3"
                        }),
                        createVNode(_component_t_avatar, {
                          indicator: {
                            color: "warning",
                            label: 14,
                            position: "lb"
                          },
                          radius: 4,
                          size: 4,
                          src: "https://i.pravatar.cc/300?img=2"
                        }),
                        createVNode(_component_t_avatar, {
                          indicator: {
                            color: "success",
                            position: "rb"
                          },
                          radius: 3,
                          size: 3,
                          src: "https://i.pravatar.cc/300?img=1"
                        }),
                        createVNode(_component_t_avatar, {
                          indicator: {
                            color: "info",
                            label: 2,
                            position: "lt"
                          },
                          radius: 2,
                          size: 2,
                          src: "https://i.pravatar.cc/300?img=0"
                        }),
                        createVNode(_component_t_avatar, {
                          indicator: {
                            color: "danger",
                            label: 2,
                            position: "lb"
                          },
                          radius: 1,
                          size: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_code_showcase, { tabs: _ctx.showcaseTabs }, {
                  js: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.docSamples.simple.js), 1)
                  ]),
                  template: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.docSamples.simple.template), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-wrap gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4" }, [
                      createVNode(_component_t_avatar, {
                        radius: 0,
                        src: "https://i.pravatar.cc/300?img=0"
                      }),
                      (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                        return createVNode(_component_t_avatar, {
                          key: i,
                          radius: i,
                          src: "https://i.pravatar.cc/300?img=" + i
                        }, null, 8, ["radius", "src"]);
                      }), 64))
                    ])
                  ]),
                  _: 1
                }, 8, ["tabs"]),
                createVNode(_component_t_code_showcase, { tabs: _ctx.showcaseTabs }, {
                  js: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.docSamples.group.js), 1)
                  ]),
                  template: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.docSamples.group.template), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-wrap gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4" }, [
                      createVNode(_component_t_avatar_group, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                            return createVNode(_component_t_avatar, {
                              key: i,
                              radius: 8,
                              src: "https://i.pravatar.cc/300?img=" + i
                            }, null, 8, ["src"]);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["tabs"]),
                createVNode(_component_t_code_showcase, { tabs: _ctx.showcaseTabs }, {
                  js: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.docSamples.size.js), 1)
                  ]),
                  template: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.docSamples.size.template), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-wrap place-items-end gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                        return createVNode(_component_t_avatar, {
                          key: i,
                          radius: 3,
                          size: 9 - i,
                          src: "https://i.pravatar.cc/300?img=" + i
                        }, null, 8, ["size", "src"]);
                      }), 64))
                    ])
                  ]),
                  _: 1
                }, 8, ["tabs"]),
                createVNode(_component_t_code_showcase, { tabs: _ctx.showcaseTabs }, {
                  js: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.docSamples.indicator.js), 1)
                  ]),
                  template: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.docSamples.indicator.template), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-wrap place-items-end gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4" }, [
                      createVNode(_component_t_avatar, {
                        indicator: {
                          color: "pink",
                          label: 2,
                          position: "rb"
                        },
                        radius: 8,
                        size: 8,
                        src: "https://i.pravatar.cc/300?img=8"
                      }),
                      createVNode(_component_t_avatar, {
                        indicator: {
                          color: "light",
                          label: 12,
                          position: "lb"
                        },
                        radius: 7,
                        size: 7,
                        src: "https://i.pravatar.cc/300?img=5"
                      }),
                      createVNode(_component_t_avatar, {
                        indicator: {
                          color: "danger",
                          label: 85,
                          position: "rt"
                        },
                        radius: 6,
                        size: 6,
                        src: "https://i.pravatar.cc/300?img=4"
                      }),
                      createVNode(_component_t_avatar, {
                        indicator: {
                          color: "purple",
                          label: 7,
                          position: "rt"
                        },
                        radius: 5,
                        size: 5,
                        src: "https://i.pravatar.cc/300?img=3"
                      }),
                      createVNode(_component_t_avatar, {
                        indicator: {
                          color: "warning",
                          label: 14,
                          position: "lb"
                        },
                        radius: 4,
                        size: 4,
                        src: "https://i.pravatar.cc/300?img=2"
                      }),
                      createVNode(_component_t_avatar, {
                        indicator: {
                          color: "success",
                          position: "rb"
                        },
                        radius: 3,
                        size: 3,
                        src: "https://i.pravatar.cc/300?img=1"
                      }),
                      createVNode(_component_t_avatar, {
                        indicator: {
                          color: "info",
                          label: 2,
                          position: "lt"
                        },
                        radius: 2,
                        size: 2,
                        src: "https://i.pravatar.cc/300?img=0"
                      }),
                      createVNode(_component_t_avatar, {
                        indicator: {
                          color: "danger",
                          label: 2,
                          position: "lb"
                        },
                        radius: 1,
                        size: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["tabs"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_grid_section, {
            "col-phone": 1,
            "col-desktop": 2
          }, {
            default: withCtx(() => [
              createVNode(_component_t_code_showcase, { tabs: _ctx.showcaseTabs }, {
                js: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.docSamples.simple.js), 1)
                ]),
                template: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.docSamples.simple.template), 1)
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-wrap gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4" }, [
                    createVNode(_component_t_avatar, {
                      radius: 0,
                      src: "https://i.pravatar.cc/300?img=0"
                    }),
                    (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                      return createVNode(_component_t_avatar, {
                        key: i,
                        radius: i,
                        src: "https://i.pravatar.cc/300?img=" + i
                      }, null, 8, ["radius", "src"]);
                    }), 64))
                  ])
                ]),
                _: 1
              }, 8, ["tabs"]),
              createVNode(_component_t_code_showcase, { tabs: _ctx.showcaseTabs }, {
                js: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.docSamples.group.js), 1)
                ]),
                template: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.docSamples.group.template), 1)
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-wrap gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4" }, [
                    createVNode(_component_t_avatar_group, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                          return createVNode(_component_t_avatar, {
                            key: i,
                            radius: 8,
                            src: "https://i.pravatar.cc/300?img=" + i
                          }, null, 8, ["src"]);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["tabs"]),
              createVNode(_component_t_code_showcase, { tabs: _ctx.showcaseTabs }, {
                js: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.docSamples.size.js), 1)
                ]),
                template: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.docSamples.size.template), 1)
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-wrap place-items-end gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                      return createVNode(_component_t_avatar, {
                        key: i,
                        radius: 3,
                        size: 9 - i,
                        src: "https://i.pravatar.cc/300?img=" + i
                      }, null, 8, ["size", "src"]);
                    }), 64))
                  ])
                ]),
                _: 1
              }, 8, ["tabs"]),
              createVNode(_component_t_code_showcase, { tabs: _ctx.showcaseTabs }, {
                js: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.docSamples.indicator.js), 1)
                ]),
                template: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.docSamples.indicator.template), 1)
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-wrap place-items-end gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4" }, [
                    createVNode(_component_t_avatar, {
                      indicator: {
                        color: "pink",
                        label: 2,
                        position: "rb"
                      },
                      radius: 8,
                      size: 8,
                      src: "https://i.pravatar.cc/300?img=8"
                    }),
                    createVNode(_component_t_avatar, {
                      indicator: {
                        color: "light",
                        label: 12,
                        position: "lb"
                      },
                      radius: 7,
                      size: 7,
                      src: "https://i.pravatar.cc/300?img=5"
                    }),
                    createVNode(_component_t_avatar, {
                      indicator: {
                        color: "danger",
                        label: 85,
                        position: "rt"
                      },
                      radius: 6,
                      size: 6,
                      src: "https://i.pravatar.cc/300?img=4"
                    }),
                    createVNode(_component_t_avatar, {
                      indicator: {
                        color: "purple",
                        label: 7,
                        position: "rt"
                      },
                      radius: 5,
                      size: 5,
                      src: "https://i.pravatar.cc/300?img=3"
                    }),
                    createVNode(_component_t_avatar, {
                      indicator: {
                        color: "warning",
                        label: 14,
                        position: "lb"
                      },
                      radius: 4,
                      size: 4,
                      src: "https://i.pravatar.cc/300?img=2"
                    }),
                    createVNode(_component_t_avatar, {
                      indicator: {
                        color: "success",
                        position: "rb"
                      },
                      radius: 3,
                      size: 3,
                      src: "https://i.pravatar.cc/300?img=1"
                    }),
                    createVNode(_component_t_avatar, {
                      indicator: {
                        color: "info",
                        label: 2,
                        position: "lt"
                      },
                      radius: 2,
                      size: 2,
                      src: "https://i.pravatar.cc/300?img=0"
                    }),
                    createVNode(_component_t_avatar, {
                      indicator: {
                        color: "danger",
                        label: 2,
                        position: "lb"
                      },
                      radius: 1,
                      size: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["tabs"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Avatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Avatar as default
};

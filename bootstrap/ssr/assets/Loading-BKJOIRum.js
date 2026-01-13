import { A as AppLayout, b as TLoading } from "./AppLayout-D0TyJNRu.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TContentCard } from "./TContentCard-BkuMOsLs.js";
import { a as _sfc_main$1 } from "./TButton-oXLR37ud.js";
import { defineComponent, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, ref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main = defineComponent({
  name: "Modal",
  components: {
    TLoading,
    AppLayout,
    GridSection,
    TButton: _sfc_main$1,
    TContentCard
  },
  setup() {
    const selectedColor = ref("gray");
    const showLoadingScreenSimpleCogs = ref(false);
    const showLoadingScreenSimpleBars = ref(false);
    const showLoadingScreenSimpleDots = ref(false);
    const showLoadingScreenCloseable = ref(false);
    const showLoadingScreenTimed = ref(false);
    const colors = [
      { key: "black", label: "Black" },
      { key: "blue", label: "Blue" },
      { key: "gray", label: "Gray" },
      { key: "green", label: "Green" },
      { key: "indigo", label: "Indigo" },
      { key: "pink", label: "Pink" },
      { key: "purple", label: "Purple" },
      { key: "white", label: "White" },
      { key: "yellow", label: "Yellow" }
    ];
    const changeColor = (color) => {
      selectedColor.value = color;
    };
    return {
      selectedColor,
      changeColor,
      colors,
      showLoadingScreenSimpleBars,
      showLoadingScreenSimpleDots,
      showLoadingScreenSimpleCogs,
      showLoadingScreenCloseable,
      showLoadingScreenTimed
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_content_card = resolveComponent("t-content-card");
  const _component_t_button = resolveComponent("t-button");
  const _component_t_loading = resolveComponent("t-loading");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Loading Animations and Screens`);
      } else {
        return [
          createTextVNode("Loading Animations and Screens")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pretty and sweet loading indicators`);
      } else {
        return [
          createTextVNode("Pretty and sweet loading indicators")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_grid_section, { "col-desktop": 1 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_content_card, { width: 1 }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Click to the buttons for loading screens`);
                  } else {
                    return [
                      createTextVNode("Click to the buttons for loading screens")
                    ];
                  }
                }),
                subTitle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`2 animations for buttons&#39; inside and a lot of loading screen options`);
                  } else {
                    return [
                      createTextVNode("2 animations for buttons' inside and a lot of loading screen options")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-wrap gap-2 mt-4 items-center justify-start"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_t_button, {
                      design: "filled",
                      color: "green",
                      type: "button",
                      onClick: ($event) => _ctx.showLoadingScreenSimpleCogs = !_ctx.showLoadingScreenSimpleCogs
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Show Loading Screen with Cogs `);
                        } else {
                          return [
                            createTextVNode(" Show Loading Screen with Cogs ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_loading, {
                      radius: 3,
                      "loading-design": "cogs",
                      color: "white",
                      modelValue: _ctx.showLoadingScreenSimpleCogs,
                      "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenSimpleCogs = $event,
                      closeable: ""
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_button, {
                      design: "filled",
                      color: "indigo",
                      type: "button",
                      onClick: ($event) => _ctx.showLoadingScreenSimpleBars = !_ctx.showLoadingScreenSimpleBars
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Show Loading Screen with Bars `);
                        } else {
                          return [
                            createTextVNode(" Show Loading Screen with Bars ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_loading, {
                      radius: 3,
                      "loading-design": "three-bars",
                      color: "indigo",
                      modelValue: _ctx.showLoadingScreenSimpleBars,
                      "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenSimpleBars = $event,
                      closeable: ""
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_button, {
                      design: "filled",
                      color: "blue",
                      type: "button",
                      onClick: ($event) => _ctx.showLoadingScreenSimpleDots = !_ctx.showLoadingScreenSimpleDots
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Show Loading Screen with Dots `);
                        } else {
                          return [
                            createTextVNode(" Show Loading Screen with Dots ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_loading, {
                      radius: 3,
                      "loading-design": "three-dots",
                      color: "blue",
                      modelValue: _ctx.showLoadingScreenSimpleDots,
                      "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenSimpleDots = $event,
                      closeable: ""
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_button, {
                      design: "light",
                      color: "black",
                      type: "button",
                      onClick: ($event) => _ctx.showLoadingScreenCloseable = !_ctx.showLoadingScreenCloseable
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Closeable Loading Screen `);
                        } else {
                          return [
                            createTextVNode(" Closeable Loading Screen ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_loading, {
                      closeable: "",
                      radius: 3,
                      color: _ctx.selectedColor,
                      modelValue: _ctx.showLoadingScreenCloseable,
                      "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenCloseable = $event
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="flex flex-col"${_scopeId4}><div class="flex"${_scopeId4}><img src="https://camo.githubusercontent.com/8321556a8c584594e7eeed9625375cc4639ebbde4bd527b8d150cb212d95dbf6/68747470733a2f2f7461696c61646d696e2e6465762f696d672f6d6973632f30315f7461696c61646d696e2e6a7067"${_scopeId4}></div><div class="flex flex-col m-auto"${_scopeId4}><div class="flex flex-row max-w-min mx-auto mt-4 overflow-hidden justify-center bg-gradient-to-tr from-white to-gray-300 p-2 rounded-lg flex-shrink-0 flex-grow-0"${_scopeId4}><!--[-->`);
                          ssrRenderList(_ctx.colors, (color) => {
                            _push5(ssrRenderComponent(_component_t_button, {
                              size: "small",
                              design: "filled",
                              class: "first:rounded-l-lg last:rounded-r-lg overflow-hidden shadow-lg ring-0 active:ring-0 focus:ring-0",
                              radius: 0,
                              type: "button",
                              color: color.key,
                              onClick: ($event) => _ctx.changeColor(color.key)
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate(color.label)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(color.label), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]--></div><div class="flex w-full justify-center font-semibold text-gray-700 flex-shrink-0 flex-grow-0"${_scopeId4}><span class="flex bg-gradient-to-b from-gray-400 to-white px-2 rounded-b-lg"${_scopeId4}>Color Options</span></div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("div", { class: "flex" }, [
                                createVNode("img", { src: "https://camo.githubusercontent.com/8321556a8c584594e7eeed9625375cc4639ebbde4bd527b8d150cb212d95dbf6/68747470733a2f2f7461696c61646d696e2e6465762f696d672f6d6973632f30315f7461696c61646d696e2e6a7067" })
                              ]),
                              createVNode("div", { class: "flex flex-col m-auto" }, [
                                createVNode("div", { class: "flex flex-row max-w-min mx-auto mt-4 overflow-hidden justify-center bg-gradient-to-tr from-white to-gray-300 p-2 rounded-lg flex-shrink-0 flex-grow-0" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colors, (color) => {
                                    return openBlock(), createBlock(_component_t_button, {
                                      size: "small",
                                      design: "filled",
                                      class: "first:rounded-l-lg last:rounded-r-lg overflow-hidden shadow-lg ring-0 active:ring-0 focus:ring-0",
                                      radius: 0,
                                      type: "button",
                                      color: color.key,
                                      onClick: ($event) => _ctx.changeColor(color.key)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(color.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "onClick"]);
                                  }), 256))
                                ]),
                                createVNode("div", { class: "flex w-full justify-center font-semibold text-gray-700 flex-shrink-0 flex-grow-0" }, [
                                  createVNode("span", { class: "flex bg-gradient-to-b from-gray-400 to-white px-2 rounded-b-lg" }, "Color Options")
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_button, {
                      design: "outline",
                      color: "red",
                      type: "button",
                      onClick: ($event) => _ctx.showLoadingScreenTimed = !_ctx.showLoadingScreenTimed
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Timed Loading Screen For Close `);
                        } else {
                          return [
                            createTextVNode(" Timed Loading Screen For Close ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_loading, {
                      timer: 6e3,
                      radius: 3,
                      color: _ctx.selectedColor,
                      modelValue: _ctx.showLoadingScreenTimed,
                      "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenTimed = $event
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="flex flex-col"${_scopeId4}><div class="mb-4"${_scopeId4}><div class="flex mx-auto justify-center font-semibold text-lg text-gray-800"${_scopeId4}><span class="flex bg-gradient-to-tl from-gray-100 to-white px-2 pt-1 rounded-t-lg"${_scopeId4}>Color Options</span></div><div class="flex flex-row max-w-min mx-auto overflow-hidden bg-gradient-to-tl from-gray-300 to-white p-2 rounded-lg"${_scopeId4}><!--[-->`);
                          ssrRenderList(_ctx.colors, (color) => {
                            _push5(ssrRenderComponent(_component_t_button, {
                              design: "filled",
                              class: "first:rounded-l-lg last:rounded-r-lg overflow-hidden shadow-lg ring-0 active:ring-0 focus:ring-0",
                              radius: 0,
                              type: "button",
                              color: color.key,
                              onClick: ($event) => _ctx.changeColor(color.key)
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate(color.label)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(color.label), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]--></div></div><img alt="Demo" class="flex mx-auto h-1/2 w-1/2" src="https://images.unsplash.com/photo-1585251172245-4e87f155fc30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"${_scopeId4}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("div", { class: "flex mx-auto justify-center font-semibold text-lg text-gray-800" }, [
                                  createVNode("span", { class: "flex bg-gradient-to-tl from-gray-100 to-white px-2 pt-1 rounded-t-lg" }, "Color Options")
                                ]),
                                createVNode("div", { class: "flex flex-row max-w-min mx-auto overflow-hidden bg-gradient-to-tl from-gray-300 to-white p-2 rounded-lg" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colors, (color) => {
                                    return openBlock(), createBlock(_component_t_button, {
                                      design: "filled",
                                      class: "first:rounded-l-lg last:rounded-r-lg overflow-hidden shadow-lg ring-0 active:ring-0 focus:ring-0",
                                      radius: 0,
                                      type: "button",
                                      color: color.key,
                                      onClick: ($event) => _ctx.changeColor(color.key)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(color.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "onClick"]);
                                  }), 256))
                                ])
                              ]),
                              createVNode("img", {
                                alt: "Demo",
                                class: "flex mx-auto h-1/2 w-1/2",
                                src: "https://images.unsplash.com/photo-1585251172245-4e87f155fc30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-wrap gap-2 mt-4 items-center justify-start" }, [
                        createVNode(_component_t_button, {
                          design: "filled",
                          color: "green",
                          type: "button",
                          onClick: ($event) => _ctx.showLoadingScreenSimpleCogs = !_ctx.showLoadingScreenSimpleCogs
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Show Loading Screen with Cogs ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_t_loading, {
                          radius: 3,
                          "loading-design": "cogs",
                          color: "white",
                          modelValue: _ctx.showLoadingScreenSimpleCogs,
                          "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenSimpleCogs = $event,
                          closeable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_t_button, {
                          design: "filled",
                          color: "indigo",
                          type: "button",
                          onClick: ($event) => _ctx.showLoadingScreenSimpleBars = !_ctx.showLoadingScreenSimpleBars
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Show Loading Screen with Bars ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_t_loading, {
                          radius: 3,
                          "loading-design": "three-bars",
                          color: "indigo",
                          modelValue: _ctx.showLoadingScreenSimpleBars,
                          "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenSimpleBars = $event,
                          closeable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_t_button, {
                          design: "filled",
                          color: "blue",
                          type: "button",
                          onClick: ($event) => _ctx.showLoadingScreenSimpleDots = !_ctx.showLoadingScreenSimpleDots
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Show Loading Screen with Dots ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_t_loading, {
                          radius: 3,
                          "loading-design": "three-dots",
                          color: "blue",
                          modelValue: _ctx.showLoadingScreenSimpleDots,
                          "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenSimpleDots = $event,
                          closeable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_t_button, {
                          design: "light",
                          color: "black",
                          type: "button",
                          onClick: ($event) => _ctx.showLoadingScreenCloseable = !_ctx.showLoadingScreenCloseable
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Closeable Loading Screen ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_t_loading, {
                          closeable: "",
                          radius: 3,
                          color: _ctx.selectedColor,
                          modelValue: _ctx.showLoadingScreenCloseable,
                          "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenCloseable = $event
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("div", { class: "flex" }, [
                                createVNode("img", { src: "https://camo.githubusercontent.com/8321556a8c584594e7eeed9625375cc4639ebbde4bd527b8d150cb212d95dbf6/68747470733a2f2f7461696c61646d696e2e6465762f696d672f6d6973632f30315f7461696c61646d696e2e6a7067" })
                              ]),
                              createVNode("div", { class: "flex flex-col m-auto" }, [
                                createVNode("div", { class: "flex flex-row max-w-min mx-auto mt-4 overflow-hidden justify-center bg-gradient-to-tr from-white to-gray-300 p-2 rounded-lg flex-shrink-0 flex-grow-0" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colors, (color) => {
                                    return openBlock(), createBlock(_component_t_button, {
                                      size: "small",
                                      design: "filled",
                                      class: "first:rounded-l-lg last:rounded-r-lg overflow-hidden shadow-lg ring-0 active:ring-0 focus:ring-0",
                                      radius: 0,
                                      type: "button",
                                      color: color.key,
                                      onClick: ($event) => _ctx.changeColor(color.key)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(color.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "onClick"]);
                                  }), 256))
                                ]),
                                createVNode("div", { class: "flex w-full justify-center font-semibold text-gray-700 flex-shrink-0 flex-grow-0" }, [
                                  createVNode("span", { class: "flex bg-gradient-to-b from-gray-400 to-white px-2 rounded-b-lg" }, "Color Options")
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["color", "modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_t_button, {
                          design: "outline",
                          color: "red",
                          type: "button",
                          onClick: ($event) => _ctx.showLoadingScreenTimed = !_ctx.showLoadingScreenTimed
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Timed Loading Screen For Close ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_t_loading, {
                          timer: 6e3,
                          radius: 3,
                          color: _ctx.selectedColor,
                          modelValue: _ctx.showLoadingScreenTimed,
                          "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenTimed = $event
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("div", { class: "flex mx-auto justify-center font-semibold text-lg text-gray-800" }, [
                                  createVNode("span", { class: "flex bg-gradient-to-tl from-gray-100 to-white px-2 pt-1 rounded-t-lg" }, "Color Options")
                                ]),
                                createVNode("div", { class: "flex flex-row max-w-min mx-auto overflow-hidden bg-gradient-to-tl from-gray-300 to-white p-2 rounded-lg" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colors, (color) => {
                                    return openBlock(), createBlock(_component_t_button, {
                                      design: "filled",
                                      class: "first:rounded-l-lg last:rounded-r-lg overflow-hidden shadow-lg ring-0 active:ring-0 focus:ring-0",
                                      radius: 0,
                                      type: "button",
                                      color: color.key,
                                      onClick: ($event) => _ctx.changeColor(color.key)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(color.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "onClick"]);
                                  }), 256))
                                ])
                              ]),
                              createVNode("img", {
                                alt: "Demo",
                                class: "flex mx-auto h-1/2 w-1/2",
                                src: "https://images.unsplash.com/photo-1585251172245-4e87f155fc30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                              })
                            ])
                          ]),
                          _: 1
                        }, 8, ["color", "modelValue", "onUpdate:modelValue"])
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
                    createTextVNode("Click to the buttons for loading screens")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode("2 animations for buttons' inside and a lot of loading screen options")
                  ]),
                  content: withCtx(() => [
                    createVNode("div", { class: "flex flex-wrap gap-2 mt-4 items-center justify-start" }, [
                      createVNode(_component_t_button, {
                        design: "filled",
                        color: "green",
                        type: "button",
                        onClick: ($event) => _ctx.showLoadingScreenSimpleCogs = !_ctx.showLoadingScreenSimpleCogs
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Show Loading Screen with Cogs ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_t_loading, {
                        radius: 3,
                        "loading-design": "cogs",
                        color: "white",
                        modelValue: _ctx.showLoadingScreenSimpleCogs,
                        "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenSimpleCogs = $event,
                        closeable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_t_button, {
                        design: "filled",
                        color: "indigo",
                        type: "button",
                        onClick: ($event) => _ctx.showLoadingScreenSimpleBars = !_ctx.showLoadingScreenSimpleBars
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Show Loading Screen with Bars ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_t_loading, {
                        radius: 3,
                        "loading-design": "three-bars",
                        color: "indigo",
                        modelValue: _ctx.showLoadingScreenSimpleBars,
                        "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenSimpleBars = $event,
                        closeable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_t_button, {
                        design: "filled",
                        color: "blue",
                        type: "button",
                        onClick: ($event) => _ctx.showLoadingScreenSimpleDots = !_ctx.showLoadingScreenSimpleDots
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Show Loading Screen with Dots ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_t_loading, {
                        radius: 3,
                        "loading-design": "three-dots",
                        color: "blue",
                        modelValue: _ctx.showLoadingScreenSimpleDots,
                        "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenSimpleDots = $event,
                        closeable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_t_button, {
                        design: "light",
                        color: "black",
                        type: "button",
                        onClick: ($event) => _ctx.showLoadingScreenCloseable = !_ctx.showLoadingScreenCloseable
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Closeable Loading Screen ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_t_loading, {
                        closeable: "",
                        radius: 3,
                        color: _ctx.selectedColor,
                        modelValue: _ctx.showLoadingScreenCloseable,
                        "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenCloseable = $event
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "flex" }, [
                              createVNode("img", { src: "https://camo.githubusercontent.com/8321556a8c584594e7eeed9625375cc4639ebbde4bd527b8d150cb212d95dbf6/68747470733a2f2f7461696c61646d696e2e6465762f696d672f6d6973632f30315f7461696c61646d696e2e6a7067" })
                            ]),
                            createVNode("div", { class: "flex flex-col m-auto" }, [
                              createVNode("div", { class: "flex flex-row max-w-min mx-auto mt-4 overflow-hidden justify-center bg-gradient-to-tr from-white to-gray-300 p-2 rounded-lg flex-shrink-0 flex-grow-0" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colors, (color) => {
                                  return openBlock(), createBlock(_component_t_button, {
                                    size: "small",
                                    design: "filled",
                                    class: "first:rounded-l-lg last:rounded-r-lg overflow-hidden shadow-lg ring-0 active:ring-0 focus:ring-0",
                                    radius: 0,
                                    type: "button",
                                    color: color.key,
                                    onClick: ($event) => _ctx.changeColor(color.key)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(color.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color", "onClick"]);
                                }), 256))
                              ]),
                              createVNode("div", { class: "flex w-full justify-center font-semibold text-gray-700 flex-shrink-0 flex-grow-0" }, [
                                createVNode("span", { class: "flex bg-gradient-to-b from-gray-400 to-white px-2 rounded-b-lg" }, "Color Options")
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["color", "modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_t_button, {
                        design: "outline",
                        color: "red",
                        type: "button",
                        onClick: ($event) => _ctx.showLoadingScreenTimed = !_ctx.showLoadingScreenTimed
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Timed Loading Screen For Close ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_t_loading, {
                        timer: 6e3,
                        radius: 3,
                        color: _ctx.selectedColor,
                        modelValue: _ctx.showLoadingScreenTimed,
                        "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenTimed = $event
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("div", { class: "flex mx-auto justify-center font-semibold text-lg text-gray-800" }, [
                                createVNode("span", { class: "flex bg-gradient-to-tl from-gray-100 to-white px-2 pt-1 rounded-t-lg" }, "Color Options")
                              ]),
                              createVNode("div", { class: "flex flex-row max-w-min mx-auto overflow-hidden bg-gradient-to-tl from-gray-300 to-white p-2 rounded-lg" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colors, (color) => {
                                  return openBlock(), createBlock(_component_t_button, {
                                    design: "filled",
                                    class: "first:rounded-l-lg last:rounded-r-lg overflow-hidden shadow-lg ring-0 active:ring-0 focus:ring-0",
                                    radius: 0,
                                    type: "button",
                                    color: color.key,
                                    onClick: ($event) => _ctx.changeColor(color.key)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(color.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color", "onClick"]);
                                }), 256))
                              ])
                            ]),
                            createVNode("img", {
                              alt: "Demo",
                              class: "flex mx-auto h-1/2 w-1/2",
                              src: "https://images.unsplash.com/photo-1585251172245-4e87f155fc30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["color", "modelValue", "onUpdate:modelValue"])
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
          createVNode(_component_grid_section, { "col-desktop": 1 }, {
            default: withCtx(() => [
              createVNode(_component_t_content_card, { width: 1 }, {
                title: withCtx(() => [
                  createTextVNode("Click to the buttons for loading screens")
                ]),
                subTitle: withCtx(() => [
                  createTextVNode("2 animations for buttons' inside and a lot of loading screen options")
                ]),
                content: withCtx(() => [
                  createVNode("div", { class: "flex flex-wrap gap-2 mt-4 items-center justify-start" }, [
                    createVNode(_component_t_button, {
                      design: "filled",
                      color: "green",
                      type: "button",
                      onClick: ($event) => _ctx.showLoadingScreenSimpleCogs = !_ctx.showLoadingScreenSimpleCogs
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Show Loading Screen with Cogs ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_t_loading, {
                      radius: 3,
                      "loading-design": "cogs",
                      color: "white",
                      modelValue: _ctx.showLoadingScreenSimpleCogs,
                      "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenSimpleCogs = $event,
                      closeable: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_t_button, {
                      design: "filled",
                      color: "indigo",
                      type: "button",
                      onClick: ($event) => _ctx.showLoadingScreenSimpleBars = !_ctx.showLoadingScreenSimpleBars
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Show Loading Screen with Bars ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_t_loading, {
                      radius: 3,
                      "loading-design": "three-bars",
                      color: "indigo",
                      modelValue: _ctx.showLoadingScreenSimpleBars,
                      "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenSimpleBars = $event,
                      closeable: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_t_button, {
                      design: "filled",
                      color: "blue",
                      type: "button",
                      onClick: ($event) => _ctx.showLoadingScreenSimpleDots = !_ctx.showLoadingScreenSimpleDots
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Show Loading Screen with Dots ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_t_loading, {
                      radius: 3,
                      "loading-design": "three-dots",
                      color: "blue",
                      modelValue: _ctx.showLoadingScreenSimpleDots,
                      "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenSimpleDots = $event,
                      closeable: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_t_button, {
                      design: "light",
                      color: "black",
                      type: "button",
                      onClick: ($event) => _ctx.showLoadingScreenCloseable = !_ctx.showLoadingScreenCloseable
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Closeable Loading Screen ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_t_loading, {
                      closeable: "",
                      radius: 3,
                      color: _ctx.selectedColor,
                      modelValue: _ctx.showLoadingScreenCloseable,
                      "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenCloseable = $event
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("div", { class: "flex" }, [
                            createVNode("img", { src: "https://camo.githubusercontent.com/8321556a8c584594e7eeed9625375cc4639ebbde4bd527b8d150cb212d95dbf6/68747470733a2f2f7461696c61646d696e2e6465762f696d672f6d6973632f30315f7461696c61646d696e2e6a7067" })
                          ]),
                          createVNode("div", { class: "flex flex-col m-auto" }, [
                            createVNode("div", { class: "flex flex-row max-w-min mx-auto mt-4 overflow-hidden justify-center bg-gradient-to-tr from-white to-gray-300 p-2 rounded-lg flex-shrink-0 flex-grow-0" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colors, (color) => {
                                return openBlock(), createBlock(_component_t_button, {
                                  size: "small",
                                  design: "filled",
                                  class: "first:rounded-l-lg last:rounded-r-lg overflow-hidden shadow-lg ring-0 active:ring-0 focus:ring-0",
                                  radius: 0,
                                  type: "button",
                                  color: color.key,
                                  onClick: ($event) => _ctx.changeColor(color.key)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(color.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color", "onClick"]);
                              }), 256))
                            ]),
                            createVNode("div", { class: "flex w-full justify-center font-semibold text-gray-700 flex-shrink-0 flex-grow-0" }, [
                              createVNode("span", { class: "flex bg-gradient-to-b from-gray-400 to-white px-2 rounded-b-lg" }, "Color Options")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["color", "modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_t_button, {
                      design: "outline",
                      color: "red",
                      type: "button",
                      onClick: ($event) => _ctx.showLoadingScreenTimed = !_ctx.showLoadingScreenTimed
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Timed Loading Screen For Close ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_t_loading, {
                      timer: 6e3,
                      radius: 3,
                      color: _ctx.selectedColor,
                      modelValue: _ctx.showLoadingScreenTimed,
                      "onUpdate:modelValue": ($event) => _ctx.showLoadingScreenTimed = $event
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("div", { class: "flex mx-auto justify-center font-semibold text-lg text-gray-800" }, [
                              createVNode("span", { class: "flex bg-gradient-to-tl from-gray-100 to-white px-2 pt-1 rounded-t-lg" }, "Color Options")
                            ]),
                            createVNode("div", { class: "flex flex-row max-w-min mx-auto overflow-hidden bg-gradient-to-tl from-gray-300 to-white p-2 rounded-lg" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colors, (color) => {
                                return openBlock(), createBlock(_component_t_button, {
                                  design: "filled",
                                  class: "first:rounded-l-lg last:rounded-r-lg overflow-hidden shadow-lg ring-0 active:ring-0 focus:ring-0",
                                  radius: 0,
                                  type: "button",
                                  color: color.key,
                                  onClick: ($event) => _ctx.changeColor(color.key)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(color.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color", "onClick"]);
                              }), 256))
                            ])
                          ]),
                          createVNode("img", {
                            alt: "Demo",
                            class: "flex mx-auto h-1/2 w-1/2",
                            src: "https://images.unsplash.com/photo-1585251172245-4e87f155fc30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["color", "modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Loading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Loading = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Loading as default
};

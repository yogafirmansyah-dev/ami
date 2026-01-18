import { A as AppLayout } from "./AppLayout-3kkfgqRQ.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { d as _sfc_main$1 } from "./windowSizeCalculator-BWfQvLaG.js";
import { T as TContentCard } from "./TContentCard-DJ3stJrh.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createBlock, openBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./TDropdown-8S66trQc.js";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-BYbkHFXz.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  name: "Button",
  components: { AppLayout, GridSection, TButton: _sfc_main$1, TContentCard },
  data() {
    return {
      colors: ["solid-red", "solid-blue", "solid-green", "solid-yellow", "solid-indigo", "solid-pink", "solid-purple", "solid-gray", "solid-black", "solid-white", "light-red", "light-blue", "light-green", "light-yellow", "light-indigo", "light-pink", "light-purple", "light-gray"]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_content_card = resolveComponent("t-content-card");
  const _component_t_button = resolveComponent("t-button");
  const _component_t_contentCard = resolveComponent("t-contentCard");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Buttons" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Buttons`);
      } else {
        return [
          createTextVNode("Buttons")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`For all use (1.296 variations)`);
      } else {
        return [
          createTextVNode("For all use (1.296 variations)")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_grid_section, { "col-tablet": 1 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_content_card, { width: 1 }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Sample Buttons`);
                  } else {
                    return [
                      createTextVNode("Sample Buttons")
                    ];
                  }
                }),
                subTitle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Color, radius, icon, size, disabled, loading, extended and group options`);
                  } else {
                    return [
                      createTextVNode("Color, radius, icon, size, disabled, loading, extended and group options")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_grid_section, { "col-laptop": 2 }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="flex flex-wrap justify-center md:justify-start items-center"${_scopeId4}><h2 class="font-semibold mr-4"${_scopeId4}>Styles</h2><div class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 0,
                            class: "mt-2",
                            color: "green"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Filled`);
                              } else {
                                return [
                                  createTextVNode("Filled")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 2,
                            design: "light",
                            color: "pink"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId5}></path></svg> Light `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Light ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 1,
                            design: "light",
                            border: "",
                            color: "indigo"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId5}></path></svg> Light with border `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Light with border ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 3,
                            design: "outline",
                            color: "yellow"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Outline`);
                              } else {
                                return [
                                  createTextVNode("Outline")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            design: "link",
                            color: "blue"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Link`);
                              } else {
                                return [
                                  createTextVNode("Link")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            design: "link-plus",
                            color: "gray"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId5}></path></svg> Link Plus `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Link Plus ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div></div><div class="flex flex-wrap justify-center md:justify-start items-center"${_scopeId4}><h2 class="font-semibold mr-4"${_scopeId4}>Disabled</h2><div class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 0,
                            class: "mt-2",
                            color: "green",
                            disabled: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Filled`);
                              } else {
                                return [
                                  createTextVNode("Filled")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 2,
                            design: "light",
                            color: "pink",
                            disabled: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId5}></path></svg> Light `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Light ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 1,
                            design: "light",
                            border: "",
                            color: "indigo",
                            disabled: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId5}></path></svg> Light with border `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Light with border ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 3,
                            design: "outline",
                            color: "yellow",
                            disabled: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Outline`);
                              } else {
                                return [
                                  createTextVNode("Outline")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            design: "link",
                            color: "blue",
                            disabled: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Link`);
                              } else {
                                return [
                                  createTextVNode("Link")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            design: "link-plus",
                            color: "gray",
                            disabled: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId5}></path></svg> Link Plus `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Link Plus ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div></div><div class="flex flex-wrap justify-center md:justify-start items-center"${_scopeId4}><h2 class="font-semibold mr-4"${_scopeId4}>Loading</h2><div class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 2,
                            design: "filled",
                            color: "pink",
                            "loading-with-content": "",
                            class: "mt-2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`With Text`);
                              } else {
                                return [
                                  createTextVNode("With Text")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 2,
                            design: "light",
                            color: "pink",
                            loading: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId5}></path></svg> Light `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Light ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 3,
                            design: "outline",
                            color: "yellow",
                            loading: "",
                            "loading-design": "three-dots"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Outline`);
                              } else {
                                return [
                                  createTextVNode("Outline")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            design: "link",
                            color: "blue",
                            loading: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Link`);
                              } else {
                                return [
                                  createTextVNode("Link")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            design: "link-plus",
                            color: "gray",
                            loading: "",
                            "loading-design": "three-dots"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId5}></path></svg> Link Plus `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Link Plus ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div></div><div class="flex flex-wrap justify-center md:justify-start items-center"${_scopeId4}><h2 class="font-semibold mr-4"${_scopeId4}>Icon Buttons</h2><div class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 0,
                            color: "pink",
                            class: "mt-2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId5}></path></svg>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ]))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 3,
                            design: "light",
                            color: "indigo"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId5}></path></svg>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ]))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 5,
                            design: "link",
                            color: "yellow"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId5}></path></svg>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ]))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_button, {
                            radius: 8,
                            design: "link-plus",
                            color: "red"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId5}></path></svg>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ]))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                              createVNode("h2", { class: "font-semibold mr-4" }, "Styles"),
                              createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                                createVNode(_component_t_button, {
                                  radius: 0,
                                  class: "mt-2",
                                  color: "green"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Filled")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  radius: 2,
                                  design: "light",
                                  color: "pink"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-6 h-6",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2"
                                      })
                                    ])),
                                    createTextVNode(" Light ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  radius: 1,
                                  design: "light",
                                  border: "",
                                  color: "indigo"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-6 h-6",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2"
                                      })
                                    ])),
                                    createTextVNode(" Light with border ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  radius: 3,
                                  design: "outline",
                                  color: "yellow"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Outline")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  design: "link",
                                  color: "blue"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Link")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  design: "link-plus",
                                  color: "gray"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-6 h-6",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2"
                                      })
                                    ])),
                                    createTextVNode(" Link Plus ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                              createVNode("h2", { class: "font-semibold mr-4" }, "Disabled"),
                              createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                                createVNode(_component_t_button, {
                                  radius: 0,
                                  class: "mt-2",
                                  color: "green",
                                  disabled: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Filled")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  radius: 2,
                                  design: "light",
                                  color: "pink",
                                  disabled: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-6 h-6",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2"
                                      })
                                    ])),
                                    createTextVNode(" Light ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  radius: 1,
                                  design: "light",
                                  border: "",
                                  color: "indigo",
                                  disabled: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-6 h-6",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2"
                                      })
                                    ])),
                                    createTextVNode(" Light with border ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  radius: 3,
                                  design: "outline",
                                  color: "yellow",
                                  disabled: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Outline")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  design: "link",
                                  color: "blue",
                                  disabled: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Link")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  design: "link-plus",
                                  color: "gray",
                                  disabled: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-6 h-6",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2"
                                      })
                                    ])),
                                    createTextVNode(" Link Plus ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                              createVNode("h2", { class: "font-semibold mr-4" }, "Loading"),
                              createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                                createVNode(_component_t_button, {
                                  radius: 2,
                                  design: "filled",
                                  color: "pink",
                                  "loading-with-content": "",
                                  class: "mt-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("With Text")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  radius: 2,
                                  design: "light",
                                  color: "pink",
                                  loading: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-6 h-6",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2"
                                      })
                                    ])),
                                    createTextVNode(" Light ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  radius: 3,
                                  design: "outline",
                                  color: "yellow",
                                  loading: "",
                                  "loading-design": "three-dots"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Outline")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  design: "link",
                                  color: "blue",
                                  loading: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Link")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  design: "link-plus",
                                  color: "gray",
                                  loading: "",
                                  "loading-design": "three-dots"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-6 h-6",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2"
                                      })
                                    ])),
                                    createTextVNode(" Link Plus ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                              createVNode("h2", { class: "font-semibold mr-4" }, "Icon Buttons"),
                              createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                                createVNode(_component_t_button, {
                                  radius: 0,
                                  color: "pink",
                                  class: "mt-2"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-6 h-6",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  radius: 3,
                                  design: "light",
                                  color: "indigo"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-6 h-6",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  radius: 5,
                                  design: "link",
                                  color: "yellow"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-6 h-6",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_t_button, {
                                  radius: 8,
                                  design: "link-plus",
                                  color: "red"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-6 h-6",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2"
                                      })
                                    ]))
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
                      createVNode(_component_grid_section, { "col-laptop": 2 }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                            createVNode("h2", { class: "font-semibold mr-4" }, "Styles"),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                              createVNode(_component_t_button, {
                                radius: 0,
                                class: "mt-2",
                                color: "green"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Filled")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                radius: 2,
                                design: "light",
                                color: "pink"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Light ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                radius: 1,
                                design: "light",
                                border: "",
                                color: "indigo"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Light with border ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                radius: 3,
                                design: "outline",
                                color: "yellow"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Outline")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                design: "link",
                                color: "blue"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Link")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                design: "link-plus",
                                color: "gray"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Link Plus ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                            createVNode("h2", { class: "font-semibold mr-4" }, "Disabled"),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                              createVNode(_component_t_button, {
                                radius: 0,
                                class: "mt-2",
                                color: "green",
                                disabled: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Filled")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                radius: 2,
                                design: "light",
                                color: "pink",
                                disabled: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Light ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                radius: 1,
                                design: "light",
                                border: "",
                                color: "indigo",
                                disabled: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Light with border ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                radius: 3,
                                design: "outline",
                                color: "yellow",
                                disabled: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Outline")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                design: "link",
                                color: "blue",
                                disabled: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Link")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                design: "link-plus",
                                color: "gray",
                                disabled: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Link Plus ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                            createVNode("h2", { class: "font-semibold mr-4" }, "Loading"),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                              createVNode(_component_t_button, {
                                radius: 2,
                                design: "filled",
                                color: "pink",
                                "loading-with-content": "",
                                class: "mt-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("With Text")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                radius: 2,
                                design: "light",
                                color: "pink",
                                loading: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Light ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                radius: 3,
                                design: "outline",
                                color: "yellow",
                                loading: "",
                                "loading-design": "three-dots"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Outline")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                design: "link",
                                color: "blue",
                                loading: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Link")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                design: "link-plus",
                                color: "gray",
                                loading: "",
                                "loading-design": "three-dots"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ])),
                                  createTextVNode(" Link Plus ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                            createVNode("h2", { class: "font-semibold mr-4" }, "Icon Buttons"),
                            createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                              createVNode(_component_t_button, {
                                radius: 0,
                                color: "pink",
                                class: "mt-2"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                radius: 3,
                                design: "light",
                                color: "indigo"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                radius: 5,
                                design: "link",
                                color: "yellow"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_t_button, {
                                radius: 8,
                                design: "link-plus",
                                color: "red"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2"
                                    })
                                  ]))
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
              _push3(ssrRenderComponent(_component_t_contentCard, { width: 1 }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Buton Sizes`);
                  } else {
                    return [
                      createTextVNode("Buton Sizes")
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-wrap gap-2 items-center justify-center w-full"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_t_button, {
                      color: "red",
                      size: "small"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Small Button : small`);
                        } else {
                          return [
                            createTextVNode("Small Button : small")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_button, {
                      color: "red",
                      size: "normal"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Default : normal`);
                        } else {
                          return [
                            createTextVNode("Default : normal")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_button, {
                      color: "yellow",
                      size: "large"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Large Button: large`);
                        } else {
                          return [
                            createTextVNode("Large Button: large")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_button, {
                      color: "blue",
                      size: "full"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Full Button : full`);
                        } else {
                          return [
                            createTextVNode("Full Button : full")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-wrap gap-2 items-center justify-center w-full" }, [
                        createVNode(_component_t_button, {
                          color: "red",
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Small Button : small")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_button, {
                          color: "red",
                          size: "normal"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Default : normal")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_button, {
                          color: "yellow",
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Large Button: large")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_button, {
                          color: "blue",
                          size: "full"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Full Button : full")
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
                    createTextVNode("Sample Buttons")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode("Color, radius, icon, size, disabled, loading, extended and group options")
                  ]),
                  content: withCtx(() => [
                    createVNode(_component_grid_section, { "col-laptop": 2 }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                          createVNode("h2", { class: "font-semibold mr-4" }, "Styles"),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                            createVNode(_component_t_button, {
                              radius: 0,
                              class: "mt-2",
                              color: "green"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Filled")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              radius: 2,
                              design: "light",
                              color: "pink"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2"
                                  })
                                ])),
                                createTextVNode(" Light ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              radius: 1,
                              design: "light",
                              border: "",
                              color: "indigo"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2"
                                  })
                                ])),
                                createTextVNode(" Light with border ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              radius: 3,
                              design: "outline",
                              color: "yellow"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Outline")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              design: "link",
                              color: "blue"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Link")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              design: "link-plus",
                              color: "gray"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2"
                                  })
                                ])),
                                createTextVNode(" Link Plus ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                          createVNode("h2", { class: "font-semibold mr-4" }, "Disabled"),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                            createVNode(_component_t_button, {
                              radius: 0,
                              class: "mt-2",
                              color: "green",
                              disabled: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Filled")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              radius: 2,
                              design: "light",
                              color: "pink",
                              disabled: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2"
                                  })
                                ])),
                                createTextVNode(" Light ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              radius: 1,
                              design: "light",
                              border: "",
                              color: "indigo",
                              disabled: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2"
                                  })
                                ])),
                                createTextVNode(" Light with border ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              radius: 3,
                              design: "outline",
                              color: "yellow",
                              disabled: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Outline")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              design: "link",
                              color: "blue",
                              disabled: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Link")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              design: "link-plus",
                              color: "gray",
                              disabled: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2"
                                  })
                                ])),
                                createTextVNode(" Link Plus ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                          createVNode("h2", { class: "font-semibold mr-4" }, "Loading"),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                            createVNode(_component_t_button, {
                              radius: 2,
                              design: "filled",
                              color: "pink",
                              "loading-with-content": "",
                              class: "mt-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("With Text")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              radius: 2,
                              design: "light",
                              color: "pink",
                              loading: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2"
                                  })
                                ])),
                                createTextVNode(" Light ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              radius: 3,
                              design: "outline",
                              color: "yellow",
                              loading: "",
                              "loading-design": "three-dots"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Outline")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              design: "link",
                              color: "blue",
                              loading: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Link")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              design: "link-plus",
                              color: "gray",
                              loading: "",
                              "loading-design": "three-dots"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2"
                                  })
                                ])),
                                createTextVNode(" Link Plus ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                          createVNode("h2", { class: "font-semibold mr-4" }, "Icon Buttons"),
                          createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                            createVNode(_component_t_button, {
                              radius: 0,
                              color: "pink",
                              class: "mt-2"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2"
                                  })
                                ]))
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              radius: 3,
                              design: "light",
                              color: "indigo"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2"
                                  })
                                ]))
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              radius: 5,
                              design: "link",
                              color: "yellow"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2"
                                  })
                                ]))
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_button, {
                              radius: 8,
                              design: "link-plus",
                              color: "red"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2"
                                  })
                                ]))
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
                createVNode(_component_t_contentCard, { width: 1 }, {
                  title: withCtx(() => [
                    createTextVNode("Buton Sizes")
                  ]),
                  content: withCtx(() => [
                    createVNode("div", { class: "flex flex-wrap gap-2 items-center justify-center w-full" }, [
                      createVNode(_component_t_button, {
                        color: "red",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Small Button : small")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_button, {
                        color: "red",
                        size: "normal"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Default : normal")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_button, {
                        color: "yellow",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Large Button: large")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_button, {
                        color: "blue",
                        size: "full"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Full Button : full")
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
          createVNode(_component_grid_section, { "col-tablet": 1 }, {
            default: withCtx(() => [
              createVNode(_component_t_content_card, { width: 1 }, {
                title: withCtx(() => [
                  createTextVNode("Sample Buttons")
                ]),
                subTitle: withCtx(() => [
                  createTextVNode("Color, radius, icon, size, disabled, loading, extended and group options")
                ]),
                content: withCtx(() => [
                  createVNode(_component_grid_section, { "col-laptop": 2 }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                        createVNode("h2", { class: "font-semibold mr-4" }, "Styles"),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                          createVNode(_component_t_button, {
                            radius: 0,
                            class: "mt-2",
                            color: "green"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Filled")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            radius: 2,
                            design: "light",
                            color: "pink"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                })
                              ])),
                              createTextVNode(" Light ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            radius: 1,
                            design: "light",
                            border: "",
                            color: "indigo"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                })
                              ])),
                              createTextVNode(" Light with border ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            radius: 3,
                            design: "outline",
                            color: "yellow"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Outline")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            design: "link",
                            color: "blue"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Link")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            design: "link-plus",
                            color: "gray"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                })
                              ])),
                              createTextVNode(" Link Plus ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                        createVNode("h2", { class: "font-semibold mr-4" }, "Disabled"),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                          createVNode(_component_t_button, {
                            radius: 0,
                            class: "mt-2",
                            color: "green",
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Filled")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            radius: 2,
                            design: "light",
                            color: "pink",
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                })
                              ])),
                              createTextVNode(" Light ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            radius: 1,
                            design: "light",
                            border: "",
                            color: "indigo",
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                })
                              ])),
                              createTextVNode(" Light with border ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            radius: 3,
                            design: "outline",
                            color: "yellow",
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Outline")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            design: "link",
                            color: "blue",
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Link")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            design: "link-plus",
                            color: "gray",
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                })
                              ])),
                              createTextVNode(" Link Plus ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                        createVNode("h2", { class: "font-semibold mr-4" }, "Loading"),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                          createVNode(_component_t_button, {
                            radius: 2,
                            design: "filled",
                            color: "pink",
                            "loading-with-content": "",
                            class: "mt-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("With Text")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            radius: 2,
                            design: "light",
                            color: "pink",
                            loading: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                })
                              ])),
                              createTextVNode(" Light ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            radius: 3,
                            design: "outline",
                            color: "yellow",
                            loading: "",
                            "loading-design": "three-dots"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Outline")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            design: "link",
                            color: "blue",
                            loading: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Link")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            design: "link-plus",
                            color: "gray",
                            loading: "",
                            "loading-design": "three-dots"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                })
                              ])),
                              createTextVNode(" Link Plus ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center" }, [
                        createVNode("h2", { class: "font-semibold mr-4" }, "Icon Buttons"),
                        createVNode("div", { class: "flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2" }, [
                          createVNode(_component_t_button, {
                            radius: 0,
                            color: "pink",
                            class: "mt-2"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                })
                              ]))
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            radius: 3,
                            design: "light",
                            color: "indigo"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                })
                              ]))
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            radius: 5,
                            design: "link",
                            color: "yellow"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                })
                              ]))
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_button, {
                            radius: 8,
                            design: "link-plus",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                })
                              ]))
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
              createVNode(_component_t_contentCard, { width: 1 }, {
                title: withCtx(() => [
                  createTextVNode("Buton Sizes")
                ]),
                content: withCtx(() => [
                  createVNode("div", { class: "flex flex-wrap gap-2 items-center justify-center w-full" }, [
                    createVNode(_component_t_button, {
                      color: "red",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Small Button : small")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_button, {
                      color: "red",
                      size: "normal"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Default : normal")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_button, {
                      color: "yellow",
                      size: "large"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Large Button: large")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_button, {
                      color: "blue",
                      size: "full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Full Button : full")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Button as default
};

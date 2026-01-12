import { defineComponent, mergeProps, toRefs, provide, ref, computed, useSSRContext, inject, reactive, resolveComponent, withCtx, createTextVNode, createVNode, createBlock, openBlock } from "vue";
import { A as AppLayout } from "./AppLayout-BkpuvVky.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { uniqueId } from "lodash";
import { T as TContentCard } from "./TContentCard-BkuMOsLs.js";
import { T as TLogo } from "./TLogo-BWZcVjQx.js";
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
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main$2 = defineComponent({
  name: "Collapsible",
  props: {
    openingType: {
      type: String,
      default: "click"
    },
    radius: {
      type: Number,
      default: 3
    },
    accordion: {
      type: Boolean,
      default: false
    },
    triggerType: {
      type: String,
      default: "chevron"
    },
    separated: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Array,
      default() {
        return [];
      }
    },
    color: {
      type: String,
      default: null
    },
    design: {
      type: String,
      default: null
    },
    titleAlign: {
      type: String,
      default: null
    },
    triggerAlign: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const {
      openingType,
      modelValue,
      triggerType,
      separated,
      radius,
      color,
      design,
      titleAlign,
      triggerAlign,
      accordion
    } = toRefs(props);
    provide("openingType", ref(openingType));
    provide("activeItems", ref(modelValue.value));
    provide("radius", ref(radius));
    provide("accordion", ref(accordion));
    provide("separated", ref(separated));
    provide("rootColor", ref(color));
    provide("rootDesign", ref(design));
    provide("rootTitleAlign", ref(titleAlign));
    provide("rootTriggerAlign", ref(triggerAlign));
    provide("rootTriggerType", ref(triggerType));
    const tStyle = computed(() => {
      return "collapsible " + (separated.value ? "space-y-2" : "group-radius-" + radius.value);
    });
    return { tStyle };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full" }, _attrs))}><div class="${ssrRenderClass(_ctx.tStyle)}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Collapsible/TCollapsible.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TCollapsible = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({
  name: "CollapsibleItem",
  props: {
    itemKey: {
      type: [String, Number],
      default: uniqueId()
    },
    titleAlign: {
      type: String,
      default: "left"
    },
    triggerAlign: {
      type: String,
      default: "right"
    },
    triggerType: {
      type: String,
      default: null,
      require: false
    },
    design: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "white"
    }
  },
  emits: ["active"],
  setup(props, { emit }) {
    const { itemKey, titleAlign, triggerAlign, triggerType, design, color } = toRefs(props);
    const activeItems = inject("activeItems");
    const openingType = inject("openingType");
    const accordion = inject("accordion");
    const radius = inject("radius");
    const separated = inject("separated");
    const rootColor = inject("rootColor");
    const rootDesign = inject("rootDesign");
    const rootTitleAlign = inject("rootTitleAlign");
    const rootTriggerAlign = inject("rootTriggerAlign");
    const rootTriggerType = inject("rootTriggerType");
    const activeColor = computed(() => {
      return rootColor.value ? rootColor.value : color.value;
    });
    const activeDesign = computed(() => {
      return rootDesign.value ? rootDesign.value : design.value;
    });
    const activeTitleAlign = computed(() => {
      return rootTitleAlign.value ? rootTitleAlign.value : titleAlign.value;
    });
    const activeTriggerAlign = computed(() => {
      return rootTriggerAlign.value ? rootTriggerAlign.value : triggerAlign.value;
    });
    const activeTriggerType = computed(() => {
      return rootTriggerType.value ? rootTriggerType.value : triggerType.value;
    });
    const isVisibleContent = computed(() => {
      return activeItems.value.includes(itemKey.value);
    });
    const updateStatus = (rule) => {
      const openItem = () => {
        if (accordion.value && !activeItems.value.includes(itemKey.value)) {
          activeItems.value = [itemKey.value];
        } else if (!accordion.value && !activeItems.value.includes(itemKey.value)) {
          activeItems.value.push(itemKey.value);
        }
        emit("active", activeItems.value);
      };
      const closeItem = () => {
        if (activeItems.value.includes(itemKey.value)) {
          activeItems.value.splice(activeItems.value.indexOf((item) => item === itemKey.value), 1);
        }
        emit("active", activeItems.value);
      };
      if (rule === "open") {
        openItem();
      } else if (rule === "close") {
        closeItem();
      } else {
        if (isVisibleContent.value) {
          closeItem();
        } else {
          openItem();
        }
      }
    };
    const tStyle = reactive({});
    tStyle["container"] = computed(() => {
      return "collapsible-container collapsible-" + activeDesign.value + "-base collapsible-" + activeDesign.value + "-" + activeColor.value + " " + (separated.value ? "radius-" + radius.value + " border-0" : "") + " " + (activeDesign.value.valueOf().includes("line") ? "justify-between" : "flex-col");
    });
    tStyle["header"] = computed(() => {
      let triggerAlignStyle;
      if (activeTriggerAlign.value === "left") {
        triggerAlignStyle = "flex-row-reverse";
      } else {
        triggerAlignStyle = "justify-start";
      }
      return "collapsible-header " + triggerAlignStyle;
    });
    tStyle["trigger"] = computed(() => {
      let triggerAnimationStyle;
      if (isVisibleContent.value && activeTriggerType.value === "chevron" || activeTriggerType.value === "cross") {
        triggerAnimationStyle = "rotate-0";
      }
      if (!isVisibleContent.value && activeTriggerType.value === "chevron") {
        if (activeTriggerAlign.value === "right") {
          triggerAnimationStyle = "rotate-90";
        } else {
          triggerAnimationStyle = "-rotate-90";
        }
      }
      if (!isVisibleContent.value && activeTriggerType.value === "cross") {
        triggerAnimationStyle = "rotate-45";
      }
      return "collapsible-trigger-icon " + triggerAnimationStyle;
    });
    tStyle["title"] = computed(() => {
      let titleAlignStyle;
      if (activeTitleAlign.value === "left") {
        titleAlignStyle = "text-left";
      } else if (activeTitleAlign.value === "center") {
        titleAlignStyle = "justify-center";
      } else {
        titleAlignStyle = "flex-row-reverse";
      }
      return "collapsible-title " + titleAlignStyle;
    });
    tStyle["content"] = computed(() => {
      return "collapsible-content ";
    });
    return {
      isVisibleContent,
      openingType,
      updateStatus,
      tStyle,
      activeTriggerType,
      activeDesign
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.tStyle["container"]
  }, _attrs))}>`);
  if (_ctx.activeDesign === "inline") {
    _push(`<div id="line" class="collapsible-inline-line"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="w-full"><div class="${ssrRenderClass(_ctx.tStyle["header"])}"><div class="${ssrRenderClass(_ctx.tStyle["title"])}">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</div>`);
  if (_ctx.activeTriggerType === "chevron") {
    _push(`<svg class="${ssrRenderClass(_ctx.tStyle["trigger"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>`);
  } else {
    _push(`<svg class="${ssrRenderClass(_ctx.tStyle["trigger"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
  }
  _push(`</div><div style="${ssrRenderStyle(_ctx.isVisibleContent ? null : { display: "none" })}"><div class="${ssrRenderClass(_ctx.tStyle["content"])}">`);
  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Collapsible/TCollapsibleItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TCollapsibleItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  name: "Collapsible",
  components: {
    TLogo,
    GridSection,
    AppLayout,
    TContentCard,
    TCollapsible,
    TCollapsibleItem
  },
  setup() {
    const collapsibleActive = ref([]);
    const collapsibleActive2 = ref([]);
    const collapsibleActive3 = ref([]);
    const test = ref(false);
    return { collapsibleActive, collapsibleActive2, collapsibleActive3, test };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_content_card = resolveComponent("t-content-card");
  const _component_t_collapsible = resolveComponent("t-collapsible");
  const _component_t_collapsible_item = resolveComponent("t-collapsible-item");
  const _component_t_logo = resolveComponent("t-logo");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Collapsible Content" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Collapsible Content `);
      } else {
        return [
          createTextVNode(" Collapsible Content ")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Same color or different colors, collapsible or accordion `);
      } else {
        return [
          createTextVNode(" Same color or different colors, collapsible or accordion ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-wrap"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_grid_section, {
          "col-laptop": 3,
          "col-tablet": 2
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_content_card, null, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Filled `);
                  } else {
                    return [
                      createTextVNode(" Filled ")
                    ];
                  }
                }),
                subTitle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Click + Chevron + Collapsible + Align `);
                  } else {
                    return [
                      createTextVNode(" Click + Chevron + Collapsible + Align ")
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_collapsible, {
                      modelValue: _ctx.collapsibleActive,
                      "onUpdate:modelValue": ($event) => _ctx.collapsibleActive = $event,
                      accordion: false,
                      "opening-type": "click",
                      "trigger-type": "chevron",
                      design: "filled",
                      radius: 3,
                      color: "indigo",
                      separated: false
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive = $event,
                            "item-key": "TailAdmin",
                            color: "red"
                          }, {
                            title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_logo, { class: "w-5 h-5 mr-2" }, null, _parent6, _scopeId5));
                                _push6(` TailAdmin `);
                              } else {
                                return [
                                  createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                                  createTextVNode(" TailAdmin ")
                                ];
                              }
                            }),
                            content: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. `);
                              } else {
                                return [
                                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive = $event,
                            "item-key": "LaraQuality",
                            color: "blue",
                            "trigger-align": "left",
                            "title-align": "right"
                          }, {
                            title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:osb="http://www.openswatchbook.org/uri/2009/osb" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" fill="currentColor" version="1.1" viewBox="0 0 215 215" stroke="none"${_scopeId5}><path transform="matrix(1.28 0 0 1.28 13.057 10.462)" d="m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55" stroke-linecap="square" stroke-width="1"${_scopeId5}></path><path transform="matrix(.34872 0 0 .34872 83.818 78.7)" d="m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137" stroke-linecap="square" stroke-width="6"${_scopeId5}></path></svg> LaraQuality `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-5 h-5 mr-2",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:cc": "http://creativecommons.org/ns#",
                                    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                                    "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                                    "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                                    fill: "currentColor",
                                    version: "1.1",
                                    viewBox: "0 0 215 215",
                                    stroke: "none"
                                  }, [
                                    createVNode("path", {
                                      transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                      d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                      "stroke-linecap": "square",
                                      "stroke-width": "1"
                                    }),
                                    createVNode("path", {
                                      transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                      d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                      "stroke-linecap": "square",
                                      "stroke-width": "6"
                                    })
                                  ])),
                                  createTextVNode(" LaraQuality ")
                                ];
                              }
                            }),
                            content: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. `);
                              } else {
                                return [
                                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive = $event,
                            "item-key": "LaraCoin",
                            color: "indigo",
                            "title-align": "right"
                          }, {
                            title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId5}></path></svg> LaraCoin `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-5 h-5 mr-2",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                  ])),
                                  createTextVNode(" LaraCoin ")
                                ];
                              }
                            }),
                            content: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. `);
                              } else {
                                return [
                                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_collapsible_item, {
                              onActive: ($event) => _ctx.collapsibleActive = $event,
                              "item-key": "TailAdmin",
                              color: "red"
                            }, {
                              title: withCtx(() => [
                                createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                                createTextVNode(" TailAdmin ")
                              ]),
                              content: withCtx(() => [
                                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                              ]),
                              _: 1
                            }, 8, ["onActive"]),
                            createVNode(_component_t_collapsible_item, {
                              onActive: ($event) => _ctx.collapsibleActive = $event,
                              "item-key": "LaraQuality",
                              color: "blue",
                              "trigger-align": "left",
                              "title-align": "right"
                            }, {
                              title: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-5 h-5 mr-2",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:cc": "http://creativecommons.org/ns#",
                                  "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                                  "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                                  "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                                  fill: "currentColor",
                                  version: "1.1",
                                  viewBox: "0 0 215 215",
                                  stroke: "none"
                                }, [
                                  createVNode("path", {
                                    transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                    d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                    "stroke-linecap": "square",
                                    "stroke-width": "1"
                                  }),
                                  createVNode("path", {
                                    transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                    d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                    "stroke-linecap": "square",
                                    "stroke-width": "6"
                                  })
                                ])),
                                createTextVNode(" LaraQuality ")
                              ]),
                              content: withCtx(() => [
                                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                              ]),
                              _: 1
                            }, 8, ["onActive"]),
                            createVNode(_component_t_collapsible_item, {
                              onActive: ($event) => _ctx.collapsibleActive = $event,
                              "item-key": "LaraCoin",
                              color: "indigo",
                              "title-align": "right"
                            }, {
                              title: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-5 h-5 mr-2",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  })
                                ])),
                                createTextVNode(" LaraCoin ")
                              ]),
                              content: withCtx(() => [
                                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                              ]),
                              _: 1
                            }, 8, ["onActive"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_collapsible, {
                        modelValue: _ctx.collapsibleActive,
                        "onUpdate:modelValue": ($event) => _ctx.collapsibleActive = $event,
                        accordion: false,
                        "opening-type": "click",
                        "trigger-type": "chevron",
                        design: "filled",
                        radius: 3,
                        color: "indigo",
                        separated: false
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive = $event,
                            "item-key": "TailAdmin",
                            color: "red"
                          }, {
                            title: withCtx(() => [
                              createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                              createTextVNode(" TailAdmin ")
                            ]),
                            content: withCtx(() => [
                              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                            ]),
                            _: 1
                          }, 8, ["onActive"]),
                          createVNode(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive = $event,
                            "item-key": "LaraQuality",
                            color: "blue",
                            "trigger-align": "left",
                            "title-align": "right"
                          }, {
                            title: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5 mr-2",
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:cc": "http://creativecommons.org/ns#",
                                "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                                "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                                "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                                fill: "currentColor",
                                version: "1.1",
                                viewBox: "0 0 215 215",
                                stroke: "none"
                              }, [
                                createVNode("path", {
                                  transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                  d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                  "stroke-linecap": "square",
                                  "stroke-width": "1"
                                }),
                                createVNode("path", {
                                  transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                  d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                  "stroke-linecap": "square",
                                  "stroke-width": "6"
                                })
                              ])),
                              createTextVNode(" LaraQuality ")
                            ]),
                            content: withCtx(() => [
                              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                            ]),
                            _: 1
                          }, 8, ["onActive"]),
                          createVNode(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive = $event,
                            "item-key": "LaraCoin",
                            color: "indigo",
                            "title-align": "right"
                          }, {
                            title: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5 mr-2",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ])),
                              createTextVNode(" LaraCoin ")
                            ]),
                            content: withCtx(() => [
                              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                            ]),
                            _: 1
                          }, 8, ["onActive"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_content_card, null, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Light `);
                  } else {
                    return [
                      createTextVNode(" Light ")
                    ];
                  }
                }),
                subTitle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Hover + Separated + Cross + Accordion `);
                  } else {
                    return [
                      createTextVNode(" Hover + Separated + Cross + Accordion ")
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_collapsible, {
                      modelValue: _ctx.collapsibleActive2,
                      "onUpdate:modelValue": ($event) => _ctx.collapsibleActive2 = $event,
                      accordion: true,
                      "opening-type": "hover",
                      "trigger-type": "cross",
                      design: "light",
                      radius: 0,
                      separated: true
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive2 = $event,
                            "item-key": "TailAdmin",
                            color: "red"
                          }, {
                            title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_logo, { class: "w-5 h-5 mr-2" }, null, _parent6, _scopeId5));
                                _push6(` TailAdmin `);
                              } else {
                                return [
                                  createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                                  createTextVNode(" TailAdmin ")
                                ];
                              }
                            }),
                            content: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. `);
                              } else {
                                return [
                                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive2 = $event,
                            "item-key": "LaraQuality",
                            color: "blue"
                          }, {
                            title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:osb="http://www.openswatchbook.org/uri/2009/osb" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" fill="currentColor" version="1.1" viewBox="0 0 215 215" stroke="none"${_scopeId5}><path transform="matrix(1.28 0 0 1.28 13.057 10.462)" d="m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55" stroke-linecap="square" stroke-width="1"${_scopeId5}></path><path transform="matrix(.34872 0 0 .34872 83.818 78.7)" d="m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137" stroke-linecap="square" stroke-width="6"${_scopeId5}></path></svg> LaraQuality `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-5 h-5 mr-2",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:cc": "http://creativecommons.org/ns#",
                                    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                                    "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                                    "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                                    fill: "currentColor",
                                    version: "1.1",
                                    viewBox: "0 0 215 215",
                                    stroke: "none"
                                  }, [
                                    createVNode("path", {
                                      transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                      d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                      "stroke-linecap": "square",
                                      "stroke-width": "1"
                                    }),
                                    createVNode("path", {
                                      transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                      d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                      "stroke-linecap": "square",
                                      "stroke-width": "6"
                                    })
                                  ])),
                                  createTextVNode(" LaraQuality ")
                                ];
                              }
                            }),
                            content: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. `);
                              } else {
                                return [
                                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive2 = $event,
                            "item-key": "LaraCoin",
                            color: "indigo"
                          }, {
                            title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId5}></path></svg> LaraCoin `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-5 h-5 mr-2",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                  ])),
                                  createTextVNode(" LaraCoin ")
                                ];
                              }
                            }),
                            content: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. `);
                              } else {
                                return [
                                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_collapsible_item, {
                              onActive: ($event) => _ctx.collapsibleActive2 = $event,
                              "item-key": "TailAdmin",
                              color: "red"
                            }, {
                              title: withCtx(() => [
                                createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                                createTextVNode(" TailAdmin ")
                              ]),
                              content: withCtx(() => [
                                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                              ]),
                              _: 1
                            }, 8, ["onActive"]),
                            createVNode(_component_t_collapsible_item, {
                              onActive: ($event) => _ctx.collapsibleActive2 = $event,
                              "item-key": "LaraQuality",
                              color: "blue"
                            }, {
                              title: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-5 h-5 mr-2",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:cc": "http://creativecommons.org/ns#",
                                  "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                                  "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                                  "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                                  fill: "currentColor",
                                  version: "1.1",
                                  viewBox: "0 0 215 215",
                                  stroke: "none"
                                }, [
                                  createVNode("path", {
                                    transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                    d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                    "stroke-linecap": "square",
                                    "stroke-width": "1"
                                  }),
                                  createVNode("path", {
                                    transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                    d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                    "stroke-linecap": "square",
                                    "stroke-width": "6"
                                  })
                                ])),
                                createTextVNode(" LaraQuality ")
                              ]),
                              content: withCtx(() => [
                                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                              ]),
                              _: 1
                            }, 8, ["onActive"]),
                            createVNode(_component_t_collapsible_item, {
                              onActive: ($event) => _ctx.collapsibleActive2 = $event,
                              "item-key": "LaraCoin",
                              color: "indigo"
                            }, {
                              title: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-5 h-5 mr-2",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  })
                                ])),
                                createTextVNode(" LaraCoin ")
                              ]),
                              content: withCtx(() => [
                                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                              ]),
                              _: 1
                            }, 8, ["onActive"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_collapsible, {
                        modelValue: _ctx.collapsibleActive2,
                        "onUpdate:modelValue": ($event) => _ctx.collapsibleActive2 = $event,
                        accordion: true,
                        "opening-type": "hover",
                        "trigger-type": "cross",
                        design: "light",
                        radius: 0,
                        separated: true
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive2 = $event,
                            "item-key": "TailAdmin",
                            color: "red"
                          }, {
                            title: withCtx(() => [
                              createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                              createTextVNode(" TailAdmin ")
                            ]),
                            content: withCtx(() => [
                              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                            ]),
                            _: 1
                          }, 8, ["onActive"]),
                          createVNode(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive2 = $event,
                            "item-key": "LaraQuality",
                            color: "blue"
                          }, {
                            title: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5 mr-2",
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:cc": "http://creativecommons.org/ns#",
                                "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                                "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                                "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                                fill: "currentColor",
                                version: "1.1",
                                viewBox: "0 0 215 215",
                                stroke: "none"
                              }, [
                                createVNode("path", {
                                  transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                  d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                  "stroke-linecap": "square",
                                  "stroke-width": "1"
                                }),
                                createVNode("path", {
                                  transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                  d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                  "stroke-linecap": "square",
                                  "stroke-width": "6"
                                })
                              ])),
                              createTextVNode(" LaraQuality ")
                            ]),
                            content: withCtx(() => [
                              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                            ]),
                            _: 1
                          }, 8, ["onActive"]),
                          createVNode(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive2 = $event,
                            "item-key": "LaraCoin",
                            color: "indigo"
                          }, {
                            title: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5 mr-2",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ])),
                              createTextVNode(" LaraCoin ")
                            ]),
                            content: withCtx(() => [
                              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                            ]),
                            _: 1
                          }, 8, ["onActive"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_content_card, null, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Inline `);
                  } else {
                    return [
                      createTextVNode(" Inline ")
                    ];
                  }
                }),
                subTitle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Hover + Separated + Cross + Accordion `);
                  } else {
                    return [
                      createTextVNode(" Hover + Separated + Cross + Accordion ")
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_collapsible, {
                      modelValue: _ctx.collapsibleActive3,
                      "onUpdate:modelValue": ($event) => _ctx.collapsibleActive3 = $event,
                      accordion: true,
                      "opening-type": "hover",
                      "trigger-type": "cross",
                      design: "inline",
                      radius: 0,
                      separated: false
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive3 = $event,
                            "item-key": "TailAdmin",
                            color: "red"
                          }, {
                            title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_logo, { class: "w-5 h-5 mr-2" }, null, _parent6, _scopeId5));
                                _push6(` TailAdmin `);
                              } else {
                                return [
                                  createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                                  createTextVNode(" TailAdmin ")
                                ];
                              }
                            }),
                            content: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. `);
                              } else {
                                return [
                                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive3 = $event,
                            "item-key": "LaraQuality",
                            color: "blue"
                          }, {
                            title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:osb="http://www.openswatchbook.org/uri/2009/osb" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" fill="currentColor" version="1.1" viewBox="0 0 215 215" stroke="none"${_scopeId5}><path transform="matrix(1.28 0 0 1.28 13.057 10.462)" d="m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55" stroke-linecap="square" stroke-width="1"${_scopeId5}></path><path transform="matrix(.34872 0 0 .34872 83.818 78.7)" d="m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137" stroke-linecap="square" stroke-width="6"${_scopeId5}></path></svg> LaraQuality `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-5 h-5 mr-2",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:cc": "http://creativecommons.org/ns#",
                                    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                                    "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                                    "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                                    fill: "currentColor",
                                    version: "1.1",
                                    viewBox: "0 0 215 215",
                                    stroke: "none"
                                  }, [
                                    createVNode("path", {
                                      transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                      d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                      "stroke-linecap": "square",
                                      "stroke-width": "1"
                                    }),
                                    createVNode("path", {
                                      transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                      d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                      "stroke-linecap": "square",
                                      "stroke-width": "6"
                                    })
                                  ])),
                                  createTextVNode(" LaraQuality ")
                                ];
                              }
                            }),
                            content: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. `);
                              } else {
                                return [
                                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive3 = $event,
                            "item-key": "LaraCoin",
                            color: "indigo"
                          }, {
                            title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId5}></path></svg> LaraCoin `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-5 h-5 mr-2",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                  ])),
                                  createTextVNode(" LaraCoin ")
                                ];
                              }
                            }),
                            content: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. `);
                              } else {
                                return [
                                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_collapsible_item, {
                              onActive: ($event) => _ctx.collapsibleActive3 = $event,
                              "item-key": "TailAdmin",
                              color: "red"
                            }, {
                              title: withCtx(() => [
                                createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                                createTextVNode(" TailAdmin ")
                              ]),
                              content: withCtx(() => [
                                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                              ]),
                              _: 1
                            }, 8, ["onActive"]),
                            createVNode(_component_t_collapsible_item, {
                              onActive: ($event) => _ctx.collapsibleActive3 = $event,
                              "item-key": "LaraQuality",
                              color: "blue"
                            }, {
                              title: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-5 h-5 mr-2",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:cc": "http://creativecommons.org/ns#",
                                  "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                                  "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                                  "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                                  fill: "currentColor",
                                  version: "1.1",
                                  viewBox: "0 0 215 215",
                                  stroke: "none"
                                }, [
                                  createVNode("path", {
                                    transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                    d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                    "stroke-linecap": "square",
                                    "stroke-width": "1"
                                  }),
                                  createVNode("path", {
                                    transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                    d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                    "stroke-linecap": "square",
                                    "stroke-width": "6"
                                  })
                                ])),
                                createTextVNode(" LaraQuality ")
                              ]),
                              content: withCtx(() => [
                                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                              ]),
                              _: 1
                            }, 8, ["onActive"]),
                            createVNode(_component_t_collapsible_item, {
                              onActive: ($event) => _ctx.collapsibleActive3 = $event,
                              "item-key": "LaraCoin",
                              color: "indigo"
                            }, {
                              title: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-5 h-5 mr-2",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  })
                                ])),
                                createTextVNode(" LaraCoin ")
                              ]),
                              content: withCtx(() => [
                                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                              ]),
                              _: 1
                            }, 8, ["onActive"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_collapsible, {
                        modelValue: _ctx.collapsibleActive3,
                        "onUpdate:modelValue": ($event) => _ctx.collapsibleActive3 = $event,
                        accordion: true,
                        "opening-type": "hover",
                        "trigger-type": "cross",
                        design: "inline",
                        radius: 0,
                        separated: false
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive3 = $event,
                            "item-key": "TailAdmin",
                            color: "red"
                          }, {
                            title: withCtx(() => [
                              createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                              createTextVNode(" TailAdmin ")
                            ]),
                            content: withCtx(() => [
                              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                            ]),
                            _: 1
                          }, 8, ["onActive"]),
                          createVNode(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive3 = $event,
                            "item-key": "LaraQuality",
                            color: "blue"
                          }, {
                            title: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5 mr-2",
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:cc": "http://creativecommons.org/ns#",
                                "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                                "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                                "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                                fill: "currentColor",
                                version: "1.1",
                                viewBox: "0 0 215 215",
                                stroke: "none"
                              }, [
                                createVNode("path", {
                                  transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                  d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                  "stroke-linecap": "square",
                                  "stroke-width": "1"
                                }),
                                createVNode("path", {
                                  transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                  d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                  "stroke-linecap": "square",
                                  "stroke-width": "6"
                                })
                              ])),
                              createTextVNode(" LaraQuality ")
                            ]),
                            content: withCtx(() => [
                              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                            ]),
                            _: 1
                          }, 8, ["onActive"]),
                          createVNode(_component_t_collapsible_item, {
                            onActive: ($event) => _ctx.collapsibleActive3 = $event,
                            "item-key": "LaraCoin",
                            color: "indigo"
                          }, {
                            title: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5 mr-2",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ])),
                              createTextVNode(" LaraCoin ")
                            ]),
                            content: withCtx(() => [
                              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                            ]),
                            _: 1
                          }, 8, ["onActive"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_content_card, null, {
                  title: withCtx(() => [
                    createTextVNode(" Filled ")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode(" Click + Chevron + Collapsible + Align ")
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_t_collapsible, {
                      modelValue: _ctx.collapsibleActive,
                      "onUpdate:modelValue": ($event) => _ctx.collapsibleActive = $event,
                      accordion: false,
                      "opening-type": "click",
                      "trigger-type": "chevron",
                      design: "filled",
                      radius: 3,
                      color: "indigo",
                      separated: false
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive = $event,
                          "item-key": "TailAdmin",
                          color: "red"
                        }, {
                          title: withCtx(() => [
                            createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                            createTextVNode(" TailAdmin ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"]),
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive = $event,
                          "item-key": "LaraQuality",
                          color: "blue",
                          "trigger-align": "left",
                          "title-align": "right"
                        }, {
                          title: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 mr-2",
                              xmlns: "http://www.w3.org/2000/svg",
                              "xmlns:cc": "http://creativecommons.org/ns#",
                              "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                              "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                              "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                              fill: "currentColor",
                              version: "1.1",
                              viewBox: "0 0 215 215",
                              stroke: "none"
                            }, [
                              createVNode("path", {
                                transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                "stroke-linecap": "square",
                                "stroke-width": "1"
                              }),
                              createVNode("path", {
                                transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                "stroke-linecap": "square",
                                "stroke-width": "6"
                              })
                            ])),
                            createTextVNode(" LaraQuality ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"]),
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive = $event,
                          "item-key": "LaraCoin",
                          color: "indigo",
                          "title-align": "right"
                        }, {
                          title: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 mr-2",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              })
                            ])),
                            createTextVNode(" LaraCoin ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_t_content_card, null, {
                  title: withCtx(() => [
                    createTextVNode(" Light ")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode(" Hover + Separated + Cross + Accordion ")
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_t_collapsible, {
                      modelValue: _ctx.collapsibleActive2,
                      "onUpdate:modelValue": ($event) => _ctx.collapsibleActive2 = $event,
                      accordion: true,
                      "opening-type": "hover",
                      "trigger-type": "cross",
                      design: "light",
                      radius: 0,
                      separated: true
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive2 = $event,
                          "item-key": "TailAdmin",
                          color: "red"
                        }, {
                          title: withCtx(() => [
                            createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                            createTextVNode(" TailAdmin ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"]),
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive2 = $event,
                          "item-key": "LaraQuality",
                          color: "blue"
                        }, {
                          title: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 mr-2",
                              xmlns: "http://www.w3.org/2000/svg",
                              "xmlns:cc": "http://creativecommons.org/ns#",
                              "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                              "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                              "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                              fill: "currentColor",
                              version: "1.1",
                              viewBox: "0 0 215 215",
                              stroke: "none"
                            }, [
                              createVNode("path", {
                                transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                "stroke-linecap": "square",
                                "stroke-width": "1"
                              }),
                              createVNode("path", {
                                transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                "stroke-linecap": "square",
                                "stroke-width": "6"
                              })
                            ])),
                            createTextVNode(" LaraQuality ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"]),
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive2 = $event,
                          "item-key": "LaraCoin",
                          color: "indigo"
                        }, {
                          title: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 mr-2",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              })
                            ])),
                            createTextVNode(" LaraCoin ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_t_content_card, null, {
                  title: withCtx(() => [
                    createTextVNode(" Inline ")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode(" Hover + Separated + Cross + Accordion ")
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_t_collapsible, {
                      modelValue: _ctx.collapsibleActive3,
                      "onUpdate:modelValue": ($event) => _ctx.collapsibleActive3 = $event,
                      accordion: true,
                      "opening-type": "hover",
                      "trigger-type": "cross",
                      design: "inline",
                      radius: 0,
                      separated: false
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive3 = $event,
                          "item-key": "TailAdmin",
                          color: "red"
                        }, {
                          title: withCtx(() => [
                            createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                            createTextVNode(" TailAdmin ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"]),
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive3 = $event,
                          "item-key": "LaraQuality",
                          color: "blue"
                        }, {
                          title: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 mr-2",
                              xmlns: "http://www.w3.org/2000/svg",
                              "xmlns:cc": "http://creativecommons.org/ns#",
                              "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                              "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                              "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                              fill: "currentColor",
                              version: "1.1",
                              viewBox: "0 0 215 215",
                              stroke: "none"
                            }, [
                              createVNode("path", {
                                transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                "stroke-linecap": "square",
                                "stroke-width": "1"
                              }),
                              createVNode("path", {
                                transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                "stroke-linecap": "square",
                                "stroke-width": "6"
                              })
                            ])),
                            createTextVNode(" LaraQuality ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"]),
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive3 = $event,
                          "item-key": "LaraCoin",
                          color: "indigo"
                        }, {
                          title: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 mr-2",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              })
                            ])),
                            createTextVNode(" LaraCoin ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-wrap" }, [
            createVNode(_component_grid_section, {
              "col-laptop": 3,
              "col-tablet": 2
            }, {
              default: withCtx(() => [
                createVNode(_component_t_content_card, null, {
                  title: withCtx(() => [
                    createTextVNode(" Filled ")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode(" Click + Chevron + Collapsible + Align ")
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_t_collapsible, {
                      modelValue: _ctx.collapsibleActive,
                      "onUpdate:modelValue": ($event) => _ctx.collapsibleActive = $event,
                      accordion: false,
                      "opening-type": "click",
                      "trigger-type": "chevron",
                      design: "filled",
                      radius: 3,
                      color: "indigo",
                      separated: false
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive = $event,
                          "item-key": "TailAdmin",
                          color: "red"
                        }, {
                          title: withCtx(() => [
                            createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                            createTextVNode(" TailAdmin ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"]),
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive = $event,
                          "item-key": "LaraQuality",
                          color: "blue",
                          "trigger-align": "left",
                          "title-align": "right"
                        }, {
                          title: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 mr-2",
                              xmlns: "http://www.w3.org/2000/svg",
                              "xmlns:cc": "http://creativecommons.org/ns#",
                              "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                              "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                              "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                              fill: "currentColor",
                              version: "1.1",
                              viewBox: "0 0 215 215",
                              stroke: "none"
                            }, [
                              createVNode("path", {
                                transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                "stroke-linecap": "square",
                                "stroke-width": "1"
                              }),
                              createVNode("path", {
                                transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                "stroke-linecap": "square",
                                "stroke-width": "6"
                              })
                            ])),
                            createTextVNode(" LaraQuality ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"]),
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive = $event,
                          "item-key": "LaraCoin",
                          color: "indigo",
                          "title-align": "right"
                        }, {
                          title: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 mr-2",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              })
                            ])),
                            createTextVNode(" LaraCoin ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_t_content_card, null, {
                  title: withCtx(() => [
                    createTextVNode(" Light ")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode(" Hover + Separated + Cross + Accordion ")
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_t_collapsible, {
                      modelValue: _ctx.collapsibleActive2,
                      "onUpdate:modelValue": ($event) => _ctx.collapsibleActive2 = $event,
                      accordion: true,
                      "opening-type": "hover",
                      "trigger-type": "cross",
                      design: "light",
                      radius: 0,
                      separated: true
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive2 = $event,
                          "item-key": "TailAdmin",
                          color: "red"
                        }, {
                          title: withCtx(() => [
                            createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                            createTextVNode(" TailAdmin ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"]),
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive2 = $event,
                          "item-key": "LaraQuality",
                          color: "blue"
                        }, {
                          title: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 mr-2",
                              xmlns: "http://www.w3.org/2000/svg",
                              "xmlns:cc": "http://creativecommons.org/ns#",
                              "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                              "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                              "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                              fill: "currentColor",
                              version: "1.1",
                              viewBox: "0 0 215 215",
                              stroke: "none"
                            }, [
                              createVNode("path", {
                                transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                "stroke-linecap": "square",
                                "stroke-width": "1"
                              }),
                              createVNode("path", {
                                transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                "stroke-linecap": "square",
                                "stroke-width": "6"
                              })
                            ])),
                            createTextVNode(" LaraQuality ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"]),
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive2 = $event,
                          "item-key": "LaraCoin",
                          color: "indigo"
                        }, {
                          title: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 mr-2",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              })
                            ])),
                            createTextVNode(" LaraCoin ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_t_content_card, null, {
                  title: withCtx(() => [
                    createTextVNode(" Inline ")
                  ]),
                  subTitle: withCtx(() => [
                    createTextVNode(" Hover + Separated + Cross + Accordion ")
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_t_collapsible, {
                      modelValue: _ctx.collapsibleActive3,
                      "onUpdate:modelValue": ($event) => _ctx.collapsibleActive3 = $event,
                      accordion: true,
                      "opening-type": "hover",
                      "trigger-type": "cross",
                      design: "inline",
                      radius: 0,
                      separated: false
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive3 = $event,
                          "item-key": "TailAdmin",
                          color: "red"
                        }, {
                          title: withCtx(() => [
                            createVNode(_component_t_logo, { class: "w-5 h-5 mr-2" }),
                            createTextVNode(" TailAdmin ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"]),
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive3 = $event,
                          "item-key": "LaraQuality",
                          color: "blue"
                        }, {
                          title: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 mr-2",
                              xmlns: "http://www.w3.org/2000/svg",
                              "xmlns:cc": "http://creativecommons.org/ns#",
                              "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                              "xmlns:osb": "http://www.openswatchbook.org/uri/2009/osb",
                              "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                              fill: "currentColor",
                              version: "1.1",
                              viewBox: "0 0 215 215",
                              stroke: "none"
                            }, [
                              createVNode("path", {
                                transform: "matrix(1.28 0 0 1.28 13.057 10.462)",
                                d: "m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55",
                                "stroke-linecap": "square",
                                "stroke-width": "1"
                              }),
                              createVNode("path", {
                                transform: "matrix(.34872 0 0 .34872 83.818 78.7)",
                                d: "m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137",
                                "stroke-linecap": "square",
                                "stroke-width": "6"
                              })
                            ])),
                            createTextVNode(" LaraQuality ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"]),
                        createVNode(_component_t_collapsible_item, {
                          onActive: ($event) => _ctx.collapsibleActive3 = $event,
                          "item-key": "LaraCoin",
                          color: "indigo"
                        }, {
                          title: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 mr-2",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              })
                            ])),
                            createTextVNode(" LaraCoin ")
                          ]),
                          content: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula imperdiet. ")
                          ]),
                          _: 1
                        }, 8, ["onActive"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Collapsible.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Collapsible = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Collapsible as default
};

import { A as AppLayout } from "./AppLayout-C9UC9tJn.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { defineComponent, toRefs, ref, reactive, computed, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, createBlock, createCommentVNode, openBlock, createVNode } from "vue";
import { T as TAlert } from "./windowSizeCalculator-ej9CZPp5.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { T as TComponentStyleSelector } from "./TComponentStyleSelector-GmPZoTkx.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./TDropdown-DbVD8e4r.js";
import "vue-i18n";
import "./displayLanguage-CeV33Cax.js";
import "pinia";
import "./TAvatar-a0UbdIFE.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "./TCheckIcon-CWPVq9Ck.js";
import "./TInputSelect-BY60CBa7.js";
import "./TInputText-CyR_XUuU.js";
const _sfc_main$1 = defineComponent({
  name: "TTab",
  components: { TAlert },
  props: {
    data: {
      type: Array,
      default() {
        return [
          { id: 0, content: "Sample Content" }
        ];
      }
    },
    modelValue: {
      type: [Number, String, Date],
      default: null
    },
    design: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "gray"
    },
    coloredText: {
      type: Boolean,
      default: false
    },
    darkMode: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { modelValue, data, design, color, darkMode, coloredText } = toRefs(props);
    const active = ref(modelValue.value ? modelValue.value : data.value[0].id);
    const select = (id) => {
      active.value = id;
      emit("update:modelValue", id);
    };
    const tStyle = reactive({});
    tStyle["container"] = computed(() => {
      return "tab tab-" + design.value + "-base tab-" + (darkMode.value ? "dark" : "light") + " tab-" + design.value + "-" + color.value;
    });
    const titleStyle = (id) => {
      return (active.value === id ? "tab-title-active" : "tab-title") + " " + (!coloredText.value ? "tab-" + design.value + "-simple-text" : "");
    };
    return { active, select, tStyle, titleStyle };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_alert = resolveComponent("t-alert");
  if (!_ctx.data.find((t) => t.id === _ctx.modelValue) && _ctx.modelValue !== null) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full col-span-full" }, _attrs))}>`);
    _push(ssrRenderComponent(_component_t_alert, {
      design: "elegant",
      title: "attention",
      color: "yellow"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Undefined tab id, please check your id `);
        } else {
          return [
            createTextVNode(" Undefined tab id, please check your id ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: _ctx.tStyle["container"]
    }, _attrs))}><div class="tab-title-container"><!--[-->`);
    ssrRenderList(_ctx.data, (item) => {
      _push(`<div class="${ssrRenderClass(_ctx.titleStyle(item.id))}">`);
      ssrRenderSlot(_ctx.$slots, "icon", { props: item }, null, _push, _parent);
      _push(` ${ssrInterpolate(item.title)}</div>`);
    });
    _push(`<!--]--></div><div class="tab-content">`);
    if (_ctx.data.find((c) => c.id === _ctx.active).content) {
      _push(`<span>${ssrInterpolate(_ctx.data.find((c) => c.id === _ctx.active).content)}</span>`);
    } else {
      _push(`<!---->`);
    }
    ssrRenderSlot(_ctx.$slots, "content", {
      props: _ctx.data.find((c) => c.id === _ctx.active)
    }, null, _push, _parent);
    _push(`</div></div>`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Tab/TTab.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TTab = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Tab",
  components: { TComponentStyleSelector, AppLayout, GridSection, TTab },
  data() {
    return {
      tab1: 1,
      tab2: 1,
      tab1content: [
        {
          id: 1,
          title: "Laravel",
          content: ""
        },
        { id: 2, title: "Vuejs", content: "The Progressive JavaScript Framework." },
        {
          id: 3,
          title: "",
          content: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
        }
      ],
      tab2content: [
        {
          id: 1,
          title: "Tailadmin",
          content: "It's a dashboard theme/UI-Starter Kit with Laravel, Inertia and Vue (JetStream)."
        },
        { id: 2, title: "Laraquality", content: "Online quality assurance(QA) management system" },
        { id: 3, title: "TailCoin", content: "Simple crypto wallet track system" }
      ],
      selectedData: {
        color: "blue",
        design: "filled",
        coloredText: false
      },
      selectData: [
        {
          label: "Design",
          key: "design",
          options: [
            { key: "filled", label: "Filled" },
            { key: "underline", label: "Underline" }
          ]
        },
        {
          label: "Colored Text",
          key: "coloredText",
          options: [
            { key: false, label: "Simple Text" },
            { key: true, label: "Colored Text" }
          ]
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_t_component_style_selector = resolveComponent("t-component-style-selector");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_tab = resolveComponent("t-tab");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Tabs `);
      } else {
        return [
          createTextVNode(" Tabs ")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Multi content in single area `);
      } else {
        return [
          createTextVNode(" Multi content in single area ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_t_component_style_selector, {
          "select-data": $data.selectData,
          modelValue: $data.selectedData,
          "onUpdate:modelValue": ($event) => $data.selectedData = $event,
          class: "mb-4"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_grid_section, { "col-tablet": 2 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_tab, {
                data: $data.tab1content,
                modelValue: $data.tab1,
                "onUpdate:modelValue": ($event) => $data.tab1 = $event,
                color: $data.selectedData.color,
                design: $data.selectedData.design,
                "colored-text": $data.selectedData.coloredText
              }, {
                icon: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    if (props.id === 2) {
                      _push4(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"${_scopeId3}></path></svg>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    if (props.id === 3) {
                      _push4(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"${_scopeId3}></path></svg>`);
                    } else {
                      _push4(`<!---->`);
                    }
                  } else {
                    return [
                      props.id === 2 ? (openBlock(), createBlock("svg", {
                        key: 0,
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        })
                      ])) : createCommentVNode("", true),
                      props.id === 3 ? (openBlock(), createBlock("svg", {
                        key: 1,
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        })
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                content: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    if (props.id === 1) {
                      _push4(`<span${_scopeId3}> Laravel is a web application framework with expressive, elegant syntax. <br${_scopeId3}><h4 class="mt-1 font-semibold"${_scopeId3}>Rich Html Content</h4><p${_scopeId3}>Laravel attempts to take the pain out of development by easing common tasks used in most web projects. </p></span>`);
                    } else {
                      _push4(`<!---->`);
                    }
                  } else {
                    return [
                      props.id === 1 ? (openBlock(), createBlock("span", { key: 0 }, [
                        createTextVNode(" Laravel is a web application framework with expressive, elegant syntax. "),
                        createVNode("br"),
                        createVNode("h4", { class: "mt-1 font-semibold" }, "Rich Html Content"),
                        createVNode("p", null, "Laravel attempts to take the pain out of development by easing common tasks used in most web projects. ")
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_tab, {
                data: $data.tab2content,
                modelValue: $data.tab2,
                "onUpdate:modelValue": ($event) => $data.tab2 = $event,
                color: $data.selectedData.color,
                design: $data.selectedData.design,
                "colored-text": $data.selectedData.coloredText,
                "dark-mode": "",
                radius: 5
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_tab, {
                  data: $data.tab1content,
                  modelValue: $data.tab1,
                  "onUpdate:modelValue": ($event) => $data.tab1 = $event,
                  color: $data.selectedData.color,
                  design: $data.selectedData.design,
                  "colored-text": $data.selectedData.coloredText
                }, {
                  icon: withCtx(({ props }) => [
                    props.id === 2 ? (openBlock(), createBlock("svg", {
                      key: 0,
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      })
                    ])) : createCommentVNode("", true),
                    props.id === 3 ? (openBlock(), createBlock("svg", {
                      key: 1,
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      })
                    ])) : createCommentVNode("", true)
                  ]),
                  content: withCtx(({ props }) => [
                    props.id === 1 ? (openBlock(), createBlock("span", { key: 0 }, [
                      createTextVNode(" Laravel is a web application framework with expressive, elegant syntax. "),
                      createVNode("br"),
                      createVNode("h4", { class: "mt-1 font-semibold" }, "Rich Html Content"),
                      createVNode("p", null, "Laravel attempts to take the pain out of development by easing common tasks used in most web projects. ")
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["data", "modelValue", "onUpdate:modelValue", "color", "design", "colored-text"]),
                createVNode(_component_t_tab, {
                  data: $data.tab2content,
                  modelValue: $data.tab2,
                  "onUpdate:modelValue": ($event) => $data.tab2 = $event,
                  color: $data.selectedData.color,
                  design: $data.selectedData.design,
                  "colored-text": $data.selectedData.coloredText,
                  "dark-mode": "",
                  radius: 5
                }, null, 8, ["data", "modelValue", "onUpdate:modelValue", "color", "design", "colored-text"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_t_component_style_selector, {
            "select-data": $data.selectData,
            modelValue: $data.selectedData,
            "onUpdate:modelValue": ($event) => $data.selectedData = $event,
            class: "mb-4"
          }, null, 8, ["select-data", "modelValue", "onUpdate:modelValue"]),
          createVNode(_component_grid_section, { "col-tablet": 2 }, {
            default: withCtx(() => [
              createVNode(_component_t_tab, {
                data: $data.tab1content,
                modelValue: $data.tab1,
                "onUpdate:modelValue": ($event) => $data.tab1 = $event,
                color: $data.selectedData.color,
                design: $data.selectedData.design,
                "colored-text": $data.selectedData.coloredText
              }, {
                icon: withCtx(({ props }) => [
                  props.id === 2 ? (openBlock(), createBlock("svg", {
                    key: 0,
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    })
                  ])) : createCommentVNode("", true),
                  props.id === 3 ? (openBlock(), createBlock("svg", {
                    key: 1,
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    })
                  ])) : createCommentVNode("", true)
                ]),
                content: withCtx(({ props }) => [
                  props.id === 1 ? (openBlock(), createBlock("span", { key: 0 }, [
                    createTextVNode(" Laravel is a web application framework with expressive, elegant syntax. "),
                    createVNode("br"),
                    createVNode("h4", { class: "mt-1 font-semibold" }, "Rich Html Content"),
                    createVNode("p", null, "Laravel attempts to take the pain out of development by easing common tasks used in most web projects. ")
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["data", "modelValue", "onUpdate:modelValue", "color", "design", "colored-text"]),
              createVNode(_component_t_tab, {
                data: $data.tab2content,
                modelValue: $data.tab2,
                "onUpdate:modelValue": ($event) => $data.tab2 = $event,
                color: $data.selectedData.color,
                design: $data.selectedData.design,
                "colored-text": $data.selectedData.coloredText,
                "dark-mode": "",
                radius: 5
              }, null, 8, ["data", "modelValue", "onUpdate:modelValue", "color", "design", "colored-text"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Tab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Tab = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Tab as default
};

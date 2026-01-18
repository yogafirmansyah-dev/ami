import { T as TBadge, A as AppLayout } from "./AppLayout-3kkfgqRQ.js";
import { d as _sfc_main$2 } from "./windowSizeCalculator-BWfQvLaG.js";
import { a as TFormContent, T as TFormSection } from "./TFormContent-CNybaDNe.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { onClickOutside } from "@vueuse/core";
import { defineComponent, resolveComponent, mergeProps, createSlots, withCtx, renderSlot, createCommentVNode, createBlock, openBlock, toDisplayString, withModifiers, createVNode, toRefs, ref, computed, useSlots, useSSRContext, createTextVNode } from "vue";
import { useI18n } from "vue-i18n";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "./TDropdown-8S66trQc.js";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-BYbkHFXz.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "./TContentCard-DJ3stJrh.js";
const _sfc_main$1 = defineComponent({
  name: "TInputMultiSelect",
  components: { TBadge, TInputText },
  props: {
    modelValue: {
      type: [String, Date, Number, Object, Array, Boolean],
      default() {
        return [];
      }
    },
    options: {
      type: [Object, Array],
      default() {
        return [];
      }
    },
    optionsLabelKey: {
      type: String,
      default: "label"
    },
    optionsValueKey: {
      type: String,
      default: "key"
    },
    placeHolder: {
      type: String,
      default: "component.input.select.select"
    },
    searchPlaceHolder: {
      type: String,
      default: "component.input.select.search"
    },
    clearButton: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    showingMaxOptions: {
      type: Number,
      default: 10
    },
    radius: {
      type: Number,
      default: 3
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit, slots }) {
    const {
      modelValue,
      options,
      optionsLabelKey,
      optionsValueKey,
      disabled,
      readOnly
    } = toRefs(props);
    const { t } = useI18n();
    const showOptions = ref(false);
    const updateOptionsShowStatus = () => {
      if (disabled.value || readOnly.value) {
        showOptions.value = false;
      } else {
        showOptions.value = !showOptions.value;
      }
    };
    const selectItem = ref(null);
    onClickOutside(selectItem, () => showOptions.value = false);
    const selectedIDs = ref([]);
    const selectedOptions = computed(() => {
      if (!modelValue.value) {
        return null;
      }
      let list = [];
      for (let i = 0; i < modelValue.value.length; i++) {
        if (options.value.find(((item) => item[optionsValueKey.value] === modelValue.value[i]))) {
          list.push(options.value.find(((item) => item[optionsValueKey.value] === modelValue.value[i])));
        }
      }
      return list;
    });
    const selectOption = (option) => {
      if (!selectedIDs.value.includes(option[optionsValueKey.value])) {
        selectedOptions.value.push(option);
        selectedIDs.value.push(option[optionsValueKey.value]);
        emit("update:modelValue", selectedIDs.value);
        showOptions.value = false;
      } else {
        selectedOptions.value.forEach((o, oIndex) => {
          if (o[optionsValueKey.value] === option[optionsValueKey.value]) {
            selectedOptions.value.splice(oIndex, 1);
            selectedIDs.value.splice(oIndex, 1);
            emit("update:modelValue", selectedIDs.value);
            showOptions.value = false;
          }
        });
      }
    };
    const clear = () => {
      searchText.value = "";
      showOptions.value = false;
      emit("update:modelValue", []);
      selectedIDs.value = [];
    };
    const searchText = ref("");
    const searchedList = computed(() => {
      if (searchText.value === "") {
        return options.value;
      }
      return options.value.filter((option) => option[optionsLabelKey.value].toLowerCase().replace(/[^a-zA-Z ]/g, "").includes(searchText.value.toLowerCase().replace(/[^a-zA-Z ]/g, "")));
    });
    const hasSlot = (name) => !!useSlots()[name];
    return {
      showOptions,
      selectItem,
      selectedOptions,
      selectedIDs,
      searchText,
      searchedList,
      t,
      clear,
      hasSlot,
      selectOption,
      updateOptionsShowStatus
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_badge = resolveComponent("t-badge");
  const _component_t_input_text = resolveComponent("t-input-text");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "input-select",
    ref: "selectItem"
  }, _attrs))} data-v-1bd5396a><div class="select-container" data-v-1bd5396a>`);
  if (_ctx.hasSlot("icon")) {
    _push(`<div class="${ssrRenderClass([`radius-l-${_ctx.radius}`, "select-input-icon"])}" data-v-1bd5396a>`);
    ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([[
    _ctx.hasSlot("icon") ? `radius-r-${_ctx.radius}` : `radius-${_ctx.radius}`,
    { "input-disabled": _ctx.disabled },
    _ctx.disabled || _ctx.readOnly ? "cursor-not-allowed" : "cursor-pointer"
  ], "select-trigger"])}" data-v-1bd5396a><div class="select-trigger-text" data-v-1bd5396a>`);
  if (_ctx.modelValue === [] || _ctx.modelValue === null || _ctx.modelValue.length === 0) {
    _push(`<span class="select-trigger-placeholder" data-v-1bd5396a>${ssrInterpolate(_ctx.t(_ctx.placeHolder))}</span>`);
  } else {
    _push(`<div class="multi-select-selected-options-container" data-v-1bd5396a><!--[-->`);
    ssrRenderList(_ctx.selectedOptions, (option) => {
      _push(ssrRenderComponent(_component_t_badge, { class: "multi-select-selected-badge" }, createSlots({
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.hasSlot("label") && !_ctx.disabled) {
              ssrRenderSlot(_ctx.$slots, "label", { props: option }, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
            if (!_ctx.hasSlot("label") && !_ctx.disabled) {
              _push2(`<span data-v-1bd5396a${_scopeId}>${ssrInterpolate(option[_ctx.optionsLabelKey])}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.hasSlot("label") && !_ctx.disabled ? renderSlot(_ctx.$slots, "label", {
                key: 0,
                props: option,
                innerHTML: option[_ctx.optionsLabelKey]
              }, void 0, true) : createCommentVNode("", true),
              !_ctx.hasSlot("label") && !_ctx.disabled ? (openBlock(), createBlock("span", {
                key: 1,
                textContent: toDisplayString(option[_ctx.optionsLabelKey])
              }, null, 8, ["textContent"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 2
      }, [
        !_ctx.readOnly && !_ctx.disabled ? {
          name: "icon",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="multi-select-option-clear-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-1bd5396a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-1bd5396a${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  onClick: withModifiers(($event) => _ctx.selectOption(option), ["stop"]),
                  class: "multi-select-option-clear-icon",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], 8, ["onClick"]))
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
    });
    _push(`<!--]--></div>`);
  }
  _push(`</div><div class="inline-flex" data-v-1bd5396a>`);
  if (_ctx.clearButton && _ctx.selectedOptions.length > 0 && !_ctx.readOnly && !_ctx.disabled) {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" class="input-clear-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-1bd5396a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-1bd5396a></path></svg>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<svg class="${ssrRenderClass([[
    _ctx.showOptions ? "rotate-90" : "rotate-0",
    "transition-size-short"
  ], "w-5 h-5 transform"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-1bd5396a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-1bd5396a></path></svg></div></div></div>`);
  if (_ctx.showOptions) {
    _push(`<div class="${ssrRenderClass([`radius-${_ctx.radius}`, "select-options-container"])}" data-v-1bd5396a><div class="${ssrRenderClass([{ "max-h-56": !_ctx.search }, "select-options-content"])}" data-v-1bd5396a>`);
    if (_ctx.search && _ctx.options.length > 0) {
      _push(`<div class="select-search-container" data-v-1bd5396a>`);
      _push(ssrRenderComponent(_component_t_input_text, {
        modelValue: _ctx.searchText,
        "onUpdate:modelValue": ($event) => _ctx.searchText = $event,
        placeholder: _ctx.t(_ctx.searchPlaceHolder),
        "icon-type": "inside"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-1bd5396a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-1bd5396a${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
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
                  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--[-->`);
    ssrRenderList(_ctx.searchedList, (option, index) => {
      _push(`<!--[-->`);
      if (_ctx.search ? index < _ctx.showingMaxOptions : true) {
        _push(`<div class="${ssrRenderClass([
          "select-option-item",
          { "select-option-active-item": _ctx.modelValue.includes(option[_ctx.optionsValueKey]) },
          `radius-${_ctx.radius}`
        ])}" data-v-1bd5396a>`);
        if (_ctx.hasSlot("label")) {
          ssrRenderSlot(_ctx.$slots, "label", { props: option }, null, _push, _parent);
        } else {
          _push(`<span data-v-1bd5396a>${ssrInterpolate(option[_ctx.optionsLabelKey])}</span>`);
        }
        if (_ctx.modelValue.includes(option[_ctx.optionsValueKey])) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" class="select-option-active-item-icon" viewBox="0 0 20 20" fill="currentColor" data-v-1bd5396a><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-1bd5396a></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]-->`);
    if (_ctx.options.length === 0) {
      _push(`<div data-v-1bd5396a>${ssrInterpolate(_ctx.t("component.input.select.addSource"))}</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    if (_ctx.searchedList.length > _ctx.showingMaxOptions && _ctx.search) {
      _push(`<div class="select-many-result" data-v-1bd5396a>${ssrInterpolate(_ctx.t("component.input.select.manyResults", {
        showingMaxOptions: _ctx.showingMaxOptions,
        totalOptions: _ctx.searchedList.length
      }))}</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Inputs/TInputMultiSelect.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TInputMultiSelect = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-1bd5396a"]]);
const _sfc_main = defineComponent({
  name: "MultiSelectInput",
  components: {
    TInputMultiSelect,
    AppLayout,
    TButton: _sfc_main$2,
    TFormSection,
    TFormContent,
    TInputGroup
  },
  props: {
    users: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup() {
    const form = ref({
      managers: [],
      facilities: []
    });
    const facilities = [
      { name: "Computer", value: "computer" },
      { name: "Phone", value: "phone" },
      { name: "Lodge", value: "lodge" },
      { name: "Personal Office", value: "personal-office" },
      { name: "Shared Office", value: "shared-office" }
    ];
    const reset = () => {
      form.value.managers = [];
      form.value.facilities = [];
    };
    return { form, facilities, reset };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_t_button = resolveComponent("t-button");
  const _component_icon = resolveComponent("icon");
  const _component_t_form_content = resolveComponent("t-form-content");
  const _component_t_form_section = resolveComponent("t-form-section");
  const _component_t_input_group = resolveComponent("t-input-group");
  const _component_t_input_multi_select = resolveComponent("t-input-multi-select");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Multi Select Input Component" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Multi Select Input Component `);
      } else {
        return [
          createTextVNode(" Multi Select Input Component ")
        ];
      }
    }),
    "action-buttons": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_t_button, {
          radius: 3,
          color: "yellow"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_icon, { icon: "angle-left" }, null, _parent3, _scopeId2));
              _push3(` Back to Home `);
            } else {
              return [
                createVNode(_component_icon, { icon: "angle-left" }),
                createTextVNode(" Back to Home ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_t_button, {
          radius: 3,
          color: "green"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_icon, { icon: "plus-circle" }, null, _parent3, _scopeId2));
              _push3(` Add New `);
            } else {
              return [
                createVNode(_component_icon, { icon: "plus-circle" }),
                createTextVNode(" Add New ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_t_button, {
            radius: 3,
            color: "yellow"
          }, {
            default: withCtx(() => [
              createVNode(_component_icon, { icon: "angle-left" }),
              createTextVNode(" Back to Home ")
            ]),
            _: 1
          }),
          createVNode(_component_t_button, {
            radius: 3,
            color: "green"
          }, {
            default: withCtx(() => [
              createVNode(_component_icon, { icon: "plus-circle" }),
              createTextVNode(" Add New ")
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_t_form_content, { onReset: _ctx.reset }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_form_section, {
                description: "This information is subject to personal data protection law.",
                title: "Personal Infos"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 md:col-span-6",
                      label: "Managers - Simple",
                      labelFor: "manager"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_multi_select, {
                            id: "managers",
                            modelValue: _ctx.form.managers,
                            "onUpdate:modelValue": ($event) => _ctx.form.managers = $event,
                            options: _ctx.users,
                            "options-label-key": "name",
                            "options-value-key": "id"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_multi_select, {
                              id: "managers",
                              modelValue: _ctx.form.managers,
                              "onUpdate:modelValue": ($event) => _ctx.form.managers = $event,
                              options: _ctx.users,
                              "options-label-key": "name",
                              "options-value-key": "id"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 md:col-span-6",
                      label: "Facilities - Rich Options Content",
                      "label-for": "facilities"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_multi_select, {
                            id: "facilities",
                            modelValue: _ctx.form.facilities,
                            "onUpdate:modelValue": ($event) => _ctx.form.facilities = $event,
                            search: false,
                            options: _ctx.facilities,
                            "options-label-key": "name",
                            "options-value-key": "value"
                          }, {
                            label: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="flex items-center space-x-1"${_scopeId5}>`);
                                if (props.value === "computer") {
                                  _push6(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"${_scopeId5}></path></svg>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                                if (props.value === "phone") {
                                  _push6(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"${_scopeId5}></path></svg>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                                if (props.value === "lodge") {
                                  _push6(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"${_scopeId5}></path></svg>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                                if (props.value === "personal-office") {
                                  _push6(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId5}></path></svg>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                                if (props.value === "shared-office") {
                                  _push6(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"${_scopeId5}></path></svg>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                                _push6(`<span${_scopeId5}>${ssrInterpolate(props.name)}</span></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center space-x-1" }, [
                                    props.value === "computer" ? (openBlock(), createBlock("svg", {
                                      key: 0,
                                      class: "w-4 h-4",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                      })
                                    ])) : createCommentVNode("", true),
                                    props.value === "phone" ? (openBlock(), createBlock("svg", {
                                      key: 1,
                                      class: "w-4 h-4",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                      })
                                    ])) : createCommentVNode("", true),
                                    props.value === "lodge" ? (openBlock(), createBlock("svg", {
                                      key: 2,
                                      class: "w-4 h-4",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                      })
                                    ])) : createCommentVNode("", true),
                                    props.value === "personal-office" ? (openBlock(), createBlock("svg", {
                                      key: 3,
                                      class: "w-4 h-4",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                      })
                                    ])) : createCommentVNode("", true),
                                    props.value === "shared-office" ? (openBlock(), createBlock("svg", {
                                      key: 4,
                                      class: "w-4 h-4",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                      })
                                    ])) : createCommentVNode("", true),
                                    createVNode("span", {
                                      textContent: toDisplayString(props.name)
                                    }, null, 8, ["textContent"])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_multi_select, {
                              id: "facilities",
                              modelValue: _ctx.form.facilities,
                              "onUpdate:modelValue": ($event) => _ctx.form.facilities = $event,
                              search: false,
                              options: _ctx.facilities,
                              "options-label-key": "name",
                              "options-value-key": "value"
                            }, {
                              label: withCtx(({ props }) => [
                                createVNode("div", { class: "flex items-center space-x-1" }, [
                                  props.value === "computer" ? (openBlock(), createBlock("svg", {
                                    key: 0,
                                    class: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    })
                                  ])) : createCommentVNode("", true),
                                  props.value === "phone" ? (openBlock(), createBlock("svg", {
                                    key: 1,
                                    class: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    })
                                  ])) : createCommentVNode("", true),
                                  props.value === "lodge" ? (openBlock(), createBlock("svg", {
                                    key: 2,
                                    class: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    })
                                  ])) : createCommentVNode("", true),
                                  props.value === "personal-office" ? (openBlock(), createBlock("svg", {
                                    key: 3,
                                    class: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    })
                                  ])) : createCommentVNode("", true),
                                  props.value === "shared-office" ? (openBlock(), createBlock("svg", {
                                    key: 4,
                                    class: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    })
                                  ])) : createCommentVNode("", true),
                                  createVNode("span", {
                                    textContent: toDisplayString(props.name)
                                  }, null, 8, ["textContent"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 md:col-span-6",
                      label: "Disabled",
                      "label-for": "disabled"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_multi_select, {
                            id: "disabled",
                            options: _ctx.users,
                            disabled: ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_multi_select, {
                              id: "disabled",
                              options: _ctx.users,
                              disabled: ""
                            }, null, 8, ["options"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 md:col-span-6",
                      label: "Read Only",
                      "label-for": "readOnly"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_multi_select, {
                            id: "readOnly",
                            options: _ctx.users,
                            "options-value-key": "id",
                            "options-label-key": "name",
                            "model-value": [1, 2, 3],
                            "read-only": ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_multi_select, {
                              id: "readOnly",
                              options: _ctx.users,
                              "options-value-key": "id",
                              "options-label-key": "name",
                              "model-value": [1, 2, 3],
                              "read-only": ""
                            }, null, 8, ["options"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 md:col-span-6",
                        label: "Managers - Simple",
                        labelFor: "manager"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_multi_select, {
                            id: "managers",
                            modelValue: _ctx.form.managers,
                            "onUpdate:modelValue": ($event) => _ctx.form.managers = $event,
                            options: _ctx.users,
                            "options-label-key": "name",
                            "options-value-key": "id"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 md:col-span-6",
                        label: "Facilities - Rich Options Content",
                        "label-for": "facilities"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_multi_select, {
                            id: "facilities",
                            modelValue: _ctx.form.facilities,
                            "onUpdate:modelValue": ($event) => _ctx.form.facilities = $event,
                            search: false,
                            options: _ctx.facilities,
                            "options-label-key": "name",
                            "options-value-key": "value"
                          }, {
                            label: withCtx(({ props }) => [
                              createVNode("div", { class: "flex items-center space-x-1" }, [
                                props.value === "computer" ? (openBlock(), createBlock("svg", {
                                  key: 0,
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  })
                                ])) : createCommentVNode("", true),
                                props.value === "phone" ? (openBlock(), createBlock("svg", {
                                  key: 1,
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                  })
                                ])) : createCommentVNode("", true),
                                props.value === "lodge" ? (openBlock(), createBlock("svg", {
                                  key: 2,
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                  })
                                ])) : createCommentVNode("", true),
                                props.value === "personal-office" ? (openBlock(), createBlock("svg", {
                                  key: 3,
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                  })
                                ])) : createCommentVNode("", true),
                                props.value === "shared-office" ? (openBlock(), createBlock("svg", {
                                  key: 4,
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                  })
                                ])) : createCommentVNode("", true),
                                createVNode("span", {
                                  textContent: toDisplayString(props.name)
                                }, null, 8, ["textContent"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 md:col-span-6",
                        label: "Disabled",
                        "label-for": "disabled"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_multi_select, {
                            id: "disabled",
                            options: _ctx.users,
                            disabled: ""
                          }, null, 8, ["options"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 md:col-span-6",
                        label: "Read Only",
                        "label-for": "readOnly"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_multi_select, {
                            id: "readOnly",
                            options: _ctx.users,
                            "options-value-key": "id",
                            "options-label-key": "name",
                            "model-value": [1, 2, 3],
                            "read-only": ""
                          }, null, 8, ["options"])
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
                createVNode(_component_t_form_section, {
                  description: "This information is subject to personal data protection law.",
                  title: "Personal Infos"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 md:col-span-6",
                      label: "Managers - Simple",
                      labelFor: "manager"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_multi_select, {
                          id: "managers",
                          modelValue: _ctx.form.managers,
                          "onUpdate:modelValue": ($event) => _ctx.form.managers = $event,
                          options: _ctx.users,
                          "options-label-key": "name",
                          "options-value-key": "id"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 md:col-span-6",
                      label: "Facilities - Rich Options Content",
                      "label-for": "facilities"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_multi_select, {
                          id: "facilities",
                          modelValue: _ctx.form.facilities,
                          "onUpdate:modelValue": ($event) => _ctx.form.facilities = $event,
                          search: false,
                          options: _ctx.facilities,
                          "options-label-key": "name",
                          "options-value-key": "value"
                        }, {
                          label: withCtx(({ props }) => [
                            createVNode("div", { class: "flex items-center space-x-1" }, [
                              props.value === "computer" ? (openBlock(), createBlock("svg", {
                                key: 0,
                                class: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                })
                              ])) : createCommentVNode("", true),
                              props.value === "phone" ? (openBlock(), createBlock("svg", {
                                key: 1,
                                class: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                })
                              ])) : createCommentVNode("", true),
                              props.value === "lodge" ? (openBlock(), createBlock("svg", {
                                key: 2,
                                class: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                })
                              ])) : createCommentVNode("", true),
                              props.value === "personal-office" ? (openBlock(), createBlock("svg", {
                                key: 3,
                                class: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                })
                              ])) : createCommentVNode("", true),
                              props.value === "shared-office" ? (openBlock(), createBlock("svg", {
                                key: 4,
                                class: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                })
                              ])) : createCommentVNode("", true),
                              createVNode("span", {
                                textContent: toDisplayString(props.name)
                              }, null, 8, ["textContent"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 md:col-span-6",
                      label: "Disabled",
                      "label-for": "disabled"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_multi_select, {
                          id: "disabled",
                          options: _ctx.users,
                          disabled: ""
                        }, null, 8, ["options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 md:col-span-6",
                      label: "Read Only",
                      "label-for": "readOnly"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_multi_select, {
                          id: "readOnly",
                          options: _ctx.users,
                          "options-value-key": "id",
                          "options-label-key": "name",
                          "model-value": [1, 2, 3],
                          "read-only": ""
                        }, null, 8, ["options"])
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_t_form_content, { onReset: _ctx.reset }, {
            default: withCtx(() => [
              createVNode(_component_t_form_section, {
                description: "This information is subject to personal data protection law.",
                title: "Personal Infos"
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 md:col-span-6",
                    label: "Managers - Simple",
                    labelFor: "manager"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_multi_select, {
                        id: "managers",
                        modelValue: _ctx.form.managers,
                        "onUpdate:modelValue": ($event) => _ctx.form.managers = $event,
                        options: _ctx.users,
                        "options-label-key": "name",
                        "options-value-key": "id"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 md:col-span-6",
                    label: "Facilities - Rich Options Content",
                    "label-for": "facilities"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_multi_select, {
                        id: "facilities",
                        modelValue: _ctx.form.facilities,
                        "onUpdate:modelValue": ($event) => _ctx.form.facilities = $event,
                        search: false,
                        options: _ctx.facilities,
                        "options-label-key": "name",
                        "options-value-key": "value"
                      }, {
                        label: withCtx(({ props }) => [
                          createVNode("div", { class: "flex items-center space-x-1" }, [
                            props.value === "computer" ? (openBlock(), createBlock("svg", {
                              key: 0,
                              class: "w-4 h-4",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              })
                            ])) : createCommentVNode("", true),
                            props.value === "phone" ? (openBlock(), createBlock("svg", {
                              key: 1,
                              class: "w-4 h-4",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                              })
                            ])) : createCommentVNode("", true),
                            props.value === "lodge" ? (openBlock(), createBlock("svg", {
                              key: 2,
                              class: "w-4 h-4",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              })
                            ])) : createCommentVNode("", true),
                            props.value === "personal-office" ? (openBlock(), createBlock("svg", {
                              key: 3,
                              class: "w-4 h-4",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              })
                            ])) : createCommentVNode("", true),
                            props.value === "shared-office" ? (openBlock(), createBlock("svg", {
                              key: 4,
                              class: "w-4 h-4",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              })
                            ])) : createCommentVNode("", true),
                            createVNode("span", {
                              textContent: toDisplayString(props.name)
                            }, null, 8, ["textContent"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 md:col-span-6",
                    label: "Disabled",
                    "label-for": "disabled"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_multi_select, {
                        id: "disabled",
                        options: _ctx.users,
                        disabled: ""
                      }, null, 8, ["options"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 md:col-span-6",
                    label: "Read Only",
                    "label-for": "readOnly"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_multi_select, {
                        id: "readOnly",
                        options: _ctx.users,
                        "options-value-key": "id",
                        "options-label-key": "name",
                        "model-value": [1, 2, 3],
                        "read-only": ""
                      }, null, 8, ["options"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onReset"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/FormElements/MultiSelectInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MultiSelectInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  MultiSelectInput as default
};

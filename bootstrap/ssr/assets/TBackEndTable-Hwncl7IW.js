import { router } from "@inertiajs/vue3";
import { resolveComponent, mergeProps, useSSRContext, defineComponent, toRefs, ref, reactive, computed, watch, onBeforeMount, withCtx, createBlock, openBlock, createVNode, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, withModifiers, useSlots } from "vue";
import { debouncedWatch } from "@vueuse/core";
import { _ as _sfc_main$2, T as TAlert } from "./windowSizeCalculator-ej9CZPp5.js";
import { T as TModal } from "./TModal-BluvIe0P.js";
import { T as TInputCheckBox } from "./TInputCheckBox-HSBq-avl.js";
import { T as TInputSelect } from "./TInputSelect-BY60CBa7.js";
import { T as TDropdown } from "./TDropdown-DbVD8e4r.js";
import { T as TList, a as TListItem } from "./TListItem-DHyz0dl0.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { useI18n } from "vue-i18n";
import { t as table_tr, a as table_en } from "./table_lang-CXzpQG4k.js";
import _ from "lodash";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderTeleport } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { T as TPaginate } from "./TPaginate-AWicR3Cf.js";
const _sfc_main$1 = {
  name: "TInputBetween",
  components: { TInputText },
  props: {
    modelValue: {
      type: Object,
      default() {
        return {
          from: null,
          to: null
        };
      }
    },
    inputType: {
      type: String,
      default: "text"
    }
  },
  emits: ["update:modelValue"],
  setup() {
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_input_text = resolveComponent("t-input-text");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-12 gap-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_t_input_text, {
    class: "col-span-5",
    placeholder: "from",
    "model-value": $props.modelValue.from
  }, null, _parent));
  _push(`<span class="col-span-2 flex justify-center items-center"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>`);
  _push(ssrRenderComponent(_component_t_input_text, {
    class: "col-span-5",
    placeholder: "to",
    "model-value": $props.modelValue.to
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Inputs/TInputBetween.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TInputBetween = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  name: "TBackEndTable",
  components: {
    TAlert,
    TPaginate,
    TInputBetween,
    TInputText,
    TInputGroup,
    TListItem,
    TList,
    TDropdown,
    TInputSelect,
    TInputCheckBox,
    TModal,
    TButton: _sfc_main$2
  },
  props: {
    header: {
      type: Array,
      default() {
        return [];
      }
    },
    content: {
      type: Object,
      default() {
        return {};
      }
    },
    perPage: {
      type: Number,
      default: 5
    },
    design: {
      type: String,
      default: "elegant"
    },
    requestSearchKey: {
      type: String,
      default: "searchObj"
    },
    uniqueId: {
      type: String,
      default: "id"
    },
    rowBorder: {
      type: Boolean,
      default: true
    },
    rowZebra: {
      type: Boolean,
      default: true
    },
    rowHover: {
      type: Boolean,
      default: true
    },
    radius: {
      type: Number,
      default: 3
    },
    searchRoute: {
      type: String,
      default: ""
    },
    contentKey: {
      type: String,
      default: ""
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    paginationDetail: {
      type: Boolean,
      default: false
    },
    paginationDetailText: {
      type: String,
      default: "detailText"
    },
    paginationRange: {
      type: Number,
      default: 5
    },
    paginationJump: {
      type: Boolean,
      default: true
    },
    paginationShowArrowText: {
      type: Boolean,
      default: true
    },
    paginationPreviousText: {
      type: String,
      default: "previous"
    },
    paginationNextText: {
      type: String,
      default: "next"
    },
    paginationDetailReverse: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default() {
        return ["view"];
      }
    },
    actionsHeaderText: {
      type: String,
      default: "actions"
    },
    actionsModal: {
      type: Array,
      default() {
        return ["delete"];
      }
    }
  },
  emits: ["selectedItem"],
  setup(props, { slots, emit }) {
    const {
      header,
      content,
      perPage,
      radius,
      searchRoute,
      contentKey,
      actions,
      uniqueId,
      requestSearchKey
    } = toRefs(props);
    const { t } = useI18n({
      messages: {
        en: table_en,
        tr: table_tr
      }
    });
    const contentCellStyle = (itemIndex, cellIndex) => {
      let style = [];
      if (regeneratedContent.value.length > 1) {
        if (itemIndex === 1 && cellIndex === 1) {
          style.push("radius-tl-" + radius.value);
        } else if (itemIndex === 1 && cellIndex === regeneratedHeader.value.length && actions.value.length === 0) {
          style.push("radius-tr-" + radius.value);
        } else if (itemIndex === regeneratedContent.value.length && cellIndex === 1) {
          style.push("radius-bl-" + radius.value);
        } else if (itemIndex === regeneratedContent.value.length && cellIndex === regeneratedHeader.value.length && actions.value.length === 0) {
          style.push("radius-br-" + radius.value);
        }
      } else {
        if (cellIndex === 1) {
          style.push("radius-l-" + radius.value);
        } else if (cellIndex === regeneratedHeader.value.length && actions.value.length === 0) {
          style.push("radius-r-" + radius.value);
        }
      }
      return style;
    };
    const actionsCellStyle = (itemIndex) => {
      let style = [];
      if (regeneratedContent.value.length > 1) {
        if (itemIndex === 1) {
          style.push("radius-tr-" + radius.value);
        } else if (itemIndex === regeneratedContent.value.length) {
          style.push("radius-br-" + radius.value);
        }
      } else {
        style.push("radius-r-" + radius.value);
      }
      return style;
    };
    const showCustomizeModal = ref(false);
    const activeHeaders = reactive([]);
    const startDrag = (event, type, index) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("oldIndex", index);
      event.target.style.opacity = 1;
    };
    const onDrop = (event, item, index) => {
      const oldIndex = event.dataTransfer.getData("oldIndex");
      let cachedItem = header.value[oldIndex];
      startDrag(event, item, index);
      header.value[oldIndex] = header.value[index];
      header.value[index] = cachedItem;
    };
    const onDragOver = (event) => {
      event.target.style.opacity = 0.3;
    };
    const onDragLeave = (event) => {
      event.target.style.opacity = "1";
    };
    const regeneratedHeader = computed(() => {
      let newHeader = [...header.value];
      return newHeader.filter((i) => activeHeaders.includes(i.key));
    });
    const regeneratedContent = computed(() => {
      let newContent = [...content.value["data"]];
      return newContent.map((item) => {
        let row = {};
        activeHeaders.forEach((key) => {
          row[key] = item[key];
        });
        row[uniqueId.value] = item[uniqueId.value];
        return row;
      });
    });
    const dynamicPerPageRange = computed(() => {
      let rowCounts = [5, 15, 25, 50, 75, 100];
      let list = [];
      rowCounts.forEach((item) => {
        if (content.value["total"] ? content.value["total"] : content.value["meta"].total > item) {
          list.push({ key: item, label: item });
        }
      });
      return list;
    });
    const activePage = ref(1);
    watch(activePage, () => {
      router.reload(
        {
          data: {
            page: activePage.value
          },
          only: [contentKey.value]
        }
      );
    });
    const dataLoading = ref(false);
    const showAdvancedSearchPanel = ref(false);
    const simpleSearchableFields = reactive([]);
    const advancedSearchableFields = reactive([]);
    const sortableFields = reactive([]);
    const searchObj = reactive({
      searchType: "simple",
      simpleSearchText: "",
      perPage: perPage.value,
      sortKey: null,
      sortDirection: false,
      advancedSearchFields: {}
    });
    onBeforeMount(() => {
      header.value.forEach((item) => {
        if (item.status) {
          activeHeaders.push(item["key"]);
        }
      });
      header.value.forEach((item) => {
        if (item.sortable) {
          sortableFields.push(item["key"]);
        }
      });
      header.value.forEach((item) => {
        if (item.simpleSearchable) {
          simpleSearchableFields.push(item["key"]);
        }
      });
      header.value.forEach((item) => {
        if (item.advancedSearchable) {
          advancedSearchableFields.push({
            ...item,
            searchKey: item.advancedSearchKey ? item.advancedSearchKey : item.key
          });
        }
      });
      advancedSearchableFields.forEach((item) => {
        searchObj.advancedSearchFields[item.searchKey] = {
          value: item.advancedSearchInputType === "between" ? { from: null, to: null } : null,
          condition: item["compareOperators"] ? item["compareOperators"].length > 0 ? item["compareOperators"][0].key : null : null
        };
      });
    });
    debouncedWatch(
      () => _.cloneDeep(searchObj),
      () => {
        router.post(
          route(searchRoute.value),
          {
            [requestSearchKey.value]: {
              perPage: Number(searchObj.perPage),
              sortKey: searchObj.sortKey,
              sortDirection: searchObj.sortDirection,
              searchType: searchObj.searchType,
              searchValue: searchObj.searchType === "simple" ? {
                simpleSearchText: searchObj.simpleSearchText,
                simpleSearchFields: simpleSearchableFields
              } : searchObj.advancedSearchFields
            }
          },
          {
            only: [contentKey.value],
            onBefore: (visit) => {
              dataLoading.value = true;
            },
            onFinish: (visit) => {
              dataLoading.value = false;
            }
          }
        );
      },
      { debounce: 500 }
    );
    watch(showAdvancedSearchPanel, () => {
      showAdvancedSearchPanel.value ? searchObj.searchType = "advanced" : searchObj.searchType = "simple";
    });
    const selectedItem = ref(null);
    const selectItem = ($event, item, type) => {
      emit("selectedItem", {
        data: content.value.data.find((i) => i[uniqueId.value] === item[uniqueId.value]),
        action: type
      });
    };
    const tableErrors = computed(() => {
      let contentStatus = !Object.keys(content.value);
      let headerStatus = header.value.length === 0;
      let contentKeyStatus = !contentKey.value;
      let searchRouteStatus = !searchRoute.value;
      return [
        { status: contentStatus, title: "Content", errorText: "contentError" },
        { status: headerStatus, title: "Header", errorText: "headerError" },
        { status: contentKeyStatus, title: "Content Key", errorText: "contentKeyError" },
        { status: searchRouteStatus, title: "Search Route", errorText: "searchRouteError" }
      ];
    });
    const hasSlot = (name) => !!useSlots()[name];
    return {
      dataLoading,
      hasSlot,
      contentCellStyle,
      actionsCellStyle,
      dynamicPerPageRange,
      showCustomizeModal,
      activePage,
      activeHeaders,
      regeneratedHeader,
      regeneratedContent,
      startDrag,
      onDrop,
      onDragLeave,
      onDragOver,
      sortableFields,
      simpleSearchableFields,
      advancedSearchableFields,
      selectedItem,
      selectItem,
      showAdvancedSearchPanel,
      searchObj,
      tableErrors,
      t
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_input_text = resolveComponent("t-input-text");
  const _component_t_button = resolveComponent("t-button");
  const _component_t_input_group = resolveComponent("t-input-group");
  const _component_t_input_select = resolveComponent("t-input-select");
  const _component_t_input_between = resolveComponent("t-input-between");
  const _component_t_alert = resolveComponent("t-alert");
  const _component_t_dropdown = resolveComponent("t-dropdown");
  const _component_t_paginate = resolveComponent("t-paginate");
  const _component_t_modal = resolveComponent("t-modal");
  const _component_t_input_check_box = resolveComponent("t-input-check-box");
  _push(`<!--[--><div class="${ssrRenderClass([`table-${_ctx.design}`, "table-outside-container"])}" data-v-61687de7>`);
  if (_ctx.hasSlot("search") || _ctx.hasSlot("top-right") || _ctx.hasSlot("top-left") || _ctx.simpleSearchableFields.length > 0) {
    _push(`<div class="table-top" data-v-61687de7>`);
    if (_ctx.simpleSearchableFields.length > 0) {
      _push(`<div class="table-top-left" data-v-61687de7>`);
      _push(ssrRenderComponent(_component_t_input_text, {
        id: "search",
        type: "text",
        modelValue: _ctx.searchObj.simpleSearchText,
        "onUpdate:modelValue": ($event) => _ctx.searchObj.simpleSearchText = $event,
        radius: _ctx.radius,
        placeholder: _ctx.t("searchPlaceHolder"),
        disabled: _ctx.showAdvancedSearchPanel
      }, {
        icon: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-61687de7${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-61687de7${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-6 h-6",
                xmlns: "http://www.w3.org/2000/svg",
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
      _push(ssrRenderComponent(_component_t_button, {
        radius: _ctx.radius,
        border: "",
        onClick: ($event) => _ctx.showCustomizeModal = !_ctx.showCustomizeModal
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-61687de7${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" data-v-61687de7${_scopeId}></path></svg>`);
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
                  d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.advancedSearchableFields.length > 0) {
        _push(ssrRenderComponent(_component_t_button, {
          radius: _ctx.radius,
          border: "",
          onClick: ($event) => _ctx.showAdvancedSearchPanel = !_ctx.showAdvancedSearchPanel
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-61687de7${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" data-v-61687de7${_scopeId}></path></svg>`);
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
                    d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "top-left", {}, null, _push, _parent);
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.hasSlot("top-right")) {
      _push(`<div class="table-top-right" data-v-61687de7>`);
      ssrRenderSlot(_ctx.$slots, "top-right", {}, null, _push, _parent);
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.showAdvancedSearchPanel) {
    _push(`<div data-v-61687de7><div class="${ssrRenderClass([`radius-${_ctx.radius}`, "table-advanced-search-container"])}" data-v-61687de7><span id="title" data-v-61687de7>${ssrInterpolate(_ctx.t("advancedSearch"))}</span><div class="table-advanced-search-content-wrapper" data-v-61687de7><!--[-->`);
    ssrRenderList(_ctx.advancedSearchableFields, (field) => {
      _push(`<div data-v-61687de7>`);
      _push(ssrRenderComponent(_component_t_input_group, {
        label: field.label ?? field.key
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (field.advancedSearchInputType === "text") {
              _push2(ssrRenderComponent(_component_t_input_text, {
                modelValue: _ctx.searchObj.advancedSearchFields[field.searchKey].value,
                "onUpdate:modelValue": ($event) => _ctx.searchObj.advancedSearchFields[field.searchKey].value = $event,
                selectValue: _ctx.searchObj.advancedSearchFields[field.searchKey].condition,
                "onUpdate:selectValue": ($event) => _ctx.searchObj.advancedSearchFields[field.searchKey].condition = $event,
                options: field.compareOperators,
                "options-label-key": field.advancedSearchSelectLabelKey,
                "options-value-key": field.advancedSearchSelectValueKey,
                "select-position": field.compareOperators ? "right" : "",
                "select-type": "inside"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (field.advancedSearchInputType === "select") {
              _push2(ssrRenderComponent(_component_t_input_select, {
                modelValue: _ctx.searchObj.advancedSearchFields[field.searchKey].value,
                "onUpdate:modelValue": ($event) => _ctx.searchObj.advancedSearchFields[field.searchKey].value = $event,
                modelModifiers: { lazy: true },
                options: field.advancedSearchSelectInputSource,
                "options-label-key": field.advancedSearchSelectLabelKey,
                "options-value-key": field.advancedSearchSelectValueKey,
                search: field.advancedSearchSelectSearch,
                "search-place-holder": field["advancedSearchSelectSearchPlaceHolder"] !== null ? field["advancedSearchSelectSearchPlaceHolder"] : null,
                "place-holder": field["advancedSearchSelectPlaceHolder"] !== null ? field["advancedSearchSelectPlaceHolder"] : null
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (field.advancedSearchInputType === "between") {
              _push2(ssrRenderComponent(_component_t_input_between, {
                modelValue: _ctx.searchObj.advancedSearchFields[field.searchKey].value,
                "onUpdate:modelValue": ($event) => _ctx.searchObj.advancedSearchFields[field.searchKey].value = $event
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              field.advancedSearchInputType === "text" ? (openBlock(), createBlock(_component_t_input_text, {
                key: 0,
                modelValue: _ctx.searchObj.advancedSearchFields[field.searchKey].value,
                "onUpdate:modelValue": ($event) => _ctx.searchObj.advancedSearchFields[field.searchKey].value = $event,
                selectValue: _ctx.searchObj.advancedSearchFields[field.searchKey].condition,
                "onUpdate:selectValue": ($event) => _ctx.searchObj.advancedSearchFields[field.searchKey].condition = $event,
                options: field.compareOperators,
                "options-label-key": field.advancedSearchSelectLabelKey,
                "options-value-key": field.advancedSearchSelectValueKey,
                "select-position": field.compareOperators ? "right" : "",
                "select-type": "inside"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "selectValue", "onUpdate:selectValue", "options", "options-label-key", "options-value-key", "select-position"])) : createCommentVNode("", true),
              field.advancedSearchInputType === "select" ? (openBlock(), createBlock(_component_t_input_select, {
                key: 1,
                modelValue: _ctx.searchObj.advancedSearchFields[field.searchKey].value,
                "onUpdate:modelValue": ($event) => _ctx.searchObj.advancedSearchFields[field.searchKey].value = $event,
                modelModifiers: { lazy: true },
                options: field.advancedSearchSelectInputSource,
                "options-label-key": field.advancedSearchSelectLabelKey,
                "options-value-key": field.advancedSearchSelectValueKey,
                search: field.advancedSearchSelectSearch,
                "search-place-holder": field["advancedSearchSelectSearchPlaceHolder"] !== null ? field["advancedSearchSelectSearchPlaceHolder"] : null,
                "place-holder": field["advancedSearchSelectPlaceHolder"] !== null ? field["advancedSearchSelectPlaceHolder"] : null
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "options-label-key", "options-value-key", "search", "search-place-holder", "place-holder"])) : createCommentVNode("", true),
              field.advancedSearchInputType === "between" ? (openBlock(), createBlock(_component_t_input_between, {
                key: 2,
                modelValue: _ctx.searchObj.advancedSearchFields[field.searchKey].value,
                "onUpdate:modelValue": ($event) => _ctx.searchObj.advancedSearchFields[field.searchKey].value = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="grid grid-cols-1 gap-2" data-v-61687de7><!--[-->`);
  ssrRenderList(_ctx.tableErrors, (error) => {
    _push(`<!--[-->`);
    if (error.status) {
      _push(ssrRenderComponent(_component_t_alert, {
        key: error.title,
        title: `${error.title} ${_ctx.t("missing")}`,
        radius: _ctx.radius,
        color: "yellow",
        design: "outline"
      }, {
        icon: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-10 h-10 dark:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-61687de7${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" data-v-61687de7${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-10 h-10 dark:text-gray-700",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                })
              ]))
            ];
          }
        }),
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-61687de7${_scopeId}>${_ctx.t(error.errorText) ?? ""}</div>`);
          } else {
            return [
              createVNode("div", {
                innerHTML: _ctx.t(error.errorText)
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></div>`);
  if (_ctx.header.length > 0 && _ctx.content) {
    _push(`<div class="${ssrRenderClass([{ "opacity-25": _ctx.dataLoading }, "overflow-x-auto scrollbar scrollbar-thin transition-size-medium"])}" data-v-61687de7><table class="table-container" data-v-61687de7><thead data-v-61687de7><tr data-v-61687de7><!--[-->`);
    ssrRenderList(_ctx.regeneratedHeader, (item) => {
      _push(`<th style="${ssrRenderStyle({ width: item.width ? item.width + "%" : "auto" })}" data-v-61687de7><div class="${ssrRenderClass([
        "table-header-cell",
        { "cursor-pointer": _ctx.sortableFields.includes(item.key) },
        item.align === "right" ? "justify-end" : item.align === "center" ? "justify-center" : "justify-start"
      ])}" data-v-61687de7><span data-v-61687de7>${ssrInterpolate(item.label ?? item.key)}</span><span style="${ssrRenderStyle(_ctx.sortableFields.includes(item.key) ? null : { display: "none" })}" data-v-61687de7>`);
      if (_ctx.searchObj.sortKey === item.key) {
        _push(`<svg class="${ssrRenderClass([[
          "transform transition",
          _ctx.searchObj.sortDirection ? "rotate-180" : ""
        ], "h-5 w-5"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-61687de7><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" data-v-61687de7></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-61687de7><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" data-v-61687de7></path></svg>`);
      }
      _push(`</span></div></th>`);
    });
    _push(`<!--]-->`);
    if (_ctx.actions.length > 0) {
      _push(`<td class="table-header-cell" data-v-61687de7><span class="text-right w-full" data-v-61687de7>${ssrInterpolate(_ctx.actionsHeaderText)}</span></td>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</tr></thead><tbody data-v-61687de7><!--[-->`);
    ssrRenderList(_ctx.regeneratedContent, (item, itemIndex) => {
      _push(`<tr class="${ssrRenderClass([[
        { "table-content-zebra-row": _ctx.rowZebra },
        { "table-content-hover-row": _ctx.rowHover },
        { "table-content-border-row": _ctx.rowBorder }
      ], "table-content-row"])}" data-v-61687de7><!--[-->`);
      ssrRenderList(item, (cell, cellKey, cellIndex) => {
        _push(`<!--[-->`);
        if (cellKey !== _ctx.uniqueId) {
          _push(`<td class="${ssrRenderClass([_ctx.contentCellStyle(itemIndex + 1, cellIndex + 1), "table-content-cell"])}" data-v-61687de7><div class="${ssrRenderClass([
            "flex",
            _ctx.regeneratedHeader.find((h) => h.key === cellKey).align === "right" ? "justify-end" : _ctx.regeneratedHeader.find((h) => h.key === cellKey).align === "center" ? "justify-center" : "justify-start"
          ])}" data-v-61687de7>`);
          if (!_ctx.hasSlot(cellKey)) {
            _push(`<span data-v-61687de7>${ssrInterpolate(cell)}</span>`);
          } else {
            ssrRenderSlot(_ctx.$slots, cellKey, { props: item }, null, _push, _parent);
          }
          _push(`</div></td>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]-->`);
      if (_ctx.actions.length > 0) {
        _push(`<td class="${ssrRenderClass([_ctx.actionsCellStyle(itemIndex + 1), "table-content-cell"])}" data-v-61687de7><div class="flex justify-end" data-v-61687de7>`);
        _push(ssrRenderComponent(_component_t_dropdown, {
          align: "right",
          "button-design": "outline",
          "trigger-type": "rich",
          size: "fit"
        }, {
          trigger: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex h-full items-center" data-v-61687de7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-61687de7${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" data-v-61687de7${_scopeId}></path></svg></div>`);
            } else {
              return [
                createVNode("div", { class: "flex h-full items-center" }, [
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
                      d: "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    })
                  ]))
                ])
              ];
            }
          }),
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([`radius-${_ctx.radius}`, "flex justify-between items-center px-2 border dark:border-transparent dark:shadow-dark bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 p-1"])}" data-v-61687de7${_scopeId}><div class="${ssrRenderClass([`radius-${_ctx.radius}`, "hover:bg-red-100 hover:text-red-500 dark:hover:text-gray-200 dark:hover:bg-red-500 dark:hover:bg-opacity-75 cursor-pointer text-sm px-2"])}" data-v-61687de7${_scopeId}><div class="flex items-center h-6" data-v-61687de7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-61687de7${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-61687de7${_scopeId}></path></svg> ${ssrInterpolate(_ctx.t("actionDelete"))}</div></div><div class="${ssrRenderClass([`radius-${_ctx.radius}`, "hover:bg-indigo-100 hover:text-indigo-500 dark:hover:text-gray-200 dark:hover:bg-indigo-500 dark:hover:bg-opacity-75 cursor-pointer text-sm px-2"])}" data-v-61687de7${_scopeId}><div class="flex items-center h-6" data-v-61687de7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-61687de7${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-61687de7${_scopeId}></path></svg> ${ssrInterpolate(_ctx.t("actionEdit"))}</div></div><div class="${ssrRenderClass([`radius-${_ctx.radius}`, "hover:bg-blue-100 hover:text-blue-500 dark:hover:text-gray-200 dark:hover:bg-blue-500 dark:hover:bg-opacity-75 cursor-pointer text-sm px-2"])}" data-v-61687de7${_scopeId}><div class="flex items-center h-6" data-v-61687de7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-61687de7${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-61687de7${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-61687de7${_scopeId}></path></svg> ${ssrInterpolate(_ctx.t("actionView"))}</div></div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["flex justify-between items-center px-2 border dark:border-transparent dark:shadow-dark bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 p-1", `radius-${_ctx.radius}`]
                }, [
                  createVNode("div", {
                    class: ["hover:bg-red-100 hover:text-red-500 dark:hover:text-gray-200 dark:hover:bg-red-500 dark:hover:bg-opacity-75 cursor-pointer text-sm px-2", `radius-${_ctx.radius}`],
                    onClick: ($event) => _ctx.selectItem($event, item, "delete")
                  }, [
                    createVNode("div", { class: "flex items-center h-6" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5 mr-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        })
                      ])),
                      createTextVNode(" " + toDisplayString(_ctx.t("actionDelete")), 1)
                    ])
                  ], 10, ["onClick"]),
                  createVNode("div", {
                    class: ["hover:bg-indigo-100 hover:text-indigo-500 dark:hover:text-gray-200 dark:hover:bg-indigo-500 dark:hover:bg-opacity-75 cursor-pointer text-sm px-2", `radius-${_ctx.radius}`],
                    onClick: ($event) => _ctx.selectItem($event, item, "edit")
                  }, [
                    createVNode("div", { class: "flex items-center h-6" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5 mr-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        })
                      ])),
                      createTextVNode(" " + toDisplayString(_ctx.t("actionEdit")), 1)
                    ])
                  ], 10, ["onClick"]),
                  createVNode("div", {
                    class: ["hover:bg-blue-100 hover:text-blue-500 dark:hover:text-gray-200 dark:hover:bg-blue-500 dark:hover:bg-opacity-75 cursor-pointer text-sm px-2", `radius-${_ctx.radius}`],
                    onClick: ($event) => _ctx.selectItem($event, item, "view")
                  }, [
                    createVNode("div", { class: "flex items-center h-6" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5 mr-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        }),
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        })
                      ])),
                      createTextVNode(" " + toDisplayString(_ctx.t("actionView")), 1)
                    ])
                  ], 10, ["onClick"])
                ], 2)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tr>`);
    });
    _push(`<!--]-->`);
    if (_ctx.regeneratedContent.length === 0) {
      _push(`<tr data-v-61687de7><td${ssrRenderAttr("colspan", _ctx.regeneratedHeader.length + (_ctx.actions.length > 0 ? 1 : 0))} data-v-61687de7><div class="${ssrRenderClass([`radius-${_ctx.radius}`, "table-no-content"])}" data-v-61687de7><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-61687de7><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-61687de7></path></svg><span data-v-61687de7>${ssrInterpolate(_ctx.t("anyContentMessage"))}</span></div></td></tr>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</tbody></table>`);
    if (_ctx.content.per_page ? _ctx.content.total >= _ctx.content.per_page : _ctx.content.meta.total >= _ctx.content.meta.per_page) {
      _push(`<div class="table-paginator" data-v-61687de7>`);
      _push(ssrRenderComponent(_component_t_paginate, {
        modelValue: _ctx.activePage,
        "onUpdate:modelValue": ($event) => _ctx.activePage = $event,
        jump: _ctx.paginationJump,
        total: _ctx.content.total ? _ctx.content.total : _ctx.content.meta.total,
        range: 5,
        radius: _ctx.radius,
        "per-page-item": Number(_ctx.content.per_page ? _ctx.content.per_page : _ctx.content.meta.per_page),
        "previous-text": _ctx.paginationPreviousText,
        "next-text": _ctx.paginationNextText,
        detail: _ctx.paginationDetail,
        "detail-text": _ctx.paginationDetailText,
        reverse: _ctx.paginationDetailReverse
      }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  ssrRenderTeleport(_push, (_push2) => {
    _push2(ssrRenderComponent(_component_t_modal, {
      modelValue: _ctx.showCustomizeModal,
      "onUpdate:modelValue": ($event) => _ctx.showCustomizeModal = $event,
      title: _ctx.t("optionsModalTitle"),
      design: "elegant"
    }, {
      content: withCtx((_2, _push3, _parent2, _scopeId) => {
        if (_push3) {
          _push3(`<div class="flex flex-col text-left" data-v-61687de7${_scopeId}><h4 class="font-bold text-sm" data-v-61687de7${_scopeId}>${ssrInterpolate(_ctx.t("optionsModalColumnOrder"))}</h4><div class="flex flex-col max-w-min mt-4" data-v-61687de7${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.header, (item, itemIndex) => {
            _push3(`<div${ssrRenderAttr("draggable", true)} class="relative inline-flex items-center space-x-1 px-2 py-1" data-v-61687de7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 cursor-move" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-61687de7${_scopeId}><g id="g10617" transform="translate(1.0812535,-0.72530103)" data-v-61687de7${_scopeId}><rect style="${ssrRenderStyle({ "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" })}" id="rect10347" width="2" height="2" x="14.130877" y="11.725301" rx="0" data-v-61687de7${_scopeId}></rect><rect style="${ssrRenderStyle({ "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" })}" id="rect10347-4" width="2" height="2" x="5.7066164" y="20.149561" rx="0" data-v-61687de7${_scopeId}></rect><rect style="${ssrRenderStyle({ "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" })}" id="rect10347-8" width="2" height="2" x="5.7066164" y="3.3010411" rx="0" data-v-61687de7${_scopeId}></rect><rect style="${ssrRenderStyle({ "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" })}" id="rect10347-1" width="2" height="2" x="14.130877" y="3.3010411" rx="0" data-v-61687de7${_scopeId}></rect><rect style="${ssrRenderStyle({ "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" })}" id="rect10347-4-4" width="2" height="2" x="5.7066164" y="11.725301" rx="0" data-v-61687de7${_scopeId}></rect><rect style="${ssrRenderStyle({ "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" })}" id="rect10347-8-0" width="2" height="2" x="14.130877" y="20.149561" rx="0" data-v-61687de7${_scopeId}></rect></g></svg>`);
            _push3(ssrRenderComponent(_component_t_input_check_box, {
              modelValue: _ctx.activeHeaders,
              "onUpdate:modelValue": ($event) => _ctx.activeHeaders = $event,
              "input-value": item.key,
              class: "inline-block select-none",
              label: item.label ?? item.key,
              multipleOption: ""
            }, null, _parent2, _scopeId));
            _push3(`</div>`);
          });
          _push3(`<!--]--></div></div>`);
        } else {
          return [
            createVNode("div", { class: "flex flex-col text-left" }, [
              createVNode("h4", {
                class: "font-bold text-sm",
                textContent: toDisplayString(_ctx.t("optionsModalColumnOrder"))
              }, null, 8, ["textContent"]),
              createVNode("div", { class: "flex flex-col max-w-min mt-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.header, (item, itemIndex) => {
                  return openBlock(), createBlock("div", {
                    key: item.key,
                    onDrop: ($event) => _ctx.onDrop($event, "new", itemIndex),
                    onDragenter: withModifiers(() => {
                    }, ["prevent"]),
                    onDragover: [
                      withModifiers(() => {
                      }, ["prevent"]),
                      ($event) => _ctx.onDragOver($event)
                    ],
                    onDragstart: ($event) => _ctx.startDrag($event, "old", itemIndex),
                    onDragleave: ($event) => _ctx.onDragLeave($event),
                    draggable: true,
                    class: "relative inline-flex items-center space-x-1 px-2 py-1"
                  }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-4 w-4 shrink-0 cursor-move",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createVNode("g", {
                        id: "g10617",
                        transform: "translate(1.0812535,-0.72530103)"
                      }, [
                        createVNode("rect", {
                          style: { "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" },
                          id: "rect10347",
                          width: "2",
                          height: "2",
                          x: "14.130877",
                          y: "11.725301",
                          rx: "0"
                        }),
                        createVNode("rect", {
                          style: { "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" },
                          id: "rect10347-4",
                          width: "2",
                          height: "2",
                          x: "5.7066164",
                          y: "20.149561",
                          rx: "0"
                        }),
                        createVNode("rect", {
                          style: { "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" },
                          id: "rect10347-8",
                          width: "2",
                          height: "2",
                          x: "5.7066164",
                          y: "3.3010411",
                          rx: "0"
                        }),
                        createVNode("rect", {
                          style: { "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" },
                          id: "rect10347-1",
                          width: "2",
                          height: "2",
                          x: "14.130877",
                          y: "3.3010411",
                          rx: "0"
                        }),
                        createVNode("rect", {
                          style: { "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" },
                          id: "rect10347-4-4",
                          width: "2",
                          height: "2",
                          x: "5.7066164",
                          y: "11.725301",
                          rx: "0"
                        }),
                        createVNode("rect", {
                          style: { "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" },
                          id: "rect10347-8-0",
                          width: "2",
                          height: "2",
                          x: "14.130877",
                          y: "20.149561",
                          rx: "0"
                        })
                      ])
                    ])),
                    createVNode(_component_t_input_check_box, {
                      modelValue: _ctx.activeHeaders,
                      "onUpdate:modelValue": ($event) => _ctx.activeHeaders = $event,
                      "input-value": item.key,
                      class: "inline-block select-none",
                      label: item.label ?? item.key,
                      multipleOption: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "input-value", "label"])
                  ], 40, ["onDrop", "onDragenter", "onDragover", "onDragstart", "onDragleave"]);
                }), 128))
              ])
            ])
          ];
        }
      }),
      "footer-left": withCtx((_2, _push3, _parent2, _scopeId) => {
        if (_push3) {
          _push3(`<div class="inline-flex whitespace-nowrap items-center space-x-2" data-v-61687de7${_scopeId}><span data-v-61687de7${_scopeId}>${ssrInterpolate(_ctx.t("itemsCountPerPage"))}</span>`);
          _push3(ssrRenderComponent(_component_t_input_select, {
            modelValue: _ctx.searchObj.perPage,
            "onUpdate:modelValue": ($event) => _ctx.searchObj.perPage = $event,
            modelModifiers: { number: true },
            options: _ctx.dynamicPerPageRange,
            "clear-button": false,
            "place-holder": "t('itemsCountPerPage')"
          }, null, _parent2, _scopeId));
          _push3(`</div>`);
        } else {
          return [
            createVNode("div", { class: "inline-flex whitespace-nowrap items-center space-x-2" }, [
              createVNode("span", {
                textContent: toDisplayString(_ctx.t("itemsCountPerPage"))
              }, null, 8, ["textContent"]),
              createVNode(_component_t_input_select, {
                modelValue: _ctx.searchObj.perPage,
                "onUpdate:modelValue": ($event) => _ctx.searchObj.perPage = $event,
                modelModifiers: { number: true },
                options: _ctx.dynamicPerPageRange,
                "clear-button": false,
                "place-holder": "t('itemsCountPerPage')"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  }, "body", false, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Table/TBackEndTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TBackEndTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-61687de7"]]);
export {
  TBackEndTable as T
};

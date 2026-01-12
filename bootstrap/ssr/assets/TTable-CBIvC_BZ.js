import { defineComponent, toRefs, ref, reactive, onBeforeMount, computed, watch, resolveComponent, withCtx, createBlock, openBlock, createVNode, toDisplayString, Fragment, renderList, withModifiers, useSlots, useSSRContext } from "vue";
import { T as TPaginate } from "./TPaginate-AWicR3Cf.js";
import { a as _sfc_main$1 } from "./TButton-oXLR37ud.js";
import { T as TModal } from "./TModal-BluvIe0P.js";
import { T as TInputSelect } from "./TInputSelect-BY60CBa7.js";
import { T as TInputCheckBox } from "./TInputCheckBox-eDtuF0je.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import _ from "lodash";
import { useI18n } from "vue-i18n";
import { t as table_tr, a as table_en } from "./table_lang-CXzpQG4k.js";
import { ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderTeleport } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = defineComponent({
  name: "TTable",
  components: {
    TInputText,
    TInputCheckBox,
    TInputSelect,
    TModal,
    TButton: _sfc_main$1,
    TPaginate
  },
  props: {
    features: {
      type: Object,
      default() {
        return {
          table: {
            design: "filled",
            seperatedRow: false,
            rowBorder: true,
            zebraRow: true,
            radius: 3,
            uniqueIdKey: "id",
            perPage: 5
          },
          pagination: {
            status: true,
            range: 5,
            jump: true,
            radius: 3,
            arrowText: true,
            reverse: false,
            detail: true
          },
          actions: {
            status: true,
            headerText: "Actions"
          }
        };
      }
    },
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
    }
  },
  setup(props, { slots }) {
    const { header, content, features } = toRefs(props);
    const search = ref("");
    const activeHeaders = reactive([]);
    const sortableFields = reactive([]);
    const simpleSearchableFields = reactive([]);
    const showAdvancedSearchPanel = ref(false);
    const showCustomizeModal = ref(false);
    const activePage = ref(1);
    const perPageItem = ref(features.value["table"].perPage);
    const { t } = useI18n({
      messages: {
        en: table_en,
        tr: table_tr
      }
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
    });
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
      let newContent = [...paginatedContent.value];
      return newContent.map((item) => {
        let row = {};
        activeHeaders.forEach((key) => {
          row[key] = item[key];
        });
        return row;
      });
    });
    const contentCellStyle = (itemIndex, cellIndex) => {
      let style;
      let diffOperator;
      if (perPageItem.value > regeneratedContent.value.length) {
        diffOperator = regeneratedContent.value.length;
      } else {
        diffOperator = perPageItem.value;
      }
      style = "table-content-cell " + (itemIndex === 0 && cellIndex === 0 ? "radius-tl-" + features.value["table"].radius : itemIndex === 0 && cellIndex === regeneratedHeader.value.length - 1 ? "radius-tr-" + features.value["table"].radius : itemIndex + 1 === diffOperator && cellIndex === 0 ? "radius-bl-" + features.value["table"].radius : itemIndex + 1 === diffOperator && cellIndex === regeneratedHeader.value.length - 1 ? "radius-br-" + features.value["table"].radius : "");
      return style;
    };
    const dynamicPerPageItemRange = computed(() => {
      let rowCounts = [5, 15, 25, 50, 75, 100];
      let list = [];
      rowCounts.forEach((item) => {
        if (content.value.length > item) {
          list.push({ key: item, label: item });
        }
      });
      return list;
    });
    const paginatedContent = computed(() => {
      return sortedContent.value.slice((activePage.value - 1) * perPageItem.value, perPageItem.value * activePage.value);
    });
    const filteredContent = computed(() => {
      if (header.value.filter((h) => h.simpleSearchable === true).length > 0) {
        return content.value.filter((item) => {
          let query;
          header.value.filter((h) => h.simpleSearchable === true).forEach((i) => {
            query = item[i.key].toLowerCase().includes(search.value.toLowerCase()) || query;
          });
          return query;
        });
      } else {
        return content.value;
      }
    });
    const sortedContent = computed(() => {
      return filteredContent.value.sort((a, b) => {
        if (a[sort.key] < b[sort.key]) {
          return sort.direction === "asc" ? -1 : 1;
        } else if (a[sort.key] > b[sort.key]) {
          return sort.direction === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      });
    });
    const sort = reactive({
      trigger: true,
      key: "",
      direction: "desc"
    });
    watch(() => _.cloneDeep(sort), (newValue, oldValue) => {
      if (newValue.key === oldValue.key) {
        if (sort.direction === "asc") {
          sort.direction = "desc";
        } else {
          sort.direction = "asc";
        }
      }
    }, {
      deep: true
    });
    const hasSlot = (name) => !!useSlots()[name];
    return {
      hasSlot,
      onDrop,
      onDragLeave,
      onDragOver,
      startDrag,
      contentCellStyle,
      sort,
      sortableFields,
      dynamicPerPageItemRange,
      regeneratedHeader,
      regeneratedContent,
      search,
      simpleSearchableFields,
      activeHeaders,
      showAdvancedSearchPanel,
      showCustomizeModal,
      activePage,
      paginatedContent,
      filteredContent,
      t,
      perPageItem
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_input_text = resolveComponent("t-input-text");
  const _component_t_button = resolveComponent("t-button");
  const _component_t_paginate = resolveComponent("t-paginate");
  const _component_t_modal = resolveComponent("t-modal");
  const _component_t_input_check_box = resolveComponent("t-input-check-box");
  const _component_t_input_select = resolveComponent("t-input-select");
  _push(`<!--[--><div class="${ssrRenderClass([`table-${_ctx.features.table.design}`, "table-outside-container"])}" data-v-836d094a>`);
  if (_ctx.hasSlot("search") || _ctx.hasSlot("top-right") || _ctx.hasSlot("top-left") || _ctx.simpleSearchableFields.length > 0) {
    _push(`<div class="table-top" data-v-836d094a>`);
    if (_ctx.simpleSearchableFields.length > 0) {
      _push(`<div class="table-top-left" data-v-836d094a>`);
      _push(ssrRenderComponent(_component_t_input_text, {
        id: "search",
        type: "text",
        modelValue: _ctx.search,
        "onUpdate:modelValue": ($event) => _ctx.search = $event,
        radius: _ctx.features.table.radius,
        placeholder: _ctx.t("searchPlaceHolder")
      }, {
        icon: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-836d094a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-836d094a${_scopeId}></path></svg>`);
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
        radius: _ctx.features.table.radius,
        border: "",
        onClick: ($event) => _ctx.showCustomizeModal = !_ctx.showCustomizeModal
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-836d094a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" data-v-836d094a${_scopeId}></path></svg>`);
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
      if (_ctx.hasSlot("search")) {
        _push(ssrRenderComponent(_component_t_button, {
          radius: _ctx.features.table.radius,
          border: "",
          onClick: ($event) => _ctx.showAdvancedSearchPanel = !_ctx.showAdvancedSearchPanel
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-836d094a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" data-v-836d094a${_scopeId}></path></svg>`);
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
      _push(`<div class="table-top-right" data-v-836d094a>`);
      ssrRenderSlot(_ctx.$slots, "top-right", {}, null, _push, _parent);
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.hasSlot("search") && _ctx.showAdvancedSearchPanel) {
    _push(`<div data-v-836d094a><div class="${ssrRenderClass([`radius-${_ctx.features.table.radius}`, "table-advanced-search-container"])}" data-v-836d094a><span id="title" data-v-836d094a>${ssrInterpolate(_ctx.t("advancedSearch"))}</span>`);
    ssrRenderSlot(_ctx.$slots, "search", {}, null, _push, _parent);
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="overflow-x-auto scrollbar scrollbar-thin" data-v-836d094a><table class="table-container" data-v-836d094a><thead data-v-836d094a><tr data-v-836d094a><!--[-->`);
  ssrRenderList(_ctx.regeneratedHeader, (item) => {
    _push(`<th style="${ssrRenderStyle({ width: item.width ? item.width + "%" : "auto" })}" data-v-836d094a><div class="${ssrRenderClass([
      "table-header-cell",
      { "cursor-pointer": _ctx.sortableFields.includes(item.key) },
      item.align === "right" ? "justify-end" : item.align === "center" ? "justify-center" : "justify-start"
    ])}" data-v-836d094a><span data-v-836d094a>${ssrInterpolate(item.label ?? item.key)}</span><span style="${ssrRenderStyle(_ctx.sortableFields.includes(item.key) ? null : { display: "none" })}" data-v-836d094a>`);
    if (_ctx.sort.key === item.key) {
      _push(`<svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([[
        "transform ",
        _ctx.sort.direction === "desc" ? "rotate-180" : "",
        "transition-size-short"
      ], "h-5 w-5"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-836d094a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" data-v-836d094a></path></svg>`);
    } else {
      _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-836d094a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" data-v-836d094a></path></svg>`);
    }
    _push(`</span></div></th>`);
  });
  _push(`<!--]--></tr></thead><tbody data-v-836d094a><!--[-->`);
  ssrRenderList(_ctx.regeneratedContent, (item, itemIndex) => {
    _push(`<tr class="${ssrRenderClass([[
      { "table-content-zebra-row": _ctx.features.table.zebraRow },
      { "table-content-hover-row": _ctx.features.table.hoverRow },
      { "table-content-border-row": _ctx.features.table.borderRow }
    ], "table-content-row"])}" data-v-836d094a><!--[-->`);
    ssrRenderList(item, (cell, cellKey, cellIndex) => {
      _push(`<td class="${ssrRenderClass(_ctx.contentCellStyle(itemIndex, cellIndex))}" data-v-836d094a><div class="${ssrRenderClass([
        "flex",
        _ctx.regeneratedHeader.find((h) => h.key === cellKey).align === "right" ? "justify-end" : _ctx.regeneratedHeader.find((h) => h.key === cellKey).align === "center" ? "justify-center" : "justify-start"
      ])}" data-v-836d094a>`);
      if (!_ctx.hasSlot(cellKey)) {
        _push(`<span data-v-836d094a>${ssrInterpolate(cell)}</span>`);
      } else {
        ssrRenderSlot(_ctx.$slots, cellKey, { props: item }, null, _push, _parent);
      }
      _push(`</div></td>`);
    });
    _push(`<!--]--></tr>`);
  });
  _push(`<!--]-->`);
  if (_ctx.regeneratedContent.length === 0) {
    _push(`<tr data-v-836d094a><td${ssrRenderAttr("colspan", _ctx.regeneratedHeader.length)} data-v-836d094a><div class="${ssrRenderClass([`radius-${_ctx.features.table.radius}`, "table-no-content"])}" data-v-836d094a><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-836d094a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-836d094a></path></svg><span data-v-836d094a>${ssrInterpolate(_ctx.t("anyContentMessage"))}</span></div></td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table>`);
  if (_ctx.filteredContent.length > _ctx.perPageItem) {
    _push(`<div class="flex py-4 justify-center" data-v-836d094a>`);
    _push(ssrRenderComponent(_component_t_paginate, {
      modelValue: _ctx.activePage,
      "onUpdate:modelValue": ($event) => _ctx.activePage = $event,
      jump: _ctx.features.pagination.jump,
      range: 5,
      total: _ctx.filteredContent.length,
      radius: _ctx.features.table.radius,
      "per-page-item": _ctx.perPageItem,
      "previous-text": _ctx.features.pagination.previousText,
      "next-text": _ctx.features.pagination.nextText,
      detail: _ctx.features.pagination.detail,
      "detail-text": _ctx.features.pagination.detailText
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  ssrRenderTeleport(_push, (_push2) => {
    _push2(ssrRenderComponent(_component_t_modal, {
      modelValue: _ctx.showCustomizeModal,
      "onUpdate:modelValue": ($event) => _ctx.showCustomizeModal = $event,
      title: _ctx.t("optionsModalTitle"),
      design: "elegant"
    }, {
      content: withCtx((_2, _push3, _parent2, _scopeId) => {
        if (_push3) {
          _push3(`<div class="flex flex-col text-left" data-v-836d094a${_scopeId}><h4 class="font-bold text-sm" data-v-836d094a${_scopeId}>${ssrInterpolate(_ctx.t("optionsModalColumnOrder"))}</h4><div class="flex flex-col max-w-min mt-4" data-v-836d094a${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.header, (item, itemIndex) => {
            _push3(`<div${ssrRenderAttr("draggable", true)} class="relative inline-flex items-center space-x-1 px-2 py-1" data-v-836d094a${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 cursor-move" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-836d094a${_scopeId}><g id="g10617" transform="translate(1.0812535,-0.72530103)" data-v-836d094a${_scopeId}><rect style="${ssrRenderStyle({ "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" })}" id="rect10347" width="2" height="2" x="14.130877" y="11.725301" rx="0" data-v-836d094a${_scopeId}></rect><rect style="${ssrRenderStyle({ "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" })}" id="rect10347-4" width="2" height="2" x="5.7066164" y="20.149561" rx="0" data-v-836d094a${_scopeId}></rect><rect style="${ssrRenderStyle({ "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" })}" id="rect10347-8" width="2" height="2" x="5.7066164" y="3.3010411" rx="0" data-v-836d094a${_scopeId}></rect><rect style="${ssrRenderStyle({ "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" })}" id="rect10347-1" width="2" height="2" x="14.130877" y="3.3010411" rx="0" data-v-836d094a${_scopeId}></rect><rect style="${ssrRenderStyle({ "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" })}" id="rect10347-4-4" width="2" height="2" x="5.7066164" y="11.725301" rx="0" data-v-836d094a${_scopeId}></rect><rect style="${ssrRenderStyle({ "fill": "none", "fill-opacity": "0.694779", "stroke-width": "2.22226", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "8" })}" id="rect10347-8-0" width="2" height="2" x="14.130877" y="20.149561" rx="0" data-v-836d094a${_scopeId}></rect></g></svg>`);
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
                      class: "h-4 w-4 cursor-move",
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
          _push3(`<div class="inline-flex whitespace-nowrap items-center space-x-2" data-v-836d094a${_scopeId}><span data-v-836d094a${_scopeId}>${ssrInterpolate(_ctx.t("itemsCountPerPage"))}</span>`);
          _push3(ssrRenderComponent(_component_t_input_select, {
            modelValue: _ctx.perPageItem,
            "onUpdate:modelValue": ($event) => _ctx.perPageItem = $event,
            modelModifiers: { number: true },
            options: _ctx.dynamicPerPageItemRange,
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
                modelValue: _ctx.perPageItem,
                "onUpdate:modelValue": ($event) => _ctx.perPageItem = $event,
                modelModifiers: { number: true },
                options: _ctx.dynamicPerPageItemRange,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Table/TTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-836d094a"]]);
export {
  TTable as T
};

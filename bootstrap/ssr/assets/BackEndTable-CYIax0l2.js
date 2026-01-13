import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, reactive, computed, useSSRContext } from "vue";
import { A as AppLayout, T as TBadge } from "./AppLayout-D0TyJNRu.js";
import { T as TBackEndTable } from "./TBackEndTable-COZOukYy.js";
import { a as _sfc_main$1 } from "./TButton-oXLR37ud.js";
import { T as TCodeShowcase } from "./TCodeShowcase-DOKY_97q.js";
import { useI18n } from "vue-i18n";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./windowSizeCalculator-4-m3qk2a.js";
import "./TDropdown-8pNOPgDY.js";
import "./TChevronDownIcon-fGhz3Hz_.js";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-Cw8URzx6.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "./TModal-BluvIe0P.js";
import "vue3-keypress";
import "./TInputCheckBox-eDtuF0je.js";
import "./TCheckIcon-CWPVq9Ck.js";
import "./TInputSelect-BY60CBa7.js";
import "./TInputText-CyR_XUuU.js";
import "./TListItem-DHyz0dl0.js";
import "./TInputGroup-D2FkHKt4.js";
import "./table_lang-CXzpQG4k.js";
import "lodash";
import "./TPaginate-AWicR3Cf.js";
const _sfc_main = defineComponent({
  name: "Table",
  components: {
    TButton: _sfc_main$1,
    TBadge,
    TBackEndTable,
    AppLayout,
    TCodeShowcase
  },
  props: {
    demoContent: {
      type: Object,
      default() {
        return {};
      }
    },
    searchDataMainProducts: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(props) {
    const filterStatus = reactive([
      { key: 1, label: "Active", color: "green" },
      { key: 0, label: "Passive", color: "red" }
    ]);
    const filterType = reactive([
      { key: 0, label: "Printer" },
      { key: 1, label: "Pencil" },
      { key: 2, label: "Clipper" }
    ]);
    const compareOperators = reactive([
      { key: "contains", label: "contains" },
      { key: "notContains", label: "not contains" },
      { key: "starts", label: "starts" },
      { key: "ends", label: "ends" }
    ]);
    reactive([
      { key: "=", label: "=" },
      { key: ">", label: ">" },
      { key: ">=", label: ">=" },
      { key: "<", label: "<" },
      { key: "<=", label: "<=" }
    ]);
    const selectData = reactive([
      {
        label: "Dark Mode",
        key: "darkMode",
        options: [
          { key: true, label: "Dark Mode" },
          { key: false, label: "Light Mode" }
        ]
      },
      {
        label: "Design",
        key: "design",
        options: [
          { key: "elegant", label: "Elegant" }
        ]
      },
      {
        label: "Radius",
        key: "radius",
        options: [
          { key: 0, label: "Without radius" },
          { key: 3, label: "Small" },
          { key: 5, label: "Large" }
        ]
      }
    ]);
    const selectedData = reactive({
      darkMode: false,
      design: "elegant",
      radius: 3
    });
    const header = reactive([
      {
        label: "Name",
        key: "name",
        align: "left",
        status: true,
        sortable: true,
        simpleSearchable: true,
        advancedSearchable: true,
        advancedSearchInputType: "text",
        compareOperators
      },
      {
        label: "Main Product",
        key: "main_product_name",
        align: "left",
        status: true,
        simpleSearchable: false,
        advancedSearchable: true,
        advancedSearchKey: "main_product_id",
        advancedSearchSelectInputSource: props.searchDataMainProducts,
        advancedSearchSelectLabelKey: "name",
        advancedSearchSelectValueKey: "id",
        advancedSearchInputType: "select",
        advancedSearchSelectSearch: true
      },
      {
        label: "Type",
        key: "type",
        align: "left",
        status: true,
        simpleSearchable: false,
        advancedSearchable: true,
        advancedSearchSelectInputSource: filterType,
        advancedSearchInputType: "select"
      },
      {
        label: "Price",
        key: "price",
        align: "center",
        status: true,
        sortable: true,
        simpleSearchable: true,
        advancedSearchable: false,
        advancedSearchInputType: "between"
      },
      {
        label: "Status",
        key: "status",
        align: "center",
        status: true,
        sortable: true,
        simpleSearchable: false,
        advancedSearchable: true,
        advancedSearchSelectInputSource: filterStatus,
        advancedSearchInputType: "select",
        compareOperators
      }
    ]);
    const features = computed(() => {
      return {
        table: {
          darkMode: selectedData.darkMode,
          design: selectedData.design,
          borderRow: true,
          zebraRow: false,
          hoverRow: true,
          radius: selectedData.radius,
          contentKey: "demoContent",
          searchRoute: "back-end-table"
        },
        pagination: {
          status: true,
          darkMode: selectedData.darkMode,
          radius: selectedData.radius,
          range: 5,
          jump: true
        },
        actions: {
          status: true,
          headerText: "Aksiyonlar"
        },
        deleteModal: {
          headerText: "Item's deleting",
          contentText: "You are going to delete <br><b>{$name}</b><br>Are you sure ?",
          icon: "warning"
        }
      };
    });
    const { t, tm } = useI18n({
      inheritLocale: true,
      messages: {
        en: {
          pageTitle: "Table with backend data",
          pageSubTitle: "Tables with Backend Data and Dynamic options",
          docDefault: "Default Value",
          docDescription: "Description",
          docType: "Value Type",
          docContentDesc: "",
          docHeaderDesc: "",
          docRequestSearchKeyDesc: "",
          docPerPageDesc: "",
          docUniqueIdDesc: "",
          docRadiusDesc: "It shapes the corners of the table.",
          docHeaderKeyDesc: "",
          docHeaderLabelDesc: "",
          docHeaderAlignDesc: "",
          docHeaderStatusDesc: "",
          docHeaderSortableDesc: "",
          docHeaderSimpleSearchableDesc: "",
          docHeaderAdvancedSearchableDesc: "",
          docHeaderAdvancedSearchKeyDesc: "",
          docHeaderAdvancedSearchInputTypeDesc: "",
          docHeaderAdvancedSearchInputSourceDesc: "",
          docHeaderAdvancedSearchLabelDesc: "",
          docHeaderAdvancedSearchValueDesc: "",
          docHeaderCompareOperatorsDesc: ""
        },
        tr: {
          pageTitle: "Tablo (Server Side)",
          pageSubTitle: "Sunucu Tarafında Çalışan Tablo Komponenti",
          docDefault: "Varsayılan Değer",
          docDescription: "Detay",
          docType: "Değer Türü",
          docContentDesc: "",
          docHeaderDesc: "",
          docRequestSearchKeyDesc: "",
          docPerPageDesc: "",
          docUniqueIdDesc: "",
          docRadiusDesc: "Tablonun köşelerinin ovalliğini kontrol etmenizi sağlar.",
          docHeaderKeyDesc: "",
          docHeaderLabelDesc: "",
          docHeaderAlignDesc: "",
          docHeaderStatusDesc: "",
          docHeaderSortableDesc: "",
          docHeaderSimpleSearchableDesc: "",
          docHeaderAdvancedSearchableDesc: "",
          docHeaderAdvancedSearchKeyDesc: "",
          docHeaderAdvancedSearchInputTypeDesc: "",
          docHeaderAdvancedSearchInputSourceDesc: "",
          docHeaderAdvancedSearchLabelDesc: "",
          docHeaderAdvancedSearchValueDesc: "",
          docHeaderCompareOperatorsDesc: ""
        }
      }
    });
    const docProps = {
      headers: [
        { id: "prop", label: "Prop" },
        { id: "type", label: tm("docType") },
        { id: "options", label: "Options", colorfulBg: true },
        { id: "default", label: tm("docDefault") },
        { id: "description", label: tm("docDescription") }
      ],
      content: [
        {
          id: "content",
          prop: "content",
          type: "Object",
          description: tm("docContentDesc")
        },
        {
          id: "header",
          prop: "header",
          type: "Array",
          description: tm("docHeaderDesc")
        },
        {
          id: "request-search-key",
          prop: "request-search-key",
          type: "String",
          default: "searchObj",
          description: tm("docRequestSearchKeyDesc")
        },
        {
          id: "per-page",
          prop: "per-page",
          type: "Number",
          default: "5",
          description: tm("docPerPageDesc")
        },
        {
          id: "unique-id",
          prop: "unique-id",
          type: "String",
          default: "id",
          description: tm("docUniqueIdDesc")
        },
        {
          id: "row-border",
          prop: "row-border",
          type: "Boolean",
          default: "true"
        },
        {
          id: "row-zebra",
          prop: "row-zebra",
          type: "Boolean",
          default: "true"
        },
        {
          id: "row-hover",
          prop: "row-hover",
          type: "Boolean",
          default: "true"
        },
        {
          id: "radius",
          prop: "radius",
          type: "Number",
          default: "3",
          options: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
          description: tm("docRadiusDesc")
        },
        {
          id: "show-pagination",
          prop: "show-pagination",
          type: "Boolean",
          default: "true"
        },
        {
          id: "pagination-detail",
          prop: "pagination-detail",
          type: "Boolean",
          default: "false"
        },
        {
          id: "pagination-detail-text",
          prop: "pagination-detail-text",
          type: "String",
          default: "{totalPage} pages - {totalRecord} records"
        },
        {
          id: "pagination-range",
          prop: "pagination-range",
          type: "Number",
          default: "5"
        },
        {
          id: "pagination-jump",
          prop: "pagination-jump",
          type: "Boolean",
          default: "true"
        },
        {
          id: "pagination-show-arrow-text",
          prop: "pagination-show-arrow-text",
          type: "Boolean",
          default: "true"
        },
        {
          id: "pagination-show-previous-text",
          prop: "pagination-show-previous-text",
          type: "String",
          default: "previous"
        },
        {
          id: "pagination-show-next-text",
          prop: "pagination-show-next-text",
          type: "String",
          default: "next"
        },
        {
          id: "actions",
          prop: "actions",
          type: "Array",
          default: "['view']",
          options: ["view", "delete", "edit"]
        },
        {
          id: "actions-modal",
          prop: "actions-modal",
          type: "Array",
          default: "['delete']",
          options: ["view", "delete", "edit"]
        },
        {
          id: "actions-header-text",
          prop: "actions-header-text",
          type: "String",
          default: "actions"
        },
        {
          id: "header[x].key",
          prop: "header[x].key",
          type: "String",
          description: tm("docHeaderKeyDesc")
        },
        {
          id: "header[x].label",
          prop: "header[x].label",
          type: "String",
          description: tm("docHeaderLabelDesc")
        },
        {
          id: "header[x].align",
          prop: "header[x].align",
          type: "String",
          options: ["left", "center", "right"],
          description: tm("docHeaderAlignDesc")
        },
        {
          id: "header[x].status",
          prop: "header[x].status",
          type: "Boolean",
          options: ["true", "false"],
          default: "true",
          description: tm("docHeaderStatusDesc")
        },
        {
          id: "header[x].sortable",
          prop: "header[x].sortable",
          type: "Boolean",
          options: ["true", "false"],
          default: "false",
          description: tm("docHeaderSortableDesc")
        },
        {
          id: "header[x].simpleSearchable",
          prop: "header[x].simpleSearchable",
          type: "Boolean",
          options: ["true", "false"],
          default: "false",
          description: tm("docHeaderSimpleSearchableDesc")
        },
        {
          id: "header[x].advancedSearchable",
          prop: "header[x].advancedSearchable",
          type: "Boolean",
          options: ["true", "false"],
          default: "false",
          description: tm("docHeaderAdvancedSearchableDesc")
        },
        {
          id: "header[x].advancedSearchKey",
          prop: "header[x].advancedSearchKey",
          type: "String",
          description: tm("docHeaderAdvancedSearchKeyDesc")
        },
        {
          id: "header[x].advancedSearchInputType",
          prop: "header[x].advancedSearchInputType",
          type: "String",
          options: ["text", "select", "between"],
          description: tm("docHeaderAdvancedSearchInputTypeDesc")
        },
        {
          id: "header[x].advancedSearchSelectInputSource",
          prop: "header[x].advancedSearchSelectInputSource",
          type: "Object",
          description: tm("docHeaderAdvancedSearchInputSourceDesc")
        },
        {
          id: "header[x].advancedSearchSelectLabelKey",
          prop: "header[x].advancedSearchSelectLabelKey",
          type: "String",
          description: tm("docHeaderAdvancedSearchLabelDesc")
        },
        {
          id: "header[x].advancedSearchSelectValueKey",
          prop: "header[x].advancedSearchSelectValueKey",
          type: "String",
          description: tm("docHeaderAdvancedSearchValueDesc")
        },
        {
          id: "header[x].compareOperators",
          prop: "header[x].compareOperators",
          type: "Array",
          description: tm("docHeaderCompareOperatorsDesc")
        }
      ]
    };
    const docSamples = {
      controller: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Models\\Product;\nuse Illuminate\\Http\\Request;\nuse Inertia\\Inertia;\n\nclass ProductController extends Controller\n{\n    /**\n    * Display a listing of the resource.\n    *\n    * @return \\Inertia\\Response\n    */\n    public function index(Request $request)\n    {\n\n        //Please define vue file directory accordance your file structure\n        return Inertia::render('Module/Product/Index', [\n            //You should to use tableSearch macro for dynamic query builder with $request->searchObj\n            'products' => Product::tableSearch($request->input('searchObj')),\n            //You can send only related data for search data. For example the managers list only related to the departments\n            // main_product_id = column name, products = table name\n            'searchDataMainProducts' => Product::getRelatedData('main_product_id', 'products')->get()\n        ]);\n    }",
      route: "//You can have routes like below (get or resource)Route::get('product', [Product::class, 'index'])->name('product.index')\n// or \nRoute::resource('product', Product::class)\n// You should add post route for search requests after get index or resource route\nRoute::post('product', [Product::class, 'index'])->name('product.search')//\n",
      js: `import TBackEndTable from '@/Components/Table/TBackEndTable.vue'

export default {

   components: { TBackEndTable },

   props: {
       productData: {
           type: Object,
           default() {
               return {};
           }
        },
        searchDataMainProducts: {
           type: Array,
           default() {
               return [];
           }
        }
    },

    setup(

       // You can use custom data set for advanced search options list.
       // It linked to status column in this case
       const filterStatus = reactive([
            {key: 1, label: "Active", color: "green"},
            {key: 0, label: "Passive", color: "red"}
        ]);
       //Compare definitions for fields, You can use them what if you want
       const compareOperators = reactive([
            {key: "contains", label: "contains"},
            {key: "notContains", label: "not contains"},
            {key: "starts", label: "starts"},
            {key: "ends", label: "ends"}
            {key: "=", label: "="},
            {key: ">", label: ">"},
            {key: ">=", label: ">="},
            {key: "<", label: "<"},
            {key: "<=", label: "<="}
        ]);

       const productDataHeaders = reactive([
            {
                label: "Name",
                key: "name",
                align: "left",
                status: true,
                sortable: true,
                simpleSearchable: true,
                advancedSearchable: true,
                advancedSearchInputType: "text",
                compareOperators: compareOperators
            },
            {
                label: "Main Product",
                key: "main_product_name",
                align: "left",
                status: true,
                simpleSearchable: true,
                advancedSearchable: true,
                advancedSearchKey: 'main_product_id', //Search in different column
                advancedSearchSelectInputSource: props.searchDataMainProducts, //Select options data source
                advancedSearchSelectLabelKey: 'name', //Showing label in the select input
                advancedSearchSelectValueKey: 'id', //Select input real value when it selected
                advancedSearchInputType: "select",
                advancedSearchSelectSearch: true
            },
            {
                label: "Status",
                key: "status",
                align: "center",
                status: true,
                sortable: true,
                simpleSearchable: true,
                advancedSearchable: true,
                advancedSearchSelectInputSource: filterStatus,
                advancedSearchInputType: "select",
            }
        ]);
   )
}`,
      template: '<t-back-end-table\n    :content="productData"\n    :header="productDataHeaders"\n    content-key="productData"\n    search-route="product.search" \n>\n\n    // You can add rich elements from this area to top right area of the table\n    <template #top-right>\n        <t-button color="green" design="light" border>+ Add New</t-button>\n    </template>\n\n    // If you want to add rich features to data showing, \n    you can use scopeSlot. #status is your column key. This is only exaple:\n    <template #status="{props}">\n        <t-badge :color="filterStatus.find(t=>t.key === props.status).color">\n            {{ filterStatus.find(t => t.key === props.status).label }}\n        </t-badge>\n    </template>\n\n</t-back-end-table>'
    };
    const showcaseTabs = [
      { id: "controller", label: "Controller", type: "code", codeLang: "php" },
      { id: "js", label: "JS", type: "code", codeLang: "javascript" },
      { id: "template", label: "Template", type: "code", codeLang: "html" },
      { id: "route", label: "Web.php", type: "code", codeLang: "php" },
      { id: "props", label: "Props", type: "table", table: docProps }
    ];
    return {
      selectData,
      selectedData,
      header,
      features,
      filterType,
      filterStatus,
      docProps,
      docSamples,
      showcaseTabs,
      t,
      tm
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_t_code_showcase = resolveComponent("t-code-showcase");
  const _component_t_back_end_table = resolveComponent("t-back-end-table");
  const _component_t_button = resolveComponent("t-button");
  const _component_t_badge = resolveComponent("t-badge");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Backend Table" }, _attrs), {
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
        _push2(ssrRenderComponent(_component_t_code_showcase, { tabs: _ctx.showcaseTabs }, {
          controller: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.docSamples.controller)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.docSamples.controller), 1)
              ];
            }
          }),
          route: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.docSamples.route)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.docSamples.route), 1)
              ];
            }
          }),
          js: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.docSamples.js)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.docSamples.js), 1)
              ];
            }
          }),
          template: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.docSamples.template)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.docSamples.template), 1)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_back_end_table, {
                content: _ctx.demoContent,
                header: _ctx.header,
                "content-key": "demoContent",
                "search-route": "back-end-table",
                "request-search-key": "demoSearch"
              }, {
                "top-right": withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_button, {
                      color: "green",
                      design: "light",
                      border: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`+ Add New`);
                        } else {
                          return [
                            createTextVNode("+ Add New")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_button, {
                        color: "green",
                        design: "light",
                        border: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("+ Add New")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                type: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate(_ctx.filterType.find((t) => t.key === Number(props.type)).label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.filterType.find((t) => t.key === Number(props.type)).label), 1)
                    ];
                  }
                }),
                status: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_badge, {
                      color: _ctx.filterStatus.find((t) => t.key === props.status).color
                    }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`${ssrInterpolate(_ctx.filterStatus.find((t) => t.key === props.status).label)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.filterStatus.find((t) => t.key === props.status).label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_badge, {
                        color: _ctx.filterStatus.find((t) => t.key === props.status).color
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.filterStatus.find((t) => t.key === props.status).label), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_back_end_table, {
                  content: _ctx.demoContent,
                  header: _ctx.header,
                  "content-key": "demoContent",
                  "search-route": "back-end-table",
                  "request-search-key": "demoSearch"
                }, {
                  "top-right": withCtx(() => [
                    createVNode(_component_t_button, {
                      color: "green",
                      design: "light",
                      border: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("+ Add New")
                      ]),
                      _: 1
                    })
                  ]),
                  type: withCtx(({ props }) => [
                    createTextVNode(toDisplayString(_ctx.filterType.find((t) => t.key === Number(props.type)).label), 1)
                  ]),
                  status: withCtx(({ props }) => [
                    createVNode(_component_t_badge, {
                      color: _ctx.filterStatus.find((t) => t.key === props.status).color
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.filterStatus.find((t) => t.key === props.status).label), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ]),
                  _: 1
                }, 8, ["content", "header"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_t_code_showcase, { tabs: _ctx.showcaseTabs }, {
            controller: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.docSamples.controller), 1)
            ]),
            route: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.docSamples.route), 1)
            ]),
            js: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.docSamples.js), 1)
            ]),
            template: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.docSamples.template), 1)
            ]),
            default: withCtx(() => [
              createVNode(_component_t_back_end_table, {
                content: _ctx.demoContent,
                header: _ctx.header,
                "content-key": "demoContent",
                "search-route": "back-end-table",
                "request-search-key": "demoSearch"
              }, {
                "top-right": withCtx(() => [
                  createVNode(_component_t_button, {
                    color: "green",
                    design: "light",
                    border: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("+ Add New")
                    ]),
                    _: 1
                  })
                ]),
                type: withCtx(({ props }) => [
                  createTextVNode(toDisplayString(_ctx.filterType.find((t) => t.key === Number(props.type)).label), 1)
                ]),
                status: withCtx(({ props }) => [
                  createVNode(_component_t_badge, {
                    color: _ctx.filterStatus.find((t) => t.key === props.status).color
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.filterStatus.find((t) => t.key === props.status).label), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                _: 1
              }, 8, ["content", "header"])
            ]),
            _: 1
          }, 8, ["tabs"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/BackEndTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackEndTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BackEndTable as default
};

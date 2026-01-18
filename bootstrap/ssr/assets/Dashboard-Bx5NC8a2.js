import { defineComponent, mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, reactive } from "vue";
import { A as AppLayout } from "./AppLayout-3kkfgqRQ.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TStatisticWidget } from "./TStatisticWidget-COaC7dRe.js";
import { T as TCashIcon } from "./TCashIcon-CWuKcSJK.js";
import { T as TShoppingBagIcon } from "./TShoppingBagIcon-DXnitscL.js";
import { T as TContentCard } from "./TContentCard-DJ3stJrh.js";
import { T as TList, a as TListItem } from "./TListItem-DHyz0dl0.js";
import { T as TAvatar } from "./TAvatar-BYbkHFXz.js";
import { T as TTable } from "./TTable-DYCqpQeM.js";
import { T as TBreadcrumb } from "./TBreadcrumb-C1mZMGtj.js";
import { T as TProgress } from "./TProgress-BC509yXV.js";
import { T as TAlert } from "./windowSizeCalculator-BWfQvLaG.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { T as TTrashIcon } from "./TTrashIcon-B76N3D4s.js";
import { T as TCheckCircleIcon } from "./TCheckCircleIcon-CASuI5wJ.js";
import { useI18n } from "vue-i18n";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./TDropdown-8S66trQc.js";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "./TPaginate-AWicR3Cf.js";
import "./TModal-BluvIe0P.js";
import "vue3-keypress";
import "./TInputSelect-BY60CBa7.js";
import "./TInputText-CyR_XUuU.js";
import "./TInputCheckBox-MNbC_ugI.js";
import "./TCheckIcon-CWPVq9Ck.js";
import "lodash";
import "./table_lang-CXzpQG4k.js";
const _sfc_main$1 = defineComponent({
  name: "TInformationCircleIcon"
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, _attrs))}><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TInformationCircleIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TInformationCircleIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  components: {
    AppLayout,
    TCheckCircleIcon,
    TTrashIcon,
    TInformationCircleIcon,
    TAlert,
    TProgress,
    TBreadcrumb,
    TTable,
    TAvatar,
    TListItem,
    TList,
    TContentCard,
    TShoppingBagIcon,
    TCashIcon,
    TStatisticWidget,
    GridSection
  },
  setup() {
    const { tm } = useI18n({
      messages: {
        bg: {
          title: "Добре дошли в Anemon",
          home: "Дом",
          dashboard: "Табло за управление",
          incomes: "Доходи",
          dailyDoneCharts: "Дневни графики",
          refunds: "Възстановявания",
          stationeryCost: "Възстановяване на средства",
          userList: "Списък с потребители",
          activeProjects: "Активни проекти",
          name: "Име",
          startDate: "Начална дата",
          endDate: "Крайна дата",
          status: "Състояние",
          simpleSearch: "Просто търсене",
          name1: "Siyan Alekov Hristov",
          name2: "Brayko Vasilov Atanasov",
          name3: "Mihaela Demitrova Tsankova",
          name4: "Tanya Iskrenova Adamova",
          alertDeleted: "Потребителят е изтрит успешно, щракнете върху мен",
          alertOverwrite: "Всички промени се презаписват върху себе си",
          alertSaved: "Нов елемент е запазен успешно",
          alertNewUser: "Новият потребител е добавен успешно\n<b>Потребител:</b> Sinan AYDOĞAN",
          alertDeletedUserTitle: "предупреждение",
          alertDeletedUser: "Потребителят е изтрит успешно\n<b>Потребител:</b> Zuhal TAŞÇI"
        },
        de: {
          title: "Willkommen bei Anemon",
          home: "zu Hause",
          dashboard: "Dashboard",
          incomes: "Einkommen",
          dailyDoneCharts: "Daily Done Charts",
          refunds: "Rückerstattungen",
          stationeryCost: "Erstattungen",
          userList: "Benutzerliste",
          activeProjects: "Aktive Projekte",
          name: "Name",
          startDate: "Startdatum",
          endDate: "Enddatum",
          status: "Zustand",
          simpleSearch: "Einfache Suche",
          name1: "Siyan Alekov Hristov",
          name2: "Victor Bergius",
          name3: "Jessi Nachtigal",
          name4: "Silvia Krauss",
          alertDeleted: "Der Benutzer wurde erfolgreich gelöscht, klick mich an",
          alertOverwrite: "Alle Änderungen überschreiben sich selbst",
          alertSaved: "Neues Element erfolgreich gespeichert",
          alertNewUser: "Der neue Benutzer wurde erfolgreich hinzugefügt.<br/><b>Benutzer:</b> Sinan AYDOĞAN",
          alertDeletedUserTitle: "Warnung",
          alertDeletedUser: "Der Benutzer wurde erfolgreich gelöscht<br/><b>Benutzer:</b> Zuhal TAŞÇI"
        },
        en: {
          title: "Welcome to Anemon",
          home: "Home",
          dashboard: "Dashboard",
          incomes: "Incomes",
          dailyDoneCharts: "Daily Done Charts",
          refunds: "Refunds",
          stationeryCost: "Refunds",
          userList: "Users List",
          activeProjects: "Active Projects",
          name: "Name",
          startDate: "Start Date",
          endDate: "End Date",
          status: "Status",
          simpleSearch: "Simple Search",
          name1: "Sinem Aydoğan",
          name2: "Reema Oconnor",
          name3: "Mia-Rose Justice",
          name4: "Louise Watts",
          alertDeleted: "The user deleted successfully,click me",
          alertOverwrite: "The all of changes overwrite to themself",
          alertSaved: "New item saved successfully",
          alertNewUser: "The new user is successfully added.<br/><b>User:</b> Sinan AYDOĞAN",
          alertDeletedUserTitle: "warning",
          alertDeletedUser: "The user deleted successfully<br/><b>User:</b> Zuhal TAŞÇI"
        },
        tr: {
          title: "Anemon'a Hoşgeldiniz",
          home: "Ana Sayfa",
          dashboard: "Panel",
          incomes: "Gelirler",
          dailyDoneCharts: "Günlük Tamamlanan",
          refunds: "Geri İadeler",
          stationeryCost: "Kırtasiye Gideri",
          userList: "Kullanıcılar",
          activeProjects: "Aktif Projeler",
          name: "İsim",
          startDate: "Başlangıç",
          endDate: "Bitiş",
          status: "Durum",
          simpleSearch: "Arama",
          name1: "Sinem Aydoğan",
          name2: "Zuhal Taşçı",
          name3: "Ayşe Gürel",
          name4: "Günel Deren",
          alertDeleted: "Kullanıcı başarıyla silindi",
          alertOverwrite: "Tüm değişikler var olan kayıdın üzerine yazılacak",
          alertSaved: "Yeni içerik başarıyla eklendi",
          alertNewUser: "Yeni kullanıcı başarıyla eklendi\n<b>Kullanıcı:</b> Sinan AYDOĞAN",
          alertDeletedUserTitle: "uyarı",
          alertDeletedUser: "Kullanıcı başarıyla silindi\n<b>Kullanıcı:</b> Zuhal TAŞÇI"
        },
        ru: {
          title: "Добро пожаловать в Анемон",
          home: "Дом",
          dashboard: "Панель приборов",
          incomes: "Доходы",
          dailyDoneCharts: "Ежедневные диаграммы",
          refunds: "Возвраты",
          stationeryCost: "Возврат",
          userList: "Список пользователей",
          activeProjects: "Активные проекты",
          name: "Имя",
          startDate: "Дата начала",
          endDate: "Дата окончания",
          status: "Статус",
          simpleSearch: "Простой поиск",
          name1: "Siyan Alekov Hristov",
          name2: "Shepkin Onufri Victorovich",
          name3: "Eybozhenko Lada Nikolayevna",
          name4: "Mager Vlada Makarovna",
          alertDeleted: "Пользователь успешно удален, нажмите на меня",
          alertOverwrite: "Все изменения перезаписываются на себя",
          alertSaved: "Новый элемент успешно сохранен",
          alertNewUser: "Новый пользователь успешно добавлен.<br/><b>Пользователь:</b> Синан АЙДОГАН",
          alertDeletedUserTitle: "предупреждение",
          alertDeletedUser: "Пользователь успешно удален<br/><b>Пользователь:</b> Зухал ТАШИ"
        },
        zh: {
          title: "欢迎来到海葵",
          home: "家",
          dashboard: "仪表板",
          incomes: "收入",
          dailyDoneCharts: "每日完成图表",
          refunds: "退款",
          stationeryCost: "退款",
          userList: "用户列表",
          activeProjects: "活动项目",
          name: "名称",
          startDate: "开始日期",
          endDate: "结束日期",
          status: "状态",
          simpleSearch: "简单搜索",
          name1: "Siyan Alekov Hristov",
          name2: "Yuan Lei",
          name3: "Liao Rong",
          name4: "Zhu Chang",
          alertDeleted: "用户删除成功，点我",
          alertOverwrite: "所有更改都覆盖到自己",
          alertSaved: "新项目保存成功",
          alertNewUser: "新用户添加成功。.<br/><b>用户:</b> Sinan AYDOĞAN",
          alertDeletedUserTitle: "警告",
          alertDeletedUser: "用户删除成功<br/><b>用户:</b> Zuhal TAŞÇI"
        }
      }
    });
    const breadcrumbs = reactive([
      { label: tm("home"), link: "/", active: false },
      { label: tm("dashboard"), link: "", active: true, activeColor: "blue" }
    ]);
    const tableHeader = reactive([
      { key: "id", label: "ID", align: "center" },
      { key: "name", label: "Name", align: "left", searchable: true, status: true },
      { key: "start", label: "Start Date", align: "left", status: true },
      { key: "end", label: "End Date", align: "left", status: true },
      { key: "status", label: "Status", align: "center", status: true }
    ]);
    const tableContent = reactive([
      { id: 1, name: "VueJS Components", start: "01.03.2021", end: "14.09.2021", status: 10 },
      { id: 2, name: "Custom Style Optimize", start: "02.05.2021", end: "25.08.2021", status: 20 },
      { id: 3, name: "Error Management", start: "25.04.2021", end: "30.12.2021", status: 70 }
    ]);
    const tableFeatures = reactive({
      table: {
        design: "elegant",
        rowBorder: true,
        zebraRow: true,
        radius: 3,
        perPage: 5
      },
      pagination: {
        status: true,
        radius: 3,
        range: 5,
        jump: true,
        nextText: "Sonraki",
        previousText: "Önceki",
        detailText: "Sayfa: $a - $b"
      },
      actions: {
        status: true,
        headerText: "Aksiyonlar"
      },
      deleteModal: {
        headerText: "Item's deleting",
        contentText: "You are going to delete <br><b></b><br>Are you sure ?",
        icon: "warning"
      }
    });
    return { tm, breadcrumbs, tableHeader, tableContent, tableFeatures };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_t_breadcrumb = resolveComponent("t-breadcrumb");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_statistic_widget = resolveComponent("t-statistic-widget");
  const _component_t_cash_icon = resolveComponent("t-cash-icon");
  const _component_t_shopping_bag_icon = resolveComponent("t-shopping-bag-icon");
  const _component_t_content_card = resolveComponent("t-content-card");
  const _component_t_list = resolveComponent("t-list");
  const _component_t_list_item = resolveComponent("t-list-item");
  const _component_t_avatar = resolveComponent("t-avatar");
  const _component_t_table = resolveComponent("t-table");
  const _component_t_progress = resolveComponent("t-progress");
  const _component_t_alert = resolveComponent("t-alert");
  const _component_t_trash_icon = resolveComponent("t-trash-icon");
  const _component_t_information_circle_icon = resolveComponent("t-information-circle-icon");
  const _component_t_check_circle_icon = resolveComponent("t-check-circle-icon");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({
    title: "Dashboard",
    header: _ctx.tm("title")
  }, _attrs), {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_t_breadcrumb, {
          "breadcrumb-style": 1,
          breadcrumbs: _ctx.breadcrumbs,
          color: "white"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_t_breadcrumb, {
            "breadcrumb-style": 1,
            breadcrumbs: _ctx.breadcrumbs,
            color: "white"
          }, null, 8, ["breadcrumbs"])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_grid_section, { col: 2 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_statistic_widget, {
                color: "solid-black",
                "diff-direction": "down",
                "diff-value": "15%",
                "widget-value": "254"
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>${ssrInterpolate(_ctx.tm("incomes"))}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        textContent: toDisplayString(_ctx.tm("incomes"))
                      }, null, 8, ["textContent"])
                    ];
                  }
                }),
                icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_cash_icon, { class: "w-16 h-16" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_cash_icon, { class: "w-16 h-16" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_statistic_widget, {
                radius: 5,
                color: "solid-green",
                "diff-direction": "up",
                "diff-value": "8",
                "widget-value": "30"
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>${ssrInterpolate(_ctx.tm("dailyDoneCharts"))}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        textContent: toDisplayString(_ctx.tm("dailyDoneCharts"))
                      }, null, 8, ["textContent"])
                    ];
                  }
                }),
                icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_shopping_bag_icon, { class: "w-16 h-16" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_shopping_bag_icon, { class: "w-16 h-16" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_statistic_widget, {
                radius: 5,
                color: "solid-red",
                "diff-direction": "down",
                "diff-value": "8%",
                "widget-value": "12.254,05 TL"
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>${ssrInterpolate(_ctx.tm("refunds"))}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        textContent: toDisplayString(_ctx.tm("refunds"))
                      }, null, 8, ["textContent"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_statistic_widget, {
                radius: 5,
                color: "solid-white",
                "diff-direction": "down",
                "diff-value": "15%",
                "widget-value": "254 USD"
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>${ssrInterpolate(_ctx.tm("stationeryCost"))}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        textContent: toDisplayString(_ctx.tm("stationeryCost"))
                      }, null, 8, ["textContent"])
                    ];
                  }
                }),
                picture: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", "/img/samples/imgMelBaylon-6WLcOFn4HKE-unsplash.jpg")}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: "/img/samples/imgMelBaylon-6WLcOFn4HKE-unsplash.jpg" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_statistic_widget, {
                  color: "solid-black",
                  "diff-direction": "down",
                  "diff-value": "15%",
                  "widget-value": "254"
                }, {
                  title: withCtx(() => [
                    createVNode("span", {
                      textContent: toDisplayString(_ctx.tm("incomes"))
                    }, null, 8, ["textContent"])
                  ]),
                  icon: withCtx(() => [
                    createVNode(_component_t_cash_icon, { class: "w-16 h-16" })
                  ]),
                  _: 1
                }),
                createVNode(_component_t_statistic_widget, {
                  radius: 5,
                  color: "solid-green",
                  "diff-direction": "up",
                  "diff-value": "8",
                  "widget-value": "30"
                }, {
                  title: withCtx(() => [
                    createVNode("span", {
                      textContent: toDisplayString(_ctx.tm("dailyDoneCharts"))
                    }, null, 8, ["textContent"])
                  ]),
                  icon: withCtx(() => [
                    createVNode(_component_t_shopping_bag_icon, { class: "w-16 h-16" })
                  ]),
                  _: 1
                }),
                createVNode(_component_t_statistic_widget, {
                  radius: 5,
                  color: "solid-red",
                  "diff-direction": "down",
                  "diff-value": "8%",
                  "widget-value": "12.254,05 TL"
                }, {
                  title: withCtx(() => [
                    createVNode("span", {
                      textContent: toDisplayString(_ctx.tm("refunds"))
                    }, null, 8, ["textContent"])
                  ]),
                  _: 1
                }),
                createVNode(_component_t_statistic_widget, {
                  radius: 5,
                  color: "solid-white",
                  "diff-direction": "down",
                  "diff-value": "15%",
                  "widget-value": "254 USD"
                }, {
                  title: withCtx(() => [
                    createVNode("span", {
                      textContent: toDisplayString(_ctx.tm("stationeryCost"))
                    }, null, 8, ["textContent"])
                  ]),
                  picture: withCtx(() => [
                    createVNode("img", { src: "/img/samples/imgMelBaylon-6WLcOFn4HKE-unsplash.jpg" })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_grid_section, { col: 3 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_content_card, { width: 1 }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>${ssrInterpolate(_ctx.tm("userList"))}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        textContent: toDisplayString(_ctx.tm("userList"))
                      }, null, 8, ["textContent"])
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_list, {
                      radius: 3,
                      class: "w-full",
                      design: "light",
                      color: "white",
                      border: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=1"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_avatar, {
                                    radius: 8,
                                    size: 2,
                                    src: "https://i.pravatar.cc/150?u=1"
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`${ssrInterpolate(_ctx.tm("name1"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.tm("name1")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=2"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_avatar, {
                                    radius: 8,
                                    size: 2,
                                    src: "https://i.pravatar.cc/150?u=2"
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`${ssrInterpolate(_ctx.tm("name2"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.tm("name2")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=3"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_avatar, {
                                    radius: 8,
                                    size: 2,
                                    src: "https://i.pravatar.cc/150?u=3"
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`${ssrInterpolate(_ctx.tm("name3"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.tm("name3")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_list_item, null, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=4"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_avatar, {
                                    radius: 8,
                                    size: 2,
                                    src: "https://i.pravatar.cc/150?u=4"
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`${ssrInterpolate(_ctx.tm("name4"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.tm("name4")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_list_item, null, {
                              icon: withCtx(() => [
                                createVNode(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=1"
                                })
                              ]),
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.tm("name1")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, null, {
                              icon: withCtx(() => [
                                createVNode(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=2"
                                })
                              ]),
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.tm("name2")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, null, {
                              icon: withCtx(() => [
                                createVNode(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=3"
                                })
                              ]),
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.tm("name3")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_t_list_item, null, {
                              icon: withCtx(() => [
                                createVNode(_component_t_avatar, {
                                  radius: 8,
                                  size: 2,
                                  src: "https://i.pravatar.cc/150?u=4"
                                })
                              ]),
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.tm("name4")), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_list, {
                        radius: 3,
                        class: "w-full",
                        design: "light",
                        color: "white",
                        border: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_list_item, null, {
                            icon: withCtx(() => [
                              createVNode(_component_t_avatar, {
                                radius: 8,
                                size: 2,
                                src: "https://i.pravatar.cc/150?u=1"
                              })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.tm("name1")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_list_item, null, {
                            icon: withCtx(() => [
                              createVNode(_component_t_avatar, {
                                radius: 8,
                                size: 2,
                                src: "https://i.pravatar.cc/150?u=2"
                              })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.tm("name2")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_list_item, null, {
                            icon: withCtx(() => [
                              createVNode(_component_t_avatar, {
                                radius: 8,
                                size: 2,
                                src: "https://i.pravatar.cc/150?u=3"
                              })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.tm("name3")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_t_list_item, null, {
                            icon: withCtx(() => [
                              createVNode(_component_t_avatar, {
                                radius: 8,
                                size: 2,
                                src: "https://i.pravatar.cc/150?u=4"
                              })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.tm("name4")), 1)
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
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_content_card, { width: 2 }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>${ssrInterpolate(_ctx.tm("activeProjects"))}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        textContent: toDisplayString(_ctx.tm("activeProjects"))
                      }, null, 8, ["textContent"])
                    ];
                  }
                }),
                content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_table, {
                      content: _ctx.tableContent,
                      header: _ctx.tableHeader,
                      features: _ctx.tableFeatures
                    }, {
                      status: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="flex justify-center"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_progress, {
                            "model-value": props.status,
                            color: "green"
                          }, null, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex justify-center" }, [
                              createVNode(_component_t_progress, {
                                "model-value": props.status,
                                color: "green"
                              }, null, 8, ["model-value"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_table, {
                        content: _ctx.tableContent,
                        header: _ctx.tableHeader,
                        features: _ctx.tableFeatures
                      }, {
                        status: withCtx(({ props }) => [
                          createVNode("div", { class: "flex justify-center" }, [
                            createVNode(_component_t_progress, {
                              "model-value": props.status,
                              color: "green"
                            }, null, 8, ["model-value"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["content", "header", "features"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_content_card, { width: 1 }, {
                  title: withCtx(() => [
                    createVNode("span", {
                      textContent: toDisplayString(_ctx.tm("userList"))
                    }, null, 8, ["textContent"])
                  ]),
                  content: withCtx(() => [
                    createVNode(_component_t_list, {
                      radius: 3,
                      class: "w-full",
                      design: "light",
                      color: "white",
                      border: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_list_item, null, {
                          icon: withCtx(() => [
                            createVNode(_component_t_avatar, {
                              radius: 8,
                              size: 2,
                              src: "https://i.pravatar.cc/150?u=1"
                            })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.tm("name1")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_list_item, null, {
                          icon: withCtx(() => [
                            createVNode(_component_t_avatar, {
                              radius: 8,
                              size: 2,
                              src: "https://i.pravatar.cc/150?u=2"
                            })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.tm("name2")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_list_item, null, {
                          icon: withCtx(() => [
                            createVNode(_component_t_avatar, {
                              radius: 8,
                              size: 2,
                              src: "https://i.pravatar.cc/150?u=3"
                            })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.tm("name3")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_list_item, null, {
                          icon: withCtx(() => [
                            createVNode(_component_t_avatar, {
                              radius: 8,
                              size: 2,
                              src: "https://i.pravatar.cc/150?u=4"
                            })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.tm("name4")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_t_content_card, { width: 2 }, {
                  title: withCtx(() => [
                    createVNode("span", {
                      textContent: toDisplayString(_ctx.tm("activeProjects"))
                    }, null, 8, ["textContent"])
                  ]),
                  content: withCtx(() => [
                    createVNode(_component_t_table, {
                      content: _ctx.tableContent,
                      header: _ctx.tableHeader,
                      features: _ctx.tableFeatures
                    }, {
                      status: withCtx(({ props }) => [
                        createVNode("div", { class: "flex justify-center" }, [
                          createVNode(_component_t_progress, {
                            "model-value": props.status,
                            color: "green"
                          }, null, 8, ["model-value"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["content", "header", "features"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_grid_section, { "col-tablet": 3 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_alert, {
                design: "filled",
                closeable: true,
                color: "danger"
              }, {
                icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_trash_icon, {
                      slot: "icon",
                      class: "w-6 h-6"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_trash_icon, {
                        slot: "icon",
                        class: "w-6 h-6"
                      })
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>${ssrInterpolate(_ctx.tm("alertDeleted"))}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        textContent: toDisplayString(_ctx.tm("alertDeleted"))
                      }, null, 8, ["textContent"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_alert, {
                design: "inline",
                color: "info"
              }, {
                icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_information_circle_icon, { class: "w-6 h-6" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_information_circle_icon, { class: "w-6 h-6" })
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>${ssrInterpolate(_ctx.tm("alertOverwrite"))}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        textContent: toDisplayString(_ctx.tm("alertOverwrite"))
                      }, null, 8, ["textContent"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_alert, {
                design: "outline",
                color: "success"
              }, {
                icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_check_circle_icon, { class: "w-6 h-6" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_check_circle_icon, { class: "w-6 h-6" })
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>${ssrInterpolate(_ctx.tm("alertSaved"))}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        textContent: toDisplayString(_ctx.tm("alertSaved"))
                      }, null, 8, ["textContent"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_alert, {
                  design: "filled",
                  closeable: true,
                  color: "danger"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_t_trash_icon, {
                      slot: "icon",
                      class: "w-6 h-6"
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode("span", {
                      textContent: toDisplayString(_ctx.tm("alertDeleted"))
                    }, null, 8, ["textContent"])
                  ]),
                  _: 1
                }),
                createVNode(_component_t_alert, {
                  design: "inline",
                  color: "info"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_t_information_circle_icon, { class: "w-6 h-6" })
                  ]),
                  default: withCtx(() => [
                    createVNode("span", {
                      textContent: toDisplayString(_ctx.tm("alertOverwrite"))
                    }, null, 8, ["textContent"])
                  ]),
                  _: 1
                }),
                createVNode(_component_t_alert, {
                  design: "outline",
                  color: "success"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_t_check_circle_icon, { class: "w-6 h-6" })
                  ]),
                  default: withCtx(() => [
                    createVNode("span", {
                      textContent: toDisplayString(_ctx.tm("alertSaved"))
                    }, null, 8, ["textContent"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_grid_section, { "col-tablet": 2 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_alert, {
                radius: 3,
                design: "gradient",
                color: "fuchsia",
                closeable: true
              }, {
                icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_avatar, {
                      radius: 8,
                      size: 3,
                      src: "https://i.pravatar.cc/300"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_avatar, {
                        radius: 8,
                        size: 3,
                        src: "https://i.pravatar.cc/300"
                      })
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>${_ctx.tm("alertNewUser") ?? ""}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        innerHTML: _ctx.tm("alertNewUser")
                      }, null, 8, ["innerHTML"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_t_alert, {
                radius: 3,
                design: "elegant",
                title: _ctx.tm("alertDeletedUserTitle"),
                color: "warning",
                closeable: true
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>${_ctx.tm("alertDeletedUser") ?? ""}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        innerHTML: _ctx.tm("alertDeletedUser")
                      }, null, 8, ["innerHTML"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_alert, {
                  radius: 3,
                  design: "gradient",
                  color: "fuchsia",
                  closeable: true
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_t_avatar, {
                      radius: 8,
                      size: 3,
                      src: "https://i.pravatar.cc/300"
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode("span", {
                      innerHTML: _ctx.tm("alertNewUser")
                    }, null, 8, ["innerHTML"])
                  ]),
                  _: 1
                }),
                createVNode(_component_t_alert, {
                  radius: 3,
                  design: "elegant",
                  title: _ctx.tm("alertDeletedUserTitle"),
                  color: "warning",
                  closeable: true
                }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      innerHTML: _ctx.tm("alertDeletedUser")
                    }, null, 8, ["innerHTML"])
                  ]),
                  _: 1
                }, 8, ["title"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_grid_section, { col: 2 }, {
            default: withCtx(() => [
              createVNode(_component_t_statistic_widget, {
                color: "solid-black",
                "diff-direction": "down",
                "diff-value": "15%",
                "widget-value": "254"
              }, {
                title: withCtx(() => [
                  createVNode("span", {
                    textContent: toDisplayString(_ctx.tm("incomes"))
                  }, null, 8, ["textContent"])
                ]),
                icon: withCtx(() => [
                  createVNode(_component_t_cash_icon, { class: "w-16 h-16" })
                ]),
                _: 1
              }),
              createVNode(_component_t_statistic_widget, {
                radius: 5,
                color: "solid-green",
                "diff-direction": "up",
                "diff-value": "8",
                "widget-value": "30"
              }, {
                title: withCtx(() => [
                  createVNode("span", {
                    textContent: toDisplayString(_ctx.tm("dailyDoneCharts"))
                  }, null, 8, ["textContent"])
                ]),
                icon: withCtx(() => [
                  createVNode(_component_t_shopping_bag_icon, { class: "w-16 h-16" })
                ]),
                _: 1
              }),
              createVNode(_component_t_statistic_widget, {
                radius: 5,
                color: "solid-red",
                "diff-direction": "down",
                "diff-value": "8%",
                "widget-value": "12.254,05 TL"
              }, {
                title: withCtx(() => [
                  createVNode("span", {
                    textContent: toDisplayString(_ctx.tm("refunds"))
                  }, null, 8, ["textContent"])
                ]),
                _: 1
              }),
              createVNode(_component_t_statistic_widget, {
                radius: 5,
                color: "solid-white",
                "diff-direction": "down",
                "diff-value": "15%",
                "widget-value": "254 USD"
              }, {
                title: withCtx(() => [
                  createVNode("span", {
                    textContent: toDisplayString(_ctx.tm("stationeryCost"))
                  }, null, 8, ["textContent"])
                ]),
                picture: withCtx(() => [
                  createVNode("img", { src: "/img/samples/imgMelBaylon-6WLcOFn4HKE-unsplash.jpg" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_grid_section, { col: 3 }, {
            default: withCtx(() => [
              createVNode(_component_t_content_card, { width: 1 }, {
                title: withCtx(() => [
                  createVNode("span", {
                    textContent: toDisplayString(_ctx.tm("userList"))
                  }, null, 8, ["textContent"])
                ]),
                content: withCtx(() => [
                  createVNode(_component_t_list, {
                    radius: 3,
                    class: "w-full",
                    design: "light",
                    color: "white",
                    border: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_list_item, null, {
                        icon: withCtx(() => [
                          createVNode(_component_t_avatar, {
                            radius: 8,
                            size: 2,
                            src: "https://i.pravatar.cc/150?u=1"
                          })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.tm("name1")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_list_item, null, {
                        icon: withCtx(() => [
                          createVNode(_component_t_avatar, {
                            radius: 8,
                            size: 2,
                            src: "https://i.pravatar.cc/150?u=2"
                          })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.tm("name2")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_list_item, null, {
                        icon: withCtx(() => [
                          createVNode(_component_t_avatar, {
                            radius: 8,
                            size: 2,
                            src: "https://i.pravatar.cc/150?u=3"
                          })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.tm("name3")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_list_item, null, {
                        icon: withCtx(() => [
                          createVNode(_component_t_avatar, {
                            radius: 8,
                            size: 2,
                            src: "https://i.pravatar.cc/150?u=4"
                          })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.tm("name4")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_t_content_card, { width: 2 }, {
                title: withCtx(() => [
                  createVNode("span", {
                    textContent: toDisplayString(_ctx.tm("activeProjects"))
                  }, null, 8, ["textContent"])
                ]),
                content: withCtx(() => [
                  createVNode(_component_t_table, {
                    content: _ctx.tableContent,
                    header: _ctx.tableHeader,
                    features: _ctx.tableFeatures
                  }, {
                    status: withCtx(({ props }) => [
                      createVNode("div", { class: "flex justify-center" }, [
                        createVNode(_component_t_progress, {
                          "model-value": props.status,
                          color: "green"
                        }, null, 8, ["model-value"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["content", "header", "features"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_grid_section, { "col-tablet": 3 }, {
            default: withCtx(() => [
              createVNode(_component_t_alert, {
                design: "filled",
                closeable: true,
                color: "danger"
              }, {
                icon: withCtx(() => [
                  createVNode(_component_t_trash_icon, {
                    slot: "icon",
                    class: "w-6 h-6"
                  })
                ]),
                default: withCtx(() => [
                  createVNode("span", {
                    textContent: toDisplayString(_ctx.tm("alertDeleted"))
                  }, null, 8, ["textContent"])
                ]),
                _: 1
              }),
              createVNode(_component_t_alert, {
                design: "inline",
                color: "info"
              }, {
                icon: withCtx(() => [
                  createVNode(_component_t_information_circle_icon, { class: "w-6 h-6" })
                ]),
                default: withCtx(() => [
                  createVNode("span", {
                    textContent: toDisplayString(_ctx.tm("alertOverwrite"))
                  }, null, 8, ["textContent"])
                ]),
                _: 1
              }),
              createVNode(_component_t_alert, {
                design: "outline",
                color: "success"
              }, {
                icon: withCtx(() => [
                  createVNode(_component_t_check_circle_icon, { class: "w-6 h-6" })
                ]),
                default: withCtx(() => [
                  createVNode("span", {
                    textContent: toDisplayString(_ctx.tm("alertSaved"))
                  }, null, 8, ["textContent"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_grid_section, { "col-tablet": 2 }, {
            default: withCtx(() => [
              createVNode(_component_t_alert, {
                radius: 3,
                design: "gradient",
                color: "fuchsia",
                closeable: true
              }, {
                icon: withCtx(() => [
                  createVNode(_component_t_avatar, {
                    radius: 8,
                    size: 3,
                    src: "https://i.pravatar.cc/300"
                  })
                ]),
                default: withCtx(() => [
                  createVNode("span", {
                    innerHTML: _ctx.tm("alertNewUser")
                  }, null, 8, ["innerHTML"])
                ]),
                _: 1
              }),
              createVNode(_component_t_alert, {
                radius: 3,
                design: "elegant",
                title: _ctx.tm("alertDeletedUserTitle"),
                color: "warning",
                closeable: true
              }, {
                default: withCtx(() => [
                  createVNode("span", {
                    innerHTML: _ctx.tm("alertDeletedUser")
                  }, null, 8, ["innerHTML"])
                ]),
                _: 1
              }, 8, ["title"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Dashboard as default
};

import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-3kkfgqRQ.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { d as _sfc_main$1 } from "./windowSizeCalculator-BWfQvLaG.js";
import { useI18n } from "vue-i18n";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TDropdown-8S66trQc.js";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-BYbkHFXz.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  __name: "Lock",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      inheritLocale: true,
      messages: {
        bg: {
          pageTitle: "Екран за Заключване",
          pageSubTitle: "Само примерен екран, това не е активен модул",
          goToDemo: "Вижте Демо Заключване"
        },
        de: {
          pageTitle: "Sperrbildschirm",
          pageSubTitle: "Nur Beispielbildschirm, es ist kein aktives Modul",
          goToDemo: "Demo-Sperre anzeigen"
        },
        en: {
          pageTitle: "Lock Screen",
          pageSubTitle: "Only sample screen, it's not active module",
          goToDemo: "See Demo Lock"
        },
        fr: {
          pageTitle: "Écran de verrouillage",
          pageSubTitle: "Seulement un écran d'exemple, ce n'est pas un module actif",
          goToDemo: "Voir la démo de verrouillage"
        },
        ru: {
          pageTitle: "Экран Блокировки",
          pageSubTitle: "Только пример экрана, это не активный модуль",
          goToDemo: "Посмотреть демо Блокировки"
        },
        tr: {
          pageTitle: "Kilit Ekranı",
          pageSubTitle: "Sadece örnek ekran, bu aktif bir modül değil",
          goToDemo: "Demo Kilitleme Ekranını Gör"
        },
        zh: {
          pageTitle: "锁屏",
          pageSubTitle: "仅示例屏幕，未激活模块",
          goToDemo: "查看锁屏演示"
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({
        title: unref(t)("pageTitle")
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("pageTitle"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("pageTitle")), 1)
            ];
          }
        }),
        subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("pageSubTitle"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("pageSubTitle")), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(GridSection, { "col-tablet": 3 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-2"${_scopeId2}><img${ssrRenderAttr("src", "/img/demo/lock_1_gradient.jpg")} class="rounded-md" alt="Lock Screen Photo"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    type: "link",
                    link: _ctx.route("lock-app-demo"),
                    radius: 3,
                    color: "pink",
                    size: "full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("goToDemo"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("goToDemo")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode("img", {
                        src: "/img/demo/lock_1_gradient.jpg",
                        class: "rounded-md",
                        alt: "Lock Screen Photo"
                      }),
                      createVNode(_sfc_main$1, {
                        type: "link",
                        link: _ctx.route("lock-app-demo"),
                        radius: 3,
                        color: "pink",
                        size: "full"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("goToDemo")), 1)
                        ]),
                        _: 1
                      }, 8, ["link"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(GridSection, { "col-tablet": 3 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode("img", {
                      src: "/img/demo/lock_1_gradient.jpg",
                      class: "rounded-md",
                      alt: "Lock Screen Photo"
                    }),
                    createVNode(_sfc_main$1, {
                      type: "link",
                      link: _ctx.route("lock-app-demo"),
                      radius: 3,
                      color: "pink",
                      size: "full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("goToDemo")), 1)
                      ]),
                      _: 1
                    }, 8, ["link"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Examples/Lock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

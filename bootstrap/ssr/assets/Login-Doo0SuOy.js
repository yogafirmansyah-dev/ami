import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-CbW7EXnn.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { d as _sfc_main$1 } from "./windowSizeCalculator-EVN4qZjG.js";
import { useI18n } from "vue-i18n";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./displayLanguage-Bjc1nzNS.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "pinia";
import "./TDropdown-BaNvbUUI.js";
import "./TAvatar-rvhW0AFR.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      inheritLocale: true,
      messages: {
        bg: {
          pageTitle: "Екран за Вход",
          pageSubTitle: "Трябва да направите промени в Resources/Js/Pages/Auth/Login.vue",
          goToDemo: "Вижте Демо Вход"
        },
        de: {
          pageTitle: "Anmeldebildschirm",
          pageSubTitle: "Sie sollten Änderungen in Resources/Js/Pages/Auth/Login.vue vornehmen",
          goToDemo: "Demo-Anmeldung anzeigen"
        },
        en: {
          pageTitle: "Login Screen",
          pageSubTitle: "You should make to changes in the Resources/Js/Pages/Auth/Login.vue",
          goToDemo: "See Demo Login"
        },
        fr: {
          pageTitle: "Écran d'authentification",
          pageSubTitle: "Vous devez apporter des modifications dans Resources/Js/Pages/Auth/Login.vue",
          goToDemo: "Voir la démo de connexion"
        },
        ru: {
          pageTitle: "Экран Входа",
          pageSubTitle: "Вы должны внести изменения в Resources/Js/Pages/Auth/Login.vue",
          goToDemo: "Посмотреть демо Вход"
        },
        tr: {
          pageTitle: "Giriş Ekranı",
          pageSubTitle: "Resources/Js/Pages/Auth/Login.vue dosyasında değişiklik yapmalısınız",
          goToDemo: "Demo Giriş Ekranını Gör"
        },
        zh: {
          pageTitle: "登录界面",
          pageSubTitle: "您应该在 Resources/Js/Pages/Auth/Login.vue 中进行更改",
          goToDemo: "查看演示登录"
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
                  _push3(`<div class="flex flex-col gap-2"${_scopeId2}><img${ssrRenderAttr("src", "/img/demo/login_1_gradient.jpg")} class="rounded-md" alt="Login Screen"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    type: "link",
                    link: _ctx.route("login-app-demo"),
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
                        src: "/img/demo/login_1_gradient.jpg",
                        class: "rounded-md",
                        alt: "Login Screen"
                      }),
                      createVNode(_sfc_main$1, {
                        type: "link",
                        link: _ctx.route("login-app-demo"),
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
                      src: "/img/demo/login_1_gradient.jpg",
                      class: "rounded-md",
                      alt: "Login Screen"
                    }),
                    createVNode(_sfc_main$1, {
                      type: "link",
                      link: _ctx.route("login-app-demo"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Examples/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

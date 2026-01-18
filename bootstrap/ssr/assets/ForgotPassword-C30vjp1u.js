import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-BXpqpYTS.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { d as _sfc_main$1 } from "./windowSizeCalculator-Ch6zBFfA.js";
import { useI18n } from "vue-i18n";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TDropdown-CRaizlei.js";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TAvatar-DS29Kv5n.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      inheritLocale: true,
      messages: {
        bg: {
          pageTitle: "Екран за Забравена Парола",
          pageSubTitle: "Трябва да направите промени в Resources/Js/Pages/Auth/ForgotPassword.vue",
          goToDemo: "Вижте Демо Забравена Парола"
        },
        de: {
          pageTitle: "Passwort vergessen Bildschirm",
          pageSubTitle: "Sie sollten Änderungen an Resources/Js/Pages/Auth/ForgotPassword.vue vornehmen",
          goToDemo: "Demo Passwort vergessen anzeigen"
        },
        en: {
          pageTitle: "Forgot Password Screen",
          pageSubTitle: "You should make to changes in the Resources/Js/Pages/Auth/ForgotPassword.vue",
          goToDemo: "See Demo Forgot Password"
        },
        fr: {
          pageTitle: "Écran Mot de passe oublié",
          pageSubTitle: "Vous devez apporter des modifications dans Resources/Js/Pages/Auth/ForgotPassword.vue",
          goToDemo: "Voir la démo Mot de passe oublié"
        },
        ru: {
          pageTitle: "Экран Забытого Пароля",
          pageSubTitle: "Вы должны внести изменения в Resources/Js/Pages/Auth/ForgotPassword.vue",
          goToDemo: "Посмотреть демо Забытого Пароля"
        },
        tr: {
          pageTitle: "Şifreyi Unuttum Ekranı",
          pageSubTitle: "Resources/Js/Pages/Auth/ForgotPassword.vue dosyasında değişiklik yapmalısınız",
          goToDemo: "Şifreyi Unuttum Demoyu Gör"
        },
        zh: {
          pageTitle: "忘记密码屏幕",
          pageSubTitle: "您应该在Resources/Js/Pages/Auth/ForgotPassword.vue中进行更改",
          goToDemo: "查看忘记密码演示"
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
                  _push3(`<div class="flex flex-col gap-2"${_scopeId2}><img${ssrRenderAttr("src", "/img/demo/forgot_1_gradient.jpg")} class="rounded-md" alt="Forgot Password Screen"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    type: "link",
                    link: _ctx.route("forgot-password-app-demo"),
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
                        src: "/img/demo/forgot_1_gradient.jpg",
                        class: "rounded-md",
                        alt: "Forgot Password Screen"
                      }),
                      createVNode(_sfc_main$1, {
                        type: "link",
                        link: _ctx.route("forgot-password-app-demo"),
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
                      src: "/img/demo/forgot_1_gradient.jpg",
                      class: "rounded-md",
                      alt: "Forgot Password Screen"
                    }),
                    createVNode(_sfc_main$1, {
                      type: "link",
                      link: _ctx.route("forgot-password-app-demo"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Examples/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

import { defineComponent, resolveComponent, withCtx, createSlots, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, createTextVNode, Fragment, renderList, reactive, ref, useSSRContext } from "vue";
import { Head } from "@inertiajs/vue3";
import { A as AppLayout } from "./AppLayout-BXpqpYTS.js";
import { G as GridSection } from "./GridSection-BW47oHJP.js";
import { T as TAlert } from "./windowSizeCalculator-Ch6zBFfA.js";
import { T as TAvatar } from "./TAvatar-DS29Kv5n.js";
import { T as TCodeShowcase } from "./TCodeShowcase-DOKY_97q.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faTrash, faChevronLeft, faRetweet, faBan, faClock, faInfo, faHistory, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useI18n } from "vue-i18n";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@vueuse/core";
import "./TDropdown-CRaizlei.js";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./darkMode-BsM-iRm5.js";
library.add(faCheckCircle, faTrash, faChevronLeft, faRetweet, faBan, faClock, faInfo, faHistory, faPlay);
const _sfc_main = defineComponent({
  name: "Alert",
  components: {
    Head,
    TAvatar,
    AppLayout,
    GridSection,
    TAlert,
    TCodeShowcase
  },
  setup() {
    const { t, tm } = useI18n({
      inheritLocale: true,
      messages: {
        en: {
          pageTitle: "Alerts",
          pageSubTitle: "Closeable and timeable elite alert boxes",
          filledTitle: "Success",
          filledContent: "The post added successfully (filled)",
          lightTitle: "Danger",
          lightContent: "The user deleted successfully (light)",
          inlineContent: "Your account was blocked, please connect with IT (inline)",
          outlineContent: "You entered a new configuration, the settings will refresh 24hr after (outline)",
          gradientContent: "The new user is successfully added. \n User: Hamdi KAYA (gradient)",
          elegantTitle: "Attention",
          elegantContent: "The all of changes overwrite to themself (elegant)",
          blockContent: "Please, check your task list (block)",
          activateTimer: "Start timer",
          reviveMessage: "Don't worry, it'll come back in 4 seconds",
          docDefault: "Default Value",
          docDescription: "Description",
          docType: "Value Type",
          docIdDesc: "It is unique id for your alert. You set it to different value for each alert.",
          docDesignDesc: "The theme of the alert component.",
          docColorDesc: "The color of the alert component. Important: If you use the gradient design, you can not default color options. If you use the gradient design, your color options are rose, sky, fuchsia, violet, cloud, turquoise, caterpillar, dream and biscuit",
          docRadiusDesc: "It shapes the corners of the alert.",
          docTitleDesc: "If you would like to display a title using the alert component, pass/set any value through this prop.",
          docCloseableDesc: "If you would like to make your alert component closeable, you can use this prop.",
          docTimerStatusDesc: "If you would like to make your alert component to close automatically, you can set this prop.",
          docTimerDesc: "If you set prop of the timer-status to true, You should set the timer by milliseconds",
          docTypeDesc: "If you don not want to deal with design and color, you can use this prop beacause it sets automatically design and color values to your choose."
        },
        tr: {
          pageTitle: "Uyarı Kutusu",
          pageSubTitle: "Gizlenebilir ve zamanlanabilir şık uyarı kutuları",
          filledTitle: "İşlem Başarılı",
          filledContent: "Gönderiniz başarıyla yayınlandı (filled)",
          lightTitle: "Dikkat",
          lightContent: "Kullanıcı silindi (light)",
          inlineContent: "Hesabınız bloke oldu, lütfen IT ile iletişime geçiniz (inline)",
          outlineContent: "Yeni girdiğiniz ayarlar 24 saat içinde aktif olacaktır (outline)",
          gradientContent: "Yeni kullanıcı eklendi. \n Kullanıcı: Hamdi KAYA (gradient)",
          elegantTitle: "Uyarı",
          elegantContent: "Yapıtığınız değişiklikler, var olan kayıtların üzerine yazılacak (elegant)",
          blockContent: "Lütfen görev listenizi kontrol ediniz (block)",
          activateTimer: "Zamanlayıcıyı Çalıştır",
          reviveMessage: "Endişelenme 4 saniye sonra geri gelecek",
          docDefault: "Varsayılan Değer",
          docDescription: "Detay",
          docType: "Değer Türü",
          docIdDesc: "Her uyarı kutusu için benzersiz olması gereken değer. Her uyarı için benzersiz olacak şekilde ayarlamalısın.",
          docDesignDesc: "Uyarı kutusunun genel görünümünü belirler.",
          docColorDesc: "Uyarı kutusunun rengini belirlemenize yarar. Eğer gradient tasarımı kullanıyorsanız lütfen default renkler yerine bu renklerden birini kullanınız: rose, sky, fuchsia, violet, cloud, turquoise, caterpillar, dream ve biscuit",
          docRadiusDesc: "Uyarı kutusunun köşelerinin ovalliğini kontrol etmenizi sağlar.",
          docTitleDesc: "Uyarı kutusu içinde istediğiniz başlığı gösterebilmenizi sağlar.",
          docCloseableDesc: "Uyarı kutusuna gizleme düğmesi eklemenizi sağlar.",
          docTimerStatusDesc: "Uyarı kutusunun belirlediğiniz zaman sonunda kapanmasını sağlar.",
          docTimerDesc: "Otomatik kapanma süresini belirlemenizi sağlar, timer-status probunun true olarak tanımlanmış olması gereklidir.",
          docTypeDesc: "Tasarım ve renk ile uğraşmadan direk başarılı(success-yeşil) veya dikkat(danger-kırmızı) hissiyatı yaratacak hazır tasarımları kullanmanızı sağlar. Type değerini verdiğinizde design ve color değeri girmeniz gerekmez. "
        }
      }
    });
    const demoContents = reactive({
      "filled": {
        id: 1,
        design: "filled",
        content: "filledContent",
        color: "success",
        closeable: true,
        radius: 1,
        icon: "check-circle",
        title: "filledTitle",
        timerStatus: false
      },
      "light": {
        id: 1,
        design: "light",
        content: "lightContent",
        color: "danger",
        radius: 3,
        icon: "trash",
        title: "lightTitle",
        closeable: true,
        timerStatus: false
      },
      "inline": {
        id: 1,
        design: "inline",
        content: "inlineContent",
        color: "warning",
        radius: 3,
        icon: "ban",
        timerStatus: false
      },
      "outline": {
        id: 1,
        design: "outline",
        content: "outlineContent",
        color: "info",
        radius: 2,
        icon: "retweet",
        timerStatus: false
      },
      "gradient": {
        id: 1,
        design: "gradient",
        content: "gradientContent",
        color: "dream",
        radius: 3,
        media: true,
        closeable: true,
        timerStatus: false
      },
      "elegant": {
        id: 1,
        design: "elegant",
        content: "elegantContent",
        color: "violet",
        radius: 8,
        title: "elegantTitle",
        closeable: true,
        timerStatus: false
      },
      "block": {
        id: 1,
        design: "block",
        content: "blockContent",
        color: "info",
        radius: 1,
        icon: "info",
        closeable: true,
        timerStatus: false
      }
    });
    const activeShowcase = ref();
    const startTimer = () => {
      demoContents[activeShowcase.value].timerStatus = true;
    };
    const reviveMessageStatus = ref({});
    const revive = (alert) => {
      setTimeout(() => {
        reviveMessageStatus.value[alert.design] = true;
      }, 1e3);
      setTimeout(() => {
        alert.id++;
        alert.timer = null;
        reviveMessageStatus.value[alert.design] = false;
      }, 4e3);
    };
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
          id: "id",
          prop: "id",
          type: "String, Number, Array, Object and Date",
          default: "unique",
          description: tm("docIdDesc")
        },
        {
          id: "design",
          prop: "design",
          type: "String",
          options: ["filled", "light", "inline", "outline", "gradient", "elegant", "block"],
          default: "filled",
          description: tm("docDesignDesc")
        },
        {
          id: "color",
          prop: "color",
          type: "String",
          options: ["success", "danger", "warning", "info", "purple", "light", "dark"],
          default: "light",
          description: tm("docColorDesc")
        },
        {
          id: "radius",
          prop: "radius",
          type: "Number",
          options: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
          default: "3",
          description: tm("docRadiusDesc")
        },
        {
          id: "title",
          prop: "title",
          type: "String",
          description: tm("docTitleDesc")
        },
        {
          id: "closeable",
          prop: "closeable",
          type: "Boolean",
          options: ["true", "false"],
          default: "false",
          description: tm("docCloseableDesc")
        },
        {
          id: "timer-status",
          prop: "timer-status",
          type: "Boolean",
          description: tm("docTimerStatusDesc")
        },
        {
          id: "timer",
          prop: "timer",
          type: "Number",
          description: tm("docTimerDesc")
        },
        {
          id: "type",
          prop: "type",
          type: "String",
          options: ["success", "danger", "warning", "info"],
          description: tm("docTypeDesc")
        }
      ]
    };
    const docSamples = {
      filled: {
        js: `/* FontAwesomeIcon Import */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
library.add( faCheckCircle )

/* Alert Component Import */
import TAlert from '@/Components/Alert/TAlert.vue'

export default {
    components: { TAlert },
    setup() {
    },
}`,
        template: '<t-alert\n    id="success"\n    design="filled"\n    color="success"\n    title="Success"\n    :radius=1\n    :closeable="true"\n    >\n    <template #icon>\n        <icon icon="check-circle" size="lg" />\n    </template>\n    The post added successfully (filled)\n</t-alert>'
      },
      light: {
        js: `/* FontAwesomeIcon Import */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add( faTrash  )

/* Alert Component Import */
import TAlert from '@/Components/Alert/TAlert.vue'

export default {
    components: { TAlert },
    setup() {
    },
}`,
        template: '<t-alert\n    id="danger"\n    design="light"\n    color="danger"\n    title="Danger"\n    :closeable="true"\n    >\n    <template #icon>\n        <icon icon="trash" size="lg" />\n    </template>\n    The user deleted successfully (light)\n</t-alert>'
      },
      inline: {
        js: `/* FontAwesomeIcon Import */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBan } from "@fortawesome/free-solid-svg-icons";
library.add( faBan )

/* Alert Component Import */
import TAlert from '@/Components/Alert/TAlert.vue'

export default {
    components: { TAlert },
    setup() {
    },
}`,
        template: '<t-alert\n    id="blocked"\n    design="inline"\n    color="warning"\n    :closeable="false"\n    >\n    <template #icon>\n        <icon icon="ban" size="lg" />\n    </template>\n    The user deleted successfully (light)\n</t-alert>'
      },
      outline: {
        js: `/* FontAwesomeIcon Import */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
library.add( faRetweet )

/* Alert Component Import */
import TAlert from '@/Components/Alert/TAlert.vue'

export default {
    components: { TAlert },
    setup() {
    },
}`,
        template: '<t-alert\n    id="updateSettings"\n    design="outline"\n    color="info"\n    :closeable="false"\n    >\n    <template #icon>\n        <icon icon="retweet" size="lg" />\n    </template>\n    You entered a new configuration, the settings will refresh 24hr after (outline)\n</t-alert>'
      },
      gradient: {
        js: `/* Alert Component Import */
import TAlert from '@/Components/Alert/TAlert.vue'

/* Avatar Component Import */
import TAvatar from "@/Components/Avatar/TAvatar.vue";

export default {
    components: {
        TAlert,
        TAvatar
    },
    setup() {
    },
}`,
        template: '<t-alert\n    id="createSuccess"\n    design="gradient"\n    color="dream"\n    :closeable="true"\n    >\n    <t-avatar\n        :radius="8"\n        :size="3"\n        src="https://i.pravatar.cc/300"\n        />\n    The new user is successfully added.<br>\n    User: Hamdi KAYA (gradient)\n</t-alert>'
      },
      elegant: {
        js: "/* Alert Component Import */\nimport TAlert from '@/Components/Alert/TAlert.vue'\n\nexport default {\n    components: { TAlert },\n    setup() {\n    },\n}",
        template: '<t-alert\n    id="overwrite"\n    design="elegant"\n    color="violet"\n    title="Attention"\n    :closeable="true"\n    :radius=8\n    >\n    The all of changes overwrite to themself (elegant)\n</t-alert>'
      },
      block: {
        js: `/* FontAwesomeIcon Import */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
library.add( faInfo )

/* Alert Component Import */
import TAlert from '@/Components/Alert/TAlert.vue'

export default {
    components: { TAlert },
    setup() {
    },
}`,
        template: '<t-alert\n    id="blocked"\n    design="block"\n    color="info"\n    :closeable="true"\n    >\n    <template #icon>\n        <icon icon="info" size="lg" />\n    </template>\n    Please, check your task list (block)\n</t-alert>'
      }
    };
    const showcaseTabs = [
      { id: "js", label: "JS", type: "code", codeLang: "javascript" },
      { id: "template", label: "Template", type: "code", codeLang: "html" },
      { id: "props", label: "Props", type: "table", table: docProps },
      {
        id: "timer",
        label: tm("activateTimer"),
        command: () => startTimer()
      }
    ];
    return {
      activeShowcase,
      revive,
      reviveMessageStatus,
      showcaseTabs,
      demoContents,
      docSamples,
      t,
      tm
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_app_layout = resolveComponent("app-layout");
  const _component_grid_section = resolveComponent("grid-section");
  const _component_t_code_showcase = resolveComponent("t-code-showcase");
  const _component_t_alert = resolveComponent("t-alert");
  const _component_icon = resolveComponent("icon");
  const _component_t_avatar = resolveComponent("t-avatar");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Alerts" }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, null, {
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
        _push2(ssrRenderComponent(_component_grid_section, {
          col: 1,
          gap: 4
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(_ctx.demoContents, (content) => {
                _push3(ssrRenderComponent(_component_t_code_showcase, {
                  tabs: _ctx.showcaseTabs,
                  onClick: ($event) => _ctx.activeShowcase = content.design
                }, {
                  js: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(_ctx.docSamples[content.design].js)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.docSamples[content.design].js), 1)
                      ];
                    }
                  }),
                  template: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(_ctx.docSamples[content.design].template)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.docSamples[content.design].template), 1)
                      ];
                    }
                  }),
                  label: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      if (slotProps.tab.id === "timer") {
                        _push4(ssrRenderComponent(_component_icon, {
                          icon: "play",
                          size: "sm"
                        }, null, _parent4, _scopeId3));
                      } else {
                        _push4(`<!---->`);
                      }
                      _push4(`<span data-v-c2fc8a1f${_scopeId3}>${ssrInterpolate(slotProps.tab.label)}</span>`);
                    } else {
                      return [
                        slotProps.tab.id === "timer" ? (openBlock(), createBlock(_component_icon, {
                          key: 0,
                          icon: "play",
                          size: "sm"
                        })) : createCommentVNode("", true),
                        createVNode("span", {
                          textContent: toDisplayString(slotProps.tab.label)
                        }, null, 8, ["textContent"])
                      ];
                    }
                  }),
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_t_alert, {
                        id: content.id,
                        design: content.design,
                        color: content.color,
                        radius: content.radius,
                        title: content.title ? _ctx.tm(content.title) : null,
                        closeable: content.closeable,
                        "timer-status": content.timerStatus,
                        onDestroy: ($event) => _ctx.revive(_ctx.demoContents[content.design])
                      }, createSlots({
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<span data-v-c2fc8a1f${_scopeId4}>${ssrInterpolate(_ctx.tm(content.content))}</span>`);
                          } else {
                            return [
                              createVNode("span", {
                                textContent: toDisplayString(_ctx.tm(content.content))
                              }, null, 8, ["textContent"])
                            ];
                          }
                        }),
                        _: 2
                      }, [
                        content.icon || content.media ? {
                          name: "icon",
                          fn: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (content.icon) {
                                _push5(ssrRenderComponent(_component_icon, {
                                  icon: content.icon,
                                  size: "lg"
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (content.media) {
                                _push5(ssrRenderComponent(_component_t_avatar, {
                                  radius: 8,
                                  size: 3,
                                  src: "https://i.pravatar.cc/300",
                                  class: "my-2"
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                content.icon ? (openBlock(), createBlock(_component_icon, {
                                  key: 0,
                                  icon: content.icon,
                                  size: "lg"
                                }, null, 8, ["icon"])) : createCommentVNode("", true),
                                content.media ? (openBlock(), createBlock(_component_t_avatar, {
                                  key: 1,
                                  radius: 8,
                                  size: 3,
                                  src: "https://i.pravatar.cc/300",
                                  class: "my-2"
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          key: "0"
                        } : void 0
                      ]), _parent4, _scopeId3));
                      if (_ctx.reviveMessageStatus[content.design]) {
                        _push4(`<div class="flex justify-center items-center space-x-4 font-semibold text-yellow-600 dark:text-white bg-yellow-300/10 dark:bg-yellow-700/20 border border-yellow-600 rounded p-4 pulse" data-v-c2fc8a1f${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_icon, {
                          icon: "info",
                          size: "lg"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span data-v-c2fc8a1f${_scopeId3}>${ssrInterpolate(_ctx.tm("reviveMessage"))}</span></div>`);
                      } else {
                        _push4(`<!---->`);
                      }
                    } else {
                      return [
                        createVNode(_component_t_alert, {
                          id: content.id,
                          design: content.design,
                          color: content.color,
                          radius: content.radius,
                          title: content.title ? _ctx.tm(content.title) : null,
                          closeable: content.closeable,
                          "timer-status": content.timerStatus,
                          onDestroy: ($event) => _ctx.revive(_ctx.demoContents[content.design])
                        }, createSlots({
                          default: withCtx(() => [
                            createVNode("span", {
                              textContent: toDisplayString(_ctx.tm(content.content))
                            }, null, 8, ["textContent"])
                          ]),
                          _: 2
                        }, [
                          content.icon || content.media ? {
                            name: "icon",
                            fn: withCtx(() => [
                              content.icon ? (openBlock(), createBlock(_component_icon, {
                                key: 0,
                                icon: content.icon,
                                size: "lg"
                              }, null, 8, ["icon"])) : createCommentVNode("", true),
                              content.media ? (openBlock(), createBlock(_component_t_avatar, {
                                key: 1,
                                radius: 8,
                                size: 3,
                                src: "https://i.pravatar.cc/300",
                                class: "my-2"
                              })) : createCommentVNode("", true)
                            ]),
                            key: "0"
                          } : void 0
                        ]), 1032, ["id", "design", "color", "radius", "title", "closeable", "timer-status", "onDestroy"]),
                        _ctx.reviveMessageStatus[content.design] ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex justify-center items-center space-x-4 font-semibold text-yellow-600 dark:text-white bg-yellow-300/10 dark:bg-yellow-700/20 border border-yellow-600 rounded p-4 pulse"
                        }, [
                          createVNode(_component_icon, {
                            icon: "info",
                            size: "lg"
                          }),
                          createVNode("span", {
                            textContent: toDisplayString(_ctx.tm("reviveMessage"))
                          }, null, 8, ["textContent"])
                        ])) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.demoContents, (content) => {
                  return openBlock(), createBlock(_component_t_code_showcase, {
                    key: content.id,
                    tabs: _ctx.showcaseTabs,
                    onClickCapture: ($event) => _ctx.activeShowcase = content.design
                  }, {
                    js: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.docSamples[content.design].js), 1)
                    ]),
                    template: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.docSamples[content.design].template), 1)
                    ]),
                    label: withCtx((slotProps) => [
                      slotProps.tab.id === "timer" ? (openBlock(), createBlock(_component_icon, {
                        key: 0,
                        icon: "play",
                        size: "sm"
                      })) : createCommentVNode("", true),
                      createVNode("span", {
                        textContent: toDisplayString(slotProps.tab.label)
                      }, null, 8, ["textContent"])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_t_alert, {
                        id: content.id,
                        design: content.design,
                        color: content.color,
                        radius: content.radius,
                        title: content.title ? _ctx.tm(content.title) : null,
                        closeable: content.closeable,
                        "timer-status": content.timerStatus,
                        onDestroy: ($event) => _ctx.revive(_ctx.demoContents[content.design])
                      }, createSlots({
                        default: withCtx(() => [
                          createVNode("span", {
                            textContent: toDisplayString(_ctx.tm(content.content))
                          }, null, 8, ["textContent"])
                        ]),
                        _: 2
                      }, [
                        content.icon || content.media ? {
                          name: "icon",
                          fn: withCtx(() => [
                            content.icon ? (openBlock(), createBlock(_component_icon, {
                              key: 0,
                              icon: content.icon,
                              size: "lg"
                            }, null, 8, ["icon"])) : createCommentVNode("", true),
                            content.media ? (openBlock(), createBlock(_component_t_avatar, {
                              key: 1,
                              radius: 8,
                              size: 3,
                              src: "https://i.pravatar.cc/300",
                              class: "my-2"
                            })) : createCommentVNode("", true)
                          ]),
                          key: "0"
                        } : void 0
                      ]), 1032, ["id", "design", "color", "radius", "title", "closeable", "timer-status", "onDestroy"]),
                      _ctx.reviveMessageStatus[content.design] ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex justify-center items-center space-x-4 font-semibold text-yellow-600 dark:text-white bg-yellow-300/10 dark:bg-yellow-700/20 border border-yellow-600 rounded p-4 pulse"
                      }, [
                        createVNode(_component_icon, {
                          icon: "info",
                          size: "lg"
                        }),
                        createVNode("span", {
                          textContent: toDisplayString(_ctx.tm("reviveMessage"))
                        }, null, 8, ["textContent"])
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["tabs", "onClickCapture"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`, `);
      } else {
        return [
          createVNode(_component_grid_section, {
            col: 1,
            gap: 4
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.demoContents, (content) => {
                return openBlock(), createBlock(_component_t_code_showcase, {
                  key: content.id,
                  tabs: _ctx.showcaseTabs,
                  onClickCapture: ($event) => _ctx.activeShowcase = content.design
                }, {
                  js: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.docSamples[content.design].js), 1)
                  ]),
                  template: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.docSamples[content.design].template), 1)
                  ]),
                  label: withCtx((slotProps) => [
                    slotProps.tab.id === "timer" ? (openBlock(), createBlock(_component_icon, {
                      key: 0,
                      icon: "play",
                      size: "sm"
                    })) : createCommentVNode("", true),
                    createVNode("span", {
                      textContent: toDisplayString(slotProps.tab.label)
                    }, null, 8, ["textContent"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_t_alert, {
                      id: content.id,
                      design: content.design,
                      color: content.color,
                      radius: content.radius,
                      title: content.title ? _ctx.tm(content.title) : null,
                      closeable: content.closeable,
                      "timer-status": content.timerStatus,
                      onDestroy: ($event) => _ctx.revive(_ctx.demoContents[content.design])
                    }, createSlots({
                      default: withCtx(() => [
                        createVNode("span", {
                          textContent: toDisplayString(_ctx.tm(content.content))
                        }, null, 8, ["textContent"])
                      ]),
                      _: 2
                    }, [
                      content.icon || content.media ? {
                        name: "icon",
                        fn: withCtx(() => [
                          content.icon ? (openBlock(), createBlock(_component_icon, {
                            key: 0,
                            icon: content.icon,
                            size: "lg"
                          }, null, 8, ["icon"])) : createCommentVNode("", true),
                          content.media ? (openBlock(), createBlock(_component_t_avatar, {
                            key: 1,
                            radius: 8,
                            size: 3,
                            src: "https://i.pravatar.cc/300",
                            class: "my-2"
                          })) : createCommentVNode("", true)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1032, ["id", "design", "color", "radius", "title", "closeable", "timer-status", "onDestroy"]),
                    _ctx.reviveMessageStatus[content.design] ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex justify-center items-center space-x-4 font-semibold text-yellow-600 dark:text-white bg-yellow-300/10 dark:bg-yellow-700/20 border border-yellow-600 rounded p-4 pulse"
                    }, [
                      createVNode(_component_icon, {
                        icon: "info",
                        size: "lg"
                      }),
                      createVNode("span", {
                        textContent: toDisplayString(_ctx.tm("reviveMessage"))
                      }, null, 8, ["textContent"])
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["tabs", "onClickCapture"]);
              }), 128))
            ]),
            _: 1
          }),
          createTextVNode(", ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/Components/Alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Alert = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c2fc8a1f"]]);
export {
  Alert as default
};

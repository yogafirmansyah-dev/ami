import { useSlots, inject, ref, computed, watch, mergeProps, unref, useSSRContext, toRefs, reactive, defineAsyncComponent, createVNode, resolveDynamicComponent, withCtx, renderSlot, onBeforeMount, onUnmounted } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderStyle, ssrRenderVNode, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { Link } from "@inertiajs/vue3";
const appConf = {
  appName: "AMI",
  catchPhrase: "Audit Mutu Internal",
  logo: {
    dark: "/img/logo.png",
    light: "/img/logo.png"
  },
  logoAreaClasses: null,
  appNameClasses: null,
  logoClasses: null,
  radius: 3,
  mainMenuDesign: "umay"
};
const authScreenConf = {
  appName: "AMI Audit Mutu Internal",
  logo: {
    dark: null,
    light: null
  },
  logoAreaClasses: ["flex", "flex-col", "justify-center", "items-center", "space-y-4", "pb-4"],
  appNameClasses: ["text-3xl", "md:text-4xl", "font-black", "text-center", "uppercase", "italic", "tracking-tighter", "text-white", "drop-shadow-lg"],
  logoClasses: ["w-20", "h-20", "text-white", "drop-shadow-lg"],
  showDesignChanger: true,
  showDarkModeSelector: true,
  showLanguageSelector: true
};
const mainMenuConf = {
  /*Logo Area*/
  appName: null,
  catchPhrase: null,
  umay: {
    logo: {
      dark: "/img/logo.png",
      light: "/img/logo.png"
    },
    logoAreaRadius: null,
    logoAreaClasses: ["flex", "flex-col", "justify-center", "items-center", "space-y-2", "p-6", "bg-gradient-to-tr", "dark:bg-gradient-to-br", "from-slate-600", "via-rose-500", "to-slate-600", "dark:from-slate-900", "dark:via-rose-950", "dark:to-slate-900", "border-b", "border-rose-200/50", "dark:border-rose-900/50", "shadow-lg", "relative", "overflow-hidden", "group", "transition-all", "duration-500"],
    appNameClasses: ["text-xl", "font-black", "italic", "uppercase", "tracking-[0.2em]", "text-rose-950", "dark:text-white", "drop-shadow-sm", "group-hover:scale-105", "transition-transform", "duration-500"],
    logoClasses: ["w-12", "h-auto", "drop-shadow-2xl", "transform", "group-hover:scale-110", "group-hover:-rotate-3", "transition-all", "duration-500"],
    /*Menu*/
    menuRadius: 3,
    rootLinkClasses: {
      activeBg: ["border", "border-slate-400/30"],
      normal: ["hover:bg-sky-200", "hover:text-sky-800"],
      active: ["text-white", "bg-sky-500/75", "hover:bg-sky-400", "hover:text-sky-800"]
    },
    secondLinkClasses: {
      activeBg: [],
      normal: ["hover:bg-sky-200/10", "hover:text-sky-400", "hover:text-slate-800"],
      active: ["bg-slate-600", "hover:bg-sky-500/20"]
    },
    thirdLinkClasses: {
      activeBg: ["border", "bg-emerald-500/20", "border-slate-500/50"],
      normal: ["hover:bg-emerald-200", "hover:text-emerald-800"],
      active: ["text-white", "bg-emerald-500", "hover:bg-emerald-600"]
    }
  },
  abay: {
    logo: {
      dark: "/img/logo.png",
      light: "/img/logo.png"
    },
    logoAreaRadius: null,
    logoAreaClasses: ["flex", "flex-col", "justify-center", "items-center", "space-x-6", "bg-blue-500"],
    appNameClasses: ["text-6xl", "font-semibold", "text-white"],
    logoClasses: ["w-10", "text-white", "h-auto"],
    /*Menu*/
    menuRadius: 3,
    rootLinkClasses: {
      activeBg: ["border", "border-slate-400/30"],
      normal: ["hover:bg-sky-200", "hover:text-sky-800"],
      active: ["text-white", "bg-sky-500/75", "hover:bg-sky-400", "hover:text-sky-800"]
    },
    secondLinkClasses: {
      activeBg: [],
      normal: ["hover:bg-sky-200/10", "hover:text-sky-400", "hover:text-slate-800"],
      active: ["text-sky-400", "bg-slate-600", "hover:bg-sky-500/20"]
    },
    thirdLinkClasses: {
      activeBg: ["border", "bg-emerald-500/20", "border-slate-500/50"],
      normal: ["hover:bg-emerald-200", "hover:text-emerald-800"],
      active: ["text-white", "bg-emerald-500", "hover:bg-emerald-600"]
    }
  }
};
const topBarConf = {
  radius: null,
  languageSelector: true,
  darkModeSelector: true,
  searchPlaceHolderText: "type and search"
};
const footerConf = {
  visible: false
  // content: "<a\n" +
  //     "              class=\"text-blue-600 hover:underline\"\n" +
  //     "              href=\"https://tailadmin.dev/\"\n" +
  //     "              target=\"_blank\"\n" +
  //     "            >\n" +
  //     "              TailAdmin v2\n" +
  //     "              </a>\n" +
  //     "            <span>by</span>\n" +
  //     "            <a\n" +
  //     "              class=\"text-teal-400 hover:underline\"\n" +
  //     "              href=\"https://github.com/sinan-aydogan\"\n" +
  //     "              target=\"_blank\"\n" +
  //     "            >\n" +
  //     "              Sinan AYDOĞAN\n" +
  //     "            </a>"
};
const alertConf = {
  design: "filled"
};
const avatarConf = {
  defaultPhotoSrc: "/img/samples/dummyAvatar.svg",
  size: 3
};
const badgeConf = {
  color: "light",
  design: "filled",
  radius: 5
};
const formContentConf = {
  radius: null
};
const _sfc_main$1 = {
  __name: "TAlert",
  __ssrInlineRender: true,
  props: {
    id: { type: [String, Number], default: () => `alert-${Date.now()}` },
    title: { type: String, default: null },
    type: { type: String, default: null },
    // success | warning | error | info
    design: { type: String, default: "filled" },
    // filled | outline | line
    color: { type: String, default: "gray" },
    radius: { type: Number, default: 2 },
    // 0–3
    closeable: { type: Boolean, default: false },
    timerStatus: { type: Boolean, default: false },
    timer: { type: Number, default: null }
  },
  emits: ["destroy"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const slots = useSlots();
    const appConf2 = inject("appConf", {});
    const show = ref(true);
    const countDown = ref(100);
    const finalDesign = props.design ?? alertConf.design ?? appConf2.design ?? "filled";
    const finalColor = props.type ? { success: "green", warning: "yellow", error: "red", info: "blue" }[props.type] : props.color;
    const alertClass = computed(() => {
      const base = "flex gap-3 p-4 text-sm";
      const radiusMap = ["rounded-none", "rounded-sm", "rounded-md", "rounded-lg"];
      const styles = {
        filled: {
          yellow: "bg-yellow-100 text-yellow-800 border border-yellow-300",
          red: "bg-red-100 text-red-800 border border-red-300",
          green: "bg-green-100 text-green-800 border border-green-300",
          blue: "bg-blue-100 text-blue-800 border border-blue-300",
          gray: "bg-gray-100 text-gray-800 border border-gray-300"
        },
        outline: {
          yellow: "border border-yellow-400 text-yellow-600",
          red: "border border-red-400 text-red-600",
          green: "border border-green-400 text-green-600",
          blue: "border border-blue-400 text-blue-600",
          gray: "border border-gray-400 text-gray-600"
        },
        line: {
          yellow: "border-l-4 border-yellow-400 text-yellow-700",
          red: "border-l-4 border-red-400 text-red-700",
          green: "border-l-4 border-green-400 text-green-700",
          blue: "border-l-4 border-blue-400 text-blue-700",
          gray: "border-l-4 border-gray-400 text-gray-700"
        }
      };
      return [
        base,
        radiusMap[props.radius] ?? "rounded-md",
        styles[finalDesign]?.[finalColor] ?? styles.filled.gray
      ];
    });
    watch(
      () => props.timerStatus,
      (v) => {
        if (!v || !props.timer) return;
        const interval = setInterval(() => countDown.value -= 1, props.timer / 100);
        setTimeout(() => {
          clearInterval(interval);
          close();
        }, props.timer);
      }
    );
    const close = () => {
      show.value = false;
      emit("destroy", props.id);
    };
    const hasSlot = (name) => !!slots[name];
    return (_ctx, _push, _parent, _attrs) => {
      if (show.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: alertClass.value }, _attrs))} data-v-240ebda4>`);
        if (unref(finalDesign) === "line") {
          _push(`<div class="w-1 shrink-0" data-v-240ebda4></div>`);
        } else {
          _push(`<!---->`);
        }
        if (hasSlot("icon")) {
          _push(`<div class="shrink-0" data-v-240ebda4>`);
          ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex-1" data-v-240ebda4>`);
        if (__props.title) {
          _push(`<p class="font-semibold mb-1" data-v-240ebda4>${ssrInterpolate(__props.title)}</p>`);
        } else {
          _push(`<!---->`);
        }
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
        if (__props.closeable) {
          _push(`<button class="ml-auto text-current opacity-60 hover:opacity-100" data-v-240ebda4> ✕ </button>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.timerStatus) {
          _push(`<div class="absolute bottom-0 left-0 h-1 bg-current opacity-30 transition-all" style="${ssrRenderStyle({ width: countDown.value + "%" })}" data-v-240ebda4></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Alert/TAlert.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TAlert = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-240ebda4"]]);
const bgColorStyles = {
  props: {
    color: {
      type: String,
      default: "solid-white"
    },
    gradientDirection: {
      type: String,
      default: "r"
    }
  },
  data() {
    return {
      solidColors: {
        "solid-red": "bg-red-500 border-red-500",
        "solid-blue": "bg-blue-500 border-blue-500",
        "solid-green": "bg-green-500 border-green-500",
        "solid-yellow": "bg-yellow-500 border-yellow-500",
        "solid-indigo": "bg-indigo-500 border-indigo-500",
        "solid-pink": "bg-pink-500 border-pink-500",
        "solid-purple": "bg-purple-500 border-purple-500",
        "solid-gray": "bg-gray-500 border-gray-500",
        "solid-black": "bg-black border-black",
        "solid-white": "bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600"
      },
      lightColors: {
        "light-red": "bg-red-200 border border-red-500",
        "light-blue": "bg-blue-200 border border-blue-500",
        "light-green": "bg-green-200 border border-green-500",
        "light-yellow": "bg-yellow-200 border border-yellow-500",
        "light-indigo": "bg-indigo-200 border border-indigo-500",
        "light-pink": "bg-pink-200 border border-pink-500",
        "light-purple": "bg-purple-200 border border-purple-500",
        "light-gray": "bg-gray-200 border border-gray-500"
      },
      gradientDirections: {
        t: "bg-gradient-to-t",
        b: "bg-gradient-to-b",
        l: "bg-gradient-to-l",
        r: "bg-gradient-to-r",
        tl: "bg-gradient-to-tl",
        bl: "bg-gradient-to-bl",
        tr: "bg-gradient-to-tr",
        br: "bg-gradient-to-br"
      },
      gradientFirstColors: {
        red: "from-red-500",
        blue: "from-blue-500",
        green: "from-green-500",
        yellow: "from-yellow-500",
        indigo: "from-indigo-500",
        pink: "from-pink-500",
        purple: "from-purple-500 to-pink-700 text-gray-100",
        gray: "from-gray-500",
        black: "from-black",
        white: "from-white"
      },
      gradientSecondColors: {
        red: "to-red-700 text-gray-100",
        blue: "to-blue-700 text-gray-100",
        green: "to-green-700 text-gray-100",
        yellow: "to-yellow-700 text-gray-100",
        indigo: "to-indigo-700 text-gray-100",
        pink: "to-pink-700 text-gray-100",
        purple: "to-purple-700 text-gray-100",
        gray: "to-gray-700 text-gray-100",
        black: "to-black text-gray-100",
        white: "to-white text-gray-700"
      },
      solidTextColors: {
        "solid-red": "text-gray-100",
        "solid-blue": "text-gray-100",
        "solid-green": "text-gray-100",
        "solid-yellow": "text-gray-100",
        "solid-indigo": "text-gray-100",
        "solid-pink": "text-gray-100",
        "solid-purple": "text-gray-100",
        "solid-gray": "text-gray-100",
        "solid-black": "text-gray-300",
        "solid-white": "text-gray-700 dark:text-gray-300"
      },
      lightTextColors: {
        "light-red": "text-red-700",
        "light-blue": "text-blue-700",
        "light-green": "text-green-700",
        "light-yellow": "text-yellow-700",
        "light-indigo": "text-indigo-700",
        "light-pink": "text-pink-700",
        "light-purple": "text-purple-700",
        "light-gray": "text-gray-700",
        "light-black": "text-gray-700",
        "light-white": "text-gray-700"
      },
      solidHoverColors: {
        "solid-red": "hover:bg-red-100 hover:text-red-700",
        "solid-blue": "hover:bg-blue-100 hover:text-blue-700",
        "solid-green": "hover:bg-green-100 hover:text-green-700",
        "solid-yellow": "hover:bg-yellow-100 hover:text-yellow-700",
        "solid-indigo": "hover:bg-indigo-100 hover:text-indigo-700",
        "solid-pink": "hover:bg-pink-100 hover:text-pink-700",
        "solid-purple": "hover:bg-purple-100 hover:text-purple-700",
        "solid-gray": "hover:bg-gray-100 hover:text-gray-700",
        "solid-black": "hover:bg-gray-500",
        "solid-white": "hover:bg-gray-100 border border-gray-300"
      },
      lightHoverColors: {
        "light-red": "hover:bg-red-50 hover:text-red-700",
        "light-blue": "hover:bg-blue-50 hover:text-blue-700",
        "light-green": "hover:bg-green-50 hover:text-green-700",
        "light-yellow": "hover:bg-yellow-50 hover:text-yellow-700",
        "light-indigo": "hover:bg-indigo-50 hover:text-indigo-700",
        "light-pink": "hover:bg-pink-50 hover:text-pink-700",
        "light-purple": "hover:bg-purple-50 hover:text-purple-700",
        "light-gray": "hover:bg-gray-50 hover:text-gray-700",
        "light-black": "hover:bg-gray-500",
        "light-white": "hover:bg-gray-100 border border-gray-300"
      }
    };
  },
  computed: {
    bgColorStyle() {
      if (this.color.includes("solid")) {
        return this.solidColors[this.color];
      } else if (this.color.includes("light")) {
        return this.lightColors[this.color];
      } else if (this.color.includes("gradient")) {
        return this.gradientDirections[this.gradientDirection] + " " + this.gradientFirstColors[this.color.split("-")[1]] + " " + this.gradientSecondColors[this.color.split("-")[3]];
      }
    },
    bgHoverColorStyle() {
      if (this.color.includes("solid")) {
        return this.solidHoverColors[this.color];
      } else if (this.color.includes("light")) {
        return this.lightHoverColors[this.color];
      } else if (this.color.includes("gradient")) {
        return "filter hover:brightness-125";
      }
    },
    textColorStyle() {
      if (this.color.includes("solid")) {
        return this.solidTextColors[this.color];
      } else if (this.color.includes("light")) {
        return this.lightTextColors[this.color];
      } else if (this.color.includes("gradient")) {
        return this.solidTextColors["solid-" + this.color.split("-")[1]];
      }
    }
  }
};
const radiusSizeMixin = {
  props: {
    radius: {
      type: Number,
      require: false,
      default: 3
    }
  },
  data() {
    return {
      radiusSizes: [
        "rounded-sm",
        "rounded",
        "rounded-md",
        "rounded-lg",
        "rounded-xl",
        "rounded-2xl",
        "rounded-3xl",
        "rounded-full"
      ]
    };
  },
  computed: {
    radiusStyle() {
      let i, radiusStyle;
      for (i = 0; i < this.radiusSizes.length; i++) {
        if (i === this.radius - 1) {
          radiusStyle = this.radiusSizes[i];
        }
      }
      return radiusStyle;
    }
  }
};
const __variableDynamicImportRuntimeHelper = (glob$1, path$13, segs) => {
  const v = glob$1[path$13];
  if (v) return typeof v === "function" ? v() : Promise.resolve(v);
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
};
const _sfc_main = {
  __name: "TButton",
  __ssrInlineRender: true,
  props: {
    size: {
      type: String,
      default: "normal"
    },
    design: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "blue"
    },
    radius: {
      type: Number,
      default: 3
    },
    link: {
      type: String,
      default: "#"
    },
    border: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingDesign: {
      type: String,
      default: "three-bars"
    },
    loadingWithContent: {
      type: Boolean,
      default: false
    },
    loadingColor: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "submit"
    }
  },
  setup(__props) {
    const props = __props;
    const {
      color,
      design,
      border,
      radius,
      disabled,
      size,
      loading,
      loadingWithContent,
      loadingDesign
    } = toRefs(props);
    const tStyle = reactive({});
    tStyle["container"] = computed(() => {
      return "button button-" + size.value + " button-" + design.value + "-base button-" + design.value + "-" + color.value + " radius-" + radius.value + " " + (disabled.value ? " button-disabled" : "") + " " + (border.value ? "border" : "") + " " + (loading.value || loadingWithContent.value ? "pointer-events-none" : "");
    });
    tStyle["content"] = computed(() => {
      return "button-content " + (loading.value ? "invisible" : "");
    });
    const activeLoadingComponent = ref();
    if (loadingDesign.value === "three-bars") {
      activeLoadingComponent.value = "TLoadingAnimationThreeBars";
    } else if (loadingDesign.value === "cogs") {
      activeLoadingComponent.value = "TLoadingAnimationCogs";
    } else {
      activeLoadingComponent.value = "TLoadingAnimationThreeDots";
    }
    const loadingComponent = defineAsyncComponent(() => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../Loading/Animations/TLoadingAnimationCogs.vue": () => import("./TLoadingAnimationCogs-Du4lKl4b.js"), "../Loading/Animations/TLoadingAnimationThreeBars.vue": () => import("./TLoadingAnimationThreeBars-BcS5DV2N.js"), "../Loading/Animations/TLoadingAnimationThreeDots.vue": () => import("./TLoadingAnimationThreeDots-DyFgu7Fw.js") }), `../Loading/Animations/${activeLoadingComponent.value}.vue`, 4));
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.type === "submit" || __props.type === "button" || __props.type === "external-link") {
        _push(`<button${ssrRenderAttrs(mergeProps({
          class: tStyle["container"],
          onclick: !unref(disabled) && __props.type === "external-link" ? "window.location.href='" + __props.link + "'" : "",
          type: __props.type
        }, _attrs))}>`);
        if (unref(loadingWithContent)) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(loadingComponent)), {
            color: __props.loadingColor ? __props.loadingColor : unref(color)
          }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="${ssrRenderClass(tStyle["content"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
        if (unref(loading)) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(loadingComponent)), {
            color: __props.loadingColor ? __props.loadingColor : unref(color),
            class: "mx-auto absolute"
          }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      } else {
        _push(ssrRenderComponent(unref(Link), mergeProps({
          href: __props.link,
          class: tStyle["container"]
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Button/TButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function windowSizeCalculator() {
  const windowWidth = ref();
  const deviceType = ref();
  const onResize = () => {
    windowWidth.value = window.innerWidth;
  };
  onBeforeMount(() => {
    deviceTypeCalculate();
    window.addEventListener("resize", onResize);
    onResize();
  });
  const deviceTypeCalculate = () => {
    if (windowWidth.value <= 640) {
      deviceType.value = "phone";
    } else if (windowWidth.value <= 768) {
      deviceType.value = "tablet";
    } else if (windowWidth.value <= 1024) {
      deviceType.value = "laptop";
    } else {
      deviceType.value = "desktop";
    }
  };
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  watch(
    windowWidth,
    () => {
      deviceTypeCalculate();
    }
  );
  return { deviceType };
}
export {
  TAlert as T,
  __variableDynamicImportRuntimeHelper as _,
  appConf as a,
  bgColorStyles as b,
  badgeConf as c,
  _sfc_main as d,
  avatarConf as e,
  footerConf as f,
  authScreenConf as g,
  formContentConf as h,
  mainMenuConf as m,
  radiusSizeMixin as r,
  topBarConf as t,
  windowSizeCalculator as w
};

import { useSlots, inject, ref, computed, watch, mergeProps, unref, useSSRContext, onBeforeMount, onUnmounted } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const appConf = {
  appName: "TailAdmin",
  catchPhrase: "Peace at Home, Peace in the World",
  logo: {
    dark: "/img/dark-logo.svg",
    light: "/img/light-logo.svg"
  },
  logoAreaClasses: null,
  appNameClasses: null,
  logoClasses: null,
  radius: 3,
  mainMenuDesign: "umay"
};
const authScreenConf = {
  appName: null,
  logo: {
    dark: null,
    light: null
  },
  logoAreaClasses: ["flex", "flex-col", "justify-center", "items-center", "space-x-2", "min-w-[25rem]"],
  appNameClasses: ["text-3xl", "font-semibold"],
  logoClasses: ["w-12", "text-white", "h-auto"],
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
      dark: "/img/dark-logo.svg",
      light: "/img/dark-logo.svg"
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
      dark: "/img/rose-logo.svg",
      light: "/img/rose-logo.svg"
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
  visible: true,
  content: '<a\n              class="text-blue-600 hover:underline"\n              href="https://tailadmin.dev/"\n              target="_blank"\n            >\n              TailAdmin v2\n              </a>\n            <span>by</span>\n            <a\n              class="text-teal-400 hover:underline"\n              href="https://github.com/sinan-aydogan"\n              target="_blank"\n            >\n              Sinan AYDOĞAN\n            </a>'
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
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Alert/TAlert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TAlert = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-240ebda4"]]);
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
  appConf as a,
  badgeConf as b,
  avatarConf as c,
  authScreenConf as d,
  formContentConf as e,
  footerConf as f,
  mainMenuConf as m,
  topBarConf as t,
  windowSizeCalculator as w
};

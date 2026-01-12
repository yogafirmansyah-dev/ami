import { ref, watchEffect, useSSRContext, computed, shallowRef, onMounted, createVNode, resolveDynamicComponent, defineComponent, mergeProps, resolveComponent, toRefs, inject, useSlots, withCtx, toDisplayString, createBlock, openBlock, createCommentVNode, watch, defineAsyncComponent, unref, provide } from "vue";
import { usePage, Link, router, useForm, Head } from "@inertiajs/vue3";
import { useStorage, useBreakpoints, breakpointsTailwind } from "@vueuse/core";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderSlot, ssrRenderComponent, ssrRenderStyle, ssrRenderTeleport } from "vue/server-renderer";
import { _ as __variableDynamicImportRuntimeHelper, b as bgColorStyles, r as radiusSizeMixin } from "./TButton-oXLR37ud.js";
import { a as appConf, b as badgeConf, t as topBarConf, T as TAlert, w as windowSizeCalculator, f as footerConf } from "./windowSizeCalculator-4-m3qk2a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { T as TDropdown } from "./TDropdown-8pNOPgDY.js";
import { useI18n } from "vue-i18n";
import { n as notificationTranslates, u as userMenuTranslates } from "./displayLanguage-Bjc1nzNS.js";
import { T as TAvatar } from "./TAvatar-Cw8URzx6.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { u as useDarkModeStore } from "./darkMode-BsM-iRm5.js";
import { faSun, faMoon, faPalette } from "@fortawesome/free-solid-svg-icons";
import { storeToRefs } from "pinia";
const _sfc_main$a = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const show = ref(true);
    const style = ref("success");
    const message = ref("");
    watchEffect(async () => {
      style.value = page.props.jetstream.flash?.bannerStyle || "success";
      message.value = page.props.jetstream.flash?.banner || "";
      show.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (show.value && message.value) {
        _push(`<div class="${ssrRenderClass({ "bg-indigo-500": style.value == "success", "bg-red-700": style.value == "danger" })}"><div class="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center min-w-0"><span class="${ssrRenderClass([{ "bg-indigo-600": style.value == "success", "bg-red-600": style.value == "danger" }, "flex p-2 rounded-lg"])}">`);
        if (style.value == "success") {
          _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (style.value == "danger") {
          _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span><p class="ms-3 font-medium text-sm text-white truncate">${ssrInterpolate(message.value)}</p></div><div class="shrink-0 sm:ms-3"><button type="button" class="${ssrRenderClass([{ "hover:bg-indigo-600 focus:bg-indigo-600": style.value == "success", "hover:bg-red-600 focus:bg-red-600": style.value == "danger" }, "-me-1 flex p-2 rounded-md focus:outline-none sm:-me-2 transition"])}" aria-label="Dismiss"><svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Banner.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "MainMenu",
  __ssrInlineRender: true,
  props: {
    design: {
      type: String,
      default: ""
    },
    menuStatus: {
      type: String,
      default: "opened"
    }
  },
  setup(__props) {
    const props = __props;
    const menuDesigns = {
      umay: "Umay",
      abay: "Abay"
    };
    const menuDesign = computed(() => {
      if (menuDesigns.hasOwnProperty(props.design) && props.design !== "") {
        return menuDesigns[props.design];
      }
      return menuDesigns[appConf.mainMenuDesign];
    });
    const mainMenu = shallowRef();
    onMounted(async () => {
      await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./MainMenu/Abay/MainMenu.vue": () => import("./MainMenu-B3fwPHLf.js"), "./MainMenu/Umay/MainMenu.vue": () => import("./MainMenu-BBjxHj_a.js") }), `./MainMenu/${menuDesign.value}/MainMenu.vue`, 4).then((module) => {
        mainMenu.value = module.default;
      }).catch((e) => {
        console.error(e);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(mainMenu.value), _attrs, null), _parent);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainMenu.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const toastrStyleMixin = {
  props: {
    position: {
      type: String,
      default: "rb"
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  mixins: [bgColorStyles, radiusSizeMixin],
  data() {
    return {
      positionStyles: {
        "lb": "fixed left-4 bottom-4",
        "rb": "fixed right-6 bottom-4",
        "lt": "fixed left-4 top-4",
        "rt": "fixed right-6 top-4",
        "": "relative w-full"
      },
      closeIconColors: {
        "solid-red": "text-red-500 border-red-500",
        "solid-blue": "text-blue-500 border-blue-500",
        "solid-green": "text-green-500 border-green-500",
        "solid-yellow": "text-yellow-500 border-yellow-500",
        "solid-indigo": "text-indigo-500 border-indigo-500",
        "solid-pink": "text-pink-500 border-pink-500",
        "solid-purple": "text-purple-500 border-purple-500",
        "solid-gray": "text-gray-500 border-gray-500",
        "solid-black": "text-black-500 border-black-500",
        "solid-white": "text-white-500 border-white-500",
        "light-red": "text-red-500 border-red-500",
        "light-blue": "text-blue-500 border-blue-500",
        "light-green": "text-green-500 border-green-500",
        "light-yellow": "text-yellow-500 border-yellow-500",
        "light-indigo": "text-indigo-500 border-indigo-500",
        "light-pink": "text-pink-500 border-pink-500",
        "light-purple": "text-purple-500 border-purple-500",
        "light-gray": "text-gray-500 border-gray-500"
      }
    };
  },
  computed: {
    calculatedToastrStyle() {
      let style;
      style = this.bgColorStyle + " " + this.radiusStyle + " " + this.textColorStyle + " " + this.positionStyles[this.position];
      if (this.border) {
        style += " border";
      }
      return style;
    }
  }
};
const _sfc_main$8 = defineComponent({
  name: "TXCircleIcon"
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TXCircleIcon.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const TXCircleIcon = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$7 = defineComponent({
  name: "TToastr",
  components: { TXCircleIcon },
  mixins: [toastrStyleMixin],
  props: {
    id: {
      type: String
    },
    closeable: {
      type: Boolean,
      required: false,
      default: false
    },
    timer: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      showAlertBox: true
    };
  },
  created() {
    if (this.timer) {
      setTimeout(() => {
        this.showAlertBox = false;
        this.$emit("destroy", this.id);
      }, this.timer);
    }
  },
  methods: {
    close() {
      this.showAlertBox = false;
      this.$emit("destroy", this.id);
    }
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_x_circle_icon = resolveComponent("t-x-circle-icon");
  if (_ctx.showAlertBox) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: [
        "toastr",
        _ctx.calculatedToastrStyle
      ]
    }, _attrs))} data-v-b598c155><div class="flex px-1 items-center justify-start gap-2" data-v-b598c155>`);
    ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
    _push(`<div class="flex flex-wrap items-center whitespace-normal flex-shrink-0" data-v-b598c155>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div></div>`);
    if (_ctx.closeable) {
      _push(`<div class="${ssrRenderClass(["toastr-close", _ctx.closeIconColors[_ctx.color]])}" data-v-b598c155>`);
      _push(ssrRenderComponent(_component_t_x_circle_icon, { class: "w-5 h-5 text-white" }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Toastr/TToastr.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const TToastr = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-b598c155"]]);
const _sfc_main$6 = defineComponent({
  name: "TBadge",
  props: {
    design: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    radius: {
      type: Number,
      default: null
    },
    selectable: {
      type: Boolean,
      default: false
    },
    selectIndicator: {
      type: Boolean,
      default: false
    },
    selectActiveStyle: {
      type: Object,
      default: null
    },
    selectPassiveStyle: {
      type: Object,
      default: null
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    badgeValue: {
      type: [Number, String],
      default: null,
      required: false
    },
    collapsible: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit: emit2, slots }) {
    const {
      design,
      color,
      radius,
      selectable,
      selectActiveStyle,
      selectPassiveStyle,
      selectIndicator,
      modelValue,
      collapsible
    } = toRefs(props);
    const showContent = ref(false);
    const value = ref(modelValue.value);
    inject("appConf");
    const temporaryDesign = ref(design.value ? design.value : badgeConf.design);
    const temporaryColor = ref(color.value ? color.value : badgeConf.color);
    const temporaryRadius = ref(radius.value ? radius.value : badgeConf.radius);
    const select = () => {
      value.value = !value.value;
      emit2("update:modelValue", value.value);
    };
    const toggle = () => {
      showContent.value = !showContent.value;
    };
    const containerStyle = computed(() => {
      let activeColor, activeDesign, passiveStyle;
      if (selectable.value) {
        if (selectActiveStyle.value && !selectPassiveStyle.value) {
          passiveStyle = selectActiveStyle.value;
        } else {
          passiveStyle = selectPassiveStyle.value;
        }
        if (value.value && selectActiveStyle.value) {
          activeColor = selectActiveStyle.value["color"];
          activeDesign = selectActiveStyle.value["design"];
        } else if (!value.value && selectActiveStyle.value) {
          activeColor = passiveStyle["color"];
          activeDesign = passiveStyle["design"];
        } else {
          activeColor = temporaryColor.value;
          activeDesign = temporaryDesign.value;
        }
      } else {
        activeColor = temporaryColor.value;
        activeDesign = temporaryDesign.value;
      }
      return [
        `badge-${activeDesign}`,
        `badge-${activeDesign}-${activeColor}`,
        `radius-${temporaryRadius.value}`,
        (collapsible.value || selectable.value && !selectIndicator.value) && "cursor-pointer",
        selectable.value && !modelValue.value && !selectActiveStyle.value && "filter grayscale opacity-50"
      ];
    });
    const hasSlot = (name) => !!useSlots()[name];
    return {
      hasSlot,
      toggle,
      select,
      temporaryDesign,
      temporaryRadius,
      showContent,
      containerStyle
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["badge", _ctx.containerStyle]
  }, _attrs))} data-v-458dd1ca>`);
  if (_ctx.temporaryDesign.includes("line")) {
    _push(`<div id="line" class="${ssrRenderClass(_ctx.temporaryDesign === "inline" ? "badge-inline-line" : "badge-outline-line")}" data-v-458dd1ca></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.hasSlot("icon") && _ctx.temporaryDesign !== "outline") {
    _push(`<div class="${ssrRenderClass([[
      { "ml-0.5": 5 > _ctx.temporaryRadius && _ctx.temporaryDesign !== "block" && !_ctx.collapsible },
      { "ml-0.5": 5 <= _ctx.temporaryRadius && _ctx.temporaryDesign === "inline" }
    ], "badge-icon"])}" data-v-458dd1ca>`);
    ssrRenderSlot(_ctx.$slots, "icon", {
      onClick: ($event) => _ctx.collapsible && _ctx.toggle()
    }, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.showContent || !_ctx.collapsible) {
    _push(`<div class="badge-content-container" data-v-458dd1ca><div class="${ssrRenderClass([[
      { "-ml-0.5": _ctx.hasSlot("icon") },
      { "ml-[1.5rem]": _ctx.temporaryDesign === "block" && _ctx.hasSlot("icon") }
    ], "badge-content"])}" data-v-458dd1ca>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div>`);
    if (_ctx.badgeValue) {
      _push(`<div class="${ssrRenderClass([[
        { "mr-0.5": _ctx.temporaryRadius > 4 && _ctx.temporaryDesign !== "elegant" },
        _ctx.badgeValue.length === 1 ? "px-1.5" : "px-1"
      ], "badge-value"])}" data-v-458dd1ca>${ssrInterpolate(_ctx.badgeValue)}</div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.selectable) {
      _push(`<div data-v-458dd1ca>`);
      if (_ctx.hasSlot("selected-icon")) {
        _push(`<div class="badge-select-icon" data-v-458dd1ca>`);
        ssrRenderSlot(_ctx.$slots, "selected-icon", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.hasSlot("unselected-icon")) {
        _push(`<div class="badge-select-icon" data-v-458dd1ca>`);
        ssrRenderSlot(_ctx.$slots, "unselected-icon", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.selectable && _ctx.selectIndicator) {
      _push(`<div class="badge-select-icon" data-v-458dd1ca>`);
      if (_ctx.modelValue) {
        _push(`<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-458dd1ca><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-458dd1ca></path></svg>`);
      } else {
        _push(`<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-458dd1ca><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-458dd1ca></path></svg>`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Badge/TBadge.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TBadge = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-458dd1ca"]]);
const _sfc_main$5 = defineComponent({
  name: "TopMenuNotification",
  components: { TDropdown, TBadge },
  setup() {
    const { tm } = useI18n({
      inheritLocale: true,
      messages: notificationTranslates
    });
    const appConf2 = inject("appConf");
    const topBarConf2 = inject("topBarConf");
    return {
      appConf: appConf2,
      topBarConf: topBarConf2,
      tm
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/TopMenu/TopMenuNotification.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = defineComponent({
  name: "TopMenuUserMenu",
  components: { TAvatar, TDropdown, Link },
  setup() {
    const { tm } = useI18n({
      inheritLocale: true,
      messages: userMenuTranslates
    });
    const showTeamSelector = ref(false);
    const switchToTeam = (team) => {
      router.put(
        route("current-team.update"),
        {
          "team_id": team.id
        },
        {
          preserveState: false
        }
      );
    };
    const logout = () => {
      router.post(
        route("logout")
      );
    };
    return {
      logout,
      switchToTeam,
      showTeamSelector,
      tm
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_dropdown = resolveComponent("t-dropdown");
  const _component_t_avatar = resolveComponent("t-avatar");
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_t_dropdown, mergeProps({
    align: "right",
    "trigger-type": "rich"
  }, _attrs), {
    trigger: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="user-menu-trigger" data-v-feae1f17${_scopeId}><span class="staff-info" data-v-feae1f17${_scopeId}><span class="staff-name text-sm font-semibold text-slate-800 dark:text-white" data-v-feae1f17${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</span><span class="staff-title text-[10px] font-bold text-rose-500 uppercase tracking-tighter" data-v-feae1f17${_scopeId}>${ssrInterpolate(_ctx.$page.props.user_extra.unit_name)}</span></span>`);
        if (_ctx.$page.props.jetstream.managesProfilePhotos) {
          _push2(ssrRenderComponent(_component_t_avatar, {
            alt: _ctx.$page.props.auth.user.name,
            indicator: {
              color: "green",
              label: "",
              position: "rb"
            },
            radius: 8,
            size: 3,
            src: _ctx.$page.props.auth.user.profile_photo_url
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "user-menu-trigger" }, [
            createVNode("span", { class: "staff-info" }, [
              createVNode("span", { class: "staff-name text-sm font-semibold text-slate-800 dark:text-white" }, toDisplayString(_ctx.$page.props.auth.user.name), 1),
              createVNode("span", { class: "staff-title text-[10px] font-bold text-rose-500 uppercase tracking-tighter" }, toDisplayString(_ctx.$page.props.user_extra.unit_name), 1)
            ]),
            _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock(_component_t_avatar, {
              key: 0,
              alt: _ctx.$page.props.auth.user.name,
              indicator: {
                color: "green",
                label: "",
                position: "rb"
              },
              radius: 8,
              size: 3,
              src: _ctx.$page.props.auth.user.profile_photo_url
            }, null, 8, ["alt", "src"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="top-menu-dropdown-content-wrapper-transparent min-w-[15rem] bg-white" data-v-feae1f17${_scopeId}><div class="p-4 border-b dark:bg-slate-800/50" data-v-feae1f17${_scopeId}><p class="text-xs text-slate-500 italic" data-v-feae1f17${_scopeId}>Login sebagai:</p><p class="text-sm font-bold text-slate-700 dark:text-slate-200" data-v-feae1f17${_scopeId}>${ssrInterpolate(_ctx.$page.props.user_extra.unit_name)}</p></div>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("profile.show")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="top-menu-dropdown-item" data-v-feae1f17${_scopeId2}>${ssrInterpolate(_ctx.tm("profile"))}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "top-menu-dropdown-item",
                  textContent: toDisplayString(_ctx.tm("profile"))
                }, null, 8, ["textContent"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="dropdown-item-separator" data-v-feae1f17${_scopeId}></div><span class="logout-button border-b rounded-b" data-v-feae1f17${_scopeId}><span data-v-feae1f17${_scopeId}>${ssrInterpolate(_ctx.tm("logout"))}</span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-feae1f17${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-v-feae1f17${_scopeId}></path></svg></span></div>`);
      } else {
        return [
          createVNode("div", { class: "top-menu-dropdown-content-wrapper-transparent min-w-[15rem] bg-white" }, [
            createVNode("div", { class: "p-4 border-b dark:bg-slate-800/50" }, [
              createVNode("p", { class: "text-xs text-slate-500 italic" }, "Login sebagai:"),
              createVNode("p", { class: "text-sm font-bold text-slate-700 dark:text-slate-200" }, toDisplayString(_ctx.$page.props.user_extra.unit_name), 1)
            ]),
            createVNode(_component_Link, {
              href: _ctx.route("profile.show")
            }, {
              default: withCtx(() => [
                createVNode("div", {
                  class: "top-menu-dropdown-item",
                  textContent: toDisplayString(_ctx.tm("profile"))
                }, null, 8, ["textContent"])
              ]),
              _: 1
            }, 8, ["href"]),
            createVNode("div", { class: "dropdown-item-separator" }),
            createVNode("span", {
              class: "logout-button border-b rounded-b",
              onClick: _ctx.logout
            }, [
              createVNode("span", {
                textContent: toDisplayString(_ctx.tm("logout"))
              }, null, 8, ["textContent"]),
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                })
              ]))
            ], 8, ["onClick"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/TopMenu/TopMenuUserMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TopMenuUserMenu = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-feae1f17"]]);
const _sfc_main$3 = {
  __name: "TLoading",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "gray"
    },
    title: {
      type: String,
      default: "Loading..."
    },
    message: {
      type: String,
      default: "Please wait, while your request being processed"
    },
    loadingDesign: {
      type: String,
      default: "three-bars"
    },
    loadingColor: {
      type: String,
      default: null
    },
    closeable: {
      type: Boolean,
      default: false
    },
    timer: {
      type: Number,
      default: null,
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const { modelValue, timer, color, loadingDesign } = toRefs(props);
    const tStyle = computed(() => {
      return "loading-screen loading-screen-" + color.value;
    });
    const timerCounter = ref(0);
    const countDownCounter = ref(0);
    watch(modelValue, () => {
      if (timer.value && modelValue.value) {
        setTimeout(() => {
          close();
        }, timer.value);
        let countDownFn = setInterval(() => {
          if (timer.value >= timerCounter.value) {
            countDownCounter.value = 100 - timerCounter.value / timer.value * 100;
            timerCounter.value += 4;
          } else {
            clearInterval(countDownFn);
            timerCounter.value = 0;
            close();
          }
        }, 1);
      }
    });
    const close = () => {
      emit("update:modelValue", false);
    };
    const activeLoadingComponent = ref();
    if (loadingDesign.value === "three-bars") {
      activeLoadingComponent.value = "TLoadingAnimationThreeBars";
    } else if (loadingDesign.value === "three-dots") {
      activeLoadingComponent.value = "TLoadingAnimationThreeDots";
    } else {
      activeLoadingComponent.value = "TLoadingAnimationCogs";
    }
    const loadingComponent = defineAsyncComponent(() => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./Animations/TLoadingAnimationCogs.vue": () => import("./TLoadingAnimationCogs-Du4lKl4b.js"), "./Animations/TLoadingAnimationThreeBars.vue": () => import("./TLoadingAnimationThreeBars-BcS5DV2N.js"), "./Animations/TLoadingAnimationThreeDots.vue": () => import("./TLoadingAnimationThreeDots-DyFgu7Fw.js") }), `./Animations/${activeLoadingComponent.value}.vue`, 3));
    const hasSlot = (name) => !!useSlots()[name];
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(modelValue)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: tStyle.value }, _attrs))} data-v-bee85e9b>`);
        if (unref(timer)) {
          _push(`<div class="loading-screen-countdown" data-v-bee85e9b><div id="countdown" style="${ssrRenderStyle({ width: countDownCounter.value + "%" })}" data-v-bee85e9b></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.closeable) {
          _push(`<div class="loading-screen-close" data-v-bee85e9b><svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-bee85e9b><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-bee85e9b></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!hasSlot("default")) {
          _push(`<div class="loading-screen-content" data-v-bee85e9b><div id="wrapper" data-v-bee85e9b><span id="title" data-v-bee85e9b>${ssrInterpolate(__props.title)}</span><span id="message" data-v-bee85e9b>${ssrInterpolate(__props.message)}</span></div>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(loadingComponent)), {
            id: "animation",
            color: __props.loadingColor ? __props.loadingColor : unref(color),
            target: "loading-screen"
          }, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (hasSlot("default")) {
          _push(`<div id="custom-content" data-v-bee85e9b>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
          _push(`</div>`);
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Loading/TLoading.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TLoading = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bee85e9b"]]);
const _sfc_main$2 = {
  __name: "TopMenuThemeSelector",
  __ssrInlineRender: true,
  setup(__props) {
    library.add(faSun, faMoon, faPalette);
    const appConf2 = inject("appConf");
    const topBarConf2 = inject("topBarConf");
    const darkModeStore = useDarkModeStore();
    const { changeTheme } = darkModeStore;
    const { darkMode, appearingMode } = storeToRefs(darkModeStore);
    const { t } = useI18n();
    useForm({
      dark_mode: usePage().props?.auth?.user?.dark_mode ?? "auto"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex p-2 w-10 h-10 justify-center items-center cursor-pointer hover:bg-slate-500/10 dark:hover:bg-slate-500/50 overflow-hidden text-white transform transition-all duration-300", `radius-${unref(topBarConf2).radius ? unref(topBarConf2).radius : unref(appConf2).radius}`]
      }, _attrs))} data-v-71a1b62b><!--[-->`);
      if (unref(darkMode) === "light") {
        _push(ssrRenderComponent(_component_icon, {
          icon: "sun",
          size: "lg",
          key: "light",
          alt: unref(t)("lightMode"),
          class: "text-yellow-500 transform hover:scale-110 active:scale-90 transition-all duration-300"
        }, null, _parent));
      }
      if (unref(darkMode) === "auto") {
        _push(ssrRenderComponent(_component_icon, {
          icon: "palette",
          size: "lg",
          key: "auto",
          alt: unref(t)("auto"),
          class: ["transform hover:scale-110 active:scale-90 transition-all duration-300", {
            "text-gray-500": unref(appearingMode) === "light",
            "text-slate-50": unref(appearingMode) === "dark"
          }]
        }, null, _parent));
      }
      if (unref(darkMode) === "dark") {
        _push(ssrRenderComponent(_component_icon, {
          icon: "moon",
          size: "lg",
          key: "dark",
          alt: unref(t)("darkMode"),
          class: "transform hover:scale-110 active:scale-90 transition-all duration-300"
        }, null, _parent));
      }
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/TopMenu/TopMenuThemeSelector.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TopMenuThemeSelector = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-71a1b62b"]]);
const breakpoints = useBreakpoints(breakpointsTailwind);
const menuStatus = useStorage("menuStatus");
function updateMenuStatus() {
  if (breakpoints.smaller("sm")) {
    if (menuStatus.value === "hidden") {
      menuStatus.value = "opened";
    } else {
      menuStatus.value = "hidden";
    }
  } else {
    if (menuStatus.value === "opened") {
      menuStatus.value = "closed";
    } else {
      menuStatus.value = "opened";
    }
  }
}
const _sfc_main$1 = {
  __name: "TopMenu",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    const page = usePage();
    const breakpoints2 = inject("breakpoints");
    computed(() => {
      const role = page.props.auth.user.role;
      if (role === "admin") return "Cari Unit, Auditor, atau Standar...";
      if (role === "auditor") return "Cari Kode Indikator atau Unit...";
      return "Cari Indikator...";
    });
    provide("appConf", appConf);
    provide("topBarConf", topBarConf);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["top-menu shadow-sm", `radius-${unref(topBarConf).radius ? unref(topBarConf).radius : unref(appConf).radius}`]
      }, _attrs))}>`);
      if (unref(appConf).mainMenuDesign === "umay" || unref(breakpoints2).smaller("md") && unref(appConf).mainMenuDesign === "abay") {
        _push(`<div class="${ssrRenderClass([`radius-${unref(topBarConf).radius ? unref(topBarConf).radius : unref(appConf).radius}`, "trigger"])}"><svg class="${ssrRenderClass([[unref(breakpoints2).smaller("md") && unref(menuStatus) === "opened" || unref(menuStatus) === void 0 ? "trigger-icon-show" : "trigger-icon-hide"], "trigger-icon"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg><svg class="${ssrRenderClass([[unref(menuStatus) === "hidden" || unref(menuStatus) === "closed" ? "trigger-icon-show" : "trigger-icon-hide"], "trigger-icon"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-2 ml-auto">`);
      _push(ssrRenderComponent(TopMenuThemeSelector, null, null, _parent));
      _push(`<div class="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>`);
      _push(ssrRenderComponent(TopMenuUserMenu, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/TopMenu/TopMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = defineComponent({
  components: {
    TopMenu: _sfc_main$1,
    Head,
    TToastr,
    MainMenu: _sfc_main$9,
    JetBanner: _sfc_main$a,
    TAlert
  },
  props: {
    title: {
      type: String,
      default: null
    },
    header: {
      type: String,
      default: null
    },
    subHeader: {
      type: String,
      default: null
    }
  },
  setup(props, { slots }) {
    const { deviceType } = windowSizeCalculator();
    const darkModeStore = useDarkModeStore();
    const { changeThemeUser } = storeToRefs(darkModeStore);
    const { t } = useI18n();
    provide("breakpoints", ref(useBreakpoints(breakpointsTailwind)));
    provide("appearingMode", ref(darkModeStore.appearingMode));
    provide("appConf", ref(appConf));
    const hasSlot = (name) => !!useSlots()[name];
    return {
      footerConf,
      deviceType,
      t,
      hasSlot
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_jet_banner = resolveComponent("jet-banner");
  const _component_main_menu = resolveComponent("main-menu");
  const _component_top_menu = resolveComponent("top-menu");
  const _component_t_alert = resolveComponent("t-alert");
  const _component_t_toastr = resolveComponent("t-toastr");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_jet_banner, null, null, _parent));
  _push(`<div class="main-container">`);
  _push(ssrRenderComponent(_component_main_menu, null, null, _parent));
  _push(`<div class="content-wrapper">`);
  _push(ssrRenderComponent(_component_top_menu, null, null, _parent));
  _push(`<div class="content-container"><div class="container-header"><header class="page-header">`);
  if (_ctx.hasSlot("header") || _ctx.header) {
    _push(`<h1 class="page-title">`);
    if (_ctx.hasSlot("header")) {
      ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
    } else {
      _push(`<span>${ssrInterpolate(_ctx.header)}</span>`);
    }
    _push(`</h1>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.hasSlot("subHeader") || _ctx.subHeader) {
    _push(`<h2 class="page-subtitle">`);
    if (_ctx.hasSlot("subHeader")) {
      ssrRenderSlot(_ctx.$slots, "subHeader", {}, null, _push, _parent);
    } else {
      _push(`<span>${ssrInterpolate(_ctx.subHeader)}</span>`);
    }
    _push(`</h2>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</header>`);
  if (_ctx.hasSlot("action-buttons")) {
    _push(`<div class="page-action-buttons">`);
    ssrRenderSlot(_ctx.$slots, "action-buttons", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "breadcrumb", {}, null, _push, _parent);
  _push(`<main class="flex flex-col flex-grow">`);
  if (_ctx.$page.props.flash.message) {
    _push(`<div class="alert">`);
    _push(ssrRenderComponent(_component_t_alert, {
      color: _ctx.$page.props.flash.message.type,
      timer: 5e3,
      class: "my-2"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>${_ctx.$page.props.flash.message.content ?? ""}</span>`);
        } else {
          return [
            createVNode("span", {
              innerHTML: _ctx.$page.props.flash.message.content
            }, null, 8, ["innerHTML"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  if (_ctx.$page.props.flash.toastr) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_t_toastr, {
      key: _ctx.$page.props.flash.toastr.content,
      closeable: true,
      color: _ctx.$page.props.flash.toastr.type,
      position: _ctx.$page.props.flash.toastr.position,
      timer: 3e3
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>${_ctx.$page.props.flash.toastr.content ?? ""}</span>`);
        } else {
          return [
            createVNode("span", {
              innerHTML: _ctx.$page.props.flash.toastr.content
            }, null, 8, ["innerHTML"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.footerConf.visible) {
    _push(`<footer class="footer"><span class="mt-1 space-x-1 select-none">${_ctx.footerConf.content ?? ""}</span></footer>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  ssrRenderTeleport(_push, (_push2) => {
  }, "body", false, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AppLayout as A,
  TBadge as T,
  TToastr as a,
  TLoading as b,
  TXCircleIcon as c,
  menuStatus as m,
  updateMenuStatus as u
};

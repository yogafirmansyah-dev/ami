import { defineComponent, toRefs, inject, ref, getCurrentInstance, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { Link } from "@inertiajs/vue3";
import { c as avatarConf } from "./windowSizeCalculator-4-m3qk2a.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = defineComponent({
  name: "TAvatar",
  props: {
    src: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    },
    size: {
      type: Number,
      default: null
    },
    radius: {
      type: Number,
      default: null
    },
    indicator: {
      type: Object,
      default: null
    }
  },
  components: {
    Link
  },
  setup(props) {
    const { size, src, radius } = toRefs(props);
    const appConf = inject("appConf");
    const temporarySize = ref(size.value ? size.value : avatarConf.size);
    const temporaryRadius = ref(radius.value ? radius.value : appConf.radius);
    const temporarySrc = ref(src.value ? src.value : avatarConf.defaultPhotoSrc);
    const isAvatarGroup = getCurrentInstance().parent.type.name === "TAvatarGroup";
    return { isAvatarGroup, temporarySize, temporaryRadius, temporarySrc };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [
      "avatar-container",
      { "avatar-container-group": _ctx.isAvatarGroup },
      `avatar-size-${_ctx.temporarySize}`
    ]
  }, _attrs))}>`);
  if (_ctx.link) {
    _push(ssrRenderComponent(_component_Link, { href: _ctx.link }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img class="${ssrRenderClass([
            `radius-${_ctx.temporaryRadius}`,
            `avatar-size-${_ctx.temporarySize}`,
            { "avatar-group-image": _ctx.isAvatarGroup }
          ])}" alt="avatar"${ssrRenderAttr("src", _ctx.temporarySrc)}${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              class: [
                `radius-${_ctx.temporaryRadius}`,
                `avatar-size-${_ctx.temporarySize}`,
                { "avatar-group-image": _ctx.isAvatarGroup }
              ],
              alt: "avatar",
              src: _ctx.temporarySrc
            }, null, 10, ["src"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<img alt="avatar" class="${ssrRenderClass([
      `radius-${_ctx.temporaryRadius}`,
      `avatar-size-${_ctx.temporarySize}`,
      { "avatar-group-image": _ctx.isAvatarGroup }
    ])}"${ssrRenderAttr("src", _ctx.temporarySrc)}>`);
  }
  if (_ctx.indicator) {
    _push(`<div class="${ssrRenderClass([[
      _ctx.temporarySize < 7 ? "text-2xs" : "text-normal",
      `avatar-indicator-position-${_ctx.indicator.position}`,
      `avatar-indicator-${_ctx.indicator.color}`
    ], "avatar-indicator"])}"><div>${ssrInterpolate(_ctx.temporarySize > 3 ? _ctx.indicator.label : null)}</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Avatar/TAvatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TAvatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TAvatar as T
};

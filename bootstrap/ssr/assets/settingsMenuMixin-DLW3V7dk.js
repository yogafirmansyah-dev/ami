import { defineComponent, resolveComponent, withCtx, createBlock, createCommentVNode, createTextVNode, openBlock, toDisplayString, useSSRContext } from "vue";
import { Link } from "@inertiajs/vue3";
import { r as radiusSizeMixin } from "./windowSizeCalculator-Ch6zBFfA.js";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = defineComponent({
  name: "InitialVerticalMenu",
  components: {
    Link
  },
  props: {
    color: {
      type: String,
      default: "gray"
    },
    position: {
      type: String,
      require: true,
      default: "left"
    },
    menu: {
      type: Array,
      require: true
    }
  },
  mixins: [radiusSizeMixin],
  computed: {
    menuStyle() {
      if (this.color !== "black" && this.color !== "white") {
        return "bg-" + this.color + "-300";
      } else if (this.color === "black") {
        return "bg-black text-white transition duration-300";
      } else if (this.color === "white") {
        return "bg-white border border-gray-300 text-gray-700";
      }
    },
    itemStyle() {
      if (this.color !== "black" && this.color !== "white") {
        return "bg-" + this.color + "-400 text-" + this.color + "-600 hover:text-white border-" + this.color + "-400 transition duration-300 ease-in-out";
      } else if (this.color === "black") {
        return "bg-black text-white transition duration-300";
      } else if (this.color === "white") {
        return "bg-white border border-gray-300 text-gray-700";
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass([
    "ivm",
    _ctx.menuStyle,
    _ctx.radiusStyle,
    _ctx.$slots.hasOwnProperty("subContent") ? "justify-between" : "justify-start"
  ])}"><div class="ivm-container"><!--[-->`);
  ssrRenderList(_ctx.menu, (item, index) => {
    _push(`<!--[-->`);
    if (item.link) {
      _push(ssrRenderComponent(_component_Link, {
        href: item.link != null ? item.linkType === "route" ? _ctx.route(item.link) : item.linkType === "internal" ? _ctx.URL(item.link) : item.linkType === "external" ? item.link : "" : "",
        key: index,
        active: item.link !== null ? item.linkType === "route" ? _ctx.route().current(item.link) : item.linkType === "internal" ? _ctx.URL().current(item.link) : "" : "",
        class: [
          "ivm-item",
          _ctx.itemStyle,
          _ctx.radiusStyle,
          _ctx.menu.length !== index + 1 ? "" : item.activeColor ? "" : "font-bold"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (item.icon) {
              _push2(ssrRenderComponent(_component_icon, {
                icon: item.icon,
                size: "lg"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(item.label)}`);
          } else {
            return [
              item.icon ? (openBlock(), createBlock(_component_icon, {
                key: 0,
                icon: item.icon,
                size: "lg"
              }, null, 8, ["icon"])) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(item.label), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></div>`);
  if (_ctx.$slots.hasOwnProperty("subContent")) {
    _push(`<div class="px-3 text-2xl text-gray-700">`);
    ssrRenderSlot(_ctx.$slots, "subContent", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/InitialVerticalMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InitialVerticalMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const settingsMenuMixin = {
  data() {
    return {
      menuList: [
        {
          label: "Settings",
          icon: "cog",
          link: "settings",
          linkType: "route",
          type: "standard",
          activeKey: ["settings-user"]
        },
        {
          label: "Users",
          icon: "",
          link: "settings-user.index",
          linkType: "route",
          type: "standard",
          activeKey: ["settings-user"]
        },
        {
          label: "Roles",
          icon: "",
          link: "settings-role.index",
          linkType: "route",
          type: "standard",
          activeKey: ["settings-role"]
        },
        {
          label: "Permissions",
          icon: "",
          link: "settings-permission.index",
          linkType: "route",
          type: "standard",
          activeKey: ["settings-permission"]
        },
        {
          label: "System",
          icon: "",
          link: "settings-system",
          linkType: "route",
          type: "standard",
          activeKey: ["settings-system"]
        }
      ]
    };
  }
};
export {
  InitialVerticalMenu as I,
  settingsMenuMixin as s
};

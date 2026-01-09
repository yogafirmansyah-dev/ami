import { defineComponent, resolveDirective, mergeProps, ref, nextTick, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = defineComponent({
  name: "TCodeShowCase",
  props: {
    tabs: {
      type: Array,
      default() {
        return [
          { id: "js", label: "JS", type: "code", codeLang: "javascript" },
          { id: "template", label: "Template", type: "code", codeLang: "html" },
          { id: "props", label: "Props" }
        ];
      }
    }
  },
  setup() {
    const activeTab = ref();
    const selectTab = (id) => {
      if (activeTab.value !== id) {
        activeTab.value = null;
        nextTick(() => {
          activeTab.value = id;
        });
      } else {
        activeTab.value = null;
      }
    };
    return { activeTab, selectTab };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _directive_highlightjs = resolveDirective("highlightjs");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full" }, _attrs))} data-v-d705931d><div class="p-4 rounded-t bg-slate-200 dark:bg-transparent dark:shadow border border-b-0 border-slate-400 dark:border-slate-800" data-v-d705931d>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="${ssrRenderClass([{
    "rounded-b": !_ctx.activeTab
  }, "flex overflow-hidden border-l border-r bg-slate-500 text-sm dark:bg-slate-900 border-slate-400 dark:border-0 text-slate-100 transition-all duration-300"])}" data-v-d705931d><div class="flex justify-start items-center space-x-6" data-v-d705931d><!--[-->`);
  ssrRenderList(_ctx.tabs, (tab) => {
    _push(`<span class="flex items-center justify-center space-x-2 hover:bg-slate-600 dark:hover:bg-slate-800/75 cursor-pointer px-4 py-2 select-none transition-colors duration-300" data-v-d705931d>`);
    if (_ctx.$slots["label"]) {
      ssrRenderSlot(_ctx.$slots, "label", { tab }, null, _push, _parent);
    } else {
      _push(`<span data-v-d705931d>${ssrInterpolate(tab.label)}</span>`);
    }
    _push(`</span>`);
  });
  _push(`<!--]--></div></div>`);
  if (_ctx.activeTab) {
    _push(`<div class="border border-t-0 rounded-b-md border-slate-400 dark:border-0" data-v-d705931d><!--[-->`);
    ssrRenderList(_ctx.tabs, (tab) => {
      _push(`<!--[-->`);
      if (_ctx.activeTab === tab.id && tab.type !== "code") {
        ssrRenderSlot(_ctx.$slots, tab.id, {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.activeTab === tab.id && tab.type === "code") {
        _push(`<pre${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_highlightjs))} data-v-d705931d>                        <code class="${ssrRenderClass([tab.codeLang, "rounded-b overflow-scroll"])}" data-v-d705931d>`);
        ssrRenderSlot(_ctx.$slots, tab.id, {}, null, _push, _parent);
        _push(`</code>
                    </pre>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.activeTab === tab.id && tab.type === "table") {
        _push(`<div class="p-2 space-y-2 bg-slate-200 dark:bg-slate-800 rounded-b" data-v-d705931d><!--[-->`);
        ssrRenderList(tab.table.content, (row) => {
          _push(`<div class="bg-slate-300 border border-slate-400 dark:border-transparent dark:bg-slate-500 rounded p-2" data-v-d705931d><!--[-->`);
          ssrRenderList(tab.table.headers, (header) => {
            _push(`<!--[-->`);
            if (row[header.id]) {
              _push(`<div class="${ssrRenderClass([header.id === "description" ? "flex-col" : "justify-between", "flex p-1 group border-b last:border-0 border-slate-600 hover:bg-slate-500 hover:-translate-y-[.2rem] dark:hover:bg-slate-600 hover:text-slate-100 hover:rounded hover:border-transparent"])}" data-v-d705931d><span class="float-left after:content-[&#39;:&#39;] font-semibold" data-v-d705931d>${ssrInterpolate(header.label)}</span>`);
              if (typeof row[header.id] !== "object") {
                _push(`<span class="${ssrRenderClass({
                  "italic bg-slate-400/50 rounded p-2": header.id === "description"
                })}" data-v-d705931d>${ssrInterpolate(row[header.id])}</span>`);
              } else {
                _push(`<span class="pl-10 text-right" data-v-d705931d><!--[-->`);
                ssrRenderList(row[header.id], (item) => {
                  _push(`<span class="${ssrRenderClass([{
                    "font-semibold bg-slate-200/50 border border-sky-800/20 group-hover:bg-slate-300 group-hover:text-slate-700 dark:bg-blue-100/50 px-1 rounded": header.colorfulBg
                  }, "mr-1 last:mr-0 select-all"])}" data-v-d705931d>${ssrInterpolate(item)}</span>`);
                });
                _push(`<!--]--></span>`);
              }
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Code/TCodeShowcase.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TCodeShowcase = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d705931d"]]);
export {
  TCodeShowcase as T
};

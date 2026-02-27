import { ref, watchEffect, useSSRContext, computed, inject, reactive, onBeforeMount, resolveComponent, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, provide, watch, defineComponent, toRefs, useSlots, defineAsyncComponent, resolveDynamicComponent } from "vue";
import { usePage, Link, router, useForm, Head } from "@inertiajs/vue3";
import { useStorage, useBreakpoints, breakpointsTailwind } from "@vueuse/core";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderSlot, ssrRenderStyle, ssrRenderVNode, ssrRenderTeleport } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { m as mainMenuTranslates, n as notificationTranslates, u as userMenuTranslates } from "./displayLanguage-Bjc1nzNS.js";
import { m as mainMenuConf, a as appConf, b as bgColorStyles, r as radiusSizeMixin, c as badgeConf, _ as __variableDynamicImportRuntimeHelper, t as topBarConf, T as TAlert, w as windowSizeCalculator, f as footerConf } from "./windowSizeCalculator-EVN4qZjG.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { T as TDropdown } from "./TDropdown-BaNvbUUI.js";
import { T as TAvatar } from "./TAvatar-rvhW0AFR.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { u as useDarkModeStore } from "./darkMode-BsM-iRm5.js";
import { faSun, faMoon, faPalette } from "@fortawesome/free-solid-svg-icons";
import { storeToRefs } from "pinia";
const _sfc_main$b = {
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Banner.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
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
function MainMenuLinks({ role, permissions }) {
  const { tm } = useI18n({
    inheritLocale: true,
    messages: mainMenuTranslates
  });
  const roles = Array.isArray(role) ? role : [role];
  const hasRole = (allowed) => [].concat(allowed).some((r) => roles.includes(r));
  const mainMenuLinks = computed(() => {
    return [
      // 1. DASHBOARD (Semua Role)
      // Dashboard tetap muncul
      // { id: "dashboard", label: "Dashboard", icon: "chart-pie", link: "/", type: "route", visibleFor: true },
      // 2. MASTER DATA (Hanya Admin)
      {
        id: "masterData",
        label: "Master Data",
        icon: "database",
        type: "dropdown",
        visibleFor: hasRole("admin"),
        links: [
          { id: "prodis", label: "Program Studi", link: "admin.prodis.index", type: "route" },
          { id: "faculties", label: "Fakultas", link: "admin.faculties.index", type: "route" },
          { id: "periods", label: "Periode AMI", link: "admin.periods.index", type: "route" }
        ]
      },
      // 3. STANDAR & INDIKATOR (Hanya Admin)
      {
        id: "standards",
        label: "Standar Mutu",
        icon: "scroll",
        link: "admin.standards.index",
        activeQuery: "admin.standards.*",
        type: "route",
        visibleFor: hasRole("admin")
      },
      // 4. PENUGASAN AUDIT (Admin, Auditor, Auditee)
      // {
      //     id: "assignments",
      //     label: "Penugasan Audit",
      //     icon: "tasks",
      //     link: null,
      //     type: "dropdown",
      //     visibleFor: true,
      //     links: [
      //         {
      //             id: "adminAssignments",
      //             label: "Kelola Penugasan",
      //             link: "admin.assignments.index",
      //             type: "route",
      //             visibleFor: hasRole('admin')
      //         },
      //         {
      //             id: "auditorAssignments",
      //             label: "Tugas Auditor",
      //             link: "auditor.assignments.index",
      //             type: "route",
      //             visibleFor: hasRole('auditor')
      //         },
      //         {
      //             id: "auditeeAssignments",
      //             label: "Audit Unit Kerja",
      //             link: "auditee.assignments.index",
      //             type: "route",
      //             visibleFor: hasRole('auditee')
      //         },
      //     ]
      // },
      {
        id: "assignments",
        label: "Penugasan Audit",
        icon: "tasks",
        type: "dropdown",
        visibleFor: true,
        links: [
          // Admin & Auditor selalu bisa melihat daftar penugasan
          {
            id: "adminAssignments",
            label: "Kelola Penugasan",
            link: "admin.assignments.index",
            activeQuery: "admin.assignments.*",
            type: "route",
            visibleFor: hasRole("admin")
          },
          {
            id: "auditorAssignments",
            label: "Tugas Auditor",
            link: "auditor.assignments.index",
            activeQuery: "auditor.assignments.*",
            type: "route",
            visibleFor: hasRole("auditor")
          },
          // AUDITEE: Hanya muncul jika tahapannya adalah 'doc_audit' (Audit Dokumen)
          {
            id: "auditeeAssignments",
            label: "Penilaian Audit",
            link: "auditee.assignments.index",
            activeQuery: "auditee.assignments.*",
            // Keep active when inside assignment details
            type: "route",
            visibleFor: hasRole("auditee")
          }
        ]
      },
      // 5. MANAJEMEN USER & SECURITY (Hanya Admin)
      {
        id: "settings",
        label: "Pengaturan Sistem",
        icon: "cog",
        type: "dropdown",
        visibleFor: hasRole("admin"),
        links: [
          { id: "users", label: "Manajemen User", link: "admin.users.index", type: "route" },
          { id: "auditHistory", label: "Audit Trail", link: "admin.history.index", type: "route" }
        ]
      },
      {
        id: "library",
        label: "Dokumen Library",
        icon: "scroll",
        type: "route",
        link: hasRole("admin") ? "admin.library.index" : "library.index",
        visibleFor: hasRole("admin") || hasRole("auditor") || hasRole("auditee")
      }
    ];
  });
  const mainMenuFooterLinks = computed(() => {
    return [
      {
        id: "profile",
        label: "Profil Saya",
        linkType: "route",
        link: "profile.show",
        icon: "user-circle"
      }
    ];
  });
  return { mainMenuLinks, mainMenuFooterLinks };
}
const _sfc_main$a = {
  __name: "MainMenuItem",
  __ssrInlineRender: true,
  props: {
    link: {
      type: Object,
      default: null
    }
  },
  emits: ["selected"],
  setup(__props, { emit: __emit }) {
    const emit2 = __emit;
    const props = __props;
    const selectedLink = inject("selectedLink");
    const activeMenus = reactive({
      root: null,
      second: null,
      third: null
    });
    const select = (selection) => {
      if (selectedLink.value[0] === selection[0] && selection.length === 1 && menuStatus !== "opened") {
        emit2("selected", []);
      } else if (selectedLink.value[0] === selection[0] && selectedLink.value[1] === selection[1] && selection.length === 2) {
        emit2("selected", selection.splice(0, 1));
      } else {
        emit2("selected", selection);
      }
    };
    const checkIsActive = (item) => {
      if (item.activeQuery) {
        return route().current(item.activeQuery);
      }
      return item.link ? route().current(item.link) : false;
    };
    onBeforeMount(() => {
      if (props.link["links"]) {
        for (let child of props.link["links"]) {
          if (checkIsActive(child) && !child["links"]) {
            activeMenus.root = props.link.id;
            activeMenus.second = child.id;
            select([props.link.id, child.id]);
          }
          if (child["links"]) {
            for (let third of child["links"]) {
              if (checkIsActive(third)) {
                activeMenus.root = props.link.id;
                activeMenus.second = child.id;
                activeMenus.third = third.id;
                select([props.link.id, child.id, third.id]);
              }
            }
          }
        }
      } else {
        if (checkIsActive(props.link)) {
          activeMenus.root = props.link.id;
          select([props.link.id]);
        }
      }
    });
    computed(() => {
      let style = {
        rootLinkClasses: {
          activeBg: null,
          normal: null,
          active: null
        },
        secondLinkClasses: {
          activeBg: null,
          normal: null,
          active: null
        },
        thirdLinkClasses: {
          activeBg: null,
          normal: null,
          active: null
        }
      };
      let comparedStyle = `radius-${mainMenuConf.umay.menuRadius ? mainMenuConf.umay.menuRadius : appConf.radius}`;
      let mainKeys = ["rootLinkClasses", "secondLinkClasses", "thirdLinkClasses"];
      let subKeys = ["activeBg", "normal", "active"];
      mainKeys.forEach((link) => {
        subKeys.forEach((subLink) => {
          mainMenuConf.umay[link][subLink].forEach((i) => {
            if (!i.match(/(rounded|radius)/g)) {
              style[link][subLink] = comparedStyle;
            } else {
              style[link][subLink] = null;
            }
          });
        });
      });
      return style;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full px-2 py-1" }, _attrs))} data-v-32d8c3a0>`);
      if (__props.link.type === "dropdown" && __props.link.visibleFor !== false) {
        _push(`<div class="${ssrRenderClass([[
          unref(selectedLink).includes(__props.link.id) && unref(menuStatus) !== "closed" || activeMenus.root === __props.link.id ? "bg-slate-100 dark:bg-slate-800/80 text-rose-600 dark:text-rose-500 font-bold shadow-sm" : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400"
        ], "group flex justify-between items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 w-full"])}" data-v-32d8c3a0><div class="flex items-center gap-3 overflow-hidden" data-v-32d8c3a0><div class="flex justify-center items-center w-6 h-6 shrink-0" data-v-32d8c3a0>`);
        if (__props.link["icon"]) {
          _push(ssrRenderComponent(_component_icon, {
            icon: __props.link.icon,
            class: "w-6 h-6 transition-transform group-hover:scale-110 duration-300"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><span class="${ssrRenderClass([unref(menuStatus) !== "closed" ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0", "text-sm font-bold uppercase tracking-wide whitespace-normal leading-tight transition-all duration-300"])}" data-v-32d8c3a0>${ssrInterpolate(__props.link.label)}</span></div>`);
        if (unref(menuStatus) !== "closed") {
          _push(`<div data-v-32d8c3a0>`);
          _push(ssrRenderComponent(_component_icon, {
            icon: "chevron-down",
            size: "xs",
            class: [[unref(selectedLink).includes(__props.link.id) ? "rotate-180" : "rotate-0"], "transition-transform duration-300 text-current opacity-70"]
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (__props.link.type === "route" && __props.link.visibleFor !== false) {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route(__props.link.link),
          onClick: ($event) => {
            select([__props.link.id]);
            unref(menuStatus) === "closed" && unref(updateMenuStatus)();
          },
          class: ["group flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer w-full transition-all duration-300", [
            unref(selectedLink).includes(__props.link.id) || activeMenus.root === __props.link.id ? "bg-slate-100 dark:bg-slate-800/80 text-rose-600 dark:text-rose-500 font-bold shadow-sm" : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400"
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex justify-center items-center w-6 h-6 shrink-0" data-v-32d8c3a0${_scopeId}>`);
              if (__props.link["icon"]) {
                _push2(ssrRenderComponent(_component_icon, {
                  icon: __props.link.icon,
                  class: "w-6 h-6 transition-transform group-hover:scale-110 duration-300"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><span class="${ssrRenderClass([unref(menuStatus) !== "closed" ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0", "text-sm font-bold uppercase tracking-wide whitespace-normal leading-tight transition-all duration-300"])}" data-v-32d8c3a0${_scopeId}>${ssrInterpolate(__props.link.label)}</span>`);
            } else {
              return [
                createVNode("div", { class: "flex justify-center items-center w-6 h-6 shrink-0" }, [
                  __props.link["icon"] ? (openBlock(), createBlock(_component_icon, {
                    key: 0,
                    icon: __props.link.icon,
                    class: "w-6 h-6 transition-transform group-hover:scale-110 duration-300"
                  }, null, 8, ["icon"])) : createCommentVNode("", true)
                ]),
                createVNode("span", {
                  textContent: toDisplayString(__props.link.label),
                  class: ["text-sm font-bold uppercase tracking-wide whitespace-normal leading-tight transition-all duration-300", unref(menuStatus) !== "closed" ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"]
                }, null, 10, ["textContent"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (__props.link.type === "simple-link" && __props.link.visibleFor !== false) {
        _push(`<a${ssrRenderAttr("href", __props.link.link)}${ssrRenderAttr("target", __props.link.target)} class="${ssrRenderClass([[
          "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-rose-600 dark:hover:text-rose-400"
        ], "group flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer w-full transition-all duration-300"])}" data-v-32d8c3a0><div class="flex justify-center items-center w-6 h-6 shrink-0" data-v-32d8c3a0>`);
        if (__props.link["icon"]) {
          _push(ssrRenderComponent(_component_icon, {
            icon: __props.link.icon,
            class: "w-6 h-6 transition-transform group-hover:scale-110 duration-300"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><span class="${ssrRenderClass([unref(menuStatus) !== "closed" ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0", "text-sm font-bold uppercase tracking-wide whitespace-normal leading-tight transition-all duration-300"])}" data-v-32d8c3a0>${ssrInterpolate(__props.link.label)}</span></a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.link.links && unref(selectedLink).includes(__props.link.id) && unref(menuStatus) !== "closed") {
        _push(`<div class="flex flex-col py-2 space-y-2 overflow-hidden" data-v-32d8c3a0><!--[-->`);
        ssrRenderList(__props.link.links, (subItem) => {
          _push(`<!--[-->`);
          if (subItem.type === "dropdown" && subItem.visibleFor !== false) {
            _push(`<div class="${ssrRenderClass([[
              unref(selectedLink).includes(subItem.id) || activeMenus.second === subItem.id ? "bg-slate-50 dark:bg-slate-800/50 text-rose-600 dark:text-rose-400 font-bold border-l-rose-500 shadow-sm" : "text-slate-500 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400"
            ], "group flex justify-between items-center px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-300 w-full ml-2 border-l-2 border-slate-100 dark:border-slate-800 hover:border-rose-500"])}" data-v-32d8c3a0><div class="flex items-center gap-3" data-v-32d8c3a0>`);
            if (subItem["icon"]) {
              _push(ssrRenderComponent(_component_icon, {
                icon: subItem.icon,
                class: "w-5 h-5 transition-transform group-hover:scale-110"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<span class="text-xs font-semibold uppercase tracking-wide whitespace-normal leading-tight" data-v-32d8c3a0>${ssrInterpolate(subItem.label)}</span></div>`);
            _push(ssrRenderComponent(_component_icon, {
              icon: "chevron-down",
              size: "xs",
              class: [[unref(selectedLink).includes(subItem.id) ? "rotate-180" : "rotate-0"], "transition-transform duration-300 text-current opacity-70"]
            }, null, _parent));
            _push(`</div>`);
          } else if (subItem.type === "route" && subItem.visibleFor !== false) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route(subItem.link),
              class: ["group flex justify-between items-center px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-300 w-full ml-2 border-l-2 border-slate-100 dark:border-slate-800 hover:border-rose-500", [
                unref(selectedLink).includes(subItem.id) || activeMenus.second === subItem.id ? "bg-slate-50 dark:bg-slate-800/50 text-rose-600 dark:text-rose-400 font-bold border-l-rose-500 shadow-sm" : "text-slate-500 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400"
              ]]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex items-center gap-3" data-v-32d8c3a0${_scopeId}>`);
                  if (subItem["icon"]) {
                    _push2(ssrRenderComponent(_component_icon, {
                      icon: subItem.icon,
                      class: "w-5 h-5 transition-transform group-hover:scale-110"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<span class="text-xs font-semibold uppercase tracking-wide whitespace-normal leading-tight" data-v-32d8c3a0${_scopeId}>${ssrInterpolate(subItem.label)}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      subItem["icon"] ? (openBlock(), createBlock(_component_icon, {
                        key: 0,
                        icon: subItem.icon,
                        class: "w-5 h-5 transition-transform group-hover:scale-110"
                      }, null, 8, ["icon"])) : createCommentVNode("", true),
                      createVNode("span", {
                        textContent: toDisplayString(subItem.label),
                        class: "text-xs font-semibold uppercase tracking-wide whitespace-normal leading-tight"
                      }, null, 8, ["textContent"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (subItem.type === "simple-link" && subItem.visibleFor !== false) {
            _push(`<a${ssrRenderAttr("href", subItem.link)}${ssrRenderAttr("target", subItem.target)} class="${ssrRenderClass([[
              "text-slate-500 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-rose-600 dark:hover:text-rose-400"
            ], "group flex justify-between items-center px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-300 w-full ml-2 border-l-2 border-slate-100 dark:border-slate-800 hover:border-rose-500"])}" data-v-32d8c3a0><div class="flex items-center gap-3" data-v-32d8c3a0>`);
            if (subItem["icon"]) {
              _push(ssrRenderComponent(_component_icon, {
                icon: subItem.icon,
                class: "w-5 h-5 transition-transform group-hover:scale-110"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<span class="text-xs font-semibold uppercase tracking-wide whitespace-normal leading-tight" data-v-32d8c3a0>${ssrInterpolate(subItem.label)}</span></div></a>`);
          } else {
            _push(`<!---->`);
          }
          if (subItem.links && unref(selectedLink).includes(subItem.id) || subItem.links && activeMenus.second === subItem.id) {
            _push(`<div class="flex flex-col space-y-1 mt-1 ml-4 border-l-2 border-slate-200 dark:border-slate-700 pl-2" data-v-32d8c3a0><!--[-->`);
            ssrRenderList(subItem.links, (thirdItem) => {
              _push(`<!--[-->`);
              if (thirdItem.type === "route" && thirdItem.visibleFor !== false) {
                _push(ssrRenderComponent(unref(Link), {
                  href: _ctx.route(thirdItem.link),
                  class: ["flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer w-full transition-all duration-200", [
                    unref(selectedLink).includes(thirdItem.id) || activeMenus.third === thirdItem.id ? "text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-900/10" : "text-slate-500 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-400"
                  ]]
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      if (thirdItem["icon"]) {
                        _push2(ssrRenderComponent(_component_icon, {
                          icon: thirdItem.icon,
                          class: "w-4 h-4"
                        }, null, _parent2, _scopeId));
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`<span class="text-[11px] font-medium uppercase tracking-wide whitespace-normal leading-tight" data-v-32d8c3a0${_scopeId}>${ssrInterpolate(thirdItem.label)}</span>`);
                    } else {
                      return [
                        thirdItem["icon"] ? (openBlock(), createBlock(_component_icon, {
                          key: 0,
                          icon: thirdItem.icon,
                          class: "w-4 h-4"
                        }, null, 8, ["icon"])) : createCommentVNode("", true),
                        createVNode("span", {
                          textContent: toDisplayString(thirdItem.label),
                          class: "text-[11px] font-medium uppercase tracking-wide whitespace-normal leading-tight"
                        }, null, 8, ["textContent"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!---->`);
              }
              if (thirdItem.type === "simple-link" && thirdItem.visibleFor !== false) {
                _push(`<a${ssrRenderAttr("href", thirdItem.link)}${ssrRenderAttr("target", thirdItem.target)} class="${ssrRenderClass([[
                  "text-slate-500 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-400"
                ], "flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer w-full transition-all duration-200"])}" data-v-32d8c3a0>`);
                if (thirdItem["icon"]) {
                  _push(ssrRenderComponent(_component_icon, {
                    icon: thirdItem.icon,
                    class: "w-4 h-4"
                  }, null, _parent));
                } else {
                  _push(`<!---->`);
                }
                _push(`<span class="text-[11px] font-medium uppercase tracking-wide whitespace-normal leading-tight" data-v-32d8c3a0>${ssrInterpolate(thirdItem.label)}</span></a>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--]-->`);
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
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const MainMenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-32d8c3a0"]]);
const _sfc_main$9 = {
  __name: "MainMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const { mainMenuLinks, mainMenuFooterLinks } = MainMenuLinks({
      role: page.props.auth.user.role
    });
    const selectedLink = ref([]);
    provide("selectedLink", selectedLink);
    const appearingMode = inject("appearingMode");
    const breakpoints2 = inject("breakpoints");
    watch(breakpoints2.value, (newValue) => {
      if (newValue.smaller("md").value) {
        menuStatus.value = "hidden";
      }
      if (newValue.greater("md").value) {
        menuStatus.value = "opened";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: ["umay-main-menu", {
          "umay-main-menu-show": unref(menuStatus) === "opened",
          "umay-main-menu-hide": unref(menuStatus) === "hidden",
          "umay-main-menu-fold": unref(menuStatus) === "closed"
        }]
      }, _attrs))} data-v-1b1c5fa5><div class="${ssrRenderClass([[
        unref(mainMenuConf).umay.logoAreaClasses ? unref(mainMenuConf).umay.logoAreaClasses : unref(appConf).logoAreaClasses,
        `radius-${unref(mainMenuConf).umay.logoAreaRadius ? unref(mainMenuConf).umay.logoAreaRadius : unref(appConf).radius}`
      ], "header"])}" data-v-1b1c5fa5>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("/"),
        class: "logo-out-container"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([unref(menuStatus) === "closed" && "ml-1", "logo-inside-container"])}" data-v-1b1c5fa5${_scopeId}><img${ssrRenderAttr("src", [
              unref(appearingMode) === "dark" ? unref(mainMenuConf).umay.logo.dark ? unref(mainMenuConf).umay.logo.dark : unref(appConf).logo.dark : unref(mainMenuConf).umay.logo.light ? unref(mainMenuConf).umay.logo.light : unref(appConf).logo.light
            ])} class="${ssrRenderClass(unref(mainMenuConf).umay.logoClasses)}" data-v-1b1c5fa5${_scopeId}><div id="logo-title" class="${ssrRenderClass([
              unref(menuStatus) !== "closed" ? "umay-main-menu-title-show" : "umay-main-menu-title-hide",
              unref(mainMenuConf).umay.appNameClasses
            ])}" data-v-1b1c5fa5${_scopeId}>${(unref(mainMenuConf).appName ? unref(mainMenuConf).appName : unref(appConf).appName) ?? ""}</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["logo-inside-container", unref(menuStatus) === "closed" && "ml-1"]
              }, [
                createVNode("img", {
                  src: [
                    unref(appearingMode) === "dark" ? unref(mainMenuConf).umay.logo.dark ? unref(mainMenuConf).umay.logo.dark : unref(appConf).logo.dark : unref(mainMenuConf).umay.logo.light ? unref(mainMenuConf).umay.logo.light : unref(appConf).logo.light
                  ],
                  class: unref(mainMenuConf).umay.logoClasses
                }, null, 10, ["src"]),
                createVNode("div", {
                  id: "logo-title",
                  innerHTML: unref(mainMenuConf).appName ? unref(mainMenuConf).appName : unref(appConf).appName,
                  class: [
                    unref(menuStatus) !== "closed" ? "umay-main-menu-title-show" : "umay-main-menu-title-hide",
                    unref(mainMenuConf).umay.appNameClasses
                  ]
                }, null, 10, ["innerHTML"])
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav id="links-wrapper" class="flex-grow px-3 space-y-1 overflow-y-auto overflow-x-hidden custom-scrollbar" data-v-1b1c5fa5><!--[-->`);
      ssrRenderList(unref(mainMenuLinks), (link) => {
        _push(ssrRenderComponent(MainMenuItem, {
          link,
          onSelected: ($event) => selectedLink.value = $event
        }, null, _parent));
      });
      _push(`<!--]--></nav><div id="footer" class="mt-auto px-4 pt-4 border-t border-white/10 dark:border-slate-800/50" data-v-1b1c5fa5>`);
      if (unref(mainMenuFooterLinks).length > 0 && unref(menuStatus) !== "closed") {
        _push(`<div id="footer-links-wrapper" class="${ssrRenderClass([
          unref(mainMenuFooterLinks).length > 1 ? "grid-cols-2" : "",
          `radius-${unref(mainMenuConf).umay.radius ? unref(mainMenuConf).umay.radius : unref(appConf).radius}`
        ])}" data-v-1b1c5fa5><!--[-->`);
        ssrRenderList(unref(mainMenuFooterLinks), (link) => {
          _push(`<!--[-->`);
          if (link.linkType === "route") {
            _push(ssrRenderComponent(unref(Link), {
              id: "footer-link",
              class: unref(mainMenuFooterLinks).length > 2 ? "justify-start" : "justify-center",
              href: _ctx.route(link.link)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (link.icon) {
                    _push2(ssrRenderComponent(_component_icon, {
                      icon: link.icon,
                      class: "w-4 h-4"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<span data-v-1b1c5fa5${_scopeId}>${ssrInterpolate(link.label ? link.label : link.label)}</span>`);
                } else {
                  return [
                    link.icon ? (openBlock(), createBlock(_component_icon, {
                      key: 0,
                      icon: link.icon,
                      class: "w-4 h-4"
                    }, null, 8, ["icon"])) : createCommentVNode("", true),
                    createVNode("span", {
                      textContent: toDisplayString(link.label ? link.label : link.label)
                    }, null, 8, ["textContent"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<a id="footer-link" class="${ssrRenderClass(unref(mainMenuFooterLinks).length > 2 ? "justify-start" : "justify-center")}"${ssrRenderAttr("href", link.link)}${ssrRenderAttr("target", link.target ? "_blank" : null)} data-v-1b1c5fa5>`);
            if (link.icon) {
              _push(ssrRenderComponent(_component_icon, {
                icon: link.icon,
                class: "w-4 h-4"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<span data-v-1b1c5fa5>${ssrInterpolate(link.label ? link.label : link.label)}</span></a>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div id="footer-trigger" data-v-1b1c5fa5><svg xmlns="http://www.w3.org/2000/svg" class="umay-main-menu-trigger-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-1b1c5fa5><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" data-v-1b1c5fa5></path></svg></div>`);
      }
      _push(`</div></aside>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainMenu/Umay/MainMenu.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const MainMenu = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-1b1c5fa5"]]);
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
        _push2(`<div class="user-menu-trigger" data-v-ec3cedca${_scopeId}><span class="staff-info" data-v-ec3cedca${_scopeId}><span class="staff-name text-sm font-semibold text-slate-800 dark:text-white" data-v-ec3cedca${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</span><span class="staff-title text-[10px] font-bold text-rose-500 uppercase tracking-tighter" data-v-ec3cedca${_scopeId}>${ssrInterpolate(_ctx.$page.props.user_extra.unit_name)}</span></span>`);
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
        _push2(`<div class="top-menu-dropdown-content-wrapper-transparent min-w-[15rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl backdrop-saturate-150 border border-white/50 dark:border-slate-700/50 shadow-2xl" data-v-ec3cedca${_scopeId}><div class="p-4 border-b dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/50" data-v-ec3cedca${_scopeId}><p class="text-xs text-slate-500 italic" data-v-ec3cedca${_scopeId}>Login sebagai:</p><p class="text-sm font-bold text-slate-700 dark:text-slate-200" data-v-ec3cedca${_scopeId}>${ssrInterpolate(_ctx.$page.props.user_extra.unit_name)}</p></div>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("profile.show")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="top-menu-dropdown-item" data-v-ec3cedca${_scopeId2}>${ssrInterpolate(_ctx.tm("profile"))}</div>`);
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
        _push2(`<div class="dropdown-item-separator" data-v-ec3cedca${_scopeId}></div><span class="logout-button border-b rounded-b" data-v-ec3cedca${_scopeId}><span data-v-ec3cedca${_scopeId}>${ssrInterpolate(_ctx.tm("logout"))}</span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-ec3cedca${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-v-ec3cedca${_scopeId}></path></svg></span></div>`);
      } else {
        return [
          createVNode("div", { class: "top-menu-dropdown-content-wrapper-transparent min-w-[15rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl backdrop-saturate-150 border border-white/50 dark:border-slate-700/50 shadow-2xl" }, [
            createVNode("div", { class: "p-4 border-b dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/50" }, [
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
const TopMenuUserMenu = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ec3cedca"]]);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "top-menu shadow-sm" }, _attrs))}>`);
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
    MainMenu,
    JetBanner: _sfc_main$b,
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
  _push(`<div class="min-h-screen bg-slate-50 dark:bg-slate-950 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-rose-50/50 via-slate-50/50 to-white dark:from-rose-950/20 dark:via-slate-950 dark:to-black transition-colors duration-300 ease-in-out"><div class="flex h-screen overflow-hidden">`);
  _push(ssrRenderComponent(_component_main_menu, null, null, _parent));
  _push(`<div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">`);
  _push(ssrRenderComponent(_component_top_menu, null, null, _parent));
  _push(`<div class="w-full px-6 py-8 mx-auto scroll-smooth app-content-container"><div class="mb-8"><header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6"><div class="space-y-1 w-full"><h1 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">`);
  if (_ctx.hasSlot("header")) {
    ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
  } else if (_ctx.header) {
    _push(`<span>${ssrInterpolate(_ctx.header)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</h1><h2 class="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em]">`);
  if (_ctx.hasSlot("subHeader")) {
    ssrRenderSlot(_ctx.$slots, "subHeader", {}, null, _push, _parent);
  } else if (_ctx.subHeader) {
    _push(`<span>${ssrInterpolate(_ctx.subHeader)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</h2></div><div class="flex items-center gap-3">`);
  ssrRenderSlot(_ctx.$slots, "action-buttons", {}, null, _push, _parent);
  _push(`</div></header></div><div class="mb-6">`);
  ssrRenderSlot(_ctx.$slots, "breadcrumb", {}, null, _push, _parent);
  _push(`</div><main class="flex flex-col flex-grow relative z-0">`);
  if (_ctx.$page.props.flash.message) {
    _push(`<div class="mb-6 animate-in slide-in-from-top-2 duration-300">`);
    _push(ssrRenderComponent(_component_t_alert, {
      color: _ctx.$page.props.flash.message.type,
      timer: 5e3
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
  if (_ctx.footerConf.visible) {
    _push(`<footer class="mt-12 py-6 text-center border-t border-slate-100 dark:border-slate-800"><span class="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest select-none">${_ctx.footerConf.content ?? ""}</span></footer>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div>`);
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
  TXCircleIcon as c
};

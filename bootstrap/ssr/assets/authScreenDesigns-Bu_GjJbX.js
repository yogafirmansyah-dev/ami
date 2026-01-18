import { mergeProps, useSSRContext, defineComponent } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "FullScreenLayout",
  __ssrInlineRender: true,
  props: {
    bgImageUrl: {
      type: String,
      default: null
    },
    bgColor: {
      type: Array,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-screen-card" }, _attrs))}><div class="${ssrRenderClass([
        "full-screen-card-container",
        __props.bgColor
      ])}" style="${ssrRenderStyle([__props.bgImageUrl && { backgroundImage: "url(" + __props.bgImageUrl + ")" }])}"></div><div class="full-screen-card-content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FullScreenLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = defineComponent({
  name: "TBellIcon"
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TBellIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TBellIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const authDesigns = [
  {
    id: "amiExclusive",
    bgColor: ["bg-gradient-to-br", "from-slate-900", "via-rose-950", "to-slate-900"],
    bgImage: {
      dark: null,
      light: null
    },
    logo: {
      dark: null,
      // Use default or text
      light: null
    },
    header: ["bg-white/5", "backdrop-blur-xl", "border-b", "border-white/10", "text-white", "shadow-2xl"],
    body: ["bg-white/5", "backdrop-blur-xl", "border", "border-white/10", "shadow-2xl", "text-white"],
    radius: 5,
    login: {
      loginButton: {
        dark: {
          design: "filled",
          color: "rose"
        },
        light: {
          design: "filled",
          color: "rose"
        }
      },
      registerButton: {
        dark: {
          design: "link",
          color: "light"
        },
        light: {
          design: "link",
          color: "light"
        }
      }
    },
    register: {
      loginButton: {
        dark: {
          design: "link",
          color: "light"
        },
        light: {
          design: "link",
          color: "light"
        }
      },
      registerButton: {
        dark: {
          design: "filled",
          color: "rose"
        },
        light: {
          design: "filled",
          color: "rose"
        }
      }
    },
    forgotPassword: {
      sendButton: {
        dark: {
          design: "filled",
          color: "rose"
        },
        light: {
          design: "filled",
          color: "rose"
        }
      },
      backButton: {
        dark: {
          design: "link",
          color: "light"
        },
        light: {
          design: "link",
          color: "light"
        }
      }
    },
    lock: {
      reLoginButton: {
        dark: {
          design: "filled",
          color: "rose"
        },
        light: {
          design: "filled",
          color: "rose"
        }
      }
    }
  },
  {
    id: "violetDream",
    bgColor: ["bg-gradient-to-tl", "from-violet-300", "via-pink-400", "to-amber-300", "dark:bg-violet-400"],
    bgImage: {
      dark: "https://unsplash.com/photos/DKDFBtmZSz8/download?force=true&w=1920",
      light: "https://unsplash.com/photos/nY14Fs8pxT8/download?force=true&w=1920"
    },
    logo: {
      dark: "/img/logo.png",
      light: "/img/logo.png"
    },
    header: ["bg-gradient-to-tl", "from-violet-500", "to-pink-600", "border-b-2", "border-purple-800/50", "dark:border-rose-700", "dark:from-yellow-700/75", "dark:via-rose-800/75", "dark:to-violet-800/50", "text-slate-100", "dark:text-violet-100"],
    body: ["bg-white/50", "dark:bg-slate-800/50"],
    radius: 3,
    login: {
      loginButton: {
        dark: {
          design: "filled",
          color: "pink"
        },
        light: {
          design: "light",
          color: "pink"
        }
      },
      registerButton: {
        dark: {
          design: "link",
          color: "light"
        },
        light: {
          design: "link",
          color: "pink"
        }
      }
    },
    register: {
      loginButton: {
        dark: {
          design: "link",
          color: "light"
        },
        light: {
          design: "link",
          color: "pink"
        }
      },
      registerButton: {
        dark: {
          design: "filled",
          color: "pink"
        },
        light: {
          design: "light",
          color: "pink"
        }
      }
    },
    forgotPassword: {
      sendButton: {
        dark: {
          design: "filled",
          color: "pink"
        },
        light: {
          design: "light",
          color: "pink"
        }
      },
      backButton: {
        dark: {
          design: "link",
          color: "light"
        },
        light: {
          design: "link",
          color: "pink"
        }
      }
    },
    lock: {
      reLoginButton: {
        dark: {
          design: "filled",
          color: "pink"
        },
        light: {
          design: "light",
          color: "pink"
        }
      }
    }
  },
  {
    id: "mountains",
    bgColor: ["bg-blue-500", "dark:bg-blue-800"],
    bgImage: {
      dark: "https://unsplash.com/photos/JgOeRuGD_Y4/download?force=true&w=1920",
      light: "https://unsplash.com/photos/CSpjU6hYo_0/download?force=true&w=1920"
    },
    logo: {
      dark: null,
      light: "/img/logo.png"
    },
    header: ["bg-sky-100/75", "dark:bg-red-800/20", "text-yellow-800", "dark:text-violet-100"],
    body: ["bg-slate-100/75", "dark:bg-slate-800/50"],
    radius: 3,
    login: {
      loginButton: {
        dark: {
          design: "filled",
          color: "red"
        },
        light: {
          design: "filled",
          color: "yellow"
        }
      },
      registerButton: {
        dark: {
          design: "link",
          color: "light"
        },
        light: {
          design: "link",
          color: "yellow"
        }
      }
    },
    register: {
      loginButton: {
        dark: {
          design: "link",
          color: "light"
        },
        light: {
          design: "link",
          color: "yellow"
        }
      },
      registerButton: {
        dark: {
          design: "filled",
          color: "red"
        },
        light: {
          design: "filled",
          color: "yellow"
        }
      }
    },
    forgotPassword: {
      sendButton: {
        dark: {
          design: "filled",
          color: "red"
        },
        light: {
          design: "filled",
          color: "yellow"
        }
      },
      backButton: {
        dark: {
          design: "link",
          color: "light"
        },
        light: {
          design: "link",
          color: "yellow"
        }
      }
    },
    lock: {
      reLoginButton: {
        dark: {
          design: "filled",
          color: "red"
        },
        light: {
          design: "filled",
          color: "yellow"
        }
      }
    }
  }
];
export {
  TBellIcon as T,
  _sfc_main$1 as _,
  authDesigns as a
};

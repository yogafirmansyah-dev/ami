import { T as TBadge, A as AppLayout } from "./AppLayout-CbW7EXnn.js";
import { a as TFormContent, T as TFormSection } from "./TFormContent-CWNM0Okg.js";
import { T as TInputGroup } from "./TInputGroup-D2FkHKt4.js";
import { T as TInputText } from "./TInputText-CyR_XUuU.js";
import { r as radiusSizeMixin, d as _sfc_main$8 } from "./windowSizeCalculator-EVN4qZjG.js";
import Button from "./Button-vZnsuJDi.js";
import { defineComponent, mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, ref } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { T as TTrashIcon } from "./TTrashIcon-B76N3D4s.js";
import { T as TInputCheckBox } from "./TInputCheckBox-C-d63rT9.js";
import { T as TCheckIcon } from "./TCheckIcon-CWPVq9Ck.js";
import { T as TInputTextArea } from "./TInputTextArea-DVPDHKNR.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "vue-i18n";
import "./displayLanguage-Bjc1nzNS.js";
import "pinia";
import "./TDropdown-BaNvbUUI.js";
import "./TAvatar-rvhW0AFR.js";
import "@fortawesome/fontawesome-svg-core";
import "./darkMode-BsM-iRm5.js";
import "@fortawesome/free-solid-svg-icons";
import "./TContentCard-DzR3gMGe.js";
import "./GridSection-BW47oHJP.js";
const _sfc_main$7 = defineComponent({
  name: "TXIcon"
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TXIcon.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const TXIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = defineComponent({
  name: "TPaperClipIcon"
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TPaperClipIcon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TPaperClipIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = defineComponent({
  name: "TAudioIcon"
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TAudioIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TAudioIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = defineComponent({
  name: "TVideoIcon"
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TVideoIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TVideoIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = defineComponent({
  name: "TDocumentIcon"
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/TDocumentIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TDocumentIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "TInputFile",
  components: { TDocumentIcon, TVideoIcon, TAudioIcon, TPaperClipIcon, TBadge, TTrashIcon, TXIcon, Button, TButton: _sfc_main$8 },
  mixins: [radiusSizeMixin],
  props: {
    value: {},
    multiple: {
      type: Boolean,
      default: false
    },
    browseLabel: {
      default: "Browse"
    },
    placeholder: {
      default: "Please choose a file"
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      files: []
    };
  },
  methods: {
    clearFile() {
      this.$refs.input.value = null;
      this.files = [];
      this.$emit("input", null);
    },
    deleteFile(index) {
      this.files.splice(index, 1);
      this.$refs.input.files = null;
      this.$emit("input", this.files);
    },
    updateFile() {
      let x = 0;
      for (x = 0; x < this.$refs.input.files.length; x++) {
        this.$refs.input.files[x].index = x;
        this.files.push(this.$refs.input.files[x]);
      }
      this.$emit("input", this.files);
    }
  },
  filters: {
    sizeCalculator(value) {
      let sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      if (value === 0) return "0 Byte";
      let i = parseInt(Math.floor(Math.log(value) / Math.log(1024)));
      return Math.round(value / Math.pow(1024, i), 2) + " " + sizes[i];
    },
    urlGenerator(value) {
      return URL.createObjectURL(value);
    },
    upperCase(value) {
      return value.toUpperCase().split(".")[value.toUpperCase().split(".").length - 1];
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_t_video_icon = resolveComponent("t-video-icon");
  const _component_t_audio_icon = resolveComponent("t-audio-icon");
  const _component_t_document_icon = resolveComponent("t-document-icon");
  const _component_t_badge = resolveComponent("t-badge");
  const _component_t_button = resolveComponent("t-button");
  const _component_t_trash_icon = resolveComponent("t-trash-icon");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-4ac8140f>`);
  if ($data.files.length > 0 && $props.preview && !$props.multiple) {
    _push(`<div class="${ssrRenderClass(["flex justify-center items-center my-2 overflow-hidden", _ctx.radiusStyle])}" data-v-4ac8140f>`);
    if ($data.files[0].type.split("/")[0] === "image") {
      _push(`<img class="${ssrRenderClass(["max-h-36 w-auto p-1 border", _ctx.radiusStyle])}"${ssrRenderAttr("src", $data.files[0] | _ctx.urlGenerator)} data-v-4ac8140f>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(["flex border items-center overflow-hidden", _ctx.radiusStyle])}" data-v-4ac8140f><input class="hidden" type="file"${ssrIncludeBooleanAttr($props.multiple) ? " multiple" : ""} data-v-4ac8140f>`);
  if (!$props.multiple && $data.files.length > 0) {
    _push(`<div class="flex flex-wrap flex-grow overflow-hidden p-2 justify-between items-center" data-v-4ac8140f><div class="flex overflow-hidden whitespace-nowrap" data-v-4ac8140f>${ssrInterpolate($data.files[0].name)}</div><div class="flex overflow-hidden whitespace-nowrap" data-v-4ac8140f> Size: ${ssrInterpolate($data.files[0].size | _ctx.sizeCalculator)}</div></div>`);
  } else {
    _push(`<div class="flex px-4 overflow-hidden whitespace-nowrap w-full" data-v-4ac8140f>${ssrInterpolate($data.files.length === 0 ? "Please select some files" : $data.files.length + " files added")}</div>`);
  }
  _push(`<div class="flex flex-grow-0 flex-shrink-0 items-center space-x-2" data-v-4ac8140f>`);
  if ($data.files[0]) {
    _push(`<button class="input-clear-button" type="button" data-v-4ac8140f><svg class="input-clear-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-4ac8140f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-4ac8140f></path></svg></button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button class="form-control min-h-10 px-2 border-l outline-none focus:outline-none whitespace-nowrap" type="button" data-v-4ac8140f>${ssrInterpolate($props.browseLabel)}</button></div></div>`);
  if ($data.files.length > 0 && $props.multiple) {
    _push(`<div class="${ssrRenderClass(["flex flex-col border w-full p-4 mt-2", _ctx.radiusStyle])}" data-v-4ac8140f><div${ssrRenderAttrs({ name: "fade" })} data-v-4ac8140f>`);
    ssrRenderList($data.files, (item, index) => {
      _push(`<div class="${ssrRenderClass(["flex flex-wrap justify-between items-center border p-2 w-full my-1", _ctx.radiusStyle])}" data-v-4ac8140f><div class="flex justify-start items-center gap-4" data-v-4ac8140f>`);
      if ($props.preview) {
        _push(`<div data-v-4ac8140f>`);
        if (item.type.split("/")[0] === "image") {
          _push(`<img class="${ssrRenderClass(["h-14 w-14 p-1 border object-cover", _ctx.radiusStyle])}"${ssrRenderAttr("src", item | _ctx.urlGenerator)} data-v-4ac8140f>`);
        } else if (item.type.split("/")[0] === "video") {
          _push(ssrRenderComponent(_component_t_video_icon, {
            class: ["w-14 h-14 p-3 border text-gray-600", _ctx.radiusStyle]
          }, null, _parent));
        } else if (item.type.split("/")[0] === "audio") {
          _push(ssrRenderComponent(_component_t_audio_icon, {
            class: ["w-14 h-14 p-3 border text-gray-600", _ctx.radiusStyle]
          }, null, _parent));
        } else {
          _push(`<div class="${ssrRenderClass(["relative flex justify-center items-center w-14 h-14 border text-gray-600", _ctx.radiusStyle])}" data-v-4ac8140f>`);
          _push(ssrRenderComponent(_component_t_document_icon, { class: "w-12 h-12" }, null, _parent));
          _push(`<span class="absolute flex pt-0.5 w-10 rounded-md items-center justify-center bg-gray-600 text-white top-5 text-sm font-semibold overflow-hidden" data-v-4ac8140f>${ssrInterpolate(item.name | _ctx.upperCase)}</span></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="font-semibold" data-v-4ac8140f>${ssrInterpolate(item.name)}</span></div><div class="flex justify-between items-center gap-4" data-v-4ac8140f><span data-v-4ac8140f>`);
      _push(ssrRenderComponent(_component_t_badge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(item.size | _ctx.sizeCalculator)}`);
          } else {
            return [
              createTextVNode(toDisplayString(item.size | _ctx.sizeCalculator), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</span>`);
      _push(ssrRenderComponent(_component_t_button, {
        type: "button",
        color: "red",
        onClick: ($event) => $options.deleteFile(index)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_t_trash_icon, { class: "w-5 h-5" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_t_trash_icon, { class: "w-5 h-5" })
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div>`);
    });
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Inputs/TInputFile.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TInputFile = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-4ac8140f"]]);
const _sfc_main$1 = {
  name: "TInputRadioButton",
  components: { TCheckIcon },
  mixins: [radiusSizeMixin],
  props: {
    value: {},
    inputValue: {},
    label: String,
    color: {
      type: String,
      default: "white"
    },
    nullable: {
      default: true
    },
    id: String,
    checked: Boolean,
    disabled: Boolean
  },
  data() {
    return {
      isChecked: this.checked
    };
  },
  computed: {
    checkboxStyle() {
      let style;
      if (this.color === "white") {
        style = "hover:bg-blue-100 checked:bg-indigo-200 border-gray-300 text-gray-600";
      } else if (this.color === "black") {
        style = "hover:bg-gray-500 checked:bg-indigo-200 border-black bg-gray-500 text-gray-100";
      } else {
        style = "hover:bg-" + this.color + "-200 active:bg-" + this.color + "-200 border-" + this.color + "-500";
      }
      return style;
    },
    defaultSelectorStyle() {
      let style;
      if (this.color === "white") {
        style = "bg-gray-500";
      } else if (this.color === "black") {
        style = "bg-gray-700";
      } else {
        style = "bg-" + this.color + "-500";
      }
      return style;
    }
  },
  methods: {
    updateField() {
      this.isChecked = !this.isChecked;
      this.$emit("input", this.inputValue);
    }
  },
  watch: {
    value() {
      if (this.value !== this.inputValue) this.isChecked = false;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row" }, _attrs))}><div class="${ssrRenderClass([
    "flex flex-shrink-0 justify-center items-center w-5 h-5 border mr-1",
    $data.isChecked && "bg-" + $props.color + "-100",
    $options.checkboxStyle,
    _ctx.radiusStyle
  ])}">`);
  if ($data.isChecked) {
    _push(`<div class="${ssrRenderClass("text-" + $props.color + "-500")}">`);
    if (_ctx.$slots.hasOwnProperty("icon")) {
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
    } else {
      _push(`<div class="${ssrRenderClass(["flex w-3 h-3", $options.defaultSelectorStyle, _ctx.radiusStyle])}"></div>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div> ${ssrInterpolate($props.label)}</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Inputs/TInputRadioButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TInputRadioButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  name: "SimpleField",
  components: {
    TXIcon,
    TCheckIcon,
    TInputRadioButton,
    TInputFile,
    TInputCheckBox,
    TInputTextArea,
    TInputText,
    TInputGroup,
    TFormSection,
    TFormContent,
    AppLayout
  },
  setup() {
    const selectTextInput = ref({
      framework: {
        select: "laravel",
        text: "",
        options: [
          { key: "laravel", label: "Laravel" },
          { key: "tailwind", label: "Taildwindcss" },
          { key: "vuejs", label: "VueJS" }
        ]
      },
      link: {
        select: "dev",
        text: "",
        options: [
          { key: "dev", label: ".dev" },
          { key: "com", label: ".com" },
          { key: "net", label: ".net" }
        ]
      }
    });
    return { selectTextInput };
  },
  data() {
    return {
      loading: false,
      form: this.$inertia.form({
        _method: "POST",
        text: null,
        password: null,
        number: null,
        date: null,
        month: null,
        time: null,
        color: null,
        singleFile: null,
        multiFile: [],
        checkbox: [],
        radio: null,
        textArea: null
      })
    };
  },
  methods: {
    reset: function() {
      this.form.text = null;
      this.form.password = null;
      this.form.number = null;
      this.form.date = null;
      this.form.month = null;
      this.form.time = null;
      this.form.color = null;
      this.form.file = null;
      this.form.checkbox = [];
      this.form.radio = null;
      this.form.textArea = null;
    },
    save() {
      this.form.post(route("user.store"), {
        errorBag: "user",
        preserveScroll: true
      });
      this.loading = true;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_t_form_content = resolveComponent("t-form-content");
  const _component_t_form_section = resolveComponent("t-form-section");
  const _component_t_input_group = resolveComponent("t-input-group");
  const _component_t_input_text = resolveComponent("t-input-text");
  const _component_t_input_file = resolveComponent("t-input-file");
  const _component_t_input_check_box = resolveComponent("t-input-check-box");
  const _component_t_check_icon = resolveComponent("t-check-icon");
  const _component_t_x_icon = resolveComponent("t-x-icon");
  const _component_t_input_radio_button = resolveComponent("t-input-radio-button");
  const _component_t_input_text_area = resolveComponent("t-input-text-area");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Simple Form Fields`);
      } else {
        return [
          createTextVNode("Simple Form Fields")
        ];
      }
    }),
    subHeader: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Text, text area, select and a few things`);
      } else {
        return [
          createTextVNode("Text, text area, select and a few things")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_t_form_content, {
          onReset: _ctx.reset,
          onSubmitted: _ctx.save
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_t_form_section, {
                description: "Please look at the menu for Select, Date and Repeatable Fields",
                title: "Form Inputs"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      "label-for": "text"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "text",
                            placeholder: "Disabled Text Input Placeholder",
                            disabled: ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "text",
                              placeholder: "Disabled Text Input Placeholder",
                              disabled: ""
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Input field with icon slot",
                      "label-for": "text"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "text-icon",
                            placeholder: "Text Input"
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"${_scopeId5}></path></svg>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                    })
                                  ]))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "text-icon",
                              placeholder: "Text Input"
                            }, {
                              icon: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                  })
                                ]))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Prepend and append feature",
                      "label-for": "text"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "text-prepend-append",
                            placeholder: "Text Input",
                            prepend: "Expense"
                          }, {
                            append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId5}></path></svg>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                  ]))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "text-prepend-append",
                              placeholder: "Text Input",
                              prepend: "Expense"
                            }, {
                              append: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  })
                                ]))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Icon, prepend and append feature",
                      "label-for": "text-icon-prepend-append"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "text",
                            modelValue: _ctx.form.text,
                            "onUpdate:modelValue": ($event) => _ctx.form.text = $event,
                            placeholder: "Text Input",
                            prepend: "Sallary",
                            append: "TRY"
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId5}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"${_scopeId5}></path></svg>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                    })
                                  ]))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "text",
                              modelValue: _ctx.form.text,
                              "onUpdate:modelValue": ($event) => _ctx.form.text = $event,
                              placeholder: "Text Input",
                              prepend: "Sallary",
                              append: "TRY"
                            }, {
                              icon: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                  })
                                ]))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Text input with select feature by outside",
                      "label-for": "text"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "text-select",
                            type: "text",
                            "select-position": "right",
                            placeholder: "Simple Text Input Placeholder",
                            selectValue: _ctx.selectTextInput.framework.select,
                            "onUpdate:selectValue": ($event) => _ctx.selectTextInput.framework.select = $event,
                            modelValue: _ctx.selectTextInput.framework.text,
                            "onUpdate:modelValue": ($event) => _ctx.selectTextInput.framework.text = $event,
                            options: _ctx.selectTextInput.framework.options
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "text-select",
                              type: "text",
                              "select-position": "right",
                              placeholder: "Simple Text Input Placeholder",
                              selectValue: _ctx.selectTextInput.framework.select,
                              "onUpdate:selectValue": ($event) => _ctx.selectTextInput.framework.select = $event,
                              modelValue: _ctx.selectTextInput.framework.text,
                              "onUpdate:modelValue": ($event) => _ctx.selectTextInput.framework.text = $event,
                              options: _ctx.selectTextInput.framework.options
                            }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Text input with start select feature and append by inside",
                      "label-for": "text-icon-prepend-append"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "text",
                            placeholder: "Version",
                            "select-type": "inside",
                            prepend: "Framework",
                            "select-position": "left",
                            selectValue: _ctx.selectTextInput.framework.select,
                            "onUpdate:selectValue": ($event) => _ctx.selectTextInput.framework.select = $event,
                            modelValue: _ctx.selectTextInput.framework.text,
                            "onUpdate:modelValue": ($event) => _ctx.selectTextInput.framework.text = $event,
                            options: _ctx.selectTextInput.framework.options
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "text",
                              placeholder: "Version",
                              "select-type": "inside",
                              prepend: "Framework",
                              "select-position": "left",
                              selectValue: _ctx.selectTextInput.framework.select,
                              "onUpdate:selectValue": ($event) => _ctx.selectTextInput.framework.select = $event,
                              modelValue: _ctx.selectTextInput.framework.text,
                              "onUpdate:modelValue": ($event) => _ctx.selectTextInput.framework.text = $event,
                              options: _ctx.selectTextInput.framework.options
                            }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Text input with select feature by inside",
                      "label-for": "text"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "text-select",
                            type: "text",
                            "select-type": "inside",
                            "select-position": "right",
                            placeholder: "tailadmin.dev",
                            prepend: "https://",
                            selectValue: _ctx.selectTextInput.link.select,
                            "onUpdate:selectValue": ($event) => _ctx.selectTextInput.link.select = $event,
                            modelValue: _ctx.selectTextInput.link.text,
                            "onUpdate:modelValue": ($event) => _ctx.selectTextInput.link.text = $event,
                            options: _ctx.selectTextInput.link.options
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "text-select",
                              type: "text",
                              "select-type": "inside",
                              "select-position": "right",
                              placeholder: "tailadmin.dev",
                              prepend: "https://",
                              selectValue: _ctx.selectTextInput.link.select,
                              "onUpdate:selectValue": ($event) => _ctx.selectTextInput.link.select = $event,
                              modelValue: _ctx.selectTextInput.link.text,
                              "onUpdate:modelValue": ($event) => _ctx.selectTextInput.link.text = $event,
                              options: _ctx.selectTextInput.link.options
                            }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Text input with select feature by inside",
                      "label-for": "text"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "text-select",
                            type: "text",
                            "select-type": "inside",
                            "select-position": "right",
                            placeholder: "tailadmin.dev",
                            prepend: "https://",
                            selectValue: _ctx.selectTextInput.link.select,
                            "onUpdate:selectValue": ($event) => _ctx.selectTextInput.link.select = $event,
                            modelValue: _ctx.selectTextInput.link.text,
                            "onUpdate:modelValue": ($event) => _ctx.selectTextInput.link.text = $event,
                            options: _ctx.selectTextInput.link.options,
                            disableds: ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "text-select",
                              type: "text",
                              "select-type": "inside",
                              "select-position": "right",
                              placeholder: "tailadmin.dev",
                              prepend: "https://",
                              selectValue: _ctx.selectTextInput.link.select,
                              "onUpdate:selectValue": ($event) => _ctx.selectTextInput.link.select = $event,
                              modelValue: _ctx.selectTextInput.link.text,
                              "onUpdate:modelValue": ($event) => _ctx.selectTextInput.link.text = $event,
                              options: _ctx.selectTextInput.link.options,
                              disableds: ""
                            }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Password",
                      "label-for": "password"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "password",
                            modelValue: _ctx.form.password,
                            "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                            placeholder: "Password",
                            type: "password"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "password",
                              modelValue: _ctx.form.password,
                              "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                              placeholder: "Password",
                              type: "password"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Number",
                      "label-for": "number"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "number",
                            modelValue: _ctx.form.number,
                            "onUpdate:modelValue": ($event) => _ctx.form.number = $event,
                            placeholder: "Number",
                            type: "number"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "number",
                              modelValue: _ctx.form.number,
                              "onUpdate:modelValue": ($event) => _ctx.form.number = $event,
                              placeholder: "Number",
                              type: "number"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Date-HTML5",
                      "label-for": "date"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "date",
                            modelValue: _ctx.form.date,
                            "onUpdate:modelValue": ($event) => _ctx.form.date = $event,
                            placeholder: "10.11.1938",
                            type: "date"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "date",
                              modelValue: _ctx.form.date,
                              "onUpdate:modelValue": ($event) => _ctx.form.date = $event,
                              placeholder: "10.11.1938",
                              type: "date"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Month-HTML5",
                      "label-for": "month"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "month",
                            modelValue: _ctx.form.month,
                            "onUpdate:modelValue": ($event) => _ctx.form.month = $event,
                            placeholder: "August 2021",
                            type: "month"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "month",
                              modelValue: _ctx.form.month,
                              "onUpdate:modelValue": ($event) => _ctx.form.month = $event,
                              placeholder: "August 2021",
                              type: "month"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Time-HTML5",
                      "label-for": "time"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "time",
                            modelValue: _ctx.form.time,
                            "onUpdate:modelValue": ($event) => _ctx.form.time = $event,
                            placeholder: "9:05",
                            type: "time"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "time",
                              modelValue: _ctx.form.time,
                              "onUpdate:modelValue": ($event) => _ctx.form.time = $event,
                              placeholder: "9:05",
                              type: "time"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Color-HTML5",
                      "label-for": "color"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text, {
                            id: "color",
                            modelValue: _ctx.form.color,
                            "onUpdate:modelValue": ($event) => _ctx.form.color = $event,
                            type: "color"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text, {
                              id: "color",
                              modelValue: _ctx.form.color,
                              "onUpdate:modelValue": ($event) => _ctx.form.color = $event,
                              type: "color"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Singe File",
                      "label-for": "singleFile"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_file, {
                            preview: true,
                            id: "singleFile",
                            modelValue: _ctx.form.singleFile,
                            "onUpdate:modelValue": ($event) => _ctx.form.singleFile = $event
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_file, {
                              preview: true,
                              id: "singleFile",
                              modelValue: _ctx.form.singleFile,
                              "onUpdate:modelValue": ($event) => _ctx.form.singleFile = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Multi File",
                      "label-for": "multiFile"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_file, {
                            preview: true,
                            id: "multiFile",
                            modelValue: _ctx.form.multiFile,
                            "onUpdate:modelValue": ($event) => _ctx.form.multiFile = $event,
                            multiple: true
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_file, {
                              preview: true,
                              id: "multiFile",
                              modelValue: _ctx.form.multiFile,
                              "onUpdate:modelValue": ($event) => _ctx.form.multiFile = $event,
                              multiple: true
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "CheckBox",
                      "label-for": "checkbox"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="inline-flex flex-wrap items-center gap-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_input_check_box, {
                            modelValue: _ctx.form.checkbox,
                            "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                            disabled: true,
                            radius: 0,
                            color: "solid-white",
                            "input-value": "disabled",
                            label: "Disabled"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_input_check_box, {
                            modelValue: _ctx.form.checkbox,
                            "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                            radius: 0,
                            color: "solid-white",
                            "input-value": "default1",
                            label: "Default"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_input_check_box, {
                            modelValue: _ctx.form.checkbox,
                            "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                            checked: true,
                            radius: 8,
                            color: "solid-gray",
                            "input-value": "default2",
                            label: "Default"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_input_check_box, {
                            modelValue: _ctx.form.checkbox,
                            "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                            radius: 3,
                            color: "solid-green",
                            "input-value": "yes",
                            label: "Yes"
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_check_icon, { class: "w-5 h-5" }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_check_icon, { class: "w-5 h-5" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_input_check_box, {
                            modelValue: _ctx.form.checkbox,
                            "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                            radius: 3,
                            color: "solid-red",
                            "input-value": "no",
                            label: "No"
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_x_icon, { class: "w-5 h-5" }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_x_icon, { class: "w-5 h-5" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_input_check_box, {
                            modelValue: _ctx.form.checkbox,
                            "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                            radius: 5,
                            color: "solid-blue",
                            "input-value": "maybe",
                            label: "Maybe"
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` ? `);
                              } else {
                                return [
                                  createTextVNode(" ? ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "inline-flex flex-wrap items-center gap-2" }, [
                              createVNode(_component_t_input_check_box, {
                                modelValue: _ctx.form.checkbox,
                                "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                                disabled: true,
                                radius: 0,
                                color: "solid-white",
                                "input-value": "disabled",
                                label: "Disabled"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_t_input_check_box, {
                                modelValue: _ctx.form.checkbox,
                                "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                                radius: 0,
                                color: "solid-white",
                                "input-value": "default1",
                                label: "Default"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_t_input_check_box, {
                                modelValue: _ctx.form.checkbox,
                                "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                                checked: true,
                                radius: 8,
                                color: "solid-gray",
                                "input-value": "default2",
                                label: "Default"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_t_input_check_box, {
                                modelValue: _ctx.form.checkbox,
                                "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                                radius: 3,
                                color: "solid-green",
                                "input-value": "yes",
                                label: "Yes"
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_component_t_check_icon, { class: "w-5 h-5" })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_t_input_check_box, {
                                modelValue: _ctx.form.checkbox,
                                "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                                radius: 3,
                                color: "solid-red",
                                "input-value": "no",
                                label: "No"
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_component_t_x_icon, { class: "w-5 h-5" })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_t_input_check_box, {
                                modelValue: _ctx.form.checkbox,
                                "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                                radius: 5,
                                color: "solid-blue",
                                "input-value": "maybe",
                                label: "Maybe"
                              }, {
                                icon: withCtx(() => [
                                  createTextVNode(" ? ")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Radio Button",
                      "label-for": "radio"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="inline-flex flex-wrap items-center gap-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_t_input_radio_button, {
                            modelValue: _ctx.form.radio,
                            "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                            disabled: true,
                            radius: 0,
                            color: "solid-white",
                            "input-value": "disabled",
                            label: "Disabled"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_input_radio_button, {
                            modelValue: _ctx.form.radio,
                            "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                            radius: 0,
                            color: "solid-white",
                            "input-value": "default1",
                            label: "Default"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_input_radio_button, {
                            modelValue: _ctx.form.radio,
                            "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                            checked: true,
                            radius: 8,
                            color: "solid-gray",
                            "input-value": "default2",
                            label: "Default"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_input_radio_button, {
                            modelValue: _ctx.form.radio,
                            "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                            radius: 3,
                            color: "solid-green",
                            "input-value": "yes",
                            label: "Yes"
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_check_icon, { class: "w-5 h-5" }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_check_icon, { class: "w-5 h-5" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_input_radio_button, {
                            modelValue: _ctx.form.radio,
                            "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                            radius: 3,
                            color: "solid-red",
                            "input-value": "no",
                            label: "No"
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_t_x_icon, { class: "w-5 h-5" }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_t_x_icon, { class: "w-5 h-5" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_t_input_radio_button, {
                            modelValue: _ctx.form.radio,
                            "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                            radius: 5,
                            color: "solid-blue",
                            "input-value": "maybe",
                            label: "Maybe"
                          }, {
                            icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` ? `);
                              } else {
                                return [
                                  createTextVNode(" ? ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "inline-flex flex-wrap items-center gap-2" }, [
                              createVNode(_component_t_input_radio_button, {
                                modelValue: _ctx.form.radio,
                                "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                                disabled: true,
                                radius: 0,
                                color: "solid-white",
                                "input-value": "disabled",
                                label: "Disabled"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_t_input_radio_button, {
                                modelValue: _ctx.form.radio,
                                "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                                radius: 0,
                                color: "solid-white",
                                "input-value": "default1",
                                label: "Default"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_t_input_radio_button, {
                                modelValue: _ctx.form.radio,
                                "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                                checked: true,
                                radius: 8,
                                color: "solid-gray",
                                "input-value": "default2",
                                label: "Default"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_t_input_radio_button, {
                                modelValue: _ctx.form.radio,
                                "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                                radius: 3,
                                color: "solid-green",
                                "input-value": "yes",
                                label: "Yes"
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_component_t_check_icon, { class: "w-5 h-5" })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_t_input_radio_button, {
                                modelValue: _ctx.form.radio,
                                "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                                radius: 3,
                                color: "solid-red",
                                "input-value": "no",
                                label: "No"
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_component_t_x_icon, { class: "w-5 h-5" })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_t_input_radio_button, {
                                modelValue: _ctx.form.radio,
                                "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                                radius: 5,
                                color: "solid-blue",
                                "input-value": "maybe",
                                label: "Maybe"
                              }, {
                                icon: withCtx(() => [
                                  createTextVNode(" ? ")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Text Area",
                      "label-for": "address"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_t_input_text_area, {
                            id: "address",
                            modelValue: _ctx.form.textArea,
                            "onUpdate:modelValue": ($event) => _ctx.form.textArea = $event,
                            "clear-button": true,
                            counter: true,
                            rows: 3,
                            placeholder: "Full address"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_t_input_text_area, {
                              id: "address",
                              modelValue: _ctx.form.textArea,
                              "onUpdate:modelValue": ($event) => _ctx.form.textArea = $event,
                              "clear-button": true,
                              counter: true,
                              rows: 3,
                              placeholder: "Full address"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        "label-for": "text"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "text",
                            placeholder: "Disabled Text Input Placeholder",
                            disabled: ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Input field with icon slot",
                        "label-for": "text"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "text-icon",
                            placeholder: "Text Input"
                          }, {
                            icon: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                })
                              ]))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Prepend and append feature",
                        "label-for": "text"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "text-prepend-append",
                            placeholder: "Text Input",
                            prepend: "Expense"
                          }, {
                            append: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ]))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Icon, prepend and append feature",
                        "label-for": "text-icon-prepend-append"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "text",
                            modelValue: _ctx.form.text,
                            "onUpdate:modelValue": ($event) => _ctx.form.text = $event,
                            placeholder: "Text Input",
                            prepend: "Sallary",
                            append: "TRY"
                          }, {
                            icon: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                })
                              ]))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Text input with select feature by outside",
                        "label-for": "text"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "text-select",
                            type: "text",
                            "select-position": "right",
                            placeholder: "Simple Text Input Placeholder",
                            selectValue: _ctx.selectTextInput.framework.select,
                            "onUpdate:selectValue": ($event) => _ctx.selectTextInput.framework.select = $event,
                            modelValue: _ctx.selectTextInput.framework.text,
                            "onUpdate:modelValue": ($event) => _ctx.selectTextInput.framework.text = $event,
                            options: _ctx.selectTextInput.framework.options
                          }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Text input with start select feature and append by inside",
                        "label-for": "text-icon-prepend-append"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "text",
                            placeholder: "Version",
                            "select-type": "inside",
                            prepend: "Framework",
                            "select-position": "left",
                            selectValue: _ctx.selectTextInput.framework.select,
                            "onUpdate:selectValue": ($event) => _ctx.selectTextInput.framework.select = $event,
                            modelValue: _ctx.selectTextInput.framework.text,
                            "onUpdate:modelValue": ($event) => _ctx.selectTextInput.framework.text = $event,
                            options: _ctx.selectTextInput.framework.options
                          }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Text input with select feature by inside",
                        "label-for": "text"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "text-select",
                            type: "text",
                            "select-type": "inside",
                            "select-position": "right",
                            placeholder: "tailadmin.dev",
                            prepend: "https://",
                            selectValue: _ctx.selectTextInput.link.select,
                            "onUpdate:selectValue": ($event) => _ctx.selectTextInput.link.select = $event,
                            modelValue: _ctx.selectTextInput.link.text,
                            "onUpdate:modelValue": ($event) => _ctx.selectTextInput.link.text = $event,
                            options: _ctx.selectTextInput.link.options
                          }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Text input with select feature by inside",
                        "label-for": "text"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "text-select",
                            type: "text",
                            "select-type": "inside",
                            "select-position": "right",
                            placeholder: "tailadmin.dev",
                            prepend: "https://",
                            selectValue: _ctx.selectTextInput.link.select,
                            "onUpdate:selectValue": ($event) => _ctx.selectTextInput.link.select = $event,
                            modelValue: _ctx.selectTextInput.link.text,
                            "onUpdate:modelValue": ($event) => _ctx.selectTextInput.link.text = $event,
                            options: _ctx.selectTextInput.link.options,
                            disableds: ""
                          }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Password",
                        "label-for": "password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "password",
                            modelValue: _ctx.form.password,
                            "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                            placeholder: "Password",
                            type: "password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Number",
                        "label-for": "number"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "number",
                            modelValue: _ctx.form.number,
                            "onUpdate:modelValue": ($event) => _ctx.form.number = $event,
                            placeholder: "Number",
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Date-HTML5",
                        "label-for": "date"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "date",
                            modelValue: _ctx.form.date,
                            "onUpdate:modelValue": ($event) => _ctx.form.date = $event,
                            placeholder: "10.11.1938",
                            type: "date"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Month-HTML5",
                        "label-for": "month"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "month",
                            modelValue: _ctx.form.month,
                            "onUpdate:modelValue": ($event) => _ctx.form.month = $event,
                            placeholder: "August 2021",
                            type: "month"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Time-HTML5",
                        "label-for": "time"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "time",
                            modelValue: _ctx.form.time,
                            "onUpdate:modelValue": ($event) => _ctx.form.time = $event,
                            placeholder: "9:05",
                            type: "time"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Color-HTML5",
                        "label-for": "color"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text, {
                            id: "color",
                            modelValue: _ctx.form.color,
                            "onUpdate:modelValue": ($event) => _ctx.form.color = $event,
                            type: "color"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Singe File",
                        "label-for": "singleFile"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_file, {
                            preview: true,
                            id: "singleFile",
                            modelValue: _ctx.form.singleFile,
                            "onUpdate:modelValue": ($event) => _ctx.form.singleFile = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Multi File",
                        "label-for": "multiFile"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_file, {
                            preview: true,
                            id: "multiFile",
                            modelValue: _ctx.form.multiFile,
                            "onUpdate:modelValue": ($event) => _ctx.form.multiFile = $event,
                            multiple: true
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "CheckBox",
                        "label-for": "checkbox"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "inline-flex flex-wrap items-center gap-2" }, [
                            createVNode(_component_t_input_check_box, {
                              modelValue: _ctx.form.checkbox,
                              "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                              disabled: true,
                              radius: 0,
                              color: "solid-white",
                              "input-value": "disabled",
                              label: "Disabled"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_t_input_check_box, {
                              modelValue: _ctx.form.checkbox,
                              "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                              radius: 0,
                              color: "solid-white",
                              "input-value": "default1",
                              label: "Default"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_t_input_check_box, {
                              modelValue: _ctx.form.checkbox,
                              "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                              checked: true,
                              radius: 8,
                              color: "solid-gray",
                              "input-value": "default2",
                              label: "Default"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_t_input_check_box, {
                              modelValue: _ctx.form.checkbox,
                              "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                              radius: 3,
                              color: "solid-green",
                              "input-value": "yes",
                              label: "Yes"
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_t_check_icon, { class: "w-5 h-5" })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_t_input_check_box, {
                              modelValue: _ctx.form.checkbox,
                              "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                              radius: 3,
                              color: "solid-red",
                              "input-value": "no",
                              label: "No"
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_t_x_icon, { class: "w-5 h-5" })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_t_input_check_box, {
                              modelValue: _ctx.form.checkbox,
                              "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                              radius: 5,
                              color: "solid-blue",
                              "input-value": "maybe",
                              label: "Maybe"
                            }, {
                              icon: withCtx(() => [
                                createTextVNode(" ? ")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12 lg:col-span-6",
                        label: "Radio Button",
                        "label-for": "radio"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "inline-flex flex-wrap items-center gap-2" }, [
                            createVNode(_component_t_input_radio_button, {
                              modelValue: _ctx.form.radio,
                              "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                              disabled: true,
                              radius: 0,
                              color: "solid-white",
                              "input-value": "disabled",
                              label: "Disabled"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_t_input_radio_button, {
                              modelValue: _ctx.form.radio,
                              "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                              radius: 0,
                              color: "solid-white",
                              "input-value": "default1",
                              label: "Default"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_t_input_radio_button, {
                              modelValue: _ctx.form.radio,
                              "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                              checked: true,
                              radius: 8,
                              color: "solid-gray",
                              "input-value": "default2",
                              label: "Default"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_t_input_radio_button, {
                              modelValue: _ctx.form.radio,
                              "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                              radius: 3,
                              color: "solid-green",
                              "input-value": "yes",
                              label: "Yes"
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_t_check_icon, { class: "w-5 h-5" })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_t_input_radio_button, {
                              modelValue: _ctx.form.radio,
                              "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                              radius: 3,
                              color: "solid-red",
                              "input-value": "no",
                              label: "No"
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_t_x_icon, { class: "w-5 h-5" })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_t_input_radio_button, {
                              modelValue: _ctx.form.radio,
                              "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                              radius: 5,
                              color: "solid-blue",
                              "input-value": "maybe",
                              label: "Maybe"
                            }, {
                              icon: withCtx(() => [
                                createTextVNode(" ? ")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_t_input_group, {
                        class: "col-span-12",
                        label: "Text Area",
                        "label-for": "address"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_input_text_area, {
                            id: "address",
                            modelValue: _ctx.form.textArea,
                            "onUpdate:modelValue": ($event) => _ctx.form.textArea = $event,
                            "clear-button": true,
                            counter: true,
                            rows: 3,
                            placeholder: "Full address"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_t_form_section, {
                  description: "Please look at the menu for Select, Date and Repeatable Fields",
                  title: "Form Inputs"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      "label-for": "text"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "text",
                          placeholder: "Disabled Text Input Placeholder",
                          disabled: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Input field with icon slot",
                      "label-for": "text"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "text-icon",
                          placeholder: "Text Input"
                        }, {
                          icon: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                              })
                            ]))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Prepend and append feature",
                      "label-for": "text"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "text-prepend-append",
                          placeholder: "Text Input",
                          prepend: "Expense"
                        }, {
                          append: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              })
                            ]))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Icon, prepend and append feature",
                      "label-for": "text-icon-prepend-append"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "text",
                          modelValue: _ctx.form.text,
                          "onUpdate:modelValue": ($event) => _ctx.form.text = $event,
                          placeholder: "Text Input",
                          prepend: "Sallary",
                          append: "TRY"
                        }, {
                          icon: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                              })
                            ]))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Text input with select feature by outside",
                      "label-for": "text"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "text-select",
                          type: "text",
                          "select-position": "right",
                          placeholder: "Simple Text Input Placeholder",
                          selectValue: _ctx.selectTextInput.framework.select,
                          "onUpdate:selectValue": ($event) => _ctx.selectTextInput.framework.select = $event,
                          modelValue: _ctx.selectTextInput.framework.text,
                          "onUpdate:modelValue": ($event) => _ctx.selectTextInput.framework.text = $event,
                          options: _ctx.selectTextInput.framework.options
                        }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Text input with start select feature and append by inside",
                      "label-for": "text-icon-prepend-append"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "text",
                          placeholder: "Version",
                          "select-type": "inside",
                          prepend: "Framework",
                          "select-position": "left",
                          selectValue: _ctx.selectTextInput.framework.select,
                          "onUpdate:selectValue": ($event) => _ctx.selectTextInput.framework.select = $event,
                          modelValue: _ctx.selectTextInput.framework.text,
                          "onUpdate:modelValue": ($event) => _ctx.selectTextInput.framework.text = $event,
                          options: _ctx.selectTextInput.framework.options
                        }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Text input with select feature by inside",
                      "label-for": "text"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "text-select",
                          type: "text",
                          "select-type": "inside",
                          "select-position": "right",
                          placeholder: "tailadmin.dev",
                          prepend: "https://",
                          selectValue: _ctx.selectTextInput.link.select,
                          "onUpdate:selectValue": ($event) => _ctx.selectTextInput.link.select = $event,
                          modelValue: _ctx.selectTextInput.link.text,
                          "onUpdate:modelValue": ($event) => _ctx.selectTextInput.link.text = $event,
                          options: _ctx.selectTextInput.link.options
                        }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Text input with select feature by inside",
                      "label-for": "text"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "text-select",
                          type: "text",
                          "select-type": "inside",
                          "select-position": "right",
                          placeholder: "tailadmin.dev",
                          prepend: "https://",
                          selectValue: _ctx.selectTextInput.link.select,
                          "onUpdate:selectValue": ($event) => _ctx.selectTextInput.link.select = $event,
                          modelValue: _ctx.selectTextInput.link.text,
                          "onUpdate:modelValue": ($event) => _ctx.selectTextInput.link.text = $event,
                          options: _ctx.selectTextInput.link.options,
                          disableds: ""
                        }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Password",
                      "label-for": "password"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "password",
                          modelValue: _ctx.form.password,
                          "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                          placeholder: "Password",
                          type: "password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Number",
                      "label-for": "number"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "number",
                          modelValue: _ctx.form.number,
                          "onUpdate:modelValue": ($event) => _ctx.form.number = $event,
                          placeholder: "Number",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Date-HTML5",
                      "label-for": "date"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "date",
                          modelValue: _ctx.form.date,
                          "onUpdate:modelValue": ($event) => _ctx.form.date = $event,
                          placeholder: "10.11.1938",
                          type: "date"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Month-HTML5",
                      "label-for": "month"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "month",
                          modelValue: _ctx.form.month,
                          "onUpdate:modelValue": ($event) => _ctx.form.month = $event,
                          placeholder: "August 2021",
                          type: "month"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Time-HTML5",
                      "label-for": "time"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "time",
                          modelValue: _ctx.form.time,
                          "onUpdate:modelValue": ($event) => _ctx.form.time = $event,
                          placeholder: "9:05",
                          type: "time"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Color-HTML5",
                      "label-for": "color"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text, {
                          id: "color",
                          modelValue: _ctx.form.color,
                          "onUpdate:modelValue": ($event) => _ctx.form.color = $event,
                          type: "color"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Singe File",
                      "label-for": "singleFile"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_file, {
                          preview: true,
                          id: "singleFile",
                          modelValue: _ctx.form.singleFile,
                          "onUpdate:modelValue": ($event) => _ctx.form.singleFile = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Multi File",
                      "label-for": "multiFile"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_file, {
                          preview: true,
                          id: "multiFile",
                          modelValue: _ctx.form.multiFile,
                          "onUpdate:modelValue": ($event) => _ctx.form.multiFile = $event,
                          multiple: true
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "CheckBox",
                      "label-for": "checkbox"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "inline-flex flex-wrap items-center gap-2" }, [
                          createVNode(_component_t_input_check_box, {
                            modelValue: _ctx.form.checkbox,
                            "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                            disabled: true,
                            radius: 0,
                            color: "solid-white",
                            "input-value": "disabled",
                            label: "Disabled"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_t_input_check_box, {
                            modelValue: _ctx.form.checkbox,
                            "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                            radius: 0,
                            color: "solid-white",
                            "input-value": "default1",
                            label: "Default"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_t_input_check_box, {
                            modelValue: _ctx.form.checkbox,
                            "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                            checked: true,
                            radius: 8,
                            color: "solid-gray",
                            "input-value": "default2",
                            label: "Default"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_t_input_check_box, {
                            modelValue: _ctx.form.checkbox,
                            "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                            radius: 3,
                            color: "solid-green",
                            "input-value": "yes",
                            label: "Yes"
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_t_check_icon, { class: "w-5 h-5" })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_t_input_check_box, {
                            modelValue: _ctx.form.checkbox,
                            "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                            radius: 3,
                            color: "solid-red",
                            "input-value": "no",
                            label: "No"
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_t_x_icon, { class: "w-5 h-5" })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_t_input_check_box, {
                            modelValue: _ctx.form.checkbox,
                            "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                            radius: 5,
                            color: "solid-blue",
                            "input-value": "maybe",
                            label: "Maybe"
                          }, {
                            icon: withCtx(() => [
                              createTextVNode(" ? ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12 lg:col-span-6",
                      label: "Radio Button",
                      "label-for": "radio"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "inline-flex flex-wrap items-center gap-2" }, [
                          createVNode(_component_t_input_radio_button, {
                            modelValue: _ctx.form.radio,
                            "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                            disabled: true,
                            radius: 0,
                            color: "solid-white",
                            "input-value": "disabled",
                            label: "Disabled"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_t_input_radio_button, {
                            modelValue: _ctx.form.radio,
                            "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                            radius: 0,
                            color: "solid-white",
                            "input-value": "default1",
                            label: "Default"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_t_input_radio_button, {
                            modelValue: _ctx.form.radio,
                            "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                            checked: true,
                            radius: 8,
                            color: "solid-gray",
                            "input-value": "default2",
                            label: "Default"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_t_input_radio_button, {
                            modelValue: _ctx.form.radio,
                            "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                            radius: 3,
                            color: "solid-green",
                            "input-value": "yes",
                            label: "Yes"
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_t_check_icon, { class: "w-5 h-5" })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_t_input_radio_button, {
                            modelValue: _ctx.form.radio,
                            "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                            radius: 3,
                            color: "solid-red",
                            "input-value": "no",
                            label: "No"
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_t_x_icon, { class: "w-5 h-5" })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_t_input_radio_button, {
                            modelValue: _ctx.form.radio,
                            "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                            radius: 5,
                            color: "solid-blue",
                            "input-value": "maybe",
                            label: "Maybe"
                          }, {
                            icon: withCtx(() => [
                              createTextVNode(" ? ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_t_input_group, {
                      class: "col-span-12",
                      label: "Text Area",
                      "label-for": "address"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_input_text_area, {
                          id: "address",
                          modelValue: _ctx.form.textArea,
                          "onUpdate:modelValue": ($event) => _ctx.form.textArea = $event,
                          "clear-button": true,
                          counter: true,
                          rows: 3,
                          placeholder: "Full address"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_t_form_content, {
            onReset: _ctx.reset,
            onSubmitted: _ctx.save
          }, {
            default: withCtx(() => [
              createVNode(_component_t_form_section, {
                description: "Please look at the menu for Select, Date and Repeatable Fields",
                title: "Form Inputs"
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    "label-for": "text"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "text",
                        placeholder: "Disabled Text Input Placeholder",
                        disabled: ""
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Input field with icon slot",
                    "label-for": "text"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "text-icon",
                        placeholder: "Text Input"
                      }, {
                        icon: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-6 w-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                            })
                          ]))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Prepend and append feature",
                    "label-for": "text"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "text-prepend-append",
                        placeholder: "Text Input",
                        prepend: "Expense"
                      }, {
                        append: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-6 w-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                          ]))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Icon, prepend and append feature",
                    "label-for": "text-icon-prepend-append"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "text",
                        modelValue: _ctx.form.text,
                        "onUpdate:modelValue": ($event) => _ctx.form.text = $event,
                        placeholder: "Text Input",
                        prepend: "Sallary",
                        append: "TRY"
                      }, {
                        icon: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-6 w-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                            })
                          ]))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Text input with select feature by outside",
                    "label-for": "text"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "text-select",
                        type: "text",
                        "select-position": "right",
                        placeholder: "Simple Text Input Placeholder",
                        selectValue: _ctx.selectTextInput.framework.select,
                        "onUpdate:selectValue": ($event) => _ctx.selectTextInput.framework.select = $event,
                        modelValue: _ctx.selectTextInput.framework.text,
                        "onUpdate:modelValue": ($event) => _ctx.selectTextInput.framework.text = $event,
                        options: _ctx.selectTextInput.framework.options
                      }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Text input with start select feature and append by inside",
                    "label-for": "text-icon-prepend-append"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "text",
                        placeholder: "Version",
                        "select-type": "inside",
                        prepend: "Framework",
                        "select-position": "left",
                        selectValue: _ctx.selectTextInput.framework.select,
                        "onUpdate:selectValue": ($event) => _ctx.selectTextInput.framework.select = $event,
                        modelValue: _ctx.selectTextInput.framework.text,
                        "onUpdate:modelValue": ($event) => _ctx.selectTextInput.framework.text = $event,
                        options: _ctx.selectTextInput.framework.options
                      }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Text input with select feature by inside",
                    "label-for": "text"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "text-select",
                        type: "text",
                        "select-type": "inside",
                        "select-position": "right",
                        placeholder: "tailadmin.dev",
                        prepend: "https://",
                        selectValue: _ctx.selectTextInput.link.select,
                        "onUpdate:selectValue": ($event) => _ctx.selectTextInput.link.select = $event,
                        modelValue: _ctx.selectTextInput.link.text,
                        "onUpdate:modelValue": ($event) => _ctx.selectTextInput.link.text = $event,
                        options: _ctx.selectTextInput.link.options
                      }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Text input with select feature by inside",
                    "label-for": "text"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "text-select",
                        type: "text",
                        "select-type": "inside",
                        "select-position": "right",
                        placeholder: "tailadmin.dev",
                        prepend: "https://",
                        selectValue: _ctx.selectTextInput.link.select,
                        "onUpdate:selectValue": ($event) => _ctx.selectTextInput.link.select = $event,
                        modelValue: _ctx.selectTextInput.link.text,
                        "onUpdate:modelValue": ($event) => _ctx.selectTextInput.link.text = $event,
                        options: _ctx.selectTextInput.link.options,
                        disableds: ""
                      }, null, 8, ["selectValue", "onUpdate:selectValue", "modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Password",
                    "label-for": "password"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "password",
                        modelValue: _ctx.form.password,
                        "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                        placeholder: "Password",
                        type: "password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Number",
                    "label-for": "number"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "number",
                        modelValue: _ctx.form.number,
                        "onUpdate:modelValue": ($event) => _ctx.form.number = $event,
                        placeholder: "Number",
                        type: "number"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Date-HTML5",
                    "label-for": "date"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "date",
                        modelValue: _ctx.form.date,
                        "onUpdate:modelValue": ($event) => _ctx.form.date = $event,
                        placeholder: "10.11.1938",
                        type: "date"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Month-HTML5",
                    "label-for": "month"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "month",
                        modelValue: _ctx.form.month,
                        "onUpdate:modelValue": ($event) => _ctx.form.month = $event,
                        placeholder: "August 2021",
                        type: "month"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Time-HTML5",
                    "label-for": "time"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "time",
                        modelValue: _ctx.form.time,
                        "onUpdate:modelValue": ($event) => _ctx.form.time = $event,
                        placeholder: "9:05",
                        type: "time"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Color-HTML5",
                    "label-for": "color"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text, {
                        id: "color",
                        modelValue: _ctx.form.color,
                        "onUpdate:modelValue": ($event) => _ctx.form.color = $event,
                        type: "color"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Singe File",
                    "label-for": "singleFile"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_file, {
                        preview: true,
                        id: "singleFile",
                        modelValue: _ctx.form.singleFile,
                        "onUpdate:modelValue": ($event) => _ctx.form.singleFile = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Multi File",
                    "label-for": "multiFile"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_file, {
                        preview: true,
                        id: "multiFile",
                        modelValue: _ctx.form.multiFile,
                        "onUpdate:modelValue": ($event) => _ctx.form.multiFile = $event,
                        multiple: true
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "CheckBox",
                    "label-for": "checkbox"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "inline-flex flex-wrap items-center gap-2" }, [
                        createVNode(_component_t_input_check_box, {
                          modelValue: _ctx.form.checkbox,
                          "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                          disabled: true,
                          radius: 0,
                          color: "solid-white",
                          "input-value": "disabled",
                          label: "Disabled"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_t_input_check_box, {
                          modelValue: _ctx.form.checkbox,
                          "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                          radius: 0,
                          color: "solid-white",
                          "input-value": "default1",
                          label: "Default"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_t_input_check_box, {
                          modelValue: _ctx.form.checkbox,
                          "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                          checked: true,
                          radius: 8,
                          color: "solid-gray",
                          "input-value": "default2",
                          label: "Default"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_t_input_check_box, {
                          modelValue: _ctx.form.checkbox,
                          "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                          radius: 3,
                          color: "solid-green",
                          "input-value": "yes",
                          label: "Yes"
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_t_check_icon, { class: "w-5 h-5" })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_t_input_check_box, {
                          modelValue: _ctx.form.checkbox,
                          "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                          radius: 3,
                          color: "solid-red",
                          "input-value": "no",
                          label: "No"
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_t_x_icon, { class: "w-5 h-5" })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_t_input_check_box, {
                          modelValue: _ctx.form.checkbox,
                          "onUpdate:modelValue": ($event) => _ctx.form.checkbox = $event,
                          radius: 5,
                          color: "solid-blue",
                          "input-value": "maybe",
                          label: "Maybe"
                        }, {
                          icon: withCtx(() => [
                            createTextVNode(" ? ")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12 lg:col-span-6",
                    label: "Radio Button",
                    "label-for": "radio"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "inline-flex flex-wrap items-center gap-2" }, [
                        createVNode(_component_t_input_radio_button, {
                          modelValue: _ctx.form.radio,
                          "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                          disabled: true,
                          radius: 0,
                          color: "solid-white",
                          "input-value": "disabled",
                          label: "Disabled"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_t_input_radio_button, {
                          modelValue: _ctx.form.radio,
                          "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                          radius: 0,
                          color: "solid-white",
                          "input-value": "default1",
                          label: "Default"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_t_input_radio_button, {
                          modelValue: _ctx.form.radio,
                          "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                          checked: true,
                          radius: 8,
                          color: "solid-gray",
                          "input-value": "default2",
                          label: "Default"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_t_input_radio_button, {
                          modelValue: _ctx.form.radio,
                          "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                          radius: 3,
                          color: "solid-green",
                          "input-value": "yes",
                          label: "Yes"
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_t_check_icon, { class: "w-5 h-5" })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_t_input_radio_button, {
                          modelValue: _ctx.form.radio,
                          "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                          radius: 3,
                          color: "solid-red",
                          "input-value": "no",
                          label: "No"
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_t_x_icon, { class: "w-5 h-5" })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_t_input_radio_button, {
                          modelValue: _ctx.form.radio,
                          "onUpdate:modelValue": ($event) => _ctx.form.radio = $event,
                          radius: 5,
                          color: "solid-blue",
                          "input-value": "maybe",
                          label: "Maybe"
                        }, {
                          icon: withCtx(() => [
                            createTextVNode(" ? ")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_input_group, {
                    class: "col-span-12",
                    label: "Text Area",
                    "label-for": "address"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input_text_area, {
                        id: "address",
                        modelValue: _ctx.form.textArea,
                        "onUpdate:modelValue": ($event) => _ctx.form.textArea = $event,
                        "clear-button": true,
                        counter: true,
                        rows: 3,
                        placeholder: "Full address"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onReset", "onSubmitted"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Samples/FormElements/SimpleField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SimpleField = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SimpleField as default
};

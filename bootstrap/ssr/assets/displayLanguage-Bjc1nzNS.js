import { defineComponent, mergeProps, useSSRContext, ref, onBeforeMount } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";
import { router } from "@inertiajs/vue3";
const _sfc_main$6 = defineComponent({
  name: "flagBg"
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480"
  }, _attrs))}><g fill-rule="evenodd" stroke-width="1pt"><path fill="#de2110" d="M0 319.997h640V480H0z"></path><path fill="#fff" d="M0 0h640v160.003H0z"></path><path fill="#319400" d="M0 160.003h640v160.003H0z"></path></g></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Lang/Flags/flagBg.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const flagBg = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = defineComponent({
  name: "flagDe"
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480"
  }, _attrs))}><path fill="#ffce00" d="M0 320h640v160.002H0z"></path><path d="M0 0h640v160H0z"></path><path fill="#d00" d="M0 160h640v160H0z"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Lang/Flags/flagDe.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const flagDe = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = defineComponent({
  name: "flagEn"
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480"
  }, _attrs))}><defs><clipPath id="a"><path fill-opacity=".67" d="M-85.333 0h682.67v512h-682.67z"></path></clipPath></defs><g clip-path="url(#a)" transform="translate(80) scale(.94)"><g stroke-width="1pt"><path fill="#006" d="M-256 0H768.02v512.01H-256z"></path><path d="M-256 0v57.244l909.535 454.768H768.02V454.77L-141.515 0H-256zM768.02 0v57.243L-141.515 512.01H-256v-57.243L653.535 0H768.02z" fill="#fff"></path><path d="M170.675 0v512.01h170.67V0h-170.67zM-256 170.67v170.67H768.02V170.67H-256z" fill="#fff"></path><path d="M-256 204.804v102.402H768.02V204.804H-256zM204.81 0v512.01h102.4V0h-102.4zM-256 512.01L85.34 341.34h76.324l-341.34 170.67H-256zM-256 0L85.34 170.67H9.016L-256 38.164V0zm606.356 170.67L691.696 0h76.324L426.68 170.67h-76.324zM768.02 512.01L426.68 341.34h76.324L768.02 473.848v38.162z" fill="#c00"></path></g></g></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Lang/Flags/flagEn.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const flagEn = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = defineComponent({
  name: "flagFr"
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480"
  }, _attrs))}><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v480H0z"></path><path fill="#00267f" d="M0 0h213.337v480H0z"></path><path fill="#f31830" d="M426.662 0H640v480H426.662z"></path></g></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Lang/Flags/flagFr.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const flagFr = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({
  name: "flagRu"
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480"
  }, _attrs))}><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v480H0z"></path><path fill="#0039a6" d="M0 160.003h640V480H0z"></path><path fill="#d52b1e" d="M0 319.997h640V480H0z"></path></g></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Lang/Flags/flagRu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const flagRu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({
  name: "flagTr"
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480"
  }, _attrs))}><g fill-rule="evenodd"><path fill="#f31930" d="M0 0h640v480H0z"></path><path d="M406.977 247.473c0 66.215-54.606 119.89-121.97 119.89S163.04 313.686 163.04 247.472s54.606-119.89 121.968-119.89 121.97 53.677 121.97 119.89z" fill="#fff"></path><path d="M413.077 247.467c0 52.97-43.686 95.91-97.575 95.91s-97.574-42.94-97.574-95.91 43.686-95.91 97.574-95.91 97.575 42.94 97.575 95.91z" fill="#f31830"></path><path d="M430.726 191.465l-.985 44.318-41.345 11.225 40.756 14.514-.984 40.642 26.58-31.738 40.164 13.934-23.233-34.06 28.352-33.868-43.513 11.998-25.793-36.964z" fill="#fff"></path></g></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Lang/Flags/flagTr.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const flagTr = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  name: "flagZh"
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 640 480"
  }, _attrs))}><defs><path id="a" fill="#ffde00" d="M-.588.81L0-1 .588.81-.952-.31H.952z"></path></defs><path d="M0 0h640v480H0z" fill="#de2910"></path><use xlink:href="#a" transform="matrix(71.9991 0 0 72 119.999 120)" width="30" height="20"></use><use xlink:href="#a" transform="matrix(-12.33562 -20.5871 20.58684 -12.33577 240.291 47.996)" width="30" height="20"></use><use xlink:href="#a" transform="matrix(-3.38573 -23.75998 23.75968 -3.38578 287.95 95.796)" width="30" height="20"></use><use xlink:href="#a" transform="matrix(6.5991 -23.0749 23.0746 6.59919 287.959 168.012)" width="30" height="20"></use><use xlink:href="#a" transform="matrix(14.9991 -18.73557 18.73533 14.99929 239.933 216.054)" width="30" height="20"></use></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Lang/Flags/flagZh.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const flagZh = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const authLangBg = {
  name: "име",
  email: "Електронна поща",
  password: "парола",
  rememberMe: "Помни ме",
  forgotPassword: "Забравена парола?",
  passwordConfirmation: "Потвърдете паролата",
  login: "вход",
  logout: "Изход",
  register: "Регистрирай се",
  alreadyRegistered: "Вече регистриран?",
  terms: "{0} {1} {2} {3}",
  iAgreeToThe: "Съгласен съм с",
  termsOfService: "Условия за ползване",
  and: "и",
  privacyPolicy: "Политика за поверителност",
  emailPasswordResetLink: "Изпратете връзка за нулиране на паролата",
  backToLogin: "Обратно към вход",
  forgotPasswordGreeting: "Забравена парола?",
  forgotPasswordSubGreeting: "Напишете вашия имейл адрес и ние ще ви изпратим връзка за нулиране на паролата",
  registerGreeting: "Регистрирайте се за нов акаунт",
  loginGreeting: "Влезте в акаунта си",
  reLogin: "Влезте отново",
  validationMessage: {
    name: {
      required: "Полето за име е задължително"
    },
    email: {
      required: "Полето за имейл е задължително",
      email: "Имейлът трябва да е валиден имейл адрес"
    },
    password: {
      required: "Полето за парола е задължително"
    },
    passwordConfirmation: {
      required: "Полето за потвърждение на паролата е задължително"
    }
  }
};
const authLangDe = {
  name: "Name",
  email: "Email",
  password: "Passwort",
  rememberMe: "Behalte mich in Erinnerung",
  forgotPassword: "Passwort vergessen?",
  passwordConfirmation: "Passwort bestätigen",
  login: "Anmeldung",
  logout: "Abmeldung",
  register: "Registrierung",
  alreadyRegistered: "Bereits registriert?",
  terms: "{0} {1} {2} {3}",
  iAgreeToThe: "Ich stimme den",
  termsOfService: "Nutzungsbedingungen",
  and: "und",
  privacyPolicy: "Datenschutz-Bestimmungen",
  emailPasswordResetLink: "E-Mail-Passwort-Zurücksetzungslink",
  backToLogin: "Zurück zum Login",
  forgotPasswordGreeting: "Haben Sie Ihr Passwort vergessen? Kein Problem.",
  forgotPasswordSubGreeting: "Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen des Passworts.",
  registerGreeting: "Registrieren Sie sich für ein neues Konto",
  loginGreeting: "Melden Sie sich bei Ihrem Konto an",
  reLogin: "Melden Sie sich erneut an",
  validationMessage: {
    name: {
      required: "Das Namensfeld ist erforderlich"
    },
    email: {
      required: "Das E-Mail-Feld ist erforderlich",
      email: "Die E-Mail muss eine gültige E-Mail-Adresse sein"
    },
    password: {
      required: "Das Passwortfeld ist erforderlich"
    },
    passwordConfirmation: {
      required: "Das Passwortbestätigungsfeld ist erforderlich"
    }
  }
};
const authLangEn = {
  name: "Name",
  email: "Email",
  password: "Password",
  rememberMe: "Remember me",
  forgotPassword: "Forgot your password?",
  passwordConfirmation: "Confirm Password",
  login: "Login",
  logout: "Logout",
  register: "Register",
  alreadyRegistered: "Already registered?",
  terms: "{0} {1} {2} {3}",
  iAgreeToThe: "I agree to the",
  termsOfService: "Terms of Service",
  and: "and",
  privacyPolicy: "Privacy Policy",
  emailPasswordResetLink: "Email Password Reset Link",
  backToLogin: "Back to Login",
  forgotPasswordGreeting: "Forgot your password? No problem.",
  forgotPasswordSubGreeting: "Enter your email address and we will send you a link to reset your password.",
  registerGreeting: "Register for a new account",
  loginGreeting: "Login to your account",
  reLogin: "Re-Login",
  validationMessage: {
    name: {
      required: "The name filed is required"
    },
    email: {
      required: "The email filed is required",
      email: "The email must be a valid email address"
    },
    password: {
      required: "The password filed is required"
    },
    passwordConfirmation: {
      required: "The password confirmation filed is required"
    }
  }
};
const authLangFr = {
  name: "Nom",
  email: "Email",
  password: "Mot de passe",
  rememberMe: "Souviens-toi de moi",
  forgotPassword: "Mot de passe oublié?",
  passwordConfirmation: "Confirmer le mot de passe",
  login: "Connexion",
  logout: "Se déconnecter",
  register: "Registre",
  alreadyRegistered: "Déjà enregistré?",
  terms: "{0} {1} {2} {3}",
  iAgreeToThe: "Je suis d'accord avec les",
  termsOfService: "Conditions d'utilisation",
  and: "et",
  privacyPolicy: "Politique de confidentialité",
  emailPasswordResetLink: "Lien de réinitialisation du mot de passe par e-mail",
  backToLogin: "Retour à la connexion",
  forgotPasswordGreeting: "Mot de passe oublié? Pas de problème.",
  forgotPasswordSubGreeting: "Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.",
  registerGreeting: "Inscrivez-vous pour un nouveau compte",
  loginGreeting: "Connectez-vous à votre compte",
  reLogin: "Re-Login",
  validationMessage: {
    name: {
      required: "Le champ nom est obligatoire"
    },
    email: {
      required: "Le champ email est obligatoire",
      email: "L'e-mail doit être une adresse e-mail valide"
    },
    password: {
      required: "Le champ mot de passe est obligatoire"
    },
    passwordConfirmation: {
      required: "Le champ de confirmation du mot de passe est obligatoire"
    }
  }
};
const authLangRu = {
  email: "Электронное письмо",
  password: "Пароль",
  rememberMe: "Запомните меня",
  forgotPassword: "Забыли Ваш пароль?",
  passwordConfirmation: "Подтвердите пароль",
  login: "Входить",
  logout: "Выйти",
  register: "Pегистр",
  alreadyRegistered: "Уже зарегистрированы?",
  terms: "{0} {1} {2} {3}",
  iAgreeToThe: "Я согласен с",
  termsOfService: "Условия использования",
  and: "и",
  privacyPolicy: "Политика конфиденциальности",
  emailPasswordResetLink: "Ссылка для сброса пароля по электронной почте",
  backToLogin: "Назад к входу",
  forgotPasswordGreeting: "Забыли пароль? Никаких проблем.",
  forgotPasswordSubGreeting: "Введите свой адрес электронной почты, и мы отправим вам ссылку для сброса пароля.",
  registerGreeting: "Регистрирайте се за нов акаунт",
  loginGreeting: "Влезте в акаунта си",
  reLogin: "Войти снова",
  validationMessage: {
    email: {
      required: "Поле электронной почты обязательно",
      email: "Электронная почта должна быть действительным адресом электронной почты"
    },
    password: {
      required: "Поле пароля обязательно"
    },
    passwordConfirmation: {
      required: "Поле подтверждения пароля обязательно"
    }
  }
};
const authLangTr = {
  name: "İsim",
  email: "Eposta",
  password: "Şifre",
  rememberMe: "Beni Hatırla",
  forgotPassword: "Şifreni unuttun mu?",
  passwordConfirmation: "Şifreyi Onayla",
  login: "Giriş",
  logout: "Çıkış",
  register: "Kayıt",
  alreadyRegistered: "Zaten hesabın var mı?",
  terms: "{0} {1} {2} {3}",
  iAgreeToThe: "kabul ediyorum",
  termsOfService: "Hizmet Şartlarını",
  and: "ve",
  privacyPolicy: "Gizlilik Politikasını",
  emailPasswordResetLink: "E-posta Şifre Sıfırlama Bağlantısı",
  backToLogin: "Girişe Geri Dön",
  forgotPasswordGreeting: "Şifrenizi mi unuttunuz? Sorun değil.",
  forgotPasswordSubGreeting: "E-posta adresinizi girin ve size bir şifre sıfırlama bağlantısı göndereceğiz.",
  registerGreeting: "Yeni bir hesap için kaydolun",
  loginGreeting: "Hesabınıza giriş yapın",
  reLogin: "Tekrar Giriş Yap",
  validationMessage: {
    name: {
      required: "İsim gereklidir"
    },
    email: {
      required: "Email adresi gereklidir",
      email: "Email adresi geçerli değil"
    },
    password: {
      required: "Şifre gereklidir"
    },
    passwordConfirmation: {
      required: "Şifre onayı gereklidir"
    }
  }
};
const authLangZh = {
  name: "名称",
  email: "电子邮件",
  password: "密码",
  rememberMe: "记得我",
  forgotPassword: "忘记密码了吗？",
  passwordConfirmation: "确认密码",
  login: "登录",
  logout: "登出",
  register: "登记",
  alreadyRegistered: "已经注册？",
  terms: "{0} {1} {2} {3}",
  iAgreeToThe: "我同意",
  termsOfService: "服务条款",
  and: "和",
  privacyPolicy: "隐私政策",
  emailPasswordResetLink: "电子邮件密码重置链接",
  backToLogin: "返回登录",
  forgotPasswordGreeting: "忘记密码？没问题。",
  forgotPasswordSubGreeting: "输入您的电子邮件地址，我们将向您发送一个密码重置链接。",
  registerGreeting: "注册新账户",
  loginGreeting: "登录到您的账户",
  reLogin: "重新登录",
  validationMessage: {
    name: {
      required: "名称字段是必需的"
    },
    email: {
      required: "电子邮件字段是必需的",
      email: "电子邮件必须是有效的电子邮件地址"
    },
    password: {
      required: "密码字段为必填项"
    },
    passwordConfirmation: {
      required: "密码确认字段为必填项"
    }
  }
};
const mainMenuLangBg = {
  authPages: "Страници за удостоверяване",
  authLogin: "Вход",
  authRegister: "Регистрация",
  authForgotPassword: "Забравена парола",
  authLockScreen: "Заключен екран",
  authProfile: "Профил",
  components: "Компоненти",
  componentAlert: "Сигнал",
  componentAvatar: "Аватар",
  componentBadge: "Значка",
  componentBreadcrumb: "Breadcrumb",
  componentButton: "Бутон",
  componentCollapsible: "Сгъваем",
  componentContentBox: "Кутия за съдържание",
  componentDropdown: "Падащо меню",
  componentList: "Списък",
  componentLoading: "Зареждане",
  componentModal: "Modal",
  componentPagination: "Пагинация",
  componentProgressBar: "Лента на напредъка",
  componentStatisticWidget: "Статистическа витрина",
  componentTab: "Tab",
  componentTable: "Таблица",
  componentTableJson: "Таблица(JSON)",
  componentTableBackend: "Таблица(BackEnd)",
  componentTooltip: "Балон с информация",
  layoutElements: "Елементи на оформление",
  layoutStructure: "Структура на оформлението",
  layoutGrid: "Решетка",
  formElements: "Елементи на формуляр",
  formStructure: "Структура на формата",
  formInputGroup: "Група за въвеждане",
  formSimpleInputs: "Прости входове",
  formRepeatableInput: "Повтаряем вход",
  formDateTimeInput: "Въвеждане на дата/час",
  formSelectInput: "Избор на въвеждане",
  externalSources: "Външни източници",
  externalGitHubRepo: "Github Repo",
  externalTailwindcssDocument: "Документ TailwindCSS",
  externalVuejsDocument: "Документ Vuejs",
  externalInertiaDocument: "Документ Inertiajs",
  externalLaravelDocument: "Документ Laravel",
  footerHelp: "Помощ",
  footerSettings: "Настройки"
};
const mainMenuLangDe = {
  authPages: "Auth-Seiten",
  authLogin: "Anmeldung",
  authRegister: "Registrieren",
  authForgotPassword: "Passwort vergessen",
  authLockScreen: "Bildschirm sperren",
  authProfile: "Profile",
  components: "Komponenten",
  componentAlert: "Alarm",
  componentAvatar: "Benutzerbild",
  componentBadge: "Abzeichen",
  componentBreadcrumb: "Breadcrumb",
  componentButton: "Taste",
  componentCollapsible: "Zusammenklappbar",
  componentContentBox: "Inhaltsfeld",
  componentDropdown: "Dropdown-Liste",
  componentList: "Liste",
  componentLoading: "Wird geladen",
  componentModal: "Modal",
  componentPagination: "Seitennummerierung",
  componentProgressBar: "Fortschrittsanzeige",
  componentStatisticWidget: "Statistik-Widget",
  componentTab: "Tab",
  componentTable: "Tabelle",
  componentTableJson: "Tabelle(JSON)",
  componentTableBackend: "Tabelle(BackEnd)",
  componentTooltip: "Kurzinfo",
  layoutElements: "Layout-Elemente",
  layoutStructure: "Layoutstruktur",
  layoutGrid: "Netz",
  formElements: "Formularelemente",
  formStructure: "Formularstruktur",
  formInputGroup: "Eingangsgruppe",
  formSimpleInputs: "Einfache Eingaben",
  formRepeatableInput: "Wiederholbare Eingabe",
  formDateTimeInput: "Datum/Uhrzeit-Eingabe",
  formSelectInput: "Wählen Sie Eingang",
  externalSources: "Externe Quellen",
  externalGitHubRepo: "Github-Repo",
  externalTailwindcssDocument: "TailwindCSS-Dokument",
  externalVuejsDocument: "Vuejs-Dokument",
  externalInertiaDocument: "Inertiajs-Dokument",
  externalLaravelDocument: "Laravel-Dokument",
  footerHelp: "Hilfe",
  footerSettings: "Einstellungen"
};
const mainMenuLangEn = {
  authPages: "Auth Pages",
  authLogin: "Login",
  authRegister: "Register",
  authForgotPassword: "Forgot Password",
  authLockScreen: "Lock Screen",
  authProfile: "Profile",
  components: "Components",
  componentAlert: "Alert",
  componentAvatar: "Avatar",
  componentBadge: "Badge",
  componentBreadcrumb: "Breadcrumb",
  componentButton: "Button",
  componentCollapsible: "Collapsible",
  componentContentBox: "Content Box",
  componentDropdown: "Dropdown",
  componentList: "List",
  componentLoading: "Loading",
  componentModal: "Modal",
  componentPagination: "Pagination",
  componentProgressBar: "Progress Bar",
  componentStatisticWidget: "Statistic Widget",
  componentTab: "Tab",
  componentTable: "Table",
  componentTableJson: "Table(JSON)",
  componentTableBackend: "Table(BackEnd)",
  componentTooltip: "Tooltip",
  layoutElements: "Layout Elements",
  layoutStructure: "Layout Structure",
  layoutGrid: "Grid",
  formElements: "Form Elements",
  formStructure: "Form Structure",
  formInputGroup: "Input Group",
  formSimpleInputs: "Simple Inputs",
  formRepeatableInput: "Repeatable Input",
  formDateTimeInput: "Date/Time Input",
  formSelectInput: "Select Input",
  externalSources: "External Sources",
  externalGitHubRepo: "Github Repo",
  externalTailwindcssDocument: "TailwindCSS Document",
  externalVuejsDocument: "Vuejs Document",
  externalInertiaDocument: "Inertiajs Document",
  externalLaravelDocument: "Laravel Document",
  footerHelp: "Help",
  footerSettings: "Settings"
};
const mainMenuLangFr = {
  authPages: "Pages d'authentification",
  authLogin: "Connexion",
  authRegister: "S'inscrire",
  authForgotPassword: "Mot de passe oublié",
  authLockScreen: "Écran verrouillé",
  authProfile: "Profil",
  components: "Composants",
  componentAlert: "Alerte",
  componentAvatar: "Avatar",
  componentBadge: "Badge",
  componentBreadcrumb: "Breadcrumb",
  componentButton: "Bouton",
  componentCollapsible: "Pliant",
  componentContentBox: "Boîte de contenu",
  componentDropdown: "Menu déroulant",
  componentList: "Lister",
  componentLoading: "Chargement",
  componentModal: "Modal",
  componentPagination: "Pagination",
  componentProgressBar: "Barre de progression",
  componentStatisticWidget: "Widget statistique",
  componentTab: "Languette",
  componentTable: "Table",
  componentTableJson: "Tableau(JSON)",
  componentTableBackend: "Tableau(BackEnd)",
  componentTooltip: "Info-bulle",
  layoutElements: "Éléments de mise en page",
  layoutStructure: "Structure de mise en page",
  layoutGrid: "Grille",
  formElements: "Éléments de formulaire",
  formStructure: "Structure du formulaire",
  formInputGroup: "Groupe d'entrée",
  formSimpleInputs: "Entrées simples",
  formRepeatableInput: "Entrée répétable",
  formDateTimeInput: "Entrée date/heure",
  formSelectInput: "Sélectionnez l'entrée",
  externalSources: "Sources externes",
  externalGitHubRepo: "Dépôt Github",
  externalTailwindcssDocument: "TailwindCSS Document",
  externalVuejsDocument: "Vuejs Document",
  externalInertiaDocument: "Inertiajs Document",
  externalLaravelDocument: "Laravel Document",
  footerHelp: "Aider",
  footerSettings: "Réglages"
};
const mainMenuLangRu = {
  authPages: "Страницы авторизации",
  authLogin: "Авторизоваться",
  authRegister: "регистр",
  authForgotPassword: "Забыл пароль",
  authLockScreen: "Экран блокировки",
  authProfile: "Профиль",
  components: "Компоненты",
  componentAlert: "Тревога",
  componentAvatar: "Аватар",
  componentBadge: "Значок",
  componentBreadcrumb: "хлебные крошки",
  componentButton: "Кнопка",
  componentCollapsible: "Складной",
  componentContentBox: "Коробка содержимого",
  componentDropdown: "падать",
  componentList: "Список",
  componentLoading: "Загрузка",
  componentModal: "Модальный",
  componentPagination: "Пагинация",
  componentProgressBar: "Индикатор",
  componentStatisticWidget: "Статистический виджет",
  componentTab: "Вкладка",
  componentTable: "Таблица",
  componentTableJson: "Таблица(JSON)",
  componentTableBackend: "Таблица(BackEnd)",
  componentTooltip: "Подсказка",
  layoutElements: "Элементы макета",
  layoutStructure: "Структура макета",
  layoutGrid: "Сетка",
  formElements: "Элементы формы",
  formStructure: "Структура формы",
  formInputGroup: "Входная группа",
  formSimpleInputs: "Простые входы",
  formRepeatableInput: "Повторяемый ввод",
  formDateTimeInput: "Ввод даты/времени",
  formSelectInput: "Выберите ввод",
  externalSources: "Внешние источники",
  externalGitHubRepo: "Репозиторий Github",
  externalTailwindcssDocument: "Документ TailwindCSS",
  externalVuejsDocument: "Документ Vuejs",
  externalInertiaDocument: "Документ Inertiajs",
  externalLaravelDocument: "Документ Laravel",
  footerHelp: "Помощь",
  footerSettings: "Настройки"
};
const mainMenuLangTr = {
  authPages: "Kullanıcı Sayfaları",
  authLogin: "Giriş",
  authRegister: "Kayıt",
  authForgotPassword: "Şifremi Unuttum",
  authLockScreen: "Kilit Ekranı",
  authProfile: "Profil",
  components: "Komponentler",
  componentAlert: "Alert",
  componentAvatar: "Avatar",
  componentBadge: "Rozet",
  componentBreadcrumb: "Breadcrumb",
  componentButton: "Düğme",
  componentCollapsible: "Açılır Liste",
  componentContentBox: "İçerik Kutusu",
  componentDropdown: "Açılır Menü",
  componentList: "Liste",
  componentLoading: "Yükleniyor Ekranı",
  componentModal: "Açılır Pencere",
  componentPagination: "Sayfalandırma",
  componentProgressBar: "İlerleme Göstergesi",
  componentStatisticWidget: "İstatistik Kutusu",
  componentTab: "Sekme",
  componentTable: "Tablo",
  componentTableJson: "Tablo(JSON)",
  componentTableBackend: "Tablo(BackEnd)",
  componentTooltip: "Bilgi Baloncuğu",
  layoutElements: "Yerleşim Bileşenleri",
  layoutStructure: "Yerleşim Yapısı",
  layoutGrid: "Izgara",
  formElements: "Form Bileşenleri",
  formStructure: "Form Yapısı",
  formInputGroup: "Input Grup",
  formSimpleInputs: "Klasik Inputlar",
  formRepeatableInput: "Tekrarlanabilir Input",
  formDateTimeInput: "Tarih/Zaman Input",
  formSelectInput: "Select Input",
  externalSources: "Dış Kaynaklar",
  externalGitHubRepo: "Github Repo",
  externalTailwindcssDocument: "TailwindCSS Dökümanı",
  externalVuejsDocument: "Vuejs Dökümanı",
  externalInertiaDocument: "Inertiajs Dökümanı",
  externalLaravelDocument: "Laravel Dökümanı",
  footerHelp: "Yardım",
  footerSettings: "Ayarlar"
};
const mainMenuLangZh = {
  authPages: "认证页面",
  authLogin: "登录",
  authRegister: "登记",
  authForgotPassword: "忘记密码",
  authLockScreen: "锁屏",
  authProfile: "轮廓",
  components: "成分",
  componentAlert: "警报",
  componentAvatar: "阿凡达",
  componentBadge: "徽章",
  componentBreadcrumb: "面包屑",
  componentButton: "按钮",
  componentCollapsible: "可折叠",
  componentContentBox: "内容框",
  componentDropdown: "落下",
  componentList: "列表",
  componentLoading: "正在加载",
  componentModal: "模态",
  componentPagination: "分页",
  componentProgressBar: "进度条",
  componentStatisticWidget: "统计小部件",
  componentTab: "标签",
  componentTable: "桌子",
  componentTableJson: "表(JSON)",
  componentTableBackend: "表(BackEnd)",
  componentTooltip: "工具提示",
  layoutElements: "布局元素",
  layoutStructure: "布局结构",
  layoutGrid: "网格",
  formElements: "表单元素",
  formStructure: "表格结构",
  formInputGroup: "输入组",
  formSimpleInputs: "简单输入",
  formRepeatableInput: "可重复输入",
  formDateTimeInput: "日期/时间输入",
  formSelectInput: "选择输入",
  externalSources: "外部来源",
  externalGitHubRepo: "Github 回购",
  externalTailwindcssDocument: "TailwindCSS 文档",
  externalVuejsDocument: "Vuejs 文档",
  externalInertiaDocument: "Inertiajs 文档",
  externalLaravelDocument: "Laravel 文档",
  footerHelp: "帮助",
  footerSettings: "设置"
};
const userMenuLangBg = {
  manageAccount: "Manage Account",
  manageTeam: "Manage Team",
  switchTeams: "Switch Team",
  language: "Language",
  darkMode: "Dark Mode",
  profile: "Profile",
  api: "API Tokens",
  teamSettings: "Team Settings",
  createNewTeam: "Create New Team",
  auto: "Auto",
  dark: "Dark",
  light: "Light",
  logout: "Logout"
};
const userMenuLangDe = {
  manageAccount: "Manage Account",
  manageTeam: "Manage Team",
  switchTeams: "Switch Team",
  language: "Language",
  darkMode: "Dark Mode",
  profile: "Profile",
  api: "API Tokens",
  teamSettings: "Team Settings",
  createNewTeam: "Create New Team",
  auto: "Auto",
  dark: "Dark",
  light: "Light",
  logout: "Logout"
};
const userMenuLangEn = {
  manageAccount: "Manage Account",
  manageTeam: "Manage Team",
  switchTeams: "Switch Team",
  language: "Language",
  darkMode: "Dark Mode",
  profile: "Profile",
  api: "API Tokens",
  teamSettings: "Team Settings",
  createNewTeam: "Create New Team",
  auto: "Auto",
  dark: "Dark",
  light: "Light",
  logout: "Logout"
};
const userMenuLangFr = {
  manageAccount: "Manage Account",
  manageTeam: "Manage Team",
  switchTeams: "Switch Team",
  language: "Language",
  darkMode: "Dark Mode",
  profile: "Profile",
  api: "API Tokens",
  teamSettings: "Team Settings",
  createNewTeam: "Create New Team",
  auto: "Auto",
  dark: "Dark",
  light: "Light",
  logout: "Logout"
};
const userMenuLangRu = {
  manageAccount: "Manage Account",
  manageTeam: "Manage Team",
  switchTeams: "Switch Team",
  language: "Language",
  darkMode: "Dark Mode",
  profile: "Profile",
  api: "API Tokens",
  teamSettings: "Team Settings",
  createNewTeam: "Create New Team",
  auto: "Auto",
  dark: "Dark",
  light: "Light",
  logout: "Logout"
};
const userMenuLangTr = {
  manageAccount: "Hesap Yönetimi",
  manageTeam: "Takım Yönetimi",
  switchTeams: "Takım Değiştir",
  language: "Dil",
  darkMode: "Koyu Mod",
  profile: "Profil",
  api: "API Anahtarları",
  teamSettings: "Takım Ayarları",
  createNewTeam: "Yeni Takım Oluştur",
  auto: "Otomatik",
  dark: "Koyu",
  light: "Açık",
  logout: "Çıkış"
};
const userMenuLangZh = {
  manageAccount: "Manage Account",
  manageTeam: "Manage Team",
  switchTeams: "Switch Team",
  language: "Language",
  darkMode: "Dark Mode",
  profile: "Profile",
  api: "API Tokens",
  teamSettings: "Team Settings",
  createNewTeam: "Create New Team",
  auto: "Auto",
  dark: "Dark",
  light: "Light",
  logout: "Logout"
};
const notification_bg = {
  pendingWorks: "Предстоящи работи",
  unfinishedTodos: "Текущи задачи",
  unreadMessages: "Непрочетени съобщения"
};
const notification_de = {
  pendingWorks: "Ausstehende Arbeiten",
  unfinishedTodos: "Laufende Aufgaben",
  unreadMessages: "ungelesene Nachrichten"
};
const notification_en = {
  pendingWorks: "Pending Works",
  unfinishedTodos: "Unfinished Todos",
  unreadMessages: "Unread Messages"
};
const notification_fr = {
  pendingWorks: "Travaux en attente",
  unfinishedTodos: "Tâches en cours",
  unreadMessages: "Messages non lus"
};
const notification_ru = {
  pendingWorks: "Ожидающие работы",
  unfinishedTodos: "Текущие дела",
  unreadMessages: "Непрочитанные сообщения"
};
const notification_ = {
  pendingWorks: "Bekleyen İşler",
  unfinishedTodos: "Devam Eden Yapılacaklar",
  unreadMessages: "Okunmamış Mesajlar"
};
const notification_zh = {
  pendingWorks: "待定作品",
  unfinishedTodos: "正在进行的待办事项",
  unreadMessages: "未读消息"
};
const languages = [
  { id: "en", name: "English", flag: flagEn },
  { id: "tr", name: "Türkçe", flag: flagTr },
  { id: "bg", name: "български", flag: flagBg },
  { id: "de", name: "Deutsch", flag: flagDe },
  { id: "fr", name: "Français", flag: flagFr },
  { id: "ru", name: "Pусский", flag: flagRu },
  { id: "zh", name: "自从", flag: flagZh }
];
const authTranslates = {
  bg: authLangBg,
  de: authLangDe,
  en: authLangEn,
  fr: authLangFr,
  ru: authLangRu,
  tr: authLangTr,
  zh: authLangZh
};
const mainMenuTranslates = {
  bg: mainMenuLangBg,
  de: mainMenuLangDe,
  en: mainMenuLangEn,
  fr: mainMenuLangFr,
  ru: mainMenuLangRu,
  tr: mainMenuLangTr,
  zh: mainMenuLangZh
};
const userMenuTranslates = {
  bg: userMenuLangBg,
  de: userMenuLangDe,
  en: userMenuLangEn,
  fr: userMenuLangFr,
  ru: userMenuLangRu,
  tr: userMenuLangTr,
  zh: userMenuLangZh
};
const notificationTranslates = {
  bg: notification_bg,
  de: notification_de,
  en: notification_en,
  fr: notification_fr,
  ru: notification_ru,
  tr: notification_,
  zh: notification_zh
};
const useDisplayLanguageStore = defineStore("displayLanguage", () => {
  const loadingTranslations = ref(false);
  const { locale } = useI18n({
    useScope: "global",
    missingWarn: false,
    warnHtmlMessage: false,
    fallbackWarn: false
  });
  onBeforeMount(() => {
    if (localStorage.lang) {
      locale.value = localStorage.lang;
    }
  });
  const changeLang = (key) => {
    locale.value = key;
    localStorage.setItem("lang", key);
    router.visit(route("lang", key), {
      onStart: () => loadingTranslations.value = true,
      onSuccess: () => loadingTranslations.value = false,
      preserveScroll: true
    });
  };
  return { locale, loadingTranslations, changeLang };
});
export {
  authTranslates as a,
  useDisplayLanguageStore as b,
  languages as l,
  mainMenuTranslates as m,
  notificationTranslates as n,
  userMenuTranslates as u
};

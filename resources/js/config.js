/*Default Settings*/
const appConf = {
    appName: 'AMI',
    catchPhrase: 'Audit Mutu Internal',
    logo: {
      dark: '/img/logo.png',
      light: '/img/logo.png'
    },
    logoAreaClasses: null,
    appNameClasses: null,
    logoClasses: null,
    radius: 3,
    mainMenuDesign: 'umay'
};

/*Layout Settings*/
const authScreenConf = {
    appName: 'AMI Audit Mutu Internal',
    logo: {
        dark: null,
        light: null,
    },
    logoAreaClasses: ['flex', 'flex-col', 'justify-center', 'items-center', 'space-y-4', 'pb-4'],
    appNameClasses: ['text-3xl', 'md:text-4xl', 'font-black', 'text-center', 'uppercase', 'italic', 'tracking-tighter', 'text-white', 'drop-shadow-lg'],
    logoClasses: ['w-20', 'h-20', 'text-white', 'drop-shadow-lg'],
    showDesignChanger: true,
    showDarkModeSelector: true,
    showLanguageSelector: true,
};

const mainMenuConf = {
    /*Logo Area*/
    appName: null,
    catchPhrase: null,
    umay: {
        logo: {
            dark: '/img/logo.png',
            light: '/img/logo.png',
        },
        logoAreaRadius: null,
        logoAreaClasses: ['flex', 'flex-col', 'justify-center', 'items-center', 'space-y-2', 'p-6', 'bg-gradient-to-tr', 'dark:bg-gradient-to-br', 'from-slate-600', 'via-rose-500', 'to-slate-600', 'dark:from-slate-900', 'dark:via-rose-950', 'dark:to-slate-900', 'border-b', 'border-rose-200/50', 'dark:border-rose-900/50', 'shadow-lg', 'relative', 'overflow-hidden', 'group', 'transition-all', 'duration-500'],
        appNameClasses: ['text-xl', 'font-black', 'italic', 'uppercase', 'tracking-[0.2em]', 'text-rose-950', 'dark:text-white', 'drop-shadow-sm', 'group-hover:scale-105', 'transition-transform', 'duration-500'],
        logoClasses: ['w-12', 'h-auto', 'drop-shadow-2xl', 'transform', 'group-hover:scale-110', 'group-hover:-rotate-3', 'transition-all', 'duration-500'],
        /*Menu*/
        menuRadius: 3,
        rootLinkClasses: {
            activeBg: ['border', 'border-slate-400/30'],
            normal: ['hover:bg-sky-200', 'hover:text-sky-800'],
            active: ['text-white', 'bg-sky-500/75', 'hover:bg-sky-400', 'hover:text-sky-800'],
        },
        secondLinkClasses: {
            activeBg: [],
            normal: ['hover:bg-sky-200/10', 'hover:text-sky-400','hover:text-slate-800'],
            active: ['bg-slate-600', 'hover:bg-sky-500/20'],
        },
        thirdLinkClasses: {
            activeBg: ['border', 'bg-emerald-500/20', 'border-slate-500/50'],
            normal: ['hover:bg-emerald-200', 'hover:text-emerald-800'],
            active: ['text-white', 'bg-emerald-500', 'hover:bg-emerald-600'],
        },
    },
    abay: {
        logo: {
            dark: '/img/logo.png',
            light: '/img/logo.png',
        },
        logoAreaRadius: null,
        logoAreaClasses: ['flex', 'flex-col', 'justify-center', 'items-center', 'space-x-6', 'bg-blue-500'],
        appNameClasses: ['text-6xl', 'font-semibold', 'text-white'],
        logoClasses: ['w-10', 'text-white', 'h-auto'],
        /*Menu*/
        menuRadius: 3,
        rootLinkClasses: {
            activeBg: ['border', 'border-slate-400/30'],
            normal: ['hover:bg-sky-200', 'hover:text-sky-800'],
            active: ['text-white', 'bg-sky-500/75', 'hover:bg-sky-400', 'hover:text-sky-800'],
        },
        secondLinkClasses: {
            activeBg: [],
            normal: ['hover:bg-sky-200/10', 'hover:text-sky-400','hover:text-slate-800'],
            active: ['text-sky-400', 'bg-slate-600', 'hover:bg-sky-500/20'],
        },
        thirdLinkClasses: {
            activeBg: ['border', 'bg-emerald-500/20', 'border-slate-500/50'],
            normal: ['hover:bg-emerald-200', 'hover:text-emerald-800'],
            active: ['text-white', 'bg-emerald-500', 'hover:bg-emerald-600'],
        },
    }
};

const topBarConf = {
    radius: null,
    languageSelector: true,
    darkModeSelector: true,
    searchPlaceHolderText: 'type and search'
};

const footerConf = {
    visible: false,
    content: "<a\n" +
        "              class=\"text-blue-600 hover:underline\"\n" +
        "              href=\"https://tailadmin.dev/\"\n" +
        "              target=\"_blank\"\n" +
        "            >\n" +
        "              TailAdmin v2\n" +
        "              </a>\n" +
        "            <span>by</span>\n" +
        "            <a\n" +
        "              class=\"text-teal-400 hover:underline\"\n" +
        "              href=\"https://github.com/sinan-aydogan\"\n" +
        "              target=\"_blank\"\n" +
        "            >\n" +
        "              Sinan AYDOĞAN\n" +
        "            </a>"
};

/*Module Settings*/
const alertConf = {
    design: 'filled',
    color: 'light',
    radius: null,
    closeable: false,
    timer: 4000
};

const avatarConf = {
    defaultPhotoSrc: '/img/samples/dummyAvatar.svg',
    size: 3,
    radius: null,
};

const badgeConf = {
    color: 'light',
    design: 'filled',
    radius: 5,
};

const formContentConf = {
    radius: null
};

const inputDateConf = {
    radius: null
};

export {
    appConf,
    /*Layout*/
    authScreenConf,
    mainMenuConf,
    topBarConf,
    footerConf,
    /*Component*/
    alertConf,
    avatarConf,
    badgeConf,
    formContentConf,
    inputDateConf
}


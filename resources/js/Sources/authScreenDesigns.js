const authDesigns = [
    {
        id: 'amiExclusive',
        bgColor: ['bg-gradient-to-br', 'from-slate-900', 'via-rose-950', 'to-slate-900'],
        bgImage: {
            dark: null,
            light: null,
        },
        logo: {
            dark: null, // Use default or text
            light: null
        },
        header: ['bg-white/5', 'backdrop-blur-xl', 'border-b', 'border-white/10', 'text-white', 'shadow-2xl'],
        body: ['bg-white/5', 'backdrop-blur-xl', 'border', 'border-white/10', 'shadow-2xl', 'text-white'],
        radius: 5,
        login: {
            loginButton: {
                dark: {
                    design: 'filled',
                    color: 'rose'
                },
                light: {
                    design: 'filled',
                    color: 'rose'
                }
            },
            registerButton: {
                dark: {
                    design: 'link',
                    color: 'light'
                },
                light: {
                    design: 'link',
                    color: 'light'
                }
            },
        },
        register: {
            loginButton: {
                dark: {
                    design: 'link',
                    color: 'light'
                },
                light: {
                    design: 'link',
                    color: 'light'
                }
            },
            registerButton: {
                dark: {
                    design: 'filled',
                    color: 'rose'
                },
                light: {
                    design: 'filled',
                    color: 'rose'
                }
            },
        },
        forgotPassword: {
            sendButton: {
                dark: {
                    design: 'filled',
                    color: 'rose'
                },
                light: {
                    design: 'filled',
                    color: 'rose'
                }
            },
            backButton: {
                dark: {
                    design: 'link',
                    color: 'light'
                },
                light: {
                    design: 'link',
                    color: 'light'
                }
            },
        },
        lock: {
            reLoginButton: {
                dark: {
                    design: 'filled',
                    color: 'rose'
                },
                light: {
                    design: 'filled',
                    color: 'rose'
                }
            },
        }
    },
    {
        id: 'violetDream',
        bgColor: ['bg-gradient-to-tl', 'from-violet-300','via-pink-400' , 'to-amber-300' ,'dark:bg-violet-400'],
        bgImage: {
            dark: 'https://unsplash.com/photos/DKDFBtmZSz8/download?force=true&w=1920',
            light: 'https://unsplash.com/photos/nY14Fs8pxT8/download?force=true&w=1920',
        },
        logo: {
            dark: '/img/logo.png',
            light: '/img/logo.png'
        },
        header: ['bg-gradient-to-tl', 'from-violet-500','to-pink-600' , 'border-b-2', 'border-purple-800/50', 'dark:border-rose-700', 'dark:from-yellow-700/75', 'dark:via-rose-800/75', 'dark:to-violet-800/50', 'text-slate-100', 'dark:text-violet-100'],
        body: ['bg-white/50','dark:bg-slate-800/50'],
        radius: 3,
        login: {
            loginButton: {
                dark: {
                    design: 'filled',
                    color: 'pink'
                },
                light: {
                    design: 'light',
                    color: 'pink'
                }
            },
            registerButton: {
                dark: {
                    design: 'link',
                    color: 'light'
                },
                light: {
                    design: 'link',
                    color: 'pink'
                }
            },
        },
        register: {
            loginButton: {
                dark: {
                    design: 'link',
                    color: 'light'
                },
                light: {
                    design: 'link',
                    color: 'pink'
                }
            },
            registerButton: {
                dark: {
                    design: 'filled',
                    color: 'pink'
                },
                light: {
                    design: 'light',
                    color: 'pink'
                }
            },
        },
        forgotPassword: {
            sendButton: {
                dark: {
                    design: 'filled',
                    color: 'pink'
                },
                light: {
                    design: 'light',
                    color: 'pink'
                }
            },
            backButton: {
                dark: {
                    design: 'link',
                    color: 'light'
                },
                light: {
                    design: 'link',
                    color: 'pink'
                }
            },
        },
        lock: {
            reLoginButton: {
                dark: {
                    design: 'filled',
                    color: 'pink'
                },
                light: {
                    design: 'light',
                    color: 'pink'
                }
            },
        }
    },
    {
        id: 'mountains',
        bgColor: ['bg-blue-500', 'dark:bg-blue-800'],
        bgImage: {
            dark: 'https://unsplash.com/photos/JgOeRuGD_Y4/download?force=true&w=1920',
            light: 'https://unsplash.com/photos/CSpjU6hYo_0/download?force=true&w=1920'
        },
        logo: {
            dark: null,
            light: '/img/logo.png'
        },
        header: ['bg-sky-100/75', 'dark:bg-red-800/20', 'text-yellow-800', 'dark:text-violet-100'],
        body: ['bg-slate-100/75','dark:bg-slate-800/50'],
        radius: 3,
        login: {
            loginButton: {
                dark: {
                    design: 'filled',
                    color: 'red'
                },
                light: {
                    design: 'filled',
                    color: 'yellow'
                }
            },
            registerButton: {
                dark: {
                    design: 'link',
                    color: 'light'
                },
                light: {
                    design: 'link',
                    color: 'yellow'
                }
            },
        },
        register: {
            loginButton: {
                dark: {
                    design: 'link',
                    color: 'light'
                },
                light: {
                    design: 'link',
                    color: 'yellow'
                }
            },
            registerButton: {
                dark: {
                    design: 'filled',
                    color: 'red'
                },
                light: {
                    design: 'filled',
                    color: 'yellow'
                }
            },
        },
        forgotPassword: {
            sendButton: {
                dark: {
                    design: 'filled',
                    color: 'red'
                },
                light: {
                    design: 'filled',
                    color: 'yellow'
                }
            },
            backButton: {
                dark: {
                    design: 'link',
                    color: 'light'
                },
                light: {
                    design: 'link',
                    color: 'yellow'
                }
            },
        },
        lock: {
            reLoginButton: {
                dark: {
                    design: 'filled',
                    color: 'red'
                },
                light: {
                    design: 'filled',
                    color: 'yellow'
                }
            },
        }
    }
]

export {authDesigns}

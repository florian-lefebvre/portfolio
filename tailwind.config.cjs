function generateColors() {
    const _colors = ['primary', 'neutral', 'warning']

    const output = {}

    function hsl(str) {
        return `hsl(${str}, <alpha-value>)`
    }

    const PREFIX = 'color'

    function colorValue(color, scale, variant) {
        return hsl(`var(--${PREFIX}-${color}-${variant}-${scale})`)
    }

    // auto
    for (const color of _colors) {
        const map = {}
        for (let i = 1; i <= 12; i++) {
            map[i] = colorValue(color, i, 'auto')
        }
        output[color] = map
    }

    // light
    for (const color of _colors) {
        const map = {}
        for (let i = 1; i <= 12; i++) {
            map[i] = colorValue(color, i, 'light')
        }
        output[`${color}Light`] = map
    }

    // auto
    for (const color of _colors) {
        const map = {}
        for (let i = 1; i <= 12; i++) {
            map[i] = colorValue(color, i, 'dark')
        }
        output[`${color}Dark`] = map
    }

    return output
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            ...generateColors(),
            inherit: 'inherit',
            current: 'currentColor',
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
        },
        fontFamily: {
            sans: ['Mona-Sans', 'sans-serif'],
            mono: ['Jetbrains Mono', 'monospace'],
        },
        extend: {
            boxShadow: {
                square: '-4px 4px 0px rgb(0, 0, 0)',
            },
            ringWidth: {
                3: '3px',
            },
            animation: {
                theme: 'theme 1500ms ease-in-out',
            },
            keyframes: {
                theme: {
                    '0%': {
                        left: 'auto',
                        right: 0,
                        width: 0,
                    },
                    '25%': {
                        width: '100%',
                    },
                    '50%': {
                        left: 0,
                        right: 'auto',
                    },
                    '100%': {
                        width: 0,
                    },
                },
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        ...Object.fromEntries(
                            Object.entries({
                                '--tw-prose-body': 'colors.neutral[11]',
                                '--tw-prose-headings': 'colors.neutral[12]',
                                '--tw-prose-lead': 'colors.neutral[12]',
                                '--tw-prose-links': 'colors.primary[9]',
                                '--tw-prose-bold': 'colors.neutral[12]',
                                '--tw-prose-counters': 'colors.primary[9]',
                                '--tw-prose-bullets': 'colors.primary[9]',
                                '--tw-prose-hr': 'colors.neutral[8]',
                                '--tw-prose-quotes': 'colors.neutral[10]',
                                '--tw-prose-quote-borders': 'colors.neutral[7]',
                                '--tw-prose-captions': 'colors.neutral[10]',
                                '--tw-prose-code': 'colors.neutral[12]',
                                '--tw-prose-pre-code': 'colors.neutral[11]',
                                '--tw-prose-pre-bg': 'colors.neutral[2]',
                                '--tw-prose-th-borders': 'colors.neutral[11]',
                                '--tw-prose-td-borders': 'colors.neutral[10]',
                            }).map(([k, v], i) => [
                                k,
                                theme(v).replaceAll('<alpha-value>', 1),
                            ])
                        ),
                        'h1,h2,h3,h4,h5,h6': {
                            fontWeight: 700,
                        },
                        'p,li': {
                            fontWeight: 500,
                        },
                        a: {
                            '&:hover': {
                                '--tw-prose-links':
                                    'hsl(var(--color-primary-auto-10))',
                            },
                        },
                        pre: {
                            borderRadius: 0,
                        },
                    },
                },
            }),
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}

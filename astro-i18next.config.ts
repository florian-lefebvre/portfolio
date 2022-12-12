import type { AstroI18nextConfig } from 'astro-i18next'

const config: AstroI18nextConfig = {
    defaultLocale: 'en',
    showDefaultLocale: false,
    locales: ['en', 'fr'],
    load: ['server', 'client'],
    i18nextServerPlugins: {
        '{initReactI18next}': 'react-i18next',
    },
    i18nextClientPlugins: {
        '{initReactI18next}': 'react-i18next',
    },
    routes: {
        fr: {
            about: 'a-propos',
            projects: {
                index: 'projets',
            },
            blog: {
                index: 'blog',
            },
            legal: {
                test: 'a',
                'legal-notices': 'mentions-legales',
                'privacy-policy': 'politique-de-confidentialite',
            },
        },
    },
    defaultNamespace: 'common',
    namespaces: [
        'common',
        'pages.index',
        'pages.about',
        'pages.projects',
        'pages.blog',
        'pages.404',
    ],
    i18nextServer: {
        backend: {
            loadPath: './public/locales/{{lng}}/{{ns}}.json',
        },
    },
    i18nextClient: {
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    },
}

export default config

import type { AstroI18nextConfig } from 'astro-i18next'

const config: AstroI18nextConfig = {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
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
                'legal-notices': 'mentions-legales',
                'privacy-policy': 'politique-de-confidentialite',
            },
        },
    },
    defaultNamespace: 'translation',
    namespaces: ['translation', 'common', 'pages.index'],
    i18nextServer: {
        backend: {
            loadPath: './src/locales/{{lng}}/{{ns}}.json',
        },
    },
}
export default config

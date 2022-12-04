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
        },
    },
    defaultNamespace: 'translation',
    namespaces: ['translation', 'common', 'pages.index'],
    i18nextServer: {
        debug: true,
        backend: {
            loadPath: './src/locales/{{lng}}/{{ns}}.json',
        },
    },
}
export default config

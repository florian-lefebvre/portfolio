import { defineConfig } from 'astro/config'
// https://astro.build/config
import tailwind from '@astrojs/tailwind'
// https://astro.build/config
import react from '@astrojs/react'
// https://github.com/yassinedoghri/astro-i18next
import astroI18next from 'astro-i18next'

// https://astro.build/config
import mdx from '@astrojs/mdx'

// https://astro.build/config
import prefetch from '@astrojs/prefetch'

// https://astro.build/config
export default defineConfig({
    output: 'static',
    integrations: [
        tailwind(),
        react(),
        astroI18next(),
        mdx(),
        prefetch({ selector: 'a:not([target="_blank"])' }),
    ],
    markdown: {
        shikiConfig: {
            theme: 'vitesse-dark',
        },
    },
    vite: {
        ssr: {
            noExternal:
                process.env.MODE === 'production'
                    ? ['react-lazy-load-image-component']
                    : [],
        },
    },
})

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

function projectsRemarkPlugin() {
    return function (tree: any, file: any) {
        const filePath: string = file.history[0]
        if (!filePath.includes('/projects/')) return
        const fileName = filePath.split('/').at(-1)!
        const order = Number(fileName.split('.')[0])
        const slug = fileName.split('.')[1]
        const language = filePath.split('/content/').at(-1)!.split('/')[0]
        file.data.astro.frontmatter = {
            ...file.data.astro.frontmatter,
            slug,
            language,
            type: 'project',
            order,
        }
    }
}

// https://astro.build/config
export default defineConfig({
    output: 'static',
    integrations: [
        tailwind(),
        react(),
        astroI18next(),
        mdx({
            remarkPlugins: [projectsRemarkPlugin],
        }),
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

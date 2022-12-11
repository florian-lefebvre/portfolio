import { defineConfig } from 'astro/config'
// https://docs.astro.build/en/guides/integrations-guide/tailwind
import tailwind from '@astrojs/tailwind'
// https://docs.astro.build/en/guides/integrations-guide/react
import react from '@astrojs/react'
// https://github.com/yassinedoghri/astro-i18next
import astroI18next from 'astro-i18next'
// https://docs.astro.build/en/guides/integrations-guide/mdx
import mdx from '@astrojs/mdx'
// https://docs.astro.build/en/guides/integrations-guide/prefetch
import prefetch from '@astrojs/prefetch'
// https://docs.astro.build/en/guides/integrations-guide/sitemap
import sitemap from '@astrojs/sitemap'

import fsp from 'fs/promises'
function projectsRemarkPlugin() {
    return async function (tree: any, file: any) {
        const filePath: string = file.history[0]
        if (!filePath.includes('/projects/')) return
        const fileName = filePath.split('/').at(-1)!
        const order = Number(fileName.split('.')[0])
        const slug = fileName.split('.')[1]
        const language = filePath.split('/content/').at(-1)!.split('/')[0]
        const { mtime: modifiedTime } = await fsp.stat(filePath)
        file.data.astro.frontmatter = {
            ...file.data.astro.frontmatter,
            slug,
            language,
            type: 'project',
            order,
            modifiedTime,
        }
    }
}

// https://astro.build/config
export default defineConfig({
    site: 'https://v5.florian-lefebvre.netlify.app',
    output: 'static',
    integrations: [
        tailwind(),
        react(),
        astroI18next(),
        mdx({
            remarkPlugins: [projectsRemarkPlugin],
        }),
        prefetch({
            selector: 'a:not([target="_blank"])',
        }),
        sitemap(),
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

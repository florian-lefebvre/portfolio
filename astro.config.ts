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
// https://docs.astro.build/en/guides/integrations-guide/imag
import image from '@astrojs/image'

import fsp from 'fs/promises'
function contentRemarkPlugin() {
    return async function (tree: any, file: any) {
        const filePath: string = file.history[0]
        const fileName = filePath.split('/').at(-1)!
        const slug = fileName.split('.')[1]
        const language = filePath.split('/content/').at(-1)!.split('/')[0]
        const { mtime: modifiedTime } = await fsp.stat(filePath)
        const specificOpts: Record<string, any> = {}
        if (filePath.includes('/projects/')) {
            specificOpts.order = Number(fileName.split('.')[0])
            specificOpts.type = 'project'
        } else if (filePath.includes('/blog/')) {
            const publishedDate = fileName.split('.')[0]
            specificOpts.publishedTime = new Date(publishedDate).toISOString()
            specificOpts.type = 'article'
        }
        file.data.astro.frontmatter = {
            ...file.data.astro.frontmatter,
            slug,
            language,
            modifiedTime,
            ...specificOpts,
        }
    }
}

// https://astro.build/config
export default defineConfig({
    site: 'https://florian-lefebvre.dev',
    output: 'static',
    integrations: [
        tailwind(),
        react(),
        astroI18next(),
        mdx({
            remarkPlugins: [contentRemarkPlugin],
        }),
        prefetch({
            selector: 'a:not([target="_blank"])',
        }),
        sitemap(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp',
        }),
    ],
    markdown: {
        shikiConfig: {
            theme: 'vitesse-dark',
        },
    },
})

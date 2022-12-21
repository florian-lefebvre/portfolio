export type BaseFrontmatter = {
    slug: string
    language: string
    title: string
    description: string
    thumbnail: {
        url: string
        alt: string
    }
    type: 'project' | 'article'
    category: string
    tags: string[]
    modifiedTime: string
    draft?: boolean
}

export type ProjectFrontmatter = BaseFrontmatter & {
    order: number
}

export type ArticleFrontmatter = BaseFrontmatter & {
    publishedTime: string
}

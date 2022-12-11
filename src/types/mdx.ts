export type ProjectFrontmatter = {
    order: number
    slug: string
    language: string
    title: string
    description: string
    thumbnail: {
        url: string
        alt: string
    }
    type: 'project' | 'article'
}

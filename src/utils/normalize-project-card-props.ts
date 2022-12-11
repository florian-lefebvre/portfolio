import type { ProjectFrontmatter } from '~/types/mdx'

export function normalizeProjectCardProps(frontmatter: ProjectFrontmatter) {
    return {
        title: frontmatter.title,
        description: frontmatter.description,
        slug: frontmatter.slug,
        img: frontmatter.thumbnail.url,
        alt: frontmatter.thumbnail.alt,
    }
}

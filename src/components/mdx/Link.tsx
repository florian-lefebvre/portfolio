export default function Link(
    props: React.LinkHTMLAttributes<HTMLAnchorElement>
) {
    const href = props.href
    const isInternalLink =
        href && (href.startsWith('/') || href.startsWith('#'))

    if (isInternalLink) {
        return <a {...props}>{props.children}</a>
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />
}

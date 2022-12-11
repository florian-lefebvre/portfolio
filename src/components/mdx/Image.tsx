export default function Image(
    props: React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    >
) {
    return <img loading="lazy" {...props} />
}

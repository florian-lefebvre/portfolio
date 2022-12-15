export default function Image(
    props: React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    >
) {
    return (
        <figure>
            <img loading="lazy" {...props} />
            <figcaption>{props.alt}</figcaption>
        </figure>
    )
}

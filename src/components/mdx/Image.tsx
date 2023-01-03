import Zoom from 'react-medium-image-zoom'

export default function Image(
    props: React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    >
) {
    return (
        <figure>
            <Zoom>
                <img loading="lazy" {...props} />
            </Zoom>
            <figcaption>{props.alt}</figcaption>
        </figure>
    )
}

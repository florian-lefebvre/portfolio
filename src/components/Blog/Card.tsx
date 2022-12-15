import i18next from 'i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'

type Props = {
    title: string
    description: string
    slug: string
    img: string
    alt: string
    category: string
    publishedTime: string
    localizedRootUrl: string
}

export default function ArticleCard({
    title,
    description,
    slug,
    img,
    alt,
    category,
    publishedTime,
    localizedRootUrl,
}: Props) {
    return (
        <a
            href={`${localizedRootUrl}${slug}`}
            className="group flex flex-col gap-4 focus:outline-none focus:ring-3 focus:ring-primary-7"
        >
            <div className="overflow-hidden">
                <LazyLoadImage
                    src={img}
                    alt={alt}
                    className="w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                    placeholder={<div className="h-72 bg-primary-5"></div>}
                />
            </div>
            <p className="text-sm text-neutral-11">
                {category} ·{' '}
                {new Date(publishedTime).toLocaleDateString(i18next.language, {
                    dateStyle: 'medium',
                })}
            </p>
            <h3 className="text-xl font-semibold sm:text-2xl md:text-3xl">
                {title}
            </h3>
            <p className="text-base font-medium text-neutral-11">
                {description}
            </p>
        </a>
    )
}

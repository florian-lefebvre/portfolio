import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { LazyLoadImage } from 'react-lazy-load-image-component'

type Props = {
    title: string
    desc: string
    slug: string
    img: string
    alt: string
    variant: 'small' | 'medium'
}

export default function ProjectCard({
    title,
    desc,
    slug,
    img,
    alt,
    variant,
}: Props) {
    function getClass(
        className: string,
        map: Record<Props['variant'], string>
    ) {
        return clsx(className, map[variant])
    }
    const wrapperClass = getClass(
        'flex flex-col gap-4 group focus:outline-none focus:ring-[3px] focus:ring-primary-6',
        {
            small: '',
            medium: '',
        }
    )
    const imgClass = getClass(
        'object-cover group-hover:scale-105 transition-transform w-full',
        { small: 'h-48', medium: 'h-72' }
    )
    const titleClass = getClass('font-semibold', {
        small: 'text-2xl',
        medium: 'text-3xl',
    })
    const descClass = getClass('font-medium text-neutral-11', {
        small: '',
        medium: '',
    })
    const linkClass = getClass(
        'inline-flex mr-auto items-center space-x-2 font-semibold pb-1 border-b-2 border-transparent group-hover:border-current transition-colors',
        {
            small: '',
            medium: '',
        }
    )
    return (
        <a href={`/projects/${slug}`} className={wrapperClass}>
            <div className="overflow-hidden">
                <LazyLoadImage
                    src={img}
                    alt={alt}
                    className={imgClass}
                    loading="lazy"
                    placeholder={<span className="bg-primary-5"></span>}
                />
            </div>
            <h3 className={titleClass}>{title}</h3>
            <p className={descClass}>{desc}</p>
            <div className={linkClass}>
                <span>View project</span>
                <Icon
                    icon="heroicons:chevron-right-20-solid"
                    className="h-4 w-4"
                />
            </div>
        </a>
    )
}

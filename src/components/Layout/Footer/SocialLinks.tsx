import { Icon } from '@iconify/react'
import { t } from 'i18next'

export default function SocialLinks() {
    return (
        <div className="mt-16 grid items-end gap-2 font-medium sm:flex sm:gap-0 sm:space-x-6">
            {(
                t('footer.socialLinks', {
                    ns: 'common',
                    returnObjects: true,
                }) as {
                    href: string
                    name: string
                    icon: string
                }[]
            ).map(({ href, name, icon }) => (
                <a
                    key={name}
                    href={href}
                    target="_blank"
                    className="inline-flex items-end justify-center space-x-2 px-4 py-3 leading-none transition-all hover:bg-neutral-5 focus:outline-none focus:ring-3 focus:ring-primary-7 dark:hover:bg-neutralDark-6 sm:justify-start sm:first:pl-0 sm:first:hover:pl-4 sm:first:focus:pl-4"
                >
                    <Icon icon={icon} className="h-5 w-5" />
                    <span>{name}</span>
                </a>
            ))}
        </div>
    )
}

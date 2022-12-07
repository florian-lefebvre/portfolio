import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { useState } from 'react'
import useWindowEventListener from '~/hooks/useWindowEventListener'
import ThemeToggler from './ThemeToggler'
import MobileMenu from './MobileMenu'

export default function Header({
    pathname,
    links,
}: {
    pathname: string
    links: { name: string; href: string }[]
}) {
    const [isTop, setIsTop] = useState(true)
    const [open, setOpen] = useState(false)
    useWindowEventListener('scroll', () => setIsTop(window.scrollY < 100), {
        passive: true,
    })
    return (
        <header
            className={clsx(
                'sticky top-0 z-40 border-b bg-neutral-2 transition-[border,_box-shadow] dark:bg-neutralDark-4',
                isTop
                    ? 'border-transparent'
                    : 'border-neutral-5 shadow-sm dark:border-neutral-7'
            )}
        >
            <nav className="custom-container relative flex items-center justify-center p-4 sm:justify-between">
                <button
                    className="absolute left-4 p-2 transition-colors hover:bg-neutral-4 focus:outline-none focus:ring-[3px] focus:ring-primary-7 dark:hover:bg-neutralDark-6 sm:hidden"
                    onClick={() => setOpen(true)}
                >
                    <span className="sr-only">Open menu</span>
                    <Icon
                        icon="heroicons:bars-3-bottom-left"
                        className="h-6 w-6"
                        aria-hidden="true"
                    />
                </button>
                <a
                    href={links[0].href}
                    className="p-1 transition-colors hover:bg-neutral-4 focus:outline-none focus:ring-[3px] focus:ring-primary-7 dark:hover:bg-neutralDark-6"
                >
                    <svg
                        className="h-8 w-8"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.0656 19.9999L16.2822 11.7273C17.3175 7.8636 21.0574 4.72459 24.1483 5.55281L20.2037 20.2744C23.3482 21.0541 26 23.3944 26 25.9999H18.6696L15.8661 36.4624C14.8308 40.3262 11.091 43.4652 8.00002 42.6369L12.4925 25.8707C9.05343 25.2863 6 22.7958 6 19.9999H14.0656Z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M30.0781 40.5293C29.1418 41.2807 28.1646 41.6974 27.27 41.7612L35.2482 11.9862C35.7088 10.267 36.7795 8.69644 38.0703 7.66062C39.0065 6.90929 39.9838 6.49257 40.8784 6.42879L32.9002 36.2037C32.4395 37.9229 31.3689 39.4935 30.0781 40.5293Z"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </a>
                <div className="flex items-center space-x-4">
                    <div className="hidden items-center sm:flex">
                        {links.map(({ name, href }) => (
                            <a
                                key={href}
                                className={clsx(
                                    'px-4 py-2 transition-colors hover:bg-neutral-4 focus:outline-none focus:ring-[3px] focus:ring-primary-7 dark:hover:bg-neutralDark-6',
                                    pathname === href
                                        ? 'font-bold'
                                        : 'font-medium'
                                )}
                                href={href}
                            >
                                {name}
                            </a>
                        ))}
                    </div>
                    <div className="absolute right-4 sm:static">
                        <ThemeToggler />
                    </div>
                </div>
            </nav>
            <MobileMenu
                open={open}
                onClose={() => setOpen(false)}
                pathname={pathname}
                links={links}
            />
        </header>
    )
}

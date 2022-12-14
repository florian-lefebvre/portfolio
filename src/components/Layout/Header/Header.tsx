import clsx from 'clsx'
import { useState } from 'react'
import useEventListener from '~/hooks/useEventListener'
import ThemeToggler from './ThemeToggler'
import MobileMenu from './MobileMenu'
import { t } from 'i18next'

export default function Header({
    pathname,
    links,
}: {
    pathname: string
    links: { name: string; href: string }[]
}) {
    const [isTop, setIsTop] = useState(true)
    const [open, setOpen] = useState(false)
    useEventListener({
        event: 'scroll',
        listener: () => setIsTop(window.scrollY < 100),
        opts: {
            passive: true,
        },
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
                    className="absolute left-4 p-2 transition-colors hover:bg-neutral-4 focus:outline-none focus:ring-3 focus:ring-primary-7 dark:hover:bg-neutralDark-6 sm:hidden"
                    onClick={() => setOpen(true)}
                >
                    <span className="sr-only">
                        {t('header.a11y.openMenu', { ns: 'common' })}
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <a
                    href={links[0].href}
                    className="p-1 transition-colors hover:bg-neutral-4 focus:outline-none focus:ring-3 focus:ring-primary-7 dark:hover:bg-neutralDark-6"
                >
                    <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-8 w-8"
                        aria-hidden="true"
                    >
                        <title>{t('header.logoAlt', { ns: 'common' })}</title>
                        <path d="m13.1294 20.8356 4.0117-14.97189c.4635-1.72957 2.0108-3.1687 3.4388-3.15394.2762.00285.4363.28293.3649.54966L16.9331 18.2313c-.4635 1.7296-2.0108 3.1687-3.4389 3.1539-.2761-.0028-.4363-.2829-.3648-.5496ZM6.85594 10.2862l1.11075-4.14531c.46343-1.72957 2.0108-3.16871 3.43881-3.15395.034.00035.0662.00489.0964.01308.8275.00102 1.4981.6722 1.4981 1.5 0 .82843-.6716 1.5-1.5 1.5-.1302 0-.2565-.01659-.3769-.04776L9.93352 10.3917c1.42748.3099 2.68058 1.2674 2.97148 2.3999.0688.2675-.1603.4946-.4365.4946H9.15792l-1.39929 5.2223c-.46343 1.7295-2.0108 3.1687-3.43883 3.1539-.27612-.0029-.43628-.2829-.36481-.5497l2.12129-7.9167c-1.45745-.2927-2.74838-1.2634-3.04426-2.4151-.06871-.2675.16037-.4947.43651-.4947h3.38741Z" />
                    </svg>
                </a>
                <div className="flex items-center space-x-4">
                    <div className="hidden items-center sm:flex">
                        {links.map(({ name, href }) => (
                            <a
                                key={href}
                                className={clsx(
                                    'px-4 py-2 transition-colors hover:bg-neutral-4 focus:outline-none focus:ring-3 focus:ring-primary-7 dark:hover:bg-neutralDark-6',
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

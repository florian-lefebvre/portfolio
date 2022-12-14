import { Dialog, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { t } from 'i18next'
import { Fragment, useState } from 'react'
import useEventListener from '~/hooks/useEventListener'

export default function MobileMenu({
    open,
    onClose,
    pathname: initialPathname,
    links,
}: {
    open: boolean
    onClose: () => void
    pathname: string
    links: { name: string; href: string }[]
}) {
    const [pathname, setPathname] = useState(initialPathname)

    function onLinkClicked(
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        href: string
    ) {
        if (!href.startsWith('#')) {
            e.preventDefault()
            window.swup.loadPage({
                url: href,
            })
        }
        onClose()
    }

    useEventListener({
        event: 'swup:contentReplaced',
        listener: () => {
            setPathname(window.location.pathname)
        },
    })

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-neutralDark-3 bg-opacity-80 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-x-0 bottom-0 flex max-h-full pt-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-y-full"
                                enterTo="translate-y-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-y-0"
                                leaveTo="translate-y-full"
                            >
                                <Dialog.Panel className="pointer-events-auto mx-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-auto rounded-t-xl bg-neutral-4 py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="ml-4 text-xl font-semibold">
                                                    Menu
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        className="p-2 transition-colors hover:bg-neutral-4 focus:outline-none focus:ring-3 focus:ring-primary-7 dark:hover:bg-neutralDark-6"
                                                        onClick={() =>
                                                            onClose()
                                                        }
                                                    >
                                                        <span className="sr-only">
                                                            {t(
                                                                'header.a11y.closeMenu',
                                                                { ns: 'common' }
                                                            )}
                                                        </span>
                                                        <Icon
                                                            icon="heroicons:x-mark"
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            <div className="flex flex-col items-center space-y-2">
                                                {links.map(({ name, href }) => (
                                                    <a
                                                        key={href}
                                                        className={clsx(
                                                            'w-full px-4 py-2 transition-colors hover:bg-neutral-4 focus:outline-none focus:ring-3 focus:ring-primary-7 dark:hover:bg-neutralDark-6',
                                                            pathname === href
                                                                ? 'font-bold'
                                                                : 'font-medium'
                                                        )}
                                                        href={href}
                                                        onClick={(e) =>
                                                            onLinkClicked(
                                                                e,
                                                                href
                                                            )
                                                        }
                                                    >
                                                        {name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

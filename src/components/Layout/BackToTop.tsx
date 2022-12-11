import { Transition } from '@headlessui/react'
import { t } from 'i18next'
import { Fragment, useState } from 'react'
import useEventListener from '~/hooks/useEventListener'

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function BackToTop() {
    const [isTop, setIsTop] = useState(true)
    useEventListener({
        event: 'scroll',
        listener: () => setIsTop(window.scrollY < 300),
        opts: {
            passive: true,
        },
    })
    return (
        <Transition
            as={Fragment}
            show={!isTop}
            enter="duration-200 ease-out"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="duration-100 ease-in"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
        >
            <button
                type="button"
                className="fixed right-0 bottom-6 z-20 bg-neutral-9 p-2 text-white transition-all hover:bg-neutral-10 focus:outline-none focus:ring-3 focus:ring-primary-7"
                onClick={() => scrollToTop()}
            >
                <span className="sr-only">
                    {t('header.a11y.backToTop', { ns: 'common' })}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>
        </Transition>
    )
}

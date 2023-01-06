import { t } from 'i18next'
import { useEffect, useState } from 'react'

declare global {
    interface Window {
        __BANNER_HIDDEN?: boolean
    }
}

export default function Banner() {
    const enabled = t('banner.enabled', { ns: 'common' })
    const title = t('banner.title', { ns: 'common' })
    const cta = t('banner.cta', { ns: 'common' })
    const url = t('banner.url', { ns: 'common' })

    const hiddenUI = (
        <>
            <div className="bg-primary-9 lg:h-2" />
            <div className="lg:h-8" />
        </>
    )

    const [hidden, setHidden] = useState(true)

    function hide() {
        setHidden(true)
        window.localStorage.setItem(localStorageKey, 'hidden')
    }

    if (!enabled) return hiddenUI

    const localStorageKey = `banner_${title.replace(/ /g, '') + url}`

    useEffect(() => {
        if (!window.localStorage.getItem(localStorageKey)) {
            setHidden(false)
        }
    }, [])

    if (hidden) return hiddenUI

    function handleClose() {
        hide()
        window.__BANNER_HIDDEN = true
    }

    function handleLink(event: any) {
        if (window.__BANNER_HIDDEN) {
            event.preventDefault()
        } else {
            hide()
        }
    }

    const showUI = (
        <a
            href={url}
            onClick={handleLink}
            target={
                url.startsWith('/') || url.startsWith('#')
                    ? undefined
                    : '_blank'
            }
            className="group block border-4 border-transparent bg-primary-9 font-medium text-white transition-colors hover:bg-primary-10 focus:border-primary-8 focus:outline-none"
        >
            <div className="custom-container flex items-center justify-between gap-4 px-4 py-1 text-sm">
                <div>
                    {title}{' '}
                    <span className="font-semibold group-hover:underline">
                        {cta}
                    </span>
                </div>
                <button
                    onClick={handleClose}
                    className="bg-white/10 p-2 transition-colors hover:bg-white/30 focus:outline-none focus:ring-3 focus:ring-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </a>
    )

    return showUI
}

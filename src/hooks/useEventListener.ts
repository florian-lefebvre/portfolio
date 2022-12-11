import { useEffect } from 'react'

type Props = {
    selector?: string
    event: string
    listener: () => void
    opts?: AddEventListenerOptions
}

export default function ({ selector, event, listener, opts }: Props) {
    useEffect(() => {
        let el: typeof window | Element = window
        if (selector) {
            const selected = document.querySelector(selector)
            if (selected) {
                el = selected
            }
        }
        el.addEventListener(event, listener, opts)
        listener()
        return () => {
            el.removeEventListener(event, listener)
        }
    })
}

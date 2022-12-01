import { useEffect } from 'react'

export default function (
    event: string,
    listener: () => void,
    opts?: AddEventListenerOptions
) {
    useEffect(() => {
        window.addEventListener(event, listener, opts)
        listener()
        return () => {
            window.removeEventListener(event, listener)
        }
    })
}

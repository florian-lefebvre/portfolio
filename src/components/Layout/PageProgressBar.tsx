import clsx from 'clsx'
import { useEffect, useState } from 'react'
import useEventListener from '~/hooks/useEventListener'

export default function PageProgressBar() {
    const [init, setInit] = useState(false)
    const [width, setWidth] = useState<number | null>(null)
    useEventListener({
        event: 'scroll',
        listener: () => {
            const winScroll = document.documentElement.scrollTop
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight
            const scrolled = (winScroll / height) * 100
            if (height > 0) {
                setWidth(scrolled)
            } else {
                setWidth(null)
            }
        },
        opts: {
            passive: true,
        },
    })
    useEffect(() => {
        setInit(true)
    }, [])
    return (
        <div
            className={clsx(
                'sticky bottom-0 z-20 h-2 bg-primary-5 transition-opacity duration-700',
                init && width && width !== 0 ? 'opacity-100' : 'opacity-0'
            )}
        >
            <div
                className="absolute inset-0 right-auto bg-primary-9 transition-[width] duration-500 ease-in-out"
                style={{
                    width: `${width || 0}%`,
                }}
            ></div>
        </div>
    )
}

import { Icon } from '@iconify/react'
import { useStore } from '@nanostores/react'
import { useEffect } from 'react'
import themeStore from '~/stores/theme'

export default function ThemeToggler() {
    const $themeStore = useStore(themeStore.state)

    useEffect(() => {
        themeStore.apply(themeStore.get())
    }, [])
    return (
        <button
            className="rounded-full bg-neutral-12 p-3 text-neutral-2 transition-all hover:bg-primary-10 focus:outline-none focus:ring-[3px] focus:ring-primary-10 disabled:opacity-60 sm:p-4"
            onClick={() => themeStore.toggle()}
            disabled={$themeStore.running}
        >
            <span className="sr-only">Switch theme</span>
            <Icon
                className="h-4 w-4"
                icon={`heroicons:${
                    $themeStore.theme === 'light' ? 'moon' : 'sun'
                }-solid`}
            />
        </button>
    )
}

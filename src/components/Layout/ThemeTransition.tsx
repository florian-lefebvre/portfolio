import { useStore } from '@nanostores/react'
import clsx from 'clsx'
import themeStore from '~/stores/theme'

export default function ThemeTransition() {
    const $themeStore = useStore(themeStore.state)
    return (
        <div
            id="theme-transition"
            className={clsx(
                'fixed inset-y-0 z-50 animate-theme bg-neutralDark-2 transition-all duration-700 dark:bg-neutralLight-2 [[data-animate=false]_&]:!animate-none',
                $themeStore.running ? 'block' : 'hidden'
            )}
        ></div>
    )
}

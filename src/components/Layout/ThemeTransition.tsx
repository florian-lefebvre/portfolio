import { useStore } from '@nanostores/react'
import clsx from 'clsx'
import themeStore from '~/stores/theme'

export default function ThemeTransition() {
    const $themeStore = useStore(themeStore.state)
    return (
        <div
            className={clsx(
                'animate-theme fixed inset-y-0 z-50 bg-neutralDark-2 transition-all duration-700 dark:bg-neutralLight-2',
                $themeStore.running ? 'block' : 'hidden'
            )}
        ></div>
    )
}

import { useStore } from '@nanostores/react'
import clsx from 'clsx'
import themeStore from '~/stores/theme'

export default function ThemeTransition() {
    const $themeStore = useStore(themeStore.state)
    return (
        <div
            className={clsx(
                'fixed inset-0 z-50',
                $themeStore.running ? 'block' : 'hidden'
            )}
        >
            <div
                className={clsx(
                    'absolute inset-y-0 animate-test bg-neutralDark-2 transition-all dark:bg-neutralLight-2'
                )}
            ></div>
        </div>
    )
}

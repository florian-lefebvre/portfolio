import { action, map } from 'nanostores'
import type { Theme } from '~/types'
import { sleep } from '~/utils'

const TRANSITION_DURATION = 1500
const LOCAL_STORAGE_KEY = 'theme'

const state = map<{
    running: boolean
    theme: Theme
}>({
    running: false,
    theme: 'dark',
})

const apply = action(state, 'apply', async (store, theme: Theme) => {
    store.setKey('running', true)

    await sleep(TRANSITION_DURATION / 4)

    store.setKey('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
    const className = '[&_*:not([id="theme-transition"])]:!transition-none'
    document.documentElement.classList.add(className)
    window.setTimeout(() => {
        document.documentElement.classList.remove(className)
    }, 0)

    await sleep((TRANSITION_DURATION * 3) / 4)

    store.setKey('running', false)
})

function get(): Theme {
    if (
        typeof localStorage !== 'undefined' &&
        localStorage.getItem(LOCAL_STORAGE_KEY)
    ) {
        return localStorage.getItem(LOCAL_STORAGE_KEY) as Theme
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
    } else {
        return 'light'
    }
}

export async function toggle() {
    const { theme } = state.get()
    await apply(theme === 'light' ? 'dark' : 'light')
}

export default {
    state,
    apply,
    get,
    toggle,
    TRANSITION_DURATION,
    LOCAL_STORAGE_KEY,
}

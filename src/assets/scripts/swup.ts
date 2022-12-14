// @ts-ignore
import Swup from 'swup'
// @ts-ignore
import SwupA11yPlugin from '@swup/a11y-plugin'
// @ts-ignore
import SwupHeadPlugin from '@swup/head-plugin'
// @ts-ignore
import SwupScrollPlugin from '@swup/scroll-plugin'
// @ts-ignore
import SwupScriptsPlugin from '@swup/scripts-plugin'
// @ts-ignore
import SwupFadeTheme from '@swup/fade-theme'

const swup = new Swup({
    plugins: [
        new SwupA11yPlugin(),
        new SwupHeadPlugin(),
        new SwupScrollPlugin({
            doScrollingRightAway: true,
            animateScroll: !window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ),
        }),
        new SwupScriptsPlugin(),
        new SwupFadeTheme(),
    ],
})

document.addEventListener('swup:samePage', (event) => {
    history.replaceState(
        '',
        document.title,
        window.location.pathname + window.location.search
    )
})

document.addEventListener('swup:contentReplaced', (event) => {
    const links: HTMLAnchorElement[] = Array.from(
        document.querySelectorAll('header a')
    )
    for (const link of links) {
        link.classList.remove('font-bold')
        link.classList.add('font-medium')
    }
    const pathname =
        window.location.pathname === '' ? '/' : window.location.pathname

    links.shift()
    links.pop()
    const selectedLink = links.find((link) => link.pathname === pathname)
    selectedLink?.classList.remove('font-medium')
    selectedLink?.classList.add('font-bold')
})

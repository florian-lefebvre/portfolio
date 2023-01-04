// @ts-ignore
import Swup from 'swup'
// @ts-ignore
import SwupA11yPlugin from '@swup/a11y-plugin'
// @ts-ignore
import SwupHeadPlugin from '@swup/head-plugin'
// @ts-ignore
import SwupScrollPlugin from '@swup/scroll-plugin'
// @ts-ignore
import Theme from '@swup/theme'

class PageTransition extends Theme {
    name = 'PageTransition'

    mount() {
        // @ts-ignore
        this.addClassName('#swup', 'main')
    }
}

const swup: typeof Swup = new Swup({
    plugins: [
        new SwupA11yPlugin(),
        new SwupHeadPlugin(),
        new SwupScrollPlugin({
            doScrollingRightAway: true,
            animateScroll: true,
        }),
        new PageTransition(),
    ],
})

window.swup = swup

document.addEventListener('swup:samePage', (event) => {
    history.replaceState(
        '',
        document.title,
        window.location.pathname + window.location.search
    )
})

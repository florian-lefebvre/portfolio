import { useRemarkSync } from 'react-remark'
import ReactDOMServer from 'react-dom/server'
import parse from 'html-react-parser'
import { JSDOM } from 'jsdom'

function removeExtremeTags(str: string) {
    return str
        .replaceAll('<p>', '')
        .replaceAll('</p>', '')
        .replaceAll('LINERETURN', '<br>')
}

export default function Markdown({ source }: { source: string }): any {
    const content = useRemarkSync(source.replaceAll('\n\n', ' LINERETURN '))
    const rendered = ReactDOMServer.renderToStaticMarkup(content)
    const cleaned = removeExtremeTags(rendered)
    const dom = new JSDOM(cleaned)
    const links = Array.from(dom.window.document.querySelectorAll('a'))
    for (const link of links) {
        const { href } = link
        const isInternalLink =
            href && (href.startsWith('/') || href.startsWith('#'))
        if (!isInternalLink) {
            link.target = '_blank'
            link.rel = 'noopener noreferrer'
        }
    }
    const getString = (function () {
        let DIV = dom.window.document.createElement('div')

        if ('outerHTML' in DIV)
            return function (node: any): string {
                return node.outerHTML
            }

        return function (node: any): string {
            let div = DIV.cloneNode()
            div.appendChild(node.cloneNode(true))
            // @ts-ignore
            return div.innerHTML
        }
    })()
    const stringifiedDom = getString(dom.window.document.documentElement)
        .replaceAll('<html><head></head><body>', '')
        .replaceAll('</body></html>', '')
    const parsed = parse(stringifiedDom)
    return parsed
}

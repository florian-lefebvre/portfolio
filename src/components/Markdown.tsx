import { useRemarkSync } from 'react-remark'
import ReactDOMServer from 'react-dom/server'
import parse from 'html-react-parser'

function removeFirstHtmlTag(str: string) {
    let done = false
    while (!done) {
        if (str[0] === '>') {
            done = true
        }
        str = str.substring(1)
    }
    return str
}

function removeLastHtmlTag(str: string) {
    let done = false
    while (!done) {
        if (str.at(-1) === '<') {
            done = true
        }
        str = str.slice(0, -1)
    }
    return str
}

function removeExtremeTags(str: string) {
    return removeFirstHtmlTag(removeLastHtmlTag(str))
}

export default function Markdown({ source }: { source: string }): any {
    const content = useRemarkSync(source)
    const rendered = ReactDOMServer.renderToStaticMarkup(content)
    const cleaned = removeExtremeTags(rendered)
    const parsed = parse(cleaned)
    return parsed
}

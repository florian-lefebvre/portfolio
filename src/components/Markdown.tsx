import { useRemarkSync } from 'react-remark'
import ReactDOMServer from 'react-dom/server'
import parse from 'html-react-parser'

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
    const parsed = parse(cleaned)
    return parsed
}

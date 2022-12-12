import { MDXProvider as Provider } from '@mdx-js/react'
import Link from './Link'
import Image from './Image'

type Props = Parameters<typeof Provider>[0]

const components = {
    a: Link,
    img: Image,
}

export default function MDXProvider(props: Props) {
    return <Provider components={components} {...props} />
}

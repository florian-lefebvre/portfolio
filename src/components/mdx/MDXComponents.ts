import Link from './Link'
// @ts-ignore
import Image from './Image.astro'
import Alert from './Alert'

const components = {
    a: Link,
    img: Image as any,
    Image,
    Alert,
}

export default components

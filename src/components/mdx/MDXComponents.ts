//@ts-nocheck

import Link from './Link'
import Image from './Image.astro'
import Alert from './Alert.astro'

const components = {
    a: Link,
    img: Image as any,
    Image,
    Alert,
}

export default components

import clsx from 'clsx'
import { useScroll, useSpring, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PageProgressBar() {
    const [show, setShow] = useState(false)

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
    })

    useEffect(() => {
        scaleX.on('change', (v) => setShow(v !== 0))
    }, [scaleX])
    return (
        <div
            className={clsx(
                'sticky bottom-0 z-20 h-2 bg-primary-5 transition-opacity duration-700',
                show ? 'opacity-100' : 'opacity-0'
            )}
        >
            <motion.div
                className="absolute inset-0 origin-[0%] bg-primary-9 transition-transform duration-300 ease-in-out"
                style={{ scaleX }}
            />
        </div>
    )
}

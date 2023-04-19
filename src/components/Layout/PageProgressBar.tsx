import clsx from 'clsx'
import { useScroll, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PageProgressBar() {
    const [scaleX, setScaleX] = useState(0)
    const show = scaleX !== 0

    const { scrollYProgress } = useScroll()

    useEffect(() => {
        scrollYProgress.on('change', (v) => setScaleX(v))
    }, [scrollYProgress])
    return (
        <div
            className={clsx(
                'sticky bottom-0 z-20 h-2 bg-primary-5 transition-opacity duration-700',
                show ? 'opacity-100' : 'opacity-0'
            )}
        >
            <motion.div
                className="absolute inset-0 origin-[0%] bg-primary-9 transition-transform duration-300 ease-in-out"
                style={{ transform: `scaleX(clamp(0, ${scaleX}, 1))` }}
            />
        </div>
    )
}

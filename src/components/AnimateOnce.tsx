import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import clsx from 'clsx'

export type Props = {
    as?: React.ElementType
    children?: React.ReactNode
    delay?: number
    direction?: 'top' | 'bottom' | 'left' | 'right'
    className?: string
    ownProps?: any
    offset?: number | boolean
}

export default function AnimateOnce({
    children,
    delay = 0,
    direction = 'top',
    className,
    as = 'div',
    ownProps,
    offset = -50,
}: Props) {
    const ref = useRef(null)
    const [animate, setAnimate] = useState(false)
    const isInView = useInView(ref, {
        once: true,
        margin: offset === false ? '0px' : `${offset}px`,
    })

    useEffect(() => {
        const disableAnimation =
            document.documentElement.getAttribute('data-animate')! === 'false'
        if (disableAnimation) {
            setAnimate(true)
        }
    }, [])

    useEffect(() => {
        if (!animate && isInView) {
            setTimeout(() => setAnimate(true), delay)
        }
    }, [isInView])

    const transform = {
        top: `translate(0, ${animate ? '0' : '10px'})`,
        bottom: `translate(0, ${animate ? '0' : '-10px'})`,
        left: `translate(${animate ? '0' : '10px'}, 0)`,
        right: `translate(${animate ? '0' : '-10px'}, 0)`,
    }[direction]

    const Component = as

    return (
        <Component
            ref={ref}
            className={clsx(
                'transition-[opacity,transform] duration-500 [[data-animate=false]_&]:!duration-[0.01ms]',
                className
            )}
            style={{
                opacity: animate ? 1 : 0.01,
                transform,
            }}
            {...ownProps}
        >
            {children}
        </Component>
    )
}

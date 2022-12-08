import clsx from 'clsx'
import { forwardRef } from 'react'
import type {
    PolymorphicComponentPropsWithRef,
    PolymorphicRef,
} from '~/types/polymorphic'
interface Props {
    children: React.ReactNode
    color?: 'primary' | 'secondary'
}

type ButtonProps<C extends React.ElementType> =
    PolymorphicComponentPropsWithRef<C, Props>

type ButtonComponent = <
    C extends React.ElementType = 'button'
>({}: ButtonProps<C>) => React.ReactElement | null

const Button: ButtonComponent = forwardRef(
    <C extends React.ElementType = 'button'>(
        {
            as,
            children,
            color = 'primary',
            disabled,
            className,
            ...rest
        }: ButtonProps<C>,
        ref?: PolymorphicRef<C>
    ) => {
        const baseClass =
            'inline-block translate-x-2 -translate-y-2 px-6 py-2 text-sm font-medium shadow-square shadow-neutral-12 transition-all hover:translate-x-0 hover:translate-y-0 hover:shadow-none focus:translate-x-0 focus:translate-y-0 focus:shadow-none focus:outline-none focus:ring-3 sm:text-base disabled:cursor-not-allowed disabled:opacity-75'
        const colorClass = {
            primary:
                'text-white bg-primary-9 hover:bg-primary-10 focus:ring-primary-7',
            secondary:
                'text-white bg-neutral-9 hover:bg-neutral-10 focus:ring-neutral-7',
        }[color]

        const Component = as || 'button'

        return (
            <Component
                ref={ref}
                className={clsx(className, baseClass, colorClass)}
                {...{ disabled, ...rest }}
            >
                {children}
            </Component>
        )
    }
)

export default Button

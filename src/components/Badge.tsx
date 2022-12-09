import clsx from 'clsx'

type Props = {
    children: React.ReactNode
    color: 'primary' | 'warning'
    className: string
}

export default function Badge({ children, color, className }: Props) {
    const colorClass = {
        primary: 'bg-primary-5 text-primary-11',
        warning: 'bg-warning-5 text-warning-11',
    }[color]
    return (
        <span
            className={clsx(
                className,
                'inline-flex items-center space-x-2 rounded-full px-2.5 py-1 text-xs font-medium',
                colorClass
            )}
        >
            <svg
                className="-ml-0.5 mr-1.5 h-2 w-2"
                fill="currentColor"
                viewBox="0 0 8 8"
            >
                <circle cx={4} cy={4} r={3} />
            </svg>
            {children}
        </span>
    )
}

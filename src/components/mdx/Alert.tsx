type Props = {
    children: React.ReactNode
}

export default function Alert({ children }: Props) {
    return (
        <div className="not-prose my-5 bg-warning-5 p-4 text-base text-warning-11">
            {children}
        </div>
    )
}

import Button from '../Button'

export default function About() {
    return (
        <div className="custom-container flex flex-col items-center gap-16 py-24 px-4 lg:flex-row">
            <div className="flex-1">
                <h1 className="text-2xl font-light sm:text-4xl">
                    <span className="block">
                        From <span className="font-bold">selt-taught</span> to{' '}
                    </span>
                    <span className="block">
                        <span className="font-bold">graduate</span>.
                    </span>
                    <span className="block">
                        Still <span className="font-bold">passionate</span>.
                    </span>
                </h1>
                <div className="mt-8 grid max-w-fit grid-cols-4 gap-4">
                    <div>grid</div>
                    <div>grid</div>
                    <div>grid</div>
                    <div>grid</div>
                    <div>grid</div>
                    <div>grid</div>
                    <div>grid</div>
                </div>
            </div>
            <div className="flex-1">
                <p className="max-w-lg text-sm font-medium sm:text-base lg:max-w-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent urna enim, commodo eget tortor non, imperdiet
                    condimentum justo. Fusce justo diam, blandit sit amet mi
                    sed, dictum egestas est. Aenean.
                </p>
                <p className="mt-8 max-w-lg text-sm font-medium sm:text-base lg:max-w-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent urna enim, commodo eget tortor non, imperdiet
                    condimentum justo. Fusce justo diam, blandit sit amet mi
                    sed, dictum egestas est. Aenean.
                </p>
                <p className="mt-8 max-w-lg text-sm font-medium sm:text-base lg:max-w-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent urna enim, commodo eget tortor non, imperdiet
                    condimentum justo. Fusce justo diam, blandit sit amet mi
                    sed, dictum egestas est. Aenean.
                </p>
                <Button as="a" href="/about" className="mt-16">
                    Learn more
                </Button>
            </div>
        </div>
    )
}

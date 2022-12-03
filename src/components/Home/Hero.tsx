export default function Hero() {
    return (
        <div className="custom-container flex flex-col gap-16 py-24 px-4 lg:flex-row">
            <div className="flex-1 flex-shrink-0 py-12">
                <h1 className="text-4xl font-light">
                    <span className="block">Florian LEFEBVRE,</span>
                    <span className="block">
                        <span className="font-bold">fullstack </span>
                        web developer
                    </span>
                    <span className="italic">& more</span>
                </h1>
                <p className="mt-8 font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent urna enim, commodo eget tortor non, imperdiet
                    condimentum justo. Fusce justo diam, blandit sit amet mi
                    sed, dictum egestas est. Aenean.
                </p>
                <div className="mt-16 flex gap-8">
                    <button className="translate-x-2 -translate-y-2 bg-primary-9 px-6 py-2 font-medium text-white shadow-square shadow-neutral-12 transition-all hover:translate-x-0 hover:translate-y-0 hover:bg-primary-10 hover:shadow-none focus:translate-x-0 focus:translate-y-0 focus:shadow-none focus:outline-none focus:ring-[3px] focus:ring-primary-7">
                        Learn more
                    </button>
                    <button className="translate-x-2 -translate-y-2 bg-neutral-9 px-6 py-2 font-medium text-white shadow-square shadow-neutral-12 transition-all hover:translate-x-0 hover:translate-y-0 hover:bg-neutral-10 hover:shadow-none focus:translate-x-0 focus:translate-y-0 focus:shadow-none focus:outline-none focus:ring-[3px] focus:ring-neutral-7">
                        GitHub
                    </button>
                </div>
            </div>
            <div className="relative flex flex-1">
                <svg
                    className="my-auto -mr-[50%] text-neutral-7"
                    width={240}
                    height={392}
                    fill="none"
                    viewBox="0 0 240 392"
                >
                    <defs>
                        <pattern
                            id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                            x={0}
                            y={0}
                            width={26}
                            height={26}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x={0}
                                y={0}
                                width={6}
                                height={6}
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={240}
                        height={392}
                        fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                    />
                </svg>
                <div className="absolute right-0 isolate h-full w-1/2 bg-primary-9"></div>
                <div className="static isolate m-auto h-80 w-56">
                    <img
                        src="/images/pp_wide.jpg"
                        className="h-full w-full object-cover"
                        alt="Photo of Florian LEFEBVRE"
                    />
                </div>
            </div>
        </div>
    )
}

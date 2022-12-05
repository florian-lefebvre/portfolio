import Button from '../Button'
import { Icon } from '@iconify/react'

export default function About() {
    return (
        <div className="custom-container mx-auto flex flex-col gap-16 py-24 px-4 md:flex-row md:items-center">
            <div className="flex-1">
                <h2 className="text-center text-2xl font-light sm:text-left sm:text-4xl">
                    <span className="block">
                        From <span className="font-bold">selt-taught</span> to{' '}
                    </span>
                    <span className="block">
                        <span className="font-bold">graduate</span>.
                    </span>
                    <span className="block">
                        Still <span className="font-bold">passionate</span>.
                    </span>
                </h2>
                <div className="mt-8 flex flex-wrap justify-center gap-4 sm:max-w-sm sm:justify-start sm:gap-6">
                    {[
                        'nextjs-icon',
                        'react',
                        'typescript-icon',
                        'tailwindcss-icon',
                        'adonisjs-icon',
                        'flutter',
                        'figma',
                        'nuxt-icon',
                        'rails',
                    ].map((e) => (
                        <Icon
                            key={e}
                            className="h-8 w-8 md:h-10 md:w-10"
                            icon={`logos:${e}`}
                        />
                    ))}
                </div>
            </div>
            <div className="flex-1">
                <div className="mx-auto max-w-lg space-y-4 text-sm font-medium sm:ml-0 sm:text-base md:space-y-8 lg:max-w-none">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent urna enim, commodo eget tortor non, imperdiet
                        condimentum justo. Fusce justo diam, blandit sit amet mi
                        sed, dictum egestas est. Aenean.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent urna enim, commodo eget tortor non, imperdiet
                        condimentum justo. Fusce justo diam, blandit sit amet mi
                        sed, dictum egestas est. Aenean.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent urna enim, commodo eget tortor non, imperdiet
                        condimentum justo. Fusce justo diam, blandit sit amet mi
                        sed, dictum egestas est. Aenean.
                    </p>
                </div>
                <div className="flex justify-center sm:justify-start">
                    <Button as="a" href="/about" className="mt-16">
                        Learn more
                    </Button>
                </div>
            </div>
        </div>
    )
}

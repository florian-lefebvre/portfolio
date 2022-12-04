import Button from '../Button'
import { Icon } from '@iconify/react'

export default function About() {
    return (
        <div className="custom-container flex flex-col gap-16 py-24 px-4 md:flex-row md:items-center">
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
                <div className="mt-8 flex max-w-sm flex-wrap gap-4 sm:gap-6">
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
                <div className="space-y-4 md:space-y-8">
                    <p className="max-w-lg text-sm font-medium sm:text-base lg:max-w-none">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent urna enim, commodo eget tortor non, imperdiet
                        condimentum justo. Fusce justo diam, blandit sit amet mi
                        sed, dictum egestas est. Aenean.
                    </p>
                    <p className="max-w-lg text-sm font-medium sm:text-base lg:max-w-none">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent urna enim, commodo eget tortor non, imperdiet
                        condimentum justo. Fusce justo diam, blandit sit amet mi
                        sed, dictum egestas est. Aenean.
                    </p>
                    <p className="max-w-lg text-sm font-medium sm:text-base lg:max-w-none">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent urna enim, commodo eget tortor non, imperdiet
                        condimentum justo. Fusce justo diam, blandit sit amet mi
                        sed, dictum egestas est. Aenean.
                    </p>
                </div>
                <Button as="a" href="/about" className="mt-16">
                    Learn more
                </Button>
            </div>
        </div>
    )
}

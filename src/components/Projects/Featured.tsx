import Button from '../Button'
import { Icon } from '@iconify/react'
import ProjectCard from './Card'

export default function Featured() {
    return (
        <div className="custom-container flex flex-col gap-16 py-24 px-4">
            <div>
                <h2 className="text-2xl font-light sm:text-4xl">
                    <span className="block">
                        Featured <span className="font-bold">work</span>
                    </span>
                </h2>
                <p className="mt-8 max-w-lg text-sm font-medium sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent urna enim, commodo eget tortor non, imperdiet
                    condimentum justo. Fusce justo diam, blandit sit amet mi
                    sed, dictum egestas est. Aenean.
                </p>
            </div>
            <div>
                <div className="grid grid-cols-2 gap-16">
                    {[
                        {
                            title: 'op-ent',
                            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, labore.',
                            slug: 'op-ent',
                            img: 'https://res.cloudinary.com/af68d22a-2043-4078-857c-f2db1a1406ec/image/upload/c_scale,q_80/v1636657520/Portfolio/global/og_ekzloe.jpg',
                            alt: 'logo',
                        },
                        {
                            title: 'yNotes',
                            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, labore.',
                            slug: 'op-ent',
                            img: 'https://repository-images.githubusercontent.com/235597003/0d48eb00-1076-11eb-8768-bfb0e49462b2',
                            alt: 'logo',
                        },
                    ].map((project: any) => (
                        <ProjectCard
                            key={project.slug}
                            {...project}
                            variant="medium"
                        />
                    ))}
                </div>
                <div className="mt-16 grid grid-cols-3 gap-16">
                    {[
                        {
                            title: 'op-ent',
                            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, labore.',
                            slug: 'op-ent',
                            img: 'https://res.cloudinary.com/af68d22a-2043-4078-857c-f2db1a1406ec/image/upload/c_scale,q_80/v1636657520/Portfolio/global/og_ekzloe.jpg',
                            alt: 'logo',
                        },
                        {
                            title: 'yNotes',
                            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, labore.',
                            slug: 'op-ent',
                            img: 'https://repository-images.githubusercontent.com/235597003/0d48eb00-1076-11eb-8768-bfb0e49462b2',
                            alt: 'logo',
                        },
                        {
                            title: 'yNotes',
                            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, labore.',
                            slug: 'op-ent',
                            img: 'https://repository-images.githubusercontent.com/235597003/0d48eb00-1076-11eb-8768-bfb0e49462b2',
                            alt: 'logo',
                        },
                    ].map((project: any) => (
                        <ProjectCard
                            key={project.slug}
                            {...project}
                            variant="small"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

import Button from '../Button'
import { Icon } from '@iconify/react'
import Markdown from '../Markdown'
import { t } from 'i18next'

export default function About() {
    return (
        <div className="custom-container mx-auto flex flex-col gap-16 py-24 px-4 md:flex-row md:items-center">
            <div className="flex-1">
                <h2 className="text-center text-2xl font-light sm:text-left sm:text-4xl">
                    <Markdown
                        source={t('about.title', { ns: 'pages.index' })}
                    />
                </h2>
                <div className="mt-8 flex flex-wrap justify-center gap-4 sm:max-w-sm sm:justify-start sm:gap-6">
                    {(
                        t('techStack.techs', {
                            ns: 'pages.about',
                            returnObjects: true,
                        }) as { icon: string; name: string }[]
                    ).map(({ icon }) => (
                        <Icon
                            key={icon}
                            className="h-8 w-8 md:h-10 md:w-10"
                            icon={icon}
                        />
                    ))}
                </div>
            </div>
            <div className="flex-1">
                <div className="mx-auto max-w-lg space-y-4 text-sm font-medium sm:ml-0 sm:text-base md:space-y-8 lg:max-w-none">
                    {(
                        t('about.content', {
                            ns: 'pages.index',
                            returnObjects: true,
                        }) as string[]
                    ).map((e, i) => (
                        <p key={i}>
                            <Markdown source={e} />
                        </p>
                    ))}
                </div>
                <div className="flex justify-center sm:justify-start">
                    <Button
                        as="a"
                        href={t('about.cta.href', {
                            ns: 'pages.index',
                        })}
                        className="mt-16"
                    >
                        {t('about.cta.name', {
                            ns: 'pages.index',
                        })}
                    </Button>
                </div>
            </div>
        </div>
    )
}

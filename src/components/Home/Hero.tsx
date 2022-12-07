import Button from '../Button'
import { t } from 'i18next'
import Markdown from '../Markdown'

export default function Hero() {
    return (
        <div className="custom-container flex flex-col gap-16 py-24 px-4 text-center sm:text-left lg:flex-row">
            <div className="flex-1 flex-shrink-0 pb-12 sm:py-12">
                <h1 className="text-2xl font-light sm:text-4xl">
                    <Markdown source={t('hero.title', { ns: 'pages.index' })} />
                </h1>
                <p className="mx-auto mt-8 max-w-lg text-sm font-medium sm:ml-0 sm:text-base lg:max-w-none">
                    <Markdown
                        source={t('hero.description', { ns: 'pages.index' })}
                    />
                </p>
                <div className="mt-16 flex justify-center gap-8 sm:justify-start">
                    <Button
                        as="a"
                        href={t('hero.ctas.learnMore.href', {
                            ns: 'pages.index',
                        })}
                    >
                        {t('hero.ctas.learnMore.name', {
                            ns: 'pages.index',
                        })}
                    </Button>
                    <Button
                        as="a"
                        href={t('hero.ctas.github.href', {
                            ns: 'pages.index',
                        })}
                        target="_blank"
                        color="secondary"
                    >
                        {t('hero.ctas.github.name', {
                            ns: 'pages.index',
                        })}
                    </Button>
                </div>
            </div>
            <div className="max-w-64 relative mx-auto flex max-w-lg lg:max-w-none lg:flex-1">
                <svg
                    className="my-auto -mr-[50%] hidden text-neutral-7 sm:block"
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
                <div className="absolute right-0 isolate hidden h-full w-1/2 bg-primary-9 sm:block"></div>
                <div className="static isolate m-auto w-full sm:h-[360px] sm:w-64 lg:h-80 lg:w-56">
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

- [Motivation](#motivation)
- [v1: Jekyll and Bootstrap](#v1-jekyll-and-bootstrap)
- [v2: Nuxt 2 and Tailwind CSS 1.0](#v2-nuxt-2-and-tailwind-css-10)
- [v3: Nuxt 2 and Tailwind CSS 2.0](#v3-nuxt-2-and-tailwind-css-20)
- [v4: Nuxt 3 and Tailwind CSS 3.0](#v4-nuxt-3-and-tailwind-css-30)
- [Wrapping up](#wrapping-up)

## Motivation

As a developer, having a portfolio online is a great to way to showcase my skills and experience, as well as learning new things along the way. 9 months after starting to learn web development, I wanted to build mine. I had done quite a lot of experiments but lacked real projects so it was a good exercise too. In the following, I'll go through the iterations of my website, explain choices I made and issues I faced. Enjoy reading!

## v1: Jekyll and Bootstrap

![v1](/images/projects/portfolio/portfolio-v1.png)

Back in August 2020, I had to choose technologies to build my portfolio. At the time, I knew HTML5, CSS & SCSS, PHP and Bootstrap.

Because I spent a lot of time on [Bootstrap docs](https://getbootstrap.com/docs) in the previous months, I knew that static site generators existed (since Bootstrap docs use Hugo). So I searched for the best fit for me and eventually found [Jekyll](https://jekyllrb.com/).

It uses the [Liquid syntax](https://github.com/Shopify/liquid/wiki) and relies on [Ruby](https://www.ruby-lang.org/). I knew nothing about both of them so and it made it harder to build my portfolio.

I used a template I found on the Internet, tweaked it a bit but I won't lie: it was bad.

And setting the deployment was hard since GitHub Actions were not released yet so I had to use Travis CI and GitHub Pages to release my portfolio.

So as I was learning more about frontend development and in particular JavaScript frameworks, I decided a few months later to rebuild my portfolio from scratch.

## v2: Nuxt 2 and Tailwind CSS 1.0

![v2](/images/projects/portfolio/portfolio-v2.png)

I learnt a lot of things since August 2020, so I decided to go with [Nuxt](https://nuxtjs.org) and [Tailwind CSS](https://tailwindcss.com/).

I chose to use a sidebar for navigation and now I think that wasn't a good choice. The space I was loosing for only a few infos was too much. But anyway, I chose the color teal as a primary color. I also used the official Nuxt modules such as [`@nuxt/content`](https://content.nuxtjs.org/) but I struggled with the layout on some specific screen widths with weird horizontal overflow, caused by code blocks.

This time, I used Travis CI and a Plesk server to deploy my portfolio.

For further explanations about v1 and v2, check out [this archive](https://github.com/florian-lefebvre/portfolio/blob/v2_nuxtjs/content/work/2020-11-13-my-porfolio.md).

But as always, I wasn't satisfied of my work and thought it wasn't good enough as a showcase of my skills. So I remade it of course!

## v3: Nuxt 2 and Tailwind CSS 2.0

![v3](/images/projects/portfolio/portfolio-v3.png)

I'm not crazy, I don't use a new technology every day so I kept using Nuxt and Tailwind CSS. I decided to so something more simple: only one ppage with all informations. I chose some kind of minimalistic design with only gray shades and no primary color. I also implemented a dark mode. I discovered animations using [AnimXYZ](https://animxyz.com/) but I've got to say that it wasn't that easy to do animations with it.

But this simplicity didn't reflect enough my capabilities IMO so you know what it means...

## v4: Nuxt 3 and Tailwind CSS 3.0

Well, I think no screenshot is required...

I upgraded Nuxt to its 3rd version (in beta) as well as Tailwind CSS (no majors changes IMO). And I've got to say that Nuxt 3 and Vue 3 are absolutely amazing compared to their previous major versions. Typescript is _the_ best. But using Nuxt 3 in beta has downsides, for stability (laggy HMR), weird broken imports or missing features. I'm mostly enjoying using it.

Concerning animations, I switch to [`@vueuse/motion`](https://motion.vueuse.org/) and it's really better.

Since only SSR is available (as of the beginning of March 2022), I deploy my portfolio on Vercel, the process is way simpler than on GitHub Actions or any other CI since Nuxt has first class inegrations for deployments.

## Wrapping up

I hope you've find this article interesting, feel free to [open an issue](https://github.com/florian-lefebvre/portfolio/issues/new) for any suggestion or if you want more in depth informations on some specific topics.

BTW here is the link to the repository: https://github.com/florian-lefebvre/portfolio.

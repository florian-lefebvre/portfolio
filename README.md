# portfolio (florian-lefebvre.dev)

Source of my personal website: work, results, talks, testimonials and blog.

## Techs

- [Astro](https://astro.build) (static output, [Netlify](https://www.netlify.com/) adapter)
- [MDX](https://mdxjs.com/) for every piece of content
- [Tailwind CSS](https://tailwindcss.com/)
- [Expressive Code](https://expressive-code.com/) for code blocks
- [Plausible](https://plausible.io/) for analytics

## Running

Requires Node.js `>=20.18.0` and pnpm `10.10.0` (using [Corepack](https://nodejs.org/api/corepack.html) is recommended).

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

| Script         | Description                               |
| -------------- | ----------------------------------------- |
| `pnpm dev`     | Start the dev server                      |
| `pnpm build`   | Type-check with `astro check`, then build |
| `pnpm preview` | Serve the production build locally        |

## Structure

```
src/
├── assets/      images referenced from content and components
├── components/  shared components (Button, Section, TechPill, mdx overrides)
├── content/     MDX collections, see src/content.config.ts
├── layouts/     BaseLayout (SEO, fonts, header/footer, scroll progress)
├── lib/         small helpers
├── pages/       routes, with page-local components under _components/
└── styles/      global CSS and theme variables
```

Content is authored as MDX collections under `src/content`. Collections whose
order matters (`experiences`, `results`, `testimonials`) are sorted by a numeric
filename prefix, highest first — see `src/lib/sort.ts`.

Redirects from previous versions of the site live in `redirects.mjs` and are
merged with `public/_redirects` (which proxies Plausible) at build time.

## Licensing

This website is [GPL-3.0](./LICENSE) licensed.

# Naung Naung — Portfolio

A professional portfolio built with Next.js App Router, React, TypeScript,
Tailwind CSS, and Lucide React. The homepage includes Hero, About, Skills,
Experience, Featured Projects, Education, and Contact sections.

## Development

```sh
npm install
npm run dev
```

## Verification

```sh
npm run typecheck
npm run lint
npm run build
```

The Geist font uses `next/font/google` and requires network access during the
first production build. It is self-hosted by Next.js in the built output.
See [the homepage QA report](docs/homepage-qa.md) for results and the outstanding
manual browser checklist.

## Source structure

- `src/app/`: routes, root layout, metadata, and global design tokens.
- `src/components/layout/`: shared header, mobile navigation, and footer.
- `src/components/sections/`: homepage section components.
- `src/components/projects/`: reusable project presentation.
- `src/data/`: typed profile, skills, employment, and project content.
- `src/types/portfolio.ts`: shared content contracts.

Components are Server Components by default. Global tokens define the light
palette, fonts, and content width; Tailwind handles spacing and responsive layout.
The homepage includes a skip link, visible keyboard focus, and reduced-motion support.

## Content and next phase

Only supplied information is included. Project case studies and a downloadable
resume are deferred to later phases. No email address or portfolio domain has
been assumed; add canonical metadata when the domain is known. The contact data
type supports an optional verified email for a future update.

No authentication, database, CMS, or deployment is configured. AskOnce is represented
only as portfolio data; its application files are outside this project's scope.

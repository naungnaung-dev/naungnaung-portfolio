# Naung Naung — Portfolio

A professional portfolio built with Next.js App Router, React, TypeScript,
Tailwind CSS, and Lucide React. Phase 2 provides the foundation only.

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

The Geist fonts use `next/font/google` and require network access during the
first production build. They are self-hosted by Next.js in the built output.

## Source structure

- `src/app/`: routes, root layout, metadata, and global design tokens.
- `src/components/layout/`: shared header and footer.
- `src/data/`: typed profile, skills, employment, and project content.
- `src/types/portfolio.ts`: shared content contracts.

Components are Server Components by default. Global tokens define the light
palette, fonts, and content width; Tailwind handles spacing and responsive layout.
The starter includes a skip link, visible keyboard focus, and reduced-motion support.

## Content and next phase

Only supplied information is included. Employment roles, dates, and responsibilities
await verified details. Education, case studies, a downloadable resume, and the
complete portfolio sections are deferred to later phases. No email address or
portfolio domain has been assumed; add canonical metadata when the domain is known.

No authentication, database, CMS, or deployment is configured. AskOnce is represented
only as portfolio data; its application files are outside this project's scope.

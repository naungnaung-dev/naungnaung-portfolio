# Naung Naung Portfolio

A professional portfolio for Naung Naung, a Full-Stack Developer with 5+ years
of experience. It presents verified professional experience, technical skills,
education, selected work, and contact options for recruiters and engineering
teams.

## Technology stack

- Next.js 16 App Router
- React and TypeScript
- Tailwind CSS
- Lucide React
- Vercel as the intended deployment platform

## Implemented content

The homepage includes Hero, About, Technical Skills, Professional Experience,
Featured Projects, Education, Contact, and Footer sections. AskOnce has a
technical case study at `/projects/askonce` with authentic public-demo
screenshots.

The approved two-page resume is stored at
`public/Naung_Naung_Full_Stack_Developer_Resume.pdf`. Download actions are
available in the Hero and Contact sections.

## Local development

```sh
npm ci
npm run dev
```

## Quality assurance

```sh
npm run typecheck
npm run lint
npm run build
```

The Geist font uses `next/font/google`, so a clean production build requires
network access before Next.js emits the self-hosted font files. See
[`docs/production-readiness-audit.md`](docs/production-readiness-audit.md) and
[`docs/final-portfolio-qa.md`](docs/final-portfolio-qa.md) for production and
manual-browser verification status.

## Resume regeneration

Resume content is maintained in `src/data/resume.ts`. To regenerate the PDF:

```sh
python3 -m pip install -r scripts/requirements-resume.txt
python3 scripts/generate-resume-pdf.py
```

Regeneration should be followed by visual inspection of both A4 pages and PDF
text/link verification before replacing the approved public file.

## Project structure

- `src/app/`: routes, metadata, and global styles
- `src/components/`: shared layout, sections, project, and case-study UI
- `src/data/`: typed professional and project content
- `src/types/`: shared TypeScript contracts
- `public/`: portrait, AskOnce screenshots, favicon, and resume PDF
- `scripts/`: maintainable resume export and PDF generation
- `docs/`: quality-assurance and production-readiness reports

## Deployment status

The project is prepared for deployment to a new, separate Vercel portfolio
project, but it is not yet publicly deployed. The production domain, canonical
URLs, sitemap, robots metadata, and social-preview images will be configured
after the final production URL is confirmed. This repository is separate from
the AskOnce application and its Vercel projects.

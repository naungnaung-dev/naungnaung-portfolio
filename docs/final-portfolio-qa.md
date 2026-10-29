# Final Portfolio Quality Assurance

QA date: October 29, 2026  
Project: `naungnaung-portfolio`  
Routes reviewed: `/` and `/projects/askonce`

## Result definitions

- **Verified pass:** Confirmed by an executed check, production-server response, or direct artifact inspection.
- **Verified failure:** Reproduced application defect.
- **Source-level review only:** Confirmed in code or generated HTML, but not exercised through a browser UI.
- **Not tested:** The required runtime surface or tooling was unavailable.

No verified application failures were found. The portfolio remains ready for an isolated Vercel preview. Public-launch approval remains conditional on manual browser QA, replacement of the watermarked portrait when an authentic original is available, and final-domain SEO configuration.

## 1. Content review results

**Verified pass**

- Reviewed the complete homepage and AskOnce case study against the supplied professional information.
- Job titles, company names, employment dates, education, location, nationality, and availability remain consistent with the approved data.
- Independent development is clearly separated from paid employment, and AskOnce is presented as an independently developed product.
- No fabricated metrics, customers, revenue, qualifications, projects, or contact information were found.
- Calls to action remain clear for recruiters: project work, contact, resume, live product, demo, and case study.
- The homepage and resume do not need identical wording; their facts remain aligned.
- No placeholder portfolio copy was found.

Small wording corrections:

- Standardized `React.js` to `React` in the skills data.
- Clarified AskOnce as a managed product storefront and ordering service, not a marketplace or website builder.
- Replaced two awkward `checkout / order submission` phrases with natural list wording.

## 2. Responsive testing results

**Not tested in a controllable browser**

Actual viewport testing at 320, 375, 390, 768, 1024, and 1440px could not be completed. The available in-app browser surface was unavailable, and Google Chrome did not grant computer-use control. No responsive pass is inferred from source inspection.

**Source-level review only**

- Responsive containers, bounded media widths, wrapping actions, responsive grids, `min-w-0`, and mobile/desktop navigation breakpoints remain in place.
- The portrait and screenshots use intrinsic dimensions and responsive `sizes` through `next/image`.
- The production HTML and static assets for both routes loaded successfully.

Manual testing is still required at every requested width on both routes, with particular attention to horizontal overflow, CTA wrapping, the mobile menu, portrait spacing, experience timeline, project card, screenshot gallery, Contact, and Footer.

## 3. Functional navigation results

**Verified pass**

- `/` and `/projects/askonce` returned HTTP 200 from a production server.
- Generated homepage fragment links all resolve to existing section IDs.
- Logo, View My Work, Let's Connect, resume, case-study, project, GitHub, LinkedIn, and screenshot destinations are present with the expected URLs.
- Both Download Resume actions reference the same static PDF and filename.
- All links that open a new tab include `rel="noopener noreferrer"`.
- The PDF response returned HTTP 200 with `Content-Type: application/pdf`.
- The PDF contains a working `mailto:naungnaung.code@gmail.com` link. The website intentionally provides LinkedIn and GitHub actions rather than a separate email action.

**Source-level review only**

- Mobile navigation closes on selection, closes on Escape, restores focus to the toggle, closes when focus leaves, and resets at the desktop breakpoint.
- Header and case-study navigation markup and sticky-section offsets remain correctly configured.

**Not tested**

- Pointer and keyboard activation through an actual browser.
- Browser download behavior and filename confirmation.
- LinkedIn rendering in a normal browser; automated requests may be blocked by LinkedIn.

## 4. Accessibility results

**Verified pass**

- Generated HTML contains one H1 per route and no skipped heading levels.
- Semantic header, navigation, main, article, section, figure, and footer elements are used where appropriate.
- Images have meaningful alt text; decorative Lucide icons are hidden from assistive technology.
- Links and controls have descriptive accessible names.

**Source-level review only**

- The skip link, global visible `:focus-visible` styling, minimum touch-target sizing, reduced-motion handling, and mobile disclosure ARIA state are present.
- Escape handling and focus restoration are implemented for mobile navigation.
- The established navy, slate, white, and blue palette appears to provide suitable contrast, but this was not formally measured in browser tooling.

**Not tested**

- End-to-end keyboard navigation, focus order, 200% zoom, VoiceOver or another screen reader, formal contrast measurement, and operating-system reduced-motion behavior.

## 5. Performance findings

**Verified pass**

- Next.js statically generated `/`, `/_not-found`, and `/projects/askonce`.
- Portrait and AskOnce screenshots use `next/image`, intrinsic dimensions, responsive sizing, and blur placeholders.
- The portrait is preloaded; below-the-fold screenshots retain lazy-loading behavior.
- Only the interactive mobile navigation is a Client Component; portfolio content remains server-rendered.
- No analytics, third-party runtime scripts, data-fetching waterfalls, backend APIs, or unnecessary runtime PDF generation were found.
- The clean production build completed successfully with self-hosted Geist output from `next/font`.

**Not tested**

- Lighthouse and browser performance traces could not be run without a controllable browser. No performance score is claimed.

The font configuration requires network access during a clean build so Next.js can fetch and self-host Geist. This is compatible with the Vercel target but remains relevant for restricted or offline build environments.

## 6. README and cleanup changes

**Verified pass**

- Updated `README.md` to describe the portfolio purpose, implemented routes and sections, stack, resume integration, development and QA commands, resume regeneration, source structure, and deployment status.
- The README does not claim a deployment or invent a production URL.
- Removed only the five verified-unused default scaffold assets: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, and `window.svg`.
- Requests for the removed assets now return the expected HTTP 404.
- Portrait, AskOnce screenshots, favicon, and approved resume remain intact.

## 7. Remaining manual checks

On a Vercel preview, test both routes at 320, 375, 390, 768, 1024, and 1440px:

1. Check horizontal overflow, wrapping, typography, spacing, and media proportions.
2. Exercise the logo, desktop navigation, mobile navigation, section links, CTAs, project links, screenshot links, GitHub, and LinkedIn.
3. Open and close the mobile menu with pointer, Enter, Space, and Escape; verify focus restoration and focus-leave behavior.
4. Download the resume and confirm its filename and two-page content in major browsers.
5. Test keyboard-only navigation, visible focus, 200% zoom, and touch targets.
6. Test landmarks, headings, disclosure state, links, figures, and image descriptions with VoiceOver or another screen reader.
7. Measure contrast and test reduced-motion behavior.
8. Run Lighthouse for performance, accessibility, best practices, and SEO without assuming target scores in advance.

## 8. Pending production-domain SEO work

The final portfolio domain is not confirmed, so the following work is intentionally deferred:

- Add `metadataBase` and canonical URLs.
- Add domain-aware `robots.ts` and `sitemap.ts` for `/` and `/projects/askonce`.
- Add authentic Open Graph and Twitter preview images with absolute URLs.
- Add the confirmed portfolio URL to the resume only through the approved resume workflow, if desired later.
- Verify redirects and metadata on the final domain.

No guessed Vercel URL or custom domain was added.

## 9. Outstanding launch concerns

- **Critical:** None confirmed.
- **High:** None confirmed.
- **Medium:** Domain-dependent canonical, sitemap, robots, and social-preview configuration remains pending.
- **Low:** The current portrait retains a visible SnapEdit watermark. Replace it only with an authentic, unwatermarked original supplied by Naung Naung.
- **Manual validation:** Actual responsive, keyboard, screen-reader, contrast, download, and Lighthouse testing remains required on a controllable preview deployment.
- **Optional follow-up:** A branded not-found page and conservative response-security headers remain non-blocking hardening opportunities from the production-readiness audit.

The approved resume PDF was not regenerated or modified. The portfolio repository remains separate from the AskOnce application.

## 10. Recommendation for Vercel deployment

**Recommendation: Proceed to a new, isolated Vercel preview deployment.**

There are no confirmed build, dependency, routing, asset, resume, credential, or content blockers. Do not reuse or modify an AskOnce Vercel project. Before announcing the site publicly, complete the manual preview checklist, replace the portrait when an authentic unwatermarked original is available, confirm the production domain, and finish domain-dependent SEO configuration.

## Technical verification summary

| Check | Status | Result |
| --- | --- | --- |
| `npm run typecheck` | Verified pass | Completed with exit code 0 |
| `npm run lint` | Verified pass | Completed with exit code 0 |
| `npm run build` | Verified pass | Clean production build completed |
| Static route generation | Verified pass | `/`, `/_not-found`, and `/projects/askonce` generated |
| Production HTTP smoke test | Verified pass | Both application routes and active assets returned HTTP 200 |
| Anchor and heading assertions | Verified pass | All homepage targets exist; hierarchy is sequential |
| New-tab safety assertions | Verified pass | All new-tab links use safe `rel` values |
| Resume parsing and serving | Verified pass | Two A4 pages, selectable text, embedded links, PDF MIME type |
| Approved PDF integrity | Verified pass | SHA-256 remained `f1eae514f3a2b992d4726cdc9ffe56726715c3afe0e738865f54c47114648d` |
| Browser viewport QA | Not tested | No controllable browser surface was available |
| Keyboard/screen-reader QA | Not tested | Requires manual browser and assistive-technology testing |
| Lighthouse | Not tested | Requires a controllable browser or deployed preview |

The production build needed execution outside the restricted sandbox so Turbopack could create its local worker and `next/font/google` could reach the font provider. The build then passed; this was an audit-environment restriction, not an application defect.

## Post-deployment SEO and resume update

Update date: October 29, 2026

**Verified locally in a production build**

- Centralized the confirmed production URL, `https://naungnaung.vercel.app`, for metadata, robots, sitemap, and resume data.
- Added homepage and AskOnce case-study canonical metadata.
- Added absolute Open Graph and Twitter metadata using a 1200 × 630 generated PNG social card.
- Added static `/robots.txt`, `/sitemap.xml`, and `/opengraph-image` routes.
- The sitemap contains only `/` and `/projects/askonce`; no fabricated modification dates were added.
- Regenerated the resume with a clickable portfolio link while preserving two A4 pages, embedded Arial, selectable text, and five expected hyperlinks.
- TypeScript, ESLint, a clean Turbopack production build, local route responses, metadata assertions, and PDF-serving checks passed.

**Verified against the current production deployment before publishing these changes**

- The homepage, AskOnce case study, and resume PDF return HTTP 200.
- The resume is served as `application/pdf`.
- `/robots.txt` and `/sitemap.xml` return HTTP 404 because the new metadata routes have not yet been committed and deployed. This is expected and must be rechecked after the next production deployment.

**Still not tested**

- Browser viewport, keyboard, screen-reader, contrast, and Lighthouse checks remain manual because Chrome computer-use permissions were unavailable.
- Production canonical tags, generated social image, robots, sitemap, and updated resume must be verified again after the unpublished changes reach Vercel.

# Homepage QA — Phase 3, Task 06

## Completed checks

- TypeScript, ESLint, production build, and `git diff --check`: passed.
- Production output statically prerenders `/`.
- Generated HTML: one header, main, footer, and h1; seven ordered sections;
  valid heading hierarchy; unique IDs and valid ARIA references.
- All navigation and CTA fragment destinations exist. No disabled/coming-soon
  controls remain. These checks establish target existence, not scrolling behavior.
- New-tab links contain `noopener noreferrer` and announce the new tab.
- Previous Experience uses native, initially collapsed `details`/`summary`.
- English document language, title, description, Open Graph, and Twitter metadata
  are present. One font asset is preloaded from the local Next.js output.
- No authored third-party scripts, tracking, contact form, or email link.
- Reviewed text color pairs meet WCAG AA normal-text contrast. Lowest calculated
  ratio is 6.16:1 (blue on the pale blue status background). White text on the blue
  primary button is 6.70:1. This is a token calculation, not a rendered-page audit.
- Supplied career dates, overlapping roles, independent-development descriptions,
  technologies, education, nationality, residence, and employment preferences
  remain consistent. No additional accomplishments or contact facts were added.
- Public URL probes: GitHub, AskOnce website, and AskOnce demo returned HTTP 200.
  LinkedIn returned HTTP 999 to the automated request; browser verification remains
  required. An HTTP result does not establish that an application flow works.

## Browser verification limitation

Computer Use reported **“Computer Use permissions are not granted”** and exposed
no browser tabs. No viewport, keyboard, screen-reader, runtime interaction,
horizontal-overflow, CLS, or Lighthouse result is claimed.

| Viewport width | Live browser result |
| --- | --- |
| 320px | Not tested |
| 375px | Not tested |
| 390px | Not tested |
| 768px | Not tested |
| 1024px | Not tested |
| 1440px | Not tested |

## Manual acceptance checklist

Run `npm run dev`, then use browser responsive mode for every width above.

- [ ] Inspect the complete page at each width. Verify no sideways scrolling,
      clipped text, overlapping cards, or clipped focus outlines. Pay attention to
      the status label, long experience title, project details, and education name.
- [ ] Check Education/Contact whitespace and footer balance. Inspect narrow-width
      button stacking, skill badges, timeline readability, and tablet card layouts.
- [ ] Follow Home, About, Skills, Experience, Projects, Education, and Contact.
      Check the correct heading stays visible below the sticky header, including
      after opening a direct `/#section` URL and reloading.
- [ ] Confirm Header “Let's Connect” reaches Contact and “View My Work” reaches
      Projects. Confirm Hero “Let's Connect” still opens the supplied LinkedIn URL.
- [ ] Below 1024px, open/close the mobile menu by pointer and keyboard. Check
      `aria-expanded` changes, Escape closes and restores focus, selecting a link
      closes the menu, and Tab/Shift+Tab leaving the menu dismisses it.
- [ ] Resize from an open mobile menu to desktop and back. Confirm desktop links
      replace the menu and the menu does not reopen on returning to mobile.
- [ ] Use Tab from page load: verify the skip link, visible focus, logical order,
      and access to every action without a keyboard trap.
- [ ] Expand/collapse Previous Experience with pointer, Enter, and Space. Check
      closed content is excluded from keyboard/screen-reader navigation.
- [ ] Follow GitHub, LinkedIn, Live Website, and Explore Demo. Confirm destinations,
      new-tab announcements, and browser Back behavior for same-tab links.
- [ ] Check at 200% zoom, with increased text size, and with reduced motion enabled.
      Verify the mobile menu can scroll in a short landscape viewport.
- [ ] With a screen reader, check landmarks, headings, lists, links, disclosure
      state, and mobile menu state.
- [ ] Reload with cache disabled and throttled networking. Inspect font swapping
      and layout shifts; run Lighthouse if quantitative performance is required.

## Follow-up configuration

A final portfolio domain has not been supplied. Canonical URL, Open Graph URL,
and a dedicated social-preview image remain unconfigured rather than fabricated.
The existing Google font setup needs network access on an uncached build.

Turbopack requires a local worker socket. Production verification passed outside
this environment's sandbox; restricted runs previously failed with
`binding to a port: Operation not permitted (os error 1)`.

## Files changed

- `src/components/sections/education.tsx`, `contact.tsx`: reduced large-screen padding.
- `src/components/layout/site-header.tsx`: standard section links and a 44px logo target.
- `src/components/layout/mobile-navigation.tsx`: standard links retaining close handlers.
- `src/components/sections/hero.tsx`: direct Projects link; removed obsolete lookup.
- `src/data/navigation.ts`: removed completed-section availability flags.
- `src/components/navigation/section-link.tsx`: removed obsolete client wrapper.
- `src/app/layout.tsx`, `globals.css`: removed unused Geist Mono loading and disabled-link styling.
- `README.md`: updated the homepage status and QA documentation link.
- `docs/homepage-qa.md`: QA evidence, limitations, and manual acceptance checklist.

# Changelog

All notable changes to uw.joechamdani.com, newest first. Dates are commit or merge dates from git history, in Pacific time (America/Los_Angeles).

## Next

### Changed
- Build tooling: Vite 5 to 6.4.5. npm audit goes from 6 findings to 4 (the Vite and esbuild dev server advisories are cleared). The built site is unchanged.

## [3.0.1] - 2026-10-23

### Changed
- The About section's badges drop "90 Credits Transferred" (565aa65)

## [3.0.0] - 2026-10-23

A redesign of the whole site as an academic profile. [PR #1](https://github.com/JosephDavisC/Portfolio-Academic/pull/1) merged 22 Oct (6b0dc1e) and was deployed. The version is dated 23 Oct, the day the follow ups landed:

- 3492260 (22 Oct): full Associate in Arts degree name and the current academic resume, also deployed
- 777e973 and cc46b40 (23 Oct): a 60 fps reel of the site and a rewritten README
- 7eef91b (23 Oct): the Umami snippet measures page speed
- [PR #2](https://github.com/JosephDavisC/Portfolio-Academic/pull/2) (23 Oct): this changelog, the build check, and the analytics hash tweak

### Added
- Research and Recognition section with a nav link: the three Sector industry research reports and the INFO 300 proposal, honors and awards, teaching and service
- Autumn 2026 coursework, marked in progress: INFO 351, INFO 356, INFO 370, ARCH 151
- Skip link and a `<main>` landmark
- ORCID, UW and Information School affiliation, Bellevue College, research areas and honors in the Person structured data
- README rewritten with a 60 fps reel of the site
- Build check on pull requests and pushes to main (GitHub Actions: type check, SEO fallback guard, production build)

### Changed
- Hero redesigned as an academic profile: portrait card, one line research focus, quick facts row (GPA, Dean's List, research reports), and buttons for research, resume and ORCID. The Personal Mode hover still works
- Coursework redesigned as a quarter by quarter record with a summary strip, area filters, one card per quarter and colour coded department badges
- Matches joechamdani.com: circle reveal theme switch, WCAG AA contrast in both themes, slide in nav underlines, button and theme toggle hover motion. Court Dark is now #2A7310, the main site value
- Facts refreshed: Whitespace dates Jul to Sep 2026, senior standing, Dean's List every quarter, Annual Dean's List 2025 to 2026, mirrored in the noscript fallback and llms.txt
- Bellevue College degree shown with its full Associate in Arts name, and the resume download replaced with the current academic resume (3492260, 22 Oct 2026)
- Sharper meta description, mirrored to Open Graph and Twitter; sitemap lastmod 2026-10-23
- Umami snippet now also measures page speed, with auto pageviews still off so the manual pageview dedupe keeps working (7eef91b, 23 Oct 2026), and ignores the `#` part of URLs (`data-exclude-hash`, PR #2)

### Security
- `npm audit fix` took known advisories from 29 (1 critical) to 13 (0 critical). The 13 left all need Vite or React Router major upgrades, planned together with the main site
- Removed unused `lovable-tagger` and `@tailwindcss/typography`
- The Vite dev server binds to localhost only

### Also since 2.1.0 (24 Aug 2026, no version number at the time)
- Self hosted Umami analytics with manual pageviews and custom events for project links and contact form submits; CSP updated to allow the analytics host
- Static fallback content inside the root element so crawlers and AI readers that do not run JavaScript see the page, plus fixes for soft 404s
- Faster theme transition (0.18s) and 44px minimum touch targets on project card buttons

## [2.1.0] - 2026-08-19

### Changed
- Dark mode aligned with the main portfolio: all gradients replaced with solid neon blue accents on buttons, underlines, scroll progress, and the 404 page
- About section redesigned: scribble underlined heading, stat chips, education timeline, internship history, and research interests with links to the INFO 300 proposal and ORCID
- Coursework restructured by quarter (Autumn 2025 through Spring 2026) with Dean's List notes, in a two column card layout
- Readability pass: larger section spacing, calmer heading scale, wider line height, better secondary text contrast in dark mode
- NotFound page made theme aware
- Content updated against the current resume and UW transcript

### Added
- Spring 2026 courses: INFO 330, INFO 498, CSE 373, ARCH 150
- INFO 498 project cards: Resonance game concept and Witcher 3 UX makeover
- Light and dark site previews in the README

### Removed
- EmailJS dependency and configuration (contact form now uses the shared PHP backend)
- Unused data files, stale lockfile, and scaffold leftovers

## Between 1.0.0 and 2.1.0 (Nov 2025 to Mar 2026, unversioned)

No 2.0.0 entry was ever written, and no commit in this range is marked as a release.

- New logo and favicon (26 Nov 2025)
- Project cards reordered with new project images (2 Dec 2025)
- INFO 201 final report and code pages hosted on the site (4 Dec 2025)
- Dependency vulnerability fixes (6 Dec 2025)
- Profile photo and 404 handling fixes (7 Dec 2025)
- INFO 200 and INFO 300 project updates, with the INFO 300 research proposal PDF (8 Dec 2025)
- Coursework section update and a dedicated INFO 300 research proposal page (21 Dec 2025)
- Web manifest, code splitting, and a more reliable FTP deploy script (31 Dec 2025)
- Redesign to the dual theme neobrutalist look of joechamdani.com, with a theme toggle (28 Jan 2026)
- Security headers (HSTS, CSP, X-Frame-Options, Permissions-Policy) and a status link on the 404 page (14 Feb 2026)
- INFO 340, INFO 360 and INFO 380 projects added, the INFO 300 page made dual theme, and the contact form moved from EmailJS to the shared PHP backend at joechamdani.com (f7e3de9, 29 Mar 2026)

## [1.0.0] - 2025-11-25

The original entry said 2025-01-25. The first commit and the GitHub release are both dated 25 Nov 2025, so the date is corrected here.

### Added
- Initial release of academic portfolio website
- Hero section with UW branding and profile picture
- About section highlighting academic background and interests
- Coursework section showcasing UW and Bellevue College courses
  - 3 featured UW Informatics courses (INFO 200, 201, 300)
  - 3 featured BC courses (CS 210/211, MATH 238, BA 240)
  - Expandable section showing all 20+ Bellevue College courses
- Academic Projects section featuring 3 current projects:
  - INFO 200: Transfer Evaluation System
  - INFO 201: AI Job Market & LLM Growth Analysis
  - INFO 300: Human Judgment vs. AI Alerts Research
- Contact section with EmailJS integration
- Professional links (Email, LinkedIn, GitHub, ORCID)
- Responsive layout optimized for mobile, tablet, and desktop
- Modern dark theme with blue-to-red gradient accents
- Smooth scroll navigation with active section tracking
- "Switch to Personal Mode" button linking to main portfolio

### Technical
- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- React Helmet for SEO optimization
- Vite as build tool
- EmailJS for contact form
- Custom scroll components (ScrollProgress, ScrollToTop, ScrollUpButton)


[3.0.1]: https://github.com/JosephDavisC/Portfolio-Academic/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/JosephDavisC/Portfolio-Academic/compare/4c6aa5c...v3.0.0
[2.1.0]: https://github.com/JosephDavisC/Portfolio-Academic/commit/4c6aa5c
[1.0.0]: https://github.com/JosephDavisC/Portfolio-Academic/releases/tag/v1.0.0

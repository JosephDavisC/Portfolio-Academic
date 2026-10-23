<a href="https://uw.joechamdani.com" target="_blank">
  <img src="public/Joseph-Academic-Logo.png" alt="Joseph Davis Chamdani academic logo" width="120" align="left"/>
</a>

# Joseph Davis Chamdani · Academic Portfolio

[![Website](https://img.shields.io/badge/Website-uw.joechamdani.com-6f42c1?style=for-the-badge&logo=vercel&logoColor=white)](https://uw.joechamdani.com)
[![Updated](https://img.shields.io/badge/Updated-Oct_2026-4CBB17?style=for-the-badge)](https://github.com/JosephDavisC/Portfolio-Academic/pull/1)

---

## About

This is the academic portfolio of **Joseph Davis Chamdani**, an **Informatics senior at the University of Washington** (Class of 2027). It collects his research and writing, honors, coursework and class projects in one place, for professors, admissions readers and recruiters.

Professional experience, client work and writing live on his personal site, [joechamdani.com](https://joechamdani.com).

Live site: **[uw.joechamdani.com](https://uw.joechamdani.com)**

<a href="https://uw.joechamdani.com">
  <img src=".github/readme/reel.avif" alt="Scrolling through the hero, About, Research and Recognition and Coursework sections in light mode, switching to dark mode with a circle reveal from the toggle, and scrolling back up">
</a>

<sub>Recorded frame by frame at 60 fps from a production build.</sub>

---

## Highlights

- **Academic profile.** UW Informatics with a 3.96 GPA and the Dean's List every quarter, after an Associate in Arts (Direct Transfer Agreement) at Bellevue College with 90 credits transferred.
- **Research and writing.** Three industry research reports published by Sector under its SectorONE research brand, clearly labelled as not peer reviewed, plus the INFO 300 research proposal on how people trust AI scam alerts compared to human ones.
- **Honors.** Annual Dean's List 2025 to 2026, the Alan R. Spence Transfer Support Fund, 1st place at the Anthropic Claude Hackathon at UW, and the Norman and Camille Stromer Scholarship from the Bellevue College Foundation.
- **Teaching and service.** Technical Officer at SWECC, an invited lecture on running BC Hacks 2024, and leadership of the Bellevue College Tech Club.
- **Coursework record.** A quarter by quarter ledger of UW courses from Autumn 2025 through Autumn 2026, with area filters and department badges, followed by Bellevue College coursework.
- **Academic projects.** Eight class projects across INFO 200, 201, 300, 340, 360, 380 and 498, each linked to its code, live demo or report.
- **Research interests.** AI security, applied AI in education, human AI interaction and the reliability of systems people depend on.

---

## Design

The site shares its design system with [joechamdani.com](https://joechamdani.com), so the two read as one body of work.

- **Two themes.** A warm paper light mode with Court Green `#4CBB17` and Espresso `#3D2B1F`, and a deep slate dark mode with neon blue accents and glass cards.
- **Circle theme switch.** The new theme is revealed as a circle growing from the toggle, in a single View Transition. It falls back to an instant swap under reduced motion.
- **WCAG AA contrast** in both themes, using the same fixes as the main site.
- **Neobrutalist details.** Offset shadows, scribble underlines and restrained hover motion.

---

## Tech Stack

- **React 18 + TypeScript**: frontend
- **Vite**: build tool
- **Tailwind CSS**: styling, with class based dark mode
- **Framer Motion**: animations
- **React Router**: client side routing
- **React Helmet Async**: per page meta tags
- **Radix UI (shadcn/ui)** and **Lucide React**: components and icons
- **Umami** (self hosted): privacy friendly analytics
- **Hostinger**: hosting, deployed over FTP

---

## Project Structure

```
src/
 ├── components/
 │    ├── sections/        # Hero, About, Recognition, Portfolio, Coursework, Contact
 │    ├── shared/          # Navbar (with skip link), Footer, ContactForm, scroll helpers
 │    ├── ui/              # shadcn/ui primitives
 │    └── ThemeToggle.tsx
 ├── context/              # ThemeContext: theme state and the circle reveal
 ├── lib/                  # track.ts (analytics events), utils
 └── pages/                # Index, ProjectInfo300, NotFound

public/
 ├── projects/             # Project images, INFO 201 report and INFO 300 proposal pages
 ├── media/                # Resume PDF
 ├── llms.txt              # Site summary for AI readers
 ├── sitemap.xml, robots.txt, 404.html
 └── .htaccess             # Security headers, clean URLs, real 404 status

scripts/
 ├── check-seo-fallback.js # Build guard: crawler fallback and llms.txt match the components
 └── deploy-ftp.js         # FTP deploy with retries and reconnects
```

---

## Accessibility and SEO

- **Skip link** to `<main id="main-content">`, and a theme switch that respects reduced motion.
- **AA contrast** in light and dark mode.
- **Crawler fallback.** `index.html` carries a static copy of the site's content for crawlers and AI readers that do not run JavaScript. It is stripped in development and replaced by React in the browser.
- **Build guard.** `scripts/check-seo-fallback.js` runs before every build and fails it if the fallback or `llms.txt` drifts from the components: research interests, project cards, course codes and the hero markup.
- **`llms.txt`** summarizes the site, its scope and the sources of truth for AI assistants.
- **JSON-LD** describes the person, the website and both schools, including ORCID, honors and research areas.
- **Real 404s.** Unknown paths return a 404 status instead of a soft 404 to the homepage.

---

## Setup

```bash
git clone https://github.com/JosephDavisC/Portfolio-Academic.git
cd Portfolio-Academic
npm install
npm run dev      # local dev server on localhost:8080
npm run build    # production build, runs the SEO fallback guard first
```

The contact form posts to the shared backend at `joechamdani.com/api/contact.php` and needs no local setup.

---

## Version history

- **Oct 2026**: academic refresh ([#1](https://github.com/JosephDavisC/Portfolio-Academic/pull/1)). Hero redesigned as an academic profile, new Research and Recognition section, Coursework rebuilt as a quarter ledger for Autumn 2026, circle theme switch, AA contrast, skip link and richer structured data
- **Aug 2026**: crawler fallback with its build guard, real 404s and Umami analytics
- **Aug 2026 (v2.1)**: dark mode aligned with the main site, About redesign and a content refresh ([CHANGELOG](CHANGELOG.md))
- **Mar 2026**: INFO 340, 360 and 380 projects, and the dual theme design
- **Feb 2026**: security headers (HSTS, CSP, Permissions-Policy)
- **Jan 2026**: site redesign
- **Nov 2025 (v1.0)**: first release, with INFO 200, 201 and 300 projects added in December

---

## License

Content and design are personal work. Feel free to reference the code, but please do not republish the content as your own.

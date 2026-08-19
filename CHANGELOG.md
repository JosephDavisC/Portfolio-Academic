# Changelog

All notable changes to this project will be documented in this file.

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

## [1.0.0] - 2025-01-25

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


[1.0.0]: https://github.com/JosephDavisC/portfolio-academic/releases/tag/v1.0.0

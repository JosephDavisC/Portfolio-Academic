<a href="https://uw.joechamdani.com" target="_blank">
  <img src="https://uw.joechamdani.com/Joseph-Academic-Logo.png" alt="Joseph Davis Chamdani Logo" width="120" align="left"/>
</a>

# Joseph Davis Chamdani – Academic Portfolio

[![Website](https://img.shields.io/badge/Website-uw.joechamdani.com-6f42c1?style=for-the-badge&logo=vercel&logoColor=white)](https://uw.joechamdani.com)


---

## About

This is my **academic portfolio website** showcasing my coursework, research, and projects from the **University of Washington** and **Bellevue College**.

The site highlights my journey as an **Informatics student @ UW**, featuring academic projects, course history, and research work in AI, data science, and software engineering.

- Live Site: **[uw.joechamdani.com](https://uw.joechamdani.com)**
- Personal Portfolio: **[joechamdani.com](https://joechamdani.com)**

---

## Tech Stack

- **React (TypeScript)** – Frontend framework
- **TailwindCSS** – Styling
- **Framer Motion** – Animations
- **Lucide React Icons** – Icons
- **Vite** – Build tool
- **React Router** – Client-side routing
- **React Helmet** – SEO meta tags management
- **EmailJS** – Contact form email integration
- **Hostinger** – Hosting

---

## Project Structure

```
src/
 ├── components/       # Reusable React components
 │    ├── sections/   # Main page sections
 │    │    ├── Hero.tsx
 │    │    ├── About.tsx
 │    │    ├── Coursework.tsx
 │    │    ├── Portfolio.tsx
 │    │    └── Contact.tsx
 │    └── shared/     # Shared components
 │         ├── Navbar.tsx
 │         ├── Footer.tsx
 │         ├── ContactForm.tsx
 │         ├── ScrollProgress.tsx
 │         ├── ScrollToTop.tsx
 │         └── ScrollUpButton.tsx
 │
 ├── hooks/            # Custom React hooks
 ├── lib/              # Utilities
 ├── pages/            # Page-level components
 │    ├── Index.tsx   # Homepage
 │    └── NotFound.tsx
 ├── App.tsx           # Main app entry with routing
 └── main.tsx          # Vite bootstrap

public/
 ├── logos/            # University logos
 ├── media/            # Media files (resume, etc.)
 └── cursors/          # Custom cursor assets

scripts/
 └── deploy-ftp.js     # FTP deployment script
```

---

## Features

- **Hero Section** with profile and university branding
- **About Section** highlighting academic background
- **Coursework Section** showing UW and Bellevue College courses
- **Academic Projects** showcasing current research and coursework
- **Contact Form** with EmailJS integration and auto-reply
- **Professional Links** (Email, LinkedIn, GitHub, ORCID)
- **Dark theme + glassmorphism design**
- **Fully responsive** layout for all devices
- **SEO optimized** with Open Graph tags
- **Smooth scroll** navigation and progress indicator

---

## Screenshots

### Home Section

![Home](public/media/preview-website.png)

---

## Setup & Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/JosephDavisC/portfolio-academic.git
cd portfolio-academic
npm install
```

### Environment Variables

For the contact form to work, create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Deployment

This site is deployed on **Hostinger** with a custom subdomain: [uw.joechamdani.com](https://uw.joechamdani.com).
You can also easily deploy it on either **Vercel** or **Netlify**.

---

**Note:** Some browser extensions (e.g. Better Campus, readability tools) may alter the site's appearance.
For the best experience, please view with extensions disabled or whitelist this site.

---

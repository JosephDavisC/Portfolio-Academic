import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlaskConical, Zap, Download, ArrowUpRight } from "lucide-react";

const HEADER_OFFSET = 88;

function scrollToIdNoHash(id: string, tries = 0) {
  const el = document.getElementById(id);
  if (!el) {
    if (tries < 20) requestAnimationFrame(() => scrollToIdNoHash(id, tries + 1));
    return;
  }
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
  window.history.replaceState(null, "", "/");
}

// Hand-drawn scribble underline SVG
const ScribbleUnderline = () => (
  <svg
    className="absolute -bottom-2 left-0 w-full h-3"
    viewBox="0 0 200 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M2 8C30 4 60 10 100 6C140 2 170 9 198 5"
      className="stroke-court dark:stroke-[#60A5FA] transition-colors duration-300"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Entry animations are intentionally disabled (initial={false}) on the four
 * top-level blocks below. index.html paints a pixel-matched static copy of this
 * hero before React mounts, so animating in from opacity 0 would make the same
 * content blink out and fade back. Scroll animations elsewhere are unaffected.
 */
const facts = [
  { label: "GPA", value: "3.96" },
  { label: "Honors", value: "Dean's List, every quarter" },
  { label: "Research", value: "3 reports" },
];

const Hero = () => {
  const [isHoveringProfile, setIsHoveringProfile] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-28 pb-20 relative bg-paper dark:bg-[#141B2D]">
      {/* Subtle mesh gradient background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-court/20 dark:bg-[#60A5FA]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-16 items-center">
          {/* Left */}
          <motion.div className="text-left" initial={false} animate={{ opacity: 1, x: 0 }}>
            <p className="font-mono text-sm text-espresso/70 dark:text-slate-400 mb-5">
              Academic portfolio · UW Information School
            </p>

            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-espresso dark:text-slate-100 leading-[1.02] tracking-tight">
              Joseph Davis{" "}
              <span className="relative inline-block">
                Chamdani
                <ScribbleUnderline />
              </span>
            </h1>

            <p className="mt-7 text-xl md:text-2xl text-espresso/80 dark:text-slate-300 leading-snug">
              Informatics senior at the{" "}
              <a
                href="https://www.washington.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-court-dark dark:text-[#60A5FA] hover:text-court dark:hover:text-[#93C5FD] font-semibold underline decoration-2 decoration-court/50 dark:decoration-[#60A5FA]/50 underline-offset-4 transition-colors"
              >
                University of Washington
              </a>
              , Class of 2027.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-espresso/70 dark:text-slate-400 max-w-xl">
              I study how people trust AI systems, and build tools that make AI safer and institutions easier to navigate.
            </p>

            <dl className="mt-7 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 sm:flex sm:gap-0 sm:divide-x-2 divide-espresso/15 dark:divide-white/10 font-mono text-sm">
              {facts.map((f, i) => (
                <div key={f.label} className={`contents sm:block ${i === 0 ? "sm:pr-6" : "sm:px-6"}`}>
                  <dt className="text-espresso/70 dark:text-slate-400">{f.label}</dt>
                  <dd className="text-lg md:text-xl font-semibold text-espresso dark:text-slate-100">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href="#research"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToIdNoHash("research");
                }}
                className="btn-brutal inline-flex items-center justify-center gap-2.5 group"
              >
                <FlaskConical className="h-5 w-5 transition-transform group-hover:-rotate-12" />
                View research
              </a>
              <a
                href="media/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal-outline inline-flex items-center justify-center gap-2.5 group"
              >
                <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                Download resume
              </a>
              <a
                href="https://orcid.org/0009-0003-3880-8443"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center justify-center gap-1.5 self-center px-2 font-mono text-sm font-semibold text-espresso/80 dark:text-slate-300"
              >
                ORCID
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Right: portrait card with a degree caption */}
          <motion.div className="flex justify-center lg:justify-end" initial={false} animate={{ opacity: 1, x: 0 }}>
            <div
              className="relative"
              onMouseEnter={() => setIsHoveringProfile(true)}
              onMouseLeave={() => setIsHoveringProfile(false)}
            >
              <div className="relative w-72 h-[22rem] md:w-[23rem] md:h-[28.5rem] rounded-2xl overflow-hidden border-4 border-espresso dark:border-white/15 shadow-brutal-lg dark:shadow-none">
                <img
                  src="/Joseph_Chamdani.jpg"
                  alt="Joseph Davis Chamdani"
                  className="h-full w-full object-cover object-top"
                  fetchPriority="high"
                />

                {/* Personal Mode overlay */}
                <AnimatePresence>
                  {isHoveringProfile && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute inset-0 bg-espresso/80 dark:bg-slate-900/85 backdrop-blur-sm flex items-center justify-center"
                    >
                      <motion.a
                        href="https://joechamdani.com"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-paper dark:bg-slate-800 border-2 border-espresso dark:border-[#60A5FA] rounded-lg font-medium shadow-brutal dark:shadow-none text-espresso dark:text-slate-100"
                        aria-label="Switch to Personal Mode: view my personal portfolio"
                      >
                        <Zap className="h-5 w-5 dark:text-[#60A5FA]" />
                        <span>Personal Mode</span>
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Degree caption */}
              <div className="absolute -bottom-6 -left-6 md:-left-10 flex items-center gap-3 rounded-xl border-2 border-espresso dark:border-white/15 bg-paper dark:bg-[#1b2438] px-4 py-3 shadow-brutal-sm dark:shadow-none">
                <img src="/logos/UW_Logo.png" alt="" className="h-9 w-9 rounded-full bg-white p-1" />
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-espresso dark:text-slate-100">BS Informatics</p>
                  <p className="font-mono text-xs text-espresso/70 dark:text-slate-400">Seattle, WA · 2025 to 2027</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

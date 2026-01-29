import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Database, FlaskConical, BookOpen, Zap } from "lucide-react";

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

const Hero = () => {
  const [isHoveringProfile, setIsHoveringProfile] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative bg-paper dark:bg-[#141B2D]">
      {/* Subtle mesh gradient background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-court/20 dark:bg-[#60A5FA]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-espresso/5 dark:bg-slate-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              {/* Name with scribble underline */}
              <div className="mb-6">
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-espresso dark:text-slate-100 leading-tight tracking-tight">
                  Joseph Davis{" "}
                  <span className="relative inline-block">
                    Chamdani
                    <ScribbleUnderline />
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-2xl md:text-3xl text-espresso/80 dark:text-slate-300 mb-4 font-light">
                Informatics Student @{" "}
                <a
                  href="https://www.washington.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-court-dark dark:text-[#60A5FA] hover:text-court dark:hover:text-[#93C5FD] font-medium underline decoration-2 decoration-court/50 dark:decoration-[#60A5FA]/50 underline-offset-4 transition-colors"
                >
                  University of Washington
                </a>
              </p>

              <p className="text-lg text-espresso/60 dark:text-slate-400 max-w-2xl leading-relaxed mb-6 font-mono">
                Academic portfolio showcasing coursework, research, and projects
              </p>

              {/* Tags */}
              <div className="flex items-center gap-3 flex-wrap">
                <motion.span
                  className="inline-flex items-center gap-2 px-4 py-2 bg-court/10 dark:bg-[#60A5FA]/10 border-2 border-court/30 dark:border-[#60A5FA]/30 rounded-full text-court-dark dark:text-[#60A5FA] font-mono text-sm shadow-brutal-sm dark:shadow-none"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Database className="h-4 w-4" />
                  Data Science & AI
                </motion.span>
                <motion.span
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 dark:bg-purple-400/10 border-2 border-purple-500/30 dark:border-purple-400/30 rounded-full text-purple-600 dark:text-purple-400 font-mono text-sm shadow-brutal-sm dark:shadow-none"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <FlaskConical className="h-4 w-4" />
                  Research Focus
                </motion.span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToIdNoHash("portfolio");
                }}
                className="btn-brutal inline-flex items-center justify-center group"
                whileHover={{ scale: 1.02, x: -2, y: -2 }}
                whileTap={{ scale: 0.98, x: 2, y: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="View Academic Projects"
              >
                <BookOpen className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
                View Academic Projects
              </motion.a>

              <motion.a
                href="media/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal-outline inline-flex items-center justify-center group"
                whileHover={{ scale: 1.02, x: -2, y: -2 }}
                whileTap={{ scale: 0.98, x: 2, y: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="Download Resume"
              >
                <svg className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative group/profile"
              onMouseEnter={() => setIsHoveringProfile(true)}
              onMouseLeave={() => setIsHoveringProfile(false)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* UW Badge */}
              <motion.div
                className="absolute -top-4 -left-4 w-14 h-14 rounded-full flex items-center justify-center z-20 border-2 border-espresso shadow-brutal overflow-hidden bg-white"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <img src="/logos/UW_Logo.png" alt="University of Washington" className="w-full h-full object-cover" />
              </motion.div>

              {/* Profile Image */}
              <div className="relative">
                <Avatar className="w-80 h-80 md:w-96 md:h-96 border-4 border-espresso shadow-brutal-lg relative z-10 transition-all duration-300">
                  <AvatarImage src="/Joseph_Chamdani.jpg" alt="Joseph Chamdani" className="object-cover object-top" />
                  <AvatarFallback className="text-6xl font-heading font-bold bg-court text-paper">
                    JC
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Personal Mode Overlay */}
              <AnimatePresence>
                {isHoveringProfile && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 rounded-full bg-espresso/80 dark:bg-slate-900/85 backdrop-blur-sm flex items-center justify-center z-30"
                  >
                    <motion.a
                      href="https://joechamdani.com"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-paper dark:bg-slate-800 border-2 border-espresso dark:border-[#60A5FA] rounded-lg font-medium shadow-brutal dark:shadow-none dark:ring-1 dark:ring-[#60A5FA]/50 hover:shadow-brutal-lg dark:hover:ring-2 transition-all duration-200 text-espresso dark:text-slate-100"
                      aria-label="Switch to Personal Mode - View my personal portfolio"
                    >
                      <Zap className="h-5 w-5 dark:text-[#60A5FA]" />
                      <span>Personal Mode</span>
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Academic Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center z-20 border-2 border-espresso shadow-brutal"
                whileHover={{ scale: 1.1, rotate: 12 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <BookOpen className="w-8 h-8 text-white" strokeWidth={2.5} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

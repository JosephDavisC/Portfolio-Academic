import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HEADER_OFFSET = 88; // match your fixed navbar height

function scrollToIdNoHash(id: string, tries = 0) {
  const el = document.getElementById(id);
  if (!el) {
    if (tries < 20) requestAnimationFrame(() => scrollToIdNoHash(id, tries + 1));
    return;
  }
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
  window.history.replaceState(null, "", "/"); // keep URL clean (no #hash)
}

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      {/* soft bg glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-blue-600/10 to-red-600/5 backdrop-blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent">
                  Joseph Davis Chamdani
                </h1>
              </div>

              <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
                Informatics Student @{" "}
                <a
                  href="https://www.washington.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent hover:underline"
                >
                  University of Washington
                </a>
              </p>

              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-6">
                Academic portfolio showcasing coursework, research, and projects from UW and Bellevue College
              </p>

              <div className="flex items-center gap-4 text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="text-lg">📚</span>
                  Data Science & AI
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">🔬</span>
                  Research Focus
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* View Academic Projects */}
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToIdNoHash("portfolio");
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 rounded-full hover:from-blue-700 hover:to-red-700 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1"
                aria-label="View Academic Projects"
              >
                <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                View Academic Projects
              </a>

              {/* Download Resume */}
              <a
                href="media/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20"
                aria-label="Download Resume"
              >
                <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group/profile">
              {/* UW Logo */}
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl z-20 transition-transform duration-300 group-hover/profile:scale-110 group-hover/profile:-translate-y-1">
                <img src="logos/UW_Logo.png" alt="University of Washington" className="w-10 h-10 object-contain" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 rounded-full blur-3xl opacity-20 animate-pulse group-hover/profile:opacity-30 transition-opacity" />

              <Avatar className="w-80 h-80 md:w-96 md:h-96 border-4 border-white/20 shadow-2xl relative z-10 transition-all duration-300 group-hover/profile:scale-105 group-hover/profile:border-white/30 group-hover/profile:shadow-blue-500/20">
                <AvatarImage src="/Joseph_Chamdani.jpg" alt="Joseph Chamdani" className="object-cover object-top" />
                <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-blue-600 to-red-600 text-white">
                  JC
                </AvatarFallback>

                {/* Hover Overlay with Switch Button */}
                <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover/profile:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 pointer-events-none group-hover/profile:pointer-events-auto">
                  <motion.a
                    href="https://joechamdani.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-md border border-white/20 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2 opacity-0 group-hover/profile:opacity-100"
                    initial={{ y: 8 }}
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    aria-label="Switch to Personal Mode"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-sm font-semibold whitespace-nowrap">Switch to Personal Mode</span>
                  </motion.a>
                </div>
              </Avatar>

              {/* Academic Icon */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl z-20 transition-all duration-300 group-hover/profile:scale-110 group-hover/profile:rotate-12 group-hover/profile:animate-bounce">
                <span className="text-3xl">📚</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

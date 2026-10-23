import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Lightbulb } from "lucide-react";

const stats = ["GPA 3.96", "Dean's List every quarter", "90 Credits Transferred", "Class of 2027"];

const roles = [
  {
    role: "AI Product Intern",
    company: "Whitespace Solutions",
    dates: "Jul 2026 to Sep 2026",
    blurb: "Product and engineering for an AI sales coaching platform: competitive analysis, feature work, pre-launch QA, live demos."
  },
  {
    role: "AI R&D Intern",
    company: "Sector Cybersecurity",
    dates: "Aug 2025 to Feb 2026",
    blurb: "Built an AI vulnerability classification system used across pen testing engagements and wrote 3 research reports that Sector published."
  },
  {
    role: "AI Engineer Intern",
    company: "Stockbit",
    dates: "Jul 2024 to Sep 2024",
    blurb: "Shipped an OCR KYC pipeline and fraud detection models to production, serving 10K+ documents daily."
  }
];

const interests = [
  "AI security and red teaming: finding where language models fail, and building tooling that surfaces those failures automatically",
  "Applied AI in education, especially systems that make institutional processes like credit transfer legible to the students they affect",
  "Human AI interaction: how people read, trust, and override automated decisions, and what an interface owes them when a model is uncertain",
  "Building AI products end to end, from problem framing through evaluation to the parts that break in production",
  "Reliability of systems people depend on, including monitoring, failure modes, and the distance between something working and something being watched",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 px-6 bg-paper-dark/50 dark:bg-black/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-espresso dark:text-slate-100">
            From Bellevue to the{" "}
            <span className="underline-scribble">iSchool</span>
          </h2>
          <p className="text-espresso/60 dark:text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed font-mono">
            Informatics senior @ UW. AI, product, and how people actually use them.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-7">
            {stats.map((stat) => (
              <span
                key={stat}
                className="px-3.5 py-1.5 text-xs font-mono font-medium bg-court/15 dark:bg-[#60A5FA]/15 text-court-dark dark:text-[#60A5FA] rounded-full border-2 border-court/40 dark:border-[#60A5FA]/40"
              >
                {stat}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Two Column Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* The Journey Card */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="card-brutal p-8 md:p-10"
          >
            <header className="flex items-center mb-7">
              <div className="w-12 h-12 rounded-full bg-court/20 dark:bg-[#60A5FA]/20 border-2 border-court dark:border-[#60A5FA] flex items-center justify-center mr-4">
                <MapPin className="h-6 w-6 text-court-dark dark:text-[#60A5FA]" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-espresso dark:text-slate-100">The Journey</h3>
            </header>

            <ol className="relative border-l-2 border-espresso/20 dark:border-white/15 ml-5 space-y-9 pb-1">
              <li className="pl-8 relative">
                <span className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-white border-2 border-espresso dark:border-white/20 flex items-center justify-center overflow-hidden">
                  <img src="/logos/UW_Logo.png" alt="University of Washington" className="w-8 h-8 object-contain" />
                </span>
                <div className="flex items-baseline gap-3 flex-wrap mb-1">
                  <h4 className="text-lg font-heading font-semibold text-espresso dark:text-white">University of Washington</h4>
                </div>
                <p className="font-mono text-xs text-espresso/50 dark:text-slate-400 mb-2">BS in Informatics · 2025 to 2027</p>
                <p className="text-espresso/70 dark:text-slate-300 text-[15px] leading-relaxed max-w-[60ch]">
                  Senior at the iSchool with a 3.96 GPA, on the Dean's List every quarter and the Annual Dean's List for 2025 to 2026. Coursework across databases, data structures, client side development, design methods, and research methods.
                </p>
              </li>
              <li className="pl-8 relative">
                <span className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-white border-2 border-espresso dark:border-white/20 flex items-center justify-center overflow-hidden">
                  <img src="/logos/Bellevue_College.jpg" alt="Bellevue College" className="w-8 h-8 object-contain" />
                </span>
                <div className="flex items-baseline gap-3 flex-wrap mb-1">
                  <h4 className="text-lg font-heading font-semibold text-espresso dark:text-white">Bellevue College</h4>
                </div>
                <p className="font-mono text-xs text-espresso/50 dark:text-slate-400 mb-2">AAS · 2023 to 2025 · 90 credits to UW</p>
                <p className="text-espresso/70 dark:text-slate-300 text-[15px] leading-relaxed max-w-[60ch]">
                  Two years of computer science, math, and physics. Led BC Tech Club as president and organized BC Hacks 2024 with 160+ participants.
                </p>
              </li>
            </ol>
          </motion.article>

          {/* Beyond the Classroom Card */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="card-brutal p-8 md:p-10 relative overflow-hidden"
          >
            {/* Floating Chibi */}
            <motion.img
              src="/images/chibis/jo_stress.PNG"
              alt="Stressed Joe juggling internships"
              className="absolute top-4 right-4 w-20 h-20 md:w-24 md:h-24 opacity-20 dark:opacity-35 pointer-events-none"
              animate={{ rotate: [-5, 5, -5], y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <header className="flex items-center mb-5 relative z-10">
              <div className="w-12 h-12 rounded-full bg-espresso/10 dark:bg-white/10 border-2 border-espresso dark:border-white/30 flex items-center justify-center mr-4">
                <Briefcase className="h-6 w-6 text-espresso dark:text-slate-100" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-espresso dark:text-slate-100">Beyond the Classroom</h3>
            </header>

            <p className="text-espresso/60 dark:text-slate-400 mb-6 relative z-10 font-mono text-sm">
              Where the coursework gets applied.
            </p>

            <ul className="space-y-6 relative z-10">
              {roles.map((r) => (
                <li key={r.company}>
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <span className="font-semibold text-espresso dark:text-white">
                      {r.role} · <span className="text-court-dark dark:text-[#60A5FA]">{r.company}</span>
                    </span>
                  </div>
                  <p className="font-mono text-xs text-espresso/50 dark:text-slate-400 mt-0.5 mb-1.5">{r.dates}</p>
                  <p className="text-espresso/70 dark:text-slate-300 text-[15px] leading-relaxed max-w-[60ch]">{r.blurb}</p>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        {/* Research Interests - full width */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="card-brutal p-8 md:p-10 mt-8"
        >
          <div className="grid md:grid-cols-5 gap-8 items-stretch">
            {/* Left column: title, tagline, then the list. The card on the right
                starts level with this header and both columns end together. */}
            <div className="md:col-span-3 flex flex-col">
            <header className="flex items-center mb-5">
              <div className="w-12 h-12 rounded-full bg-court/20 dark:bg-[#60A5FA]/20 border-2 border-court dark:border-[#60A5FA] flex items-center justify-center mr-4 flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-court-dark dark:text-[#60A5FA]" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-espresso dark:text-slate-100">Research Interests</h3>
            </header>

            <p className="text-espresso/60 dark:text-slate-400 mb-6 font-mono text-sm">
              Where AI systems meet the people who have to trust them.
            </p>

            <ul className="flex-1 flex flex-col justify-between gap-3.5 text-espresso/70 dark:text-slate-300 leading-relaxed text-[15px] sm:text-[16px]">
              {interests.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-court-dark dark:text-[#60A5FA] mr-3 flex-shrink-0 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            </div>

            <div className="md:col-span-2 h-full flex flex-col rounded-xl border-2 border-espresso/20 dark:border-white/10 bg-espresso/5 dark:bg-white/5 p-6">
              <a
                href="/projects/INFO_300/"
                className="group/paper block h-40 sm:h-44 mb-5 rounded-lg overflow-hidden border-2 border-espresso/20 dark:border-white/10"
                aria-label="Read the INFO 300 research proposal"
              >
                <picture className="block h-full">
                  <source srcSet="/projects/INFO_300/proposal-preview.webp" type="image/webp" />
                  <img
                    src="/projects/INFO_300/proposal-preview.png"
                    alt="First page of the INFO 300 research proposal, Human Judgment vs. AI Alerts"
                    width={760}
                    height={985}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/paper:scale-[1.03]"
                  />
                </picture>
              </a>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-espresso/40 dark:text-slate-500 mb-2">
                Research in action
              </p>
              <p className="text-espresso/70 dark:text-slate-300 text-[15px] leading-relaxed mb-5">
                This thinking already shows up in my coursework: my INFO 300 proposal studies how people trust AI scam alerts versus human ones.
              </p>
              <div className="mt-auto flex flex-col sm:flex-row md:flex-col gap-3">
                <a href="/projects/INFO_300/" className="btn-brutal inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] text-sm">
                  Read the Proposal
                </a>
                <a
                  href="https://orcid.org/0009-0003-3880-8443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal-outline inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] text-sm"
                >
                  ORCID Profile
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

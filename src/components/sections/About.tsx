import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

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

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-60px" },
} as const;

function ColumnTitle({ children, aside }: { children: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-6">
      <h3 className="text-2xl md:text-[1.7rem] font-heading font-bold text-espresso dark:text-slate-100">{children}</h3>
      {aside}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 px-6 bg-paper-dark/50 dark:bg-black/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="From Bellevue to the iSchool" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* The Journey */}
          <motion.article {...reveal}>
            <ColumnTitle>The Journey</ColumnTitle>
            <ol className="relative border-l-2 border-espresso/15 dark:border-white/10 ml-5 space-y-9 pb-1">
              <li className="pl-8 relative">
                <span className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-white border-2 border-espresso/20 dark:border-white/20 flex items-center justify-center overflow-hidden">
                  <img src="/logos/UW_Logo.png" alt="University of Washington" className="w-7 h-7 object-contain" />
                </span>
                <h4 className="text-lg font-heading font-bold text-espresso dark:text-white">University of Washington</h4>
                <p className="font-mono text-xs text-espresso/70 dark:text-slate-400 mt-0.5 mb-2">BS in Informatics · 2025 to 2027</p>
                <p className="text-espresso/75 dark:text-slate-300 text-[15px] leading-relaxed max-w-[60ch]">
                  Senior at the iSchool with a 3.96 GPA, on the Dean's List every quarter and the Annual Dean's List for 2025 to 2026. Coursework across databases, data structures, client side development, design methods, and research methods.
                </p>
              </li>
              <li className="pl-8 relative">
                <span className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-white border-2 border-espresso/20 dark:border-white/20 flex items-center justify-center overflow-hidden">
                  <img src="/logos/Bellevue_College.jpg" alt="Bellevue College" className="w-7 h-7 object-contain" />
                </span>
                <h4 className="text-lg font-heading font-bold text-espresso dark:text-white">Bellevue College</h4>
                <p className="font-mono text-xs text-espresso/70 dark:text-slate-400 mt-0.5 mb-2">Associate in Arts (DTA) · 2023 to 2025 · 90 credits to UW</p>
                <p className="text-espresso/75 dark:text-slate-300 text-[15px] leading-relaxed max-w-[60ch]">
                  Two years of computer science, math, and physics. Led BC Tech Club as president and organized BC Hacks 2024 with 160+ participants.
                </p>
              </li>
            </ol>
          </motion.article>

          {/* Beyond the Classroom */}
          <motion.article {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
            <ColumnTitle
              aside={
                <img
                  src="/images/chibis/jo_stress.PNG"
                  alt=""
                  className="w-14 h-14 -my-4 opacity-80 dark:opacity-70 pointer-events-none select-none"
                />
              }
            >
              Beyond the Classroom
            </ColumnTitle>
            <ul className="divide-y-2 divide-espresso/10 dark:divide-white/10 border-y-2 border-espresso/10 dark:border-white/10">
              {roles.map((r) => (
                <li key={r.company} className="py-5">
                  <p className="font-semibold text-espresso dark:text-white">
                    {r.role} · <span className="text-court-dark dark:text-[#60A5FA]">{r.company}</span>
                  </p>
                  <p className="font-mono text-xs text-espresso/70 dark:text-slate-400 mt-0.5 mb-1.5">{r.dates}</p>
                  <p className="text-espresso/75 dark:text-slate-300 text-[15px] leading-relaxed max-w-[60ch]">{r.blurb}</p>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        {/* Research Interests */}
        <motion.article {...reveal} className="mt-16 md:mt-20 grid md:grid-cols-5 gap-10 md:gap-12 items-start">
          <div className="md:col-span-3">
            <ColumnTitle>Research Interests</ColumnTitle>
            <p className="text-lg md:text-xl font-heading text-espresso dark:text-slate-200 leading-snug mb-7 max-w-[40ch]">
              Where AI systems meet the people who have to trust them.
            </p>
            <ol className="space-y-4 text-espresso/75 dark:text-slate-300 leading-relaxed text-[15px] sm:text-base">
              {interests.map((item, i) => (
                <li key={item} className="grid grid-cols-[2.25rem_1fr] gap-2">
                  <span className="font-mono text-sm pt-0.5 text-court-dark dark:text-[#60A5FA]">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <a
            href="/projects/INFO_300/"
            className="card-brutal group md:col-span-2 block p-5"
            aria-label="Read the INFO 300 research proposal"
          >
            <div className="h-48 sm:h-56 rounded-lg overflow-hidden border-2 border-espresso/15 dark:border-white/10 bg-white">
              <picture className="block h-full">
                <source srcSet="/projects/INFO_300/proposal-preview.webp" type="image/webp" />
                <img
                  src="/projects/INFO_300/proposal-preview.png"
                  alt="First page of the INFO 300 research proposal, Human Judgment vs. AI Alerts"
                  width={760}
                  height={985}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </picture>
            </div>
            <p className="mt-5 font-mono text-xs text-espresso/70 dark:text-slate-400">Research in action · INFO 300</p>
            <p className="mt-2 text-espresso/80 dark:text-slate-300 text-[15px] leading-relaxed">
              This thinking already shows up in my coursework: my INFO 300 proposal studies how people trust AI scam alerts versus human ones.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 font-semibold text-court-dark dark:text-[#60A5FA] group-hover:underline underline-offset-4">
              Read the proposal <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </motion.article>
      </div>
    </section>
  );
}

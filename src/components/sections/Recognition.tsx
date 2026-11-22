import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

// Facts here come from the MSIM resume and its honors file (School/.../Masters/Application).
// Sector's reports are industry research, not peer reviewed; keep them labelled that way.

const UW_PROFILE = "https://mge.scholarships.uw.edu/students/joseph-chamdani/";

interface Entry {
  year: string;
  title: string;
  meta: string;
  href?: string;
}

const writing: Entry[] = [
  {
    year: "2026",
    title: "The Hidden Dangers of AI in Cybersecurity",
    meta: "Industry research report · Sector (SectorONE research)",
    href: "https://sector.co.id/AIHiddenDangers",
  },
  {
    year: "2025",
    title: "Top 50 Indonesian Companies Leaked on the Dark Web",
    meta: "Industry research report · Sector (SectorONE research)",
    href: "https://sector.co.id/2025LeakedReport",
  },
  {
    year: "2025",
    title: "AI vs Human Hacker: Who Wins?",
    meta: "Industry research report · Sector (SectorONE research)",
    href: "https://sector.co.id/AIvsHumanResearch",
  },
  {
    year: "2025",
    title: "Human Judgment vs. AI Alerts: Exploring Trust in Automated Scam Detection Systems",
    meta: "Research proposal · INFO 300 Research Methods, UW (team project)",
    href: "/projects/INFO_300/",
  },
];

const honors: Entry[] = [
  { year: "2026", title: "Annual Dean's List, 2025 to 2026", meta: "University of Washington · Dean's List every quarter" },
  { year: "2026", title: "Alan R. Spence Transfer Support Fund", meta: "UW merit scholarship · Scholar profile", href: UW_PROFILE },
  {
    year: "2025",
    title: "1st place, Anthropic Claude Hackathon",
    meta: "Claude Builder Club at UW · AI Transfer Evaluation Tool",
    href: "https://joechamdani.com/projects/transfer-tool",
  },
  { year: "2025", title: "Associate in Arts, With High Honors", meta: "Bellevue College · GPA 3.84" },
  { year: "2024", title: "Norman and Camille Stromer Scholarship", meta: "Bellevue College Foundation, 2024 to 2025" },
];

const service: Entry[] = [
  {
    year: "2026",
    title: "Technical Officer, Software Engineering Career Club (SWECC)",
    meta: "UW · career events, the club website, and the spring 2027 mentorship cohort",
  },
  {
    year: "2024",
    title: "Invited lecture on running BC Hacks 2024",
    meta: "For 20+ visiting Korean exchange students, Bellevue College",
    href: "https://joechamdani.com/blog/bc-hacks-2024",
  },
  {
    year: "2024",
    title: "Organizer, BC Hacks 2024",
    meta: "160+ participants, 24 submissions, 12 volunteers, 6 judges",
  },
  {
    year: "2024",
    title: "President, Bellevue College Tech Club",
    meta: "2024 to 2025 · grew membership from 20 to 35+ through 15+ technical workshops",
  },
  {
    year: "2023",
    title: "Mentor, Bellevue College Tech Club",
    meta: "2023 to 2024 · web development fundamentals for new members",
  },
  {
    year: "2023",
    title: "Volunteer teacher, Komunitas Sahabat",
    meta: "Jakarta · reading, writing, and drawing in Bahasa Indonesia for disadvantaged children",
  },
];

function EntryList({ entries, twoCol = false }: { entries: Entry[]; twoCol?: boolean }) {
  return (
    <ol className={twoCol ? "grid md:grid-cols-2 [&>li]:border-b-2 [&>li]:border-espresso/10 dark:[&>li]:border-white/10" : "divide-y-2 divide-espresso/10 dark:divide-white/10"}>
      {entries.map((e) => {
        const external = e.href?.startsWith("http");
        const body = (
          <>
            <span className="w-12 shrink-0 pt-0.5 font-mono text-sm font-semibold text-espresso/70 dark:text-slate-400">{e.year}</span>
            <span className="min-w-0 flex-1">
              <span className="flex items-start gap-1.5 font-semibold leading-snug text-espresso dark:text-slate-100">
                <span className={e.href ? "group-hover:text-court-dark dark:group-hover:text-[#60A5FA] transition-colors" : ""}>{e.title}</span>
                {e.href && (
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-espresso/50 dark:text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                )}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-espresso/70 dark:text-slate-400">{e.meta}</span>
            </span>
          </>
        );
        return (
          <li key={e.title}>
            {e.href ? (
              <a
                href={e.href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex gap-4 px-5 py-4 transition-colors hover:bg-espresso/[0.03] dark:hover:bg-white/[0.03]"
              >
                {body}
              </a>
            ) : (
              <div className="flex gap-4 px-5 py-4">{body}</div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function Block({ title, kicker, entries, className = "", twoCol = false }: { title: string; kicker: string; entries: Entry[]; className?: string; twoCol?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className={`card-brutal card-static !p-0 overflow-hidden self-start ${className}`}
    >
      <div className="px-5 pt-5 pb-3 border-b-2 border-espresso/10 dark:border-white/10">
        <h3 className="text-xl font-heading font-bold text-espresso dark:text-slate-100">{title}</h3>
        <p className="mt-1 font-mono text-xs text-espresso/70 dark:text-slate-400">{kicker}</p>
      </div>
      <EntryList entries={entries} twoCol={twoCol} />
    </motion.div>
  );
}

function ScholarCard() {
  return (
    <motion.a
      href={UW_PROFILE}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      aria-label="Read Joseph's scholar profile on the University of Washington OMSFA site"
      className="lg:col-span-2 card-brutal card-static group !p-0 overflow-hidden flex items-stretch bg-[#4B2E83]/[0.04] dark:bg-[#8B6FD1]/[0.08]"
    >
      <div className="w-24 sm:w-32 lg:w-40 shrink-0 border-r-4 border-[#B7A57A] bg-[#B7A57A]">
        <picture>
          <source srcSet="/images/uw-scholar-photo.webp" type="image/webp" />
          <img
            src="/images/uw-scholar-photo.jpg"
            alt="Joseph Chamdani, UW scholar profile photo"
            loading="lazy"
            width={400}
            height={533}
            className="h-full w-full object-cover object-[center_30%]"
          />
        </picture>
      </div>
      <div className="min-w-0 flex-1 px-5 py-4 lg:px-8 lg:py-6 flex flex-col justify-center">
        <p className="font-mono text-[11px] lg:text-xs font-semibold uppercase tracking-widest text-[#4B2E83] dark:text-[#B9A3E3]">UW scholar profile<span className="hidden sm:inline text-espresso/60 dark:text-slate-400"> · Alan R. Spence Transfer Support Fund</span></p>
        <div className="mt-2 h-1 w-16 bg-[#B7A57A] -skew-x-12" aria-hidden />
        <blockquote className="mt-3 text-[15px] lg:text-xl font-semibold leading-snug text-espresso dark:text-slate-100">
          “I try to treat school less as a checklist to finish and more as a set of tools to build with.”
        </blockquote>
        <span className="mt-3 inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#4B2E83] dark:text-[#B9A3E3] group-hover:underline underline-offset-4">
          Read it on uw.edu <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      </div>
    </motion.a>
  );
}

export default function Recognition() {
  return (
    <section id="research" className="py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Research & Recognition" intro="Writing, honors, and the teaching and service around my studies" />

        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-6">
          <Block title="Research and writing" kicker="Reports and proposals, newest first" entries={writing} className="lg:!self-stretch" />
          <Block title="Honors and awards" kicker="Academic honors and scholarships" entries={honors} className="lg:!self-stretch" />
          <ScholarCard />
          <Block title="Teaching and service" kicker="Leading, mentoring, and teaching others" entries={service} className="lg:col-span-2" twoCol />
        </div>
      </div>
    </section>
  );
}

import { track } from "@/lib/track";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const projects = [
  {
    title: "INFO 200: Transfer Evaluation System",
    image: "/projects/shots/info200.jpg",
    webp: "/projects/shots/info200.webp",
    imageAlt: "INFO 200 Design Project",
    tech: ["UX Design", "AI", "Education", "Prototyping"],
    description:
      "A student-facing tool that predicts credit transfers to UW based on transcripts, intended majors, and historical data. Generates advisor requests and downloadable reports.",
    status: undefined,
    github: "https://github.com/JosephDavisC/INFO-200-Final-Project",
    demo: "https://info200.joechamdani.cloud/",
    demoLabel: "Demo"
  },
  {
    title: "INFO 201: AI Job Market & LLM Growth",
    image: "/projects/shots/info201.jpg",
    webp: "/projects/shots/info201.webp",
    fit: "contain",
    imageAlt: "INFO 201 Data Analysis Project",
    tech: ["R", "Data Science", "Kaggle", "Visualization"],
    description:
      "Analyzing how large language model expansion from 2018-2024 relates to AI job demand and salaries. Examining salary growth, experience levels, and company size using Kaggle datasets.",
    status: undefined,
    github: "https://github.com/JosephDavisC/INFO_201_Final_Project",
    demo: "/projects/INFO_201/final_report_group_2",
    demoLabel: "Report"
  },
  {
    title: "INFO 300: Human Judgment vs. AI Alerts",
    image: "/projects/INFO_300/proposal-preview.png",
    webp: "/projects/INFO_300/proposal-preview.webp",
    imageAlt: "INFO 300 Research Proposal",
    tech: ["Research", "Ethics", "AI Trust", "Writing"],
    description:
      "Research proposal investigating how users interpret and trust scam detection alerts from automated systems versus humans. Examines accuracy, reliability, and decision-making behavior.",
    status: undefined,
    github: undefined,
    demo: "/projects/INFO_300/",
    demoLabel: "Paper"
  },
  {
    title: "INFO 340: Planathon",
    image: "/projects/shots/info340.jpg",
    webp: "/projects/shots/info340.webp",
    imageAlt: "INFO 340 Client-Side Development Project",
    tech: ["React", "Firebase", "Bootstrap", "Vite"],
    description:
      "Hackathon organizer web app that consolidates task management, milestone tracking, team coordination, and event info into a single platform.",
    status: undefined,
    github: "https://github.com/JosephDavisC/INFO_340",
    demo: "https://planathon.web.app/",
    demoLabel: "Demo"
  },
  {
    title: "INFO 360: UW Nap Spot Finder",
    image: "/projects/shots/info360.jpg",
    webp: "/projects/shots/info360.webp",
    imageAlt: "INFO 360 Design Methods Project",
    tech: ["React", "TypeScript", "UX Design", "Prototyping"],
    description:
      "High-fidelity interactive prototype for finding quiet nap spots across UW campus. Features an interactive map with real-time availability, noise filters, walking directions, and a check-in system.",
    status: undefined,
    github: "https://github.com/JosephDavisC/INFO_360",
    demo: "https://info360.joechamdani.com/",
    demoLabel: "Prototype"
  },
  {
    title: "INFO 380: Course Registration System",
    image: "/projects/shots/info380.jpg",
    webp: "/projects/shots/info380.webp",
    imageAlt: "INFO 380 Systems Management Project",
    tech: ["React", "TypeScript", "Systems Analysis", "Prototyping"],
    description:
      "Course registration prototype with student, advisor, and admin workflows. Features real-time search, conflict detection, waitlist management, and enrollment analytics.",
    status: undefined,
    github: "https://github.com/JosephDavisC/INFO_380",
    demo: "https://info380.joechamdani.com",
    demoLabel: "Prototype"
  },
  {
    title: "INFO 498: Resonance Game Concept",
    image: "/projects/INFO_498_Resonance.webp",
    imageAlt: "INFO 498 Resonance character selection UI prototype",
    tech: ["Game UX", "UI Design", "Prototyping", "React"],
    description:
      "Team game concept from UX Design for Games: Resonance, a third person action adventure rooted in Greek mythology. Designed from pitch and mood boards through an interactive character selection UI prototype.",
    status: undefined,
    github: undefined,
    demo: "https://joechamdani.com/archive/info498resonance/",
    demoLabel: "Prototype"
  },
  {
    title: "INFO 498: Witcher 3 UX Makeover",
    image: "/projects/INFO_498_Witcher_Makeover.webp",
    imageAlt: "INFO 498 Witcher 3 inventory redesign prototype",
    tech: ["Game UX", "UX Critique", "UI Design", "Prototyping"],
    description:
      "Interactive redesign of The Witcher 3 inventory system. Rebuilt the shop, repair, and inventory flows around search, sorting, and clearer item comparison to reduce menu friction.",
    status: undefined,
    github: undefined,
    demo: "https://joechamdani.com/archive/info498/",
    demoLabel: "Prototype"
  }
];

type Project = (typeof projects)[number] & { webp?: string; fit?: string };

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Academic Projects"
          intro="Course projects and research work combining AI, data analytics, and software engineering"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {(projects as Project[]).map((project) => {
            const [code, name] = project.title.split(": ");
            return (
              <motion.article key={project.title} variants={fadeInUp} className="card-brutal card-static group flex flex-col !p-0 overflow-hidden">
                <figure className="relative aspect-[16/10] overflow-hidden border-b-2 border-espresso dark:border-white/10 bg-white">
                  <picture>
                    {project.webp && <source srcSet={project.webp} type="image/webp" />}
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      className={`w-full h-full ${project.fit === "contain" ? "object-contain p-3" : "object-cover object-top"} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
                      loading="lazy"
                    />
                  </picture>
                </figure>

                <div className="flex flex-col flex-grow p-5">
                  <p className="font-mono text-xs font-semibold text-court-dark dark:text-[#60A5FA]">{code}</p>
                  <h3 className="mt-1 text-xl font-heading font-bold leading-snug text-espresso dark:text-slate-100">{name ?? code}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-espresso/75 dark:text-slate-400 flex-grow">{project.description}</p>
                  <p className="mt-4 font-mono text-xs text-espresso/70 dark:text-slate-400">{project.tech.join(" · ")}</p>

                  {(project.github || project.demo) && (
                    <div className="mt-4 pt-4 border-t-2 border-espresso/10 dark:border-white/10 flex gap-5">
                      {project.demo && (
                        <a
                          href={project.demo}
                          onClick={() => track("project-link", { project: project.title, kind: "demo" })}
                          className="link-underline inline-flex items-center gap-1 text-sm font-semibold text-espresso dark:text-slate-100"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.demoLabel || "More"} <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          onClick={() => track("project-link", { project: project.title, kind: "code" })}
                          className="link-underline inline-flex items-center gap-1 text-sm font-semibold text-espresso/75 dark:text-slate-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

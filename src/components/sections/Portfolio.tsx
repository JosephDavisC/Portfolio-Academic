import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

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
    image: "/projects/UW_Transfer_Evaluation_Tool.jpg",
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
    image: "/projects/AI _Job_Market_&_LLM_Growth.png",
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
    image: "/projects/Human_vs_AI.png",
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
    image: "/projects/INFO_340_Logo.png",
    imageAlt: "INFO 340 Client-Side Development Project",
    tech: ["React", "Firebase", "Bootstrap", "Vite"],
    description:
      "Hackathon organizer web app that consolidates task management, milestone tracking, team coordination, and event info into a single platform.",
    status: undefined,
    github: "https://github.com/JosephDavisC/INFO_340",
    demo: "https://planathon.web.app/",
    demoLabel: "Demo",
    imageBg: "#FFFFFF"
  },
  {
    title: "INFO 360: UW Nap Spot Finder",
    image: "/projects/INFO_360_Logo.png",
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
    image: "/projects/INFO_380_Logo.png",
    imageAlt: "INFO 380 Systems Management Project",
    tech: ["React", "TypeScript", "Systems Analysis", "Prototyping"],
    description:
      "Course registration prototype with student, advisor, and admin workflows. Features real-time search, conflict detection, waitlist management, and enrollment analytics.",
    status: undefined,
    github: "https://github.com/JosephDavisC/INFO_380",
    demo: "https://info380.joechamdani.com",
    imageBg: "#FFFFFF",
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

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-espresso dark:text-slate-100">
            Academic Projects
          </h2>
          <p className="text-espresso/60 dark:text-slate-300 text-lg md:text-xl max-w-[65ch] mx-auto leading-relaxed">
            Course projects and research work combining AI, data analytics, and software engineering
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={fadeInUp}
              className="bg-paper dark:bg-white/5 dark:backdrop-blur-sm rounded-xl p-5 border-2 border-espresso dark:border-white/10 shadow-brutal dark:shadow-none hover:shadow-brutal-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/20 hover:border-court dark:hover:border-blue-400/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col"
            >
              <figure className="relative overflow-hidden rounded-lg border-2 border-espresso/50 dark:border-white/10 group-hover:border-court dark:group-hover:border-blue-400/30 h-48 md:h-56 flex items-center justify-center" style={{ backgroundColor: project.imageBg || '#4C3182' }}>
                <img
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/40 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </figure>

              <h3 className="mt-4 text-xl font-semibold group-hover:text-court-dark dark:group-hover:text-[#60A5FA] transition-colors">
                {project.title}
              </h3>

              <div className="mt-2.5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 bg-court/20 dark:bg-[#60A5FA]/20 text-court-dark dark:text-[#60A5FA] border border-court/50 dark:border-[#60A5FA]/30 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-espresso/60 dark:text-slate-400 mt-4 mb-3 leading-relaxed text-base flex-grow">
                {project.description}
              </p>

              {/* Status Badge */}
              {project.status && (
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 rounded-full text-sm">
                    {project.status}
                  </span>
                </div>
              )}

              {/* Links */}
              {(project.github || project.demo) && (
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      className="btn-brutal inline-flex items-center gap-2 px-4 py-2 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="btn-brutal inline-flex items-center gap-2 px-4 py-2 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {project.demoLabel || "More"}
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
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
    status: "In Progress",
    github: undefined,
    demo: undefined
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
    demo: "/projects/INFO_201/final_report_group_2"
  },
  {
    title: "INFO 300: Human Judgment vs. AI Alerts",
    image: "/projects/Human_vs_AI.png",
    imageAlt: "INFO 300 Research Proposal",
    tech: ["Research", "Ethics", "AI Trust", "Writing"],
    description:
      "Research proposal investigating how users interpret and trust scam detection alerts from automated systems versus humans. Examines accuracy, reliability, and decision-making behavior.",
    status: "In Progress",
    github: undefined,
    demo: undefined
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            Academic Projects
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
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
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-5 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 flex flex-col"
            >
              <figure className="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-blue-400/30 h-48 md:h-56 flex items-center justify-center" style={{ backgroundColor: '#4C3182' }}>
                <img
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/40 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </figure>

              <h3 className="mt-4 text-xl font-semibold group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <div className="mt-2.5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 bg-slate-700/50 text-slate-300 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-slate-400 mt-4 mb-3 leading-relaxed text-base flex-grow">
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
                <div className="flex gap-6 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center text-rose-400 hover:text-rose-300 transition-colors hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      More
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
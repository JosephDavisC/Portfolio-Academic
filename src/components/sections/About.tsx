import React from "react";
import { motion } from "framer-motion";
import { MapPin, Lightbulb } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55 }
};

export default function About() {
  return (
    <section id="about" className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-espresso dark:text-slate-100">
            Academic Journey
          </h2>
          <p className="text-espresso/60 dark:text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            From Running Start to UW Informatics - building technical expertise through hands-on learning
          </p>
        </motion.div>

        {/* Educational Path - Single Centered Card */}
        <motion.article
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-paper dark:bg-white/5 dark:backdrop-blur-sm rounded-xl p-8 md:p-10 border-2 border-espresso dark:border-white/10 shadow-brutal dark:shadow-none hover:shadow-brutal-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/20 hover:border-court dark:hover:border-blue-400/50 transition-all duration-300 group hover:-translate-y-1 mb-10"
        >
          <header className="flex items-center mb-5">
            <MapPin className="h-7 w-7 text-red-400 mr-4" />
            <h3 className="text-2xl font-semibold">Educational Path</h3>
          </header>

          <div className="space-y-4 text-espresso/70 dark:text-slate-300 leading-relaxed text-[17px]">
            <p>
              I'm pursuing Informatics at the University of Washington, having started my college journey through the Running Start program at Bellevue College. This accelerated path allowed me to dive into advanced coursework early while building a strong foundation in computer science and data analysis.
            </p>
            <p>
              My academic focus centers on data science, artificial intelligence, and human-computer interaction. Through coursework in database systems, statistical analysis, and software development, I've developed skills in Python, R, SQL, and modern web technologies.
            </p>
            <p>
              Beyond the classroom, I've applied my knowledge through research projects, hackathons, and leadership roles including organizing BC Hacks 2024 and leading the BC Tech Club. My goal is to leverage technology to solve complex real-world problems through data-driven approaches.
            </p>
          </div>
        </motion.article>

        {/* Research Interests - New Card */}
        <motion.article
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-paper dark:bg-white/5 dark:backdrop-blur-sm rounded-xl p-8 md:p-10 border-2 border-espresso dark:border-white/10 shadow-brutal dark:shadow-none hover:shadow-brutal-lg dark:hover:shadow-lg dark:hover:shadow-purple-500/20 hover:border-purple-500 dark:hover:border-purple-400/50 transition-all duration-300 group hover:-translate-y-1"
        >
          <header className="flex items-center mb-5">
            <Lightbulb className="h-7 w-7 text-yellow-400 mr-4" />
            <h3 className="text-2xl font-semibold">Research Interests</h3>
          </header>

          <p className="text-espresso/70 dark:text-slate-300 leading-relaxed text-[17px] mb-5">
            I am interested in areas that connect data, technology, and human decision-making. My current academic and research interests include:
          </p>

          <ul className="space-y-3 text-espresso/70 dark:text-slate-300 leading-relaxed text-[17px]">
            <li className="flex items-start">
              <span className="text-court-dark dark:text-[#60A5FA] mr-3 mt-1 flex-shrink-0">•</span>
              <span>Data science and statistical modeling for real-world applications</span>
            </li>
            <li className="flex items-start">
              <span className="text-court-dark dark:text-[#60A5FA] mr-3 mt-1 flex-shrink-0">•</span>
              <span>Large language models and the societal impact of automated systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-3 mt-1 flex-shrink-0">•</span>
              <span>Human–AI interaction and how people interpret algorithmic decisions</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-3 mt-1 flex-shrink-0">•</span>
              <span>AI ethics, trust, and fairness in decision support tools</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-3 mt-1 flex-shrink-0">•</span>
              <span>Applied machine learning for problem-solving in education, finance, and public systems</span>
            </li>
          </ul>
        </motion.article>
      </div>
    </section>
  );
}

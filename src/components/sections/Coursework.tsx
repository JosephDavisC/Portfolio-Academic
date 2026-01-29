import { motion } from "framer-motion";
import { BookOpen, ChevronDown } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const uwCurrentCourses = [
  {
    code: "INFO 290",
    title: "Orientation to Informatics",
    description: "Introduction to the iSchool/Informatics mission, culture, values, and resources. Focus on teamwork, leadership, and career preparation including resume, LinkedIn, and portfolio development.",
    skills: ["Career Prep", "Teamwork", "Leadership", "Portfolio"]
  },
  {
    code: "INFO 340",
    title: "Client-Side Development",
    description: "Introduction to client-side web development including markup, programming languages, protocols, libraries, and frameworks for creating interactive, accessible applications.",
    skills: ["HTML/CSS", "JavaScript", "React", "Web Development"]
  },
  {
    code: "INFO 360",
    title: "Design Methods",
    description: "Design paradigms and methods for envisioning information systems. Topics include design thinking, creativity, sketching, prototyping, evaluating, and design justice.",
    skills: ["Design Thinking", "Prototyping", "UX", "Figma"]
  },
  {
    code: "INFO 380",
    title: "Product & Information Systems Management",
    description: "Skills to design information systems and software. Learn to identify and analyze system needs, organizational goals, and system requirements using analysis and design methods.",
    skills: ["Systems Analysis", "Requirements", "Product Management", "UML"]
  }
];

const uwCompletedCourses = [
  {
    code: "INFO 200",
    title: "Intellectual Foundations of Informatics",
    description: "Exploring the conceptual foundations of informatics, including information, data, and the social and ethical implications of technology.",
    skills: ["Critical Thinking", "Ethics", "Information Theory", "Research"]
  },
  {
    code: "INFO 201",
    title: "Technical Foundations of Informatics",
    description: "Introduction to programming with R, data analysis, and technical problem-solving for informatics applications.",
    skills: ["R", "Data Analysis", "Statistics", "Visualization"]
  },
  {
    code: "INFO 300",
    title: "Research Methods",
    description: "Quantitative and qualitative research methods for informatics, including study design, data collection, and analysis techniques.",
    skills: ["Research Design", "Data Collection", "Analysis", "Academic Writing"]
  }
];

const bcFeaturedCourses = [
  {
    code: "CS 210/211",
    title: "Fundamentals of CS I & II",
    description: "Object-oriented programming fundamentals, data structures, and algorithm design using industry-standard practices.",
    skills: ["Programming", "Data Structures", "Algorithms", "OOP"]
  },
  {
    code: "MATH 238",
    title: "Differential Equations",
    description: "Mathematical modeling and differential equations with applications to engineering, physics, and computational systems.",
    skills: ["Modeling", "Calculus", "Analysis", "Problem Solving"]
  },
  {
    code: "BA 240",
    title: "Statistical Analysis",
    description: "Statistical methods, hypothesis testing, regression analysis, and data-driven decision making for business applications.",
    skills: ["Statistics", "Hypothesis Testing", "Regression", "Data Analysis"]
  }
];

const bcAllCourses = [
  {
    code: "BUS& 101",
    title: "Introduction to Business",
    description: "Fundamentals of business operations and management",
    skills: ["Business", "Management"]
  },
  {
    code: "CES 201",
    title: "Sports, Narrative, Identity",
    description: "Cultural analysis through sports narratives",
    skills: ["Analysis", "Writing"]
  },
  {
    code: "HD 103",
    title: "International Student First Year Experience",
    description: "Academic transition and cultural adaptation",
    skills: ["Adaptation", "Skills"]
  },
  {
    code: "SOC& 101",
    title: "Introduction to Sociology",
    description: "Social structures and human behavior",
    skills: ["Social Science", "Research"]
  },
  {
    code: "CHIN& 122",
    title: "Chinese II",
    description: "Intermediate Mandarin language proficiency",
    skills: ["Language", "Communication"]
  },
  {
    code: "CS 210",
    title: "Fundamentals of CS I",
    description: "Programming fundamentals and problem-solving",
    skills: ["Programming", "Logic"]
  },
  {
    code: "ENGL& 101",
    title: "English Composition I",
    description: "Academic writing and critical analysis",
    skills: ["Writing", "Analysis"]
  },
  {
    code: "MATH& 151",
    title: "Calculus I",
    description: "Limits, derivatives, and applications",
    skills: ["Calculus", "Math"]
  },
  {
    code: "CS 211",
    title: "Fundamentals of CS II",
    description: "Data structures and algorithm design",
    skills: ["Data Structures", "Algorithms"]
  },
  {
    code: "ENGL& 201",
    title: "The Research Paper",
    description: "Advanced research and academic writing",
    skills: ["Research", "Writing"]
  },
  {
    code: "MATH& 152",
    title: "Calculus II",
    description: "Integration techniques and series",
    skills: ["Integration", "Sequences"]
  },
  {
    code: "MATH 208",
    title: "Linear Algebra",
    description: "Vector spaces and matrix operations",
    skills: ["Linear Algebra", "Matrices"]
  },
  {
    code: "MATH& 153",
    title: "Calculus III",
    description: "Multivariable calculus and vector analysis",
    skills: ["Multivariable", "Vectors"]
  },
  {
    code: "PHYS 121",
    title: "General Engineering Physics I",
    description: "Mechanics and classical physics",
    skills: ["Physics", "Mechanics"]
  },
  {
    code: "BA 240",
    title: "Statistical Analysis",
    description: "Statistical methods and data analysis",
    skills: ["Statistics", "Analysis"]
  },
  {
    code: "MATH& 254",
    title: "Calculus IV",
    description: "Vector calculus and field theory",
    skills: ["Vector Calculus", "Fields"]
  },
  {
    code: "PHYS 122",
    title: "General Engineering Physics II",
    description: "Electricity, magnetism, and circuits",
    skills: ["Electricity", "Magnetism"]
  },
  {
    code: "CHEM& 161",
    title: "General Chemistry I",
    description: "Fundamental chemical principles and reactions",
    skills: ["Chemistry", "Lab"]
  },
  {
    code: "MATH 238",
    title: "Differential Equations",
    description: "Differential equations and modeling",
    skills: ["Modeling", "ODEs"]
  },
  {
    code: "MATH 255",
    title: "Vector Calculus",
    description: "Advanced vector analysis and theorems",
    skills: ["Vectors", "Theorems"]
  },
  {
    code: "PHIL& 101",
    title: "Introduction to Philosophy",
    description: "Critical thinking and philosophical analysis",
    skills: ["Philosophy", "Logic"]
  },
  {
    code: "ART 154",
    title: "Introduction to Digital Photography",
    description: "Digital imaging and visual communication",
    skills: ["Photography", "Design"]
  },
  {
    code: "CS 212",
    title: "C++ Data Structures",
    description: "Advanced data structures in C++",
    skills: ["C++", "Data Structures"]
  },
  {
    code: "PHYS 123",
    title: "General Engineering Physics III",
    description: "Waves, optics, and modern physics",
    skills: ["Waves", "Optics"]
  }
];

export default function Coursework() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="coursework" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-espresso dark:text-slate-100">
            Coursework
          </h2>
          <p className="text-espresso/60 dark:text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Key courses from UW Informatics and Bellevue College
          </p>
        </motion.div>

        {/* UW Current Courses - Winter 2026 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img src="/logos/UW_Logo.png" alt="UW" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-3xl font-bold text-espresso dark:text-white">University of Washington</h3>
          </div>
          <p className="text-purple-400 font-medium mb-6 ml-[60px]">Currently Taking - Winter 2026</p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8"
          >
            {uwCurrentCourses.map((course, index) => (
              <motion.article
                key={index}
                variants={fadeInUp}
                className="bg-paper dark:bg-white/5 dark:backdrop-blur-sm rounded-xl p-6 border-2 border-purple-500 dark:border-purple-400/30 shadow-brutal dark:shadow-none hover:shadow-brutal-lg dark:hover:shadow-lg dark:hover:shadow-purple-500/20 hover:border-purple-600 dark:hover:border-purple-400/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-purple-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-purple-400 font-semibold mb-1">{course.code}</div>
                    <h4 className="text-lg font-semibold text-espresso dark:text-white leading-snug">{course.title}</h4>
                  </div>
                </div>

                <p className="text-espresso/60 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-md text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* UW Completed Courses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-espresso/60 dark:text-slate-400 font-medium mb-6">Completed Courses</p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {uwCompletedCourses.map((course, index) => (
              <motion.article
                key={index}
                variants={fadeInUp}
                className="bg-paper dark:bg-white/5 dark:backdrop-blur-sm rounded-xl p-6 border-2 border-espresso dark:border-white/10 shadow-brutal dark:shadow-none hover:shadow-brutal-lg dark:hover:shadow-lg dark:hover:shadow-purple-500/20 hover:border-purple-500 dark:hover:border-purple-400/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-purple-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-purple-400 font-semibold mb-1">{course.code}</div>
                    <h4 className="text-lg font-semibold text-espresso dark:text-white leading-snug">{course.title}</h4>
                  </div>
                </div>

                <p className="text-espresso/60 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-md text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* BC Featured Courses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img src="/logos/Bellevue_College.jpg" alt="Bellevue College" className="w-8 h-8 object-contain rounded-full" />
            </div>
            <h3 className="text-3xl font-bold text-espresso dark:text-white">Bellevue College</h3>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {bcFeaturedCourses.map((course, index) => (
              <motion.article
                key={index}
                variants={fadeInUp}
                className="bg-paper dark:bg-white/5 dark:backdrop-blur-sm rounded-xl p-6 border-2 border-espresso dark:border-white/10 shadow-brutal dark:shadow-none hover:shadow-brutal-lg dark:hover:shadow-lg dark:hover:shadow-[#00AEEF]/20 hover:border-[#00AEEF] dark:hover:border-[#00AEEF]/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-[#00AEEF] shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-[#00AEEF] font-semibold mb-1">{course.code}</div>
                    <h4 className="text-lg font-semibold text-espresso dark:text-white leading-snug">{course.title}</h4>
                  </div>
                </div>

                <p className="text-espresso/60 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-[#00AEEF]/10 border border-[#00AEEF]/20 text-[#00AEEF] rounded-md text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* Expandable Full BC Course List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full bg-paper dark:bg-white/5 dark:backdrop-blur-sm border-2 border-espresso dark:border-white/10 rounded-xl p-4 shadow-brutal-sm dark:shadow-none hover:shadow-brutal dark:hover:bg-white/10 hover:border-[#00AEEF] dark:hover:border-[#00AEEF]/30 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-espresso dark:text-white group-hover:text-[#00AEEF] transition-colors">
                View All Bellevue College Courses
              </span>
              <ChevronDown
                className={`h-5 w-5 text-[#00AEEF] transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 grid md:grid-cols-4 gap-4">
              {bcAllCourses.map((course, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
                  transition={{ duration: 0.3, delay: isExpanded ? index * 0.03 : 0 }}
                  className="bg-paper dark:bg-white/5 dark:backdrop-blur-sm rounded-lg p-4 border-2 border-espresso/50 dark:border-white/10 shadow-brutal-sm dark:shadow-none hover:shadow-brutal dark:hover:shadow-sm hover:border-[#00AEEF] dark:hover:border-[#00AEEF]/30 transition-all duration-200 group"
                >
                  <div className="mb-2">
                    <div className="text-xs text-[#00AEEF] font-semibold mb-1">{course.code}</div>
                    <h5 className="text-sm font-semibold text-espresso dark:text-white leading-tight group-hover:text-[#00AEEF] transition-colors">
                      {course.title}
                    </h5>
                  </div>

                  <p className="text-espresso/60 dark:text-slate-400 text-xs leading-relaxed mb-3">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {course.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-[#00AEEF]/10 border border-[#00AEEF]/20 text-[#00AEEF] rounded text-[10px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

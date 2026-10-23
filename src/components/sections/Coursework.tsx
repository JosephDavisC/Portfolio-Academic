import { motion } from "framer-motion";
import { ChevronDown, Github } from "lucide-react";
import { useMemo, useState } from "react";

type Area = "Data" | "Software" | "Design" | "Ethics & Research" | "Humanities";
const AREAS: ("All" | Area)[] = ["All", "Data", "Software", "Design", "Ethics & Research", "Humanities"];

interface Course {
  code: string;
  title: string;
  area?: Area;
  description: string;
  skills: string[];
  github?: string;
}

interface Quarter {
  label: string;
  note?: string;
  inProgress?: boolean;
  courses: Course[];
}

const uwQuarters: Quarter[] = [
  {
    label: "Autumn 2026",
    inProgress: true,
    courses: [
      {
        code: "INFO 351",
        title: "Information Ethics and Policy",
        area: "Ethics & Research",
        description: "Ethics and governance of information systems: privacy, consent and surveillance, who governs speech and visibility, cultural ownership, classification, and generative AI. Builds toward a governance brief on one real problem.",
        skills: ["Information Ethics", "Privacy", "Policy", "AI Governance"]
      },
      {
        code: "INFO 356",
        title: "Moral Reasoning and Interaction Design",
        area: "Design",
        description: "Applies moral frameworks such as care ethics, pragmatism, and critical technology studies to interaction design. A team project designs a research-grounded wellness app, critiques a partner team's design, then redesigns two features as a prototype.",
        skills: ["Design Ethics", "Interaction Design", "Critique", "Prototyping"]
      },
      {
        code: "INFO 370",
        title: "Core Methods in Data Science",
        area: "Data",
        description: "Statistics and probability, regression and predictive modeling, then causal inference and fairness, all in R with RMarkdown, dplyr, and ggplot2.",
        skills: ["R", "Statistics", "Regression", "Causal Inference"]
      },
      {
        code: "ARCH 151",
        title: "Appreciation of Architecture II",
        area: "Humanities",
        description: "World architecture from 1400 to today: the Renaissance, industrial scale, modernism, postmodernism, and contemporary work, ending with the architecture of Seattle and the UW campus.",
        skills: ["Design History", "Visual Analysis"]
      }
    ]
  },
  {
    label: "Spring 2026",
    note: "Dean's List",
    courses: [
      {
        code: "INFO 330",
        title: "Databases & Data Modeling",
        area: "Data",
        description: "Relational database design and data modeling. Covers SQL, normalization, entity relationship modeling, and working with real datasets in production style databases.",
        skills: ["SQL", "Data Modeling", "Normalization", "Databases"]
      },
      {
        code: "INFO 498",
        title: "UX Design for Games",
        area: "Design",
        description: "Special topics course on user experience design for games. Designed Resonance, a third person action adventure concept, from pitch and mood boards through interactive UI prototypes.",
        skills: ["Game UX", "Prototyping", "UI Design", "Playtesting"]
      },
      {
        code: "CSE 373",
        title: "Data Structures & Algorithms",
        area: "Software",
        description: "Data structures and algorithms in Java, including lists, trees, hash tables, graphs, sorting, and asymptotic analysis, applied through team programming projects.",
        skills: ["Java", "Data Structures", "Algorithms", "Analysis"]
      },
      {
        code: "ARCH 150",
        title: "Appreciation of Architecture I",
        area: "Humanities",
        description: "Survey of architectural history and design from the ancient world through the medieval period, focused on reading buildings as cultural and visual artifacts.",
        skills: ["Design History", "Visual Analysis"]
      }
    ]
  },
  {
    label: "Winter 2026",
    note: "Dean's List · 4.0 quarter",
    courses: [
      {
        code: "INFO 290",
        title: "Orientation to Informatics",
        area: "Humanities",
        description: "Introduction to the iSchool/Informatics mission, culture, values, and resources. Focus on teamwork, leadership, and career preparation including resume, LinkedIn, and portfolio development.",
        skills: ["Career Prep", "Teamwork", "Leadership", "Portfolio"]
      },
      {
        code: "INFO 340",
        title: "Client-Side Development",
        area: "Software",
        description: "Introduction to client-side web development including markup, programming languages, protocols, libraries, and frameworks for creating interactive, accessible applications.",
        skills: ["HTML/CSS", "JavaScript", "React", "Web Development"],
        github: "https://github.com/JosephDavisC/INFO_340"
      },
      {
        code: "INFO 360",
        title: "Design Methods",
        area: "Design",
        description: "Design paradigms and methods for envisioning information systems. Topics include design thinking, creativity, sketching, prototyping, evaluating, and design justice.",
        skills: ["Design Thinking", "Prototyping", "UX", "Figma"],
        github: "https://github.com/JosephDavisC/INFO_360"
      },
      {
        code: "INFO 380",
        title: "Product & Information Systems Management",
        area: "Software",
        description: "Skills to design information systems and software. Learn to identify and analyze system needs, organizational goals, and system requirements using analysis and design methods.",
        skills: ["Systems Analysis", "Requirements", "Product Management", "UML"],
        github: "https://github.com/JosephDavisC/INFO_380"
      }
    ]
  },
  {
    label: "Autumn 2025",
    note: "Dean's List",
    courses: [
      {
        code: "INFO 200",
        title: "Intellectual Foundations of Informatics",
        area: "Ethics & Research",
        description: "Exploring the conceptual foundations of informatics, including information, data, and the social and ethical implications of technology.",
        skills: ["Critical Thinking", "Ethics", "Information Theory", "Research"]
      },
      {
        code: "INFO 201",
        title: "Foundational Skills for Data Science",
        area: "Data",
        description: "Introduction to programming with R, data wrangling, analysis, and visualization for data science applications.",
        skills: ["R", "Data Analysis", "Statistics", "Visualization"]
      },
      {
        code: "INFO 300",
        title: "Research Methods",
        area: "Ethics & Research",
        description: "Quantitative and qualitative research methods for informatics, including study design, data collection, and analysis techniques.",
        skills: ["Research Design", "Data Collection", "Analysis", "Academic Writing"]
      }
    ]
  }
];

const bcFeaturedCourses: Course[] = [
  {
    code: "CS 210/211",
    title: "Fundamentals of CS I & II",
    area: "Software",
    description: "Object-oriented programming fundamentals, data structures, and algorithm design using industry-standard practices.",
    skills: ["Programming", "Data Structures", "Algorithms", "OOP"]
  },
  {
    code: "MATH 238",
    title: "Differential Equations",
    area: "Data",
    description: "Mathematical modeling and differential equations with applications to engineering, physics, and computational systems.",
    skills: ["Modeling", "Calculus", "Analysis", "Problem Solving"]
  },
  {
    code: "BA 240",
    title: "Statistical Analysis",
    area: "Data",
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


// Department colour for the course code badge. Light values are all 4.5:1 or better
// on their tint; dark mode uses the lighter shade of the same hue.
const DEPT_STYLE: Record<string, string> = {
  INFO: "text-[#4B2E83] bg-[#4B2E83]/10 border-[#4B2E83]/30 dark:text-purple-300 dark:bg-purple-400/10 dark:border-purple-400/30",
  CSE: "text-court-dark bg-court/15 border-court-dark/30 dark:text-emerald-300 dark:bg-emerald-400/10 dark:border-emerald-400/30",
  ARCH: "text-[#8A4B12] bg-[#C2410C]/10 border-[#C2410C]/30 dark:text-orange-300 dark:bg-orange-400/10 dark:border-orange-400/30",
  BC: "text-[#006d96] bg-[#00AEEF]/10 border-[#00AEEF]/30 dark:text-sky-300 dark:bg-sky-400/10 dark:border-sky-400/30",
};
const deptOf = (code: string, school: "uw" | "bc") =>
  school === "bc" ? "BC" : (code.split(" ")[0] in DEPT_STYLE ? code.split(" ")[0] : "INFO");

function CodeBadge({ code, school }: { code: string; school: "uw" | "bc" }) {
  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 w-[6.5rem] px-2 py-1 rounded-md border font-mono text-xs font-bold tracking-tight ${DEPT_STYLE[deptOf(code, school)]}`}
    >
      {code}
    </span>
  );
}

function CourseRow({ course, school }: { course: Course; school: "uw" | "bc" }) {
  return (
    <li className="group flex flex-col sm:flex-row gap-3 sm:gap-5 px-5 py-5 md:px-6 transition-colors hover:bg-espresso/[0.03] dark:hover:bg-white/[0.03]">
      <div className="sm:pt-0.5">
        <CodeBadge code={course.code} school={school} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-lg font-semibold leading-snug text-espresso dark:text-slate-100">{course.title}</h4>
          {course.github && (
            <a
              href={course.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1.5 shrink-0 text-sm font-semibold text-court-dark dark:text-[#60A5FA]"
              aria-label={`${course.code} code on GitHub`}
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
        <p className="mt-1.5 text-[15px] leading-relaxed text-espresso/70 dark:text-slate-400 max-w-[70ch]">
          {course.description}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-espresso/70 dark:text-slate-400">
          {course.area && (
            <span className="font-semibold text-espresso dark:text-slate-200">{course.area}</span>
          )}
          {course.skills.map((skill) => (
            <span key={skill} className="before:content-['/'] before:mr-3 before:text-espresso/30 dark:before:text-slate-600">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}

function QuarterBlock({ quarter, school }: { quarter: Quarter; school: "uw" | "bc" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className="grid md:grid-cols-[11rem_1fr] gap-3 md:gap-8"
    >
      <div className="md:sticky md:top-28 self-start">
        <p className="font-heading text-xl font-bold text-espresso dark:text-slate-100">{quarter.label}</p>
        <div className="mt-2 flex flex-wrap md:flex-col items-start gap-2">
          {quarter.inProgress && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-court-dark/40 bg-court/15 px-2.5 py-0.5 font-mono text-xs font-semibold text-court-dark dark:border-[#60A5FA]/40 dark:bg-[#60A5FA]/10 dark:text-[#93C5FD]">
              <span className="h-1.5 w-1.5 rounded-full bg-court-dark dark:bg-[#60A5FA] motion-safe:animate-pulse" />
              In progress
            </span>
          )}
          {quarter.note && (
            <span className="rounded-full border border-[#4B2E83]/30 bg-[#4B2E83]/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#4B2E83] dark:border-purple-400/30 dark:bg-purple-400/10 dark:text-purple-300">
              {quarter.note}
            </span>
          )}
          <span className="font-mono text-xs text-espresso/70 dark:text-slate-400">
            {quarter.courses.length} {quarter.courses.length === 1 ? "course" : "courses"}
          </span>
        </div>
      </div>
      <ul className="card-brutal card-static !p-0 overflow-hidden divide-y-2 divide-espresso/10 dark:divide-white/10">
        {quarter.courses.map((course) => (
          <CourseRow key={course.code} course={course} school={school} />
        ))}
      </ul>
    </motion.div>
  );
}

export default function Coursework() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [area, setArea] = useState<(typeof AREAS)[number]>("All");

  const quarters = useMemo(
    () =>
      uwQuarters
        .map((q) => ({ ...q, courses: area === "All" ? q.courses : q.courses.filter((c) => c.area === area) }))
        .filter((q) => q.courses.length > 0),
    [area]
  );
  const bcFeatured = area === "All" ? bcFeaturedCourses : bcFeaturedCourses.filter((c) => c.area === area);

  const uwCourseCount = uwQuarters.reduce((n, q) => n + q.courses.length, 0);
  const completedQuarters = uwQuarters.filter((q) => !q.inProgress).length;
  const deansList = uwQuarters.filter((q) => q.note?.startsWith("Dean's List")).length;
  const stats = [
    { value: String(uwCourseCount), label: "UW courses" },
    { value: String(completedQuarters), label: "quarters completed" },
    { value: `${deansList} of ${completedQuarters}`, label: "on the Dean's List" },
    { value: "90", label: "credits from Bellevue College" },
  ];

  return (
    <section id="coursework" className="py-20 md:py-24 px-6 bg-paper-dark/50 dark:bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-espresso dark:text-slate-100">Coursework</h2>
          <p className="text-espresso/70 dark:text-slate-300 text-lg md:text-xl max-w-[65ch] mx-auto leading-relaxed">
            My academic record at UW Informatics and Bellevue College, quarter by quarter
          </p>
        </motion.div>

        {/* Summary strip */}
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="card-brutal !p-4 md:!p-5 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-heading text-3xl md:text-4xl font-bold text-espresso dark:text-slate-100">{s.value}</span>
                <span className="mt-1 block font-mono text-xs text-espresso/70 dark:text-slate-400">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        {/* Area filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter courses by area">
          {AREAS.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setArea(a)}
              aria-pressed={area === a}
              className={`px-4 py-1.5 rounded-full border-2 font-mono text-sm font-medium transition-all duration-200 ${
                area === a
                  ? "bg-court text-espresso border-espresso shadow-brutal-sm dark:bg-[#60A5FA]/15 dark:text-[#93C5FD] dark:border-[#60A5FA]/40 dark:shadow-none"
                  : "bg-paper text-espresso border-espresso/20 hover:border-espresso/50 hover:-translate-y-0.5 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 dark:hover:border-slate-400"
              }`}
            >
              {a}
            </button>
          ))}
        </div>

        {/* UW */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center border-2 border-espresso/10 dark:border-transparent">
              <img src="/logos/UW_Logo.png" alt="" className="w-7 h-7 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-espresso dark:text-white leading-tight">University of Washington</h3>
              <p className="font-mono text-sm text-espresso/70 dark:text-slate-400">BS Informatics · 2025 to 2027</p>
            </div>
          </div>

          <div className="space-y-10">
            {quarters.map((quarter) => (
              <QuarterBlock key={quarter.label} quarter={quarter} school="uw" />
            ))}
            {quarters.length === 0 && (
              <p className="text-center font-mono text-sm text-espresso/70 dark:text-slate-400">No UW courses in this area yet.</p>
            )}
          </div>
        </div>

        {/* Bellevue College */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-espresso/10 dark:border-transparent">
              <img src="/logos/Bellevue_College.jpg" alt="" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-espresso dark:text-white leading-tight">Bellevue College</h3>
              <p className="font-mono text-sm text-[#006d96] dark:text-sky-300">AAS · 2023 to 2025 · 90 credits transferred to UW</p>
            </div>
          </div>

          {bcFeatured.length > 0 && (
            <QuarterBlock quarter={{ label: "Highlights", courses: bcFeatured }} school="bc" />
          )}

          <div className="mt-8 md:ml-[13rem]">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              className="w-full card-brutal !p-4 flex items-center justify-between text-left group"
            >
              <span className="text-base font-semibold text-espresso dark:text-white">
                All {bcAllCourses.length} Bellevue College courses
              </span>
              <ChevronDown className={`h-5 w-5 text-[#006d96] dark:text-sky-300 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
            </button>

            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
              aria-hidden={!isExpanded}
            >
              <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 card-brutal card-static !p-5">
                {bcAllCourses.map((course) => (
                  <li key={course.code} className="flex items-center gap-3 min-w-0">
                    <CodeBadge code={course.code} school="bc" />
                    <span className="text-sm text-espresso dark:text-slate-200 truncate" title={course.title}>{course.title}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

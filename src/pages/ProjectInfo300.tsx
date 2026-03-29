import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ProjectInfo300 = () => {
  return (
    <>
      <Helmet>
        <title>INFO 300: Human Judgment vs. AI Alerts - Research Proposal | Joseph Davis Chamdani</title>
        <meta name="description" content="Research proposal investigating how users interpret and trust scam detection alerts from automated systems versus humans. Examines accuracy, reliability, and decision-making behavior." />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uw.joechamdani.com/projects/INFO_300/" />
        <meta property="og:title" content="INFO 300: Human Judgment vs. AI Alerts - Research Proposal" />
        <meta property="og:description" content="Research proposal investigating how users interpret and trust scam detection alerts from automated systems versus humans. Examines accuracy, reliability, and decision-making behavior." />
        <meta property="og:image" content="https://uw.joechamdani.com/projects/Human_vs_AI.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://uw.joechamdani.com/projects/INFO_300/" />
        <meta name="twitter:title" content="INFO 300: Human Judgment vs. AI Alerts - Research Proposal" />
        <meta name="twitter:description" content="Research proposal investigating how users interpret and trust scam detection alerts from automated systems versus humans. Examines accuracy, reliability, and decision-making behavior." />
        <meta name="twitter:image" content="https://uw.joechamdani.com/projects/Human_vs_AI.png" />

        <link rel="canonical" href="https://uw.joechamdani.com/projects/INFO_300/" />
      </Helmet>

      <div className="min-h-screen bg-paper dark:bg-[#141B2D] flex items-center justify-center px-6 py-20 transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full bg-paper dark:bg-white/5 dark:backdrop-blur-sm border-2 border-espresso dark:border-white/10 rounded-xl p-6 md:p-8 shadow-brutal dark:shadow-none"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-court dark:bg-gradient-to-r dark:from-blue-600 dark:to-red-600 text-paper dark:text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border-2 border-espresso dark:border-transparent shadow-brutal-sm dark:shadow-none"
            >
              INFO 300 Research Proposal
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-heading font-bold mb-3 text-espresso dark:text-white"
            >
              Human Judgment vs. AI Alerts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-espresso/60 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto"
            >
              Research proposal investigating how users interpret and trust scam detection alerts from automated systems versus humans. Examines accuracy, reliability, and decision-making behavior.
            </motion.p>
          </div>

          {/* Preview Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <img
              src="/projects/Human_vs_AI.png"
              alt="Human vs AI Alert Systems Research"
              style={{ maxWidth: "250px", width: "100%" }}
              className="rounded-xl border-2 border-espresso/50 dark:border-white/10 shadow-brutal dark:shadow-none"
            />
          </motion.div>

          {/* Tech Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-6"
          >
            {["Research", "Ethics", "AI Trust", "Writing"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-court/20 dark:bg-[#60A5FA]/20 text-court-dark dark:text-[#60A5FA] border border-court/50 dark:border-[#60A5FA]/30 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="/projects/INFO_300/INFO%20300A%20AUT%2025%20Research%20Study%20Proposal%20-%20Group%20BA%203.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal inline-flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              View Research Proposal
            </a>

            <Link
              to="/#portfolio"
              className="btn-brutal-outline inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </Link>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 pt-6 border-t-2 border-espresso/10 dark:border-white/10 text-center text-sm text-espresso/50 dark:text-slate-400"
          >
            <p>
              By Joseph Davis Chamdani |{" "}
              <Link to="/" className="text-court dark:text-[#60A5FA] hover:underline">
                Academic Portfolio
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectInfo300;

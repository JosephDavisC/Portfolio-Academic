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

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
            >
              INFO 300 Research Proposal
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent"
            >
              Human Judgment vs. AI Alerts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-300 leading-relaxed max-w-2xl mx-auto"
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
              className="rounded-xl border border-white/10 shadow-lg"
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
                className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs"
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
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
            >
              <FileText className="w-5 h-5" />
              View Research Proposal
            </a>

            <Link
              to="/#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-slate-200 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/15 hover:scale-105"
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
            className="mt-6 pt-6 border-t border-white/10 text-center text-sm text-slate-400"
          >
            <p>
              By Joseph Davis Chamdani |{" "}
              <Link to="/" className="text-blue-400 hover:underline">
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

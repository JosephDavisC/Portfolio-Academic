import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const messages = [
  "Game, set, mismatch!",
  "You hit it out — no page here!",
  "Net error! Try again?",
  "Let's rally back to the homepage.",
  "Ace not found.",
  "New balls please! This page is missing."
];

const NotFound = () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 text-center relative overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        🎾
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-6xl opacity-10"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        🎾
      </motion.div>

      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="mb-2"
        >
          <img
            src="/images/404/waakk.PNG"
            alt="Lost character"
            className="w-48 md:w-64 mx-auto drop-shadow-2xl object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-9xl md:text-[12rem] font-extrabold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent mb-4 leading-none">
            404
          </h1>
        </motion.div>

        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {randomMessage}
        </motion.h2>

        <motion.p
          className="text-slate-300 text-lg mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          This court doesn't exist. Let's get you back in play.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/"
            className="btn-brutal inline-flex items-center gap-2 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home Court
          </Link>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
          className="text-6xl mt-12"
        >
          🎾
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8"
        >
          <p className="text-slate-400 text-sm">
            Error Code: 404 | Page Not Found
          </p>
          <a
            href="https://status.joechamdani.com"
            className="mt-2 inline-block text-xs text-slate-500 underline decoration-slate-600 hover:text-slate-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check system status
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

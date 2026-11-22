import { motion } from "framer-motion";
import type { ReactNode } from "react";

// One heading style for every section: title on the left, a short intro on the right,
// a rule underneath. Replaces the centered title + centered subtitle on each section.
export default function SectionHeading({ title, intro }: { title: ReactNode; intro?: ReactNode }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="mb-10 md:mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10 border-b-2 border-espresso/15 dark:border-white/10 pb-5"
    >
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-espresso dark:text-slate-100 leading-[1.05]">{title}</h2>
      {intro && (
        <p className="text-base md:text-lg leading-relaxed text-espresso/70 dark:text-slate-400 max-w-md md:text-right md:pb-1">{intro}</p>
      )}
    </motion.header>
  );
}

import { GraduationCap, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-espresso/10 dark:border-white/10 bg-paper dark:bg-transparent">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-espresso dark:text-slate-200 font-heading text-lg">© Joseph Davis Chamdani</p>

        <div className="flex justify-center items-center gap-2 text-espresso/60 dark:text-slate-400 font-mono">
          <GraduationCap className="w-5 h-5" />
          <span>Academic Portfolio</span>
          <BookOpen className="w-5 h-5" />
        </div>

        <a
          href="https://status.joechamdani.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-espresso/40 dark:text-slate-500 hover:text-court dark:hover:text-[#60A5FA] transition-colors"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
          System Status
        </a>

        {/* UW Disclaimer */}
        <p className="text-sm text-espresso/50 dark:text-slate-500 max-w-md mx-auto leading-relaxed">
          This site is student-run and not officially affiliated with the University of Washington.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

import { GraduationCap, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-espresso/10 dark:border-white/10 bg-paper dark:bg-transparent">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-espresso/60 dark:text-slate-400 text-lg">© Joseph Davis Chamdani</p>

        <div className="flex justify-center items-center gap-2 text-espresso/50 dark:text-slate-500">
          <GraduationCap className="w-5 h-5" />
          <span>Academic Portfolio</span>
          <BookOpen className="w-5 h-5" />
        </div>

        {/* UW Disclaimer */}
        <p className="text-sm text-espresso/50 dark:text-slate-500 max-w-md mx-auto leading-relaxed">
          This site is student-run and not officially affiliated with the University of Washington.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

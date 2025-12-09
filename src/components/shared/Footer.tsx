import { GraduationCap, BookOpen, AlertTriangle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-slate-400 text-lg">© Joseph Davis Chamdani</p>

        <div className="flex justify-center items-center gap-2 text-slate-500">
          <GraduationCap className="w-5 h-5" />
          <span>Academic Portfolio</span>
          <BookOpen className="w-5 h-5" />
        </div>

        {/* UW Disclaimer */}
        <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          This site is student-run and not officially affiliated with the University of Washington.
        </p>

        {/* Note about extensions */}
        <p className="text-xs text-slate-500/70 max-w-md mx-auto leading-relaxed flex items-center justify-center gap-2">
          <AlertTriangle className="w-3.5 h-3.5 inline-block flex-shrink-0" />
          <span>Some browser extensions (like readability tools or Better Campus) may change how this site looks. For the best experience, please view with extensions disabled.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

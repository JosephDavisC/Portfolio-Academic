const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-slate-400 text-lg">© Joseph Davis Chamdani</p>

        <div className="flex justify-center items-center gap-2 text-slate-500">
          <span className="text-lg">🎓</span>
          <span>Academic Portfolio</span>
          <span className="text-lg">📚</span>
        </div>

        {/* UW Disclaimer */}
        <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          This site is student-run and not officially affiliated with the University of Washington.
        </p>

        {/* Note about extensions */}
        <p className="text-xs text-slate-500/70 max-w-md mx-auto leading-relaxed">
          ⚠️ Some browser extensions (like readability tools or Better Campus) may change how this site looks.
          For the best experience, please view with extensions disabled.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

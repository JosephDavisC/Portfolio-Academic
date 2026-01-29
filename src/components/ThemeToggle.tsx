import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative w-16 h-8 rounded-full
        border-2 flex items-center px-1
        ${isDark
          ? 'bg-slate-900 border-slate-700'
          : 'bg-paper border-espresso/30'
        }
      `}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Track icons (sun left, moon right) */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Sun
          size={14}
          className={`transition-opacity duration-300 ${isDark ? 'opacity-30 text-slate-500' : 'opacity-60 text-espresso'}`}
        />
        <Moon
          size={14}
          className={`transition-opacity duration-300 ${isDark ? 'opacity-60 text-slate-400' : 'opacity-30 text-espresso'}`}
        />
      </div>

      {/* Animated thumb */}
      <motion.div
        animate={{ x: isDark ? 32 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`
          relative z-10 w-5 h-5 rounded-full flex items-center justify-center
          ${isDark
            ? 'bg-neon-blue shadow-neon-glow'
            : 'bg-court shadow-brutal-sm'
          }
        `}
      >
        <motion.div
          animate={{ rotate: isDark ? 360 : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {isDark ? (
            <Moon size={12} className="text-slate-900" />
          ) : (
            <Sun size={12} className="text-paper" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
}

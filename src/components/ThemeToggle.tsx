import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const tooltipText = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-md border transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white shadow-2xs group"
      aria-label={tooltipText}
      title={tooltipText}
    >
      {!isDark ? (
        <Sun className="w-5 h-5 text-amber-500 group-hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-5 h-5 text-teal-300 group-hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
};

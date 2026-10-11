import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../types';
import { HeaderSearch } from './HeaderSearch';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-2xs transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* LEFT SIDE: Website logo and name */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="Home: Management & Customer Satisfaction"
          >
            <div className="w-8 h-8 rounded-md bg-slate-900 dark:bg-teal-500/10 border dark:border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-slate-800 dark:group-hover:bg-slate-800 transition-colors">
              <BookOpen className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors whitespace-nowrap">
              Management & Customer Satisfaction
            </span>
          </Link>

          {/* CENTER: Flexible space */}
          <div className="flex-1" />

          {/* RIGHT SIDE: [Search Icon] [Theme Icon] [Menu Icon] */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Search Feature */}
            <HeaderSearch />

            {/* Theme Toggle Button (Between Search and Menu) */}
            <ThemeToggle />

            {/* Menu Button with hamburger icon and dropdown panel */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-2 rounded-md border transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                  menuOpen
                    ? 'bg-slate-900 dark:bg-slate-800 text-white border-slate-900 dark:border-slate-700 shadow-2xs'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 shadow-2xs'
                }`}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                title="Navigation menu"
              >
                {menuOpen ? (
                  <X className="w-5 h-5 text-teal-400" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-700 dark:text-slate-200" />
                )}
              </button>

              {/* Dropdown Menu Container (Right-aligned) */}
              {menuOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 sm:w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-600 dark:text-slate-300">
                      Website Navigation
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">8 Pages</span>
                  </div>

                  <nav className="p-1.5 space-y-0.5">
                    {NAV_ITEMS.map((item, index) => {
                      const active = isActive(item.path);
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center justify-between px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                            active
                              ? 'bg-slate-900 dark:bg-teal-600 text-white font-semibold shadow-2xs'
                              : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                          }`}
                          role="menuitem"
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`w-5 h-5 rounded flex items-center justify-center font-mono text-[10px] font-bold ${
                                active
                                  ? 'bg-teal-500 dark:bg-slate-900 text-slate-950 dark:text-teal-300'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                              }`}
                            >
                              0{index + 1}
                            </span>
                            <span>{item.name}</span>
                          </div>

                          <ChevronRight
                            className={`w-3.5 h-3.5 ${
                              active ? 'text-teal-400 dark:text-white' : 'text-slate-400 dark:text-slate-500'
                            }`}
                          />
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500 text-center">
                    Click any page or press ESC to close
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

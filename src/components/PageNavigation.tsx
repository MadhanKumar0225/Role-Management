import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface PageNavigationProps {
  prevPath?: string;
  prevTitle?: string;
  nextPath?: string;
  nextTitle?: string;
}

export const PageNavigation: React.FC<PageNavigationProps> = ({
  prevPath,
  prevTitle,
  nextPath,
  nextTitle,
}) => {
  return (
    <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        {/* Previous Topic Button */}
        <div>
          {prevPath ? (
            <Link
              to={prevPath}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors text-xs sm:text-sm font-medium shadow-2xs group"
              aria-label={`Go to previous topic: ${prevTitle}`}
            >
              <ChevronLeft className="w-4 h-4 text-slate-400 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-white group-hover:-translate-x-0.5 transition-transform" />
              <span>Previous Topic: {prevTitle || 'Previous'}</span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Back to Home Button */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors text-xs sm:text-sm font-medium border border-transparent dark:border-slate-700"
            aria-label="Back to Home Page"
          >
            <Home className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Next Topic Button */}
        <div>
          {nextPath ? (
            <Link
              to={nextPath}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-slate-900 dark:bg-teal-600 text-white hover:bg-teal-700 dark:hover:bg-teal-500 transition-colors text-xs sm:text-sm font-medium shadow-2xs group"
              aria-label={`Go to next topic: ${nextTitle}`}
            >
              <span>Next Topic: {nextTitle || 'Next'}</span>
              <ChevronRight className="w-4 h-4 text-teal-400 dark:text-teal-200 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors text-xs sm:text-sm font-medium shadow-2xs"
            >
              <span>Back to Home</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

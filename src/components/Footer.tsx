import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { NAV_ITEMS } from '../types';

export const Footer: React.FC = () => {
  const subpages = NAV_ITEMS.filter((item) => item.path !== '/');

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Project Title & Short Description */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-teal-500/20 text-teal-400 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base">
                Role of Management in Improving Customer Satisfaction
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              An educational website designed to study how leadership, employee training, quality control,
              effective communication, and structured complaint resolution create superior customer satisfaction and business growth.
            </p>
          </div>

          {/* Subpages Links */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Topics
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                • Home
              </Link>
              {subpages.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  • {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright & simple links */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Role of Management in Improving Customer Satisfaction. Educational Project.</p>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>·</span>
            <Link to="/introduction" className="hover:text-white transition-colors">Introduction</Link>
            <span>·</span>
            <Link to="/conclusion" className="hover:text-white transition-colors">Conclusion</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

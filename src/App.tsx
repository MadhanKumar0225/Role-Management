/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { IntroductionPage } from './pages/IntroductionPage';
import { RoleOfManagementPage } from './pages/RoleOfManagementPage';
import { CustomerSatisfactionPage } from './pages/CustomerSatisfactionPage';
import { ManagementStrategiesPage } from './pages/ManagementStrategiesPage';
import { BenefitsPage } from './pages/BenefitsPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ConclusionPage } from './pages/ConclusionPage';

// 404 Fallback component
const NotFoundPage: React.FC = () => (
  <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-4">
    <div className="text-4xl font-extrabold text-slate-900 dark:text-white font-mono">404</div>
    <h1 className="text-xl font-bold text-slate-800 dark:text-slate-200">Module or Page Not Found</h1>
    <p className="text-sm text-slate-600 dark:text-slate-400">
      The requested educational path does not exist. Please return to the curriculum home page or choose a module from the menu.
    </p>
    <div className="pt-4">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-teal-600 text-white font-medium text-xs hover:bg-teal-700 dark:hover:bg-teal-500 transition-colors shadow-2xs"
      >
        <span>Return to Home Page</span>
      </Link>
    </div>
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-teal-500 selection:text-white transition-colors duration-150">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/introduction" element={<IntroductionPage />} />
              <Route path="/role-of-management" element={<RoleOfManagementPage />} />
              <Route path="/customer-satisfaction" element={<CustomerSatisfactionPage />} />
              <Route path="/management-strategies" element={<ManagementStrategiesPage />} />
              <Route path="/benefits" element={<BenefitsPage />} />
              <Route path="/case-study" element={<CaseStudyPage />} />
              <Route path="/conclusion" element={<ConclusionPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

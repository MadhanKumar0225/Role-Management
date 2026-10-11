import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Award,
  GraduationCap,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Home,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { ProcessDiagram } from '../components/ProcessDiagram';
import { PageNavigation } from '../components/PageNavigation';

export const ConclusionPage: React.FC = () => {
  const pillars = [
    {
      title: 'Proper Strategic Planning',
      description: 'Establishing customer-centric vision, setting realistic SLAs, and allocating resources to eliminate service bottlenecks.',
    },
    {
      title: 'Employee Development & Coaching',
      description: 'Fostering soft skills, emotional empathy, and granting frontline staff discretion to make immediate customer-delight decisions.',
    },
    {
      title: 'Rigorous Quality Management',
      description: 'Enforcing consistent manufacturing tolerances, standard operating procedures, and automated quality audits across all channels.',
    },
    {
      title: 'Transparent Omnichannel Communication',
      description: 'Eliminating organizational silos to provide customers with unified status updates, accurate order tracking, and honest commitments.',
    },
    {
      title: 'Decisive Complaint Resolution',
      description: 'Harnessing the Service Recovery Paradox to turn aggrieved consumers into lifelong brand advocates through speedy remedies.',
    },
    {
      title: 'Systematic Customer Feedback',
      description: 'Deploying continuous listening posts (CSAT, NPS, CES) to detect emerging friction points before they escalate into churn.',
    },
    {
      title: 'Technology & Innovation',
      description: 'Providing modern CRM tools and omnichannel digital convenience that respects the customer’s time and effort.',
    },
    {
      title: 'Continuous Improvement (Kaizen)',
      description: 'Sustaining a perpetual culture of iterative optimization where every operational metric is refined quarter after quarter.',
    },
  ];

  const takeaways = [
    'Customer satisfaction is an organizational output of managerial culture, not an isolated front-desk task.',
    'Frontline employees treat customers in the precise manner that management treats frontline employees.',
    'Customer expectations evolve constantly; meeting yesterday’s expectations leads to tomorrow’s dissatisfaction.',
    'Speed and empathy in complaint resolution are the ultimate tests of managerial maturity.',
    'Retained, satisfied customers fuel sustainable profitability, lower acquisition costs, and build enduring brand equity.',
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header Banner */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Conclusion
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          Summarizing the role of management in customer satisfaction, core takeaways, and future leadership insights.
        </p>
      </div>

      {/* Final Summary Diagram Requirement */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Final Executive Summary Diagram
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Effective Management → Better Customer Experience → Higher Satisfaction → Stronger Loyalty → Sustainable Business Growth
          </p>
        </div>
        <ProcessDiagram variant="conclusion-flow" />
      </section>

      {/* 8 Contribution Pillars */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            How Effective Management Drives Customer Satisfaction
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            The eight fundamental pillars through which modern leadership achieves customer experience excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-2 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400 block mb-1">
                  Pillar 0{idx + 1}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          Essential Key Takeaways for Students & Practitioners
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Core concepts to retain when designing, managing, or auditing customer service systems.
        </p>

        <div className="space-y-2.5 pt-2">
          {takeaways.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
            >
              <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final Message for Students and Future Managers */}
      <section className="bg-slate-900 dark:bg-slate-900 border border-transparent dark:border-slate-800 text-white rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400">
              Academic Benediction
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              A Final Message for Students and Future Managers
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          As future business leaders, remember that customer service is not a departmental cost center to be minimized.
          It is the living frontline manifestation of your organization's integrity. When you enter management, do not hide behind
          abstract spreadsheets: listen directly to customer complaints, shadow your frontline customer care representatives,
          and measure your leadership success by the genuine smiles, relief, and loyalty of the customers you serve.
        </p>

        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-slate-900 font-semibold text-xs hover:bg-slate-100 transition-colors shadow-2xs"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home Page</span>
          </Link>

          <Link
            to="/management-strategies#feedback-form"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 text-white font-semibold text-xs hover:bg-teal-500 transition-colors shadow-2xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Review Website & Test Feedback Tool</span>
          </Link>
        </div>
      </section>

      {/* Page Navigation */}
      <PageNavigation
        prevPath="/case-study"
        prevTitle="Case Study"
        nextPath="/"
        nextTitle="Home"
      />
    </div>
  );
};

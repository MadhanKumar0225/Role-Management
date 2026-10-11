import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Sparkles,
  GraduationCap,
  MessageSquare,
  AlertTriangle,
  Cpu,
  Trophy,
  CheckCircle,
  Users,
  RefreshCw,
  Building,
  ArrowRight
} from 'lucide-react';
import { ProcessDiagram } from '../components/ProcessDiagram';
import { PageNavigation } from '../components/PageNavigation';

interface Responsibility {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  explanation: string;
  example: string;
  contribution: string;
}

export const RoleOfManagementPage: React.FC = () => {
  const responsibilities: Responsibility[] = [
    {
      id: 1,
      title: '1. Understanding Customer Needs',
      icon: Search,
      explanation:
        'Management must actively gather market intelligence, customer personas, buying preferences, and unspoken pain points rather than assuming what buyers desire.',
      example:
        'Amazon utilizes comprehensive customer search and browsing analytics to recommend products precisely when the user needs them.',
      contribution:
        'Prevents mismatched expectations and ensures product features solve real problems, creating immediate customer delight.',
    },
    {
      id: 2,
      title: '2. Improving Product and Service Quality',
      icon: Sparkles,
      explanation:
        'Leadership establishes strict quality thresholds, sources superior components, and ensures consistency across physical goods and digital interactions.',
      example:
        'Apple rigorously controls hardware manufacturing tolerances and intuitive iOS software design to ensure seamless reliability.',
      contribution:
        'Reduces return rates, builds intrinsic confidence, and reassures customers that their financial investment is worthwhile.',
    },
    {
      id: 3,
      title: '3. Employee Training and Development',
      icon: GraduationCap,
      explanation:
        'Frontline staff require continuous coaching in empathy, active listening, product technicalities, conflict resolution, and digital tool usage.',
      example:
        'The Ritz-Carlton conducts daily 15-minute lineup meetings reinforcing customer service values and empowering staff with problem-solving autonomy.',
      contribution:
        'Empowered and knowledgeable staff solve customer inquiries on the first contact with courtesy, warmth, and professionalism.',
    },
    {
      id: 4,
      title: '4. Effective Communication',
      icon: MessageSquare,
      explanation:
        'Management bridges internal silos so that marketing promises, sales agreements, and customer support reality remain 100% synchronized and transparent.',
      example:
        'Domino’s Pizza introduced the real-time Pizza Tracker, providing customers with exact transparency throughout dough preparation, baking, and delivery.',
      contribution:
        'Eliminates customer anxiety and builds credibility through proactive, honest updates during order fulfillment and service outages.',
    },
    {
      id: 5,
      title: '5. Handling Customer Complaints',
      icon: AlertTriangle,
      explanation:
        'Rather than viewing complaints as nuisances, management constructs structured, rapid dispute-resolution protocols with frontline empowerment.',
      example:
        'Zappos customer service representatives have full managerial freedom to issue immediate replacements or refunds without supervisor sign-offs.',
      contribution:
        'Transforms dissatisfied customers into devoted brand advocates through the "Service Recovery Paradox" (where effective recovery produces higher loyalty than if no error had occurred).',
    },
    {
      id: 6,
      title: '6. Technology and Innovation',
      icon: Cpu,
      explanation:
        'Managers invest in modern CRM platforms, self-service portals, omnichannel ticketing, and automated notifications to streamline interactions.',
      example:
        'Delta Air Lines implemented automated baggage tracking tags that notify passengers via their smartphone app the exact moment luggage is loaded and unloaded.',
      contribution:
        'Dramatically shortens wait times and eliminates friction points across the customer journey.',
    },
    {
      id: 7,
      title: '7. Employee Motivation and Recognition',
      icon: Trophy,
      explanation:
        'Managers design incentive structures, public peer recognition, and a supportive workplace environment that rewards customer-first behavior.',
      example:
        'Southwest Airlines celebrates employees who demonstrate exceptional kindness and customer helpfulness with internal company-wide awards.',
      contribution:
        'Happy, motivated employees naturally deliver authentic, enthusiastic, and attentive service that leaves a lasting positive impression.',
    },
    {
      id: 8,
      title: '8. Quality Control and Compliance',
      icon: CheckCircle,
      explanation:
        'Supervisors deploy regular auditing, secret shopper evaluations, SLA monitoring, and quality checklists to ensure defects are intercepted internally.',
      example:
        'Toyota’s renowned "Andon Cord" allows any factory employee to stop the entire assembly line immediately if a defect is identified.',
      contribution:
        'Guarantees that sub-standard products or erratic service experiences never reach the customer.',
    },
    {
      id: 9,
      title: '9. Customer Relationship Management (CRM)',
      icon: Users,
      explanation:
        'Management deploys centralized databases that store customer preferences, purchase histories, and past interactions across every department.',
      example:
        'Salesforce CRM enables an account rep to view an open billing ticket and an email inquiry before picking up a phone call with a client.',
      contribution:
        'Customers never need to repeat themselves to multiple representatives, creating a unified, deeply personalized experience.',
    },
    {
      id: 10,
      title: '10. Continuous Improvement (Kaizen)',
      icon: RefreshCw,
      explanation:
        'Leadership fosters a culture where processes, tools, and policies are constantly reviewed and refined using post-interaction customer feedback.',
      example:
        'Toyota and General Electric apply Six Sigma and Kaizen methodologies to systematically eliminate minute inefficiencies every quarter.',
      contribution:
        'Prevents organizational complacency and ensures customer experience continuously evolves alongside changing market expectations.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header Banner */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Role of Management in Improving Customer Satisfaction
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          Ten fundamental managerial responsibilities and the core process flow required to build and sustain customer satisfaction.
        </p>
      </div>

      {/* Core Process Diagram Requirement */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Managerial Service Quality Process Diagram
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            The sequential value chain linking management strategy with sustainable customer advocacy.
          </p>
        </div>
        <ProcessDiagram variant="management-flow" />
      </section>

      {/* 10 Responsibilities Grid */}
      <section className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              10 Essential Management Responsibilities
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Each responsibility combines structural leadership, team empowerment, and measurable impact.
            </p>
          </div>
          <span className="text-xs font-mono text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/80 px-3 py-1 rounded border border-teal-200 dark:border-teal-800/60">
            Comprehensive Analysis
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {responsibilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-teal-400 dark:hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 dark:bg-teal-950/80 text-teal-400 dark:text-teal-300 flex items-center justify-center shrink-0 border border-transparent dark:border-teal-800/40">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    {item.explanation}
                  </p>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-0.5">
                      Real-World Business Example:
                    </span>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                      {item.example}
                    </p>
                  </div>

                  <div className="p-2.5 rounded bg-teal-50/60 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-900/60">
                    <span className="font-semibold text-teal-900 dark:text-teal-200 block mb-0.5">
                      Contribution to Customer Satisfaction:
                    </span>
                    <p className="text-teal-800 dark:text-teal-300 text-[11px] leading-relaxed">
                      {item.contribution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-600 dark:text-slate-400 font-medium">Ready to see how management measures customer perceptions and sentiment?</span>
          <div className="flex items-center gap-2">
            <Link
              to="/customer-satisfaction"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 dark:bg-teal-600 text-white font-semibold hover:bg-teal-700 dark:hover:bg-teal-500 transition-colors"
            >
              <span>Explore Satisfaction Metrics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Page Navigation */}
      <PageNavigation
        prevPath="/introduction"
        prevTitle="Introduction"
        nextPath="/customer-satisfaction"
        nextTitle="Customer Satisfaction"
      />
    </div>
  );
};

import React from 'react';
import {
  MessageSquareQuote,
  GraduationCap,
  Sparkles,
  Zap,
  Layers,
  Fingerprint,
  Radio,
  LineChart,
  Award,
  RefreshCw,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { FeedbackForm } from '../components/FeedbackForm';
import { ManagerChecklist } from '../components/ManagerChecklist';
import { PageNavigation } from '../components/PageNavigation';

interface StrategyItem {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  explanation: string;
  businessExample: string;
  expectedResult: string;
}

export const ManagementStrategiesPage: React.FC = () => {
  const strategies: StrategyItem[] = [
    {
      id: 1,
      title: '1. Collect Customer Feedback Systematically',
      icon: MessageSquareQuote,
      explanation:
        'Deploy multi-channel listening posts (post-purchase SMS surveys, email forms, in-app micro-prompts) to gather voice-of-the-customer (VoC) data in real-time.',
      businessExample:
        'Uber asks riders and drivers for a 1-5 star review immediately upon ride completion, ensuring data is captured while the experience is top of mind.',
      expectedResult: 'Instant detection of service failure points before they become endemic.',
    },
    {
      id: 2,
      title: '2. Train and Empower Employees',
      icon: GraduationCap,
      explanation:
        'Equip staff with deep product knowledge, empathy protocols, de-escalation skills, and the financial discretion to solve customer pain points without management sign-off.',
      businessExample:
        'Nordstrom gives sales associates autonomy to accept customer returns without demanding proof of receipt if the claim is reasonable.',
      expectedResult: 'Eliminates agonizing hold times and repetitive phone transfers.',
    },
    {
      id: 3,
      title: '3. Improve Service Quality and Consistency',
      icon: Sparkles,
      explanation:
        'Standardize service workflows with clear Service Level Agreements (SLAs), standard operating manuals, and peer reviews to eliminate erratic quality fluctuations.',
      businessExample:
        'McDonald’s strictly standardizes cooking times, bun temperatures, and counter greetings so a meal tastes identical in London, Tokyo, or New York.',
      expectedResult: 'Instills deep predictability and reliability into every customer touchpoint.',
    },
    {
      id: 4,
      title: '4. Resolve Complaints Rapidly and Decisively',
      icon: Zap,
      explanation:
        'Treat complaints as high-priority intelligence rather than nuisances. Establish 1-hour initial contact SLAs and 24-hour resolution targets.',
      businessExample:
        'Chewy.com customer care teams replace spoiled or wrong pet food instantly and send handwritten holiday cards to pet owners.',
      expectedResult: 'Triggers the Service Recovery Paradox, forging stronger lifelong customer loyalty.',
    },
    {
      id: 5,
      title: '5. Implement Robust CRM Systems',
      icon: Layers,
      explanation:
        'Deploy centralized Customer Relationship Management platforms that maintain 360-degree customer records accessible to sales, support, and billing teams.',
      businessExample:
        'HubSpot and Salesforce unify chat logs, email conversations, invoice histories, and marketing clicks in one single employee dashboard.',
      expectedResult: 'Customers never have to recount their issue from scratch to three separate staff members.',
    },
    {
      id: 6,
      title: '6. Personalize Customer Experiences',
      icon: Fingerprint,
      explanation:
        'Leverage purchase history and user profile data to tailor recommendations, marketing communications, and support greetings to individual tastes.',
      businessExample:
        'Spotify creates hyper-personalized "Discover Weekly" playlists and annual "Wrapped" recaps based on distinct listener streaming patterns.',
      expectedResult: 'Transforms transactional relationships into emotional brand partnerships.',
    },
    {
      id: 7,
      title: '7. Improve Omnichannel Communication',
      icon: Radio,
      explanation:
        'Ensure proactive, transparent status updates across SMS, email, and app notifications whenever orders are placed, delayed, or fulfilled.',
      businessExample:
        'FedEx and UPS send real-time delivery notifications with live driver map approximations and delivery photograph confirmations.',
      expectedResult: 'Eliminates customer anxiety and reduces inbound "Where is my order?" call volume by up to 40%.',
    },
    {
      id: 8,
      title: '8. Monitor Performance with Concrete KPIs',
      icon: LineChart,
      explanation:
        'Rigorously track CSAT, NPS, First Contact Resolution (FCR), Average Handle Time (AHT), and Customer Effort Score (CES) on real-time operational executive dashboards.',
      businessExample:
        'American Express tracks customer sentiment live on call center supervisor screens to intervene during difficult calls.',
      expectedResult: 'Enables proactive management interventions rather than retrospective blame.',
    },
    {
      id: 9,
      title: '9. Reward and Recognize Customer-Centric Staff',
      icon: Award,
      explanation:
        'Tie quarterly bonuses, peer-nominated trophies, and career advancement to verified customer satisfaction ratings and positive reviews.',
      businessExample:
        'Delta Air Lines shares annual company profit bonuses with staff when overall passenger satisfaction benchmarks are achieved.',
      expectedResult: 'Fosters an internal culture where staff view customer happiness as personal victory.',
    },
    {
      id: 10,
      title: '10. Continuously Improve Business Processes (Kaizen)',
      icon: RefreshCw,
      explanation:
        'Schedule monthly cross-departmental reviews to analyze recurring customer friction points and re-engineer underlying operational procedures.',
      businessExample:
        'Toyota holds regular shop-floor quality circles where line technicians suggest minor workflow improvements every week.',
      expectedResult: 'Ensures the enterprise adapts continuously to rising consumer expectations.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header Banner */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Strategies for Improving Customer Satisfaction
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          Actionable managerial strategies, implementation phases, manager checklist, and customer feedback mechanisms.
        </p>
      </div>

      {/* Step-by-Step Implementation Roadmap */}
      <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Step-by-Step Implementation Process for Managers
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            A four-phase operational roadmap to transition from fragmented service to structured excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
            <span className="font-mono text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/80 px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800/60">
              Phase 01
            </span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Diagnosis & Journey Mapping</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Audit current touchpoints, map customer journeys, catalog recurring complaint themes, and establish baseline CSAT benchmarks.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
            <span className="font-mono text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/80 px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800/60">
              Phase 02
            </span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Staff Empowerment & Tooling</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Equip frontline agents with unified CRM platforms, clarify resolution authority limits, and conduct soft-skills empathy workshops.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
            <span className="font-mono text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/80 px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800/60">
              Phase 03
            </span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">SLA Standard Execution</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Publish strict response time benchmarks, enforce first-contact resolution standards, and deploy automated notification triggers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
            <span className="font-mono text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/80 px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800/60">
              Phase 04
            </span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Kaizen Feedback Loop</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Hold weekly manager review forums, reward top-rated service employees, and iteratively refine operational bottlenecks.
            </p>
          </div>
        </div>
      </section>

      {/* 10 Strategy Cards */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              10 Practical Management Strategies
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Detailed breakdown of managerial levers with empirical corporate benchmarks.
            </p>
          </div>
          <span className="text-xs font-mono text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/80 px-2.5 py-1 rounded border border-teal-200 dark:border-teal-800/60">
            Action Playbook
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategies.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-teal-400 dark:hover:border-teal-500 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-teal-950/80 text-teal-400 dark:text-teal-300 flex items-center justify-center shrink-0 border border-transparent dark:border-teal-800/40">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    {item.explanation}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-0.5">Practical Example:</span>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">{item.businessExample}</p>
                  </div>
                  <div className="p-2.5 rounded bg-teal-50/60 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60">
                    <span className="font-semibold text-teal-900 dark:text-teal-200 block mb-0.5">Operational Result:</span>
                    <p className="text-teal-800 dark:text-teal-300 text-[11px] leading-relaxed">{item.expectedResult}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Manager Checklist Requirement */}
      <section className="space-y-4">
        <ManagerChecklist />
      </section>

      {/* Interactive Feedback Form Requirement */}
      <section className="space-y-4">
        <FeedbackForm />
      </section>

      {/* Page Navigation */}
      <PageNavigation
        prevPath="/customer-satisfaction"
        prevTitle="Customer Satisfaction"
        nextPath="/benefits"
        nextTitle="Benefits"
      />
    </div>
  );
};

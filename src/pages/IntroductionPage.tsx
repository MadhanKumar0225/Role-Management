import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Target,
  Compass,
  ArrowRight,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { PageNavigation } from '../components/PageNavigation';

export const IntroductionPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header Banner */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Introduction: Management & Customer Satisfaction
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          Core definitions, objectives, importance, and how management shapes the customer experience.
        </p>
      </div>

      {/* Section 1 & 2: Meaning of Management & Customer Satisfaction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Meaning of Management */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-lg bg-slate-900 dark:bg-teal-950/80 text-teal-400 dark:text-teal-300 flex items-center justify-center border border-transparent dark:border-teal-800/40">
            <Building2 className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Meaning of Management</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-800 dark:text-slate-100">Management</strong> is the structured process of planning, organizing,
            directing, and controlling human, financial, physical, and informational resources to achieve organizational goals effectively and efficiently.
          </p>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <div className="font-semibold text-slate-900 dark:text-white">Student Analogy:</div>
            <p>
              Think of management like the conductor of an orchestra: individual musicians possess incredible talent,
              but without tempo, coordination, and unified direction, the performance would be chaotic.
            </p>
          </div>
          <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span><strong className="text-slate-800 dark:text-slate-200">Planning:</strong> Setting clear service benchmarks and SLAs.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span><strong className="text-slate-800 dark:text-slate-200">Organizing:</strong> Allocating tools, staffing shifts, and CRM tech.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span><strong className="text-slate-800 dark:text-slate-200">Controlling:</strong> Auditing satisfaction metrics against standards.</span>
            </div>
          </div>
        </div>

        {/* Definition of Customer Satisfaction */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Customer Satisfaction Defined</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-800 dark:text-slate-100">Customer Satisfaction (CSAT)</strong> is a measure of how products,
            services, and overall touchpoints supplied by an enterprise meet or surpass customer expectations.
          </p>
          <div className="p-3.5 bg-teal-50/70 dark:bg-teal-950/40 rounded-lg border border-teal-200 dark:border-teal-800/60 text-xs text-teal-900 dark:text-teal-200 space-y-1">
            <div className="font-semibold text-teal-950 dark:text-teal-100">The Expectation-Disconfirmation Model:</div>
            <p>
              Satisfaction = <span className="font-semibold">Perceived Performance</span> − <span className="font-semibold">Prior Expectations</span>.
              When performance &gt; expectations, customer delight occurs.
            </p>
          </div>
          <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span><strong className="text-slate-800 dark:text-slate-200">Cognitive Dimension:</strong> Rational evaluation of product features & price.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span><strong className="text-slate-800 dark:text-slate-200">Emotional Dimension:</strong> Feelings of respect, ease, and trust felt by the customer.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span><strong className="text-slate-800 dark:text-slate-200">Behavioral Dimension:</strong> Willingness to repurchase and recommend to peers.</span>
            </div>
          </div>
          <div className="pt-2">
            <Link
              to="/customer-satisfaction"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-teal-100 bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 dark:hover:bg-teal-900/80 px-3 py-1.5 rounded-md transition-colors border border-transparent dark:border-teal-800/60"
            >
              <span>Try Interactive 1-to-5 Rating Simulator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Conceptual Overview Diagram */}
      <div className="bg-slate-900 dark:bg-slate-900 border border-slate-800 text-white rounded-xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-lg font-bold text-white">Conceptual Overview Diagram</h3>
            <p className="text-xs text-slate-400">The direct structural link uniting management leadership and customer delight.</p>
          </div>
          <span className="text-xs font-mono text-teal-400 bg-slate-800 px-2.5 py-1 rounded">Core Framework</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-slate-800/90 border border-slate-700 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-400">Input Layer</div>
            <div className="text-base font-bold text-white">Management Inputs</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Strategic vision, employee hiring & training, resource provisioning, standard operating procedures, and company culture.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-800/90 border border-slate-700 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-400">Operational Layer</div>
            <div className="text-base font-bold text-white">Service Delivery Pipeline</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Frontline responsiveness, order accuracy, swift problem escalation resolution, and empathetic customer communication.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-800/90 border border-slate-700 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-400">Outcome Layer</div>
            <div className="text-base font-bold text-white">Customer Satisfaction</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Customer trust, reduced churn rates, organic positive referrals, high Net Promoter Scores, and sustainable business revenue.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Importance of Customer Satisfaction in Business */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Importance of Customer Satisfaction in Business</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Why contemporary corporate executives place customer satisfaction at the center of boardroom strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Customer Retention</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Retaining satisfied buyers produces continuous recurring revenue, insulating organizations against sudden economic downturns.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Brand Equity & Trust</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Favorable customer perceptions elevate brand equity, enabling businesses to withstand minor service setbacks without catastrophic reputational harm.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Reduced Acquisition Costs</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Acquiring new customers is 5 to 7 times more expensive than keeping existing ones; satisfied clients refer new customers without advertising expense.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Price Insensitivity</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              When customers receive reliable, frictionless, and polite service, they are substantially less sensitive to moderate price adjustments.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Employee Morale</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Frontline employees experience significantly lower stress and burnout when interacting with content, satisfied customers rather than angry ones.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Defensible Advantage</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Competitors can easily copy software code or wholesale catalog items, but replicating an empathetic, customer-centric management culture is nearly impossible.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Relationship Between Management and Customer Satisfaction */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          4. The Relationship Between Management and Customer Satisfaction
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Customer satisfaction is an organizational reflection of managerial behavior. Frontline staff treat customers
          in the exact manner that management treats frontline staff (the famous <em className="text-slate-800 dark:text-slate-200">Service-Profit Chain</em>).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-lg bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-950 dark:text-rose-200 space-y-2">
            <div className="font-bold flex items-center gap-1.5 text-rose-800 dark:text-rose-400 text-sm">
              <span>Poor Management Cascading Effect</span>
            </div>
            <p className="leading-relaxed">
              Unclear expectations + understaffed shifts + lack of resolution authority + obsolete software →
              Frustrated, disengaged staff → Slow, erratic customer interactions → <strong>Customer dissatisfaction and churn</strong>.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/60 text-xs text-teal-950 dark:text-teal-200 space-y-2">
            <div className="font-bold flex items-center gap-1.5 text-teal-800 dark:text-teal-400 text-sm">
              <span>Effective Management Cascading Effect</span>
            </div>
            <p className="leading-relaxed">
              Clear service standards + comprehensive training + empowered decision-making + modern CRM tools →
              Confident, motivated personnel → Prompt, empathetic service → <strong>High customer satisfaction and brand loyalty</strong>.
            </p>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <Link
            to="/role-of-management"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-slate-900 dark:bg-teal-600 hover:bg-teal-700 dark:hover:bg-teal-500 px-4 py-2.5 rounded-lg transition-colors shadow-2xs"
          >
            <span>Explore 10 Management Responsibilities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Section 5 & 6: Objectives & Scope */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center">
            <Target className="w-5 h-5 text-teal-700 dark:text-teal-400" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Core Objectives</h2>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span><strong className="text-slate-800 dark:text-slate-200">Eliminate Service Friction:</strong> Minimize customer effort during ordering, onboarding, and inquiry.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span><strong className="text-slate-800 dark:text-slate-200">Enhance First-Contact Resolution (FCR):</strong> Resolve customer inquiries on the first attempt without repeated callbacks.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span><strong className="text-slate-800 dark:text-slate-200">Establish Systematic Feedback Loops:</strong> Transform customer complaints into actionable product upgrades.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span><strong className="text-slate-800 dark:text-slate-200">Build Long-Term Brand Advocates:</strong> Foster emotional customer resonance and high Net Promoter Scores.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center">
            <Compass className="w-5 h-5 text-teal-700 dark:text-teal-400" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">6. Scope in Customer Service</h2>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span><strong className="text-slate-800 dark:text-slate-200">Pre-Purchase Engagement:</strong> Accurate marketing, transparent pricing, and responsive sales consultations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span><strong className="text-slate-800 dark:text-slate-200">Transaction & Fulfillment:</strong> Frictionless checkout, prompt delivery, and flawless product packaging.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span><strong className="text-slate-800 dark:text-slate-200">Post-Purchase Support:</strong> Accessible help desks, transparent warranty claims, and active feedback surveys.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span><strong className="text-slate-800 dark:text-slate-200">Lifecycle Relationship Management:</strong> Personalized loyalty incentives and continuous value delivery.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Page Navigation */}
      <PageNavigation
        prevPath="/"
        prevTitle="Home"
        nextPath="/role-of-management"
        nextTitle="Role of Management"
      />
    </div>
  );
};

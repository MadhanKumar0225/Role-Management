import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  AlertTriangle,
  BarChart,
  Lightbulb,
  GraduationCap,
  Sparkles,
  Zap,
  Award,
  CheckCircle2,
  ArrowRight,
  Info,
  ShieldCheck
} from 'lucide-react';
import { PageNavigation } from '../components/PageNavigation';

export const CaseStudyPage: React.FC = () => {
  const tableData = [
    {
      area: 'Response Time (Customer Inquiries)',
      before: 'Slow (Average 48 to 72 hours via email; long queue lines)',
      after: 'Faster (Under 2 hours for digital inquiries; queue time capped at 3 min)',
      impact: 'Immediate drop in customer frustration and anxiety',
    },
    {
      area: 'Complaint Handling Protocol',
      before: 'Inconsistent (Ad-hoc; customers had to argue with supervisors)',
      after: 'Structured (Tiered ticketing with 24-hr resolution SLA and frontline authority)',
      impact: 'Service Recovery Paradox turned 78% of complainants into repeat buyers',
    },
    {
      area: 'Employee Training & Coaching',
      before: 'Limited (One-time 2-hour onboarding orientation, no ongoing coaching)',
      after: 'Regular (Bi-weekly customer empathy & de-escalation practical workshops)',
      impact: 'Frontline staff gained confidence, reducing employee turnover by 34%',
    },
    {
      area: 'Customer Feedback Collection',
      before: 'Rarely collected (Occasional paper comment cards rarely reviewed)',
      after: 'Collected regularly (Automated digital CSAT post-purchase micro-surveys)',
      impact: 'Provided leadership with real-time operational trend intelligence',
    },
    {
      area: 'Overall Customer Experience',
      before: 'Inconsistent (Depended entirely on which cashier was on duty)',
      after: 'Improved & Predictable (Unified omnichannel standards across all stores)',
      impact: 'CSAT score surged from 54% to 89% across a 12-month transformation',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header Banner */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Case Study on Improving Customer Satisfaction
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          A practical fictional example of a retail company overcoming service bottlenecks, communication challenges, and complaint delays through management intervention.
        </p>

        {/* Mandatory Fictional Notice */}
        <div className="p-3.5 rounded-lg bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold text-amber-950 dark:text-amber-100">Academic Case Notice:</strong> "Aura Lifestyle Retail" is a{' '}
            <strong className="font-semibold text-amber-950 dark:text-amber-100">purely fictional company</strong> constructed exclusively for educational
            curriculum analysis. All operational metrics, employee quotes, and outcomes represent hypothetical scenarios designed to illustrate management theory.
          </div>
        </div>
      </div>

      {/* Hero Visual for Case Study */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-slate-100 dark:bg-slate-800 aspect-16/9 relative">
        <img
          src="/src/assets/images/case_study_retail_1791702211121.jpg"
          alt="Retail store manager coaching customer care personnel on tablet during store transformation"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <span className="text-xs font-semibold font-mono text-teal-300 uppercase tracking-wider">
            Operational Field Study
          </span>
          <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white">
            Aura Lifestyle Retail: From Escalations to Customer Trust
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl">
            How executive restructuring, employee empowerment, and real-time listening restored brand loyalty across 45 regional branches.
          </p>
        </div>
      </div>

      {/* 8-Part Structured Narrative */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Case Analysis in Eight Sequential Phases
        </h2>

        {/* 1. Company Background */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-teal-950 text-teal-400 font-mono text-xs flex items-center justify-center font-bold border border-transparent dark:border-teal-800/40">
              01
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">1. Company Background</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Founded in 2018, <strong className="text-slate-900 dark:text-slate-200">Aura Lifestyle Retail</strong> operated 45 physical department boutiques alongside a growing e-commerce storefront.
            During its initial four years of hyper-growth, senior management focused almost exclusively on inventory procurement and aggressive social media advertising.
            However, internal customer service infrastructure failed to keep pace with rapid sales volume.
          </p>
        </div>

        {/* 2. Initial Customer Service Problems */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-rose-700 text-white font-mono text-xs flex items-center justify-center font-bold">
              02
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">2. Initial Customer Service Problems</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            By mid-2023, the organization was in acute crisis. Customer reviews on Google and Trustpilot dropped to 2.3 out of 5 stars.
            Three fatal bottlenecks crippled daily operations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
            <div className="p-3 bg-rose-50/60 dark:bg-rose-950/40 rounded border border-rose-200 dark:border-rose-900/60 text-rose-950 dark:text-rose-200">
              <span className="font-bold block mb-1">Slow Service & Long Queues:</span>
              Store checkout queues exceeded 18 minutes; e-commerce email support took 48 to 72 hours to acknowledge incoming tickets.
            </div>
            <div className="p-3 bg-rose-50/60 dark:bg-rose-950/40 rounded border border-rose-200 dark:border-rose-900/60 text-rose-950 dark:text-rose-200">
              <span className="font-bold block mb-1">Severe Communication Silos:</span>
              Online order status was invisible to physical store cashiers. When customers asked in-store about online packages, staff turned them away.
            </div>
            <div className="p-3 bg-rose-50/60 dark:bg-rose-950/40 rounded border border-rose-200 dark:border-rose-900/60 text-rose-950 dark:text-rose-200">
              <span className="font-bold block mb-1">Delayed Dispute Resolution:</span>
              Cashiers possessed zero authority to issue refunds or replace damaged shipments without escalating to regional managers.
            </div>
          </div>
        </div>

        {/* 3. Customer Feedback Analysis */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-teal-950 text-teal-400 font-mono text-xs flex items-center justify-center font-bold border border-transparent dark:border-teal-800/40">
              03
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">3. Customer Feedback Analysis</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            The board appointed an interim Customer Experience Director who commissioned an exhaustive review of 1,200 negative reviews and support logs.
            The findings proved striking: customers were satisfied with the physical product styles and pricing, but <strong className="text-slate-900 dark:text-slate-200">81% of complaints cited employee helplessness and lack of prompt communication</strong>.
          </p>
        </div>

        {/* 4. Management Decisions */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-teal-950 text-teal-400 font-mono text-xs flex items-center justify-center font-bold border border-transparent dark:border-teal-800/40">
              04
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">4. Key Management Decisions</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Leadership declared customer satisfaction the top enterprise KPI, tying executive compensation directly to CSAT improvements.
            The company reallocated 22% of its external marketing budget into internal service training, omnichannel CRM software, and frontline staff retention incentives.
          </p>
        </div>

        {/* 5. Employee Training */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-teal-950 text-teal-400 font-mono text-xs flex items-center justify-center font-bold border border-transparent dark:border-teal-800/40">
              05
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">5. Employee Training & Development</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            All 680 frontline employees underwent a mandatory 16-hour workshop titled <em>"Empathy in Service"</em>.
            Staff role-played difficult dispute scenarios, mastered active listening techniques, and were taught the psychological importance of sincere apologies and swift solutions.
          </p>
        </div>

        {/* 6. Service Process Improvements */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-teal-950 text-teal-400 font-mono text-xs flex items-center justify-center font-bold border border-transparent dark:border-teal-800/40">
              06
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">6. Service Process Improvements</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Stores rolled out mobile checkout tablets allowing staff to ring up purchases anywhere on the sales floor during peak hours, reducing register lines.
            A unified cloud CRM was deployed linking web orders to in-store inventory, enabling customers to return e-commerce items at any retail counter in under 60 seconds.
          </p>
        </div>

        {/* 7. Complaint-Resolution Improvements */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-teal-950 text-teal-400 font-mono text-xs flex items-center justify-center font-bold border border-transparent dark:border-teal-800/40">
              07
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">7. Complaint-Resolution Overhaul</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Management instituted the <strong className="text-slate-900 dark:text-slate-200">"Frontline $75 Authority Rule"</strong>: every store associate was empowered to issue immediate exchanges,
            refunds, or store gift cards up to $75 without supervisor approval. Escalation tickets dropped by 70%, and first-contact resolution rates exceeded 88%.
          </p>
        </div>

        {/* 8. Results and Lessons Learned */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-teal-600 text-white font-mono text-xs flex items-center justify-center font-bold">
              08
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">8. Results & Transformational Outcomes</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Over the following 12 months, customer satisfaction scores jumped from a dismal 54% to a stellar 89%.
            Repeat purchase frequency doubled, inbound return complaints dropped by 65%, and annual operating profit rose 28% despite reduced marketing expenditures.
          </p>
        </div>
      </div>

      {/* Illustrative Before-and-After Comparison Table */}
      <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Illustrative Before-and-After Comparison Table
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Hypothetical academic comparative model demonstrating organizational transformation indicators.
            </p>
          </div>
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded">
            Hypothetical Model
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-semibold">
                <th className="py-3 px-4">Performance Area</th>
                <th className="py-3 px-4 text-rose-800 dark:text-rose-400">Before Improvement</th>
                <th className="py-3 px-4 text-teal-800 dark:text-teal-400">After Improvement</th>
                <th className="py-3 px-4 text-slate-700 dark:text-slate-300">Observed Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {tableData.map((row) => (
                <tr key={row.area} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">{row.area}</td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 bg-rose-50/20 dark:bg-rose-950/20">{row.before}</td>
                  <td className="py-3.5 px-4 text-slate-900 dark:text-slate-100 font-medium bg-teal-50/20 dark:bg-teal-950/20">{row.after}</td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-2 text-[11px] text-slate-400 dark:text-slate-500 italic flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 shrink-0" />
          <span>Note: Descriptions and outcomes in this table are hypothetical examples, not verified company results.</span>
        </div>
      </section>

      {/* Lessons for Managers Section */}
      <section className="bg-slate-900 dark:bg-slate-900 border border-transparent dark:border-slate-800 text-white rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
            Managerial Synthesis
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
            Lessons for Managers & Future Executives
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Five enduring principles derived from the retail turnaround analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-1.5">
            <div className="text-xs font-mono font-bold text-teal-400">Lesson 01</div>
            <h4 className="text-sm font-bold text-white">Trust Your Frontline Staff</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              When managers force employees to seek permission for minor adjustments, the customer feels punished. Empowerment yields speed and delight.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-1.5">
            <div className="text-xs font-mono font-bold text-teal-400">Lesson 02</div>
            <h4 className="text-sm font-bold text-white">Silos Destroy Service</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Customers perceive an enterprise as a single entity. Omnichannel technology must bridge gaps between digital apps and brick-and-mortar stores.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-1.5">
            <div className="text-xs font-mono font-bold text-teal-400">Lesson 03</div>
            <h4 className="text-sm font-bold text-white">Speed Signals Respect</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              In customer care, rapid response time is equivalent to courtesy. Unacknowledged tickets breed resentment far faster than product flaws.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-1.5">
            <div className="text-xs font-mono font-bold text-teal-400">Lesson 04</div>
            <h4 className="text-sm font-bold text-white">Measure What Truly Matters</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tracking handle time alone incentivizes agents to hang up quickly. Managers must balance speed metrics with CSAT and resolution quality.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-1.5 md:col-span-2 lg:col-span-2">
            <div className="text-xs font-mono font-bold text-teal-400">Lesson 05</div>
            <h4 className="text-sm font-bold text-white">Complaints Are Free Consultations</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              A complaining customer has given the organization an opportunity to correct a flaw. Disregarding complaints guarantees silent defections to competitors.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-slate-400">Continue exploring how these lessons shape sustainable business models:</span>
          <div className="flex items-center gap-2">
            <Link
              to="/benefits"
              className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
            >
              <span>← Benefits Analysis</span>
            </Link>
            <Link
              to="/conclusion"
              className="px-3.5 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Conclusion & Summary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Page Navigation */}
      <PageNavigation
        prevPath="/benefits"
        prevTitle="Benefits"
        nextPath="/conclusion"
        nextTitle="Conclusion"
      />
    </div>
  );
};

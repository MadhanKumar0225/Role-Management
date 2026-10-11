import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Repeat,
  Megaphone,
  ShieldCheck,
  UserCheck,
  Smile,
  ShieldAlert,
  TrendingUp,
  Crown,
  DollarSign,
  BarChart3,
  Info,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import { PageNavigation } from '../components/PageNavigation';

interface BenefitCard {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'Revenue & Growth' | 'Brand & Market' | 'Operational Excellence';
  summary: string;
  mechanism: string;
  illustrativeMetric: string;
}

export const BenefitsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const benefits: BenefitCard[] = [
    {
      id: 1,
      title: '1. Increased Customer Loyalty',
      icon: Heart,
      category: 'Revenue & Growth',
      summary:
        'Customers develop an emotional bond with the organization, actively choosing the brand over competitors even during minor price increases.',
      mechanism: 'Consistent positive experiences create psychological switching barriers and brand attachment.',
      illustrativeMetric: '+85% illustrative customer retention probability over 3-year horizon',
    },
    {
      id: 2,
      title: '2. Higher Repeat Purchase Frequency',
      icon: Repeat,
      category: 'Revenue & Growth',
      summary:
        'Satisfied consumers require minimal persuasion to return. They purchase higher volumes and demonstrate higher average order value (AOV).',
      mechanism: 'Familiarity and trust remove hesitation, speeding up purchase consideration cycles.',
      illustrativeMetric: '~2.8x higher annual transaction frequency compared to neutral clients',
    },
    {
      id: 3,
      title: '3. Organic Positive Word-of-Mouth',
      icon: Megaphone,
      category: 'Brand & Market',
      summary:
        'Delighted customers become voluntary brand ambassadors, promoting the business on social media, review portals, and personal networks.',
      mechanism: 'Social proof drives inbound peer referrals with zero cost-per-click acquisition costs.',
      illustrativeMetric: '4.2 to 1 referral multiplication factor among promoters',
    },
    {
      id: 4,
      title: '4. Enhanced Brand Reputation & Goodwill',
      icon: ShieldCheck,
      category: 'Brand & Market',
      summary:
        'High customer satisfaction builds a reservoir of public trust that protects the company during industry crises or minor operational missteps.',
      mechanism: 'Reputation equity dampens media scrutiny and increases forgiving attitudes.',
      illustrativeMetric: 'Top quartile Net Promoter Score (NPS) in industry category',
    },
    {
      id: 5,
      title: '5. Superior Customer Retention Rates',
      icon: UserCheck,
      category: 'Revenue & Growth',
      summary:
        'Minimizes customer churn. Preserving the existing customer base stabilizes predictable monthly and annual recurring revenue streams.',
      mechanism: 'Lower churn eliminates the expensive treadmill of constant customer replacement.',
      illustrativeMetric: '5% increase in retention correlates with up to 25% profit growth',
    },
    {
      id: 6,
      title: '6. Elevated Employee Morale & Performance',
      icon: Smile,
      category: 'Operational Excellence',
      summary:
        'When customers are pleased, employee burnout and frontline stress decrease significantly, resulting in higher job satisfaction and lower staff turnover.',
      mechanism: 'Positive customer interactions foster pride, enthusiasm, and lower absenteeism.',
      illustrativeMetric: '30% reduction in frontline staff turnover and onboarding costs',
    },
    {
      id: 7,
      title: '7. Substantial Reduction in Inbound Complaints',
      icon: ShieldAlert,
      category: 'Operational Excellence',
      summary:
        'Proactive management and standard quality controls catch flaws early, freeing up support resources and shortening queue times.',
      mechanism: 'Error-proofing at the source reduces call center escalation tickets and dispute fees.',
      illustrativeMetric: '65% fewer escalation tickets requiring supervisor intervention',
    },
    {
      id: 8,
      title: '8. Accelerated Business Growth & Scalability',
      icon: TrendingUp,
      category: 'Revenue & Growth',
      summary:
        'Reinvestment of retained customer capital fuels product innovation, geographical expansion, and talent acquisition.',
      mechanism: 'Compounding cash flow from predictable customer accounts supports strategic R&D.',
      illustrativeMetric: '2x faster market share growth relative to low-CSAT competitors',
    },
    {
      id: 9,
      title: '9. Defensible Competitive Advantage',
      icon: Crown,
      category: 'Brand & Market',
      summary:
        'Competitors can easily copy software code or match catalog prices, but replicating an empathetic, customer-centric management culture is nearly impossible.',
      mechanism: 'High satisfaction creates defensible moat resistant to commoditization.',
      illustrativeMetric: 'Strong barrier against aggressive rival discount promotions',
    },
    {
      id: 10,
      title: '10. Long-Term Profitability & Shareholder Value',
      icon: DollarSign,
      category: 'Revenue & Growth',
      summary:
        'The combination of high lifetime value (LTV), low customer acquisition costs (CAC), and operational efficiency yields sustainable margins.',
      mechanism: 'High LTV to CAC ratios maximize return on capital and investor confidence.',
      illustrativeMetric: 'Significant improvement in operating profit margins',
    },
  ];

  const filtered =
    selectedCategory === 'all'
      ? benefits
      : benefits.filter((b) => b.category === selectedCategory);

  const illustrativeEconomics = [
    { label: 'Customer Retention Rate', baseline: '68%', optimized: '92%', change: '+24%' },
    { label: 'Customer Acquisition Cost (CAC)', baseline: '$140', optimized: '$58', change: '-58%' },
    { label: 'Customer Lifetime Value (LTV)', baseline: '$620', optimized: '$1,850', change: '+198%' },
    { label: 'LTV to CAC Efficiency Ratio', baseline: '4.4x', optimized: '31.8x', change: '7.2x Surge' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header Banner */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Benefits of Improving Customer Satisfaction
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          Major organizational benefits: customer loyalty, repeat purchases, positive word-of-mouth, brand reputation, retention, and business growth.
        </p>
      </div>

      {/* Impact on Business Success Section */}
      <section className="bg-slate-900 dark:bg-slate-900 border border-transparent dark:border-slate-800 text-white rounded-2xl p-6 sm:p-10 shadow-lg space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
            Strategic Imperative
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Impact on Business Success & Sustainable Growth
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            In competitive markets, the cost of customer acquisition constantly increases due to saturated advertising channels.
            Sustainable enterprise growth depends fundamentally on <strong className="text-white">net revenue retention</strong>—keeping
            current clients satisfied so that their compounding spend outpaces operational costs.
          </p>
        </div>

        {/* Illustrative Comparative Metric Matrix */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-1 border-b border-slate-800">
            <span>Illustrative Economic Impact Model (Sample Academic Figures)</span>
            <span className="font-mono text-teal-400">Baseline vs. Optimized</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {illustrativeEconomics.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl bg-slate-800/90 dark:bg-slate-800/70 border border-slate-700 space-y-2"
              >
                <div className="text-xs font-medium text-slate-400">{item.label}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-mono text-white">{item.optimized}</span>
                  <span className="text-xs line-through text-slate-500 font-mono">{item.baseline}</span>
                </div>
                <div className="text-xs font-semibold font-mono text-teal-400 flex items-center gap-1">
                  <span>{item.change}</span>
                  <span className="text-[10px] text-slate-400 font-normal font-sans">sample model</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400 italic">
            <Info className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>Note: Values shown in this matrix represent illustrative academic sample models highlighting theoretical compounding gains.</span>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              10 Major Organizational Benefits
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Filter by strategic pillar to examine revenue, market reputation, or operational benefits.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium shrink-0 self-start sm:self-auto border border-transparent dark:border-slate-700">
            {['all', 'Revenue & Growth', 'Brand & Market', 'Operational Excellence'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Benefits (10)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-teal-500 dark:hover:border-teal-500 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 dark:bg-teal-950/80 text-teal-400 dark:text-teal-300 flex items-center justify-center border border-transparent dark:border-teal-800/40">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-transparent dark:border-slate-700">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    {item.summary}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-0.5">Managerial Mechanism:</span>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">{item.mechanism}</p>
                  </div>
                  <div className="p-2.5 rounded bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 text-teal-900 dark:text-teal-200">
                    <span className="font-semibold block mb-0.5">Academic Illustrative Benchmark:</span>
                    <p className="font-mono text-[11px] text-teal-800 dark:text-teal-300">{item.illustrativeMetric}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sustainable Growth Diagram */}
      <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          The Virtuous Growth Cycle of Customer Satisfaction
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          When management commits to quality, customer trust generates higher retained cash flow. This capital is reinvested into employee training
          and technological upgrades, which further elevates service consistency—creating an insurmountable flywheel effect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/70 rounded-lg border border-slate-200 dark:border-slate-700 text-center space-y-1">
            <div className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400">Step 1</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Management Quality Focus</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Standards, training, and customer-first values.</p>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/70 rounded-lg border border-slate-200 dark:border-slate-700 text-center space-y-1">
            <div className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400">Step 2</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Reduced Service Friction</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Swift issue resolution and consistent interactions.</p>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/70 rounded-lg border border-slate-200 dark:border-slate-700 text-center space-y-1">
            <div className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400">Step 3</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Elevated Customer LTV</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Repeat orders and word-of-mouth recommendations.</p>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/70 rounded-lg border border-slate-200 dark:border-slate-700 text-center space-y-1">
            <div className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400">Step 4</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Reinvestment Capacity</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Funding continuous innovation and employee rewards.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-500 dark:text-slate-400">See how these theoretical economic benefits unfolded in practice:</span>
          <div className="flex items-center gap-2">
            <Link
              to="/case-study"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 dark:bg-teal-600 hover:bg-teal-700 dark:hover:bg-teal-500 text-white font-semibold transition-colors shadow-2xs"
            >
              <span>Examine Retail Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Page Navigation */}
      <PageNavigation
        prevPath="/management-strategies"
        prevTitle="Management Strategies"
        nextPath="/case-study"
        nextTitle="Case Study"
      />
    </div>
  );
};

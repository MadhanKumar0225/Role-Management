import React, { useState } from 'react';
import { Star, Info, TrendingUp } from 'lucide-react';

interface RatingLevel {
  level: number;
  label: string;
  sentiment: string;
  customerPerception: string;
  managerialResponse: string;
  retentionProbability: string;
  color: string;
}

const RATING_LEVELS: RatingLevel[] = [
  {
    level: 1,
    label: 'Very Dissatisfied',
    sentiment: 'Critical Risk',
    customerPerception: 'Severe disappointment, unresolved defects, rude service, or prolonged hold times.',
    managerialResponse: 'Immediate incident review, escalation team outreach within 24 hours, root cause remediation.',
    retentionProbability: '12% (High churn & negative review hazard)',
    color: 'text-rose-600 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/60',
  },
  {
    level: 2,
    label: 'Dissatisfied',
    sentiment: 'Unfulfilled Expectation',
    customerPerception: 'Minor service delays, confusing policies, sub-standard product delivery, or friction.',
    managerialResponse: 'Frontline empowerment to offer immediate refunds/credits, staff coaching on service scripts.',
    retentionProbability: '35% (Vulnerable to competitor acquisition)',
    color: 'text-amber-600 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60',
  },
  {
    level: 3,
    label: 'Neutral',
    sentiment: 'Acceptable Baseline',
    customerPerception: 'Basic contractual needs met without distinction, no emotional connection or delight.',
    managerialResponse: 'Customer journey mapping to identify differentiators, proactive follow-up survey.',
    retentionProbability: '58% (Easily swayed by lower discount pricing)',
    color: 'text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 border-slate-300 dark:border-slate-700',
  },
  {
    level: 4,
    label: 'Satisfied',
    sentiment: 'Positive Experience',
    customerPerception: 'Prompt response, accurate orders, courteous staff, reliable product quality.',
    managerialResponse: 'Standardize successful practices, recognize exemplary team members, invite reviews.',
    retentionProbability: '82% (Strong repeat purchase frequency)',
    color: 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800/60',
  },
  {
    level: 5,
    label: 'Delighted (Exceeded Expectations)',
    sentiment: 'Brand Advocate',
    customerPerception: 'Exceptional personalized attention, effortless resolution, proactive customer care.',
    managerialResponse: 'Enroll in VIP loyalty circle, collect testimonial case study, sustain service standard.',
    retentionProbability: '96% (Organic promoter with high referral rate)',
    color: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800/60',
  },
];

// Sample illustrative survey dataset
const ILLUSTRATIVE_BENCHMARKS = [
  { category: 'Product Reliability', score: 88, benchmark: 82 },
  { category: 'Customer Support Response', score: 79, benchmark: 75 },
  { category: 'Resolution Speed', score: 84, benchmark: 70 },
  { category: 'Value for Money', score: 81, benchmark: 78 },
  { category: 'Overall Brand Trust', score: 91, benchmark: 85 },
];

export const SatisfactionRatingTool: React.FC = () => {
  const [selectedScore, setSelectedScore] = useState<number>(4);
  const current = RATING_LEVELS.find((r) => r.level === selectedScore) || RATING_LEVELS[3];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-xs space-y-8">
      {/* Interactive 1-5 Scale Tool */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Interactive Customer Satisfaction (CSAT) Scale Simulator
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Select a rating from 1 to 5 to observe how customer perception shifts and how managers intervene.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500">Scale: 1 (Lowest) - 5 (Highest)</span>
        </div>

        {/* Rating Buttons */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4 my-6">
          {RATING_LEVELS.map((level) => {
            const isSelected = selectedScore === level.level;
            return (
              <button
                key={level.level}
                onClick={() => setSelectedScore(level.level)}
                className={`py-3 sm:py-4 px-2 rounded-xl flex flex-col items-center justify-center transition-all border cursor-pointer ${
                  isSelected
                    ? 'border-slate-900 dark:border-teal-400 bg-slate-900 dark:bg-slate-800 text-white shadow-md scale-102 ring-2 ring-teal-400'
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-0.5 mb-1">
                  <Star
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      isSelected ? 'fill-teal-400 text-teal-400' : 'text-slate-400 dark:text-slate-500'
                    }`}
                  />
                </div>
                <span className="font-mono font-bold text-lg sm:text-xl">
                  {level.level}
                </span>
                <span className={`text-[10px] sm:text-xs font-medium text-center line-clamp-1 mt-1 ${isSelected ? 'text-slate-200' : 'text-slate-500 dark:text-slate-400'}`}>
                  {level.label.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        <div className={`p-5 rounded-xl border ${current.color} transition-all`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono font-bold text-lg">Rating {current.level} / 5:</span>
              <span className="font-bold text-base">{current.label}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/80 dark:bg-slate-900/80 border dark:border-slate-700 font-medium">
                {current.sentiment}
              </span>
            </div>
            <div className="text-xs font-mono font-semibold">
              Projected Retention: {current.retentionProbability}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mt-3 pt-3 border-t border-black/10 dark:border-white/10">
            <div>
              <span className="font-bold block mb-1">Customer Mental State:</span>
              <p className="leading-relaxed opacity-90">{current.customerPerception}</p>
            </div>
            <div>
              <span className="font-bold block mb-1">Prescribed Management Action:</span>
              <p className="leading-relaxed opacity-90">{current.managerialResponse}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Illustrative Satisfaction Metrics Chart */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              Illustrative Satisfaction Benchmark Matrix (Academic Sample Data)
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Comparative scores illustrating typical performance before and after managerial quality controls.
            </p>
          </div>
          <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded">
            Sample CSAT (%) Scale
          </div>
        </div>

        <div className="space-y-3.5 bg-slate-50/70 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          {ILLUSTRATIVE_BENCHMARKS.map((item) => (
            <div key={item.category} className="space-y-1">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-800 dark:text-slate-200">{item.category}</span>
                <div className="flex items-center gap-3 font-mono text-slate-500 dark:text-slate-400">
                  <span className="text-teal-700 dark:text-teal-400 font-semibold">{item.score}% Score</span>
                  <span className="text-slate-400 dark:text-slate-500 text-[11px]">(Industry Avg: {item.benchmark}%)</span>
                </div>
              </div>
              <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
                <div
                  className="bg-teal-600 dark:bg-teal-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500 italic">
          <Info className="w-3.5 h-3.5 shrink-0" />
          <span>Notice: These sample figures represent educational benchmarks created solely for comparative course study.</span>
        </div>
      </div>
    </div>
  );
};

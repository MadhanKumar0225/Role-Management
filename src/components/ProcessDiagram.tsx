import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  subtitle: string;
  detail: string;
  managerRole: string;
}

interface ProcessDiagramProps {
  variant: 'management-flow' | 'conclusion-flow';
}

const MANAGEMENT_STEPS: Step[] = [
  {
    id: 1,
    title: 'Management Planning',
    subtitle: 'Vision & Standards',
    detail: 'Leadership sets explicit customer service standards, resource allocations, SLAs, and customer-first goals.',
    managerRole: 'Strategic goal formulation, budget allocation, policy design.',
  },
  {
    id: 2,
    title: 'Employee Coordination',
    subtitle: 'Alignment & Empowerment',
    detail: 'Managers train frontline workers, equip teams with modern CRM tools, and clarify operational guidelines.',
    managerRole: 'Staff onboarding, continuous coaching, transparent communication.',
  },
  {
    id: 3,
    title: 'Better Service Quality',
    subtitle: 'Execution & Reliability',
    detail: 'Empowered teams deliver consistent, attentive, and reliable products and fast issue resolutions.',
    managerRole: 'Quality audits, process monitoring, bottleneck removal.',
  },
  {
    id: 4,
    title: 'Customer Satisfaction',
    subtitle: 'Exceeded Expectations',
    detail: 'Customers receive seamless value that aligns with or exceeds their initial expectations across all touchpoints.',
    managerRole: 'CSAT analysis, customer feedback reviews, sentiment tracking.',
  },
  {
    id: 5,
    title: 'Customer Loyalty',
    subtitle: 'Advocacy & Retention',
    detail: 'High satisfaction fosters repeat business, organic word-of-mouth recommendations, and higher lifetime value.',
    managerRole: 'Loyalty programs, retention strategy, lifetime customer care.',
  },
];

const CONCLUSION_STEPS: Step[] = [
  {
    id: 1,
    title: 'Effective Management',
    subtitle: 'Foundational Leadership',
    detail: 'Sound leadership combines strategy, clear metrics, supportive coaching, and customer empathy.',
    managerRole: 'Proactive oversight, standard setting, continuous resource support.',
  },
  {
    id: 2,
    title: 'Better Customer Experience',
    subtitle: 'Seamless Touchpoints',
    detail: 'Friction-free interactions, reduced waiting times, and knowledgeable support across digital and in-person channels.',
    managerRole: 'Journey mapping, cross-departmental coordination, UX consistency.',
  },
  {
    id: 3,
    title: 'Higher Satisfaction',
    subtitle: 'Trust & Confidence',
    detail: 'Positive perception where the customer feels respected, valued, and completely satisfied with product utility.',
    managerRole: 'Real-time satisfaction measurement, closed-loop resolution.',
  },
  {
    id: 4,
    title: 'Stronger Loyalty',
    subtitle: 'Repeat Trust',
    detail: 'Customers develop emotional brand affinity, lowering churn and driving high Net Promoter Scores.',
    managerRole: 'Relationship management, customer advisory boards, value retention.',
  },
  {
    id: 5,
    title: 'Sustainable Business Growth',
    subtitle: 'Long-term Profitability',
    detail: 'Reduced customer acquisition costs, predictable revenue streams, and solid marketplace resilience.',
    managerRole: 'Market expansion, enterprise reinvestment, cultural reinforcement.',
  },
];

export const ProcessDiagram: React.FC<ProcessDiagramProps> = ({ variant }) => {
  const steps = variant === 'management-flow' ? MANAGEMENT_STEPS : CONCLUSION_STEPS;
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 gap-2">
        <div>
          <h4 className="text-base font-semibold text-slate-900 dark:text-white">
            {variant === 'management-flow'
              ? 'Process Flow: Management Planning to Customer Loyalty'
              : 'End-to-End Impact Flow: Management to Sustainable Growth'}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Click any step to inspect managerial inputs, operational mechanisms, and expected outcomes.
          </p>
        </div>
        <div className="text-xs text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/80 px-2.5 py-1 rounded font-medium shrink-0 border border-transparent dark:border-teal-800/60">
          5-Stage Value Chain
        </div>
      </div>

      {/* Visual Pipeline Bar */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 lg:gap-3 mb-6">
        {steps.map((step, idx) => {
          const isSelected = activeStep === idx;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`relative text-left p-3.5 rounded-lg border transition-all text-xs flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'border-teal-500 dark:border-teal-400 bg-teal-50/50 dark:bg-teal-950/40 ring-1 ring-teal-500 dark:ring-teal-400 text-slate-900 dark:text-white shadow-2xs'
                  : 'border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/60 hover:bg-slate-100/70 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold ${
                  isSelected ? 'bg-teal-600 dark:bg-teal-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}>
                  0{idx + 1}
                </span>
                {idx < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
                )}
              </div>
              <div className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm leading-tight mb-1">
                {step.title}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                {step.subtitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Inspector */}
      <div className="bg-slate-50 dark:bg-slate-800/70 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="w-6 h-6 rounded bg-slate-900 dark:bg-teal-950 text-teal-400 font-mono text-xs flex items-center justify-center font-bold border border-transparent dark:border-teal-800/40">
              0{activeStep + 1}
            </span>
            <span className="font-semibold text-slate-900 dark:text-white text-base">
              {steps[activeStep].title}
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-teal-700 dark:text-teal-300 font-medium">
              {steps[activeStep].subtitle}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Key Managerial Responsibility</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 dark:text-slate-300 mt-2">
          <div className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
            <div className="font-semibold text-slate-900 dark:text-white mb-1">Operational Description:</div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{steps[activeStep].detail}</p>
          </div>
          <div className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
            <div className="font-semibold text-slate-900 dark:text-white mb-1">Managerial Leadership Role:</div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{steps[activeStep].managerRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

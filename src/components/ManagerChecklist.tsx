import React, { useState } from 'react';
import { CheckSquare, Square, RotateCcw } from 'lucide-react';

interface ChecklistItem {
  id: string;
  category: string;
  task: string;
  impact: string;
}

const INITIAL_ITEMS: ChecklistItem[] = [
  {
    id: 'c1',
    category: 'Customer Listening',
    task: 'Deploy automated post-interaction CSAT micro-surveys across support channels.',
    impact: 'Captures immediate sentiment within minutes of service delivery.',
  },
  {
    id: 'c2',
    category: 'Customer Listening',
    task: 'Weekly executive review of categorized customer complaints and recurring friction points.',
    impact: 'Eliminates departmental blind spots before issues escalate.',
  },
  {
    id: 'c3',
    category: 'Staff Enablement',
    task: 'Empower frontline agents with up to $100 discretionary credit/refund authority.',
    impact: 'Enables first-contact resolution without frustrating manager escalation delays.',
  },
  {
    id: 'c4',
    category: 'Staff Enablement',
    task: 'Provide bi-weekly active listening and de-escalation communication workshops.',
    impact: 'Builds customer empathy and reduces agent burnout.',
  },
  {
    id: 'c5',
    category: 'Process Quality',
    task: 'Standardize SLA response benchmarks: email under 2 hours, live chat under 45 seconds.',
    impact: 'Guarantees consistent, predictable customer touchpoint reliability.',
  },
  {
    id: 'c6',
    category: 'Process Quality',
    task: 'Integrate CRM records across sales, billing, and support for unified customer context.',
    impact: 'Prevents asking customers to repeat order histories multiple times.',
  },
  {
    id: 'c7',
    category: 'Culture & Rewards',
    task: 'Tie employee quarterly bonuses directly to customer satisfaction indices rather than solely volume.',
    impact: 'Aligns worker incentives with qualitative customer retention.',
  },
];

export const ManagerChecklist: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({
    c1: true,
    c3: true,
    c5: true,
  });

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checkedIds).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / INITIAL_ITEMS.length) * 100);

  const resetAll = () => {
    setCheckedIds({});
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Manager's Practical Implementation Checklist
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Evaluate your organization's customer satisfaction readiness across operational pillars.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs font-mono font-bold text-teal-700 dark:text-teal-400">
              {completedCount} of {INITIAL_ITEMS.length} Implemented
            </span>
            <div className="w-28 sm:w-36 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-1">
              <div
                className="bg-teal-600 dark:bg-teal-500 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <button
            onClick={resetAll}
            className="p-1.5 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors cursor-pointer"
            title="Reset Checklist"
            aria-label="Reset Checklist"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-800 mt-4">
        {INITIAL_ITEMS.map((item) => {
          const isChecked = !!checkedIds[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className="py-3.5 flex items-start gap-3 cursor-pointer group hover:bg-slate-50/70 dark:hover:bg-slate-800/60 -mx-2 px-2 rounded-lg transition-colors"
            >
              <button
                type="button"
                className="mt-0.5 text-slate-400 dark:text-slate-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors shrink-0 cursor-pointer"
                aria-label={isChecked ? 'Mark incomplete' : 'Mark complete'}
              >
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-teal-600 dark:text-teal-400 fill-teal-50 dark:fill-teal-950" />
                ) : (
                  <Square className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-slate-400 dark:group-hover:text-slate-500" />
                )}
              </button>
              <div className="flex-1 text-xs">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-semibold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                    {item.task}
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                    [{item.category}]
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                  <span className="font-medium text-slate-600 dark:text-slate-300">Strategic Impact:</span> {item.impact}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 flex-wrap gap-2">
        <span>Click any initiative to toggle status. Target at least 80% score for optimal service readiness.</span>
        <span className="font-mono font-semibold text-teal-700 dark:text-teal-400">{progressPercent}% Score</span>
      </div>
    </div>
  );
};

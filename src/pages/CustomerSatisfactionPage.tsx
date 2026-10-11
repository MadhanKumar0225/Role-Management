import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Scale,
  Sparkles,
  DollarSign,
  MessageCircle,
  Headphones,
  Clock,
  ShieldCheck,
  Award,
  BarChart3,
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';
import { SatisfactionRatingTool } from '../components/SatisfactionRatingTool';
import { PageNavigation } from '../components/PageNavigation';

export const CustomerSatisfactionPage: React.FC = () => {
  const factors = [
    {
      title: 'Expectations vs. Actual Experience',
      icon: Scale,
      detail:
        'Customers formulate mental benchmarks prior to purchase based on marketing claims and reviews. Satisfaction occurs when delivered reality equals or surpasses those initial benchmarks.',
    },
    {
      title: 'Product Quality & Reliability',
      icon: Sparkles,
      detail:
        'Durability, feature performance, aesthetic finish, and defect-free operation. If the core product fails to work as promised, service friendliness cannot compensate.',
    },
    {
      title: 'Service Quality & Empathy',
      icon: Heart,
      detail:
        'The interpersonal competence of representatives: courtesy, active listening, respect for the client’s time, and genuine eagerness to resolve issues.',
    },
    {
      title: 'Pricing & Perceived Value for Money',
      icon: DollarSign,
      detail:
        'Customers do not merely seek the cheapest price; they assess whether the benefits and outcomes delivered justify the total financial outlay.',
    },
    {
      title: 'Transparent Communication',
      icon: MessageCircle,
      detail:
        'Clear order tracking, honest delivery estimates, upfront terms and conditions, and timely notifications when unexpected disruptions occur.',
    },
    {
      title: 'Accessible Customer Support',
      icon: Headphones,
      detail:
        'Multichannel availability across phone, live chat, email, and mobile apps without labyrinthine phone trees or repetitive identity confirmations.',
    },
    {
      title: 'Rapid Response Time',
      icon: Clock,
      detail:
        'Speed is often perceived as respect. Slow response times quickly erode confidence, while swift resolutions signal operational competence.',
    },
    {
      title: 'Operational Reliability & Consistency',
      icon: ShieldCheck,
      detail:
        'Delivering a uniform, dependable experience every single time a customer returns, avoiding erratic quality swings between branch locations.',
    },
    {
      title: 'Customer Loyalty & Emotional Affinity',
      icon: Award,
      detail:
        'Sustained satisfaction converts rational buyers into loyal advocates who forgive minor slips and actively recommend the organization to peers.',
    },
  ];

  const metrics = [
    {
      name: 'Customer Satisfaction Score (CSAT)',
      formula: '(% Satisfied Respondents / Total Surveyed) × 100',
      question: '“How satisfied were you with your recent experience today?”',
      description:
        'Measures immediate transactional happiness on a 1-to-5 scale. Ideal for evaluating specific interactions like support calls or checkout steps.',
      benchmark: 'Industry good benchmark: 75% to 85%',
    },
    {
      name: 'Net Promoter Score (NPS)',
      formula: '% Promoters (9-10) − % Detractors (0-6)',
      question: '“How likely are you to recommend us to a colleague or friend?”',
      description:
        'Measures long-term customer brand advocacy and organic growth potential on a scale of 0 to 10. Divides respondents into Promoters, Passives, and Detractors.',
      benchmark: 'Good benchmark: +30 to +50; World-class: +70+',
    },
    {
      name: 'Customer Effort Score (CES)',
      formula: 'Average score of customer agreement on effort (1 to 7)',
      question: '“To what extent do you agree: The company made it easy to handle my issue?”',
      description:
        'Focuses specifically on friction reduction. High effort directly correlates with customer churn and frustration, making CES a vital diagnostic tool.',
      benchmark: 'Target: 5.5+ out of 7',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header Banner */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Understanding Customer Satisfaction
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          Customer expectations, satisfaction factors, feedback loops, and quantitative measurement metrics (CSAT, NPS, CES).
        </p>
      </div>

      {/* Core Definition Card */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Definition and Psychological Meaning</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          In contemporary business management, customer satisfaction is defined as the degree of emotional and rational congruence between
          a customer's prior expectations and the perceived performance delivered by a brand. It is not merely the absence of complaints,
          but the presence of positive emotional validation.
        </p>
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-700 dark:text-slate-300 space-y-2">
          <div className="font-semibold text-slate-900 dark:text-white">The Customer Expectation Equation:</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-rose-700 dark:text-rose-400 block">Performance &lt; Expectations</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Causes cognitive dissonance, frustration, complaints, and rapid churn.</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-slate-700 dark:text-slate-300 block">Performance = Expectations</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Acceptable satisfaction; baseline needs met, but customer may defect for cheaper alternatives.</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-teal-700 dark:text-teal-400 block">Performance &gt; Expectations</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Generates customer delight, emotional brand affinity, and organic peer referrals.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tool Requirement */}
      <section className="space-y-4">
        <SatisfactionRatingTool />
      </section>

      {/* 9 Factors Affecting Customer Satisfaction */}
      <section className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Key Factors Affecting Customer Satisfaction
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Nine essential operational elements that dictate whether a customer leaves pleased or disappointed.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">9 Core Drivers</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {factors.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs hover:border-slate-400 dark:hover:border-slate-600 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-teal-950/80 text-teal-400 dark:text-teal-300 flex items-center justify-center border border-transparent dark:border-teal-800/40">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">0{idx + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Measurement Methodologies Section */}
      <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Common Ways Organizations Measure Customer Satisfaction
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Modern management relies on quantitative metrics and qualitative feedback loops to diagnose customer experience health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.name}
              className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                  Quantitative Metric
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {metric.name}
                </h3>
                <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-mono text-xs text-slate-700 dark:text-slate-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-sans">Formula:</span>
                  {metric.formula}
                </div>
                <p className="text-xs italic text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-900/60 p-2 rounded border border-transparent dark:border-slate-750">
                  {metric.question}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-700 text-[11px] font-semibold text-teal-800 dark:text-teal-300">
                {metric.benchmark}
              </div>
            </div>
          ))}
        </div>

        {/* Qualitative Methods: Surveys & Complaints */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              Customer Surveys (Transactional & Relational)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Structured questionnaires deployed immediately post-interaction (transactional) or bi-annually (relational).
              Surveys reveal trendlines in user expectations and highlight regional variances across company branches.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              Customer Complaint Analysis & Root-Cause Auditing
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              For every customer who formally complains, studies show an estimated 26 remain silent and simply switch brands.
              Logging and categorizing complaint trends uncovers systemic product bugs and flawed operational workflows.
            </p>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <Link
            to="/management-strategies"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-slate-900 dark:bg-teal-600 hover:bg-teal-600 dark:hover:bg-teal-500 px-4 py-2.5 rounded-lg transition-colors shadow-2xs"
          >
            <span>Explore Actionable Management Strategies</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Page Navigation */}
      <PageNavigation
        prevPath="/role-of-management"
        prevTitle="Role of Management"
        nextPath="/management-strategies"
        nextTitle="Management Strategies"
      />
    </div>
  );
};

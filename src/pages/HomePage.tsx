import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Users,
  HeartHandshake,
  Lightbulb,
  TrendingUp,
  FileText,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronRight,
  Repeat,
  Smile,
  Search,
  MessageSquare,
  Sparkles,
  Zap
} from 'lucide-react';
import { NAV_ITEMS } from '../types';

export const HomePage: React.FC = () => {
  const scrollToTopics = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('topics-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const topicCards = [
    {
      title: 'Introduction',
      description: 'Understand the meaning, objectives, and importance of management and customer satisfaction.',
      path: '/introduction',
      icon: BookOpen,
    },
    {
      title: 'Role of Management',
      description: 'Explore the responsibilities of managers in improving customer experiences and service quality.',
      path: '/role-of-management',
      icon: Users,
    },
    {
      title: 'Customer Satisfaction',
      description: 'Learn about customer expectations, satisfaction factors, feedback, and measurement.',
      path: '/customer-satisfaction',
      icon: HeartHandshake,
    },
    {
      title: 'Management Strategies',
      description: 'Discover practical strategies for improving customer service, communication, and complaint handling.',
      path: '/management-strategies',
      icon: Lightbulb,
    },
    {
      title: 'Benefits',
      description: 'Understand how customer satisfaction improves loyalty, reputation, retention, and business growth.',
      path: '/benefits',
      icon: TrendingUp,
    },
    {
      title: 'Case Study',
      description: 'Explore a practical fictional example of how management can improve customer satisfaction.',
      path: '/case-study',
      icon: FileText,
    },
    {
      title: 'Conclusion',
      description: 'Review the important lessons and key findings from the project.',
      path: '/conclusion',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pb-12">
      {/* SECTION 1: HERO SECTION */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-10 sm:py-14 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading, Subtitle, Text, 2 Buttons */}
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Role of Management in Improving Customer Satisfaction
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                “Effective management creates better customer experiences, stronger relationships, and long-term business success.”
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Management plays a crucial role in building customer satisfaction. Through thoughtful planning,
                continuous employee training, transparent communication, stringent service quality control,
                and systematic customer feedback, organizational leaders build an environment where customer needs are consistently understood and fulfilled.
              </p>

              {/* Two Buttons: Explore Topics & Learn More */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={scrollToTopics}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-slate-900 dark:bg-teal-600 text-white font-medium text-sm hover:bg-slate-800 dark:hover:bg-teal-500 transition-colors shadow-2xs cursor-pointer"
                >
                  <span>Explore Topics</span>
                  <ArrowRight className="w-4 h-4 text-teal-400 dark:text-white" />
                </button>

                <Link
                  to="/introduction"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors shadow-2xs"
                >
                  <span>Learn More</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm aspect-16/10 bg-slate-100 dark:bg-slate-800">
                <img
                  src="/src/assets/images/hero_management_team_1791702190332.jpg"
                  alt="Management team reviewing customer satisfaction and service metrics"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-10 shadow-2xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Introduction to the Project
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Core concepts, theoretical definitions, and why managerial guidance shapes customer perceptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-1">What Management Means:</h3>
                <p>
                  Management is the systematic process of planning, organizing, coordinating, and leading organizational resources—both people and technology—to reach strategic business goals with consistency and efficiency.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-1">What Customer Satisfaction Means:</h3>
                <p>
                  Customer satisfaction is the measure of how well an organization's products, services, and human interactions meet or surpass customer expectations. When customers feel respected, heard, and valued, satisfaction naturally follows.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-1">Why Customer Satisfaction is Important:</h3>
                <p>
                  In a competitive economy, satisfied customers remain loyal, generate positive word-of-mouth recommendations, buy repeatedly, and reduce costly customer acquisition spending.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-1">How Management Improves Customer Experiences:</h3>
                <p>
                  Frontline employees reflect the culture created by leadership. When managers establish clear service standards, empower staff with dispute-resolution authority, and listen to customer feedback, service quality remains dependable.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-start">
            <Link
              to="/introduction"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-slate-900 dark:bg-teal-600 text-white font-medium text-xs sm:text-sm hover:bg-teal-700 dark:hover:bg-teal-500 transition-colors shadow-2xs"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 text-teal-400 dark:text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: TOPICS AND SUBPAGES */}
      <section id="topics-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Topics
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Click any topic card below to open its dedicated subpage with complete content and analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topicCards.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Link
                key={topic.path}
                to={topic.path}
                className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-teal-500 dark:hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer ${
                  index === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                aria-label={`Open topic: ${topic.title}`}
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-900 dark:bg-teal-950/80 text-teal-400 dark:text-teal-300 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors border border-transparent dark:border-teal-800/40">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-slate-200 group-hover:text-teal-700 dark:group-hover:text-teal-400">
                  <span className="inline-flex items-center gap-1.5 text-teal-700 dark:text-teal-400 font-medium">
                    <span>Read More</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: WHY CUSTOMER SATISFACTION MATTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-10 shadow-2xs space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Why Customer Satisfaction Matters
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Customer satisfaction is a cornerstone of organizational resilience, reputation, and commercial longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white dark:bg-slate-800/80 p-5 rounded-lg border border-slate-200 dark:border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Customer Loyalty</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Satisfied clients form strong brand affinity and choose to stay with the company even when competitors launch discount promotions.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/80 p-5 rounded-lg border border-slate-200 dark:border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold">
                <Smile className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Better Customer Relationships</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Open communication and consistent follow-through foster mutual respect, trust, and lasting emotional connections between clients and staff.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/80 p-5 rounded-lg border border-slate-200 dark:border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Positive Business Reputation</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Happy customers share favorable reviews, boosting public credibility and protecting the organization’s reputation during minor mishaps.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/80 p-5 rounded-lg border border-slate-200 dark:border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold">
                <Repeat className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Repeat Purchases</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Consistent satisfaction shortens the customer evaluation cycle, generating predictable recurring revenue and higher average order values.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/80 p-5 rounded-lg border border-slate-200 dark:border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Improved Service Quality</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Prioritizing customer satisfaction encourages regular feedback collection, helping operations eliminate flaws and elevate service standards.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/80 p-5 rounded-lg border border-slate-200 dark:border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Long-Term Business Growth</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Lower customer churn and organic referrals generate sustainable financial strength, allowing organizations to reinvest in innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ROLE OF MANAGEMENT OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-10 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Role of Management Overview
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                A brief summary of the essential managerial responsibilities that guarantee service excellence.
              </p>
            </div>
            {/* View All Topics Button -> scrolls to #topics-section */}
            <button
              type="button"
              onClick={scrollToTopics}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs sm:text-sm font-semibold transition-colors shrink-0 cursor-pointer self-start sm:self-auto border border-transparent dark:border-slate-700"
            >
              <span>View All Topics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Search className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>1. Understanding Customer Needs</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xs">Researching buyer preferences and eliminating pain points before they occur.</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Users className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>2. Employee Training</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xs">Educating staff in product technicalities, active listening, and empathetic communication.</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>3. Quality Management</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xs">Establishing strict quality criteria and ensuring consistency across all channels.</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>4. Effective Communication</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xs">Synchronizing marketing promises with daily service reality to avoid misunderstandings.</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>5. Complaint Resolution</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xs">Empowering frontline personnel to resolve grievances promptly on first contact.</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>6. Customer Feedback</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xs">Collecting and reviewing surveys and CSAT data to diagnose performance health.</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1 sm:col-span-2 lg:col-span-3">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>7. Continuous Improvement (Kaizen)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xs">Constantly refining operational workflows to adapt to evolving consumer expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONCLUSION PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 dark:bg-slate-900 border border-transparent dark:border-slate-800 text-white rounded-xl p-6 sm:p-10 shadow-sm space-y-5">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Conclusion Preview
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Effective management is the decisive link between company strategy and customer happiness.
              By carefully planning processes, developing and supporting employees, holding fast to quality standards,
              and treating complaints as valuable opportunities for improvement, managers build enduring customer trust and long-term business success.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/conclusion"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-teal-600 text-white hover:bg-teal-500 font-medium text-xs sm:text-sm transition-colors shadow-2xs"
            >
              <span>Read Full Conclusion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

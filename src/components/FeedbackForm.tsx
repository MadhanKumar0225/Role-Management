import React, { useState, useEffect } from 'react';
import { Star, Send, CheckCircle, AlertCircle, Info, Trash2 } from 'lucide-react';
import { FeedbackSubmission } from '../types';

const STORAGE_KEY = 'edu_mgmt_feedback_submissions';

export const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ rating?: string; message?: string }>({});
  const [history, setHistory] = useState<FeedbackSubmission[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch {
      // Local storage not available or corrupted
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { rating?: string; message?: string } = {};

    if (!rating || rating < 1 || rating > 5) {
      newErrors.rating = 'Please select a rating between 1 and 5.';
    }
    if (!message.trim()) {
      newErrors.message = 'Please provide your feedback message (minimum 5 characters).';
    } else if (message.trim().length < 5) {
      newErrors.message = 'Feedback message must be at least 5 characters long.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const newEntry: FeedbackSubmission = {
      id: Date.now().toString(),
      name: name.trim() || 'Anonymous Reviewer',
      rating,
      message: message.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric' }),
    };

    const updated = [newEntry, ...history];
    setHistory(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage quota
    }

    setSubmitted(true);
    setName('');
    setMessage('');
    setRating(5);
  };

  const handleClearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  return (
    <div id="feedback-form" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-xs">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Sample Customer Feedback Simulator
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Test the feedback collection module used by customer experience managers to monitor sentiment.
        </p>
      </div>

      {/* Privacy Notice Disclaimer */}
      <div className="mb-6 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
        <Info className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-slate-800 dark:text-slate-100">Local Demonstration Notice:</span> Feedback entered here is stored strictly within your browser's local session for educational evaluation. It is <span className="font-semibold text-slate-800 dark:text-slate-200">not transmitted or persisted to any remote cloud database</span>.
        </div>
      </div>

      {submitted && (
        <div className="mb-6 p-4 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/80 flex items-start justify-between gap-3 text-sm text-teal-900 dark:text-teal-200 animate-in fade-in duration-200">
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Feedback Successfully Recorded Locally!</p>
              <p className="text-xs text-teal-800 dark:text-teal-300 mt-0.5">
                In an enterprise environment, this response would trigger an automated CRM ticketing event and CSAT index calculation.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs underline text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-200 shrink-0 font-medium cursor-pointer"
          >
            Submit Another
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="customer-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Customer Name <span className="text-slate-400 dark:text-slate-500 font-normal lowercase">(optional)</span>
          </label>
          <input
            id="customer-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Jordan Smith or leave blank for Anonymous"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Satisfaction Rating (1 to 5 Scale) <span className="text-rose-500">*</span>
          </label>
          <div className="flex items-center gap-2 flex-wrap">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => {
                  setRating(star);
                  if (errors.rating) setErrors({ ...errors, rating: undefined });
                }}
                className={`p-2 rounded-lg border transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer ${
                  rating >= star
                    ? 'border-teal-500 dark:border-teal-400 bg-teal-50/70 dark:bg-teal-950/60 text-slate-900 dark:text-white'
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Star
                  className={`w-4 h-4 ${
                    rating >= star ? 'fill-teal-500 dark:fill-teal-400 text-teal-500 dark:text-teal-400' : 'text-slate-300 dark:text-slate-600'
                  }`}
                />
                <span className="font-mono font-bold">{star}</span>
              </button>
            ))}
            <span className="ml-3 text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
              {rating === 1 && '1 - Very Unsatisfied'}
              {rating === 2 && '2 - Unsatisfied'}
              {rating === 3 && '3 - Neutral'}
              {rating === 4 && '4 - Satisfied'}
              {rating === 5 && '5 - Highly Satisfied'}
            </span>
          </div>
          {errors.rating && (
            <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.rating}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="feedback-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Feedback Message & Comments <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="feedback-message"
            rows={3}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            placeholder="Describe your service experience, delivery speed, or areas for managerial improvement..."
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 ${
              errors.message ? 'border-rose-400 ring-1 ring-rose-300 dark:border-rose-500' : 'border-slate-300 dark:border-slate-700'
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-teal-600 text-white font-medium text-sm rounded-lg hover:bg-teal-700 dark:hover:bg-teal-500 transition-colors shadow-xs cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Submit Customer Feedback</span>
        </button>
      </form>

      {/* Local Submissions Log */}
      {history.length > 0 && (
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Session Feedback Log ({history.length} {history.length === 1 ? 'Entry' : 'Entries'})
            </h4>
            <button
              onClick={handleClearHistory}
              className="text-xs text-slate-400 dark:text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 flex items-center gap-1 transition-colors cursor-pointer"
              title="Clear locally stored reviews"
              aria-label="Clear locally stored reviews"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Local Data</span>
            </button>
          </div>

          <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
            {history.map((item) => (
              <div
                key={item.id}
                className="p-3 bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-lg text-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <span>{item.name}</span>
                    <span className="flex items-center text-teal-600 dark:text-teal-400 font-mono">
                      ★ {item.rating}/5
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">{item.timestamp}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs italic">"{item.message}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

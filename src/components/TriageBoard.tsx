"use client";

import { useState } from "react";
import { Check, X, Inbox, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Feedback {
  id: number;
  text: string;
  source: string;
  priority?: "High" | "Medium" | "Low";
  tags?: string[];
  status: "pending" | "approved" | "rejected";
}

const initialFeedback: Feedback[] = [
  { id: 1, text: "Users are experiencing a 3-second latency during the checkout flow after the v2.4 rollout.", source: "Datadog", priority: "High", tags: ["Performance", "Critical Path"], status: "pending" },
  { id: 2, text: "Enterprise clients are requesting SAML/SSO integration to comply with their internal security audits.", source: "Salesforce", priority: "High", tags: ["Security", "Enterprise"], status: "pending" },
  { id: 3, text: "The new analytics dashboard lacks CSV export functionality, blocking end-of-month reporting.", source: "Zendesk", priority: "Medium", tags: ["Feature Gap", "Reporting"], status: "pending" },
  { id: 4, text: "Onboarding drop-off increased by 15% on step 3. The 'Connect Wallet' button is confusing.", source: "Mixpanel", priority: "High", tags: ["UX/UI", "Conversion"], status: "pending" },
  { id: 5, text: "Can we add custom webhooks for ticket status changes? It would help automate our workflows.", source: "Dev Portal", priority: "Low", tags: ["API", "Feature Request"], status: "pending" },
  { id: 6, text: "Bug in the payment gateway: Stripe webhooks are occasionally failing to update subscription statuses.", source: "Intercom", priority: "High", tags: ["Bug", "Billing"], status: "pending" }
];

export default function TriageBoard() {
  const [items, setItems] = useState<Feedback[]>(initialFeedback);
  const [filter, setFilter] = useState<"pending" | "approved" | "rejected">("pending");

  const handleAction = (id: number, status: "approved" | "rejected") => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
  };

  const filteredItems = items.filter((item) => item.status === filter);

  return (
    <div className="flex flex-col gap-8">
      {/* Filters */}
      <div className="flex space-x-2 bg-zinc-900/50 p-1.5 rounded-xl border border-zinc-800/80 backdrop-blur-md w-fit">
        {(["pending", "approved", "rejected"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
              filter === f
                ? "bg-indigo-500/10 text-indigo-400 shadow-sm border border-indigo-500/20"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Board/List */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              key={item.id}
              className="group relative p-6 bg-zinc-900/40 hover:bg-zinc-900/80 backdrop-blur-lg border border-zinc-800/80 hover:border-indigo-500/30 rounded-2xl flex flex-col gap-4 shadow-xl transition-all"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start text-sm">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Inbox className="w-4 h-4" />
                  <span>{item.source}</span>
                </div>
                {item.priority && (
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ${
                      item.priority === "High"
                        ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                        : item.priority === "Medium"
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    }`}
                  >
                    {item.priority}
                  </span>
                )}
              </div>

              {/* Text */}
              <p className="text-zinc-200 text-lg leading-relaxed">{item.text}</p>

              {/* Tags */}
              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-800/50">
                  {item.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-800/50 rounded-md text-xs text-zinc-300 font-medium border border-zinc-700/50">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions (only if pending) */}
              {filter === "pending" && (
                <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity border border-indigo-500/30">
                  <button
                    onClick={() => handleAction(item.id, "approved")}
                    className="p-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-full transition-colors border border-emerald-500/20"
                    title="Approve"
                  >
                    <Check className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleAction(item.id, "rejected")}
                    className="p-3 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-full transition-colors border border-rose-500/20"
                    title="Reject"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-24 flex flex-col items-center justify-center text-zinc-500 gap-4 border border-dashed border-zinc-800 rounded-2xl"
            >
              <Check className="w-12 h-12 text-zinc-700" />
              <p className="text-lg">No items found in {filter}.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

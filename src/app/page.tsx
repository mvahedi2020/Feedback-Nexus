"use client";

import { useState } from "react";

interface Feedback {
  id: number;
  text: string;
  source: string;
  priority?: "High" | "Medium" | "Low";
  tags?: string[];
}

const initialFeedback: Feedback[] = [
  { id: 1, text: "The new dashboard is too slow when loading 10k rows.", source: "Zendesk" },
  { id: 2, text: "Can we get a dark mode for the mobile app?", source: "App Store" },
  { id: 3, text: "SSO integration with Okta is failing since the update.", source: "Intercom" },
];

export default function Home() {
  const [items, setItems] = useState<Feedback[]>(initialFeedback);
  const [isTriaging, setIsTriaging] = useState(false);

  const handleTriage = () => {
    setIsTriaging(true);
    setTimeout(() => {
      setItems([
        { ...initialFeedback[0], priority: "High", tags: ["Performance", "Enterprise"] },
        { ...initialFeedback[1], priority: "Low", tags: ["UI/UX", "Feature Request"] },
        { ...initialFeedback[2], priority: "High", tags: ["Security", "Bug"] },
      ]);
      setIsTriaging(false);
    }, 1500);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-zinc-950 text-zinc-50">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Feedback Nexus</h1>
            <p className="mt-2 text-zinc-400">Product Discovery & Prioritization Engine</p>
          </div>
          <button 
            onClick={handleTriage}
            disabled={isTriaging}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg disabled:opacity-50 transition-all"
          >
            {isTriaging ? "Running AI..." : "Run AI Triage"}
          </button>
        </div>

        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col gap-4">
              <div className="flex justify-between text-sm text-zinc-400">
                <span>Source: {item.source}</span>
                {item.priority && (
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    item.priority === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {item.priority} Priority
                  </span>
                )}
              </div>
              <p className="text-lg">{item.text}</p>
              {item.tags && (
                <div className="flex gap-2 mt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

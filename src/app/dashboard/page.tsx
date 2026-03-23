'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Activity, Trophy, Heart, CreditCard, ChevronRight } from 'lucide-react';

export default function Dashboard() {
  const [scores, setScores] = useState<{ id: number; value: number; date: string }[]>([
    { id: 1, value: 36, date: '2026-03-20' },
    { id: 2, value: 32, date: '2026-03-18' },
    { id: 3, value: 38, date: '2026-03-10' },
    { id: 4, value: 29, date: '2026-03-05' },
    { id: 5, value: 34, date: '2026-02-28' },
  ]);
  const [newScore, setNewScore] = useState('');

  const handleAddScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newScore || Number(newScore) < 1 || Number(newScore) > 45) {
      alert('Score must be between 1 and 45.');
      return;
    }
    
    // Logic: add new score, remove oldest (last in array)
    const newEntry = { id: Date.now(), value: Number(newScore), date: new Date().toISOString().split('T')[0] };
    setScores([newEntry, ...scores.slice(0, 4)]);
    setNewScore('');
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border p-6 flex flex-col justify-between hidden md:flex">
        <div>
          <Link href="/" className="inline-block text-xl font-bold tracking-tight text-white mb-12">
            GOLF<span className="text-neon-green glow-green">CHARITY</span>
          </Link>
          <nav className="flex flex-col gap-2">
            <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-lg bg-surface text-neon-green font-medium">
              <Activity size={20} /> Overview
            </Link>
            <Link href="#" className="flex items-center gap-3 p-3 rounded-lg text-text-secondary hover:text-white transition">
              <Trophy size={20} /> My Draws
            </Link>
            <Link href="#" className="flex items-center gap-3 p-3 rounded-lg text-text-secondary hover:text-white transition">
              <Heart size={20} /> Impact
            </Link>
            <Link href="#" className="flex items-center gap-3 p-3 rounded-lg text-text-secondary hover:text-white transition">
              <CreditCard size={20} /> Billing
            </Link>
          </nav>
        </div>
        <div>
          <button className="flex items-center gap-3 text-text-secondary hover:text-neon-pink transition">
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl text-white font-bold">Welcome, Golfer</h1>
            <p className="text-text-secondary">Here's your latest overview.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full border border-neon-green text-neon-green text-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
              Active Subscription
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Score Entry */}
            <section className="card border-neon-blue/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 blur-3xl rounded-full"></div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Activity className="text-neon-blue inline" /> Performance Tracker
              </h2>
              
              <form onSubmit={handleAddScore} className="flex gap-4 mb-8">
                <input 
                  type="number" 
                  min="1" max="45"
                  placeholder="Enter Stableford Score (1-45)" 
                  className="input-field flex-1"
                  value={newScore}
                  onChange={(e) => setNewScore(e.target.value)}
                  required
                />
                <button type="submit" className="btn bg-neon-blue text-background hover:bg-[#00f0ff]/80 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  Log Score
                </button>
              </form>

              <div className="space-y-3">
                <h3 className="text-sm text-text-secondary font-medium uppercase tracking-wider mb-4">Latest 5 Scores</h3>
                {scores.map((score, index) => (
                  <div key={score.id} className="flex justify-between items-center p-4 bg-background border border-border rounded-lg group hover:border-neon-blue/50 transition">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded bg-surface flex items-center justify-center text-text-secondary text-sm">
                        {index + 1}
                      </div>
                      <span className="text-white font-medium">{score.date}</span>
                    </div>
                    <div className="text-2xl font-black text-neon-blue">{score.value}</div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Charity Impact */}
            <section className="card border-neon-pink/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Heart className="text-neon-pink inline" /> Heart & Charity
              </h2>
              <div className="bg-background rounded-lg p-4 mb-4 border border-border">
                <div className="text-sm text-text-secondary mb-1">Selected Cause</div>
                <div className="text-white font-medium">Digital Heroes Foundation</div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-sm text-text-secondary mb-1">Your Contribution</div>
                  <div className="text-3xl font-black text-neon-pink glow-pink">15%</div>
                </div>
                <button className="text-sm text-neon-pink hover:underline">Change</button>
              </div>
            </section>

            {/* Winnings Overview */}
            <section className="card border-neon-purple/30 text-center">
              <h2 className="text-xl font-bold text-white mb-2">Total Winnings</h2>
              <div className="text-5xl font-black text-neon-purple glow-purple my-6">$450</div>
              <button className="btn bg-neon-purple text-white w-full shadow-[0_0_15px_rgba(176,38,255,0.4)] flex justify-center items-center gap-2">
                Withdraw <ChevronRight size={18} />
              </button>
              <div className="mt-4 text-xs text-text-secondary flex justify-between">
                <span>Pending: $50</span>
                <span>Paid: $400</span>
              </div>
            </section>

            {/* Next Draw */}
            <section className="card bg-surface border-none p-6 text-center">
              <p className="text-sm text-text-secondary uppercase tracking-widest mb-2">Next Draw Config</p>
              <div className="text-2xl text-white font-bold mb-1">28th March 2026</div>
              <p className="text-neon-green text-sm flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-neon-green rounded-full"></span> Subscribed & Entered
              </p>
            </section>

          </div>

        </div>
      </main>
    </div>
  );
}

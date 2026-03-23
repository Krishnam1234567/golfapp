'use client';

import { useState } from 'react';
import Link from 'next/link';

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
    
    // Add new score, remove oldest (last in array)
    const newEntry = { id: Date.now(), value: Number(newScore), date: new Date().toISOString().split('T')[0] };
    setScores([newEntry, ...scores.slice(0, 4)]);
    setNewScore('');
  };

  return (
    <div className="min-h-screen flex bg-background relative overflow-hidden">
      {/* Neo Background Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#00f0ff]/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#ffffff10] p-6 flex-col justify-between hidden md:flex bg-black/40 backdrop-blur-xl z-10">
        <div>
          <Link href="/" className="inline-block text-xl font-black tracking-tighter text-white mb-12">
            GOLF<span className="text-gradient">CHARITY</span>
          </Link>
          <nav className="flex flex-col gap-2">
            <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-xl glass-card border-[#39ff14]/50 text-[#39ff14] font-bold shadow-[0_0_15px_rgba(57,255,20,0.1)]">
              Overview Matrix
            </Link>
            <Link href="#" className="flex items-center gap-3 p-3 rounded-xl text-[#888] hover:text-white hover:bg-white/5 transition-all">
              My Draw History
            </Link>
            <Link href="#" className="flex items-center gap-3 p-3 rounded-xl text-[#888] hover:text-white hover:bg-white/5 transition-all">
              Charity Impact
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto z-10 w-full">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl text-white font-black tracking-tight mb-2">Welcome Back.</h1>
            <p className="text-[#888] text-lg">Your performance and impact overview.</p>
          </div>
          <div className="px-5 py-2 rounded-full border border-[#39ff14]/50 bg-[#39ff14]/10 text-[#39ff14] text-sm font-bold flex items-center gap-3 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#39ff14] animate-pulse shadow-[0_0_8px_#39ff14]"></div>
            Subscription Active
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Score Entry Visualizer */}
            <section className="glass-card">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#00f0ff] animate-pulse shadow-[0_0_10px_#00f0ff]"></div>
                Performance Upload
              </h2>
              
              <form onSubmit={handleAddScore} className="flex flex-col sm:flex-row gap-4 mb-10 relative z-20">
                <input 
                  type="number" 
                  min="1" max="45"
                  placeholder="Enter Stableford Score (1-45)" 
                  className="input-premium flex-1"
                  value={newScore}
                  onChange={(e) => setNewScore(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary shadow-[0_0_20px_rgba(0,240,255,0.3)] min-w-[160px]">
                  Sync Score
                </button>
              </form>

              <div className="space-y-6">
                <h3 className="text-sm font-bold text-[#888] uppercase tracking-[0.2em]">Latest 5 Rounds <span className="float-right text-[#00f0ff]">Max 45</span></h3>
                <div className="space-y-4">
                  {scores.map((score, index) => (
                    <div key={score.id} className="relative group">
                      <div className="flex justify-between items-end mb-2 text-sm">
                        <span className="text-[#bbb] font-medium">{score.date}</span>
                        <span className="text-2xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">{score.value}</span>
                      </div>
                      <div className="h-3 w-full bg-black/50 rounded-full overflow-hidden border border-white/5 relative">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${(score.value / 45) * 100}%`,
                            background: index === 0 ? 'linear-gradient(90deg, #0099ff, #00f0ff)' : 'linear-gradient(90deg, #333, #666)'
                          }}
                        >
                          {index === 0 && (
                            <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/50 blur-[2px] animate-[pulse_2s_infinite]"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Winnings Overview */}
            <section className="glass-card text-center border-[#ff00ff]/30 hover:border-[#ff00ff]/60">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff00ff]/10 blur-3xl rounded-full"></div>
              <h2 className="text-lg font-bold text-white mb-2 uppercase tracking-widest text-[#888]">Total Winnings</h2>
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] drop-shadow-[0_0_15px_rgba(255,0,255,0.4)] my-6">
                $450
              </div>
              <button className="btn bg-[#ff00ff]/10 text-[#ff00ff] w-full border border-[#ff00ff]/30 hover:bg-[#ff00ff]/20 font-bold tracking-widest uppercase text-sm">
                Initiate Withdrawal
              </button>
            </section>

            {/* Charity Impact */}
            <section className="glass-card">
              <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-[#888]">Heart & Impact</h2>
              
              <div className="bg-black/40 border border-[#ffffff10] rounded-xl p-5 mb-6">
                <div className="text-xs font-bold text-[#888] uppercase tracking-wider mb-2">Allocated Cause</div>
                <div className="text-white font-bold text-lg">Digital Heroes Foundation</div>
              </div>
              
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs font-bold text-[#888] uppercase tracking-wider">Your Contribution</span>
                  <span className="text-3xl font-black text-[#39ff14] drop-shadow-[0_0_10px_rgba(57,255,20,0.4)]">15%</span>
                </div>
                <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-[#006600] to-[#39ff14]" style={{ width: '15%' }}></div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}

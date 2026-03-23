'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [simulating, setSimulating] = useState(false);
  const [simulationComplete, setSimulationComplete] = useState(false);
  const [drawNumbers, setDrawNumbers] = useState<number[]>([0, 0, 0, 0, 0]);
  
  const runSimulation = () => {
    setSimulating(true);
    setSimulationComplete(false);
    
    // Animate numbers spinning
    let iterations = 0;
    const interval = setInterval(() => {
      setDrawNumbers(Array.from({length: 5}, () => Math.floor(Math.random() * 45) + 1));
      iterations++;
      
      if (iterations > 30) {
        clearInterval(interval);
        // Final numbers
        setDrawNumbers([12, 45, 7, 22, 31].sort((a,b) => a-b));
        setTimeout(() => {
          setSimulating(false);
          setSimulationComplete(true);
        }, 800);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#ffffff10] p-6 flex flex-col hidden md:flex bg-black/40 backdrop-blur-md">
        <Link href="/" className="inline-block text-xl font-black tracking-tighter text-white mb-12">
          GOLF<span className="text-gradient">ADMIN</span>
        </Link>
        <nav className="flex flex-col gap-2">
          {['overview', 'draws', 'users', 'verification'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)} 
              className={`text-left p-3 rounded-xl transition-all duration-300 ${activeTab === tab ? 'glass-card border-[#00f0ff]/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] text-[#00f0ff] font-bold' : 'text-[#888] hover:text-white hover:bg-white/5'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto w-full relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00f0ff]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ff00ff]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <header className="mb-12 relative z-10">
          <h1 className="text-4xl md:text-5xl text-white font-black capitalize tracking-tight mb-2">{activeTab.replace('-', ' ')}</h1>
          <p className="text-[#888] text-lg">System operations and algorithmic controls.</p>
        </header>

        <div className="relative z-10">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Total Users', value: '1,248', color: '#00f0ff' },
                { label: 'Active Subs', value: '1,102', color: '#39ff14' },
                { label: 'Charity Pool', value: '$2,450', color: '#ff00ff' },
                { label: 'Prize Pool', value: '$8,900', color: '#eeff00' }
              ].map((stat, i) => (
                <div key={i} className="glass-card hover:-translate-y-2 transition-transform duration-300" style={{ borderLeft: `4px solid ${stat.color}` }}>
                  <div className="text-[#888] text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                  <div className="text-4xl font-black text-white mt-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{stat.value}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'draws' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <section className="glass-card">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff00ff] animate-pulse shadow-[0_0_10px_#ff00ff]"></div>
                  Draw Configurator
                </h2>
                
                <div className="bg-black/40 border border-[#ffffff10] rounded-xl p-6 mb-8">
                  <h3 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">Algorithmic Preference</h3>
                  <div className="flex flex-col gap-4">
                    <label className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/5 cursor-pointer hover:border-[#00f0ff]/50 transition-colors">
                      <input type="radio" name="logic" value="random" className="accent-[#00f0ff] w-5 h-5" defaultChecked /> 
                      <div className="flex-1">
                        <div className="text-white font-bold">Standard RNG</div>
                        <div className="text-sm text-[#888]">Purely random selection (1-45).</div>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/5 cursor-pointer hover:border-[#ff00ff]/50 transition-colors">
                      <input type="radio" name="logic" value="algo" className="accent-[#ff00ff] w-5 h-5" /> 
                      <div className="flex-1">
                        <div className="text-white font-bold">Weighted Algorithm</div>
                        <div className="text-sm text-[#888]">Biased towards least-frequent user scores.</div>
                      </div>
                    </label>
                  </div>
                </div>

                <button 
                  onClick={runSimulation} 
                  disabled={simulating}
                  className="btn btn-primary w-full shadow-[0_0_20px_rgba(0,240,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {simulating ? 'Processing Matrix...' : 'Run Simulation Sequence'}
                </button>
              </section>

              {/* Simulation Results Panel */}
              <section className={`glass-card transition-all duration-700 ${simulating || simulationComplete ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-8 pointer-events-none'}`}>
                <h2 className="text-2xl font-bold text-white mb-6">Simulation Sandbox</h2>
                
                {/* Number Spinner */}
                <div className="flex justify-between gap-2 mb-8 bg-black/50 p-6 rounded-2xl border border-white/5">
                  {drawNumbers.map((num, i) => (
                    <div key={i} className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-b from-[#111] to-[#222] rounded-full flex items-center justify-center border-2 border-[#39ff14]/50 shadow-[inset_0_4px_10px_rgba(0,0,0,0.8),0_0_15px_rgba(57,255,20,0.3)] overflow-hidden">
                      <div className={`text-2xl md:text-3xl font-black text-white ${simulating ? 'animate-bounce' : 'drop-shadow-[0_0_10px_#39ff14]'}`}>{num > 0 ? num : '-'}</div>
                    </div>
                  ))}
                </div>

                {simulating && (
                  <div className="space-y-4">
                    <div className="text-sm uppercase tracking-[0.2em] text-[#00f0ff] animate-pulse text-center font-bold">Calculating Distributions...</div>
                    <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#00f0ff] to-[#ff00ff] w-1/2 animate-[ping_1.5s_infinite]"></div>
                    </div>
                  </div>
                )}

                {simulationComplete && (
                  <div className="animate-[fade-in_0.5s_ease-out]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                        <div className="text-[#ff00ff] font-black text-xl mb-1">5 Match</div>
                        <div className="text-white text-3xl font-black shadow-sm">0 <span className="text-sm font-normal text-[#888]">Winners</span></div>
                        <div className="text-xs text-[#00f0ff] mt-2 bg-[#00f0ff]/10 py-1 rounded inline-block px-2">ROLLOVER ($5,000)</div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                        <div className="text-[#00f0ff] font-black text-xl mb-1">4 Match</div>
                        <div className="text-white text-3xl font-black">2 <span className="text-sm font-normal text-[#888]">Winners</span></div>
                        <div className="text-sm text-[#39ff14] mt-1">$1,557 each</div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                        <div className="text-[#39ff14] font-black text-xl mb-1">3 Match</div>
                        <div className="text-white text-3xl font-black">45 <span className="text-sm font-normal text-[#888]">Winners</span></div>
                        <div className="text-sm text-[#39ff14] mt-1">$49 each</div>
                      </div>
                    </div>
                    <button className="btn btn-secondary w-full border-[#ff00ff]/30 hover:border-[#ff00ff] hover:bg-[#ff00ff]/10 text-white">
                      Publish Results to Live
                    </button>
                  </div>
                )}
              </section>
            </div>
          )}

          {activeTab === 'verification' && (
            <section className="glass-card">
               <h2 className="text-2xl font-bold text-white mb-6">Pending Verifications</h2>
               <div className="bg-black/40 rounded-xl border border-[#ffffff10] overflow-hidden">
                 <table className="w-full text-left text-sm text-[#bbb]">
                    <thead className="bg-black/60 border-b border-[#ffffff10]">
                      <tr>
                        <th className="p-4 font-bold text-white">Subscriber</th>
                        <th className="p-4 font-bold text-white">Match Tier</th>
                        <th className="p-4 font-bold text-white">Claim Amount</th>
                        <th className="p-4 font-bold text-white">Proof Scan</th>
                        <th className="p-4 font-bold text-white">Action Matrix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ffffff10]">
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-4 text-white font-medium">J. Doe</td>
                        <td className="p-4"><span className="text-[#00f0ff] font-bold py-1 px-3 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20">4 Match</span></td>
                        <td className="p-4 font-bold text-white">$1,557</td>
                        <td className="p-4"><button className="text-[#ff00ff] hover:underline flex items-center gap-1">View OCR Scan</button></td>
                        <td className="p-4 flex gap-2">
                          <button className="px-4 py-2 bg-[#39ff14]/10 text-[#39ff14] rounded-lg border border-[#39ff14]/30 hover:bg-[#39ff14]/20 font-bold transition">Approve</button>
                          <button className="px-4 py-2 bg-red-500/10 text-red-500 rounded-lg border border-red-500/30 hover:bg-red-500/20 font-bold transition">Reject</button>
                        </td>
                      </tr>
                    </tbody>
                 </table>
               </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

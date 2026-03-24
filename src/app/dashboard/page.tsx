'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import GlassCard from '@/components/ui/GlassCard';
import NeonInput from '@/components/ui/NeonInput';
import NeonButton from '@/components/ui/NeonButton';

export default function Dashboard() {
  const [scores, setScores] = useState<{ id: string; score_value: number; played_at: string }[]>([]);
  const [newScore, setNewScore] = useState('');
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserAndScores = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.href = '/login';
        return;
      }
      setUser(user);

      const { data, error } = await supabase
        .from('scores')
        .select('*')
        .eq('user_id', user.id)
        .order('played_at', { ascending: false })
        .order('created_at', { ascending: false })
        .limit(5);

      if (data && !error) {
        setScores(data);
      }
      setIsLoading(false);
    };
    
    fetchUserAndScores();
  }, []);

  const handleAddScore = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newScore || Number(newScore) < 1 || Number(newScore) > 45) {
      alert('Score must be between 1 and 45.');
      return;
    }
    if (!user) return;
    
    const value = Number(newScore);
    const today = new Date().toISOString().split('T')[0];
    const newEntry = { id: Date.now().toString(), score_value: value, played_at: today };
    const prevScores = [...scores];
    setScores([newEntry, ...scores.slice(0, 4)] as any);
    setNewScore('');
    const { error } = await supabase
      .from('scores')
      .insert({ user_id: user.id, score_value: value, played_at: today });

    if (error) {
      console.error('Error saving score:', error);
      alert('Failed to sync score.');
      setScores(prevScores);
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl animate-pulse">Loading Matrix...</div>;
  }

  return (
    <div className="min-h-screen flex bg-transparent relative overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#00f0ff]/10 rounded-full blur-[150px] pointer-events-none animate-float"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#ff00ff]/10 rounded-full blur-[150px] pointer-events-none animate-neon-pulse"></div>
      <aside className="w-64 border-r border-white/5 p-6 flex-col justify-between hidden md:flex bg-black/40 backdrop-blur-xl z-20 shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
        <div>
          <Link href="/" className="inline-block text-2xl font-black tracking-tighter text-white mb-12 drop-shadow-md">
            GOLF<span className="text-[#39ff14] glow-text-green">CHARITY</span>
          </Link>
          <nav className="flex flex-col gap-3">
            <Link href="/dashboard" className="flex items-center gap-3 p-4 rounded-xl bg-[#39ff14]/10 border border-[#39ff14]/50 text-[#39ff14] font-bold shadow-[0_0_15px_rgba(57,255,20,0.15)] transition-all">
              Overview Matrix
            </Link>
            <Link href="#" className="flex items-center gap-3 p-4 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/10 border border-transparent transition-all">
              My Draw History
            </Link>
            <Link href="#" className="flex items-center gap-3 p-4 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/10 border border-transparent transition-all">
              Charity Impact
            </Link>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8 md:p-12 overflow-y-auto z-10 w-full">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 relative z-20">
          <div>
            <h1 className="text-4xl text-white font-black tracking-tight mb-2 drop-shadow-md">Welcome Back.</h1>
            <p className="text-gray-400 text-lg">Your performance and impact overview.</p>
          </div>
          <div className="px-5 py-2 rounded-full border border-[#39ff14]/50 bg-[#39ff14]/10 text-[#39ff14] text-sm font-bold flex items-center gap-3 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#39ff14] animate-pulse shadow-[0_0_8px_#39ff14]"></div>
            Subscription Active
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20">
          <div className="lg:col-span-2 space-y-8">
            <GlassCard glowColor="primary" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 glow-text">
                <div className="w-3 h-3 rounded-full bg-[#00f0ff] animate-pulse shadow-[0_0_10px_#00f0ff]"></div>
                Performance Upload
              </h2>
              
              <form onSubmit={handleAddScore} className="flex flex-col sm:flex-row items-end gap-4 mb-10">
                <div className="flex-1 w-full">
                  <NeonInput 
                    label="Stableford Score"
                    type="number" 
                    variant="primary"
                    min="1" max="45"
                    placeholder="Enter Score (1-45)" 
                    value={newScore}
                    onChange={(e) => setNewScore(e.target.value)}
                    required
                  />
                </div>
                <NeonButton type="submit" variant="primary" className="min-w-[160px] h-[50px]">
                  Sync Score
                </NeonButton>
              </form>

              <div className="space-y-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Latest 5 Rounds <span className="float-right text-[#00f0ff] drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">Max 45</span></h3>
                <div className="space-y-5">
                  {scores.length === 0 && <div className="text-center text-gray-500 py-4">No scores uploaded yet.</div>}
                  {scores.map((score, index) => (
                    <div key={score.id} className="relative group">
                      <div className="flex justify-between items-end mb-2 text-sm">
                        <span className="text-gray-400 font-medium tracking-wide">{score.played_at}</span>
                        <span className="text-2xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">{score.score_value}</span>
                      </div>
                      <div className="h-3 w-full bg-black/50 rounded-full overflow-hidden border border-white/5 relative shadow-inner">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${(score.score_value / 45) * 100}%`,
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
            </GlassCard>
          </div>
          <div className="space-y-8">
            <GlassCard glowColor="secondary" className="text-center p-8 border-[#ff00ff]/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff00ff]/10 blur-3xl rounded-full"></div>
              <h2 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest relative z-10">Total Winnings</h2>
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#ff00ff] drop-shadow-[0_0_15px_rgba(255,0,255,0.4)] my-6 relative z-10 glow-text-pink">
                $450
              </div>
              <NeonButton variant="secondary" className="w-full text-sm">
                Initiate Withdrawal
              </NeonButton>
            </GlassCard>
            <GlassCard glowColor="accent" className="p-8">
              <h2 className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest">Heart & Impact</h2>
              
              <div className="bg-black/40 border border-[#39ff14]/20 shadow-[0_0_15px_rgba(57,255,20,0.05)] rounded-xl p-5 mb-6 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Allocated Cause</div>
                <div className="text-white font-bold text-lg drop-shadow-md">Digital Heroes Foundation</div>
              </div>
              
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Contribution</span>
                  <span className="text-3xl font-black text-[#39ff14] glow-text-green">15%</span>
                </div>
                <div className="h-2.5 w-full bg-black/50 rounded-full overflow-hidden border border-white/5 shadow-inner">
                  <div className="h-full bg-gradient-to-r from-[#006600] to-[#39ff14] shadow-[0_0_10px_#39ff14]" style={{ width: '15%' }}></div>
                </div>
              </div>
            </GlassCard>

          </div>
        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[150px] pointer-events-none animate-float"></div>
      <div className="absolute top-[60%] right-[-10%] w-[600px] h-[600px] bg-[#ff00ff]/10 rounded-full blur-[150px] pointer-events-none animate-neon-pulse"></div>
      <div className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] bg-[#39ff14]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <header className="container py-6 flex justify-between items-center relative z-20 mb-12">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#0099ff] flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)] relative">
            <div className="absolute inset-0 bg-[#00f0ff] blur-md opacity-50 rounded-xl animate-pulse"></div>
            <span className="text-black font-black text-2xl relative z-10">G</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            GOLF<span className="text-gradient hover:glow-text transition-all duration-300">CHARITY</span>
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center bg-black/40 px-8 py-3 rounded-full backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <Link href="/charities" className="text-gray-400 hover:text-white hover:drop-shadow-[0_0_10px_#fff] transition-all font-medium">Causes</Link>
          <Link href="/draws" className="text-gray-400 hover:text-[#00f0ff] transition-all font-medium glow-text">The Draw</Link>
        </nav>
        <div className="flex gap-4">
          <NeonButton href="/login" variant="secondary" className="px-6 py-2 text-sm hidden sm:flex">
            Log In
          </NeonButton>
          <NeonButton href="/signup" variant="primary" className="px-6 py-2 text-sm">
            Subscribe
          </NeonButton>
        </div>
      </header>
      <section className="container text-center py-20 relative z-20">
        
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-black/50 border border-[#ff00ff]/30 text-white text-sm mb-12 shadow-[0_0_30px_rgba(255,0,255,0.15)] backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff00ff] animate-pulse shadow-[0_0_10px_#ff00ff]"></span>
          <span className="font-medium tracking-wide">Current Jackpot Rollover:</span> 
          <span className="font-black text-[#ff00ff] glow-text-pink tracking-wider">$12,500</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9] drop-shadow-2xl">
          PERFORMANCE.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0099ff] drop-shadow-[0_0_30px_rgba(0,240,255,0.5)]">PURPOSE.</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-[#00f0ff] drop-shadow-[0_0_30px_rgba(57,255,20,0.5)]">PAYOFF.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          The elite subscription club where your <strong className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] font-bold tracking-wide">Stableford scores</strong> unlock monthly prize pools, and your subscription creates real-world impact for charities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <NeonButton href="/signup" variant="primary" className="px-10 py-5 text-xl w-full sm:w-auto">
            Join The Club
          </NeonButton>
          <NeonButton href="/charities" variant="secondary" className="px-10 py-5 text-xl w-full sm:w-auto">
            View Charities
          </NeonButton>
        </div>
      </section>
      <section className="container py-20 relative z-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <GlassCard glowColor="primary" className="text-center">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#00f0ff]/20 to-white/5 flex items-center justify-center mx-auto mb-8 border border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white glow-text">Log Scores</h3>
          <p className="text-gray-400 leading-relaxed font-light">Maintain your 5 latest Stableford scores. The algorithm tracks your performance automatically.</p>
        </GlassCard>
        
        <GlassCard glowColor="secondary" className="text-center group">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff00ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br from-[#ff00ff]/20 to-white/5 flex items-center justify-center mx-auto mb-8 border border-[#ff00ff]/30 shadow-[0_0_30px_rgba(255,0,255,0.2)] group-hover:scale-110 transition-transform duration-500">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff00ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m16 12-4-4-4 4"></path><path d="M12 16V8"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white glow-text-pink relative z-10">Monthly Draw</h3>
          <p className="text-gray-400 leading-relaxed font-light relative z-10">Match 3, 4, or 5 numbers in our transparent monthly draws. Huge prize pools with jackpot rollovers.</p>
        </GlassCard>

        <GlassCard glowColor="accent" className="text-center">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#39ff14]/20 to-white/5 flex items-center justify-center mx-auto mb-8 border border-[#39ff14]/30 shadow-[0_0_30px_rgba(57,255,20,0.2)]">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#39ff14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white glow-text-green">Give Back</h3>
          <p className="text-gray-400 leading-relaxed font-light">Direct 10%+ of your subscription directly to causes that matter. Total transparency, maximum impact.</p>
        </GlassCard>
      </section>

    </main>
  );
}

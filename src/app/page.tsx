import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Premium Header */}
      <header className="container py-6 flex justify-between items-center relative z-10 border-b border-white/5 mb-12">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#0099ff] flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            <span className="text-black font-black text-2xl">G</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            GOLF<span className="text-gradient">CHARITY</span>
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center bg-white/5 px-8 py-3 rounded-full backdrop-blur-md border border-white/5">
          <Link href="/charities" className="text-[#999] hover:text-white transition font-medium">Causes</Link>
          <Link href="/draws" className="text-[#999] hover:text-[#00f0ff] transition font-medium">The Draw</Link>
        </nav>
        <div className="flex gap-4">
          <Link href="/login" className="btn btn-secondary px-6 py-2 text-sm rounded-full hidden sm:flex">Log In</Link>
          <Link href="/signup" className="btn btn-primary px-6 py-2 text-sm rounded-full">Subscribe</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container text-center py-20 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm mb-12 shadow-[0_0_30px_rgba(255,0,255,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#ff00ff] animate-pulse"></span>
          Current Jackpot Rollover: <span className="font-bold text-[#ff00ff]">$12,500</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
          PERFORMANCE.<br />
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(0,240,255,0.5)]">PURPOSE.</span><br />
          <span className="text-gradient-alt drop-shadow-[0_0_30px_rgba(57,255,20,0.5)]">PAYOFF.</span>
        </h1>
        
        <p className="text-xl text-[#999] max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          The elite subscription club where your <strong className="text-white">Stableford scores</strong> unlock monthly prize pools, and your subscription creates real-world impact for charities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/signup" className="btn btn-primary px-10 py-5 text-xl w-full sm:w-auto">
            Join The Club
          </Link>
          <Link href="/charities" className="btn btn-secondary px-10 py-5 text-xl w-full sm:w-auto bg-transparent border-white/20">
            View Charities
          </Link>
        </div>
      </section>

      {/* Value Props - Glass cards */}
      <section className="container py-20 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card group text-center">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Log Scores</h3>
          <p className="text-[#888] leading-relaxed">Maintain your 5 latest Stableford scores. The algorithm tracks your performance automatically.</p>
        </div>
        
        <div className="glass-card group text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff00ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br from-[#ff00ff]/20 to-white/5 flex items-center justify-center mx-auto mb-8 border border-[#ff00ff]/30 shadow-[0_0_30px_rgba(255,0,255,0.2)] group-hover:scale-110 transition-transform duration-500">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff00ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m16 12-4-4-4 4"></path><path d="M12 16V8"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Monthly Draw</h3>
          <p className="text-[#888] leading-relaxed relative z-10">Match 3, 4, or 5 numbers in our transparent monthly draws. Huge prize pools with jackpot rollovers.</p>
        </div>

        <div className="glass-card group text-center">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#39ff14]/20 to-white/5 flex items-center justify-center mx-auto mb-8 border border-[#39ff14]/30 shadow-[0_0_30px_rgba(57,255,20,0.2)] group-hover:scale-110 transition-transform duration-500">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#39ff14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Give Back</h3>
          <p className="text-[#888] leading-relaxed">Direct 10%+ of your subscription directly to causes that matter. Total transparency, maximum impact.</p>
        </div>
      </section>

    </main>
  );
}

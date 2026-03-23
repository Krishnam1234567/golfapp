'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
  const [charityPercentage, setCharityPercentage] = useState(10);
  
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mock Registration & Subscription sequence triggered.');
  };

  return (
    <main className="min-h-screen flex items-center justify-center py-12">
      <div className="card w-full max-w-lg border-neon-pink/30 shadow-[0_0_20px_rgba(255,16,122,0.1)]">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-xl font-bold tracking-tight text-white mb-6">
            GOLF<span className="text-neon-pink glow-pink">CHARITY</span>
          </Link>
          <h1 className="text-3xl text-white">Start Your Subscription</h1>
          <p className="text-text-secondary mt-2">Play. Win. Give.</p>
        </div>

        <form onSubmit={handleSignUp} className="flex-col gap-4 flex">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">First Name</label>
              <input type="text" className="input-field" required />
            </div>
            <div>
              <label className="label">Last Name</label>
              <input type="text" className="input-field" required />
            </div>
          </div>
          
          <div className="mt-2">
            <label className="label">Email Address</label>
            <input type="email" className="input-field" required />
          </div>

          <div className="mt-2">
            <label className="label">Password</label>
            <input type="password" className="input-field" required />
          </div>

          <hr className="border-border my-4" />

          {/* Charity Selection */}
          <div className="bg-neon-pink/5 border border-neon-pink/20 rounded-lg p-4">
            <h3 className="text-lg text-neon-pink mb-2">Charity Allocation</h3>
            <p className="text-sm text-text-secondary mb-4">A minimum of 10% of your subscription goes to charity.</p>
            
            <div className="mb-4">
              <label className="label">Select Charity</label>
              <select className="input-field appearance-none" required>
                <option value="">-- Choose a cause --</option>
                <option value="1">Digital Heroes Foundation</option>
                <option value="2">Junior Golf Initiative</option>
                <option value="3">Global Wildlife Fund</option>
              </select>
            </div>

            <div>
              <label className="label flex justify-between">
                <span>Contribution Percentage</span>
                <span className="text-neon-pink font-bold">{charityPercentage}%</span>
              </label>
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={charityPercentage}
                onChange={(e) => setCharityPercentage(Number(e.target.value))}
                className="w-full accent-neon-pink"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="card p-3 border-neon-blue cursor-pointer bg-neon-blue/10">
              <div className="font-bold text-lg">Monthly</div>
              <div className="text-neon-blue font-black text-2xl">$20<span className="text-sm text-text-secondary font-normal">/mo</span></div>
            </div>
            <div className="card p-3 cursor-pointer opacity-70 hover:opacity-100 transition">
              <div className="font-bold text-lg">Yearly</div>
              <div className="text-white font-black text-2xl">$200<span className="text-sm text-text-secondary font-normal">/yr</span></div>
              <div className="text-xs text-neon-green">Save $40</div>
            </div>
          </div>

          <button type="submit" className="btn bg-neon-pink text-white hover:bg-[#ff107a]/80 w-full mt-4 shadow-[0_0_15px_rgba(255,16,122,0.4)]">
            Subscribe & Pay
          </button>
        </form>

        <p className="text-center text-text-secondary mt-8 text-sm">
          Already subscribed? <Link href="/login" className="text-neon-blue hover:text-white transition">Sign In</Link>
        </p>
      </div>
    </main>
  );
}

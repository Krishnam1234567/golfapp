'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import GlassCard from '@/components/ui/GlassCard';
import NeonInput from '@/components/ui/NeonInput';
import NeonButton from '@/components/ui/NeonButton';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [charityId, setCharityId] = useState('');
  const [charityPercentage, setCharityPercentage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      if (!charityId) throw new Error('Please select a charity cause.');
      
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: `${firstName} ${lastName}`,
            charity_id: charityId,
            charity_percentage: charityPercentage
          }
        }
      });

      if (signUpError) throw signUpError;
      
      alert('Subscription successful! Check your email to verify your account.');
      router.push('/login');
    } catch (err: any) {
      setError(err.message || 'Failed to sign up.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center py-12 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#ff00ff]/10 rounded-full blur-[120px] pointer-events-none animate-float"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-[#00f0ff]/10 rounded-full blur-[100px] pointer-events-none animate-neon-pulse"></div>

      <div className="w-full max-w-lg px-4 z-10">
        <GlassCard glowColor="secondary" className="p-8 border-[#ff00ff]/20">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block text-2xl font-black tracking-tight text-white mb-6 animate-float">
               GOLF<span className="text-[#ff00ff] glow-text-pink">CHARITY</span>
            </Link>
            <h1 className="text-3xl text-white font-bold tracking-tight">Start Your Subscription</h1>
            <p className="text-gray-400 mt-2 font-light">Play. Win. Give.</p>
          </div>

          <form onSubmit={handleSignUp} className="flex-col gap-5 flex">
            <div className="grid grid-cols-2 gap-4">
              <NeonInput label="First Name" type="text" variant="secondary" value={firstName} onChange={e => setFirstName(e.target.value)} required />
              <NeonInput label="Last Name" type="text" variant="secondary" value={lastName} onChange={e => setLastName(e.target.value)} required />
            </div>
            
            <NeonInput label="Email Address" type="email" variant="secondary" value={email} onChange={e => setEmail(e.target.value)} required />
            <NeonInput label="Password" type="password" variant="secondary" value={password} onChange={e => setPassword(e.target.value)} required />

            <hr className="border-white/10 my-2" />

            {/* Charity Selection */}
            <div className="bg-[#ff00ff]/5 border border-[#ff00ff]/30 rounded-xl p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff00ff]/10 blur-2xl rounded-full"></div>
              
              <h3 className="text-lg font-bold text-[#ff00ff] mb-1 relative z-10 glow-text-pink">Charity Allocation</h3>
              <p className="text-sm text-gray-400 mb-5 relative z-10">A minimum of 10% of your subscription goes to charity.</p>
              
              <div className="mb-5 relative z-10">
                <label className="text-sm font-semibold tracking-wide text-gray-300 uppercase pl-1 block mb-2">Select Charity</label>
                <select 
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white outline-none focus:border-[#ff00ff] focus:shadow-[0_0_15px_rgba(255,0,255,0.3)] appearance-none cursor-pointer" 
                  value={charityId}
                  onChange={e => setCharityId(e.target.value)}
                  required
                >
                  <option value="">-- Choose a cause --</option>
                  <option value="cf20e891-1234-4000-8000-000000000001">Digital Heroes Foundation</option>
                  <option value="cf20e891-1234-4000-8000-000000000002">Junior Golf Initiative</option>
                  <option value="cf20e891-1234-4000-8000-000000000003">Global Wildlife Fund</option>
                </select>
              </div>

              <div className="relative z-10">
                <label className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold tracking-wide text-gray-300 uppercase">Contribution</span>
                  <span className="text-[#ff00ff] font-black text-xl drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">{charityPercentage}%</span>
                </label>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={charityPercentage}
                  onChange={(e) => setCharityPercentage(Number(e.target.value))}
                  className="w-full accent-[#ff00ff] cursor-pointer"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="bg-[#00f0ff]/10 border border-[#00f0ff]/50 rounded-xl p-4 cursor-pointer text-center transition-all hover:bg-[#00f0ff]/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <div className="font-bold text-lg text-white mb-1">Monthly</div>
                <div className="text-[#00f0ff] font-black text-3xl drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">$20<span className="text-sm text-gray-400 font-normal">/mo</span></div>
              </div>
              <div className="bg-black/30 border border-white/10 rounded-xl p-4 cursor-pointer text-center opacity-70 hover:opacity-100 transition-all hover:border-white/30">
                <div className="font-bold text-lg text-white mb-1">Yearly</div>
                <div className="text-white font-black text-3xl">$200<span className="text-sm text-gray-400 font-normal">/yr</span></div>
                <div className="text-xs text-[#39ff14] font-bold mt-1 tracking-wider glow-text-green">SAVE $40</div>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-medium text-center shadow-[0_0_10px_rgba(255,0,0,0.2)]">
                {error}
              </div>
            )}
            <div className="mt-4">
              <NeonButton type="submit" variant="secondary" className="w-full text-lg" disabled={isLoading}>
                {isLoading ? 'Processing...' : 'Subscribe & Pay'}
              </NeonButton>
            </div>
          </form>

          <p className="text-center text-gray-400 mt-8 text-sm">
            Already subscribed? <Link href="/login" className="text-[#00f0ff] hover:text-white transition-colors duration-300 font-bold glow-text">Sign In</Link>
          </p>
        </GlassCard>
      </div>
    </main>
  );
}

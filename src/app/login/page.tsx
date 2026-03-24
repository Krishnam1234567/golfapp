'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import GlassCard from '@/components/ui/GlassCard';
import NeonInput from '@/components/ui/NeonInput';
import NeonButton from '@/components/ui/NeonButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;
      
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in. Check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-[#39ff14]/10 rounded-full blur-[100px] pointer-events-none animate-neon-pulse"></div>
      <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-[#00f0ff]/10 rounded-full blur-[120px] pointer-events-none animate-float"></div>

      <div className="w-full max-w-md px-4 z-10">
        <GlassCard glowColor="accent" className="p-8">
          <div className="text-center mb-10">
            <Link href="/" className="inline-block text-2xl font-black tracking-tight text-white mb-6 animate-float">
              GOLF<span className="text-[#39ff14] glow-text-green">CHARITY</span>
            </Link>
            <h1 className="text-3xl text-white font-bold tracking-tight">Welcome Back</h1>
            <p className="text-gray-400 mt-2 font-light">Sign in to enter your scores</p>
          </div>

          <form onSubmit={handleLogin} className="flex-col gap-6 flex">
            <NeonInput 
              label="Email Address"
              type="email"
              variant="accent"
              placeholder="golfer@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <NeonInput 
              label="Password"
              type="password"
              variant="accent"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-medium text-center shadow-[0_0_10px_rgba(255,0,0,0.2)]">
                {error}
              </div>
            )}
            <div className="mt-4">
              <NeonButton type="submit" variant="accent" className="w-full" disabled={isLoading}>
                {isLoading ? 'Authenticating...' : 'Sign In To Dashboard'}
              </NeonButton>
            </div>
          </form>

          <p className="text-center text-gray-400 mt-8 text-sm">
            Don't have an account? <Link href="/signup" className="text-[#00f0ff] hover:text-white transition-colors duration-300 font-bold glow-text">Subscribe Now</Link>
          </p>
        </GlassCard>
      </div>
    </main>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mock Login sequence triggered.');
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-xl font-bold tracking-tight text-white mb-6">
            GOLF<span className="text-neon-green glow-green">CHARITY</span>
          </Link>
          <h1 className="text-3xl text-white">Welcome Back</h1>
          <p className="text-text-secondary mt-2">Sign in to enter your scores</p>
        </div>

        <form onSubmit={handleLogin} className="flex-col gap-4 flex p-2">
          <div>
            <label className="label">Email Address</label>
            <input 
              type="email" 
              className="input-field" 
              placeholder="golfer@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="label">Password</label>
            <input 
              type="password" 
              className="input-field" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary w-full shadow-[0_0_15px_rgba(57,255,20,0.5)]">
            Sign In To Dashboard
          </button>
        </form>

        <p className="text-center text-text-secondary mt-8 text-sm">
          Don't have an account? <Link href="/signup" className="text-neon-blue hover:text-white transition">Subscribe Now</Link>
        </p>
      </div>
    </main>
  );
}

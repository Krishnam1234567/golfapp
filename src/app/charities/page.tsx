'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Heart, ExternalLink, Filter } from 'lucide-react';

const mockCharities = [
  { id: 1, name: 'Digital Heroes Foundation', description: 'Empowering underprivileged youth through technology and golf education programs nationwide.', featured: true, image: 'bg-neon-purple/20' },
  { id: 2, name: 'Junior Golf Initiative', description: 'Providing access, equipment, and mentorship to young aspiring golfers from diverse backgrounds.', featured: false, image: 'bg-neon-green/20' },
  { id: 3, name: 'Global Wildlife Fund', description: 'Protecting endangered species and their habitats around the world. Partnered with the Eco-Golf initiative.', featured: true, image: 'bg-neon-blue/20' },
  { id: 4, name: 'Veterans on the Green', description: 'Using golf as therapeutic recreation for military veterans transitioning to civilian life.', featured: false, image: 'bg-neon-pink/20' },
];

export default function Charities() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockCharities.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <header className="container py-8 flex justify-between items-center border-b border-border">
        <Link href="/" className="inline-block text-xl font-bold tracking-tight text-white flex items-center gap-4">
           <div className="w-10 h-10 rounded-full bg-neon-green flex items-center justify-center text-black font-bold text-xl">
            G
          </div>
          <span className="glow-green">GOLF<span className="text-neon-green">CHARITY</span></span>
        </Link>
        <nav className="flex gap-6 items-center">
          <Link href="/dashboard" className="text-text-secondary hover:text-white transition">Dashboard</Link>
          <Link href="/login" className="btn btn-primary px-6 py-2">Sign In</Link>
        </nav>
      </header>

      <main className="container py-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Make An <span className="text-neon-pink glow-pink">Impact.</span>
          </h1>
          <p className="text-text-secondary text-lg">
            At least 10% of every subscription pool goes directly to the charities below. Choose your cause when you sign up, and track your total contributions in your dashboard.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
            <input 
              type="text" 
              placeholder="Search charities by name or cause..." 
              className="input-field pl-12 h-14"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn btn-secondary flex items-center gap-2 h-14 px-6 border-neon-blue/30 hover:border-neon-blue">
            <Filter size={20} /> Filter Causes
          </button>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filtered.map(charity => (
            <div key={charity.id} className="card flex flex-col justify-between group">
              <div>
                <div className={`h-40 rounded-lg w-full mb-6 ${charity.image} flex items-center justify-center relative overflow-hidden group-hover:opacity-80 transition`}>
                  {charity.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-background text-neon-pink text-xs font-bold rounded-full border border-neon-pink flex items-center gap-1">
                      <Heart size={12} className="fill-neon-pink" /> Featured Cause
                    </div>
                  )}
                  <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center text-2xl font-black text-white mix-blend-screen opacity-50">
                    {charity.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition">{charity.name}</h3>
                <p className="text-text-secondary mb-6">{charity.description}</p>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-border">
                <button className="text-sm font-medium text-white hover:text-neon-pink transition flex items-center gap-2">
                  View Full Profile <ExternalLink size={16} />
                </button>
                <Link href="/signup" className="btn btn-secondary px-4 py-2 text-sm border-neon-green/30 hover:border-neon-green hover:text-neon-green">
                  Support & Subscribe
                </Link>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center py-24 text-text-secondary card border-dashed">
              No charities found matching "{searchTerm}". <br className="mb-4" />
              <button onClick={() => setSearchTerm('')} className="text-neon-blue hover:underline mt-4">Clear search</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

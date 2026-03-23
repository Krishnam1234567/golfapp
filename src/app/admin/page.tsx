'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border p-6 flex flex-col hidden md:flex">
        <Link href="/" className="inline-block text-xl font-bold tracking-tight text-white mb-12">
          GOLF<span className="text-neon-pink glow-pink">ADMIN</span>
        </Link>
        <nav className="flex flex-col gap-2">
          <button onClick={() => setActiveTab('overview')} className={`text-left p-3 rounded-lg transition ${activeTab === 'overview' ? 'bg-surface text-neon-pink font-medium' : 'text-text-secondary hover:text-white'}`}>
            Overview
          </button>
          <button onClick={() => setActiveTab('draws')} className={`text-left p-3 rounded-lg transition ${activeTab === 'draws' ? 'bg-surface text-neon-pink font-medium' : 'text-text-secondary hover:text-white'}`}>
            Draw Management
          </button>
          <button onClick={() => setActiveTab('users')} className={`text-left p-3 rounded-lg transition ${activeTab === 'users' ? 'bg-surface text-neon-pink font-medium' : 'text-text-secondary hover:text-white'}`}>
            User Management
          </button>
          <button onClick={() => setActiveTab('verification')} className={`text-left p-3 rounded-lg transition ${activeTab === 'verification' ? 'bg-surface text-neon-pink font-medium' : 'text-text-secondary hover:text-white'}`}>
            Winner Verification
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto w-full">
        <header className="mb-8">
          <h1 className="text-3xl text-white font-bold capitalize">{activeTab.replace('-', ' ')}</h1>
          <p className="text-text-secondary">Manage platform data and operations.</p>
        </header>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card border-t-4 border-t-neon-blue border-r-0 border-b-0 border-l-0 rounded-t-sm shadow-none">
              <div className="text-text-secondary text-sm">Total Active Users</div>
              <div className="text-3xl font-black text-white mt-2">1,248</div>
            </div>
            <div className="card border-t-4 border-t-neon-green border-r-0 border-b-0 border-l-0 rounded-t-sm shadow-none">
              <div className="text-text-secondary text-sm">Active Subscriptions</div>
              <div className="text-3xl font-black text-white mt-2">1,102</div>
            </div>
            <div className="card border-t-4 border-t-neon-pink border-r-0 border-b-0 border-l-0 rounded-t-sm shadow-none">
              <div className="text-text-secondary text-sm">Charity Pool (Current)</div>
              <div className="text-3xl font-black text-white mt-2">$2,450</div>
            </div>
            <div className="card border-t-4 border-t-neon-yellow border-r-0 border-b-0 border-l-0 rounded-t-sm shadow-none">
              <div className="text-text-secondary text-sm">Prize Pool (Current)</div>
              <div className="text-3xl font-black text-white mt-2">$8,900</div>
            </div>
          </div>
        )}

        {activeTab === 'draws' && (
          <section className="card max-w-2xl border-neon-purple/30">
            <h2 className="text-xl font-bold text-white mb-6">Run Monthly Draw Config</h2>
            
            <div className="bg-background border border-border rounded-lg p-6 mb-6">
              <h3 className="text-white font-medium mb-4">Draw Logic Selection</h3>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-text-secondary cursor-pointer hover:text-white">
                  <input type="radio" name="logic" value="random" defaultChecked className="accent-neon-purple" /> Random Generation
                </label>
                <label className="flex items-center gap-2 text-text-secondary cursor-pointer hover:text-white">
                  <input type="radio" name="logic" value="algo" className="accent-neon-purple" /> Algorithmic (Weighted)
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={() => alert('Simulating draw...')} className="btn btn-secondary flex-1">
                Run Simulation
              </button>
              <button onClick={() => alert('Publishing official draw...')} className="btn bg-neon-purple text-white hover:bg-[#b026ff]/80 flex-1 shadow-[0_0_15px_rgba(176,38,255,0.4)]">
                Publish Official Results
              </button>
            </div>
          </section>
        )}

        {activeTab === 'verification' && (
          <section className="card border-border">
            <h2 className="text-xl font-bold text-white mb-6">Pending Winner Verifications</h2>
            <div className="w-full bg-background rounded-lg border border-border overflow-hidden">
              <table className="w-full text-left text-sm text-text-secondary">
                <thead className="bg-surface text-white border-b border-border">
                  <tr>
                    <th className="p-4">User</th>
                    <th className="p-4">Match</th>
                    <th className="p-4">Claim Amount</th>
                    <th className="p-4">Proof</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-surface/50 transition">
                    <td className="p-4 text-white">John Doe</td>
                    <td className="p-4"><span className="text-neon-pink font-bold">5 Match</span> (Jackpot)</td>
                    <td className="p-4">$12,500</td>
                    <td className="p-4"><button className="text-neon-blue hover:underline">View Image</button></td>
                    <td className="p-4 flex gap-2">
                      <button className="px-3 py-1 bg-neon-green/10 text-neon-green rounded border border-neon-green/30 hover:bg-neon-green/20">Approve</button>
                      <button className="px-3 py-1 bg-red-500/10 text-red-500 rounded border border-red-500/30 hover:bg-red-500/20">Reject</button>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-surface/50 transition">
                    <td className="p-4 text-white">Alice Smith</td>
                    <td className="p-4"><span className="text-neon-blue font-bold">4 Match</span></td>
                    <td className="p-4">$350</td>
                    <td className="p-4"><button className="text-neon-blue hover:underline">View Image</button></td>
                    <td className="p-4 flex gap-2">
                       <button className="px-3 py-1 bg-neon-green/10 text-neon-green rounded border border-neon-green/30 hover:bg-neon-green/20">Approve</button>
                       <button className="px-3 py-1 bg-red-500/10 text-red-500 rounded border border-red-500/30 hover:bg-red-500/20">Reject</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

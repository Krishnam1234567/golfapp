import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: 'primary' | 'secondary' | 'accent' | 'none';
}

export default function GlassCard({ children, className = '', hoverEffect = true, glowColor = 'primary' }: GlassCardProps) {
  const hoverClass = hoverEffect ? 'hover:-translate-y-2 hover:scale-[1.01]' : '';
  
  const borderHover = 
    glowColor === 'primary' ? 'hover:border-[#00f0ff]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(0,240,255,0.15)]' :
    glowColor === 'secondary' ? 'hover:border-[#ff00ff]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(255,0,255,0.15)]' :
    glowColor === 'accent' ? 'hover:border-[#39ff14]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(57,255,20,0.15)]' :
    'hover:border-white/20';

  return (
    <div className={`
      relative overflow-hidden
      bg-black/30 backdrop-blur-xl
      border border-white/10 rounded-2xl
      transition-all duration-500 ease-out
      shadow-[0_8px_32px_rgba(0,0,0,0.5)]
      ${hoverClass}
      ${hoverEffect ? borderHover : ''}
      ${className}
    `}>
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}

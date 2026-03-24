import React from 'react';
import Link from 'next/link';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  glow?: boolean;
  href?: string;
  children: React.ReactNode;
}

export default function NeonButton({ variant = 'primary', glow = true, className = '', href, children, ...props }: NeonButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-3 rounded-full font-bold tracking-wide transition-all duration-300 overflow-hidden outline-none";
  
  const colorMap = {
    primary: {
      bg: "bg-black/50",
      border: "border-[#00f0ff]/50",
      text: "text-[#00f0ff]",
      hoverBg: "hover:bg-[#00f0ff]/10",
      hoverBorder: "hover:border-[#00f0ff]",
      hoverText: "hover:text-white",
      glowColor: "shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)]"
    },
    secondary: {
      bg: "bg-black/50",
      border: "border-[#ff00ff]/50",
      text: "text-[#ff00ff]",
      hoverBg: "hover:bg-[#ff00ff]/10",
      hoverBorder: "hover:border-[#ff00ff]",
      hoverText: "hover:text-white",
      glowColor: "shadow-[0_0_15px_rgba(255,0,255,0.4)] hover:shadow-[0_0_30px_rgba(255,0,255,0.8)]"
    },
    accent: {
      bg: "bg-black/50",
      border: "border-[#39ff14]/50",
      text: "text-[#39ff14]",
      hoverBg: "hover:bg-[#39ff14]/10",
      hoverBorder: "hover:border-[#39ff14]",
      hoverText: "hover:text-white hover:bg-[#39ff14]/30",
      glowColor: "shadow-[0_0_15px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.8)]"
    }
  };

  const current = colorMap[variant];
  
  const btnClassName = `
    ${baseClasses} 
    border ${current.border} 
    ${current.bg} 
    ${current.text} 
    ${current.hoverBg} 
    ${current.hoverBorder} 
    ${current.hoverText} 
    ${glow ? current.glowColor : ''} 
    ${className}
    group
  `;

  const innerContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={btnClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button className={btnClassName} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {innerContent}
    </button>
  );
}

import React, { forwardRef } from 'react';

interface NeonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

const NeonInput = forwardRef<HTMLInputElement, NeonInputProps>(
  ({ label, variant = 'primary', className = '', ...props }, ref) => {
    const focusColorStr = 
      variant === 'primary' ? 'focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)]' :
      variant === 'secondary' ? 'focus:border-[#ff00ff] focus:shadow-[0_0_15px_rgba(255,0,255,0.3)]' :
      'focus:border-[#39ff14] focus:shadow-[0_0_15px_rgba(57,255,20,0.3)]';

    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label className="text-sm font-semibold tracking-wide text-gray-300 uppercase pl-1 drop-shadow-md">
          {label}
        </label>
        <div className="relative">
          <input
            ref={ref}
            className={`
              w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white 
              placeholder-gray-600 transition-all duration-300 outline-none
              ${focusColorStr}
              backdrop-blur-md
            `}
            {...props}
          />
        </div>
      </div>
    );
  }
);
NeonInput.displayName = 'NeonInput';

export default NeonInput;

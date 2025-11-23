import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  pulse?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "py-4 px-8 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-primary hover:bg-brand-dark text-white shadow-brand-primary/50",
    secondary: "bg-green-500 hover:bg-green-600 text-white shadow-green-500/50", // High contrast for final CTA
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand-dark",
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";
  const pulseClass = pulse ? "animate-pulse" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${pulseClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
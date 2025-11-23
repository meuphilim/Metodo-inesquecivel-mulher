import React, { useEffect, useState } from 'react';
import { Button } from './Button';

export const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 600px
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 transform translate-y-0">
      <div className="container mx-auto flex items-center justify-between max-w-4xl gap-4">
        <div className="hidden md:block">
          <p className="font-bold text-slate-900">Restam poucas vagas com desconto</p>
          <p className="text-xs text-slate-500">Oferta encerra em breve</p>
        </div>
        <Button onClick={scrollToOffer} className="w-full md:w-auto text-sm md:text-base py-3 px-6" variant="primary">
          Sim! Quero ser Inesquecível
        </Button>
      </div>
    </div>
  );
};
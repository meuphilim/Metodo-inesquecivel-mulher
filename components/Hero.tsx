import React from 'react';
import { Button } from './Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Emotional cinematic background" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-brand-dark/30 to-slate-900/90"></div>
        {/* Animated particles/blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl pt-20">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="inline-flex items-center gap-2 px-6 py-2 mb-8 border border-rose-400/50 rounded-full text-rose-200 text-xs md:text-sm font-bold tracking-widest uppercase bg-rose-900/30 backdrop-blur-md shadow-lg shadow-rose-500/10">
            <Sparkles size={14} className="animate-pulse" />
            Método Secreto Revelado
          </span>
        </div>
        
        <h1 className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 drop-shadow-2xl" style={{ animationDelay: '0.4s' }}>
          Faça Ele Sentir <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-brand-primary to-rose-400 bg-[length:200%_auto] animate-pulse">Sua Falta</span> Agora.
        </h1>
        
        <p className="animate-fade-in-up text-lg md:text-2xl text-gray-200 mb-10 font-light leading-relaxed max-w-3xl mx-auto" style={{ animationDelay: '0.6s' }}>
          Descubra o gatilho emocional que transforma um homem <strong className="text-white font-bold">frio e distante</strong> em alguém que <strong className="text-rose-300 font-bold border-b border-rose-300/50">tem medo de te perder</strong>.
          <br/><span className="text-sm md:text-base opacity-80 mt-2 block">(Mesmo que ele já tenha dito que "acabou").</span>
        </p>

        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center items-center mt-10" style={{ animationDelay: '0.8s' }}>
          <Button onClick={scrollToOffer} pulse className="text-xl px-10 py-5 shadow-brand-primary/50 shadow-2xl hover:scale-105 transition-transform duration-300">
            QUERO ELE OBCECADO POR MIM
            <ArrowRight className="w-6 h-6 animate-bounce-x" />
          </Button>
        </div>
        
        <p className="animate-fade-in-up mt-8 text-sm text-gray-400 flex items-center justify-center gap-2 opacity-80" style={{ animationDelay: '1s' }}>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> 
          Acesso imediato e sigiloso.
        </p>
      </div>
    </header>
  );
};
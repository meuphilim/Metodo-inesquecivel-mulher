import React from 'react';
import { Button } from './Button';
import { Check, ShieldCheck, Gift, Clock, AlertCircle, Zap, Star } from 'lucide-react';
import { BonusItem } from '../types';
import { ScrollReveal } from './ScrollReveal';

const bonuses: BonusItem[] = [
  {
    title: "BÔNUS 1: O Gatilho da Lúxuria",
    value: "R$ 97,00",
    description: "Mensagens picantes que criam tensão sexual imediata (use com cuidado)."
  },
  {
    title: "BÔNUS 2: Mente Blindada",
    value: "R$ 67,00",
    description: "Nunca mais chore por homem. Tenha o controle emocional de uma rainha."
  },
  {
    title: "BÔNUS 3: O Segredo da Lealdade",
    value: "R$ 127,00",
    description: "A técnica proibida para fazer ele ter nojo de traição."
  }
];

export const OfferSection: React.FC = () => {
  const checkoutUrl = "https://pay.kirvano.com/dcb28cb0-7bb8-4b7d-a55d-bd767ae77c2c";

  const handleBuy = () => {
    // Abre em uma nova aba para evitar erros de bloqueio de iframe (X-Frame-Options)
    window.open(checkoutUrl, '_blank');
  };

  return (
    <section id="offer" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse delay-1000"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Stack Value Left */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 border border-red-400 shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-pulse">
                <Clock size={16} />
                ÚLTIMAS HORAS COM ESTE VALOR
              </div>
              
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-none text-white drop-shadow-lg">
                Leve tudo isso pelo preço de <span className="text-brand-primary underline decoration-wavy decoration-white/30">um lanche.</span>
              </h2>

              {/* Social Proof Badge */}
              <div className="flex items-center gap-4 mb-10 bg-slate-900/50 p-3 rounded-2xl border border-slate-800 w-fit backdrop-blur-sm">
                <div className="flex -space-x-3">
                  <img src="https://randomuser.me/api/portraits/women/42.jpg" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-slate-950" />
                  <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-slate-950" />
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-slate-950" />
                  <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-brand-primary flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-brand-primary/50">
                    +5k
                  </div>
                </div>
                <div>
                  <div className="flex gap-0.5 text-yellow-400 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-xs text-slate-300 font-medium"><span className="text-white font-bold text-sm">5.430+</span> relacionamentos salvos</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-brand-primary/30 shadow-2xl relative overflow-hidden group hover:border-brand-primary transition-colors">
                  <div className="absolute top-0 right-0 bg-brand-primary text-xs font-bold px-2 py-1 text-white rounded-bl-lg">PREMIUM</div>
                  <div className="bg-brand-primary p-3 rounded-xl mt-1 shadow-lg shadow-brand-primary/40 group-hover:scale-110 transition-transform">
                    <Check className="text-white" size={24} strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Método Mulher Inesquecível</h3>
                    <p className="text-gray-300 font-medium">O guia completo que já salvou +5.000 relacionamentos.</p>
                  </div>
                </div>
                
                {bonuses.map((bonus, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-slate-900/40 p-4 rounded-xl border border-slate-700 hover:bg-slate-800/60 transition-colors">
                    <div className="bg-purple-500/20 p-2 rounded-lg mt-1">
                      <Gift className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{bonus.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{bonus.description}</p>
                      <p className="text-green-400 text-xs font-bold uppercase tracking-wide flex items-center gap-2">
                        <span className="line-through text-slate-600 decoration-slate-500 decoration-2 text-xs opacity-70">Vendido por: {bonus.value}</span> 
                        <span className="bg-green-500 text-slate-900 px-2 py-0.5 rounded font-extrabold animate-pulse">GRÁTIS</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Price Card Right */}
          <div className="w-full lg:w-1/2 relative">
            <ScrollReveal delay={200}>
              {/* Glowing effect behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-purple-500 to-rose-500 rounded-[2.5rem] blur-lg opacity-80 animate-pulse"></div>
              
              <div className="bg-white text-slate-900 rounded-[2rem] p-8 md:p-12 shadow-[0_0_50px_rgba(219,39,119,0.3)] relative transform hover:-translate-y-1 transition-transform duration-300">
                
                {/* Badge Flutuante */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-rose-600 text-white text-base md:text-lg font-black px-8 py-3 rounded-full uppercase tracking-wider shadow-xl shadow-red-500/40 animate-bounce-y whitespace-nowrap z-20 border-2 border-white">
                  🔥 90% DE DESCONTO
                </div>

                <div className="text-center mb-8 mt-6">
                  <p className="text-slate-400 mb-1 text-base font-medium uppercase tracking-widest">De valor inestimável por:</p>
                  <p className="text-slate-400 text-lg line-through decoration-red-500 decoration-2 font-bold opacity-60">R$ 297,00</p>
                  
                  <div className="flex flex-col items-center justify-center my-4 relative">
                    <div className="text-[6rem] leading-none font-black text-rose-600 tracking-tighter drop-shadow-sm flex items-start justify-center gap-1 animate-heat-pulsate">
                      <span className="text-2xl mt-4 font-bold text-slate-500 transform-none">R$</span>
                      29
                      <span className="text-4xl mt-2">,90</span>
                    </div>
                    <span className="text-sm font-bold text-white bg-green-500 px-4 py-1.5 rounded-full mt-4 animate-pulse shadow-lg shadow-green-500/30">
                      PAGAMENTO ÚNICO • ACESSO VITALÍCIO
                    </span>
                  </div>
                </div>

                <Button 
                  fullWidth 
                  variant="secondary" 
                  pulse 
                  className="mb-4 text-xl md:text-2xl py-6 shadow-green-500/50 shadow-2xl uppercase font-black tracking-wide hover:scale-105 hover:shadow-green-500/70 transition-all duration-300 border-b-4 border-green-700 active:border-b-0 active:translate-y-1"
                  onClick={handleBuy}
                >
                  SIM! QUERO MUDAR AGORA
                </Button>

                <p className="text-center text-slate-500 text-sm mb-6 font-medium">
                  Menos de <span className="text-slate-900 font-bold">R$ 1,00 por dia</span> para ter ele de volta.
                </p>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col items-center gap-3 mt-6 relative overflow-hidden text-center group hover:border-brand-primary/30 transition-colors">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                  
                  <div className="flex items-center gap-2 text-slate-800 font-black text-lg uppercase">
                    <ShieldCheck className="text-green-600" size={32} />
                    <span>Garantia de Satisfação Total</span>
                  </div>
                  
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="block text-slate-900 mb-2 font-bold text-base">Não decida agora. Teste por 7 dias.</strong>
                    Use o método. Se ele não te mandar mensagem, se você não se sentir poderosa ou se simplesmente não gostar da minha voz... <strong>eu devolvo 100% do seu dinheiro.</strong>
                  </p>
                  
                  <p className="text-xs text-slate-500 italic mt-1">
                    Sem letras miúdas. Sem perguntas constrangedoras. Basta um e-mail.
                  </p>
                </div>
                
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[10px] text-slate-400 uppercase tracking-wide font-bold">
                  <span className="flex items-center gap-1"><Zap size={12} /> Entrega Imediata</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="flex items-center gap-1"><AlertCircle size={12} /> Compra Segura</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
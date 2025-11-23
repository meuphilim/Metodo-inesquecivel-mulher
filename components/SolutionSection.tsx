import React from 'react';
import { Sparkles, Brain, Lock, Zap } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-rose-50 via-white to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto">
          
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-purple-600 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
                <img 
                  src="https://picsum.photos/600/800?grayscale" 
                  alt="Woman confident and happy" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover h-[600px] border-8 border-white transform hover:scale-[1.01] transition-transform duration-500"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-10 -right-5 md:-right-10 bg-white p-4 rounded-xl shadow-xl border border-rose-100 max-w-[200px] animate-float">
                  <div className="flex gap-1 text-yellow-400 mb-1">
                    {[1,2,3,4,5].map(i => <Sparkles key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-xs text-slate-500 font-bold leading-tight">"Ele mandou msg depois de 3 meses!"</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <ScrollReveal delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-light text-brand-dark rounded-full text-xs font-bold uppercase mb-4">
                <Zap size={14} fill="currentColor" />
                Método Comprovado
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif leading-tight">
                Transforme-se na <br/><span className="text-brand-primary">Obsessão Dele</span>
              </h3>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                Este não é um guia sobre "como agradar homem". É um manual de guerra psicológica para retomar o controle. O <strong>Método da Mulher que Ele Nunca Esquece</strong> usa a biologia masculina contra ele.
              </p>
            </ScrollReveal>
            
            <div className="space-y-8">
              <ScrollReveal delay={200}>
                <div className="flex gap-6 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-rose-100">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-dark flex items-center justify-center text-white shadow-lg shadow-brand-primary/30">
                    <Brain size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">1. Reprogramação de Imagem</h4>
                    <p className="text-slate-600">Apague a imagem da "mulher carente" da mente dele e implante a imagem da "mulher prêmio" que ele precisa conquistar para se sentir homem.</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="flex gap-6 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-rose-100">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                    <Sparkles size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">2. O Gatilho da Ausência</h4>
                    <p className="text-slate-600">Descubra a mensagem exata de 7 palavras que faz ele sentir um vazio no peito e uma necessidade física de ouvir sua voz.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="flex gap-6 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-rose-100">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-500/30">
                    <Lock size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">3. Fidelidade Involuntária</h4>
                    <p className="text-slate-600">Crie uma conexão tão profunda que outras mulheres se tornam invisíveis para ele. Ele vai ter olhos apenas para você.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
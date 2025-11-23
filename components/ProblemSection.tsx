import React from 'react';
import { HeartCrack, MessageCircleX, UserX, AlertTriangle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-50/50 skew-x-12 z-0"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Seja sincera: <br/>
              <span className="text-brand-dark italic font-serif">Você aguenta mais uma noite assim?</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-brand-primary to-brand-dark mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <ScrollReveal delay={100}>
            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border-t-4 border-rose-200 hover:border-brand-primary transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-rose-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300">
                <MessageCircleX size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">O Vácuo Que Dói</h3>
              <p className="text-slate-600 leading-relaxed">
                Você manda mensagem, ele vê, fica online... e <strong>não responde</strong>. A ansiedade toma conta do seu peito e você checa o celular de 5 em 5 minutos.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border-t-4 border-rose-200 hover:border-brand-primary transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-rose-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300">
                <UserX size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">A Frieza Repentina</h3>
              <p className="text-slate-600 leading-relaxed">
                Ontem ele era carinhoso, hoje parece um estranho. Ele diz que "precisa de tempo" ou que "está confuso", deixando você no escuro, sem saber onde errou.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border-t-4 border-rose-200 hover:border-brand-primary transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-rose-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300">
                <HeartCrack size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">O Medo da Substituição</h3>
              <p className="text-slate-600 leading-relaxed">
                O pensamento terrível de que ele pode estar sorrindo para outra mulher agora, dando a atenção que você tanto queria, enquanto você chora sozinha.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 md:p-14 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-700">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 text-rose-400 font-bold uppercase tracking-wider text-sm">
                <AlertTriangle size={18} />
                <span>Atenção: Isso é perigoso</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-serif font-bold mb-8 leading-snug">
                Se você continuar correndo atrás,<br/> <span className="text-rose-400 underline decoration-rose-400/30 underline-offset-4">você vai perdê-lo para sempre.</span>
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-4">
                Homens não se apaixonam por quem está "sempre disponível". Eles se apaixonam pelo que sentem medo de perder.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white font-semibold">
                A boa notícia? Você pode virar esse jogo em <strong>menos de 24 horas</strong> se apertar os botões certos na mente dele.
              </p>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-primary/20 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-600/20 rounded-full blur-[80px]"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
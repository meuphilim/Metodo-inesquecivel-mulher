import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialProps } from '../types';
import { ScrollReveal } from './ScrollReveal';

const testimonialData: TestimonialProps[] = [
  {
    name: "Mariana S.",
    age: 29,
    text: "Eu achei que tinha perdido ele para sempre. Ele disse que 'não sentia mais o mesmo'. 5 dias aplicando o módulo 2 e ele apareceu na minha porta com flores pedindo para conversar. É inacreditável.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Carolina B.",
    age: 34,
    text: "O que eu mais amei foi que não precisei me humilhar. Pelo contrário, recuperei minha autoestima e ele percebeu isso. Hoje somos casados e ele me trata como uma rainha.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Fernanda L.",
    age: 26,
    text: "Funciona até se ele estiver com outra! Fiz exatamente o que o guia ensina sobre 'presença ausente' e em duas semanas ele terminou com ela para voltar comigo.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Elas conseguiram. <span className="text-brand-primary">Você é a próxima.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Veja histórias reais de mulheres que saíram do fundo do poço para o altar.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonialData.map((item, index) => (
            <ScrollReveal key={index} delay={index * 150} className="h-full">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col h-full relative group hover:-translate-y-2 transition-transform duration-300">
                <Quote className="absolute top-6 right-6 text-slate-100 group-hover:text-brand-light transition-colors" size={48} />
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-8 flex-grow leading-relaxed font-medium">"{item.text}"</p>
                <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-brand-light"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                    <span className="text-sm text-slate-500">{item.age} anos</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
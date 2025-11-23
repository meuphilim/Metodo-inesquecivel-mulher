import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "Será que funciona para o meu caso?",
    answer: "Sim. O método baseia-se em gatilhos psicológicos universais masculinos. Não importa se vocês terminaram há uma semana ou meses, ou se ele diz que 'não te ama mais'. Os gatilhos de atração funcionam abaixo do radar racional dele."
  },
  {
    question: "E se ele estiver com outra pessoa?",
    answer: "Este é um dos cenários mais comuns. O guia ensina como se posicionar para que ele comece a comparar a atual com você, e inevitavelmente, perceba que você é a mulher de alto valor que ele perdeu."
  },
  {
    question: "Como recebo o acesso?",
    answer: "O acesso é imediato e 100% digital. Assim que o pagamento for aprovado, você recebe um e-mail com seu login e senha para acessar a área de membros e baixar o material."
  },
  {
    question: "Tenho garantia?",
    answer: "Absoluta. Você tem 7 dias para ler, aplicar e testar. Se não sentir que sua autoestima mudou e que ele está reagindo diferente, devolvemos 100% do seu dinheiro. Sem perguntas."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">
          Perguntas Frequentes
        </h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                onClick={() => toggle(index)}
              >
                <span className="font-semibold text-slate-900 text-lg pr-4">{item.question}</span>
                {openIndex === index ? (
                  <Minus className="text-brand-primary flex-shrink-0" />
                ) : (
                  <Plus className="text-brand-primary flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
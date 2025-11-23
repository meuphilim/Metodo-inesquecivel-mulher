import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 text-sm border-t border-slate-900">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Método da Mulher Inesquecível. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
        <p className="max-w-2xl mx-auto text-xs text-slate-600">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. As histórias citadas são reais, mas os resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
};
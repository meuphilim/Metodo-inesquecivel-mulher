import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { Testimonials } from './components/Testimonials';
import { OfferSection } from './components/OfferSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { ScrollReveal } from './components/ScrollReveal';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-primary selection:text-white font-sans overflow-x-hidden">
      <Hero />
      <ProblemSection />
      
      {/* Agitation/Bridge Section */}
      <section className="py-20 bg-brand-dark text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <ScrollReveal>
          <div className="container mx-auto max-w-4xl relative z-10">
            <p className="text-2xl md:text-4xl font-serif italic leading-relaxed font-medium">
              "Você não precisa correr atrás dele. Você precisa se tornar a mulher que ele tem <span className="text-rose-300 font-bold border-b-2 border-rose-300">medo terrível</span> de perder."
            </p>
          </div>
        </ScrollReveal>
      </section>

      <SolutionSection />
      <Testimonials />
      
      {/* Authority Section Snippet */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-6xl">
          <div className="w-full md:w-1/3">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-primary rounded-full blur-2xl opacity-20"></div>
                <img 
                  src="https://picsum.photos/400/400?grayscale" 
                  alt="Especialista" 
                  className="relative rounded-full w-56 h-56 mx-auto object-cover border-4 border-white shadow-2xl ring-4 ring-brand-light/50"
                />
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <ScrollReveal delay={100}>
              <h3 className="text-3xl font-serif font-bold mb-6 text-slate-900">Quem criou o método?</h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Olá, sou <strong>Dra. Isabella Mendes</strong>. Psicanalista comportamental especializada em dinâmica de relacionamentos e reconquista amorosa.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Após atender mais de 5.000 mulheres em meu consultório particular e ver o sofrimento repetitivo de mulheres incríveis sendo deixadas de lado, decidi compilar a ciência da atração em um método passo a passo. <strong className="text-brand-primary">Meu objetivo é que você nunca mais chore por um homem que não te valoriza.</strong>
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <OfferSection />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
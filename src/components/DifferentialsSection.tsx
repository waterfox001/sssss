import { DIFFERENTIALS, HOW_IT_WORKS, getWhatsAppUrl } from '../data/company';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Differentials Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] block mb-3">
            Por Que Escolher a Live In Foco
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Pilares de confiança, sensibilidade e técnica
          </h2>
          <p className="text-base text-[#9A9A9A] font-light leading-relaxed">
            Mais do que apertar um botão, entregamos a tranquilidade de saber que cada instante será guardado com primor.
          </p>
        </div>

        {/* 10 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {DIFFERENTIALS.map((diff, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-[#222222] hover:border-[#383838] p-6 rounded-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#777777] uppercase">
                    Pilar {String(index + 1).padStart(2, '0')}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9E9E9E] font-light leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Subsection */}
        <div className="pt-12 border-t border-[#1C1C1C]">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] block mb-3">
              Passo a Passo
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              Como funciona o atendimento
            </h3>
            <p className="text-xs sm:text-sm text-[#888888] font-light">
              Do primeiro contato ao recebimento das suas fotos, um processo transparente e sem burocracia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {HOW_IT_WORKS.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#111111] border border-[#222222] p-5 rounded-sm relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-bold text-white/20 block mb-2">
                    {step.step}
                  </span>
                  <h4 className="font-display text-sm font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#8A8A8A] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {idx < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[#444444]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={getWhatsAppUrl('quote')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#EAEAEA] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md"
            >
              <span>Iniciar contato pelo WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

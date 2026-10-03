import { useState } from 'react';
import { FAQS, getWhatsAppUrl } from '../data/company';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0F0F0F] border-b border-[#1E1E1E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-white" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-[#9A9A9A] font-light leading-relaxed">
            Respostas diretas sobre localização, Fortaleza, orçamentos, formatos e agendamento.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#141414] border border-[#242424] hover:border-[#383838] transition-colors rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#888888] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed border-t border-[#1C1C1C]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 p-6 bg-[#161616] border border-[#282828] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left rounded-sm">
          <div>
            <h4 className="font-display text-sm font-bold text-white">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="text-xs text-[#8A8A8A] mt-0.5 font-light">
              Nossa equipe responde rapidamente pelo WhatsApp oficial.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('general', 'Olá! Tenho uma dúvida sobre os serviços da Live In Foco e gostaria de conversar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#E0E0E0] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

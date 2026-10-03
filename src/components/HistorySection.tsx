import { TIMELINE, COMPANY, getWhatsAppUrl } from '../data/company';
import { Calendar, Award, MessageCircle } from 'lucide-react';

export function HistorySection() {
  return (
    <section id="historia" className="py-20 sm:py-28 bg-[#0C0C0C] border-b border-[#1E1E1E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] mb-3">
            <Award className="w-3.5 h-3.5 text-white" />
            <span>Nossa Trajetória Familiar</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            37 anos contando histórias através da fotografia
          </h2>
          <p className="text-sm sm:text-base text-[#9A9A9A] font-light leading-relaxed">
            Uma jornada de dedicação iniciada em 1989 que atravessou décadas, unindo tradição, amor pelo ofício e o olhar da nova geração.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-[#262626] ml-4 sm:ml-32 md:ml-40 space-y-12 pl-6 sm:pl-10">
          {TIMELINE.map((item, index) => (
            <div key={index} className="relative group">
              {/* Year Marker Badge */}
              <div className="sm:absolute sm:-left-44 md:-left-52 top-0 mb-2 sm:mb-0">
                <span className="inline-block px-3 py-1 bg-[#161616] border border-[#2E2E2E] text-xs font-mono font-semibold text-white tracking-widest uppercase rounded-xs">
                  {item.yearOrStep}
                </span>
              </div>

              {/* Node Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-[#333333] border-2 border-[#0C0C0C] group-hover:bg-white group-hover:scale-125 transition-all" />

              {/* Content Card */}
              <div className="bg-[#121212] border border-[#222222] p-6 hover:border-[#383838] transition-colors rounded-sm">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Closing Banner */}
        <div className="mt-16 bg-[#161616] border border-[#2A2A2A] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left rounded-sm">
          <div className="space-y-1">
            <h4 className="font-display text-base font-bold text-white">
              Quer fazer parte dessa história?
            </h4>
            <p className="text-xs sm:text-sm text-[#999999] font-light">
              Estamos prontos para registrar o próximo capítulo da sua família ou celebração.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('general', 'Olá! Gostei muito de conhecer a história da Live In Foco e gostaria de consultar um agendamento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#E5E5E5] px-5 py-3 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-md"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar com a Família Live In Foco</span>
          </a>
        </div>
      </div>
    </section>
  );
}

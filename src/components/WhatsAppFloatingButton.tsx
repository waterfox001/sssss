import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, COMPANY } from '../data/company';

export function WhatsAppFloatingButton() {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 bg-[#141414] text-white text-xs font-medium rounded-sm border border-[#2B2B2B] shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Falar com {COMPANY.name}
      </span>

      <a
        href={getWhatsAppUrl('general')}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA59] text-white rounded-full shadow-2xl transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] focus:ring-offset-[#0A0A0A]"
        aria-label="Abrir conversa no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Subtle Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10" />
      </a>
    </aside>
  );
}

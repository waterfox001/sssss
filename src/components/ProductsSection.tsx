import { getWhatsAppUrl } from '../data/company';
import { MessageCircle, Image, Package } from 'lucide-react';

interface ProductsSectionProps {
  onOpenQuoteModal?: () => void;
}

export function ProductsSection({ onOpenQuoteModal }: ProductsSectionProps) {
  return (
    <section id="albuns" className="py-20 sm:py-28 bg-[#0F0F0F] border-b border-[#1E1E1E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dedicated Albums Section with Clean Centered Layout (No Photo) */}
        <div className="bg-[#121212] border border-[#262626] p-8 sm:p-14 relative overflow-hidden rounded-sm text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8A8A8A]">
              <Package className="w-3.5 h-3.5 text-white" />
              <span>Acervo de Álbuns Fotográficos</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Álbuns artesanais em diversos modelos
            </h2>

            <p className="text-sm sm:text-base text-[#B0B0B0] font-light leading-relaxed">
              A Live In Foco oferece álbuns de diversos modelos e materiais para eternizar momentos com a nobreza que um livro físico de memórias merece. Os valores variam conforme dimensões, encadernação e número de lâminas.
            </p>

            {/* Placeholder Box for Future Real Album Photos */}
            <div className="p-5 bg-[#181818] border border-dashed border-[#383838] text-xs text-[#8A8A8A] flex items-start gap-3.5 text-left rounded-xs">
              <Image className="w-4 h-4 text-[#CCCCCC] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#CCCCCC] block font-medium mb-1">
                  Espaço reservado para inserção do catálogo fotográfico de modelos de álbuns:
                </strong>
                <span className="leading-relaxed">
                  Novas amostras de encadernações em linho, couro, estojo e acrílico serão atualizadas nesta galeria conforme a disponibilidade dos fornecedores parceiros.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl('products')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#E5E5E5] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar modelos e valores pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Alias export for backwards compatibility
export const AlbumsSection = ProductsSection;

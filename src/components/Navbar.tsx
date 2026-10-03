import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';
import { COMPANY, getWhatsAppUrl } from '../data/company';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#conceito' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Álbuns', href: '#albuns' },
    { label: 'História', href: '#historia' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Localização', href: '#localizacao' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#202020] shadow-xl py-3'
          : 'bg-gradient-to-b from-[#0A0A0A]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" className="group flex flex-col">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.16em] text-white transition-colors group-hover:text-[#E0E0E0]">
              LIVE IN FOCO
            </span>
            <span className="text-[9px] font-mono tracking-[0.25em] text-[#8A8A8A] uppercase -mt-0.5">
              Estúdio & Eventos · 1989
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium uppercase tracking-wider text-[#A0A0A0] hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="text-xs uppercase tracking-wider font-semibold text-[#CCCCCC] hover:text-white px-3.5 py-2 border border-[#2E2E2E] hover:border-[#555555] rounded-sm transition-colors cursor-pointer"
            >
              Simular Orçamento
            </button>

            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#EAEAEA] px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md group"
            >
              <MessageCircle className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 bg-white text-[#0A0A0A] rounded-sm"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#CCCCCC] hover:text-white border border-[#2A2A2A] rounded-sm"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0C0C0C] border-b border-[#242424] px-5 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider font-medium text-[#B0B0B0] hover:text-white py-1 border-b border-[#181818]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider text-white border border-[#333333] hover:border-white rounded-sm"
            >
              Simulador de Orçamento
            </button>
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-white text-[#0A0A0A] text-xs font-semibold uppercase tracking-wider rounded-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp ({COMPANY.phoneDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

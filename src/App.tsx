import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConceptSection } from './components/ConceptSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProductsSection } from './components/ProductsSection';
import { HistorySection } from './components/HistorySection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { QuoteSimulatorModal } from './components/QuoteSimulatorModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuoteModal = () => setIsQuoteModalOpen(true);
  const handleCloseQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-white selection:text-[#0A0A0A]">
      {/* Top Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Page Content */}
      <main>
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />
        <ConceptSection />
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />
        <PortfolioSection />
        <ProductsSection onOpenQuoteModal={handleOpenQuoteModal} />
        <HistorySection />
        <DifferentialsSection />
        <FaqSection />
        <LocationSection />
        <FinalCTASection onOpenQuoteModal={handleOpenQuoteModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Fast Contact Button */}
      <WhatsAppFloatingButton />

      {/* Interactive Budget Simulator Modal */}
      <QuoteSimulatorModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
      />
    </div>
  );
}

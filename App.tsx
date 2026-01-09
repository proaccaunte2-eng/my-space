
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pains from './components/Pains';
import Concept from './components/Concept';
import Author from './components/Author';
import Comparison from './components/Comparison';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero onCtaClick={openModal} />
        <Pains />
        <Concept />
        <Author />
        <Comparison />
        <Process />
        <Pricing onPriceClick={openModal} />
        <Reviews />
        <FAQ />
      </main>
      <Footer onLeadMagnetClick={openModal} />
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;

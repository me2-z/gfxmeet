'v'
'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AttentionSimulator from './components/AttentionSimulator';
import PortfolioGallery from './components/PortfolioGallery';
import Expertise from './components/Expertise';
import ProjectCalculator from './components/ProjectCalculator';
import Testimonials from './components/Testimonials';
import AboutStudio from './components/AboutStudio';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [initialContactMessage, setInitialContactMessage] = useState('');

  const handleOpenContact = () => {
    setInitialContactMessage('');
    setContactOpen(true);
  };

  const handleOpenContactWithDetails = (details: string) => {
    setInitialContactMessage(details);
    setContactOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      <Navbar onOpenContact={handleOpenContact} />
      <Hero onOpenContact={handleOpenContact} />
      <AttentionSimulator />
      <PortfolioGallery onOpenContact={handleOpenContact} />
      <Expertise onOpenContact={handleOpenContact} />
      <ProjectCalculator onOpenContactWithDetails={handleOpenContactWithDetails} />
      <Testimonials />
      <AboutStudio onOpenContact={handleOpenContact} />
      <Footer onOpenContact={handleOpenContact} />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        initialMessage={initialContactMessage}
      />
    </main>
  );
}

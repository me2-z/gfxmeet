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
import StudioSection from './components/StudioSection';
import AboutStudio from './components/AboutStudio';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import { SmoothScroll } from './components/SmoothScroll';

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [initialContactMessage, setInitialContactMessage] = useState('');
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleOpenContact = () => {
    setInitialContactMessage('');
    setContactOpen(true);
  };

  const handleOpenContactWithDetails = (details: string) => {
    setInitialContactMessage(details);
    setContactOpen(true);
  };

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#050505] text-[#F7F7F7] selection:bg-[#4B6FFF] selection:text-white">
        {/* Cinematic Preloader */}
        <Preloader onComplete={() => setLoadingComplete(true)} />

        {/* Custom Physics Cursor */}
        <CustomCursor />

        <Navbar onOpenContact={handleOpenContact} />
        <Hero onOpenContact={handleOpenContact} />
        <AttentionSimulator />
        <PortfolioGallery onOpenContact={handleOpenContact} />
        <Expertise onOpenContact={handleOpenContact} />
        <StudioSection onOpenContact={handleOpenContact} onOpenContactWithDetails={handleOpenContactWithDetails} />
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
    </SmoothScroll>
  );
}

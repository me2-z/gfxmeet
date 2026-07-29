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
import ClientPortalModal from './components/ClientPortalModal';
import AdminPanelModal from './components/AdminPanelModal';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import { SmoothScroll } from './components/SmoothScroll';
import { Lock, Shield } from 'lucide-react';

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
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

        {/* Floating Access Triggers (Client Portal & Studio OS Admin) */}
        <div className="fixed bottom-6 right-6 z-45 flex items-center gap-3">
          <button
            onClick={() => setAdminOpen(true)}
            className="px-4 py-2.5 bg-[#111111] border border-white/[0.08] hover:border-white/35 radius-card shadow-large flex items-center gap-2 text-xs font-mono text-[#F7F7F7] transition-all cursor-pointer group"
          >
            <Shield className="w-3.5 h-3.5 text-[#28C76F] group-hover:scale-110 transition-transform" />
            <span>Studio OS</span>
          </button>

          <button
            onClick={() => setPortalOpen(true)}
            className="px-4 py-2.5 bg-[#111111] border border-white/[0.08] hover:border-white/35 radius-card shadow-large flex items-center gap-2.5 text-xs font-mono text-[#F7F7F7] transition-all cursor-pointer group"
          >
            <Lock className="w-3.5 h-3.5 text-[#4B6FFF] group-hover:scale-110 transition-transform" />
            <span>Client Portal</span>
          </button>
        </div>

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

        <ClientPortalModal
          isOpen={portalOpen}
          onClose={() => setPortalOpen(false)}
        />

        <AdminPanelModal
          isOpen={adminOpen}
          onClose={() => setAdminOpen(false)}
        />
      </main>
    </SmoothScroll>
  );
}

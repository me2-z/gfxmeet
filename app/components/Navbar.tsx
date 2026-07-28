'v'
'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: { onOpenContact: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-9 h-9 bg-white text-black font-bold flex items-center justify-center rounded-none tracking-tighter text-base group-hover:bg-neutral-200 transition-colors">
            GF
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-widest text-white text-sm uppercase">GFXMEET</span>
            <span className="text-[10px] tracking-widest text-neutral-400 font-mono">V3 STUDIO</span>
          </div>
        </a>

        {/* Live Studio Status Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-neutral-900/80 border border-white/10 rounded-full text-xs text-neutral-300 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Accepting Q3 / Q4 Client Slots</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-neutral-300 font-light">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#simulator" className="hover:text-white transition-colors">Attention Engine</a>
          <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
          <a href="#estimator" className="hover:text-white transition-colors">Estimator</a>
          <a href="#about" className="hover:text-white transition-colors">Studio</a>
        </nav>

        {/* Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black text-xs font-medium tracking-widest uppercase rounded-none overflow-hidden transition-all duration-300 hover:bg-neutral-200 cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 px-6 py-8 flex flex-col gap-6 md:hidden shadow-2xl animate-in slide-in-from-top duration-300">
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-neutral-200 hover:text-white font-light tracking-wide"
          >
            Work
          </a>
          <a
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-neutral-200 hover:text-white font-light tracking-wide"
          >
            Attention Engine
          </a>
          <a
            href="#expertise"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-neutral-200 hover:text-white font-light tracking-wide"
          >
            Expertise
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-neutral-200 hover:text-white font-light tracking-wide"
          >
            Estimator
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-neutral-200 hover:text-white font-light tracking-wide"
          >
            Studio
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full py-3 bg-white text-black text-xs font-medium tracking-widest uppercase flex items-center justify-center gap-2 mt-2"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#050505] text-[#F7F7F7] border-t border-white/[0.08] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Callout Banner */}
        <div className="bg-[#0D0D0D] border border-white/[0.08] radius-card p-10 sm:p-16 mb-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-large">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-white/[0.08] radius-card text-xs font-mono text-[#9A9A9A] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#4B6FFF]" />
              <span>Let's Engineer Attention</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F7F7F7] max-w-xl">
              Ready to dominate your niche?
            </h2>
          </div>
          <button
            onClick={onOpenContact}
            className="px-8 py-4 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button flex items-center gap-3 hover:bg-[#3b5ae6] transition-colors cursor-pointer shrink-0 shadow-medium"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/[0.08]">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F7F7F7] text-[#050505] font-bold flex items-center justify-center text-sm radius-button">
                GF
              </div>
              <span className="font-semibold tracking-widest uppercase text-sm">GFXMEET V3</span>
            </div>
            <p className="text-xs text-[#9A9A9A] font-light leading-relaxed">
              Premier creative studio led by Meet Patel, specializing in YouTube packaging, gaming graphics, and visual storytelling that converts.
            </p>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-4">
              Navigation
            </div>
            <ul className="space-y-3 text-sm font-light text-[#9A9A9A]">
              <li><a href="#work" className="hover:text-[#F7F7F7] transition-colors">Curated Work</a></li>
              <li><a href="#simulator" className="hover:text-[#F7F7F7] transition-colors">Attention Engine</a></li>
              <li><a href="#expertise" className="hover:text-[#F7F7F7] transition-colors">Studio Disciplines</a></li>
              <li><a href="#estimator" className="hover:text-[#F7F7F7] transition-colors">Project Estimator</a></li>
              <li><a href="#about" className="hover:text-[#F7F7F7] transition-colors">About Meet Patel</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-4">
              Social & Network
            </div>
            <ul className="space-y-3 text-sm font-light text-[#9A9A9A]">
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#F7F7F7] transition-colors flex items-center gap-1.5"><span>YouTube</span><ArrowUpRight className="w-3 h-3 text-[#6B6B6B]" /></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#F7F7F7] transition-colors flex items-center gap-1.5"><span>X (Twitter)</span><ArrowUpRight className="w-3 h-3 text-[#6B6B6B]" /></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#F7F7F7] transition-colors flex items-center gap-1.5"><span>Instagram</span><ArrowUpRight className="w-3 h-3 text-[#6B6B6B]" /></a></li>
              <li><a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-[#F7F7F7] transition-colors flex items-center gap-1.5"><span>Discord</span><ArrowUpRight className="w-3 h-3 text-[#6B6B6B]" /></a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-4">
              Studio Time
            </div>
            <div className="p-4 bg-[#111111] border border-white/[0.08] radius-card font-mono text-xs space-y-2">
              <div className="text-[#6B6B6B]">GLOBAL OPERATIONS</div>
              <div className="text-[#F7F7F7] text-base font-bold">{time || '12:00:00 PM'}</div>
              <div className="text-[#28C76F] text-[10px]">● Operational & Accepting Slots</div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B6B6B] font-mono gap-4">
          <div>© {new Date().getFullYear()} GFXMEET Studio. All rights reserved. Designed by Meet Patel.</div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Client Portal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

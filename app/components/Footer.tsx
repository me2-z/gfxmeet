'v'
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
    <footer className="bg-[#050505] text-white border-t border-neutral-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Callout Banner */}
        <div className="bg-[#0c0c0c] border border-neutral-800/80 p-10 sm:p-16 mb-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Let's Engineer Attention</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white max-w-xl">
              Ready to dominate your niche?
            </h2>
          </div>
          <button
            onClick={onOpenContact}
            className="px-8 py-4 bg-white text-black text-xs font-medium tracking-widest uppercase flex items-center gap-3 hover:bg-neutral-200 transition-colors cursor-pointer shrink-0"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-neutral-900">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-black font-bold flex items-center justify-center text-sm">
                GF
              </div>
              <span className="font-semibold tracking-widest uppercase text-sm">GFXMEET V3</span>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Premier creative studio led by Meet Patel, specializing in YouTube packaging, gaming graphics, and visual storytelling that converts.
            </p>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              Navigation
            </div>
            <ul className="space-y-3 text-sm font-light text-neutral-300">
              <li><a href="#work" className="hover:text-white transition-colors">Curated Work</a></li>
              <li><a href="#simulator" className="hover:text-white transition-colors">Attention Engine</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Studio Disciplines</a></li>
              <li><a href="#estimator" className="hover:text-white transition-colors">Project Estimator</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Meet Patel</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              Social & Network
            </div>
            <ul className="space-y-3 text-sm font-light text-neutral-300">
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5"><span>YouTube</span><ArrowUpRight className="w-3 h-3 text-neutral-500" /></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5"><span>X (Twitter)</span><ArrowUpRight className="w-3 h-3 text-neutral-500" /></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5"><span>Instagram</span><ArrowUpRight className="w-3 h-3 text-neutral-500" /></a></li>
              <li><a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5"><span>Discord</span><ArrowUpRight className="w-3 h-3 text-neutral-500" /></a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              Studio Time
            </div>
            <div className="p-4 bg-neutral-950 border border-neutral-900 font-mono text-xs space-y-2">
              <div className="text-neutral-500">GLOBAL OPERATIONS</div>
              <div className="text-white text-base font-bold">{time || '12:00:00 PM'}</div>
              <div className="text-emerald-400 text-[10px]">● Operational & Accepting Slots</div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono gap-4">
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

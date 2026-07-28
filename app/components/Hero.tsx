'use client';

import { ArrowUpRight, Sparkles, TrendingUp } from 'lucide-react';
import { STUDIO_STATS } from '../data';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-36 pb-24 flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-[#F7F7F7]">
      {/* Architectural Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-[#4B6FFF]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full z-10 flex flex-col items-center text-center">
        
        {/* Studio Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#111111] border border-white/[0.08] radius-card mb-8 shadow-small">
          <span className="flex h-2 w-2 rounded-full bg-[#4B6FFF] animate-ping" />
          <span className="text-xs uppercase tracking-widest text-[#9A9A9A] font-mono">
            Led by Meet Patel • Creative Director & Visual Architect
          </span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#F7F7F7] max-w-5xl leading-[1.08] mb-8">
          We don't just make beautiful thumbnails.{' '}
          <span className="block font-normal mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#F7F7F7] via-[#9A9A9A] to-[#6B6B6B]">
            We engineer attention.
          </span>
        </h1>

        {/* Subtitle / Philosophy */}
        <p className="text-base sm:text-lg md:text-xl text-[#9A9A9A] font-light max-w-2xl leading-relaxed mb-12">
          An elite creative studio specializing in YouTube packaging, gaming graphics, and visual storytelling that transforms click-through rates and builds iconic creator brands.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-24">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#3b5ae6] group cursor-pointer shadow-medium"
          >
            <span>Secure Studio Slot</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          
          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-4 bg-[#111111] border border-white/[0.08] text-[#F7F7F7] text-xs font-medium tracking-widest uppercase radius-button flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#171717]"
          >
            <span>Explore Curated Work</span>
          </a>
        </div>

        {/* Live Metrics Bar */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/[0.08]">
          {STUDIO_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F7F7F7] tracking-tight mb-1 font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-[#9A9A9A] uppercase tracking-wider font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

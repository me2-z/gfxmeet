'use client';

import { Sparkles, ArrowUpRight } from 'lucide-react';

interface AboutStudioProps {
  onOpenContact: () => void;
}

export default function AboutStudio({ onOpenContact }: AboutStudioProps) {
  return (
    <section id="about" className="py-28 bg-[#050505] text-[#F7F7F7] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column (Text & Philosophy) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-white/[0.08] radius-card text-xs font-mono text-[#9A9A9A]">
              <Sparkles className="w-3.5 h-3.5 text-[#4B6FFF]" />
              <span>About GFXMEET V3</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F7F7F7] leading-tight">
              Obsessive about craft. Driven by metrics.
            </h2>

            <p className="text-[#9A9A9A] font-light text-base sm:text-lg leading-relaxed">
              Founded by <span className="text-[#F7F7F7] font-medium">Meet Patel</span>, GFXMEET was born out of a singular realization: most design agencies treat visual communication as mere decoration. We treat visual design as an aggressive growth engine.
            </p>

            <p className="text-[#9A9A9A] font-light text-sm sm:text-base leading-relaxed">
              Whether engineering a thumbnail that stops frantic YouTube homepage scrolling or architecting a multi-million-impression esports brand identity, every pixel is calibrated for maximum psychological impact and aesthetic timelessness.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 font-mono text-xs">
              <div className="p-4 bg-[#111111] border border-white/[0.08] radius-card">
                <span className="text-[#6B6B6B] block mb-1">FOUNDER</span>
                <span className="text-[#F7F7F7] font-medium text-sm">Meet Patel</span>
              </div>
              <div className="p-4 bg-[#111111] border border-white/[0.08] radius-card">
                <span className="text-[#6B6B6B] block mb-1">STANDARDS</span>
                <span className="text-[#F7F7F7] font-medium text-sm">Uncompromising</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button hover:bg-[#3b5ae6] transition-colors cursor-pointer shadow-small"
              >
                <span>Partner With Meet Patel</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column (Visual Studio Card) */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#111111] border border-white/[0.08] radius-card p-8 sm:p-10 shadow-large">
              <div className="absolute -top-3 -right-3 px-4 py-1 bg-[#4B6FFF] text-white font-mono text-[10px] uppercase font-bold tracking-widest radius-button">
                STUDIO ETHOS
              </div>

              <h3 className="text-xl font-light text-[#F7F7F7] mb-6">
                The 4 Pillars of GFXMEET
              </h3>

              <ul className="space-y-6 text-sm font-light text-[#9A9A9A]">
                <li className="flex items-start gap-3 pb-4 border-b border-white/[0.08]">
                  <span className="font-mono text-[#F7F7F7]">01.</span>
                  <div>
                    <strong className="text-[#F7F7F7] font-medium block mb-1">Psychological Anchoring</strong>
                    Guiding the human eye to key focal points within 200 milliseconds.
                  </div>
                </li>
                <li className="flex items-start gap-3 pb-4 border-b border-white/[0.08]">
                  <span className="font-mono text-[#F7F7F7]">02.</span>
                  <div>
                    <strong className="text-[#F7F7F7] font-medium block mb-1">Editorial Minimalism</strong>
                    Rejecting AI clutter in favor of clean, confident architectural typography.
                  </div>
                </li>
                <li className="flex items-start gap-3 pb-4 border-b border-white/[0.08]">
                  <span className="font-mono text-[#F7F7F7]">03.</span>
                  <div>
                    <strong className="text-[#F7F7F7] font-medium block mb-1">Uncompromising Velocity</strong>
                    Delivering assets that increase click-through rates by up to 200%.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[#F7F7F7]">04.</span>
                  <div>
                    <strong className="text-[#F7F7F7] font-medium block mb-1">Obsessive Quality</strong>
                    Every project personally overseen and engineered by Meet Patel.
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

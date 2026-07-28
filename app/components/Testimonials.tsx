'use client';

import { TESTIMONIALS } from '../data';
import { Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#0D0D0D] text-[#F7F7F7] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-white/[0.08] radius-card text-xs font-mono text-[#9A9A9A] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#4B6FFF]" />
              <span>Creator Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F7F7F7] max-w-2xl">
              Trusted by Top 1% Creators & Brands
            </h2>
          </div>
          <p className="text-[#9A9A9A] text-sm max-w-md font-light">
            Hear from industry-leading creators and tech founders whose channels and brands were transformed by GFXMEET visual systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#111111] border border-white/[0.08] radius-card p-8 flex flex-col justify-between relative shadow-medium"
            >
              <Quote className="w-10 h-10 text-[#6B6B6B] mb-6" />
              <p className="text-sm text-[#9A9A9A] font-light leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-white/[0.08]">
                <div className="text-[#F7F7F7] font-medium text-sm mb-0.5">{t.author}</div>
                <div className="text-xs text-[#9A9A9A] font-mono mb-1">{t.role}</div>
                <div className="text-xs text-[#28C76F] font-mono">{t.channel}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

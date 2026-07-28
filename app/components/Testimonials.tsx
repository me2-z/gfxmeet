'v'
'w'
'use client';

import { TESTIMONIALS } from '../data';
import { Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#070707] text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Creator Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white max-w-2xl">
              Trusted by Top 1% Creators & Brands
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light">
            Hear from industry-leading creators and tech founders whose channels and brands were transformed by GFXMEET visual systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#0e0e0e] border border-neutral-800/80 p-8 flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-neutral-700 mb-6" />
              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-neutral-900">
                <div className="text-white font-medium text-sm mb-0.5">{t.author}</div>
                <div className="text-xs text-neutral-400 font-mono mb-1">{t.role}</div>
                <div className="text-xs text-emerald-400 font-mono">{t.channel}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

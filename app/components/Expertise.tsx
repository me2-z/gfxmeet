'v'
'use client';

import { SERVICES } from '../data';
import { CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

interface ExpertiseProps {
  onOpenContact: () => void;
}

export default function Expertise({ onOpenContact }: ExpertiseProps) {
  return (
    <section id="expertise" className="py-28 bg-[#070707] text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Disciplines & Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white max-w-2xl">
              Crafting Visuals That Command Attention
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light">
            Every discipline at GFXMEET is grounded in direct psychological response, aesthetic minimalism, and uncompromising technical precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-[#0e0e0e] border border-neutral-800/80 p-8 sm:p-10 flex flex-col justify-between hover:border-white/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                    0{idx + 1} — DISCIPLINE
                  </span>
                  <span className="text-xs font-mono text-white px-3 py-1 bg-neutral-900 border border-neutral-800">
                    {service.startingPrice}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-sm font-mono text-neutral-400 mb-6">
                  {service.subtitle}
                </p>
                <p className="text-sm text-neutral-300 font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-3 mb-8 pt-6 border-t border-neutral-900">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                    Key Deliverables:
                  </div>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-neutral-300 font-light">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-900 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">
                  Timeline: {service.timeline}
                </span>
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white group-hover:text-neutral-300 cursor-pointer"
                >
                  <span>Book Slot</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

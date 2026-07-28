'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Zap } from 'lucide-react';

export default function AttentionSimulator() {
  const [viewMode, setViewMode] = useState<'engineered' | 'raw'>('engineered');

  return (
    <section id="simulator" className="py-28 bg-[#0D0D0D] text-[#F7F7F7] border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-white/[0.08] radius-card text-xs font-mono text-[#9A9A9A] mb-4">
              <Zap className="w-3.5 h-3.5 text-[#4B6FFF]" />
              <span>Interactive Psychology Engine</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F7F7F7] max-w-2xl">
              The Science Behind a 16%+ Click-Through Rate
            </h2>
          </div>
          <p className="text-[#9A9A9A] text-sm max-w-md font-light">
            Toggle between an unoptimized raw thumbnail and a GFXMEET engineered asset to examine visual hierarchy, cognitive load, and focal contrast.
          </p>
        </div>

        {/* Interactive Comparison Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#111111] border border-white/[0.08] p-8 md:p-12 radius-dialog shadow-large">
          
          {/* Visual Preview Area (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono uppercase tracking-widest text-[#9A9A9A]">
                Live Preview Simulator
              </div>
              
              {/* Toggle Switch */}
              <div className="inline-flex bg-[#171717] p-1 radius-button border border-white/[0.08]">
                <button
                  onClick={() => setViewMode('raw')}
                  className={`px-4 py-1.5 text-xs font-mono tracking-wider transition-all radius-button cursor-pointer ${
                    viewMode === 'raw'
                      ? 'bg-[#111111] text-[#F7F7F7] font-medium shadow-small'
                      : 'text-[#9A9A9A] hover:text-[#F7F7F7]'
                  }`}
                >
                  Raw / Amateur
                </button>
                <button
                  onClick={() => setViewMode('engineered')}
                  className={`px-4 py-1.5 text-xs font-mono tracking-wider transition-all radius-button cursor-pointer ${
                    viewMode === 'engineered'
                      ? 'bg-[#4B6FFF] text-white font-medium shadow-small'
                      : 'text-[#9A9A9A] hover:text-[#F7F7F7]'
                  }`}
                >
                  GFXMEET Engineered
                </button>
              </div>
            </div>

            {/* Thumbnail Canvas Box */}
            <div className="relative aspect-video w-full overflow-hidden border border-white/[0.08] radius-image bg-[#050505] flex items-center justify-center group">
              {viewMode === 'engineered' ? (
                <div className="relative w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
                    alt="Engineered Thumbnail"
                    className="w-full h-full object-cover filter contrast-125 saturate-110"
                  />
                  {/* Psychological Focal Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 bg-[#4B6FFF] text-white font-mono text-[10px] uppercase font-bold tracking-widest radius-button">
                        High Contrast Anchor
                      </span>
                      <span className="px-2.5 py-0.5 bg-[#28C76F] text-black font-mono text-[10px] uppercase font-bold tracking-widest radius-button">
                        16.8% CTR
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#F7F7F7] tracking-tight">
                      SURVIVING 100 DAYS IN DEADLY WATERS
                    </h3>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
                    alt="Raw Thumbnail"
                    className="w-full h-full object-cover filter blur-[1px] opacity-60 grayscale"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 bg-[#FF5A5F]/80 text-white font-mono text-[10px] uppercase font-bold tracking-widest radius-button">
                        Low Contrast / Cluttered
                      </span>
                      <span className="px-2.5 py-0.5 bg-[#171717] text-[#9A9A9A] font-mono text-[10px] uppercase font-bold tracking-widest radius-button">
                        3.2% CTR
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-[#9A9A9A] tracking-tight">
                      my gameplay video part 4 final walkthru
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Analysis Metrics & Breakdown (Right 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            <h3 className="text-xl font-light text-[#F7F7F7] tracking-tight">
              {viewMode === 'engineered'
                ? 'Engineered for Maximum Cognitive Capture'
                : 'Typical Unoptimized Creator Asset'}
            </h3>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 bg-[#050505] border border-white/[0.08] radius-card flex items-center justify-between">
                <span className="text-[#9A9A9A]">Predicted Click-Through Rate:</span>
                <span className={`text-base font-bold ${viewMode === 'engineered' ? 'text-[#28C76F]' : 'text-[#FF5A5F]'}`}>
                  {viewMode === 'engineered' ? '16.8% (Elite)' : '3.2% (Sub-par)'}
                </span>
              </div>

              <div className="p-4 bg-[#050505] border border-white/[0.08] radius-card flex items-center justify-between">
                <span className="text-[#9A9A9A]">Visual Hierarchy Score:</span>
                <span className="text-[#F7F7F7] font-bold">
                  {viewMode === 'engineered' ? '98 / 100' : '41 / 100'}
                </span>
              </div>

              <div className="p-4 bg-[#050505] border border-white/[0.08] radius-card flex items-center justify-between">
                <span className="text-[#9A9A9A]">Mobile Legibility Index:</span>
                <span className="text-[#F7F7F7] font-bold">
                  {viewMode === 'engineered' ? 'Instant (< 0.2s)' : 'Poor (> 1.5s)'}
                </span>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-[#9A9A9A] font-light mt-2">
              {viewMode === 'engineered' ? (
                <>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#28C76F] shrink-0 mt-0.5" />
                    <span>Calculated luminance contrast separating subject from background.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#28C76F] shrink-0 mt-0.5" />
                    <span>Intentional curiosity gap triggering immediate viewer inquiry.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#28C76F] shrink-0 mt-0.5" />
                    <span>Optimized for thumbnail scaling down to 120px mobile displays.</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#FF5A5F] shrink-0 mt-0.5" />
                    <span>Low color contrast causes the subject to vanish on mobile feeds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#FF5A5F] shrink-0 mt-0.5" />
                    <span>Too many competing focal points create cognitive fatigue.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#FF5A5F] shrink-0 mt-0.5" />
                    <span>Generic title phrasing fails to communicate value proposition.</span>
                  </li>
                </>
              )}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

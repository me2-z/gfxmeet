'use client';

import { useState } from 'react';
import { Eye, CheckCircle2, AlertCircle, BarChart3, ShieldCheck, Zap } from 'lucide-react';

export default function AttentionSimulator() {
  const [viewMode, setViewMode] = useState<'engineered' | 'raw'>('engineered');

  return (
    <section id="simulator" className="py-28 bg-[#070707] text-white border-y border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 mb-4">
              <Zap className="w-3.5 h-3.5 text-white" />
              <span>Interactive Psychology Engine</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white max-w-2xl">
              The Science Behind a 16%+ Click-Through Rate
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light">
            Toggle between an unoptimized raw thumbnail and a GFXMEET engineered asset to examine visual hierarchy, cognitive load, and focal contrast.
          </p>
        </div>

        {/* Interactive Comparison Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#0e0e0e] border border-neutral-800/80 p-8 md:p-12 shadow-2xl">
          
          {/* Visual Preview Area (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Live Preview Simulator
              </div>
              
              {/* Toggle Switch */}
              <div className="inline-flex bg-neutral-900 p-1 border border-neutral-800">
                <button
                  onClick={() => setViewMode('raw')}
                  className={`px-4 py-1.5 text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    viewMode === 'raw'
                      ? 'bg-neutral-800 text-white font-medium shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Raw / Amateur
                </button>
                <button
                  onClick={() => setViewMode('engineered')}
                  className={`px-4 py-1.5 text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    viewMode === 'engineered'
                      ? 'bg-white text-black font-medium shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  GFXMEET Engineered
                </button>
              </div>
            </div>

            {/* Thumbnail Canvas Box */}
            <div className="relative aspect-video w-full overflow-hidden border border-neutral-800 bg-neutral-950 flex items-center justify-center group">
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
                      <span className="px-2.5 py-0.5 bg-white text-black font-mono text-[10px] uppercase font-bold tracking-widest">
                        High Contrast Anchor
                      </span>
                      <span className="px-2.5 py-0.5 bg-emerald-500 text-black font-mono text-[10px] uppercase font-bold tracking-widest">
                        16.8% CTR
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
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
                      <span className="px-2.5 py-0.5 bg-red-500/80 text-white font-mono text-[10px] uppercase font-bold tracking-widest">
                        Low Contrast / Cluttered
                      </span>
                      <span className="px-2.5 py-0.5 bg-neutral-800 text-neutral-400 font-mono text-[10px] uppercase font-bold tracking-widest">
                        3.2% CTR
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-neutral-400 tracking-tight">
                      my gameplay video part 4 final walkthru
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Analysis Metrics & Breakdown (Right 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            <h3 className="text-xl font-light text-white tracking-tight">
              {viewMode === 'engineered'
                ? 'Engineered for Maximum Cognitive Capture'
                : 'Typical Unoptimized Creator Asset'}
            </h3>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 bg-neutral-950 border border-neutral-800/80 flex items-center justify-between">
                <span className="text-neutral-400">Predicted Click-Through Rate:</span>
                <span className={`text-base font-bold ${viewMode === 'engineered' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {viewMode === 'engineered' ? '16.8% (Elite)' : '3.2% (Sub-par)'}
                </span>
              </div>

              <div className="p-4 bg-neutral-950 border border-neutral-800/80 flex items-center justify-between">
                <span className="text-neutral-400">Visual Hierarchy Score:</span>
                <span className="text-white font-bold">
                  {viewMode === 'engineered' ? '98 / 100' : '41 / 100'}
                </span>
              </div>

              <div className="p-4 bg-neutral-950 border border-neutral-800/80 flex items-center justify-between">
                <span className="text-neutral-400">Mobile Legibility Index:</span>
                <span className="text-white font-bold">
                  {viewMode === 'engineered' ? 'Instant (< 0.2s)' : 'Poor (> 1.5s)'}
                </span>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-neutral-300 font-light mt-2">
              {viewMode === 'engineered' ? (
                <>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Calculated luminance contrast separating subject from background.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Intentional curiosity gap triggering immediate viewer inquiry.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Optimized for thumbnail scaling down to 120px mobile displays.</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>Low color contrast causes the subject to vanish on mobile feeds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>Too many competing focal points create cognitive fatigue.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
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

'v'
'use client';

import { useState } from 'react';
import { Calculator, ArrowUpRight, Check, Sparkles } from 'lucide-react';

interface ProjectCalculatorProps {
  onOpenContactWithDetails: (details: string) => void;
}

export default function ProjectCalculator({ onOpenContactWithDetails }: ProjectCalculatorProps) {
  const [serviceType, setServiceType] = useState<'thumbnail' | 'esports' | 'brand' | 'motion'>('thumbnail');
  const [tier, setTier] = useState<'standard' | 'pro' | 'enterprise'>('pro');
  const [speed, setSpeed] = useState<'normal' | 'rush'>('normal');

  // Calculation logic
  const basePrices = {
    thumbnail: { standard: 450, pro: 1200, enterprise: 3500 },
    esports: { standard: 2500, pro: 5500, enterprise: 12000 },
    brand: { standard: 4000, pro: 8500, enterprise: 18000 },
    motion: { standard: 1800, pro: 4200, enterprise: 9500 },
  };

  const serviceNames = {
    thumbnail: 'YouTube Thumbnail Retainer & Packaging',
    esports: 'Gaming & Esports Broadcast Package',
    brand: 'Creator & Brand Identity System',
    motion: 'Motion Graphics & Keyart Posters',
  };

  const tierNames = {
    standard: 'Single Sprint / Starter',
    pro: 'Full Professional Suite',
    enterprise: 'Global Creator Flagship',
  };

  const baseAmount = basePrices[serviceType][tier];
  const finalAmount = speed === 'rush' ? Math.round(baseAmount * 1.3) : baseAmount;

  const handleInquire = () => {
    const summary = `Project Inquiry from Estimator:\n• Service: ${serviceNames[serviceType]}\n• Tier: ${tierNames[tier]}\n• Speed: ${speed === 'rush' ? 'Rush (48hr)' : 'Standard Studio Timeline'}\n• Estimated Investment: $${finalAmount.toLocaleString()}`;
    onOpenContactWithDetails(summary);
  };

  return (
    <section id="estimator" className="py-28 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 mb-4">
              <Calculator className="w-3.5 h-3.5 text-white" />
              <span>Interactive Scope Estimator</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white max-w-2xl">
              Calculate Your Studio Investment
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light">
            Configure your project parameters below to instantly estimate investment timelines and secure your priority slot.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#0e0e0e] border border-neutral-800/80 p-8 md:p-12 shadow-2xl">
          
          {/* Controls (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* 1. Select Service */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                01. Select Studio Discipline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'thumbnail', label: 'YouTube Thumbnails & Packaging' },
                  { id: 'esports', label: 'Gaming & Esports Kit' },
                  { id: 'brand', label: 'Brand Identity Architecture' },
                  { id: 'motion', label: 'Motion Graphics & Posters' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setServiceType(item.id as any)}
                    className={`p-4 text-left font-mono text-xs border transition-all cursor-pointer flex items-center justify-between ${
                      serviceType === item.id
                        ? 'bg-white text-black font-medium border-white'
                        : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <span>{item.label}</span>
                    {serviceType === item.id && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Select Tier */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                02. Select Scope Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: 'Starter Sprint' },
                  { id: 'pro', label: 'Professional Suite' },
                  { id: 'enterprise', label: 'Enterprise Flagship' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTier(item.id as any)}
                    className={`p-4 text-left font-mono text-xs border transition-all cursor-pointer flex flex-col justify-between h-24 ${
                      tier === item.id
                        ? 'bg-white text-black font-medium border-white'
                        : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] opacity-80">
                      {item.id === 'standard' ? 'Single / Fast' : item.id === 'pro' ? 'Most Popular' : 'Full Ecosystem'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Turnaround Speed */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                03. Turnaround Priority
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'normal', label: 'Standard Studio Schedule' },
                  { id: 'rush', label: 'Priority / Rush (+30%)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSpeed(item.id as any)}
                    className={`p-4 text-left font-mono text-xs border transition-all cursor-pointer flex items-center justify-between ${
                      speed === item.id
                        ? 'bg-white text-black font-medium border-white'
                        : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <span>{item.label}</span>
                    {speed === item.id && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Estimate Summary Box (Right 5 cols) */}
          <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  Estimated Investment
                </span>
                <span className="text-xs font-mono text-emerald-400">Verified Quote</span>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-light text-white font-mono tracking-tight mb-2">
                  ${finalAmount.toLocaleString()}
                </div>
                <p className="text-xs font-mono text-neutral-400">
                  USD • All source files & commercial rights included
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Service:</span>
                  <span className="text-right">{serviceNames[serviceType]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Tier:</span>
                  <span className="text-right">{tierNames[tier]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Timeline:</span>
                  <span className="text-right">{speed === 'rush' ? 'Priority 48hr Sprint' : 'Standard 1-2 Weeks'}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-neutral-900">
              <button
                onClick={handleInquire}
                className="w-full py-4 bg-white text-black text-xs font-medium tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                <span>Secure Slot With This Scope</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-neutral-500 font-mono mt-3">
                No upfront payment required to submit inquiry.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

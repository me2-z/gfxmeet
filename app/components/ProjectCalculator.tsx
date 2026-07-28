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
    <section id="estimator" className="py-28 bg-[#050505] text-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-white/[0.08] radius-card text-xs font-mono text-[#9A9A9A] mb-4">
              <Calculator className="w-3.5 h-3.5 text-[#4B6FFF]" />
              <span>Interactive Scope Estimator</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F7F7F7] max-w-2xl">
              Calculate Your Studio Investment
            </h2>
          </div>
          <p className="text-[#9A9A9A] text-sm max-w-md font-light">
            Configure your project parameters below to instantly estimate investment timelines and secure your priority slot.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#111111] border border-white/[0.08] p-8 md:p-12 radius-dialog shadow-large">
          
          {/* Controls (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* 1. Select Service */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-4">
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
                    className={`p-4 text-left font-mono text-xs border radius-button transition-all cursor-pointer flex items-center justify-between ${
                      serviceType === item.id
                        ? 'bg-[#4B6FFF] text-white font-medium border-[#4B6FFF] shadow-small'
                        : 'bg-[#171717] text-[#9A9A9A] border-white/[0.08] hover:border-white/20 hover:text-[#F7F7F7]'
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
              <label className="block text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-4">
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
                    className={`p-4 text-left font-mono text-xs border radius-button transition-all cursor-pointer flex flex-col justify-between h-24 ${
                      tier === item.id
                        ? 'bg-[#4B6FFF] text-white font-medium border-[#4B6FFF] shadow-small'
                        : 'bg-[#171717] text-[#9A9A9A] border-white/[0.08] hover:border-white/20 hover:text-[#F7F7F7]'
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
              <label className="block text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-4">
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
                    className={`p-4 text-left font-mono text-xs border radius-button transition-all cursor-pointer flex items-center justify-between ${
                      speed === item.id
                        ? 'bg-[#4B6FFF] text-white font-medium border-[#4B6FFF] shadow-small'
                        : 'bg-[#171717] text-[#9A9A9A] border-white/[0.08] hover:border-white/20 hover:text-[#F7F7F7]'
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
          <div className="lg:col-span-5 bg-[#050505] border border-white/[0.08] radius-card p-8 flex flex-col justify-between shadow-medium">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9A9A9A]">
                  Estimated Investment
                </span>
                <span className="text-xs font-mono text-[#28C76F]">Verified Quote</span>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-light text-[#F7F7F7] font-mono tracking-tight mb-2">
                  ${finalAmount.toLocaleString()}
                </div>
                <p className="text-xs font-mono text-[#9A9A9A]">
                  USD • All source files & commercial rights included
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/[0.08] text-xs font-mono text-[#9A9A9A]">
                <div className="flex justify-between">
                  <span className="text-[#6B6B6B]">Service:</span>
                  <span className="text-right text-[#F7F7F7]">{serviceNames[serviceType]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B6B]">Tier:</span>
                  <span className="text-right text-[#F7F7F7]">{tierNames[tier]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B6B]">Timeline:</span>
                  <span className="text-right text-[#F7F7F7]">{speed === 'rush' ? 'Priority 48hr Sprint' : 'Standard 1-2 Weeks'}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/[0.08]">
              <button
                onClick={handleInquire}
                className="w-full py-4 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button flex items-center justify-center gap-2 hover:bg-[#3b5ae6] transition-colors cursor-pointer shadow-small"
              >
                <span>Secure Slot With This Scope</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-[#6B6B6B] font-mono mt-3">
                No upfront payment required to submit inquiry.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

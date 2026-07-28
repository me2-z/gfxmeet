'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Monitor, Sliders, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<'layers' | 'color' | 'typography'>('layers');

  return (
    <section className="relative min-h-screen pt-36 pb-24 flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-[#F7F7F7]">
      {/* Architectural Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-[#4B6FFF]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Editorial Typography & CTAs (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#111111] border border-white/[0.08] radius-card mb-8 shadow-small">
              <span className="flex h-2 w-2 rounded-full bg-[#4B6FFF] animate-ping" />
              <span className="text-xs uppercase tracking-widest text-[#9A9A9A] font-mono">
                Led by Meet Patel • Creative Director & Visual Architect
              </span>
            </div>

            {/* Main Hero Headline matching Part 3 prompt spec */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#F7F7F7] leading-[1.08] mb-8">
              WE DESIGN <br />
              <span className="font-normal text-[#4B6FFF]">THUMBNAILS</span> <br />
              THAT PEOPLE <br />
              CAN'T IGNORE.
            </h1>

            {/* Subheading matching Part 3 prompt spec */}
            <p className="text-base sm:text-lg text-[#9A9A9A] font-light max-w-xl leading-relaxed mb-12">
              Helping creators, brands, and businesses grow with strategic thumbnail design, branding, and visual storytelling that converts attention into engagement.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-4 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#3b5ae6] group cursor-pointer shadow-medium"
              >
                <span>Book a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              
              <a
                href="#work"
                className="w-full sm:w-auto px-8 py-4 bg-[#111111] border border-white/[0.08] text-[#F7F7F7] text-xs font-medium tracking-widest uppercase radius-button flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#171717]"
              >
                <span>View Portfolio</span>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Interactive Creative Studio Workspace (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative bg-[#111111] border border-white/[0.08] radius-dialog p-6 shadow-large overflow-hidden">
              
              {/* Studio Desk Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#9A9A9A]">
                  <Monitor className="w-4 h-4 text-[#4B6FFF]" />
                  <span>GFXMEET_STUDIO_WORKSPACE.PSD</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A5F]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFB547]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C76F]/80" />
                </div>
              </div>

              {/* Monitor Mockup Area */}
              <div className="relative aspect-video w-full overflow-hidden radius-image bg-[#050505] border border-white/[0.08] mb-4">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
                  alt="Studio Workflow"
                  className="w-full h-full object-cover filter contrast-125 saturate-110"
                />
                
                {/* Simulated Photoshop UI Overlays */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-md text-white font-mono text-[10px] border border-white/[0.08] radius-button">
                  {activeWorkflowTab === 'layers' && 'Layer 04: Subject Mask (Hard Light)'}
                  {activeWorkflowTab === 'color' && 'Adjustment: Curves & Luminance Boost'}
                  {activeWorkflowTab === 'typography' && 'Font: Custom Bold Condensed (Scale 104%)'}
                </div>

                <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-[#4B6FFF] text-white font-mono text-[10px] uppercase font-bold radius-button shadow-small">
                  16.8% CTR Target
                </div>
              </div>

              {/* Interactive Workflow Tabs */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setActiveWorkflowTab('layers')}
                  className={`p-2.5 text-left font-mono text-[11px] radius-button border transition-all cursor-pointer ${
                    activeWorkflowTab === 'layers'
                      ? 'bg-[#4B6FFF] text-white border-[#4B6FFF]'
                      : 'bg-[#171717] text-[#9A9A9A] border-white/[0.08] hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 mb-1" />
                  <span>Layers & Mask</span>
                </button>
                <button
                  onClick={() => setActiveWorkflowTab('color')}
                  className={`p-2.5 text-left font-mono text-[11px] radius-button border transition-all cursor-pointer ${
                    activeWorkflowTab === 'color'
                      ? 'bg-[#4B6FFF] text-white border-[#4B6FFF]'
                      : 'bg-[#171717] text-[#9A9A9A] border-white/[0.08] hover:text-white'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5 mb-1" />
                  <span>Color Grading</span>
                </button>
                <button
                  onClick={() => setActiveWorkflowTab('typography')}
                  className={`p-2.5 text-left font-mono text-[11px] radius-button border transition-all cursor-pointer ${
                    activeWorkflowTab === 'typography'
                      ? 'bg-[#4B6FFF] text-white border-[#4B6FFF]'
                      : 'bg-[#171717] text-[#9A9A9A] border-white/[0.08] hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5 mb-1" />
                  <span>Typography</span>
                </button>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Monitor, Sliders } from 'lucide-react';
import { StudioDeskScene } from './StudioDeskScene';

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
          
          {/* Left Side: Editorial Typography & CTAs (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
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

          {/* Right Side: Three.js Interactive Studio Desk Workspace (6 Cols) conforming to Part 7 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center"
          >
            <div className="w-full bg-[#111111] border border-white/[0.08] radius-dialog p-4 shadow-large overflow-hidden">
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/[0.08] mb-2 font-mono text-xs text-[#9A9A9A]">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-[#4B6FFF]" />
                  <span>GFXMEET_V3_STUDIO_WORKSPACE.3D</span>
                </div>
                <span className="text-[10px] text-[#28C76F]">● Live 60 FPS</span>
              </div>

              {/* Three.js Canvas Scene */}
              <StudioDeskScene />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

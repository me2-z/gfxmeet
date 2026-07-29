'use client';

import { useState } from 'react';
import { X, ArrowUpRight, TrendingUp, Eye, Clock, Cpu, Share2, Layers } from 'lucide-react';
import { Project } from '../data';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function CaseStudyModal({ project, onClose, onOpenContact }: CaseStudyModalProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'process' | 'photoshop'>('overview');

  if (!project) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-[#0D0D0D] border border-white/[0.08] text-[#F7F7F7] radius-dialog shadow-large my-8 overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-[#4B6FFF] text-white font-mono text-[11px] uppercase font-bold tracking-widest radius-button">
              {project.category}
            </span>
            <span className="text-[#9A9A9A] font-mono text-xs">{project.client}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                try {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Case study link copied to clipboard.');
                } catch (e) {}
              }}
              className="p-2 text-[#9A9A9A] hover:text-[#F7F7F7] transition-colors bg-[#111111] border border-white/[0.08] radius-button"
              title="Share Preview"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#9A9A9A] hover:text-[#F7F7F7] transition-colors bg-[#111111] border border-white/[0.08] radius-button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex px-6 sm:px-8 bg-[#111111] border-b border-white/[0.08] gap-6 font-mono text-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#4B6FFF] text-[#F7F7F7] font-medium'
                : 'border-transparent text-[#9A9A9A] hover:text-[#F7F7F7]'
            }`}
          >
            Overview & Before/After
          </button>
          <button
            onClick={() => setActiveTab('process')}
            className={`py-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'process'
                ? 'border-[#4B6FFF] text-[#F7F7F7] font-medium'
                : 'border-transparent text-[#9A9A9A] hover:text-[#F7F7F7]'
            }`}
          >
            Creative Process Timeline
          </button>
          <button
            onClick={() => setActiveTab('photoshop')}
            className={`py-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'photoshop'
                ? 'border-[#4B6FFF] text-[#F7F7F7] font-medium'
                : 'border-transparent text-[#9A9A9A] hover:text-[#F7F7F7]'
            }`}
          >
            Photoshop Layer Breakdown
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-8">
          
          {activeTab === 'overview' && (
            <>
              {/* Title & Stats */}
              <div>
                <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#F7F7F7] mb-4">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-4 font-mono text-xs">
                  <div className="px-4 py-2 bg-[#111111] border border-white/[0.08] text-[#28C76F] flex items-center gap-2 radius-card">
                    <TrendingUp className="w-4 h-4" />
                    <span>Performance: {project.views}</span>
                  </div>
                  <div className="px-4 py-2 bg-[#111111] border border-white/[0.08] text-[#F7F7F7] flex items-center gap-2 radius-card">
                    <Eye className="w-4 h-4" />
                    <span>Benchmark: {project.ctr}</span>
                  </div>
                  <div className="px-4 py-2 bg-[#111111] border border-white/[0.08] text-[#9A9A9A] flex items-center gap-2 radius-card">
                    <Clock className="w-4 h-4" />
                    <span>Time: {project.creationTime}</span>
                  </div>
                </div>
              </div>

              {/* Before / After Interactive Slider Showcase */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#9A9A9A]">
                  <span>Interactive Before (Raw) / After (Engineered) Comparison</span>
                  <span className="text-[#4B6FFF]">Drag slider to inspect</span>
                </div>
                
                <div
                  className="relative aspect-video w-full overflow-hidden border border-white/[0.08] radius-image bg-[#050505] select-none cursor-ew-resize"
                  onMouseMove={handleMouseMove}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                  onTouchMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const touch = e.touches[0];
                    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
                    setSliderPosition((x / rect.width) * 100);
                  }}
                >
                  <img
                    src={project.image}
                    alt="Engineered"
                    className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-110 pointer-events-none"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-md text-[#28C76F] font-mono text-xs border border-white/[0.08] radius-card">
                    Engineered ({project.ctr})
                  </div>

                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={project.rawImage}
                      alt="Raw"
                      className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-75 max-w-none"
                      style={{ width: '100%', height: '100%' }}
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md text-[#9A9A9A] font-mono text-xs border border-white/[0.08] radius-card">
                      Raw / Unoptimized
                    </div>
                  </div>

                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-[#4B6FFF] shadow-large pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-[#4B6FFF] text-white flex items-center justify-center radius-button font-mono text-xs font-bold shadow-medium">
                      ↔
                    </div>
                  </div>
                </div>
              </div>

              {/* Color Palette & Fonts Used */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-[#111111] border border-white/[0.08] radius-card">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-3">
                    Color Palette
                  </div>
                  <div className="flex items-center gap-3">
                    {project.colorPalette?.map((color, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1.5">
                        <div className="w-10 h-10 radius-button border border-white/[0.08]" style={{ backgroundColor: color }} />
                        <span className="text-[10px] font-mono text-[#9A9A9A]">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-[#111111] border border-white/[0.08] radius-card">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-3">
                    Typography & Fonts
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.fontsUsed?.map((font, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-[#171717] text-[#F7F7F7] font-mono text-xs border border-white/[0.08] radius-button">
                        {font}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Strategy Breakdown Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-6 bg-[#111111] border border-white/[0.08] radius-card">
                  <h3 className="text-xs uppercase font-mono tracking-widest text-[#9A9A9A] mb-3">
                    The Challenge
                  </h3>
                  <p className="text-sm text-[#9A9A9A] font-light leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 bg-[#111111] border border-white/[0.08] radius-card">
                  <h3 className="text-xs uppercase font-mono tracking-widest text-[#9A9A9A] mb-3">
                    Design Strategy
                  </h3>
                  <p className="text-sm text-[#9A9A9A] font-light leading-relaxed">
                    {project.strategy}
                  </p>
                </div>

                <div className="p-6 bg-[#111111] border border-white/[0.08] radius-card">
                  <h3 className="text-xs uppercase font-mono tracking-widest text-[#28C76F] mb-3">
                    The Result
                  </h3>
                  <p className="text-sm text-[#F7F7F7] font-light leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'process' && (
            <div className="space-y-6 py-4">
              <h3 className="text-xl font-light text-[#F7F7F7] mb-6">
                Creative Process Timeline
              </h3>
              <div className="space-y-6 border-l border-white/[0.08] pl-6 ml-2">
                {project.processSteps?.map((step, idx) => (
                  <div key={idx} className="relative space-y-2">
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#4B6FFF] border-4 border-[#0D0D0D]" />
                    <div className="text-xs font-mono text-[#4B6FFF]">STEP 0{idx + 1}</div>
                    <h4 className="text-base font-medium text-[#F7F7F7]">{step.step}</h4>
                    <p className="text-sm text-[#9A9A9A] font-light">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'photoshop' && (
            <div className="space-y-6 py-4">
              <h3 className="text-xl font-light text-[#F7F7F7] mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#4B6FFF]" />
                <span>Photoshop Layer Stack Architecture</span>
              </h3>
              <div className="space-y-3 font-mono text-xs">
                {project.photoshopBreakdown?.map((layer, idx) => (
                  <div key={idx} className="p-4 bg-[#111111] border border-white/[0.08] radius-card flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[#6B6B6B]">#{idx + 1}</span>
                      <span className="text-[#F7F7F7] font-medium">{layer.layer}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="px-2 py-0.5 bg-[#171717] text-[#4B6FFF] radius-button border border-white/[0.08]">{layer.type}</span>
                      <span className="text-[#9A9A9A]">{layer.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[#9A9A9A] font-light">
              Ready to achieve similar metrics for your channel or brand?
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase flex items-center gap-2 hover:bg-[#3b5ae6] transition-colors radius-button cursor-pointer shadow-medium"
            >
              <span>Inquire About Similar Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

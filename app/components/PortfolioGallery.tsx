'use client';

import { useState } from 'react';
import { PROJECTS, Project } from '../data';
import { ArrowUpRight, Sparkles, TrendingUp, Eye, Clock, Cpu, Share2, Layers, Search, SlidersHorizontal, X, Target, Users, Compass } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function CaseStudyModal({ project, onClose, onOpenContact }: CaseStudyModalProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'strategy' | 'process' | 'photoshop'>('overview');

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

        {/* Modal Navigation Tabs (Part 5 Documentary Style) */}
        <div className="flex flex-wrap px-6 sm:px-8 bg-[#111111] border-b border-white/[0.08] gap-6 font-mono text-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#4B6FFF] text-[#F7F7F7] font-medium'
                : 'border-transparent text-[#9A9A9A] hover:text-[#F7F7F7]'
            }`}
          >
            01. Overview & Before/After
          </button>
          <button
            onClick={() => setActiveTab('strategy')}
            className={`py-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'strategy'
                ? 'border-[#4B6FFF] text-[#F7F7F7] font-medium'
                : 'border-transparent text-[#9A9A9A] hover:text-[#F7F7F7]'
            }`}
          >
            02. Brief, Audience & Psychology
          </button>
          <button
            onClick={() => setActiveTab('process')}
            className={`py-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'process'
                ? 'border-[#4B6FFF] text-[#F7F7F7] font-medium'
                : 'border-transparent text-[#9A9A9A] hover:text-[#F7F7F7]'
            }`}
          >
            03. Creative Process Timeline
          </button>
          <button
            onClick={() => setActiveTab('photoshop')}
            className={`py-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'photoshop'
                ? 'border-[#4B6FFF] text-[#F7F7F7] font-medium'
                : 'border-transparent text-[#9A9A9A] hover:text-[#F7F7F7]'
            }`}
          >
            04. Photoshop Layer Stack
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-8">
          
          {activeTab === 'overview' && (
            <>
              {/* Project Hero / Objective */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#F7F7F7]">
                  {project.title}
                </h2>
                {project.objective && (
                  <p className="text-base text-[#4B6FFF] font-mono leading-relaxed bg-[#111111] p-4 border border-white/[0.08] radius-card">
                    Objective: &ldquo;{project.objective}&rdquo;
                  </p>
                )}
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
                    <span>Timeline: {project.creationTime}</span>
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
                    Color Palette & Temperature
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
                    Typography Hierarchy
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
                    The Problem
                  </h3>
                  <p className="text-sm text-[#9A9A9A] font-light leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 bg-[#111111] border border-white/[0.08] radius-card">
                  <h3 className="text-xs uppercase font-mono tracking-widest text-[#9A9A9A] mb-3">
                    Visual Strategy
                  </h3>
                  <p className="text-sm text-[#9A9A9A] font-light leading-relaxed">
                    {project.strategy}
                  </p>
                </div>

                <div className="p-6 bg-[#111111] border border-white/[0.08] radius-card">
                  <h3 className="text-xs uppercase font-mono tracking-widest text-[#28C76F] mb-3">
                    Measurable Result
                  </h3>
                  <p className="text-sm text-[#F7F7F7] font-light leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Lessons Learned */}
              {project.lessonsLearned && (
                <div className="p-6 bg-[#111111] border border-white/[0.08] radius-card font-mono text-xs space-y-2">
                  <div className="text-[#4B6FFF] uppercase tracking-widest">Key Takeaway & Lessons Learned:</div>
                  <div className="text-[#9A9A9A] font-light text-sm leading-relaxed">{project.lessonsLearned}</div>
                </div>
              )}
            </>
          )}

          {activeTab === 'strategy' && (
            <div className="space-y-8 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-[#111111] border border-white/[0.08] radius-card space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#4B6FFF]">
                    <Target className="w-4 h-4" />
                    <span>Client Brief & Goals</span>
                  </div>
                  <div className="space-y-3 text-sm text-[#9A9A9A] font-light">
                    <div><strong className="text-[#F7F7F7]">Core Goal:</strong> {project.clientBrief?.goal}</div>
                    <div><strong className="text-[#F7F7F7]">Target Audience:</strong> {project.clientBrief?.audience}</div>
                    <div><strong className="text-[#F7F7F7]">Deadline:</strong> {project.clientBrief?.deadline}</div>
                    <div><strong className="text-[#F7F7F7]">Success Metrics:</strong> {project.clientBrief?.metrics}</div>
                  </div>
                </div>

                <div className="p-6 bg-[#111111] border border-white/[0.08] radius-card space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#28C76F]">
                    <Users className="w-4 h-4" />
                    <span>Audience Research & Psychology</span>
                  </div>
                  <div className="space-y-3 text-sm text-[#9A9A9A] font-light">
                    <div><strong className="text-[#F7F7F7]">Demographics:</strong> {project.audienceResearch?.demographics}</div>
                    <div><strong className="text-[#F7F7F7]">Visual Psychology:</strong> {project.audienceResearch?.psychology}</div>
                    <div><strong className="text-[#F7F7F7]">Viewing Device:</strong> {project.audienceResearch?.viewingDevice}</div>
                  </div>
                </div>
              </div>

              {project.visualStrategy && (
                <div className="p-6 bg-[#111111] border border-white/[0.08] radius-card space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#4B6FFF]">
                    <Compass className="w-4 h-4" />
                    <span>Visual Strategy & Composition</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                    <div className="p-4 bg-[#171717] border border-white/[0.08] radius-button">
                      <span className="text-[#6B6B6B] block mb-1">FOCAL POINT</span>
                      <span className="text-[#F7F7F7]">{project.visualStrategy.focalPoint}</span>
                    </div>
                    <div className="p-4 bg-[#171717] border border-white/[0.08] radius-button">
                      <span className="text-[#6B6B6B] block mb-1">COLOR BALANCE</span>
                      <span className="text-[#F7F7F7]">{project.visualStrategy.colorBalance}</span>
                    </div>
                    <div className="p-4 bg-[#171717] border border-white/[0.08] radius-button">
                      <span className="text-[#6B6B6B] block mb-1">TYPOGRAPHY HIERARCHY</span>
                      <span className="text-[#F7F7F7]">{project.visualStrategy.typographyHierarchy}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
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

const CATEGORIES = [
  'All',
  'YouTube Thumbnails',
  'Gaming & Esports',
  'Brand Packaging',
  'Motion & Posters'
] as const;

export default function PortfolioGallery({ onOpenContact }: { onOpenContact: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'ctr' | 'views'>('featured');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  let filtered = PROJECTS.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.softwareUsed.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  if (sortBy === 'ctr') {
    filtered.sort((a, b) => parseFloat(b.ctr) - parseFloat(a.ctr));
  } else if (sortBy === 'views') {
    filtered.sort((a, b) => parseFloat(b.views) - parseFloat(a.views));
  }

  return (
    <section id="work" className="py-28 bg-[#050505] text-[#F7F7F7]">
      <div className="max-w-[1680px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Section Header matching Part 4 prompt spec */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-white/[0.08] radius-card text-xs font-mono text-[#9A9A9A] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#4B6FFF]" />
              <span>Curated Masterpiece Gallery</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-[#F7F7F7] max-w-3xl leading-[1.08]">
              THUMBNAILS <br />
              <span className="font-normal text-[#4B6FFF]">THAT WIN</span> <br />
              THE CLICK.
            </h2>
          </div>
          <p className="text-[#9A9A9A] text-sm max-w-md font-light leading-relaxed">
            Every thumbnail shown here was crafted with one objective: capture attention before anyone reads the title. Balanced with psychology, storytelling, composition, and marketing strategy.
          </p>
        </div>

        {/* Filter, Search & Sort Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 pb-6 border-b border-white/[0.08]">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 text-xs font-mono tracking-wider transition-all radius-button cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#4B6FFF] text-white font-medium shadow-small'
                    : 'bg-[#111111] text-[#9A9A9A] hover:text-[#F7F7F7] border border-white/[0.08]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, client, software..."
                className="bg-[#111111] border border-white/[0.08] pl-10 pr-4 py-2.5 text-xs text-[#F7F7F7] placeholder-[#6B6B6B] radius-input focus:outline-none focus:border-[#4B6FFF] transition-colors w-64"
              />
            </div>

            <div className="flex items-center gap-2 bg-[#111111] border border-white/[0.08] px-3 py-2 radius-input">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#6B6B6B]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs font-mono text-[#F7F7F7] focus:outline-none cursor-pointer"
              >
                <option value="featured" className="bg-[#111111]">Featured</option>
                <option value="ctr" className="bg-[#111111]">Highest CTR</option>
                <option value="views" className="bg-[#111111]">Most Views</option>
              </select>
            </div>
          </div>

        </div>

        {/* Masonry-Style Responsive Gallery Grid (4 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative bg-[#111111] border border-white/[0.08] radius-card overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/35 hover:shadow-large flex flex-col"
            >
              {/* Thumbnail Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#050505] radius-image m-4 mb-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Metric Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md text-[#F7F7F7] font-mono text-[11px] border border-white/[0.08] radius-button uppercase tracking-widest">
                    {project.views}
                  </span>
                  <span className="px-2.5 py-1 bg-[#4B6FFF] text-white font-mono text-[11px] font-bold radius-button uppercase tracking-widest">
                    {project.ctr}
                  </span>
                </div>

                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-5 py-2.5 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform shadow-small">
                    <span>Inspect Documentary Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] uppercase font-mono tracking-widest text-[#9A9A9A]">
                      {project.client}
                    </span>
                    <span className="text-[11px] font-mono text-[#6B6B6B]">
                      {project.creationTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-light text-[#F7F7F7] tracking-tight group-hover:text-[#9A9A9A] transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#9A9A9A] font-light line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-[#9A9A9A] bg-[#171717] px-2 py-0.5 radius-button">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-mono text-[#F7F7F7] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Documentary Case Study Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
}

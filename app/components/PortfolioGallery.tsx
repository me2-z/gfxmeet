'use client';

import { useState } from 'react';
import { PROJECTS, Project } from '../data';
import { ArrowUpRight, Sparkles, TrendingUp, Eye } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

interface PortfolioGalleryProps {
  onOpenContact: () => void;
}

const CATEGORIES = [
  'All',
  'YouTube Thumbnails',
  'Gaming & Esports',
  'Brand Packaging',
  'Motion & Posters'
] as const;

export default function PortfolioGallery({ onOpenContact }: PortfolioGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="work" className="py-28 bg-[#050505] text-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-white/[0.08] radius-card text-xs font-mono text-[#9A9A9A] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#4B6FFF]" />
              <span>Curated Gallery & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F7F7F7] max-w-2xl">
              Engineered for High-Velocity Engagement
            </h2>
          </div>
          <p className="text-[#9A9A9A] text-sm max-w-md font-light">
            Explore our signature work across YouTube packaging, esports tournaments, brand identity systems, and cinematic posters.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-white/[0.08] pb-6">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative bg-[#111111] border border-white/[0.08] radius-card overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/30 hover:shadow-large flex flex-col"
            >
              {/* Thumbnail Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#050505] radius-image m-4 mb-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Metric Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[#F7F7F7] font-mono text-xs border border-white/[0.08] radius-button uppercase tracking-widest">
                    {project.views}
                  </span>
                  <span className="px-3 py-1 bg-[#4B6FFF] text-white font-mono text-xs font-bold radius-button uppercase tracking-widest">
                    {project.ctr}
                  </span>
                </div>

                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-6 py-3 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform shadow-small">
                    <span>Inspect Case Study & Before/After</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#9A9A9A]">
                      {project.client}
                    </span>
                    <span className="text-xs font-mono text-[#9A9A9A]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-[#F7F7F7] tracking-tight group-hover:text-[#9A9A9A] transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#9A9A9A] font-light line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-mono text-[#9A9A9A] bg-[#171717] px-2.5 py-1 radius-button">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-mono text-[#F7F7F7] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
}

'use client';

import { useState } from 'react';
import { PROJECTS, Project } from '../data';
import { ArrowUpRight, Sparkles, Search, SlidersHorizontal, Eye } from 'lucide-react';
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

const TAG_FILTERS = [
  'All',
  'Gaming',
  'Technology',
  'Minecraft',
  'Esports',
  'Editorial'
] as const;

export default function PortfolioGallery({ onOpenContact }: PortfolioGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'ctr' | 'views'>('featured');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Filter & Search logic
  let filtered = PROJECTS.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesTag = selectedTag === 'All' || project.tags.includes(selectedTag);
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.softwareUsed.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesTag && matchesSearch;
  });

  // Sorting
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
                    <span>Inspect Case Study</span>
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

      {/* Case Study Modal with Before/After & Process & Photoshop Breakdown */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
}

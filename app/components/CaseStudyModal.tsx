'use client';

import { X, ArrowUpRight, CheckCircle2, TrendingUp, Eye } from 'lucide-react';
import { Project } from '../data';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function CaseStudyModal({ project, onClose, onOpenContact }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-[#0f0f0f] border border-white/10 text-white shadow-2xl my-8 overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-white text-black font-mono text-xs uppercase font-bold tracking-widest">
              {project.category}
            </span>
            <span className="text-neutral-400 font-mono text-xs">{project.client}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white transition-colors bg-neutral-900 border border-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Title & Stats */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white mb-4">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-4 font-mono text-xs">
              <div className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-emerald-400 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Performance: {project.views}</span>
              </div>
              <div className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-white flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>Benchmark: {project.ctr}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video w-full overflow-hidden border border-neutral-800 bg-neutral-950">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* Strategy Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-neutral-950 border border-neutral-800/80">
              <h3 className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-3">
                The Challenge
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800/80">
              <h3 className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-3">
                Design Strategy
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {project.strategy}
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800/80">
              <h3 className="text-xs uppercase font-mono tracking-widest text-emerald-400 mb-3">
                The Result
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-neutral-900 text-neutral-300 font-mono text-xs border border-neutral-800">
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral-400 font-light">
              Ready to achieve similar metrics for your channel or brand?
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-xs font-medium tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors cursor-pointer"
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

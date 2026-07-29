'use client';

import { useState } from 'react';
import { STUDIO_DEPARTMENTS, STUDIO_PROCESS, STUDIO_TOOLS, STUDIO_FAQS, StudioDepartment } from '../studio-data';
import { ArrowUpRight, CheckCircle2, ChevronDown, Sparkles, Cpu, Layers } from 'lucide-react';

interface StudioSectionProps {
  onOpenContact: () => void;
  onOpenContactWithDetails: (details: string) => void;
}

export default function StudioSection({ onOpenContact, onOpenContactWithDetails }: StudioSectionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedDept, setSelectedDept] = useState<StudioDepartment | null>(null);

  return (
    <section id="studio" className="py-28 bg-[#050505] text-[#F7F7F7] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Studio Introduction Header matching Part 8 prompt spec */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-white/[0.08] radius-card text-xs font-mono text-[#9A9A9A] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#4B6FFF]" />
            <span>GFXMEET V3 Studio Departments</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#F7F7F7] leading-[1.08] mb-8">
            CREATIVITY <br />
            <span className="font-normal text-[#4B6FFF]">IS A SYSTEM.</span> <br />
            NOT AN ACCIDENT.
          </h2>
          <p className="text-base sm:text-lg text-[#9A9A9A] font-light leading-relaxed">
            Every design we create begins with understanding people—not software. We combine strategy, psychology, visual storytelling, and technical execution to produce creative work that captures attention and drives results.
          </p>
        </div>

        {/* Creative Disciplines Grid (Departments) */}
        <div className="mb-28">
          <div className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-8">
            01 — Studio Departments & Capabilities
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STUDIO_DEPARTMENTS.map((dept) => (
              <div
                key={dept.id}
                className="group bg-[#111111] border border-white/[0.08] radius-card p-8 sm:p-10 flex flex-col justify-between hover:border-white/30 hover:shadow-large transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedDept(dept)}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#4B6FFF] uppercase tracking-widest">
                      DEPARTMENT {dept.number}
                    </span>
                    <span className="text-xs font-mono text-[#9A9A9A] px-3 py-1 bg-[#171717] border border-white/[0.08] radius-button">
                      {dept.timeline}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-light text-[#F7F7F7] tracking-tight mb-2 group-hover:text-[#4B6FFF] transition-colors">
                    {dept.title}
                  </h3>
                  <p className="text-sm font-mono text-[#9A9A9A] mb-6">
                    {dept.subtitle}
                  </p>
                  <p className="text-sm text-[#9A9A9A] font-light leading-relaxed mb-8">
                    {dept.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-6 border-t border-white/[0.08] mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-[#6B6B6B] mb-2">
                      Key Deliverables:
                    </div>
                    {dept.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#9A9A9A] font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#28C76F] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#F7F7F7] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore Department</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenContactWithDetails(`Inquiry regarding Studio Department: ${dept.title}`);
                    }}
                    className="px-4 py-2 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button hover:bg-[#3b5ae6] transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-28 py-20 bg-[#0D0D0D] border border-white/[0.08] radius-dialog p-8 sm:p-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-4">
            02 — Methodical Rigor
          </div>
          <h3 className="text-3xl sm:text-4xl font-light text-[#F7F7F7] tracking-tight mb-12">
            Our 6-Stage Creative Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STUDIO_PROCESS.map((proc, idx) => (
              <div key={idx} className="p-6 bg-[#111111] border border-white/[0.08] radius-card space-y-3">
                <div className="text-xs font-mono text-[#4B6FFF]">STAGE {proc.step}</div>
                <h4 className="text-lg font-medium text-[#F7F7F7]">{proc.name}</h4>
                <p className="text-sm text-[#9A9A9A] font-light leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-28">
          <div className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-8">
            03 — Software & Tooling Stack
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STUDIO_TOOLS.map((tool, idx) => (
              <div key={idx} className="p-6 bg-[#111111] border border-white/[0.08] radius-card flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 bg-[#171717] border border-white/[0.08] radius-button flex items-center justify-center font-mono text-xs font-bold text-[#4B6FFF]">
                    {tool.icon}
                  </span>
                  <span className="text-[10px] font-mono text-[#6B6B6B]">{tool.years}</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#F7F7F7] mb-1">{tool.name}</h4>
                  <p className="text-xs text-[#9A9A9A] font-light leading-relaxed">{tool.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-28">
          <div className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-4 text-center">
            04 — Frequently Answered Questions
          </div>
          <h3 className="text-3xl sm:text-4xl font-light text-[#F7F7F7] tracking-tight mb-12 text-center">
            Clarity Before Collaboration
          </h3>

          <div className="space-y-4">
            {STUDIO_FAQS.map((faq, idx) => (
              <div key={idx} className="bg-[#111111] border border-white/[0.08] radius-card overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-light text-[#F7F7F7]">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#9A9A9A] transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-[#9A9A9A] font-light leading-relaxed border-t border-white/[0.08] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Department Detail Modal if clicked */}
        {selectedDept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300">
            <div className="relative w-full max-w-3xl bg-[#0D0D0D] border border-white/[0.08] text-[#F7F7F7] radius-dialog shadow-large my-8 p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
                <span className="text-xs font-mono text-[#4B6FFF]">DEPARTMENT {selectedDept.number}</span>
                <button
                  onClick={() => setSelectedDept(null)}
                  className="p-2 text-[#9A9A9A] hover:text-[#F7F7F7] bg-[#111111] border border-white/[0.08] radius-button"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-[#F7F7F7]">{selectedDept.title}</h3>
              <p className="text-sm font-mono text-[#9A9A9A]">{selectedDept.subtitle}</p>
              <p className="text-sm text-[#9A9A9A] font-light leading-relaxed">{selectedDept.description}</p>

              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B]">Deliverables Include:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedDept.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#F7F7F7]">
                      <CheckCircle2 className="w-4 h-4 text-[#28C76F]" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono text-[#9A9A9A]">Timeline: {selectedDept.timeline}</span>
                <button
                  onClick={() => {
                    const deptTitle = selectedDept.title;
                    setSelectedDept(null);
                    onOpenContactWithDetails(`Inquiry regarding Department: ${deptTitle}`);
                  }}
                  className="px-6 py-3 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button hover:bg-[#3b5ae6] transition-colors cursor-pointer"
                >
                  Book This Department
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

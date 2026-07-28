'use client';

import { useState, useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

export default function ContactModal({ isOpen, onClose, initialMessage = '' }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [channelUrl, setChannelUrl] = useState('');
  const [service, setService] = useState('YouTube Thumbnails');
  const [message, setMessage] = useState(initialMessage);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore if confetti fails
      }
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setChannelUrl('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0D0D0D] border border-white/[0.08] text-[#F7F7F7] radius-dialog shadow-large my-8 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4B6FFF] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#9A9A9A]">
              GFXMEET V3 • Studio Inquiry
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#9A9A9A] hover:text-[#F7F7F7] transition-colors bg-[#111111] border border-white/[0.08] radius-button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-[#28C76F] text-black flex items-center justify-center radius-button shadow-medium">
                <CheckCircle2 className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-[#F7F7F7] tracking-tight">
                Inquiry Received Successfully
              </h3>
              <p className="text-[#9A9A9A] font-light text-sm max-w-md leading-relaxed">
                Thank you, <span className="text-[#F7F7F7] font-medium">{name}</span>. Meet Patel and the GFXMEET studio team have received your project details and will review your channel/brand within 24 hours.
              </p>
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button hover:bg-[#3b5ae6] transition-colors cursor-pointer mt-4 shadow-small"
              >
                Close & Return to Studio
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-light text-[#F7F7F7] tracking-tight mb-2">
                  Secure Your Studio Slot
                </h3>
                <p className="text-sm text-[#9A9A9A] font-light">
                  Fill out the details below to initiate a consultation with Meet Patel.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-2">
                    Your Name / Brand *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Krono Gaming"
                    className="w-full bg-[#111111] border border-white/[0.08] px-4 py-3 text-sm text-[#F7F7F7] placeholder-[#6B6B6B] radius-input focus:outline-none focus:border-[#4B6FFF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. creator@domain.com"
                    className="w-full bg-[#111111] border border-white/[0.08] px-4 py-3 text-sm text-[#F7F7F7] placeholder-[#6B6B6B] radius-input focus:outline-none focus:border-[#4B6FFF] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-2">
                    Channel / Website URL
                  </label>
                  <input
                    type="text"
                    value={channelUrl}
                    onChange={(e) => setChannelUrl(e.target.value)}
                    placeholder="youtube.com/@yourchannel"
                    className="w-full bg-[#111111] border border-white/[0.08] px-4 py-3 text-sm text-[#F7F7F7] placeholder-[#6B6B6B] radius-input focus:outline-none focus:border-[#4B6FFF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-2">
                    Primary Focus
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#111111] border border-white/[0.08] px-4 py-3 text-sm text-[#F7F7F7] radius-input focus:outline-none focus:border-[#4B6FFF] transition-colors"
                  >
                    <option value="YouTube Thumbnails">YouTube Thumbnails & Packaging</option>
                    <option value="Gaming & Esports">Gaming & Esports Kit</option>
                    <option value="Brand Identity">Brand Identity Architecture</option>
                    <option value="Motion Graphics">Motion Graphics & Posters</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-2">
                  Project Scope & Details *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your channel goals, current CTR challenges, or timeline requirements..."
                  className="w-full bg-[#111111] border border-white/[0.08] p-4 text-sm text-[#F7F7F7] placeholder-[#6B6B6B] radius-input focus:outline-none focus:border-[#4B6FFF] transition-colors resize-none"
                />
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono text-[#6B6B6B]">
                  Response within 24 hours.
                </span>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button flex items-center gap-2 hover:bg-[#3b5ae6] transition-colors cursor-pointer disabled:opacity-50 shadow-small"
                >
                  <span>{loading ? 'Submitting...' : 'Submit Inquiry'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

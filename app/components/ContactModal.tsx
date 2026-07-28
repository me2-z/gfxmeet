'v'
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
      <div className="relative w-full max-w-2xl bg-[#0f0f0f] border border-white/10 text-white shadow-2xl my-8 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">
              GFXMEET V3 • Studio Inquiry
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white transition-colors bg-neutral-900 border border-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-white text-black flex items-center justify-center rounded-none">
                <CheckCircle2 className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                Inquiry Received Successfully
              </h3>
              <p className="text-neutral-400 font-light text-sm max-w-md leading-relaxed">
                Thank you, <span className="text-white font-medium">{name}</span>. Meet Patel and the GFXMEET studio team have received your project details and will review your channel/brand within 24 hours.
              </p>
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-white text-black text-xs font-medium tracking-widest uppercase hover:bg-neutral-200 transition-colors cursor-pointer mt-4"
              >
                Close & Return to Studio
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-light text-white tracking-tight mb-2">
                  Secure Your Studio Slot
                </h3>
                <p className="text-sm text-neutral-400 font-light">
                  Fill out the details below to initiate a consultation with Meet Patel.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    Your Name / Brand *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Krono Gaming"
                    className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. creator@domain.com"
                    className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    Channel / Website URL
                  </label>
                  <input
                    type="text"
                    value={channelUrl}
                    onChange={(e) => setChannelUrl(e.target.value)}
                    placeholder="youtube.com/@yourchannel"
                    className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    Primary Focus
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="YouTube Thumbnails">YouTube Thumbnails & Packaging</option>
                    <option value="Gaming & Esports">Gaming & Esports Kit</option>
                    <option value="Brand Identity">Brand Identity Architecture</option>
                    <option value="Motion Graphics">Motion Graphics & Posters</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  Project Scope & Details *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your channel goals, current CTR challenges, or timeline requirements..."
                  className="w-full bg-neutral-950 border border-neutral-800 p-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500">
                  Response within 24 hours.
                </span>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 bg-white text-black text-xs font-medium tracking-widest uppercase flex items-center gap-2 hover:bg-neutral-200 transition-colors cursor-pointer disabled:opacity-50"
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

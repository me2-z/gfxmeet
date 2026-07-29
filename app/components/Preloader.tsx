'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplete(true);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-[#F7F7F7]"
        >
          {/* Subtle Studio Lighting pass */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#4B6FFF]/10 via-transparent to-transparent opacity-50 pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Logo Drawing Animation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-[#F7F7F7] text-[#050505] font-bold flex items-center justify-center radius-button tracking-tighter text-2xl shadow-large font-mono">
                GF
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold tracking-[0.25em] text-[#F7F7F7] text-lg uppercase">
                  GFXMEET
                </span>
                <span className="text-xs tracking-[0.3em] text-[#9A9A9A] font-mono">
                  V3 STUDIO • MEET PATEL
                </span>
              </div>
            </motion.div>

            {/* Loading Line */}
            <div className="w-48 h-[2px] bg-[#171717] mt-8 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full bg-[#4B6FFF]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import CreditsOverlay from './CreditsOverlay';

const Footer = () => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <footer className="py-32 px-8 border-t border-white/5 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="text-4xl font-display tracking-[0.2em] mb-12 text-white">
          CLASS OF 2026
        </div>
        
        <p className="text-5xl md:text-7xl font-display text-white/20 mb-16 leading-tight uppercase">
          End of an Era,<br />
          <span className="text-white">Beginning of a Legacy.</span>
        </p>

        <div className="flex gap-12 text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">
          <button 
            onClick={() => setShowCredits(true)}
            className="hover:text-white transition-colors bg-transparent border-none cursor-pointer uppercase tracking-[0.4em]"
          >
            THE CREDITS
          </button>
        </div>

        <div className="mt-32 text-[10px] uppercase tracking-[0.5em] text-white/10">
          ©2026 THE FINAL CURTAIN. PRESENTED BY SY. FOR BEs
        </div>
      </div>

      {/* Credits Flow */}
      <AnimatePresence>
        {showCredits && (
          <CreditsOverlay 
            isOpen={showCredits} 
            onClose={() => setShowCredits(false)} 
          />
        )}
      </AnimatePresence>

      {/* Subtle Background Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ onStartJourney, onNavClick }) => {
  const navLinks = [
    { label: "SOMETHING'S FOR YOU", view: 'special' },
    { label: 'GALLERY', view: 'gallery' },
    { label: 'FINAL ACT', view: 'finalact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-[50] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-6 md:py-8 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px] md:backdrop-blur-0"
    >
      {/* Logo */}
      <div 
        className="text-lg md:text-2xl font-display tracking-[0.3em] md:tracking-widest text-white cursor-pointer mb-4 md:mb-0"
        onClick={() => onNavClick && onNavClick('home')}
      >
        CLASS OF 2026
      </div>

      {/* Nav Links - Scrollable on mobile, fixed gap on desktop */}
      <div className="flex items-center gap-6 md:gap-12 overflow-x-auto no-scrollbar w-full md:w-auto justify-center pb-2 md:pb-0">
        {navLinks.map((link) => (
          <button 
            key={link.label} 
            onClick={() => onNavClick && onNavClick(link.view)}
            className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] text-white/50 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
          >
            {link.label}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;

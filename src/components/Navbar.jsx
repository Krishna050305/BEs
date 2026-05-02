import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ onStartJourney, onNavClick }) => {
  const navLinks = [
    { label: 'JOURNEY', view: 'journey' },
    { label: 'GALLERY', view: 'gallery' },
    { label: 'FINAL ACT', view: 'finalact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-[50] flex items-center justify-center px-8 md:px-16 py-8"
    >
      {/* Logo */}
      <div 
        className="text-2xl font-display tracking-widest text-white cursor-pointer mr-12"
        onClick={() => onNavClick && onNavClick('home')}
      >
        CLASS OF 2026
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-12">
        {navLinks.map((link) => (
          <button 
            key={link.label} 
            onClick={() => onNavClick && onNavClick(link.view)}
            className="text-xs font-bold tracking-[0.3em] text-white/40 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
          >
            {link.label}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;

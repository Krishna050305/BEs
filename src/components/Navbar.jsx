import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 glass"
    >
      <div className="text-xl font-bold tracking-tighter">
        CLASS <span className="text-white/40">OF</span> 2026
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        <a href="#journey" className="hover:text-white/60 transition-colors">JOURNEY</a>
        <a href="#gallery" className="hover:text-white/60 transition-colors">GALLERY</a>
        <a href="#final-act" className="hover:text-white/60 transition-colors">FINAL ACT</a>
      </div>
      <button className="px-5 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform">
        Connect
      </button>
    </motion.nav>
  );
};

export default Navbar;

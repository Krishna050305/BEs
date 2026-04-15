import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 px-8 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="text-2xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
          CLASS OF 2026
        </div>
        
        <p className="text-4xl md:text-5xl font-light tracking-tight text-white mb-12 max-w-2xl leading-tight">
          "End of an Era,<br />
          <span className="font-bold">Beginning of a Legacy.</span>"
        </p>

        <div className="flex gap-8 text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Credits</a>
          <a href="#" className="hover:text-white transition-colors">Archive</a>
        </div>

        <div className="mt-20 text-[10px] uppercase tracking-[0.3em] text-white/20">
          © 2026 All Rights Reserved. Created by the Seniors.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onStartJourney }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      
      
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata"
          poster="/assets/hero.png"
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-night-sky-out-of-focus-9721-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-30 text-center px-4 max-w-5xl">        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-white/40 text-[10px] md:text-base font-medium tracking-[0.4em] md:tracking-[0.6em] uppercase mb-4 md:mb-6 block">
            The Graduation Chapter
          </span>
          <h1 className="text-4xl md:text-[8rem] lg:text-[10rem] font-display tracking-tight leading-[1.1] md:leading-[0.9] mb-8 md:mb-12">
            Class of 2026:<br />
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] italic">The LAST STRETCH.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button 
            onClick={onStartJourney}
            className="group relative px-14 py-6 bg-white text-black rounded-full font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(255,255,255,0.1)] uppercase tracking-widest"
          >
            Start Journey
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="text-[9px] tracking-[0.6em] text-white/30 uppercase font-bold">Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 via-[#d4af37]/40 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

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
          <span className="text-white/40 text-sm md:text-base font-medium tracking-[0.6em] uppercase mb-6 block">
            The Graduation Chapter
          </span>
          <h1 className="text-7xl md:text-[10rem] font-display tracking-tight leading-[0.9] mb-12">
            Class of 2026:<br />
            <span className="text-white drop-shadow-[0_0_50px_rgba(255,255,255,0.3)] italic">The LAST STRETCH.</span>
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
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
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

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-white/40 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4 block">
            The Graduation Chapter
          </span>
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-none mb-8">
            Class of 2026:<br />
            <span className="text-white">The Final Curtain.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <button 
            onClick={() => document.getElementById('journey').scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:pr-14"
          >
            <span className="relative z-10">Start Journey</span>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4" />
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const FinalAct = () => {
  return (
    <section id="final-act" className="py-24 px-8 bg-gradient-to-b from-background to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.5em] text-accent-victory mb-4 block"
          >
            The Masterpiece
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter"
          >
            Tu Hai Kahaan!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto mt-6 text-white/50 text-lg"
          >
            Our path to the finals. A story of resilience, rhythm, and reality.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group cursor-pointer"
        >
          {/* CinemaScope Container */}
          <div className="aspect-cinema w-full overflow-hidden rounded-[2rem] border border-white/10 glass shadow-[0_0_100px_rgba(255,204,0,0.1)]">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out shadow-inner"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-smoke-in-the-theatrical-spotlight-41458-large.mp4" type="video/mp4" />
            </video>
            
            {/* Theatrical Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
            <div className="absolute inset-0 border-[40px] border-black opacity-20 pointer-events-none" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full glass flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
                <Play size={40} className="ml-2" fill="currentColor" />
              </div>
            </div>

            {/* Stage Light Effect */}
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-victory/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalAct;

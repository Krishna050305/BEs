import React from 'react';
import { motion } from 'framer-motion';

const PHOTOS = [
  '/assets/group1.png',
  '/assets/group2.png',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=600'
];

const UnitedWeRock = () => {
  return (
    <section id="united" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="text-[10rem] md:text-[15rem] leading-none tracking-tighter metallic-text italic font-display">
            UNITED WE ROCK
          </h2>
          <div className="w-40 h-2 bg-accent-chaos mt-4 rounded-full" />
        </motion.div>

        <div className="relative mt-12">
          <div className="flex gap-6 overflow-x-auto pb-12 hide-scrollbar snap-x">
            {PHOTOS.map((url, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="flex-shrink-0 w-80 md:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl snap-center border border-white/5"
              >
                <img 
                  src={url} 
                  alt="Candid moment" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </motion.div>
            ))}
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 top-1/2 left-0 w-full h-[1px] bg-white/5" />
        </div>
      </div>
    </section>
  );
};

export default UnitedWeRock;

import React from 'react';
import { motion } from 'framer-motion';
import { SENIORS } from '../data/seniors';

const CastBento = () => {
  // We'll use the data from seniors.js
  const featuredMember = SENIORS[0]; // Shreya Gawade as featured
  const otherMembers = SENIORS.slice(1);

  return (
    <div className="mt-24">
      <h4 className="text-sm font-medium tracking-[0.4em] uppercase text-white/40 mb-12 text-center">The Cast</h4>
      
      {/* Primary Bento Block (First 5 members) */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 h-auto lg:h-[600px] mb-6">
        {/* Featured Card */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="lg:col-span-6 relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5 bg-surface"
        >
          <img 
            src={featuredMember.image} 
            alt={featuredMember.name} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-10 left-10">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/60 mb-2 block">{featuredMember.role}</span>
            <h5 className="text-4xl md:text-5xl font-display text-white">{featuredMember.name}</h5>
          </div>
        </motion.div>

        {/* 2x2 Grid for next 4 members */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-6 h-full">
          {otherMembers.slice(0, 4).map((member) => (
            <motion.div 
              key={member.id}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 bg-surface"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-1 block">{member.role}</span>
                <h5 className="text-lg md:text-xl font-display text-white leading-tight">{member.name}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Cast Members in a Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {otherMembers.slice(4).map((member) => (
          <motion.div 
            key={member.id}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer border border-white/5 bg-surface"
          >
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-1 block">{member.role}</span>
              <h5 className="text-base font-display text-white leading-tight">{member.name}</h5>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CastBento;

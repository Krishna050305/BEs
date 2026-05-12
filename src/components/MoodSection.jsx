import React from 'react';
import { motion } from 'framer-motion';

const MoodSection = ({ mood }) => {
  if (!mood) return null;

  return (
    <section 
      id={mood.id} 
      className="relative min-h-screen py-32 px-6 md:px-12 border-b border-white/5 overflow-hidden"
    >
      {/* Background Accent */}
      <div 
        className="absolute top-0 right-0 w-[50%] h-[50%] opacity-10 blur-[150px] rounded-full pointer-events-none"
        style={{ background: mood.color }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 
            className="text-5xl md:text-9xl mb-4 tracking-tighter"
            style={{ color: mood.color }}
          >
            {mood.title}
          </h2>
          <p className="text-lg md:text-3xl text-white/60 max-w-2xl font-medium leading-tight">
            {mood.description}
          </p>
        </motion.div>

        {/* Gallery / Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mood.media.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`relative rounded-3xl overflow-hidden aspect-[4/5] bg-surface border border-white/5 group ${
                idx === 0 ? 'md:col-span-2 md:aspect-video' : ''
              }`}
            >
              {item.type === 'video' ? (
                <video 
                  autoPlay muted loop playsInline 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 active:grayscale-0 transition-all duration-1000"
                >
                  <source src={item.url} type="video/mp4" />
                </video>
              ) : (
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 active:grayscale-0 transition-all duration-1000 group-hover:scale-105 active:scale-105" 
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white/60 text-sm font-medium tracking-wide">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoodSection;

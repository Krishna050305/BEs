import React from 'react';
import { motion } from 'framer-motion';

const GroupPhotos = () => {
  const photos = [
    { url: '/assets/group1.png', size: 'large' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1776275550/IMG20260228171916_ymey80.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1776275550/IMG20260228171916_ymey80.jpg', size: 'small' },
    { url: '/assets/group2.png', size: 'medium' },
    { url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800', size: 'small' },
  ];

  return (
    <section className="py-24 px-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent"
          >
            United We Rock
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-accent-chaos mx-auto mt-4"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`relative overflow-hidden rounded-[2rem] border border-white/5 group
                ${photo.size === 'large' ? 'col-span-2 row-span-2' : ''}
                ${photo.size === 'medium' ? 'col-span-2' : ''}
              `}
            >
              <img 
                src={photo.url} 
                alt="Group Memory" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 border-0 group-hover:border-[1px] border-white/20 transition-all duration-500 rounded-[2rem] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupPhotos;

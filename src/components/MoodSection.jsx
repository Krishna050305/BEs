import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MoodRecapPlayer from './MoodRecapPlayer';

const MOODS = [
  {
    id: 'chaos',
    title: 'Chaos',
    description: 'The beautiful mess we called college.',
    color: '#ff3b30',
    thumbnail: '/assets/mood_chaos.png',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1514525253361-bee8a187449a?auto=format&fit=crop&q=80&w=800', caption: 'Opening Night jitters.' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1541532131948-3ecbb2198ed6?auto=format&fit=crop&q=80&w=800', caption: 'Backstage madness.' },
      { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-celebration-smoke-with-confetti-and-fireworks-2641-large.mp4', caption: 'The victory lap!' }
    ]
  },
  {
    id: 'late-nights',
    title: 'Late Nights',
    description: 'When the best ideas were born.',
    color: '#5856d6',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800', caption: '3 AM study sessions.' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800', caption: 'Project deadlines.' }
    ]
  },
  {
    id: 'victory',
    title: 'Victory',
    description: 'Defining moments of triumph.',
    color: '#ff9500',
    thumbnail: '/assets/mood_victory.png',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800', caption: 'The trophy is ours.' }
    ]
  },
  {
    id: 'nostalgia',
    title: 'Nostalgia',
    description: 'Forever etched in our hearts.',
    color: '#af52de',
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800', caption: 'Where it all started.' }
    ]
  }
];

const MoodSection = () => {
  const [activeMood, setActiveMood] = useState(null);

  return (
    <section id="journey" className="py-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl font-bold tracking-tight mb-2">Our Vibes</h2>
        <p className="text-white/40 font-medium">Click a mood to relive the memories.</p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory">
        {MOODS.map((mood) => (
          <motion.div
            key={mood.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveMood(mood)}
            className="flex-shrink-0 w-80 md:w-[400px] aspect-video bg-surface rounded-2xl overflow-hidden cursor-pointer group snap-center border border-white/5"
          >
            <div className="relative w-full h-full">
              <img src={mood.thumbnail} alt={mood.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold mb-1" style={{ color: mood.color }}>{mood.title}</h3>
                <p className="text-sm text-white/60">{mood.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeMood && (
          <MoodRecapPlayer 
            mood={activeMood} 
            media={activeMood.media} 
            onClose={() => setActiveMood(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default MoodSection;

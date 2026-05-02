import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MOOD_OPTIONS = [
  {
    id: 'chaos',
    title: 'Chaos',
    label: '🔴 Chaos',
    description: '"The beautiful mess we called college."',
    image: 'https://images.unsplash.com/photo-1514525253361-bee8a187449a?auto=format&fit=crop&q=80&w=800',
    color: 'var(--color-accent-chaos)'
  },
  {
    id: 'late-nights',
    title: 'Late Nights',
    label: '🟣 Late Nights',
    description: '"When the best ideas were born."',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    color: 'var(--color-accent-nights)'
  },
  {
    id: 'victory',
    title: 'Victory',
    label: '🟡 Victory',
    description: '"Defining moments of triumph."',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800',
    color: 'var(--color-accent-victory)'
  },
  {
    id: 'nostalgia',
    title: 'Nostalgia',
    label: '🟣 Nostalgia',
    description: '"Forever etched."',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    color: 'var(--color-accent-nostalgia)'
  }
];

const MoodModal = ({ isOpen, onClose, onMoodSelect }) => {
  const handleMoodClick = (id) => {
    if (onMoodSelect) onMoodSelect(id);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-6 md:p-12"
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={onClose} />
          
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl glass-dark rounded-[2rem] overflow-hidden p-8 md:p-16 text-center"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <h2 className="text-5xl md:text-7xl font-display mb-4">What's your mood today?</h2>
            <p className="text-white/40 text-lg md:text-xl font-medium mb-12 uppercase tracking-widest">
              Pick a vibe to relive the memories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MOOD_OPTIONS.map((mood) => (
                <motion.div
                  key={mood.id}
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleMoodClick(mood.id)}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/5"
                >
                  <img 
                    src={mood.image} 
                    alt={mood.title} 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
                    <span 
                      className="text-sm font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-full w-fit bg-white/10 backdrop-blur-md border border-white/10"
                      style={{ color: mood.color }}
                    >
                      {mood.label}
                    </span>
                    <p className="text-white font-medium text-lg leading-tight">
                      {mood.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MoodModal;

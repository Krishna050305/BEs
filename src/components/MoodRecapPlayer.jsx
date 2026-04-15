import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MoodRecapPlayer = ({ mood, media, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000; // 5 seconds per slide
    const interval = 50; // Update progress every 50ms
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentIndex < media.length - 1) {
            setCurrentIndex(currentIndex + 1);
            return 0;
          } else {
            // End of recap
            onClose();
            return 100;
          }
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, media.length, onClose]);

  const currentMedia = media[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-2xl"
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 z-[110] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
      >
        <X size={24} />
      </button>

      <div className="relative w-full max-w-lg aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        {/* Progress Bars */}
        <div className="absolute top-4 left-4 right-4 z-20 flex gap-1.5">
          {media.map((_, idx) => (
            <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-50 linear"
                style={{ 
                  width: idx === currentIndex ? `${progress}%` : idx < currentIndex ? '100%' : '0%' 
                }}
              />
            </div>
          ))}
        </div>

        <div className="absolute top-8 left-6 z-20">
          <h3 className="text-xl font-bold tracking-tight uppercase" style={{ color: mood.color }}>
            {mood.title}
          </h3>
          <p className="text-white/60 text-xs font-medium tracking-widest">{currentIndex + 1} / {media.length}</p>
        </div>

        {/* Media Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            {currentMedia.type === 'video' ? (
              <video 
                autoPlay 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source src={currentMedia.url} type="video/mp4" />
              </video>
            ) : (
              <img 
                src={currentMedia.url} 
                alt="" 
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-12 left-8 right-8 z-20">
          <p className="text-lg font-medium leading-tight">{currentMedia.caption}</p>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default MoodRecapPlayer;

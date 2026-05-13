import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { SENIORS } from '../data/seniors';

const CharacterCard = ({ senior, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layoutId={`card-${senior.id}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onClick(senior)}
      whileTap={{ scale: 0.98 }}
      className={`relative cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-surface transition-all duration-500 hover:border-white/40 group
        ${senior.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
        ${senior.size === 'medium' ? 'md:col-span-2' : ''}
      `}
    >
      <div className="absolute inset-0">
        <motion.img
          src={senior.image}
          alt={senior.name}
          className="h-full w-full object-cover transition-all duration-700 grayscale-0 md:grayscale md:brightness-75 group-hover:grayscale-0 group-hover:brightness-110 active:grayscale-0 active:brightness-110"
        />
        <AnimatePresence>
          {isHovered && (
            <motion.video
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={senior.video} type="video/mp4" />
            </motion.video>
          )}
        </AnimatePresence>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60" />
      
      <div className="absolute bottom-6 left-6 text-left">
        <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{senior.role}</p>
        <h3 className="text-xl font-bold">{senior.name}</h3>
      </div>
    </motion.div>
  );
};

const CharacterGallery = () => {
  const [selectedSenior, setSelectedSenior] = useState(null);
  const navigate = useNavigate();

  return (
    <section id="gallery" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-2">The Cast</h2>
          <p className="text-white/40 font-medium">The faces behind the journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
          {SENIORS.map((senior) => (
            <CharacterCard key={senior.id} senior={senior} onClick={setSelectedSenior} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedSenior && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSenior(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div
              layoutId={`card-${selectedSenior.id}`}
              className="relative w-full max-w-4xl bg-surface rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedSenior(null)}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
                  <video 
                    autoPlay 
                    loop 
                    playsInline 
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src={selectedSenior.video} type="video/mp4" />
                  </video>
                </div>
                
                <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-surface">
                  <span className="text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase text-white/40 mb-2">{selectedSenior.role}</span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">{selectedSenior.name}</h2>
                  <div className="w-8 md:w-12 h-1 bg-white/20 mb-6 md:mb-8" />
                  <p className="text-lg md:text-2xl font-light italic text-white/80 leading-relaxed mb-6 md:mb-8">
                    "{selectedSenior.quote}"
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => navigate(`/profile/${selectedSenior.id}`)}
                      className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-xs md:text-sm hover:scale-105 transition-transform"
                    >
                      Full Profile <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CharacterGallery;

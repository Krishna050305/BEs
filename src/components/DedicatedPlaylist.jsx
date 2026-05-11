import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SENIORS } from '../data/seniors';
import PlaylistPanel from './PlaylistPanel';
import { Headphones } from 'lucide-react';

const DedicatedPlaylist = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Using all seniors from data (16 members)
  const gridSeniors = SENIORS;

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-12">
      <AnimatePresence mode="wait">
        {!selectedPerson ? (
          <motion.section
            key="grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 uppercase tracking-tight leading-none">
                Something's For You
              </h1>
              <p className="text-white/40 text-lg md:text-xl font-medium uppercase tracking-[0.2em]">
                A playlist dedicated to the ones who made it worth it.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {gridSeniors.map((person) => (
                <motion.div
                  key={person.id}
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPerson(person)}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-white/5 shadow-2xl transition-all duration-500 hover:shadow-amber-500/10"
                >
                  {/* Photo */}
                  <div className="absolute inset-0">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:saturate-[0.8]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  </div>

                  {/* Hover Overlay: Headphone Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="p-4 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-500">
                      <Headphones size={32} />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-lg leading-tight uppercase tracking-widest">
                      {person.name}
                    </h3>
                    <p className="text-amber-500/80 text-xs italic font-medium mt-1">
                      This one's for you
                    </p>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-amber-500/30 rounded-2xl" />
                </motion.div>
              ))}
            </div>
          </motion.section>
        ) : (
          <motion.div
            key="playlist"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <PlaylistPanel 
              person={selectedPerson} 
              onBack={() => setSelectedPerson(null)} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DedicatedPlaylist;

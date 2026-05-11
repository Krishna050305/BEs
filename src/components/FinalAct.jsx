import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const FinalAct = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section id="masterpiece" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-accent-masterpiece/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <span className="text-accent-masterpiece text-sm font-bold tracking-[0.5em] uppercase mb-4 block">
            THE MASTERPIECE
          </span>
          <h2 className="text-7xl md:text-9xl font-display mb-6 tracking-tight">
            Tu Hai Kahaan!
          </h2>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Our path to the finals. A story of resilience, rhythm, and reality.
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          onClick={handlePlay}
          className="relative w-full max-w-6xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden bg-surface border border-white/10 group cursor-pointer shadow-2xl"
        >
          <video 
            ref={videoRef}
            src="https://res.cloudinary.com/dyzb6lzgl/video/upload/q_auto/f_auto/v1778528707/InShot_20260511_231656573_2_1_haoo8g.mp4" 
            className={`w-full h-full object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-40'}`}
            controls={isPlaying}
            poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200"
          />

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform"
              >
                <Play fill="black" size={48} className="ml-2 text-black" />
              </motion.div>
            </div>
          )}

          {!isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FinalAct;

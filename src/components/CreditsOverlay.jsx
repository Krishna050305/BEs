import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { X } from 'lucide-react';
import { SENIORS } from '../data/seniors';

const CreditsOverlay = ({ isOpen, onClose }) => {
  const controls = useAnimation();
  const audioRef = useRef(null);

  useEffect(() => {
    const startAnimation = async () => {
      // Sustain for 4 seconds at the start
      await new Promise(resolve => setTimeout(resolve, 4000));

      if (!controls) return;

      // Start the scrolling animation - Stops at the end of content
      controls.start({
        y: ["0%", "-100%"], // We'll adjust the container to make -100% the exact end
        transition: {
          duration: 150, 
          ease: "linear",
        }
      }).then(() => {
        // Automatically go back after credits are over
        onClose();
      });
    };

    startAnimation();

    // Auto-play music when credits start
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(err => {
        console.log("Audio play blocked, but interaction should have happened:", err);
      });
    }

    return () => {
      // Cleanup: Stop music when overlay closes
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [controls, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black text-white overflow-hidden"
    >
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="https://res.cloudinary.com/dyzb6lzgl/video/upload/q_auto/f_auto/v1778586733/AUD_20260512_WA0004_aac_vocals_V1_bdat4y.mp3"
        loop
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-[210] p-4 text-white/40 hover:text-white transition-colors"
      >
        <X size={40} />
      </button>

      {/* Film Grain Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay bg-[url('https://res.cloudinary.com/dgx3aoymz/image/upload/v1778571556/grain_o8tq8z.png')] animate-grain" />

      {/* Credits Content Container */}
      <div className="relative w-full h-full overflow-hidden flex flex-col items-center">
        <motion.div
          animate={controls}
          className="w-full flex flex-col items-center gap-48 pt-[20vh] pb-[20vh]"
        >
          {/* THE HIGHLIGHTED IMAGE (Large Cinematic Poster) */}
          <div className="w-full max-w-6xl px-8 flex flex-col items-center">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 10, ease: "easeOut" }}
              className="relative w-full aspect-video rounded-sm overflow-hidden border border-white/20 shadow-[0_0_100px_rgba(255,255,255,0.05)]"
            >
              <img
                src="https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778647533/WhatsApp_Image_2026-05-13_at_10.11.06_blho4x.jpg"
                alt="SY-TE-BE Gang"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80" />
            </motion.div>
          </div>

          {/* Main Message - Brighter Grey */}
          <div className="flex flex-col items-center gap-6 md:gap-12 px-8 text-center">
            <motion.span className="text-[10px] md:text-[12px] tracking-[0.8em] md:tracking-[1.2em] text-white/70 uppercase">
              A Special Presentation
            </motion.span>
            <h1 className="text-4xl md:text-[10rem] font-display font-bold tracking-tight leading-[0.9] md:leading-[0.8] uppercase">
              WE <span className="text-white/40">ALL</span> LOVE <br className="hidden md:block" />
              <span className="text-white">YOU</span>
            </h1>
          </div>

          {/* Cast Section - Text Only to avoid repetition */}
          <section className="flex flex-col gap-24 md:gap-48 w-full max-w-4xl px-8 items-center">
            <h2 className="text-xl md:text-5xl tracking-[0.3em] md:tracking-[0.5em] text-white/70 uppercase font-display font-bold border-b border-white/10 pb-8 md:pb-12 w-full text-center">
              Featuring The Circle of 2026
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-32 gap-y-12 md:gap-y-16 w-full text-center">
              {SENIORS.map((senior) => (
                <div key={senior.id} className="flex flex-col gap-2">
                  <span className="text-3xl md:text-5xl font-display uppercase tracking-[0.15em] md:tracking-[0.2em] text-white/90">{senior.name}</span>
                  <span className="text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] text-white/60 uppercase">{senior.role}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Production Credits - Brighter Colors */}
          <section className="flex flex-col gap-24 w-full max-w-3xl text-center px-8 border-t border-white/10 pt-48">
            {[
              { role: "From", name: "SY's" },
              { role: "Special Thanks", name: "To All Seniors" }
            ].map((credit, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto_1fr] items-center gap-12 w-full">
                <span className="text-right text-[11px] tracking-[0.6em] text-white/60 uppercase">{credit.role}</span>
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                <span className="text-left text-3xl font-display uppercase tracking-[0.25em] text-white/90">{credit.name}</span>
              </div>
            ))}
          </section>

          {/* Legal / Music - Brighter
          <div className="flex flex-col items-center gap-12 opacity-60 py-32">
            <p className="text-[11px] tracking-[0.5em] uppercase text-center max-w-lg leading-loose">
              All characters appearing in this work are real.<br/>
              Any resemblance to other legends is purely intentional.
            </p>
            <div className="w-24 h-[1px] bg-white/20" />
            <p className="text-[11px] tracking-[0.8em] uppercase">© 2026 THE FINAL CURTAIN</p>
          </div> */}

          {/* The End */}
          <div className="py-32 md:py-64 flex flex-col items-center">
            <h2 className="text-[8rem] md:text-[18rem] font-display text-white/[0.05] select-none tracking-tighter leading-none">FIN</h2>
          </div>
        </motion.div>
      </div>

      {/* Vignette - Stronger for cinematic feel */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.6)_100%)] shadow-[inset_0_0_200px_rgba(0,0,0,1)]" />
    </motion.div>
  );
};

export default CreditsOverlay;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CurtainIntro = ({ onFinish }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [isOpened, setIsOpened] = useState(false);

  const handleCurtainClick = () => {
    if (isClicked) return;
    setIsClicked(true);
    startCountdown();
  };

  const startCountdown = () => {
    const sequence = [
      { text: 'Teen', duration: 1500 },
      { text: 'Don', duration: 1500 },
      { text: 'Ek', duration: 1500 },
      { text: 'Suru Kara', duration: 2000 },
      { text: 'Curtain.....', duration: 4000 },
    ];

    let delay = 0;
    sequence.forEach((item, index) => {
      setTimeout(() => {
        setCountdown(item.text);
      }, delay);
      delay += item.duration;
    });

    // After the full sequence, open the curtain
    setTimeout(() => {
      setCountdown(null);
      setIsOpened(true);
      setTimeout(onFinish, 2500);
    }, delay);
  };

  // Generates CSS for realistic vertical curtain folds
  const curtainStyle = {
    background: `
      repeating-linear-gradient(
        90deg,
        #1a0000 0px,
        #3a0808 15px,
        #551010 30px,
        #480c0c 45px,
        #3a0808 55px,
        #2a0404 70px,
        #1a0000 85px,
        #300606 100px,
        #4a0e0e 115px,
        #551010 125px,
        #400a0a 140px,
        #220202 155px,
        #1a0000 170px
      )
    `,
    boxShadow: 'inset 0 0 100px rgba(0,0,0,0.7), inset 0 -60px 80px rgba(0,0,0,0.5)',
  };

  // Gold fringe tassel border at the bottom
  const goldFringeStyle = {
    background: 'linear-gradient(180deg, #d4af37 0%, #f9f295 30%, #d4af37 60%, #b8860b 100%)',
    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4), 0 0 30px rgba(212, 175, 55, 0.2)',
  };

  // Valance (top drapery) style
  const valanceStyle = {
    background: `
      radial-gradient(ellipse 120% 100% at 50% 100%, #3a0808 0%, #2a0404 60%, #1a0000 100%)
    `,
    boxShadow: 'inset 0 -10px 30px rgba(0,0,0,0.5)',
  };

  return (
    <div
      className="fixed inset-0 z-[100] cursor-pointer overflow-hidden"
      style={{ background: '#0d0000' }}
      onClick={handleCurtainClick}
    >
      {/* Top Valance / Pelmet */}
      <div
        className="absolute top-0 left-0 w-full z-[60]"
        style={{ ...valanceStyle, height: '80px' }}
      >
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{ ...goldFringeStyle, height: '6px' }}
        />
        {/* Scalloped bottom edge using CSS */}
        <div className="absolute -bottom-4 left-0 w-full h-4 flex">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="flex-1"
              style={{
                background: 'radial-gradient(ellipse at 50% 0%, #6a0000 0%, transparent 70%)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Left Curtain Panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpened ? '-105%' : 0 }}
        transition={{ duration: 2.5, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 left-0 w-[52%] h-full z-[50]"
        style={curtainStyle}
      >
        {/* Gathered edge on the right side of left panel */}
        <div
          className="absolute top-0 right-0 w-16 h-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.5))',
          }}
        />
        {/* Gold trim at bottom */}
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{ ...goldFringeStyle, height: '10px' }}
        />
        {/* Subtle tassel fringe */}
        <div className="absolute -bottom-3 left-0 w-full flex">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="flex-1 h-3"
              style={{
                background: i % 2 === 0
                  ? 'linear-gradient(180deg, #d4af37, #b8860b)'
                  : 'transparent',
                borderRadius: '0 0 2px 2px',
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Right Curtain Panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpened ? '105%' : 0 }}
        transition={{ duration: 2.5, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 right-0 w-[52%] h-full z-[50]"
        style={curtainStyle}
      >
        {/* Gathered edge on the left side of right panel */}
        <div
          className="absolute top-0 left-0 w-16 h-full"
          style={{
            background: 'linear-gradient(270deg, transparent, rgba(0,0,0,0.5))',
          }}
        />
        {/* Gold trim at bottom */}
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{ ...goldFringeStyle, height: '10px' }}
        />
        {/* Subtle tassel fringe */}
        <div className="absolute -bottom-3 left-0 w-full flex">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="flex-1 h-3"
              style={{
                background: i % 2 === 0
                  ? 'linear-gradient(180deg, #d4af37, #b8860b)'
                  : 'transparent',
                borderRadius: '0 0 2px 2px',
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Subtle warm spotlight glow ON the curtain */}
      <div
        className="absolute inset-0 z-[55] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 50% 40%, rgba(255,200,100,0.08) 0%, transparent 100%)',
        }}
      />

      {/* Countdown overlay — centered */}
      <div className="absolute inset-0 z-[70] flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          {countdown !== null && !isOpened && (
            <motion.div
              key={countdown}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.8, filter: 'blur(20px)' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-white font-display uppercase tracking-widest text-center"
              style={{
                fontSize: countdown.length > 3 ? 'clamp(3rem, 10vw, 8rem)' : 'clamp(5rem, 15vw, 14rem)',
                textShadow: '0 0 60px rgba(255,255,255,0.5), 0 0 120px rgba(255,200,100,0.3)',
              }}
            >
              {countdown}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* "Click to Raise Curtain" prompt */}
      {!isClicked && (
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4], y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-[80] text-white/70 uppercase tracking-[0.6em] text-sm font-bold px-8 py-3 rounded-full border border-white/20"
          style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}
        >
          Click to Raise Curtain
        </motion.div>
      )}
    </div>
  );
};

export default CurtainIntro;

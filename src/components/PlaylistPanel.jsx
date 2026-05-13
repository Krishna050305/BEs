import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, Pause, Music2, Clock3 } from 'lucide-react';

const PlaylistPanel = ({ person, onBack }) => {
  const [playingTrackId, setPlayingTrackId] = useState(null);
  const [revealedTracks, setRevealedTracks] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Use songs from the person data if available, otherwise use defaults
  const tracks = person.songs || [
    { id: 1, title: "Memory Lane", duration: "3:45", url: person.video },
    { id: 2, title: "The Best Days", duration: "4:20", url: person.video },
    { id: 3, title: person.quote || "Final Curtain", duration: "2:15", url: person.video },
  ];

  const handleTrackClick = (track) => {
    if (playingTrackId === track.id) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
      return;
    }

    // Reveal track if not already revealed
    if (!revealedTracks.includes(track.id)) {
      setRevealedTracks([...revealedTracks, track.id]);
    }

    setPlayingTrackId(track.id);
    setIsPlaying(true);
    
    if (videoRef.current) {
      videoRef.current.src = track.url;
      videoRef.current.play();
    }
  };

  const currentTrack = tracks.find(t => t.id === playingTrackId);

  return (
    <div className="relative z-10 flex flex-col">
      {/* Hidden Video for Audio Playback */}
      <video ref={videoRef} className="hidden" onEnded={() => setIsPlaying(false)} />

      {/* Header / Back Navigation */}
      <div className="p-8 pb-0">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Everyone
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12 p-8 md:p-16">
        {/* Album Cover */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative aspect-square w-64 md:w-96 rounded-lg overflow-hidden shadow-2xl flex-shrink-0"
        >
          <img 
            src={person.image} 
            alt={person.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">Playlist</span>
          <h2 className="text-5xl md:text-8xl font-display font-bold text-white mt-2 mb-4 tracking-tight leading-none">
            {person.name}
          </h2>
          <p className="text-amber-500 font-medium tracking-wide">
            This is what we feel for you
          </p>
        </div>
      </div>

      {/* Tracklist Section */}
      <div className="px-8 md:px-16 pb-32">
        <div className="max-w-4xl">
          {/* List Header */}
          <div className="grid grid-cols-[40px_1fr_100px] gap-4 px-4 py-2 border-b border-white/5 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">
            <span>#</span>
            <span>Title</span>
            <span className="flex justify-end"><Clock3 size={14} /></span>
          </div>

          {/* Tracks */}
          {tracks.map((track, index) => {
            const isRevealed = revealedTracks.includes(track.id);
            const isCurrent = playingTrackId === track.id;

            return (
              <div 
                key={track.id}
                onClick={() => handleTrackClick(track)}
                className={`group grid grid-cols-[40px_1fr_100px] gap-4 px-4 py-3 rounded-md cursor-pointer transition-colors ${isCurrent ? 'bg-white/10' : 'hover:bg-white/5'}`}
              >
                {/* Track Number / Play Icon */}
                <div className="flex items-center text-white/40 font-medium">
                  {isCurrent && isPlaying ? (
                    <div className="flex items-end gap-[2px] h-3">
                      <motion.div animate={{ height: [4, 12, 6, 10, 4] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-[3px] bg-amber-500 rounded-full" />
                      <motion.div animate={{ height: [8, 4, 12, 6, 10] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.1 }} className="w-[3px] bg-amber-500 rounded-full" />
                      <motion.div animate={{ height: [12, 6, 10, 4, 8] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-[3px] bg-amber-500 rounded-full" />
                    </div>
                  ) : (
                    <span className="group-hover:hidden">#{index + 1}</span>
                  )}
                  <Play size={14} className={`hidden group-hover:block ${isCurrent ? 'text-amber-500' : 'text-white'}`} fill="currentColor" />
                </div>

                {/* Title */}
                <div className="flex flex-col justify-center overflow-hidden">
                  <div className={`font-medium transition-all duration-700 ${isCurrent ? 'text-amber-500' : 'text-white'}`}>
                    {isRevealed ? (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {track.title}
                      </motion.span>
                    ) : (
                      <span className="blur-sm select-none opacity-40">••••••••••••••</span>
                    )}
                  </div>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{person.name}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-end text-white/40 text-xs font-mono">
                  {isRevealed ? track.duration : "?:??"}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Now Playing Bar */}
      <AnimatePresence>
        {playingTrackId && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 w-full bg-[#181818] border-t border-white/5 px-6 py-4 flex items-center justify-between z-[110] backdrop-blur-xl"
          >
            <div className="flex items-center gap-4 w-1/3">
              <div className="w-14 h-14 rounded overflow-hidden flex-shrink-0 shadow-lg">
                <img src={person.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-bold truncate">
                  {currentTrack?.title}
                </span>
                <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  {person.name}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 w-1/3">
              <button 
                onClick={() => handleTrackClick(currentTrack)}
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} className="ml-1" fill="currentColor" />}
              </button>
              {/* Fake progress bar */}
              <div className="w-full max-w-md h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isPlaying ? { width: '100%' } : {}}
                  transition={{ duration: 200, ease: "linear" }}
                  className="h-full bg-amber-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 w-1/3 text-amber-500">
               <div className="flex items-end gap-[3px] h-4">
                <motion.div animate={{ height: [4, 16, 8, 12, 4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-[3px] bg-amber-500/60 rounded-full" />
                <motion.div animate={{ height: [12, 4, 16, 8, 12] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-[3px] bg-amber-500/60 rounded-full" />
                <motion.div animate={{ height: [8, 12, 4, 16, 8] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-[3px] bg-amber-500/60 rounded-full" />
                <motion.div animate={{ height: [16, 8, 12, 4, 16] }} transition={{ repeat: Infinity, duration: 1, delay: 0.6 }} className="w-[3px] bg-amber-500/60 rounded-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlaylistPanel;

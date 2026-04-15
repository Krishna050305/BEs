import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const SENIORS = [
  {
    id: 1,
    name: 'Shreya Gawade',
    quote: "The stage was my second home, and you were my family.",
    role: "Lead Actor",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-acting-on-a-theatrical-stage-41460-large.mp4",
    image: "https://res.cloudinary.com/dgx3aoymz/image/upload/v1776276034/IMG20260108173908_wi7bdi.jpg",
    size: "large"
  },
  {
    id: 2,
    name: 'Nishikant Gawade',
    quote: "Late nights and coffee made the best memories.",
    role: "Director",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-at-night-42617-large.mp4",
    image: "https://res.cloudinary.com/dgx3aoymz/image/upload/v1776276252/IMG_20260414_140649_vfno2x.jpg",
    size: "small"
  },
  {
    id: 3,
    name: 'Pruthviraj Shinde',
    quote: "Victory is sweeter when shared with the team.",
    role: "Producer",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-holding-a-trophy-and-celebrating-41459-large.mp4",
    image: "https://res.cloudinary.com/dgx3aoymz/image/upload/v1776276052/IMG20260104193711_pwcns2.jpg",
    size: "small"
  },
  {
    id: 4,
    name: 'Nehal Shivane',
    quote: "Every end is a new beginning. Let's make it count.",
    role: "Writer",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-writing-in-a-notebook-42616-large.mp4",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800",
    size: "medium"
  },
  {
    id: 5,
    name: 'Sohan Chepe',
    quote: "Dance like the whole world is your stage.",
    role: "Choreographer",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-in-a-park-on-a-sunny-day-42622-large.mp4",
    image: "https://res.cloudinary.com/dgx3aoymz/image/upload/v1776275632/IMG_20260228_171639200_HDR_PORTRAIT_gkvzwb.jpg",
    size: "small"
  },
  {
    id: 6,
    name: 'Rinit Jain',
    quote: "Silence speaks louder than words in theatre.",
    role: "Sound Designer",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-with-headphones-listening-to-music-42621-large.mp4",
    image: "https://res.cloudinary.com/dgx3aoymz/image/upload/v1776277550/IMG-20241221-WA0003_pomyhe.jpg",
    size: "small"
  },
  {
    id: 7,
    name: 'Mira Sharma',
    quote: "Organizing chaos is where the magic happens.",
    role: "Stage Manager",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-talking-on-the-radio-while-walking-42620-large.mp4",
    image: "https://res.cloudinary.com/dgx3aoymz/image/upload/v1776277116/IMG_20241227_134311695_HDR_oho34u.jpg",
    size: "small"
  },
  {
    id: 9,
    name: 'Shravani Deshpande',
    quote: "Costumes tell a story before the actor even speaks.",
    role: "Costume Design",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-with-fabrics-on-a-table-42624-large.mp4",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: 8,
    name: 'Aditya/Aryan Gore',
    quote: "Lighting is the brush we use to paint the stage.",
    role: "Lighting Lead",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-film-set-with-lights-42623-large.mp4",
    image: "https://res.cloudinary.com/dgx3aoymz/image/upload/v1776275631/IMG_20260214_184914483_HDR_c5lihf.jpg",
    size: "large"
  },
  
  {
    id: 10,
    name: 'Srushti Thakur',
    quote: "Every prop is a piece of the character's soul.",
    role: "Prop Master",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-polishing-a-metal-object-42625-large.mp4",
    image: "https://res.cloudinary.com/dgx3aoymz/image/upload/v1776276374/IMG_20260206_161325202_HDR_ghgpqx.jpg",
    size: "medium"
  },
  {
    id: 11,
    name: 'Anuj ',
    quote: "Music is how we express the unexpressible.",
    role: "Lead Vocalist",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-singing-into-a-microphone-42626-large.mp4",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: 12,
    name: 'Aditya Sontakke',
    quote: "Building worlds from scratch is a craft.",
    role: "Set Builder",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-working-with-wood-tools-42627-large.mp4",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: 13,
    name: 'Amulya',
    quote: "Acting is finding the truth in the imaginary.",
    role: "Supporting Actress",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-acting-surprised-42628-large.mp4",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=800",
    size: "medium"
  },
  {
    id: 14,
    name: 'Sanchi Uke',
    quote: "The score is the heartbeat of the play.",
    role: "Music Composer",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-playing-the-piano-42629-large.mp4",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: 15,
    name: 'Raghav Zanwar',
    quote: "Transformation is the ultimate reward.",
    role: "Makeup Artist",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-42630-large.mp4",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: 16,
    name: 'Purti Patil',
    quote: "Every story is worth telling.",
    role: "Cast Member",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-walking-in-the-rain-42631-large.mp4",
    image: "https://res.cloudinary.com/dgx3aoymz/image/upload/v1776277441/IMG_20241224_220909412_HDR_ep8awh.jpg",
    size: "small"
  }
];

const CharacterCard = ({ senior, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layoutId={`card-${senior.id}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onClick(senior)}
      className={`relative cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-surface transition-colors hover:border-white/20
        ${senior.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
        ${senior.size === 'medium' ? 'md:col-span-2' : ''}
      `}
    >
      <div className="absolute inset-0">
        <motion.img
          src={senior.image}
          alt={senior.name}
          className={`h-full w-full object-cover transition-all duration-700 ${isHovered ? 'grayscale-0 brightness-110' : 'grayscale brightness-75'}`}
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

              <div className="md:flex h-full">
                <div className="md:w-1/2 aspect-square md:aspect-auto">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover"
                  >
                    <source src={selectedSenior.video} type="video/mp4" />
                  </video>
                </div>
                
                <div className="md:w-1/2 p-12 flex flex-col justify-center">
                  <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 mb-2">{selectedSenior.role}</span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">{selectedSenior.name}</h2>
                  <div className="w-12 h-1 bg-white/20 mb-8" />
                  <p className="text-2xl font-light italic text-white/80 leading-relaxed mb-8">
                    "{selectedSenior.quote}"
                  </p>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform">
                      View Profile <ExternalLink size={16} />
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

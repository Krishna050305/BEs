import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { SENIORS } from '../data/seniors';

const ProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const senior = SENIORS.find(s => s.id === parseInt(id));

  if (!senior) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Member not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-white text-black rounded-full font-bold"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={senior.image} 
          className="w-full h-full object-cover brightness-50"
          alt={senior.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Cast
          </button>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-accent-victory mb-2 block">{senior.role}</span>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">{senior.name}</h1>
            <p className="text-2xl md:text-3xl font-light italic text-white/80 max-w-3xl leading-relaxed">
              "{senior.quote}"
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10">About</h2>
            <div className="space-y-6">
              <div>
                <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Role</p>
                <p className="text-xl">{senior.role}</p>
              </div>
              <div>
                <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Status</p>
                <p className="text-xl">Legacy Member</p>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              Gallery <span className="text-white/20 text-lg font-normal">({senior.gallery?.length || 0} items)</span>
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {senior.gallery?.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5"
                >
                  <img 
                    src={img} 
                    alt={`${senior.name} gallery ${index}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>

            {/* Video Highlight
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-8">Video Highlight</h2>
              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster={senior.image}
                >
                  <source src={senior.video} type="video/mp4" />
                </video>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

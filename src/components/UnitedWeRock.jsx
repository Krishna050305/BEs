import React from 'react';
import { motion } from 'framer-motion';

const PHOTOS = [
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224642/IMG-20260506-WA0050_syatyk.jpg', size: 'large' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224633/IMG-20260506-WA0027_ygiscl.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224638/IMG-20260506-WA0044_rwidzv.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224644/IMG-20260506-WA0052_jyq99v.jpg', size: 'large' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224635/IMG-20260506-WA0033_itisj1.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224641/IMG-20260506-WA0045_it7ifu.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224646/WhatsApp_Image_2026-05-05_at_14.34.42_xjrqkl.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224648/WhatsApp_Image_2026-05-05_at_14.34.43_q10esb.jpg', size: 'large' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224680/WhatsApp_Image_2026-05-05_at_14.34.43-1_roje3r.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224683/IMG-20241012-WA0008_ohacx7.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224688/IMG-20260506-WA0013_ih5srk.jpg', size: 'large' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224686/IMG-20260506-WA0009_qev5g0.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224722/IMG-20260506-WA0014_jorri3.jpg', size: 'large' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224755/20241204_151016_gtdhvw.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224764/20250104_171949_t4heph.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224752/PXL_20250103_132253679_vvwcnm.jpg', size: 'medium' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224749/IMG20260228171916_tjvux6.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778225703/WhatsApp_Image_2026-05-08_at_12.51.00_ujpmiq.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778224745/IMG-20260506-WA0015_fesh88.jpg', size: 'large' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778225699/WhatsApp_Image_2026-05-08_at_12.50.57_gauocg.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778225702/WhatsApp_Image_2026-05-08_at_12.51.05_yksvh8.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778225699/WhatsApp_Image_2026-05-08_at_12.50.59_ettmi7.jpg', size: 'large' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569590/IMG-20260213-WA0004_k0x678.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569590/IMG-20260127-WA0002_va5qbi.jpg', size: 'large' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569590/IMG-20260213-WA0007_iefcvz.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569592/20260113_230737_ful5np.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569593/20260212_205443_rzpdqb.jpg', size: 'large' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569592/20251124_132238_uf6swg.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569594/IMG_0958_ydnypb.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569594/IMG_20260112_161032996_HDR_wsktvm.jpg', size: 'large' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569593/IMG_5199_mneqbs.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569594/IMG_20260117_182352_oifwvr.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569596/IMG_20260214_144437_jlo4l7.jpg', size: 'large' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569721/20260203_203415_azraen.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569722/20260103_173852_nu5sbe.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569723/IMG_1377_qg2y71.jpg', size: 'large' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569724/IMG_20260221_152816327_AE_nfjshh.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569722/20260213_220114_b2nwuv.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569724/IMG_20260221_152816327_AE_nfjshh.jpg', size: 'small' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569720/20251112_165618_ghdzza.jpg', size: 'medium' },
    { url: 'https://res.cloudinary.com/dgx3aoymz/image/upload/v1778569719/PXL_20260214_092226970_fjp4ab.jpg', size: 'large' },

];

const UnitedWeRock = () => {
  return (
    <section id="united" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="text-[10rem] md:text-[15rem] leading-none tracking-tighter metallic-text italic font-display">
            UNITED WE ROCK
          </h2>
          <div className="w-40 h-2 bg-accent-chaos mt-4 rounded-full" />
        </motion.div>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
            {PHOTOS.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
                whileHover={{ scale: 1.02, rotate: photo.size === 'small' ? 1 : -1 }}
                className={`relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/5 group
                  ${photo.size === 'large' ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-[4/3]'}
                  ${photo.size === 'medium' ? 'md:col-span-2 aspect-[16/9]' : ''}
                `}
              >
                <img 
                  src={photo.url} 
                  alt="Candid moment" 
                  className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitedWeRock;

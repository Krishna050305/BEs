import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import CurtainIntro from './components/CurtainIntro';
import Hero from './components/Hero';
import MoodModal from './components/MoodModal';
import MoodSection from './components/MoodSection';
import UnitedWeRock from './components/UnitedWeRock';
import FinalAct from './components/FinalAct';
import Footer from './components/Footer';
import CharacterGallery from './components/CharacterGallery';
import Navbar from './components/Navbar';
import ProfilePage from './components/ProfilePage';
import DedicatedPlaylist from './components/DedicatedPlaylist';
import { X } from 'lucide-react';

const MOODS_DATA = [
  {
    id: 'chaos',
    title: 'Chaos',
    description: 'The beautiful mess we called Art Circle.',
    color: 'var(--color-accent-chaos)',
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778525151/WhatsApp_Image_2026-05-06_at_00.44.46_2_bkhnui.jpg', caption: 'The early days of madness.' },
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778525212/WhatsApp_Image_2026-05-06_at_01.02.05_3_j7dogp.jpg', caption: 'Unfiltered energy.' },
       { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778525193/WhatsApp_Image_2026-05-06_at_01.02.04_2_ir3qfq.jpg', caption: 'Beautiful memories.' },
        { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778525159/WhatsApp_Image_2026-05-06_at_00.58.16_3_idxqns.jpg', caption: 'Chaos in clam.' },
        { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778525412/WhatsApp_Image_2026-05-06_at_00.58.17_dx4flv.jpg', caption: 'Unforgetable memories.' },
      
    ]
  },
  {
    id: 'late-nights',
    title: 'Late Nights',
    description: 'When the best ideas were born.',
    color: 'var(--color-accent-nights)',
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778525686/WhatsApp_Image_2026-05-12_at_00.01.58_nwnipn.jpg', caption: '3 AM study sessions.' },
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778525609/WhatsApp_Image_2026-05-06_at_01.02.05_2_bvaefj.jpg', caption: 'Project deadlines.' },
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778525557/WhatsApp_Image_2026-05-06_at_01.04.09_vmdwrv.jpg', caption: 'Quiet contemplation.' },
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778525564/WhatsApp_Image_2026-05-11_at_23.43.11_pjnyzo.jpg', caption: 'Chaos meets calm.'},
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778526000/DSCN0982_u0wahp.jpg', caption: 'Best we ever had.'},
      
    ]
  },
  {
    id: 'victory',
    title: 'Victory',
    description: 'Defining moments of triumph.',
    color: 'var(--color-accent-victory)',
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778526286/WhatsApp_Image_2026-05-12_at_00.34.16_tnydj9.jpg', caption: 'The final score.' },
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778526293/WhatsApp_Image_2026-05-12_at_00.34.17_zgyedl.jpg', caption: 'Standing tall.' },
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778526169/WhatsApp_Image_2026-05-06_at_00.44.48_1_ykvlgj.jpg', caption: 'Victory is sweet.' },
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778526163/WhatsApp_Image_2026-05-06_at_00.44.44_vmw3yn.jpg', caption: 'Happiness over everything.' },
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778526450/WhatsApp_Image_2026-05-12_at_00.34.17_1_txgsiz.jpg', caption: 'With the best.' },
    
    ]
  },
  {
    id: 'nostalgia',
    title: 'Nostalgia',
    description: 'Forever etched.',
    color: 'var(--color-accent-nostalgia)',
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778527351/WhatsApp_Image_2026-05-12_at_00.02.15_2_vbj9ab.jpg', caption: 'Looking back.' },
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778527372/WhatsApp_Image_2026-05-12_at_00.02.07_pnpud4.jpg', caption: 'Where it all started.' },
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778527402/WhatsApp_Image_2026-05-12_at_00.02.12_stjuis.jpg', caption: 'Faded photographs.' },
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778527464/WhatsApp_Image_2026-05-12_at_00.02.07_2_f8gw3s.jpg', caption: 'Beauty who??.' },
      { type: 'image', url: 'https://res.cloudinary.com/dyzb6lzgl/image/upload/q_auto/f_auto/v1778527430/WhatsApp_Image_2026-05-12_at_00.02.04_1_l3natq.jpg', caption: 'A long way.' }
      
    ]
  }
];

function App() {
  const navigate = useNavigate();
  const [showCurtain, setShowCurtain] = useState(true);
  const [isMoodModalOpen, setIsMoodModalOpen] = useState(false);
  const [selectedMoodId, setSelectedMoodId] = useState(null);
  const [currentView, setCurrentView] = useState('home'); 

  const selectedMood = MOODS_DATA.find(m => m.id === selectedMoodId);

  const handleGoHome = () => {
    setSelectedMoodId(null);
    setCurrentView('home');
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMoodSelect = (id) => {
    setSelectedMoodId(id);
    setCurrentView('mood');
    window.scrollTo({ top: 0 });
  };

  const handleNavClick = (view) => {
    if (view === 'journey') {
      setIsMoodModalOpen(true);
    } else {
      setSelectedMoodId(null);
      setCurrentView(view);
      navigate('/');
      window.scrollTo({ top: 0 });
    }
  };

  const GoBackButton = () => (
    <div className="flex justify-center py-20 bg-background">
      <button
        onClick={handleGoHome}
        className="group flex items-center gap-3 px-10 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300 uppercase tracking-[0.3em] text-sm font-bold backdrop-blur-md"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
          <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
        </svg>
        Go Back to Home
      </button>
    </div>
  );

  return (
    <div className="bg-background text-white selection:bg-white/20">
        {showCurtain && (
          <CurtainIntro onFinish={() => setShowCurtain(false)} />
        )}
        
        <main className={`transition-opacity duration-1000 ${showCurtain ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
          <Navbar onStartJourney={() => setIsMoodModalOpen(true)} onNavClick={handleNavClick} />

          <Routes>
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/" element={
              <>
                {/* HOME view */}
                {currentView === 'home' && (
                  <div className="h-screen overflow-hidden">
                    <Hero onStartJourney={() => setIsMoodModalOpen(true)} />
                  </div>
                )}

                {/* MOOD view */}
                {currentView === 'mood' && selectedMood && (
                  <>
                    <MoodSection mood={selectedMood} />
                    <CharacterGallery />
                    <GoBackButton />
                    <Footer />
                  </>
                )}

                {/* GALLERY view */}
                {currentView === 'gallery' && (
                  <>
                    <UnitedWeRock />
                    <GoBackButton />
                    <Footer />
                  </>
                )}

                {/* SPECIAL view */}
                {currentView === 'special' && (
                  <>
                    <DedicatedPlaylist />
                    <GoBackButton />
                    <Footer />
                  </>
                )}

                {/* FINAL ACT view */}
                {currentView === 'finalact' && (
                  <>
                    <FinalAct />
                    <GoBackButton />
                    <Footer />
                  </>
                )}
              </>
            } />
          </Routes>

          <MoodModal 
            isOpen={isMoodModalOpen} 
            onClose={() => setIsMoodModalOpen(false)}
            onMoodSelect={handleMoodSelect}
          />
        </main>
      </div>
    );
}

export default App;

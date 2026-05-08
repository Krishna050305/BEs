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
import { X } from 'lucide-react'; // If needed, but not really

const MOODS_DATA = [
  {
    id: 'chaos',
    title: 'Chaos',
    description: 'The beautiful mess we called college.',
    color: 'var(--color-accent-chaos)',
    media: [
      { type: 'image', url: '/assets/mood_chaos.png', caption: 'The early days of madness.' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1541532131948-3ecbb2198ed6?auto=format&fit=crop&q=80&w=800', caption: 'Unfiltered energy.' },
      { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-night-sky-out-of-focus-9721-large.mp4', caption: 'A blur of memories.' }
    ]
  },
  {
    id: 'late-nights',
    title: 'Late Nights',
    description: 'When the best ideas were born.',
    color: 'var(--color-accent-nights)',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800', caption: '3 AM study sessions.' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800', caption: 'Project deadlines.' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800', caption: 'Quiet contemplation.' }
    ]
  },
  {
    id: 'victory',
    title: 'Victory',
    description: 'Defining moments of triumph.',
    color: 'var(--color-accent-victory)',
    media: [
      { type: 'image', url: '/assets/mood_victory.png', caption: 'The final score.' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800', caption: 'Standing tall.' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1531266752426-aad4961783f7?auto=format&fit=crop&q=80&w=800', caption: 'Victory is sweet.' }
    ]
  },
  {
    id: 'nostalgia',
    title: 'Nostalgia',
    description: 'Forever etched.',
    color: 'var(--color-accent-nostalgia)',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800', caption: 'Looking back.' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800', caption: 'Where it all started.' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1496244919519-74293c41e2e6?auto=format&fit=crop&q=80&w=800', caption: 'Faded photographs.' }
    ]
  }
];

function App() {
  const navigate = useNavigate();
  const [showCurtain, setShowCurtain] = useState(true);
  const [isMoodModalOpen, setIsMoodModalOpen] = useState(false);
  const [selectedMoodId, setSelectedMoodId] = useState(null);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'mood' | 'gallery' | 'finalact'

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
          {/* Navbar — always visible after curtain */}
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

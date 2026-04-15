import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MoodSection from './components/MoodSection';
import CharacterGallery from './components/CharacterGallery';
import GroupPhotos from './components/GroupPhotos';
import FinalAct from './components/FinalAct';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-white selection:bg-accent-victory/30">
      <Navbar />
      <main>
        <Hero />
        <MoodSection />
        <CharacterGallery />
        <GroupPhotos />
        <FinalAct />
      </main>
      <Footer />
    </div>
  );
}

export default App;

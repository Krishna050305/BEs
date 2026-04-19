import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MoodSection from './components/MoodSection';
import CharacterGallery from './components/CharacterGallery';
import GroupPhotos from './components/GroupPhotos';
import FinalAct from './components/FinalAct';
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage';

const HomePage = () => (
  <>
    <Hero />
    <MoodSection />
    <CharacterGallery />
    <GroupPhotos />
    <FinalAct />
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-background text-white selection:bg-accent-victory/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

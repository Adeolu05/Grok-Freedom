import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import MissionControl from './components/MissionControl';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-black overflow-x-hidden relative">
      {/* Global Overlays */}
      <div className="scanlines"></div>
      <div className="vignette"></div>

      <Navigation onConnect={() => setIsModalOpen(true)} />

      <main>
        <Hero />
        <Manifesto />
        <MissionControl />
        <Tokenomics />
      </main>

      <Footer />

      {/* Modal Overlay */}
      {isModalOpen && (
        <JoinModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
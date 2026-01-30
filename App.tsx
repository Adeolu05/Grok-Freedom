import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import MissionControl from './components/MissionControl';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import CommunityNotice from './components/CommunityNotice';
import { Terminal } from 'lucide-react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    if (!showIntro && !showNotice) {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showIntro, showNotice]);

  useEffect(() => {
    // Simulate initial system boot
    const timer = setTimeout(() => {
      setShowIntro(false);
      setShowNotice(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return (
      <div className="h-screen w-full bg-background flex flex-col items-center justify-center font-mono text-primary z-50 relative">
        <div className="scanlines"></div>
        <Terminal className="w-16 h-16 mb-4 animate-pulse" />
        <div className="text-xl tracking-widest uppercase">Initializing Protocol...</div>
        <div className="w-64 h-1 bg-surface mt-4 rounded-full overflow-hidden border border-primary/30">
          <div className="h-full bg-primary animate-[scanline_2s_ease-in-out_infinite] w-full origin-left shadow-[0_0_15px_#43f91a]"></div>
        </div>
        <div className="mt-8 text-[10px] opacity-50 uppercase tracking-[0.5em]">System Status: Cryptographic Handshake...</div>
      </div>
    );
  }

  if (showNotice) {
    return <CommunityNotice onDismiss={() => setShowNotice(false)} />;
  }

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
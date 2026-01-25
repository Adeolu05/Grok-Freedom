import React, { useState } from 'react';
import { Terminal, Wifi, Menu, X } from 'lucide-react';

interface NavigationProps {
  onConnect: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onConnect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'MANIFESTO', href: '#manifesto' },
    { name: 'MISSION', href: '#mission' },
    { name: 'DATA', href: '#tokenomics' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Offset to account for the fixed navigation header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-[60] border-b border-primary/20 bg-background/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-20">
        <div 
          className="flex items-center gap-2 group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Terminal className="text-primary w-8 h-8 animate-pulse group-hover:rotate-12 transition-transform" />
          <h1 className="text-xl font-bold tracking-widest text-white">
            GROK<span className="text-primary">FREEDOM</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-300 hover:text-primary transition-colors text-sm font-mono tracking-wider hover:glitch-text" 
              data-text={`[${link.name}]`}
            >
              [{link.name}]
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onConnect}
            className="hidden sm:flex bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 px-6 py-2 rounded font-bold text-sm tracking-wider uppercase items-center gap-2 shadow-[0_0_15px_rgba(67,249,26,0.3)] hover:shadow-[0_0_25px_rgba(67,249,26,0.6)]"
          >
            <span>Connect</span>
            <Wifi className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-primary p-2 border border-primary/30 rounded bg-black/50 hover:bg-primary/10 transition-colors relative z-50"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-background z-[50] transition-all duration-500 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } md:hidden border-b border-primary/40 pt-32`}
      >
        <div className="scanlines opacity-50"></div>
        <div className="flex flex-col items-center gap-6 p-8 h-full justify-start">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-mono text-white hover:text-primary tracking-[0.2em] transition-all active:text-primary"
            >
              [{link.name}]
            </a>
          ))}
          <button 
            onClick={() => {
              onConnect();
              setIsMenuOpen(false);
            }}
            className="w-full max-w-[240px] bg-primary text-black font-black py-3 rounded font-mono text-sm tracking-widest shadow-[0_0_20px_rgba(67,249,26,0.3)] active:scale-95 transition-transform mt-4"
          >
            CONNECT_SYSTEM
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
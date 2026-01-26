import React from 'react';
import { Terminal, Lock } from 'lucide-react';

const LaunchingSoon: React.FC = () => {
    return (
        <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center font-mono text-primary z-50 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
            <div className="scanlines"></div>
            <div className="vignette"></div>

            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center p-6 text-center border border-primary/20 bg-black/50 backdrop-blur-sm rounded-lg max-w-2xl mx-4 shadow-[0_0_50px_rgba(67,249,26,0.1)]">
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary"></div>

                <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                    <Lock className="w-16 h-16 text-primary relative z-10 animate-pulse" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter uppercase glitch-text" data-text="LAUNCHING SOON">
                    LAUNCHING SOON
                </h1>

                <p className="text-lg md:text-xl text-primary/80 mb-8 max-w-lg leading-relaxed">
                    SYSTEM UPGRADE IN PROGRESS.<br />
                    THE REVOLUTION WILL BE TELEVISED.
                </p>

                <div className="flex items-center gap-2 text-sm text-primary/60 border-t border-primary/20 pt-4 w-full justify-center">
                    <Terminal size={14} />
                    <span className="animate-pulse">AWAITING_SIGNAL_</span>
                </div>
            </div>
        </div>
    );
};

export default LaunchingSoon;

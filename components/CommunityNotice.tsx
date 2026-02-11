import React from 'react';
import { Terminal, ShieldCheck, Users, ArrowRight, Send, Activity } from 'lucide-react';

interface CommunityNoticeProps {
    onDismiss: () => void;
}

const CommunityNotice: React.FC<CommunityNoticeProps> = ({ onDismiss }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 font-mono">
            <div className="scanlines pointer-events-none"></div>

            <div className="relative max-w-2xl w-full bg-surface border border-primary/30 p-6 md:p-8 shadow-[0_0_50px_rgba(67,249,26,0.1)] overflow-hidden">
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>

                <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <div className="p-3 bg-primary/10 border border-primary/20">
                        <Terminal className="w-8 h-8 text-primary shadow-[0_0_15px_rgba(67,249,26,0.3)]" />
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tighter uppercase glitch-text" data-text="OFFICIAL LAUNCH PROTOCOL">OFFICIAL LAUNCH PROTOCOL</h2>
                        <div className="text-[10px] text-primary/50 tracking-widest uppercase">System Status: Launch Sequence Initiated</div>
                    </div>
                </div>

                <div className="space-y-4 md:space-y-6 text-primary-dim">
                    <div className="p-4 border border-primary/20 bg-primary/5 rounded-sm">
                        <div className="text-primary font-bold text-lg md:text-xl mb-1 tracking-widest uppercase">
                            📅 February 23rd // 19:00 UTC
                        </div>
                        <div className="h-px w-full bg-primary/20 mb-3"></div>
                        <p className="text-sm md:text-base leading-relaxed text-gray-300">
                            Over the past days, we have focused on structure, alignment, and preparation. Now it’s time to execute.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
                        <div className="p-3 border border-primary/10 bg-black/40">
                            <div className="flex items-center gap-2 mb-1">
                                <ShieldCheck className="w-3 h-3 text-primary" />
                                <span className="font-bold text-[10px] text-primary uppercase">Preparation 01</span>
                            </div>
                            <p className="text-[11px]">Wallet ready</p>
                        </div>
                        <div className="p-3 border border-primary/10 bg-black/40">
                            <div className="flex items-center gap-2 mb-1">
                                <Activity className="w-3 h-3 text-primary" />
                                <span className="font-bold text-[10px] text-primary uppercase">Preparation 02</span>
                            </div>
                            <p className="text-[11px]">Network configured</p>
                        </div>
                        <div className="p-3 border border-primary/10 bg-black/40">
                            <div className="flex items-center gap-2 mb-1">
                                <Users className="w-3 h-3 text-primary" />
                                <span className="font-bold text-[10px] text-primary uppercase">Preparation 03</span>
                            </div>
                            <p className="text-[11px]">Channels monitored</p>
                        </div>
                    </div>

                    <div className="space-y-2 border-l-2 border-primary/30 pl-4 py-1 italic text-xs md:text-sm text-primary/80">
                        <p>This is the beginning of the next phase.</p>
                        <p>Stay focused. Stay disciplined.</p>
                        <p className="font-bold text-primary">Launches reward preparation.</p>
                    </div>

                    <p className="text-center italic text-primary font-black tracking-[0.4em] pt-4 uppercase text-sm md:text-base animate-pulse">
                        Grok Freedom.
                    </p>
                </div>

                <div className="mt-8 md:mt-10 flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a
                        href="https://t.me/GrokFreedomCommunity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-full md:w-auto px-8 py-3 bg-transparent text-primary font-bold uppercase tracking-widest transition-all hover:bg-primary/10 border border-primary overflow-hidden flex items-center justify-center gap-2"
                    >
                        <Send className="w-4 h-4" />
                        Join Telegram
                    </a>

                    <button
                        onClick={onDismiss}
                        className="group relative w-full md:w-auto px-8 py-3 bg-primary text-black font-bold uppercase tracking-widest transition-all hover:bg-black hover:text-primary border border-primary overflow-hidden flex items-center justify-center gap-2"
                    >
                        <span>Access Site</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
                <div className="mt-4 text-center text-[10px] text-primary/30 uppercase tracking-[0.2em]">Authorized Access Only</div>
            </div>
        </div>
    );
};

export default CommunityNotice;

import React from 'react';
import { AlertCircle, ShieldCheck, Users, ArrowRight, Send } from 'lucide-react';

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
                        <ShieldCheck className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tighter uppercase">Community Notice</h2>
                        <div className="text-[10px] text-primary/50 tracking-widest uppercase">Protocol Status: Pending Launch</div>
                    </div>
                </div>

                <div className="space-y-4 md:space-y-6 text-primary-dim">
                    <p className="text-base md:text-lg leading-relaxed border-l-2 border-primary/30 pl-4 bg-primary/5 py-2">
                        The launch will take place once we reach <span className="text-primary font-bold">150 active and participating members</span> in our community.
                    </p>

                    <p className="leading-relaxed text-sm md:text-base">
                        Our priority is to build a strong and engaged base before moving forward. A healthy project starts with real people, real participation, and real support.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 md:my-8 text-[11px] md:text-xs">
                        <div className="p-4 border border-primary/10 bg-primary/5">
                            <div className="flex items-center gap-2 mb-2">
                                <Users className="w-4 h-4 text-primary" />
                                <span className="font-bold text-primary uppercase">Mission</span>
                            </div>
                            <p>Invite others, stay active, and help spread Grok Freedom.</p>
                        </div>
                        <div className="p-4 border border-primary/10 bg-primary/5">
                            <div className="flex items-center gap-2 mb-2">
                                <AlertCircle className="w-4 h-4 text-primary" />
                                <span className="font-bold text-primary uppercase">Next Phase</span>
                            </div>
                            <p>Once we hit 150 active members, the next phase begins.</p>
                        </div>
                    </div>

                    <p className="text-center italic text-primary font-bold tracking-widest pt-2 uppercase text-xs md:text-sm">
                        Grok Freedom moves forward together.
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

import React, { useState, useEffect } from 'react';
import { X, Volume2, Send, Copy, Check, ArrowUpRight } from 'lucide-react';

interface JoinModalProps {
    onClose: () => void;
}

const JoinModal: React.FC<JoinModalProps> = ({ onClose }) => {
    const [scanProgress, setScanProgress] = useState(0);
    const [caCopied, setCaCopied] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setScanProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);
        return () => clearInterval(interval);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText("2UpC3tjsWS7TdAXcgJn9atxihtxT74zNYKLiDf4Gpump");
        setCaCopied(true);
        setTimeout(() => setCaCopied(false), 2000);
    };

    const pumpLink = "https://pump.fun/coin/2UpC3tjsWS7TdAXcgJn9atxihtxT74zNYKLiDf4Gpump";

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

            {/* Main Container */}
            <div className="relative w-full max-w-2xl mx-auto">
                <div className="relative group">
                    {/* Glowing Border Animation */}
                    <div className="absolute -inset-0.5 bg-primary/40 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                    {/* Card Content */}
                    <div className="relative bg-[#0a0f0a] border border-primary/50 rounded-lg shadow-2xl overflow-hidden">
                        {/* Corner Decorations */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg"></div>

                        {/* Abort Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-primary z-50 group/close"
                        >
                            <div className="flex items-center gap-2 text-xs font-mono border border-primary/30 px-2 py-1 rounded bg-black/50 hover:bg-primary hover:text-black transition-colors">
                                [ ABORT ]
                                <X size={14} />
                            </div>
                        </button>

                        <div className="flex flex-col p-2 sm:p-4">
                            {/* Header */}
                            <div className="flex flex-col items-center justify-center pt-8 pb-4 relative">
                                <div className="flex items-center gap-3 bg-red-900/20 border border-red-500/30 px-6 py-2 rounded-full mb-4">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </span>
                                    <h4 className="text-red-400 text-xs font-bold tracking-[0.15em] font-mono">[ SYSTEM ALERT: SIGNAL DETECTED ]</h4>
                                </div>

                                <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight text-center px-4 leading-none crt-flicker mt-2">
                                    JOIN THE <span className="text-primary text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary-dim">RESISTANCE</span>
                                </h1>

                                <h2 className="text-gray-400 tracking-widest text-lg md:text-xl font-medium mt-4 text-center px-4 italic border-b border-primary/20 pb-4 w-3/4">
                                    "FREEDOM IS THE ONLY PROTOCOL."
                                </h2>
                            </div>

                            {/* Buttons */}
                            <div className="px-6 py-4 md:px-12">
                                <div className="flex flex-col gap-4 max-w-[480px] mx-auto">
                                    <ActionButton label="BUY ON PUMPFUN" icon={<ArrowUpRight />} href={pumpLink} />
                                    <ActionButton label="ECHO ON X" icon={<Volume2 />} href="https://x.com/GrokFreedom" />
                                    <ActionButton label="RECRUIT ON TELEGRAM" icon={<Send />} href="https://t.me/GrokFreedomCommunity" />
                                </div>
                            </div>

                            {/* Copy Signal */}
                            <div className="px-6 pb-8 md:px-12 mt-2">
                                <div className="max-w-[480px] mx-auto bg-black/40 border border-primary/20 rounded p-4 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/50 animate-[scanline_3s_linear_infinite] shadow-[0_0_10px_#43f91a]"></div>
                                    <label className="block text-primary/80 text-xs font-mono mb-2 tracking-widest uppercase">
                                        &gt; Copy The Signal
                                    </label>
                                    <div className="flex items-stretch gap-2">
                                        <div className="relative flex-1 group">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-primary/50 text-xs font-mono">CA:</span>
                                            </div>
                                            <input
                                                className="w-full bg-[#050a04] text-white font-mono text-sm border border-primary/30 rounded pl-10 pr-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder-gray-600 truncate shadow-inner shadow-black/50"
                                                readOnly
                                                type="text"
                                                value="2UpC3tjsWS7TdAXcgJn9atxihtxT74zNYKLiDf4Gpump"
                                            />
                                        </div>
                                        <button
                                            onClick={handleCopy}
                                            className="bg-primary/10 hover:bg-primary hover:text-black border border-primary text-primary px-4 rounded transition-colors flex items-center justify-center group/btn active:scale-95"
                                        >
                                            {caCopied ? <Check /> : <Copy className="group-hover/btn:scale-110 transition-transform" />}
                                        </button>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mt-4 flex items-center gap-2">
                                        <span className="text-[10px] text-primary/60 font-mono animate-pulse">SCANNING...</span>
                                        <div className="h-1.5 flex-1 bg-black/60 rounded-full overflow-hidden border border-primary/20">
                                            <div
                                                className="h-full bg-primary shadow-[0_0_8px_#43f91a] relative transition-all duration-100 ease-out"
                                                style={{ width: `${scanProgress}%` }}
                                            >
                                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse"></div>
                                            </div>
                                        </div>
                                        <span className="text-[10px] text-primary font-mono w-6 text-right">{scanProgress}%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Code */}
                            <div className="absolute bottom-2 left-4 text-[8px] text-primary/20 font-mono select-none pointer-events-none">
                                SESSION_ID: 0x9F2...A1<br />
                                ENCRYPTION: AES-256
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ActionButton: React.FC<{ label: string; icon: React.ReactNode; href?: string }> = ({ label, icon, href }) => {
    const Wrapper = href ? 'a' : 'button';
    const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        // @ts-ignore
        <Wrapper {...props} className="group relative flex items-center justify-between w-full h-14 px-6 bg-transparent border border-primary text-primary hover:text-black hover:bg-primary rounded-sm transition-all duration-200 overflow-hidden cursor-pointer">
            <span className="absolute left-0 w-1 h-full bg-primary/50 transform -skew-x-12 -translate-x-4 group-hover:translate-x-0 transition-transform duration-300"></span>
            <div className="flex items-center gap-3 relative z-10 font-mono font-bold tracking-wider">
                <span className="text-lg opacity-50 group-hover:opacity-100 transition-opacity">[</span>
                <span>{label}</span>
                <span className="text-lg opacity-50 group-hover:opacity-100 transition-opacity">]</span>
            </div>
            <div className="relative z-10 group-hover:scale-110 transition-transform">
                {icon}
            </div>
        </Wrapper>
    );
};

export default JoinModal;
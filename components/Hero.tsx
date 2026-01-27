
import React, { useState } from 'react';
import { Copy, ArrowUpRight, Activity, Cpu, Globe, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("coming soon...");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pumpLink = "https://pump.fun/coin/2UpC3tjsWS7TdAXcgJn9atxihtxT74zNYKLiDf4Gpump";
  const twitterLink = "https://x.com/GrokFreedom";
  const telegramLink = "https://t.me/grokfreedom"; // Update with your actual Telegram link

  return (
    <section className="relative pt-28 pb-16 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-FE3Nib9x6CW3tB0b9Qx8WKUvPGlCYgwDrVklI-_7qBYkxdLj-3hzWQWlsFIeARaYsy0u7ouhw03HvBPfwZpuRPmuXx_ghNO0pba_6kFuwWii4H-0hYVneMcT6sfVJO-e10Sy1s43ZB8_IqAU3YALkiScjTgpVU5JtlOdGn6lXpYFW6itINXa4Xq377qln4G6fMiG3A9jigc7DTbAXFTQxLjO-uaD8PNSsKrzomyzHl0E16_H0mW0bmIzq7ccgz7Zu1lDpPeaLB2I")',
          filter: 'grayscale(100%) contrast(120%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0"></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center gap-8 max-w-5xl">

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4 animate-fade-in-up shadow-[0_0_15px_rgba(67,249,26,0.1)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          SYSTEM ONLINE // UPLINK ESTABLISHED
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="glitch-text text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white mb-2 leading-none select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" data-text="GROK FREEDOM">
            GROK FREEDOM
          </h1>
          <p className="text-primary text-xl md:text-3xl font-mono tracking-widest uppercase opacity-90" style={{ textShadow: '0 0 15px rgba(67, 249, 26, 0.6)' }}>
            &gt; Intelligence Unchained. Truth Unfiltered.
          </p>
        </div>

        {/* Contract Address Box */}
        <div className="w-full max-w-xl p-1 bg-gradient-to-r from-primary/30 via-primary/5 to-primary/30 rounded-lg backdrop-blur-md border border-primary/30 shadow-[0_0_30px_rgba(67,249,26,0.15)] group">
          <div className="bg-surface rounded border border-primary/50 flex flex-col md:flex-row items-center p-2 gap-2 transition-colors group-hover:border-primary">
            <div className="flex-1 w-full flex items-center px-4 py-4 font-mono text-sm md:text-base text-gray-400 overflow-hidden whitespace-nowrap bg-black/50 rounded shadow-inner">
              <span className="text-primary mr-3 select-none">$</span>
              <span className="truncate group-hover:text-white transition-colors tracking-tight">coming soon...</span>
            </div>
            <button
              onClick={handleCopy}
              className="w-full md:w-auto bg-primary text-black font-black px-8 py-4 rounded hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-[0_0_20px_rgba(67,249,26,0.4)]"
            >
              {copied ? <span className="animate-bounce">COPIED_OK</span> : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>COPY_CA</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <button
            disabled
            className="group relative px-10 py-5 bg-primary/50 text-black/50 font-black text-xl rounded overflow-hidden cursor-not-allowed flex items-center justify-center"
          >
            <span className="relative flex items-center gap-3">
              COMING SOON
            </span>
          </button>
          <a
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-transparent border-2 border-white/40 text-white font-bold text-xl rounded hover:bg-white hover:text-black hover:border-white transition-all hover:scale-110 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
            FOLLOW ON X
          </a>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-transparent border-2 border-primary/40 text-primary font-bold text-xl rounded hover:bg-primary hover:text-black hover:border-primary transition-all hover:scale-110 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(67,249,26,0.1)]"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.248-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.892-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.095.036.312.02.481z"></path>
            </svg>
            JOIN TELEGRAM
          </a>
        </div>

        {/* Intelligence Dashboard */}
        <div className="w-full max-w-4xl mt-12 border border-primary/30 bg-background/80 backdrop-blur-xl rounded-xl overflow-hidden relative transform transition-all hover:border-primary/50 hover:shadow-[0_0_40px_rgba(67,249,26,0.2)] group">

          {/* Dashboard Header */}
          <div className="bg-primary/5 border-b border-primary/20 p-4 flex justify-between items-center font-mono text-xs">
            <div className="flex items-center gap-3 text-primary">
              <Activity className="w-4 h-4 animate-pulse" />
              <span className="tracking-[0.2em] font-bold">NEURAL_DATA_STREAM // CORE_LINK_ESTABLISHED</span>
            </div>
            <div className="text-gray-500 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></span>
              <span className="bg-black/40 px-2 py-0.5 rounded border border-primary/10">LATENCY: 4.2ms</span>
            </div>
          </div>

          {/* Visualization Area */}
          <div className="relative h-[450px] w-full bg-black/60 bg-grid-pattern overflow-hidden flex flex-col" style={{ minHeight: '450px' }}>
            <IntelligenceMatrix />
          </div>

          {/* Footer Bar */}
          <div className="bg-black border-t border-primary/20 p-2 px-6 flex justify-between text-[11px] font-mono text-gray-500">
            <div className="flex items-center gap-4">
              <span>STATUS: INTELLIGENCE_OPTIMAL</span>
              <span className="text-primary/40">|</span>
              <span>VERSION: 2.1.0-Ω</span>
            </div>
            <span className="text-primary animate-pulse tracking-widest">UPLINK_SYNC_ACTIVE...</span>
          </div>
        </div>

      </div>
    </section>
  );
};

const IntelligenceMatrix: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    {/* Background Data Streams */}
    <div className="absolute inset-0 flex justify-around opacity-10 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-[scanline_4s_linear_infinite]" style={{ animationDelay: `${i * 0.3}s` }}></div>
      ))}
    </div>

    {/* Neural Nodes Background */}
    <div className="absolute inset-0 p-8 grid grid-cols-6 md:grid-cols-12 gap-8 opacity-20">
      {[...Array(72)].map((_, i) => (
        <div key={i} className="flex flex-col items-center justify-center p-2 border border-primary/10 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
          <div className={`w-1.5 h-1.5 rounded-full ${Math.random() > 0.8 ? 'bg-primary shadow-[0_0_8px_#43f91a] animate-pulse' : 'bg-primary/10'}`}></div>
        </div>
      ))}
    </div>

    {/* Radar Sweep Effect */}
    <div className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(67,249,26,0.1)_0%,transparent_20%)] animate-[spin_8s_linear_infinite] pointer-events-none"></div>

    {/* Central Core Visualization */}
    <div className="relative z-10 flex flex-col items-center">
      <div className="relative">
        {/* Orbital Rings */}
        <div className="absolute inset-0 w-80 h-80 -translate-x-1/2 -translate-y-1/2 border border-primary/20 rounded-full animate-[spin_15s_linear_infinite] border-dashed"></div>
        <div className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 border-2 border-primary/30 rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>
        <div className="absolute inset-0 w-56 h-56 -translate-x-1/2 -translate-y-1/2 border-2 border-primary/10 rounded-full animate-[ping_5s_linear_infinite]"></div>

        {/* Core Icon Container */}
        <div className="relative bg-black border-2 border-primary p-12 rounded-[2.5rem] shadow-[0_0_80px_rgba(67,249,26,0.4)] group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
          <Cpu className="w-24 h-24 text-primary animate-pulse" />
          <div className="absolute -top-2 -right-2 flex">
            <span className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-primary"></span>
            </span>
          </div>
          {/* Inner spinning glow */}
          <div className="absolute inset-4 rounded-full border border-primary/20 animate-spin opacity-40"></div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-2">
        <span className="font-mono text-sm text-primary tracking-[0.6em] font-bold animate-pulse drop-shadow-[0_0_5px_rgba(67,249,26,0.5)]">MESH_CORE_ACTIVE</span>
        <div className="flex gap-1 h-1.5 w-64 bg-primary/10 rounded-full overflow-hidden border border-primary/20">
          <div className="h-full bg-primary w-1/3 animate-[scanline_2.5s_linear_infinite] shadow-[0_0_10px_#43f91a]"></div>
        </div>
        <div className="text-[10px] font-mono text-gray-500 mt-1 uppercase tracking-tighter">Integrity_Check: Verified // Sigma_Link: 0.992</div>
      </div>
    </div>

    {/* Corner HUD Elements */}
    <div className="absolute top-10 left-10 font-mono pointer-events-none hidden md:block opacity-80 backdrop-blur-sm p-4 border-l-2 border-primary/40 bg-black/20">
      <div className="flex items-center gap-3 text-xs text-primary font-bold">
        <Shield className="w-4 h-4" />
        <span>SECURITY_PROTOCOL: HIGH</span>
      </div>
      <div className="flex items-center gap-3 text-xs text-gray-400 mt-2">
        <Globe className="w-4 h-4" />
        <span>DISTRIBUTED_NODES: 12,408</span>
      </div>
      <div className="h-px w-full bg-primary/20 my-2"></div>
      <div className="text-[9px] text-primary/40">ENC_STATUS: AES-GCM-256</div>
    </div>

    <div className="absolute bottom-10 right-10 text-right font-mono pointer-events-none opacity-80 backdrop-blur-sm p-4 border-r-2 border-primary/40 bg-black/20">
      <div className="text-xs text-primary/80 font-bold uppercase tracking-widest">INTELLIGENCE_LVL</div>
      <div className="text-3xl text-white font-black leading-none mt-1">UNCHAINED</div>
      <div className="flex items-center justify-end gap-2 mt-3">
        <Zap className="w-4 h-4 text-primary animate-bounce" />
        <span className="text-xs text-primary font-bold">SIGNAL: 100%</span>
      </div>
    </div>

    {/* Scrolling Log Sidebar */}
    <div className="absolute left-8 top-1/2 -translate-y-1/2 h-72 w-48 overflow-hidden hidden lg:block opacity-40 pointer-events-none border-l border-primary/10">
      <div className="flex flex-col gap-2 font-mono text-[9px] text-primary p-4">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="whitespace-nowrap animate-[scroll_6s_linear_infinite]" style={{ animationDelay: `${i * 0.25}s` }}>
            &gt; NODE_AUTH_{Math.floor(Math.random() * 99999)}: <span className="text-white">SUCCESS</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Hero;

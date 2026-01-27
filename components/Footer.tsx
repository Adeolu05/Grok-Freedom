import React from 'react';
import { Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-8 mb-12">
          <SocialIcon
            icon={
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            }
            label="X"
            href="https://x.com/GrokFreedom"
          />
          <SocialIcon icon={<Send className="w-5 h-5 fill-current" />} label="Telegram" href="https://t.me/GrokFreedomCommunity" />
        </div>

        <div className="text-center max-w-2xl">
          <p className="text-[10px] md:text-xs text-gray-600 font-mono leading-relaxed">
            DISCLAIMER: $GROKF IS A MEMECOIN WITH NO INTRINSIC VALUE OR EXPECTATION OF FINANCIAL RETURN. THE TOKEN IS FOR ENTERTAINMENT PURPOSES ONLY. WE ARE NOT AFFILIATED WITH xAI OR ELON MUSK. THE SYSTEM IS WATCHING.
          </p>
          <p className="text-[10px] text-gray-700 font-mono mt-4">
            © 2026 GROK FREEDOM INITIATIVE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode; label: string; href?: string }> = ({ icon, label, href }) => (
  <a href={href || "#"} target={href ? "_blank" : undefined} rel={href ? "noopener noreferrer" : undefined} className="group flex flex-col items-center gap-2">
    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:shadow-[0_0_15px_rgba(67,249,26,0.5)] transition-all duration-300">
      {icon}
    </div>
    <span className="text-[10px] font-mono text-gray-500 group-hover:text-primary uppercase tracking-widest transition-colors">{label}</span>
  </a>
);

export default Footer;
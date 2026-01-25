import React from 'react';
import { Database, DollarSign, Network } from 'lucide-react';

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-24 bg-surface border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-2 block animate-pulse">System Configuration</span>
          <h2 className="text-4xl font-bold text-white">TOKENOMICS</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TokenCard 
            label="NETWORK_ID" 
            value="SOLANA" 
            icon={<Network className="group-hover:rotate-180 transition-transform duration-700" />} 
            barWidth="100%"
            anim="animate-pulse-slow"
          />
          <TokenCard 
            label="ASSET_TICKER" 
            value="$GROKF" 
            icon={<DollarSign />} 
            barWidth="90%"
          />
          <TokenCard 
            label="TOTAL_SUPPLY" 
            value="1,000,000,000" 
            icon={<Database />} 
            barWidth="100%"
          />
        </div>
      </div>
    </section>
  );
};

const TokenCard: React.FC<{ 
  label: string; 
  value: string; 
  icon?: React.ReactNode; 
  barWidth: string; 
  anim?: string; 
  hideBarFill?: boolean;
  hideBar?: boolean;
}> = ({ label, value, icon, barWidth, anim, hideBarFill, hideBar }) => (
  <div className="bg-black border border-primary/30 p-6 rounded hover:shadow-[0_0_20px_rgba(67,249,26,0.2)] transition-all group hover:-translate-y-1">
    <div className="flex items-center justify-between mb-4">
      <span className="text-gray-500 font-mono text-xs">{label}</span>
      {icon && <span className="text-primary">{icon}</span>}
    </div>
    <p className="text-3xl font-bold text-white group-hover:text-primary transition-colors">{value}</p>
    {!hideBar && (
      <div className="w-full bg-gray-800 h-1 mt-4 rounded-full overflow-hidden">
        {!hideBarFill && (
            <div className={`bg-primary h-full ${anim || ''}`} style={{ width: barWidth }}></div>
        )}
      </div>
    )}
  </div>
);

export default Tokenomics;
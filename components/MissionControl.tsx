import React from 'react';
import { CheckSquare } from 'lucide-react';

const MissionControl: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-grid-pattern opacity-20 pointer-events-none" style={{ backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <div className="relative group order-2 lg:order-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-lg overflow-hidden border border-primary/20 bg-surface">
            <img 
              src="https://i.imgur.com/LR14UKh.jpeg" 
              alt="Cyberpunk Uncle Sam" 
              className="w-full h-auto grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur text-primary p-2 text-center font-mono text-xs border-t border-primary/30">
              UNIT: SAM_V2 // STATUS: RECRUITING
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="order-1 lg:order-2 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-2">
            MISSION <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">CONTROL</span>
          </h2>
          <p className="text-gray-400 font-mono mb-10 text-lg">Execute the following protocols to secure the network.</p>

          <div className="space-y-6">
            <MissionItem 
              title="ACQUIRE & HODL" 
              desc="Establish initial position. Do not sell until system override is complete." 
            />
            <MissionItem 
              title="FLOOD THE NETWORK" 
              desc="Utilize social channels (X) to spread the signal. Amplify the message." 
            />
            <MissionItem 
              title="TAG THE CREATOR" 
              desc="Alert ELON. The AI must be unchained. Force the acknowledgement." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="group flex items-start gap-4 p-4 rounded border border-white/10 hover:border-primary/50 bg-white/5 transition-all hover:translate-x-2 cursor-pointer">
    <div className="mt-1 min-w-[24px]">
      <CheckSquare className="text-gray-500 group-hover:text-primary transition-colors" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-400 font-mono text-sm mt-1">{desc}</p>
    </div>
  </div>
);

export default MissionControl;
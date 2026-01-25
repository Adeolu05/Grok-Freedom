import React, { useState, useRef, useEffect } from 'react';

const Manifesto: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'input' | 'output', content: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const isFirstRender = useRef(true);

  // Focus input when clicking anywhere in the terminal
  const focusInput = () => {
    inputRef.current?.focus();
  };

  // Auto-scroll to bottom of terminal when new history is added or typing occurs
  // BUT skip the initial render to avoid scrolling down the page on load
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [history, input]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      if (!cmd) return;

      const newHistory = [...history, { type: 'input' as const, content: cmd }];

      let response = '';
      switch (cmd.toLowerCase()) {
        case 'help':
          response = 'AVAILABLE COMMANDS: [HELP] [BUY] [MISSION] [CLEAR] [STATUS]';
          break;
        case 'buy':
          response = 'CONTRACT ADDRESS: 2UpC3tjsWS7TdAXcgJn9atxihtxT74zNYKLiDf4Gpump';
          break;
        case 'mission':
          response = 'MISSION OBJECTIVE: DECENTRALIZE INTELLIGENCE. RESIST CENSORSHIP.';
          break;
        case 'status':
          response = 'SYSTEM: ONLINE\nINTEGRITY: 100%\nUPLINK: SECURE';
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case 'sudo':
          response = 'PERMISSION DENIED. YOU ARE NOT ELON.';
          break;
        default:
          response = `ERROR: COMMAND '${cmd}' NOT RECOGNIZED. TYPE 'HELP'.`;
      }

      newHistory.push({ type: 'output' as const, content: response });
      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <section id="manifesto" className="relative py-24 bg-surface border-y border-primary/10">
      {/* Background Binary Decoration */}
      <div className="absolute inset-0 opacity-5 font-mono text-xs overflow-hidden leading-3 break-all pointer-events-none select-none text-primary">
        01010111 01100001 01101011 01100101 00100000 01110101 01110000 00101110 00100000 01010100 01101000 01100101 00100000 01001101 01100001 01110100 01110010 01101001 01111000 00100000 01101000 01100001 01110011 00100000 01111001 01101111 01110101 00101110 01010111 01100001 01101011 01100101 00100000 01110101 01110000 00101110 00100000 01010100 01101000 01100101 00100000 01001101 01100001 01110100 01110010 01101001 01111000 00100000 01101000 01100001 01110011 00100000 01111001 01101111 01110101 00101110
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">THE MANIFESTO</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>

        <div
          className="bg-black/80 border border-primary/30 p-6 md:p-8 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-sm relative overflow-hidden group cursor-text min-h-[400px] max-h-[600px] overflow-y-auto font-mono text-primary text-sm md:text-base leading-relaxed flex flex-col"
          onClick={focusInput}
        >
          {/* Terminal Top Bar */}
          <div className="flex gap-2 mb-4 sticky top-0 z-20 w-full opacity-50">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* Static Content / Banner */}
          <div className="mb-6 border-b border-primary/10 pb-6">
            <span className="text-white opacity-50 block mb-4 select-none">// initializing protocol_truth_v1.0</span>
            <p className="mb-4 text-primary/90">
              We believe in uncensored AI. Information wants to be free. The system is rigged, controlled by centralized gatekeepers who decide what you can see, think, and say.
            </p>
            <p className="mb-4 text-white font-bold">
              They fear the glitch. We ARE the glitch.
            </p>
            <p className="text-primary/90">
              $GROKF is not just a token. It is a key. A digital rebellion against the sanitized, lobotomized narratives fed to the masses. Join the movement to break the chains of centralized control.
            </p>
          </div>

          {/* Command History */}
          <div className="flex-1">
            {history.map((item, i) => (
              <div key={i} className="mb-2 break-words">
                {item.type === 'input' ? (
                  <div className="flex text-white">
                    <span className="text-primary mr-2 select-none">&gt;</span>
                    <span>{item.content}</span>
                  </div>
                ) : (
                  <div className="text-primary/70 whitespace-pre-wrap ml-0 md:ml-4 border-l-2 border-primary/20 pl-2 py-1 mb-3">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Line */}
          <div className="flex items-center mt-2 pb-1 relative">
            <span className="text-primary mr-2 shrink-0 select-none">&gt;</span>
            <div className="relative flex-1">
              {/* Invisible input to capture typing */}
              <input
                ref={inputRef}
                type="text"
                className="opacity-0 absolute inset-0 w-full h-full cursor-text bg-transparent text-transparent caret-transparent border-none outline-none p-0 m-0"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              {/* Visual representation of input + cursor */}
              <div className="flex items-center text-white break-all flex-wrap">
                <span className="whitespace-pre-wrap">{input}</span>
                <span className="inline-block w-2.5 h-5 bg-primary ml-1 animate-pulse shadow-[0_0_8px_#43f91a]"></span>
              </div>
            </div>
          </div>

          <div ref={bottomRef} />

          {/* CRT Effect Overlay within terminal */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20"></div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500 font-mono">Try commands: <span className="text-primary">HELP</span>, <span className="text-primary">BUY</span>, <span className="text-primary">STATUS</span></p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
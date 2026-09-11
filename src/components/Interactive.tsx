import { useState } from 'react';

// ============================================
// Code Playground - Interactive Code Editor
// ============================================
export function CodePlayground({ 
  initialCode, 
  expectedOutput, 
  language = 'javascript' 
}: { 
  initialCode: string; 
  expectedOutput?: string;
  language?: string;
}) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runCode = () => {
    setError(null);
    try {
      if (language === 'javascript') {
        const logs: string[] = [];
        const mockConsole = {
          log: (...args: any[]) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
          error: (...args: any[]) => logs.push('Error: ' + args.join(' ')),
          warn: (...args: any[]) => logs.push('Warning: ' + args.join(' ')),
        };
        
        const fn = new Function('console', code);
        fn(mockConsole);
        setOutput(logs.join('\n') || '(no output)');
      }
    } catch (e: any) {
      setError(e.message);
      setOutput(null);
    }
  };

  return (
    <div className="rounded-xl border border-slate-700/50 overflow-hidden my-6">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b border-slate-700/50">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="text-xs text-slate-500 mr-2 font-mono">Playground</span>
        <button onClick={runCode}
          className="mr-auto flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-md text-xs font-medium hover:bg-emerald-500/30 transition-colors">
          ▶ Run
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-l border-slate-700/50 md:border-l-0 md:border-r">
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            className="w-full h-64 p-4 bg-[#0d1117] text-slate-300 font-mono text-sm resize-none focus:outline-none"
            dir="ltr"
            spellCheck={false}
          />
        </div>
        <div className="bg-[#0d1117] p-4 h-64 overflow-auto">
          <div className="text-xs text-slate-500 mb-2 font-mono">Output:</div>
          {error && (
            <div className="text-red-400 text-sm font-mono">{error}</div>
          )}
          {output && (
            <pre className="text-emerald-400 text-sm font-mono whitespace-pre-wrap">{output}</pre>
          )}
          {!output && !error && (
            <div className="text-slate-600 text-sm">Click "Run" to execute</div>
          )}
        </div>
      </div>
      {expectedOutput && (
        <div className="px-4 py-2 bg-slate-800/50 border-t border-slate-700/50 text-xs text-slate-400">
          <span className="text-slate-500">Expected: </span>
          <span className="text-cyan-400 font-mono">{expectedOutput}</span>
        </div>
      )}
    </div>
  );
}

// ============================================
// Visual Diagram - SVG-based
// ============================================
export function VisualDiagram({ type }: { type: string }) {
  if (type === 'dom-tree') {
    return (
      <div className="my-6 p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
        <svg viewBox="0 0 600 300" className="w-full h-auto">
          {/* Root */}
          <rect x="250" y="20" width="100" height="40" rx="8" fill="#4f46e5" opacity="0.2" stroke="#4f46e5" strokeWidth="2"/>
          <text x="300" y="45" textAnchor="middle" fill="#818cf8" fontSize="14" fontFamily="Vazirmatn">html</text>
          
          {/* Lines */}
          <line x1="300" y1="60" x2="150" y2="100" stroke="#4f46e5" strokeWidth="2" opacity="0.5"/>
          <line x1="300" y1="60" x2="450" y2="100" stroke="#4f46e5" strokeWidth="2" opacity="0.5"/>
          
          {/* Head & Body */}
          <rect x="100" y="100" width="100" height="40" rx="8" fill="#06b6d4" opacity="0.2" stroke="#06b6d4" strokeWidth="2"/>
          <text x="150" y="125" textAnchor="middle" fill="#67e8f9" fontSize="14" fontFamily="Vazirmatn">head</text>
          
          <rect x="400" y="100" width="100" height="40" rx="8" fill="#06b6d4" opacity="0.2" stroke="#06b6d4" strokeWidth="2"/>
          <text x="450" y="125" textAnchor="middle" fill="#67e8f9" fontSize="14" fontFamily="Vazirmatn">body</text>
          
          {/* Body children */}
          <line x1="450" y1="140" x2="350" y2="180" stroke="#06b6d4" strokeWidth="2" opacity="0.5"/>
          <line x1="450" y1="140" x2="450" y2="180" stroke="#06b6d4" strokeWidth="2" opacity="0.5"/>
          <line x1="450" y1="140" x2="550" y2="180" stroke="#06b6d4" strokeWidth="2" opacity="0.5"/>
          
          <rect x="300" y="180" width="100" height="40" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="2"/>
          <text x="350" y="205" textAnchor="middle" fill="#6ee7b7" fontSize="14" fontFamily="Vazirmatn">header</text>
          
          <rect x="400" y="180" width="100" height="40" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="2"/>
          <text x="450" y="205" textAnchor="middle" fill="#6ee7b7" fontSize="14" fontFamily="Vazirmatn">main</text>
          
          <rect x="500" y="180" width="100" height="40" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="2"/>
          <text x="550" y="205" textAnchor="middle" fill="#6ee7b7" fontSize="14" fontFamily="Vazirmatn">footer</text>
          
          {/* Main children */}
          <line x1="450" y1="220" x2="400" y2="260" stroke="#10b981" strokeWidth="2" opacity="0.5"/>
          <line x1="450" y1="220" x2="500" y2="260" stroke="#10b981" strokeWidth="2" opacity="0.5"/>
          
          <rect x="350" y="260" width="100" height="35" rx="8" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="2"/>
          <text x="400" y="282" textAnchor="middle" fill="#fcd34d" fontSize="12" fontFamily="Vazirmatn">article</text>
          
          <rect x="450" y="260" width="100" height="35" rx="8" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="2"/>
          <text x="500" y="282" textAnchor="middle" fill="#fcd34d" fontSize="12" fontFamily="Vazirmatn">section</text>
        </svg>
        <p className="text-center text-sm text-slate-400 mt-3">ساختار DOM Tree یک سند HTML</p>
      </div>
    );
  }
  
  if (type === 'box-model') {
    return (
      <div className="my-6 p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
        <svg viewBox="0 0 400 350" className="w-full max-w-md mx-auto">
          {/* Margin */}
          <rect x="20" y="20" width="360" height="310" rx="4" fill="#ef4444" opacity="0.15" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5"/>
          <text x="200" y="45" textAnchor="middle" fill="#fca5a5" fontSize="14" fontFamily="Vazirmatn">margin</text>
          
          {/* Border */}
          <rect x="60" y="60" width="280" height="230" rx="4" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" strokeWidth="2"/>
          <text x="200" y="85" textAnchor="middle" fill="#fcd34d" fontSize="14" fontFamily="Vazirmatn">border</text>
          
          {/* Padding */}
          <rect x="100" y="100" width="200" height="150" rx="4" fill="#10b981" opacity="0.15" stroke="#10b981" strokeWidth="2"/>
          <text x="200" y="125" textAnchor="middle" fill="#6ee7b7" fontSize="14" fontFamily="Vazirmatn">padding</text>
          
          {/* Content */}
          <rect x="140" y="140" width="120" height="70" rx="4" fill="#4f46e5" opacity="0.2" stroke="#4f46e5" strokeWidth="2"/>
          <text x="200" y="180" textAnchor="middle" fill="#818cf8" fontSize="14" fontFamily="Vazirmatn">content</text>
        </svg>
        <p className="text-center text-sm text-slate-400 mt-3">CSS Box Model</p>
      </div>
    );
  }
  
  if (type === 'flexbox') {
    return (
      <div className="my-6 p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
        <div className="space-y-6">
          <div>
            <p className="text-sm text-slate-400 mb-2">justify-content: space-between</p>
            <div className="flex justify-between gap-2 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              {[1,2,3].map(i => (
                <div key={i} className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold animate-pulse" style={{animationDelay: `${i*200}ms`}}>
                  {i}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-2">align-items: center</p>
            <div className="flex items-center gap-2 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 h-32">
              {[40,60,80].map((h,i) => (
                <div key={i} className="w-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold transition-all hover:scale-110" style={{height: `${h}px`}}>
                  {i+1}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-2">flex-wrap: wrap</p>
            <div className="flex flex-wrap gap-2 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              {[1,2,3,4,5,6,7].map(i => (
                <div key={i} className="w-20 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold hover:scale-105 transition-transform">
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (type === 'grid') {
    return (
      <div className="my-6 p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
        <p className="text-sm text-slate-400 mb-3">grid-template-columns: repeat(3, 1fr)</p>
        <div className="grid grid-cols-3 gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
          {Array.from({length: 9}, (_, i) => (
            <div key={i} className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold hover:scale-95 transition-transform cursor-pointer"
              style={{animationDelay: `${i*100}ms`}}>
              {i+1}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'web-flow') {
    return (
      <div className="my-6 p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {['کاربر', 'DNS', 'سرور', 'HTML', 'CSS', 'JS', 'Render'].map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="px-4 py-3 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 rounded-lg text-sm text-slate-200 font-medium">
                {step}
              </div>
              {i < 6 && (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-indigo-400 rotate-180">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-400 mt-4">مراحل بارگذاری یک صفحه وب</p>
      </div>
    );
  }

  if (type === 'semantic-layout') {
    return (
      <div className="my-6 p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
        <div className="space-y-2 max-w-lg mx-auto">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-3 text-center text-sm text-orange-300 font-medium">
            &lt;header&gt;
          </div>
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-3 text-center text-sm text-blue-300 font-medium">
            &lt;nav&gt;
          </div>
          <div className="grid grid-cols-[1fr_3fr_1fr] gap-2">
            <div className="bg-gradient-to-b from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-3 text-center text-xs text-purple-300 font-medium">
              &lt;aside&gt;
            </div>
            <div className="bg-gradient-to-b from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-lg p-6 text-center text-sm text-emerald-300 font-medium">
              &lt;main&gt;
              <div className="mt-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded p-2 text-xs text-amber-300">
                &lt;article&gt;
              </div>
            </div>
            <div className="bg-gradient-to-b from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-3 text-center text-xs text-purple-300 font-medium">
              &lt;aside&gt;
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-3 text-center text-sm text-orange-300 font-medium">
            &lt;footer&gt;
          </div>
        </div>
        <p className="text-center text-sm text-slate-400 mt-4">ساختار معنایی یک صفحه وب</p>
      </div>
    );
  }
  
  return null;
}

// ============================================
// Interactive Quiz
// ============================================
export function InteractiveQuiz({ question, options, correctIndex, explanation }: {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    setSelected(index);
    setShowResult(true);
  };

  const reset = () => {
    setSelected(null);
    setShowResult(false);
  };

  return (
    <div className="my-6 p-6 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-xl border border-indigo-500/20">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/>
          </svg>
        </div>
        <h4 className="text-sm font-bold text-indigo-300">آزمون تعاملی</h4>
      </div>
      
      <p className="text-white font-medium mb-4">{question}</p>
      
      <div className="space-y-2">
        {options.map((option, i) => {
          let className = "w-full text-right p-3 rounded-lg border transition-all text-sm ";
          if (!showResult) {
            className += "border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-500/5 text-slate-300";
          } else if (i === correctIndex) {
            className += "border-emerald-500 bg-emerald-500/10 text-emerald-300";
          } else if (i === selected) {
            className += "border-red-500 bg-red-500/10 text-red-300";
          } else {
            className += "border-slate-700/50 text-slate-500";
          }
          
          return (
            <button key={i} onClick={() => !showResult && handleSelect(i)} className={className} disabled={showResult}>
              <span className="inline-block w-6 h-6 rounded-full bg-slate-800 text-center text-xs leading-6 ml-2">
                {String.fromCharCode(65 + i)}
              </span>
              {option}
            </button>
          );
        })}
      </div>
      
      {showResult && (
        <div className="mt-4 p-4 bg-slate-800/50 rounded-lg animate-in">
          <p className="text-sm text-slate-300 leading-7">{explanation}</p>
          <button onClick={reset} className="mt-3 text-xs text-indigo-400 hover:text-indigo-300">
            تلاش مجدد
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================
// Animated Counter
// ============================================
export function AnimatedCounter({ end, duration = 2000, label }: { end: number; duration?: number; label: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useState(() => {
    if (!started) {
      setStarted(true);
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      animate();
    }
  });

  return (
    <div className="text-center">
      <div className="text-3xl font-black text-white mb-1">{count}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  );
}

// ============================================
// Tabs Component
// ============================================
export function Tabs({ tabs }: { tabs: { label: string; content: React.ReactNode }[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="my-6">
      <div className="flex gap-1 mb-4 border-b border-slate-700/50">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`px-4 py-2 text-sm font-medium transition-all relative ${
              active === i ? 'text-indigo-300' : 'text-slate-400 hover:text-white'
            }`}>
            {tab.label}
            {active === i && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></span>
            )}
          </button>
        ))}
      </div>
      <div className="animate-in">{tabs[active].content}</div>
    </div>
  );
}

// ============================================
// Accordion
// ============================================
export function Accordion({ items }: { items: { title: string; content: React.ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="my-6 space-y-2">
      {items.map((item, i) => (
        <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden">
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-4 text-right hover:bg-white/5 transition-colors">
            <span className="text-sm font-medium text-white">{item.title}</span>
            <span className={`text-slate-400 transition-transform ${open === i ? 'rotate-180' : ''}`}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="p-4 pt-0 border-t border-slate-800 animate-in">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================
// Progress Tracker
// ============================================
export function ProgressTracker({ steps, currentStep }: { steps: string[]; currentStep: number }) {
  return (
    <div className="my-6 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center gap-2 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              i < currentStep ? 'bg-emerald-500 text-white' :
              i === currentStep ? 'bg-indigo-500 text-white ring-4 ring-indigo-500/20' :
              'bg-slate-800 text-slate-500'
            }`}>
              {i < currentStep ? '✓' : i + 1}
            </div>
            <span className={`text-xs text-center ${
              i <= currentStep ? 'text-slate-300' : 'text-slate-600'
            }`}>{step}</span>
          </div>
        ))}
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}></div>
      </div>
    </div>
  );
}

// ============================================
// Comparison Table
// ============================================
export function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-slate-700/50">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-800/50">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-right text-xs font-bold text-slate-300 uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-slate-700/50 hover:bg-white/5 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slate-300">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';

const CodeWindow = ({ 
  className = "", 
  style = {}, 
  children, 
  title = "" 
}: { 
  className?: string; 
  style?: React.CSSProperties; 
  children: React.ReactNode;
  title?: string;
}) => (
  <div 
    className={`absolute flex flex-col bg-[#0b0614]/90 backdrop-blur-md rounded-xl border border-white/10 shadow-[0_0_40px_rgba(107,33,168,0.3)] overflow-hidden ${className}`} 
    style={style}
  >
    {/* Header */}
    <div className="flex items-center px-4 py-3 bg-[#130a24]/80 border-b border-white/5">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      </div>
      {title && <div className="mx-auto text-xs text-gray-400 font-mono">{title}</div>}
    </div>
    {/* Body */}
    <div className="flex-1 p-4 sm:p-6 font-mono text-[10px] sm:text-xs leading-loose overflow-hidden text-gray-400">
      {children}
    </div>
  </div>
);

const TypewriterLine = ({ children, delay, duration = 0.3 }: { children: React.ReactNode, delay: number, duration?: number }) => (
  <motion.div
    initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
    animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
    transition={{ 
      clipPath: { duration, delay, ease: "linear" },
      opacity: { duration: 0.01, delay }
    }}
    className="whitespace-nowrap"
  >
    {children}
  </motion.div>
);

const codeLines = [
  <><span className="text-[#ff79c6]">import</span> <span className="text-white">{`{ StrictMode }`}</span> <span className="text-[#ff79c6]">from</span> <span className="text-[#f1fa8c]">'react'</span>;</>,
  <><span className="text-[#ff79c6]">import</span> <span className="text-white">{`{ createRoot }`}</span> <span className="text-[#ff79c6]">from</span> <span className="text-[#f1fa8c]">'react-dom/client'</span>;</>,
  <><span className="text-[#ff79c6]">import</span> <span className="text-white">App</span> <span className="text-[#ff79c6]">from</span> <span className="text-[#f1fa8c]">'./App.tsx'</span>;</>,
  <><span className="text-[#ff79c6]">import</span> <span className="text-[#f1fa8c]">'./index.css'</span>;</>,
  <div className="h-2"></div>,
  <><span className="text-[#6272a4]">// Initialize application</span></>,
  <><span className="text-[#8be9fd]">const</span> <span className="text-white">rootElement</span> = <span className="text-[#8be9fd]">document</span>.<span className="text-[#50fa7b]">getElementById</span>(<span className="text-[#f1fa8c]">'root'</span>);</>,
  <div className="h-2"></div>,
  <><span className="text-[#ff79c6]">if</span> (<span className="text-[#ff79c6]">!</span><span className="text-white">rootElement</span>) {`{`}</>,
  <><span className="pl-4 text-[#ff79c6]">throw new</span> <span className="text-[#8be9fd]">Error</span>(<span className="text-[#f1fa8c]">'Failed to find the root element'</span>);</>,
  <>{`}`}</>,
  <div className="h-2"></div>,
  <><span className="text-[#50fa7b]">createRoot</span>(<span className="text-white">rootElement</span>).<span className="text-[#50fa7b]">render</span>(</>,
  <><span className="pl-4 text-[#8be9fd]">&lt;StrictMode&gt;</span></>,
  <><span className="pl-8 text-[#8be9fd]">&lt;App /&gt;</span></>,
  <><span className="pl-4 text-[#8be9fd]">&lt;/StrictMode&gt;</span></>,
  <>{`);`}</>,
  <div className="h-2"></div>,
  <><span className="text-[#6272a4]">/* </span></>,
  <><span className="text-[#6272a4]"> * Web Developer & Digital Designer</span></>,
  <><span className="text-[#6272a4]"> * Focused on growth and results.</span></>,
  <><span className="text-[#6272a4]"> */</span></>
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Design Web');
  const navItems = ['Design App', 'Design Web', 'Design Art', 'Edit Video'];

  return (
    <div className="min-h-screen bg-[#0d0716] text-white font-sans overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_#4c1d95_0%,_#0d0716_60%)] opacity-60"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header & Nav */}
        <header className="flex flex-col md:flex-row items-center justify-between px-6 py-6 md:px-12">
          {/* Logo */}
          <div className="flex items-center justify-center w-12 h-12 mb-6 md:mb-0">
            <img src="https://geritocv.vercel.app/loggerito.png" alt="Gerito Logo" className="w-10 h-10 object-contain" />
          </div>

          {/* Pill Navigation */}
          <nav className="flex items-center space-x-6 md:space-x-10 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium">
            {navItems.map((item) => (
              <a 
                key={item}
                href="#" 
                onClick={(e) => { e.preventDefault(); setActiveTab(item); }}
                className={`transition-colors ${activeTab === item ? 'text-[#a78bfa]' : 'text-gray-300 hover:text-white'}`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Empty div to balance flex-between if needed, or just let it center */}
          <div className="hidden md:block w-12"></div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center mt-12 md:mt-20 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mb-6">
              Web Developer & <br />
              Digital <span className="text-[#a78bfa]">Designer</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Desarrollo web y diseño digital.<br />
              Enfocado en crecimiento y resultados.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#5b21b6] hover:bg-[#6d28d9] text-white font-medium transition-all transform hover:scale-105">
                Ver proyectos
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#5b21b6] hover:bg-[#5b21b6]/20 text-white font-medium transition-all transform hover:scale-105">
                Cotizar
              </button>
            </div>
          </motion.div>

          {/* 3D Code Windows */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] mt-20 md:mt-32 perspective-[2000px] flex justify-center items-start"
          >
            {/* Left Window */}
            <CodeWindow 
              className="w-[280px] md:w-[380px] h-[320px] md:h-[450px] left-0 md:left-10 top-10 z-0 origin-right"
              style={{ transform: 'rotateY(15deg) rotateZ(-4deg)' }}
            >
              <div className="space-y-2">
                <p><span className="text-[#ff79c6]">import</span> <span className="text-white">React</span> <span className="text-[#ff79c6]">from</span> <span className="text-[#f1fa8c]">'react'</span>;</p>
                <p><span className="text-[#ff79c6]">import</span> <span className="text-white">{`{ motion }`}</span> <span className="text-[#ff79c6]">from</span> <span className="text-[#f1fa8c]">'framer-motion'</span>;</p>
                <br />
                <p><span className="text-[#ff79c6]">export default function</span> <span className="text-[#50fa7b]">Hero</span>() {`{`}</p>
                <p className="pl-4"><span className="text-[#ff79c6]">return</span> (</p>
                <p className="pl-8"><span className="text-[#8be9fd]">&lt;div</span> <span className="text-[#50fa7b]">className</span>=<span className="text-[#f1fa8c]">"hero-container"</span><span className="text-[#8be9fd]">&gt;</span></p>
                <p className="pl-12"><span className="text-[#8be9fd]">&lt;motion.h1</span></p>
                <p className="pl-16"><span className="text-[#50fa7b]">initial</span>=<span className="text-[#f1fa8c]">{`{{ opacity: 0 }}`}</span></p>
                <p className="pl-16"><span className="text-[#50fa7b]">animate</span>=<span className="text-[#f1fa8c]">{`{{ opacity: 1 }}`}</span></p>
                <p className="pl-12"><span className="text-[#8be9fd]">&gt;</span></p>
                <p className="pl-16 text-white">Digital Designer</p>
                <p className="pl-12"><span className="text-[#8be9fd]">&lt;/motion.h1&gt;</span></p>
                <p className="pl-8"><span className="text-[#8be9fd]">&lt;/div&gt;</span></p>
                <p className="pl-4">);</p>
                <p>{`}`}</p>
              </div>
            </CodeWindow>

            {/* Right Window */}
            <CodeWindow 
              className="w-[280px] md:w-[380px] h-[320px] md:h-[450px] right-0 md:right-10 top-10 z-0 origin-left"
              style={{ transform: 'rotateY(-15deg) rotateZ(4deg)' }}
            >
              <div className="space-y-2">
                <p><span className="text-[#6272a4]">/* Styles for the main layout */</span></p>
                <p><span className="text-[#ff79c6]">.glass-panel</span> {`{`}</p>
                <p className="pl-4"><span className="text-[#8be9fd]">background</span>: <span className="text-[#f1fa8c]">rgba(13, 7, 22, 0.8)</span>;</p>
                <p className="pl-4"><span className="text-[#8be9fd]">backdrop-filter</span>: <span className="text-[#f1fa8c]">blur(12px)</span>;</p>
                <p className="pl-4"><span className="text-[#8be9fd]">border</span>: <span className="text-[#f1fa8c]">1px solid rgba(255, 255, 255, 0.1)</span>;</p>
                <p className="pl-4"><span className="text-[#8be9fd]">border-radius</span>: <span className="text-[#bd93f9]">16px</span>;</p>
                <p className="pl-4"><span className="text-[#8be9fd]">box-shadow</span>: <span className="text-[#f1fa8c]">0 8px 32px rgba(0, 0, 0, 0.3)</span>;</p>
                <p>{`}`}</p>
                <br />
                <p><span className="text-[#ff79c6]">.gradient-text</span> {`{`}</p>
                <p className="pl-4"><span className="text-[#8be9fd]">background</span>: <span className="text-[#f1fa8c]">linear-gradient(90deg, #fff, #a78bfa)</span>;</p>
                <p className="pl-4"><span className="text-[#8be9fd]">-webkit-background-clip</span>: <span className="text-[#f1fa8c]">text</span>;</p>
                <p className="pl-4"><span className="text-[#8be9fd]">-webkit-text-fill-color</span>: <span className="text-[#f1fa8c]">transparent</span>;</p>
                <p>{`}`}</p>
              </div>
            </CodeWindow>

            {/* Center Window */}
            <CodeWindow 
              className="w-[320px] md:w-[480px] h-[380px] md:h-[520px] z-10"
              style={{ transform: 'translateZ(50px)' }}
              title="main.tsx"
            >
              <div className="space-y-2 text-sm">
                {codeLines.map((line, i) => (
                  <TypewriterLine key={i} delay={1 + i * 0.15} duration={0.3}>
                    {line}
                  </TypewriterLine>
                ))}
              </div>
            </CodeWindow>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

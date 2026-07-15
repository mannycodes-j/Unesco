"use client";

import { motion } from "framer-motion";
import { Network, Smartphone, GraduationCap, School } from "lucide-react";
import { FadeUp } from "../motion/FadeUp";

export function Scene05Ecosystem() {
  return (
    <section className="relative min-h-screen bg-layer-1 py-32 border-t border-layer-3 overflow-hidden" id="ecosystem">
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-layer-3) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-editorial text-foreground mb-6">An Interconnected Ecosystem</h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              TruthLens is designed to reach users where they are, connecting marginalized communities with advanced AI fact-checking capabilities.
            </p>
          </FadeUp>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-square md:aspect-[2/1]">
          
          {/* Central AI Brain */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 bg-layer-2 border border-truth rounded-full flex flex-col items-center justify-center z-20 shadow-[0_0_50px_rgba(var(--color-truth),0.1)]"
            animate={{ boxShadow: ["0 0 20px rgba(var(--color-truth),0.1)", "0 0 60px rgba(var(--color-truth),0.3)", "0 0 20px rgba(var(--color-truth),0.1)"] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Network className="w-8 h-8 text-truth mb-2" />
            <span className="font-mono text-sm text-foreground tracking-widest text-center">TRUTHLENS<br/>CORE</span>
          </motion.div>

          {/* Node 1: WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-[10%] left-[10%] md:top-[20%] md:left-[15%] w-32 md:w-48 p-4 bg-layer-1 border border-layer-3 backdrop-blur-md z-30"
          >
            <Smartphone className="w-5 h-5 text-truth mb-3" />
            <h4 className="font-sans text-sm text-foreground mb-1">WhatsApp Bot</h4>
            <p className="text-[10px] text-muted-foreground font-mono">Accessible entry point. Supports local languages and audio transcription.</p>
          </motion.div>

          {/* Node 2: Web Dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute top-[10%] right-[10%] md:top-[20%] md:right-[15%] w-32 md:w-48 p-4 bg-layer-1 border border-layer-3 backdrop-blur-md z-30"
          >
            <Network className="w-5 h-5 text-truth mb-3" />
            <h4 className="font-sans text-sm text-foreground mb-1">Web Platform</h4>
            <p className="text-[10px] text-muted-foreground font-mono">Deep analysis reports, visualizations, and detailed credibility scores.</p>
          </motion.div>

          {/* Node 3: Learning Hub */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-[10%] left-[10%] md:bottom-[20%] md:left-[15%] w-32 md:w-48 p-4 bg-layer-1 border border-layer-3 backdrop-blur-md z-30"
          >
            <GraduationCap className="w-5 h-5 text-truth mb-3" />
            <h4 className="font-sans text-sm text-foreground mb-1">Learning Hub</h4>
            <p className="text-[10px] text-muted-foreground font-mono">MIL lessons, quizzes, and daily challenges. Earn Truth Points and Badges.</p>
          </motion.div>

          {/* Node 4: Schools */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-[10%] right-[10%] md:bottom-[20%] md:right-[15%] w-32 md:w-48 p-4 bg-layer-1 border border-layer-3 backdrop-blur-md z-30"
          >
            <School className="w-5 h-5 text-truth mb-3" />
            <h4 className="font-sans text-sm text-foreground mb-1">School Dashboard</h4>
            <p className="text-[10px] text-muted-foreground font-mono">Track student progress, lesson completion, and community leaderboards.</p>
          </motion.div>

          {/* Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ filter: "drop-shadow(0 0 4px rgba(var(--color-truth), 0.3))" }}>
            <motion.line 
              x1="50%" y1="50%" x2="25%" y2="25%" 
              stroke="var(--color-layer-3)" strokeWidth="1" strokeDasharray="4 4"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
            />
            <motion.line 
              x1="50%" y1="50%" x2="75%" y2="25%" 
              stroke="var(--color-layer-3)" strokeWidth="1" strokeDasharray="4 4"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.line 
              x1="50%" y1="50%" x2="25%" y2="75%" 
              stroke="var(--color-truth)" strokeWidth="1"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.line 
              x1="50%" y1="50%" x2="75%" y2="75%" 
              stroke="var(--color-truth)" strokeWidth="1"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }}
            />
          </svg>

        </div>
      </div>
    </section>
  );
}

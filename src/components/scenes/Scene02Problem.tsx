"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Scene02Problem() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] flex items-center py-32 bg-layer-1 border-t border-layer-3 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, var(--color-layer-3) 1px, transparent 1px), linear-gradient(to bottom, var(--color-layer-3) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-2xl mx-auto text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-editorial text-foreground leading-tight mb-6">
            We are drowning in a <span className="text-manipulation italic">manufactured reality.</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm max-w-lg mx-auto leading-relaxed">
            Every day, users are bombarded with fragmented information, deepfakes, and emotionally charged content designed to bypass critical thinking.
          </p>
        </div>

        {/* Fragmented UI elements drifting apart */}
        <div className="relative w-full max-w-4xl mx-auto h-[600px]">
          
          <motion.div style={{ y: y1, opacity }} className="absolute top-[10%] left-[5%] p-6 bg-layer-2/80 backdrop-blur-md border border-layer-3 shadow-xl w-64 rotate-[-5deg]">
            <div className="h-2 w-12 bg-false/50 mb-4 rounded-full"></div>
            <div className="h-4 w-full bg-layer-3 mb-2"></div>
            <div className="h-4 w-3/4 bg-layer-3"></div>
            <div className="mt-4 flex items-center gap-2 text-[10px] font-mono text-false">
              <span className="w-1.5 h-1.5 rounded-full bg-false"></span> UNVERIFIED CLAIM
            </div>
          </motion.div>

          <motion.div style={{ y: y2, opacity }} className="absolute top-[40%] right-[10%] p-6 bg-layer-2/80 backdrop-blur-md border border-manipulation/30 shadow-[0_0_30px_rgba(var(--color-manipulation),0.1)] w-72 rotate-[3deg] z-10">
            <h3 className="font-editorial text-xl text-foreground mb-2">"You won't believe what they are hiding..."</h3>
            <p className="text-xs text-muted-foreground font-sans">Shared 50k times • 2 mins ago</p>
            <div className="mt-4 border-t border-layer-3 pt-3 flex items-center gap-2 text-[10px] font-mono text-manipulation">
              <span className="w-1.5 h-1.5 rounded-full bg-manipulation animate-pulse"></span> EMOTIONAL MANIPULATION: FEAR
            </div>
          </motion.div>

          <motion.div style={{ y: y3, opacity }} className="absolute bottom-[10%] left-[20%] p-6 bg-layer-2/80 backdrop-blur-md border border-layer-3 shadow-xl w-80 rotate-[-2deg]">
            <div className="w-full h-32 bg-layer-3 mb-4 flex items-center justify-center">
              <span className="text-xs font-mono text-muted-foreground">[DEEPFAKE IMAGE DETECTED]</span>
            </div>
            <div className="h-3 w-full bg-layer-3 mb-2"></div>
            <div className="h-3 w-1/2 bg-layer-3"></div>
          </motion.div>
          
          {/* Central chaotic focal point */}
          <motion.div 
            style={{ opacity }} 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-layer-3 flex items-center justify-center"
          >
            <div className="w-full h-full animate-[spin_10s_linear_infinite] border-t border-l border-manipulation/50 rounded-full absolute"></div>
            <div className="w-full h-full animate-[spin_15s_linear_infinite_reverse] border-b border-r border-false/50 rounded-full absolute scale-110"></div>
            <span className="font-mono text-xs text-muted-foreground tracking-widest text-center">NOISE</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

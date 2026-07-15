"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DataNodes } from "../visuals/DataNodes";

export function Scene03Transformation() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], ["10px", "0px"]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-layer-1 flex flex-col items-center justify-center py-24 overflow-hidden border-t border-layer-3">
      
      {/* Background Pulse */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[800px] h-[800px] bg-truth/5 rounded-full blur-[100px]"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div style={{ filter: blur, opacity }}>
          <h2 className="text-4xl md:text-6xl font-editorial text-foreground mb-8">
            Until the noise is <span className="text-truth font-mono tracking-tighter">&lt;DECODED/&gt;</span>
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto mb-16">
            TruthLens acts as an analytical prism, aligning chaotic data points into clear, verifiable insights.
          </p>
        </motion.div>

        {/* The Structure */}
        <motion.div 
          style={{ opacity, scale }}
          className="relative w-full max-w-5xl mx-auto h-[400px] border border-layer-3 bg-layer-2/30 backdrop-blur-md overflow-hidden flex items-center justify-center"
        >
          <DataNodes />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex gap-12 text-center relative z-20">
              <div className="space-y-2">
                <div className="font-mono text-3xl text-truth">98%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Fact Extraction</div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-3xl text-truth">&lt;1s</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Processing Time</div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-3xl text-truth">5+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Layers Analyzed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

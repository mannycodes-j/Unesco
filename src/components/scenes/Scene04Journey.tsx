"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WhatsAppMock } from "../product-preview/WhatsAppMock";
import { DashboardMock } from "../product-preview/DashboardMock";

export function Scene04Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const step1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  const step2Opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0.3, 1, 1, 0.3]);
  const step3Opacity = useTransform(scrollYProgress, [0.7, 0.9], [0.3, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-layer-1" id="capabilities">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Background ambient */}
        <div className="absolute right-0 w-1/2 h-full bg-layer-2/20 border-l border-layer-3"></div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          
          {/* Left: Narrative Text */}
          <div className="flex flex-col justify-center h-full relative py-12 gap-12">
            
            <motion.div style={{ opacity: step1Opacity }} className="flex flex-col pr-12 transition-opacity duration-300">
              <span className="font-mono text-truth text-xs uppercase tracking-widest mb-2 block">Step 01: Submission</span>
              <h3 className="text-3xl font-editorial text-foreground mb-3">Forward the noise to WhatsApp.</h3>
              <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                Meet users where they already communicate. Paste a news article, forward a suspicious voice note, or upload a screenshot directly to the TruthLens WhatsApp Bot.
              </p>
            </motion.div>

            <motion.div style={{ opacity: step2Opacity }} className="flex flex-col pr-12 transition-opacity duration-300">
              <span className="font-mono text-truth text-xs uppercase tracking-widest mb-2 block">Step 02: AI Analysis</span>
              <h3 className="text-3xl font-editorial text-foreground mb-3">Instant decryption.</h3>
              <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                Our multi-agent system extracts factual claims, detects emotional manipulation (fear, urgency, clickbait), and cross-references against trusted sources.
              </p>
            </motion.div>

            <motion.div style={{ opacity: step3Opacity }} className="flex flex-col pr-12 transition-opacity duration-300">
              <span className="font-mono text-truth text-xs uppercase tracking-widest mb-2 block">Step 03: Deep Understanding</span>
              <h3 className="text-3xl font-editorial text-foreground mb-3">Learn why it's misleading.</h3>
              <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                We don't just return a True/False verdict. Users click through to a detailed web dashboard that explains the mechanics of the misinformation.
              </p>
            </motion.div>

          </div>

          {/* Right: Product UI Sequence */}
          <div className="relative h-[80vh] flex items-center justify-center">
            
            <motion.div 
              style={{ opacity: useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]), scale: useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0.9]) }} 
              className="absolute z-20"
            >
              <WhatsAppMock />
            </motion.div>

            <motion.div 
              style={{ opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]), scale: useTransform(scrollYProgress, [0.4, 0.6], [0.9, 1]), y: useTransform(scrollYProgress, [0.4, 0.6], [50, 0]) }} 
              className="absolute z-10 w-full flex justify-center"
            >
              <DashboardMock className="scale-[0.65] md:scale-90 origin-center" />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

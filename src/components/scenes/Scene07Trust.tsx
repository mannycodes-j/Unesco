"use client";

import { motion } from "framer-motion";
import { FadeUp } from "../motion/FadeUp";

export function Scene07Trust() {
  return (
    <section className="relative py-32 bg-layer-1 border-t border-layer-3">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-editorial text-foreground mb-8">
                Trust built on <span className="text-truth">transparency.</span>
              </h2>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8">
                We believe in verifiable logic, not black-box assumptions. Every TruthLens score is accompanied by the exact sources, methodology, and AI confidence levels used to generate it.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.2} className="space-y-6">
              <div className="flex gap-4">
                <div className="text-truth font-mono">01</div>
                <div>
                  <h4 className="text-foreground font-sans font-medium mb-1">Source Accountability</h4>
                  <p className="text-sm text-muted-foreground">Cross-referenced against verified global databases and independent fact-checking organizations.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-truth font-mono">02</div>
                <div>
                  <h4 className="text-foreground font-sans font-medium mb-1">Privacy-First Architecture</h4>
                  <p className="text-sm text-muted-foreground">WhatsApp submissions are encrypted and immediately anonymized before analysis.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-truth font-mono">03</div>
                <div>
                  <h4 className="text-foreground font-sans font-medium mb-1">Educational Focus</h4>
                  <p className="text-sm text-muted-foreground">Integrated MIL (Media and Information Literacy) lessons help users recognize patterns over time.</p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Visual Evidence Board */}
          <div className="relative">
            <FadeUp delay={0.4}>
              <div className="bg-layer-2/50 border border-layer-3 p-6 flex flex-col gap-4">
                
                <div className="flex justify-between items-center border-b border-layer-3 pb-4">
                  <span className="font-mono text-xs text-muted-foreground">METHODOLOGY_LOG</span>
                  <span className="px-2 py-1 bg-truth/10 text-truth text-[10px] font-mono">VERIFIED</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center text-foreground">
                    <span>Checking publisher reputation...</span>
                    <span className="text-truth">Match: Trusted</span>
                  </div>
                  <div className="flex justify-between items-center text-foreground">
                    <span>Extracting factual claims (4)...</span>
                    <span className="text-truth">Success</span>
                  </div>
                  <div className="flex justify-between items-center text-foreground">
                    <span>Running reverse image search...</span>
                    <span className="text-manipulation">Manipulated (Crop)</span>
                  </div>
                  <div className="flex justify-between items-center text-foreground">
                    <span>Calculating bias weighting...</span>
                    <span className="text-foreground">Neutral</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-layer-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-layer-3 flex items-center justify-center">
                      <div className="w-3 h-3 bg-truth rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-sm text-foreground">System Status</span>
                  </div>
                  <span className="font-mono text-truth text-xs">ONLINE</span>
                </div>

              </div>
            </FadeUp>
          </div>
        </div>

      </div>
    </section>
  );
}

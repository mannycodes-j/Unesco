"use client";

import { motion } from "framer-motion";
import { RevealText } from "../motion/RevealText";
import { FadeUp } from "../motion/FadeUp";
import { ArrowRight, Crosshair } from "lucide-react";
import { MagneticElement } from "../motion/MagneticElement";
import Link from "next/link";

export function Scene08Closing() {
  return (
    <section className="relative min-h-[80vh] bg-layer-1 flex flex-col items-center justify-center py-32 border-t border-layer-3 overflow-hidden" id="try-now">
      
      {/* Centered Luminous Core */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-[600px] h-[600px] bg-truth/10 rounded-full blur-[100px]"></div>
        <div className="absolute w-[300px] h-[300px] bg-truth/20 rounded-full blur-[60px]"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <Crosshair className="w-12 h-12 text-truth mx-auto mb-8 animate-[spin_10s_linear_infinite]" />
        
        <h2 className="text-5xl md:text-7xl font-editorial text-foreground mb-6">
          <RevealText text="The network is ready." />
        </h2>
        
        <FadeUp delay={0.4}>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto mb-12">
            Equip your community with the tools to decode misinformation. Try the TruthLens AI WhatsApp bot today or explore the interactive platform.
          </p>
        </FadeUp>
        
        <FadeUp delay={0.6} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <MagneticElement strength={20}>
            <button className="relative group overflow-hidden bg-truth text-layer-1 font-mono font-bold px-10 py-5 uppercase tracking-widest text-sm flex items-center gap-3">
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-2 h-2 bg-layer-1 animate-pulse"></span>
                Launch Verification Bot
              </span>
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>
          </MagneticElement>

          <MagneticElement strength={10}>
            <Link href="/dashboard" className="text-foreground hover:text-truth transition-colors font-mono uppercase tracking-widest text-sm flex items-center gap-2 group">
              View Community Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </MagneticElement>
        </FadeUp>
      </div>

      <div className="absolute bottom-6 w-full text-center">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          TruthLens AI © 2026 • Empowering Media Literacy
        </p>
      </div>
    </section>
  );
}

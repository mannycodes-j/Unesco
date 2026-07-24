"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText } from "../motion/RevealText";
import { MagneticElement } from "../motion/MagneticElement";
import Link from "next/link";
import { FadeUp } from "../motion/FadeUp";
import { ScanningLens } from "../visuals/ScanningLens";

export function Scene01Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Noise Layer */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-layer-2)_0%,_var(--color-layer-1)_100%)]"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        ></div>

        {/* Chaotic Text Background */}
        <div className="absolute inset-0 flex flex-wrap gap-4 p-10 opacity-30 blur-[2px] font-mono text-[10px] text-muted-foreground overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <span key={i} className="whitespace-nowrap animate-pulse" style={{ animationDelay: `${Math.random() * 2}s` }}>
              [UNVERIFIED CLAIM {Math.floor(Math.random() * 10000)}] EMOTIONAL_MANIPULATION_DETECTED_LEVEL_{Math.floor(Math.random() * 5)}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div className="lg:col-span-6 space-y-8">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-truth animate-pulse"></span>
            <span className="text-truth font-mono text-xs uppercase tracking-widest">Media & Information Literacy Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-editorial leading-[1.1] text-foreground">
            <RevealText text="Decode the noise." />
            <br />
            <span className="text-muted-foreground"><RevealText text="Uncover the truth." delay={0.4} /></span>
          </h1>

          <FadeUp delay={0.8} className="max-w-xl">
            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              An AI-powered verification engine built for WhatsApp and the web. We don't just tell you what's true—we show you exactly how emotional manipulation and bias are constructed.
            </p>
          </FadeUp>

          <FadeUp delay={1} className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-truth text-layer-1 font-mono font-bold px-8 py-4 hover:bg-white transition-colors duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-layer-1 animate-ping"></span>
              Connect WhatsApp Bot
            </button>
            <MagneticElement strength={20}>
              <Link href="/dashboard" className="border border-layer-3 bg-layer-2/50 text-foreground font-mono px-8 py-4 hover:bg-layer-3 transition-colors duration-300 uppercase tracking-widest text-sm backdrop-blur-sm inline-block">
                Explore Dashboard
              </Link>
            </MagneticElement>
          </FadeUp>
        </div>

        <div className="lg:col-span-6 relative h-[600px] w-full flex items-center justify-center">
          <FadeUp delay={1.2} duration={1.5} className="w-full h-full relative">
            {/* The Lens Reveal */}
            <div className="absolute inset-10 z-20">
              <ScanningLens className="w-full h-full shadow-[0_0_50px_rgba(var(--color-truth),0.15)]" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.5 }}
                    className="p-4 bg-layer-1 border-l-2 border-truth"
                  >
                    <p className="font-mono text-xs text-truth mb-1">ANALYSIS COMPLETE</p>
                    <p className="text-sm font-sans text-foreground">Context missing from original source.</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.8 }}
                    className="p-4 bg-layer-1 border-l-2 border-manipulation"
                  >
                    <p className="font-mono text-xs text-manipulation mb-1">BIAS DETECTED</p>
                    <p className="text-sm font-sans text-foreground">Exaggerated claims.</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Ambient glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-truth/10 blur-[100px] rounded-full pointer-events-none"></div>
          </FadeUp>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-layer-3 to-transparent"></div>
      </motion.div>
    </section>
  );
}

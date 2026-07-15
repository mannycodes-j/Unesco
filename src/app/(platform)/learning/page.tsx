"use client";

import { PlayCircle, BookOpen, Brain, Lightbulb, GraduationCap, Lock, CheckCircle2, Crosshair } from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { MagneticElement } from "@/components/motion/MagneticElement";

export default function LearningHubPage() {
  return (
    <div className="space-y-12 pb-12">
      
      <FadeUp className="flex flex-col md:flex-row md:items-end justify-between border-b border-layer-3 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-truth animate-pulse"></span>
            <span className="text-[10px] text-truth font-mono uppercase tracking-widest">Training Active</span>
          </div>
          <h1 className="text-4xl font-editorial text-foreground">Operator Training</h1>
          <p className="text-muted-foreground font-sans mt-2 max-w-xl">
            Calibrate your detection skills. Master the structural patterns of media manipulation to protect your network.
          </p>
        </div>
      </FadeUp>

      {/* Main Progress Band */}
      <FadeUp delay={0.1}>
        <div className="border border-layer-3 bg-layer-2/30 p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-truth/5 rounded-full blur-2xl group-hover:bg-truth/10 transition-colors"></div>
          
          <div className="flex-1 w-full space-y-4 relative z-10">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-foreground">
              <span className="flex items-center gap-2"><Crosshair className="w-4 h-4 text-truth"/> Base Calibration</span>
              <span className="text-truth">60% Complete</span>
            </div>
            <div className="h-2 w-full bg-layer-3 overflow-hidden">
              <div className="h-full bg-truth w-[60%]"></div>
            </div>
          </div>
          
          <div className="shrink-0 relative z-10 w-full md:w-auto">
            <MagneticElement strength={10}>
              <button className="w-full md:w-auto relative group inline-flex items-center justify-center px-8 py-4 font-mono text-xs tracking-widest text-layer-1 bg-foreground overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Resume Sequence
                </span>
                <div className="absolute inset-0 bg-truth translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </button>
            </MagneticElement>
          </div>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-layer-3 border border-layer-3">
        
        {/* Module 1 */}
        <FadeUp delay={0.2} className="bg-layer-1 p-8 flex flex-col h-full group hover:bg-layer-2/50 transition-colors relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-truth"></div>
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 border border-truth/30 bg-truth/10 flex items-center justify-center text-truth">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="px-2 py-1 text-[10px] font-mono border border-truth/30 text-truth uppercase flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Calibrated
            </span>
          </div>
          <h3 className="font-editorial text-2xl text-foreground mb-3">Structural Anatomy of Fabrication</h3>
          <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-8 flex-1">
            Identify the recurring linguistic and structural patterns utilized in synthetic or fabricated news articles.
          </p>
          <button className="text-xs font-mono text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors text-left">
            Review Protocol ❯
          </button>
        </FadeUp>

        {/* Module 2 */}
        <FadeUp delay={0.3} className="bg-layer-1 p-8 flex flex-col h-full group hover:bg-layer-2/50 transition-colors relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-manipulation"></div>
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 border border-manipulation/30 bg-manipulation/10 flex items-center justify-center text-manipulation">
              <Brain className="w-5 h-5" />
            </div>
            <span className="px-2 py-1 text-[10px] font-mono border border-manipulation/30 text-manipulation uppercase flex items-center gap-1 animate-pulse">
              Active Protocol
            </span>
          </div>
          <h3 className="font-editorial text-2xl text-foreground mb-3">Emotional Hijacking</h3>
          <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-6 flex-1">
            How specific adjective combinations and fear-based urgency cues bypass logical processing.
          </p>
          <div className="space-y-2 mt-auto mb-6">
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground uppercase">
              <span>Progress</span>
              <span>30%</span>
            </div>
            <div className="h-1 w-full bg-layer-3 overflow-hidden">
              <div className="h-full bg-manipulation w-[30%]"></div>
            </div>
          </div>
          <button className="text-xs font-mono text-manipulation uppercase tracking-widest hover:text-truth transition-colors text-left">
            Initialize Module ❯
          </button>
        </FadeUp>

        {/* Module 3 */}
        <FadeUp delay={0.4} className="bg-layer-1 p-8 flex flex-col h-full relative opacity-50 grayscale">
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 border border-layer-4 bg-layer-3 flex items-center justify-center text-muted-foreground">
              <PlayCircle className="w-5 h-5" />
            </div>
            <span className="px-2 py-1 text-[10px] font-mono border border-layer-4 text-muted-foreground uppercase flex items-center gap-1">
              <Lock className="w-3 h-3" /> Encrypted
            </span>
          </div>
          <h3 className="font-editorial text-2xl text-foreground mb-3">Synthetic Media Detection</h3>
          <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-8 flex-1">
            Visual and auditory artifact analysis for detecting AI-generated deepfakes.
          </p>
          <button className="text-xs font-mono text-muted-foreground uppercase tracking-widest cursor-not-allowed text-left">
            Requires Previous Calibration ❯
          </button>
        </FadeUp>

      </div>

      {/* Interactive Missions */}
      <div className="pt-8">
        <h2 className="text-sm font-mono text-foreground uppercase tracking-widest flex items-center gap-2 mb-6">
          <Lightbulb className="w-4 h-4 text-truth" /> Live Field Scenarios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <FadeUp delay={0.5}>
            <div className="border border-layer-3 bg-[url('/grid.svg')] bg-cover relative overflow-hidden group cursor-pointer h-full">
              <div className="absolute inset-0 bg-layer-2/80 group-hover:bg-layer-2/60 transition-colors"></div>
              <div className="p-8 relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <span className="px-2 py-1 text-[10px] font-mono bg-truth/10 text-truth uppercase tracking-widest">+50 Reputation Points</span>
                </div>
                <h3 className="font-editorial text-2xl text-foreground mb-2 group-hover:text-truth transition-colors">Clickbait Assessment</h3>
                <p className="text-sm font-mono text-muted-foreground mb-8">Analyze 10 live headlines and classify their manipulation vectors under time pressure.</p>
                <div className="mt-auto">
                  <span className="text-xs font-mono text-foreground uppercase tracking-widest border-b border-truth pb-1">Enter Simulation ❯</span>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="border border-layer-3 bg-[url('/grid.svg')] bg-cover relative overflow-hidden group cursor-pointer h-full">
              <div className="absolute inset-0 bg-layer-2/80 group-hover:bg-layer-2/60 transition-colors"></div>
              <div className="p-8 relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <span className="px-2 py-1 text-[10px] font-mono bg-truth/10 text-truth uppercase tracking-widest">+100 Reputation Points</span>
                </div>
                <h3 className="font-editorial text-2xl text-foreground mb-2 group-hover:text-truth transition-colors">Source Traceback</h3>
                <p className="text-sm font-mono text-muted-foreground mb-8">Follow the digital footprint of a fabricated story back to its node of origin.</p>
                <div className="mt-auto">
                  <span className="text-xs font-mono text-foreground uppercase tracking-widest border-b border-truth pb-1">Enter Simulation ❯</span>
                </div>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>

    </div>
  );
}

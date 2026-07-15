"use client";

import { ShieldAlert, AlertTriangle, Info, ArrowLeft, Database, Fingerprint, EyeOff, FileDigit } from "lucide-react";
import Link from "next/link";
import { VerifyForm } from "@/components/features/VerifyForm";
import { FadeUp } from "@/components/motion/FadeUp";

export default function VerificationPage({ searchParams }: { searchParams?: { id?: string } }) {
  const hasResult = searchParams?.id === "mock-result";

  if (!hasResult) {
    return (
      <div className="w-full space-y-12 py-10">
        <FadeUp className="text-center mb-10 max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="px-3 py-1 bg-truth/10 border border-truth/30 text-truth text-[10px] font-mono tracking-widest uppercase inline-block">
              Module: Decryption Engine
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-editorial tracking-tight mb-4">Input Data Stream</h1>
          <p className="text-muted-foreground font-mono text-sm leading-relaxed">
            Provide the raw signal—URL, text, or media. The system will dissect the structure, cross-reference credible databases, and expose underlying manipulation tactics.
          </p>
        </FadeUp>
        <VerifyForm />
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <FadeUp className="flex flex-col md:flex-row md:items-end justify-between border-b border-layer-3 pb-6">
        <div>
          <Link href="/verification" className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors mb-6 uppercase tracking-widest">
            <ArrowLeft className="w-3 h-3" /> Back to Input
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-manipulation animate-pulse"></span>
            <span className="text-[10px] text-manipulation font-mono uppercase tracking-widest">Analysis Complete</span>
          </div>
          <h1 className="text-4xl font-editorial text-foreground">Target Assessment</h1>
        </div>
        <div className="mt-4 md:mt-0 font-mono text-xs text-muted-foreground flex flex-col items-end">
          <span>Target ID: <span className="text-foreground">TRT-992-ALPHA</span></span>
          <span>Timestamp: <span className="text-foreground">Just Now</span></span>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: The Media Context */}
        <div className="lg:col-span-5 space-y-8">
          <FadeUp delay={0.1}>
            <div className="border border-manipulation/30 bg-manipulation/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-manipulation"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-manipulation/20 p-3 border border-manipulation/30 text-manipulation flex-shrink-0">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-sans font-semibold text-foreground">Misleading Structure</h2>
                    <p className="text-xs font-mono text-manipulation mt-1">CONFIDENCE LEVEL: 78%</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 border border-layer-3 bg-layer-1/50 relative">
                    <span className="absolute -top-2.5 left-4 px-2 bg-layer-1 text-[10px] font-mono text-muted-foreground tracking-widest">EXTRACTED CONTENT</span>
                    <p className="text-foreground font-editorial text-lg italic leading-relaxed">
                      "Shocking footage shows robot dogs attacking protestors in London streets."
                    </p>
                  </div>
                  <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                    System detection: This claim contains verifiable factual elements but structurally omits crucial context and employs engineered emotional triggers.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="border border-layer-3 bg-layer-2/30 p-6">
              <h3 className="font-mono text-sm uppercase tracking-widest text-foreground mb-4 flex items-center gap-2">
                <Fingerprint className="w-4 h-4 text-truth" /> Detection Vectors
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono text-muted-foreground mb-2 uppercase">
                    <span>Sensationalism</span>
                    <span className="text-false">Extreme (92%)</span>
                  </div>
                  <div className="h-1.5 w-full bg-layer-3 overflow-hidden">
                    <div className="h-full bg-false w-[92%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-muted-foreground mb-2 uppercase">
                    <span>Emotional Manipulation</span>
                    <span className="text-manipulation">High (85%)</span>
                  </div>
                  <div className="h-1.5 w-full bg-layer-3 overflow-hidden">
                    <div className="h-full bg-manipulation w-[85%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-muted-foreground mb-2 uppercase">
                    <span>Publisher Bias</span>
                    <span className="text-foreground">Neutral (20%)</span>
                  </div>
                  <div className="h-1.5 w-full bg-layer-3 overflow-hidden">
                    <div className="h-full bg-layer-4 w-[20%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right Column: Deep Analysis Terminal */}
        <div className="lg:col-span-7 space-y-8">
          
          <FadeUp delay={0.3} className="space-y-6">
            <div className="flex items-center justify-between border-b border-layer-3 pb-2">
              <h2 className="text-sm font-mono text-foreground uppercase tracking-widest flex items-center gap-2">
                <Database className="w-4 h-4 text-truth" /> Terminal Diagnostics
              </h2>
            </div>

            {/* Diagnostic 1 */}
            <div className="border border-layer-3 bg-layer-1 p-0 flex flex-col md:flex-row">
              <div className="p-4 border-b md:border-b-0 md:border-r border-layer-3 bg-layer-2/50 w-full md:w-48 flex-shrink-0 flex items-center md:items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-manipulation" />
                <span className="text-xs font-mono text-manipulation uppercase">Emotional Vectors</span>
              </div>
              <div className="p-6 flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 text-[10px] font-mono border border-false/30 bg-false/10 text-false uppercase">Fear Mongering</span>
                  <span className="px-2 py-1 text-[10px] font-mono border border-manipulation/30 bg-manipulation/10 text-manipulation uppercase">Urgency</span>
                </div>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  Keywords <span className="text-foreground bg-layer-3 px-1">"Shocking"</span> and <span className="text-foreground bg-layer-3 px-1">"attacking"</span> flag positive for designed fear induction. Imagery analysis correlates with a controlled police demonstration, contradicting the unprovoked attack narrative.
                </p>
              </div>
            </div>

            {/* Diagnostic 2 */}
            <div className="border border-layer-3 bg-layer-1 p-0 flex flex-col md:flex-row">
              <div className="p-4 border-b md:border-b-0 md:border-r border-layer-3 bg-layer-2/50 w-full md:w-48 flex-shrink-0 flex items-center md:items-start gap-2">
                <EyeOff className="w-4 h-4 text-truth" />
                <span className="text-xs font-mono text-truth uppercase">Contextual Omissions</span>
              </div>
              <div className="p-6 flex-1">
                <ul className="space-y-3 font-mono text-xs text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-truth mt-0.5">❯</span>
                    <span>Footage originates from a planned technology demonstration by the London Police Dept on Oct 12, 2023.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-truth mt-0.5">❯</span>
                    <span>No protestors were present; screaming audio signatures indicate a post-production digital overlay.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-truth mt-0.5">❯</span>
                    <span>Publisher node carries a Trust Reputation Score of 32/100, heavily weighted towards manipulated media.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Diagnostic 3 */}
            <div className="border border-layer-3 bg-layer-1 p-0 flex flex-col md:flex-row">
              <div className="p-4 border-b md:border-b-0 md:border-r border-layer-3 bg-layer-2/50 w-full md:w-48 flex-shrink-0 flex items-center md:items-start gap-2">
                <FileDigit className="w-4 h-4 text-foreground" />
                <span className="text-xs font-mono text-foreground uppercase">Verified References</span>
              </div>
              <div className="p-0 flex-1 divide-y divide-layer-3">
                {[
                  { title: "London Police Dept Official Statement on Tech Demo", source: "Met Police URL", status: "VERIFIED" },
                  { title: "Fact Check: Viral robot dog video is manipulated", source: "Reuters Fact Check", status: "VERIFIED" },
                ].map((item, i) => (
                  <div key={i} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-layer-2/50 transition-colors">
                    <div>
                      <p className="text-sm font-sans text-foreground">{item.title}</p>
                      <p className="text-[10px] font-mono text-muted-foreground mt-1">{item.source}</p>
                    </div>
                    <span className="px-2 py-1 text-[10px] font-mono border border-truth/30 text-truth uppercase shrink-0">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-6">
              <Link href="/learning" className="group relative inline-flex items-center justify-center w-full px-8 py-4 font-mono text-xs tracking-widest text-layer-1 bg-foreground overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Initiate Training Module: Visual Manipulation
                </span>
                <div className="absolute inset-0 bg-truth translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </Link>
            </div>
          </FadeUp>
        </div>

      </div>
    </div>
  );
}

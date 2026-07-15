"use client";

import { motion } from "framer-motion";
import { Activity, AlertTriangle, ShieldCheck, PieChart, Info, BookOpen } from "lucide-react";
import { ScanningLens } from "../visuals/ScanningLens";

export function DashboardMock({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full max-w-4xl bg-layer-1 border border-layer-3 rounded-sm overflow-hidden flex shadow-2xl ${className}`}>
      
      {/* Sidebar */}
      <div className="w-16 md:w-48 border-r border-layer-3 bg-layer-2/50 flex flex-col items-center md:items-start p-4 hidden sm:flex shrink-0">
        <div className="w-8 h-8 md:w-full border border-truth bg-truth/10 flex items-center justify-center md:justify-start md:px-3 mb-10 text-truth">
          <ShieldCheck className="w-4 h-4" />
          <span className="hidden md:inline-block ml-2 font-mono text-xs uppercase tracking-wider">Analysis</span>
        </div>
        
        <div className="space-y-6 w-full">
          <div className="w-full flex items-center justify-center md:justify-start md:px-3 text-muted-foreground hover:text-foreground cursor-pointer">
            <Activity className="w-5 h-5" />
            <span className="hidden md:inline-block ml-3 font-sans text-sm">Dashboard</span>
          </div>
          <div className="w-full flex items-center justify-center md:justify-start md:px-3 text-truth border-l-2 border-truth">
            <PieChart className="w-5 h-5" />
            <span className="hidden md:inline-block ml-3 font-sans text-sm">Active Report</span>
          </div>
          <div className="w-full flex items-center justify-center md:justify-start md:px-3 text-muted-foreground hover:text-foreground cursor-pointer">
            <BookOpen className="w-5 h-5" />
            <span className="hidden md:inline-block ml-3 font-sans text-sm">Learning Hub</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="h-14 border-b border-layer-3 flex items-center px-6 justify-between bg-layer-1">
          <h3 className="font-mono text-sm text-foreground uppercase tracking-widest">Report ID: TX-84920</h3>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-layer-3 border border-layer-3 text-xs font-mono text-muted-foreground rounded-sm">02.14.2026</span>
          </div>
        </div>

        {/* Report Content */}
        <div className="p-6 overflow-y-auto flex-1 bg-layer-1 space-y-6">
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-manipulation/10 border border-manipulation/30 text-manipulation text-xs font-mono">
                <AlertTriangle className="w-3 h-3" /> Emotional Manipulation Detected
              </div>
              <h2 className="text-3xl font-editorial text-foreground leading-tight">
                "BREAKING: Secret government plot exposed..."
              </h2>
              <div className="relative p-6 border border-layer-3 bg-layer-2/30">
                <ScanningLens className="absolute inset-0 opacity-30" />
                <p className="relative z-10 text-muted-foreground text-sm font-mono leading-relaxed">
                  <span className="text-manipulation bg-manipulation/10 px-1 border-b border-manipulation/50">Urgency cues</span> and <span className="text-false bg-false/10 px-1 border-b border-false/50">unverified claims</span> heavily present. The source domain has a history of publishing <span className="text-foreground">satirical or fabricated content</span>.
                </p>
              </div>
            </div>

            {/* Score Radial */}
            <div className="w-full lg:w-48 shrink-0 flex flex-col items-center justify-center p-6 border border-layer-3 bg-layer-2/50 relative">
              <div className="absolute top-2 left-2 flex items-center gap-1 text-[10px] text-muted-foreground font-mono"><Info className="w-3 h-3"/> CREDIBILITY</div>
              <div className="relative w-24 h-24 mt-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="var(--color-layer-3)" strokeWidth="4" fill="none" />
                  <motion.circle 
                    cx="48" cy="48" r="40" 
                    stroke="var(--color-false)" 
                    strokeWidth="4" 
                    fill="none" 
                    strokeDasharray="251"
                    initial={{ strokeDashoffset: 251 }}
                    animate={{ strokeDashoffset: 251 - (251 * 0.15) }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-2xl font-editorial text-false">15<span className="text-xs">%</span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-layer-3 bg-layer-2/30 hover:bg-layer-2 transition-colors">
              <h4 className="text-xs font-mono text-muted-foreground mb-2">BIAS METER</h4>
              <div className="h-1 bg-layer-3 w-full relative mt-4">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-manipulation"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </div>
              <p className="text-xs text-manipulation mt-2">Highly Sensational</p>
            </div>
            <div className="p-4 border border-layer-3 bg-layer-2/30 hover:bg-layer-2 transition-colors">
              <h4 className="text-xs font-mono text-muted-foreground mb-2">MISSING CONTEXT</h4>
              <p className="text-sm text-foreground mt-2">Key quotes have been truncated to alter their meaning.</p>
            </div>
            <div className="p-4 border border-truth/30 bg-truth/5 hover:bg-truth/10 transition-colors cursor-pointer group">
              <h4 className="text-xs font-mono text-truth mb-2">LEARNING HUB</h4>
              <p className="text-sm text-foreground mt-2 group-hover:text-truth transition-colors">Learn how to spot Clickbait →</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { FadeUp } from "../motion/FadeUp";
import { BarChart3, Fingerprint, EyeOff, BrainCircuit } from "lucide-react";

export function Scene06Capabilities() {
  const capabilities = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-truth" />,
      title: "Emotional Manipulation Detector",
      description: "Identifies language designed to bypass logic, highlighting tactics like fear-mongering, false urgency, and clickbait.",
      color: "border-manipulation text-manipulation"
    },
    {
      icon: <EyeOff className="w-6 h-6 text-truth" />,
      title: "Missing Context Analyzer",
      description: "Cross-references claims with trusted databases to flag omitted facts, manipulated statistics, or truncated quotes.",
      color: "border-truth text-truth"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-truth" />,
      title: "Media Bias Meter",
      description: "Evaluates the political slant, neutrality, and sensationalism of the publisher to provide a balanced credibility score.",
      color: "border-truth text-truth"
    },
    {
      icon: <Fingerprint className="w-6 h-6 text-truth" />,
      title: "Synthetic Content Detection",
      description: "Scans text, audio, and images for AI-generated artifacts to combat the spread of deepfakes.",
      color: "border-false text-false"
    }
  ];

  return (
    <section className="relative py-32 bg-layer-1 border-t border-layer-3 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-editorial text-foreground">Advanced <br/>Detection Logic</h2>
          </FadeUp>
          <FadeUp delay={0.2} className="max-w-md">
            <p className="text-sm text-muted-foreground font-mono leading-relaxed">
              Our explainable AI doesn't hide behind a black box. It exposes exactly what criteria triggered a low credibility score.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <FadeUp key={i} delay={i * 0.1} className="h-full">
              <div className="group relative h-full bg-layer-2/30 border border-layer-3 p-8 hover:bg-layer-2 transition-colors duration-300">
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${cap.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="w-12 h-12 bg-layer-1 border border-layer-3 flex items-center justify-center mb-6">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-sans text-foreground mb-4">{cap.title}</h3>
                <p className="text-sm text-muted-foreground font-mono leading-relaxed">{cap.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export function ScanningLens({ active = true, className = "" }: { active?: boolean; className?: string }) {
  return (
    <div className={`relative overflow-hidden border border-layer-3 bg-layer-1/50 backdrop-blur-sm ${className}`}>
      {/* Target Crosshairs */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-truth"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-truth"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-truth"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-truth"></div>

      {/* Scanning Line */}
      {active && (
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-truth shadow-[0_0_15px_2px_rgba(var(--color-truth),0.5)] z-10"
          animate={{
            top: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      )}
      
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, var(--color-layer-3) 1px, transparent 1px), linear-gradient(to bottom, var(--color-layer-3) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
    </div>
  );
}

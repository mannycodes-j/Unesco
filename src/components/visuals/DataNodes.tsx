"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function DataNodes() {
  const [nodes, setNodes] = useState<{ x: number; y: number; active: boolean; id: number }[]>([]);

  useEffect(() => {
    // Generate random nodes
    const newNodes = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      active: Math.random() > 0.7,
    }));
    setNodes(newNodes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Draw connections */}
        {nodes.map((node, i) => {
          const target = nodes[(i + 1) % nodes.length];
          if (node.active && target.active) {
            return (
              <motion.line
                key={`line-${i}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="var(--color-truth)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            );
          }
          return null;
        })}
      </svg>
      
      {/* Draw nodes */}
      {nodes.map((node) => (
        <motion.div
          key={`node-${node.id}`}
          className={`absolute w-1.5 h-1.5 rounded-full ${node.active ? 'bg-truth shadow-[0_0_8px_rgba(var(--color-truth),0.8)]' : 'bg-layer-3'}`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={node.active ? {
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          } : {}}
          transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

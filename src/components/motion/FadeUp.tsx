"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: number;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  yOffset = 40,
}: FadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}

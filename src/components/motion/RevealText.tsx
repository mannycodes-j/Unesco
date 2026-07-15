"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RevealText({ text, className = "", delay = 0 }: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Split text into words, then characters
  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${char}-${charIndex}`}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: "50%", filter: "blur(4px)" },
                visible: {
                  opacity: 1,
                  y: "0%",
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: delay + wordIndex * 0.05 + charIndex * 0.02,
                  },
                },
              }}
              initial="hidden"
              animate={controls}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}

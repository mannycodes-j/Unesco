"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Crosshair } from 'lucide-react';
import { MagneticElement } from '../motion/MagneticElement';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
          isScrolled ? 'bg-layer-1/80 backdrop-blur-md border-layer-3 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group z-50">
            <div className="relative flex items-center justify-center w-8 h-8">
              <Crosshair className="text-truth w-full h-full group-hover:rotate-180 transition-transform duration-700 ease-in-out" />
              <div className="absolute inset-0 bg-truth/20 blur-md rounded-full group-hover:bg-truth/40 transition-colors duration-500"></div>
            </div>
            <span className="font-editorial text-2xl tracking-wide text-foreground">
              TruthLens<span className="text-truth font-mono text-lg ml-1 opacity-80">_AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 border-r border-layer-3 pr-8">
              <Link href="/#capabilities" className="text-xs text-muted-foreground hover:text-truth transition-colors font-mono tracking-widest uppercase relative group">
                Capabilities
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-truth group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/#ecosystem" className="text-xs text-muted-foreground hover:text-truth transition-colors font-mono tracking-widest uppercase relative group">
                Ecosystem
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-truth group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/#trust" className="text-xs text-muted-foreground hover:text-truth transition-colors font-mono tracking-widest uppercase relative group">
                Trust
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-truth group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="/dashboard" className="text-xs text-foreground hover:text-truth transition-colors font-mono tracking-widest uppercase">
                Dashboard
              </Link>
              <MagneticElement strength={15}>
                <Link href="/#try-now" className="relative group inline-block overflow-hidden">
                  <span className="relative inline-flex items-center justify-center gap-2 border border-truth bg-truth/10 px-6 py-2 text-truth font-mono text-xs uppercase tracking-widest group-hover:text-layer-1 transition-colors duration-300 z-10">
                    <span className="w-1.5 h-1.5 bg-truth rounded-full animate-pulse group-hover:bg-layer-1"></span>
                    Launch Bot
                  </span>
                  <div className="absolute inset-0 bg-truth translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                </Link>
              </MagneticElement>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-layer-1 flex flex-col items-center justify-center gap-8"
          >
            <Link href="#capabilities" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-editorial text-foreground hover:text-truth transition-colors">
              Capabilities
            </Link>
            <Link href="#ecosystem" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-editorial text-foreground hover:text-truth transition-colors">
              Ecosystem
            </Link>
            <Link href="#trust" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-editorial text-foreground hover:text-truth transition-colors">
              Trust & Evidence
            </Link>
            <Link href="#try-now" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 border border-truth px-8 py-4 text-truth font-mono hover:bg-truth hover:text-layer-1 transition-colors">
              Try WhatsApp Bot
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

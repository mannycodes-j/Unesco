"use client";

import { motion } from "framer-motion";
import { Check, CheckCheck, User, MessageCircle } from "lucide-react";

export function WhatsAppMock({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-[300px] h-[600px] bg-layer-2 border border-layer-3 rounded-3xl overflow-hidden flex flex-col shadow-2xl ${className}`}>
      {/* Header */}
      <div className="bg-layer-3/50 backdrop-blur-md px-4 py-3 flex items-center gap-3 border-b border-layer-3">
        <div className="w-10 h-10 rounded-full bg-truth/20 flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-truth" />
        </div>
        <div>
          <h4 className="font-sans font-medium text-foreground text-sm">TruthLens Bot</h4>
          <p className="text-xs text-truth font-mono">Online</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-foreground) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
        
        {/* User Message */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-end"
        >
          <div className="bg-truth/20 border border-truth/30 text-foreground text-sm p-3 rounded-2xl rounded-tr-sm max-w-[85%]">
            <p className="mb-1">Forwarded message: "BREAKING: Secret government plot exposed..."</p>
            <div className="text-[10px] text-muted-foreground text-right flex items-center justify-end gap-1">
              10:42 AM <CheckCheck className="w-3 h-3 text-truth" />
            </div>
          </div>
        </motion.div>

        {/* Bot Typing */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="flex justify-start"
        >
          <div className="bg-layer-3 border border-layer-3 text-foreground text-sm p-3 rounded-2xl rounded-tl-sm max-w-[85%] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-truth rounded-full animate-bounce"></span>
            <span className="w-1.5 h-1.5 bg-truth rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-1.5 h-1.5 bg-truth rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </motion.div>

        {/* Bot Response */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="flex justify-start"
        >
          <div className="bg-layer-3 border border-layer-3 text-foreground text-sm p-3 rounded-2xl rounded-tl-sm max-w-[90%]">
            <div className="flex items-center gap-2 mb-2 text-manipulation font-mono text-xs uppercase">
              <span className="w-2 h-2 rounded-full bg-manipulation"></span> Highly Suspicious
            </div>
            <p className="mb-2 leading-relaxed">This claim uses strong emotional language and lacks credible sources.</p>
            <div className="bg-layer-1 border border-layer-3 rounded-xl p-3 mt-3">
              <p className="text-xs font-mono text-muted-foreground mb-1">TRUTHLENS REPORT</p>
              <p className="text-xs text-foreground mb-2">Detailed breakdown of missing context and bias found in this article.</p>
              <button className="text-truth text-xs font-medium w-full text-center py-2 border border-truth/30 rounded-lg bg-truth/10">View Full Analysis</button>
            </div>
            <div className="text-[10px] text-muted-foreground text-right mt-1">10:43 AM</div>
          </div>
        </motion.div>
      </div>

      {/* Input Area */}
      <div className="bg-layer-3/30 p-3 border-t border-layer-3 flex gap-2">
        <div className="flex-1 bg-layer-3 border border-layer-3 rounded-full px-4 py-2 flex items-center">
          <span className="text-sm text-muted-foreground">Message...</span>
        </div>
      </div>
    </div>
  );
}

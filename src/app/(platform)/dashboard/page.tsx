"use client";

import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, AlertTriangle, Fingerprint, EyeOff, BarChart3, Clock, CheckCircle2, ChevronRight, Activity } from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-12">
      
      {/* Header / Identity Bar */}
      <FadeUp>
        <div className="relative overflow-hidden border border-layer-3 bg-layer-2/40 backdrop-blur-xl p-8 rounded-sm group">
          <div className="absolute inset-0 bg-gradient-to-r from-truth/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-truth/5 blur-3xl rounded-full"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="relative flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-truth animate-pulse relative z-10"></span>
                  <span className="w-4 h-4 rounded-full bg-truth/30 absolute animate-ping"></span>
                </div>
                <span className="text-[10px] text-truth font-mono uppercase tracking-widest flex items-center gap-2">
                  System Online <span className="opacity-50">|</span> Node Active
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-editorial text-foreground tracking-tight">Welcome back, <span className="text-truth font-sans italic tracking-normal">Alex.</span></h1>
              <p className="text-muted-foreground font-sans mt-3 max-w-xl text-sm leading-relaxed">
                Your neural network nodes are currently active. You have submitted <span className="text-foreground font-mono">34</span> pieces of media for decryption this week.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Link href="/verification" className="group/btn relative inline-flex items-center justify-center px-8 py-4 font-mono text-sm tracking-widest text-layer-1 bg-truth overflow-hidden">
                <span className="relative z-10 flex items-center gap-3 font-semibold">
                  <span className="w-1.5 h-1.5 bg-layer-1 group-hover/btn:animate-ping"></span>
                  NEW DECRYPTION
                </span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </Link>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Metrics Grid */}
      <FadeUp delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="bg-layer-2/40 backdrop-blur-md p-6 relative group overflow-hidden border border-layer-3 hover:border-truth/40 transition-colors duration-500 rounded-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-truth/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-truth opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6 text-truth">
                <Zap className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,170,0.5)]" />
                <span className="text-[10px] font-mono tracking-widest uppercase">Reputation</span>
              </div>
              <div className="text-4xl font-mono text-foreground mb-1 tracking-tight">1,240 <span className="text-sm text-truth/70 uppercase">XP</span></div>
              <p className="text-xs text-muted-foreground font-mono">Level 4 Analyst</p>
              
              <div className="mt-5 h-1 w-full bg-layer-3 relative overflow-hidden rounded-full">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-truth shadow-[0_0_10px_rgba(0,255,170,0.5)]"
                ></motion.div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-layer-2/40 backdrop-blur-md p-6 relative group overflow-hidden border border-layer-3 hover:border-truth/40 transition-colors duration-500 rounded-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-truth/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-truth opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6 text-muted-foreground group-hover:text-truth transition-colors duration-500">
                <TrendingUp className="w-5 h-5" />
                <span className="text-[10px] font-mono tracking-widest uppercase">Active Streak</span>
              </div>
              <div className="flex items-baseline gap-2">
                <div className="text-4xl font-mono text-foreground mb-1 tracking-tight">7</div>
                <div className="text-sm font-mono text-muted-foreground uppercase">Days</div>
              </div>
              <p className="text-xs text-truth font-mono mt-1 flex items-center gap-1">
                <Activity className="w-3 h-3" /> Optimum consistency
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-layer-2/40 backdrop-blur-md p-6 relative group overflow-hidden border border-layer-3 hover:border-truth/40 transition-colors duration-500 rounded-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-truth/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-truth opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6 text-muted-foreground group-hover:text-truth transition-colors duration-500">
                <Shield className="w-5 h-5" />
                <span className="text-[10px] font-mono tracking-widest uppercase">Nodes Processed</span>
              </div>
              <div className="text-4xl font-mono text-foreground mb-1 tracking-tight">34</div>
              <p className="text-xs text-muted-foreground font-mono mt-1 flex items-center gap-2">
                <span className="text-truth bg-truth/10 px-1.5 py-0.5 rounded-sm">+3</span> within 48 hours
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-layer-2/40 backdrop-blur-md p-6 relative group overflow-hidden border border-layer-3 hover:border-truth/40 transition-colors duration-500 rounded-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-truth/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-truth opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6 text-muted-foreground group-hover:text-truth transition-colors duration-500">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-[10px] font-mono tracking-widest uppercase">Training</span>
              </div>
              <div className="text-4xl font-mono text-foreground mb-1 tracking-tight">12<span className="text-lg text-muted-foreground">/20</span></div>
              <p className="text-xs text-muted-foreground font-mono mt-1">Module completion</p>
            </div>
          </div>

        </div>
      </FadeUp>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Verification Stream (Terminal Style) */}
        <div className="lg:col-span-2 space-y-4">
          <FadeUp delay={0.2}>
            <div className="flex items-center justify-between border-b border-layer-3 pb-3 mb-5">
              <h2 className="text-sm font-mono text-foreground uppercase tracking-widest flex items-center gap-2">
                <Activity className="w-4 h-4 text-truth" />
                Recent Decryptions
              </h2>
              <span className="text-xs font-mono text-truth animate-pulse bg-truth/10 px-2 py-1">LIVE FEED //</span>
            </div>

            <div className="border border-layer-3 bg-layer-2/20 backdrop-blur-sm rounded-sm overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-layer-3 text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-layer-2/60">
                <div className="col-span-12 md:col-span-6">Subject Media</div>
                <div className="col-span-6 md:col-span-3 text-center">Verdict</div>
                <div className="col-span-6 md:col-span-3 text-right">Timestamp</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-layer-3/50">
                {[
                  { 
                    text: "Viral video of 'robot dog' attacking crowd", 
                    status: "Manipulated", 
                    color: "text-manipulation bg-manipulation/10 border-manipulation/30",
                    glow: "group-hover:shadow-[0_0_15px_rgba(255,51,102,0.15)]",
                    icon: <AlertTriangle className="w-3 h-3"/>,
                    time: "2h ago" 
                  },
                  { 
                    text: "New climate change policy draft leaked", 
                    status: "Verified True", 
                    color: "text-truth bg-truth/10 border-truth/30",
                    glow: "group-hover:shadow-[0_0_15px_rgba(0,255,170,0.15)]",
                    icon: <CheckCircle2 className="w-3 h-3"/>,
                    time: "1d ago" 
                  },
                  { 
                    text: "Free iPhones giveaway link on WhatsApp", 
                    status: "Fabricated", 
                    color: "text-false bg-false/10 border-false/30",
                    glow: "group-hover:shadow-[0_0_15px_rgba(255,170,0,0.15)]",
                    icon: <EyeOff className="w-3 h-3"/>,
                    time: "3d ago" 
                  },
                  { 
                    text: "Audio snippet of political figure admitting bribe", 
                    status: "Synthetic Audio", 
                    color: "text-false bg-false/10 border-false/30",
                    glow: "group-hover:shadow-[0_0_15px_rgba(255,170,0,0.15)]",
                    icon: <Fingerprint className="w-3 h-3"/>,
                    time: "5d ago" 
                  },
                ].map((item, i) => (
                  <Link href="/verification?id=mock-result" key={i} className={`grid grid-cols-12 gap-4 p-4 items-center hover:bg-layer-2/80 transition-all duration-300 group relative ${item.glow}`}>
                    {/* Subtle left border on hover */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-truth opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="col-span-12 md:col-span-6 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-sm bg-layer-3 flex items-center justify-center flex-shrink-0 group-hover:bg-layer-1 transition-colors">
                        <span className="font-mono text-xs text-muted-foreground group-hover:text-truth transition-colors">{i+1}</span>
                      </div>
                      <p className="text-sm font-sans text-foreground truncate group-hover:text-truth transition-colors duration-300">{item.text}</p>
                    </div>
                    
                    <div className="col-span-6 md:col-span-3 flex justify-center">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono border rounded-sm transition-colors ${item.color}`}>
                        {item.icon}
                        {item.status}
                      </div>
                    </div>
                    
                    <div className="col-span-6 md:col-span-3 text-right text-xs text-muted-foreground font-mono flex items-center justify-end gap-2 group-hover:text-foreground transition-colors">
                      <Clock className="w-3 h-3 opacity-50" />
                      {item.time}
                      <ChevronRight className="w-4 h-4 text-truth opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="p-4 border-t border-layer-3 bg-layer-2/40 flex justify-center">
                <button className="text-[10px] font-mono text-muted-foreground hover:text-truth uppercase tracking-widest transition-colors flex items-center gap-2">
                  View All History <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Action Panel */}
        <div className="space-y-6">
          <FadeUp delay={0.3}>
            <div className="border border-layer-3 bg-layer-2/40 backdrop-blur-md p-6 rounded-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-truth/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-mono text-sm uppercase tracking-widest text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-truth"></span>
                    Mission Objectives
                  </h3>
                  <BarChart3 className="w-4 h-4 text-truth drop-shadow-[0_0_5px_rgba(0,255,170,0.5)]" />
                </div>
                
                <div className="space-y-3">
                  {[
                    { title: "Verify a news article", xp: "+50 XP", done: true },
                    { title: "Complete 'Spotting Fake AI Images'", xp: "+100 XP", done: false },
                    { title: "Share a verified report with a friend", xp: "+20 XP", done: false },
                  ].map((task, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 border rounded-sm transition-colors duration-300 ${task.done ? 'border-truth/30 bg-truth/5' : 'border-layer-3 bg-layer-1 hover:border-truth/30 hover:bg-layer-2'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${task.done ? 'border-truth bg-truth/20 text-truth' : 'border-muted-foreground'}`}>
                          {task.done && <div className="w-2 h-2 bg-truth shadow-[0_0_5px_rgba(0,255,170,0.8)]"></div>}
                        </div>
                        <span className={`text-sm ${task.done ? 'text-muted-foreground line-through decoration-muted-foreground/50' : 'text-foreground font-medium'}`}>
                          {task.title}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono tracking-wider ${task.done ? 'text-truth/70' : 'text-truth'}`}>{task.xp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="border border-truth/30 bg-layer-1 relative overflow-hidden group rounded-sm p-6 cursor-pointer">
              {/* Background scanline effect */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="w-full h-px bg-truth/50 absolute top-0 -translate-y-full group-hover:animate-scanline drop-shadow-[0_0_5px_rgba(0,255,170,0.8)]"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-truth/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-start">
                <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-truth/10 border border-truth/20 text-truth text-[10px] font-mono uppercase tracking-widest mb-4">
                  <Zap className="w-3 h-3" /> Premium
                </div>
                <h3 className="font-editorial text-2xl text-foreground mb-2 group-hover:text-truth transition-colors duration-300">Upgrade your lens.</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">Access premium bias detection features, deepfake audio analysis, and higher daily submission limits.</p>
                <div className="text-xs font-mono text-truth uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  View Upgrades <TrendingUp className="w-3 h-3" />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

      </div>
    </div>
  );
}

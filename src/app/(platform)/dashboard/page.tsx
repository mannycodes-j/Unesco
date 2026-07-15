"use client";

import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, AlertTriangle, Fingerprint, EyeOff, BarChart3, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-12">
      
      {/* Header / Identity Bar */}
      <FadeUp>
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-layer-3 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-truth animate-pulse"></span>
              <span className="text-[10px] text-truth font-mono uppercase tracking-widest">System Online</span>
            </div>
            <h1 className="text-4xl font-editorial text-foreground">Welcome back, Alex.</h1>
            <p className="text-muted-foreground font-sans mt-2 max-w-xl">
              Your neural network nodes are currently active. You have submitted 34 pieces of media for decryption this week.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link href="/verification" className="group relative inline-flex items-center justify-center px-6 py-3 font-mono text-sm tracking-widest text-layer-1 bg-truth overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-layer-1"></span>
                NEW DECRYPTION
              </span>
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </Link>
          </div>
        </div>
      </FadeUp>

      {/* Metrics Grid */}
      <FadeUp delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-layer-3 border border-layer-3">
          
          <div className="bg-layer-2/50 p-6 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-truth opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start mb-4 text-truth">
              <Zap className="w-5 h-5" />
              <span className="text-[10px] font-mono tracking-widest uppercase">Reputation</span>
            </div>
            <div className="text-3xl font-mono text-foreground mb-1">1,240 <span className="text-sm text-muted-foreground">XP</span></div>
            <p className="text-xs text-muted-foreground font-mono">Level 4 Analyst</p>
            <div className="mt-4 h-1 w-full bg-layer-3 relative">
              <div className="absolute top-0 left-0 h-full bg-truth w-[65%]"></div>
            </div>
          </div>

          <div className="bg-layer-2/50 p-6 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-truth opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start mb-4 text-muted-foreground">
              <TrendingUp className="w-5 h-5" />
              <span className="text-[10px] font-mono tracking-widest uppercase">Active Streak</span>
            </div>
            <div className="text-3xl font-mono text-foreground mb-1">7 Days</div>
            <p className="text-xs text-muted-foreground font-mono text-truth">Optimum consistency</p>
          </div>

          <div className="bg-layer-2/50 p-6 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-truth opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start mb-4 text-muted-foreground">
              <Shield className="w-5 h-5" />
              <span className="text-[10px] font-mono tracking-widest uppercase">Nodes Processed</span>
            </div>
            <div className="text-3xl font-mono text-foreground mb-1">34</div>
            <p className="text-xs text-muted-foreground font-mono">+3 within 48 hours</p>
          </div>

          <div className="bg-layer-2/50 p-6 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-truth opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start mb-4 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-[10px] font-mono tracking-widest uppercase">Training</span>
            </div>
            <div className="text-3xl font-mono text-foreground mb-1">12/20</div>
            <p className="text-xs text-muted-foreground font-mono">Module completion</p>
          </div>

        </div>
      </FadeUp>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Verification Stream (Terminal Style) */}
        <div className="lg:col-span-2 space-y-4">
          <FadeUp delay={0.2}>
            <div className="flex items-center justify-between border-b border-layer-3 pb-2 mb-4">
              <h2 className="text-sm font-mono text-foreground uppercase tracking-widest">Recent Decryptions</h2>
              <span className="text-xs font-mono text-muted-foreground">Live Feed //</span>
            </div>

            <div className="border border-layer-3 bg-layer-2/30">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-layer-3 text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-layer-2/50">
                <div className="col-span-6">Subject Media</div>
                <div className="col-span-3 text-center">Verdict</div>
                <div className="col-span-3 text-right">Timestamp</div>
              </div>

              {/* Rows */}
              {[
                { 
                  text: "Viral video of 'robot dog' attacking crowd", 
                  status: "Manipulated", 
                  color: "text-manipulation bg-manipulation/10 border-manipulation/30",
                  icon: <AlertTriangle className="w-3 h-3"/>,
                  time: "2h ago" 
                },
                { 
                  text: "New climate change policy draft leaked", 
                  status: "Verified True", 
                  color: "text-truth bg-truth/10 border-truth/30",
                  icon: <CheckCircle2 className="w-3 h-3"/>,
                  time: "1d ago" 
                },
                { 
                  text: "Free iPhones giveaway link on WhatsApp", 
                  status: "Fabricated", 
                  color: "text-false bg-false/10 border-false/30",
                  icon: <EyeOff className="w-3 h-3"/>,
                  time: "3d ago" 
                },
                { 
                  text: "Audio snippet of political figure admitting bribe", 
                  status: "Synthetic Audio", 
                  color: "text-false bg-false/10 border-false/30",
                  icon: <Fingerprint className="w-3 h-3"/>,
                  time: "5d ago" 
                },
              ].map((item, i) => (
                <Link href="/verification?id=mock-result" key={i} className="grid grid-cols-12 gap-4 p-4 border-b border-layer-3 last:border-0 items-center hover:bg-layer-2 transition-colors group">
                  <div className="col-span-12 md:col-span-6">
                    <p className="text-sm font-sans text-foreground truncate group-hover:text-truth transition-colors">{item.text}</p>
                  </div>
                  <div className="col-span-6 md:col-span-3 flex justify-center">
                    <div className={`inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-mono border ${item.color}`}>
                      {item.icon}
                      {item.status}
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-3 text-right text-xs text-muted-foreground font-mono flex items-center justify-end gap-2">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </div>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Action Panel */}
        <div className="space-y-6">
          <FadeUp delay={0.3}>
            <div className="border border-layer-3 bg-layer-2/30 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground">Mission Objectives</h3>
                <BarChart3 className="w-4 h-4 text-truth" />
              </div>
              
              <div className="space-y-4">
                {[
                  { title: "Verify a news article", xp: "+50 XP", done: true },
                  { title: "Complete 'Spotting Fake AI Images'", xp: "+100 XP", done: false },
                  { title: "Share a verified report with a friend", xp: "+20 XP", done: false },
                ].map((task, i) => (
                  <div key={i} className={`flex items-center justify-between p-3 border ${task.done ? 'border-truth/30 bg-truth/5' : 'border-layer-3 bg-layer-1'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 border flex items-center justify-center ${task.done ? 'border-truth bg-truth/20 text-truth' : 'border-muted-foreground'}`}>
                        {task.done && <div className="w-2 h-2 bg-truth"></div>}
                      </div>
                      <span className={`text-sm ${task.done ? 'text-muted-foreground line-through' : 'text-foreground font-medium'}`}>
                        {task.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground tracking-wider">{task.xp}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="border border-layer-3 bg-[url('/grid.svg')] bg-cover relative overflow-hidden group">
              <div className="absolute inset-0 bg-truth/5 group-hover:bg-truth/10 transition-colors"></div>
              <div className="p-6 relative z-10">
                <h3 className="font-editorial text-2xl text-foreground mb-2">Upgrade your lens.</h3>
                <p className="text-sm text-muted-foreground mb-6">Access premium bias detection features and higher daily submission limits.</p>
                <button className="text-xs font-mono text-truth uppercase tracking-widest hover:underline flex items-center gap-2">
                  View Plans <TrendingUp className="w-3 h-3" />
                </button>
              </div>
            </div>
          </FadeUp>
        </div>

      </div>
    </div>
  );
}

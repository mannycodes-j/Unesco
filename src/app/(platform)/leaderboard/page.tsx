"use client";

import { useState } from "react";
import { Trophy, Crown, Network, Crosshair, Cpu } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { MagneticElement } from "@/components/motion/MagneticElement";

const individualData = [
  { rank: 1, id: "NODE-77A", name: "Sarah Jenkins", xp: 14200, level: 12, isCurrentUser: false },
  { rank: 2, id: "NODE-42B", name: "David Chen", xp: 13850, level: 11, isCurrentUser: false },
  { rank: 3, id: "NODE-19X", name: "Amara Singh", xp: 12400, level: 10, isCurrentUser: false },
  { rank: 4, id: "NODE-88C", name: "Marcus Johnson", xp: 11200, level: 9, isCurrentUser: false },
  { rank: 5, id: "NODE-33Y", name: "Elena Rodriguez", xp: 10550, level: 9, isCurrentUser: false },
  { rank: 42, id: "NODE-99Z", name: "Alex (You)", xp: 1240, level: 4, isCurrentUser: true },
];

const organizationData = [
  { rank: 1, id: "ORG-001", name: "Lincoln Node Cluster", xp: 450200, members: 124, status: "Optimal" },
  { rank: 2, id: "ORG-002", name: "Westside Grid", xp: 380400, members: 98, status: "Optimal" },
  { rank: 3, id: "ORG-003", name: "Oakridge Hub", xp: 345000, members: 112, status: "Degraded" },
  { rank: 4, id: "ORG-004", name: "Springfield Nexus", xp: 290100, members: 87, status: "Optimal" },
  { rank: 5, id: "ORG-005", name: "Central Tech Node", xp: 275000, members: 76, status: "Optimal" },
];

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("individual");

  return (
    <div className="space-y-12 pb-12">
      
      {/* Header */}
      <FadeUp className="flex flex-col md:flex-row md:items-end justify-between border-b border-layer-3 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-truth animate-pulse"></span>
            <span className="text-[10px] text-truth font-mono uppercase tracking-widest">Global Network Active</span>
          </div>
          <h1 className="text-4xl font-editorial text-foreground">Node Rankings</h1>
          <p className="text-muted-foreground font-sans mt-2 max-w-xl">
            Monitor the top-performing analysts and organizational clusters across the TruthLens detection grid.
          </p>
        </div>
        
        <div className="mt-6 md:mt-0 flex flex-col items-end border border-layer-3 bg-layer-2/30 p-4">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1 flex items-center gap-2"><Crosshair className="w-3 h-3 text-truth"/> Your Current Status</span>
          <div className="text-2xl font-mono text-foreground flex items-end gap-2">
            <span className="text-truth text-lg">#</span>42 <span className="text-xs text-muted-foreground mb-1">Global Index</span>
          </div>
        </div>
      </FadeUp>

      {/* Segmented Control */}
      <FadeUp delay={0.1}>
        <div className="inline-flex border border-layer-3 bg-layer-2/50 font-mono text-xs uppercase tracking-widest p-1">
          <button
            onClick={() => setActiveTab("individual")}
            className={`flex items-center gap-2 px-8 py-3 transition-colors ${activeTab === 'individual' ? 'bg-layer-3 text-truth' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Cpu className="w-4 h-4" /> Individual Operators
          </button>
          <button
            onClick={() => setActiveTab("organization")}
            className={`flex items-center gap-2 px-8 py-3 transition-colors ${activeTab === 'organization' ? 'bg-layer-3 text-truth' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Network className="w-4 h-4" /> Organization Clusters
          </button>
        </div>
      </FadeUp>

      {/* Data Table */}
      <FadeUp delay={0.2} className="border border-layer-3 bg-layer-1">
        
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-layer-3 text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-layer-2/50">
          <div className="col-span-1 text-center">Rank</div>
          <div className="col-span-3 hidden md:block">Node ID</div>
          <div className="col-span-6 md:col-span-5">{activeTab === 'individual' ? 'Operator Name' : 'Cluster Name'}</div>
          <div className="col-span-5 md:col-span-3 text-right">Reputation (XP)</div>
        </div>

        {/* Table Body - Individual */}
        {activeTab === "individual" && (
          <div className="divide-y divide-layer-3">
            {individualData.map((user) => (
              <div 
                key={user.rank} 
                className={`grid grid-cols-12 gap-4 p-4 items-center transition-colors group ${
                  user.isCurrentUser 
                    ? "bg-truth/5 border-l-2 border-l-truth" 
                    : "hover:bg-layer-2/50 border-l-2 border-l-transparent"
                }`}
              >
                <div className="col-span-1 flex justify-center">
                  {user.rank === 1 ? <Crown className="w-4 h-4 text-truth" /> : 
                   user.rank <= 3 ? <Trophy className="w-4 h-4 text-foreground" /> : 
                   <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground">{user.rank}</span>}
                </div>
                
                <div className="col-span-3 hidden md:flex items-center">
                  <span className={`px-2 py-1 text-[10px] font-mono border ${user.isCurrentUser ? 'border-truth/30 text-truth bg-truth/10' : 'border-layer-4 text-muted-foreground'}`}>
                    {user.id}
                  </span>
                </div>
                
                <div className="col-span-6 md:col-span-5 flex items-center gap-4">
                  <div>
                    <p className={`font-sans text-sm ${user.isCurrentUser ? "text-truth font-semibold" : "text-foreground"}`}>
                      {user.name}
                    </p>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase mt-0.5">Lvl {user.level} Analyst</p>
                  </div>
                </div>
                
                <div className="col-span-5 md:col-span-3 text-right flex flex-col items-end justify-center">
                  <p className={`font-mono text-sm ${user.isCurrentUser ? "text-truth" : "text-foreground"}`}>
                    {user.xp.toLocaleString()} <span className="text-[10px] text-muted-foreground">XP</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Table Body - Organization */}
        {activeTab === "organization" && (
          <div className="divide-y divide-layer-3">
            {organizationData.map((org) => (
              <div 
                key={org.rank} 
                className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-layer-2/50 transition-colors group border-l-2 border-l-transparent"
              >
                <div className="col-span-1 flex justify-center">
                  {org.rank === 1 ? <Crown className="w-4 h-4 text-truth" /> : 
                   org.rank <= 3 ? <Trophy className="w-4 h-4 text-foreground" /> : 
                   <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground">{org.rank}</span>}
                </div>
                
                <div className="col-span-3 hidden md:flex items-center">
                  <span className="px-2 py-1 text-[10px] font-mono border border-layer-4 text-muted-foreground">
                    {org.id}
                  </span>
                </div>
                
                <div className="col-span-6 md:col-span-5 flex items-center gap-4">
                  <div>
                    <p className="font-sans text-sm text-foreground">
                      {org.name}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase">{org.members} Active Nodes</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${org.status === 'Optimal' ? 'bg-truth' : 'bg-manipulation'}`}></span>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-5 md:col-span-3 text-right flex flex-col items-end justify-center">
                  <p className="font-mono text-sm text-foreground">
                    {org.xp.toLocaleString()} <span className="text-[10px] text-muted-foreground">XP</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </FadeUp>
      
    </div>
  );
}

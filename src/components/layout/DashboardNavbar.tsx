"use client";

import { Search, Bell, User, Menu } from "lucide-react";

export function DashboardNavbar() {
  return (
    <header className="h-[72px] border-b border-layer-3 bg-layer-1/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-30">
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden text-muted-foreground hover:text-foreground transition-colors">
          <Menu className="w-5 h-5" />
        </button>
        <div className="relative w-full max-w-md hidden md:block group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-truth transition-colors" />
          <input 
            type="text" 
            placeholder="Search verifications, users, or reports..." 
            className="w-full bg-layer-2/50 border border-layer-3 rounded-full py-2 pl-10 pr-4 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-truth/50 focus:bg-layer-2 transition-all duration-300"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative text-muted-foreground hover:text-truth transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-truth rounded-full border border-layer-1 animate-pulse"></span>
        </button>
        <div className="h-8 w-px bg-layer-3 mx-2 hidden md:block"></div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-layer-3 flex items-center justify-center group-hover:bg-truth/10 transition-colors border border-layer-3 group-hover:border-truth/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-truth/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <User className="w-4 h-4 text-muted-foreground group-hover:text-truth transition-colors relative z-10" />
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-xs font-medium text-foreground group-hover:text-truth transition-colors">Alex M.</span>
            <span className="text-[10px] font-mono text-truth uppercase tracking-widest opacity-80">Level 4 Analyst</span>
          </div>
        </div>
      </div>
    </header>
  );
}

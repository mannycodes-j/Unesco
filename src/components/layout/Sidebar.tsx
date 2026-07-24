"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, LayoutDashboard, Search, BookOpen, Trophy, Settings, Crosshair } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Verify Link",
    href: "/verification",
    icon: Search,
  },
  {
    title: "Learning Hub",
    href: "/learning",
    icon: BookOpen,
  },
  {
    title: "Leaderboard",
    href: "/leaderboard",
    icon: Trophy,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 border-r border-layer-3 bg-layer-1/80 backdrop-blur-md hidden md:flex flex-col h-full relative z-20">
      <div className="absolute inset-0 bg-gradient-to-b from-truth/5 to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="flex-1 py-6 px-0 relative z-10 flex flex-col">
        <div className="px-6 mb-8 mt-2">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-6 h-6">
              <Crosshair className="text-truth w-full h-full group-hover:rotate-180 transition-transform duration-700 ease-in-out" />
              <div className="absolute inset-0 bg-truth/20 blur-md rounded-full group-hover:bg-truth/40 transition-colors duration-500"></div>
            </div>
            <span className="font-editorial text-xl tracking-wide text-foreground">
              TruthLens<span className="text-truth font-mono text-sm ml-1 opacity-80">_AI</span>
            </span>
          </Link>
        </div>
        <div className="space-y-2">
          <p className="px-6 text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-truth opacity-50"></span>
            System Navigation
          </p>
          
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 text-sm transition-all duration-500 font-mono tracking-wider group relative overflow-hidden",
                  isActive
                    ? "text-truth bg-truth/5 border-l-2 border-truth"
                    : "text-muted-foreground hover:bg-layer-2/80 hover:text-foreground border-l-2 border-transparent"
                )}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-truth/10 to-transparent pointer-events-none"></div>
                )}
                <item.icon className={cn("h-4 w-4 relative z-10 transition-transform duration-300 group-hover:scale-110", isActive ? "text-truth" : "text-muted-foreground")} />
                <span className="relative z-10">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
      
      <div className="p-4 border-t border-layer-3 mt-auto bg-layer-2/30 relative z-10 backdrop-blur-sm">
        <div className="flex items-center gap-3 px-2 py-3 text-sm font-mono text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-truth animate-pulse" />
          <div className="flex flex-col">
            <span className="text-xs text-foreground">Secure Connection</span>
            <span className="text-[10px] text-truth opacity-80">Encrypted</span>
          </div>
        </div>
        <Link
          href="#"
          className="mt-2 flex items-center gap-3 px-2 py-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
        >
          <Settings className="h-4 w-4 group-hover:rotate-90 transition-transform duration-500" />
          System Settings
        </Link>
      </div>
    </aside>
  );
}

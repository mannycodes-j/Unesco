"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, LayoutDashboard, Search, BookOpen, Trophy, Settings } from "lucide-react";
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
    <aside className="w-64 flex-shrink-0 border-r border-layer-3 bg-layer-1 hidden md:flex flex-col h-[calc(100vh-4rem)] sticky top-16">
      <div className="flex-1 py-8 px-0">
        <div className="space-y-2">
          <p className="px-6 text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-6">
            // SYSTEM_NAVIGATION
          </p>
          
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 text-sm transition-all duration-300 font-mono tracking-wider",
                  isActive
                    ? "text-truth bg-layer-2/30 border-l-2 border-truth"
                    : "text-muted-foreground hover:bg-layer-2/50 hover:text-foreground border-l-2 border-transparent"
                )}
              >
                <item.icon className={cn("h-4 w-4", isActive ? "text-truth" : "text-muted-foreground")} />
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      
      <div className="p-4 border-t border-layer-3 mt-auto bg-layer-2/20">
        <div className="flex items-center gap-3 px-2 py-3 text-sm font-mono text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-truth" />
          <div className="flex flex-col">
            <span className="text-xs text-foreground">Secure Connection</span>
            <span className="text-[10px]">Encrypted</span>
          </div>
        </div>
        <Link
          href="#"
          className="mt-2 flex items-center gap-3 px-2 py-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <Settings className="h-4 w-4" />
          System Settings
        </Link>
      </div>
    </aside>
  );
}

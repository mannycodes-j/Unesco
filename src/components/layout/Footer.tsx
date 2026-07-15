import Link from "next/link";
import { ShieldAlert, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <ShieldAlert className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">TruthLens AI</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-[280px]">
              Empowering users to verify information with explainable AI. Combat misinformation before you share.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Social</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">Dashboard</Link></li>
              <li><Link href="/verification" className="text-sm text-muted-foreground hover:text-foreground">Verify Content</Link></li>
              <li><Link href="/learning" className="text-sm text-muted-foreground hover:text-foreground">Learning Hub</Link></li>
              <li><Link href="/leaderboard" className="text-sm text-muted-foreground hover:text-foreground">Leaderboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">WhatsApp Bot Guide</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">MIL Resources</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Fact-Checking Guide</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TruthLens AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

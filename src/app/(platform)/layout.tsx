import { Sidebar } from "@/components/layout/Sidebar";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen pt-[88px] overflow-hidden bg-layer-1 text-foreground relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative z-10 custom-scrollbar">
        <div className="container mx-auto p-4 md:p-8 lg:p-10 max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}

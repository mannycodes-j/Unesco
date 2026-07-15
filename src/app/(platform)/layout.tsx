import { Sidebar } from "@/components/layout/Sidebar";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 overflow-hidden h-[calc(100vh-4rem)] bg-layer-1 text-foreground">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-4 md:p-6 lg:p-8 max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}

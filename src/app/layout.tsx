import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const editorialFont = Playfair_Display({
  variable: "--font-editorial",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "TruthLens AI | Verify Information with AI",
  description: "Verify information before sharing it with explainable AI. Combat misinformation with TruthLens AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="en"
        suppressHydrationWarning
        className={`dark ${geistSans.variable} ${geistMono.variable} ${editorialFont.variable} antialiased`}
        style={{ colorScheme: "dark" }}
      >
        <body className="bg-background text-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            <SmoothScroll>
              <Navbar />
              {children}
            </SmoothScroll>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

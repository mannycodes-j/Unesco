"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Shield, Link as LinkIcon, FileText, Image as ImageIcon, Mic, Loader2, Crosshair } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { FadeUp } from "../motion/FadeUp";
import { MagneticElement } from "../motion/MagneticElement";

const textSchema = z.object({
  content: z.string().min(10, {
    message: "Insufficient data length. Minimum 10 characters required.",
  }),
});

const linkSchema = z.object({
  url: z.string().url({ message: "Invalid URL syntax detected." }),
});

export function VerifyForm() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("text");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const textForm = useForm<z.infer<typeof textSchema>>({
    resolver: zodResolver(textSchema),
    defaultValues: { content: "" },
  });

  const linkForm = useForm<z.infer<typeof linkSchema>>({
    resolver: zodResolver(linkSchema),
    defaultValues: { url: "" },
  });

  const onSubmit = async (data: any) => {
    setIsAnalyzing(true);
    // Simulate AI analysis delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Decryption Sequence Complete");
    setIsAnalyzing(false);
    
    // Redirect to verification dashboard
    router.push("/verification?id=mock-result");
  };

  return (
    <FadeUp delay={0.2} className="w-full max-w-4xl mx-auto">
      <div className="border border-layer-3 bg-layer-2/30 backdrop-blur-md relative overflow-hidden group">
        
        {/* Ambient Corner Accent */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-truth opacity-20 group-hover:opacity-50 transition-opacity"></div>

        {/* Tab Header */}
        <div className="flex border-b border-layer-3 bg-layer-2/50 font-mono text-xs uppercase tracking-widest overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveTab("text")}
            className={`flex items-center gap-2 px-6 py-4 transition-colors shrink-0 ${activeTab === 'text' ? 'text-truth border-b-2 border-truth bg-truth/5' : 'text-muted-foreground hover:bg-layer-2 hover:text-foreground'}`}
          >
            <FileText className="w-4 h-4" /> Raw Text
          </button>
          <button
            onClick={() => setActiveTab("link")}
            className={`flex items-center gap-2 px-6 py-4 transition-colors shrink-0 ${activeTab === 'link' ? 'text-truth border-b-2 border-truth bg-truth/5' : 'text-muted-foreground hover:bg-layer-2 hover:text-foreground'}`}
          >
            <LinkIcon className="w-4 h-4" /> URL Target
          </button>
          <button
            onClick={() => setActiveTab("media")}
            className={`flex items-center gap-2 px-6 py-4 transition-colors shrink-0 ${activeTab === 'media' ? 'text-truth border-b-2 border-truth bg-truth/5' : 'text-muted-foreground hover:bg-layer-2 hover:text-foreground'}`}
          >
            <ImageIcon className="w-4 h-4" /> Media / Audio
          </button>
        </div>

        {/* Form Area */}
        <div className="p-8 relative">
          
          {isAnalyzing && (
            <div className="absolute inset-0 bg-layer-1/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center border border-truth/30">
              <Crosshair className="w-12 h-12 text-truth animate-[spin_3s_linear_infinite] mb-4" />
              <p className="font-mono text-sm text-truth tracking-widest uppercase animate-pulse">Initializing Decryption Protocol...</p>
              <div className="w-48 h-1 bg-layer-3 mt-4 overflow-hidden">
                <div className="h-full bg-truth animate-[pulse_1s_ease-in-out_infinite] w-full origin-left scale-x-0 transition-transform duration-1000" style={{ transform: "scaleX(1)"}}></div>
              </div>
            </div>
          )}

          {activeTab === "text" && (
            <form onSubmit={textForm.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2 relative">
                <div className="absolute top-4 left-4 w-2 h-2 bg-truth/50 rounded-full animate-pulse"></div>
                <textarea
                  id="content"
                  placeholder="Paste the suspicious article, claim, or social media post here for structural analysis..."
                  className="w-full min-h-[200px] resize-none bg-layer-1/50 text-foreground font-mono text-sm p-6 pl-10 border border-layer-3 focus:outline-none focus:border-truth/50 transition-colors placeholder:text-muted-foreground/50"
                  {...textForm.register("content")}
                />
                {textForm.formState.errors.content && (
                  <p className="text-xs font-mono text-false bg-false/10 px-3 py-1 inline-block border border-false/30">{textForm.formState.errors.content.message}</p>
                )}
              </div>
              <div className="flex justify-end">
                <MagneticElement strength={10}>
                  <button type="submit" disabled={isAnalyzing} className="group relative inline-flex items-center justify-center px-8 py-4 font-mono text-xs tracking-widest text-layer-1 bg-truth overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed">
                    <span className="relative z-10 flex items-center gap-2">
                      <Shield className="w-4 h-4" /> Initiate Scan
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  </button>
                </MagneticElement>
              </div>
            </form>
          )}

          {activeTab === "link" && (
            <form onSubmit={linkForm.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2 relative">
                <LinkIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  id="url"
                  placeholder="https://suspicious-domain.com/article"
                  className="w-full h-16 bg-layer-1/50 text-foreground font-mono text-sm pl-16 pr-6 border border-layer-3 focus:outline-none focus:border-truth/50 transition-colors placeholder:text-muted-foreground/50"
                  {...linkForm.register("url")}
                />
                {linkForm.formState.errors.url && (
                  <p className="text-xs font-mono text-false bg-false/10 px-3 py-1 inline-block border border-false/30">{linkForm.formState.errors.url.message}</p>
                )}
              </div>
              <div className="flex justify-end">
                <MagneticElement strength={10}>
                  <button type="submit" disabled={isAnalyzing} className="group relative inline-flex items-center justify-center px-8 py-4 font-mono text-xs tracking-widest text-layer-1 bg-truth overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed">
                    <span className="relative z-10 flex items-center gap-2">
                      <Shield className="w-4 h-4" /> Extract & Analyze Target
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  </button>
                </MagneticElement>
              </div>
            </form>
          )}

          {activeTab === "media" && (
            <div 
              className="border border-dashed border-layer-3 bg-layer-1/30 hover:bg-layer-2/50 transition-colors p-16 flex flex-col items-center justify-center text-center gap-6 cursor-pointer group" 
              onClick={() => { toast.info("Deepfake detection active. Simulating upload..."); onSubmit({}); }}
            >
              <div className="flex gap-6 relative">
                <div className="absolute inset-0 bg-truth/10 blur-xl group-hover:bg-truth/20 transition-colors duration-500 rounded-full scale-150"></div>
                <div className="p-4 bg-layer-2 border border-layer-3 rounded-full text-foreground relative z-10 group-hover:border-truth/50 transition-colors">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <div className="p-4 bg-layer-2 border border-layer-3 rounded-full text-foreground relative z-10 group-hover:border-truth/50 transition-colors">
                  <Mic className="w-8 h-8" />
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-lg font-editorial text-foreground mb-2">Drop media for synthetic detection</p>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Supported Formats: SVG, PNG, JPG, MP3, WAV (Max 10MB)</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </FadeUp>
  );
}

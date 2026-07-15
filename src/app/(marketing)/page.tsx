import { VerifyForm } from "@/components/features/VerifyForm";
import { Shield, MessageCircle, TrendingUp, Lightbulb, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-medium border rounded-full text-primary border-primary/20 bg-primary/5">
            <span className="flex w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            UNESCO 2026 MIL Theme
          </div>
          
          <h1 className="max-w-4xl mx-auto mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Verify before you share with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Explainable AI</span>
          </h1>
          
          <p className="max-w-2xl mx-auto mb-12 text-lg sm:text-xl text-muted-foreground">
            Stop the spread of misinformation. TruthLens AI analyzes claims, detects emotional manipulation, and explains the truth behind the headlines.
          </p>

          <div className="mb-20">
            <VerifyForm />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">More than just True or False</h2>
            <p className="text-lg text-muted-foreground">
              We don't just tell you what's fake. We teach you how to spot it yourself through detailed analysis and gamified learning.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Explainable AI Reports",
                desc: "Get a detailed breakdown of bias, missing context, and source credibility instead of a simple verdict."
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Bot",
                desc: "Access fact-checking where you already chat. Forward voice notes, images, or texts directly to our bot."
              },
              {
                icon: TrendingUp,
                title: "Media Bias Meter",
                desc: "Identify political leanings, emotional manipulation, and sensationalism in real-time."
              },
              {
                icon: Lightbulb,
                title: "Learning Hub",
                desc: "Build critical thinking skills with interactive MIL lessons, quizzes, and deepfake awareness guides."
              },
              {
                icon: CheckCircle2,
                title: "Daily Challenges",
                desc: "Test your skills with daily misinformation cases. Earn XP, badges, and climb the leaderboard."
              },
            ].map((feature, i) => (
              <div key={i} className="p-8 transition-colors border rounded-2xl bg-card/50 hover:bg-card border-border/50">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

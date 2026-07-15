import { Scene01Hero } from "@/components/scenes/Scene01Hero";
import { Scene02Problem } from "@/components/scenes/Scene02Problem";
import { Scene03Transformation } from "@/components/scenes/Scene03Transformation";
import { Scene04Journey } from "@/components/scenes/Scene04Journey";
import { Scene05Ecosystem } from "@/components/scenes/Scene05Ecosystem";
import { Scene06Capabilities } from "@/components/scenes/Scene06Capabilities";
import { Scene07Trust } from "@/components/scenes/Scene07Trust";
import { Scene08Closing } from "@/components/scenes/Scene08Closing";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-layer-1">
      <Scene01Hero />
      <Scene02Problem />
      <Scene03Transformation />
      <Scene04Journey />
      <Scene05Ecosystem />
      <Scene06Capabilities />
      <Scene07Trust />
      <Scene08Closing />
    </main>
  );
}

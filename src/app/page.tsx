import { Hero } from "@/components/hero";
import { MarketOpportunity } from "@/components/market-opportunity";
import { USPDifferentiators } from "@/components/usp-differentiators";
import { GrowthBusinessModel } from "@/components/growth-business-model";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MarketOpportunity />
      <USPDifferentiators />
      <GrowthBusinessModel />
    </main>
  );
}

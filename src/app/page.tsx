import { Hero } from "@/components/hero";
import { ProductEcosystem } from "@/components/product-ecosystem";
import { WhyGrowifyAI } from "@/components/why-growifyai";
import { HowGrowifyAIWorks } from "@/components/how-growifyai-works";
import { IndustryUseCases } from "@/components/industry-use-cases";
import { SocialProof } from "@/components/social-proof";
import { PricingSection } from "@/components/pricing-section";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Hero />
      <ProductEcosystem />
      <WhyGrowifyAI />
      <HowGrowifyAIWorks />
      <IndustryUseCases />
      <SocialProof />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

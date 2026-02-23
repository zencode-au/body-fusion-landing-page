import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AiFeedbackSection } from "@/components/sections/ai-feedback-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AiFeedbackSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}

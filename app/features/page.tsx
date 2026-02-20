import { FeaturesAnalytics } from "@/components/features/features-analytics";
import { FeaturesGrid } from "@/components/features/features-grid";
import { FeaturesHero } from "@/components/features/features-hero";
import { FeaturesProgramming } from "@/components/features/features-programming";
import { SiteFooter } from "@/components/layout/site-footer";
import { TopNav } from "@/components/marketing/top-nav";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav active="features" />
      <FeaturesHero />
      <main>
        <FeaturesProgramming />
        <FeaturesAnalytics />
        <FeaturesGrid />
      </main>
      <SiteFooter />
    </div>
  );
}

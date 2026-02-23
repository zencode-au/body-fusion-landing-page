import { FeaturesHero } from "@/components/features/features-hero";
import { FeaturesShowcases } from "@/components/features/features-showcases";
import { SiteFooter } from "@/components/layout/site-footer";
import { TopNav } from "@/components/marketing/top-nav";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav active="features" />
      <FeaturesHero />
      <main>
        <FeaturesShowcases />
      </main>
      <SiteFooter />
    </div>
  );
}

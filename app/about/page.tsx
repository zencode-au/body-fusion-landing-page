import { AboutCta } from "@/components/about/about-cta";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutValues } from "@/components/about/about-values";
import { SiteFooter } from "@/components/layout/site-footer";
import { TopNav } from "@/components/marketing/top-nav";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav active="about" />
      <main>
        <AboutHero />
        <AboutValues />
        <AboutStory />
        <AboutCta />
      </main>
      <SiteFooter />
    </div>
  );
}

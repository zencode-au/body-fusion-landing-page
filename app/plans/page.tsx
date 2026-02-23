import { PageContainer } from "@/components/layout/page-container";
import { SiteFooter } from "@/components/layout/site-footer";
import { PlansHeader } from "@/components/plans/plans-header";
import { PricingSection } from "@/components/plans/pricing-section";
import { SecuritySection } from "@/components/plans/security-section";

export default function PlansPage() {
  return (
    <div className="relative isolate min-h-screen bg-slate-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[34rem] bg-[linear-gradient(to_right,#e7ebf2_1px,transparent_1px),linear-gradient(to_bottom,#e7ebf2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="relative z-10">
        <PlansHeader />
        <main className="pb-24 pt-32">
          <PageContainer>
            <PricingSection />
            <SecuritySection />
          </PageContainer>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

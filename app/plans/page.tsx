import { PageContainer } from "@/components/layout/page-container";
import { SiteFooter } from "@/components/layout/site-footer";
import { PlansHeader } from "@/components/plans/plans-header";
import { PricingSection } from "@/components/plans/pricing-section";
import { SecuritySection } from "@/components/plans/security-section";

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PlansHeader />
      <main className="pb-24 pt-32">
        <PageContainer>
          <PricingSection />
          <SecuritySection />
        </PageContainer>
      </main>
      <SiteFooter />
    </div>
  );
}

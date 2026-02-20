import { PageContainer } from "@/components/layout/page-container";
import { Logo } from "@/components/ui/logo";

export function SiteFooter() {
  return (
    <footer id="about" className="border-t border-slate-200 bg-white py-10">
      <PageContainer className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <Logo full={false} />
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Body Fusion. All rights reserved.
        </p>
      </PageContainer>
    </footer>
  );
}

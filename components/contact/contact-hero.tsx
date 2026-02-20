import { PageContainer } from "@/components/layout/page-container";

export function ContactHero() {
  return (
    <header className="relative bg-slate-100/70 pb-16 pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,165,0,0.18),#f8fafc_65%)]" />
      <PageContainer>
        <div className="max-w-3xl space-y-4">
          <p className="inline-flex rounded-full bg-[#FFA500]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#cc8400]">
            Contact Us
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
            Talk to the Body Fusion team.
          </h1>
          <p className="text-xl leading-relaxed text-slate-500">
            Whether you need onboarding help, sales guidance, or technical
            support, our team is here to help you move faster.
          </p>
        </div>
      </PageContainer>
    </header>
  );
}

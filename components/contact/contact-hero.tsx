import { PageContainer } from "@/components/layout/page-container";

export function ContactHero() {
  return (
    <header className="relative isolate overflow-hidden bg-slate-100/70 pb-16 pt-32">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e7ebf2_1px,transparent_1px),linear-gradient(to_bottom,#e7ebf2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <PageContainer className="relative z-10">
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

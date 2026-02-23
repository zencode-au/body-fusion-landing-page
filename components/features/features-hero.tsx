import { PageContainer } from "@/components/layout/page-container";

export function FeaturesHero() {
  return (
    <header className="relative isolate overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e7ebf2_1px,transparent_1px),linear-gradient(to_bottom,#e7ebf2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <PageContainer className="relative z-10">
        <div className="relative max-w-3xl">
          <span className="animate-fade-up inline-flex rounded-full border border-[#FFA500]/30 bg-[#FFA500]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#cc8400]">
            Product Features
          </span>
          <h1 className="animate-fade-up delay-100 mb-6 mt-4 text-4xl font-extrabold text-slate-950 md:text-6xl">
            Built for elite coaching.
          </h1>
          <p className="animate-fade-up delay-200 text-xl leading-relaxed text-slate-600">
            Every tool in Body Fusion is designed to save you time and deliver
            better results for your clients. From programming to feedback,
            we&apos;ve got you covered.
          </p>
        </div>
      </PageContainer>
    </header>
  );
}

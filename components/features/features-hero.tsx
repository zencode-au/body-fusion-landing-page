import { PageContainer } from "@/components/layout/page-container";

export function FeaturesHero() {
  return (
    <header className="bg-slate-100/70 pb-16 pt-32">
      <PageContainer>
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-extrabold text-slate-950 md:text-6xl">
            Built for elite coaching.
          </h1>
          <p className="text-xl leading-relaxed text-slate-500">
            Every tool in Body Fusion is designed to save you time and deliver
            better results for your clients. From programming to feedback,
            we&apos;ve got you covered.
          </p>
        </div>
      </PageContainer>
    </header>
  );
}

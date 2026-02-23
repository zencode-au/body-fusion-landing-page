import { PageContainer } from "@/components/layout/page-container";

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 md:pb-32 md:pt-48">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e7ebf2_1px,transparent_1px),linear-gradient(to_bottom,#e7ebf2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <PageContainer className="relative z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
            We built Body Fusion because <br />
            <span className="text-[#FFA500]">
              coaching apps were slowing us down.
            </span>
          </h1>
          <p className="text-xl leading-relaxed text-slate-500">
            After years of using clunky tools, disconnected workflows, and
            generic fitness platforms, we decided to build something better for
            real coaches and real client delivery.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

import { PageContainer } from "@/components/layout/page-container";

export function AboutCta() {
  return (
    <section className="bg-[#FFA500] py-24 text-center">
      <PageContainer>
        <h2 className="mb-8 text-3xl font-bold text-slate-950 md:text-5xl">
          <span className="block">Ready to take your coaching career</span>
          <span className="block">to the next level?</span>
        </h2>
        <a
          href="https://bodyfusion.app/#/coach/coachSignUpWebRoute"
          className="inline-flex h-16 items-center rounded-full bg-black px-12 text-lg font-bold text-white shadow-2xl transition-colors hover:bg-black/90"
        >
          Get Started Now
          <span className="ml-2">→</span>
        </a>
      </PageContainer>
    </section>
  );
}

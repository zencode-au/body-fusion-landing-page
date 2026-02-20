import { PageContainer } from "@/components/layout/page-container";

export function AboutHero() {
  return (
    <section className="relative pb-20 pt-32 md:pb-32 md:pt-48">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,165,0,0.18),#f8fafc_70%)]" />
      <PageContainer className="text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
            Coaching is an art. <br />
            <span className="text-[#FFA500]">We provide the canvas.</span>
          </h1>
          <p className="text-xl leading-relaxed text-slate-500">
            We believe that technology should amplify the human connection in
            coaching, not replace it. Our software is designed to give coaches
            more time to do what they do best: coach.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

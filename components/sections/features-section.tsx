import { PageContainer } from "@/components/layout/page-container";

const features = [
  {
    title: "Smart plans",
    description:
      "Adaptive workout and nutrition recommendations based on each user's progress.",
  },
  {
    title: "Coach visibility",
    description:
      "A clear dashboard to monitor performance, streaks, and weekly adherence.",
  },
  {
    title: "Cross-platform",
    description:
      "A seamless experience across mobile and web so users can stay consistent anywhere.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Built for lasting results
          </h2>
          <p className="mt-4 text-slate-600">
            A modular product experience designed for coaches and clients.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

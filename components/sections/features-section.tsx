import { PageContainer } from "@/components/layout/page-container";

const features = [
  {
    title: "Client Profiles",
    description:
      "Keep goals, readiness, preferences, and check-ins organized in one place.",
  },
  {
    title: "Workout Builder",
    description:
      "Create and reuse periodized plans quickly with a clean coaching workflow.",
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor strength trends and adherence with practical dashboards clients understand.",
  },
  {
    title: "Habit Visibility",
    description:
      "Track consistency and weekly behavior patterns that impact transformation outcomes.",
  },
  {
    title: "In-App Chat",
    description:
      "Message clients in real time, share updates fast, and keep all conversations in one place.",
  },
  {
    title: "Modern Delivery",
    description:
      "Offer a seamless web and mobile experience that feels premium to every client.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-24">
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-up text-sm font-bold uppercase tracking-[0.16em] text-[#FFA500]">
            Built for Coaches
          </span>
          <h2 className="animate-fade-up delay-100 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Everything needed to run a high-performance coaching business
          </h2>
          <p className="animate-fade-up delay-200 mt-4 text-slate-600">
            Designed for speed, consistency, and measurable outcomes.
          </p>
          <a
            href="/features"
            className="animate-fade-up delay-300 mt-6 inline-flex rounded-full bg-[#FFA500] px-6 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#e69500]"
          >
            View All Features
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              style={{ animationDelay: `${index * 70 + 120}ms` }}
              className="animate-fade-up rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFA500]/40 hover:shadow-xl"
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

import { PageContainer } from "@/components/layout/page-container";

const cards = [
  {
    title: "In-app Messaging",
    description: "Two-way chat with exercise feedback video uploads.",
  },
  {
    title: "Secure Vault",
    description: "Compliant storage for health forms and sensitive data.",
  },
  {
    title: "White-label App",
    description: "Your branding, your logo, your coaching experience.",
  },
  {
    title: "Leaderboards",
    description: "Foster community with gamified client challenges.",
  },
  {
    title: "Team Management",
    description: "Add multiple coaches and manage staff permissions.",
  },
  {
    title: "Automations",
    description: "Automatic check-ins and session reminders.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">
            Everything else you need.
          </h2>
          <p className="text-slate-500">
            We&apos;ve thought of every detail to make your business run like
            clockwork.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-[#FFA500]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-[#FFA500]">
                <span className="h-5 w-5 rounded-full bg-slate-400/60" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

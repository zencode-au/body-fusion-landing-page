import { PageContainer } from "@/components/layout/page-container";

type ValueItem = {
  title: string;
  description: string;
  icon: "target" | "heart" | "award";
};

const values: ValueItem[] = [
  {
    title: "Precision Tools",
    description:
      "We build with the granularity that elite performance requires. No generic templates, only high-fidelity programming.",
    icon: "target",
  },
  {
    title: "Human Centric",
    description:
      "Software should fade into the background. Our focus is on the feedback loop between coach and athlete.",
    icon: "heart",
  },
  {
    title: "Uncompromising Quality",
    description:
      "From our exercise library to our support, we set the standard for what coaching software should be.",
    icon: "award",
  },
];

function ValueIcon({ icon }: { icon: ValueItem["icon"] }) {
  if (icon === "target") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 text-[#FFA500]"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "heart") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 text-[#FFA500]"
        aria-hidden="true"
      >
        <path
          d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-[#FFA500]"
      aria-hidden="true"
    >
      <path
        d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="8"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function AboutValues() {
  return (
    <section className="bg-slate-100/70 py-24">
      <PageContainer>
        <div className="grid gap-12 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFA500]/20">
                <ValueIcon icon={value.icon} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                {value.title}
              </h3>
              <p className="text-slate-500">{value.description}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

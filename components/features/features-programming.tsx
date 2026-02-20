import { PageContainer } from "@/components/layout/page-container";

const programmingItems = [
  "Custom exercise creation with video uploads",
  "Superset and circuit grouping with one click",
  "Automatic volume and intensity tracking",
  "Template library for rapid deployment",
];

function CheckBadge() {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFA500] text-slate-950">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m9 12 2 2 4-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function FeaturesProgramming() {
  return (
    <section className="border-b border-slate-200 py-24">
      <PageContainer>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#FFA500]/10 px-3 py-1 text-sm font-bold text-[#cc8400]">
              Programming
            </p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              The world&apos;s fastest workout builder.
            </h2>
            <p className="text-lg text-slate-500">
              Our drag-and-drop interface allows you to create complex
              periodized programs in minutes. Access a library of 1,500+
              exercises with high-definition video demonstrations.
            </p>
            <ul className="space-y-4">
              {programmingItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckBadge />
                  <span className="font-medium text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="group relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FFA500]/20 blur-3xl opacity-20 transition-opacity group-hover:opacity-30" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <p className="font-bold text-slate-900">
                  Workout: Strength Phase 1
                </p>
                <button
                  type="button"
                  className="rounded-md border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  Save Template
                </button>
              </div>
              <div className="space-y-3">
                <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="mb-1 font-bold text-slate-900">Back Squat</h3>
                  <p className="text-xs text-slate-500">
                    4 Sets × 8 Reps @ 75% 1RM
                  </p>
                </article>
                <article className="rounded-xl border border-[#FFA500]/50 bg-[#FFA500]/5 p-4">
                  <div className="flex justify-between">
                    <h3 className="mb-1 font-bold text-slate-900">
                      Romanian Deadlift
                    </h3>
                    <p className="rounded bg-[#FFA500] px-2 py-0.5 text-[10px] font-bold text-slate-950">
                      SUPERSET A
                    </p>
                  </div>
                  <p className="text-xs text-slate-500">
                    3 Sets × 12 Reps • 2:01 Tempo
                  </p>
                </article>
                <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="mb-1 font-bold text-slate-900">
                    Bulgarian Split Squat
                  </h3>
                  <p className="text-xs text-slate-500">
                    3 Sets × 10 Reps Per Leg
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

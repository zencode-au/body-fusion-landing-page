import { PageContainer } from "@/components/layout/page-container";

const bars = [35, 48, 56, 64, 72, 78, 88];

const microFeatures = [
  {
    title: "Goal Setting",
    description: "Set and track specific metric targets.",
  },
  {
    title: "Real-time Logs",
    description: "Live updates when clients train.",
  },
];

export function FeaturesAnalytics() {
  return (
    <section className="bg-slate-100/70 py-24">
      <PageContainer>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="order-2 relative group md:order-1">
            <div className="absolute inset-0 rounded-3xl bg-[#FFA500]/20 blur-3xl opacity-20 transition-opacity group-hover:opacity-30" />
            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">
                  Strength Analytics
                </h3>
                <p className="rounded bg-green-50 px-2 py-1 text-xs font-bold text-green-600">
                  +12.4% vs last month
                </p>
              </div>
              <div className="flex h-48 w-full items-end gap-2 px-4">
                {bars.map((height, index) => (
                  <div
                    key={height}
                    className="relative flex-1 rounded-t-lg bg-slate-200/60"
                    style={{ height: "100%" }}
                  >
                    <div
                      className="absolute bottom-0 left-0 right-0 rounded-t-lg bg-[#FFA500] transition-all duration-500"
                      style={{
                        height: `${height}%`,
                        transitionDelay: `${index * 55}ms`,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <article className="rounded-xl bg-slate-50 p-4">
                  <p className="mb-1 text-xs text-slate-500">Total Volume</p>
                  <p className="text-lg font-bold text-slate-900">42,500 kg</p>
                </article>
                <article className="rounded-xl bg-slate-50 p-4">
                  <p className="mb-1 text-xs text-slate-500">Compliance</p>
                  <p className="text-lg font-bold text-slate-900">94%</p>
                </article>
              </div>
            </div>
          </div>

          <div className="order-1 space-y-8 md:order-2">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#FFA500]/10 px-3 py-1 text-sm font-bold text-[#cc8400]">
              Tracking &amp; Data
            </p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              Decisions driven by data.
            </h2>
            <p className="text-lg text-slate-500">
              See exactly how your clients are progressing. Our analytics
              dashboard highlights plateaus, tracks PRs automatically, and
              visualizes adherence trends so you can adjust programs
              proactively.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {microFeatures.map((item) => (
                <article key={item.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                    <span className="h-5 w-5 rounded-full bg-[#FFA500]/30" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";

const aiCapabilities = [
  {
    title: "AI Feedback Review",
    description:
      "Analyze client check-ins and deliver a clear draft response in seconds.",
    badge: "AI",
  },
  {
    title: "Context-Aware Replies",
    description:
      "Uses goals, injuries, and recent sessions to suggest safer coaching language.",
    badge: "Smart",
  },
  {
    title: "Coach Final Approval",
    description:
      "You stay in control and can edit every message before it reaches the client.",
    badge: "Control",
  },
  {
    title: "Faster Turnaround",
    description:
      "Reduce reply delays and keep clients engaged with timely guidance.",
    badge: "Speed",
  },
];

export function AiFeedbackSection() {
  return (
    <section className="py-20 lg:py-24">
      <PageContainer>
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="animate-fade-up text-sm font-bold uppercase tracking-[0.16em] text-[#FFA500]">
              AI Advantage
            </span>
            <h2 className="animate-fade-up delay-100 mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Review Client Feedback With AI Before You Reply
            </h2>
            <p className="animate-fade-up delay-200 mx-auto mt-4 max-w-3xl text-slate-600 md:text-lg">
              Body Fusion helps coaches respond faster with AI-generated draft
              answers based on each client context, while keeping the coach in
              full control of the final message.
            </p>
          </div>

          <div className="animate-fade-up delay-300 relative mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-[#ececee] p-4 shadow-xl md:p-8">
            <div className="animate-pulse-glow pointer-events-none absolute -left-10 top-8 h-28 w-28 rounded-full bg-[#FFA500]/35 blur-3xl" />
            <div className="animate-float-soft pointer-events-none absolute -right-16 top-1/4 h-40 w-40 rounded-full bg-amber-300/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/60 p-4 backdrop-blur-sm md:p-6">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{ backgroundImage: "url('/assets/web-1.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100/95 via-slate-100/80 to-slate-200/70" />

              <div className="relative mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl transition-transform duration-500 hover:-translate-y-1">
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#FFA500]/30 bg-[#FFA500]/10 px-4 py-1.5 text-sm font-semibold text-[#cc8400]">
                  <span className="animate-pulse-glow h-2 w-2 rounded-full bg-[#FFA500]" />
                  AI Feedback Assistant
                </div>

                <div className="mt-5 text-center">
                  <div className="animate-float-soft relative mx-auto h-16 w-16">
                    <div className="animate-pulse-glow absolute inset-0 rounded-full bg-[#FFA500]/25 blur-md" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-amber-100 bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:rotate-3">
                      <Image
                        src="/assets/logo.svg"
                        alt="Body Fusion AI"
                        width={44}
                        height={44}
                        className="h-11 w-11 object-contain"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-xl font-bold text-slate-900">
                    Suggested Reply Ready
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Client asked about knee pain after split squats.
                  </p>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                  "Great update. Let&apos;s reduce depth this week, switch to
                  box squats, and monitor pain under 3/10. I&apos;ll review
                  again in two sessions."
                </div>

                <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-2">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src="https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=360&w=640"
                      alt="Client feedback video preview"
                      className="h-28 w-full object-cover"
                      width={640}
                      height={360}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900">
                        Watch video
                      </span>
                    </div>
                    <span className="absolute bottom-2 right-2 rounded bg-black/75 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                      00:47
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-transform hover:-translate-y-0.5"
                  >
                    Edit Draft
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded-lg bg-[#FFA500] px-3 py-2 text-xs font-semibold text-slate-900 transition-transform hover:-translate-y-0.5"
                  >
                    Approve & Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {aiCapabilities.map((item, index) => (
              <article
                key={item.title}
                style={{ animationDelay: `${index * 80 + 140}ms` }}
                className="animate-fade-up rounded-2xl border border-slate-200 bg-white p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-600">
                  {item.badge}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

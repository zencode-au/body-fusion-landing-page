import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";

const quickHighlights = [
  {
    id: "progress",
    title: "Progress Tracking",
    description:
      "Track metrics, trends, and compliance with charts coaches can action quickly.",
    accent: "from-[#fff3d6] to-white",
    badgeClass: "bg-[#FFA500]/12 text-[#cc8400]",
  },
  {
    id: "habits",
    title: "Habit Visibility",
    description:
      "Spot behavior patterns with a timeline of check-ins, photos, and daily actions.",
    accent: "from-sky-50 to-white",
    badgeClass: "bg-sky-100 text-sky-700",
  },
  {
    id: "delivery",
    title: "Modern Delivery",
    description:
      "Deliver a premium coaching experience across web and mobile in one workflow.",
    accent: "from-emerald-50 to-white",
    badgeClass: "bg-emerald-100 text-emerald-700",
  },
];

export function FeaturesShowcases() {
  return (
    <>
      <section
        id="builder"
        className="relative overflow-hidden border-b border-slate-200 py-20 lg:py-24"
      >
        <div className="animate-float-soft pointer-events-none absolute -right-20 top-1/2 h-56 w-56 rounded-full bg-[#FFA500]/15 blur-3xl" />
        <div className="animate-pulse-glow pointer-events-none absolute left-12 top-16 h-32 w-32 rounded-full bg-sky-200/35 blur-3xl" />
        <PageContainer className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5 lg:order-2">
            <span className="inline-flex rounded-full bg-[#FFA500]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#cc8400]">
              Workout Builder
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Build complete sessions with drag-and-drop speed
            </h2>
            <p className="text-slate-600 md:text-lg">
              Move exercises between days, apply supersets and set types, and
              preview workload before assigning the plan.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                Drag exercises from your library into each training day.
              </li>
              <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                Add drop sets, pyramid sets, supersets, and rest-pause in one
                click.
              </li>
              <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                Keep estimated duration and muscle-group balance visible as you
                build.
              </li>
            </ul>
          </div>

          <div className="group relative animate-fade-up lg:order-1">
            <div className="animate-pulse-glow absolute -left-10 top-1/2 h-24 w-24 rounded-full bg-[#FFA500]/35 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border-8 border-slate-200/60 bg-white p-5 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-900">
                  Create Workout
                </h3>
                <div className="flex gap-2 text-xs">
                  <button
                    type="button"
                    className="rounded-md border border-slate-300 px-3 py-1 text-slate-700"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-[#FFA500] px-3 py-1 font-semibold text-slate-900"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="grid gap-3 lg:grid-cols-[1fr_260px]">
                <div className="space-y-3">
                  <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-slate-600">
                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                      <span
                        key={day}
                        className={`rounded-md border px-2 py-2 ${
                          day === 2
                            ? "border-[#FFA500] bg-[#fff5df] text-[#cc8400]"
                            : "border-slate-200 bg-slate-50"
                        }`}
                      >
                        {day}
                      </span>
                    ))}
                  </div>

                  <div className="rounded-xl border border-dashed border-[#cc8400]/60 px-4 py-5 text-center text-sm text-[#a26700]">
                    Drop exercises
                  </div>

                  {[
                    "Goblet squat to bench",
                    "Barbell bench press",
                    "Pull-up",
                    "Leg press",
                  ].map((exercise, index) => (
                    <article
                      key={exercise}
                      className={`rounded-xl border px-3 py-2 ${
                        index === 0
                          ? "border-[#FFA500]/60 bg-[#fff8eb]"
                          : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <Image
                            src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=120"
                            alt="Exercise"
                            width={36}
                            height={36}
                            className="h-9 w-9 rounded-lg object-cover"
                          />
                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              {exercise}
                            </p>
                            <p className="text-xs text-slate-500">
                              Reps 12/10/8
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400">
                          ☰
                        </span>
                      </div>
                    </article>
                  ))}
                </div>

                <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="mb-3 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-lg bg-white p-2">
                      <p className="text-lg font-bold text-[#8b5d00]">10</p>
                      <p className="text-[10px] text-slate-500">exercises</p>
                    </div>
                    <div className="rounded-lg bg-white p-2">
                      <p className="text-lg font-bold text-[#8b5d00]">00:45</p>
                      <p className="text-[10px] text-slate-500">time</p>
                    </div>
                    <div className="rounded-lg bg-white p-2">
                      <p className="text-lg font-bold text-[#8b5d00]">3</p>
                      <p className="text-[10px] text-slate-500">muscles</p>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900">
                    Exercise Library
                  </h4>
                  <div className="mt-2 space-y-2">
                    {[
                      "Single Arm Bent Over Row",
                      "Seated Cable Row",
                      "Inverted Row",
                      "Kettlebell Row",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg bg-white px-3 py-2 text-xs"
                      >
                        <p className="font-semibold text-slate-900">{item}</p>
                        <p className="text-slate-500">Back</p>
                      </div>
                    ))}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        id="chat"
        className="relative overflow-hidden bg-gradient-to-b from-slate-100/80 to-[#eef7ff] py-20 lg:py-24"
      >
        <div className="animate-float-soft pointer-events-none absolute -left-24 top-1/3 h-56 w-56 rounded-full bg-[#FFA500]/12 blur-3xl" />
        <div className="animate-pulse-glow pointer-events-none absolute right-8 top-12 h-28 w-28 rounded-full bg-indigo-200/35 blur-3xl" />
        <PageContainer className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <span className="inline-flex rounded-full bg-[#FFA500]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#cc8400]">
              In-App Chat
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Keep coach-client communication in one workspace
            </h2>
            <p className="text-slate-600 md:text-lg">
              Chat one-to-one, broadcast updates to selected clients, and keep
              messages tied to the exact profile, tasks, and progress context.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <article className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Conversations
                </p>
                <p className="mt-1 text-lg font-bold text-slate-900">
                  1:1 + Broadcast
                </p>
              </article>
              <article className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Attachments
                </p>
                <p className="mt-1 text-lg font-bold text-slate-900">
                  Files + media
                </p>
              </article>
            </div>
          </div>

          <div className="group relative animate-fade-up">
            <div className="animate-float-soft absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#FFA500]/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border-8 border-slate-200/60 bg-white p-4 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
              <div className="mb-3 flex items-center justify-between rounded-xl bg-[#f3d28f] px-4 py-2">
                <p className="font-bold text-slate-900">Joanna Doe</p>
                <button
                  type="button"
                  className="rounded-md bg-[#FFA500] px-3 py-1 text-[11px] font-semibold text-slate-900"
                >
                  Broadcast
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-start">
                  <div className="max-w-[72%] rounded-xl bg-slate-100 px-3 py-2 text-sm text-slate-800">
                    Hey coach, I just updated my diet notes.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[72%] rounded-xl bg-[#f8e6be] px-3 py-2 text-sm text-slate-900">
                    Great. I&apos;ll review and send adjustments today.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[72%] rounded-xl bg-slate-100 px-3 py-2 text-sm text-slate-800">
                    Can you send this week&apos;s check-in to everyone?
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-semibold text-slate-900">
                    Broadcast message
                  </p>
                  <span className="text-xs text-slate-500">4 recipients</span>
                </div>
                <p className="rounded-lg bg-white px-3 py-2 text-sm text-slate-700">
                  Team update: send progress photos before Friday.
                </p>
                <div className="mt-2 flex justify-end">
                  <button
                    type="button"
                    className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        id="profiles"
        className="relative overflow-hidden py-20 lg:py-24"
      >
        <div className="animate-float-soft pointer-events-none absolute -right-16 top-14 h-40 w-40 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="animate-pulse-glow pointer-events-none absolute left-6 bottom-16 h-32 w-32 rounded-full bg-[#FFA500]/20 blur-3xl" />
        <PageContainer className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5 lg:order-2">
            <span className="inline-flex rounded-full bg-[#FFA500]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#cc8400]">
              Client Profiles
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Full client context in one profile view
            </h2>
            <p className="text-slate-600 md:text-lg">
              Keep personal details, injuries, metrics, and task history visible
              so every response is informed and consistent.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                Quick access to readiness, injuries, and recent notes.
              </li>
              <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                Track body metrics and progress deltas over time.
              </li>
              <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                Review upcoming tasks and completed feedback requests.
              </li>
            </ul>
          </div>

          <div className="group relative animate-fade-up lg:order-1">
            <div className="animate-pulse-glow absolute -left-8 top-16 h-24 w-24 rounded-full bg-[#FFA500]/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border-8 border-slate-200/60 bg-white p-4 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
              <div className="grid gap-3 lg:grid-cols-[220px_1fr]">
                <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-start gap-2">
                    <Image
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=120"
                      alt="Client"
                      width={54}
                      height={54}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-2xl font-black text-[#b77800]">
                        John Doe
                      </p>
                      <p className="text-xs text-slate-600">
                        Scarborough - Perth
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2 text-xs text-slate-700">
                    <p>
                      <span className="font-semibold text-slate-900">
                        Email:
                      </span>{" "}
                      johndoe@bodyfusion.app
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">
                        Phone:
                      </span>{" "}
                      +61 0123 456 890
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">
                        Client since:
                      </span>{" "}
                      01/01/1990
                    </p>
                  </div>
                  <div className="mt-4 space-y-2">
                    {[
                      "Leg injury last year",
                      "Surgery for knee reconstruction",
                      "Rehab started Sep 2025",
                    ].map((item) => (
                      <p
                        key={item}
                        className="rounded-lg bg-white px-2 py-2 text-xs text-slate-600"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </aside>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-slate-900">
                        Journey
                      </h3>
                      <span className="text-xs font-semibold text-slate-500">
                        30 May 2025
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-lg bg-white px-3 py-2">
                        <p className="text-sm font-semibold text-slate-900">
                          Body Fat: 21%
                        </p>
                        <p className="text-xs font-semibold text-emerald-600">
                          ↗ 3.46%
                        </p>
                      </div>
                      <div className="rounded-lg bg-white px-3 py-2">
                        <p className="text-sm font-semibold text-slate-900">
                          Weight: 74.2 kg
                        </p>
                        <p className="text-xs font-semibold text-rose-500">
                          ↘ 3.05kg
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {["BMI 25", "Chest 98 cm", "Waist 98 cm", "Hip 98 cm"].map(
                      (metric) => (
                        <div
                          key={metric}
                          className="rounded-xl border border-slate-200 bg-white px-3 py-3"
                        >
                          <p className="text-lg font-bold text-slate-900">
                            {metric}
                          </p>
                          <p className="text-xs text-rose-500">↘ 2.84%</p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="relative overflow-hidden border-t border-slate-200 py-20 lg:py-24">
        <div className="animate-pulse-glow pointer-events-none absolute right-10 top-10 h-36 w-36 rounded-full bg-[#FFA500]/15 blur-3xl" />
        <PageContainer className="relative">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              More core features for everyday coaching
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              The same workflows from your home page features, presented as
              focused modules.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {quickHighlights.map((feature, index) => (
              <article
                key={feature.id}
                id={feature.id}
                style={{ animationDelay: `${index * 70 + 100}ms` }}
                className={`animate-fade-up rounded-2xl border border-slate-200 bg-gradient-to-br ${feature.accent} p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${feature.badgeClass}`}
                >
                  {feature.title}
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
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
    </>
  );
}

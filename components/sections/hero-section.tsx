import { PageContainer } from "@/components/layout/page-container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="animate-grid-pan absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e7ebf2_1px,transparent_1px),linear-gradient(to_bottom,#e7ebf2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <PageContainer className="text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          <h1 className="animate-fade-up text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            Smarter Coaching <br className="hidden md:block" />
            <span className="relative">
              Starts Here
              <svg
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 -z-10 h-3 w-full text-[#FFA500]"
                aria-hidden="true"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  opacity="0.55"
                />
              </svg>
            </span>
          </h1>
          <p className="animate-fade-up delay-100 mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Manage every client profile, assign workouts in minutes, and keep
            progress visible between sessions. The all-in-one platform for
            modern personal trainers.
          </p>
          <div className="animate-fade-up delay-200 flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <a
              href="/signup"
              className="rounded-full bg-[#FFA500] px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-[#FFA500]/25 transition-transform hover:scale-105 hover:bg-[#e69500]"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              className="rounded-full border border-slate-300 bg-white/80 px-8 py-4 text-base font-medium text-slate-900 transition-transform hover:scale-105 hover:bg-white"
            >
              Explore Features
            </a>
          </div>
        </div>
        <div className="animate-fade-up delay-300 relative mx-auto mt-16 max-w-5xl">
          <div className="animate-pulse-glow absolute -left-10 top-1/2 h-24 w-24 rounded-full bg-[#FFA500]/45 blur-3xl" />
          <div className="animate-float-soft absolute -right-12 top-1/3 h-32 w-32 rounded-full bg-amber-300/45 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border-8 border-slate-200/60 bg-white/85 p-6 shadow-2xl backdrop-blur-sm md:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition-transform duration-300 hover:-translate-y-1">
                <p className="text-sm text-slate-500">Active Client</p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  John Doe
                </h3>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[75%] bg-[#FFA500]" />
                </div>
                <p className="mt-2 text-xs font-semibold text-slate-600">
                  Weekly Goal 75%
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition-transform duration-300 hover:-translate-y-1 md:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">
                    Workout Builder
                  </h3>
                  <button
                    type="button"
                    className="rounded-md border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    New Template
                  </button>
                </div>
                <ul className="space-y-2">
                  <li className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                    Hypertrophy Block A - Week 1
                  </li>
                  <li className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                    Core + Conditioning Day
                  </li>
                  <li className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                    Strength Rebuild Session
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

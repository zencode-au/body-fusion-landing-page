import { PageContainer } from "@/components/layout/page-container";
import { ClientDashboardPreview } from "@/components/sections/client-dashboard-preview";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e7ebf2_1px,transparent_1px),linear-gradient(to_bottom,#e7ebf2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
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
              href="https://bodyfusion.app/#/coach/coachSignUpWebRoute"
              className="rounded-full bg-[#FFA500] px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-[#FFA500]/25 transition-transform hover:scale-105 hover:bg-[#e69500]"
            >
              Start Free Plan
            </a>
            <a
              href="/features"
              className="rounded-full border border-slate-300 bg-white/80 px-8 py-4 text-base font-medium text-slate-900 transition-transform hover:scale-105 hover:bg-white"
            >
              View Features
            </a>
          </div>
        </div>
        <ClientDashboardPreview />
      </PageContainer>
    </section>
  );
}

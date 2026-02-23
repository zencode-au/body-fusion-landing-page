import { PageContainer } from "@/components/layout/page-container";
import Image from "next/image";

export function CtaSection() {
  return (
    <section
      id="plans"
      className="relative overflow-hidden bg-slate-950 py-20 text-slate-100 md:py-24"
    >
      <div className="animate-pulse-glow pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#FFA500]/25 blur-[120px]" />
      <PageContainer className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
        <div className="max-w-2xl">
          <span className="animate-fade-up mb-2 block text-sm font-bold uppercase tracking-[0.16em] text-[#FFA500]">
            Start Today
          </span>
          <h2 className="animate-fade-up delay-100 text-4xl font-bold leading-tight md:text-5xl">
            <span className="block">Ready to take your coaching career</span>
            <span className="block">to the next level?</span>
          </h2>
          <p className="animate-fade-up delay-200 mb-8 mt-5 max-w-lg text-lg text-slate-300">
            Manage every client profile, assign workouts in minutes, and keep
            progress visible between sessions.
          </p>
          <div className="animate-fade-up delay-300 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://coach.bodyfusion.app/#/coach/coachSignUpWebRoute"
              className="rounded-full bg-[#FFA500] px-8 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-[#e69500]"
            >
              Create Coach Account
            </a>
            {/* <StoreButtons /> */}
          </div>
        </div>

        <div className="hidden w-full max-w-sm md:block">
          <div className="animate-fade-up delay-400 animate-float-soft rotate-3 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition-transform duration-500 hover:rotate-0">
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/assets/body-fusion-logo.png"
                alt="Body Fusion icon"
                width={48}
                height={48}
                className="rounded-full bg-white p-2"
              />
              <div>
                <p className="font-bold text-white">Body Fusion Pro</p>
                <p className="text-sm text-white/60">Coach Edition</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <p className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white/90">
                AI reviews client feedback requests before you reply.
              </p>
              <p className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white/90">
                Approve or edit draft answers in one click.
              </p>
              <p className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white/90">
                Keep every conversation, session, and progress update in sync.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

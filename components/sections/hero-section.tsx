import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { StoreButtons } from "@/components/ui/store-buttons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-slate-50 py-16 lg:py-24">
      <PageContainer className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Fitness platform
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Your body transformation journey, unified in one app.
          </h1>
          <p className="max-w-xl text-lg text-slate-600">
            Body Fusion combines personalized plans, daily accountability, and
            modern coaching tools to help users stay consistent and hit
            measurable goals.
          </p>
          <StoreButtons />
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-blue-200/40 via-cyan-100/20 to-transparent blur-2xl" />
          <Image
            src="/assets/app-1.png"
            alt="Body Fusion mobile app screenshot"
            width={760}
            height={1080}
            className="mx-auto h-auto w-full max-w-sm rounded-[2rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-blue-100"
            priority
          />
        </div>
      </PageContainer>
    </section>
  );
}

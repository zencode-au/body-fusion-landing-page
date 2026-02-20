import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";

export function ShowcaseSection() {
  return (
    <section id="app" className="py-16 lg:py-24">
      <PageContainer className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Manage your coaching on web and mobile
          </h2>
          <p className="text-slate-600">
            Keep your clients, sessions, plans, and progress in sync with one
            unified dashboard.
          </p>
        </div>
        <Image
          src="/assets/web-1.png"
          alt="Body Fusion web app screenshot"
          width={1440}
          height={900}
          className="h-auto w-full rounded-2xl border border-slate-200 bg-white shadow-xl"
        />
      </PageContainer>
    </section>
  );
}
